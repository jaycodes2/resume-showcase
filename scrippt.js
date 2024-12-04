document.addEventListener("DOMContentLoaded", () => {
  // Animate circular skills
  const circles = document.querySelectorAll(".circular-skill .circle");
  circles.forEach((circle) => {
    const percent = circle.getAttribute("data-percent");
    circle.style.background = `conic-gradient(#ffcc00 0% ${percent}%, #1c1c54 ${percent}% 100%)`;
  });

  // Animate skill bars
  const skillBars = document.querySelectorAll(".skill-bar .bar span");
  skillBars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => {
      bar.style.width = width;
    }, 500);
  });
});
