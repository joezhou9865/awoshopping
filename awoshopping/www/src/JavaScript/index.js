 $(function(){
 	var login_flag = true;//用户是否登录
 	$(".click ul li:first").css({"background-color":"#f6f6f6"}).children().css({"color":"#555555"})
 	$(".click ul li").click(function(){
 		$(this).css({"background-color":"#f6f6f6"}).children().css({"color":"#555555"});
 		$(this).siblings().css({"background-color":"#262626"}).children().css({"color":"#ffffff"})
 	});
 	$("#stairs ul li").hover(function() {
				//鼠标滑上去
				$(this).addClass("hover");
			}, function() {
				//鼠标移开
				$(this).removeClass("hover");
			});
			 //鼠标点击
			var mark = 1;
			$("#stairs ul li").click(function() {
				mark = 2; //改变标记
				$("#stairs ul li").find("span").removeClass("active");
				$(this).find("span").addClass("active");
				//点击左边导航 然后跳到指定的楼层
				var $index = $(this).index(); //找到了对应的序列号
				//alert($index);
				var $top = $(".louti").eq($index).offset().top; //获取制定Louti与浏览器上面的距离
				//alert($top);
				$("body,html").animate({
					scrollTop: $top
				}, 500, function() {
					mark = 1;
				}); //浏览器滚动的高度
			});
			 //浏览器串口滚动事件
			$(window).scroll(function() {
				if (mark == 1) {
					var $t = $(this).scrollTop(); //获取滚动条滚动的高度
					//document.title = $t;
					if ($t > 943) { //通过滚动条来判断
						$("#stairs").fadeIn(); //淡入 导航慢慢显示出来
					} else {
						$("#stairs").fadeOut(); //淡出 导航慢慢消失
					}
					var $obj = $(".louti");
					//循环每一个Louti 然后找到最先满足条件的那个 Louti
					$obj.each(function() {
						var $index = $(this).index();
						//楼层与浏览器上面的高度
						var $height = $obj.eq($index).offset().top + $(this).height() / 2;
						//alert($height) 
//						document.title = $t + "--" + $height;
						if ($t < $height) {
							$("#stairs ul li").find("span").removeClass("active")
							$("#stairs ul li").eq($index).find("span").addClass("active");
							return false;
						}
					});
				}
			});
			
//	if ($.cookie("loginuser") && $.cookie("loginpass") && $.cookie("loginema")&&login_flag){
//		if ($.cookie("loginuser")!="null" && $.cookie("loginpass")!="null" && $.cookie("loginema")!="null") {
//			$("#log").html("<p class='l'></p><a href="+"src/html/enter.html"+">欢迎你<span>"+$.cookie("loginuser")+"</span></a>").find("span").css({"color":"#fe9501"});
//			$("#reg").html("<a></a>");
//	        $("#reg").find("a").html("退出登录").addClass("quit");
//		}
//  }	
//  $(".quit").click(function() {
//			console.log(1)
//	        $.cookie("loginuser",null,{ path: '/' }); 
//	        $.cookie("loginpass",null,{ path: '/' });
//	        $.cookie("loginema",null,{ path: '/' });
//	       	$("#log").html("<p class='l'>请</p><a href="+"src/html/enter.html"+"><span>登录<span></a>").find("a").css({"display":"inline-block"});
//	       	$("#reg").html("<a href=" + "html/login.html" +">免费注册</a>");
//	       	login_flag = false;
//	    })
		
 	
 })
