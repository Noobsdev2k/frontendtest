const toggle = document.querySelector(".toggle");
const sidebar = document.querySelector(".content");
const icon = document.querySelector(".bxs-left-arrow");
const focus = document.getElementById("focus");
const overlay = document.querySelector(".overlay");
toggle.addEventListener("click", function () {
  toggle.classList.toggle("click");
  sidebar.classList.toggle("active");
  if (icon.classList.contains("bxs-left-arrow")) {
    icon.classList.replace("bxs-left-arrow", "bxs-right-arrow");
  } else {
    icon.classList.replace("bxs-right-arrow", "bxs-left-arrow");
  }
});
let focusHalfWidth = focus.offsetWidth;
overlay.addEventListener("mousemove", function (e) {
  focus.style.left = e.pageX + "px";
  focus.style.top = e.pageY + "px";
  if (e.screenX > 1800 || e.screenY > 850) {
    focus.style.left = e.pageX - focusHalfWidth + "px";
    focus.style.top = e.pageY - focusHalfWidth + "px";
  }
});
