/**
 * Created by hxt on 16-10-27.
 */
function getStyle(obj,attr){
    if(obj.currentStyle) { // IE
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,false)[attr];
    }

}

function startAnimation(obj,dicAttr,speedParam,func){
    speedParam = speedParam || 20;
    var stopped = 0;
    clearInterval(obj.timer);
    var total = 0;
    for(var key in dicAttr){total++}
    obj.timer = setInterval(function(){

        for(var key in dicAttr){

            var attr = key;
            var moveTarget = dicAttr[key];
            if(attr == "opacity"){
                var cur = parseFloat(getStyle(obj,attr));
                cur = Math.round(cur * 100);
            }else{
                cur = parseInt(getStyle(obj,attr));
            }

//                    alert(cur);
            var step = (moveTarget - cur)/speedParam;
            step = step > 0 ? Math.ceil(step):Math.floor(step);
            if(attr=="opacity"){  // 透明度
                if(cur!= moveTarget){
                    obj.style[attr] = (cur + step)/100;
                }else{
                    stopped++;
                    console.log(stopped)
                }
            }else{  // 高度，宽度等等
                if(cur != moveTarget){
                    obj.style[attr] = (cur + step) + "px";
                }else{
                    stopped++;
                    console.log(stopped)
                }
            }
        }

        if(stopped == total) {
            console.log("all stopped");
            
            clearInterval(obj.timer);

            // 链式运动
            if (func) {
                func();
            }
        }
    },30)
}
