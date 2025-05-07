import { showLoading, hideLoading } from './main.js';

// Demo logic: replace with actual AI API integration
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('image-var-form');
  const result = document.getElementById('result');
  const variationList = document.getElementById('variation-list');
  const downloadAllBtn = document.getElementById('download-all-btn');
  let dummyImages = [];

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fileInput = form['input-image'];
    if (!fileInput.files || fileInput.files.length === 0) return;
    showLoading();

    // Simulate API response with placeholder images
    setTimeout(() => {
      variationList.innerHTML = '';
      dummyImages = [
        'https://placehold.co/320x200/FFC5EC/333?text=Variation+1',
        'https://placehold.co/320x200/91c9f5/333?text=Variation+2',
        'https://placehold.co/320x200/CFFFD0/333?text=Variation+3'
      ];
      dummyImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'AI variation artwork';
        img.style.maxWidth = '220px';
        img.style.borderRadius = '12px';
        img.style.boxShadow = '0 2px 8px #8882';
        variationList.appendChild(img);
      });
      result.style.display = 'block';
      hideLoading();
    }, 1600);
  });

  downloadAllBtn.addEventListener('click', () => {
    dummyImages.forEach((src, i) => {
      const link = document.createElement('a');
      link.href = src;
      link.download = `variation-${i + 1}.png`;
      link.click();
    });
  });
});
