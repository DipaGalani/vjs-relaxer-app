const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

const breathAnimation = () => {
  container.classList.remove("shrink");
  container.classList.add("grow");
  text.textContent = "Breathe In";

  setTimeout(() => {
    container.classList.add("grow");
    text.textContent = "Hold";

    setTimeout(() => {
      container.classList.remove("grow");
      container.classList.add("shrink");
      text.textContent = "Breathe Out";
    }, holdTime);
  }, breatheTime);
};

breathAnimation();

setInterval(breathAnimation, totalTime);
