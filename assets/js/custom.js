document.addEventListener("DOMContentLoaded", () => {
  // 找到所有 publication 条目
  const items = Array.from(
    document.querySelectorAll("#container-publications .isotope-item .pub-list-item.view-citation")
  );

  // 总数
  const total = items.length;

  items.forEach((item, i) => {
    // 倒序编号：第一条是 total，最后一条是 1
    const num = total - i;

    if (!item.dataset.numbered) {
      item.dataset.numbered = "1";
      const prefix = document.createElement("span");
      prefix.textContent = `[${num}] `;
      prefix.style.fontWeight = "600";
      prefix.style.marginRight = "0.5rem";
      item.prepend(prefix); // 插到每条 citation 前
    }
  });
});
