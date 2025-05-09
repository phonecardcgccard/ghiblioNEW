// 词典
window.i18n = {
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
    prompt3: "夜晚的小镇，温暖灯光与街头的猫，动漫场景",
    prompt4: "瀑布与飞龙环绕的神秘山谷，吉卜力氛围",
    prompt5: "风中短发治愈系少女，身穿白裙，吉卜力风",
    prompt6: "复古火车穿越金色麦田，动漫风景",
    prompt7: "日落时宁静的湖畔村庄，吉卜力风，柔和色彩，魔法氛围",
    prompt8: "吉卜力风格：一对情侣樱花树下牵手，微风暖阳，动漫插画",
    disclaimer: "免责声明：本项目仅供学习与分享，图片归原作者所有。",
    footerInspired: "灵感来源：Ghiblio.xyz",
    footerContact: "联系作者：phonecardcgccard"
  }
};

// 语言切换并刷新文本
function updateLang(lang) {
  if (!window.i18n || !window.i18n[lang]) return;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (window.i18n[lang][key]) {
      // 优先考虑按钮等的 value 属性
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.value = window.i18n[lang][key];
      } else if (el.tagName === "BUTTON") {
        el.textContent = window.i18n[lang][key];
      } else {
        // 普通元素
        el.textContent = window.i18n[lang][key];
      }
    }
  });
  // 输入框和按钮的 placeholder/aria-label
  let promptInput = document.getElementById('prompt-input');
  if (promptInput) {
    promptInput.setAttribute('placeholder', lang === 'zh' ? '输入你的提示词...' : 'Enter your prompt...');
  }
  let btn = document.querySelector('.btn');
  if (btn) {
    btn.setAttribute('aria-label', lang === 'zh' ? '生成' : 'Generate');
  }
  // 更新所有复制按钮的文本
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.textContent = window.i18n[lang]["copyBtn"] || btn.textContent;
  });
}

// 绑定语言切换按钮事件
document.addEventListener("DOMContentLoaded", function(){
  const enBtn = document.getElementById('lang-en');
  const zhBtn = document.getElementById('lang-zh');
  if (enBtn && zhBtn) {
    enBtn.addEventListener('click', function(){
      updateLang('en');
      enBtn.classList.add('active');
      zhBtn.classList.remove('active');
    });
    zhBtn.addEventListener('click', function(){
      updateLang('zh');
      zhBtn.classList.add('active');
      enBtn.classList.remove('active');
    });
    // 页面初始渲染
    if (zhBtn.classList.contains('active')) updateLang('zh');
    else updateLang('en');
  } else {
    updateLang('en');
  }
});

// 复制按钮多语言反馈
window.copyPrompt = function(btn){
  var text = btn.parentElement.querySelector('.prompt-text').innerText;
  navigator.clipboard.writeText(text);
  var lang = document.getElementById('lang-zh')?.classList.contains('active') ? 'zh' : 'en';
  btn.textContent = (window.i18n[lang]?.copied) || 'Copied!';
  setTimeout(function(){
    btn.textContent = window.i18n[lang]?.copyBtn || 'Copy';
  }, 1200);
};
