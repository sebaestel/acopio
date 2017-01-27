app.controller('homeController', function($scope, NgMap) {
	$scope.title =  "Map";
    $scope.showPlace = false;
	$scope.placeChanged = function() {
		$scope.searchPlace = this.getPlace();
		$scope.map.setCenter($scope.searchPlace.geometry.location);
		console.log($scope.searchPlace.geometry.location)
	}

    $scope.placeInfo = function (event, info) {
    	$scope.place = info;
    	$scope.showPlace = true;
    }

	$scope.places = [{
		name: "Bomberos de la vega",
		contact: {
			name: "Sebastian Durán",
			phone: "213123123" 
		},
		pos: {
			lat: "-33.4556033",
			lon: "-70.6450233"
		},
		product_type: ['Agua', 'Barras energeticas', 'Pañales', 'Barras energeticas', 'Frutas']
	}]

});
