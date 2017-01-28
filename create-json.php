<?php
	echo $_POST['data'];
	$myfile = fopen("events-onemi.json", "w") or die("Unable to open file!");
	$txt = $_POST['data'];
	fwrite($myfile, $txt);
	fclose($myfile);
?>