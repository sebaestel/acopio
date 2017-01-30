app.controller('homeController', function($scope, NgMap, $http) {
	$scope.title =  "Map";
    $scope.showPlace = false;
	$scope.mapLoader = true;
	$scope.placeChanged = function() {
		$scope.searchPlace = this.getPlace();
		$scope.map.setCenter($scope.searchPlace.geometry.location);
		$scope.mapLoader = false;
		$('.pac-container').addClass('small')
	}

    $scope.placeInfo = function (event, info) {
    	$scope.place = info;
    	$scope.showPlace = true;
    	//$scope.tripTo = info.pos.lat + "," + info.pos.lon;
    }

    // Centros de acopio
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
    // Campañas
	$http
		.get('http://www.chileayuda.com/blog/wp-json/wp/v2/posts?categories=2')
		.then(function (response) {
			$scope.campaigns = response.data;
		});	
    // Alertas onemi
	$http
		.get('http://www.chileayuda.com/events-onemi.json')
		.then(function (response) {
			$scope.alerts = response.data;
		});

    // Situacion actual
	$http
		.get('http://www.chileayuda.com/emol-counter.json')
		.then(function (response) {
			console.log(response)
			$scope.actualSituation = response.data;
		});


	// $http
	// 	.get('data/gas.json')
	// 	.then(function (response) {
	// 		$scope.gas = response.data.data;
	// 	});


});
