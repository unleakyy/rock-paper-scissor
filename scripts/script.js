import { setUserPick } from "./shared.js";

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    setUserPick(button.value);
    window.location.href = "./result.html";
  });
});
