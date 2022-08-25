let request = require("request");
let apiKey = "a4e4ebb3a08dbd8e323c01bacf8ee5aa"; //generate from openweather
console.log(apiKey);
let city = "jakarta";
let url = "https://api.openweathermap.org/data/2.5/weather?q=" +  [city] +  "&units=imperial&appid=" +  [apiKey];
console.log(url);
request(url,function(err,response,body){
if(err){
    console.log("Error",error);
}else{
    let weather = JSON.parse(body);
    
    let message = "Sekarang " + [weather.main.temp] + " derajat Fahrenheit  di "  + [weather.name];
    console.log(message);
}

});