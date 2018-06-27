'use strict';

function drawerToggle() {
    let menu = document.getElementById("nav");
    if (menu.className === "navbar") {
        menu.className = menu.className + " responsive";
    } else {
        menu.className = "navbar";
    }
}

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("badge");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" badgeSelect", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " badgeSelect";
}