// Common site-wide JS (modular, easy to expand)
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for anchor links (if any)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
});

// Loading control, can be imported elsewhere if needed
export function showLoading() {
  document.querySelector('.loading').style.display = 'flex';
}
export function hideLoading() {
  document.querySelector('.loading').style.display = 'none';
}
