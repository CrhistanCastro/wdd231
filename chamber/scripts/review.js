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