// hamburger menu
const hamburgerWrapper = document.querySelector("#hamburger-wrapper");
const hamburger = document.querySelectorAll("#hamburger-wrapper div");
const navWrapper = document.querySelector("#nav-wrapper");
const body = document.querySelector("body");

hamburgerWrapper.addEventListener("click", (e) => {
  navWrapper.classList.toggle("nav-active");
  hamburgerWrapper.classList.toggle("active");
  window.addEventListener("click", function (e) {});
});
// hamburger.forEach((item) =>
//   item.addEventListener("click", function (e) {
//     navWrapper.classList.toggle("nav-active");
//     hamburgerWrapper.classList.toggle("active");
//     console.log(this);
//   })
// );
