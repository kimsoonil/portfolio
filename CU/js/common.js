$(function(){
	//alert("0")
	$('.ko_product').hide();
	$(".eng").on("click",function(){
		$('.en').show();
		$('.ko').hide();
		$('.ko_product').hide();
		return false;
	})	
	$(".kor").on("click",function(){
		$('.ko').show();
		$('.en').hide();
		$('.ko_product').show();
		return false;
	});// 한영 변경

	var $mnu = $(".navbar-nav>li>div");//메뉴
	var nowIdx =0;
	var arrTopVal=[];//아티클의 top 

	//광고 배너의 top값을 배열에 저장
	
	$("section").each(function(){
		arrTopVal.push($(this).offset().top);
	});
	
	var pageAni = function(topVal){
		$("html,body").stop().animate({
			"scrollTop": topVal
		},400);

	};
	$mnu.on("click",function(evt){
		nowIdx = $mnu.index(this);//인덱스 번호 구함

		pageAni(arrTopVal[nowIdx+1]-30);
		
		evt.preventDefault();
	});
	$(window).on("scroll",function(){
		var scrollTop = $(window).scrollTop();

	});
	
})