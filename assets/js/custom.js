
<script>
document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('#container-publications');
  if (!container) return;

  function renumber() {
    // 只取可见条目
    const items = Array.from(
      container.querySelectorAll('.isotope-item')
    ).filter(el => el.style.display !== 'none');

    const total = items.length;

    items.forEach((el, i) => {
      const cite = el.querySelector('.pub-list-item.view-citation');
      if (!cite) return;

      const num = total - i; // 倒序编号

      // 如果已有编号先清掉
      let badge = cite.querySelector('.pub-index');
      if (!badge) {
        badge = document.createElement('span');
        badge.className = 'pub-index';
        badge.style.fontWeight = '600';
        badge.style.marginRight = '0.5rem';
        cite.prepend(badge);
      }
      badge.textContent = `[${num}] `;
    });
  }

  // 页面加载完后跑一次
  renumber();

  // Isotope 布局完成时重新编号（核心）
  container.addEventListener('arrangeComplete', renumber);

  // 兜底：DOM 变化时也触发
  if ('MutationObserver' in window) {
    const mo = new MutationObserver(() => renumber());
    mo.observe(container, { childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'class'] });
  }
});
</script>
 

