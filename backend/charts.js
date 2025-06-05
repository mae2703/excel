function analyzeData(data) {
  const porHora = {};
  const tipo = { E: 0, R: 0 };
  const errores = [];
  const porUsuario = {};
  const porAgencia = {};
  const secuencia = [];
  
  data.forEach(row => {
    const hora = row['JOUDOP'];
    const tipoOperacion = row['LDQDIR'];
    const error = typeof row['LDQDAT'] === 'string' && row['LDQDAT'].toLowerCase().includes("error");

    // Por hora
    porHora[hora] = (porHora[hora] || 0) + 1;

    // Tipo E/R
    if (tipoOperacion === 'E') tipo.E++;
    if (tipoOperacion === 'R') tipo.R++;

    // Errores
    if (error) errores.push({ ...row });

    // Por usuario
    porUsuario[row['USECOD']] = (porUsuario[row['USECOD']] || 0) + 1;

    // Por agencia
    porAgencia[row['AGECOD']] = (porAgencia[row['AGECOD']] || 0) + 1;

    // Secuencia
    secuencia.push({ seq: row['JOUSEQ'], hora: row['JOUDOP'] });
  });

  // Últimos 5 errores
  const ultimosErrores = errores.slice(-5);

  return {
    porHora,
    tipo,
    errores: errores.length,
    exitosas: data.length - errores.length,
    porUsuario,
    porAgencia,
    secuencia,
    ultimosErrores
  };
}

module.exports = { analyzeData };
