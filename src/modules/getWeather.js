const weatherError = document.querySelector('.weather-error');

// перед перезагрузкой или закрытием страницы (событие beforeunload) данные нужно сохранить
function setLocalStorageCity() {
  localStorage.setItem('city', city.value);
}

//перед загрузкой страницы (событие load) данные нужно восстановить и отобразить
function getLocalStorageCity() {
  if (
    localStorage.getItem('city') === null ||
    localStorage.getItem('city').length === 0
  ) {
    city.value = 'Moscow';
    weatherError.textContent = '';
  } else {
    city.value = localStorage.getItem('city');
  }
}

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const weatherHumidity = document.querySelector('.weather-humidity');
const weatherWind = document.querySelector('.weather-wind');
let city = document.querySelector('.city');

////очистка
function clearWeather() {
  weatherIcon.classList.remove(weatherIcon.classList[2]);
  temperature.textContent = '';
  weatherDescription.textContent = '';
  weatherHumidity.textContent = '';
  weatherWind.textContent = '';
}

async function getWeather(language) {
  getLocalStorageCity();

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${language}&appid=165f4afa25f81abcc4f5d808337fd521&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    weatherIcon.className = 'weather-icon owf'; //удаляем все лишние классы перед добавлением нового,
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.floor(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    weatherHumidity.textContent = `Humidity: ${data.main.humidity}%`;
    weatherWind.textContent = `Wind speed: ${Math.floor(data.wind.speed)} m/s`;
    weatherError.textContent = '';
  } catch (error) {
    console.log(error.name + ': ' + error.message);
    console.log(error.stack);
    clearWeather();
    weatherError.textContent = 'The city not found';
  }
  setTimeout(getWeather, 300000);
}

export { getWeather, city, getLocalStorageCity, setLocalStorageCity };
