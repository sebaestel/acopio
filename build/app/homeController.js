app.controller('homeController', function($scope, NgMap, $http) {
	$scope.title =  "Map";
    $scope.showPlace = false;
	$scope.mapLoader = true;
	$scope.placeChanged = function() {
		$scope.searchPlace = this.getPlace();
		$scope.map.setCenter($scope.searchPlace.geometry.location);
	}
	navigator.geolocation.getCurrentPosition(function(position) {
		$scope.currentLocation = position.coords.latitude + "," + position.coords.longitude;
		$scope.mapLoader = false;
	}, function(e) {
		$scope.currentLocation = "-33.4556033, -70.6450233";
		$scope.mapLoader = false;
	});

    $scope.placeInfo = function (event, info) {
    	$scope.place = info;
    	$scope.showPlace = true;
    	$scope.tripTo = info.pos.lat + "," + info.pos.lon;
    }

	$http
		.get('https://chile-ayuda-api.herokuapp.com/places')
		.then(function (response) {
			$scope.places = [];

			angular.forEach(response.data.information, function(rest) {
				rest.pos.lat = rest.pos.lat.replace(',','.')
				rest.pos.lon = rest.pos.lon.replace(',','.')
                $scope.places.push(rest);
            });
		});

});
