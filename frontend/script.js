async function upload() {
  const file = document.getElementById('excelFile').files[0];
  const formData = new FormData();
  formData.append('file', file);

  const uploadRes = await fetch('http://localhost:3000/api/upload', {
    method: 'POST',
    body: formData
  });
  const jsonData = await uploadRes.json();

  const analyzeRes = await fetch('http://localhost:3000/api/analyze', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(jsonData)
  });

  const result = await analyzeRes.json();
  console.log(result); // Aquí pondremos gráficas luego
}
