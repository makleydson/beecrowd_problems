//Você deve imprimir a mensagem "Hello World!" e em seguida o final de linha, conforme o exemplo abaixo.

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

console.log("Hello World!");