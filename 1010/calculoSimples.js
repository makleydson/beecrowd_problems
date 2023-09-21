/*Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

Entrada
O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

Saída
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let inputValores1 = lines.shift().split(" ");
let inputValores2 = lines.shift().split(" ");

let codPeca1 = inputValores1.shift();
let numPeca1 = inputValores1.shift();
let valorUnitPeca1 = inputValores1.shift();
let valorPagar1 = numPeca1*valorUnitPeca1;

let codPeca2 = inputValores2.shift();
let numPeca2 = inputValores2.shift();
let valorUnitPeca2 = inputValores2.shift();
let valorPagar2 = numPeca2*valorUnitPeca2;

let valorTotalPeca = (valorPagar1+valorPagar2);

console.log("VALOR A PAGAR: R$ " + valorTotalPeca.toFixed(2));