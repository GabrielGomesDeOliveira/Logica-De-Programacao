console.log("=== Adicionando carro ===");

const carros = [];

function adicionar() {
    // Entrada
    const modelo = document.getElementById("modelo");
    const ano = document.getElementById("ano");
    const cor = document.getElementById("cor");
    const situacao = document.getElementById("situacao");
    // console.log(modelo, ano, cor, situacao);
    console.log(modelo.value, ano.value, cor.value, situacao.value);
    // Options se torna um array
    //SelectedIndex => pega o index do array options(situação)
    //console.log(situacao.options[situacao.options.selectedIndex].value);

    // Processamento
    const carro = {
        // Pegando os valores e transformando em um objeto
        modelo: modelo.value,
        ano: ano.value,
        cor: cor.value,
        situacao: situacao.value
    }

    console.log(carro);
    // Passando o Objeto para dentro do array vazio
    carros.push(carro);


    // Saida
    console.table(carros);

    const lista = document.getElementById("tabela");

    // Map => percorre toda a função, e retorna uma nova informação, retornando um novo array
    lista.innerHTML = carros
    .filter(function(carro) {
        return carro.ano === "2015"
    })
    .map(function(carro) {
        return `<tr>
            <td>${carro.modelo}</td>
            <td>${carro.ano}</td>
            <td>${carro.cor}</td>
            <td>${carro.situacao}</td>
        </tr>`;
    }).join("") // Join => Junta os objetos separado por join.("Separação"), transforma o array em uma String

    // Limpando os campos
    modelo.value = "";
    ano.value = "";
    situacao.value = "";

    // Dar o foco em um campo
    modelo.focus();
}

// Avaliação

/*
1 => fazer uma copia do exercícios de carro
2 => Adicionar uma coluna com Identificador
3 => Adicionar no formulario um campo para receber o preço do veiculo
4 => exibir uma coluno com o preço
5 => receber o total de todos os veiculos cadastrados(Requisito => usar reduce)
*/