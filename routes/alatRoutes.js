const express = require('express');
const Alat = require('../models/Alat');
const router = express.Router();

// GET semua peralatan
router.get('/', async (req, res) => {
  try {
    const data = await Alat.find().sort({ createdAt: -1 });
    res.json({ success: true, total: data.length, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET detail peralatan
router.get('/:id', async (req, res) => {
  try {
    const data = await Alat.findById(req.params.id);
    if (!data) return res.status(404).json({ success: false, message: 'Peralatan tidak ditemukan' });
    res.json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, message: 'ID tidak valid', error: error.message });
  }
});

// POST tambah peralatan
router.post('/', async (req, res) => {
  try {
    const data = await Alat.create(req.body);
    res.status(201).json({ success: true, message: 'Peralatan berhasil ditambahkan', data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// PUT ubah peralatan
router.put('/:id', async (req, res) => {
  try {
    const data = await Alat.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!data) return res.status(404).json({ success: false, message: 'Peralatan tidak ditemukan' });
    res.json({ success: true, message: 'Peralatan berhasil diperbarui', data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// DELETE hapus peralatan
router.delete('/:id', async (req, res) => {
  try {
    const data = await Alat.findByIdAndDelete(req.params.id);
    if (!data) return res.status(404).json({ success: false, message: 'Peralatan tidak ditemukan' });
    res.json({ success: true, message: 'Peralatan berhasil dihapus', data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

module.exports = router;
