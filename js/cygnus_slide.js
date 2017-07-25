// JavaScript Document


$(function() {

	
	var count = 0;
	var slideLeft = $("#left_main li");
	var slideLMax = slideLeft.length;
	var slideright = $("#right_main li");
	
	var slidespeed = 3000;
	
	$(slideLeft).hide();
	$(slideLeft[0]).show();
	$(slideLeft[0]).css("top","-60px");
	
	$(slideright).hide();
	$(slideright[0]).show();
	$(slideright[0]).css("top","0");
	
	setInterval(function(){
		
		count++;
		
		//leftmain
			var leftnow = slideLeft[count-1];
			var nextLeft = leftnow.nextElementSibling;
			
			//次のスライド準備
			setTimeout(function(){
				$(nextLeft).show();
				$(nextLeft).css("top","108%");
				$(leftnow).stop().animate({
					top: '0px',
				},
				{duration: 300 , easing: 'easeInQuad',});
			},500);

			setTimeout(function(){
				
				//画像入れ替え
				$(leftnow).stop().animate({
					top: '-108%',
				},
				{duration: 500 , easing: 'easeInQuad',});
				
				$(nextLeft).stop().animate({
					top: '-60px',
				},
				{duration: 500 , easing: 'easeInQuad',});
			},800);
			
			setTimeout(function(){
				$(leftnow).hide();
			},1300);
	
		
		//rightmain
			var rightnow = slideright[count-1];
			var nextRight = rightnow.nextElementSibling;
			
			//次のスライド準備
			setTimeout(function(){
				$(nextRight).show();
				$(nextRight).css("top","-108%");
				$(rightnow).stop().animate({
					top: '-80px',
				},
				{duration: 300 , easing: 'easeInQuad',});
			},500);

			setTimeout(function(){
				
				//画像入れ替え
				$(rightnow).stop().animate({
					top: '108%',
				},
				{duration: 500 , easing: 'easeInQuad',});
				
				$(nextRight).stop().animate({
					top: '0',
				},
				{duration: 500 , easing: 'easeInQuad',});
			},800);
			
			setTimeout(function(){
				$(rightnow).hide();
			},1300);
	
		//共通(初期化)
			if(count >= slideLMax) {
				count = 0;
				$(slideLeft[0]).show();
				$(slideLeft[0]).css("top","108%");
				setTimeout(function(){
					$(slideLeft[0]).stop().animate({
						top: '-60px',
					},
					{duration: 500 , easing: 'easeInQuad',});
				},800);

				$(slideright[0]).show();
				$(slideright[0]).css("top","-108%");

				setTimeout(function(){
					$(slideright[0]).stop().animate({
						top: '0',
					},
					{duration: 500 , easing: 'easeInQuad',});
				},800);
			}




	} , slidespeed);


	

});

