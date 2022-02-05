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
const popupPhotoDiv = document.querySelector(".section-three-li_photo");
const mainConteiner = document.querySelector(".main-conteiner");

popupFrench.forEach((popup, index, imgArr) => {
  popup.addEventListener("click", (e) => {
    e.preventDefault();
    let imgArr = [index];
    //prettier - ignore;
    popupPhotoDiv.innerHTML = `<img src="img&svg/service${imgArr}.jpeg">`;

    console.log(index, popupPhotoDiv, imgArr);
    document.addEventListener("click", (e) => {
      e.preventDefault();
      // console.log("click", e.target);

      if (e.target === popup) {
        popupPhotoDiv.style.display = "flex";
        popupPhotoDiv.style.animation = "scaleAnimation 400ms ease-in";
      } else {
        popupPhotoDiv.style.display = "none";
      }
    });
  });
});
