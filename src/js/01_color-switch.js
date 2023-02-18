// Перемикач кольорів
// Є масив кольорів в hex-форматі і кнопки Start і Stop.
const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548',];

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]')
}
// Напиши скрипт, який після натискання кнопки Start, раз в секунду змінює колір фону body на випадкове значення з масиву використовуючи інлайн-стиль. При натисканні на кнопку Stop, зміна кольору фону повинна зупинятися.
// ⚠️ Врахуй, на кнопку Start можна натиснути нескінченну кількість разів. Зроби так, щоб поки зміна теми запущена, кнопка Start була не активна.


const randomColorBody = {
  intervalId: null,

  startChangeColor() {
    refs.startBtn.classList.add('disabled')
    refs.startBtn.setAttribute("disabled", "disabled");

    this.intervalId = setInterval(() => {
      const numberColor = this.randomIntegerFromInterval(0, colors.length)
      console.log(numberColor)

      document.body.style.backgroundColor = colors[numberColor]
    }, 1000);
  },

  stopChangeColor() {
    clearInterval(this.intervalId)
    refs.startBtn.removeAttribute("disabled")
  },
// Для генерації випадкового числа (індекс елемента масиву квітів), використовуй функцію randomIntegerFromInterval.
  randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
},
};

refs.startBtn.addEventListener('click', () => {
  randomColorBody.startChangeColor()
})
refs.stopBtn.addEventListener('click', () => {
  randomColorBody.stopChangeColor()
})

