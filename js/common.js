// 获取元素
		var $unit = $("#carousel .unit");
		var $circles = $("#circles ol li");
		var amount = $circles.length;

		// 信号量0,1,2,3,4
		var idx = 0;
		$unit.children("li:first").clone().appendTo($unit);
		// 小圆点事件
		$circles.mouseenter(function(){
			idx = $(this).index();
			$unit.stop(true).animate({"left" : -785 * idx}, 500);
			$(this).addClass("cur").siblings().removeClass("cur");
		});