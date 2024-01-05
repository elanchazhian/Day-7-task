const URL = "https://restcountries.com/v3.1/all"

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);
xhr.send();

xhr.onload = function () {
    var countryData = JSON.parse(this.response);
    const totalPopulation = countryData.reduce(
      (accumulator, country) => accumulator + country.population,
      0
    );
    console.log("Total population of countries:", totalPopulation);
  };
