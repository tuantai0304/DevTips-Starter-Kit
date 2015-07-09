$( document ).ready(function() {

	
  smoothScroll(1000);
	workBelt();

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

function workBelt(){
	
	$('.thumb-unit').click(function(){
		$('.work-belt').css("left","-100%");
		$('.work-container').show();
	});
	
	$('.work-return').click(function(){
		$('.work-belt').css("left","0%");
		$('.work-container').hide(800);
	});
	
}