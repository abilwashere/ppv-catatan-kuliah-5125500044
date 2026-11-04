
const KUNCI = 'catatan-kuliah';

export function ambilCatatan() {
  return JSON.parse(localStorage.getItem(KUNCI)) || [];
}

export function simpanCatatan(catatan) {
  localStorage.setItem(KUNCI, JSON.stringify(catatan));
}
