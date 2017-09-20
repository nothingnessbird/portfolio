'use strict';

$('.tab').on('click', function(event){
  event.stopPropagation();
  $('.tab-content').hide();
  $(`#${$(this).data('tab')}`).show();
  if ($(this).data('tab') === 'main-header') {
    $('#plus-sign').css({
      margin: '10vh',
      fontSize: '100px'
    });
  } else if ($(this).data('tab') === 'about') {
    $('#plus-sign').css({
      margin: '0',
      fontSize: '50px'
    });
  } else if ($(this).data('tab') === 'projects') {
    $('#plus-sign').css({
      margin: '0',
      fontSize: '50px',
      position: 'fixed'
    });
  }
})
