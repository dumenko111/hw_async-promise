{
  "name": "hw_async-promise",
  "version": "1.0.0",
  "description": "",
  "source": "src/index.html",     😀Постав в package.json для Parcel!!!!!!!!!!!!!!!!!!!!!!!!!
  "main": "index.js",
  "scripts": {
    "start": "parcel",
    "build": "parcel build"
  },

//////////////////////////TASK #1/////////////////////////////////////////////
Перемикач кольорів
Є масив кольорів в hex-форматі і кнопки Start і Stop.
const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548',];

<button type="button" data-action="start">Start</button>
<button type="button" data-action="stop">Stop</button>

Напиши скрипт, який після натискання кнопки Start, раз в секунду змінює колір фону body на випадкове значення з масиву використовуючи інлайн-стиль. При натисканні на кнопку Stop, зміна кольору фону повинна зупинятися.

⚠️ Врахуй, на кнопку Start можна натиснути нескінченну кількість разів. Зроби так, щоб поки зміна теми запущена, кнопка Start була не активна.

Для генерації випадкового числа (індекс елемента масиву квітів), використовуй функцію randomIntegerFromInterval.

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
//////////////////////////TASK #1/////////////////////////////////////////////