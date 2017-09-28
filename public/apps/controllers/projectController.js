'use strict';

var app = app || {};

(function(module){

  module.showProjects = function(){
    if (!app.Project.all.length) {
      app.Project.fetchAll(app.projectView.appendProjects);
    }
    $('.tab-content').hide();
    $(`#projects`).show();
    $('#plus-sign').css({
      margin: '0',
      fontSize: '50px',
      position: 'fixed'
    });
  }

})(app);
