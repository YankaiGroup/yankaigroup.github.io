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


<script>
document.addEventListener("DOMContentLoaded", function () {
  function reorderTypeOptions() {
    const typeSelect = document.querySelector('select[data-filter-group="pubtype"]');
    if (!typeSelect) return false;

    // 定义新顺序
    const desiredOrder = [
      "All Type",
      "Journal paper",
      "Computer science conference paper",
      "Engineering conference paper",
      "Preprint",
      "Patent"
    ];

    // 把所有 option 收集到 map
    const optionsMap = {};
    for (let opt of typeSelect.options) {
      optionsMap[opt.textContent.trim()] = opt;
    }

    // 清空 select
    typeSelect.innerHTML = "";

    // 按新顺序重新添加
    for (let label of desiredOrder) {
      if (optionsMap[label]) {
        typeSelect.appendChild(optionsMap[label]);
      }
    }
    return true;
  }

  if (!reorderTypeOptions()) {
    let tries = 0;
    const timer = setInterval(function () {
      tries++;
      if (reorderTypeOptions() || tries > 20) {
        clearInterval(timer);
      }
    }, 200);
  }
});
</script>




