// AstaNow — script.js
// Step 1: Dark / Light theme toggle

// Check if user previously chose dark mode
// If yes, add dark class to body right away
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

// This function runs when toggle button is clicked
function toggleTheme() {
  document.body.classList.toggle('dark');

  // Save choice so it remembers after page refresh
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}

// STEP 2 — Dropdown and side menu toggles

// Opens and closes the Articles dropdown
function toggleDropdown() {
  var menu = document.getElementById('dropdownMenu');
  // # toggle active class — CSS shows/hides based on this
  menu.classList.toggle('active');
}

// Close dropdown if user clicks anywhere else on page
document.addEventListener('click', function(event) {
  var wrapper = document.querySelector('.dropdown-wrapper');
  // # if click was outside dropdown wrapper — close it
  if (wrapper && !wrapper.contains(event.target)) {
    var menu = document.getElementById('dropdownMenu');
    if (menu) menu.classList.remove('active');
  }
});

// Side menu toggle — content added in Step 3
function toggleSideMenu() {
  // # placeholder for now — Step 3 will fill this
  console.log('side menu clicked');
}

