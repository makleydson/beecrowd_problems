/*Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.
Entrada
O arquivo de entrada contém três valores com um dígito após o ponto decimal.

Saída
O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, sempre com mensagem correspondente e um espaço entre os dois pontos e o valor. O valor calculado deve ser apresentado com 3 dígitos após o ponto decimal.*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valoresArea = lines.shift().split(' ');

var a = parseFloat(valoresArea.shift());
var b = parseFloat(valoresArea.shift());
var c = parseFloat(valoresArea.shift());

//base*altura/2
var areaTriang = (a*c)/2;
//pi * raio^2;
var areaCirc = 3.14159*(c**2);
//base+base*altura/2
var areaTrap = ((a+b)*c)/2;
//base * altura
var areaQuad = b*b;
//base * altura
var areaRet = a*b;

console.log("TRIANGULO: " + areaTriang.toFixed(3));
console.log("CIRCULO: " + areaCirc.toFixed(3));
console.log("TRAPEZIO: " + areaTrap.toFixed(3));
console.log("QUADRADO: " + areaQuad.toFixed(3));
console.log("RETANGULO: " + areaRet.toFixed(3));