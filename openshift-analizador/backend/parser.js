const xlsx = require('xlsx');

function parseExcel(buffer) {
  const workbook = xlsx.read(buffer);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData = xlsx.utils.sheet_to_json(sheet, { defval: "" });
  return jsonData;
}

module.exports = { parseExcel };
