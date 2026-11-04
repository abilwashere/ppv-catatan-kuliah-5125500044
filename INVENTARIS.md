# Inventaris Kode Monolit

File: `sebelum/app.js`

Kode aplikasi Catatan Kuliah masih berada dalam satu file JavaScript. Berdasarkan hasil pengamatan, terdapat beberapa bagian kode dengan tanggung jawab yang berbeda.

## 1. Data dan State
- **Baris 5:** Variabel `catatan` digunakan untuk mengambil data catatan dari localStorage.
- **Baris 6:** Variabel `kataCari` digunakan untuk menyimpan kata kunci pencarian.
- **Baris 46–52:** Fungsi `sematkan(id)` digunakan untuk mengubah status sematan catatan.
- **Baris 54–62:** Fungsi `hapus(id)` digunakan untuk menghapus catatan berdasarkan ID setelah pengguna memberikan konfirmasi.

## 2. Tampilan (UI)
- **Baris 8–42:** Fungsi `render()` digunakan untuk menampilkan daftar catatan, catatan yang disematkan, serta informasi jumlah catatan. Fungsi ini juga mengatur tampilan ketika tidak ada catatan yang ditemukan.

## 3. Penyimpanan (Storage)
- **Baris 5:** Pengambilan data awal dari localStorage.
- **Baris 43:** Penyimpanan data catatan ke localStorage dalam format JSON.

## 4. Event
- **Baris 64–73:** Event `submit` digunakan untuk menangani penambahan catatan melalui form.
- **Baris 75–78:** Event `input` digunakan untuk menangani pencarian catatan.
- **Baris 80:** Pemanggilan fungsi `render()` untuk menampilkan data saat aplikasi pertama kali dibuka.

## Kesimpulan
Berdasarkan inventarisasi tersebut, aplikasi masih memiliki struktur monolit karena pengelolaan data, tampilan, penyimpanan, dan event berada dalam satu file. Beberapa tanggung jawab bahkan masih digabungkan dalam satu fungsi. Oleh karena itu, kode perlu dipisahkan menjadi beberapa modul agar lebih terstruktur dan mudah dikelola tanpa mengubah perilaku aplikasi.