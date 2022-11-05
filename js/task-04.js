const valueEl = document.querySelector("#value");
const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');

let counterValue = 0;
const handleDec = () => {
  counterValue -= 1;
  value();
};

const handleInc = () => {
  counterValue += 1;
  value();
};

const value = () => {
  valueEl.textContent = counterValue;
};
decrementEl.addEventListener("click", handleDec);
incrementEl.addEventListener("click", handleInc);
