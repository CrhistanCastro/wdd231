const spotlight = document.querySelector("#members");

async function getMembers() {
    const response = await fetch("./data/members.json");
    const data = await response.json();
    return data.companies;
}

async function loadMembers() {
    const companies = await getMembers();
    const fMembers = companies.filter(c =>
        c.membership_level === 2 || c.membership_level === 3
    );
    const rMembers = fMembers.sort(() => Math.random() - 0.5);
    const select = rMembers.slice(0, 3);

    displaySpotlights(select);
}

function displaySpotlights(companies) {
    spotlight.innerHTML = "";
    
    companies.forEach((company) => {
        let card = document.createElement("div");
        let companyName = document.createElement("h2");
        let image = document.createElement("img");
        let address = document.createElement("p");
        let number = document.createElement("p");
        let website = document.createElement("p");
        let membershipLevel = document.createElement("p");

        companyName.textContent = `${company.company_name}`;
        address.textContent = `Address: ${company.company_address.street}, ${company.company_address.city}, ${company.company_address.country}, ${company.company_address.zip_code}`;
        number.textContent = `Phone: ${company.company_phone_number}`;
        const link = document.createElement("a");
        link.href = company.company_website_url;
        link.textContent = company.company_website_url;
        link.target = "_blank";
        website.appendChild(link);
        if (company.membership_level==1) {
            membershipLevel.textContent = `Membership level: Member`;
        }
        else if (company.membership_level==2) {
            membershipLevel.textContent = `Membership level: Silver`;
        }
        else if (company.membership_level==3) {
            membershipLevel.textContent = `Membership level: Gold`;
        }

        image.setAttribute("src", company.image.url);
        image.setAttribute("alt", company.image.name);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", '200');
        image.setAttribute("height", 'auto');

        card.appendChild(companyName);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(number);
        card.appendChild(website);
        card.appendChild(membershipLevel);

        spotlight.appendChild(card);
    });
}

const description = document.createElement('p');
const currentTemp = document.querySelector('#temperature');
const forecast = document.querySelector('#forecast');

const theKey = "41e49e1b595c9d3e96046ef337c2655a";
const lat = "18.4572";
const long = "-69.9381";

const wURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${theKey}&units=metric`;
const fURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${theKey}&units=metric`;


async function apiFetch() {
    try {
        const response = await fetch(wURL);
        if (response.ok) {
        const data = await response.json();
        displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    description.innerHTML = data.weather[0].description;
    currentTemp.innerHTML = `${data.main.temp}&deg C`;
    let we = document.querySelector(".weather");
    let icon = document.createElement("img");
    const iconSRC = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    icon.setAttribute('src', iconSRC);
    icon.setAttribute('alt', data.weather[0].description);
    we.appendChild(icon);
    we.appendChild(description);
    
}

async function forecastFetch() {
    try {
        const response = await fetch(fURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayForecast(data) {
    forecast.innerHTML = "";

    const daily = data.list.filter(item => item.dt_txt.includes("12:00:00"));

    daily.slice(0, 3).forEach(day => {
        const card = document.createElement("div");
        const date = document.createElement("h3");
        const temp = document.createElement("p");
        const iconF = document.createElement("img");
        const desc = document.createElement("p");
        const d = new Date(day.dt_txt);
        
        date.textContent = d.toLocaleDateString("es-DO", {
            day: "numeric",
            month: "numeric"
        })
        temp.textContent = `${day.main.temp}° C`;
        desc.textContent = day.weather[0].description;
        const iconSRCF = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
        iconF.setAttribute('src', iconSRCF);
        iconF.setAttribute('alt', day.weather[0].description);

        card.appendChild(date);
        card.appendChild(temp);
        card.appendChild(iconF);
        card.appendChild(desc);

        forecast.appendChild(card);
    });
}

apiFetch();
forecastFetch();
loadMembers();