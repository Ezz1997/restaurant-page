import burgerImage from "./assets/burger.jpg";

function initialPageLoad(){
    let content = document.getElementById("content");
    let h1 = document.createElement("h1");
    let img = document.createElement("img");

    h1.textContent = "Welcome to Burger Haven, A safe place for Hungry stomachs";
    img.src = burgerImage;
    img.style = "height: 300px; width: 300px;"

    content.appendChild(h1);
    content.appendChild(img);
}

export {initialPageLoad};