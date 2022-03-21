console.log("=== Repetição ===");

var inicial = 1;
var final = 10;

document.write("<h3>Números de 1 à 10! </h3>");
while (inicial < final) {
    // num1 = num1 + 1;
    //  num1 ++;
    document.write(inicial);
    inicial += 1;
}

document.write("<hr>");

document.write("<h3>Números de 50 à 0! </h3>");
var inicial = 50;
var final = 0;

while (inicial > final) {
    document.write(inicial, ",");
    inicial -= 1;
}

document.write("<hr>");

document.write("<h3>Números de 0 à 100 de par em par! </h3>");
var inicial = 0;
var final = 100;

while (inicial < final) {
    document.write(inicial, ",");
    inicial += 2;
}

document.write("<hr>")
document.write("<h3>Números de 99 à 1 de impar em impar! </h3>");

var inicial = 99;
var final = 1;

while (inicial >= final) {
    if (inicial == 99) {
        document.write(inicial);
    } else {
        document.write(" - ", inicial);
    }
    inicial -= 2;
}

document.write("<hr>");

// let num = 110;

// while (num != 0) {
//     if (num == 0) {
//         break;
//     } else {
//         num = prompt("Digite um número! ");
//         document.write(num);
//         document.write(" - ");
//     }
// }

// let num = null;

// while (num != 0) {
//     num = prompt("Digite um número! ");
//     if (num == 0) {
//         break;
//     } else if (num != 0) {
//         document.write(num, " - ");
//     }
// }


// FOR
// Números - ' à 10

// for (valor_inicial; condição_logica; incremento/decremento) {

// }

document.write("<h3>Números de 1 à 10! - FOR </h3>");
for (let cont = 1; cont <= 10; cont = cont + 1) {
    document.write(cont, " ");
}

// document.write("<hr>");

// let ast = prompt("Quantos asterisco?")

// for (let i = 0; i < ast; i++) {
//     document.write("*")
// }

document.write("<hr>");

for (let lin = 0; lin < 5; lin++ ) {

    for (let col = 0; col < 10; col++) {
        document.write("*");
    }

    document.write("<br>");
}

document.write("<hr>");

for (let lin = 1; lin <= 10; lin++) {

    for (let x = 0; x < lin; x++) {
        document.write("*");
    }
    document.write("<br>")
}

document.write("<hr>");

// DESAFIO PARA CASA

// *=================*
//  *===============*
//   *=============*  
//    *===========*
//     *=========*
//      *=======*
//       *=====*
//        *===*
//         *=*
//          *