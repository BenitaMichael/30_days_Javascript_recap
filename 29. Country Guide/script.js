const searchButton = document.getElementById("search");
const countryInput = document.getElementById("country-input");
let error = document.querySelector(".error");
let info = document.querySelector(".info");
let CountrysFlag = document.getElementById("flag");
let CountrysName = document.getElementById("name");
let CountrysCapital = document.getElementById("capital");
let CountrysContinent = document.getElementById("continent");
let CountrysCurrency = document.getElementById("currency");
let CountrysPopulation = document.getElementById("population");
let CountrysLanguage = document.getElementById("language");
let CountrysTime = document.getElementById("time");


searchButton.addEventListener("click", async () =>{
    let countryName = countryInput.value;
    let API = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`

    if (countryName.trim() === "") {
        error.innerHTML = "Country input cannot be empty..."
        error.style.display = "block"
        return;
    }
    try{
        const response = await fetch(API);
        const result = await response.json();
        console.log(result);
        
        info.style.display = "block";

        CountrysFlag.src = result[0].flags.svg;
        CountrysName.innerHTML =  result[0].name.official;
        CountrysCapital.innerHTML = result[0].capital;
        CountrysContinent.innerHTML = result[0].continents;
        CountrysCurrency.innerHTML = result[0].currencies(0).name;
        // CountrysCurrency.innerHTML = result.currencies[Object.keys(result.currencies)].name;
        CountrysPopulation.innerHTML = result[0].population;
        CountrysLanguage.innerHTML = result[0].languages[0];
        CountrysTime.innerHTML= result[0].timezones;


    }catch(err){
        console.log(err.message);
        error.innerHTML = "Server is currently down. Please try again later";
        error.style.display = "block";
    }
})