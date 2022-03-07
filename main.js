 // Select DOM Items
 const menuBtn = document.querySelector(".menu-btn");
 const menu = document.querySelector(".menu");
 const dropdown = document.querySelectorAll(".custom-select-wrapper");
 const menuButtons = document.querySelector(".nav-buttons");
 

 // Seti Initial State Of Menu
 let showMenu = false;

 menuBtn.addEventListener("click", toggleMenu);

 function toggleMenu() {
   if (!showMenu) {
     menuBtn.classList.add("close");
     menu.classList.add("show");
     dropdown.forEach(function(el) {
      el.classList.add('show');
    });
     menuButtons.classList.add("show");
     

     // Set menu state
     showMenu = true;
   } else {
     menuBtn.classList.remove("close");
     menu.classList.remove("show");
     dropdown.forEach(function(el) {
      el.classList.remove('show');
    });
     menuButtons.classList.remove("show");

     // Set Menu State
     showMenu = false;
   }
 }

//  Dropdown Menu
for (const dropdown of document.querySelectorAll(
  ".custom-select-wrapper"
)) {
  dropdown.addEventListener("click", function () {
    this.querySelector(".custom-select").classList.toggle("open");
    this.querySelector(".custom-options").classList.toggle("open");
  });
}

for (const option of document.querySelectorAll(".custom-option")) {
  option.addEventListener("click", function () {
    if (!this.classList.contains("selected")) {
      this.parentNode
        .querySelector(".custom-option.selected")
        .classList.remove("selected");
      this.classList.add("selected");
      this.closest(".custom-select").querySelector(
        ".custom-select__trigger span"
      ).textContent = this.textContent;
    }
  });
}


window.addEventListener("click", function (e) {
  for (const select of document.querySelectorAll(".custom-select")) {
    if (!select.contains(e.target)) {
      select.classList.remove("open");
    }
  }
});



 