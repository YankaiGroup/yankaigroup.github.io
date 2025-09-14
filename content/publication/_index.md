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
  function patchFilters() {
    let changed = false;

    // 修改 Type 下拉框
    const typeSelect = document.querySelector('select[data-filter-group="pubtype"]');
    if (typeSelect) {
      const typeOpt = typeSelect.querySelector('option[value="*"]');
      if (typeOpt && typeOpt.textContent.trim() === "Type") {
        typeOpt.textContent = "All Type";
        changed = true;
      }
    }

    // 修改 Date 下拉框
    const yearSelect = document.querySelector('select[data-filter-group="year"]');
    if (yearSelect) {
      const yearOpt = yearSelect.querySelector('option[value="*"]');
      if (yearOpt && yearOpt.textContent.trim() === "Date") {
        yearOpt.textContent = "All Years";
        changed = true;
      }
    }

    return changed;
  }

  // 立即尝试
  if (!patchFilters()) {
    let tries = 0;
    const timer = setInterval(function () {
      tries++;
      if (patchFilters() || tries > 20) {
        clearInterval(timer);
      }
    }, 200);
  }
});
</script>




