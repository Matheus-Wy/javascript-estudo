// exercicio 1

/*
let numero = parseFloat(prompt('digite um número'));
for(i = 1; i <= 20; i++) {
    let multi = numero * i
    console.log(" Resultado da multiplicação" + " "+numero + " x " + i + " = " + multi )
}
*/

const palavra = prompt("Informe uma palavra:")
let palavraInvertida = ""

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i]
}

if (palavra === palavraInvertida) {
  alert(palavra + " é um palíndromo!")
} else {
  alert(palavra + " não é um palíndromo!\n\n" + palavra + " !== " + palavraInvertida)
}