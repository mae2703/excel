const express = require('express');
const router = express.Router();
const parser = require('./parser');
const charts = require('./charts');

router.post('/upload', async (req, res) => {
  const file = req.files?.file;
  if (!file) return res.status(400).send('Archivo no enviado');
  const data = await parser.parseExcel(file.data);
  res.json(data);
});

router.post('/analyze', (req, res) => {
  const data = req.body;
  const result = charts.analyzeData(data);
  res.json(result);
});

module.exports = router;
