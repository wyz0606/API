

function changeBackgroundImage(){
	$.getJSON("https://api.thecatapi.com/v1/images/search",function(data){
		console.log(data);
		var url = data[0].url;
		console.log(url);
		$("#back").attr("src",url);
	});
}



function init(){
	console.log("init success");
	$("#switch").click(function(){
		changeBackgroundImage();
		console.log("success");
	});
}

$(document).ready(function(){
	
	init();
});