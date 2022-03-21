console.log("=== Comparação ===")

//entrada

const num1 = Number(document.getElementById("num1").value);
const num2 = Number(document.getElementById("num2").value);
const comparador = document.getElementById("opcao").value;


//processamento

//saida
function comparar() {

    let resultado ;

    switch (comparador.value) {
        case "MaiorQue":
            resultado = num1.value > num2.value;
            break;

        case "MenorQue":
            resultado = num1.value < num2.value;
            break;

        case "MaiorOuIgual":
            resultado = num1.value >= num2.value;
            break;

        case "MenorOuIgual":
            resultado = num1.value <= num2.value;
            break;

        case "Diferente":
            resultado = num1.value != num2.value;
            break;

        case "Igual":
            resultado = num1.value == num2.value;
            break;
    
        default:
            break;
    }

    document.getElementById("result").value = resultado;
}