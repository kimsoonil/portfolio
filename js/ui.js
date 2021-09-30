//<![CDATA[
function cicelPath_(){
	var pathes = $('.circle-0').find('path');
		pathes.each(function( i, path ) {

		var total_length = path.getTotalLength();
		path.style.strokeDasharray = total_length + " " + total_length;
		path.style.strokeDashoffset = total_length;
		
		console.log(path.style.strokeDasharray);
		console.log(path.style.strokeDashoffset );

		$(path).animate({"strokeDashoffset" : 0}, 1500);
	});
};

function sectionSlogen_(){
	var target_1 = $(".type1"),
	target_2 = $(".type2"),
	target_3 = $(".scrollMouse");

	TweenLite.to(target_1, 1.5, {opacity:1, "top":"-100px", delay:1, ease:Power1.easeNone});
	TweenLite.to(target_2, 1.8, {opacity:1, "bottom":"0%", delay:1, ease:Power1.easeNone});
	TweenLite.to(target_3, 1.9, {opacity:1, "bottom":"10%", delay:1, ease:Power1.easeNone});
	for(var i = 1; i<=3; i++){
		var target_ = $(".circle-1-" + i);
		TweenLite.to(target_, 1.5, {opacity:1, "left":"926px", delay:0.2*i, ease:Power1.easeInOut});

	};
};

function moveicon(){
	$(".scrollMouse").find("img").animate({"top" : "24px"},500,"easeOutSine").animate({"top" : "30px"},500,"easeOutSine",function(){moveicon();});
};

function portfolio_(){
	$(".portfolio-List").bxSlider({
		slideWidth: 270,
		minSlides: 2,
		maxSlides: 5,
		moveSlides: 1,
		slideMargin: 10,
		controls: true
	});
};


$(document).ready(function(){
	skrollr.init({
		smoothScrolling: true,
		smoothScrollingDuration : 200,
		easing: {
				wtf: Math.random,
				inverted: function(p) {
				return 1 - p;
			}
		}
	});
	cicelPath_();
	sectionSlogen_();
	moveicon();
	portfolio_();
});

$(window).resize(function(){

});
$(window).load(function(){

});
//]]>