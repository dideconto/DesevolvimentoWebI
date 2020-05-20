// EXIBIR UM ALERTA NA PÁGINA
// alert('Hello World! - Arquivo separado');

//IMPRIMIR MENSAGEM NO CONSOLE DO NAVEGADOR
console.log('Hello World no console!');


//VARIÁVEIS EM JAVASCRIPT
var nome = '30';
var idade = 30;
var altura = 1.75;
var vetor = [];

var objeto = {
    Nome: 'Diogo Deconto',
    Idade: 30,
    Altura: 1.75
};

console.log(nome);
console.log(idade);
console.log(altura);
console.log(objeto);
console.log(vetor);

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof altura);
console.log(typeof objeto);
console.log(typeof vetor);

//ESTRUTURAS EM JAVASCRIPT
if (idade >= 18) {
    console.log('Maior de idade!');
} else {
    console.log('Menor de idade!');
}

if (idade === nome) {
    console.log('Igual');
} else {
    console.log('Diferente');
}

var i;
for(i = 0; i <= idade; i++){
    console.log('Contador: ' + i);
}