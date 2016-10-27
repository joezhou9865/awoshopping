$(function(){
	var arrshop = [];
	$("#add").click(function(){
		$("#buy-car").css({"display":"block"});
	});
	$("#buy-car h3 em").click(function(event){
		event.stopImmediatePropagation();
		$("#buy-car").hide();
	});
	$("#shopping-cart-p1 b").click(function(){
		$(this).siblings("b").removeClass("red");
		$(this).addClass("red");
		var inner = $(this).html();
		$("#p4-spn1").html(inner);
		
	});
	$("#shopping-cart-p2 b").click(function(){
		$(this).siblings("b").removeClass("red")
		$(this).addClass("red");
		var inner = $(this).html();
		$("#p4-spn2").html(inner);
		
	});
	$("#cut").click(function(){
		var count = Number($(".count").html());
		if(count>1){
			count--;
		}
		$(".count").html(count);
		$("#p4-spn3").html(count+"件");
	});
	$("#up").click(function(){
		var count = Number($(".count").html());
		count++;
		$(".count").html(count);
		$("#p4-spn3").html(count+"件");
	})
	function isAll(a){
		var i = a.length/6;
		var num = 0;
		var b = [];
		for(var j = 0 ; j < i ; j++){
			num = num + parseInt(a[j*6+2]);
		}
		
		b.push(num);
		b.push(i);
		return b;
	}
	
	function isInArray(c,s,m,a) {
        for (var i = 0; i < a.length; i++) {
            if (m == a[i]&&c == a[i-3]&&s == a[i-1]) {
                return true;
            }
            else
            	continue
        }
        return false;
    }
	function isMaxNum(c,s,m,n,a){
		for(var i = 0; i<a.length; i++){
			if(m == a[i]&&c == a[i-3]&&s == a[i-1]){
				a[i-2] = parseInt(a[i-2]);
				n = parseInt(n);
				a[i-2] += n;
				a[i-2] = a[i-2].toString();
			}
		}
	}
	$("#shopping-cart-p5").click(function(){
		$("#shopping-cart-p6").css({"display":"block"});
		var price = '';
			var color = '';
	 		var num = '';
			var size = '';
			var imgsrc = '';
			var info = '';
				
			price = $('#price').html();
//			console.log(price);
		    color = $("#shopping-cart-p1 .red").html();
//		    console.log(color);
		    num = $(".count").html();
//		    console.log(num);
		    size = $("#shopping-cart-p2 .red").html();
//		    console.log(size);
		    imgsrc = $(".shop-img").attr("src");
//		    console.log(imgsrc);
		    info = $(".first-p").html();
//		    console.log(info);
		  
			if($.cookie("shopinfo")){
      		    if(isInArray(color,size,imgsrc,arrshop)){
        		 	isMaxNum(color,size,imgsrc,num,arrshop);
				    $.cookie('shopinfo', arrshop.toString(), {
					        expires: 7,
					        path: '/'
					});
        		}
      		    else{
      		    	arrshop.push(price);
			        arrshop.push(color);
			        arrshop.push(num);
			        arrshop.push(size);
			        arrshop.push(imgsrc);
			        arrshop.push(info);
		            $.cookie('shopinfo', arrshop.toString(), {
			               expires: 7,
			               path: '/'
			        });
      		    }
			}
			else{
				arrshop.push(price);
		        arrshop.push(color);
		        arrshop.push(num);
		        arrshop.push(size);
		        arrshop.push(imgsrc);
		        arrshop.push(info);
		        
	            $.cookie('shopinfo', arrshop.toString(), {
		               expires: 7,
		               path: '/'
		        });
			}
				b = isAll(arrshop);
				console.log(b);
				$("#shopping-cart-p6").find("span").find("em").eq(0).html(b[1]);
				$("#shopping-cart-p6").find("span").find("em").eq(1).html(b[0]);
	})
	$(".bottom-top li:even").click(function(){
		$(this).siblings().css({"background":"none"})
		$(this).css({"background-color":"#ffa573"})
	})
})
	