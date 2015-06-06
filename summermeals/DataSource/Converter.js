var allFoodLocations = [];
var populationData = [];
var xr = require('xr');
xr.get('./DataSource/arcgis-ga-only-v2.json')
  .then(function (value) {
      allFoodLocations = value.data;
      ProcessFoodLocations();
  });
xr.get('./DataSource/KidPopulation.json')
  .then(function (value) {
      populationData = value.data;
      ProcessKidPopulation();
  });

function ProcessFoodLocations() {
    var temp = allFoodLocations;
    allFoodLocations = [];
    for (var f in temp)
    {
        allFoodLocations.push(
            {
                Latitude: f.DisplayY,
                Longitude: f.DisplayX
            });
    }
    console.log(allFoodLocations);
}

function ProcessKidPopulation() {
    var temp = populationData;
    //eh
};