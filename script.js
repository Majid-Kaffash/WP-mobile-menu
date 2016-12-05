var menu = document.getElementsByClassName("menu-btn");
menu[0].onclick = function showing(){
  var a = document.getElementsByClassName("menu");
  if(a[0].style.display == "block")
    a[0].style.display="none";
  else
    a[0].style.display="block";
}
