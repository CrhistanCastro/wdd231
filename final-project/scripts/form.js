const currentYear = new Date().getFullYear();

const yearSpan = document.getElementById('currentyear');
if (yearSpan) {
    yearSpan.textContent = `© ${currentYear}`;
}

const lastMod = document.getElementById('lastModified');
if (lastMod) {
    lastMod.textContent = `Last modified: ${document.lastModified}`;
}

const getString = window.location.search
const params = new URLSearchParams(getString);

document.querySelector("#feedbacks").innerHTML = `
<p><strong>Full Name:</strong> ${params.get("fName")}</p>
<p><strong>Email:</strong> ${params.get("email")}</p>
<p><strong>Questions or Suggestions:</strong> ${params.get("feedback")}</p>
`;

