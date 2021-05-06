function validateform() {
  var name = document.myform.name.value;
  var password = document.myform.password.value;

  if (name == null || name == "") {
    alert("Name can't be blank");
    return false;
  } else if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//------------toast---------//
var toastBtn=document.getElementById("toastBtn");

var bodyToast=document.getElementById("toast-body")

toastBtn.onclick=function(){
    bodyToast.style.display="block";
}

var btnClose=getElementById("closeBtn")

btnClose.onclick=function(){
    bodyToast.style.display="none";
}

window.onclick = function(event) {
    if (event.target == bodyToast) {
      bodyToast.style.display = "none";
    }
  }




 /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementsByClassName("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementsByClassName("main").style.marginLeft = "0";
}


