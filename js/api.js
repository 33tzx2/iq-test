const url = 'https://swapi.dev/api/people/1/'

$('#callback-btn').on('click', async function() {
  let response = await fetch(url)
  .then(response => response.json())
  .then(commits => document.getElementById('api-resp').innerHTML = 'Поздравляем, ваш интеллект на уровне ' + commits.name )
}
)
