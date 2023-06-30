let names = ['matheus', 'gissely', 'esdras', 'levi']
let [x, y] = names;
console.log(x, y)

let numbes = [1, 2, 3, 4]
let [a, b] = numbes;
console.log(a, b)


let animais = {
    name: 'boi',
    idade: 8,
    cor: "branca",
    raça: "suino"
}

const {name, idade, cor} = animais

const nomeCompleto = ['matheus', 'wyllamy']

const completo = [...nomeCompleto, 'silva', 'andrade']
console.log(completo)


const citys = {
    name: "cabo",
    ano: 2023,
    dia: 21
}

const cytysPernambuco = {
    ...citys,
    chovendo: true,
    lugarTuristico: true,
    fundador: 'matheus'
}

console.log(cytysPernambuco)


function adicionarPublicacao (informacao) {
    let newPost = {
        ...informacao,
        local: "cabo de santo agostinho",
        feridos: false
    }
}

console.log(adicionarPublicacao({name: 'dia chovendo', autor: 'levi', data: 21}))

// rest

function novasCidades (...cidades) {
    console.log(cidades)
}

novasCidades('cabo', 'recife', 'ipojuca', 'sirinhaem')