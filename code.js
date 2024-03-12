function newRound(){
    drawCard();
    var t = document.getElementById("theTarget");
    t.innerText = randomInt(100)+1;
}

function drawCard(){
    var n = randomInt(cards.length)

    var card = cards[n].split(",");

    var blocks = document.getElementsByClassName("block");

    blocks[0].innerText = card[0];
    blocks[1].innerText = card[1];
}

newRound();

