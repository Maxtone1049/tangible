
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("ch1");

// Get the <span> element that closes the modal
var input =document.getElementById("proceed");

// When the user clicks on the button, open the modal
btn.onclick = function() {
modal.style.display = "block";
}

input.onclick = function() {
modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
  modal.style.display = "none";
}
}
