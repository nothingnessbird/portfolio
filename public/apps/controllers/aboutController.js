'use strict';

var app = app || {};

(function(module){

  module.showAbout = function(){
    $('.tab-content').hide();
    $(`#about`).show();
    $('#plus-sign').css({
      margin: '0',
      fontSize: '50px'
    });
  }

})(app);
