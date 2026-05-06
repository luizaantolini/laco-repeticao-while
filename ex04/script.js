let nome = "";
let sobrenome = "";

while (nome === "" || nome === null) {
    nome = prompt("Digite seu primeiro nome:");
    
    if (nome === "" || nome === null) {
        alert("O nome não pode ficar em branco!");
    }
}

while (sobrenome === "" || sobrenome === null) {
    sobrenome = prompt("Digite seu sobrenome:");

    if (sobrenome === "" || sobrenome === null) {
        alert("O sobrenome não pode ficar em branco!");
    }
}

alert("Olá, " + nome + " " + sobrenome + "!");
console.log("Nome completo: " + nome + " " + sobrenome);