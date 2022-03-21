console.log("=== ARRAY ===");

// ARRAY literal
// armazena diversos dados

const carros = ["Gol", "Corsa", "Fox"];

// contexto.comando()
// adicionar itens ao final array
carros.push("Corola");
// adiciona itens ao inicio do array
carros.unshift("Marea");
// removendo um item por outro
carros.splice(1, 1); // escolher a posição(1) remove os itens a partir dele (1)
// substituindo um item
carros.splice(0, 1, "BMW"); // Escolhe o lugar que vai substituir(0), remove o item (1), Adiciona um novo item(BMW)
// Adicionando item em um lugar especifico
carros.splice(2, 0, "Fusca", "Golf"); // a partir da posição(2), removendo ninguem(0), Adicona os Itens (Fusca, Golf)
// Remove o ultimo item do array
carros.pop();
// removendo o primeiro item do array
carros.shift();
// organiza os itens do array
carros.sort();
// inverte o array
carros.reverse();

// mostrando na tela a posição escolhida
// document.write(carros[0])
// length conta quantos itens tem no array
for (let i = 0; i < carros.length; i++) {
    document.write("= ", carros[i], "<br>");
}

document.write("<hr>");

// implementação 01
// carros.paraCadaitem()
// callback == 
// implementação
// função nomeada
function pegaCarro(modelo) {
    document.write("= ", modelo, "<br>")
}
carros.forEach(pegaCarro);

document.write("<hr>");

// implementação 02
// primeiro parametro pega o valor, o segundo pega o index
// Função Anônina
carros.forEach(function (carro, index) {
    console.log("Funfa", carro, index)
    document.write("2=>",carro, "<br>");
});

console.log(carros);
console.log(carros.length);
document.write("<hr>");

//
//
//  arguments == so funciona dentro de uma função, mostra todos os dados da função.

let numeros = [32, 21, 27, 17, 1, 15, 23, 12];

numeros.forEach(function(value, index) {
    console.log("forEath", value, index);
});

console.log(numeros);

document.write("<hr>");

// Filter / Map / Reduce

// filter = caso o dado atenda o critério dele , ele separa o valor
// Ele filtra os valores que você quer a partir de um critério
// Filter nunca irá alterar o valor do Array original
// Para que o Filter altere o valor original, você tem que reatribuir o filter no array original
// precisa ter um critério lógico
console.log(
    numeros = numeros.filter(function(numero) {
        console.log("Filter", numero);
        return numero < 25;
}));


// Map = è uma função para remapear as informações
// transforma os dados originais em novos dados
console.log(
    numeros = numeros.map(function(numero) {
        console.log("Map?", numero);
        return numero * 5;
}));

// reduce = pegar todos os elementos de um array e transoformar(reduzir) em um elemento
// 

console.log("=== REDUCE ===");
console.log (
    numeros.reduce(function(previous, current, index, array) {
        console.log("Reduce?","Prev:", previous,"Cur:", current);
        // console.log("Ind:", index, "Array:", array)

        return previous + current
    },0)
)