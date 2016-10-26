/**
 * Created by hxt on 16-10-25.
 */
eventUtil = {
    addEvent:function(element,eventName,func){  // eventName:click
        if(element.addEventListener){  // 火狐，google等，支持
            element.addEventListener(eventName,func,false);
        }else if(element.attachEvent){
            element.attachEvent("on"+eventName,func);
        }else{  // dom0 级
            element["on"+eventName] = func;
        }
    },
    removeEvent:function(element,eventName,func){
        if(element.removeEventListener){  // 火狐，google等，支持
            element.removeEventListener(eventName,func,false);
        }else if(element.detachEvent){
            element.detachEvent("on"+eventName,func);
        }else{  // dom0 级
            element["on"+eventName] = null;
        }
    },
    getEvent:function(event){
        return event || window.event;
    },
    getType:function (event) {
        return event.type;
    },
    getElement:function(event){
        return event.target||event.srcElement;
    },
    preventDefault:function(event){
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue = false;
        }
    },
    stopPropagation:function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble = true;
        }
    }
};