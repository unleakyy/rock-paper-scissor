const userBtns = document.querySelectorAll(".userBtns");
let computerBtns = document.querySelectorAll(".computerBtns");
computerBtns = Array.from(computerBtns);

const h2 = document.querySelector("h2");

let computerSign = "";
let userSign = "";

userBtns.forEach((button) => {
  button.addEventListener("click", (event) => {
    userSign = event.target.id;
    event.target.style.backgroundColor = "hsla(221, 87%, 50%, 1)";

    for (let button of userBtns) {
      button.setAttribute("disabled", true);
      if (button.id != userSign) {
        button.classList.add("fadeOut");
      } else {
        setTimeout(() => {
          button.classList.add("center");
        }, 1200);
      }
    }
    for (let i = 0; i < 2; i++) {
      const random = generateRandom(computerBtns.length);
      computerBtns[random].classList.add("fadeOut");
      computerBtns.splice(random, 1);
    }
    setTimeout(() => {
      computerBtns[0].classList.add("center");
    }, 1200);

    setTimeout(() => {
      computerSign = getComputerSign();
      setTimeout(() => {
        h2.textContent = result(userSign, computerSign);
        if (h2.textContent == "YOU WON!") {
          h2.style.color = "white";
        } else {
          h2.style.color = "red";
        }
      }, 500);
    }, 800);
  });
});

function generateRandom(length) {
  return Math.floor(Math.random() * length);
}

function getComputerSign() {
  const random = generateRandom(signsArray.length);
  computerBtns[0].style.cssText = `  
  background-image: url(images/signs.png);
  background-size: 200%;
  background-repeat: no-repeat;
  background-position: ${signs[signsArray[random]]};
  transition: background-color 0.2s;
  background-color: red`;
  return signsArray[random];
}
const signs = {
  scissor: "-5% -25%",
  rock: "115% 10%",
  paper: "25% 120%",
};

const signsArray = ["scissor", "rock", "paper"];

function result(user, comp) {
  if (user == comp) {
    return `IT'S A TIE`;
  } else {
    switch (user) {
      case "rock":
        return comp == "scissor" ? "YOU WON!" : "YOU LOST!";
        break;
      case "paper":
        return comp == "rock" ? "YOU WON!" : "YOU LOST!";
        break;
      case "scissor":
        return comp == "paper" ? "YOU WON!" : "YOU LOST!";
        break;
    }
  }
}
