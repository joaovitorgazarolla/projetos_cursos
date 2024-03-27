btn = document.querySelector('#btn');
btn2 = document.querySelector('#btn2');
p = document.querySelector('p');
a = document.querySelector('a');


function msg(e){
    console.log('clicou no botao');
    e.stopPropagation();
}

btn.addEventListener('click', msg);


btn2.addEventListener('click', function (e){
    btn.removeEventListener("click", msg);
    console.log(e);
    // btn.remove();
});

p.addEventListener('click', function(){
    console.log('clicou no paragrafo');
})

a.addEventListener("click", function(e){
    e.preventDefault();
});


