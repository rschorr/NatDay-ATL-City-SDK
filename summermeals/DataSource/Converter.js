var xr = require('xr');

function DataRep() {
    this.allFoodLocations = [];
    this.populationData = [];
    GetFoodLocations(this.allFoodLocations);
    GetKidPopulation(this.populationData);
}


var GetFoodLocations = function (allFoodLocations) {
    var promise = xr.get('./DataSource/arcgis-ga-only-v2.json');
    promise.then(function (value) {
        allFoodLocations = value.data;
        ProcessFoodLocations(allFoodLocations);
    });
    return promise;
}
var GetKidPopulation = function (populationData) {
    var promise = xr.get('./DataSource/KidPopulation.json');
    promise.then(function (value) {
        populationData = value.data;
        ProcessKidPopulation();
    });
    return promise;

};

function ProcessFoodLocations(allFoodLocations) {
    var temp = allFoodLocations;
    allFoodLocations = [];
    for (var f in temp) {
        allFoodLocations.push(
            {
                lat: f.DisplayY,
                long: f.DisplayX
            });
    }
}

function ProcessKidPopulation() {
    var temp = populationData;
    //eh
};

module.exports = {
    Data: DataRep
};