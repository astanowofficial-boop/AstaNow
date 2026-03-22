// ==============================
// 1. GET SLUG FROM URL
// ==============================
const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

// ==============================
// 2. LOAD ARTICLE DATA
// ==============================
fetch(`data/${slug}.json`)
  .then(res => res.json())
  .then(article => {

    // SET TITLE + META
    document.getElementById("title").innerText = article.title;
    document.getElementById("meta").innerText =
      article.author + " • " + article.date;

    const container = document.getElementById("content");

    // ==============================
    // 3. RENDER CONTENT
    // ==============================
    article.content.forEach((block, index) => {

      let el;

      if (block.type === "paragraph") {
        el = document.createElement("p");
        el.innerText = block.text;
      }

      if (block.type === "heading") {
        el = document.createElement("h2");
        el.className = "text-2xl font-bold mt-6";
        el.innerText = block.text;
      }

      if (block.type === "image") {
        el = document.createElement("img");
        el.src = block.src;
        el.className = "rounded-lg";
      }

      container.appendChild(el);

      // ==============================
      // 🔥 AUTO MID AD
      // ==============================
      if (index === 2) {
        const ad = document.createElement("div");
        ad.className = "bg-white/10 text-center py-10 rounded-xl";
        ad.innerText = "Mid Advertisement";
        container.appendChild(ad);
      }

    });

  });

// ==============================
// 4. LOAD NEXT ARTICLES
// ==============================
fetch("data/articles.json")
  .then(res => res.json())
  .then(list => {

    const next = document.getElementById("next-articles");

    list.slice(0, 3).forEach(item => {

      const div = document.createElement("div");

      div.className = "bg-white/5 p-4 rounded-lg";

      div.innerHTML = `
        <h3 class="font-bold">${item.title}</h3>
        <a href="article.html?slug=${item.slug}" class="text-blue-400">
          Read →
        </a>
      `;

      next.appendChild(div);
    });

  });