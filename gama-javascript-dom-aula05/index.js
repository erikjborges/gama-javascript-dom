
// Alert
let startButton = document.getElementById('start');

startButton.onclick = function(){
    alert('Você clicou em start');
}

// Prompt
let stopButton = document.getElementById('stop');

stopButton.onclick = function(){
    let name = prompt('Você clicou em stop, digite seu nome para continuar: ');
    console.log(name);
}

// Confirm
let resetButton = document.getElementById('reset');

resetButton.onclick = function(){
    let answer = confirm('Você tem certeza que deseja resetar?');
    console.log(answer);
}