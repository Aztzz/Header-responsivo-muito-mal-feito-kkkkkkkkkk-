let produtos = [];
let precos = [];
let posicao = 0;

function MostrarProdutos() {
    let nomeProduto = document.getElementById("produto").value;
    let precoProduto = document.getElementById("preco").value;
    if (nomeProduto !== "" || precoProduto !== "") {
        document.getElementById("mensagem").textContent = "Adicione um valor válido!";
        document.getElementById("mensagem").style.color = "red";
    }
    else {
        produtos.push(nomeProduto);
        precos.push(precos);
        document.getElementById("mensagem").textContent = "Produto adicionado com sucesso!";
        document.getElementById("mensagem").style.color = "green";
    }

function CalcularTotal() {
    let produtos1 = [
        "Arroz",
        "Feijão",
        "Leite",
        "Mouse gamer",
        "Rtx 4090",
        "Raphael Azambuja Silva Macedo GAMER"
    ];

    let precos = [
        23,
        12,
        6,
        180,
        3980,
        5000
    ];

    let lista = document.getElementById("ListaCompras");
    let totaltexto = document.getElementById("ValorTotal");

    lista.textContent = "";
    totaltexto.textContent = "";

    let total = 0;

    for (let i = 0; i < produtos1.length; i++) {
        const item = document.createElement("p");
        item.textContent = produtos1[i] + " - R$ " + precos[i];
        lista.appendChild(item);
        total += precos[i];
    }

    ValorTotal.textContent = "Valor total: R$ " + total;
}

function tentaracesso() {
    let senha = document.getElementById("senha").value;
    let local = document.getElementById("local");
    let contador = 0;
    local.textContent = "";

    while (senha != "1234" && contador < 3) {
        contador = contador + 1;
        local.textContent = "Tentativas:" + contador;
        senha = prompt("Digite a senha correta:");
    }
    if (senha == "1234") {
        let textocorreto = document.createElement("p");
        textocorreto.textContent = "Acesso permitido!";
        local.appendChild(textocorreto);
    }
}

function Iniciarconferencia() {
    let soma = 0;
    let valor = 0;
    let resultado = document.getElementById("ResultadoConferencia");

    resultado.textContent = "";

    let lista = document.createElement("ul");

    valor = Number(prompt("Digite um valor (0 para encerrar):"));

    while (valor !== 0) {
        soma = soma + valor;

        let item = document.createElement("li");
        item.textContent = "Valor: R$ " + valor;
        lista.appendChild(item);

        valor = Number(prompt("Digite outro valor (0 para encerrar):"));
    }

    resultado.appendChild(lista);

    let total = document.createElement("p");
    total.textContent = "Soma final: R$ " + soma;

    resultado.appendChild(total);
}

function GerarRelatorio(){
    let alunos = [
        "Nicole Reis",
        "Raphael Azambuja Silva Macedo",
        "Antônio Silva Neto",
        "Murilo Leal Cordeiro Silva",
        "Gabrielly Evangelista Donana"
    ]

    let notas = [
        83,
        89,
        75,
        20,
        75
    ]

    let arearelatorio = document.getElementById("arearelatorio");
    let mediafinal = document.getElementById("mediafinal");

    arearelatorio.textContent = "";
    mediafinal.textContent = "";

    let soma = 0;

    for (let i = 0; i < alunos.length; i++) {
        let situacao = "";

        if (notas[i] >= 60){
            situacao = "Aprovado";
        }
        else{
            situacao = "Reprovado";
        }

        let item = document.createElement("p");
        item.textContent = alunos[i] + " - Nota: " + notas[i] + " - " + situacao;
        arearelatorio.appendChild(item);
        soma = soma + notas[i];
    }
    let media = soma / alunos.length;
    mediafinal.textContent ="Média final: " + media;
    
}
