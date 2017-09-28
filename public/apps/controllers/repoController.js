'use strict';

var app = app || {};

(function(module){

  module.showRepos = function(){
    if (!app.repos.all.length) {
      app.repos.requestRepos(app.repos.toHTML);
    }
    $('.tab-content').hide();
    $(`#repos`).show();
    $('#plus-sign').css({
      margin: '0',
      fontSize: '50px',
      position: 'fixed'
    });
  }

})(app);
