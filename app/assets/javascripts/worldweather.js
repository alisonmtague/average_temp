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
			success: function(response){
				// console.log(response);
				displayResults(response, input);
			}
		})
		this.reset();
	})
});

function displayResults(response, input){
	var apikey = "a531df13fffd41b9bd2039255bb77";
	$.getJSON("http://api.worldweatheronline.com/free/v2/weather.ashx" + "?key=" + apikey + "&q=" + input + "&format=json" + "&num_of_results=1", function(data){
		var current_condition = data['data']['current_condition'];
		for (var i=0; i < current_condition.length; i++){
			var temp_f = current_condition[i][0]['temp_F'];
			var temp_c = current_condition[i][0]['temp_C'];
		}
	})
		console.log(temp_f);
}
