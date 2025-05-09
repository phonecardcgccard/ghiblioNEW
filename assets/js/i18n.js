const translations = {
  en: {
    title: "Ghibli-style AI Generator",
    subtitle: "Step into a healing Ghibli world and create your own anime scene",
    generatorTitle: "Generator",
    generatorHint: "Enter your ideas to generate unique Ghibli-style images!",
    generateBtn: "Generate",
    galleryTitle: "Gallery",
    promptSuggestions: "Prompt Suggestions",
    prompt1: "A misty morning in a fairytale forest, with wandering spirits",
    prompt2: "Ghibli-style sky castle with flying robots",
    prompt3: "A small town at night, warm lights and cats on the street",
    prompt4: "A mysterious valley with waterfalls and flying dragons",
    prompt5: "A healing girl with short hair in the wind, wearing a white dress",
    prompt6: "An old-fashioned train crossing a golden wheat field, anime scenery",
    prompt7: "A peaceful lakeside village at sunset, Ghibli style, soft colors, magical atmosphere, anime landscape",
    prompt8: "A Ghibli-style scene of a young couple holding hands under cherry blossom trees, gentle breeze, warm sunlight, anime illustration",
    copyBtn: "Copy",
    disclaimer: "Disclaimer: This project is for learning and sharing only. Images belong to their original creators.",
    footerInspired: "Inspired by Ghiblio.xyz",
    footerContact: "Contact: phonecardcgccard"
  },
  zh: {
    title: "吉卜力风格AI生成器",
    subtitle: "走进治愈系吉卜力世界，创造你的专属动漫场景",
    generatorTitle: "生成器",
    generatorHint: "输入你的创意，生成独特的吉卜力风格图片！",
    generateBtn: "生成",
    galleryTitle: "画廊",
    promptSuggestions: "提示词推荐",
    prompt1: "童话森林的薄雾清晨，游荡的精灵",
    prompt2: "天空之城与飞行机器人，吉卜力风格",
    prompt3: "夜晚小镇，温暖灯光与猫咪",
    prompt4: "神秘山谷，瀑布与飞龙",
    prompt5: "风中短发白裙治愈少女",
    prompt6: "复古列车穿越金色麦田，动画风景",
    prompt7: "落日湖畔村庄，吉卜力风，柔和色彩、魔法氛围、动画风景",
    prompt8: "樱花树下牵手的恋人，微风、暖阳、动漫插画",
    copyBtn: "复制",
    disclaimer: "免责声明：本项目仅供学习与交流，图片归原作者所有。",
    footerInspired: "灵感来源：Ghiblio.xyz",
    footerContact: "联系：phonecardcgccard"
  }
};

function updateLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });

  // 让输入框/按钮占位符等也能切换
  if (lang === 'zh') {
    document.getElementById('prompt-input')?.setAttribute('placeholder', '输入你的提示词...');
    document.querySelector('.btn')?.setAttribute('aria-label', '生成');
  } else {
    document.getElementById('prompt-input')?.setAttribute('placeholder', 'Enter your prompt...');
    document.querySelector('.btn')?.setAttribute('aria-label', 'Generate');
  }
}

// 切换按钮事件
document.addEventListener("DOMContentLoaded", function(){
  document.getElementById('lang-en').onclick = function(){
    updateLang('en');
    document.getElementById('lang-en').classList.add('active');
    document.getElementById('lang-zh').classList.remove('active');
  };
  document.getElementById('lang-zh').onclick = function(){
    updateLang('zh');
    document.getElementById('lang-zh').classList.add('active');
    document.getElementById('lang-en').classList.remove('active');
  };
  // 默认根据按钮激活态初始化
  if(document.getElementById('lang-zh').classList.contains('active')) updateLang('zh');
  else updateLang('en');
});
