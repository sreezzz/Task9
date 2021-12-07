var request = new XMLHttpRequest();

request.open("GET", " https://restcountries.com/v2/all ");

request.send();

request.onload = function () {
  var data = JSON.parse(request.response);
  console.log(data);

  for (var i in data) {
    console.log(data[i].name + " " + data[i].flag + " " + data[i].capital);
  }
  var population = data.reduce((acc, ele) => acc + ele.population, 0);

  console.log(population);
  var region = data.filter((ele) => ele.region === "Asia");
  console.log(region);

  var low_population = data
    .filter((ele) => ele.population < 200000)
    .map((ele) => ele.name);

  console.log(low_population);
  var currency = data.filter((ele) => {
    for (let i in ele.currencies) {
      if (ele.currencies[i].code === "USD") {
        return true;
      }
    }
  });
  map((ele) => ele.name);

  console.log(currency);

  var cflag = data.forEach((ele) => {
    console.log(`${ele.name}${ele.capital}${ele.flag}`);
  });
};
