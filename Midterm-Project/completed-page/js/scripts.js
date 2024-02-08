$('.lightbox-close').click(function(){
	$('video').each(function(){
	  $(this).get(0).pause();
	})
  });