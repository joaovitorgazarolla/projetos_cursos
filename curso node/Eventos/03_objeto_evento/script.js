btn = document.querySelector('#btn');
btn2 = document.querySelector('#btn2');


function msg(e){
    console.log(e);
}

btn.addEventListener('click', msg);


btn2.addEventListener('click', function (e){
    btn.removeEventListener("click", msg);
    console.log(e);
    // btn.remove();
});
