const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;

stopBtn.setAttribute('disabled', 'disabled');

function getRandomHexColor() {
  document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', () => {
    timerId = setInterval(getRandomHexColor, 1000);
    startBtn.setAttribute('disabled', 'disabled');
    stopBtn.removeAttribute('disabled');
});


stopBtn.addEventListener("click", () => {
    stopBtn.setAttribute('disabled', 'disabled');
    clearInterval(timerId);
    startBtn.removeAttribute('disabled');
});
