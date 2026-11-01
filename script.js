const button = document.getElementById("clearanceBtn");
const documentFile = document.getElementById("scpDocument");
const status = document.getElementById("status");

if (!button || !documentFile || !status) {
  throw new Error("Clearance interface elements are missing.");
}

const VERIFYING_TEXT = "VERIFYING CLEARANCE...";
const GRANTED_TEXT = "ACCESS GRANTED";

button.addEventListener("click", function () {
  button.textContent = VERIFYING_TEXT;
  status.textContent = VERIFYING_TEXT;

  setTimeout(function () {
    documentFile.hidden = false;
    button.textContent = GRANTED_TEXT;
    status.textContent = GRANTED_TEXT;
    button.disabled = true;
  }, 1000);
});
