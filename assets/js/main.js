// Gallery image preview modal
document.addEventListener('DOMContentLoaded', () => {
  // Gallery preview
  document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', function () {
      showPreview(this.src, this.alt);
    });
  });

  // Language switching
  document.getElementById('lang-en').addEventListener('click', () => switchLang('en'));
  document.getElementById('lang-zh').addEventListener('click', () => switchLang('zh'));

  // Generator submit on Enter
  const form = document.getElementById('prompt-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    // 这里可以集成AI生成API
    alert('This is a static demo. Please integrate your AI API in main.js!');
  });
});

// Gallery modal logic
function showPreview(src, alt) {
  let modal = document.createElement('div');
  modal.className = 'img-modal';
  modal.innerHTML = `
    <div class="img-modal-bg"></div>
    <img class="img-modal-img" src="${src}" alt="${alt}" />
    <span class="img-modal-close">&times;</span>
  `;
  document.body.appendChild(modal);
  modal.querySelector('.img-modal-close').onclick = () => modal.remove();
  modal.querySelector('.img-modal-bg').onclick = () => modal.remove();
}

// Prompt copy fills Generator input and copies to clipboard
window.copyPrompt = function (btn) {
  const text = btn.parentElement.querySelector('.prompt-text').innerText;
  const input = document.getElementById('prompt-input');
  if (input) input.value = text;
  navigator.clipboard.writeText(text);
  btn.innerText = i18n[currentLang].copied || 'Copied!';
  setTimeout(() => btn.innerText = i18n[currentLang].copyBtn || 'Copy', 1200);
};

// --- Multilingual (EN/中文) ---

const i18n = {
  en: {
    title: "Ghibli-style AI Generator",
    subtitle: "Step into a healing Ghibli world and create your own anime scene",
    generatorTitle: "Generator",
    generatorHint: "Enter your ideas to generate unique Ghibli-style images!",
    generateBtn: "Generate",
    galleryTitle: "Gallery",
    promptSuggestions: "Prompt Suggestions",
    copyBtn: "Copy",
    copied: "Copied!",
    prompt1: "A misty morning in a fairytale forest, with wandering spirits",
    prompt2: "Ghibli-style sky castle with flying robots",
    prompt3: "A small town at night, warm lights and cats on the street",
    prompt4: "A mysterious valley with waterfalls and flying dragons",
    prompt5: "A healing girl with short hair in the wind, wearing a white dress",
    prompt6: "An old-fashioned train crossing a golden wheat field, anime scenery",
    prompt7: "A peaceful lakeside village at sunset, Ghibli style, soft colors, magical atmosphere, anime landscape",
    prompt8: "A Ghibli-style scene of a young couple holding hands under cherry blossom trees, gentle breeze, warm sunlight, anime illustration",
    disclaimer: "Disclaimer: This project is for learning and sharing only. Images belong to their original creators.",
    footerInspired: "Inspired by Ghiblio.xyz",
    footerContact: "Contact: phonecardcgccard"
  },
  zh: {
    title: "吉卜力风格AI生成器",
    subtitle: "步入治愈系吉卜力世界，创造属于你的动漫场景",
    generatorTitle: "生成工具",
    generatorHint: "输入你的想法，生成独特的吉卜力风格图片！",
    generateBtn: "生成",
    galleryTitle: "画廊",
    promptSuggestions: "提示词推荐",
    copyBtn: "复制",
    copied: "已复制！",
    prompt1: "童话森林的清晨薄雾，漫步的精灵，吉卜力风格",
    prompt2: "吉卜力风格的天空之城和飞行机器人",
    prompt3: "夜晚的小镇，温暖灯光与街头的猫，动画场景",
    prompt4: "瀑布与飞龙环绕的神秘山谷，吉卜力氛围",
    prompt5: "风中短发治愈系少女，身穿白裙，吉卜力风",
    prompt6: "复古火车穿越金色麦田，动漫风景",
    prompt7: "日落时宁静的湖畔村庄，吉卜力风，柔和色彩，魔法氛围",
    prompt8: "吉卜力风格：一对情侣樱花树下牵手，微风暖阳，动画插画",
    disclaimer: "免责声明：本项目仅供学习与分享，图片归原作者所有。",
    footerInspired: "灵感来源：Ghiblio.xyz",
    footerContact: "联系作者：phonecardcgccard"
  }
};

let currentLang = 'en';

function switchLang(lang) {
  currentLang = lang;
  // 切换按钮样式
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById('lang-' + lang).classList.add('active');
  // 批量替换所有data-i18n内容
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) el.innerText = i18n[lang][key];
  });
}
