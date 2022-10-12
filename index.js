var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);
var randomNumber1Path = "images/dice" + randomNumber1 + ".png";
var randomNumber2Path = "images/dice" + randomNumber2 + ".png";

function modifyH1(text) {
  document.querySelector("h1").textContent = text;
}

document.querySelector(".img1").setAttribute("src", randomNumber1Path);
document.querySelector(".img2").setAttribute("src", randomNumber2Path);

if (randomNumber1 > randomNumber2)
  modifyH1("🚩 Player 1 Wins!");
else if (randomNumber2 > randomNumber1)
  modifyH1("Player 2 Wins! 🚩");
else
  modifyH1("Draw!");
