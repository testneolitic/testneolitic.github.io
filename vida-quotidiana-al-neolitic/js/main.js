(function($){

	var currentDate = 8500;

	$('#arrow-left').on('click', function(){
		$('.line-dates').css('left', '-12%');
	});

	$('#arrow-right').on('click', function(){
		$('.line-dates').css('left', '+12%');
	});	

	$('.date').on('click', function(){
		var date = $(this).data("date");
		var images = $('img[data-date]');
		images.fadeOut("slow", "linear" );
		var selectedImage = $('img[data-date='+date+']');
		selectedImage.fadeToggle( "slow", "linear" );
		
	});

})(jQuery); 

