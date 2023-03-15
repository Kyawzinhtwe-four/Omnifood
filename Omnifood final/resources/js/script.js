$(document).ready(function () {
  $(".js--section--feature").waypoint(function (direction) {
    if (direction == "down") {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  },{
    offset: '150px';
  });

  // var waypoints = $("#handler-first").waypoint(
  //   function (direction) {
  //     notify(this.element.id + " hit 25% from top of window");
  //   },
  //   {
  //     offset: "25%",
  //   }
  // );

  // Animation Scroll
  $('.js--wp-1').waypoint(function(direction){
    $('.js--wp-1').addClass('animated fadeIn');
  },{
    offset ='50px'
  })
  

  // Mobile nav
  $('.js--mobile-nav-icon').click(function(){
    $('.js--main-nav').slideToggle(200)
  })
});
