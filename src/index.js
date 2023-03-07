import {
  setLocalStorageName,
  getLocalStorageName,
} from './modules/localStorageName.js';

import showTime from './modules/showTime.js';
import showDate from './modules/showDate.js';
import { getSlideNext, getSlidePrev, setBgGit } from './modules/bgSlider.js';
import {
  getWeather,
  city,
  getLocalStorageCity,
  setLocalStorageCity,
} from './modules/getWeather.js';
import getQuotes from './modules/getQuotes.js';
import toggleBtnPlay from './modules/toggleBtnPlay.js';
import showGreeting from './modules/showGreeting.js';
import {
  playAudio,
  pauseAudio,
  playNext,
  playPrev,
  updateProgress,
  setProgress,
} from './modules/audio.js';
import createListMusic from './modules/createListMusic.js';
import toggleSettings from './modules/toggleSettings.js';
import {
  hidePlayer,
  hideWeather,
  hideTime,
  hideDate,
  hideQuote,
  hideGreeting,
} from './modules/hideDisplay.js';

import {
  toggleBtnActiveTime,
  toggleBtnActiveDate,
  toggleBtnActiveWeather,
  toggleBtnActiveGreeting,
  toggleBtnActivePlayer,
  toggleBtnActiveQuote,
  toggleBtnActiveGitHub,
  toggleBtnActiveUnsplash,
  toggleBtnActiveFlickr,
} from './modules/toggleBtnActiveSettings.js';
import setBgUn from './modules/setBgUn.js';
import setBgFl from './modules/setBgFl.js';

//язык по умолчанию
let language = 'en';
//дата,время,приветствие
showTime();
showDate(language);
showGreeting(language);
getQuotes(language);

//смена фоновой картинки
setBgGit();

//работа с localStorageName для имени
window.addEventListener('beforeunload', setLocalStorageName);
window.addEventListener('load', getLocalStorageName);

window.addEventListener('beforeunload', setLocalStorageCity);
window.addEventListener('load', getLocalStorageCity);

//слайдер фона
let slideNext = document.querySelector('.slide-next');
let slidePrev = document.querySelector('.slide-prev');

slideNext.addEventListener('click', () => {
  getSlideNext();
  getQuotes(language);
});

slidePrev.addEventListener('click', () => {
  getSlidePrev();
  getQuotes(language);
});

//получение погоды
getWeather(language);

// изменения города
city.addEventListener('change', setLocalStorageCity);

city.addEventListener('change', () => {
  getWeather(language);
});

window.addEventListener('load', getLocalStorageCity);

//переключение цитат на кнопочку
let changeQuote = document.querySelector('.change-quote');

changeQuote.addEventListener('click', () => {
  if (language === 'en') {
    getQuotes('en');
  } else if (language === 'ru') {
    getQuotes('ru');
  }
});

//аудиоплеер-----------
//создаем aудио плеер
const audio = new Audio();
audio.volume = 0.4;
let isPlay = false; //флажок играет ли музыка
let btnPlayPause = document.querySelector('.play');

//создание списка песен
createListMusic();

//прокрутка по прогресс бару
const progressContainer = document.querySelector('.audio-track');
progressContainer.addEventListener('click', setProgress);
//переключение на след трек
audio.addEventListener('ended', playNext);

// window.addEventListener('load', function () {
btnPlayPause.addEventListener('click', () => {
  toggleBtnPlay(btnPlayPause);
});

let curTime = 0;
//вкл/выкл трека;
btnPlayPause.addEventListener('click', () => {
  if (isPlay == false) {
    playAudio();
    isPlay = true;
    audio.currentTime = curTime;
  } else {
    pauseAudio();
    isPlay = false;
    curTime = audio.currentTime;
  }
});

/////// кнопка громкости
const volumeWrapper = document.querySelector('.volume-wrapper'); //контейнер на который нажимаем
const volumeContainer = document.querySelector('.volume-container'); //полоска громкости
const volumeButton = document.querySelector('.volume-button');

//отображения полосы звука при наведении
volumeWrapper.addEventListener('mouseover', toggleSoundDisplay);
volumeWrapper.addEventListener('mouseout', toggleSoundDisplay);
function toggleSoundDisplay() {
  volumeContainer.classList.toggle('volume-visible');
}

//изменение громкости
volumeWrapper.addEventListener('click', (e) => setVolume(e));
function setVolume(e) {
  const sliderWidth = window.getComputedStyle(volumeWrapper).width;
  const newVolume = e.offsetX / parseInt(sliderWidth);
  audio.volume = newVolume;
  document.querySelector('.volume').style.width = newVolume * 100 + '%';
  if (newVolume > 0.3 && !audio.muted) {
    volumeButton.classList.remove('volume-off');
  }
}

//отключение звука на кнопку
volumeButton.addEventListener('click', () => {
  if (audio.muted) {
    audio.muted = !audio.muted;
    //выкл муз
    volumeButton.classList.remove('volume-off');
  } else {
    audio.muted = true;
    volumeButton.classList.add('volume-off');
  }
});

//прогресс бар
audio.addEventListener('timeupdate', updateProgress);

// //переключение треков на кнопки вперед/назад
const btnPlayPrev = document.querySelector('.play-prev');
const btnPlayNext = document.querySelector('.play-next');

btnPlayPrev.addEventListener('click', () => {
  if (!isPlay) {
    isPlay = true;
    playPrev();
    toggleBtnPlay(btnPlayPause);
  } else {
    playPrev();
  }
});

btnPlayNext.addEventListener('click', () => {
  if (!isPlay) {
    isPlay = true;
    playNext();
    toggleBtnPlay(btnPlayPause);
  } else {
    playNext();
  }
});

//открытие/скрытие настроек
let btnSettings = document.querySelector('.setting-img ');
btnSettings.addEventListener('click', toggleSettings);

//скрытие элементов
let btnTime = document.querySelector('.Time ');
let btnDate = document.querySelector('.Date');
let btnWeather = document.querySelector('.Weather ');
let btnGreeting = document.querySelector('.Greeting ');
let btnPlayer = document.querySelector('.Player ');
let btnQuote = document.querySelector('.Quote ');

btnTime.addEventListener('click', () => {
  hideTime();
  toggleBtnActiveTime();
});

btnDate.addEventListener('click', () => {
  hideDate();
  toggleBtnActiveDate();
});

btnWeather.addEventListener('click', () => {
  hideWeather();
  toggleBtnActiveWeather();
});

btnGreeting.addEventListener('click', () => {
  hideGreeting();
  toggleBtnActiveGreeting();
});

btnPlayer.addEventListener('click', () => {
  hidePlayer();
  toggleBtnActivePlayer();
});

btnQuote.addEventListener('click', () => {
  hideQuote();
  toggleBtnActiveQuote();
});

//смена языка
const radios = document.querySelectorAll('input[type=radio][name="language"]');

radios.forEach((radio) =>
  radio.addEventListener('change', () => {
    language = radio.value;
    getWeather(language);
    showDate(language);
    showGreeting(language);
    getQuotes(language);
  })
);

let btnGitHub = document.querySelector('.GitHub');
let btnUnsplash = document.querySelector('.Unsplash');
let btnFlickr = document.querySelector('.Flickr');

btnGitHub.addEventListener('click', () => {
  setBgGit();
  toggleBtnActiveGitHub();
  if (
    btnUnsplash.classList.contains('button-active') &&
    btnFlickr.classList.contains('button-active')
  ) {
    toggleBtnActiveFlickr();
    toggleBtnActiveUnsplash();
  } else if (btnUnsplash.classList.contains('button-active')) {
    toggleBtnActiveUnsplash();
  } else if (btnFlickr.classList.contains('button-active')) {
    toggleBtnActiveFlickr();
  }
});

btnUnsplash.addEventListener('click', () => {
  setBgUn();
  toggleBtnActiveUnsplash();
  if (
    btnGitHub.classList.contains('button-active') &&
    btnFlickr.classList.contains('button-active')
  ) {
    toggleBtnActiveFlickr();
    toggleBtnActiveGitHub();
  } else if (btnGitHub.classList.contains('button-active')) {
    toggleBtnActiveGitHub();
  } else if (btnFlickr.classList.contains('button-active')) {
    toggleBtnActiveFlickr();
  }
});

btnFlickr.addEventListener('click', () => {
  setBgFl();
  toggleBtnActiveFlickr();
  if (
    btnGitHub.classList.contains('button-active') &&
    btnUnsplash.classList.contains('button-active')
  ) {
    toggleBtnActiveUnsplash();
    toggleBtnActiveGitHub();
  } else if (btnGitHub.classList.contains('button-active')) {
    toggleBtnActiveGitHub();
  } else if (btnUnsplash.classList.contains('button-active')) {
    toggleBtnActiveUnsplash();
  }
});

export default audio;
