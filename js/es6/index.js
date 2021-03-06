//fetch does a get by default
fetch('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc')
    .then(data => {
        data = data.json()
        return data
    })
    .then(result => {
        let top3 = [result.items[0], result.items[1], result.items[2]]
        console.log(top3)
        top3.forEach(function(repo) {
        displayData(repo)
        })
    })

function displayData(repo) {
    var contentArea = document.querySelector('.container')
    contentArea.innerHTML += '<div class="repo"> <h3>Name: ' + repo.name + '</h3><h3>Description: ' + repo.description + '</h3><h3>Stargazers count: ' + repo.stargazers_count + '</h3> </div>'
}


