'use strict';

var app = app || {};


(function(module){

  const projectView = {};
  projectView.appendProjects = function() {
    app.Project.all.forEach(function(project){
      $('#project-display').append(project.toHtml());
    });
    app.Project.languageData().forEach(function(language){
      $('#languages ul').append($(`<li>${language}</li>`));
    });
  }
  module.projectView = projectView;
})(app);
