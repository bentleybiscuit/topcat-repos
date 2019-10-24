"use strict";

//fetch does a get by default
fetch('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc').then(function (data) {
  data = data.json();
  return data;
}).then(function (result) {
  var top3 = [result.items[0], result.items[1], result.items[2]];
  console.log(top3);
  top3.forEach(function (repo) {
    displayData(repo);
  });
}); //for each of the items in top3, display some information in its own div

function displayData(repo) {
  var contentArea = document.querySelector('.repo');
  contentArea.innerHTML = '<h3>Name: ' + repo.name + '</h3>';
  contentArea.innerHTML += '<h3>Description: ' + repo.description + '</h3>';
  contentArea.innerHTML += '<h3>Stargazers count: ' + repo.stargazers_count + '</h3>';
}