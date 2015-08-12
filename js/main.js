(function($){

	$('#arrow-left').on('click', function(){

	});

	$('#arrow-left').on('click', function(){

	});	

	$('.date').on('click', function(){
		var date = $(this).data("date");
		var images = $('img[data-date]');
		images.fadeOut("slow", "linear" );
		var selectedImage = $('img[data-date='+date+']');
		selectedImage.fadeToggle( "slow", "linear" );
		
	});

})(jQuery); 

