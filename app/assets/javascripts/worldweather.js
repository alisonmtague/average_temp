$(document).ready(function(){
	$("#search").on("submit", function(event){
		event.preventDefault();
		var input = $("#search-zip").val();
		var apikey = "a531df13fffd41b9bd2039255bb77";
		var url = "http://api.worldweatheronline.com/free/v2/weather.ashx" + "?key=" + apikey + "&q=" + input + "&format=json" + "&num_of_results=1";
		$.ajax({
			url: url,
			dataType: "jsonp",
			method: "GET",
			success: function(parsed_json){
				var temp_f = parsed_json['data']['current_condition'][0]['temp_F'];
				var temp_c = parsed_json['data']['current_condition'][0]['temp_C'];
			console.log(temp_f);
			console.log(temp_c);
				$("#temp-f h3").text(temp_f + "°F")
				$("#temp-c h3").text(temp_c + "°C")
			}
		})
		this.reset();
	})
});
