const searchButton = document.getElementById('#search_button');
const apikey = '1e43c0a3bb5a78c890577d191d96abbe';
const searchBar = document.getElementById('search-bar');

searchButton.addEventListener('click', () => {
  let url = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=&{apikey}'
})