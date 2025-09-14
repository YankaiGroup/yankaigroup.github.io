---
title: Full Publications

# Listing view
view: citation

 
# Optional banner image (relative to `assets/media/` folder).
banner:
  caption: ''
  image: ''
---


<!-- 自定义下拉框 -->
<select id="my-type-filter" class="pubtype-select">
  <option value="*">All Type</option>
  <option value="journal">Journal</option>
  <option value="conference">Conference</option>
</select>

<script>
document.addEventListener("DOMContentLoaded", function () {
  // 用你自己的筛选逻辑替换掉主题的默认逻辑
  const sel = document.getElementById('my-type-filter');
  sel.addEventListener('change', function () {
    const val = sel.value;
    // 这里可以调用主题自带的 isotope 过滤逻辑
    // 比如模拟点击默认的 pubtype-select
    const defaultSel = document.querySelector('.pubtype-select');
    if (defaultSel) {
      defaultSel.value = val;
      defaultSel.dispatchEvent(new Event('change'));
    }
  });
});
</script>



