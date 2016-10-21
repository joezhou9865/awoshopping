var loadIndexData = function(){
	$.get(
		"src/datajson/index.json",
		function(jsonData){
			$(jsonData).each(function(i, n){
				$("dl:eq(" + i + ") h3 a").html(n.title);
				});
			$(jsonData).each(function(i,n){
				$("dl:eq(" + i + ") .dt-span-a").css({background:"url("+n.imgsrc+")"});
			
			});
			$(jsonData).each(function(i,n){
				$("dl:eq(" + i + ") .dt-span-p b").html("<i>￥</i>"+n.price+"<i>00</i>");
			});
			$(jsonData).each(function(i,n){
				$("dl:eq(" + i + ") dd:eq(0) ").html("原价：<i>"+n.original+"</i>")
			});
			
			
		}
	)
}

loadIndexData();
