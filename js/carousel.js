const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
// const galleryControls = ['previous', 'add', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryTitles = document.querySelectorAll('.card-title');

class Carousel {
  constructor(container, items, controls, titles) {
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
    this.titleArray = [...titles];
  }

  // Update css classes for gallery
  updateGallery() {
    this.carouselArray.forEach(el => {
      el.classList.remove('gallery-item-1');
      el.classList.remove('gallery-item-2');
      el.classList.remove('gallery-item-3');
      el.classList.remove('gallery-item-4');
      el.classList.remove('gallery-item-5');
    });

    this.carouselArray.slice(0, 5).forEach((el, i) => {
      el.classList.add(`gallery-item-${i+1}`);
    });

    this.titleArray.forEach(el => {
      el.classList.remove('card-1');
      el.classList.remove('card-2');
      el.classList.remove('card-3');
      el.classList.remove('card-4');
      el.classList.remove('card-5');
    });

    this.titleArray.slice(0, 5).forEach((el, j) => {
      el.classList.add(`card-${j+1}`);
    })
  }

  // Update the current order of the carouselArray and gallery
  setCurrentState(direction) {

    if (direction.className == 'gallery-controls-previous') {
      this.carouselArray.unshift(this.carouselArray.pop());
      this.titleArray.unshift(this.titleArray.pop());
    } else {
      this.carouselArray.push(this.carouselArray.shift());
      this.titleArray.push((this.titleArray.shift()));
    }
    
    this.updateGallery();
  }

  // Construct the carousel navigation
  // setNav() {
    // galleryContainer.appendChild(document.createElement('ul')).className = 'gallery-nav';

    // this.carouselArray.forEach(item => {
    //   const nav = galleryContainer.lastElementChild;
    //   nav.appendChild(document.createElement('li'));
    // }); 
  // }s

  // Construct the carousel controls
  setControls() {
    this.carouselControls.forEach(control => {
      galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;

      // document.querySelector(`.gallery-controls-${control}`).innerText = control;
    });
  }
 
  // Add a click event listener to trigger setCurrentState method to rearrange carousel

  useControls() {
    const triggers = [...galleryControlsContainer.childNodes];

    triggers.forEach(control => {
      control.addEventListener('click', e => {
        e.preventDefault();
        this.setCurrentState(control);

      });
    });
  }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls, galleryTitles);

exampleCarousel.setControls();
// exampleCarousel.setNav();
exampleCarousel.useControls();
