$(document).foundation();

$(document).ready(function(){
    $(".startorder").click(function(){
        $("#initial-content").slideToggle(400);
      $('.sign-in').hide();
    });
});

$(document).ready(function(){
    $(".label-round").click(function(){
        $("#initial-content").slideUp();
    });
});

$(document).ready(function(){
    $(".create-account").click(function(){
      $('#initial-content').hide();
        $(".sign-in").slideToggle(400);
    });
});

$(document).ready(function(){
    $(".label-rounds").click(function(){
        $(".sign-in").slideUp();
    });
});

$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 100,
    autoPlay: 3000,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});

$(document).ready(function() {
 
  $("#owl-demo-1").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 100,
    autoPlay: 3000,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});

$(document).ready(function(){
    $(".start-order").click(function(){
      $(".main-menu").hide();
        $(".store-info-hidden").show();
      
    });
});




$(document).ready(function(){
    $(".carryout").click(function(){
        $(".hidden").slideToggle(400);
      
    });
});

$(document).ready(function(){
    $(".delivery").click(function(){
        $(".del-hidden").slideToggle(500);
      
    });
});