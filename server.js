require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const alatRoutes = require('./routes/alatRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'API Manajemen Data Peralatan Olahraga',
    endpoints: {
      list: 'GET /api/alat',
      detail: 'GET /api/alat/:id',
      create: 'POST /api/alat',
      update: 'PUT /api/alat/:id',
      delete: 'DELETE /api/alat/:id'
    }
  });
});

app.use('/api/alat', alatRoutes);
app.use((req, res) => res.status(404).json({ success: false, message: 'Endpoint tidak ditemukan' }));

async function startServer() {
  try {
    if (!process.env.MONGODB_URI) throw new Error('MONGODB_URI belum diatur. Salin .env.example menjadi .env.');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Terhubung ke MongoDB');
    app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));
  } catch (error) {
    console.error('Gagal menjalankan server:', error.message);
    process.exit(1);
  }
}
startServer();
