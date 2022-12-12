function displayMenu() {
  document.getElementById("my_menu").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".menu-button")) {
    var dropdowns = document.getElementsByClassName("menu-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function applyTheme(theme) {
  document.body.classList.remove("theme-auto", "theme-light", "theme-dark");
  document.body.classList.add(`theme-${theme}`);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "auto";

  applyTheme(savedTheme);

  for (const optionElement of document.querySelectorAll("#selTheme option")) {
    optionElement.selected = savedTheme === optionElement.value;
  }

  document.querySelector("#selTheme").addEventListener("change", function () {
    localStorage.setItem("theme", this.value);
    applyTheme(this.value);
  });
});

function showSettings() {
  // Get the settings element
  var settings = document.getElementById("settings-content");

  // Toggle the display of the settings section
  if (settings.style.display === "none") {
    settings.style.display = "block";
  } else {
    settings.style.display = "none";
  }
}

