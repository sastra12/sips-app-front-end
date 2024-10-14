// Sidebar Menu
const sidebarMenu = document.querySelector("nav");
// Sidebar Toggle
const sidebarToggle = document.querySelector(".sidebar-toggle");

sidebarToggle.addEventListener("click", function () {
  sidebarMenu.classList.toggle("close");
});
