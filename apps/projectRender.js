'use strict';

function Project(name, type, icon, domain, description, site, repo, pic){
  this.name = name;
  this.type = type;
  this.icon = icon;
  this.domain = domain;
  this.description = description;
  this.site = site;
  this.repo = repo;
  this.pic = pic;

}

function projectMaker() {
  for (var i = 0; i < projectArray.length; i++) {
    projectArray[i] = new Project(projectArray[i][0],projectArray[i][1],projectArray[i][2],projectArray[i][3],projectArray[i][4],projectArray[i][5],projectArray[i][6],projectArray[i][7]);
  }
}

projectMaker();

Project.prototype.render = function() {
  var div = document.getElementById('projects');

  var projectContainer = document.createElement('div');
  projectContainer.className = 'project-container';

  var nameText = document.createElement('h2');
  nameText.innerText = this.name;
  projectContainer.appendChild(nameText);

  var typeText = document.createElement('p');
  typeText.innerText = this.type;
  projectContainer.appendChild(typeText);

  var iconPic = document.createElement('img');
  iconPic.setAttribute('src',this.icon);
  iconPic.className = 'type-icon';
  projectContainer.appendChild(iconPic);

  var domainText = document.createElement('p');
  domainText.innerText = this.domain;
  projectContainer.appendChild(domainText);

  var descriptionText = document.createElement('p');
  descriptionText.innerText = this.description;
  projectContainer.appendChild(descriptionText);

  var siteLink = document.createElement('a');
  siteLink.setAttribute('href',this.site);
  siteLink.className = 'site-links';
  siteLink.innerText = 'Check out the site!';
  projectContainer.appendChild(siteLink);

  var repoLink = document.createElement('a');
  repoLink.setAttribute('href',this.repo);
  repoLink.className = 'repo-links';
  repoLink.innerText = 'Take a look under the hood!';
  projectContainer.appendChild(repoLink);

  var picImg = document.createElement('img');
  picImg.setAttribute('src',this.pic);
  projectContainer.appendChild(picImg);
  div.appendChild(projectContainer);
}

for (var i = 0; i < projectArray.length; i++) {
  projectArray[i].render();
}
