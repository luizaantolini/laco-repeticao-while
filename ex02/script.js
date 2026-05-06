let somaDasNotas = 0;
let quantidadeDeNotas = 0;

while (true) {
    let entrada = prompt("Digite uma nota de 0 a 10\n(Ou um número negativo para sair):");
    
    
    let nota = parseFloat(entrada);

    
    if (nota < 0) {
        break;
    }

    
    if (!isNaN(nota) && nota >= 0 && nota <= 10) {
        somaDasNotas += nota;     
        quantidadeDeNotas++;      
    } else {
        alert("Digite apenas números entre 0 e 10.");
    }
}

if (quantidadeDeNotas > 0) {
    let media = somaDasNotas / quantidadeDeNotas;
    
    
    alert("Notas digitadas: " + quantidadeDeNotas + "\nMédia final: " + media.toFixed(2));
    console.log("Média calculada: " + media.toFixed(2));
} else {
    alert("Nenhuma nota válida foi digitada.");
}