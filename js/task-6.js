function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// DOM öğelerini seç
const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

// Div koleksiyonu oluşturma fonksiyonu
function createBoxes(amount) {
  const boxes = [];
  
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10; // İlk kutu 30px, her biri 10px daha büyük olacak
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px'; // Kutular arasında boşluk ekle
    boxes.push(box);
  }
  
  // Yeni kutuları DOM'a ekle
  boxesContainer.append(...boxes);
}

// Div koleksiyonunu temizleme fonksiyonu
function destroyBoxes() {
  boxesContainer.innerHTML = ''; // div#boxes içeriğini temizle
}

// Create düğmesine tıklanması durumunda
createButton.addEventListener('click', () => {
  const amount = Number(input.value);
  
  if (amount < 1 || amount > 100 || isNaN(amount)) {
    alert('Please enter a number between 1 and 100');
    return; // Geçerli bir sayı değilse işlemi durdur
  }
  
  // Önceki kutuları sil
  destroyBoxes();
  
  // Yeni kutuları oluştur
  createBoxes(amount);
  
  // Input değerini temizle
  input.value = '';
});

// Destroy düğmesine tıklanması durumunda
destroyButton.addEventListener('click', () => {
  // Tüm kutuları sil
  destroyBoxes();
});
