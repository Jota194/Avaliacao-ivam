function calcularPreco() {
    const preco = parseFloat(document.getElementById("preco").value);
    const imposto = parseFloat(document.getElementById("imposto").value);
    const resultado = document.getElementById("resultado");
  
    if (isNaN(preco) || isNaN(imposto)) {
      resultado.textContent = "Por favor, preencha todos os campos.";
      return;
    }
  
    if (preco <= 0 || imposto < 0) {
      resultado.textContent = "Valores inválidos. Verifique os dados.";
      return;
    }
  
    const valorFinal = preco + (preco * (imposto / 100));
  
    const valorFormatado = valorFinal.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  
    resultado.textContent = `Preço final: ${valorFormatado}`;
  }