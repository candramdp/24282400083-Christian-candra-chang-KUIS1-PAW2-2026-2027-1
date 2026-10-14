const mongoose = require('mongoose');

const alatSchema = new mongoose.Schema({
  nama_alat: { type: String, required: true, trim: true },
  kategori: { type: String, required: true, trim: true },
  stok: { type: Number, required: true, min: 0 },
  harga: { type: Number, required: true, min: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Alat', alatSchema);
