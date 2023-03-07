function removeActiveClassSong() {
  const song = document.querySelector('.item-active');
  song.classList.remove('item-active');
}

export default removeActiveClassSong;
