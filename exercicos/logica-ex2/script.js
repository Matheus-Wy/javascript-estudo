//exercicio 1

/*    let nomePrimeiroVeiculo = prompt('digite o nome do primeiro veiculo');
    let velocidadePrimeiroVeiculo = parseFloat(prompt("Digite a velocidade do primeiro veículo"));

    let nomeSegundoVeiculo = prompt('digite o nome do segundo veiculo');
    let velocidadeSegundoVeiculo = parseFloat(prompt("Digite a velocidade do segundo veículo"));

    if(velocidadePrimeiroVeiculo > velocidadeSegundoVeiculo) {
        window.alert("O primeiro veículo" + " " + nomePrimeiroVeiculo +  "é mais rápido.")
    } else if (velocidadeSegundoVeiculo > velocidadePrimeiroVeiculo) {
        window.alert("O segundo veículo" + " " + nomeSegundoVeiculo + " " + "é mais rápido.")
    } else {
        window.alert("Ambas as velocidade são iguais!")
    }
*/

//exercicio 2

/*
    const atacante = prompt("Qual é o nome do personagem atacante?")
    const poderDeAtaque = parseFloat(prompt("Qual é o seu poder de ataque?"))

    const defensor = prompt("Qual é nome do personagem defensor?")
    let pontosDeVida = parseFloat(prompt("Quantos pontos de vida ele possui?"))
    const poderDeDefesa = parseFloat(prompt("Qual é o seu poder de defesa?"))
    const possuiEscudo = prompt("Ele possui um escudo? (Sim/Não)")

    let danoCausado = 0

    if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não") {
        danoCausado = poderDeAtaque - poderDeDefesa
    } else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
        danoCausado = (poderDeAtaque - poderDeDefesa) / 2
    }
    
    pontosDeVida -= danoCausado

    alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
    alert(
    atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
    defensor + "\nPontos de vida: " + pontosDeVida +
    "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
    )
*/