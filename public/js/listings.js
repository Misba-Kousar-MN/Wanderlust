document.addEventListener("DOMContentLoaded", () => {
  const taxSwitch = document.getElementById("switchCheckDefault");
  if (!taxSwitch) return;

  taxSwitch.addEventListener("click", () => {
    const taxInfo = document.getElementsByClassName("tax-info");

    for (let info of taxInfo) {
      if (info.style.display === "inline") {
        info.style.display = "none";
      } else {
        info.style.display = "inline";
      }
    }
  });
});