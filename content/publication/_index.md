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
document.addEventListener('DOMContentLoaded', function () {
  var c = document.querySelector('#container-publications');
  if (!c) return;
  var n = c.querySelectorAll('.isotope-item').length;
  // 起始值 = 总数 + 1
  c.style.setProperty('--pub-start', (n + 1).toString());
});
</script>
