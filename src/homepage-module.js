import burgerImage from "./assets/mae-mu-I7A_pHLcQK8-unsplash.jpg";

function initHomepage() {
    let content = document.getElementById("content");
    content.textContent = "";
    content.classList = "";

    let h1 = document.createElement("h1");
    let img = document.createElement("img");

    h1.textContent = `Fresh Ingredients. Exceptional Flavor. From hearty classics to chef-inspired creations, every dish is prepared to delight and satisfy.`;
    h1.style = "align-self:center; line-height: 80px; font-size: 52px;";

    img.src = burgerImage;
    img.style = "height: 500px; width: 400px; border-radius: 8px; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"

    content.classList.add("homepage-content");

    content.appendChild(img);
    content.appendChild(h1);
}

export { initHomepage };