<?php
// Get cURL resource
$curl = curl_init();
// Set some options - we are passing in a useragent too here
curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => 'http://www.emol.com/noticias/Nacional/2017/01/23/841330/Revisa-la-situacion-de-los-incendios-forestales-que-estan-activos-en-el-pais.html',
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
	var html = $('html').clone(true)
	var events = [];
	data = {
		"actives": html.find('[data-incendio="act"]').html(),
		"controlled": html.find('[data-incendio="cnt"]').html(),
		"combat": html.find('[data-incendio="cmb"]').html(),
		"killed": html.find('[data-incendio="ext"]').html(),
		"totalha": html.find('[data-incendio="hec"]').html()
	};
	events.push(data);

	str = JSON.stringify(events);
	str = JSON.stringify(events, null, 4); // (Optional) beautiful indented output.

	$.post( "http://www.chileayuda.com/create-json.php", { data: str, name: "emol-counter" } );

</script>