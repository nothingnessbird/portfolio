'use strict';

$('#home-tab').on('click', function(event){
  event.stopPropagation();
  $('#main-header').css({display: 'block'});
  $('#projects').css({display: 'none'});
  $('#about').css({display: 'none'});
  $('#plus-sign').css({
    margin: '10vh',
    fontSize: '100px'
  })
})

$('#about-tab').on('click', function(event){
  event.stopPropagation();
  $('#main-header').css({display: 'none'});
  $('#projects').css({display: 'none'});
  $('#about').css({display: 'block'});
  $('#plus-sign').css({
    margin: '0',
    fontSize: '50px'
  })
})

$('#projects-tab').on('click', function(event){
  event.stopPropagation();
  $('#main-header').css({display: 'none'});
  $('#projects').css({display: 'block'});
  $('#about').css({display: 'none'});
  $('#plus-sign').css({
    margin: '0',
    fontSize: '50px',
    position: 'fixed'
  })
})
