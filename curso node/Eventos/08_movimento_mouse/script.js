
window.addEventListener("mousemove", function(e){
    let p = document.querySelector('p');
    console.log('Y = '+ e.x);
    console.log('X =' + e.y);

    let posY = e.y;
    let posX = e.x;

    let soma = posY = posX;

    p.innerHTML = soma;


    
 
});