/*intro부분*/
$(function(){
	//alert("연결확인");

	var introbtn=$(".intro_btn");
	
function swing() {
        introbtn.animate({
        	'top':'73%'
        },600).animate({
        	'top':'75%'
        },600, 'swing');
    };

for(var i=0;i<999;i++){
    swing();
}
	// $("#wrap").hide()
    $(".intro_img").on("click",function(){
    	$("#intro").stop().animate({"top":"-200%"},2000)
                        //$("#intro").stop().fadeOut(2000);
                    $("#wrap").show();
    });
$(function(){
    $('ul.gnb>li>a').on("mouseenter",function(){
        $(this).next().stop().slideDown().parent().siblings('li').children('ul').stop().slideUp();
    });
   $('ul.gnb').on("mouseleave",function(){
        $('ul.sub').stop().slideUp();
    });
   });
});
/*move부분*/
$(function(){
     var $now = $(".now_movie");
    var $schedule = $(".schedule_movie");
    var $Screenbtn = $(".screen>li>a");

    $Screenbtn.parent().eq(0).on("click", function(evt) {
        $now.show();
        $now.find('ul').css({'left':'200%'}).stop().animate({'left':'50%'},600)
        $schedule.hide();
        $(this).addClass("on").siblings().removeClass("on")
        evt.preventDefault();
    });
    $Screenbtn.parent().eq(1).on("click", function(evt) {
        $now.hide();
        $schedule.show();
        $schedule.find('ul').css({'left':'200%'}).stop().animate({'left':'50%'},600)
        $(this).addClass("on").siblings().removeClass("on")
        evt.preventDefault();
    });

    $now.find(".movie>li").on({
        "mouseenter": function() {
            nowIdx = $now.find(".movie>li").index(this);
            $now.find("p").hide().eq(nowIdx).show();
        },
        "mouseleave": function() {
            $now.find("p").hide();
        }
    });
    $schedule.find(".movie>li").on({
        "mouseenter": function() {
            nowIdx = $schedule.find(".movie>li").index(this);
            $schedule.find("p").hide().eq(nowIdx).show();
        },
        "mouseleave": function() {
            $schedule.find("p").hide();
        }
    });
       for (var i = 0; i < 8; i++) {
        $(".now_movie>ul>li").eq(i).css("background-image", "url(images/now_movie" + (i + 1) + ".jpg)")
        $(".now_movie>ul>li").eq(i * 4).css("margin-left", 0);
        $(".now_movie>ul>li").eq(i * 4 + 3).css("margin-right", 0);
        $(".schedule_movie>ul>li").eq(i).css("background-image", "url(images/schedule_movie" + (i + 1) + ".jpg)")
        $(".schedule_movie>ul>li").eq(i * 4).css("margin-left", 0);
        $(".schedule_movie>ul>li").eq(i * 4 + 3).css("margin-right", 0);
        for (var k = 0; k < 5; k++) {
            $(".now_movie>ul>li").eq(i).find("ol.steelcut>li").eq(k).css("background-image", "url(images/now_movie" + (i + 1) + "_steelcut" + (k + 1) + ".jpg)")
            $(".schedule_movie>ul>li").eq(i).find("ol.steelcut>li").eq(k).css("background-image", "url(images/schedule_movie" + (i + 1) + "_steelcut" + (k + 1) + ".jpg)")
        };
    };
    var $lightbox = $("#movie>.shadow>.lightbox");

});
//라이트박스
$(function() {
    var $movie = $("#movie ul>li>p>a.preview");
    var $lightbox = $("#movie>.shadow>.lightbox");

    $movie.on("click", function(evt) {
        var MoveSrc = $(this).attr("href");
        $("iframe").attr("src", MoveSrc)
        $lightbox.show();
        $lightbox.parent().show();

        evt.preventDefault();
    });

    $(".clse").on("click", function(evt) {
        $lightbox.hide();
        $lightbox.parent().hide()
        evt.preventDefault();
    });
    $(document).keyup(function(evt) {

        var keycode = evt.which;

        if (keycode == 27) {
            $lightbox.hide();
            $lightbox.parent().hide();
        }
    });

    $(".play").on("click", function(evt) {
        $("video").attr("autoplay", "autoplay");
        evt.preventDefault();
    });

});

//스틸컷
$(function() {
    $steelcut = $("#movie ul>li>ol.steelcut>li>a");

    $steelcut.on("click", function(evt) {
        var SteelImg = $(this).parent().attr("style")
        console.log(SteelImg);
        $(".steelcut_shadow>.steelcut_img").attr("style", SteelImg);
        $(".steelcut_shadow").show();
        evt.preventDefault();
    });
    $(".steelcut_clse").on("click", function(evt) {
        $(".steelcut_shadow").hide();
        evt.preventDefault();
    });

    $(document).keyup(function(evt) {

        var keycode = evt.which;

        if (keycode == 27) {

            $(".steelcut_shadow").hide();

        }
    });

});
//map
$(function(){
    window.onload = function(){
    var mymap = document.getElementById('map');   
      var latlng = new google.maps.LatLng(37.5229500,127.0219927);
    var gmap = new google.maps.Map(
        mymap, {
        zoom: 16,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    // ICON pointer
    var marker = new google.maps.Marker({
        position: latlng,
        map: gmap,
        title:'이봄씨어터'
    });
};
 // event
    var ot = $('.screening_wrap').offset().top+1000;

    $(window).scroll(function() {
        var st = $(window).scrollTop();
        if (st > ot) {
            $('.vip, .marvel, .card, .payco, .culture,.facebook,.family,.nuri').addClass('on');
        } else {
            $('.vip, .marvel, .card, .payco, .culture,.facebook,.family,.nuri').removeClass('on');
        }
    });
   

});
//screening
$(function(){

	$(".bxslider li").on("click",function(){
		$(this).addClass('on').siblings().removeClass("on");
	});	
    $(".bx-prev").on("click",function(){
        
        $(".bxslider").stop().animate({
            left:0
        },600);
        return false;
    });
      $(".bx-next").on("click",function(){
        
        $(".bxslider").stop().animate({
            left:'-53%'
        },600);
        return false;
    });
});
//스크롤
$(function(){
	 var $mnu = $(".gnb>li");
    var $section = $("section");
	var arrSectTop = [];
	 $section.each(function(idx, element) {
        arrSectTop[idx] = $(this).offset().top;
    });
     $(window).on("scroll", function() {
        var scrollTop = $(this).scrollTop();
    });
	 $mnu.on("click", function(evt) {
        var nowIdx = $mnu.index(this);
        $("html,body").stop().animate({
            "scrollTop": arrSectTop[nowIdx] 
        });
        
        evt.preventDefault()
    });
});

//배너

$(function(){
	var $slides = $(".slider_banner>li");
	var $prev = $("#slide>.prev");
	var $next = $("#slide>.next");
	var nowIdx = 0;
	var oldIdx = nowIdx;



    var move = function() {

        $slides.eq(oldIdx).stop().fadeOut(1000);
        oldIdx = nowIdx;

        $slides.eq(nowIdx).stop().fadeIn(1000);


    }	
    setInterval(function(){
		if(nowIdx>1){
			nowIdx=0;
		}
		else{
			nowIdx++
		};
         move();
	},8000);
	 $prev.on("click", function(evt) {
        if(nowIdx<1){
			nowIdx=2;
		}
		else{
			nowIdx--
		};
        move();
		$('.iframe').hide()
		console.log(nowIdx);
        evt.preventDefault();
    });
    $next.on("click", function(evt) {
        if(nowIdx>1){
			nowIdx=0;
		}
		else{
			nowIdx++
		};
		$('.iframe').hide()
        move();
		console.log(nowIdx);
        evt.preventDefault();
    });

});
$(function(){
	
	$(".timeline li a").on("click", function(){
		
		$(this).addClass('on').parent().siblings().find("a").removeClass("on");
		$(this).parent().parent().parent().siblings().find("a").removeClass("on");
		return false;
	})
})