// assets/js/main.js
console.log("✅ Asia-News Frontend loaded successfully");

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

// Load news data and display on index.html (limited to 8 items)
function loadNews(filteredData = newsData.slice(0, 8)) {
  const newsGrid = document.getElementById('news-grid');
  if (!newsGrid) return; // Only run on index.html

  newsGrid.innerHTML = ''; // Clear existing content

  filteredData.forEach(news => {
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

  // Load recent headlines in sidebar
  loadRecentHeadlines(filteredData);
}

// Load trending news
function loadTrending(filteredData = trendingData) {
  const trendingGrid = document.getElementById('trending-grid');
  if (!trendingGrid) return;

  trendingGrid.innerHTML = '';

  filteredData.forEach(news => {
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
    trendingGrid.appendChild(newsCard);
  });
}

// Load lifestyle news
function loadLifestyle(filteredData = lifestyleData) {
  const lifestyleGrid = document.getElementById('lifestyle-grid');
  if (!lifestyleGrid) return;

  lifestyleGrid.innerHTML = '';

  filteredData.forEach(news => {
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
    lifestyleGrid.appendChild(newsCard);
  });
}

// Load recent headlines in sidebar
function loadRecentHeadlines(filteredData = newsData) {
  const recentHeadlines = document.querySelector('.recent-headlines');
  if (!recentHeadlines) return;

  recentHeadlines.innerHTML = '';

  // Take first 5 news items for recent headlines
  const recentNews = filteredData.slice(0, 5);

  recentNews.forEach((news, index) => {
    const li = document.createElement('li');
    const isEven = index % 2 === 0;
    li.className = isEven ? 'headline-left' : 'headline-right';
    li.innerHTML = `
      <img src="${news.image}" alt="News Image">
      <div>
        <a href="article.html?id=${news.id}">${news.title}</a>
        <small style="display:block; font-size:12px; color:#777; margin-top:2px;">${news.date}</small>
      </div>
    `;
    recentHeadlines.appendChild(li);
  });
}

// Search news function
function searchNews(query) {
  if (!query.trim()) {
    return newsData;
  }
  const lowerQuery = query.toLowerCase();
  return newsData.filter(news =>
    news.title.toLowerCase().includes(lowerQuery) ||
    news.summary.toLowerCase().includes(lowerQuery)
  );
}

// Load news on page load
document.addEventListener('DOMContentLoaded', function() {
  loadNews();
  loadTrending();
  loadLifestyle();
  loadArticle();
  initFooterScroll();
  loadShorts();

  // Add search functionality
  const searchBar = document.querySelector('.search-bar');
  if (searchBar) {
    searchBar.addEventListener('input', function() {
      const filteredData = searchNews(this.value);
      loadNews(filteredData);
    });
  }
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
    <p class="meta">By <strong>Asia-News Staff</strong> | ${news.date}</p>
    <img src="${news.image}" alt="Article Image" class="article-image">
    <div class="article-body">
      ${news.content.split('\n').map(paragraph => `<p>${paragraph}</p>`).join('')}
    </div>
  `;
}




// Load shorts videos
function loadShorts() {
  const shortsContainer = document.getElementById("shortsContainer");
  if (!shortsContainer) return; // Only run on pages with shorts section

  shortsContainer.innerHTML = ''; // Clear existing content

  shortsData.forEach(short => {
    const card = document.createElement("div");
    card.classList.add("short-card");

    let mediaElement = '';
    if (short.video.includes('youtube.com/shorts')) {
      // Extract YouTube video ID from shorts URL
      const videoId = short.video.split('/shorts/')[1].split('?')[0];
      mediaElement = `<iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    } else {
      mediaElement = `<video src="${short.video}" controls muted poster="https://picsum.photos/250/420?random=${Math.floor(Math.random() * 1000)}">Your browser does not support the video tag.</video>`;
    }

    card.innerHTML = `
      ${mediaElement}
      <div class="short-info">
        <p class="short-title">${short.title}</p>
        <span class="short-duration">▶ ${short.duration}</span>
      </div>
    `;

    shortsContainer.appendChild(card);
  });
}
