




document.getElementById("menu").addEventListener("click", function () {
  const openIcon = document.getElementById("open");
  const closeIcon = document.getElementById("clos");
  
  var myList = document.getElementById("list");
  myList.classList.toggle('d-none');
  myList.classList.toggle("menu-item");
  
   openIcon.classList.toggle("d-none");
   closeIcon.classList.toggle("d-none");
 });