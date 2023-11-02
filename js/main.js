/* Show Hamburger Menu */

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu Show - Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu Hidden - Validate if constant exists */

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*  Remove Menu Mobile */
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When clicking on each nav__link the show-menu class is removed
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* Shadow Header */

const shadowHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is > 50 viewport height, add the shadow-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

/* Email - Sending */

const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_6uasgp6",
      "template_aqolllj",
      "#contact-form",
      "-FzVXB9fr9xbH7boi"
    )
    .then(
      () => {
        // Show message has been sent
        contactMessage.textContent = "Message was sent successfully";
        // Remove pop up message after 5 seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        // Clear input fields
        contactForm.reset();
      },
      () => {
        // Show error message
        contactMessage.textContent = "Service error. Please try again";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

/*  Scroll Sections - Active Link */

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
