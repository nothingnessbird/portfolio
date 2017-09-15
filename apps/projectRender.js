'use strict';

var projects = [];

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

Project.prototype.toHtml = function() {

  var source = $('#post-template').html();
  var template = Handlebars.compile(source);

  this.daysAgo = parseInt((new Date() - new Date(this.pubDate))/60/60/24/1000);
  this.publishTime = `about ${this.daysAgo} days ago`;

  var rawHtml = template(this);

  $('#projects').append($(rawHtml));

}

rawProjectData.sort(function(a,b) {
  return (new Date(b.pubDate)) - (new Date(a.pubDate));
});

rawProjectData.forEach(function(projObj) {
  projects.push(new Project(projObj));
});

projects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});
