const button = document.getElementById("clearanceBtn");
const documentFile = document.getElementById("scpDocument");
const status = document.getElementById("status");

button.addEventListener("click", function () {
  button.textContent = "RUNNING EXAMPLE...";
  status.textContent = "Example verification in progress";

  setTimeout(function () {
    documentFile.hidden = false;
    button.setAttribute("aria-expanded", "true");

    button.textContent = "EXAMPLE DOCUMENT REVEALED";
    status.textContent = "Example interaction complete";
    button.disabled = true;
  }, 1000);
});
