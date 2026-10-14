/* Service worker Penyusun RPP Mendalam.
   Menyimpan berkas aplikasi supaya bisa dibuka tanpa internet.
   Ubah VERSION setiap kali Anda memperbarui index.html agar cache lama diganti. */
const VERSION = 'rpp-mendalam-v1';
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(VERSION)
      .then(cache => cache.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* Pustaka dan font dari CDN yang dipakai halaman (JSZip, pdf.js, Google Fonts). */
const CDN_HOSTS = ['cdnjs.cloudflare.com', 'fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;           // permintaan ke API Gemini (POST) tidak disentuh
  const url = new URL(req.url);

  // Halaman utama: coba jaringan dulu supaya pembaruan langsung terlihat, cadangan dari cache.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(VERSION).then(c => c.put('./index.html', copy));
          return res;
        })
        .catch(() => caches.match('./index.html').then(r => r || caches.match('./')))
    );
    return;
  }

  // Berkas milik sendiri dan pustaka CDN: pakai cache, perbarui di latar belakang.
  if (url.origin === self.location.origin || CDN_HOSTS.indexOf(url.hostname) > -1) {
    event.respondWith(
      caches.match(req).then(cached => {
        const fresh = fetch(req)
          .then(res => {
            if (res && (res.ok || res.type === 'opaque')) {
              const copy = res.clone();
              caches.open(VERSION).then(c => c.put(req, copy));
            }
            return res;
          })
          .catch(() => cached);
        return cached || fresh;
      })
    );
  }
});
