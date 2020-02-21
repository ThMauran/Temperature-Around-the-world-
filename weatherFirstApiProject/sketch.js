var weatherData
var currentTemp


var api = "https://api.openweathermap.org/data/2.5/weather?q="
var city = "Pérols"
var api_end = "&units=metric&appid=d18492ab2d1162cc6f29d76eccc13a03"

function gotData(data){
  weatherData = data
}

function setup() {
  noCanvas()

  inputField = select('#inputCity')

  temperatureP = select('#temperatureP')

  changeButton = select('#changeButton')

  changeButton.mousePressed(changeCity)
}

function changeCity(){
  url = api + inputField.value() + api_end
  data = loadJSON(url ,gotData)

}

function draw() {
  if (weatherData){
    temperatureP.html("La température actuelle à " + inputField.value() + " est de: " + weatherData.main.temp + "°C")
  }
}
