console.log("=== CALCULAR IMC ===")


function calcular(altura, peso) {
    const alt = document.getElementById("altura");
    console.log(alt.value);
    const pes = document.getElementById("peso");
    console.log(pes.value);

    const imc = pes.value / (alt.value*alt.value);
    console.log(imc);

    document.getElementById("resultado").value = imc;

    let texto = null;
    if (imc < 18.5) {
        texto = "Magreza";
        document.getElementById("saude").value = texto;
    } else if (imc >= 18.5 && imc < 25) {
        texto = "Normal";
        document.getElementById("saude").value = texto;
    } else if (imc >= 25 && imc < 30) {
        texto = "Sobrepeso";
        document.getElementById("saude").value = texto;
    } else if (imc >= 30 && imc < 35 ) {
        texto = "Obesidade Grau I";
        document.getElementById("saude").value = texto;
    } else if (imc >= 35 && imc < 40) {
        texto = "Obesidade Grau II (Severa)";
        document.getElementById("saude").value = texto;
    } else {
        texto = "Obesidade grau III (Morbida)";
        document.getElementById("saude").value = texto;
    }
}