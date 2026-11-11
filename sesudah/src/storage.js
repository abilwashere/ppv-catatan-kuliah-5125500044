
export const KUNCI = 'catatan-kuliah:v1';

let cadanganMemori = [];
export let pesanPenyimpanan = '';

function dataValid(item) {
  return (
    item !== null &&
    typeof item === 'object' &&
    typeof item.id === 'number' &&
    typeof item.judul === 'string' &&
    typeof item.mk === 'string' &&
    typeof item.dibuat === 'string' &&
    typeof item.disematkan === 'boolean'
  );
}

export function muat() {
  try {
    const data = localStorage.getItem(KUNCI);

    if (data === null) {
      pesanPenyimpanan = '';
      return [...cadanganMemori];
    }

    const hasil = JSON.parse(data);

    if (!Array.isArray(hasil)) {
      pesanPenyimpanan = 'Data penyimpanan tidak valid. Menggunakan penyimpanan sementara.';
      return [...cadanganMemori];
    }

    const valid = hasil.filter(dataValid);
    cadanganMemori = valid;
    pesanPenyimpanan = '';

    return [...valid];
  } catch (error) {
    pesanPenyimpanan = 'Penyimpanan browser tidak tersedia. Catatan disimpan sementara selama halaman terbuka.';
    return [...cadanganMemori];
  }
}

export function simpan(data) {
  try {
    const aman = Array.isArray(data) ? data.filter(dataValid) : [];
    cadanganMemori = aman;

    try {
      localStorage.setItem(KUNCI, JSON.stringify(aman));
      pesanPenyimpanan = '';
      return true;
    } catch (error) {
      pesanPenyimpanan = 'Penyimpanan browser tidak tersedia. Catatan disimpan sementara selama halaman terbuka.';
      return false;
    }
  } catch (error) {
    pesanPenyimpanan = 'Catatan gagal disimpan.';
    return false;
  }
}

// Alias agar state.js versi P11 tetap bisa menggunakan fungsi lama.
export function ambilCatatan() {
  return muat();
}

export function simpanCatatan(catatan) {
  return simpan(catatan);
}
