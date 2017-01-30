app.controller('timelineController', function($scope) {
	var height = parseInt($( window ).height()) - 60;
	$('#timeline').attr('width',$( window ).width()).attr('height', height);

});
