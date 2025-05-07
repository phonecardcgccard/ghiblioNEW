import { showLoading, hideLoading } from './main.js';

// Demo logic: replace with real AI API integration
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('image-enhance-form');
  const result = document.getElementById('result');
  const enhancedImg = document.getElementById('enhanced-img');
  const downloadBtn = document.getElementById('download-btn');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fileInput = form['enhance-image'];
    if (!fileInput.files || fileInput.files.length === 0) return;
    showLoading();

    // Simulate API response with placeholder image
    setTimeout(() => {
      enhancedImg.src = 'https://placehold.co/600x400/F7B267/333?text=Enhanced+AI+Image';
      enhancedImg.alt = 'AI enhanced image';
      result.style.display = 'block';
      hideLoading();
    }, 1600);
  });

  downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = enhancedImg.src;
    link.download = 'enhanced-image.png';
    link.click();
  });
});
