const btnMenu=document.querySelector(".btn--menu"),headerMenu=document.querySelector(".header__menu"),overlay=document.querySelector(".overlay"),body=document.querySelector("body"),mobileMenu=function(){headerMenu.classList.contains("header-active")?(btnMenu.classList.remove("menu--active"),btnMenu.setAttribute("aria-expanded",!1),headerMenu.classList.remove("header-active"),overlay.classList.remove("overlay-active"),body.classList.remove("no-scroll")):(btnMenu.classList.add("menu--active"),btnMenu.setAttribute("aria-expanded",!0),headerMenu.classList.add("header-active"),overlay.classList.add("overlay-active"),body.classList.add("no-scroll"))};btnMenu.addEventListener("click",mobileMenu),overlay.addEventListener("click",mobileMenu),document.addEventListener("keydown",(function(e){"Escape"===e.key&&mobileMenu()}));const form=document.querySelector(".footer__form"),result=document.querySelector(".footer__form__result"),emailSuccess=document.querySelector(".email-success");form.addEventListener("submit",(function(e){e.preventDefault();const t=document.querySelector("#email");/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/.test(t.value)?(emailSuccess.classList.add("success"),setTimeout((()=>emailSuccess.classList.remove("success")),1300),result.classList.remove("error"),t.value=""):result.classList.add("error")}));const hero=document.querySelector("#hero"),header=document.querySelector(".header"),headerHeight=header.getBoundingClientRect().height;console.log(headerHeight);const stickyNav=function(e){const[t]=e;t.isIntersecting?header.classList.remove("header-scroll"):header.classList.add("header-scroll")},heroObserver=new IntersectionObserver(stickyNav,{root:null,threshold:0,rootMargin:`-${headerHeight}px`});heroObserver.observe(hero);const slides=document.querySelectorAll(".sliders__slide"),sliderContainer=document.querySelector(".sliders__slider"),dotsContainer=document.querySelector(".dots"),maxSlides=slides.length;let currentSlide=0;const createDots=function(){slides.forEach((function(e,t){dotsContainer.insertAdjacentHTML("beforeend",`<button class="dots__dot" data-slide="${t-1}"></button>`)}))};slides.forEach((function(e,t){dotsContainer.insertAdjacentHTML("beforeend",`<button class="dots__dot" data-slide="${t-1}"></button>`)}));const activateDots=function(e){document.querySelectorAll(".dots__dot").forEach((e=>e.classList.remove("dots__dot--active"))),document.querySelector(`.dots__dot[data-slide="${e}"]`).classList.add("dots__dot--active")};activateDots(0);const goToSlides=function(e){slides.forEach(((t,o)=>{t.style.transform=`translateX(${100*(o-e)}%)`}))};goToSlides(0);const nextSlide=function(){currentSlide===maxSlides-2?currentSlide=-1:currentSlide++,goToSlides(currentSlide),activateDots(currentSlide)},prevSlides=function(){-1===currentSlide?currentSlide=maxSlides-2:currentSlide--,goToSlides(currentSlide),activateDots(currentSlide)};document.addEventListener("keydown",(function(e){console.log(e.key),"ArrowRight"!==e.key&&"d"!==e.key||nextSlide(),"ArrowLeft"!==e.key&&"a"!==e.key||prevSlides()})),dotsContainer.addEventListener("click",(function(e){if(e.target.classList.contains("dots__dot")){const{slide:t}=e.target.dataset;goToSlides(t),activateDots(t)}})),sliderContainer.addEventListener("touchstart",(function(e){let t,o;console.log(e.touches),t=e.touches[0].clientX,o=e.touches[0].clientY,console.log(t,o),t<=190?prevSlides():nextSlide()}),!1);const allSection=document.querySelectorAll(".section"),sectionAnimation=function(e,t){const[o]=e;o.isIntersecting&&(o.target.classList.remove("section--hidden"),t.unobserve(o.target))},sectionObserve=new IntersectionObserver(sectionAnimation,{root:null,threshold:0});allSection.forEach((e=>{e.classList.add("section--hidden"),sectionObserve.observe(e)}));
//# sourceMappingURL=script.js.map