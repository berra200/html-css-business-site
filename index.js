
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

// NAV: hittar akutell sida anv. befinner sig på och kastar på klassen "active" på a-taggen.
document.addEventListener('DOMContentLoaded', () => {
  let currentPage = location.href;
  let allNavLinks = document.querySelectorAll(".page");

    // console.log(currentPage);
    // console.log(allNavLinks);

    allNavLinks.forEach((link) => {
      if(link.href === currentPage) {
        link.className += " " + "active";
      }
    });
});




