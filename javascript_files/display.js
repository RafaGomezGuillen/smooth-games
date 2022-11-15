function displayMenu() {
  document.getElementById("my_menu").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.menu-button')) {
    var dropdowns = document.getElementsByClassName("menu-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function displayStatistics() {
  document.getElementById("my_statistics").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.statistics-button')) {
    var dropdowns = document.getElementsByClassName("statistics-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function lightMode() {
  var element = document.body;
  element.classList.toggle("light-mode");
}

