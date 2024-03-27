let nome = document.querySelector('#nome');
let sobrenome = document.querySelector('#sobrenome');


nome.addEventListener('focus', function(){    
    console.log('entrou no input nome');

})

sobrenome.addEventListener('blur', function(){
    console.log('Saiu do input sobrenome')


})
