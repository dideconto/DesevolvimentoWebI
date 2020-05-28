var txtNumero1 = document.getElementById('txtNumero1');
var txtNumero2 = document.querySelector('#txtNumero2');
var btnSomar = document.querySelector('#btnSomar');
var btnLimpar = document.querySelector('#btnLimpar');
var btnAdicionar = document.querySelector('#btnAdicionar');
var txtResultado = document.querySelector('#txtResultado');
var lblResultado = document.querySelector('#lblResultado');
var lstTeste = document.querySelector('#lstTeste');

var contador = 0;

btnSomar.onclick = function(){
    //O CÓDIGO DENTRO DESTA FUNÇÃO SERÁ EXECUTADO AO CLICAR NO BOTÃO
    var soma = parseInt(txtNumero1.value) + parseInt(txtNumero2.value);

    txtResultado.value = 'Resultado: ' + soma;
    
    var textoResultado = document.createTextNode('Resultado: ' + soma);
    lblResultado.appendChild(textoResultado);

    // alert('Soma: ' + soma);
    // console.log('Soma: ' + soma);
};

btnLimpar.onclick = function(){
    lblResultado.innerHTML = '';
    txtResultado.value = '';
    lstTeste.innerHTML = '';
};

btnAdicionar.onclick = function(){
    var elementoItem = document.createElement('li');
    var textoItem = document.createTextNode(contador);
    elementoItem.appendChild(textoItem);

    lstTeste.appendChild(elementoItem);

    contador++;
};