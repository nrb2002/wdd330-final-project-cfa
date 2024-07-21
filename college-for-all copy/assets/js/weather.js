//select all of the HTML elements that will need to be manipulated and assign them to const variables.
const cityName = document.querySelector("#city");
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#description");
const humidity = document.querySelector("#humidity");
const windSpeed= document.querySelector("#wind-speed");
const feeling = document.querySelector("#feeling");
const minTemp = document.querySelector("#min-temp");
const maxTemp = document.querySelector(".max-temp");
const visibility = document.querySelector("#visibility");


//Specify the latitude and longitude of Trier, Germany using the information you have gathered and the examples provided.
const lat = -4.3033920744381495;
const lon = 15.311754604308138;
//Set the units to imperial: "units=imperial"
const units = "imperial";
//Provide your API key: "appid=[enter your key here]"
const apiKey = "a82bd4620ada83b94d8022e56f26265f";


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////

//GET CURRENT WEATHER

//Declare a const variable named "url" and assign it a valid URL string as given in the openweathermap api documentation.
const urlCurrent = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

//Define an asynchronous function named "getCurrentWeather()" that uses a try block to handle errors.
async function getCurrentWeather(){
    try{
        //Store the results of the urlCurrent fetch into a variable named "response".
        const response = await fetch(urlCurrent);
        //If the response is OK, then store the result of response.json() conversion in a variable named "data", 
        if(response.ok){
            const data = await response.json();
            //Output the results to the console for testing
            console.log(data);
            //output to the given HTML document
            displayCurrentWeather(data);
        //Else, throw an Error using the response.text().
        }else{
            throw Error(await response.text());
        }
    //Finish off the catch block by outputting any try error to the console.
    }catch (error){
        console.log(error);
    }
}
//invoke the getCurrentWeather() function with a call
getCurrentWeather();

//Assign city name
cityName.innerHTML = "Conzumel";

//Build the displayCurrentWeather function to output to the given HTML document
function displayCurrentWeather(data){    
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;    
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute("src",iconsrc);
    weatherIcon.setAttribute("alt", "Weather Icon");
    weatherIcon.setAttribute("loading","lazy" );
    
    let desc = data.weather[0].description;
    captionDesc.textContent = `${desc}`;

    humidity.textContent = `Humidity: ${data.main.humidity}%`; 
    windSpeed.textContent = `Wind Speed: ${data.wind.speed}mph`;
    feeling.textContent = `Feels like: ${Math.round(data.main.feels_like)}°F`;
    minTemp.textContent = `Min. Temperature: ${Math.round(data.main.temp_min)}&deg;F`;
    maxTemp.textContent = `Max. Temperature: ${Math.round(data.main.temp_max)}&deg;F`;
    visibility.textContent = `Visibility: ${data.visibility}km`;
} 


////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

//GET HOURLY FORECAST FOR 3 datetimeS
const datetime = document.querySelector("#datetime");
const dailyTemp = document.querySelector("#daily-temp");
const weatherIconDaily = document.querySelector("#weather-icon-daily");
const captionDescDaily = document.querySelector("#daily-desc");
//Make api call
const urlDaily = `https://api.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={apiKey}`;

//Define an asynchronous function named "getDailyWeather()" that uses a try block to handle errors.
async function getDailyWeather(){
    try{
        //Store the results of the urlCurrent fetch into a variable named "response".
        const response = await fetch(urlCurrent);
        //If the response is OK, then store the result of response.json() conversion in a variable named "data", 
        if(response.ok){
            const data = await response.json();
            //Output the results to the console for testing
            console.log(data);
            //output to the given HTML document
            displayDailytWeather(data);
        //Else, throw an Error using the response.text().
        }else{
            throw Error(await response.text());
        }
    //Finish off the catch block by outputting any try error to the console.
    }catch (error){
        console.log(error);
    }
}
//invoke the getDailyWeather() function with a call
getDailyWeather();

//Build the displayDailytWeather function to output to the given HTML document
function displayDailytWeather(data){
    
    for (let i = 0; i <= 23; i++) {  
        //Get the datetime forecasted
        datetime.textContent = `${data.list[i].dt}`;  
        //round the final result of the daily temp     
        dailyTemp.textContent = `Temperature: ${Math.round(data.list[i].main.temp)}&deg;F`;
        //Get the icon
        const iconsrcdaily = `https://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png`;        
        weatherIconDaily.setAttribute("src",iconsrcdaily);
        weatherIconDaily.setAttribute("alt", "Weather Icon");
        weatherIconDaily.setAttribute("loading","lazy" );
        //Get the description
        let desc = data.list[i].weather[0].description;
        captionDescDaily.textContent = `${desc}`;
        
        //Append data to the table
        const dataRow = document.querySelector("#weather-data");
        
        dataRow.appendChild(datetime);
        dataRow.appendChild(dailyTemp);
        dataRow.appendChild(weatherIconDaily);
        dataRow.appendChild(captionDescDaily);  
    }
    
  
}
