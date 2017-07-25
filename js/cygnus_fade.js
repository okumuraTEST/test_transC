// JavaScript Document


$(function() {


	var count = 0;
	var fadeLi = $("#fade_slide li");
	var fadeMax = fadeLi.length;
	var i = 0;
	var setTimer;
	

	var fadeSpeed =1000;	//fadeIn,Outのスピード
	var fadeInterval = 6000;	//切り替わるまでの時間
	var fadeSwitch = 1500;	//fadeInするタイミング

	$(window).load(function() {
		var imgHeight = fadeLi.height();
		$("#fade_slide").css("height",imgHeight);
	});

	$(window).resize(function() {
		var imgHeight = fadeLi.height();
		$("#fade_slide").css("height",imgHeight);
	});

	$("#fade_slide li").hide();
	$("#fade_slide li:first").fadeIn(fadeSpeed);
	

	
	function startTimer(){
		setTimer=setInterval(function(){
			i = 1;
			count += 1;
			var fade = fadeLi[count -1];
			var next = fadeLi[count];
			$(fade).fadeOut(fadeSpeed);
			setTimeout(function(){
				$(next).fadeIn(fadeSpeed);
				$(next).css("display","block");
				i = 0;
			}, fadeSwitch);
			if(count >= fadeMax) {
				$(fadeLi).fadeOut(fadeSpeed);	
				setTimeout(function(){
					$("#fade_slide li:first").fadeIn(fadeSpeed);
				}, fadeSwitch);
				count = 0;
			}
		} , fadeInterval);
	}

	startTimer();
	
	function stopTimer(){
		clearInterval(setTimer);
	}
	
	$('#cy_next').click(function () {
		if(i === 0) {
			i = 1;
			stopTimer();
			count += 1;
			var fade = fadeLi[count -1];
			var next = fadeLi[count];
			$(fade).fadeOut(fadeSpeed);
			setTimeout(function(){
				$(next).fadeIn(fadeSpeed);
				$(next).css("display","block");
				i = 0;
				startTimer();
			}, fadeSwitch);
			if(count >= fadeMax) {
				$(fadeLi).fadeOut(fadeSpeed);	
				setTimeout(function(){
					$("#fade_slide li:first").fadeIn(fadeSpeed);
				}, fadeSwitch);
				count = 0;
			}
		}

	});
	
	$('#cy_prev').click(function () {
		if(i === 0) {
			i = 1;
			stopTimer();
			count -= 1;
			var fade = fadeLi[count +1];
			var next = fadeLi[count];
			if(count === -1) {
				count = fadeMax-1;
				next = fadeLi[count];
			}
			$(fade).fadeOut(fadeSpeed);
			setTimeout(function(){
				$(next).fadeIn(fadeSpeed);

				i = 0;
				startTimer();
			}, fadeSwitch);

		}

	});

	

});

