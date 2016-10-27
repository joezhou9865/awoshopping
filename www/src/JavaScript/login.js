$(function() {
	var email = /^[a-zA-Z]\w{5,17}@\w{2,6}.com$/;
	var reg1 = /^\w{6,16}$/;
	var reg2 = /^[a-zA-Z]{6,16}$/;
	var reg3 = /^[0-9]{6,16}$/;
	var reg4 = /^[_]{6,16}$/;
	var reg5 = /^[a-zA-Z0-9]{6,16}$/;
	var reg6 = /^[_0-9]{6,16}$/;
	var reg7 = /^[_a-zA-Z]{6,16}$/;
	var reg8 = /^\+86-1[3|5|7|8]\d{9}$/;
	var reg9 = /^[a-zA-Z0-9]{1,10}$/;
	var flag = [0, 0, 0, 0];
	var arruser = [];
	$("#email").blur(function() {
		if(email.test($(this).val()) == false) {
			$(this).siblings().css({
				"font-style": "normal"
			}).html("邮箱格式不正确");
			if($(this).val().length == 0) {
				$(this).siblings().css({
					"font-style": "normal"
				}).html("邮箱不能为空");
				flag[0] = 0;
			}else if($(this).val().length>0&&$(this).val().length<12||$(this).val().length>28){
				$(this).siblings().css({
					"font-style": "normal"
				}).html("邮箱长度错误");
				flag[0]=0;
			}
			flag[0] = 0;
		} else {
			$(this).siblings().css({
					"font-style": "normal"
				}).html("邮箱正确");
			flag[0] = 1;
		}
	});
	$("#username").blur(function() {
		var user = "";
		user = $("#username").val();
		if($.cookie("userreg")) {
			arruser = $.cookie("username").split(", ");
			if(isInArray(user, arruser)) {
				$("#username").siblings("i").html("该用户名已经存在").css({
					"font-style": "normal"
				})
				flag[1] = 0;
			} else {
				if($("#username").val().length > 0 && $("#username").val().length < 10) {
					if(reg9.test($("#username").val())) {
						$("#username").siblings("i").html("用户名可以使用").css({
							"font-style": "normal"
						});
						flag[1] = 1;
					} else {
						$("#username").siblings("i").html("用户名格式不正确").css({
							"font-style": "normal"
						});
						flag[1] = 0
					}
				} else if($("#username").val().length == 0) {
					$("#username").siblings("i").html("用户名不能为空").css({
						"font-style": "normal"
					});
					flag[1] = 0;
				} else if($("#username").val().length >= 10) {
					$("#username").siblings("i").html("用户名过长").css({
						"font-style": "normal"
					});
					flag[1] = 0;
				}
			}
		}
		else if($("#username").val().length > 0 && $("#username").val().length < 10) {
					if(reg9.test($("#username").val())) {
						$("#username").siblings("i").html("用户名可以使用").css({
							"font-style": "normal"
						});
						flag[1] = 1;
					} else {
						$("#username").siblings("i").html("用户名格式不正确").css({
							"font-style": "normal"
						});
						flag[1] = 0
					}
				} else if($("#username").val().length == 0) {
					$("#username").siblings("i").html("用户名不能为空").css({
						"font-style": "normal"
					});
					flag[1] = 0;
				} else if($("#username").val().length >= 10) {
					$("#username").siblings("i").html("用户名过长").css({
						"font-style": "normal"
					});
					flag[1] = 0;
				}
	});
	$("#password").blur(function() {
		if($("#password").val().length==0){
				$("#password").siblings('i').html("密码不能为空").css({
						"font-style": "normal"
					});
					flag[1]=0;
			}
		else if($("#password").val().length<6||$("#password").val().length>16){
			
			$("#password").siblings('i').html("请设置6-16位的密码").css({
						"font-style": "normal"
					});
			
		}else if(reg1.test($("#password").val())==false){
		
			$("#password").siblings('i').html("密码格式错误应为数字、字母、下划线").css({
						"font-style": "normal"
					});
		flag[1]=0;
		}else{
			flag[1]=1;
		}
		
	});
	$("#checkword").focus(function(){
		$("#checkword").siblings("i").html("请再次填写密码").css({
						"font-style": "normal"
				});
	})
	$("#checkword").blur(function() {
		$("#checkword").siblings("i").html("请再次填写密码").css({
						"font-style": "normal"
				});
		if($("#checkword").val()===$("#password").val()){
			$("#checkword").siblings("i").html("密码正确").css({
						"font-style": "normal"
				});
				flag[2]=1;
		}else{
			$("#checkword").siblings("i").html("密码错误，请重试").css({
						"font-style": "normal"
				});
				flag[2]=0;
		}
	});
	$("#checkbox").click(function(){
		if($("#checkbox").prop("checked")){
			$("#checkA").css({"color":"green"});
			flag[3]=1;
		}else{
			$("#checkA").css({"color":"red"});
			flag[3]=0;
		}
		
	})
	$("#submit").click(function(){
		var user ="";
		var pass ="";
		var email ="";
		if(flag[0]&&flag[1]&&flag[2]&&flag[3]%2){
			user = $("#username").val();
			pass = $("#password").val();
			email = $("#email").val();
			arruser.push(email);
			arruser.push(pass);
			arruser.push(user);
			$.cookie("userreg",arruser.toString(),{
				expires:7,
				path:'/'
			});
			$.cookie("loginuser",$("#username").val(),{
				expires:7,
				path:'/'
			});
			$.cookie("loginpass",$("#password").val(),{
				expires:7,
				path:'/'
			});
			$.cookie("loginema",$("#email").val(),{
				expires:7,
				path:'/'
			});
			alert("注册成功")
			window.location.href = "/awoshopping/www/index.html";
			$("#email").val("");
			$("#username").val("");
			$("#passwodr").val("");
			$("#checkword").val("");
			$("#checkbox").css({"checked":false})
		}else{
			$("#email").val("");
			$("#username").val("");
			$("#passwodr").val("");
			$("#checkword").val("");
			$("#email").siblings("i").html("请填写").css({"font-style":"normal"});
			$("#username").siblings("i").html("请填写").css({"font-style":"normal"});
			$("#password").siblings("i").html("请填写").css({"font-style":"normal"});
			$("#checkword").siblings("i").html("请填写").css({"font-style":"normal"});
		}
	})
	function isInArray(n,a){
		for(var i=0;i<a.length;i++){
			if(i%3==2&&n==a[i]){
				return true;
			}
		}
		return false;
	}
})