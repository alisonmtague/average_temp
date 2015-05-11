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
				console.log(response);
			}
		})
	})
})