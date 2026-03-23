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

/* # nav links pushed to center-right using margin auto */
.navbar-right {
  margin-left: auto;    /* # pushes nav links away from logo */
  margin-right: 12px;   /* # gap between nav links and hamburger */
  display: flex;
  align-items: center;
  gap: 8px;
}
```

---

**Save → `ship` → refresh.**

Now layout is:
```
[LOGO]    [About Us] [Subscribe] [Articles▾] [🌙]    [☰]
left           center-right links              right