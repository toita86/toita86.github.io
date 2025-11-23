// Video toggle (keep existing behavior)
const video = document.getElementById('header-video');
if (video) {
  video.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
}

// Theme toggle: persist in localStorage and respect prefers-color-scheme
const themeToggle = document.getElementById('theme-toggle');
const THEME_KEY = 'theme-preference';

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (themeToggle) themeToggle.querySelector('.theme-icon').textContent = '☀';
  } else {
    document.documentElement.removeAttribute('data-theme');
    if (themeToggle) themeToggle.querySelector('.theme-icon').textContent = '☾';
  }
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === 'dark' || saved === 'light') {
    applyTheme(saved === 'dark' ? 'dark' : 'light');
    return;
  }

  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDark ? 'dark' : 'light');
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    applyTheme(next === 'dark' ? 'dark' : 'light');
    localStorage.setItem(THEME_KEY, next === 'dark' ? 'dark' : 'light');
  });
}

document.addEventListener('DOMContentLoaded', initTheme);

