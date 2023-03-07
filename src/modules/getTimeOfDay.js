//ф-ция получения текущего времени суток
function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  let arrayTimeOfDay = ['morning', 'afternoon', 'evening', 'night'];
  let partOfDay = Math.ceil(hours / 6);
  if (partOfDay === 1) {
    return arrayTimeOfDay[0];
  } else if (partOfDay === 2) {
    return arrayTimeOfDay[1];
  } else if (partOfDay === 3) {
    return arrayTimeOfDay[2];
  } else if (partOfDay === 4) {
    return arrayTimeOfDay[3];
  } else if (partOfDay == 0) {
    return arrayTimeOfDay[3];
  }
}
export default getTimeOfDay;
