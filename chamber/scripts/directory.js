const url = "./data/members.json";
const cards = document.querySelector('#cards');

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
    displayCompanies(data.companies);
}


getMembers();

const displayCompanies = (companies) => {
    companies.forEach((company) => {
        let card = document.createElement("section");
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

        cards.appendChild(card);
    });
}

const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");

gridBtn.addEventListener("click", () => {
  cards.classList.add("grid");
  cards.classList.remove("list");
});

listBtn.addEventListener("click", () => {
  cards.classList.add("list");
  cards.classList.remove("grid");
});