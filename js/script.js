// Ẩn thanh tìm kiếm
const searchBar = document.getElementById("searchBar");
const searchIcon = document.getElementById("searchIcon");
searchIcon.addEventListener("click",(e) => {
  searchBar.classList.toggle("hidden");
});

// Mở một tab mới
function closeTab(){
  window.close();
}