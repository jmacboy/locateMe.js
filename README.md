locateMe.js

<!DOCTYPE html>
<html>
<head>
	<title>LocateMe</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    	<script type="text/javascript" src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
	<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
	<script src="js/LocateMe.js"></script>
	<script type="text/javascript">		
		$(document).ready(function () {
			$('#location').locateMe({type:'image'});
			//$('#location').locateMe({type:'map'});
		});
	</script>
	<style>
        	#location {
             		width: 400px;
             		height: 400px;
			background-color:#00ff00;
        	}
    	</style> 

</head>
<body>	
	<div id="location"></div>	
</body>
</html>
Jquery plugin that uses geolocation web api to show me the current location on an image or a m
