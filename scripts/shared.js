export function setUserPick(value) {
  localStorage.setItem("userPick", value);
}

export function getUserPick() {
  let userPick = localStorage.getItem("userPick");
  return userPick;
}
