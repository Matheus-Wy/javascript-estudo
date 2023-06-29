// exercicio 1

/*
let opcaoes = prompt("Opção1 Opção2 Opção3 Opção4 Encerrar")

while(opcaoes !== "Encerrar") {
    switch(opcaoes) {
        case 'Opção1': 
        console.log("Opção1 selecionada")
        opcaoes = prompt("Opção1 Opção2 Opção3 Opção4 Encerrar")
        break
        case 'Opção2': 
        console.log("Opção2 selecionada")
        opcaoes = prompt("Opção1 Opção2 Opção3 Opção4 Encerrar")
        break
        case 'Opção3': 
        console.log("Opção3 selecionada")
        opcaoes = prompt("Opção1 Opção2 Opção3 Opção4 Encerrar")
        break
        case 'Opção4': 
        console.log("Opção4 selecionada")
        opcaoes = prompt("Opção1 Opção2 Opção3 Opção4 Encerrar")
        break;
    }
        if(opcaoes === "Encerrar") {
            console.log("sistema incerrado...")
        } 
}

*/

// exercicio 2

let quantidadeDinheiro = parseFloat(prompt("digite a quantidade inicial de dinheiro"));
let opcaoes = prompt(quantidadeDinheiro+ " " + "adicionar remover sair");

while(opcaoes !== "sair") {
    switch(opcaoes) {
        case "adicionar":
        let quantidadeAdd = parseFloat(prompt("quantidade de dinheiro a adionar"));
        let resultado = quantidadeDinheiro + quantidadeAdd
        opcaoes = prompt(resultado + "adicionar remover sair");
        break
        case "remover":
        let quantidadeRemover = parseFloat(prompt("quantidade de dinheiro a remover"));
        let resultado2 = quantidadeDinheiro + quantidadeRemover
        opcaoes = prompt(resultado2 + "adicionar remover sair");
    }
    if(opcaoes === "sair") {
        console.log("sistema incerrado...")
    } 
}
