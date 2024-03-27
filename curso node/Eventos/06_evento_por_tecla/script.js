
window.addEventListener("keydown", function(e){
    p = document.querySelector('p');
    if(e.key == 'q'){
        alert('Apertou a letra Q');
    }

    if(e.key){
        p.innerHTML = e.key;  
    }


})