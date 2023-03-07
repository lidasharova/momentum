import playList from './playList.js';
import addActiveClassSong from './addActiveClassSong.js';
import createListMusic from './createListMusic.js';
import removeActiveClassSong from './removeActiveClassSong.js';
import audio from '../index.js';

//аудиоплеер-------------------------------------------------------------------
let btnPlayPause = document.querySelector('.play');
let time = document.querySelector('.time-song'); //элемент с полосой времени
let currentTimeContainer = document.querySelector('.current-time');
let timeLeftContainer = document.querySelector('.time-left');
let playNum = 0;

//ф-ция проигрывания
function playAudio() {
  audio.src = playList[playNum].src;
  audio.play();
  addActiveClassSong();
}


//обновление прогресс бара
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  let currentTimeSong = Math.round(currentTime); //текущее время трека
  let songLength = Math.round(duration); //вся длина трека

  //отображение чисел прогресс бара
  currentTimeContainer.innerText = formatTime(currentTimeSong);
  timeLeftContainer.innerText = formatTime(songLength - currentTimeSong);
  if (currentTimeContainer.innerText === 'NaN:NaN') {
    currentTimeContainer.innerText = '0:00';
  } else {
    currentTimeContainer.innerText = formatTime(currentTimeSong);
  }
  if (timeLeftContainer.innerText === 'NaN:NaN') {
    timeLeftContainer.innerText = '0:00';
  } else {
    timeLeftContainer.innerText = formatTime(songLength - currentTimeSong);
  }

  //изменение длинны прогрес бара
  let progressPercent = (currentTimeSong / songLength) * 100;
  if (progressPercent === 'NaN') {
    progressPercent = currentTimeSong;
  }
  //присваимваем значение прогресс длинне
  time.style.width = `${progressPercent}%`;
}

// ф-ция преобразования currentTime и duration в формат MM:SS
function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds - min * 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  return `${min}:${sec}`;
}

//ф-ция прокрутки по прогресс бару
function setProgress(e) {
  const width = this.clientWidth; //получаем всю ширину прогресс полоски
  const clickX = e.offsetX; //находим точку по оси х куда был клик
  const duration = audio.duration; //длина всего трека
  audio.currentTime = (clickX / width) * duration; //nекущее время ставим на точку этого клика
}

//ф-ция остановки аудио
function pauseAudio() {
  audio.pause();
  removeActiveClassSong();
}


//переключение треков вперед и назад
function playNext() {
  if (playNum < playList.length) {
    playNum++;
    createListMusic();
    addActiveClassSong();
    playAudio();
  } else {
    playNum = 0;
    createListMusic();
    addActiveClassSong();
    playAudio();
  }
}

function playPrev() {
  if (playNum > 0) {
    playNum--;
    createListMusic();
    addActiveClassSong();
    playAudio();
  } else {
    playNum = playList.length;
    createListMusic();
    addActiveClassSong();
    playAudio();
  }
}

export {
  playAudio,
  pauseAudio,
  playNext,
  playPrev,
  playNum,
  btnPlayPause,
  updateProgress,
  setProgress,
};
