const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const body = document.querySelector("body");
const missionContainer = document.querySelector('.mission')
const mission = document.querySelector('.mission-word')
const visionContainer = document.querySelector('.vision-container')
const vision = document.querySelector('.vision')
const firstPlus = document.querySelector('.plus1')
const secondPlus = document.querySelector('.plus2')


burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("rotate");
  body.classList.toggle("no-scroll");
});

vision.addEventListener("click", () => {
  visionContainer.classList.toggle("reverse");
  secondPlus.classList.toggle("times");
});

mission.addEventListener("click", () => {
  missionContainer.classList.toggle("reverse");
  firstPlus.classList.toggle("times");
});


