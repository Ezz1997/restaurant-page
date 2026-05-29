import "./styles.css";
import { initHomepage } from "./homepage-module.js";
import { initMenu } from "./menu-module.js";
import { initAbout } from "./about-module.js";

console.log("Hello Webpack Bundler");

initHomepage();

function initNavButtons() {
    const homeBtn = document.getElementById("home-btn");
    homeBtn.addEventListener("click", (e) => {
        initHomepage();
    });

    const menuBtn = document.getElementById("menu-btn");
    menuBtn.addEventListener("click", (e) => {
        initMenu();
    });

    const aboutBtn = document.getElementById("about-btn");
    aboutBtn.addEventListener("click", (e) => {
        initAbout();
    });
}

initNavButtons();
