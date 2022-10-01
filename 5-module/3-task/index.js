function initCarousel() {
  let btnNext = document.querySelector('.carousel__arrow_right');
  let btnPrev = document.querySelector('.carousel__arrow_left');
  let images = document.querySelector(".carousel__inner");
  let count = 0;
  btnPrev.style.display = 'none';

  btnNext.addEventListener('click', () => {
    count += 1;
    if (count == 3) {
      btnNext.style.display = 'none';
    } else {btnPrev.style.display = '';}
    switch (count) {
      case 1:
        images.style.transform = 'translateX(-500px)';
        break;
      case 2:
        images.style.transform = 'translateX(-1000px)';
        break;
      case 3:
        images.style.transform = 'translateX(-2965px)';
        break;
    }
  });
  btnPrev.addEventListener('click', () => {
    count -= 1;
    if (count == 0) {
      btnPrev.style.display = 'none';
    } else {btnNext.style.display = '';}
    switch (count) {
      case 0:
        images.style.transform = 'translateX(0px)';
        break;
      case 1:
        images.style.transform = 'translateX(-500px)';
        break;
      case 2:
        images.style.transform = 'translateX(-1000px)';
        break;
    }
  });
}
