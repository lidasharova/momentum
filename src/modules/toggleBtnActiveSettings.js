let btnTime = document.querySelector('.Time');
let btnDate = document.querySelector('.Date');
let btnWeather = document.querySelector('.Weather');
let btnGreeting = document.querySelector('.Greeting');
let btnPlayer = document.querySelector('.Player');
let btnQuote = document.querySelector('.Quote');
let btnGitHub = document.querySelector('.GitHub');
let btnUnsplash = document.querySelector('.Unsplash');
let btnFlickr = document.querySelector('.Flickr');

function toggleBtnActiveGitHub() {
  btnGitHub.classList.toggle('button-active');
}
function toggleBtnActiveUnsplash() {
  btnUnsplash.classList.toggle('button-active');
}
function toggleBtnActiveFlickr() {
  btnFlickr.classList.toggle('button-active');
}

function toggleBtnActiveTime() {
  btnTime.classList.toggle('button-active');
}

function toggleBtnActiveDate() {
  btnDate.classList.toggle('button-active');
}

function toggleBtnActiveWeather() {
  btnWeather.classList.toggle('button-active');
}

function toggleBtnActiveGreeting() {
  btnGreeting.classList.toggle('button-active');
}

function toggleBtnActivePlayer() {
  btnPlayer.classList.toggle('button-active');
}
function toggleBtnActiveQuote() {
  btnQuote.classList.toggle('button-active');
}

export {
  toggleBtnActiveTime,
  toggleBtnActiveDate,
  toggleBtnActiveWeather,
  toggleBtnActiveGreeting,
  toggleBtnActivePlayer,
  toggleBtnActiveQuote,
  toggleBtnActiveGitHub,
  toggleBtnActiveUnsplash,
  toggleBtnActiveFlickr,
};
