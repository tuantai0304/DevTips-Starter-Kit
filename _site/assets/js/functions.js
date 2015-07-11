$( document ).ready(function() {

	
  smoothScroll(1000);
	workBelt();
	workLoad();
	clientStuff();
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

function workLoad(){
	
	$.ajax({cache: true});
	
	$('.thumb-unit').click(function(){
		
		var $this = $(this);
				newTittle=$this.find('strong').text();
				folder = $this.data('folder');
				spinner='<div class="loader"></div>',
				newHTML='/work/' + folder + '.html';
		
		$('.project-content').html(spinner).load(newHTML);
		$('.project-tittle').text(newTittle);
	});
}

function clientStuff(){
	$('.client-unit').first().addClass('active');
	$('.client-icon').first().addClass('active');
	$('.client-nav-mobile span').first().addClass('active');
	
	$('.client-icon, .client-nav-mobile span').click(function(){
		var $this = $(this),
				$siblings = $this.parent().children(),
				position = $siblings.index($this);
				
		$('.client-unit').removeClass("active").eq(position).addClass("active");
		
		$('.client-icon').removeClass("active");
		$('.client-nav-mobile span').removeClass("active");
		$this.addClass("active")
	});
	
	$('.next-arrow, .previous-arrow').click(function(){
		var $this = $(this),
				$activeClient = $('.client-belt').find('.active'),
				position = $('.client-belt').children().index($activeClient),
				clientNum = $('.client-unit').length;
				//console.log(clientNum);
				
				
			if($this.hasClass('next-arrow')){
				if (position < clientNum-1){
					//$activeClient.removeClass("active").next().addClass("active");
					$('.active').removeClass("active").next().addClass("active");
				}
				else {
					$('.client-unit').removeClass("active").first().addClass("active");
					$('.client-icon').removeClass("active").first().addClass("active");
					//$activeClient.removeClass("active").first().addClass('active');
					//$('.client-belt').children().first().addClass("active");
				}
			}
			else{
				if (position == 0){
					$('.client-unit').removeClass("active").last().addClass("active");
					$('.client-icon').removeClass("active").last().addClass("active");
				}
				else
				 $('.active').removeClass("active").prev().addClass("active");
			}
				
	});
	
	
	
}