let numero = parseFloat(prompt("Por favor, digite um número positivo:"));

if (numero > 0) {
    alert("Muito bem! Seu número é válido.");
}

while (numero <= 0) {
    alert("Número inválido. Por favor, digite um número positivo.");
    numero = prompt("Por favor, digite um número positivo:");
    alert("Muito bem! Seu número é válido.");
}