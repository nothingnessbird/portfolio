'use strict';

var app = app || {};

(function(module){

  module.showProjects = function(){

    $('.tab-content').hide();
    $(`#projects`).show();
    $('#plus-sign').css({
      margin: '0',
      fontSize: '50px',
      position: 'fixed'
    });
  }

})(app);
