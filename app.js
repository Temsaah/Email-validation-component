let inputText = document.querySelector("input");
let icon = document.querySelector("i");
let pattern = /^[A-Za-z0-9._-]+@\w+\.\w{2,5}$/;

inputText.oninput = function (e) {
  if (inputText.value.match(pattern)) {
    icon.className = "fa-solid fa-circle-check";
  } else {
    icon.className = "fa-solid fa-envelope";
  }
};

inputText.onkeydown = function (e) {
  if (e.keyCode === 32) {
    return false;
  }
};
