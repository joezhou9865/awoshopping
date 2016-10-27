$(function(){
	function isInArray(n,a){
		for(var i = 0;i <a.length; i++){
			if(i%3==0&&n == a[i]){
				return true;
			}
		}
		return false;
	}
	$("#log").click(function(){
		alert(1)
		var userinfo = $.cookie("userreg");
		var userinfoArr = userinfo.split(",");
		if(isInArray($("#email").val(),userinfoArr)){
			var index=$.inArray($("#email").val(),userinfoArr)
			if($("#password").val()!=userinfoArr[index+1]){
				$("#password").siblings("i").html("密码错误").css({"font-style":"normal"});
				$("#email").siblings("i").css({"display":"none"});
			}else{
				$.cookie("loginema",$("#email").val(),{
					expires:7,
					path:"/"
				});
				$.cookie("loginpass",userinfoArr[index+1],{
					expires:7,
					path:"/"
				});
				$.cookie("loginuser",userinfoArr[index+2],{
					expires:7,
					path:"/"
				});
				window.location.href = "/awoshopping/www/index.html";
			}
			
		}else{
			$("#email").siblings("i").html("用户名或密码不正确").css({"font-style":"normal"});
			$("#password").siblings("i").css({"display":"none"});
		}
	})
})
