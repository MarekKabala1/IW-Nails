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

// My service popup menu
const popupFrench = document.querySelectorAll(".section-three_li");
const popupClassic = document.querySelector(".classic-photo");
const popupPhoto = document.querySelector(".section-three-li_photo");

popupFrench.forEach((popup) => {
  popup.addEventListener("click", (e) => {
    e.preventDefault();
    popupPhoto.style.display = "flex";

    document.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("click", e.target);

      if (e.target === popup) {
        popupPhoto.style.display = "flex";
      } else {
        popupPhoto.style.display = "none";
      }
    });
  });
});
