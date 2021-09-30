$(document).ready(function(){
	/* 배경 변경 */
	var top = $('.section_wrap > div').eq(1).offset().top,
		topNum = parseInt(top);
		reserve = $('.reserve');
		height = reserve.outerHeight();
		

	$('.bg > div').css({'display' : 'none'});
	$('.bg > div').eq(0).css({'display' : 'block'});

	/* Room 클릭시*/
	var btnView = $('.room_btn .view'),
		pop = $('#room_infoPopup'),
		btnClose = pop.find('.close'),
		body = $('body');
		
		body.removeClass('on');
	btnView.on('click', function(){
		pop.css({'z-index' : '1900'}).stop().animate({'opacity':'1'},500, function(){
			body.removeClass('on');
			$(this).css({'overflow-y' : 'scroll'});
		});
		var title =$(this).parent().parent().find('Strong').text();
		$(".infoPopup_contents01>h3").html(title);
		$(".infoPopup_contents01 .title").html(title);

		var size = $(this).attr('href');
		$(".tab_con .tab1").css("text-indent",size+"px");
		
		return false;
	});
	
	btnClose.on('click', function(){
		$(this).closest(pop).css({'overflow-y' : 'hidden', 'z-index' : '-1', 'opacity' : '0'});
			body.addClass('on')
		return false;
	});

	$(" .reservation").on("click",function(){
		alert("예약이 완료 되었습니다");
		return false;
	});
	$(".enquiry").on("click",function(){
		alert("현재 인터넷 문의는 되지 않습니다. \n문의는 전화로 해주시길바랍니다.")
	});
	/* airline 클릭시*/
		var airbtnView = $('.airline_btn .view'),
		airpop = $('#airline_infoPopup'),
		airbtnClose =airpop.find('.close');
		
	airbtnView.on('click', function(){
		airpop.css({'z-index' : '1900'}).stop().animate({'opacity':'1'},500, function(){
			body.removeClass('on');
			$(this).css({'overflow-y' : 'scroll'});
		});
		
		var title =$(this).parent().parent().find('Strong').text();
		
		$("#airline_infoPopup .infoPopup_contents01>h3").html(title);
		$("#airline_infoPopup .infoPopup_contents01 .title").html(title);

		var size = $(this).attr('href');
		
		$("#airline_infoPopup .tab_con .tab1").css("text-indent",size+"px");
		
		return false;
	});
	
	airbtnClose.on('click', function(){

		$(this).closest(airpop).css({'overflow-y' : 'hidden', 'z-index' : '-1', 'opacity' : '0'});
			body.addClass('on')

		return false;
	});
	/* banner */
	var mySlider = $('#room_infoPopup .conLeft_img').bxSlider({
		mode:'horizontal',
		speed:1500,
		pager:true,
		moveSlides:1,
		minSlides:1,
		maxSlides:1,
		auto:true,
		autoHover:true,
		controls:false
	});

	$('#room_infoPopup .prevBtn').on("click",function(){
		
		mySlider.goToPrevSlide();
		return false;
	});
	$('#room_infoPopup .nextBtn').on("click",function(){
		
		mySlider.goToNextSlide();
		return false;
	});
	var Slider = $('#airline_infoPopup .conLeft_img').bxSlider({
		mode:'horizontal',
		speed:1500,
		pager:true,
		moveSlides:1,
		minSlides:1,
		maxSlides:1,
		auto:true,
		autoHover:true,
		controls:false
	});

	$('#airline_infoPopup .prevBtn').on("click",function(){
		
		Slider.goToPrevSlide();
		return false;
	});
	$('#airline_infoPopup .nextBtn').on("click",function(){
		
		Slider.goToNextSlide();
		return false;
	});
});

$(function (){
		
	/* main card 선택시 */
	var btnPage = $('.header_right .Hotel img'),
		con = $('#container .article'),
		util = $('#container .main_topPopup'),
		menu = $('#container .article_tab'),
		Logo=$('h1 a'),
		btnMenu = $('.header_left .menu_btn'),
		btnPage2 = $('.header_right .Airline img'),
		con2 = $('#container2 .article'),
		util2 = $('#container2 .main_topPopup'),
		menu2 = $('#container2 .article_tab');

	var thisWin = $(window).outerWidth();

	btnPage.on('click', function() {
			btnMenu.show();
			menu.css({'display':'block'}).stop().animate({'left' : '35%'}, 500);
			con.css({'display':'block'}).stop().animate({'left' : '33%'}, 500, function() {
				util.css({'display':'block'}).stop().animate({'left' : '33%'}, 500);
					$('body').addClass('on');
			});
			menu2.css({'display':'none'})
			con2.css({'display':'none'})
			 $("html,body").stop().animate({
	        		    "scrollTop": 0
	        		});	
			$('.bg > div').stop().fadeOut(400);
			$('.bg > div').eq(1).stop().fadeIn(400);
		return false;

	});
	btnPage2.on('click', function() {
			btnMenu.show();
			menu2.css({'display':'block'}).stop().animate({'left' : '35%'}, 500);
			con2.css({'display':'block'}).stop().animate({'left' : '33%'}, 500, function() {
			util2.css({'display':'block'}).stop().animate({'left' : '33%'}, 500);
					$('body').addClass('on');
			});
			menu.css({'display':'none'})
			con.css({'display':'none'})
			 $("html,body").stop().animate({
			            "scrollTop": 0
			        });
			$('.bg > div').stop().fadeOut(400);
			$('.bg > div').eq(3).stop().fadeIn(400);
		
		return false;
	});

	btnMenu.on('click', function() {
		$(this).removeClass('on');
		$('body').removeClass('on');
		util.stop().animate({'left' : '300%'}, 500, function() {
			con.stop().animate({'left' : '300%'}, 500);
			menu.stop().animate({'left' : '300%'}, 500, function(){
				$(this).css({'display':'none'});
			});
			$(this).css({'display':'none'});
		});	
		$(this).removeClass('on');
		$('body').removeClass('on');
		util2.stop().animate({'left' : '300%'}, 500, function() {
			con2.stop().animate({'left' : '300%'}, 500);
			menu2.stop().animate({'left' : '300%'}, 500, function(){
				$(this).css({'display':'none'});
			});
			$(this).css({'display':'none'});
		});	
		$('.bg > div').stop().fadeOut(400);
		$('.bg > div').eq(0).stop().fadeIn(600);	
		btnMenu.hide();
		return false;
	});

	Logo.on('click', function() {	
		$(this).removeClass('on');
		$('body').removeClass('on');
		util.stop().animate({'left' : '300%'}, 500, function() {
			con.stop().animate({'left' : '300%'}, 500);
			menu.stop().animate({'left' : '300%'}, 500, function(){
				$(this).css({'display':'none'});
			});
			$(this).css({'display':'none'});
		});	
		$(this).removeClass('on');
		$('body').removeClass('on');
		util2.stop().animate({'left' : '300%'}, 500, function() {
			con2.stop().animate({'left' : '300%'}, 500);
			menu2.stop().animate({'left' : '300%'}, 500, function(){
				$(this).css({'display':'none'});
			});
			$(this).css({'display':'none'});
		});	
		$('.bg > div').stop().fadeOut(400);
		$('.bg > div').eq(0).stop().fadeIn(600);	
		btnMenu.hide();
		return false;
	});

	/* top 클릭시 */
	$(".article .top").on("click",function(){
		$("html,body").animate({"scrollTop":"0"},350);
		return false;
	});
	
	$(".infoPopup_conLeft dl dt").on("click",function(){
		$(".infoPopup_conLeft dl dt").next().removeClass('on');
		$(".infoPopup_conLeft dl dt").children().css("color","#696969");
		$(this).next().addClass('on');
		$(this).children().css("color","#6799FF");
	
	});

	/*login*/
	$(".loginpage").on("click",function(){
		$("#shadow").stop().animate({"top":0},800);
		$("#login").stop().animate({"top":"50%"},1000);
		return false;
	})
	$(".memberpage").on("click",function(){
		$("#shadow").stop().animate({"top":0},800);
		$("#member").stop().animate({"top":"50%"},1000);
		return false;
	})
	    $(document).keyup(function(evt) {

        var keycode = evt.which;

        if (keycode == 27) {
    	     $("#shadow").stop().animate({"top":"-100%"},800);
	     $("#login").stop().animate({"top":"-150%"},400);
	     $("#member").stop().animate({"top":"-200%"},400);
        }
    });
	      $("#login_ok").on("click",function(){
		alert(" 아이디 혹은 비밀번호를 잘못 입력하셨거나 \n 등록되지 않은 아이디 입니다. ");
		return false;
	});
	      $(".check").on("click",function(){
	      	var input = $(".smit_form .smit_elem input").val();
	      	if(input==""){
	      		alert("정보를 모두 입력한 후 클릭해 주세요")
	      	}else{
	      		alert("회원가입이 완료되었습니다.")
	      		  $("#shadow").stop().animate({"top":"-100%"},800);
	    		 $("#member").stop().animate({"top":"-200%"},400);
	      	}
	      })
	      $(".contract").on("click",function(){
	      	  $("#shadow").stop().animate({"top":"-100%"},800);
				$("#login").stop().animate({"top":"-150%"},400);
	    	 $("#member").stop().animate({"top":"-200%"},400);
	      });
		  $("#emEmail").on("click",function(){
			console.log($("#emEmail").val())
		$("#emDomain").attr('value',$("#emEmail").val());
		  })
});