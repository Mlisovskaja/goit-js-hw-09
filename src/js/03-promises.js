const form = document.querySelector('.form');
const firstDelayInput = document.querySelector('input[name="delay"]');
const delayStepInput = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('input[name="amount"]');

form.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
   return new Promise((resolve, reject) => {
     setTimeout(() => {
       const shouldResolve = Math.random() > 0.3;
       if (shouldResolve) {
         resolve({ position, delay });
       }
       else {
         reject({ position, delay });
       }
     }, delay);
     });
}
    
function onFormSubmit(event) {
  event.preventDefault();

  let firstDelayValue = Number(firstDelayInput.value);
  let delayStepValue = Number(delayStepInput.value);
  let amountValue = Number(amountInput.value);

  for (let i = 0; i < amountValue; i += 1) {
    createPromise(i + 1, i * delayStepValue + firstDelayValue)
      .then(({ position, delay }) => {
        window.alert(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        window.alert(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
  event.target.reset();
}
