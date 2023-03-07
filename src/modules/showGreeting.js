import greetingTranslation from './greetingTranslation.js';

// приветствие
const greeting = document.querySelector('.greeting');
const date = new Date();
const hours = date.getHours();
let partOfDay = Math.ceil(hours / 6);

//функция отображения приветствия на нужном языке
function showGreeting(language) {
  if (language == 'en' && (partOfDay === 0 || partOfDay === 1)) {
    greeting.textContent = greetingTranslation.en[3];
  } else if (language == 'en' && partOfDay === 2) {
    greeting.textContent = greetingTranslation.en[0];
  } else if (language == 'en' && partOfDay === 3) {
    greeting.textContent = greetingTranslation.en[1];
  } else if (language == 'en' && partOfDay === 4) {
    greeting.textContent = greetingTranslation.en[2];
  } else if (language == 'ru' && (partOfDay === 0 || partOfDay === 1)) {
    greeting.textContent = greetingTranslation.ru[3];
  } else if (language == 'ru' && partOfDay === 2) {
    greeting.textContent = greetingTranslation.ru[0];
  } else if (language == 'ru' && partOfDay === 3) {
    greeting.textContent = greetingTranslation.ru[1];
  } else if (language == 'ru' && partOfDay === 4) {
    greeting.textContent = greetingTranslation.ru[2];
    setTimeout(showGreeting, 36e5);
  }
}

export default showGreeting;
