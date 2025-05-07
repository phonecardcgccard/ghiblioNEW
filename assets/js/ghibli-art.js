import { showLoading, hideLoading } from './main.js';

// Simple demo: replace with real AI API integration later
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('ghibli-art-form');
  const result = document.getElementById('result');
  const img = document.getElementById('generated-image');
  const downloadBtn = document.getElementById('download-btn');
  const loading = document.querySelector('.loading');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const prompt = form.prompt.value.trim();
    if (!prompt) return;
    showLoading();
    // Simulate image generation (replace with API call)
    setTimeout(() => {
      // Example placeholder image — replace with API response
      img.src = 'https://placehold.co/600x400/91c9f5/ffffff?text=Ghibli+AI+Art';
      img.alt = `AI generated Ghibli-style art: ${prompt}`;
      result.style.display = 'block';
      hideLoading();
    }, 1800);
  });

  downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = img.src;
    link.download = 'ghibli-ai-art.png';
    link.click();
  });
});
