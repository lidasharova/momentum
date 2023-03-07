import getTimeOfDay from './getTimeOfDay.js';

let randomNum;
//ф-ция  получения рандомного числа строкой с 1-20 в виде двухзначного числа
function getRandomNum() {
  let num = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
  randomNum = String(num).padStart(2, '0');
}

//ф-ция установки рандомного бэграунда(после загрузки картинки)
function setBgGit() {
  let randLink;
  let img = new Image();
  let timeOfDay = getTimeOfDay();
  getRandomNum();
  randLink = `url('https://raw.githubusercontent.com/lidasharova/stage1-tasks/assets/images/${timeOfDay}/${randomNum}.jpg')`;
  img.src = `https://raw.githubusercontent.com/lidasharova/stage1-tasks/assets/images/${timeOfDay}/${randomNum}.jpg`;
  img.onload = () => {
    document.body.style.backgroundImage = randLink;
  };
}

//ф-ция для переключения слайдера изображения--
//Внутри этих функций вызываем функцию setBg(), обновляющую фоновое изображение.
// СЛАЙДЕР ВПРАВО увеличивает рандомное число на 1 пока результат не станет равным 20.
//Если результат сложения равен 20, следующему за ним числу присваиваете значение 1.
function getSlideNext() {
  if (randomNum < 20) {
    randomNum++;
    setBgGit();
  } else {
    randomNum = 1;
    setBgGit();
  }
}

//СЛАЙДЕР ВЛЕВО уменьшает рандомное число на единицу, пока оно больше 1. Если результат вычитания равен 1, следующему за ним числу присваиваете значение 20.

function getSlidePrev() {
  if (randomNum > 1) {
    randomNum--;
    setBgGit();
  } else {
    randomNum = 20;
    setBgGit();
  }
}

export { getSlideNext, getSlidePrev, setBgGit };
