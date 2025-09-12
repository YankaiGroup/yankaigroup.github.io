---
title: Full Publications

# Listing view
view: citation
# Optional banner image (relative to `assets/media/` folder).
banner:
  caption: ''
  image: ''
---
<div id="pub-count" style="font-weight:600; margin:1rem 0;"></div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#container-publications');
  if (!container) return;

  const counterEl = document.getElementById('pub-count');

  function updateCount() {
    // 尝试从 Isotope 实例里获取可见条目
    const iso = container.isotope || container._isotope ||
      (window.jQuery && window.jQuery(container).data && window.jQuery(container).data('isotope'));

    let visible = [];
    if (iso && iso.filteredItems) {
      visible = iso.filteredItems;  // Isotope 内部的可见列表
    } else {
      // fallback：用 DOM 方式检查 display
      visible = Array.from(container.querySelectorAll('.isotope-item'))
        .filter(el => el.style.display !== 'none');
    }

    // ✅ 注意这里用反引号 `
    counterEl.textContent = `共找到 ${visible.length} 篇结果`;
  }

  updateCount();
  container.addEventListener('arrangeComplete', updateCount);
});
</script>

