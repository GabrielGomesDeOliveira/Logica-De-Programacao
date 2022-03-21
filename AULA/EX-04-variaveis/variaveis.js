console.log("===Variaveis===");

// Javascript - Especificação -> EcmaScript
// jun/2015 - ES5
// Jul/2015 - ES6, ES7, ES8 ...

// Padrão ASI - Automatic Semicolon Insert

// tipos de dados / tipos de Cariáveis
// JavaScript utiliza tipagem dinâmica
// Tipos primitivos - String, number, boolean, null, undefined
var nome = "Gabriel"; // String
console.log("nome", nome, typeof nome); // typeof -> indica o valor da variável

let idade = 21; // Number -> inteiro
console.log("idade", idade, typeof idade);
let altura = 1.77; // Number -> float tambem é number
console.log("altura", altura, typeof altura);

const magro = false; // Boolean -> True or False
console.log("Magro", magro, typeof magro);

// Quando não se sabe qual valor ira colocar para a variavel
var nula = null;
console.log("Nulo", nula, typeof nula);

var indefinida;
console.log("Indefinida", indefinida, typeof indefinida);

// Diferenças entre Var, Let e Const

// Var ==> Redeclarar a variável ( permite )
// EX : var nome = 1;
// Var ==> reatribuição de valor ( permite )
// EX : nome = false;

// Let ==> redeclaração de variável ( não permite )
// Let ==> o let identifica se já existe a variável declarada nele não permitindo a repetição
// EX : let idade = 23;  = irá dar um erro
// Let ==> reatribuição de valor ( permite )
// EX : idade = 25;  =  não da erro

// Const ==> redeclaração da variável (Não permite)
// Const magro = true;  =  Irá dar erro
// Const ==> Reatribuição do valor (Não permitido)
// magro = true;  =  Irá dar erro
