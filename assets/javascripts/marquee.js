(function () {
  // px/sec: 값이 클수록 빠르게 이동
  const SPEED = 45;

  // 조금만 잘려도 움직이게 (기존 8px 같은 임계값 ↓)
  const MIN_OVERFLOW_PX = 1;

  function applyMarquee(linkEl) {
    const textEl = linkEl.querySelector(".md-ellipsis") || linkEl.querySelector("span");
    if (!textEl) return;

    // 실제 보이는 영역 폭을 더 정확히: md-nav__link 안쪽 패딩 고려
    const style = getComputedStyle(linkEl);
    const padL = parseFloat(style.paddingLeft) || 0;
    const padR = parseFloat(style.paddingRight) || 0;

    const containerW = Math.max(0, linkEl.clientWidth - padL - padR);
    const textW = textEl.scrollWidth;

    // 혹시 폰트 렌더링/소수점 오차 대비로 1px 더 여유
    const overflow = Math.max(0, Math.ceil(textW - containerW));

    if (overflow >= MIN_OVERFLOW_PX) {
      // 끝까지 확실히 보이도록 약간 여유 더하기
      const distance = overflow + 20;

      // 거리 기반 시간: 너무 짧으면 깜빡이니 최소 2.8초
      const duration = Math.max(2.8, distance / SPEED);

      linkEl.classList.add("is-marquee");
      linkEl.style.setProperty("--marquee-distance", `${distance}px`);
      linkEl.style.setProperty("--marquee-duration", `${duration}s`);
    } else {
      linkEl.classList.remove("is-marquee");
      linkEl.style.removeProperty("--marquee-distance");
      linkEl.style.removeProperty("--marquee-duration");
    }
  }

  function refreshAll() {
    document.querySelectorAll(".md-sidebar--primary .md-nav__link").forEach(applyMarquee);
  }

  window.addEventListener("load", refreshAll);
  window.addEventListener("resize", refreshAll);

  // Material DOM 갱신 대응
  const obs = new MutationObserver(() => refreshAll());
  obs.observe(document.documentElement, { childList: true, subtree: true });
})();

