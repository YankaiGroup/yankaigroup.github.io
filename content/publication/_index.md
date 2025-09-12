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
    const visible = Array.from(container.querySelectorAll('.isotope-item'))
      .filter(el => el.style.display !== 'none');
    counterEl.textContent = `共找到 ${visible.length} 篇结果`;
  }

  updateCount();
  container.addEventListener('arrangeComplete', updateCount);
});
</script>

