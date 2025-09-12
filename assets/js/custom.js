// 倒序编号（根据屏幕上最终位置，而非 DOM 顺序）
console.log("✅ custom.js 已经加载");

(function () {
  const SEL_CONTAINER = '#container-publications';
  const SEL_ITEM = '.isotope-item';
  const SEL_TITLE = '.pub-list-item.view-citation'; // 你截图里的标题块

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  const container = $(SEL_CONTAINER);
  if (!container) return;

  // 读取视觉顺序用：把 top/left 取整，去抖动
  const rectSig = el => {
    const r = el.getBoundingClientRect();
    const top = Math.round(r.top * 2) / 2;
    const left = Math.round(r.left * 2) / 2;
    return `${top},${left}`;
  };

  // 等待布局稳定（连续多帧位置不变）
  function waitForStable(maxFrames = 60, stableNeed = 3) {
    return new Promise(resolve => {
      let last = '';
      let stable = 0;
      let frames = 0;
      function tick() {
        frames++;
        const sig = $$(SEL_ITEM, container).map(rectSig).join('|');
        if (sig === last) stable++; else stable = 0;
        last = sig;
        if (stable >= stableNeed || frames >= maxFrames) return resolve();
        requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }

  // 实际倒序编号
  function renumber() {
    const items = $$(SEL_ITEM, container);
    if (!items.length) return;

    // 按屏幕从上到下（top），再按从左到右（left）排序
    const ordered = items
      .map(el => ({ el, r: el.getBoundingClientRect() }))
      .sort((a, b) => (a.r.top - b.r.top) || (a.r.left - b.r.left))
      .map(o => o.el);

    const total = ordered.length;

    ordered.forEach((el, i) => {
      const n = total - i; // 倒序
      const title = $(SEL_TITLE, el) || el; // 兜底

      // 清理旧编号，避免重复
      const old = title.querySelector('.pub-index');
      if (old) old.remove();

      // 插入新编号
      const badge = document.createElement('span');
      badge.className = 'pub-index';
      badge.textContent = `[${n}] `;
      badge.style.fontWeight = '600';
      badge.style.marginRight = '0.5rem';
      title.prepend(badge);
    });
  }

  // 统一刷新流程：等布局稳定后再编号
  async function refresh() {
    await waitForStable();
    renumber();
  }

  // 初次与常见触发
  if (document.readyState === 'complete') refresh();
  else window.addEventListener('load', refresh);
  window.addEventListener('resize', refresh);

  // 如果能获取到 Isotope 实例，则挂到 arrangeComplete（更稳）
  try {
    const iso = container.isotope || container._isotope ||
      (window.jQuery && window.jQuery(container).data && window.jQuery(container).data('isotope'));
    if (iso && iso.on) {
      iso.on('arrangeComplete', refresh);
    }
  } catch (_) {}

  // 兜底：监听容器变动（过滤、搜索、懒加载后重排）
  if ('MutationObserver' in window) {
    const mo = new MutationObserver(() => refresh());
    mo.observe(container, { childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'class'] });
  }
})();

