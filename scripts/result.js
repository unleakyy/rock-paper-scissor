import { getUserPick } from "./shared.js";

let userPick = getUserPick();

const computerContainer = document.getElementById("computer-container");
const userContainer = document.getElementById("user-container");

const computerElement = document.createElement("button");
const userElement = document.createElement("button");
userElement.id = "user";

let paperValue = "25% 120%";
let rockValue = "115% 10%";
let scissorValue = "-5% -25%";

battleResult(getUserSign, getComputerSign, userPick);

function getComputerSign(hand) {
  computerElement.style.cssText = `  
        background-image: url(images/signs.png);
        background-repeat: no-repeat;
        background-position: ${hand};
        background-size: 200%;`;
  computerContainer.append(computerElement);
}

function getUserSign(hand) {
  userElement.style.cssText = `  
        background-image: url(images/signs.png);
        background-repeat: no-repeat;
        background-position: ${hand};
        background-size: 200%;`;
  userContainer.append(userElement);
}

function battleResult(callBackUser, callBackComputer, userInput) {
  const comp = {
    scissor: rockValue,
    rock: paperValue,
    paper: scissorValue,
  };

  const user = {
    scissor: scissorValue,
    rock: rockValue,
    paper: paperValue,
  };

  callBackUser(user[userInput]);
  callBackComputer(comp[userInput]);

  setTimeout(() => {
    const displayText = document.querySelector("p");
    displayText.textContent = "YOU LOST, BRO";
    const aLink = document.querySelector("a");
    aLink.textContent = "Play Again";
  }, 2000);
}
