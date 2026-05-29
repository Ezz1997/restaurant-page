function initMenu(){
    let content = document.getElementById("content");
    content.textContent = "";
    let h1 = document.createElement("h1");

    h1.textContent = "Menu";

    content.appendChild(h1);
}

export {initMenu};