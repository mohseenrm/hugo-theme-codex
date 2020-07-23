'use strict';

document.addEventListener('DOMContentLoaded', function() {
  /*
   * Handles mobile nav
   */

  function toggleMobileNavState() {
    const body = document.querySelector("body");
    body.classList.toggle("nav--active");
  }

  /*
   * Initializes burger functionality
   */

  function initBurger() {
    const burger = document.querySelector(".burger");
    burger.addEventListener("click", toggleMobileNavState);
  }

  initBurger();

  const toggle = document.getElementById('theme-toggle');

  toggle.addEventListener('change', (e) => {
    if(e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      return;
    }
    document.documentElement.setAttribute('data-theme', 'light');
  });
});
