// Load article list
fetch("data/articles.json")
  .then(res => res.json())
  .then(data => {

    const container = document.getElementById("articles-list");

    data.forEach(article => {

      const div = document.createElement("div");

      div.className = "bg-white/5 p-4 rounded-lg";

      div.innerHTML = `
        <h3 class="text-xl font-bold">${article.title}</h3>
        <a href="article.html?slug=${article.slug}" class="text-blue-400">
          Read More →
        </a>
      `;

      container.appendChild(div);
    });

  });