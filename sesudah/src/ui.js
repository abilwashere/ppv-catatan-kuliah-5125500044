
import { KartuCatatan, PesanKosong } from './komponen.js';
import { pesanPenyimpanan } from './storage.js';

export function tampilkan(catatan) {
  const sematan = document.getElementById('sematan');
  const semua = document.getElementById('semua');
  const info = document.getElementById('info');

  const daftarSematan = catatan.filter((c) => c.disematkan);

  // Render daftar catatan yang disematkan.
  sematan.replaceChildren();

  if (daftarSematan.length === 0) {
    sematan.append(PesanKosong('Belum ada catatan yang disematkan.'));
  } else {
    daftarSematan.forEach((c) => {
      sematan.append(KartuCatatan(c));
    });
  }

  // Render seluruh catatan menggunakan komponen yang sama.
  semua.replaceChildren();

  if (catatan.length === 0) {
    semua.append(PesanKosong('Tidak ada catatan.'));
  } else {
    catatan.forEach((c) => {
      semua.append(KartuCatatan(c));
    });
  }

  info.textContent =
    `${catatan.length} catatan, ${daftarSematan.length} disematkan` +
    (pesanPenyimpanan ? ` | ${pesanPenyimpanan}` : '');
}
