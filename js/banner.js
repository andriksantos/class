$(function(){
		    $('#slider figure:gt(0)').hide();
		    setInterval(function(){
		      $('#slider figure:first-child').fadeOut(1000)
		         .next('figure').fadeIn(1000)
		         .end().appendTo('#slider');}, 5000);
		});