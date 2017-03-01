console.log($)


//Keys
var googKey = 'AIzaSyB5NjQAI5uiPC-775ISfXEqZonsCsS77nk',
    darkSkyKey = '8ebd4c4f455e362e0b67d62708dbd947'


//Nodes
var cityNode = document.querySelector('.cityName'),
    weatherNode = document.querySelector('.weatherForecast')

//URLs
var urlCity = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=29.73506514291885,-95.39055434052999&key=AIzaSyB5NjQAI5uiPC-775ISfXEqZonsCsS77nk'
var urlWeather = 'https://api.darksky.net/forecast/8ebd4c4f455e362e0b67d62708dbd947/29.7742284,-95.37323289999999?exclude=[minutely,hourly,daily,alerts,flags]&callback=?'    



//Get the Name for the current city
    var promiseLocation = $.getJSON(urlCity)

    promiseLocation.then(getCityname)




    function getCityname(response) {
    	for(var i = 0; i < response.results.length; i++){
			if(response.results[i].types[0] === 'locality'){

				cityNode.innerHTML = response.results[i]['formatted_address']

			}
	}
}


//Get the weather 
	var promiseWeather = $.getJSON(urlWeather)

	promiseWeather.then(getWeather)


	function getWeather(apiResponse) {
		var weatherHTML = ''

		weatherHTML += '<div class="current">'
		weatherHTML += '<p> Temperature: ' + Math.round(apiResponse.currently.temperature) + ' F' +'</p>'
		weatherHTML += '<p>' + apiResponse.currently.summary + '</p>'
		weatherHTML += '<p> Hummidity: ' + apiResponse.currently.humidity + '%' +'</p>'
		weatherHTML += '<p>Wind Speed: ' + apiResponse.currently.windSpeed + ' mp/h' + '</p>'
		weatherHTML += '</div>'
		
		// weatherHTML +=

		weatherNode.innerHTML = weatherHTML


	}















