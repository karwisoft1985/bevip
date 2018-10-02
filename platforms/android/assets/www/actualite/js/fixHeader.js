$(window).scroll(function(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();
 sticky.addClass('fixed');
});