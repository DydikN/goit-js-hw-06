const inputEl = document.querySelector('#validation-input');

const onBlur = event => {
  if (
    event.currentTarget.value.trim().length ===
    Number(event.currentTarget.dataset.length)
  ) {
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid');
  } else {
    event.currentTarget.classList.remove('valid'),
      event.currentTarget.classList.add('invalid');
  }
};

inputEl.addEventListener('blur', onBlur);
