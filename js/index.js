const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//Nav links
const navItems = document.querySelectorAll('nav > a');
let j = 1;
navItems.forEach( element => {
  element.textContent = siteContent['nav'][`nav-item-${j}`];
  j++;
});

//CTA section
const ctaHead = document.querySelector('.cta-text > h1');
ctaHead.innerHTML = siteContent['cta']['h1'].replace(/ /g, '<br>');

const ctaButton = document.querySelector('.cta-text > button');
ctaButton.textContent = siteContent['cta']['button'];

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent['cta']['img-src'];

//Main content
const contentItems = document.querySelectorAll('.main-content > div > .text-content > *');
const contentArr = Object.values(siteContent['main-content']);
contentArr.splice(4, 1); //Delete the 'middle-img-src' value

j = 0;
contentItems.forEach( element => {
  element.textContent = contentArr[j];
  j++;
});

document.querySelector('#middle-img').src = siteContent['main-content']['middle-img-src'];


//Contact section
const contactItems = document.querySelectorAll('.contact > *');
const contactArr = Object.values(siteContent['contact']);
j = 0;
contactItems.forEach( element => {
  element.textContent = contactArr[j];
  j++;
});

const addressLine1 = document.querySelector('.contact > p');
addressLine1.innerHTML = siteContent['contact']['address'].replace('Street Somewhere', 'Street<br>Somewhere');

//Footer section
document.querySelector('footer > p').textContent = siteContent['footer']['copyright'];

//Playing with the nav

const navParty = document.createElement('a');
navParty.textContent = 'Party';
navParty.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
const navSleep = document.createElement('a');
navSleep.textContent = 'Sleep';
navSleep.href = 'https://www.youtube.com/watch?v=WxHJah4sTc8';

const parent = document.querySelector('nav');
parent.append(navParty);
parent.prepend(navSleep);

const navLinks = document.querySelectorAll('nav > a');
navLinks.forEach( element => element.style.color = 'green');

//Playing with more stuff

const text = document.querySelectorAll('body > *');
text.forEach(element => element.style.fontFamily = 'Montserrat');
const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
headings.forEach(element => element.style.fontFamily = 'Avenir');