
alert ("Welcome to TonniPaul's Dice game, all you need do is to refresh the page  and the player with the highest figure on his/her dice wins")
document.querySelector("h6").style.visibility="hidden";
// Image 1

var randomNumber1= Math.floor(Math.random ()* 6)+1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

// imege 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("h6").style.visibility="visible";
}


