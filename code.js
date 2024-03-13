function newRound(){
    drawCard();
    var t = document.getElementById("theTarget");
    t.classList = "";
    t.innerText = randomInt(101);
    var e = document.getElementsByClassName("eye");
    e[0].classList.remove("green");
}

function drawCard(){
    var n = randomInt(cards.length)

    var card = cards[n].split(",");

    var blocks = document.getElementsByClassName("block");

    blocks[0].innerText = card[0];
    blocks[1].innerText = card[1];
}

newRound();

function toggleHide(){
    
    var t = document.getElementById("theTarget");
    t.classList.toggle("hidden");
    var e = document.getElementsByClassName("eye");
    e[0].classList.toggle("green");

    
}