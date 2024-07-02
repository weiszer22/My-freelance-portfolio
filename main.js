/*=============== SHOW MENU ===============*/
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", mobileMenu)

  function mobileMenu() {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
  }

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav-link")
navLink.forEach(n => n.addEventListener("click", closeMenu))
function closeMenu() {
  hamburger.classList.remove("active")
  navMenu.classList.remove("active")
}



/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header') :
    header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById(`contact-form`);
const contactMessage = document.getElementById(`contact-message`);

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(`service_mfx0krq`, `template_wf6omem`, `#contact-form`, `Gw0j0DpWcXK7963Xq`)
    .then(() => {
      contactMessage.textContent = `Message sent successfully`;

      setTimeout(() => {
        contactMessage.textContent = ``;
      }, 5000);

      contactForm.reset();
    }, () => {
      contactMessage.textContent = `Message failed to send`;
    });
};

contactForm.addEventListener(`submit`, sendEmail);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const  scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList
    .remove('show-scroll');
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelector(`section[id]`)

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute(`id`),
              sectionsClass = document.querySelector(`.nav__menu a[href*=` + sectionId + `]`)

         if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add(`active-link`)
         } else {
            sectionClass.classList.remove(`active-link`)
         }
    })
    }

window.addEventListener(`scroll`, scrollActive)    

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__data, .experience, .skills, .contact__container`)
sr.reveal(`.home__img`, {delay: 600})
sr.reveal(`.home__scroll`, {delay: 800})
sr.reveal(`.work__card, .service__card`, {interval: 100})
sr.reveal(`.about__content`, {origin: `left`})
