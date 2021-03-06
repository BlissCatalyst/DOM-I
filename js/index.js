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

// Navigation loop through JSON
const navigation = document.querySelectorAll('a');
{
  let i = 1;
  navigation.forEach(navigation => {
    navigation.textContent = siteContent.nav[`nav-item-${i}`];
    navigation.style.color = "green";
    i++;
  });
}

// add two navigation things
const addNav = document.querySelector("nav");
addNav.append("Last");
addNav.prepend("First");

const ctaH1 = document.querySelector("h1");
ctaH1.textContent = siteContent.cta.h1;

const ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent.cta.button;

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

const pageH4 = document.querySelectorAll("h4");
pageH4[0].textContent = siteContent["main-content"]["features-h4"];
pageH4[1].textContent = siteContent["main-content"]["about-h4"];
pageH4[2].textContent = siteContent["main-content"]["services-h4"];
pageH4[3].textContent = siteContent["main-content"]["product-h4"];
pageH4[4].textContent = siteContent["main-content"]["vision-h4"];
pageH4[5].textContent = siteContent["contact"]["contact-h4"];

const pageP = document.querySelectorAll("p");
pageP[0].textContent = siteContent["main-content"]["features-content"];
pageP[1].textContent = siteContent["main-content"]["about-content"];
pageP[2].textContent = siteContent["main-content"]["services-content"];
pageP[3].textContent = siteContent["main-content"]["product-content"];
pageP[4].textContent = siteContent["main-content"]["vision-content"];
pageP[5].textContent = siteContent["contact"]["address"];
pageP[6].textContent = siteContent["contact"]["phone"];
pageP[7].textContent = siteContent["contact"]["email"];
pageP[8].textContent = siteContent["footer"]["copyright"];

const mainImg = document.getElementById("middle-img");
mainImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);