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
  function patch() {
    const option = document.querySelector('.pubtype-select option[value="*"]');
    if (option && option.textContent.trim() === "Type") {
      option.textContent = "All Type";
      return true;
    }
    return false;
  }

  // 立即尝试一次
  if (!patch()) {
    // 如果还没渲染出来，轮询几次
    let tries = 0;
    const timer = setInterval(function() {
      tries++;
      if (patch() || tries > 20) {
        clearInterval(timer);
      }
    }, 200);
  }
});
</script>



