(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Map abstraction
function GoogleMap(config) {
  var googleConfig = {
    zoom: config.zoom,
    center: new google.maps.LatLng(config.center.lat, config.center.lng)
  }

  this._el       = document.getElementById(config.elementId);
  this._map      = new google.maps.Map(this._el, googleConfig);
  this._markers  = [];
  this._polygons = [];
}

GoogleMap.prototype.loadPoint = function(point) {
  console.log(point);
  var marker = new google.maps.Marker({
      position: new google.maps.LatLng(point.lat, point.lng),
      map: this._map
  });
  this._markers.push(marker);
}

GoogleMap.prototype.loadPolygon = function(polygon) {
}

// Application
function SummerMealMap(config) {
  this.map = new GoogleMap(config);
}

SummerMealMap.prototype.loadSnaps = function(snaps) {
  for (var i in snaps) {
    this.map.loadPoint(snaps[i]);
  }
};

SummerMealMap.prototype.loadAdminAreas = function(areas) {
  for (var i in areas) {
    this.map.loadPolygon(areas[i]);
  }
};

module.exports = {
  Map: SummerMealMap
};

},{}],2:[function(require,module,exports){
//var turf = require('turf');
var meals = require('./summermeals');

function initialize() {
  // Viewport config
  var mapConfig = {
    elementId: 'map-canvas',
    zoom: 12,
    center: {lat: 33.7677129, lng: -84.4206039}
  };

  var map = new meals.Map(mapConfig);

  // TODO: fetch from API/repo

  var snaps = [{lat: 33.7677129, lng: -84.4206039}]; // Summer Nutrition Assistance Program locations
  var admin = []; // Administrative Areas

  map.loadSnaps(snaps);
  map.loadAdminAreas(admin);
}

google.maps.event.addDomListener(window, 'load', initialize);

},{"./summermeals":1}]},{},[2]);
