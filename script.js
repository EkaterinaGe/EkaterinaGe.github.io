let modal = document.getElementById("my-modal");
let btn = document.getElementById("btn-modal-window");
let span = document.getElementsByClassName("close-modal-window")[0];
let button = document.getElementsByClassName("btn-order")[0];

let clickOrder = 0

btn.onclick = function () {
    modal.style.display = "block";
    clickOrder = clickOrder + 1
    console.log(clickOrder);
}

let closeOrder = 0

span.onclick = function () {
    modal.style.display = "none";
    closeOrder = closeOrder + 1
    console.log(closeOrder);
}

let doOrder = 0

button.onclick = function () {
    modal.style.display = "none";
    doOrder = doOrder + 1
    console.log(doOrder);
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let choiceSite = 0

const orderSite = function () {
    choiceSite = choiceSite + 1
    console.log(choiceSite);
}

let choiceMobile = 0

const orderMobile = function () {
    choiceMobile = choiceMobile + 1
    console.log(choiceMobile);
}

let ch0iceAudit = 0

const orderAudit = function () {
    ch0iceAudit = ch0iceAudit + 1
    console.log(ch0iceAudit);
}

let registration = document.getElementById("my-modal-registration");
let registrations = document.getElementById("btn-modal-registration");
let closes = document.getElementsByClassName("close-window")[0];
let logup = document.getElementsByClassName("btn-registration")[0];

let clickRegistration = 0

registrations.onclick = function () {
    registration.style.display = "block";
    clickRegistration = clickRegistration + 1
    console.log(clickRegistration);
}

let closeRegistration = 0

closes.onclick = function () {
    registration.style.display = "none";
    closeRegistration = closeRegistration + 1
    console.log(closeRegistration);
}

let clickLogup = 0

logup.onclick = function () {
    registration.style.display = "none";
    clickLogup = clickLogup + 1
    console.log(clickLogup);
}

window.onclick = function (event) {
    if (event.target == registration) {
        registration.style.display = "none";
    }
}

let names = document.getElementById("names")

let clickName = 0
names.onfocus = function () {
    clickName = clickName + 1
    console.log(clickName);
}

let input = document.getElementById("email")
let error = document.getElementById("error")

input.onblur = function() {
    if (!input.value.includes('@')) { 
        input.classList.add('invalid');
        error.innerHTML = 'Пожалуйста, введите правильный email.'
    }
};

let clickEmail = 0

input.onfocus = function() {
    if (this.classList.contains('invalid')) {
        this.classList.remove('invalid');
        error.innerHTML = "";
    }
    clickEmail = clickEmail + 1
    console.log(clickEmail);
};

let password = document.getElementById("password")

let clickPassword = 0
password.onfocus = function() {
    clickPassword = clickPassword + 1
    console.log(clickPassword);
}

let login = document.getElementById("my-modal-login");
let logins = document.getElementById("btn-modal-login");
let shut = document.getElementsByClassName("close-login")[0];
let enter = document.getElementsByClassName("btn-login")[0];

let clickEnter = 0

logins.onclick = function () {
    login.style.display = "block";
    clickEnter = clickEnter + 1
    console.log(clickEnter);
}

let closeLogin = 0

shut.onclick = function () {
    login.style.display = "none";
    closeLogin = closeLogin + 1
    console.log(closeLogin);
}

let clickLogin = 0

enter.onclick = function () {
    login.style.display = "none";
    clickLogin = clickLogin + 1
    console.log(clickLogin);
}

window.onclick = function (event) {
    if (event.target == login) {
        login.style.display = "none";
    }
}

let nick = document.getElementById("nick")

let clickNick = 0
nick.onfocus = function () {
    clickNick = clickNick + 1
    console.log(clickNick);
}

let parole = document.getElementById("parole")

let clickParole = 0
parole.onfocus = function() {
    clickParole = clickParole + 1
    console.log(clickParole);
}


let site = document.getElementById("my-modal-site");
let sites = document.getElementById("btn-modal-site");
let cover = document.getElementsByClassName("close-site")[0];
let book = document.getElementsByClassName("btn-site")[0];

let clickSite = 0

sites.onclick = function () {
    site.style.display = "block";
    clickSite = clickSite + 1
    console.log(clickSite);
}

cover.onclick = function () {
    site.style.display = "none";
    closeOrder = closeOrder + 1
    console.log(closeOrder);
}

book.onclick = function () {
    site.style.display = "none";
    doOrder = doOrder + 1
    console.log(doOrder);
}

window.onclick = function (event) {
    if (event.target == site) {
        site.style.display = "none";
    }
}

let mobile = document.getElementById("my-modal-mobile");
let mobiles = document.getElementById("btn-modal-mobile");
let turnoff = document.getElementsByClassName("close-mobile")[0];
let buy = document.getElementsByClassName("btn-mobile")[0];

let clickMobile = 0

mobiles.onclick = function () {
    mobile.style.display = "block";
    clickMobile = clickMobile + 1
    console.log(clickMobile);
}

turnoff.onclick = function () {
    mobile.style.display = "none";
    closeOrder = closeOrder + 1
    console.log(closeOrder);
}

buy.onclick = function () {
    mobile.style.display = "none";
    doOrder = doOrder + 1
    console.log(doOrder);
}

window.onclick = function (event) {
    if (event.target == mobile) {
        mobile.style.display = "none";
    }
}

let audit = document.getElementById("my-modal-audit");
let audits = document.getElementById("btn-modal-audit");
let adjourn = document.getElementsByClassName("close-audit")[0];
let purchase = document.getElementsByClassName("btn-audit")[0];

let clickAudit = 0 

audits.onclick = function () {
    audit.style.display = "block";
    clickAudit = clickAudit + 1
    console.log(clickAudit);
}

adjourn.onclick = function () {
    audit.style.display = "none";
    closeOrder = closeOrder + 1
    console.log(closeOrder);
}

purchase.onclick = function () {
    audit.style.display = "none";
    doOrder = doOrder + 1
    console.log(doOrder);
}

window.onclick = function (event) {
    if (event.target == audit) {
        audit.style.display = "none";
    }
}

let slides = document.querySelectorAll('.about .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,3000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

let goUmbrella = 0
const clickUmbrella = function () {
    goUmbrella = goUmbrella + 1
    console.log(goUmbrella);
}

let goYandex = 0
const clickYandex = function () {
    goYandex = goYandex + 1
    console.log(goYandex);
}

let goGoogle = 0
const clickGoogle = function () {
    goGoogle = goGoogle + 1
    console.log(goGoogle);
}

let goLanit = 0
const clickLanit = function () {
    goLanit = goLanit + 1
    console.log(goLanit);
}

let goOzon = 0
const clickOzon = function() {
    goOzon = goOzon + 1
    console.log(goOzon);
}

let goSoftline = 0 
const clickSoftline = function () {
    goSoftline = goSoftline + 1
    console.log(goSoftline);
}

let goMarvel = 0
const clickMarvel = function () {
    goMarvel = goMarvel + 1
    console.log(goMarvel);
}

let goLamoda = 0 
const clickLamoda = function () {
    goLamoda = goLamoda + 1
    console.log(goLamoda);
}

let goDistribution = 0
const clickDistribution = function () {
    goDistribution = goDistribution + 1
    console.log(goDistribution);
}

let goRostec = 0
const clickRostec = function () {
    goRostec = goRostec + 1
    console.log(goRostec);
}

let pictureIndex = 1;
showPicture(pictureIndex);

function nextPicture() {
    showPicture(pictureIndex += 1);
}

function previousPicture() {
    showPicture(pictureIndex -= 1);  
}

function currentPicture(n) {
    showPicture(pictureIndex = n);
}

function showPicture(n) {
    let pictures = document.getElementsByClassName("item");
    
    if (n > pictures.length) {
        pictureIndex = 1
    }
    if (n < 1) {
        pictureIndex = pictures.length
    }
  
    for (let picture of pictures) {
        picture.style.display = "none";
    }
    pictures[pictureIndex - 1].style.display = "block";    
}