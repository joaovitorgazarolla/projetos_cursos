let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector('#message');
let messageText = document.querySelector('#message p');
let secondPlay;



// contador de jogadas

let player1 = 0;
let player2 = 0;



// adicionando o evento click aos boxes

for(let i = 0 ; i < boxes.length; i++){
    boxes[i].addEventListener('click', function(e){
        let el = checkElemento(player1, player2);


        // verifica se tem x ou 0
        if(this.childNodes.length == 0){
            let cloneEl = el.cloneNode(true);
        
            this.appendChild(cloneEl);
    
            // computar jogada
    
            if(player1 == player2){
                player1++;

                if(secondPlay == 'ai-player'){
                    setTimeout(function(){
                        computerPlay();

                    },100)
                    player2++
                }
            }else{
                player2++;
            }

        }
        checkWinCondition();
    });


    // evento para saber quem vai jogar, 2 player ou IA
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", function(){
            secondPlay = this.getAttribute("id");
            
            for(let j = 0; j < buttons.length;j++){
                buttons[j].style.display = 'none';
            }

            setTimeout(function(){
                let container = document.querySelector('#container');
                container.classList.remove("hide");
            })


        })
    }

}
function checkElemento(player1, player2){
    if(player1 == player2){
        el = x;
    }else{
        el = o;
    }
    return el;
}

// Verifica quem venceu
function checkWinCondition(){
    
    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");
  ;

    // Horizontal


    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){

        let b1child = b1.childNodes[0].className;
        let b2child = b2.childNodes[0].className;
        let b3child = b3.childNodes[0].className;

        if(b1child == 'x' && b2child == 'x' && b3child == 'x'){
            setTimeout(() => {
                declareWinner('x')           
            }, 100);
        }else if(b1child == 'o' && b2child == 'o' && b3child == 'o'){
        
            setTimeout(() => {
                declareWinner('o')              
            }, 100);
        }
    }

    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0 ){
        let b4child = b4.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b6child = b6.childNodes[0].className; 

        if(b4child == 'x' && b5child == 'x' && b6child == 'x'){
            setTimeout(() => {
                declareWinner('x')           
            }, 100);
        }else if(b4child == 'o' && b5child == 'o' && b6child == 'o'){

            setTimeout(() => {
                declareWinner('o')           
            }, 100);
        }
    }

    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0 ){
        let b7child = b7.childNodes[0].className;
        let b8child = b8.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if(b7child == 'x' && b8child == 'x' && b9child == 'x'){
            setTimeout(() => {
                declareWinner('x')           
            }, 100);
        }else if(b7child == 'o' && b8child == 'o' && b9child == 'o'){
            setTimeout(() => {
                declareWinner('o')           
            }, 100);
        }
    }

    // Vertical

    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){
        let b1child = b1.childNodes[0].className;
        let b4child = b4.childNodes[0].className;
        let b7child = b7.childNodes[0].className;

        if(b1child == 'x' && b4child == 'x' && b7child == 'x'){
            setTimeout(() => {
                declareWinner('x')           
            }, 100);
        }else if(b1child == 'o' && b4child == 'o' && b7child == 'o'){
            setTimeout(() => {
                declareWinner('o')               
            }, 100);
        }

    }

    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){
        let b2child = b2.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b8child = b8.childNodes[0].className;

        if(b2child == 'x' && b5child == 'x' && b8child == 'x'){
            setTimeout(() => {
                declareWinner('x')             
            }, 100);
        }else if(b2child == 'o' && b5child == 'o' && b8child == 'o'){
            setTimeout(() => {
                   declareWinner('o')               
            }, 100); 
        }
    }

    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0 ){
        let b3child = b3.childNodes[0].className;
        let b6child = b6.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if(b3child == 'x' && b6child == 'x' && b9child == 'x'){
            setTimeout(() => {
                declareWinner('x')             
            }, 100);
        }else if(b3child == 'o' && b6child == 'o' && b9child == 'o'){
            setTimeout(() => {
                   declareWinner('o')               
            }, 100);
        }
    }

    // diagonal

    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){
        let b1child = b1.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if(b1child == 'x' && b5child == 'x' && b9child == 'x'){
            setTimeout(() => {
                declareWinner('x')             
            }, 100);
        }else if(b1child == 'o' && b5child == 'o' && b9child == 'o'){
            setTimeout(() => {
                   declareWinner('o')               
            }, 100);
        }
    }


    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){
        let b3child = b3.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b7child = b7.childNodes[0].className;

        if(b3child == 'x' && b5child == 'x' && b7child == 'x'){
            setTimeout(() => {
                declareWinner('x')             
            }, 100);
        }else if(b3child == 'o' && b5child == 'o' && b7child == 'o'){
            setTimeout(() => {
                   declareWinner('o')    

            }, 100);
        }
    }

    // Verifica se deu empate

    let counter = 0;

    for(let i = 0; i < boxes.length; i++){
        if(boxes[i].childNodes[0] != undefined){
            counter++;
        }
    }

    if(counter == 9){
        declareWinner('v');
    }

    function declareWinner(winner){
        let scoreboardX = document.querySelector("#scoreboard-1");
        let scoreboardY = document.querySelector("#scoreboard-2");
        let msg = '';

        if(winner == 'x'){
            scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
            msg = 'Jogador 1 venceu a rodada!'
        }else if(winner == 'o'){
            scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1;
            msg = 'Jogador 2 venceu a rodada!'
        }else if(winner == 'v'){
            msg = 'Deu Velha'
        }

        // exibe mensagem
        messageText.innerHTML = msg;
        messageContainer.classList.remove("hide");

        // Esconde mensagem

        setTimeout(function(){
            messageContainer.classList.add("hide");
        },3000)

        // remove o X e O

        let boxesToRemove = document.querySelectorAll(".box div");

        for(let i = 0; i < boxesToRemove.length; i++){
            boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
        }
    }

}

// Executa a logica da jogada do CPU

function computerPlay(){
    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;

    for(let i = 0; i < boxes.length; i++){
        let randomNumber = Math.floor(Math.random() * 5);

        // Somente preencher se o filho estiver vazio
        if(boxes[i].childNodes[0] == undefined){
            if(randomNumber <= 1){

                boxes[i].appendChild(cloneO);                  
                counter++;
                break;
            // Verifica quantas estão preenchidas
            }else{
                filled ++;
            }
        }

    }
    if(counter == 0 && filled < 9){
        computerPlay();
    }

}
    
