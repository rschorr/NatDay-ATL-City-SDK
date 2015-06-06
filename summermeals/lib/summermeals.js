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
