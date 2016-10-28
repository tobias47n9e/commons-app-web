document.addEventListener("DOMContentLoaded", function() {
    var hamburger = document.getElementById("hamburger");
    var navItems = document.getElementById("nav-items");
    var navLinks = document.getElementsByClassName("nav-link");

    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle('open');
        navItems.classList.toggle('open');
    });

    for (i=0; i<navLinks.length; i++) {
        navLinks[i].addEventListener("click", function() {
        hamburger.classList.remove('open');
        navItems.classList.remove('open');
        });
    }
});
