// header migration
const title = document.getElementById('title');
const subhead = document.getElementById('subhead');
const menu = document.getElementById('menu');
const header = document.getElementById('header');
const label = document.getElementsByClassName('label');
const page = document.getElementsByClassName('pages');
const menuIcon = document.getElementById('menuIcon');


document.addEventListener('scroll', e => {
    if (document.documentElement.scrollTop > 0) {
        // shrink text
        title.style.fontSize = '30px';
        // move list to align right
        menu.style.textAlign = 'right';
        header.style.display = 'inline-flex';
        // move name to align left
        title.style.textAlign = 'left';
        title.style.marginLeft = '30px';
        title.style.marginRight = '30px';
        // hide the subtext
        subhead.style.display = 'none';
        label.style.fontSize = '15px';
        menuIcon.style.display = 'block';
        menu.style.display = 'none';
    } else {
        // return to normal
        menuIcon.style.display = 'none';
        menu.style.display = 'block';
        title.style.fontSize = '35px';
        subhead.style.display = 'contents';
        title.style.textAlign = 'center';  
        menu.style.textAlign = 'center';
        subhead.style.textAlign = 'center';
        header.style.display = 'block';
        header.style.textAlign = 'center';
        label.style.fontSize = '20px';
    }
  })


// scroll transitions
const home = document.getElementById('title');

home.addEventListener('click', () => window.scrollTo({
  top: 0,
  behavior: 'smooth',
}));

const about = document.getElementById('aboutPage');

about.addEventListener('click', () => window.scrollTo({
  top: 700,
  behavior: 'smooth',
}));

const portfolio = document.getElementById('portfolioPage');

portfolio.addEventListener('click', () => window.scrollTo({
  top: 1250,
  behavior: 'smooth',
}));

const interest = document.getElementById('interestPage');

interest.addEventListener('click', () => window.scrollTo({
  top: 1750,
  behavior: 'smooth',
}));


const contact = document.getElementById('contactPage');

contact.addEventListener('click', () => window.scrollTo({
  top: 2350,
  behavior: 'smooth',
}));

// scroll highlights text
const aboutLabel = document.getElementById('aboutLabel');
const portfolioLabel = document.getElementById('portfolioLabel');
const interestLabel = document.getElementById('interestLabel');
const contactLabel = document.getElementById('contactLabel');

document.addEventListener('scroll', e => {
    if (document.documentElement.scrollTop >= 500 && document.documentElement.scrollTop < 1000) {
        aboutLabel.style.color = '#D1C0A8';
    } else {
        aboutLabel.style.color = '#000000';
    }
  })

  document.addEventListener('scroll', e => {
    if (document.documentElement.scrollTop >= 1000 && document.documentElement.scrollTop < 1500) {
        portfolioLabel.style.color = '#D1C0A8';
    } else {
        portfolioLabel.style.color = '#000000';
    }
  })

  document.addEventListener('scroll', e => {
    if (document.documentElement.scrollTop >= 1500 && document.documentElement.scrollTop < 2000) {
        interestLabel.style.color = '#D1C0A8';
    } else {
        interestLabel.style.color = '#000000';
    }
  })

  document.addEventListener('scroll', e => {
    if (document.documentElement.scrollTop >= 2000) {
        contactLabel.style.color = '#D1C0A8';
    } else {
        contactLabel.style.color = '#000000';
    }
  })

// carousel transition code 
// SOURCE: https://www.w3schools.com/w3css/w3css_slideshow.asp
// set current index to be 0
let index = 0; 

function showSlides(num) {
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[num].style.display = "block";
}
window.onload = function () {
  showSlides(index);
}

const slides = document.getElementsByClassName('slides');
const left = document.getElementById('left');
const right = document.getElementById('right');
// on click increase or decrease index
left.addEventListener('click', () => {
  if (index - 1 >= 0) {
    index--;
    showSlides(index);
  } else if (index - 1 < 0) {
    index = slides.length-1;
    showSlides(index);
  }
  console.log(index);
});

right.addEventListener('click', () => {
  if (index + 1 < slides.length) {
    index++;
    showSlides(index);
  } else if (index + 1 > slides.length-1) {
    index = 0;
    showSlides(index);
  }  
});

// modal transition code
// SOURCE: https://www.w3schools.com/howto/howto_css_modals.asp

var cardOne = document.getElementById("cardOne");
var cardTwo = document.getElementById("cardTwo");
var cardThree = document.getElementById("cardThree");

var modalOne = document.getElementById("modalOne");
var modalTwo = document.getElementById("modalTwo");
var modalThree = document.getElementById("modalThree");

var buttonOne = document.getElementById("buttonOne");
var buttonTwo = document.getElementById("buttonTwo");
var buttonThree = document.getElementById("buttonThree");


cardOne.onclick = function() {
  modalOne.style.display = "block";
}

cardTwo.onclick = function() {
  modalTwo.style.display = "block";
}
cardThree.onclick = function() {
  modalThree.style.display = "block";
}

buttonOne.onclick = function() {
  modalOne.style.display = "none";
}

buttonTwo.onclick = function() {
  modalTwo.style.display = "none";
}

buttonThree.onclick = function() {
  modalThree.style.display = "none";
}