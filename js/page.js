const Page = (function(){

    const mainEl = document.querySelector('main');
    const articleEl = document.querySelector('.article-img');
    const imgEl = document.querySelector('.article-img .luckkids');
    const particleImg1 = document.querySelector('.particle-stick-wrap .shape-1')
    const particleImg2 = document.querySelector('.particle-stick-wrap .shape-2')
    const particleImg3 = document.querySelector('.particle-stick-wrap .shape-3')
    const particleImg4 = document.querySelector('.particle-stick-wrap .shape-4')
    const particleImg5 = document.querySelector('.particle-stick-wrap .shape-5')
    const particleImg6 = document.querySelector('.particle-stick-wrap .shape-6')
    const particleImg7 = document.querySelector('.particle-stick-wrap .shape-7')

    let mainTop;
    let articleTop;
    let articleHeight;
    let winH;
    let ratio;

    function onResizeHandler(){
        console.log('onResize!');
        mainTop = mainEl.offsetTop;
        winH = window.innerHeight;
        articleTop = articleEl.offsetTop;
        articleHeight = articleEl.offsetHeight;
    }
    function onScrollHandler(){
        console.log('onScroll!');
        let limitRatio = 0;

        ratio = (window.scrollY + winH - articleTop)/(articleHeight);
        limitRatio = ratio < 0 ? 0 : ratio > 1 ? 1 : ratio;
        console.log('ratio',ratio);

        imgEl.style.filter = `blur(${-40 + (limitRatio*70)}px)`
        imgEl.style.opacity = `${9.7 - limitRatio*10}`

        //particle
        particleImg1.style.marginTop = `${-30*limitRatio}px`;
        particleImg2.style.marginTop = `${30*limitRatio}px`;
        particleImg3.style.marginTop = `${20*limitRatio}px`;
        particleImg4.style.marginTop = `${70*limitRatio}px`;
        particleImg4.style.marginRight = `${20*limitRatio}px`;
        particleImg5.style.marginTop = `${40*limitRatio}px`;
        particleImg6.style.marginTop = `${40*limitRatio}px`;
        particleImg7.style.marginTop = `${-30*limitRatio}px`;

        particleImg1.style.filter = `blur(${-10 + (limitRatio*30)}px)`;
        particleImg2.style.filter =`blur(${-10 + (limitRatio*35)}px)`;
        particleImg3.style.filter =`blur(${-14 + (limitRatio*30)}px)`;
        particleImg4.style.filter =`blur(${-10 + (limitRatio*30)}px)`;
        particleImg4.style.filter =`blur(${-8 + (limitRatio*15)}px)`;
        particleImg5.style.filter =`blur(${-5 + (limitRatio*32)}px)`;
        particleImg6.style.filter =`blur(${-13 + (limitRatio*41)}px)`;
        particleImg7.style.filter = `blur(${-15 + (limitRatio*21)}px)`;
    }

    function init(){
        onResizeHandler();
        onScrollHandler();
        window.addEventListener('resize',onResizeHandler);
        window.addEventListener('scroll',onScrollHandler);
    }



    return {
        init
    }
})();

document.addEventListener('DOMContentLoaded',Page.init)