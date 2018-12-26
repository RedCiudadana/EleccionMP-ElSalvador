$.fn.accordion=function(){function i(i){e.children("li").eq(i).stop().animate({left:100*i+"px"},300),e.children("li").eq(i).nextAll().each(function(n){$(this).stop().animate({left:300+100*i+100*n+"px"},300)}),e.children("li").eq(i).prevAll().each(function(n){$(this).stop().animate({left:100*(i-n-1)+"px"},300)})}function n(){l=setTimeout(function(){t>=5?t=0:t++,i(t),n()},3e3)}var e=$(this),t=5,l=null
e.children("li").each(function(i){$(this).css("left",100*i)}),e.children("li").mouseenter(function(){var c=e.children("li").index(this)
t=c,i(c),clearTimeout(l),n()}),n()}
