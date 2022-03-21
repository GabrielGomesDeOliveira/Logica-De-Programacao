console.log("=== OBJETOS ===");

// Orientação a objeto

// const carro1 = {
//     modelo: "gol",
//     ano: 2010,
//     cor: "vermelho",
//     Situação: "usado"
// };

// const carro2 = {
//     modelo: "fox",
//     ano: 2015,
//     cor: "preto",
//     situação: "zero"
// }

const carros = [
    {
        modelo: "fox",
        ano: 2015,
        cor: "preto",
        situação: "zero"
    },

    {
        modelo: "gol",
        ano: 2010,
        cor: "vermelho",
        situação: "usado"
    },

    {modelo: "Uno", ano: 2000, cor: "verde", situação: "usado"}
]

console.table(carros)

// carros.forEach(function(carro) {
//     console.log(carro.modelo, carro.ano);
// });

//contesto.propriedade
//objeto.propriedade


let usados = carros.filter(function(carro) {
    console.log(carro);
    return carro.situação == "usado";
});

console.table(usados);
