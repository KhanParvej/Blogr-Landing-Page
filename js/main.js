const navToggle = document.querySelector(".navbar__icon");
const navIcon = document.querySelector(".navbar__icon--hamburger");
const navbarClose = document.querySelector(".navbar__icon--close");
const navBar = document.querySelector(".navbar");
const authMobile = document.querySelector(".auth");

navToggle.addEventListener("click", navTogglebar)



function navTogglebar(){  
    navIcon.classList.toggle("icon-close");
    navbarClose.classList.toggle("icon-close");
    
        navBar.classList.toggle("navbar-mobile");
        // authMobile.classList.toggle("navbar-mobile");
}