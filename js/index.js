// NAVIGATION SECTION'S JS STARTED-->
function navFunc(){
    var navigation = document.querySelector("#navigation");
    var ypos = window.pageYOffset;

    var pillerImgF = document.querySelector("#navigation .piller-img .piller-img1");
    var pillerImgS = document.querySelector("#navigation .piller-img .piller-img2");

    var navLink1 = document.querySelector("#navigation .nav-links .navslink1");
    var navLink2 = document.querySelector("#navigation .nav-links .navslink2");
    var navLink3 = document.querySelector("#navigation .nav-links .navslink3");
    var navLink4 = document.querySelector("#navigation .nav-links .navslink4");
    var navLink5 = document.querySelector("#navigation .nav-links .navslink5");

    var navIcons = document.querySelector("#navigation .icons");
    
    if( ypos < 200 ){
        navigation.style.backgroundColor = "transparent";
        navigation.style.top = "0px";
        navigation.style.transition = "all 1s";

        pillerImgF.style.display = "none";
        pillerImgS.style.display = "inline-block";

        navLink1.style.color = "white";
        navLink2.style.color = "white";
        navLink3.style.color = "white";
        navLink4.style.color = "white";
        navLink5.style.color = "white";

        navIcons.style.color = "white";
    }else{
        navigation.style.backgroundColor = "#fcfcfc";
        navigation.style.top = "0px";
        navigation.style.transition = "all 1s";

        pillerImgF.style.display = "inline-block";
        pillerImgS.style.display = "none";

        navLink1.style.color = "#767676";
        navLink2.style.color = "#767676";
        navLink3.style.color = "#767676";
        navLink4.style.color = "#767676";
        navLink5.style.color = "#767676";

        navIcons.style.color = "black";
    }
    
};
    window.addEventListener("scroll", navFunc);
navFunc();

// INTRO SEARCH-ICON FUNCTION STARTED
    var firstIcon = document.querySelector("#navigation .icons .first-icon");
    var introOverlay = document.querySelector("#intro .intro-overlay");
    var exitIcon = document.querySelector("#intro .intro-overlay .x-icon i");
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
 var yourCart = document.querySelector("#intro .your-cart");
 var exitIcon = document.querySelector("#intro .your-cart .exit-icon");
 exitIcon.addEventListener("click", function() {
    yourCart.style.right = "-420px";
     yourCart.style.transition = "all .3s";
 });
 secondIcon.addEventListener("click", function(){
    yourCart.style.right = "0px";
    yourCart.style.transition = "all .5s";
 });
//INTRO BAG-ICON FUNCTION ENDED

//OWL-CAROUSEL FUNCTION STARTED
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        mouseDrag:false,
        autoplay:true,
        autoplayTimeout: 2000,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
  });
//OWL-CAROUSEL FUNCTION ENDED
//ADD AND REMOVE ACTIVE CLASS STARTED
var ulList = document.querySelector("#digital .button-group");
var liList =  document.querySelectorAll("#digital .button-group .digital-items");
    liList.forEach(element => {
        element.addEventListener('click', function(){
            ulList.querySelector('.active').classList.remove('active');
            element.classList.add('active');
        });
    });
//ADD AND REMOVE ACTIVE CLASS ENDED


//ON CLICK SCROLL TO TOP FUNCTION STARTED
  var toTop = document.querySelector("#footer .footer-icon .totop");
   toTop.addEventListener("click", function(){
       window.scrollTo({
           top: 0,
           left: 0,
           behavior: "smooth"
       });
   });
//ON  CLICK SCROLL TO TOP FUNCTION ENDED

//MASONRY FILTER STARTED
$('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });

var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    getSortData: {
      name: '.name',
      category: '[data-category]'
    },
    masonry: {
      columnWidth: 200
    }
  });
$grid.isotope({ filter: '.branding' });
$grid.isotope({ filter: '.digital' });
$grid.isotope({ filter: '.packaging' });
$grid.isotope({ filter: '*' });

  $('.filter-button-group').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
//MASONRY FILTER ENDED



