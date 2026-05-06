let saldo = 1000; 
let saque; 

while (saldo > 0) { 
    saque = Number(prompt("Saldo atual: R$ " + saldo.toFixed(2) + "\nDigite o valor para saque:")); 

    if (saque > saldo) { 
        alert("Saldo insuficiente! Tente novamente."); 
    } 
    else if (saque <= 0 || isNaN(saque)) { 
        alert("Digite um valor válido."); 
    } 
    else { 
        saldo -= saque; 
        alert("Saque realizado! Novo saldo: R$ " + saldo.toFixed(2)); 
    } 
}

alert("Seu saldo acabou. Encerrando o sistema.");