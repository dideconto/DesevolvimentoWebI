var txtNumero1 = document.getElementById('txtNumero1');
var txtNumero2 = document.querySelector('#txtNumero2');
var txtResultado = document.querySelector('#txtResultado');
var btnSomar = document.querySelector('#btnSomar');
var lblResultado = document.querySelector('#lblResultado');

btnSomar.onclick = function(){
    //Código que será executado quando clicar no botão
    var soma = parseInt(txtNumero1.value) + parseInt(txtNumero2.value);

    //Preencher um valor dentro de uma caixa de texto
    txtResultado.value = soma;

    //Preencher um valor dentro de um label
    var textoLabel = document.createTextNode('Resultado: ' + soma);
    lblResultado.innerHTML = '';
    lblResultado.appendChild(textoLabel);

    console.log('Soma: ' + soma);
};

console.log(txtNumero1);
console.log(txtNumero2);
console.log(btnSomar);