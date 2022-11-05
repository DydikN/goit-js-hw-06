function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  changeColorBtnEl: document.querySelector('.change-color'),
  bodyBgColorEl: document.querySelector('body'),
  colorEl: document.querySelector('.color'),
};

refs.changeColorBtnEl.addEventListener('click', () => {
  refs.bodyBgColorEl.style.backgroundColor = getRandomHexColor();
  refs.colorEl.textContent = refs.bodyBgColorEl.style.backgroundColor;
});
