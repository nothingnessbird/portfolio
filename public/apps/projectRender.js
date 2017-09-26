'use strict';

var app = app || {};

(function (module) {
  function Project(rawProjObj){
    Object.keys(rawProjObj).forEach(key => this[key] = rawProjObj[key]);
  }

  Project.all = [];

  Project.prototype.toHtml = function() {

    let template = Handlebars.compile($('#post-template').html());

    this.daysAgo = parseInt((new Date() - new Date(this.pubDate))/60/60/24/1000);
    this.publishTime = `about ${this.daysAgo} days ago`;

    return template(this);

  }

  Project.loadAll = function(rawData) {
    rawData.sort(function(a,b) {
      return (new Date(b.pubDate)) - (new Date(a.pubDate));
    });

    Project.all = rawData.map(function(ele){
      return new Project(ele);
    })
  }

  function appendProjects() {
    Project.all.forEach(function(project){
      $('#project-display').append(project.toHtml());
    });
    Project.languageData().forEach(function(language){
      $('#languages ul').append($(`<li>${language}</li>`));
    });
  }

  Project.languageData = function() {
    return Project.all
      .reduce(function(aggregator, project){
        return aggregator.concat(project.languages);
      }, [])
      .reduce(function(aggregator, language){
        if (!aggregator.includes(language)) {
          aggregator.push(language);
        }
        return aggregator;
      }, []);
  }

  Project.fetchAll = function() {
    if (localStorage.rawData) {

      Project.loadAll(JSON.parse(localStorage.rawData));

      appendProjects();

    } else {
      $.get('../data/projectJSON.json', function(data){
        localStorage.rawData = JSON.stringify(data);

        Project.loadAll(JSON.parse(localStorage.rawData));

        appendProjects();
      });
    }
  }
  module.Project = Project;
})(app);
