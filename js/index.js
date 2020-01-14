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
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Adding nav links 
const navItem = document.querySelectorAll('nav a');
navItem[0].textContent = siteContent.nav["nav-item-1"];
navItem[1].textContent = siteContent.nav["nav-item-2"];
navItem[2].textContent = siteContent.nav["nav-item-3"];
navItem[3].textContent = siteContent.nav["nav-item-4"];
navItem[4].textContent = siteContent.nav["nav-item-5"];
navItem[5].textContent = siteContent.nav["nav-item-6"];
navItem.forEach(items => {
  items.style.color ='green';
});



// Turn H1 text blue
const ctaH1 = document.querySelector('.cta-text h1');
ctaH1.textContent = siteContent.cta.h1;
ctaH1.style.color = "blue";

// Changing CTA button color 
const ctaBtn = document.querySelector('.cta-text button');
ctaBtn.textContent = siteContent.cta.button;
ctaBtn.style.backgroundColor ='grey';
ctaBtn.style.border ='none';
ctaBtn.style.borderRadius ='2px';
ctaBtn.style.color ='white';

// Import circular image
const ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent.cta["img-src"];

// Add solid borders
const mainContent = document.querySelector('.main-content');
mainContent.style.borderTop = '2px solid blue';
mainContent.style.borderBottom ='2px solid blue';

// Add H4 text 
const textContentH4 = document.querySelectorAll('.text-content h4');
textContentH4[0].textContent = siteContent["main-content"]["features-h4"];
textContentH4[1].textContent = siteContent["main-content"]["about-h4"];
textContentH4[2].textContent = siteContent["main-content"]["services-h4"];
textContentH4[3].textContent = siteContent["main-content"]["product-h4"];
textContentH4[4].textContent = siteContent["main-content"]["vision-h4"];
textContentH4.forEach(items =>{items.style.color ='blue';});

// Add Paragraph text 
const textContentP = document.querySelectorAll('.text-content p');
textContentP[0].textContent = siteContent["main-content"]["features-content"];
textContentP[1].textContent = siteContent["main-content"]["about-content"];
textContentP[2].textContent = siteContent["main-content"]["services-content"];
textContentP[3].textContent = siteContent["main-content"]["product-content"];
textContentP[4].textContent = siteContent["main-content"]["vision-content"];

// Import middle image banner
const middleImg = document.getElementById('middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

// Add contact H4 in footer
const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent.contact["contact-h4"];
contactH4.style.color = 'blue';

// Add contact text in footer
const contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = siteContent.contact.address;
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;

// Add footer paragraph text for copyright
const footerP = document.querySelector('footer p');
footerP.textContent = siteContent.footer.copyright;
footerP.style.color = 'blue';

// Creating new links to navigation
const frontA = document.createElement('a');
const backA = document.createElement('a');
frontA.textContent = 'Home';
backA.textContent = 'Team';
frontA.style.color = 'blue';
backA.style.color = 'blue';

// Adding new links to navbar
let newNav = document.querySelector('nav');
newNav.prepend(frontA);
newNav.appendChild(backA);
