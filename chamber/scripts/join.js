document.querySelector("#timestamp").value = new Date().toISOString();

const openLevel1 = document.querySelector("#level1");
const openLevel2 = document.querySelector("#level2");
const openLevel3 = document.querySelector("#level3");
const openLevel4 = document.querySelector("#level4");

const dialogueBox1 = document.querySelector("#membership1");
const dialogueBox2 = document.querySelector("#membership2");
const dialogueBox3 = document.querySelector("#membership3");
const dialogueBox4 = document.querySelector("#membership4");

const closeButton1 = document.querySelector("#close1");
const closeButton2 = document.querySelector("#close2");
const closeButton3 = document.querySelector("#close3");
const closeButton4 = document.querySelector("#close4");

openLevel1.addEventListener("click", () => {
    dialogueBox1.showModal();
})
openLevel2.addEventListener("click", () => {
    dialogueBox2.showModal();
})
openLevel3.addEventListener("click", () => {
    dialogueBox3.showModal();
})
openLevel4.addEventListener("click", () => {
    dialogueBox4.showModal();
})


closeButton1.addEventListener("click", () => {
    dialogueBox1.close();
})
closeButton2.addEventListener("click", () => {
    dialogueBox2.close();
})
closeButton3.addEventListener("click", () => {
    dialogueBox3.close();
})
closeButton4.addEventListener("click", () => {
    dialogueBox4.close();
})

const getString=window.location.search
const params = new URLSearchParams(getString);

document.querySelector("#results").innerHTML = `
<p><strong>First Name:</strong> ${params.get("fName")}</p>
<p><strong>Last Name:</strong> ${params.get("lName")}</p>
<p><strong>Email:</strong> ${params.get("email")}</p>
<p><strong>Phone:</strong> ${params.get("phone")}</p>
<p><strong>Business:</strong> ${params.get("business")}</p>
<p><strong>Date Submitted:</strong> ${params.get("timestamp")}</p>
`;