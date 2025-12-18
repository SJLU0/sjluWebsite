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
