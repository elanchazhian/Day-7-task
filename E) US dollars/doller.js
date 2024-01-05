
const URL = "https://restcountries.com/v2/all"

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);
xhr.send();

xhr.onload = function () {
  var obj1 = JSON.parse(xhr.response);
  var currency = obj1.filter((element) => {
    for (let key in element.currencies) {
      if (element.currencies[key].code === "USD") {
        return element;
      }
    }
  });
  console.log(currency);
};


