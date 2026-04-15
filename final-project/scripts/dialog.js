const dialogueBox = document.querySelector("#feed");
const openFeed = document.querySelector("#openFeed");
const closeFeed = document.querySelector("#closeFeed");

openFeed.addEventListener("click", () => {
    dialogueBox.showModal();
})
closeFeed.addEventListener("click", () => {
    dialogueBox.close();
})

const form = document.querySelector("form");

if (form) {
    form.addEventListener("input", () => {
        const data = {
            name: document.querySelector("#fName").value,
            email: document.querySelector("#email").value,
            feedback: document.querySelector("#feedback").value
        };
        localStorage.setItem("formData", JSON.stringify(data));
    })

    const savedForm = JSON.parse(localStorage.getItem("formData"));
    if (savedForm) {
        if (qs("#fName")) qs("#fName").value = savedForm.name || "";
        if (qs("#email")) qs("#email").value = savedForm.email || "";
        if (qs("#feedback")) qs("#feedback").value = savedForm.feedback || "";
    }

    form.addEventListener("submit", () => {
        localStorage.removeItem("formData");
    })
}
