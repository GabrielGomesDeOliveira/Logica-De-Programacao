console.log("=== Funções ===");

// Declaração De Função Nomeada
// para executar uma função sempre usar () após o nome da função
// Function Nomedafunção( parametro )
// parametros ==> são posições para receber os dados
// definir um valor para o parametro para não receber um valor ( NUm )
function soma(num1=0, num2=0) {
    return num1 + num2;
}
console.log( soma ) // referência
console.log( soma() ) // nam
console.log( soma(5) ) // nam
console.log( soma(5, 10) ) // faz a função


// Função Não Nomeada (Anônima)
// Função aanônima não recebe um nome
// necessita estar associado a alguma outra coisa ( const, let )
const sum = function (n1=0, n2=0) {
    return n1 + n2;
}
console.log(sum);
console.log(sum ());
console.log ( sum (5));
console.log ( sum (5, 3));