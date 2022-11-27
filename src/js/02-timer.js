import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector('button[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

let dateInput = document.querySelector('#datetime-picker');
let timeToUpdate = 0;
let initialDate = 0;
let chosenDate = 0;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    maxDate: new Date().fp_incr(100),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        initialDate = new Date;
        chosenDate = selectedDates[0].getTime();
        if (initialDate > chosenDate) {
            window.alert("Please choose a date in the future");
            return;
        }
        else {
            timeToUpdate = convertMs(chosenDate - initialDate);
            startBtn.removeAttribute('disabled');
    
        }
    }
};

flatpickr('#datetime-picker', options);
    

const timer = {
    timerId: null,
    isActive: false,

    onClose() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        const currentDate = Date.now();
        let counting = chosenDate - currentDate;

        this.timerId = setInterval(() => {
            counting = counting -= 1000;
            const timerComponents = convertMs(counting);
            updateTimer(timerComponents);
        if (counting <= 1000) {
        stopTimer(this.timerId);
      }
        }, 1000)
    },
}

function stopTimer(interval) {
  clearInterval(interval);
  console.log(`Interval with id ${interval} has stopped!`);
}


startBtn.setAttribute('disabled', 'disabled');


function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;


  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
    
    return { days, hours, minutes, seconds };
    
}

function updateTimer(timeToUpdate) {
    dataDays.textContent = timeToUpdate.days;
    dataHours.textContent = timeToUpdate.hours;
    dataMinutes.textContent = timeToUpdate.minutes;
    dataSeconds.textContent = timeToUpdate.seconds;
}

startBtn.onclick = function onStartBtnClick() {
    startBtn.setAttribute('disabled', 'disabled');
    timer.onClose();
};








