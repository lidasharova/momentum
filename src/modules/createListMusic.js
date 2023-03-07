import playList from './playList.js';
import { playNum } from './audio.js';

let arrayTitle = []; //создадим новый массив в котором будут храниться все названия песен
const playListContainer = document.querySelector('.play-list');
playList.forEach((song) => {
  arrayTitle.push(song.title);
});

let currentArrayTitle = []; //создаем массив с видимыми треками
function createCurrentListMusic() {
  currentArrayTitle = [];
  for (let i = 0; i < 4; i++) {
    let index = playNum + i;
    //условие если список песен закончится
    if (arrayTitle[index] !== undefined) {
      currentArrayTitle.push(arrayTitle[index]);
    } else {
      index = 0;
    }
  }
}

function clearListMusic() {
  playListContainer.innerHTML = '';
}

function createListMusic() {
  createCurrentListMusic();
  clearListMusic();

  currentArrayTitle.forEach((song) => {
    let htmlSong = `
    <li class= "item-song">${song}</li>
      `;
    playListContainer.insertAdjacentHTML('beforeend', htmlSong);

    //второй способ вставки разметки-------------------
    // const li = document.createElement('li');
    // li.classList.add('play-item');
    // li.textContent = song;
    // playListContainer.append(li);
  });
}

export default createListMusic;
