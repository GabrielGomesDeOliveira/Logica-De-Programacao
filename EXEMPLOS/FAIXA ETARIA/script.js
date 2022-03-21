// function analizar(params) {
//     const idade = document.getElementById("idade").value;

//     if (idade < 18) {
//         console.log("Vocé não é adulto!");
//     } else if (idade) {
        
//     }

//     document.getElementById("faixa").value
// }

function analizar(params) {
    const idade = document.getElementById("idade").value;
    let texto = null;

    if (idade <= 12) {
        texto = "Você é uma criança!";
        document.getElementById("faixa").value = texto;
    } else if (idade >=13 && idade < 18) {
        texto = "Você é um adolecente!";
        document.getElementById("faixa").value = texto;
    } else if (idade >= 18 && idade < 65) {
        texto = "Você é um adulto!";
        document.getElementById("faixa").value = texto;
    } else {
        texto = "Você é idoso !"
        document.getElementById("faixa").value = texto;
    }
}