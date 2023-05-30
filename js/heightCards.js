const sliderCardsH = document.querySelectorAll(".slider_card h3");
const heights = [];
for (let i = 0; i < sliderCardsH.length; i++) {
  heights.push(sliderCardsH[i].offsetHeight);
}
const height = Math.max.apply(null, heights);

for (let i = 0; i < sliderCardsH.length; i++) {
  sliderCardsH[i].style.height = height + "px";
}
