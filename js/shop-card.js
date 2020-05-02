// INTRO SEARCH-ICON FUNCTION STARTED
var firstIcon = document.querySelector("#navigation .icons .first-icon");
var introOverlay = document.querySelector("#shop-card .intro-overlay");
var exitIcon = document.querySelector("#shop-card .intro-overlay .x-icon i");
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
var yourCart = document.querySelector("#shop-card .your-cart");
var exitIcon = document.querySelector("#shop-card .your-cart .exit-icon");
exitIcon.addEventListener("click", function() {
yourCart.style.right = "-420px";
 yourCart.style.transition = "all .3s";
});
secondIcon.addEventListener("click", function(){
yourCart.style.right = "0px";
yourCart.style.transition = "all .5s";
});
//INTRO BAG-ICON FUNCTION ENDED


//ADD AND REMOVE ACTIVE CLASS FUNCTION STARTED
var ulList = document.querySelector("#shop-card .button-group");
var liList =  document.querySelectorAll("#shop-card .button-group .shop-items");
    liList.forEach(element => {
        element.addEventListener('click', function(){
            ulList.querySelector('.active').classList.remove('active');
            element.classList.add('active');
        });
    });
//ADD AND REMOVE ACTIVE CLASS FUNCTION ENDED



//JQUERY ISOTOPE STARTED
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

$grid.isotope({ filter: '.accessories' });

$grid.isotope({ filter: '.apparel' });

$grid.isotope({ filter: '.bags' });

$grid.isotope({ filter: '*' });

  $('.filter-button-group').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  //JQUERY ISOTOPE ENDED