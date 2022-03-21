console.log("=== CONDICIONAIS ===");


// ENTRADA
const aluno = prompt("Digite o nome do aluno");
const nota = prompt("Digite a nota do " + aluno + ":");
console.log(aluno, nota);

/* EXEMPLO 1 IF

// PROCESSAMENTO
let resp = null;

if (nota >= 6) {
    resp = "aprovado ";
}

if (nota < 6 && nota >= 4) {
    resp = "recuperação";
}

if (nota < 4) {
    resp = "reprovado";
}
*/


/*
// EXEMPLO 2 IFELSE encadeado

if (nota >= 6) {
    resp = "Aprovado";
} else {
    if (nota < 6 && nota >= 4) {
        resp = "Recuperação";
    } else {
        resp = "Reprovado";
    }
}
*/

// Exemplo 3 - IF / Else
/*
if (nota >= 6) {
    resp = "Aprovado";
} else if (nota > 4) {
    resp = "Reprovado";
} else {
    resp = "Recuperação";
}
*/

/*
// EXEMPLO 4 - SWITCH / CASE
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

// EXEMPLO 5 -SWITCH / CASE - PRATICO
const diaSemana = prompt("Digite o dia da semana");
switch (diaSemana) {
    case "1":
        resp = "DOM"
        break;

    case "2":
        resp = "SEG"
        break;

    default:
        break;
}


document.write(`Você esta ${resp}, ${aluno} !!!`);

