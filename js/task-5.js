function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// button.change-color öğesini seç
const changeColorButton = document.querySelector('.change-color');

// button.change-color öğesine tıklama olayını dinle
changeColorButton.addEventListener('click', () => {
  // Rastgele renk oluştur
  const randomColor = getRandomHexColor();

  // <body> arka plan rengini değiştir
  document.body.style.backgroundColor = randomColor;

  // <span class="color"> öğesine rastgele rengi ata
  document.querySelector('.color').textContent = randomColor;
});