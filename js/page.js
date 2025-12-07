const Page = (function () {
  const mainEl = document.querySelector("main");
  const articleEl = document.querySelector(".article-img");
  const imgEl = document.querySelector(".article-img .luckkids");
  const particleImg1 = document.querySelector(".particle-stick-wrap .shape-1");
  const particleImg2 = document.querySelector(".particle-stick-wrap .shape-2");
  const particleImg3 = document.querySelector(".particle-stick-wrap .shape-3");
  const particleImg4 = document.querySelector(".particle-stick-wrap .shape-4");
  const particleImg5 = document.querySelector(".particle-stick-wrap .shape-5");
  const particleImg6 = document.querySelector(".particle-stick-wrap .shape-6");
  const particleImg7 = document.querySelector(".particle-stick-wrap .shape-7");

  let mainTop;
  let articleTop;
  let articleHeight;
  let winH;
  let ratio;

  function onResizeHandler() {
    console.log("onResize!");
    mainTop = mainEl.offsetTop;
    winH = window.innerHeight;
    articleTop = articleEl.offsetTop;
    articleHeight = articleEl.offsetHeight;
  }
  function onScrollHandler() {
    console.log("onScroll!");
    let limitRatio = 0;

    ratio = (window.scrollY + winH - articleTop) / articleHeight;
    limitRatio = ratio < 0 ? 0 : ratio > 1 ? 1 : ratio;
    console.log("ratio", ratio);

    imgEl.style.filter = `blur(${-40 + limitRatio * 70}px)`;
    imgEl.style.opacity = `${9.7 - limitRatio * 10}`;

    //particle
    particleImg1.style.marginTop = `${-30 * limitRatio}px`;
    particleImg2.style.marginTop = `${30 * limitRatio}px`;
    particleImg3.style.marginTop = `${20 * limitRatio}px`;
    particleImg4.style.marginTop = `${70 * limitRatio}px`;
    particleImg4.style.marginRight = `${20 * limitRatio}px`;
    particleImg5.style.marginTop = `${40 * limitRatio}px`;
    particleImg6.style.marginTop = `${40 * limitRatio}px`;
    particleImg7.style.marginTop = `${-30 * limitRatio}px`;

    particleImg1.style.filter = `blur(${-10 + limitRatio * 30}px)`;
    particleImg2.style.filter = `blur(${-10 + limitRatio * 35}px)`;
    particleImg3.style.filter = `blur(${-14 + limitRatio * 30}px)`;
    particleImg4.style.filter = `blur(${-10 + limitRatio * 30}px)`;
    particleImg4.style.filter = `blur(${-8 + limitRatio * 15}px)`;
    particleImg5.style.filter = `blur(${-5 + limitRatio * 32}px)`;
    particleImg6.style.filter = `blur(${-13 + limitRatio * 41}px)`;
    particleImg7.style.filter = `blur(${-15 + limitRatio * 21}px)`;
  }

  function init() {
    onResizeHandler();
    onScrollHandler();
    window.addEventListener("resize", onResizeHandler);
    window.addEventListener("scroll", onScrollHandler);
    initPopup();
  }

  function initPopup() {
    const popupOverlay = document.getElementById("popupOverlay");
    const closeBtn = document.getElementById("closePopupBtn");
    const startBtn = document.getElementById("startTestBtn");

    // 페이지 로드 시 팝업 표시
    setTimeout(() => {
      popupOverlay.classList.add("active");
    }, 500);

    // 닫기 버튼 클릭
    closeBtn.addEventListener("click", () => {
      popupOverlay.classList.remove("active");
    });

    // 테스트 시작 버튼 클릭
    startBtn.addEventListener("click", () => {
      // 여기에 테스트 페이지로 이동하는 로직 추가
      popupOverlay.classList.remove("active");
      // 예: window.location.href = '/test.html';
    });

    // 오버레이 클릭 시 닫기
    popupOverlay.addEventListener("click", (e) => {
      if (e.target === popupOverlay) {
        popupOverlay.classList.remove("active");
      }
    });
  }

  return {
    init,
  };
})();

document.addEventListener("DOMContentLoaded", Page.init);
