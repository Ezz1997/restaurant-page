import burgerImage from "./assets/mae-mu-I7A_pHLcQK8-unsplash.jpg";

function initHomepage() {
    let content = document.getElementById("content");
    content.textContent = "";
    let h1 = document.createElement("h1");
    let img = document.createElement("img");

    h1.textContent = "Welcome to Burger Haven, A safe place for Hungry stomachs";
    img.src = burgerImage;
    img.style = "height: 500px; width: 400px;"

    content.appendChild(h1);
    content.appendChild(img);
}

export { initHomepage };