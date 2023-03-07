//////////////////////получение цитат из файла/////////////////////

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

//асинхронная ф-ция получения данных и отрисовки элементов
async function getQuotes(lang) {
  const url = 'dist/quotes.json';
  const res = await fetch(url);
  const quotes = await res.json();
  //рандомный индекса
  let index = Math.floor(Math.random() * (quotes.length - 0 + 0)) + 0;

  //помещаем контент в элементы в зависимости от языка
  if (lang === 'ru') {
    quote.textContent = quotes[index].textRu;
    author.textContent = quotes[index].authorRu;
  }
  if (lang === 'en') {
    quote.textContent = quotes[index].textEn;
    author.textContent = quotes[index].authorEn;
  }
}

export default getQuotes;
