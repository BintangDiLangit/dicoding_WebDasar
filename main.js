function hdr(helo,elm,color) 
{
  var i, cont_tab, tabls;
  cont_tab = document.getElementsByClassName("cont_tab");
  for (i = 0; i < cont_tab.length; i++) {
    cont_tab[i].style.display = "none";
  }
  tabls = document.getElementsByClassName("tabl");
  for (i = 0; i < tabls.length; i++) {
    tabls[i].style.backgroundColor = "";
  }
  document.getElementById(helo).style.display = "block";
  elm.style.backgroundColor = color;

}
// Get the element with id="defO" and click on it
document.getElementById("defO").click();