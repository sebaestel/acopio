<?php
// Get cURL resource
$curl = curl_init();
// Set some options - we are passing in a useragent too here
curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => 'http://www.onemi.cl/alertas/',
    CURLOPT_USERAGENT => 'Codular Sample cURL Request'
));
// Send the request & save response to $resp
$resp = curl_exec($curl);
// Close request to clear up some resources
curl_close($curl);

echo $resp;

?>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js" type="text/javascript"></script>

<script>
	$('header, .alertas, .navbar.hidden-phone, .visible-phone').remove()

	var events = [];
 
	$('.listado-alertas .row-fluid').each(function() { 
		var title = $('a p.msg',this).html().trim(),
			meta = $('a p.date',this).html().split('|'),
			url = $('a',this).attr('href'),
			day = meta[0].trim(),
			hour = meta[1].trim(),
			place = meta[2].trim(),
			type = $('a img',this).attr('alt'),
			image = $('a img',this).attr('src'),
			data = {
				"url": url,
				"day": day,
				"hour": hour,
				"place": place,
				"type": type,
				"title": title,
				"image": image
			};
		events.push(data);
	})

	str = JSON.stringify(events);
	str = JSON.stringify(events, null, 4); // (Optional) beautiful indented output.

	$.post( "create-json.php", { data: str } );

</script>