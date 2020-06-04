//[x]Verificar se existe algo na caixa de texto
//[x]Pegar a informação da caixa de texto
//[x]Pegar o elemento tbody da tabela no javascript
//[x]Criar um elemento para a linha
//[x]Criar os elementos das células 
//[x]Adicionar o conteúdo textual
//[x]Adicionar a linha dentro da tabela
//[ ]Gerar código e pegar a tarefa
//[ ]Criar um objeto com as informações acima
//[ ]Adicionar o objeto dentro do array
//[ ]Criar uma função para renderizar a tabela
//[ ]Percorrer o array e preencher a tabela com os dados do array

var txtTarefa = document.querySelector('#txtTarefa');
var btnAdicionar = document.querySelector('#btnAdicionar');
var spnMensagem = document.querySelector('#spnMensagem');
var tblTarefas = document.querySelector('#tblTarefas tbody');

var tarefas = [];

// tarefas.push(1);
// tarefas.push(123.123);
// tarefas.push('Tarefa 3');

// var objeto = {
//     Codigo: 1,
//     Tarefa: 'Tarefa 1',
//     Conteudo: 'asdasdasdasdasdasdasd'
// };

// tarefas.push(objeto);
// tarefas.push(objeto);

// console.log(tarefas);

btnAdicionar.onclick = function () {
    spnMensagem.innerHTML = '';
    var tarefa = txtTarefa.value.trim();
    // if (txtTarefa.value) {
    if (tarefa == '') {
        var textoMensagem = document.createTextNode('Por favor, preencha o campo!');
        spnMensagem.appendChild(textoMensagem);
    }else{
        var objeto = {
            codigo: 0,
            tarefa
        };
        tarefas.push(objeto);
        renderizarTabela();
    }
    // txtTarefa.value = txtTarefa.value.replaceAll(' ','');
};


function renderizarTabela(){
    //foreach
    for(t of tarefas){
        console.log(t.tarefa);
    }
}
    
// var linha = document.createElement('tr');
// var celulaCodigo = document.createElement('td');
// var celulaConteudo = document.createElement('td');
// var celulaRemover = document.createElement('td');

// celulaConteudo.appendChild(document.createTextNode(tarefa));
// linha.appendChild(celulaCodigo);
// linha.appendChild(celulaConteudo);
// linha.appendChild(celulaRemover);

// tblTarefas.appendChild(linha);