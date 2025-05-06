// 全站通用脚本
document.addEventListener("DOMContentLoaded", () => {
  // 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
});

// Loading 控制，可在后续API调用等处引用
export function showLoading() {
  document.querySelector('.loading').style.display = 'flex';
}
export function hideLoading() {
  document.querySelector('.loading').style.display = 'none';
}
