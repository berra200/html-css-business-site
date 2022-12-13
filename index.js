
// Event listener for burger menu
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});

// NAV - Aktuell sida
document.addEventListener("DOMContentLoaded", () => {
let currentPage = location.href;
let allNavLinks = document.querySelectorAll(".page");

  allNavLinks.forEach((link) => {
    if(link.href === currentPage) {
      link.className += " " + "active";
      link.ariaCurrent = "page";
    }
  });
  
});

// Display - Värdering-formulär

let dropdown = document.querySelector("#subjectDropdown");

dropdown.addEventListener("change", () => {
  
  let valuationForm = document.querySelector("#valuationForm");
  let allInputFieldsValuation = document.querySelectorAll(".input-valuation");


  if (dropdown.value === "3") {
    valuationForm.style.display = "block";


    allInputFieldsValuation.forEach((input) => {
      input.required = true;
      
    });

  } else {
    valuationForm.style.display = "none";

    allInputFieldsValuation.forEach((input) => {
      input.required = false;
    });
  };
});


