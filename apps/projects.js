'use; strict';

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

var cfStudy = ['CFStudy','CodeFellows Assignment','../icons/cf.png','Create a website to match a user with study buddies from our pre-existing buddy list, based on the user\'s input','This was our final project for Code 201 at CodeFellows. We were instructed to build a web app with three interlinked HTML pages, use object oriented programming and object constructors, and style our web app using CSS. Together with Ariel, Marco, and Tiger (see the GitHub collaborator page and the README for their info), I made this project in the final week of 201, and presented it on Friday, September 1st 2017.','https://nothingnessbird.github.io/cfstudybuddies/','https://github.com/nothingnessbird/cfstudybuddies','../images/cfStudy.png'];

var projectArray = [cfStudy];
  // ,cookies,busmall,aboutMe];

function projectMaker() {
  for (var i = 0; i < projectArray.length; i++) {
    projectArray[i] = new Project(projectArray[i][0],projectArray[i][1],projectArray[i][2],projectArray[i][3],projectArray[i][4],projectArray[i][5],projectArray[i][6],projectArray[i][7]);
  }
}

projectMaker();
