const form = document.querySelector('.login-form');

// form submit olayını dinle
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Sayfa yeniden yüklenmesin

  const email = form.elements.email.value.trim(); // Kenarlardaki boşlukları temizle
  const password = form.elements.password.value.trim(); // Kenarlardaki boşlukları temizle

  // Formda doldurulmamış alanlar varsa uyarı göster
  if (email === "" || password === "") {
    alert('All form fields must be filled in');
    return;
  }

  // Alan adları ve değerlerinden oluşan bir nesne oluştur
  const formData = {
    email: email,
    password: password
  };

  // Nesneyi konsola yazdır
  console.log(formData);

  // Formu sıfırla
  form.reset();
});