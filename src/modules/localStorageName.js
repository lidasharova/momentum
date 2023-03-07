////// Работа с local storage//////
let name = document.querySelector('.name'); //нашли инпут со значением

// перед перезагрузкой или закрытием страницы (событие beforeunload) данные нужно сохранить
function setLocalStorageName() {
  localStorage.setItem('name', name.value);
}

//перед загрузкой страницы (событие load) данные нужно восстановить и отобразить
function getLocalStorageName() {
  if (localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
}

export { setLocalStorageName, getLocalStorageName };
