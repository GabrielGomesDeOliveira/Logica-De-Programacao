console.log("=== CALCULADORA ===");

function calcular() {
    // Entrada de captura de dados
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    // Processamento
    // o operador de (+) tem duas funções , operação de soma e concatenação
    //parseInt e parseFloat , transforma o variável, sempre após a atribuição
    const total = num1 + num2;
    console.log(total);

    // Saida (exibir) dados
    document.getElementById("result").value = total;
}
