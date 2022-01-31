// hamburger menu
const hamburgerWrapper = document.querySelector("#hamburger-wrapper");
const hamburger = document.querySelectorAll("#hamburger-wrapper div");
const navWrapper = document.querySelector("#nav-wrapper");

hamburgerWrapper.addEventListener("click", () => {
  navWrapper.classList.toggle("nav-active");
  hamburgerWrapper.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (e.target !== hamburgerWrapper) {
    navWrapper.classList.remove("nav-active");
    hamburgerWrapper.classList.remove("active");
  }
});

const french = document.querySelector(".section-three_french");

french.addEventListener("click", (e) => {
  // const div = document.createElement("div");
  // french.appendChild(div);
  console.log("click", e.target);
});
