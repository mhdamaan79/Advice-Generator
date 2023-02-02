const btn = document.getElementById("btn");
let advicetext = document.getElementById("advice-text");
let adviceid = document.getElementById("advice-id");


document.addEventListener("DOMContentLoaded", function () {

  btn.addEventListener("click", function () {
    generateAdvice();
  });

  function generateAdvice() {
    fetch("	https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        let {slip:{ advice, id }} = data;
        advicetext.textContent = advice;
        adviceid.textContent = id;
      })
      .catch((error) => {
        alert(`Error ${error}`);
      });
  }
});
