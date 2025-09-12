// assets/js/custom.js
(function () {
  function renumberPublications() {
    const container = document.querySelector('#container-publications');
    if (!container) return;

    // 选出所有条目，并按屏幕上的 y 坐标从小到大排序（视觉从上到下）
    const items = Array.from(container.querySelectorAll('.isotope-item'));
    if (!items.length) return;

    const ordered = items
      .map(el => {
        const rect = el.getBoundingClientRect();
        return { el, y: rect.top, x: rect.left };
      })
      .sort((a, b) => (a.y - b.y) || (a.x - b.x));

    const total = ordered.length;

    ordered.forEach((o, i) => {
      const cite = o.el.querySelector('.pub-list-item.view-citation');
      if (!cite) return;

      // 倒序编号：第一条显示 [total]，最后一条显示 [1]
      const num = total - i;

      // 复用/创建编号节点，避免重复插入
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

  // 在页面完全加载后、以及 Isotope 布局完成后多次执行，确保命中
  function schedule() {
    renumberPublications();
    setTimeout(renumberPublications, 100);
    setTimeout(renumberPublications, 500);
    setTimeout(renumberPublications, 1500);
  }

  if (document.readyState === 'complete') schedule();
  else window.addEventListener('load', schedule);

  // 监听 publications 容器的变动（Isotope 重新布局/筛选时再次编号）
  const container = document.querySelector('#container-publications');
  if (container && 'MutationObserver' in window) {
    const mo = new MutationObserver(() => schedule());
    mo.observe(container, { childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'class'] });
  }
})();
