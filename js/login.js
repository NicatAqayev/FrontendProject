//LOGIN SECTION'S NAVBAR FUNCTION STARTED
function loginNav(){
    var navigation = document.querySelector("#navigation");
    var ypos = window.pageYOffset;

    if( ypos == 0 ){
        navigation.style.top = "50px";
        navigation.style.transition = "all 0s";
    }else{
        navigation.style.top = "0px";
        navigation.style.transition = "all 0s";
    }
}
    window.addEventListener("scroll", loginNav);
loginNav();
//LOGIN SECTION'S NAVBAR FUNCTION ENDED

// INTRO SEARCH-ICON FUNCTION STARTED
var firstIcon = document.querySelector("#navigation .icons .first-icon");
var introOverlay = document.querySelector("#login .intro-overlay");
var exitIcon = document.querySelector("#login .intro-overlay .x-icon i");
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
var yourCart = document.querySelector("#login .your-cart");
var exitIcon = document.querySelector("#login .your-cart .exit-icon");
exitIcon.addEventListener("click", function() {
yourCart.style.right = "-420px";
 yourCart.style.transition = "all .3s";
});
secondIcon.addEventListener("click", function(){
yourCart.style.right = "0px";
yourCart.style.transition = "all .5s";
});
//INTRO BAG-ICON FUNCTION ENDED

//ADD AND REMOVE CHECK-BOX ELEMENT ON CLICK FUNCTION STARTED
var checkBox = document.querySelector("#login .login-page .login-second .input-checkbox .checkbox");
    checkBox.addEventListener("click", function(){
        this.classList.toggle('checked');
        this.style.transition = "all .3s";
    });
//ADD AND REMOVE CHECK-BOX ELEMENT ON CLICK FUNCTION ENDED
