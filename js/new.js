var windowWidth = $(window).width();
var windowSm = 1469;
var cont = 0;
var stop = false;

if(window.matchMedia('(min-width:650px)').matches){
 	baseWidth = 250;
	baseHeight = 125;

 $(function () {

	$('#menu').click(function () {
		stop = true;
		if (cont === 0) {
			cont = 1;
			$('.nav_div').stop().animate({
				'top': '0',
				'opacity': '1'
			}), 1000;
			$('.menu_dot:nth-child(1)').addClass('menu_no1');
			$('.menu_dot:nth-child(2)').css({
				opacity: '0'
			});
			$('.menu_dot:nth-child(3)').addClass('menu_no3');
			$('#menu p').text('CLOSE');
		}

		else if (cont === 1) {
			cont = 0;
				$('.nav_div').stop().animate({
					'top': '-200vh',
					'opacity': '0'
				}), 1000;
			$('.menu_dot:nth-child(1)').removeClass('menu_no1');
				$('.menu_dot:nth-child(2)').css({
					opacity: '1'
				});
			$('.menu_dot:nth-child(3)').removeClass('menu_no3');
			$('#menu p').text('SITE MENU');
				
				
			
		}
	});



	var boxHeight = $(window).height(); //高さ取得
	var mousewheelevent = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
	var scrollcount = 0;
	var scrollStop = false;
	var pages = $(".pages");
	var pagesAll = pages.length;
	var cap = false;
	var cList = $("#caption li");
	$("#caption li:first").css("background-color", "#3c84d6");

	$(document).on(mousewheelevent, function (e) {
		if (cont === 0) {
			e.preventDefault();
			var delta = e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);
			if (delta < 0) {
				motionDown();
			} else {
				motionUp();
			}
		}
	});

	//マウスイベント


	function motionDown() {


		if (scrollStop === false) {

			if (scrollcount === pagesAll - 1) {

			} else {
				scrollStop = true;
				scrollcount++;


				$(cList).css("background-color", "#e4e4e4");
				$(cList[scrollcount]).css("background-color", "#3c84d6");

				var area = boxHeight * scrollcount; //高さ取得

				if (scrollcount === 1) {
					//スクロール一回目動作（area1非表示）
					$("#area1").stop().animate({
						width: "90%",
						top: "-50px",
						height: "90%",
						opacity: "0"
					}, {
						duration: 500,
						easing: 'easeInQuad',
					});


					//スクロール一回目動作（area2表示）
					setTimeout(function () {
						$("#area2").stop().animate({
							width: "100%",
							opacity: "1"
						}, {
							duration: 500,
							easing: 'easeInQuad',
						});
					}, 1000);
					setTimeout(function () {
						$("#fade").css("display", "block");
						$(".op0").css("display", "block");
						$("#fade").stop().animate({
							opacity: "1"
						}, {
							duration: 500,
							easing: 'easeInQuad',
						});

						$(".op0").stop().animate({
							opacity: "1"
						}, {
							duration: 500,
							easing: 'easeInQuad',
						});
					}, 1400);

					setTimeout(function () {
						$("html,body").animate({
							scrollTop: area
						}, {
							duration: 500,
							easing: 'easeInQuad',
						});
					}, 500);
				}

				if (scrollcount === 2) {


					//スクロール二回目動作（area2非表示）
					$("#fade").stop().animate({
						opacity: "0"
					}, {
						duration: 500,
						easing: 'easeInQuad',
					});

					$(".op0").stop().animate({
						opacity: "0"
					}, {
						duration: 500,
						easing: 'easeInQuad',
					});

					setTimeout(function () {
						$("#area2").stop().animate({
							width: "0"
						}, {
							duration: 500,
							easing: 'easeInQuad',
						});

						$("#fade").css("display", "none");
						$(".op0").css("display", "none");
					}, 500);

					//スクロール二回目動作（area3表示）
					setTimeout(function () {
						$("#human").stop().animate({
							opacity: "1"
						}, {
							duration: 500,
							easing: 'easeInQuad',
						});

					}, 1600);
					setTimeout(function () {
						$("#anime1").stop().animate({
							opacity: "1",
							margin: "0"
						}, {
							duration: 500,
							easing: 'easeInQuad',
						});

						$("#sns li").css("color", "#000");

					}, 2000);

					setTimeout(function () {
						$("html,body").animate({
							scrollTop: area
						}, {
							duration: 500,
							easing: 'easeInQuad',
						});
					}, 1000);

				}


				if (scrollcount === 3) {

					//スクロール三回目動作（area3非表示）
					$("#anime1").stop().animate({
						opacity: "0",
						margin: "20px 0 0 0"

					}, {
						duration: 500,
						easing: 'easeInQuad',
					});

					setTimeout(function () {
						$("#human").stop().animate({
							opacity: "0"

						}, {
							duration: 500,
							easing: 'easeInQuad',
						});
					}, 500);

					//スクロール三回目動作（area4表示）
					setTimeout(function () {
						$("#area4").stop().animate({
							opacity: "1",
							width: "100%"
						}, {
							duration: 800,
							easing: 'easeInQuad',
						});

					}, 1400);
					setTimeout(function () {
						$(".cy_none").css("display", "block");
					}, 1800);
					setTimeout(function () {
						$(".cy_none").stop().animate({
							opacity: "1",
							padding: "0 0 0 0"
						}, {
							duration: 500,
							easing: 'easeInQuad',
						});
					}, 2000);

					setTimeout(function () {
						$("html,body").animate({
							scrollTop: area
						}, {
							duration: 500,
							easing: 'easeInQuad',
						});
						$("#sns li").css("color", "#FFF");
					}, 1000);

				}


				if (scrollcount === 4) {

					//スクロール四回目動作（area4非表示）
					$(".cy_none").stop().animate({
						opacity: "0",
						padding: "0 0 0 10px"

					}, {
						duration: 500,
						easing: 'easeInQuad',
					});

					setTimeout(function () {
						$(".cy_none").css("display", "none");
						$("#area4").stop().animate({
							width: "0"

						}, {
							duration: 500,
							easing: 'easeInQuad',
						});
					}, 500);

					//スクロール四回目動作（area5表示）

					setTimeout(function () {
						$("#sns li").css("color", "#000");
						$("#f_title").stop().animate({
							opacity: "1",
							padding: "0"

						}, {
							duration: 500,
							easing: 'easeInQuad',
						});

						$(".fdu").stop().animate({
							opacity: "1",
							padding: "0"

						}, {
							duration: 500,
							easing: 'easeInQuad',
						});
					}, 1600);

					setTimeout(function () {

						$("#last_text").stop().animate({
							opacity: "1",
							padding: "0"

						}, {
							duration: 500,
							easing: 'easeInQuad',
						});
					}, 1800);

					setTimeout(function () {

						$("#copy").stop().animate({
							opacity: "1",
							padding: "0"

						}, {
							duration: 500,
							easing: 'easeInQuad',
						});

					}, 2200);

					setTimeout(function () {

						$("#pagetop2").stop().animate({
							opacity: "1"

						}, {
							duration: 500,
							easing: 'easeInQuad',
						});

					}, 2400);

					setTimeout(function () {
						$("html,body").animate({
							scrollTop: area
						}, {
							duration: 500,
							easing: 'easeInQuad',
						});
					}, 1000);

				}

				if (scrollcount === 5) {

					//スクロール5回目動作（area5非表示）
					$(".cy_none").stop().animate({
						opacity: "0",
						padding: "0 0 0 10px"

					}, {
						duration: 500,
						easing: 'easeInQuad',
					});
					$("#f_title").stop().animate({
						opacity: "0"
					}, {
						duration: 150,
						easing: 'easeInQuad',
					});
					$(".fdu").stop().animate({
						opacity: "0"
					}, {
						duration: 150,
						easing: 'easeInQuad',
					});
					setTimeout(function () {
						$("#f_title").css("display", "none");
					}, 155);
					setTimeout(function () {
						$(".fdu").css("display", "none");
					}, 155);

					setTimeout(function () {
						$(".cy_none").css("display", "none");

						$("#area5").stop().animate({
							width: "0"

						}, {
							duration: 500,
							easing: 'easeInQuad',
						});
					}, 500);

					//スクロール6回目動作（area6表示）
					setTimeout(function () {
						$("#area6").stop().animate({
							opacity: "1",
							width: "100%"
						}, {
							duration: 800,
							easing: 'easeInQuad',
						});

					}, 1400);



					setTimeout(function () {
						$("html,body").animate({
							scrollTop: area
						}, {
							duration: 500,
							easing: 'easeInQuad',
						});
					}, 1000);

				}

				if (scrollcount === 6) {

					//スクロール6回目動作（area6非表示）
					$(".cy_none").stop().animate({
						opacity: "0",
						padding: "0 0 0 10px"

					}, {
						duration: 500,
						easing: 'easeInQuad',
					});

					setTimeout(function () {
						$(".cy_none").css("display", "none");
						$("#area6").stop().animate({
							width: "0"

						}, {
							duration: 500,
							easing: 'easeInQuad',
						});
					}, 500);

					//スクロール7回目動作（area7表示）
					setTimeout(function () {
						$("#area6").stop().animate({
							opacity: "1",
							width: "100%"
						}, {
							duration: 800,
							easing: 'easeInQuad',
						});

					}, 1400);

					setTimeout(function () {
						$("#sns li").css("color", "#000");
						$("#f_title").stop().animate({
							opacity: "1",
							padding: "0"

						}, {
							duration: 500,
							easing: 'easeInQuad',
						});
					}, 1600);

					setTimeout(function () {

						$("#last_text").stop().animate({
							opacity: "1",
							padding: "0"

						}, {
							duration: 500,
							easing: 'easeInQuad',
						});
					}, 1800);

					setTimeout(function () {

						$("#copy").stop().animate({
							opacity: "1",
							padding: "0"

						}, {
							duration: 500,
							easing: 'easeInQuad',
						});

					}, 2200);

					setTimeout(function () {

						$("#pagetop2").stop().animate({
							opacity: "1"

						}, {
							duration: 500,
							easing: 'easeInQuad',
						});

					}, 2400);

					setTimeout(function () {
						$("html,body").animate({
							scrollTop: area
						}, {
							duration: 500,
							easing: 'easeInQuad',
						});
					}, 1000);

				}



				setTimeout(function () {
					scrollStop = false;
				}, 2800);
			}



		}
	}





	function motionUp() {

		if (scrollStop === false) {

			if (scrollcount === 0) {} else {

				scrollStop = true;

				scrollcount--;

				$(cList).css("background-color", "#e4e4e4");
				$(cList[scrollcount]).css("background-color", "#3c84d6");

				var area = boxHeight * scrollcount; //高さ取得


				//area2非表示
				if (scrollcount === 0) {

					$("#fade").stop().animate({
						opacity: "0"
					}, {
						duration: 500,
						easing: 'easeInQuad',
					});

					$(".op0").stop().animate({
						opacity: "0"
					}, {
						duration: 500,
						easing: 'easeInQuad',
					});

					setTimeout(function () {
						$("#area2").stop().animate({
							width: "0"
						}, {
							duration: 500,
							easing: 'easeInQuad',
						});

						$("#fade").css("display", "none");
						$(".op0").css("display", "none");
					}, 500);
				}


				//area1表示
				if (scrollcount === 0) {
					setTimeout(function () {
						$("#area1").stop().animate({
							width: "100%",
							top: "0",
							height: "100%",
							opacity: "1"
						}, {
							duration: 500,
							easing: 'easeInQuad',
						});
					}, 1500);
				}

				if (scrollcount === 1) {

					//area3非表示
					$("#anime1").stop().animate({
						opacity: "0",
						margin: "20px 0 0 0"

					}, {
						duration: 500,
						easing: 'easeInQuad',
					});
					$("#sns li").css("color", "#FFF");

					setTimeout(function () {
						$("#human").stop().animate({
							opacity: "0"

						}, {
							duration: 500,
							easing: 'easeInQuad',
						});
					}, 500);

					//area2表示
					setTimeout(function () {
						$("#area2").stop().animate({
							width: "100%",
							opacity: "1"
						}, {
							duration: 500,
							easing: 'easeInQuad',
						});
					}, 1500);

					setTimeout(function () {
						$("#fade").css("display", "block");
						$(".op0").css("display", "block");
						$("#fade").stop().animate({
							opacity: "1"
						}, {
							duration: 500,
							easing: 'easeInQuad',
						});

						$(".op0").stop().animate({
							opacity: "1"
						}, {
							duration: 500,
							easing: 'easeInQuad',
						});
					}, 1800);
				}



				if (scrollcount === 2) {

					//area4非表示
					$(".cy_none").stop().animate({
						opacity: "0",
						padding: "0 0 0 10px"

					}, {
						duration: 500,
						easing: 'easeInQuad',
					});

					setTimeout(function () {
						$(".cy_none").css("display", "none");
						$("#area4").stop().animate({
							width: "0"

						}, {
							duration: 500,
							easing: 'easeInQuad',
						});
					}, 500);

					//area3表示
					setTimeout(function () {
						$("#human").stop().animate({
							opacity: "1"
						}, {
							duration: 500,
							easing: 'easeInQuad',
						});

					}, 1600);
					setTimeout(function () {
						$("#anime1").stop().animate({
							opacity: "1",
							margin: "0"
						}, {
							duration: 500,
							easing: 'easeInQuad',
						});

						$("#sns li").css("color", "#000");

					}, 2000);

				}


				if (scrollcount === 3) {

					//area5非表示

					$("#copy").stop().animate({
						opacity: "0"

					}, {
						duration: 500,
						easing: 'easeInQuad',
					});

					$("#pagetop2").stop().animate({
						opacity: "0"

					}, {
						duration: 500,
						easing: 'easeInQuad',
					});

					setTimeout(function () {

						$("#last_text").stop().animate({
							opacity: "0",
							padding: "10px 0 0 0"

						}, {
							duration: 500,
							easing: 'easeInQuad',
						});
					}, 200);

					setTimeout(function () {

						$("#f_title").stop().animate({
							opacity: "0",
							padding: "10px 0 0 0"

						}, {
							duration: 500,
							easing: 'easeInQuad',
						});
					}, 400);



					//area4表示
					setTimeout(function () {
						$("#area4").stop().animate({
							opacity: "1",
							width: "100%"
						}, {
							duration: 800,
							easing: 'easeInQuad',
						});

					}, 1400);
					setTimeout(function () {
						$(".cy_none").css("display", "block");
					}, 1800);
					setTimeout(function () {
						$(".cy_none").stop().animate({
							opacity: "1",
							padding: "0 0 0 0"
						}, {
							duration: 500,
							easing: 'easeInQuad',
						});
						$("#sns").css("color", "#000");
					}, 2000);
				}

				if (scrollcount === 4) {

					//area5非表示
					setTimeout(function () {

						$("#last_text").stop().animate({
							opacity: "1",
							padding: "10px 0 0 0"

						}, {
							duration: 500,
							easing: 'easeInQuad',
						});
					}, 200);

					setTimeout(function () {

						$('#area5').stop().animate({
							width: '100%'
						});
						$("#f_title").css("display", "block");
						$(".fdu").css("display", "inline-block");
						$(".fdu").css("opacity", "1");
											
						
						$("#f_title").stop().animate({
							opacity: "1",
							display: "10px 0 0 0"

						}, {
							duration: 500,
							easing: 'easeInQuad',
						});
					}, 400);



					//area4表示
					setTimeout(function () {
						$("#area4").stop().animate({
							opacity: "1",
							width: "100%"
						}, {
							duration: 800,
							easing: 'easeInQuad',
						});

					}, 1400);
					setTimeout(function () {
						$(".cy_none").css("display", "block");
					}, 1800);
					setTimeout(function () {
						$(".cy_none").stop().animate({
							opacity: "1",
							padding: "0 0 0 0"
						}, {
							duration: 500,
							easing: 'easeInQuad',
						});
						$("#sns").css("color", "#000");
					}, 2000);
				}


				setTimeout(function () {
					$("html,body").animate({
						scrollTop: area
					}, {
						duration: 500,
						easing: 'easeInQuad',
					});
				}, 1000);

				setTimeout(function () {
					scrollStop = false;
				}, 2800);
			}
		}
	}

	/****************************
	
	ページトップ
	
	****************************/
	$('#pagetop2').click(function () {

		$(cList).css("background-color", "#e4e4e4");
		$(cList[0]).css("background-color", "#3c84d6");

		$("#copy").stop().animate({
			opacity: "0"

		}, {
			duration: 500,
			easing: 'easeInQuad',
		});

		$("#pagetop2").stop().animate({
			opacity: "0"

		}, {
			duration: 500,
			easing: 'easeInQuad',
		});

		setTimeout(function () {

			$("#last_text").stop().animate({
				opacity: "0",
				padding: "10px 0 0 0"

			}, {
				duration: 500,
				easing: 'easeInQuad',
			});
		}, 200);

		setTimeout(function () {

			$("#f_title").stop().animate({
				opacity: "0",
				padding: "10px 0 0 0"

			}, {
				duration: 500,
				easing: 'easeInQuad',
			});
		}, 400);

		setTimeout(function () {

			scrollcount = 0;

		}, 1000);

		setTimeout(function () {
			$("html,body").animate({
				scrollTop: 0
			}, {
				duration: 500,
				easing: 'easeInQuad',
			});
		}, 1500);

		setTimeout(function () {
			$("#area1").stop().animate({
				width: "100%",
				top: "0",
				height: "100%",
				opacity: "1"
			}, {
				duration: 500,
				easing: 'easeInQuad',
			});
			$("#sns li").css("color", "#FFF");
		}, 2000);


	});



	/****************************
	
	area3ポップアップ
	
	****************************/

	$('#pop1').click(function () {
		scrollStop = true;
		//area3非表示
		$("#anime1").stop().animate({
			opacity: "0",
			margin: "20px 0 0 0"

		}, {
			duration: 500,
			easing: 'easeInQuad',
		});

		setTimeout(function () {
			$("#human").stop().animate({
				opacity: "0"
			}, {
				duration: 500,
				easing: 'easeOutSine',
			});
			$("#none_2").css("display", "none");
		}, 800);

		//ポップアップ表示

		setTimeout(function () {
			$("#popup").css("display", "block");
		}, 1000);


		setTimeout(function () {
			$("#human2").stop().animate({
				opacity: "1",
			}, {
				duration: 500,
				easing: 'easeOutSine',
			});
		}, 2000);

		setTimeout(function () {
			$("#popup").stop().animate({
				opacity: "1"
			}, {
				duration: 500,
				easing: 'easeInQuad',
			});
		}, 2500);


	});

	$('#pop2').click(function () {


		//ポップアップ非表示

		$("#popup").stop().animate({
			opacity: "0"
		}, {
			duration: 500,
			easing: 'easeInQuad',
		});


		setTimeout(function () {
			$("#human2").stop().animate({
				opacity: "0",
			}, {
				duration: 500,
				easing: 'easeOutSine',
			});
			$("#popup").css("display", "none");
		}, 800);

		//area3表示

		setTimeout(function () {
			$("#human").stop().animate({
				opacity: "1",
			}, {
				duration: 500,
				easing: 'easeOutSine',
			});
			$("#none_2").css("display", "block");


		}, 1800);

		setTimeout(function () {
			$("#anime1").stop().animate({
				opacity: "1",
				margin: "0"
			}, {
				duration: 500,
				easing: 'easeInQuad',
			});
		}, 2300);

		setTimeout(function () {
			scrollStop = false;
		}, 3000);


	});



	/****************************
	
	area4ポップアップ
	
	****************************/

	$('#show1').click(function () {
		scrollStop = true;

		//スクロール四回目動作（area4非表示）
		$(".cy_none").stop().animate({
			opacity: "0",
			padding: "0 0 0 10px"

		}, {
			duration: 500,
			easing: 'easeInQuad',
		});

		setTimeout(function () {
			$(".cy_none").css("display", "none");
			$("#area4").stop().animate({
				width: "0"
			}, {
				duration: 500,
				easing: 'easeInQuad',
			});
		}, 500);

		//ポップアップ表示
		setTimeout(function () {
			$("#area4").css("background-image", "url(images/show2.jpg)");
			$("#show2").css("display", "block");
		}, 1000);

		setTimeout(function () {
			$("#area4").stop().animate({
				width: "100%"
			}, {
				duration: 800,
				easing: 'easeInQuad',
			});
		}, 2000);

		setTimeout(function () {
			$("#opa0").css("display", "block");
		}, 2800);

		setTimeout(function () {
			$("#opa0").stop().animate({
				margin: "0",
				opacity: "1"
			}, {
				duration: 500,
				easing: 'easeInQuad',
			});
		}, 3000);


	});

	$('#showclose').click(function () {


		//ポップアップ非表示

		$("#opa0").stop().animate({
			margin: "10px 0 0 0",
			opacity: "0"
		}, {
			duration: 500,
			easing: 'easeInQuad',
		});

		setTimeout(function () {
			$("#opa0").css("display", "none");
			$("#area4").stop().animate({
				width: "0"
			}, {
				duration: 500,
				easing: 'easeInQuad',
			});
		}, 500);


		//area4表示
		setTimeout(function () {
			$("#area4").css("background-image", "url(images/main4.jpg)");
			$("#show2").css("display", "none");
		}, 1000);

		setTimeout(function () {
			$("#area4").stop().animate({
				width: "100%"
			}, {
				duration: 800,
				easing: 'easeInQuad',
			});
		}, 2000);

		setTimeout(function () {
			$(".cy_none").css("display", "block");
			$(".cy_none").stop().animate({
				opacity: "1",
				padding: "0 0 0 0"

			}, {
				duration: 500,
				easing: 'easeInQuad',
			});
		}, 2800);

		setTimeout(function () {
			scrollStop = false;
		}, 3500);


	});



});

}