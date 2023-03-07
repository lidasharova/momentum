import playList from './playList.js';
import { playNum } from './audio.js';

function addActiveClassSong() {
  const songs = document.querySelectorAll('.item-song');

  songs.forEach((song) => {
    if (song.textContent == playList[playNum].title) {
      song.classList.add('item-active');
    } else {
      song.classList.remove('item-active');
    }
  });
}

export default addActiveClassSong;
