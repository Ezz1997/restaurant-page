import bbqChickenImage from "./assets/chad-montano-MqT0asuoIcU-unsplash.jpg";
import raspberryCakeImage from "./assets/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg";
import hummusImage from "./assets/brooke-lark-oaz0raysASk-unsplash.jpg";
import sundaeImage from "./assets/emile-mbunzama-cLpdEA23Z44-unsplash.jpg";
import frenchToastImage from "./assets/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg";
import creamySalmonImage from "./assets/khloe-arledge-ND3edEmzcdQ-unsplash.jpg";
import sprinkledDonutsImage from "./assets/kobby-mendez-q54Oxq44MZs-unsplash.jpg";
import redVelvetCupcakeImage from "./assets/luisana-zerpa-MJPr6nOdppw-unsplash.jpg";
import shrimpRamenImage from "./assets/michele-blackwell-rAyCBQTH7ws-unsplash.jpg";

const data = [
    {
        "id": 1,
        "title": "BBQ Chicken and Pineapple Pizza",
        "src": bbqChickenImage,
        "description": "A top-down shot of a sliced artisanal pizza on a dark wooden cutting board. It is loaded with shredded chicken, melted mozzarella, red onion, juicy pineapple chunks, a drizzle of BBQ sauce, and fresh cilantro sprigs."
    },
    {
        "id": 2,
        "title": "Gourmet Raspberry Pistachio Layer Cake",
        "src": raspberryCakeImage,
        "description": "A decadent slice of layered cream cake, beautifully topped with a mountain of fresh, vibrant raspberries and a hint of pistachio."
    },
    {
        "id": 3,
        "title": "Vibrant Herb-Infused Hummus Platter",
        "src": hummusImage,
        "description": "A creamy hummus bowl layered with a green herb swirl and garnished with cherry tomatoes, nuts, pomegranate seeds, and edible rose petals."
    },
    {
        "id": 4,
        "title": "Decadent Cookies & Cream Sundae",
        "src": sundaeImage,
        "description": "A luxurious cookies-and-cream dessert layered in a glass goblet with rich chocolate mousse, whipped cream, crushed chocolate sandwich cookies, and a glossy chocolate drizzle cascading down the sides."
    },
    {
        "id": 5,
        "title": "Banana Blueberry French Toast Stack",
        "src": frenchToastImage,
        "description": "A golden stack of thick-cut French toast layered with fresh banana slices and juicy blueberries, finished with a drizzle of maple syrup and a dusting of powdered sugar."
    },
    {
        "id": 6,
        "title": "Creamy Pan-Seared Salmon",
        "src": creamySalmonImage,
        "description": "Tender salmon fillets simmered in a rich, savory cream sauce, garnished with fresh herbs and bright lemon slices."
    },
    {
        "id": 7,
        "title": "Sprinkled Chocolate Glazed Donuts",
        "src": sprinkledDonutsImage,
        "description": "A decadent stack of fluffy donuts topped with a rich chocolate glaze, vanilla drizzle, and a vibrant shower of rainbow sprinkles."
    },
    {
        "id": 8,
        "title": "Classic Red Velvet Cupcake",
        "src": redVelvetCupcakeImage,
        "description": "A moist, velvety red cake base crowned with a smooth swirl of cream cheese frosting and a dusting of cake crumbs."
    },
    {
        "id": 9,
        "title": "Savory Shrimp Ramen Bowl",
        "src": shrimpRamenImage,
        "description": "A comforting bowl of ramen noodles in a flavorful broth, loaded with succulent shrimp, soft-boiled eggs, crisp snap peas, and a sprinkle of black sesame seeds."
    }
];

function initMenu() {
    const content = document.getElementById("content");
    content.textContent = "";
    content.classList = "";
    
    const menu = document.createElement("div");
    menu.style = "display: grid; gap: 16px; justify-content: center";


    for (let image of data) {
        let menuItem = document.createElement("div");
        let imgElement = document.createElement("img");
        let title = document.createElement("h1");
        title.textContent = image.title;

        imgElement.src = image.src;
        imgElement.style = "height: 250px; width: 350px;";

        menuItem.classList.add("menu-item");

        menuItem.appendChild(imgElement);
        menuItem.appendChild(title);
        menu.appendChild(menuItem);
    }

    content.appendChild(menu);
}

export { initMenu };