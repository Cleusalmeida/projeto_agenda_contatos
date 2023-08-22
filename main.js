const form = document.getElementById('form-agenda');//identificação do formulário do html
const nomeContato = []; //calcular a média
const numeroContato = []; //armazena todas as informações

let linhas = ''; //manter o conteúdo das linhas adicionadas

form.addEventListener('submit', function(e) { //cancela o evento do formulário de quando submetido, atualizar a tela
    e.preventDefault(); //remove o comportamento de atualizar a página no navegador

    adicionaLinha();
    atualizaTabela();
    atualizaAgenda();
});

function adicionaLinha() { //função lógica de adicionar eventos na tabela
    const inputNomeContato = document.getElementById('nome-contato');//captura os nomes (cola no html:id)
    const inputNumeroContato = document.getElementById('numero-contato');

    if (nomeContato.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já foi inserido, salvar de novo?`); 
    } else {
        nomeContato.push(inputNomeContato.value); //push dos arrays para adicionar conteúdos
        numeroContato.push(parseFloat(inputNumeroContato.value));
    
        let linha = '<tr>';//adicionando informações do html
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNomeContato.value = '';//limpa o campo
    inputNumeroContato.value = '';//limpa o campo
}   

function atualizaTabela(){  //função de atualizar a tabela
    const corpoTabela = document.querySelector('tbody');//recupera o corpo da tabela
    corpoTabela.innerHTML = linhas;//inserir o conteúdo dentro de uma tag
}

function atualizaAgenda() {
    document.getElementById('nome-contato-adicionado').innerHTML;
    document.getElementById('numero-contato-adicionado').innerHTML;

}