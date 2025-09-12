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
(function () {
  var CONTAINER_SEL = '#container-publications';
  var ITEM_SEL = '.isotope-item';
  var TITLE_BLOCK_SEL = '.pub-list-item.view-citation';

  function $(sel, root){ return (root||document).querySelector(sel); }
  function $all(sel, root){ return Array.prototype.slice.call((root||document).querySelectorAll(sel)); }

  var container = $(CONTAINER_SEL);
  if (!container) return;

  // 获取 Isotope 实例（如果有的话）
  function getIso(){
    try {
      return container.isotope || container._isotope ||
             (window.jQuery && window.jQuery(container).data && window.jQuery(container).data('isotope')) || null;
    } catch(e){ return null; }
  }

  // 获取当前可见 items
  function getVisibleItems(){
    var iso = getIso();
    if (iso && iso.filteredItems && iso.filteredItems.length){
      return iso.filteredItems.map(function (it){ return it.element || it; });
    }
    return $all(ITEM_SEL, container).filter(function(el){
      if (el.classList.contains('isotope-hidden')) return false;
      var cs = window.getComputedStyle(el);
      return cs.display !== 'none';
    });
  }

  // 按屏幕位置排序
  function sortByVisual(items){
    return items.map(function(el){
      var r = el.getBoundingClientRect();
      return { el: el, y: r.top, x: r.left };
    }).sort(function(a,b){
      return (a.y - b.y) || (a.x - b.x);
    }).map(function(o){ return o.el; });
  }

  // 插入年份标题
  function renderYearHeadings(){
    // 清理旧的
    $all('.year-heading', container).forEach(function(n){ n.remove(); });

    var items = sortByVisual(getVisibleItems());
    var seen = Object.create(null);

    items.forEach(function(el){
      var yrCls = Array.prototype.find.call(el.classList, function(c){ return c.indexOf('year-') === 0; });
      if (!yrCls) return;
      var year = yrCls.slice(5);
      if (seen[year]) return; // 每年只插一次
      seen[year] = true;

      var target = $(TITLE_BLOCK_SEL, el) || el.firstElementChild || el;
      var h = document.createElement('div');
      h.className = 'year-heading';
      h.textContent = year;
      target.prepend(h);
    });

    // 防止 Isotope 布局出问题
    var iso = getIso();
    if (iso && typeof iso.layout === 'function') {
      try { iso.layout(); } catch(e){}
    }
  }

  // 触发多次，避免布局抖动
  function burst(){
    renderYearHeadings();
    setTimeout(renderYearHeadings, 200);
    setTimeout(renderYearHeadings, 800);
  }

  if (document.readyState === 'complete') burst();
  else window.addEventListener('load', burst);

  container.addEventListener('arrangeComplete', burst);

  if ('MutationObserver' in window){
    var mo = new MutationObserver(burst);
    mo.observe(container, { subtree:true, childList:true, attributes:true, attributeFilter:['class','style'] });
  }

  // 内联样式
  var st = document.createElement('style');
  st.textContent = `
    ${CONTAINER_SEL} .year-heading{
      margin: 0 0 .5rem 0;
      padding-bottom: .4rem;
      border-bottom: 1px solid #e0e0e0;
      font-weight: 700;
      font-size: 1.05rem;
      color: #333;
    }
  `;
  document.head.appendChild(st);
})();
</script>
