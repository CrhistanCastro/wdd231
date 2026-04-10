import { places } from "../data/place.mjs";

const discover = document.querySelector('#discover');

function displayItems(place) {
    place.forEach(x => {
        const card = document.createElement("div");
        const figure = document.createElement("figure");
        const photo = document.createElement("img");
        photo.src = `images/${x.photo_url}`;
        photo.alt = x.name;
        photo.width = "300";
        photo.height = "200";
        photo.loading = "lazy";
        const title = document.createElement("h2");
        title.innerText = x.name;
        const address = document.createElement("address");
        address.innerText = x.address;
        const desc = document.createElement("p");
        const button = document.createElement("button");
        button.innerText = "Learn More";
        desc.innerText = x.description;
        figure.appendChild(photo);
        card.appendChild(figure);
        card.appendChild(title);
        card.appendChild(address);
        card.appendChild(desc);
        card.appendChild(button);
        discover.appendChild(card);
    });
}

displayItems(places);

const message = document.createElement("h1");
document.querySelector("#message").prepend(message);

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    message.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

    if (days < 1) {
        message.textContent = "Back so soon! Awesome!";
    } else if (days === 1) {
        message.textContent = "You last visited 1 day ago.";
    } else {
        message.textContent = `You last visited ${days} days ago.`;
    }
}

localStorage.setItem("lastVisit", now);