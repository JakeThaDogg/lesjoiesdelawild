function loadWeather () {
  const req = new XMLHttpRequest()

	req.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=Lille&units=metric&APPID=7b869320ac280f7052d6d53e160fdcc8', false)
	req.send()

	let data = JSON.parse(req.response)
	let temp = data.main.temp
	let state = data.weather[0].main
	document.getElementById('temp').innerHTML = temp
	if (state == 'Rain' || 'Clear' || 'Clouds') {
	document.getElementById('Image').setAttribute('src', `assets/img/Lille_${state}.jpg`);
	} else{
	document.getElementById('Image').setAttribute('src', 'http://s3.amazonaws.com/theoatmeal-img/coloring_book/header.png')
	}

}
