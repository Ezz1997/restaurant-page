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
        id: 1,
        title: "BBQ Chicken and Pineapple Pizza",
        src: bbqChickenImage,
        price: "$18.99",
        description: "A top-down shot of a sliced artisanal pizza on a dark wooden cutting board. It is loaded with shredded chicken, melted mozzarella, red onion, juicy pineapple chunks, a drizzle of BBQ sauce, and fresh cilantro sprigs."
    },
    {
        id: 2,
        title: "Gourmet Raspberry Pistachio Layer Cake",
        src: raspberryCakeImage,
        price: "$8.99",
        description: "A decadent slice of layered cream cake, beautifully topped with a mountain of fresh, vibrant raspberries and a hint of pistachio."
    },
    {
        id: 3,
        title: "Vibrant Herb-Infused Hummus Platter",
        src: hummusImage,
        price: "$11.99",
        description: "A creamy hummus bowl layered with a green herb swirl and garnished with cherry tomatoes, nuts, pomegranate seeds, and edible rose petals."
    },
    {
        id: 4,
        title: "Decadent Cookies & Cream Sundae",
        src: sundaeImage,
        price: "$7.99",
        description: "A luxurious cookies-and-cream dessert layered in a glass goblet with rich chocolate mousse, whipped cream, crushed chocolate sandwich cookies, and a glossy chocolate drizzle cascading down the sides."
    },
    {
        id: 5,
        title: "Banana Blueberry French Toast Stack",
        src: frenchToastImage,
        price: "$13.99",
        description: "A golden stack of thick-cut French toast layered with fresh banana slices and juicy blueberries, finished with a drizzle of maple syrup and a dusting of powdered sugar."
    },
    {
        id: 6,
        title: "Creamy Pan-Seared Salmon",
        src: creamySalmonImage,
        price: "$24.99",
        description: "Tender salmon fillets simmered in a rich, savory cream sauce, garnished with fresh herbs and bright lemon slices."
    },
    {
        id: 7,
        title: "Sprinkled Chocolate Glazed Donuts",
        src: sprinkledDonutsImage,
        price: "$6.99",
        description: "A decadent stack of fluffy donuts topped with a rich chocolate glaze, vanilla drizzle, and a vibrant shower of rainbow sprinkles."
    },
    {
        id: 8,
        title: "Classic Red Velvet Cupcake",
        src: redVelvetCupcakeImage,
        price: "$4.99",
        description: "A moist, velvety red cake base crowned with a smooth swirl of cream cheese frosting and a dusting of cake crumbs."
    },
    {
        id: 9,
        title: "Savory Shrimp Ramen Bowl",
        src: shrimpRamenImage,
        price: "$16.99",
        description: "A comforting bowl of ramen noodles in a flavorful broth, loaded with succulent shrimp, soft-boiled eggs, crisp snap peas, and a sprinkle of black sesame seeds."
    }
];

function initMenu() {
    const content = document.getElementById("content");
    content.textContent = "";
    content.classList = "";

    const menu = document.createElement("div");
    menu.style = "display: grid; gap: 16px; justify-content: center; margin: 32px;";


    for (let image of data) {
        let menuItem = document.createElement("div");
        let imgElement = document.createElement("img");
        let title = document.createElement("h1");
        let price = document.createElement("p");
        let orderBtn = document.createElement("button");
        let span = document.createElement("span");

        title.textContent = image.title;
        price.textContent = image.price;
        price.style.fontSize = "32px";
        orderBtn.textContent = "Order";
        orderBtn.classList.add("menu-item-btn");

        imgElement.src = image.src;
        imgElement.style = "height: 300px; width: 350px; border-radius: 8px; justify-self: center;";

        menuItem.classList.add("menu-item");

        span.style = "display: flex; justify-content: space-around;"
        span.appendChild(price);
        span.appendChild(orderBtn);

        menuItem.appendChild(imgElement);
        menuItem.appendChild(title);
        menuItem.appendChild(span);
        menu.appendChild(menuItem);
    }


    content.appendChild(menu);
}

export { initMenu };