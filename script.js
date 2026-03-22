// script.js

fetch('article.json')
  .then(function(response) { return response.json(); })
  .then(function(data) {
    fillArticleHeader(data);
    fillArticleBody(data.content);
    fillRelatedArticles(data.relatedArticles);
  })
  .catch(function(error) {
    console.error('Could not load article.json:', error);
  });


// ── Fill header (same as before) ──────────────────────────
function fillArticleHeader(data) {
  document.getElementById('art-category').textContent    = data.category;
  document.getElementById('art-subcategory').textContent = data.subcategory;
  document.getElementById('art-title').textContent       = data.title;
  document.getElementById('art-author').textContent      = data.author;
  document.getElementById('art-date').textContent        = data.updatedDate;
  document.getElementById('art-time').textContent        = data.updatedTime;
  document.getElementById('social-instagram').href       = data.social.instagram;
  document.getElementById('social-facebook').href        = data.social.facebook;
  document.getElementById('social-twitter').href         = data.social.twitter;
  document.getElementById('social-email').href           = data.social.email;
}


// ── Fill article body from content array ──────────────────
function fillArticleBody(contentArray) {
  var container = document.getElementById('article-body');
  container.innerHTML = ''; // clear first

  contentArray.forEach(function(block) {

    if (block.type === 'paragraph') {
      // Create a <p> tag with the text
      var p = document.createElement('p');
      p.className = 'body-paragraph';
      p.textContent = block.text;
      container.appendChild(p);
    }

    else if (block.type === 'image') {
      // Create image wrapper
      var figure = document.createElement('figure');
      figure.className = 'body-figure';

      var img = document.createElement('img');
      img.src = block.src;
      img.alt = block.caption;
      img.className = 'body-image';

      var caption = document.createElement('figcaption');
      caption.className = 'body-caption';
      caption.textContent = block.caption;

      figure.appendChild(img);
      figure.appendChild(caption);
      container.appendChild(figure);
    }

    else if (block.type === 'heading') {
      // For future use — subheadings inside article
      var h2 = document.createElement('h2');
      h2.className = 'body-heading';
      h2.textContent = block.text;
      container.appendChild(h2);
    }

  });
}


// ── Fill related articles in sidebar ─────────────────────
function fillRelatedArticles(articles) {
  var list = document.getElementById('related-list');
  list.innerHTML = '';

  articles.forEach(function(article) {
    var li = document.createElement('li');
    li.className = 'related-item';

    li.innerHTML =
      '<a href="' + article.url + '" class="related-link">' +
        '<img src="' + article.image + '" alt="" class="related-thumb" />' +
        '<span class="related-text">' + article.title + '</span>' +
      '</a>';

    list.appendChild(li);
  });
}