app.controller('homeController', function($scope, NgMap, $http) {
	$scope.title =  "Map";
    $scope.showPlace = false;
	$scope.placeChanged = function() {
		$scope.searchPlace = this.getPlace();
		$scope.map.setCenter($scope.searchPlace.geometry.location);
	}

    $scope.placeInfo = function (event, info) {
    	$scope.place = info;
    	$scope.showPlace = true;
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
