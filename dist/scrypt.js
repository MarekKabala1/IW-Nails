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
