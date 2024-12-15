// Ana kategori listesini al
const categoriesList = document.querySelector('#categories');

// Tüm kategori maddelerini (li.item) seç
const categoryItems = categoriesList.querySelectorAll('.item');

// Kategorilerin toplam sayısını konsola yazdır
console.log(`Number of categories: ${categoryItems.length}`);

// Her kategori için başlık ve öğe sayısını yazdır

categoryItems.forEach(item => {
  // Başlığı (h2) bul
  const title = item.querySelector('h2').textContent;

  // Alt liste elemanlarını (li) bul
  const elements = item.querySelectorAll('ul li');

  // Başlık ve öğe sayısını konsola yazdır
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements.length}`);
});
