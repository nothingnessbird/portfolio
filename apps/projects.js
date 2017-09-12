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

  this.render = function(){
    var div = document.getElementById('projects');

    var projectContainer = document.createElement('div');
    projectContainer.class = 'project-container';

    var nameText = document.createElement('h2');
    nameText.innerText = this.name;
    projectContainer.appendChild(nameText);

    var typeText = document.createElement('p');
    typeText.innerText = this.type;
    projectContainer.appendChild(typeText);

    var iconPic = document.createElement('img');
    iconPic.setAttribute('src',this.icon);
    projectContainer.appendChild(iconPic);

    var domainText = document.createElement('p');
    domainText.innerText = this.domain;
    projectContainer.appendChild(domainText);

    var descriptionText = document.createElement('p');
    descriptionText.innerText = this.domain;
    projectContainer.appendChild(descriptionText);

    var siteLink = document.createElement('a');
    siteLink.setAttribute('href',this.site);
    siteLink.class = 'site-links';
    $('.site-links').text('Check out the site!')
    projectContainer.appendChild(siteLink);

    var repoLink = document.createElement('a');
    repoLink.setAttribute('href',this.repo);
    repoLink.class = 'repo-links';
    $('.repo-links').text('Take a look under the hood!')
    projectContainer.appendChild(repoLink);

    var picImg = document.createElement('img');
    picImg.setAttribute('src',this.pic);
    projectContainer.appendChild(picImg);
    div.appendChild(projectContainer);
  };
}

var cfStudy = ['CFStudy','CodeFellows Assignment','../icons/cf.png','Create a website to match a user with study buddies from our pre-existing buddy list, based on the user\'s input','This was our final project for Code 201 at CodeFellows. We were instructed to build a web app with three interlinked HTML pages, use object oriented programming and object constructors, and style our web app using CSS. Together with Ariel, Marco, and Tiger (see the GitHub collaborator page and the README for their info), I made this project in the final week of 201, and presented it on Friday, September 1st 2017.','https://nothingnessbird.github.io/cfstudybuddies/','https://github.com/nothingnessbird/cfstudybuddies','../images/cfStudy.png'];

var busMall = ['Busmall','CodeFellows Assignment','../icons/cf.png','Make a busmall etc','Nice to wheat you! Aw, geez. Connection to Homeworld lost! Connection to Homeworld lost! You don\'t have to try to impress me Morty. Connection to Homeworld lost!Not for the men they cheat on.Nisi fugiat labore veniam quis sit deserunt ut magna nisi. Ullamco incididunt pariatur pariatur deserunt officia enim mollit fugiat consectetur in enim. Exercitation enim est fugiat nostrud aliqua dolore reprehenderit et occaecat sit sunt nulla ut. Ad Lorem eiusmod duis cupidatat mollit exercitation et id nulla fugiat dolore sit cillum est consectetur. Labore amet enim consectetur nulla nostrud irure tempor quis. Magna qui aute nostrud do commodo adipisicing Lorem.','https://nothingnessbird.github.io/busmall/','https://github.com/nothingnessbird/busmall','../images/cfStudy.png'];

var cookies = ['Salmon Cookies','CodeFellows Assignment','../icons/cf.png','cooookies','Nice to wheat you! Aw, geez. Connection to Homeworld lost! Connection to Homeworld lost! You don\'t have to try to impress me Morty. Connection to Homeworld lost!Not for the men they cheat on.Nisi fugiat labore veniam quis sit deserunt ut magna nisi. Ullamco incididunt pariatur pariatur deserunt officia enim mollit fugiat consectetur in enim. Exercitation enim est fugiat nostrud aliqua dolore reprehenderit et occaecat sit sunt nulla ut. Ad Lorem eiusmod duis cupidatat mollit exercitation et id nulla fugiat dolore sit cillum est consectetur. Labore amet enim consectetur nulla nostrud irure tempor quis. Magna qui aute nostrud do commodo adipisicing Lorem.','https://nothingnessbird.github.io/cookie-stand/','https://github.com/nothingnessbird/cookie-stand','../images/cfStudy.png'];

var projectArray = [cfStudy,busMall,cookies];

function projectMaker() {
  for (var i = 0; i < projectArray.length; i++) {
    projectArray[i] = new Project(projectArray[i][0],projectArray[i][1],projectArray[i][2],projectArray[i][3],projectArray[i][4],projectArray[i][5],projectArray[i][6],projectArray[i][7]);
  }
}

projectMaker();
projectArray[0].render();
