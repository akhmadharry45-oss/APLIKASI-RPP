# Memasang Penyusun RPP Mendalam di HP

Design by Akhmad Fitra Harry, S.Pd

Folder ini adalah aplikasi web yang bisa dipasang di layar utama HP (PWA).
Agar bisa dipasang, folder harus berada di alamat internet berawalan https.

## 1. Taruh di internet (gratis, pilih salah satu)
- Netlify Drop: buka app.netlify.com/drop, tarik seluruh isi folder ini ke halamannya. Anda mendapat alamat https.
- GitHub Pages: buat repositori, unggah semua berkas, lalu aktifkan Pages di Settings.
- Cloudflare Pages: unggah folder lewat Direct Upload.

## 2. Pasang di HP (tanpa Play Store)
1. Buka alamat tadi di Chrome pada HP Android.
2. Ketuk menu titik tiga, pilih "Instal aplikasi" atau "Tambahkan ke layar utama".
3. Ikon "RPP Mendalam" muncul di layar utama dan terbuka layar penuh seperti aplikasi.
Bagikan alamatnya ke rekan guru. Mereka memasangnya dengan cara yang sama.

## 3. Masuk Play Store (opsional)
1. Daftar akun Google Play Console. Ada biaya pendaftaran sekali bayar (sekitar 25 dolar AS) dan verifikasi identitas.
2. Buka pwabuilder.com, masukkan alamat https aplikasi Anda, lalu pilih paket Android untuk mendapatkan berkas .aab.
3. Unggah berkas itu di Play Console, isi data toko (deskripsi, tangkapan layar, kebijakan privasi), lalu kirim untuk ditinjau Google.
Tinjauan Google bisa memakan waktu beberapa hari.

## Catatan
- Mode "Tanpa kunci API" tersedia untuk yang tidak punya kunci. Kunci API Gemini atau OpenAI diisi oleh tiap pengguna di dalam aplikasi, tidak ikut tertanam di berkas.
- Materi bisa diunggah sebagai foto, PDF, Word (.docx), atau teks. Membaca PDF butuh internet saat pertama kali.
- Pembuatan RPP otomatis butuh internet. Formulir, pratinjau, dan unduhan Word tetap bisa dipakai setelah aplikasi pernah dibuka.
- Ganti isi berkas index.html bila ada pembaruan. Pengguna menerima versi baru saat membuka aplikasi dengan internet.
