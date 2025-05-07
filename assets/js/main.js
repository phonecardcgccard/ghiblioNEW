// main.js - 覆盖原文件，集成AI图片生成、多语言、性能与体验优化

// ========== 多语言切换 ==========
let currentLang = (navigator.language || navigator.userLanguage).toLowerCase().includes('zh') ? 'zh' : 'en';

function switchLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById('lang-' + lang).classList.add('active');
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (window.i18n && window.i18n[lang][key]) el.innerText = window.i18n[lang][key];
  });
}
window.switchLang = switchLang;

// ========== DOMContentLoaded ==========
document.addEventListener('DOMContentLoaded', () => {
  // 初始多语言
  switchLang(currentLang);

  // 语言切换按钮
  document.getElementById('lang-en').addEventListener('click', () => switchLang('en'));
  document.getElementById('lang-zh').addEventListener('click', () => switchLang('zh'));

  // Gallery懒加载
  if ('IntersectionObserver' in window) {
    document.querySelectorAll('.gallery-grid img').forEach(img => {
      img.setAttribute('loading', 'lazy');
    });
  }

  // Gallery预览
  document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', function () {
      showPreview(this.src, this.alt);
    });
  });

  // AI生成表单
  const form = document.getElementById('prompt-form');
  const input = document.getElementById('prompt-input');
  const loading = document.getElementById('generate-loading');
  const err = document.getElementById('generate-error');
  const resultWrap = document.getElementById('result-image-wrap');
  const resultImg = document.getElementById('result-image');
  const regenBtn = document.getElementById('regenerate-btn');
  const saveBtn = document.getElementById('save-image-btn');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    err.style.display = "none";
    resultWrap.style.display = "none";
    loading.style.display = "block";
    regenBtn.style.display = "none";
    saveBtn.style.display = "none";
    form.querySelector("button[type=submit]").disabled = true;

    const prompt = input.value.trim();
    if (!prompt) {
      err.innerText = currentLang === 'zh' ? "请输入提示词！" : "Please enter a prompt!";
      err.style.display = "block";
      loading.style.display = "none";
      form.querySelector("button[type=submit]").disabled = false;
      return;
    }

    // 调用pollinations.ai免Key接口
    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent("Ghibli style, " + prompt)}?nologo=true&ts=${Date.now()}`;
    try {
      const img = new window.Image();
      img.crossOrigin = "anonymous";
      img.onload = function () {
        loading.style.display = "none";
        resultImg.src = this.src;
        resultImg.alt = prompt;
        resultWrap.style.display = "block";
        regenBtn.style.display = "inline-block";
        saveBtn.style.display = "inline-block";
        form.querySelector("button[type=submit]").disabled = false;
      };
      img.onerror = function () {
        loading.style.display = "none";
        err.innerText = currentLang === 'zh' ? "图片生成失败，请重试！" : "Generation failed, please try again!";
        err.style.display = "block";
        form.querySelector("button[type=submit]").disabled = false;
      };
      img.src = url;
    } catch (ex) {
      loading.style.display = "none";
      err.innerText = ex.message || "Network error";
      err.style.display = "block";
      form.querySelector("button[type=submit]").disabled = false;
    }
  });

  // 重新生成
  regenBtn.addEventListener('click', function () {
    form.dispatchEvent(new Event('submit'));
  });

  // 保存图片
  saveBtn.addEventListener('click', function () {
    if (!resultImg.src) return;
    const a = document.createElement('a');
    a.href = resultImg.src;
    a.download = 'ghibli-ai.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });

});

// Gallery弹窗预览
function showPreview(src, alt) {
  let modal = document.createElement('div');
  modal.className = 'img-modal';
  modal.innerHTML = `
    <div class="img-modal-bg"></div>
    <img class="img-modal-img" src="${src}" alt="${alt}" />
    <span class="img-modal-close" aria-label="Close">&times;</span>
  `;
  document.body.appendChild(modal);
  modal.querySelector('.img-modal-close').onclick = () => modal.remove();
  modal.querySelector('.img-modal-bg').onclick = () => modal.remove();
}

// Prompt一键复制并填入
window.copyPrompt = function (btn) {
  const text = btn.parentElement.querySelector('.prompt-text').innerText;
  const input = document.getElementById('prompt-input');
  if (input) input.value = text;
  navigator.clipboard.writeText(text);
  btn.innerText = window.i18n[currentLang].copied || 'Copied!';
  btn.classList.add('copied');
  setTimeout(() => {
    btn.innerText = window.i18n[currentLang].copyBtn || 'Copy';
    btn.classList.remove('copied');
  }, 1200);
};
