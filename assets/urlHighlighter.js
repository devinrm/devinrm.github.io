document.addEventListener("DOMContentLoaded", event => {
  event.preventDefault();
  function urlHighlight(urlLoc, id) {
    const currentUrl = new URL(window.location.href);
    if (currentUrl.pathname === urlLoc) document.getElementById(id).className = 'selected';
  };
  urlHighlight('/', 'home-link');
  urlHighlight('/blog/', 'blog-link');
  urlHighlight('/books/', 'book-link');
});
