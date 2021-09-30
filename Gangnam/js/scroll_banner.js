function activeScrollBanner(area, scrollItem, timeInfo, indicatorInfo, buttonInfo /*scrollTime, intervalTime, waitTime, createButton, selColor, unSelColor*/){
	if(timeInfo == undefined) timeInfo = {scrollTime:1000, intervalTime:2000, waitTime:5000}
	if(indicatorInfo == undefined) indicatorInfo = {showIndicator:false, selColor:'black', unSelColor:'gray'}
	if(buttonInfo == undefined) buttonInfo = {showButtons:false, target:'', hoverImg:'', leaveImg:''}
	
    var itemNum = $(scrollItem).length;
	// create indicator area //////////////////////////////////////////////////////////////////
	if(indicatorInfo.showIndicator){
		var bannerHTML = $(area).html();
		bannerHTML = bannerHTML+'<div class="scroll_button">';
		for(var i=0; i<itemNum; i++){
			bannerHTML = bannerHTML+'<span>■</span>'
		}
		$(area).html(bannerHTML);
		// indicator css 추가 필요
        $(".scroll_button").css({position:"absolute", left:"50%", transform:"translateX(-50%)", bottom:"20px"})
        $(".scroll_button > span").css({margin:"10px", color:indicatorInfo.unSelColor, cursor:"pointer", userSelect:"none"});
        $(".scroll_button > span").eq(0).css("color", indicatorInfo.selColor);
	}
	// create buttons //////////////////////////////////////////////////////////////////////////
	if(buttonInfo.showButtons){
		// html
		var sectionHTML = $(buttonInfo.target).html();
		sectionHTML = sectionHTML+'<img src="" alt="" id="left_btn"><img src="" alt="" id="right_btn">'
		$(buttonInfo.target).html(sectionHTML);
		// css
		$(area+' > #left_btn,'+area+' > #right_btn').css('position', 'absolute').css('top', '50%').css('transform', 'translateY(-50%)').css('cursor', 'pointer').css('user-select', 'none').css('z-index', '9');
		$(area+' > #left_btn').css('left', '20px')
		$(area+' > #right_btn').css('right', '20px')
		$(area+' > #left_btn,'+area+' > #right_btn').attr('src', buttonInfo.leaveImg)
		$(area+' > #right_btn').css('transform', 'translateY(-50%) rotate(180deg)')
	}
	////////////////////////////////////////////////////////////////////////////////////////////
	var idx = 0;
	$(scrollItem).css('left', '100%');
	$(scrollItem).eq(0).css('left', '0%');
	var scrollInterval = bannerScroll();
	var btnTimeout;
	var isAnimate = false;

	// event controls
	$('.scroll_button > span').click(function(){
		if(isAnimate) return;
		isAnimate = true;
		setTimeout(function(){
			isAnimate = false;
		}, timeInfo.scrollTime)
		clearTimeout(btnTimeout);
		clearInterval(scrollInterval);
		btnTimeout = setTimeout(function(){
			scrollInterval = bannerScroll();
		}, timeInfo.waitTime);

		var btnIdx  = $(this).index();
		if(btnIdx < idx){
			for(var i=btnIdx; i<=idx; i++){
				$(scrollItem).eq(i).css('left', 100*(i-idx)+"%").stop().animate({left:100*(i-btnIdx)+'%'}, timeInfo.scrollTime);
			}
		}else{
			for(var i=btnIdx; i>=idx; i--){
				$(scrollItem).eq(i).css('left', 100*(i-idx)+"%").stop().animate({left:100*(i-btnIdx)+'%'}, timeInfo.scrollTime);
			}
		}
		var descriptions = $(scrollItem).find('.description');
		for(var i=0; i<descriptions.length; i++){
			var numOfP = descriptions.eq(i).find('p').length;
			for(var j = 0; j<numOfP; j++){
				descriptions.eq(i).find('p').eq(j).stop().animate({opacity:0})
			}
		}
		idx = btnIdx;
		$('.scroll_button > span').css('color', indicatorInfo.unSelColor);
		$('.scroll_button > span').eq(idx).css('color', indicatorInfo.selColor);
		var desText = $(scrollItem).eq(idx).find('.description').find('p');
		for(var i=0; i<desText.length; i++){
			desText.eq(i).css('left', '100px').css('opacity', '0').delay(timeInfo.scrollTime*0.8+200*i).animate({left:'0px', opacity:1}, 500);
		}
	});
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	
	if(buttonInfo.showButtons){
		
		// event controls
		// hover
		$(area+' > #left_btn,'+area+' > #right_btn').hover(function(){
			$(this).attr('src', buttonInfo.hoverImg)
		}, function(){
			$(this).attr('src', buttonInfo.leaveImg)
		})
		// click
		$(area+' > #left_btn').click(function(){
			if(isAnimate) return;
			isAnimate = true;
			setTimeout(function(){
				isAnimate = false;
			}, timeInfo.scrollTime)
			clearTimeout(btnTimeout);
			clearInterval(scrollInterval);
			btnTimeout = setTimeout(function(){
				scrollInterval = bannerScroll();
			}, timeInfo.waitTime);

			$(scrollItem).eq(idx).stop().animate({left:'100%'}, timeInfo.scrollTime);
			var desText = $(scrollItem).eq(idx).find('.description').find('p');
			for(var i=0; i<desText.length; i++){
				desText.eq(i).delay(100*i).animate({left:'100px', opacity:0}, 500);
			}
			idx--;
			if(idx < 0) idx = itemNum-1;
			$(scrollItem).eq(idx).stop().css('left', '-100%').animate({left:'0%'}, timeInfo.scrollTime);
			desText = $(scrollItem).eq(idx).find('.description').find('p');
			for(var i=0; i < desText.length; i++){
				desText.eq(i).css('left', '-100px').css('opacity', '0').delay(timeInfo.scrollTime*0.8+200*i).animate({left:'0px', opacity:1}, 500);
			}
			$('.scroll_button > span').css('color', indicatorInfo.unSelColor);
			$('.scroll_button > span').eq(idx).css('color', indicatorInfo.selColor);
		})
		$(area+' > #right_btn').click(function(){
			if(isAnimate) return;
			isAnimate = true;
			setTimeout(function(){
				isAnimate = false;
			}, timeInfo.scrollTime)
			clearTimeout(btnTimeout);
			clearInterval(scrollInterval);
			btnTimeout = setTimeout(function(){
				scrollInterval = bannerScroll();
			}, timeInfo.waitTime);

			$(scrollItem).eq(idx).stop().animate({left:'-100%'}, timeInfo.scrollTime);
			var desText = $(scrollItem).eq(idx).find('.description').find('p');
			for(var i=0; i<desText.length; i++){
				desText.eq(i).delay(100*i).animate({left:'-100px', opacity:0}, 500);
			}
			idx++;
			if(idx >= itemNum) idx = 0;
			$(scrollItem).eq(idx).stop().css('left', '100%').animate({left:'0%'}, timeInfo.scrollTime);
			desText = $(scrollItem).eq(idx).find('.description').find('p');
			for(var i=0; i < desText.length; i++){
				desText.eq(i).css('left', '100px').css('opacity', '0').delay(timeInfo.scrollTime*0.8+200*i).animate({left:'0px', opacity:1}, 500);
			}
			$('.scroll_button > span').css('color', indicatorInfo.unSelColor);
			$('.scroll_button > span').eq(idx).css('color', indicatorInfo.selColor);
		})
	}
	///////////////////////////////////////////////////////////////////////////////////////
	

	var desText = $(scrollItem).eq(idx).find('.description').find('p');
	for(var i=0; i<desText.length; i++){
		desText.eq(i).css('left', '100px').css('opacity', '0').delay(200*i).animate({left:'0px', opacity:1}, 500);
	}

	function bannerScroll(){
		var interval = setInterval(function(){
			$(scrollItem).eq(idx).stop().animate({left:'-100%'}, timeInfo.scrollTime);
			var desText = $(scrollItem).eq(idx).find('.description').find('p');
			for(var i=0; i<desText.length; i++){
				desText.eq(i).delay(100*i).animate({left:'-100px', opacity:0}, 500);
			}
			idx++;
			if(idx >= itemNum) idx = 0;
			$(scrollItem).eq(idx).stop().css('left', '100%').animate({left:'0%'}, timeInfo.scrollTime);
			desText = $(scrollItem).eq(idx).find('.description').find('p');
			for(var i=0; i < desText.length; i++){
				desText.eq(i).css('left', '100px').css('opacity', '0').delay(timeInfo.scrollTime*0.8+200*i).animate({left:'0px', opacity:1}, 500);
			}
			$('.scroll_button > span').css('color', indicatorInfo.unSelColor);
			$('.scroll_button > span').eq(idx).css('color', indicatorInfo.selColor);
		}, timeInfo.intervalTime)
		return interval;
	}
}