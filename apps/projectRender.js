'use strict';


function Project(rawProjObj){
  this.name = rawProjObj.name;
  this.type = rawProjObj.type;
  this.category = rawProjObj.category;
  this.icon = rawProjObj.icon;
  this.domain = rawProjObj.domain;
  this.description = rawProjObj.description;
  this.site = rawProjObj.site;
  this.repo = rawProjObj.repo;
  this.pic = rawProjObj.pic;
  this.pubDate = rawProjObj.pubDate;
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

  rawData.forEach(function(projObj) {
    Project.all.push(new Project(projObj));
  });
}

Project.fetchAll = function() {
  if (localStorage.rawData) {

    Project.loadAll(JSON.parse(localStorage.rawData));

    Project.all.forEach(function(project){
      $('#projects').append(project.toHtml());
    });

  } else {
    $.get('../data/projectJSON.json', function(data){
      localStorage.rawData = JSON.stringify(data);
      Project.loadAll(JSON.parse(localStorage.rawData));
      Project.all.forEach(function(project){
        $('#projects').append(project.toHtml());
      });
    });
  }
}
