// Avaliação
/*
1 => fazer uma copia do exercícios de carro
2 => Adicionar uma coluna com Identificador
3 => Adicionar no formulario um campo para receber o preço do veiculo
4 => exibir uma coluno com o preço
5 => receber o total de todos os veiculos cadastrados(Requisito => usar reduce)
*/

console.log("=== Adicionando carro ===");

const carros = [];

function adicionar() {
    // Entrada
    const identificador = document.getElementById("identificador")
    const modelo = document.getElementById("modelo");
    const ano = document.getElementById("ano");
    const cor = document.getElementById("cor");
    const situacao = document.getElementById("situacao");
    const preco = document.getElementById("preco");
    const precoTotal = document.getElementById("total");
    // console.log(modelo, ano, cor, situacao, preco);
    console.log(identificador.value, modelo.value, ano.value, cor.value, situacao.value, preco.value, precoTotal.value);

    // Processamento
    const carro = {
        // Pegando os valores e transformando em um objeto
        identificador: identificador.value,
        modelo: modelo.value,
        ano: ano.value,
        cor: cor.value,
        situacao: situacao.value,
        preco: parseFloat(preco.value)
    }

    // Somando o Total de todos os carros
    const total = carros.reduce(function(precoTotal, carro) {
        return precoTotal + carro.preco
    },carro.preco)
    precoTotal.innerHTML = `${total.toFixed(2)}`

    // Passando o Objeto para dentro do array vazio
    carros.push(carro);


    // Saida
    console.table(carros);

    const lista = document.getElementById("tabela");

    // Map => percorre toda a função, e retorna uma nova informação, retornando um novo array
    // Passando as informações recebidas pelo usuario para uma tabela na tela
    lista.innerHTML = carros
    .map(function(carro) {
        return `<tr>
            <td>${carro.identificador}</td>
            <td>${carro.modelo}</td>
            <td>${carro.ano}</td>
            <td>${carro.cor}</td>
            <td>${carro.situacao}</td>
            <td>${carro.preco}</td>
        </tr>`;
    }).join("") // Join => Junta os objetos separado pelo join.("Separação"), transforma o array em uma String

    // Limpando os campos
    identificador.value = "";
    modelo.value = "";
    ano.value = "";
    preco.value = "";

    // Dar o foco em um campo
    identificador.focus();
}
