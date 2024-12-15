const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

// input olayını dinle
nameInput.addEventListener('input', () => {
  const name = nameInput.value.trim(); // inputtaki boşlukları temizle

  if (name === "") {
    nameOutput.textContent = "Anonymous"; // boşsa "Anonymous" yerleştir
  } else {
    nameOutput.textContent = name; // aksi takdirde adı yerleştir
  }
});
