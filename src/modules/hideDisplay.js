let player = document.querySelector('.player');
let weather = document.querySelector('.weather');
let time = document.querySelector('.time');
let date = document.querySelector('.date');
let quote = document.querySelector('.quote-container');
let greeting = document.querySelector('.greeting-container');

function hidePlayer() {
  player.classList.toggle('hide');
}

function hideWeather() {
  weather.classList.toggle('hide');
}

function hideTime() {
  time.classList.toggle('hide');
}

function hideDate() {
  date.classList.toggle('hide');
}

function hideQuote() {
  quote.classList.toggle('hideQuote');
}

function hideGreeting() {
  greeting.classList.toggle('hide');
}

export { hidePlayer, hideWeather, hideTime, hideDate, hideQuote, hideGreeting };
