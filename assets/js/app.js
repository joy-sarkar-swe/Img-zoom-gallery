// Owlcarousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
      margin:10,
      nav:true,
      autoplay:false,
      autoplayTimeout:3000,
        center: true,
      items:4,
      navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
      ],
      responsive:{
          0:{
              items:4
          },
          600:{
              items:4
          },
          1000:{
              items:4
          }
      }
    });
});
  



$(function() {
  $('.picZoomer').picZoomer();
  $('.piclist li').on('click',function(event){
      var $pic = $(this).find('img');
      $('.picZoomer-pic').attr('src',$pic.attr('src'));
  });
});