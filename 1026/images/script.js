jQuery(document).ready(function(){
	
	//가이드 텍스트
	$('.guideText').each(function(){
		var guideText = this.defaultValue;
		var element = $(this);
		element.focus(function(){
			if(element.val()===guideText){
				element.val('');   //input태그는 비울때 val 사용 , empty는 div만..
				element.removeClass('guide');
			}
		});
		element.blur(function(){
			if(element.val()===''){   //사용자가 마우스를 옮겼는데 입력된 값이 없을 때
				element.val(guideText); 
				element.addClass('guide');
			}
		});
		if(element.val()===guideText){   //문서 처음 열었을 경우
			element.addClass('guide');
		}
	});
	
	
	// 툴팁
	var balloon = $('<div class="balloon"></div>').appendTo('body');  // 동적생성(툴팁)
	function updateBalloonPosition(x,y){  //마우스 움직임에 따라서 포지션 위치 지정
		balloon.css({left: x + 15, top: y});
	}
	
	function showBalloon(){
		balloon.stop() // 애니메이션 반복실행 하지 않도록
		.css('opacity',0).show()
		.animate({opacity:1},1000);
	};
	function hideBalloon(){
		balloon.stop() // 애니메이션 반복실행 하지 않도록
		.animate(
			{opacity:0},1000,
			function(){balloon.hide();}
		);
	};
	
	$('.showBalloon').each(function(){
		var element = $(this);
		var text = element.attr('title');
		
		element.attr('title',''); // html title 감추기
		
		element.hover(function(event){  // 마우스 올리면
			balloon.text(text);
			updateBalloonPosition(event.pageX, event.pageY);
			showBalloon();
		},function(){  // 마우스 내리면
			hideBalloon();
		});
		
		element.mousemove(function(event){  // 마우스가 움직이면
			updateBalloonPosition(event.pageX, event.pageY);
		});
	});
	
	
	
	
	// 메인이미지 슬라이드 배너
	var current = 0; // 첫번째
	var banner = $('#img_bn_area li');
	
	setInterval(function(){
		var prev = banner.eq(current);
		move(prev,0,'-100%'); // -100% 왼쪽으로 움직임
		current++;
		if(current==banner.size()) current = 0; //banner.size() 배너의 객체 수
		var next = banner.eq(current);
		move(next,'100%',0);// 100% 왼쪽으로 움직임
	},3000);  // 3초가 적당
	
	function move(tg,start,end){
		tg.css('left',start).stop().animate({left:end},{duration:1300,ease:'easeOutQubic'});
	}
	
	
	
	
	
	// rollover (마우스 호버 효과_이미지 다른이미지로 변경)
	$('.rollover').each(function(){
		var a = $(this);
		var img = a.find('img');
		var src_off = img.attr('src');
		var src_on = src_off.replace('_off','_on');
		// src_on = images/menu01_on.png
		$('<img />').attr('src',src_on);
		// <img src="images/menu01_on.png" />
		
		a.bind('mouseenter focus',function(){
			img.attr('src',src_on);
		});
		a.bind('mouseleave blur',function(){
			img.attr('src',src_off);
		});
	});
});












