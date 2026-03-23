// ============================================
// AstaNow — script.js
// Step 1: Dark / Light theme toggle
// ============================================


// # DARK/LIGHT TOGGLE LOGIC
// When user clicks toggle button:
// If body has "dark" class → remove it (go light)
// If body does not have "dark" class → add it (go dark)
// localStorage saves their choice so it remembers on next visit

// # Run this immediately when page loads
// Check if user previously chose dark mode
// If yes, add dark class to body right away
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

// # This function is called when toggle button is clicked
// We will connect it to the button in Step 2
function toggleTheme() {
  document.body.classList.toggle('dark');
  // # toggle means: if dark exists remove it, if not add it

  // # Save choice to localStorage so it remembers after page refresh
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}
