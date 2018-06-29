'use strict';

function drawerToggle() {
    let menu = document.getElementById("nav");
    if (menu.className === "navbar") {
        menu.className = menu.className + " responsive";
    } else {
        menu.className = "navbar";
    }
}

<<<<<<< HEAD
let sliderIndex = 1;
showDivs(sliderIndex);

function plusDivs(n) {
  showDivs(sliderIndex += n);
}

function currentDiv(n) {
  showDivs(sliderIndex = n);
=======
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
>>>>>>> 20b21c901f795924ac08cdbb258b2811e6266be1
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("badge");
<<<<<<< HEAD
  if (n > x.length) {sliderIndex = 1}    
  if (n < 1) {sliderIndex = x.length}
=======
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
>>>>>>> 20b21c901f795924ac08cdbb258b2811e6266be1
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" badgeSelect", "");
  }
<<<<<<< HEAD
  console.log(sliderIndex);
  x[sliderIndex-1].style.display = "block";  
  dots[sliderIndex-1].className += " badgeSelect";
=======
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " badgeSelect";
>>>>>>> 20b21c901f795924ac08cdbb258b2811e6266be1
}

function countUp(id, start, end, duration) {
  // assumes integer values for start and end
  
  var obj = document.getElementById(id);
  var range = end - start;
  // no timer shorter than 50ms (not really visible any way)
  var minTimer = 50;
  // calc step time to show all interediate values
  var stepTime = Math.abs(Math.floor(duration / range));
  
  // never go below minTimer
  stepTime = Math.max(stepTime, minTimer);
  
  // get current time and calculate desired end time
  var startTime = new Date().getTime();
  var endTime = startTime + duration;
  var timer;

  function run() {
      var now = new Date().getTime();
      var remaining = Math.max((endTime - now) / duration, 0);
      var value = Math.round(end - (remaining * range));
      obj.innerHTML = value;
      if (value == end) {
          clearInterval(timer);
      }
  }
  
  timer = setInterval(run, stepTime);
  run();
}

// running the funtion for the count ups
<<<<<<< HEAD
countUp("count-girls", 0, 780, 2000);
countUp("count-hours", 0, 8765, 2000);
countUp("count-coffee", 0, 3000, 2000);
countUp("count-projects", 0, 3120, 2000);

let slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("partner-logos");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "inline-block"; 
    setTimeout(carousel, 10000); // Change image every 2 seconds 
}
=======
countUp("count-coffee", 0, 1050, 2000);
countUp("count-projects", 0, 1850, 2000);
countUp("count-girls", 0, 2000, 2000);
countUp("count-hours", 0, 3300, 2000);

>>>>>>> 20b21c901f795924ac08cdbb258b2811e6266be1
