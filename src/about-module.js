function initAbout() {
    let content = document.getElementById("content");
    let container = document.createElement("div");
    let aboutUs = document.createElement("p");

    aboutUs.textContent = `Founded with a passion for great food and genuine hospitality, we bring together fresh ingredients,
    bold flavors, and a warm atmosphere. Whether you're joining us for a quick lunch, a family dinner, or a special celebration,
    every dish is prepared with care and attention to detail. Our menu combines timeless favorites with creative seasonal specialties,
    offering something for every taste.`;

    aboutUs.style.fontSize = "50px";

    container.appendChild(aboutUs);
    container.style = "width: 500px; height: 500px; justify-self: center;"

    content.textContent = "";
    content.classList = "";

    content.appendChild(container);
}

export { initAbout };