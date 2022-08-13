
console.log('Teste JS Arquivo');

// Selecionar pelo ID
let btStart = document.getElementById('start');

console.log('getElementById: ', btStart);

// Selecionar pela classe
let dvContainer = document.getElementsByClassName('container');

console.log('getElementsByClassName: ', dvContainer);

// Selecionar pela tag
let buttons = document.getElementsByTagName('button');

console.log('getElementsByTagName: ', buttons);

// Selecionar por query
let btReset = document.querySelector('button');

console.log('querySelector: ', btReset);

// Seleciar por queryAll

let allButtons = document.querySelectorAll('button');

console.log('querySelectorAll: ', allButtons);