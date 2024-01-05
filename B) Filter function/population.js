
const URL = "https://restcountries.com/v3.1/all"

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);
xhr.send();

xhr.onload = () => {
   // console.log(JSON.parse(xhr.response));
    const obj1 = JSON.parse(xhr.response);
   
      
      const countriesWithLowPopulation = obj1.filter(country => {
        const population = country.population;
        return population < 200000;
    });
    
    console.log( " The Countries with a population of less than 2 lakhs" , countriesWithLowPopulation);

}