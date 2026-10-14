# REST API Manajemen Data Peralatan Olahraga

REST API CRUD menggunakan Node.js, Express, dan MongoDB.

## Struktur
- `server.js`: server dan koneksi MongoDB
- `models/Alat.js`: skema data peralatan
- `routes/alatRoutes.js`: endpoint CRUD
- `.env.example`: contoh konfigurasi

## Menjalankan
1. Install Node.js dan siapkan MongoDB lokal atau MongoDB Atlas.
2. Jalankan `npm install`.
3. Salin `.env.example` menjadi `.env` dan isi `MONGODB_URI`.
4. Jalankan `npm start`.
5. Buka `http://localhost:3000`.

## Data
- `nama_alat`: string, wajib
- `kategori`: string, wajib
- `stok`: angka, minimal 0
- `harga`: angka, minimal 0

## Endpoint
| Method | Endpoint | Fungsi |
|---|---|---|
| GET | `/api/alat` | Lihat semua peralatan |
| GET | `/api/alat/:id` | Lihat detail |
| POST | `/api/alat` | Tambah peralatan |
| PUT | `/api/alat/:id` | Edit peralatan |
| DELETE | `/api/alat/:id` | Hapus peralatan |

Contoh body untuk POST:
```json
{
  "nama_alat": "Bola Basket",
  "kategori": "Bola",
  "stok": 10,
  "harga": 150000
}
```
Kirim request JSON dengan header `Content-Type: application/json`.
