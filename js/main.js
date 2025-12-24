// 1. 從 node_modules 引入 GSAP
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// 2. 註冊外掛
gsap.registerPlugin(ScrollTrigger);

// 這裡是選單開啟、關閉
const toggleBtn = document.querySelector(".navbar-toggle"); // 抓選單按鈕
const closeBtn = document.querySelector(".navbar-close"); // 關閉閉按鈕
const menuWrap = document.querySelector(".navbar-menu-wrap"); // 抓選單遮罩層

// 點擊開啟
toggleBtn.addEventListener("click", () => {
  menuWrap.classList.add("active");
});
// 點擊關閉
closeBtn.addEventListener("click", () => {
  menuWrap.classList.remove("active");
});

console.log("GSAP loaded via NPM!", gsap.version);

// 垂直文字
gsap.from(".hero-vertical-text", {
  x: 50,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
  delay: 0.5,
});

// HERO文字
gsap.from(".decor-text", {
  scrollTrigger: {
    trigger: ".decor-text",
    start: "top 80%",
  },
  x: 200,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
});

// Section-title
const titles = document.querySelectorAll(".section-title");

// 使用 forEach 迴圈，幫「每一個」標題都設定獨立的動畫
titles.forEach((title) => {
  gsap.from(title, {
    scrollTrigger: {
      trigger: title, // 這裡的 trigger 是「當下的那個 title」
      start: "top 85%", // 稍微早一點觸發 (視窗下方 85% 處)
      toggleActions: "play none none reverse",
    },
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });
});
