'use strict';

document.addEventListener('DOMContentLoaded', function() {
  /* Handles mobile nav */
  function toggleMobileNavState() {
    var body = document.querySelector("body");
    body.classList.toggle("nav--active");
  }

  /* Burger functionality */
  function initBurger() {
    var burger = document.querySelector(".burger");
    burger.addEventListener("click", toggleMobileNavState);
  }

  /* Dark/Light toggle */
  var toggle = document.getElementById('theme-toggle');

  toggle.addEventListener('change', function(e) {
    if(e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      return;
    }
    document.documentElement.setAttribute('data-theme', 'light');
  });

  initBurger();
});
