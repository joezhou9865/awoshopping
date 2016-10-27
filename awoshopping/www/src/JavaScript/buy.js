$(function(){
	var numall = 0;
	var priall = 0;
	var pri = 0;
	var a = 0;

	function isAll(a){
		var i = a.length/6;
		var num = 0;
		for(var j = 0 ; j < i ; j++){
			num = num + parseInt(a[j*6+2]);
		}
		
		return num;
	}
	
	if ($.cookie("shopinfo")){
		$("#content_yes").css("display","block");
		$("#content_no").css("display","none");
		
		var info = $.cookie('shopinfo');
        var shopinfoArr = info.split(',');
        a = shopinfoArr.length/6;
        for(var i =0;i<shopinfoArr.length/6;i++){
        	
        	$(".none").clone().insertBefore($(".tr_info").eq(0));
        	$(".none").eq(0).removeClass("none");
        	numall += parseInt(shopinfoArr[i*6+2]);
        	priall += parseInt(shopinfoArr[i*6]*shopinfoArr[i*6+2]);
        	pri= priall;
      		$(".tr_info").eq(0).find(".shop_price").html(shopinfoArr[i*6]+".00");
      		$(".tr_info").eq(0).find(".shop_price_all").html(shopinfoArr[i*6]*shopinfoArr[i*6+2]);
      		$(".tr_info").eq(0).find(".shop_color").html("颜色："+shopinfoArr[i*6+1]+" 尺寸："+shopinfoArr[i*6+3]);
      		$(".tr_info").eq(0).find(".number").html(shopinfoArr[i*6+2]);
     		$(".tr_info").eq(0).find("img").attr({ src: shopinfoArr[i*6+4]});
      		$(".tr_info").eq(0).find(".shop_info").html(shopinfoArr[i*6+5]);
        }
		$(".allinfo").find("b").eq(0).html(numall);
		$(".allprice").find("b").html("￥"+priall);
		$(".allinfo").find("b").eq(1).html(priall);
	}
	else{
		$("#content_yes").css("display","none");
		$("#content_no").css("display","block");
	}
	
	$(".jian").each(function(i){
		$(".jian").eq(i).click(function(){
			var s =$(".jian").eq(i).next().html();
			if(s!=1){
				if($(this).parent().prev().prev().prev().find(".shop_check").is(":checked")){
					pri-=parseInt($(".jian").eq(i).parent().prev().find(".shop_price").html());
				}
				numall--;
				priall-=$(".jian").eq(i).parent().prev().find(".shop_price").html();
			}
			s--;
			if(s<=1){
				s=1;
			}
			$(".jian").eq(i).next().html(s);
			$(".jian").eq(i).parent().next().find(".shop_price_all").html($(".jian").eq(i).parent().prev().find(".shop_price").html()*s);
			$(".allinfo").find("b").eq(0).html(numall);
			$(".allprice").find("b").html("￥"+priall);
			$(".allinfo").find("b").eq(1).html(pri);
		})
	})
	$(".jia").each(function(i){
		$(".jia").eq(i).click(function(){
			var s =$(".jia").eq(i).prev().html();
			s++;
			numall++;
			priall+=parseInt($(".jia").eq(i).parent().prev().find(".shop_price").html()) ;
			if($(this).parent().prev().prev().prev().find(".shop_check").is(":checked")){
					pri+=parseInt($(".jian").eq(i).parent().prev().find(".shop_price").html());
				}
			$(".jia").eq(i).prev().html(s);
			$(".jia").eq(i).parent().next().find(".shop_price_all").html($(".jia").eq(i).parent().prev().find(".shop_price").html()*s);
			$(".allinfo").find("b").eq(0).html(numall);
			$(".allprice").find("b").html("￥"+priall);
			$(".allinfo").find("b").eq(1).html(pri);
		})
	})
	function have(){
		var s = -1;
	 	$(".none").each(function(i){ 
	 		s++;
		})
	 	if(s==a){
	 			return true;
	 	}
	 	return false;
	 }
    
	$(".del").each(function(i){
		$(".del").eq(i).click(function(){
			$(".del").eq(i).parent().parent().addClass("none");
			numall = numall - $(".del").eq(i).parent().prev().prev().find(".number").html();
			priall = priall - $(".del").eq(i).parent().prev().find(".shop_price_all").html();
			if($(this).parent().prev().prev().prev().prev().prev().find(".shop_check").is(":checked")){
					pri-=parseInt($(this).parent().prev().find(".shop_price_all").html());
				}
			$(".allprice").find("b").html("￥"+priall);
			$(".allinfo").find("b").eq(1).html(pri);
			$(".allinfo").find("b").eq(0).html(numall);
			if(have()){
				$("#content_yes").css("display","none");
				$("#content_no").css("display","block");
			}
	})
})	
var pri2 = pri;
var numall2 = numall;
$(".checkall").change(function() {
    if ($(this).is(":checked")) {
    	$(":checkbox").prop("checked", true);
    	 pri =0;
    	 $(".allprice").html("总额：<b>￥"+pri2+"</b>");
    	 numall = 0;
    	 $(".allinfo").find("b").eq(0).html(numall2);
    	$(".shop_price_all").each(function(i){
    		if(i<a){
    			pri+= parseInt($(".shop_price_all").eq(i).html());
    		}
    	})
    	$(".allinfo").find("b").eq(1).html(pri);
    }else {
        $(":checkbox").prop("checked", false);
        pri = 0;
        $(".allinfo").find("b").eq(1).html(pri);
        numall = 0;
        $(".allinfo").find("b").eq(0).html(numall);
    	$(".allprice").html("总额：<b>￥"+pri+"</b>");
    }	
})
	
	
	$(".shop_check").each(function(i){
		$(".shop_check").eq(i).change(function(){
			 if ($(this).is(":checked")) {
			 	
			 	pri+=parseInt($(this).parent().next().next().next().next().find(".shop_price_all").html());

				numall2 =pri / 59;
			 	$(".allinfo").find("b").eq(1).html(pri);
			 	$(".allprice").html("总额：<b>￥"+pri+"</b>");
			 	$(".allinfo").find("b").eq(0).html(numall2);
//			 	numall2 = numall;
			 }
			 else{
			 	pri-= parseInt($(this).parent().next().next().next().next().find(".shop_price_all").html());
			 	$(".allinfo").find("b").eq(1).html(pri);
			 	$(".allprice").html("总额：<b>￥"+pri+"</b>");
			 	numall3 = pri / 59;
			 	$(".allinfo").find("b").eq(0).html(numall3);
			 }
		})
	})
	 
})