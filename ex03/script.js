let total = 0;
let continuar = true;

while (continuar) {
    
    let valor = parseFloat(prompt("Digite o valor do produto (ou 0 para finalizar):"));

    
    if (valor === 0) {
        continuar = false; 
    } 
    
    else if (valor > 0) {
        total += valor; 
    } 
    else {
        alert("Por favor, digite um valor válido!");
    }
}

alert("Compra finalizada!\nO total da sua compra é: R$ " + total.toFixed(2));
console.log("Total: R$ " + total.toFixed(2));