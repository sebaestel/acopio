app.controller('placeController', function($scope) {
	$scope.title =  "Map";
    $scope.showPlace = false;
    $scope.address = "Temuco, Chile";
	$scope.placeChanged = function() {
		$scope.searchPlace = this.getPlace();
		$scope.map.setCenter($scope.searchPlace.geometry.location);
	}
    $scope.placeMarker = function(e) {
      	var ll = e.latLng;
     	$scope.places = []
		$scope.places.push({
			lat: ll.lat(),
			lng: ll.lng()
		});

    }
	$scope.places = [{
		name: "Liceo Pedro Aguirre Cerda Puerto varas",
		pos: {
			lat: "-41.320594",
			lon: "-72.981002"
		},
		address: "Imperial Esquina Del Rosario Sin Numero",
		image: "http://liceopac.cl/wp-content/uploads/2014/12/cropped-DSCF4468.jpg",
		schedule: {
			start: "09:00",
			end: "21:00"
		},
		shelter: true,
		product_type: ['agua','alimentos mascotas', 'medicamentos', 'forraje']
	},{
		name: "Instituto Nacional del Deporte Puerto Montt	Insituto",
		pos: {
			lat: "-41.470406",
			lon: "-72.91408"
		},
		address: "Marathon con Esquina Egaña",
		image: "https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-9/11150273_1435903526722760_4035783246661023466_n.jpg?oh=1cf224433841a48ca5bb8af6ed188db3&oe=55E4381A&__gda__=1436102716_1eda49fccf8351983c749b8b41782697",
		schedule: {
			start: "09:00",
			end: "20:00"
		},
		shelter: false,
		product_type: ['materiales de construcción']
	}]

});

