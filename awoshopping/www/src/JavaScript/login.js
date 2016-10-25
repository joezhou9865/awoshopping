$(function(){
	var email =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	$("form dl dd input:eq(0)").blur(function(){
		
	})
	function hint(){
		if(email.test($("form dl dd input:eq(0)").val())==false){
		$("form dl dd input:eq(0)").siblings().html("邮箱格式不正确请重新输入")
		}
	}
	
})
