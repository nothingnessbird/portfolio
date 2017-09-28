'use strict';

var app = app || {};

(function(module){

  module.showHome = function() {
    $('.tab-content').hide();
    $(`#main-header`).show();
    $('#plus-sign').css({
      margin: '10vh',
      fontSize: '100px'
    });
  };

})(app);
