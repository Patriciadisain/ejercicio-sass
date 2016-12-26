$(document).ready(function(){

	// Cambiar slides

	var array = ['img/1.png', 'img/2.png', 'img/4.png'];
	var i = 0;
	var largo = array.length;
	setInterval(function() {
      // Do something every 5 seconds
		$('.change-img').attr('src',array[i]);
		
			i++;

			if (i>2){
				 i=0;
			}
	}, 1600);
})