//функция отображения даты
let currDate; //тек неделя и дата
const textDate = document.querySelector('.date');
let currentDate = new Date(); //получаем тек дату

function showDate(language) {
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };

  if (language == 'ru') {
    currDate = currentDate.toLocaleDateString('ru-RU', options);
  } else if (language == 'en') {
    currDate = currentDate.toLocaleDateString('en-US', options);
  } else {
    currDate = currentDate.toLocaleDateString('en-US', options);
  }
  textDate.textContent = currDate;
  setTimeout(showDate, 36e5);
}

export default showDate;
