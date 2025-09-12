(function () {
  function renumberPublications() {
    const container = document.querySelector('#container-publications');
    if (!container) return;

    const items = Array.from(container.querySelectorAll('.isotope-item'));
    if (!items.length) return;

    // 根据屏幕上的位置排序（y 坐标优先，其次 x 坐标）
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

      const num = total - i; // 倒序编号

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

  function schedule() {
    // 多次执行，保证 Isotope 初次加载完成
    renumberPublications();
    setTimeout(renumberPublications, 200);
    setTimeout(renumberPublications, 1000);
  }

  if (document.readyState === 'complete') schedule();
  else window.addEventListener('load', schedule);

  // 🔑 核心：监听 Isotope 的布局完成事件
  const container = document.querySelector('#container-publications');
  if (container) {
    // Isotope 会在元素上触发自定义事件 'arrangeComplete'
    container.addEventListener('arrangeComplete', renumberPublications);
  }

  // 兜底：MutationObserver，保证动态变化时也更新
  if (container && 'MutationObserver' in window) {
    const mo = new MutationObserver(() => renumberPublications());
    mo.observe(container, { childList: true, subtree: true, attributes: true });
  }
})();

