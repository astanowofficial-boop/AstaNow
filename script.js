// AstaNow — script.js
// Step 1: Dark / Light theme toggle

// Check if user previously chose dark mode
// If yes, add dark class to body right away
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

// Opens and closes the side menu
function toggleSideMenu() {
  var menu    = document.getElementById('sideMenu');
  var overlay = document.getElementById('sideOverlay');

  // # toggle active class on both menu and overlay
  menu.classList.toggle('active');
  overlay.classList.toggle('active');

  // # prevent page scrolling when menu is open
  document.body.style.overflow =
    menu.classList.contains('active') ? 'hidden' : '';
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