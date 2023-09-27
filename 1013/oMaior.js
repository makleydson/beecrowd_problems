/*Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. 
Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.

Entrada
O arquivo de entrada contém três valores inteiros.

Saída
Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var abc = lines.shift().split(' ');

var a = parseInt(abc.shift());
var b = parseInt(abc.shift());
var c = parseInt(abc.shift());

let AB = ((a+b) + Math.abs((a-b)))/2;
let maiorValor = ((AB+c) + Math.abs((AB-c)))/2;

console.log(maiorValor + " eh o maior");

// Posso também utilizar um método.
var input = require('fs').readFileSync('/dev/stdin', 'utf8');

let [A, B, C] = input.split(' ').map((item) => parseInt(item));

let maiorValor = Math.max(A,B,C);

consolelog(maiorValor + " eh o maior);