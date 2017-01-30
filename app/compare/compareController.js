app.controller('compareController', function($scope) {
	var height = parseInt($( window ).height()) - 60;
	$('#compare').attr('width',$( window ).width()).attr('height', height);

});
