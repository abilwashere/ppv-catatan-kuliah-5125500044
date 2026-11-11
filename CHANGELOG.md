# Changelog

Semua perubahan penting pada proyek Catatan Kuliah dicatat di file ini.

Format mengikuti Keep a Changelog dan menggunakan Semantic Versioning.

## [1.2.0] - 2026-11-11

### Added
- Menambahkan komponen KartuCatatan untuk menampilkan catatan.
- Menambahkan komponen PesanKosong untuk kondisi daftar kosong.
- Menggunakan komponen KartuCatatan pada daftar catatan disematkan dan semua catatan.
- Menambahkan checker pengujian ketahanan penyimpanan.

### Changed
- Menggunakan kunci penyimpanan berversi `catatan-kuliah:v1`.
- Memperkuat validasi data saat memuat catatan dari localStorage.
- Menambahkan penanganan JSON rusak dan data yang tidak sesuai format.
- Menambahkan penyimpanan sementara di memori ketika localStorage tidak tersedia.
- Menambahkan pesan ketika penyimpanan browser bermasalah.

## [1.1.0] - 2026-11-04

### Changed
- Memecah aplikasi Catatan Kuliah dari satu file JavaScript menjadi ES Modules.
- Memisahkan data, state, UI, penyimpanan, dan event.
- Menggunakan import dan export untuk menghubungkan modul.

## [1.0.0] - 2026-11-04

### Added
- Menyimpan versi awal aplikasi Catatan Kuliah berbentuk monolit.
- Menyediakan fitur pencatatan dan pengelolaan catatan kuliah.