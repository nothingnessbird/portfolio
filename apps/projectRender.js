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
  var $newProject = $('.template').clone();
  $newProject.removeClass()
      .addClass('project-display')
      .attr('data-category', this.category);
  $newProject.find('.site-pic')
      .attr('src',this.pic);
  $newProject.find('h2')
      .text(this.name);
  $newProject.find('h3')
      .text(this.type);
  $newProject.find('.icon-pic')
      .attr('src',this.icon);
  $newProject.find('.site-links')
      .attr('href',this.site)
      .text('Check out the site!');
  $newProject.find('.repo-links')
      .attr('href',this.repo)
      .text('Take a look under the hood!');
  $newProject.find('p')
      .text(this.domain);
  $newProject.find('.project-description')
      .html(this.description);
  $newProject.find('time')
      .html('about ' + parseInt((new Date() - new Date(this.pubDate))/60/60/24/1000) + ' days ago');
  return $newProject;
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
