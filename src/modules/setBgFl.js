let randomNum;
//ф-ция  получения рандомного числа строкой с 1-20 в виде двухзначного числа
function getRandomNum() {
  randomNum = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
}

async function setBgFl() {
  let link = '';
  let randLink = '';
  let img = new Image();
  getRandomNum();
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=8bbd7282d3a76766c8fb0b458dfd3a5c&tags=nature&extras=url_l&format=json&nojsoncallback=1`;
  const res = await fetch(url);
  const data = await res.json();
  let array = data;
//ссылка на фото из массива фото
  randLink = array.photos.photo[randomNum].url_l;
  link = `url('${randLink}')`;
  img.src = randLink;
  img.onload = () => {
    document.body.style.backgroundImage = link;
  };
}

// СЛАЙДЕР ВПРАВО увеличивает рандомное число на 1 пока результат не станет равным 20. Если результат сложения равен 20, следующему за ним числу присваиваете значение 1.
function getSlideNext() {
  if (randomNum < 40) {
    randomNum++;
    setBgFl();
  } else {
    randomNum = 1;
    setBgFl();
  }
}

//СЛАЙДЕР ВЛЕВО уменьшает рандомное число на единицу, пока оно больше 1. Если результат вычитания равен 1, следующему за ним числу присваиваете значение 20.

function getSlidePrev() {
  if (randomNum > 1) {
    randomNum--;
    setBgFl();
  } else {
    randomNum = 40;
    setBgFl();
  }
}

export default setBgFl;
