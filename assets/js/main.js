(function() {
  const button = document.getElementById('theme-toggle');
  if (button) {
    button.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', current);
      localStorage.setItem('theme', current);
      button.classList.add('rotate');
      setTimeout(() => button.classList.remove('rotate'), 300);
    });
  }

  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  const progress = document.getElementById('reading-progress');
  if (progress) {
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const width = (scrollTop / scrollHeight) * 100;
      progress.style.width = width + '%';
    });
  }
})();
