---
title: Full Publications

# Listing view
view: citation
# Optional banner image (relative to `assets/media/` folder).
banner:
  caption: ''
  image: ''
---


function updateCount() {
  // Isotope 会在容器上挂一个 .isotope 实例
  const iso = container.isotope || container._isotope || 
              (window.jQuery && window.jQuery(container).data && window.jQuery(container).data('isotope'));
  
  let visible = [];
  if (iso && iso.filteredItems) {
    visible = iso.filteredItems;  // Isotope 内部记录的可见条目
  } else {
    // fallback：还是用 DOM 判断
    visible = Array.from(container.querySelectorAll('.isotope-item'))
      .filter(el => el.style.display !== 'none');
  }
  
  counterEl.textContent = `共找到 ${visible.length} 篇结果`;
}

