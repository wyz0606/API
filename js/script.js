

function changeBackgroundImage(){
	$.ajax({
			url: "https://api.unsplash.com/photos/random",
			method: "GET",
			dataType: "json",
			headers: {
   				"Authorization": "Client-ID dff55246a193c9d14d513c0cdde1ac11958055b2533c08df372c298e9dd8720d",
  			},
  			success: function(data){
  				var imgurl = data.urls.full
  				$('#bg').attr("src", imgurl);
  			}
	})
}



function init(){
	console.log("init success");
	$("#switch").click(function(){
		changeBackgroundImage();
	});
}

$(document).ready(function(){
	console.log("success");
	init();
});