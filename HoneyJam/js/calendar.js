$(document).ready(function(){
	var date=new Date(); 
	var y=date.getFullYear(); 
	var m=date.getMonth(); 
	var d=date.getDate(); 
	function calender(){
		var theDate = new Date(y,m,1); 
		var theDay = theDate.getDay(); 
		var last = [31,28,31,30,31,30,31,31,30,31,30,31]
		var lastDate;
		if(y%4==0 && y%100!=0 || y%400==0){lastDate=last[1]=29;} //== last[1]=29;
		lastDate=last[m]; 
		var row =  Math.ceil((theDay+lastDate)/7);
		
		var calender="<table border='1' rules='groups' class='calender_con'>";
		calender+="<caption>"+y+"년"+(m+1)+"월 달력.</caption>";
		calender+="<thead><tr>";
		calender+="<th style='color:#ff5347;'>Sun</th>";
		calender+="<th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th>";
		calender+="<th style='color:#4d67fb;'>Sat</th>";
		calender+="</tr></thead>";
		
		var dNum=1;
		for(var i=1; i<=row; i++){ 
			calender+="<tr>";
				for(var k=1; k<=7; k++){
					if(i==1 && k<=theDay || dNum>lastDate){
						calender+="<td>&nbsp;</td>";
					}else if (d==dNum && m==6){
						calender+="<td style='color: black; background:#f1e3c4;'>"+dNum+"</td>";
						dNum++;
					}else {
						calender+="<td>"+dNum+"</td>";
						
						dNum++;
					}
				}
			calender+="</tr>";
		}
		calender+="</table>";
		
		$("#calender_con.show1").append(calender);
		if(m<9){
			$(".theYear").text(y+"."+"0"+(m+1));
		}else{
			$(".theYear").text(y+"."+(m+1));
		}

	}	//The end of calender func	
	
	calender();

	//calender click in
	$(".chekIn").on("click",function(){
		var cal = $('.calender_wrap');

		$(".calender_wrap.num1").css({"display":"block"});
		$(".calender_wrap.num1").css({"left":"38%"});
		$(this).append(cal);
		return false;
	});

	//calender click out
	$(".chekOut").on("click",function(){
		var cal = $('.calender_wrap');
		$(".calender_wrap.num1").css({"display":"block"});
		$(".calender_wrap.num1").css({"left":"52%"});
		$(this).append(cal);
		return false;
	});

	$("#calender_prev").on("click",function(){
		$("#calender_con").empty(calender);
		if(m<1){
			m=11;
			y--;
		}else{
			m--;
		}
		calender();
		$("td").on("click",function(){
			var blank = $(this).html(),
				txt = $(this).closest('li.calendar').find('.chekTxt'),
				cal = $(this).closest('li.calendar').find('.theYear').html();
			
			txt.html(cal + '.' + blank);
			if(blank=="&nbsp;"){
				return false;
			}
			$(this).css({"background":"#efefef","color":"#000"});
			$("td").not(this).css({"background":"#6799FF","color":"#bfbfbf","font-weight":"normal"});
		});
	}); // The end of #calender_prev

	$("#calender_next").on("click",function(){
		$("#calender_con").empty(calender);
			//console.log(m);
		if(m>=11){
			m=0;
			y++;
		}else{
			m++;
		}
		calender();
		$("td").on("click",function(){
			var blank = $(this).html(),
				txt = $(this).closest('li.calendar').find('.chekTxt'),
				cal = $(this).closest('li.calendar').find('.theYear').html();
			
			txt.html(cal + '.' + blank);
			if(blank=="&nbsp;"){
				return false;
			}
			$(this).css({"background":"#efefef","color":"#000"});
			$("td").not(this).css({"background":"#6799FF","color":"#bfbfbf","font-weight":"normal"});
		});
	}); // The end of #calender_next

	$("td").on("click",function(){
		var blank = $(this).html(),
			txt = $(this).closest('li.calendar').find('.chekTxt'),
			cal = $(this).closest('li.calendar').find('.theYear').html();
		
		txt.html(cal + '.' + blank);
		if(blank=="&nbsp;"){
			return false;
			blank=="0";
		}
		$(this).css({"background":"#efefef","color":"#000"});
		$("td").not(this).css({"background":"#6799FF","color":"#bfbfbf","font-weight":"normal"});
	});
	
	$(document).on('click', function(e) {
		if(!$('.reserve').has(e.target).length){
			$('.calender_wrap').css({'display':'none'});
		}		
	});


}); //The end of document ready func