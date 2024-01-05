const URL = "https://restcountries.com/v3.1/all"

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);
xhr.send();

xhr.onload = () => {
   // console.log(JSON.parse(xhr.response));
    const obj1 = JSON.parse(xhr.response);
   
      
const asianCountries = obj1.filter(country => {
  const region = country.region;
  return region && region.toLowerCase() === 'asia';
});

console.log(asianCountries);
     


}