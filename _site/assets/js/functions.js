$( document ).ready(function() {

	
  smoothScroll(1000);
	
});

function alertTest(str){
	alert(str);
}

function smoothScroll(duration){
	
	$('a[href^="#"]').on('click', function(e){
		
		var target = $( $(this).attr('href') );
		
		if (target.length)
		{
			e.preventDefault();
			$('html, body').animate({
					scrollTop: target.offset().top
			}, duration);
				// alertTest(target);
		}
		
		
	});
	
}