$(function(){
	var login_flag = true;//用户是否登录
	$(".btn").click(function(){
		$(".btn .ads-more").css({"display":"block"});
	});
	$(".btn .ads-more button").click(function(event){
		  event.stopImmediatePropagation();
		$(".btn .ads-more").hide();
	});
	$(".ads-bot ul:eq(0) li").click(function(){
		var inner = $(this).children("a").html();
		$(".btn b").html(inner);
	});
	$(".ads-pinyin li").click(function(){
		$(this).siblings().removeClass("ads-active");
		$(this).addClass("ads-active");
		var index =  $(this).index();
		$(".ads-city p").eq(index).siblings().removeClass("city-active");
		$(".ads-city p").eq(index).addClass("city-active");
	});
	$(".ads-city p a").click(function(){
		var inner = $(this).html();
		$(".btn b").html(inner);
	});
	$("#service .service-three").click(function(event){
 		event.stopImmediatePropagation();
 		$("html,body").animate({
 			scrollTop:0
 		},200);
 	});
 	if ($.cookie("loginuser") && $.cookie("loginpass") && $.cookie("loginema")&&login_flag){
		if ($.cookie("loginuser")!="null" && $.cookie("loginpass")!="null" && $.cookie("loginema")!="null") {
			$("#log").html("<p class='l'></p><a href="+"#"+">欢迎你<span>"+$.cookie("loginuser")+"</span></a>").find("span").css({"color":"#fe9501"});
			$("#reg").html("<a></a>");
	        $("#reg").find("a").html("退出登录").addClass("quit");
		}
    }	
    $(".quit").click(function() {
			console.log(1)
	        $.cookie("loginuser",null,{ path: '/' }); 
	        $.cookie("loginpass",null,{ path: '/' });
	        $.cookie("loginema",null,{ path: '/' });
	       	$("#log").html("<p class='l'>请</p><a href="+"src/html/enter.html"+"><span>登录<span></a>").find("a").css({"display":"inline-block"});
	       	$("#reg").html("<a href=" + "html/login.html" +">免费注册</a>");
	       	login_flag = false;
	    })
    
})
