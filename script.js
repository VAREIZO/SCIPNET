const button = document.getElementById("clearanceBtn");
const documentFile = document.getElementById("scpDocument");

if (!button || !documentFile) {
  throw new Error("Clearance interface elements are missing.");
}

const VERIFYING_TEXT = "VERIFYING CLEARANCE...";
const GRANTED_TEXT = "ACCESS GRANTED";

button.addEventListener("click", function () {
  button.disabled = true;
  button.textContent = VERIFYING_TEXT;

  setTimeout(function () {
    documentFile.hidden = false;
    button.textContent = GRANTED_TEXT;
  }, 1000);
});
