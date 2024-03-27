btn = document.querySelector('#btn');
btn2 = document.querySelector('#btn2');


function msg(){
    console.log('Clicou em mim')
}

btn.addEventListener('click', msg);


btn2.addEventListener('click', function(){
    btn.removeEventListener("click", msg);
    btn.remove();
});
