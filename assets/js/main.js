// assets/js/main.js
console.log("✅ E-News Frontend loaded successfully");

// Fixed sub-nav on scroll
window.addEventListener('scroll', function() {
  const header = document.querySelector('.site-header');
  const subNav = document.querySelector('.sub-nav');
  const headerHeight = header.offsetHeight;

  if (window.scrollY > headerHeight) {
    subNav.classList.add('fixed');
  } else {
    subNav.classList.remove('fixed');
  }
});

// Load news data and display on index.html
function loadNews() {
  const newsGrid = document.getElementById('news-grid');
  if (!newsGrid) return; // Only run on index.html

  newsGrid.innerHTML = ''; // Clear existing content

  newsData.forEach(news => {
    const newsCard = document.createElement('div');
    newsCard.className = 'news-card';
    newsCard.innerHTML = `
      <img src="${news.image}" alt="News Image">
      <div class="news-content">
        <h3><a href="article.html?id=${news.id}">${news.title}</a></h3>
        <p>${news.summary}</p>
        <small>${news.category} • ${news.date}</small>
      </div>
    `;
    newsGrid.appendChild(newsCard);
  });
}

// Load news on page load
document.addEventListener('DOMContentLoaded', function() {
  loadNews();
  loadArticle();
  initFooterScroll();
});

// Show footer when scrolled to bottom
function initFooterScroll() {
  const footer = document.querySelector('.site-footer');
  if (!footer) return;

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight - 100) {
      footer.style.opacity = '1';
    } else {
      footer.style.opacity = '0';
    }
  });
}

// Load article details on article.html
function loadArticle() {
  const articleSection = document.getElementById('article-section');
  if (!articleSection) return; // Only run on article.html

  const urlParams = new URLSearchParams(window.location.search);
  const newsId = parseInt(urlParams.get('id'));

  if (!newsId) {
    articleSection.innerHTML = '<p>Article not found.</p>';
    return;
  }

  const news = newsData.find(item => item.id === newsId);

  if (!news) {
    articleSection.innerHTML = '<p>Article not found.</p>';
    return;
  }

  articleSection.innerHTML = `
    <h2>${news.title}</h2>
    <p class="meta">By <strong>E-News Staff</strong> | ${news.date}</p>
    <img src="${news.image}" alt="Article Image" class="article-image">
    <div class="article-body">
      ${news.content.split('\n').map(paragraph => `<p>${paragraph}</p>`).join('')}
    </div>
  `;
}
