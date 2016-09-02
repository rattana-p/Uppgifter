
$(document).ready(function(){


var baseUrl = "http://api.openweathermap.org/data/2.5/weather?q=stockholm&units=metric&APPID=d0a18bca08b2573fe53a4c256eea3f67";

$.ajax ( { 
	url : baseUrl,
	method : 'GET',
	data : {q : 'stockholm' },
	dataType : 'jsonp',
	success : function(data){

		
	$('.mybutton').click(function(){ 	

			$("#test2").html(
				'City:  ' + data.name + "<br>" +
				'Weather:  ' + data.weather[0].main + "<br>" +
				'Description: ' + data.weather[0].description + "<br>" + 
				'Min: ' + data.main.temp_min + 'c' + "<br>" + 
				'Max: ' + data.main.temp_max + 'c' );

			var url = "http://openweathermap.org/img/w/"+ data.weather[0].icon + ".png";

			// style base element for Data from API
			$('.wrapper').css({
				"background-color":"#83c1e3",
				"border":"4px solid white", 
				"box-shadow":"0px 1px 19px darkgray",
				"margin-top": "1%"
			});

			// add icon to element 
			
			$( "p" ).add( '<img id="weathericon"src=""> </img>' ).appendTo("#test1");
			$( "#weathericon" ).stop().attr("src", url);


	} );	

	} } ) ; 


} ) ;
