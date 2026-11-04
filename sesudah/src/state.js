
import { ambilCatatan, simpanCatatan } from './storage.js';

let catatan = ambilCatatan();

export function semua() {
  return catatan;
}

export function tambah(judul, mk) {
  const baru = {
    id: Date.now(),
    judul: judul,
    mk: mk,
    dibuat: new Date().toISOString(),
    disematkan: false
  };

  catatan.push(baru);
  simpanCatatan(catatan);
}

export function alihSemat(id) {
  catatan = catatan.map((item) => {
    if (item.id === id) {
      return { ...item, disematkan: !item.disematkan };
    }
    return item;
  });

  simpanCatatan(catatan);
}

export function hapus(id) {
  catatan = catatan.filter((item) => item.id !== id);
  simpanCatatan(catatan);
}

export function cari(kataKunci = '') {
  return catatan.filter((item) =>
    item.judul.toLowerCase().includes(kataKunci.toLowerCase())
  );
}
