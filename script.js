// script.js
// Reads article.json and fills the article header on the page

fetch('article.json')
  .then(function(response) {
    return response.json();          // parse the JSON file
  })
  .then(function(data) {
    fillArticleHeader(data);         // fill the page with data
  })
  .catch(function(error) {
    console.error('Could not load article.json:', error);
  });


function fillArticleHeader(data) {

  // 1. Category
  document.getElementById('art-category').textContent    = data.category;
  document.getElementById('art-subcategory').textContent = data.subcategory;

  // 2. Title
  document.getElementById('art-title').textContent = data.title;

  // 3. Author / date / time
  document.getElementById('art-author').textContent = data.author;
  document.getElementById('art-date').textContent   = data.updatedDate;
  document.getElementById('art-time').textContent   = data.updatedTime;

  // 4. Social links — set the href on each icon link
  document.getElementById('social-instagram').href = data.social.instagram;
  document.getElementById('social-facebook').href  = data.social.facebook;
  document.getElementById('social-twitter').href   = data.social.twitter;
  document.getElementById('social-email').href     = data.social.email;
}