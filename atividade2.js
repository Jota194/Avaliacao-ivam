function calcularFrete(peso) {
    if (typeof peso !== 'number' || isNaN(peso)) {
      throw new Error('Peso inválido: deve ser um número.');
    }
  
    if (peso <= 0) {
      throw new Error('Peso inválido: deve ser maior que zero.');
    }
  
    let frete;
  
    if (peso <= 5) {
      frete = 10.00;
    } else if (peso <= 20) {
      frete = 20.00;
    } else {
      frete = 50.00;
    }
  
    return Number(frete.toFixed(2));
  }
  
  function calcular() {
    const pesoInput = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
  
    try {
      const peso = parseFloat(pesoInput);
      const frete = calcularFrete(peso);
      resultado.textContent = `Frete: R$ ${frete.toFixed(2)}`;
      resultado.style.color = "green";
    } catch (erro) {
      resultado.textContent = erro.message;
      resultado.style.color = "red";
    }
  }