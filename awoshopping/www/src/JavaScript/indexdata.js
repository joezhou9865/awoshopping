var loadIndexData = function(){
	$.get(
		"src/datajson/index.json",
		function(jsonData){
			$(jsonData).each(function(i, n){
				$(".dl-con:eq(" + i + ") h3 a").html(n.title);
				});
			$(jsonData).each(function(i,n){
				$(".dl-con:eq(" + i + ") .dt-span-a").css({background:"url("+n.imgsrc+")"});
			
			});
			$(jsonData).each(function(i,n){
				$(".dl-con:eq(" + i + ") .dt-span-p b").html("<i>￥</i>"+n.price+"<i>00</i>");
			});
			$(jsonData).each(function(i,n){
				$(".floor-dd:eq(" + i + ") p:eq(0) ").html("原价：<i>"+n.original+"</i>")
			});
			$(jsonData).each(function(i,n){
				$(".floor-dd:eq(" + i + ") p:eq(1) ").html("折扣：<b>"+n.discount+"</b>折")
			});
			$(jsonData).each(function(i,n){
				$(".floor-dd:eq(" + i + ") p:eq(2) ").html("<b>"+n.count+"</b>人已购买")
			});
			
		}
	)
}

loadIndexData();
