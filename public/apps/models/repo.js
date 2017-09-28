'use strict';
var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {

    $.get('/github/user/repos', function(data){
      repos.all = data;
      repos.all.sort((a,b) => (new Date(b.updated_at)) - (new Date(a.updated_at)));
      repos.requestLanaguages(callback);
    })
  };

  repos.requestLanaguages = function(callback) {
    repos.all.forEach(function(repo){
      if (repo.languages_url) {
        let url = repo.languages_url;
        url = url.replace('https://api.github.com','/github');
        $.get(url, function(data){
          repo.languagesUsed = Object.keys(data).map(function(language){
            return `${language}: ${data[language]} characters`;
          });
          callback(repo);
        })
      }
    })
  };

  repos.toHTML = function(repo){
    let template = Handlebars.compile($('#repo-template').html());

    repo.created = new Date(repo.created_at);
    repo.created = repo.created.toUTCString();
    repo.updatedDaysAgo = parseInt((new Date() - new Date(repo.updated_at))/60/60/24/1000);
    repo.lastUpdateTime = `about ${repo.updatedDaysAgo} days ago`;

    $('#repo-list').append(template(repo));

  }

  module.repos = repos;
})(app);
