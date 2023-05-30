const sliderCards = document.getElementsByClassName("slider_card");
const slider = document.getElementsByClassName("slider_cards")[0];

const sliderArray = []; //Массив с порядком карточек слайдера
for (let i = 0; i < sliderCards.length; i++) {
  sliderArray.push(i);
}

// Определение стиля для ползунка прокрутки слайдера
const hr1 = document.getElementsByTagName("hr")[0];
const hr2 = hr1.nextElementSibling;
hr2.style.width = hr1.offsetWidth / sliderCards.length + "px";
hr2.style.border = "1px solid rgba(82, 124, 205, 1)";

//Функция изменения положения ползунка
const changeProgress = () => {
  hr2.style.transform =
    "translateX(-" +
    (hr1.offsetWidth -
      (sliderArray[0] + 1) * (hr1.offsetWidth / sliderCards.length)) +
    "px)";
};

//Функция изменения порядка карточек слайдера
const changeOrders = () => {
  for (i = 0; i < sliderCards.length; i++) {
    sliderCards[sliderArray[i]].style.order = i;
  }
};

//Задание стиля для активного слайда
const activeSlide = () => {
  for (i = 0; i < sliderCards.length; i++) {
    sliderCards[i].style.border = "1px solid #CCDDFF";
  }
  sliderCards[sliderArray[0]].style.border = "1px solid rgba(82, 124, 205, 1)";
};

//Переключение слайда вперед
const nextSlide = () => {
  sliderArray.push(sliderArray[0]);
  sliderArray.shift();
  changeOrders();
  activeSlide();
  changeProgress();
};

setInterval(nextSlide, 4000); //Для автоматического переключения слайдов

//Переключения слайда назад
const prevSlide = () => {
  sliderArray.unshift(sliderArray[sliderArray.length - 1]);
  sliderArray.pop();
  changeOrders();
  activeSlide();
  changeProgress();
};

changeProgress();
activeSlide();

//Изменение ширины ползунка при изменении размера экррана
window.addEventListener("resize", (e) => {
  hr2.style.width = hr1.offsetWidth / sliderCards.length + "px";
});

//Реализация swipe

slider.onpointerdown = (event) => {
  event.preventDefault();
  let x = event.clientX;
  slider.onpointermove = (event) => {
    slider.onpointerup = (event) => {
      let x2 = event.clientX;
      Math.sign(x2 - x) < 0 ? nextSlide() : prevSlide();
    };
  };
};
