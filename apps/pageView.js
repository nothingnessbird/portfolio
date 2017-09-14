'use strict';

$('#home-tab').on('click', function(event){
  event.stopPropagation();
  $('#main-header').css({display: 'block'});
  $('#projects').css({display: 'none'});
  $('#about').css({display: 'none'});
  // $('#cog').animateRotate(90, {
  //   duration: 1337,
  //   easing: 'linear',
    // complete: function () {},
    // step: function () {}
  // });
})

$('#about-tab').on('click', function(event){
  event.stopPropagation();
  $('#main-header').css({display: 'none'});
  $('#projects').css({display: 'none'});
  $('#about').css({display: 'block'});
})

$('#projects-tab').on('click', function(event){
  event.stopPropagation();
  $('#main-header').css({display: 'none'});
  $('#projects').css({display: 'block'});
  $('#about').css({display: 'none'});
})
