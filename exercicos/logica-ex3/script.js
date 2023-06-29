let valor = parseFloat(prompt('Digite o valor em metros'));
let opcao = prompt("Converter para? mm cm dm dam hm km");

switch (opcao) {
    case 'mm':
    let converterMilimetros = valor * 1000;
    console.log(converterMilimetros)
    break
    case 'cm':
    let converterCentimetros = valor * 100;
    console.log(converterCentimetros);
    break
    case 'dm':
    let converterDecimentro = valor * 10;
    console.log(converterDecimentro)
    break
    case 'dam':
    let converterDecametro = valor / 10;
    console.log(converterDecametro);
    break
    case 'hm':
    let converterHectometro = valor / 100;
    console.log(converterHectometro)
    break;
    case 'km':
    let converterKilometros = valor / 1000;
    console.log(converterKilometros)
    break;
    default:
    console.log("Opção inválida.")
}