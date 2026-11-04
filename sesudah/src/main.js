
import { semua, tambah, alihSemat, hapus, cari } from './state.js';
import { tampilkan } from './ui.js';

const form = document.getElementById('form');
const inputJudul = document.getElementById('judul');
const pilihanMK = document.getElementById('mk');
const inputCari = document.getElementById('cari');

function render() {
  tampilkan(cari(inputCari.value));
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const judul = inputJudul.value.trim();

  if (judul === '') return;

  tambah(judul, pilihanMK.value);
  inputJudul.value = '';

  render();
});

inputCari.addEventListener('input', function () {
  render();
});

document.addEventListener('click', function (e) {
  const tombol = e.target.closest('button[data-aksi]');

  if (!tombol) return;

  const id = Number(tombol.dataset.id);
  const aksi = tombol.dataset.aksi;

  if (aksi === 'semat') {
    alihSemat(id);
  }

  if (aksi === 'hapus') {
    if (!confirm('Hapus catatan ini?')) return;
    hapus(id);
  }

  render();
});

render();
