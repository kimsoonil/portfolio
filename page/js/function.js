$(function(){
	//alert("0");
	var nowIdx=0;
	var oldIdx = nowIdx;
	var $nav=$("nav>.gnb>li>a");
	var $slide=$("#screen>.slides");
	var interID=null;
	var $ani=$("#main>.containe>.job_search>a");
	var current = 0;
	//슬라이드 배너
	$(window).load(function(){
		ani();
		autoPlay();
	});
	var ani=function(top){
		$slide.stop().animate({
			"left":200-(800*nowIdx)
		},1200);
		$slide.find("li").eq(nowIdx).addClass("opac").siblings().removeClass("opac");
	};
	var next =function(){
		if(nowIdx>3){
			nowIdx=0;
		}
		else{
			nowIdx++
		};
	};
	var prev = function(){
		if(nowIdx<1){
			nowIdx=4;
		}
		else{
			nowIdx--
		};
	};
	/*var button = $('#buttonList > li');//페이지 네이션
    var visual = $('#brandVisual > ul > li');
   
    
    button.click(function(){
    	var tg = $(this);
    	var i = tg.index();
    	
    	button.removeClass('on');
    	tg.addClass('on');
    	
    	move(i);
    });
    
    function move(i){
    	visual.eq(current).css('left', 0).stop().animate({left:'-100%'});
    	visual.eq(i).css('left', '100%').stop().animate({left:0});
    	
    	current = i;
    }
    
    setInterval(function(){
    	var n = current + 1;
    	if(n == button.size()) n = 0;
    	button.eq(n).trigger('click');
    }, 7000)
});*/
	var autoPlay = function(){
      interID = window.setInterval(function(){
     
         next();
         ani();

      }, 4000);
   };

	$("#screen>.perv").click(function(evt){
		prev()
		ani();
		
		evt.preventDefault();
	});	
	$("#screen>.next").click(function(evt){
		next();
		ani();
		
		evt.preventDefault();
	});	

	//메뉴바
	

	/*$nav.mouseenter(function(){
		$(this).find(".en").hide();
		$(this).find(".ko").show();
	});
	$nav.mouseleave(function(){
		$(this).find(".ko").hide();
		$(this).find(".en").show();
	});*/

	$nav.bind("click",function(){
		$(this).find(".en").hide();
		$(this).find(".ko").show().parent().parent().siblings().find(".en").show();

	});

	//글쓰기 클릭시
	$(".community>a.button").bind("click",function(evt){
		alert("접속이 원할하지 않습니다.\n 다시시도해주세요")
		evt.preventDefault()
	});
	//로고 클릭시 메인로 이동
	$("header>h1>a").bind("click",function(evt){
		$("section").hide();
		$("#main").show();
		//$nav.find(".ko").hide();
		$nav.find(".en").show();
		/*$("section").eq(oldIdx).stop().fadeOut(1000);
		oldIdx =nowIdx;
		$("#main").eq(nowIdx).stop().fadeIn(1000);*/
		evt.preventDefault();
	});

	$ani.mouseenter(function(){
		$ani.find("li").eq(0).stop().fadeOut(1000);
		$ani.find("li").eq(1).stop().fadeIn(1000);
		
	});
	$ani.mouseleave(function(){
		$ani.find("li").eq(1).hide();
		$ani.find("li").eq(0).show();
	});

	//배너 컨테이너 메뉴 클릭시 서브 메뉴로 이동
	var certificate = function(){
		$("section").hide();
		$("#certificate").show();
	};
	var seeking_work = function(){
		$("section").hide();
		$("#seeking_work").show();
	};
	var product = function(){
		$("section").hide();
		$("#product").show();
	};
	var job_honey_tip = function(){
		$("section").hide();
		$("#job_honey_tip").show();
	};
	var news = function(){
		$("section").hide();
		$("#news").show();
	};

	//상단바 메뉴 클릭시 이동
	$(".gnb>li:eq(0)>a").bind("click",function(evt){
		certificate();
		evt.preventDefault();
	});
	$(".gnb>li:eq(1)>a").bind("click",function(evt){
		seeking_work();
		evt.preventDefault();
	});
	$(".gnb>li:eq(2)>a").bind("click",function(evt){
		product();
		evt.preventDefault();
	});
	$(".gnb>li:eq(3)>a").bind("click",function(evt){
		news();
		evt.preventDefault();
	});
	$(".gnb>li:eq(4)>a").bind("click",function(evt){
		job_honey_tip();
		evt.preventDefault();
	});

	//컨테니어 내용 클릭시 이동
	$("#main>.containe>.certificate>a").bind("click",function(evt){
		certificate();
		evt.preventDefault();
	});
	$("#main>.containe>.job_search>a").bind("click",function(evt){
		seeking_work();
		evt.preventDefault();
	});
	$("#main>.containe>.product>a").bind("click",function(evt){
		product();
		evt.preventDefault();
	});
	$("#main>.containe>.product>a").bind("click",function(evt){
		product();
		evt.preventDefault();
	});
	$("#main>.containe>.news>a").bind("click",function(evt){
		news();
		evt.preventDefault();
	});

	//배너 클릭시 이동
	$("#screen>.slides>li:eq(1)>a").bind("click",function(evt){
		certificate();
		evt.preventDefault();
	});
	$("#screen>.slides>li:eq(2)>a").bind("click",function(){
		seeking_work();
		evt.preventDefault();
	});
	$("#screen>.slides>li:eq(3)>a").bind("click",function(){
		product();
		evt.preventDefault();
	});
	$("#screen>.slides>li:eq(4)>a").bind("click",function(){
		news();
		evt.preventDefault();
	});
	$("#screen>.slides>li:eq(5)>a").bind("click",function(){
		job_honey_tip();
		evt.preventDefault();
	});



});