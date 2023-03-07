//функция отображения времени
function showTime() {
  //часы и  дата
  const time = document.querySelector('.time');
  let currentTime; //тек время
  let currentDate = new Date(); //получаем тек дату
  currentTime = currentDate.toLocaleTimeString(); //получаем тек время
  time.textContent = currentTime;

  //если поменять параметр на 'ru' то изменится язык приветствия
  setTimeout(showTime, 1000);
}

export default showTime;
