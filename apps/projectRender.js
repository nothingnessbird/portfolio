'use strict';

function Project(name, type, icon, domain, description, site, repo, pic,pubDate){
  this.name = name;
  this.type = type;
  this.icon = icon;
  this.domain = domain;
  this.description = description;
  this.site = site;
  this.repo = repo;
  this.pic = pic;
  this.pubDate = pubDate;

}

function projectMaker() {
  for (var i = 0; i < projectArray.length; i++) {
    projectArray[i] = new Project(projectArray[i][0],projectArray[i][1],projectArray[i][2],projectArray[i][3],projectArray[i][4],projectArray[i][5],projectArray[i][6],projectArray[i][7]);
  }
}

projectMaker();

Project.prototype.render = function() {
  var $newProject = $('#template').clone();
  $newProject.attr('id','').addClass('project-display');
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
}

for (var i = 0; i < projectArray.length; i++) {
  projectArray[i].render();
}
