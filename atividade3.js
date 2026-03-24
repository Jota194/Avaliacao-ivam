function calcularTotal() {
    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const frete = parseFloat(document.getElementById("frete").value);
    const resultado = document.getElementById("resultado");
  
    if (isNaN(subtotal) || isNaN(frete)) {
      resultado.textContent = "Por favor, preencha todos os campos corretamente.";
      return;
    }
  
    if (subtotal < 0 || frete < 0) {
      resultado.textContent = "Valores inválidos. Não podem ser negativos.";
      return;
    }
  
    let desconto = 0;
  
    if (subtotal > 500) {
      desconto = 0.15;
    } else if (subtotal > 200) {
      desconto = 0.05;
    }
  
    const valorComDesconto = subtotal - (subtotal * desconto);
  
    const valorFinal = valorComDesconto + frete;
  
    const valorFormatado = valorFinal.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2
    });
  
    resultado.textContent = `Valor final: ${valorFormatado}`;
  }