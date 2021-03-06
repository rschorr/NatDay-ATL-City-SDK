//var turf = require('turf');
var meals = require('./summermeals');

//repository
var repository = require('../DataSource/Converter.js');

function initialize() {
  // Viewport config
  var mapConfig = {
    elementId: 'map-canvas',
    zoom: 12,
    center: {lat: 33.7677129, lng: -84.4206039}
  };

  var map = new meals.Map(mapConfig);
  var repo = new repository.Data();
    // TODO: fetch from API/repo
  window.setTimeout(function () {
      map.loadSnaps(repo.allFoodLocations);
  }, 3000)

  var snaps = [{lat: 33.7677129, lng: -84.4206039}]; // Summer Nutrition Assistance Program locations
  var admin = []; // Administrative Areas

  map.loadSnaps(snaps);
  map.loadAdminAreas(admin);
}

google.maps.event.addDomListener(window, 'load', initialize);
