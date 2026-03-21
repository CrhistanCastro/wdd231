const currentYear = new Date().getFullYear();

const yearSpan = document.getElementById('currentyear');
if (yearSpan) {
    yearSpan.textContent = `© ${currentYear}`;
}

const lastMod = document.getElementById('lastModified');
if (lastMod) {
    lastMod.textContent = `Last modified: ${document.lastModified}`;
}