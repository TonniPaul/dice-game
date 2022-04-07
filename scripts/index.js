
function getRandomNumber(){
    return Math.floor(Math.random ()* 6)+1;

}

function getRandomImageSource(number){
    const randomDiceImage = "dice" + number + ".png";
    return "images/" + randomDiceImage;
}
// Image 1

function getWinner(){

    document.querySelector("h6").hidden = true;
    const randomNumber1 = getRandomNumber();
    const randomNumber2 = getRandomNumber();

    const image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", getRandomImageSource(randomNumber1));
    const image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", getRandomImageSource(randomNumber2));

    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML="Player 1 wins";
    }
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML="Player 2 Wins";
    }
    else{
        document.querySelector("h1").innerHTML="Try Again";
        document.querySelector("h6").hidden = false;
    }
}







