'use strict';


// Menu Hamburguer
const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

// Scroll-Suave
const linksInternos = document.querySelectorAll('.nav-item a[href^="#"]');

function scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
};

linksInternos.forEach((link) =>{
    link.addEventListener('click', scrollToSection);
});


// SlideShow
const images = [
    {'id': '1', 'url': './img/lespaul.jpg'},
    {'id': '2', 'url': './img/stratocaster.jpg'},
    {'id': '3', 'url': './img/tele.jpg'},
]

const containerItems = document.querySelector('#container-items');

const loadImages = (images, container) =>{
    images.forEach(image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () =>{
  const lastItem = items[items.length - 1]
  containerItems.insertBefore(lastItem, items[0]);
  items = document.querySelectorAll('.item');
}

const next = () =>{
  containerItems.appendChild(items[0]);
  items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);


// Accordion

const accordionList = document.querySelectorAll('.js-accordion .title-card');

function activeAccordion(event){
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
}

accordionList.forEach((item) =>{
    item.addEventListener('click', activeAccordion);
});


