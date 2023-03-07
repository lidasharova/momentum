let link;
let randLink;
let img = new Image();
async function setBgUn() {
  const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=hhPlBGedeO_U6VRYuu0X4zM6E2f7k68TCN46p3x7gUM`;
  const res = await fetch(url);
  const data = await res.json();
  randLink = data.urls.regular;
  link = `url('${randLink}')`;
  img.src = randLink;
  img.onload = () => {
    document.body.style.backgroundImage = link;
  };
}

// СЛАЙДЕР ВПРАВО увеличивает рандомное число на 1 пока результат не станет равным 20. Если результат сложения равен 20, следующему за ним числу присваиваете значение 1.
function getSlideNextUn() {
  setBgUn();
}

//СЛАЙДЕР ВЛЕВО уменьшает рандомное число на единицу, пока оно больше 1. Если результат вычитания равен 1, следующему за ним числу присваиваете значение 20.

function getSlidePrevUn() {
  setBgUn();
}

export default setBgUn;
