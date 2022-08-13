// selecionar os elementos
let form = document.getElementById('formulario');
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let lsexo = document.getElementById('lsexo');

let fname_msg = document.getElementById('msg-vld-fname');
let lname_msg = document.getElementById('msg-vld-lname');
let lsexo_msg = document.getElementById('msg-vld-lsexo');

// validação quando o usuário sai de um campo
fname.onblur = function(event){
    if(event.target.value.length < 3){
        fname_msg.textContent = 'O valor digitado deve conter mais que 3 letras';
        fname_msg.style.display = 'block';
    } else {
        fname_msg.style.display = 'none';
    }
}

// validação quando o usuário mudar um campo
lsexo.onchange = function(event){
    if(event.target.value == "selecione"){
        lsexo_msg.textContent = 'Você precisa selecionar um valor valido';
        lsexo_msg.style.display = 'block';
    } else {
        lsexo_msg.style.display = 'none';
    }
}

// validação quando o usuário entra em um campo
fname.onfocus = function(){
    fname_msg.style.display = 'none';
}

// validação quando o usuário submete um formulário (enviar)
form.onsubmit = function(event){
    if(fname.value.length < 3 || lsexo.value == "selecione"){
        alert('Por favor preencha o formulário corretamente antes de enviar.');
        event.preventDefault();
    }
}