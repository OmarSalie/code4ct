'use strict';

function drawerToggle() {
    let menu = document.getElementById("nav");
    if (menu.className === "navbar") {
        menu.className = menu.className + " responsive";
    } else {
        menu.className = "navbar";
    }
}