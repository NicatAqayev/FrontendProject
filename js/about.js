// INTRO SEARCH-ICON FUNCTION STARTED
var firstIcon = document.querySelector("#navigation .icons .first-icon");
var introOverlay = document.querySelector("#service .intro-overlay");
var exitIcon = document.querySelector("#service .intro-overlay .x-icon i");
firstIcon.addEventListener("click",function() {
    introOverlay.style.display = "flex";
    introOverlay.style.transition = "all .3s";
});
exitIcon.addEventListener("click",function() {
    introOverlay.style.display = "none";
    introOverlay.style.transition = "all .2s";
});
// INTRO SEARCH-ICON FUNCTION ENDED

//INTRO BAG-ICON FUNCTION STARTED
 var secondIcon =  document.querySelector("#navigation .icons .second-icon");
 var yourCart = document.querySelector("#service .your-cart");
 var exitIcon = document.querySelector("#service .your-cart .exit-icon");
 exitIcon.addEventListener("click", function() {
    yourCart.style.right = "-420px";
     yourCart.style.transition = "all .3s";
 });
 secondIcon.addEventListener("click", function(){
    yourCart.style.right = "0px";
    yourCart.style.transition = "all .5s";
 });
//INTRO BAG-ICON FUNCTION ENDED