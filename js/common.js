$(function(){
	let $pag=$(".bg_7 .pagination ol>li>a");
	let $screen=$(".portfolio .screen");
	let $body=$("body");
	let nowIndx=0;
	let oldIndx=nowIndx;
	let slide=function(nowIndx){
		
		$pag.eq(nowIndx).parent().addClass('on').siblings().removeClass('on');
		$screen.children('li').eq(oldIndx).css({'left':'0%','z-index':'100'}).stop().animate({'left':"-100%"})
		$screen.children('li').eq(nowIndx).css({'left':'100%','z-index':'90'}).stop().animate({'left':0})
		oldIndx=nowIndx;	
		
		
		if($pag.eq(0).parent().hasClass('on')){
			$('.usb').css({transform:'translateX(0%) rotate(360deg)',
			        transition : 'transform .8s',
			        'opacity':1
			})
			$('.eraser').css({transform:'translateX(0%) rotate(360deg)',
			        transition : 'transform .8s',
			        'opacity':1
			})
			$('.pencil').css({transform:'translateX(0%) rotate(360deg)',
			        transition : 'transform .8s',
			        'opacity':1
			})
			$('.plant').css({transform:'translateX(0%) rotate(360deg)',
			        transition : 'transform .8s',
			        'opacity':1
			})
			
			$('.bgcolor').css({'left':'100%','background-color':'#B2CCFF','opacity':0}).stop().animate({left:0,'opacity':1})
			$('.bg_7').css('z-index','-2');
		
		}else{
			$(".usb").css({transform:'translateX(100%) rotate(0deg)',
			        transition : 'transform .5s',
			        'opacity':0
			})
			$(".eraser").css({transform:'translateX(100%) rotate(0deg)',
			        transition : 'transform .5s',
			        'opacity':0
			})
			$(".pencil").css({transform:'translateX(100%) rotate(0deg)',
			        transition : 'transform .5s',
			        'opacity':0
			})
			$(".plant").css({transform:'translateX(100%) rotate(0deg)',
			        transition : 'transform .5s',
			        'opacity':0
			})
			
			}
		if($pag.eq(1).parent().hasClass('on')){
			$('.paper').css({transform:'translateX(0%) rotate(360deg)',
			        transition : 'transform .8s',
			        'opacity':1
			})
			$('.lamp').css({transform:'translateX(0%) rotate(360deg)',
			        transition : 'transform .8s',
			        'opacity':1
			})
			$('.glasses').css({transform:'translateX(0%) rotate(360deg)',
			        transition : 'transform .8s',
			        'opacity':1
			})
			$('.bgcolor').css({'left':'100%','background-color':'#86E57F','opacity':0}).stop().animate({'left':0,'opacity':1})
			$('.bg_7').css('z-index','-2');
		}else{
			$(".paper").css({transform:'translateX(100%) rotate(0deg)',
			        transition : 'transform .5s',
			        'opacity':0
			})
			$(".lamp").css({transform:'translateX(100%) rotate(0deg)',
			        transition : 'transform .5s',
			        'opacity':0
			})
			$(".glasses").css({transform:'translateX(100%) rotate(0deg)',
			        transition : 'transform .5s',
			        'opacity':0
			})
		}
		if($pag.eq(2).parent().hasClass('on')){
			$('.headphones').css({transform:'translateX(0%) rotate(360deg)',
			        transition : 'transform .8s',
			        'opacity':1
			})
			$('.plant').css({transform:'translateX(0%) rotate(360deg)',
			        transition : 'transform .8s',
			        'opacity':1
			})
			$('.bgcolor').css({'left':'100%','background-color':'#DE4F4F','opacity':0}).stop().animate({left:0,'opacity':1})
			$('.bg_7').css('z-index','-2');
		}else{
			$(".headphones").css({transform:'translateX(100%) rotate(0deg)',
			        transition : 'transform .5s',
			        'opacity':0
			})
			$(".plant").css({transform:'translateX(100%) rotate(0deg)',
			        transition : 'transform .5s',
			        'opacity':0
			})
			}
		if($pag.eq(3).parent().hasClass('on')){
			$('.coffee_cup').css({transform:'translateX(0%) rotate(360deg)',
			        transition : 'transform .8s',
			        'opacity':1
			})
			$('.ball').css({transform:'translateX(0%) rotate(360deg)',
			        transition : 'transform .8s',
			        'opacity':1
			})
			
			$('.bgcolor').css({'left':'100%','background-color':'#E5D85C','opacity':0}).stop().animate({left:0,'opacity':1})
			$('.bg_7').css('z-index','-2');
		}else{
			$(".coffee_cup").css({transform:'translateX(100%) rotate(0deg)',
			        transition : 'transform .5s',
			        'opacity':0
			})
			$(".ball").css({transform:'translateX(100%) rotate(0deg)',
			        transition : 'transform .5s',
			        'opacity':0
			})
			}
		if($pag.eq(4).parent().hasClass('on')){
			$('.headphones').css({transform:'translateX(0%) rotate(360deg)',
			        transition : 'transform .8s',
			        'opacity':1
			})
			$('.glasses').css({transform:'translateX(0%) rotate(360deg)',
			        transition : 'transform .8s',
			        'opacity':1
			})
			$('.usb').css({transform:'translateX(0%) rotate(360deg)',
			        transition : 'transform .8s',
			        'opacity':1
			})
			$('.bgcolor').css({'left':'100%','background-color':'#8041D9','opacity':0}).stop().animate({'left':0,'opacity':1})
			$('.bg_7').css('z-index','-2');
		}
	}	
	$pag.on("click",function(){
		nowIndx=$pag.index(this);
		
		slide(nowIndx);
		return false;
	});
	setInterval(function(){
		let terval=0						
		if($pag.eq(0).parent().hasClass('on')){
			$pag.eq(1).parent().addClass('on').siblings().removeClass('on');
			terval=1;
			slide(terval);
		}
		else if($pag.eq(1).parent().hasClass('on')){
			$pag.eq(2).parent().addClass('on').siblings().removeClass('on');
			terval=2;
			slide(terval);
		}
		else if($pag.eq(2).parent().hasClass('on')){
			$pag.eq(3).parent().addClass('on').siblings().removeClass('on');
			terval=3;
			slide(terval);
		}
		else if($pag.eq(3).parent().hasClass('on')){
			$pag.eq(4).parent().addClass('on').siblings().removeClass('on');
			terval=4;
			slide(terval);
		}else if($pag.eq(4).parent().hasClass('on')){
			$pag.eq(0).parent().addClass('on').siblings().removeClass('on');
			terval=0;
			slide(terval);
		}				
		
	},4000)
		let subimg0 =$(".subimg0>li");
		let subimg1 =$(".subimg1>li");
		let subimg2 =$(".subimg2>li");
		let subimg3 =$(".subimg3>li");
		let subimg4 =$(".subimg4>li");

		$screen.find('li').eq(0).on({
			"mouseenter": function() {
				subimg0.eq(0).stop().animate({'opacity':1,left:'530px',top:'-175px'});
				subimg0.eq(1).stop().animate({'opacity':1,left:'580px',top:'100px'});
				subimg0.eq(2).stop().animate({'opacity':1,left:'430px',top:'380px'});
				subimg0.eq(3).stop().animate({'opacity':1,left:'-500px',top:'-175px'});
				subimg0.eq(4).stop().animate({'opacity':1,left:'-550px',top:'100px'});
				subimg0.eq(5).stop().animate({'opacity':1,left:'-450px',top:'380px'});
			},
			"mouseleave": function() {
				  subimg0.stop().animate({'opacity':0,left:'0',top:'0'});
			}
		});
		$screen.find('li').eq(1).on({
			"mouseenter": function() {
				subimg1.eq(0).stop().animate({'opacity':1,left:'530px',top:'-175px'});
				subimg1.eq(1).stop().animate({'opacity':1,left:'580px',top:'100px'});
				subimg1.eq(2).stop().animate({'opacity':1,left:'430px',top:'380px'});
				subimg1.eq(3).stop().animate({'opacity':1,left:'-500px',top:'-175px'});
				subimg1.eq(4).stop().animate({'opacity':1,left:'-550px',top:'100px'});
				subimg1.eq(5).stop().animate({'opacity':1,left:'-450px',top:'380px'});
			},
			"mouseleave": function() {
				  subimg1.stop().animate({'opacity':0,left:'0',top:'0'});
			}
		});
		$screen.find('li').eq(2).on({
			"mouseenter": function() {
				subimg2.eq(0).stop().animate({'opacity':1,left:'530px',top:'-175px'});
				subimg2.eq(1).stop().animate({'opacity':1,left:'580px',top:'100px'});
				subimg2.eq(2).stop().animate({'opacity':1,left:'430px',top:'380px'});
				subimg2.eq(3).stop().animate({'opacity':1,left:'-500px',top:'-175px'});
				subimg2.eq(4).stop().animate({'opacity':1,left:'-550px',top:'100px'});
				subimg2.eq(5).stop().animate({'opacity':1,left:'-450px',top:'380px'});
			},
			"mouseleave": function() {
				  subimg2.stop().animate({'opacity':0,left:'0',top:'0'});
			}
		});
		$screen.find('li').eq(3).on({
			"mouseenter": function() {
				subimg3.eq(0).stop().animate({'opacity':1,left:'530px',top:'-175px'});
				subimg3.eq(1).stop().animate({'opacity':1,left:'580px',top:'100px'});
				subimg3.eq(2).stop().animate({'opacity':1,left:'430px',top:'380px'});
				subimg3.eq(3).stop().animate({'opacity':1,left:'-500px',top:'-175px'});
				subimg3.eq(4).stop().animate({'opacity':1,left:'-550px',top:'100px'});
				subimg3.eq(5).stop().animate({'opacity':1,left:'-450px',top:'380px'});
			},
			"mouseleave": function() {
				  subimg3.stop().animate({'opacity':0,left:'0',top:'0'});
			}
		});
		$screen.find('li').eq(4).on({
			"mouseenter": function() {
				subimg4.eq(0).stop().animate({'opacity':1,left:'530px',top:'-175px'});
				subimg4.eq(1).stop().animate({'opacity':1,left:'580px',top:'100px'});
				subimg4.eq(2).stop().animate({'opacity':1,left:'430px',top:'380px'});
				subimg4.eq(3).stop().animate({'opacity':1,left:'-500px',top:'-175px'});
				subimg4.eq(4).stop().animate({'opacity':1,left:'-550px',top:'100px'});
				subimg4.eq(5).stop().animate({'opacity':1,left:'-450px',top:'380px'});
			},
			"mouseleave": function() {
				  subimg4.stop().animate({'opacity':0,left:'0',top:'0'});
			}
		});
		
	
});