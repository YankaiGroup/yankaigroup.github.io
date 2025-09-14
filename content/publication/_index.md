---
title: Full Publications

# Listing view
view: citation

 
# Optional banner image (relative to `assets/media/` folder).
banner:
  caption: ''
  image: ''
---


<script>
document.addEventListener("DOMContentLoaded", function () {
  function patch(label, newText) {
    const sel = document.querySelector(label);
    if (!sel) return false;
    const opt = sel.querySelector('option[value="*"]');
    if (opt && opt.textContent.trim().length > 0) {
      opt.textContent = newText;
      return true;
    }
    return false;
  }

  function tryPatch() {
    const ok1 = patch('.pubtype-select', 'All Type');
    const ok2 = patch('.pubyear-select', 'All Years');
    return ok1 && ok2;
  }

  // 立即试一次
  if (!tryPatch()) {
    // 如果 DOM 还没准备好，间隔检查几次
    let tries = 0;
    const timer = setInterval(function () {
      tries++;
      if (tryPatch() || tries > 20) {
        clearInterval(timer);
      }
    }, 200);
  }
});
</script>




