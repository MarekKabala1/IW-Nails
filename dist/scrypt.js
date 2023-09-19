// hamburger menu
const manu = () => {
	const hamburgerWrapper = document.querySelector('#hamburger-wrapper');
	const hamburger = document.querySelectorAll('#hamburger-wrapper div');
	const navWrapper = document.querySelector('#nav-wrapper');
	const mainConteiner = document.querySelectorAll('section');

	hamburgerWrapper.addEventListener('click', () => {
		navWrapper.classList.toggle('nav-active');
		hamburgerWrapper.classList.toggle('active');
	});
	document.addEventListener('click', (e) => {
		if (e.target !== hamburgerWrapper) {
			navWrapper.classList.remove('nav-active');
			hamburgerWrapper.classList.remove('active');
		}
	});
};
manu();

// My service popup photos,removing and adding background
const popupPhotos = () => {
	const popupFrench = document.querySelectorAll('.section-three_li');
	const popupClassic = document.querySelector('.classic-photo');
	const popupPhotoDiv = document.querySelector('.section-three-li_photo');
	const mainConteiner = document.querySelector('.main-conteiner');
	const sections = document.querySelectorAll('section');

	popupFrench.forEach((popup, index) => {
		popup.addEventListener('click', () => {
			let imgArr = [index];

			// prettier-ignore
			popupPhotoDiv.innerHTML =
     `<img src="img&svg/service${imgArr}.jpeg">`;

			document.addEventListener('click', (e) => {
				sections.forEach((section) => {
					if (e.target === popup) {
						popupPhotoDiv.style.display = 'flex';
						popupPhotoDiv.style.animation = 'scaleAnimation 400ms ease-in';
						mainConteiner.classList.remove('main-conteiner');
						mainConteiner.classList.add('overlay');
						section.style.background = 'none';
						// section.style.background = "none";
					} else {
						popupPhotoDiv.style.display = 'none';
						popupPhotoDiv.style.animation = '';
						mainConteiner.classList.remove('overlay');
						mainConteiner.classList.add('main-conteiner');
						section.style.background = '';
					}
					// console.log(e.target);
				});
			});
		});
	});
};
popupPhotos();

/* const headerFade = () => {
  const options = {
    threshold: 0.15,
    rootMargin: "300px 0px 10px 0px",
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const sectionEntry = entry.target;
      const header = document.querySelector(".main-header");
      // console.log(entry.target, sectionEntry);
      if (entry.isIntersecting) {
        header.style.opacity = "0.6";
      } else {
        header.style.opacity = "1";
      }
    });
  }, options);
  observer.observe(document.querySelector(".main-conteiner"));
};
headerFade();*/
