/*! jQuery UI - v1.9.2 - 2012-12-07
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js
* Copyright (c) 2012 jQuery Foundation and other contributors Licensed MIT */
(function(b,f){var a=0,e=/^ui-id-\d+$/;
    b.ui=b.ui||{};
    if(b.ui.version){return
    }b.extend(b.ui,{version:"1.9.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});
    b.fn.extend({_focus:b.fn.focus,focus:function(g,h){return typeof g==="number"?this.each(function(){var i=this;
    setTimeout(function(){b(i).focus();
    if(h){h.call(i)
    }},g)
    }):this._focus.apply(this,arguments)
    },scrollParent:function(){var g;
    if((b.ui.ie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){g=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(b.css(this,"position"))&&(/(auto|scroll)/).test(b.css(this,"overflow")+b.css(this,"overflow-y")+b.css(this,"overflow-x"))
    }).eq(0)
    }else{g=this.parents().filter(function(){return(/(auto|scroll)/).test(b.css(this,"overflow")+b.css(this,"overflow-y")+b.css(this,"overflow-x"))
    }).eq(0)
    }return(/fixed/).test(this.css("position"))||!g.length?b(document):g
    },zIndex:function(j){if(j!==f){return this.css("zIndex",j)
    }if(this.length){var h=b(this[0]),g,i;
    while(h.length&&h[0]!==document){g=h.css("position");
    if(g==="absolute"||g==="relative"||g==="fixed"){i=parseInt(h.css("zIndex"),10);
    if(!isNaN(i)&&i!==0){return i
    }}h=h.parent()
    }}return 0
    },uniqueId:function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++a)
    }})
    },removeUniqueId:function(){return this.each(function(){if(e.test(this.id)){b(this).removeAttr("id")
    }})
    }});
    function d(i,g){var k,j,h,l=i.nodeName.toLowerCase();
    if("area"===l){k=i.parentNode;
    j=k.name;
    if(!i.href||!j||k.nodeName.toLowerCase()!=="map"){return false
    }h=b("img[usemap=#"+j+"]")[0];
    return !!h&&c(h)
    }return(/input|select|textarea|button|object/.test(l)?!i.disabled:"a"===l?i.href||g:g)&&c(i)
    }function c(g){return b.expr.filters.visible(g)&&!b(g).parents().andSelf().filter(function(){return b.css(this,"visibility")==="hidden"
    }).length
    }b.extend(b.expr[":"],{data:b.expr.createPseudo?b.expr.createPseudo(function(g){return function(h){return !!b.data(h,g)
    }
    }):function(j,h,g){return !!b.data(j,g[3])
    },focusable:function(g){return d(g,!isNaN(b.attr(g,"tabindex")))
    },tabbable:function(i){var g=b.attr(i,"tabindex"),h=isNaN(g);
    return(h||g>=0)&&d(i,!h)
    }});
    b(function(){var g=document.body,h=g.appendChild(h=document.createElement("div"));
    h.offsetHeight;
    b.extend(h.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});
    b.support.minHeight=h.offsetHeight===100;
    b.support.selectstart="onselectstart" in h;
    g.removeChild(h).style.display="none"
    });
    if(!b("<a>").outerWidth(1).jquery){b.each(["Width","Height"],function(j,g){var h=g==="Width"?["Left","Right"]:["Top","Bottom"],k=g.toLowerCase(),m={innerWidth:b.fn.innerWidth,innerHeight:b.fn.innerHeight,outerWidth:b.fn.outerWidth,outerHeight:b.fn.outerHeight};
    function l(o,n,i,p){b.each(h,function(){n-=parseFloat(b.css(o,"padding"+this))||0;
    if(i){n-=parseFloat(b.css(o,"border"+this+"Width"))||0
    }if(p){n-=parseFloat(b.css(o,"margin"+this))||0
    }});
    return n
    }b.fn["inner"+g]=function(i){if(i===f){return m["inner"+g].call(this)
    }return this.each(function(){b(this).css(k,l(this,i)+"px")
    })
    };
    b.fn["outer"+g]=function(i,n){if(typeof i!=="number"){return m["outer"+g].call(this,i)
    }return this.each(function(){b(this).css(k,l(this,i,true,n)+"px")
    })
    }
    })
    }if(b("<a>").data("a-b","a").removeData("a-b").data("a-b")){b.fn.removeData=(function(g){return function(h){if(arguments.length){return g.call(this,b.camelCase(h))
    }else{return g.call(this)
    }}
    })(b.fn.removeData)
    }(function(){var g=/msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase())||[];
    b.ui.ie=g.length?true:false;
    b.ui.ie6=parseFloat(g[1],10)===6
    })();
    b.fn.extend({disableSelection:function(){return this.bind((b.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(g){g.preventDefault()
    })
    },enableSelection:function(){return this.unbind(".ui-disableSelection")
    }});
    b.extend(b.ui,{plugin:{add:function(h,j,l){var g,k=b.ui[h].prototype;
    for(g in l){k.plugins[g]=k.plugins[g]||[];
    k.plugins[g].push([j,l[g]])
    }},call:function(g,j,h){var k,l=g.plugins[j];
    if(!l||!g.element[0].parentNode||g.element[0].parentNode.nodeType===11){return
    }for(k=0;
    k<l.length;
    k++){if(g.options[l[k][0]]){l[k][1].apply(g.element,h)
    }}}},contains:b.contains,hasScroll:function(j,h){if(b(j).css("overflow")==="hidden"){return false
    }var g=(h&&h==="left")?"scrollLeft":"scrollTop",i=false;
    if(j[g]>0){return true
    }j[g]=1;
    i=(j[g]>0);
    j[g]=0;
    return i
    },isOverAxis:function(h,g,i){return(h>g)&&(h<(g+i))
    },isOver:function(l,h,k,j,g,i){return b.ui.isOverAxis(l,k,g)&&b.ui.isOverAxis(h,j,i)
    }})
    })(jQuery);
    (function(b,e){var a=0,d=Array.prototype.slice,c=b.cleanData;
    b.cleanData=function(f){for(var g=0,h;
    (h=f[g])!=null;
    g++){try{b(h).triggerHandler("remove")
    }catch(j){}}c(f)
    };
    b.widget=function(g,j,f){var m,l,i,k,h=g.split(".")[0];
    g=g.split(".")[1];
    m=h+"-"+g;
    if(!f){f=j;
    j=b.Widget
    }b.expr[":"][m.toLowerCase()]=function(n){return !!b.data(n,m)
    };
    b[h]=b[h]||{};
    l=b[h][g];
    i=b[h][g]=function(n,o){if(!this._createWidget){return new i(n,o)
    }if(arguments.length){this._createWidget(n,o)
    }};
    b.extend(i,l,{version:f.version,_proto:b.extend({},f),_childConstructors:[]});
    k=new j();
    k.options=b.widget.extend({},k.options);
    b.each(f,function(o,n){if(b.isFunction(n)){f[o]=(function(){var p=function(){return j.prototype[o].apply(this,arguments)
    },q=function(r){return j.prototype[o].apply(this,r)
    };
    return function(){var t=this._super,r=this._superApply,s;
    this._super=p;
    this._superApply=q;
    s=n.apply(this,arguments);
    this._super=t;
    this._superApply=r;
    return s
    }
    })()
    }});
    i.prototype=b.widget.extend(k,{widgetEventPrefix:l?k.widgetEventPrefix:g},f,{constructor:i,namespace:h,widgetName:g,widgetBaseClass:m,widgetFullName:m});
    if(l){b.each(l._childConstructors,function(o,p){var n=p.prototype;
    b.widget(n.namespace+"."+n.widgetName,i,p._proto)
    });
    delete l._childConstructors
    }else{j._childConstructors.push(i)
    }b.widget.bridge(g,i)
    };
    b.widget.extend=function(k){var g=d.call(arguments,1),j=0,f=g.length,h,i;
    for(;
    j<f;
    j++){for(h in g[j]){i=g[j][h];
    if(g[j].hasOwnProperty(h)&&i!==e){if(b.isPlainObject(i)){k[h]=b.isPlainObject(k[h])?b.widget.extend({},k[h],i):b.widget.extend({},i)
    }else{k[h]=i
    }}}}return k
    };
    b.widget.bridge=function(g,f){var h=f.prototype.widgetFullName||g;
    b.fn[g]=function(k){var i=typeof k==="string",j=d.call(arguments,1),l=this;
    k=!i&&j.length?b.widget.extend.apply(null,[k].concat(j)):k;
    if(i){this.each(function(){var n,m=b.data(this,h);
    if(!m){return b.error("cannot call methods on "+g+" prior to initialization; attempted to call method '"+k+"'")
    }if(!b.isFunction(m[k])||k.charAt(0)==="_"){return b.error("no such method '"+k+"' for "+g+" widget instance")
    }n=m[k].apply(m,j);
    if(n!==m&&n!==e){l=n&&n.jquery?l.pushStack(n.get()):n;
    return false
    }})
    }else{this.each(function(){var m=b.data(this,h);
    if(m){m.option(k||{})._init()
    }else{b.data(this,h,new f(k,this))
    }})
    }return l
    }
    };
    b.Widget=function(){};
    b.Widget._childConstructors=[];
    b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(f,g){g=b(g||this.defaultElement||this)[0];
    this.element=b(g);
    this.uuid=a++;
    this.eventNamespace="."+this.widgetName+this.uuid;
    this.options=b.widget.extend({},this.options,this._getCreateOptions(),f);
    this.bindings=b();
    this.hoverable=b();
    this.focusable=b();
    if(g!==this){b.data(g,this.widgetName,this);
    b.data(g,this.widgetFullName,this);
    this._on(true,this.element,{remove:function(h){if(h.target===g){this.destroy()
    }}});
    this.document=b(g.style?g.ownerDocument:g.document||g);
    this.window=b(this.document[0].defaultView||this.document[0].parentWindow)
    }this._create();
    this._trigger("create",null,this._getCreateEventData());
    this._init()
    },_getCreateOptions:b.noop,_getCreateEventData:b.noop,_create:b.noop,_init:b.noop,destroy:function(){this._destroy();
    this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(b.camelCase(this.widgetFullName));
    this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");
    this.bindings.unbind(this.eventNamespace);
    this.hoverable.removeClass("ui-state-hover");
    this.focusable.removeClass("ui-state-focus")
    },_destroy:b.noop,widget:function(){return this.element
    },option:function(j,k){var f=j,l,h,g;
    if(arguments.length===0){return b.widget.extend({},this.options)
    }if(typeof j==="string"){f={};
    l=j.split(".");
    j=l.shift();
    if(l.length){h=f[j]=b.widget.extend({},this.options[j]);
    for(g=0;
    g<l.length-1;
    g++){h[l[g]]=h[l[g]]||{};
    h=h[l[g]]
    }j=l.pop();
    if(k===e){return h[j]===e?null:h[j]
    }h[j]=k
    }else{if(k===e){return this.options[j]===e?null:this.options[j]
    }f[j]=k
    }}this._setOptions(f);
    return this
    },_setOptions:function(f){var g;
    for(g in f){this._setOption(g,f[g])
    }return this
    },_setOption:function(f,g){this.options[f]=g;
    if(f==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!g).attr("aria-disabled",g);
    this.hoverable.removeClass("ui-state-hover");
    this.focusable.removeClass("ui-state-focus")
    }return this
    },enable:function(){return this._setOption("disabled",false)
    },disable:function(){return this._setOption("disabled",true)
    },_on:function(i,h,g){var j,f=this;
    if(typeof i!=="boolean"){g=h;
    h=i;
    i=false
    }if(!g){g=h;
    h=this.element;
    j=this.widget()
    }else{h=j=b(h);
    this.bindings=this.bindings.add(h)
    }b.each(g,function(p,o){function m(){if(!i&&(f.options.disabled===true||b(this).hasClass("ui-state-disabled"))){return
    }return(typeof o==="string"?f[o]:o).apply(f,arguments)
    }if(typeof o!=="string"){m.guid=o.guid=o.guid||m.guid||b.guid++
    }var n=p.match(/^(\w+)\s*(.*)$/),l=n[1]+f.eventNamespace,k=n[2];
    if(k){j.delegate(k,l,m)
    }else{h.bind(l,m)
    }})
    },_off:function(g,f){f=(f||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;
    g.unbind(f).undelegate(f)
    },_delay:function(i,h){function g(){return(typeof i==="string"?f[i]:i).apply(f,arguments)
    }var f=this;
    return setTimeout(g,h||0)
    },_hoverable:function(f){this.hoverable=this.hoverable.add(f);
    this._on(f,{mouseenter:function(g){b(g.currentTarget).addClass("ui-state-hover")
    },mouseleave:function(g){b(g.currentTarget).removeClass("ui-state-hover")
    }})
    },_focusable:function(f){this.focusable=this.focusable.add(f);
    this._on(f,{focusin:function(g){b(g.currentTarget).addClass("ui-state-focus")
    },focusout:function(g){b(g.currentTarget).removeClass("ui-state-focus")
    }})
    },_trigger:function(f,g,h){var k,j,i=this.options[f];
    h=h||{};
    g=b.Event(g);
    g.type=(f===this.widgetEventPrefix?f:this.widgetEventPrefix+f).toLowerCase();
    g.target=this.element[0];
    j=g.originalEvent;
    if(j){for(k in j){if(!(k in g)){g[k]=j[k]
    }}}this.element.trigger(g,h);
    return !(b.isFunction(i)&&i.apply(this.element[0],[g].concat(h))===false||g.isDefaultPrevented())
    }};
    b.each({show:"fadeIn",hide:"fadeOut"},function(g,f){b.Widget.prototype["_"+g]=function(j,i,l){if(typeof i==="string"){i={effect:i}
    }var k,h=!i?g:i===true||typeof i==="number"?f:i.effect||f;
    i=i||{};
    if(typeof i==="number"){i={duration:i}
    }k=!b.isEmptyObject(i);
    i.complete=l;
    if(i.delay){j.delay(i.delay)
    }if(k&&b.effects&&(b.effects.effect[h]||b.uiBackCompat!==false&&b.effects[h])){j[g](i)
    }else{if(h!==g&&j[h]){j[h](i.duration,i.easing,l)
    }else{j.queue(function(m){b(this)[g]();
    if(l){l.call(j[0])
    }m()
    })
    }}}
    });
    if(b.uiBackCompat!==false){b.Widget.prototype._getCreateOptions=function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]
    }
    }})(jQuery);
    (function(b,c){var a=false;
    b(document).mouseup(function(d){a=false
    });
    b.widget("ui.mouse",{version:"1.9.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var d=this;
    this.element.bind("mousedown."+this.widgetName,function(e){return d._mouseDown(e)
    }).bind("click."+this.widgetName,function(e){if(true===b.data(e.target,d.widgetName+".preventClickEvent")){b.removeData(e.target,d.widgetName+".preventClickEvent");
    e.stopImmediatePropagation();
    return false
    }});
    this.started=false
    },_mouseDestroy:function(){this.element.unbind("."+this.widgetName);
    if(this._mouseMoveDelegate){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)
    }},_mouseDown:function(f){if(a){return
    }(this._mouseStarted&&this._mouseUp(f));
    this._mouseDownEvent=f;
    var e=this,g=(f.which===1),d=(typeof this.options.cancel==="string"&&f.target.nodeName?b(f.target).closest(this.options.cancel).length:false);
    if(!g||d||!this._mouseCapture(f)){return true
    }this.mouseDelayMet=!this.options.delay;
    if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){e.mouseDelayMet=true
    },this.options.delay)
    }if(this._mouseDistanceMet(f)&&this._mouseDelayMet(f)){this._mouseStarted=(this._mouseStart(f)!==false);
    if(!this._mouseStarted){f.preventDefault();
    return true
    }}if(true===b.data(f.target,this.widgetName+".preventClickEvent")){b.removeData(f.target,this.widgetName+".preventClickEvent")
    }this._mouseMoveDelegate=function(h){return e._mouseMove(h)
    };
    this._mouseUpDelegate=function(h){return e._mouseUp(h)
    };
    b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);
    f.preventDefault();
    a=true;
    return true
    },_mouseMove:function(d){if(b.ui.ie&&!(document.documentMode>=9)&&!d.button){return this._mouseUp(d)
    }if(this._mouseStarted){this._mouseDrag(d);
    return d.preventDefault()
    }if(this._mouseDistanceMet(d)&&this._mouseDelayMet(d)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,d)!==false);
    (this._mouseStarted?this._mouseDrag(d):this._mouseUp(d))
    }return !this._mouseStarted
    },_mouseUp:function(d){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
    if(this._mouseStarted){this._mouseStarted=false;
    if(d.target===this._mouseDownEvent.target){b.data(d.target,this.widgetName+".preventClickEvent",true)
    }this._mouseStop(d)
    }return false
    },_mouseDistanceMet:function(d){return(Math.max(Math.abs(this._mouseDownEvent.pageX-d.pageX),Math.abs(this._mouseDownEvent.pageY-d.pageY))>=this.options.distance)
    },_mouseDelayMet:function(d){return this.mouseDelayMet
    },_mouseStart:function(d){},_mouseDrag:function(d){},_mouseStop:function(d){},_mouseCapture:function(d){return true
    }})
    })(jQuery);
    (function(e,c){e.ui=e.ui||{};
    var i,j=Math.max,n=Math.abs,l=Math.round,d=/left|center|right/,g=/top|center|bottom/,a=/[\+\-]\d+%?/,k=/^\w+/,b=/%$/,f=e.fn.position;
    function m(q,p,o){return[parseInt(q[0],10)*(b.test(q[0])?p/100:1),parseInt(q[1],10)*(b.test(q[1])?o/100:1)]
    }function h(o,p){return parseInt(e.css(o,p),10)||0
    }e.position={scrollbarWidth:function(){if(i!==c){return i
    }var p,o,r=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),q=r.children()[0];
    e("body").append(r);
    p=q.offsetWidth;
    r.css("overflow","scroll");
    o=q.offsetWidth;
    if(p===o){o=r[0].clientWidth
    }r.remove();
    return(i=p-o)
    },getScrollInfo:function(s){var r=s.isWindow?"":s.element.css("overflow-x"),q=s.isWindow?"":s.element.css("overflow-y"),p=r==="scroll"||(r==="auto"&&s.width<s.element[0].scrollWidth),o=q==="scroll"||(q==="auto"&&s.height<s.element[0].scrollHeight);
    return{width:p?e.position.scrollbarWidth():0,height:o?e.position.scrollbarWidth():0}
    },getWithinInfo:function(p){var q=e(p||window),o=e.isWindow(q[0]);
    return{element:q,isWindow:o,offset:q.offset()||{left:0,top:0},scrollLeft:q.scrollLeft(),scrollTop:q.scrollTop(),width:o?q.width():q.outerWidth(),height:o?q.height():q.outerHeight()}
    }};
    e.fn.position=function(y){if(!y||!y.of){return f.apply(this,arguments)
    }y=e.extend({},y);
    var z,v,s,x,r,u=e(y.of),q=e.position.getWithinInfo(y.within),o=e.position.getScrollInfo(q),t=u[0],w=(y.collision||"flip").split(" "),p={};
    if(t.nodeType===9){v=u.width();
    s=u.height();
    x={top:0,left:0}
    }else{if(e.isWindow(t)){v=u.width();
    s=u.height();
    x={top:u.scrollTop(),left:u.scrollLeft()}
    }else{if(t.preventDefault){y.at="left top";
    v=s=0;
    x={top:t.pageY,left:t.pageX}
    }else{v=u.outerWidth();
    s=u.outerHeight();
    x=u.offset()
    }}}r=e.extend({},x);
    e.each(["my","at"],function(){var C=(y[this]||"").split(" "),B,A;
    if(C.length===1){C=d.test(C[0])?C.concat(["center"]):g.test(C[0])?["center"].concat(C):["center","center"]
    }C[0]=d.test(C[0])?C[0]:"center";
    C[1]=g.test(C[1])?C[1]:"center";
    B=a.exec(C[0]);
    A=a.exec(C[1]);
    p[this]=[B?B[0]:0,A?A[0]:0];
    y[this]=[k.exec(C[0])[0],k.exec(C[1])[0]]
    });
    if(w.length===1){w[1]=w[0]
    }if(y.at[0]==="right"){r.left+=v
    }else{if(y.at[0]==="center"){r.left+=v/2
    }}if(y.at[1]==="bottom"){r.top+=s
    }else{if(y.at[1]==="center"){r.top+=s/2
    }}z=m(p.at,v,s);
    r.left+=z[0];
    r.top+=z[1];
    return this.each(function(){var B,K,D=e(this),F=D.outerWidth(),C=D.outerHeight(),E=h(this,"marginLeft"),A=h(this,"marginTop"),J=F+E+h(this,"marginRight")+o.width,I=C+A+h(this,"marginBottom")+o.height,G=e.extend({},r),H=m(p.my,D.outerWidth(),D.outerHeight());
    if(y.my[0]==="right"){G.left-=F
    }else{if(y.my[0]==="center"){G.left-=F/2
    }}if(y.my[1]==="bottom"){G.top-=C
    }else{if(y.my[1]==="center"){G.top-=C/2
    }}G.left+=H[0];
    G.top+=H[1];
    if(!e.support.offsetFractions){G.left=l(G.left);
    G.top=l(G.top)
    }B={marginLeft:E,marginTop:A};
    e.each(["left","top"],function(M,L){if(e.ui.position[w[M]]){e.ui.position[w[M]][L](G,{targetWidth:v,targetHeight:s,elemWidth:F,elemHeight:C,collisionPosition:B,collisionWidth:J,collisionHeight:I,offset:[z[0]+H[0],z[1]+H[1]],my:y.my,at:y.at,within:q,elem:D})
    }});
    if(e.fn.bgiframe){D.bgiframe()
    }if(y.using){K=function(O){var Q=x.left-G.left,N=Q+v-F,P=x.top-G.top,M=P+s-C,L={target:{element:u,left:x.left,top:x.top,width:v,height:s},element:{element:D,left:G.left,top:G.top,width:F,height:C},horizontal:N<0?"left":Q>0?"right":"center",vertical:M<0?"top":P>0?"bottom":"middle"};
    if(v<F&&n(Q+N)<v){L.horizontal="center"
    }if(s<C&&n(P+M)<s){L.vertical="middle"
    }if(j(n(Q),n(N))>j(n(P),n(M))){L.important="horizontal"
    }else{L.important="vertical"
    }y.using.call(this,O,L)
    }
    }D.offset(e.extend(G,{using:K}))
    })
    };
    e.ui.position={fit:{left:function(s,r){var q=r.within,u=q.isWindow?q.scrollLeft:q.offset.left,w=q.width,t=s.left-r.collisionPosition.marginLeft,v=u-t,p=t+r.collisionWidth-w-u,o;
    if(r.collisionWidth>w){if(v>0&&p<=0){o=s.left+v+r.collisionWidth-w-u;
    s.left+=v-o
    }else{if(p>0&&v<=0){s.left=u
    }else{if(v>p){s.left=u+w-r.collisionWidth
    }else{s.left=u
    }}}}else{if(v>0){s.left+=v
    }else{if(p>0){s.left-=p
    }else{s.left=j(s.left-t,s.left)
    }}}},top:function(r,q){var p=q.within,v=p.isWindow?p.scrollTop:p.offset.top,w=q.within.height,t=r.top-q.collisionPosition.marginTop,u=v-t,s=t+q.collisionHeight-w-v,o;
    if(q.collisionHeight>w){if(u>0&&s<=0){o=r.top+u+q.collisionHeight-w-v;
    r.top+=u-o
    }else{if(s>0&&u<=0){r.top=v
    }else{if(u>s){r.top=v+w-q.collisionHeight
    }else{r.top=v
    }}}}else{if(u>0){r.top+=u
    }else{if(s>0){r.top-=s
    }else{r.top=j(r.top-t,r.top)
    }}}}},flip:{left:function(u,t){var s=t.within,y=s.offset.left+s.scrollLeft,B=s.width,q=s.isWindow?s.scrollLeft:s.offset.left,v=u.left-t.collisionPosition.marginLeft,z=v-q,p=v+t.collisionWidth-B-q,x=t.my[0]==="left"?-t.elemWidth:t.my[0]==="right"?t.elemWidth:0,A=t.at[0]==="left"?t.targetWidth:t.at[0]==="right"?-t.targetWidth:0,r=-2*t.offset[0],o,w;
    if(z<0){o=u.left+x+A+r+t.collisionWidth-B-y;
    if(o<0||o<n(z)){u.left+=x+A+r
    }}else{if(p>0){w=u.left-t.collisionPosition.marginLeft+x+A+r-q;
    if(w>0||n(w)<p){u.left+=x+A+r
    }}}},top:function(t,s){var r=s.within,A=r.offset.top+r.scrollTop,B=r.height,o=r.isWindow?r.scrollTop:r.offset.top,v=t.top-s.collisionPosition.marginTop,x=v-o,u=v+s.collisionHeight-B-o,y=s.my[1]==="top",w=y?-s.elemHeight:s.my[1]==="bottom"?s.elemHeight:0,C=s.at[1]==="top"?s.targetHeight:s.at[1]==="bottom"?-s.targetHeight:0,q=-2*s.offset[1],z,p;
    if(x<0){p=t.top+w+C+q+s.collisionHeight-B-A;
    if((t.top+w+C+q)>x&&(p<0||p<n(x))){t.top+=w+C+q
    }}else{if(u>0){z=t.top-s.collisionPosition.marginTop+w+C+q-o;
    if((t.top+w+C+q)>u&&(z>0||n(z)<u)){t.top+=w+C+q
    }}}}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments);
    e.ui.position.fit.left.apply(this,arguments)
    },top:function(){e.ui.position.flip.top.apply(this,arguments);
    e.ui.position.fit.top.apply(this,arguments)
    }}};
    (function(){var s,u,p,r,q,o=document.getElementsByTagName("body")[0],t=document.createElement("div");
    s=document.createElement(o?"div":"body");
    p={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};
    if(o){e.extend(p,{position:"absolute",left:"-1000px",top:"-1000px"})
    }for(q in p){s.style[q]=p[q]
    }s.appendChild(t);
    u=o||document.documentElement;
    u.insertBefore(s,u.firstChild);
    t.style.cssText="position: absolute; left: 10.7432222px;";
    r=e(t).offset().left;
    e.support.offsetFractions=r>10&&r<11;
    s.innerHTML="";
    u.removeChild(s)
    })();
    if(e.uiBackCompat!==false){(function(p){var o=p.fn.position;
    p.fn.position=function(r){if(!r||!r.offset){return o.call(this,r)
    }var s=r.offset.split(" "),q=r.at.split(" ");
    if(s.length===1){s[1]=s[0]
    }if(/^\d/.test(s[0])){s[0]="+"+s[0]
    }if(/^\d/.test(s[1])){s[1]="+"+s[1]
    }if(q.length===1){if(/left|center|right/.test(q[0])){q[1]="center"
    }else{q[1]=q[0];
    q[0]="center"
    }}return o.call(this,p.extend(r,{at:q[0]+s[0]+" "+q[1]+s[1],offset:c}))
    }
    }(jQuery))
    }}(jQuery));
    (function(a,b){a.widget("ui.draggable",a.ui.mouse,{version:"1.9.2",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper=="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"
    }(this.options.addClasses&&this.element.addClass("ui-draggable"));
    (this.options.disabled&&this.element.addClass("ui-draggable-disabled"));
    this._mouseInit()
    },_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
    this._mouseDestroy()
    },_mouseCapture:function(c){var d=this.options;
    if(this.helper||d.disabled||a(c.target).is(".ui-resizable-handle")){return false
    }this.handle=this._getHandle(c);
    if(!this.handle){return false
    }a(d.iframeFix===true?"iframe":d.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(a(this).offset()).appendTo("body")
    });
    return true
    },_mouseStart:function(c){var d=this.options;
    this.helper=this._createHelper(c);
    this.helper.addClass("ui-draggable-dragging");
    this._cacheHelperProportions();
    if(a.ui.ddmanager){a.ui.ddmanager.current=this
    }this._cacheMargins();
    this.cssPosition=this.helper.css("position");
    this.scrollParent=this.helper.scrollParent();
    this.offset=this.positionAbs=this.element.offset();
    this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
    a.extend(this.offset,{click:{left:c.pageX-this.offset.left,top:c.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
    this.originalPosition=this.position=this._generatePosition(c);
    this.originalPageX=c.pageX;
    this.originalPageY=c.pageY;
    (d.cursorAt&&this._adjustOffsetFromHelper(d.cursorAt));
    if(d.containment){this._setContainment()
    }if(this._trigger("start",c)===false){this._clear();
    return false
    }this._cacheHelperProportions();
    if(a.ui.ddmanager&&!d.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,c)
    }this._mouseDrag(c,true);
    if(a.ui.ddmanager){a.ui.ddmanager.dragStart(this,c)
    }return true
    },_mouseDrag:function(c,e){this.position=this._generatePosition(c);
    this.positionAbs=this._convertPositionTo("absolute");
    if(!e){var d=this._uiHash();
    if(this._trigger("drag",c,d)===false){this._mouseUp({});
    return false
    }this.position=d.position
    }if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"
    }if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"
    }if(a.ui.ddmanager){a.ui.ddmanager.drag(this,c)
    }return false
    },_mouseStop:function(e){var g=false;
    if(a.ui.ddmanager&&!this.options.dropBehaviour){g=a.ui.ddmanager.drop(this,e)
    }if(this.dropped){g=this.dropped;
    this.dropped=false
    }var c=this.element[0],f=false;
    while(c&&(c=c.parentNode)){if(c==document){f=true
    }}if(!f&&this.options.helper==="original"){return false
    }if((this.options.revert=="invalid"&&!g)||(this.options.revert=="valid"&&g)||this.options.revert===true||(a.isFunction(this.options.revert)&&this.options.revert.call(this.element,g))){var d=this;
    a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(d._trigger("stop",e)!==false){d._clear()
    }})
    }else{if(this._trigger("stop",e)!==false){this._clear()
    }}return false
    },_mouseUp:function(c){a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)
    });
    if(a.ui.ddmanager){a.ui.ddmanager.dragStop(this,c)
    }return a.ui.mouse.prototype._mouseUp.call(this,c)
    },cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({})
    }else{this._clear()
    }return this
    },_getHandle:function(c){var d=!this.options.handle||!a(this.options.handle,this.element).length?true:false;
    a(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==c.target){d=true
    }});
    return d
    },_createHelper:function(d){var e=this.options;
    var c=a.isFunction(e.helper)?a(e.helper.apply(this.element[0],[d])):(e.helper=="clone"?this.element.clone().removeAttr("id"):this.element);
    if(!c.parents("body").length){c.appendTo((e.appendTo=="parent"?this.element[0].parentNode:e.appendTo))
    }if(c[0]!=this.element[0]&&!(/(fixed|absolute)/).test(c.css("position"))){c.css("position","absolute")
    }return c
    },_adjustOffsetFromHelper:function(c){if(typeof c=="string"){c=c.split(" ")
    }if(a.isArray(c)){c={left:+c[0],top:+c[1]||0}
    }if("left" in c){this.offset.click.left=c.left+this.margins.left
    }if("right" in c){this.offset.click.left=this.helperProportions.width-c.right+this.margins.left
    }if("top" in c){this.offset.click.top=c.top+this.margins.top
    }if("bottom" in c){this.offset.click.top=this.helperProportions.height-c.bottom+this.margins.top
    }},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
    var c=this.offsetParent.offset();
    if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0])){c.left+=this.scrollParent.scrollLeft();
    c.top+=this.scrollParent.scrollTop()
    }if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.ui.ie)){c={top:0,left:0}
    }return{top:c.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:c.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
    },_getRelativeOffset:function(){if(this.cssPosition=="relative"){var c=this.element.position();
    return{top:c.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:c.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
    }else{return{top:0,left:0}
    }},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0),right:(parseInt(this.element.css("marginRight"),10)||0),bottom:(parseInt(this.element.css("marginBottom"),10)||0)}
    },_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
    },_setContainment:function(){var g=this.options;
    if(g.containment=="parent"){g.containment=this.helper[0].parentNode
    }if(g.containment=="document"||g.containment=="window"){this.containment=[g.containment=="document"?0:a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,g.containment=="document"?0:a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(g.containment=="document"?0:a(window).scrollLeft())+a(g.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(g.containment=="document"?0:a(window).scrollTop())+(a(g.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
    }if(!(/^(document|window|parent)$/).test(g.containment)&&g.containment.constructor!=Array){var h=a(g.containment);
    var e=h[0];
    if(!e){return
    }var f=h.offset();
    var d=(a(e).css("overflow")!="hidden");
    this.containment=[(parseInt(a(e).css("borderLeftWidth"),10)||0)+(parseInt(a(e).css("paddingLeft"),10)||0),(parseInt(a(e).css("borderTopWidth"),10)||0)+(parseInt(a(e).css("paddingTop"),10)||0),(d?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(a(e).css("borderLeftWidth"),10)||0)-(parseInt(a(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(d?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(a(e).css("borderTopWidth"),10)||0)-(parseInt(a(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];
    this.relative_container=h
    }else{if(g.containment.constructor==Array){this.containment=g.containment
    }}},_convertPositionTo:function(g,i){if(!i){i=this.position
    }var e=g=="absolute"?1:-1;
    var f=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,h=(/(html|body)/i).test(c[0].tagName);
    return{top:(i.top+this.offset.relative.top*e+this.offset.parent.top*e-((this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(h?0:c.scrollTop()))*e)),left:(i.left+this.offset.relative.left*e+this.offset.parent.left*e-((this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():h?0:c.scrollLeft())*e))}
    },_generatePosition:function(d){var e=this.options,l=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,i=(/(html|body)/i).test(l[0].tagName);
    var h=d.pageX;
    var g=d.pageY;
    if(this.originalPosition){var c;
    if(this.containment){if(this.relative_container){var k=this.relative_container.offset();
    c=[this.containment[0]+k.left,this.containment[1]+k.top,this.containment[2]+k.left,this.containment[3]+k.top]
    }else{c=this.containment
    }if(d.pageX-this.offset.click.left<c[0]){h=c[0]+this.offset.click.left
    }if(d.pageY-this.offset.click.top<c[1]){g=c[1]+this.offset.click.top
    }if(d.pageX-this.offset.click.left>c[2]){h=c[2]+this.offset.click.left
    }if(d.pageY-this.offset.click.top>c[3]){g=c[3]+this.offset.click.top
    }}if(e.grid){var j=e.grid[1]?this.originalPageY+Math.round((g-this.originalPageY)/e.grid[1])*e.grid[1]:this.originalPageY;
    g=c?(!(j-this.offset.click.top<c[1]||j-this.offset.click.top>c[3])?j:(!(j-this.offset.click.top<c[1])?j-e.grid[1]:j+e.grid[1])):j;
    var f=e.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/e.grid[0])*e.grid[0]:this.originalPageX;
    h=c?(!(f-this.offset.click.left<c[0]||f-this.offset.click.left>c[2])?f:(!(f-this.offset.click.left<c[0])?f-e.grid[0]:f+e.grid[0])):f
    }}return{top:(g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+((this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(i?0:l.scrollTop())))),left:(h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+((this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:l.scrollLeft())))}
    },_clear:function(){this.helper.removeClass("ui-draggable-dragging");
    if(this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()
    }this.helper=null;
    this.cancelHelperRemoval=false
    },_trigger:function(c,d,e){e=e||this._uiHash();
    a.ui.plugin.call(this,c,[d,e]);
    if(c=="drag"){this.positionAbs=this._convertPositionTo("absolute")
    }return a.Widget.prototype._trigger.call(this,c,d,e)
    },plugins:{},_uiHash:function(c){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}
    }});
    a.ui.plugin.add("draggable","connectToSortable",{start:function(d,f){var e=a(this).data("draggable"),g=e.options,c=a.extend({},f,{item:e.element});
    e.sortables=[];
    a(g.connectToSortable).each(function(){var h=a.data(this,"sortable");
    if(h&&!h.options.disabled){e.sortables.push({instance:h,shouldRevert:h.options.revert});
    h.refreshPositions();
    h._trigger("activate",d,c)
    }})
    },stop:function(d,f){var e=a(this).data("draggable"),c=a.extend({},f,{item:e.element});
    a.each(e.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;
    e.cancelHelperRemoval=true;
    this.instance.cancelHelperRemoval=false;
    if(this.shouldRevert){this.instance.options.revert=true
    }this.instance._mouseStop(d);
    this.instance.options.helper=this.instance.options._helper;
    if(e.options.helper=="original"){this.instance.currentItem.css({top:"auto",left:"auto"})
    }}else{this.instance.cancelHelperRemoval=false;
    this.instance._trigger("deactivate",d,c)
    }})
    },drag:function(d,g){var f=a(this).data("draggable"),c=this;
    var e=function(j){var p=this.offset.click.top,n=this.offset.click.left;
    var h=this.positionAbs.top,l=this.positionAbs.left;
    var k=j.height,m=j.width;
    var q=j.top,i=j.left;
    return a.ui.isOver(h+p,l+n,q,i,k,m)
    };
    a.each(f.sortables,function(j){var h=false;
    var k=this;
    this.instance.positionAbs=f.positionAbs;
    this.instance.helperProportions=f.helperProportions;
    this.instance.offset.click=f.offset.click;
    if(this.instance._intersectsWith(this.instance.containerCache)){h=true;
    a.each(f.sortables,function(){this.instance.positionAbs=f.positionAbs;
    this.instance.helperProportions=f.helperProportions;
    this.instance.offset.click=f.offset.click;
    if(this!=k&&this.instance._intersectsWith(this.instance.containerCache)&&a.ui.contains(k.instance.element[0],this.instance.element[0])){h=false
    }return h
    })
    }if(h){if(!this.instance.isOver){this.instance.isOver=1;
    this.instance.currentItem=a(c).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",true);
    this.instance.options._helper=this.instance.options.helper;
    this.instance.options.helper=function(){return g.helper[0]
    };
    d.target=this.instance.currentItem[0];
    this.instance._mouseCapture(d,true);
    this.instance._mouseStart(d,true,true);
    this.instance.offset.click.top=f.offset.click.top;
    this.instance.offset.click.left=f.offset.click.left;
    this.instance.offset.parent.left-=f.offset.parent.left-this.instance.offset.parent.left;
    this.instance.offset.parent.top-=f.offset.parent.top-this.instance.offset.parent.top;
    f._trigger("toSortable",d);
    f.dropped=this.instance.element;
    f.currentItem=f.element;
    this.instance.fromOutside=f
    }if(this.instance.currentItem){this.instance._mouseDrag(d)
    }}else{if(this.instance.isOver){this.instance.isOver=0;
    this.instance.cancelHelperRemoval=true;
    this.instance.options.revert=false;
    this.instance._trigger("out",d,this.instance._uiHash(this.instance));
    this.instance._mouseStop(d,true);
    this.instance.options.helper=this.instance.options._helper;
    this.instance.currentItem.remove();
    if(this.instance.placeholder){this.instance.placeholder.remove()
    }f._trigger("fromSortable",d);
    f.dropped=false
    }}})
    }});
    a.ui.plugin.add("draggable","cursor",{start:function(d,e){var c=a("body"),f=a(this).data("draggable").options;
    if(c.css("cursor")){f._cursor=c.css("cursor")
    }c.css("cursor",f.cursor)
    },stop:function(c,d){var e=a(this).data("draggable").options;
    if(e._cursor){a("body").css("cursor",e._cursor)
    }}});
    a.ui.plugin.add("draggable","opacity",{start:function(d,e){var c=a(e.helper),f=a(this).data("draggable").options;
    if(c.css("opacity")){f._opacity=c.css("opacity")
    }c.css("opacity",f.opacity)
    },stop:function(c,d){var e=a(this).data("draggable").options;
    if(e._opacity){a(d.helper).css("opacity",e._opacity)
    }}});
    a.ui.plugin.add("draggable","scroll",{start:function(d,e){var c=a(this).data("draggable");
    if(c.scrollParent[0]!=document&&c.scrollParent[0].tagName!="HTML"){c.overflowOffset=c.scrollParent.offset()
    }},drag:function(e,f){var d=a(this).data("draggable"),g=d.options,c=false;
    if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"){if(!g.axis||g.axis!="x"){if((d.overflowOffset.top+d.scrollParent[0].offsetHeight)-e.pageY<g.scrollSensitivity){d.scrollParent[0].scrollTop=c=d.scrollParent[0].scrollTop+g.scrollSpeed
    }else{if(e.pageY-d.overflowOffset.top<g.scrollSensitivity){d.scrollParent[0].scrollTop=c=d.scrollParent[0].scrollTop-g.scrollSpeed
    }}}if(!g.axis||g.axis!="y"){if((d.overflowOffset.left+d.scrollParent[0].offsetWidth)-e.pageX<g.scrollSensitivity){d.scrollParent[0].scrollLeft=c=d.scrollParent[0].scrollLeft+g.scrollSpeed
    }else{if(e.pageX-d.overflowOffset.left<g.scrollSensitivity){d.scrollParent[0].scrollLeft=c=d.scrollParent[0].scrollLeft-g.scrollSpeed
    }}}}else{if(!g.axis||g.axis!="x"){if(e.pageY-a(document).scrollTop()<g.scrollSensitivity){c=a(document).scrollTop(a(document).scrollTop()-g.scrollSpeed)
    }else{if(a(window).height()-(e.pageY-a(document).scrollTop())<g.scrollSensitivity){c=a(document).scrollTop(a(document).scrollTop()+g.scrollSpeed)
    }}}if(!g.axis||g.axis!="y"){if(e.pageX-a(document).scrollLeft()<g.scrollSensitivity){c=a(document).scrollLeft(a(document).scrollLeft()-g.scrollSpeed)
    }else{if(a(window).width()-(e.pageX-a(document).scrollLeft())<g.scrollSensitivity){c=a(document).scrollLeft(a(document).scrollLeft()+g.scrollSpeed)
    }}}}if(c!==false&&a.ui.ddmanager&&!g.dropBehaviour){a.ui.ddmanager.prepareOffsets(d,e)
    }}});
    a.ui.plugin.add("draggable","snap",{start:function(d,e){var c=a(this).data("draggable"),f=c.options;
    c.snapElements=[];
    a(f.snap.constructor!=String?(f.snap.items||":data(draggable)"):f.snap).each(function(){var h=a(this);
    var g=h.offset();
    if(this!=c.element[0]){c.snapElements.push({item:this,width:h.outerWidth(),height:h.outerHeight(),top:g.top,left:g.left})
    }})
    },drag:function(u,p){var g=a(this).data("draggable"),q=g.options;
    var y=q.snapTolerance;
    var x=p.offset.left,w=x+g.helperProportions.width,f=p.offset.top,e=f+g.helperProportions.height;
    for(var v=g.snapElements.length-1;
    v>=0;
    v--){var s=g.snapElements[v].left,n=s+g.snapElements[v].width,m=g.snapElements[v].top,A=m+g.snapElements[v].height;
    if(!((s-y<x&&x<n+y&&m-y<f&&f<A+y)||(s-y<x&&x<n+y&&m-y<e&&e<A+y)||(s-y<w&&w<n+y&&m-y<f&&f<A+y)||(s-y<w&&w<n+y&&m-y<e&&e<A+y))){if(g.snapElements[v].snapping){(g.options.snap.release&&g.options.snap.release.call(g.element,u,a.extend(g._uiHash(),{snapItem:g.snapElements[v].item})))
    }g.snapElements[v].snapping=false;
    continue
    }if(q.snapMode!="inner"){var c=Math.abs(m-e)<=y;
    var z=Math.abs(A-f)<=y;
    var j=Math.abs(s-w)<=y;
    var k=Math.abs(n-x)<=y;
    if(c){p.position.top=g._convertPositionTo("relative",{top:m-g.helperProportions.height,left:0}).top-g.margins.top
    }if(z){p.position.top=g._convertPositionTo("relative",{top:A,left:0}).top-g.margins.top
    }if(j){p.position.left=g._convertPositionTo("relative",{top:0,left:s-g.helperProportions.width}).left-g.margins.left
    }if(k){p.position.left=g._convertPositionTo("relative",{top:0,left:n}).left-g.margins.left
    }}var h=(c||z||j||k);
    if(q.snapMode!="outer"){var c=Math.abs(m-f)<=y;
    var z=Math.abs(A-e)<=y;
    var j=Math.abs(s-x)<=y;
    var k=Math.abs(n-w)<=y;
    if(c){p.position.top=g._convertPositionTo("relative",{top:m,left:0}).top-g.margins.top
    }if(z){p.position.top=g._convertPositionTo("relative",{top:A-g.helperProportions.height,left:0}).top-g.margins.top
    }if(j){p.position.left=g._convertPositionTo("relative",{top:0,left:s}).left-g.margins.left
    }if(k){p.position.left=g._convertPositionTo("relative",{top:0,left:n-g.helperProportions.width}).left-g.margins.left
    }}if(!g.snapElements[v].snapping&&(c||z||j||k||h)){(g.options.snap.snap&&g.options.snap.snap.call(g.element,u,a.extend(g._uiHash(),{snapItem:g.snapElements[v].item})))
    }g.snapElements[v].snapping=(c||z||j||k||h)
    }}});
    a.ui.plugin.add("draggable","stack",{start:function(d,e){var g=a(this).data("draggable").options;
    var f=a.makeArray(a(g.stack)).sort(function(i,h){return(parseInt(a(i).css("zIndex"),10)||0)-(parseInt(a(h).css("zIndex"),10)||0)
    });
    if(!f.length){return
    }var c=parseInt(f[0].style.zIndex)||0;
    a(f).each(function(h){this.style.zIndex=c+h
    });
    this[0].style.zIndex=c+f.length
    }});
    a.ui.plugin.add("draggable","zIndex",{start:function(d,e){var c=a(e.helper),f=a(this).data("draggable").options;
    if(c.css("zIndex")){f._zIndex=c.css("zIndex")
    }c.css("zIndex",f.zIndex)
    },stop:function(c,d){var e=a(this).data("draggable").options;
    if(e._zIndex){a(d.helper).css("zIndex",e._zIndex)
    }}})
    })(jQuery);
    (function(a,b){a.widget("ui.droppable",{version:"1.9.2",widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var d=this.options,c=d.accept;
    this.isover=0;
    this.isout=1;
    this.accept=a.isFunction(c)?c:function(e){return e.is(c)
    };
    this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};
    a.ui.ddmanager.droppables[d.scope]=a.ui.ddmanager.droppables[d.scope]||[];
    a.ui.ddmanager.droppables[d.scope].push(this);
    (d.addClasses&&this.element.addClass("ui-droppable"))
    },_destroy:function(){var c=a.ui.ddmanager.droppables[this.options.scope];
    for(var d=0;
    d<c.length;
    d++){if(c[d]==this){c.splice(d,1)
    }}this.element.removeClass("ui-droppable ui-droppable-disabled")
    },_setOption:function(c,d){if(c=="accept"){this.accept=a.isFunction(d)?d:function(e){return e.is(d)
    }
    }a.Widget.prototype._setOption.apply(this,arguments)
    },_activate:function(d){var c=a.ui.ddmanager.current;
    if(this.options.activeClass){this.element.addClass(this.options.activeClass)
    }(c&&this._trigger("activate",d,this.ui(c)))
    },_deactivate:function(d){var c=a.ui.ddmanager.current;
    if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
    }(c&&this._trigger("deactivate",d,this.ui(c)))
    },_over:function(d){var c=a.ui.ddmanager.current;
    if(!c||(c.currentItem||c.element)[0]==this.element[0]){return
    }if(this.accept.call(this.element[0],(c.currentItem||c.element))){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)
    }this._trigger("over",d,this.ui(c))
    }},_out:function(d){var c=a.ui.ddmanager.current;
    if(!c||(c.currentItem||c.element)[0]==this.element[0]){return
    }if(this.accept.call(this.element[0],(c.currentItem||c.element))){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)
    }this._trigger("out",d,this.ui(c))
    }},_drop:function(d,e){var c=e||a.ui.ddmanager.current;
    if(!c||(c.currentItem||c.element)[0]==this.element[0]){return false
    }var f=false;
    this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var g=a.data(this,"droppable");
    if(g.options.greedy&&!g.options.disabled&&g.options.scope==c.options.scope&&g.accept.call(g.element[0],(c.currentItem||c.element))&&a.ui.intersect(c,a.extend(g,{offset:g.element.offset()}),g.options.tolerance)){f=true;
    return false
    }});
    if(f){return false
    }if(this.accept.call(this.element[0],(c.currentItem||c.element))){if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
    }if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)
    }this._trigger("drop",d,this.ui(c));
    return this.element
    }return false
    },ui:function(d){return{draggable:(d.currentItem||d.element),helper:d.helper,position:d.position,offset:d.positionAbs}
    }});
    a.ui.intersect=function(q,j,o){if(!j.offset){return false
    }var e=(q.positionAbs||q.position.absolute).left,d=e+q.helperProportions.width,n=(q.positionAbs||q.position.absolute).top,m=n+q.helperProportions.height;
    var g=j.offset.left,c=g+j.proportions.width,p=j.offset.top,k=p+j.proportions.height;
    switch(o){case"fit":return(g<=e&&d<=c&&p<=n&&m<=k);
    break;
    case"intersect":return(g<e+(q.helperProportions.width/2)&&d-(q.helperProportions.width/2)<c&&p<n+(q.helperProportions.height/2)&&m-(q.helperProportions.height/2)<k);
    break;
    case"pointer":var h=((q.positionAbs||q.position.absolute).left+(q.clickOffset||q.offset.click).left),i=((q.positionAbs||q.position.absolute).top+(q.clickOffset||q.offset.click).top),f=a.ui.isOver(i,h,p,g,j.proportions.height,j.proportions.width);
    return f;
    break;
    case"touch":return((n>=p&&n<=k)||(m>=p&&m<=k)||(n<p&&m>k))&&((e>=g&&e<=c)||(d>=g&&d<=c)||(e<g&&d>c));
    break;
    default:return false;
    break
    }};
    a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(f,h){var c=a.ui.ddmanager.droppables[f.options.scope]||[];
    var g=h?h.type:null;
    var k=(f.currentItem||f.element).find(":data(droppable)").andSelf();
    droppablesLoop:for(var e=0;
    e<c.length;
    e++){if(c[e].options.disabled||(f&&!c[e].accept.call(c[e].element[0],(f.currentItem||f.element)))){continue
    }for(var d=0;
    d<k.length;
    d++){if(k[d]==c[e].element[0]){c[e].proportions.height=0;
    continue droppablesLoop
    }}c[e].visible=c[e].element.css("display")!="none";
    if(!c[e].visible){continue
    }if(g=="mousedown"){c[e]._activate.call(c[e],h)
    }c[e].offset=c[e].element.offset();
    c[e].proportions={width:c[e].element[0].offsetWidth,height:c[e].element[0].offsetHeight}
    }},drop:function(c,d){var e=false;
    a.each(a.ui.ddmanager.droppables[c.options.scope]||[],function(){if(!this.options){return
    }if(!this.options.disabled&&this.visible&&a.ui.intersect(c,this,this.options.tolerance)){e=this._drop.call(this,d)||e
    }if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(c.currentItem||c.element))){this.isout=1;
    this.isover=0;
    this._deactivate.call(this,d)
    }});
    return e
    },dragStart:function(c,d){c.element.parentsUntil("body").bind("scroll.droppable",function(){if(!c.options.refreshPositions){a.ui.ddmanager.prepareOffsets(c,d)
    }})
    },drag:function(c,d){if(c.options.refreshPositions){a.ui.ddmanager.prepareOffsets(c,d)
    }a.each(a.ui.ddmanager.droppables[c.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return
    }var g=a.ui.intersect(c,this,this.options.tolerance);
    var i=!g&&this.isover==1?"isout":(g&&this.isover==0?"isover":null);
    if(!i){return
    }var h;
    if(this.options.greedy){var f=this.options.scope;
    var e=this.element.parents(":data(droppable)").filter(function(){return a.data(this,"droppable").options.scope===f
    });
    if(e.length){h=a.data(e[0],"droppable");
    h.greedyChild=(i=="isover"?1:0)
    }}if(h&&i=="isover"){h.isover=0;
    h.isout=1;
    h._out.call(h,d)
    }this[i]=1;
    this[i=="isout"?"isover":"isout"]=0;
    this[i=="isover"?"_over":"_out"].call(this,d);
    if(h&&i=="isout"){h.isout=0;
    h.isover=1;
    h._over.call(h,d)
    }})
    },dragStop:function(c,d){c.element.parentsUntil("body").unbind("scroll.droppable");
    if(!c.options.refreshPositions){a.ui.ddmanager.prepareOffsets(c,d)
    }}}
    })(jQuery);
    (function(c,d){c.widget("ui.resizable",c.ui.mouse,{version:"1.9.2",widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1000},_create:function(){var h=this,k=this.options;
    this.element.addClass("ui-resizable");
    c.extend(this,{_aspectRatio:!!(k.aspectRatio),aspectRatio:k.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:k.helper||k.ghost||k.animate?k.helper||"ui-resizable-helper":null});
    if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){this.element.wrap(c('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));
    this.element=this.element.parent().data("resizable",this.element.data("resizable"));
    this.elementIsWrapper=true;
    this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});
    this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});
    this.originalResizeStyle=this.originalElement.css("resize");
    this.originalElement.css("resize","none");
    this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));
    this.originalElement.css({margin:this.originalElement.css("margin")});
    this._proportionallyResize()
    }this.handles=k.handles||(!c(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});
    if(this.handles.constructor==String){if(this.handles=="all"){this.handles="n,e,s,w,se,sw,ne,nw"
    }var l=this.handles.split(",");
    this.handles={};
    for(var f=0;
    f<l.length;
    f++){var j=c.trim(l[f]),e="ui-resizable-"+j;
    var g=c('<div class="ui-resizable-handle '+e+'"></div>');
    g.css({zIndex:k.zIndex});
    if("se"==j){g.addClass("ui-icon ui-icon-gripsmall-diagonal-se")
    }this.handles[j]=".ui-resizable-"+j;
    this.element.append(g)
    }}this._renderAxis=function(q){q=q||this.element;
    for(var n in this.handles){if(this.handles[n].constructor==String){this.handles[n]=c(this.handles[n],this.element).show()
    }if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var o=c(this.handles[n],this.element),p=0;
    p=/sw|ne|nw|se|n|s/.test(n)?o.outerHeight():o.outerWidth();
    var m=["padding",/ne|nw|n/.test(n)?"Top":/se|sw|s/.test(n)?"Bottom":/^e$/.test(n)?"Right":"Left"].join("");
    q.css(m,p);
    this._proportionallyResize()
    }if(!c(this.handles[n]).length){continue
    }}};
    this._renderAxis(this.element);
    this._handles=c(".ui-resizable-handle",this.element).disableSelection();
    this._handles.mouseover(function(){if(!h.resizing){if(this.className){var i=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
    }h.axis=i&&i[1]?i[1]:"se"
    }});
    if(k.autoHide){this._handles.hide();
    c(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(k.disabled){return
    }c(this).removeClass("ui-resizable-autohide");
    h._handles.show()
    }).mouseleave(function(){if(k.disabled){return
    }if(!h.resizing){c(this).addClass("ui-resizable-autohide");
    h._handles.hide()
    }})
    }this._mouseInit()
    },_destroy:function(){this._mouseDestroy();
    var e=function(g){c(g).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
    };
    if(this.elementIsWrapper){e(this.element);
    var f=this.element;
    this.originalElement.css({position:f.css("position"),width:f.outerWidth(),height:f.outerHeight(),top:f.css("top"),left:f.css("left")}).insertAfter(f);
    f.remove()
    }this.originalElement.css("resize",this.originalResizeStyle);
    e(this.originalElement);
    return this
    },_mouseCapture:function(f){var g=false;
    for(var e in this.handles){if(c(this.handles[e])[0]==f.target){g=true
    }}return !this.options.disabled&&g
    },_mouseStart:function(g){var j=this.options,f=this.element.position(),e=this.element;
    this.resizing=true;
    this.documentScroll={top:c(document).scrollTop(),left:c(document).scrollLeft()};
    if(e.is(".ui-draggable")||(/absolute/).test(e.css("position"))){e.css({position:"absolute",top:f.top,left:f.left})
    }this._renderProxy();
    var k=b(this.helper.css("left")),h=b(this.helper.css("top"));
    if(j.containment){k+=c(j.containment).scrollLeft()||0;
    h+=c(j.containment).scrollTop()||0
    }this.offset=this.helper.offset();
    this.position={left:k,top:h};
    this.size=this._helper?{width:e.outerWidth(),height:e.outerHeight()}:{width:e.width(),height:e.height()};
    this.originalSize=this._helper?{width:e.outerWidth(),height:e.outerHeight()}:{width:e.width(),height:e.height()};
    this.originalPosition={left:k,top:h};
    this.sizeDiff={width:e.outerWidth()-e.width(),height:e.outerHeight()-e.height()};
    this.originalMousePosition={left:g.pageX,top:g.pageY};
    this.aspectRatio=(typeof j.aspectRatio=="number")?j.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);
    var i=c(".ui-resizable-"+this.axis).css("cursor");
    c("body").css("cursor",i=="auto"?this.axis+"-resize":i);
    e.addClass("ui-resizable-resizing");
    this._propagate("start",g);
    return true
    },_mouseDrag:function(e){var g=this.helper,f=this.options,l={},k=this,i=this.originalMousePosition,m=this.axis;
    var p=(e.pageX-i.left)||0,n=(e.pageY-i.top)||0;
    var h=this._change[m];
    if(!h){return false
    }var j=h.apply(this,[e,p,n]);
    this._updateVirtualBoundaries(e.shiftKey);
    if(this._aspectRatio||e.shiftKey){j=this._updateRatio(j,e)
    }j=this._respectSize(j,e);
    this._propagate("resize",e);
    g.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});
    if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()
    }this._updateCache(j);
    this._trigger("resize",e,this.ui());
    return false
    },_mouseStop:function(h){this.resizing=false;
    var i=this.options,l=this;
    if(this._helper){var g=this._proportionallyResizeElements,e=g.length&&(/textarea/i).test(g[0].nodeName),f=e&&c.ui.hasScroll(g[0],"left")?0:l.sizeDiff.height,k=e?0:l.sizeDiff.width;
    var n={width:(l.helper.width()-k),height:(l.helper.height()-f)},j=(parseInt(l.element.css("left"),10)+(l.position.left-l.originalPosition.left))||null,m=(parseInt(l.element.css("top"),10)+(l.position.top-l.originalPosition.top))||null;
    if(!i.animate){this.element.css(c.extend(n,{top:m,left:j}))
    }l.helper.height(l.size.height);
    l.helper.width(l.size.width);
    if(this._helper&&!i.animate){this._proportionallyResize()
    }}c("body").css("cursor","auto");
    this.element.removeClass("ui-resizable-resizing");
    this._propagate("stop",h);
    if(this._helper){this.helper.remove()
    }return false
    },_updateVirtualBoundaries:function(g){var j=this.options,i,h,f,k,e;
    e={minWidth:a(j.minWidth)?j.minWidth:0,maxWidth:a(j.maxWidth)?j.maxWidth:Infinity,minHeight:a(j.minHeight)?j.minHeight:0,maxHeight:a(j.maxHeight)?j.maxHeight:Infinity};
    if(this._aspectRatio||g){i=e.minHeight*this.aspectRatio;
    f=e.minWidth/this.aspectRatio;
    h=e.maxHeight*this.aspectRatio;
    k=e.maxWidth/this.aspectRatio;
    if(i>e.minWidth){e.minWidth=i
    }if(f>e.minHeight){e.minHeight=f
    }if(h<e.maxWidth){e.maxWidth=h
    }if(k<e.maxHeight){e.maxHeight=k
    }}this._vBoundaries=e
    },_updateCache:function(e){var f=this.options;
    this.offset=this.helper.offset();
    if(a(e.left)){this.position.left=e.left
    }if(a(e.top)){this.position.top=e.top
    }if(a(e.height)){this.size.height=e.height
    }if(a(e.width)){this.size.width=e.width
    }},_updateRatio:function(h,g){var i=this.options,j=this.position,f=this.size,e=this.axis;
    if(a(h.height)){h.width=(h.height*this.aspectRatio)
    }else{if(a(h.width)){h.height=(h.width/this.aspectRatio)
    }}if(e=="sw"){h.left=j.left+(f.width-h.width);
    h.top=null
    }if(e=="nw"){h.top=j.top+(f.height-h.height);
    h.left=j.left+(f.width-h.width)
    }return h
    },_respectSize:function(l,g){var j=this.helper,i=this._vBoundaries,r=this._aspectRatio||g.shiftKey,q=this.axis,t=a(l.width)&&i.maxWidth&&(i.maxWidth<l.width),m=a(l.height)&&i.maxHeight&&(i.maxHeight<l.height),h=a(l.width)&&i.minWidth&&(i.minWidth>l.width),s=a(l.height)&&i.minHeight&&(i.minHeight>l.height);
    if(h){l.width=i.minWidth
    }if(s){l.height=i.minHeight
    }if(t){l.width=i.maxWidth
    }if(m){l.height=i.maxHeight
    }var f=this.originalPosition.left+this.originalSize.width,p=this.position.top+this.size.height;
    var k=/sw|nw|w/.test(q),e=/nw|ne|n/.test(q);
    if(h&&k){l.left=f-i.minWidth
    }if(t&&k){l.left=f-i.maxWidth
    }if(s&&e){l.top=p-i.minHeight
    }if(m&&e){l.top=p-i.maxHeight
    }var n=!l.width&&!l.height;
    if(n&&!l.left&&l.top){l.top=null
    }else{if(n&&!l.top&&l.left){l.left=null
    }}return l
    },_proportionallyResize:function(){var k=this.options;
    if(!this._proportionallyResizeElements.length){return
    }var g=this.helper||this.element;
    for(var f=0;
    f<this._proportionallyResizeElements.length;
    f++){var h=this._proportionallyResizeElements[f];
    if(!this.borderDif){var e=[h.css("borderTopWidth"),h.css("borderRightWidth"),h.css("borderBottomWidth"),h.css("borderLeftWidth")],j=[h.css("paddingTop"),h.css("paddingRight"),h.css("paddingBottom"),h.css("paddingLeft")];
    this.borderDif=c.map(e,function(l,n){var m=parseInt(l,10)||0,o=parseInt(j[n],10)||0;
    return m+o
    })
    }h.css({height:(g.height()-this.borderDif[0]-this.borderDif[2])||0,width:(g.width()-this.borderDif[1]-this.borderDif[3])||0})
    }},_renderProxy:function(){var e=this.element,h=this.options;
    this.elementOffset=e.offset();
    if(this._helper){this.helper=this.helper||c('<div style="overflow:hidden;"></div>');
    var f=(c.ui.ie6?1:0),g=(c.ui.ie6?2:-1);
    this.helper.addClass(this._helper).css({width:this.element.outerWidth()+g,height:this.element.outerHeight()+g,position:"absolute",left:this.elementOffset.left-f+"px",top:this.elementOffset.top-f+"px",zIndex:++h.zIndex});
    this.helper.appendTo("body").disableSelection()
    }else{this.helper=this.element
    }},_change:{e:function(g,f,e){return{width:this.originalSize.width+f}
    },w:function(h,f,e){var j=this.options,g=this.originalSize,i=this.originalPosition;
    return{left:i.left+f,width:g.width-f}
    },n:function(h,f,e){var j=this.options,g=this.originalSize,i=this.originalPosition;
    return{top:i.top+e,height:g.height-e}
    },s:function(g,f,e){return{height:this.originalSize.height+e}
    },se:function(g,f,e){return c.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[g,f,e]))
    },sw:function(g,f,e){return c.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[g,f,e]))
    },ne:function(g,f,e){return c.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[g,f,e]))
    },nw:function(g,f,e){return c.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[g,f,e]))
    }},_propagate:function(f,e){c.ui.plugin.call(this,f,[e,this.ui()]);
    (f!="resize"&&this._trigger(f,e,this.ui()))
    },plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}
    }});
    c.ui.plugin.add("resizable","alsoResize",{start:function(f,g){var e=c(this).data("resizable"),i=e.options;
    var h=function(j){c(j).each(function(){var k=c(this);
    k.data("resizable-alsoresize",{width:parseInt(k.width(),10),height:parseInt(k.height(),10),left:parseInt(k.css("left"),10),top:parseInt(k.css("top"),10)})
    })
    };
    if(typeof(i.alsoResize)=="object"&&!i.alsoResize.parentNode){if(i.alsoResize.length){i.alsoResize=i.alsoResize[0];
    h(i.alsoResize)
    }else{c.each(i.alsoResize,function(j){h(j)
    })
    }}else{h(i.alsoResize)
    }},resize:function(g,i){var f=c(this).data("resizable"),j=f.options,h=f.originalSize,l=f.originalPosition;
    var k={height:(f.size.height-h.height)||0,width:(f.size.width-h.width)||0,top:(f.position.top-l.top)||0,left:(f.position.left-l.left)||0},e=function(m,n){c(m).each(function(){var q=c(this),r=c(this).data("resizable-alsoresize"),p={},o=n&&n.length?n:q.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];
    c.each(o,function(s,u){var t=(r[u]||0)+(k[u]||0);
    if(t&&t>=0){p[u]=t||null
    }});
    q.css(p)
    })
    };
    if(typeof(j.alsoResize)=="object"&&!j.alsoResize.nodeType){c.each(j.alsoResize,function(m,n){e(m,n)
    })
    }else{e(j.alsoResize)
    }},stop:function(e,f){c(this).removeData("resizable-alsoresize")
    }});
    c.ui.plugin.add("resizable","animate",{stop:function(i,p){var m=c(this).data("resizable"),j=m.options;
    var h=m._proportionallyResizeElements,e=h.length&&(/textarea/i).test(h[0].nodeName),f=e&&c.ui.hasScroll(h[0],"left")?0:m.sizeDiff.height,l=e?0:m.sizeDiff.width;
    var g={width:(m.size.width-l),height:(m.size.height-f)},k=(parseInt(m.element.css("left"),10)+(m.position.left-m.originalPosition.left))||null,n=(parseInt(m.element.css("top"),10)+(m.position.top-m.originalPosition.top))||null;
    m.element.animate(c.extend(g,n&&k?{top:n,left:k}:{}),{duration:j.animateDuration,easing:j.animateEasing,step:function(){var o={width:parseInt(m.element.css("width"),10),height:parseInt(m.element.css("height"),10),top:parseInt(m.element.css("top"),10),left:parseInt(m.element.css("left"),10)};
    if(h&&h.length){c(h[0]).css({width:o.width,height:o.height})
    }m._updateCache(o);
    m._propagate("resize",i)
    }})
    }});
    c.ui.plugin.add("resizable","containment",{start:function(f,s){var q=c(this).data("resizable"),j=q.options,l=q.element;
    var g=j.containment,k=(g instanceof c)?g.get(0):(/parent/.test(g))?l.parent().get(0):g;
    if(!k){return
    }q.containerElement=c(k);
    if(/document/.test(g)||g==document){q.containerOffset={left:0,top:0};
    q.containerPosition={left:0,top:0};
    q.parentData={element:c(document),left:0,top:0,width:c(document).width(),height:c(document).height()||document.body.parentNode.scrollHeight}
    }else{var n=c(k),i=[];
    c(["Top","Right","Left","Bottom"]).each(function(p,o){i[p]=b(n.css("padding"+o))
    });
    q.containerOffset=n.offset();
    q.containerPosition=n.position();
    q.containerSize={height:(n.innerHeight()-i[3]),width:(n.innerWidth()-i[1])};
    var r=q.containerOffset,e=q.containerSize.height,m=q.containerSize.width,h=(c.ui.hasScroll(k,"left")?k.scrollWidth:m),t=(c.ui.hasScroll(k)?k.scrollHeight:e);
    q.parentData={element:k,left:r.left,top:r.top,width:h,height:t}
    }},resize:function(g,r){var m=c(this).data("resizable"),i=m.options,f=m.containerSize,q=m.containerOffset,n=m.size,p=m.position,s=m._aspectRatio||g.shiftKey,e={top:0,left:0},h=m.containerElement;
    if(h[0]!=document&&(/static/).test(h.css("position"))){e=q
    }if(p.left<(m._helper?q.left:0)){m.size.width=m.size.width+(m._helper?(m.position.left-q.left):(m.position.left-e.left));
    if(s){m.size.height=m.size.width/m.aspectRatio
    }m.position.left=i.helper?q.left:0
    }if(p.top<(m._helper?q.top:0)){m.size.height=m.size.height+(m._helper?(m.position.top-q.top):m.position.top);
    if(s){m.size.width=m.size.height*m.aspectRatio
    }m.position.top=m._helper?q.top:0
    }m.offset.left=m.parentData.left+m.position.left;
    m.offset.top=m.parentData.top+m.position.top;
    var l=Math.abs((m._helper?m.offset.left-e.left:(m.offset.left-e.left))+m.sizeDiff.width),t=Math.abs((m._helper?m.offset.top-e.top:(m.offset.top-q.top))+m.sizeDiff.height);
    var k=m.containerElement.get(0)==m.element.parent().get(0),j=/relative|absolute/.test(m.containerElement.css("position"));
    if(k&&j){l-=m.parentData.left
    }if(l+m.size.width>=m.parentData.width){m.size.width=m.parentData.width-l;
    if(s){m.size.height=m.size.width/m.aspectRatio
    }}if(t+m.size.height>=m.parentData.height){m.size.height=m.parentData.height-t;
    if(s){m.size.width=m.size.height*m.aspectRatio
    }}},stop:function(f,p){var l=c(this).data("resizable"),g=l.options,m=l.position,n=l.containerOffset,e=l.containerPosition,i=l.containerElement;
    var j=c(l.helper),r=j.offset(),q=j.outerWidth()-l.sizeDiff.width,k=j.outerHeight()-l.sizeDiff.height;
    if(l._helper&&!g.animate&&(/relative/).test(i.css("position"))){c(this).css({left:r.left-e.left-n.left,width:q,height:k})
    }if(l._helper&&!g.animate&&(/static/).test(i.css("position"))){c(this).css({left:r.left-e.left-n.left,width:q,height:k})
    }}});
    c.ui.plugin.add("resizable","ghost",{start:function(g,h){var f=c(this).data("resizable"),i=f.options,e=f.size;
    f.ghost=f.originalElement.clone();
    f.ghost.css({opacity:0.25,display:"block",position:"relative",height:e.height,width:e.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof i.ghost=="string"?i.ghost:"");
    f.ghost.appendTo(f.helper)
    },resize:function(f,g){var e=c(this).data("resizable"),h=e.options;
    if(e.ghost){e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})
    }},stop:function(f,g){var e=c(this).data("resizable"),h=e.options;
    if(e.ghost&&e.helper){e.helper.get(0).removeChild(e.ghost.get(0))
    }}});
    c.ui.plugin.add("resizable","grid",{resize:function(e,n){var k=c(this).data("resizable"),h=k.options,l=k.size,i=k.originalSize,j=k.originalPosition,p=k.axis,m=h._aspectRatio||e.shiftKey;
    h.grid=typeof h.grid=="number"?[h.grid,h.grid]:h.grid;
    var g=Math.round((l.width-i.width)/(h.grid[0]||1))*(h.grid[0]||1),f=Math.round((l.height-i.height)/(h.grid[1]||1))*(h.grid[1]||1);
    if(/^(se|s|e)$/.test(p)){k.size.width=i.width+g;
    k.size.height=i.height+f
    }else{if(/^(ne)$/.test(p)){k.size.width=i.width+g;
    k.size.height=i.height+f;
    k.position.top=j.top-f
    }else{if(/^(sw)$/.test(p)){k.size.width=i.width+g;
    k.size.height=i.height+f;
    k.position.left=j.left-g
    }else{k.size.width=i.width+g;
    k.size.height=i.height+f;
    k.position.top=j.top-f;
    k.position.left=j.left-g
    }}}}});
    var b=function(e){return parseInt(e,10)||0
    };
    var a=function(e){return !isNaN(parseInt(e,10))
    }
    })(jQuery);
    (function(a,b){a.widget("ui.selectable",a.ui.mouse,{version:"1.9.2",options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch"},_create:function(){var c=this;
    this.element.addClass("ui-selectable");
    this.dragged=false;
    var d;
    this.refresh=function(){d=a(c.options.filter,c.element[0]);
    d.addClass("ui-selectee");
    d.each(function(){var e=a(this);
    var f=e.offset();
    a.data(this,"selectable-item",{element:this,$element:e,left:f.left,top:f.top,right:f.left+e.outerWidth(),bottom:f.top+e.outerHeight(),startselected:false,selected:e.hasClass("ui-selected"),selecting:e.hasClass("ui-selecting"),unselecting:e.hasClass("ui-unselecting")})
    })
    };
    this.refresh();
    this.selectees=d.addClass("ui-selectee");
    this._mouseInit();
    this.helper=a("<div class='ui-selectable-helper'></div>")
    },_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");
    this.element.removeClass("ui-selectable ui-selectable-disabled");
    this._mouseDestroy()
    },_mouseStart:function(e){var d=this;
    this.opos=[e.pageX,e.pageY];
    if(this.options.disabled){return
    }var c=this.options;
    this.selectees=a(c.filter,this.element[0]);
    this._trigger("start",e);
    a(c.appendTo).append(this.helper);
    this.helper.css({left:e.clientX,top:e.clientY,width:0,height:0});
    if(c.autoRefresh){this.refresh()
    }this.selectees.filter(".ui-selected").each(function(){var f=a.data(this,"selectable-item");
    f.startselected=true;
    if(!e.metaKey&&!e.ctrlKey){f.$element.removeClass("ui-selected");
    f.selected=false;
    f.$element.addClass("ui-unselecting");
    f.unselecting=true;
    d._trigger("unselecting",e,{unselecting:f.element})
    }});
    a(e.target).parents().andSelf().each(function(){var g=a.data(this,"selectable-item");
    if(g){var f=(!e.metaKey&&!e.ctrlKey)||!g.$element.hasClass("ui-selected");
    g.$element.removeClass(f?"ui-unselecting":"ui-selected").addClass(f?"ui-selecting":"ui-unselecting");
    g.unselecting=!f;
    g.selecting=f;
    g.selected=f;
    if(f){d._trigger("selecting",e,{selecting:g.element})
    }else{d._trigger("unselecting",e,{unselecting:g.element})
    }return false
    }})
    },_mouseDrag:function(j){var i=this;
    this.dragged=true;
    if(this.options.disabled){return
    }var e=this.options;
    var d=this.opos[0],h=this.opos[1],c=j.pageX,g=j.pageY;
    if(d>c){var f=c;
    c=d;
    d=f
    }if(h>g){var f=g;
    g=h;
    h=f
    }this.helper.css({left:d,top:h,width:c-d,height:g-h});
    this.selectees.each(function(){var k=a.data(this,"selectable-item");
    if(!k||k.element==i.element[0]){return
    }var l=false;
    if(e.tolerance=="touch"){l=(!(k.left>c||k.right<d||k.top>g||k.bottom<h))
    }else{if(e.tolerance=="fit"){l=(k.left>d&&k.right<c&&k.top>h&&k.bottom<g)
    }}if(l){if(k.selected){k.$element.removeClass("ui-selected");
    k.selected=false
    }if(k.unselecting){k.$element.removeClass("ui-unselecting");
    k.unselecting=false
    }if(!k.selecting){k.$element.addClass("ui-selecting");
    k.selecting=true;
    i._trigger("selecting",j,{selecting:k.element})
    }}else{if(k.selecting){if((j.metaKey||j.ctrlKey)&&k.startselected){k.$element.removeClass("ui-selecting");
    k.selecting=false;
    k.$element.addClass("ui-selected");
    k.selected=true
    }else{k.$element.removeClass("ui-selecting");
    k.selecting=false;
    if(k.startselected){k.$element.addClass("ui-unselecting");
    k.unselecting=true
    }i._trigger("unselecting",j,{unselecting:k.element})
    }}if(k.selected){if(!j.metaKey&&!j.ctrlKey&&!k.startselected){k.$element.removeClass("ui-selected");
    k.selected=false;
    k.$element.addClass("ui-unselecting");
    k.unselecting=true;
    i._trigger("unselecting",j,{unselecting:k.element})
    }}}});
    return false
    },_mouseStop:function(e){var d=this;
    this.dragged=false;
    var c=this.options;
    a(".ui-unselecting",this.element[0]).each(function(){var f=a.data(this,"selectable-item");
    f.$element.removeClass("ui-unselecting");
    f.unselecting=false;
    f.startselected=false;
    d._trigger("unselected",e,{unselected:f.element})
    });
    a(".ui-selecting",this.element[0]).each(function(){var f=a.data(this,"selectable-item");
    f.$element.removeClass("ui-selecting").addClass("ui-selected");
    f.selecting=false;
    f.selected=true;
    f.startselected=true;
    d._trigger("selected",e,{selected:f.element})
    });
    this._trigger("stop",e);
    this.helper.remove();
    return false
    }})
    })(jQuery);
    (function(a,b){a.widget("ui.sortable",a.ui.mouse,{version:"1.9.2",widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000},_create:function(){var c=this.options;
    this.containerCache={};
    this.element.addClass("ui-sortable");
    this.refresh();
    this.floating=this.items.length?c.axis==="x"||(/left|right/).test(this.items[0].item.css("float"))||(/inline|table-cell/).test(this.items[0].item.css("display")):false;
    this.offset=this.element.offset();
    this._mouseInit();
    this.ready=true
    },_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled");
    this._mouseDestroy();
    for(var c=this.items.length-1;
    c>=0;
    c--){this.items[c].item.removeData(this.widgetName+"-item")
    }return this
    },_setOption:function(c,d){if(c==="disabled"){this.options[c]=d;
    this.widget().toggleClass("ui-sortable-disabled",!!d)
    }else{a.Widget.prototype._setOption.apply(this,arguments)
    }},_mouseCapture:function(f,g){var e=this;
    if(this.reverting){return false
    }if(this.options.disabled||this.options.type=="static"){return false
    }this._refreshItems(f);
    var d=null,c=a(f.target).parents().each(function(){if(a.data(this,e.widgetName+"-item")==e){d=a(this);
    return false
    }});
    if(a.data(f.target,e.widgetName+"-item")==e){d=a(f.target)
    }if(!d){return false
    }if(this.options.handle&&!g){var h=false;
    a(this.options.handle,d).find("*").andSelf().each(function(){if(this==f.target){h=true
    }});
    if(!h){return false
    }}this.currentItem=d;
    this._removeCurrentsFromItems();
    return true
    },_mouseStart:function(e,f,c){var g=this.options;
    this.currentContainer=this;
    this.refreshPositions();
    this.helper=this._createHelper(e);
    this._cacheHelperProportions();
    this._cacheMargins();
    this.scrollParent=this.helper.scrollParent();
    this.offset=this.currentItem.offset();
    this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
    a.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
    this.helper.css("position","absolute");
    this.cssPosition=this.helper.css("position");
    this.originalPosition=this._generatePosition(e);
    this.originalPageX=e.pageX;
    this.originalPageY=e.pageY;
    (g.cursorAt&&this._adjustOffsetFromHelper(g.cursorAt));
    this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
    if(this.helper[0]!=this.currentItem[0]){this.currentItem.hide()
    }this._createPlaceholder();
    if(g.containment){this._setContainment()
    }if(g.cursor){if(a("body").css("cursor")){this._storedCursor=a("body").css("cursor")
    }a("body").css("cursor",g.cursor)
    }if(g.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")
    }this.helper.css("opacity",g.opacity)
    }if(g.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")
    }this.helper.css("zIndex",g.zIndex)
    }if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){this.overflowOffset=this.scrollParent.offset()
    }this._trigger("start",e,this._uiHash());
    if(!this._preserveHelperProportions){this._cacheHelperProportions()
    }if(!c){for(var d=this.containers.length-1;
    d>=0;
    d--){this.containers[d]._trigger("activate",e,this._uiHash(this))
    }}if(a.ui.ddmanager){a.ui.ddmanager.current=this
    }if(a.ui.ddmanager&&!g.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,e)
    }this.dragging=true;
    this.helper.addClass("ui-sortable-helper");
    this._mouseDrag(e);
    return true
    },_mouseDrag:function(g){this.position=this._generatePosition(g);
    this.positionAbs=this._convertPositionTo("absolute");
    if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs
    }if(this.options.scroll){var h=this.options,c=false;
    if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-g.pageY<h.scrollSensitivity){this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop+h.scrollSpeed
    }else{if(g.pageY-this.overflowOffset.top<h.scrollSensitivity){this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop-h.scrollSpeed
    }}if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-g.pageX<h.scrollSensitivity){this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft+h.scrollSpeed
    }else{if(g.pageX-this.overflowOffset.left<h.scrollSensitivity){this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft-h.scrollSpeed
    }}}else{if(g.pageY-a(document).scrollTop()<h.scrollSensitivity){c=a(document).scrollTop(a(document).scrollTop()-h.scrollSpeed)
    }else{if(a(window).height()-(g.pageY-a(document).scrollTop())<h.scrollSensitivity){c=a(document).scrollTop(a(document).scrollTop()+h.scrollSpeed)
    }}if(g.pageX-a(document).scrollLeft()<h.scrollSensitivity){c=a(document).scrollLeft(a(document).scrollLeft()-h.scrollSpeed)
    }else{if(a(window).width()-(g.pageX-a(document).scrollLeft())<h.scrollSensitivity){c=a(document).scrollLeft(a(document).scrollLeft()+h.scrollSpeed)
    }}}if(c!==false&&a.ui.ddmanager&&!h.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,g)
    }}this.positionAbs=this._convertPositionTo("absolute");
    if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"
    }if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"
    }for(var e=this.items.length-1;
    e>=0;
    e--){var f=this.items[e],d=f.item[0],j=this._intersectsWithPointer(f);
    if(!j){continue
    }if(f.instance!==this.currentContainer){continue
    }if(d!=this.currentItem[0]&&this.placeholder[j==1?"next":"prev"]()[0]!=d&&!a.contains(this.placeholder[0],d)&&(this.options.type=="semi-dynamic"?!a.contains(this.element[0],d):true)){this.direction=j==1?"down":"up";
    if(this.options.tolerance=="pointer"||this._intersectsWithSides(f)){this._rearrange(g,f)
    }else{break
    }this._trigger("change",g,this._uiHash());
    break
    }}this._contactContainers(g);
    if(a.ui.ddmanager){a.ui.ddmanager.drag(this,g)
    }this._trigger("sort",g,this._uiHash());
    this.lastPositionAbs=this.positionAbs;
    return false
    },_mouseStop:function(d,e){if(!d){return
    }if(a.ui.ddmanager&&!this.options.dropBehaviour){a.ui.ddmanager.drop(this,d)
    }if(this.options.revert){var c=this;
    var f=this.placeholder.offset();
    this.reverting=true;
    a(this.helper).animate({left:f.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:f.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){c._clear(d)
    })
    }else{this._clear(d,e)
    }return false
    },cancel:function(){if(this.dragging){this._mouseUp({target:null});
    if(this.options.helper=="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
    }else{this.currentItem.show()
    }for(var c=this.containers.length-1;
    c>=0;
    c--){this.containers[c]._trigger("deactivate",null,this._uiHash(this));
    if(this.containers[c].containerCache.over){this.containers[c]._trigger("out",null,this._uiHash(this));
    this.containers[c].containerCache.over=0
    }}}if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])
    }if(this.options.helper!="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()
    }a.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});
    if(this.domPosition.prev){a(this.domPosition.prev).after(this.currentItem)
    }else{a(this.domPosition.parent).prepend(this.currentItem)
    }}return this
    },serialize:function(e){var c=this._getItemsAsjQuery(e&&e.connected);
    var d=[];
    e=e||{};
    a(c).each(function(){var f=(a(e.item||this).attr(e.attribute||"id")||"").match(e.expression||(/(.+)[-=_](.+)/));
    if(f){d.push((e.key||f[1]+"[]")+"="+(e.key&&e.expression?f[1]:f[2]))
    }});
    if(!d.length&&e.key){d.push(e.key+"=")
    }return d.join("&")
    },toArray:function(e){var c=this._getItemsAsjQuery(e&&e.connected);
    var d=[];
    e=e||{};
    c.each(function(){d.push(a(e.item||this).attr(e.attribute||"id")||"")
    });
    return d
    },_intersectsWith:function(m){var e=this.positionAbs.left,d=e+this.helperProportions.width,k=this.positionAbs.top,j=k+this.helperProportions.height;
    var f=m.left,c=f+m.width,n=m.top,i=n+m.height;
    var o=this.offset.click.top,h=this.offset.click.left;
    var g=(k+o)>n&&(k+o)<i&&(e+h)>f&&(e+h)<c;
    if(this.options.tolerance=="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>m[this.floating?"width":"height"])){return g
    }else{return(f<e+(this.helperProportions.width/2)&&d-(this.helperProportions.width/2)<c&&n<k+(this.helperProportions.height/2)&&j-(this.helperProportions.height/2)<i)
    }},_intersectsWithPointer:function(e){var f=(this.options.axis==="x")||a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,e.top,e.height),d=(this.options.axis==="y")||a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,e.left,e.width),h=f&&d,c=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();
    if(!h){return false
    }return this.floating?(((g&&g=="right")||c=="down")?2:1):(c&&(c=="down"?2:1))
    },_intersectsWithSides:function(f){var d=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,f.top+(f.height/2),f.height),e=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,f.left+(f.width/2),f.width),c=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();
    if(this.floating&&g){return((g=="right"&&e)||(g=="left"&&!e))
    }else{return c&&((c=="down"&&d)||(c=="up"&&!d))
    }},_getDragVerticalDirection:function(){var c=this.positionAbs.top-this.lastPositionAbs.top;
    return c!=0&&(c>0?"down":"up")
    },_getDragHorizontalDirection:function(){var c=this.positionAbs.left-this.lastPositionAbs.left;
    return c!=0&&(c>0?"right":"left")
    },refresh:function(c){this._refreshItems(c);
    this.refreshPositions();
    return this
    },_connectWith:function(){var c=this.options;
    return c.connectWith.constructor==String?[c.connectWith]:c.connectWith
    },_getItemsAsjQuery:function(h){var c=[];
    var e=[];
    var g=this._connectWith();
    if(g&&h){for(var f=g.length-1;
    f>=0;
    f--){var l=a(g[f]);
    for(var d=l.length-1;
    d>=0;
    d--){var k=a.data(l[d],this.widgetName);
    if(k&&k!=this&&!k.options.disabled){e.push([a.isFunction(k.options.items)?k.options.items.call(k.element):a(k.options.items,k.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),k])
    }}}}e.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);
    for(var f=e.length-1;
    f>=0;
    f--){e[f][0].each(function(){c.push(this)
    })
    }return a(c)
    },_removeCurrentsFromItems:function(){var c=this.currentItem.find(":data("+this.widgetName+"-item)");
    this.items=a.grep(this.items,function(e){for(var d=0;
    d<c.length;
    d++){if(c[d]==e.item[0]){return false
    }}return true
    })
    },_refreshItems:function(c){this.items=[];
    this.containers=[this];
    var k=this.items;
    var g=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],c,{item:this.currentItem}):a(this.options.items,this.element),this]];
    var m=this._connectWith();
    if(m&&this.ready){for(var f=m.length-1;
    f>=0;
    f--){var n=a(m[f]);
    for(var e=n.length-1;
    e>=0;
    e--){var h=a.data(n[e],this.widgetName);
    if(h&&h!=this&&!h.options.disabled){g.push([a.isFunction(h.options.items)?h.options.items.call(h.element[0],c,{item:this.currentItem}):a(h.options.items,h.element),h]);
    this.containers.push(h)
    }}}}for(var f=g.length-1;
    f>=0;
    f--){var l=g[f][1];
    var d=g[f][0];
    for(var e=0,o=d.length;
    e<o;
    e++){var p=a(d[e]);
    p.data(this.widgetName+"-item",l);
    k.push({item:p,instance:l,width:0,height:0,left:0,top:0})
    }}},refreshPositions:function(c){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()
    }for(var e=this.items.length-1;
    e>=0;
    e--){var f=this.items[e];
    if(f.instance!=this.currentContainer&&this.currentContainer&&f.item[0]!=this.currentItem[0]){continue
    }var d=this.options.toleranceElement?a(this.options.toleranceElement,f.item):f.item;
    if(!c){f.width=d.outerWidth();
    f.height=d.outerHeight()
    }var g=d.offset();
    f.left=g.left;
    f.top=g.top
    }if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)
    }else{for(var e=this.containers.length-1;
    e>=0;
    e--){var g=this.containers[e].element.offset();
    this.containers[e].containerCache.left=g.left;
    this.containers[e].containerCache.top=g.top;
    this.containers[e].containerCache.width=this.containers[e].element.outerWidth();
    this.containers[e].containerCache.height=this.containers[e].element.outerHeight()
    }}return this
    },_createPlaceholder:function(d){d=d||this;
    var e=d.options;
    if(!e.placeholder||e.placeholder.constructor==String){var c=e.placeholder;
    e.placeholder={element:function(){var f=a(document.createElement(d.currentItem[0].nodeName)).addClass(c||d.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
    if(!c){f.style.visibility="hidden"
    }return f
    },update:function(f,g){if(c&&!e.forcePlaceholderSize){return
    }if(!g.height()){g.height(d.currentItem.innerHeight()-parseInt(d.currentItem.css("paddingTop")||0,10)-parseInt(d.currentItem.css("paddingBottom")||0,10))
    }if(!g.width()){g.width(d.currentItem.innerWidth()-parseInt(d.currentItem.css("paddingLeft")||0,10)-parseInt(d.currentItem.css("paddingRight")||0,10))
    }}}
    }d.placeholder=a(e.placeholder.element.call(d.element,d.currentItem));
    d.currentItem.after(d.placeholder);
    e.placeholder.update(d,d.placeholder)
    },_contactContainers:function(c){var e=null,n=null;
    for(var h=this.containers.length-1;
    h>=0;
    h--){if(a.contains(this.currentItem[0],this.containers[h].element[0])){continue
    }if(this._intersectsWith(this.containers[h].containerCache)){if(e&&a.contains(this.containers[h].element[0],e.element[0])){continue
    }e=this.containers[h];
    n=h
    }else{if(this.containers[h].containerCache.over){this.containers[h]._trigger("out",c,this._uiHash(this));
    this.containers[h].containerCache.over=0
    }}}if(!e){return
    }if(this.containers.length===1){this.containers[n]._trigger("over",c,this._uiHash(this));
    this.containers[n].containerCache.over=1
    }else{var m=10000;
    var k=null;
    var l=this.containers[n].floating?"left":"top";
    var o=this.containers[n].floating?"width":"height";
    var d=this.positionAbs[l]+this.offset.click[l];
    for(var f=this.items.length-1;
    f>=0;
    f--){if(!a.contains(this.containers[n].element[0],this.items[f].item[0])){continue
    }if(this.items[f].item[0]==this.currentItem[0]){continue
    }var p=this.items[f].item.offset()[l];
    var g=false;
    if(Math.abs(p-d)>Math.abs(p+this.items[f][o]-d)){g=true;
    p+=this.items[f][o]
    }if(Math.abs(p-d)<m){m=Math.abs(p-d);
    k=this.items[f];
    this.direction=g?"up":"down"
    }}if(!k&&!this.options.dropOnEmpty){return
    }this.currentContainer=this.containers[n];
    k?this._rearrange(c,k,null,true):this._rearrange(c,null,this.containers[n].element,true);
    this._trigger("change",c,this._uiHash());
    this.containers[n]._trigger("change",c,this._uiHash(this));
    this.options.placeholder.update(this.currentContainer,this.placeholder);
    this.containers[n]._trigger("over",c,this._uiHash(this));
    this.containers[n].containerCache.over=1
    }},_createHelper:function(d){var e=this.options;
    var c=a.isFunction(e.helper)?a(e.helper.apply(this.element[0],[d,this.currentItem])):(e.helper=="clone"?this.currentItem.clone():this.currentItem);
    if(!c.parents("body").length){a(e.appendTo!="parent"?e.appendTo:this.currentItem[0].parentNode)[0].appendChild(c[0])
    }if(c[0]==this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}
    }if(c[0].style.width==""||e.forceHelperSize){c.width(this.currentItem.width())
    }if(c[0].style.height==""||e.forceHelperSize){c.height(this.currentItem.height())
    }return c
    },_adjustOffsetFromHelper:function(c){if(typeof c=="string"){c=c.split(" ")
    }if(a.isArray(c)){c={left:+c[0],top:+c[1]||0}
    }if("left" in c){this.offset.click.left=c.left+this.margins.left
    }if("right" in c){this.offset.click.left=this.helperProportions.width-c.right+this.margins.left
    }if("top" in c){this.offset.click.top=c.top+this.margins.top
    }if("bottom" in c){this.offset.click.top=this.helperProportions.height-c.bottom+this.margins.top
    }},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
    var c=this.offsetParent.offset();
    if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0])){c.left+=this.scrollParent.scrollLeft();
    c.top+=this.scrollParent.scrollTop()
    }if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.ui.ie)){c={top:0,left:0}
    }return{top:c.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:c.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
    },_getRelativeOffset:function(){if(this.cssPosition=="relative"){var c=this.currentItem.position();
    return{top:c.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:c.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
    }else{return{top:0,left:0}
    }},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}
    },_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
    },_setContainment:function(){var f=this.options;
    if(f.containment=="parent"){f.containment=this.helper[0].parentNode
    }if(f.containment=="document"||f.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(f.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(f.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
    }if(!(/^(document|window|parent)$/).test(f.containment)){var d=a(f.containment)[0];
    var e=a(f.containment).offset();
    var c=(a(d).css("overflow")!="hidden");
    this.containment=[e.left+(parseInt(a(d).css("borderLeftWidth"),10)||0)+(parseInt(a(d).css("paddingLeft"),10)||0)-this.margins.left,e.top+(parseInt(a(d).css("borderTopWidth"),10)||0)+(parseInt(a(d).css("paddingTop"),10)||0)-this.margins.top,e.left+(c?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(a(d).css("borderLeftWidth"),10)||0)-(parseInt(a(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,e.top+(c?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(a(d).css("borderTopWidth"),10)||0)-(parseInt(a(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]
    }},_convertPositionTo:function(g,i){if(!i){i=this.position
    }var e=g=="absolute"?1:-1;
    var f=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,h=(/(html|body)/i).test(c[0].tagName);
    return{top:(i.top+this.offset.relative.top*e+this.offset.parent.top*e-((this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(h?0:c.scrollTop()))*e)),left:(i.left+this.offset.relative.left*e+this.offset.parent.left*e-((this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():h?0:c.scrollLeft())*e))}
    },_generatePosition:function(f){var i=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,j=(/(html|body)/i).test(c[0].tagName);
    if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()
    }var e=f.pageX;
    var d=f.pageY;
    if(this.originalPosition){if(this.containment){if(f.pageX-this.offset.click.left<this.containment[0]){e=this.containment[0]+this.offset.click.left
    }if(f.pageY-this.offset.click.top<this.containment[1]){d=this.containment[1]+this.offset.click.top
    }if(f.pageX-this.offset.click.left>this.containment[2]){e=this.containment[2]+this.offset.click.left
    }if(f.pageY-this.offset.click.top>this.containment[3]){d=this.containment[3]+this.offset.click.top
    }}if(i.grid){var h=this.originalPageY+Math.round((d-this.originalPageY)/i.grid[1])*i.grid[1];
    d=this.containment?(!(h-this.offset.click.top<this.containment[1]||h-this.offset.click.top>this.containment[3])?h:(!(h-this.offset.click.top<this.containment[1])?h-i.grid[1]:h+i.grid[1])):h;
    var g=this.originalPageX+Math.round((e-this.originalPageX)/i.grid[0])*i.grid[0];
    e=this.containment?(!(g-this.offset.click.left<this.containment[0]||g-this.offset.click.left>this.containment[2])?g:(!(g-this.offset.click.left<this.containment[0])?g-i.grid[0]:g+i.grid[0])):g
    }}return{top:(d-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+((this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(j?0:c.scrollTop())))),left:(e-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+((this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():j?0:c.scrollLeft())))}
    },_rearrange:function(g,f,d,e){d?d[0].appendChild(this.placeholder[0]):f.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction=="down"?f.item[0]:f.item[0].nextSibling));
    this.counter=this.counter?++this.counter:1;
    var c=this.counter;
    this._delay(function(){if(c==this.counter){this.refreshPositions(!e)
    }})
    },_clear:function(d,e){this.reverting=false;
    var f=[];
    if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem)
    }this._noFinalSort=null;
    if(this.helper[0]==this.currentItem[0]){for(var c in this._storedCSS){if(this._storedCSS[c]=="auto"||this._storedCSS[c]=="static"){this._storedCSS[c]=""
    }}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
    }else{this.currentItem.show()
    }if(this.fromOutside&&!e){f.push(function(g){this._trigger("receive",g,this._uiHash(this.fromOutside))
    })
    }if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!e){f.push(function(g){this._trigger("update",g,this._uiHash())
    })
    }if(this!==this.currentContainer){if(!e){f.push(function(g){this._trigger("remove",g,this._uiHash())
    });
    f.push((function(g){return function(h){g._trigger("receive",h,this._uiHash(this))
    }
    }).call(this,this.currentContainer));
    f.push((function(g){return function(h){g._trigger("update",h,this._uiHash(this))
    }
    }).call(this,this.currentContainer))
    }}for(var c=this.containers.length-1;
    c>=0;
    c--){if(!e){f.push((function(g){return function(h){g._trigger("deactivate",h,this._uiHash(this))
    }
    }).call(this,this.containers[c]))
    }if(this.containers[c].containerCache.over){f.push((function(g){return function(h){g._trigger("out",h,this._uiHash(this))
    }
    }).call(this,this.containers[c]));
    this.containers[c].containerCache.over=0
    }}if(this._storedCursor){a("body").css("cursor",this._storedCursor)
    }if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)
    }if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex)
    }this.dragging=false;
    if(this.cancelHelperRemoval){if(!e){this._trigger("beforeStop",d,this._uiHash());
    for(var c=0;
    c<f.length;
    c++){f[c].call(this,d)
    }this._trigger("stop",d,this._uiHash())
    }this.fromOutside=false;
    return false
    }if(!e){this._trigger("beforeStop",d,this._uiHash())
    }this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
    if(this.helper[0]!=this.currentItem[0]){this.helper.remove()
    }this.helper=null;
    if(!e){for(var c=0;
    c<f.length;
    c++){f[c].call(this,d)
    }this._trigger("stop",d,this._uiHash())
    }this.fromOutside=false;
    return true
    },_trigger:function(){if(a.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel()
    }},_uiHash:function(c){var d=c||this;
    return{helper:d.helper,placeholder:d.placeholder||a([]),position:d.position,originalPosition:d.originalPosition,offset:d.positionAbs,item:d.currentItem,sender:c?c.element:null}
    }})
    })(jQuery);
    !function(a){a(function(){a.support.transition=(function(){var b=(function(){var e=document.createElement("bootstrap"),d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},c;
    for(c in d){if(e.style[c]!==undefined){return d[c]
    }}}());
    return b&&{end:b}
    })()
    })
    }(window.jQuery);
    !function(c){var b=function(e,d){this.options=d;
    this.$element=c(e).delegate('[data-dismiss="modal"]',"click.dismiss.modal",c.proxy(this.hide,this));
    this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)
    };
    b.prototype={constructor:b,toggle:function(){return this[!this.isShown?"show":"hide"]()
    },show:function(){var d=this,f=c.Event("show");
    this.$element.trigger(f);
    if(this.isShown||f.isDefaultPrevented()){return
    }this.isShown=true;
    this.escape();
    this.backdrop(function(){var e=c.support.transition&&d.$element.hasClass("fade");
    if(!d.$element.parent().length){d.$element.appendTo(document.body)
    }d.$element.show();
    if(e){d.$element[0].offsetWidth
    }d.$element.addClass("in").attr("aria-hidden",false);
    d.enforceFocus();
    e?d.$element.one(c.support.transition.end,function(){d.$element.focus().trigger("shown")
    }):d.$element.focus().trigger("shown")
    })
    },hide:function(f){f&&f.preventDefault();
    var d=this;
    f=c.Event("hide");
    this.$element.trigger(f);
    if(!this.isShown||f.isDefaultPrevented()){return
    }this.isShown=false;
    this.escape();
    c(document).off("focusin.modal");
    this.$element.removeClass("in").attr("aria-hidden",true);
    c.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()
    },enforceFocus:function(){var d=this;
    c(document).on("focusin.modal",function(f){if(d.$element[0]!==f.target&&!d.$element.has(f.target).length){d.$element.focus()
    }})
    },escape:function(){var d=this;
    if(this.isShown&&this.options.keyboard){this.$element.on("keyup.dismiss.modal",function(f){f.which==27&&d.hide()
    })
    }else{if(!this.isShown){this.$element.off("keyup.dismiss.modal")
    }}},hideWithTransition:function(){var d=this,e=setTimeout(function(){d.$element.off(c.support.transition.end);
    d.hideModal()
    },500);
    this.$element.one(c.support.transition.end,function(){clearTimeout(e);
    d.hideModal()
    })
    },hideModal:function(){var d=this;
    this.$element.hide();
    this.backdrop(function(){d.removeBackdrop();
    d.$element.trigger("hidden")
    })
    },removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove();
    this.$backdrop=null
    },backdrop:function(g){var f=this,e=this.$element.hasClass("fade")?"fade":"";
    if(this.isShown&&this.options.backdrop){var d=c.support.transition&&e;
    this.$backdrop=c('<div class="modal-backdrop '+e+'" />').appendTo(document.body);
    this.$backdrop.click(this.options.backdrop=="static"?c.proxy(this.$element[0].focus,this.$element[0]):c.proxy(this.hide,this));
    if(d){this.$backdrop[0].offsetWidth
    }this.$backdrop.addClass("in");
    if(!g){return
    }d?this.$backdrop.one(c.support.transition.end,g):g()
    }else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");
    c.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(c.support.transition.end,g):g()
    }else{if(g){g()
    }}}}};
    var a=c.fn.modal;
    c.fn.modal=function(d){return this.each(function(){var g=c(this),f=g.data("modal"),e=c.extend({},c.fn.modal.defaults,g.data(),typeof d=="object"&&d);
    if(!f){g.data("modal",(f=new b(this,e)))
    }if(typeof d=="string"){f[d]()
    }else{if(e.show){f.show()
    }}})
    };
    c.fn.modal.defaults={backdrop:true,keyboard:true,show:true};
    c.fn.modal.Constructor=b;
    c.fn.modal.noConflict=function(){c.fn.modal=a;
    return this
    };
    c(document).on("click.modal.data-api",'[data-toggle="modal"]',function(i){var h=c(this),f=h.attr("href"),d=c(h.attr("data-target")||(f&&f.replace(/.*(?=#[^\s]+$)/,""))),g=d.data("modal")?"toggle":c.extend({remote:!/#/.test(f)&&f},d.data(),h.data());
    i.preventDefault();
    d.modal(g).one("hide",function(){h.focus()
    })
    })
    }(window.jQuery);
    !function(c){var b=function(d){this.element=c(d)
    };
    b.prototype={constructor:b,show:function(){var j=this.element,g=j.closest("ul:not(.dropdown-menu)"),f=j.attr("data-target"),h,d,i;
    if(!f){f=j.attr("href");
    f=f&&f.replace(/.*(?=#[^\s]*$)/,"")
    }if(j.parent("li").hasClass("active")){return
    }h=g.find(".active:last a")[0];
    i=c.Event("show",{relatedTarget:h});
    j.trigger(i);
    if(i.isDefaultPrevented()){return
    }d=c(f);
    this.activate(j.parent("li"),g);
    this.activate(d,d.parent(),function(){j.trigger({type:"shown",relatedTarget:h})
    })
    },activate:function(f,e,i){var d=e.find("> .active"),h=i&&c.support.transition&&d.hasClass("fade");
    function g(){d.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");
    f.addClass("active");
    if(h){f[0].offsetWidth;
    f.addClass("in")
    }else{f.removeClass("fade")
    }if(f.parent(".dropdown-menu")){f.closest("li.dropdown").addClass("active")
    }i&&i()
    }h?d.one(c.support.transition.end,g):g();
    d.removeClass("in")
    }};
    var a=c.fn.tab;
    c.fn.tab=function(d){return this.each(function(){var f=c(this),e=f.data("tab");
    if(!e){f.data("tab",(e=new b(this)))
    }if(typeof d=="string"){e[d]()
    }})
    };
    c.fn.tab.Constructor=b;
    c.fn.tab.noConflict=function(){c.fn.tab=a;
    return this
    };
    c(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(d){d.preventDefault();
    c(this).tab("show")
    })
    }(window.jQuery);
    !function(c){var b=function(e,d){this.options=c.extend({},c.fn.affix.defaults,d);
    this.$window=c(window).on("scroll.affix.data-api",c.proxy(this.checkPosition,this)).on("click.affix.data-api",c.proxy(function(){setTimeout(c.proxy(this.checkPosition,this),1)
    },this));
    this.$element=c(e);
    this.checkPosition()
    };
    b.prototype.checkPosition=function(){if(!this.$element.is(":visible")){return
    }var h=c(document).height(),j=this.$window.scrollTop(),d=this.$element.offset(),k=this.options.offset,f=k.bottom,g=k.top,i="affix affix-top affix-bottom",e;
    if(typeof k!="object"){f=g=k
    }if(typeof g=="function"){g=k.top()
    }if(typeof f=="function"){f=k.bottom()
    }e=this.unpin!=null&&(j+this.unpin<=d.top)?false:f!=null&&(d.top+this.$element.height()>=h-f)?"bottom":g!=null&&j<=g?"top":false;
    if(this.affixed===e){return
    }this.affixed=e;
    this.unpin=e=="bottom"?d.top-j:null;
    this.$element.removeClass(i).addClass("affix"+(e?"-"+e:""))
    };
    var a=c.fn.affix;
    c.fn.affix=function(d){return this.each(function(){var g=c(this),f=g.data("affix"),e=typeof d=="object"&&d;
    if(!f){g.data("affix",(f=new b(this,e)))
    }if(typeof d=="string"){f[d]()
    }})
    };
    c.fn.affix.Constructor=b;
    c.fn.affix.defaults={offset:0};
    c.fn.affix.noConflict=function(){c.fn.affix=a;
    return this
    };
    c(window).on("load",function(){c('[data-spy="affix"]').each(function(){var e=c(this),d=e.data();
    d.offset=d.offset||{};
    d.offsetBottom&&(d.offset.bottom=d.offsetBottom);
    d.offsetTop&&(d.offset.top=d.offsetTop);
    e.affix(d)
    })
    })
    }(window.jQuery);
    !function(b){var c=function(e,d){this.$element=b(e);
    this.$indicators=this.$element.find(".carousel-indicators");
    this.options=d;
    this.options.pause=="hover"&&this.$element.on("mouseenter",b.proxy(this.pause,this)).on("mouseleave",b.proxy(this.cycle,this))
    };
    c.prototype={cycle:function(d){if(!d){this.paused=false
    }if(this.interval){clearInterval(this.interval)
    }this.options.interval&&!this.paused&&(this.interval=setInterval(b.proxy(this.next,this),this.options.interval));
    return this
    },getActiveIndex:function(){this.$active=this.$element.find(".item.active");
    this.$items=this.$active.parent().children();
    return this.$items.index(this.$active)
    },to:function(f){var d=this.getActiveIndex(),e=this;
    if(f>(this.$items.length-1)||f<0){return
    }if(this.sliding){return this.$element.one("slid",function(){e.to(f)
    })
    }if(d==f){return this.pause().cycle()
    }return this.slide(f>d?"next":"prev",b(this.$items[f]))
    },pause:function(d){if(!d){this.paused=true
    }if(this.$element.find(".next, .prev").length&&b.support.transition.end){this.$element.trigger(b.support.transition.end);
    this.cycle(true)
    }clearInterval(this.interval);
    this.interval=null;
    return this
    },next:function(){if(this.sliding){return
    }return this.slide("next")
    },prev:function(){if(this.sliding){return
    }return this.slide("prev")
    },slide:function(o,i){if(!b.support.transition&&this.$element.hasClass("slide")){this.$element.find(".item").stop(true,true)
    }var q=this.$element.find(".item.active"),g=i||q[o](),n=this.interval,p=o=="next"?"left":"right",k=o=="next"?"first":"last",l=this,m;
    this.sliding=true;
    n&&this.pause();
    g=g.length?g:this.$element.find(".item")[k]();
    if(q[0]===g[0]){var d=this.$element.find(".item"),j=d.size(),r=d.index(q);
    g=g.length?g:this.$element.find(".item")[k]();
    if(o==="next"){if(r<j-1){r++
    }else{r=0
    }}else{if(o==="prev"){if(r>0){r--
    }else{r=j-1
    }}}g=d.eq(r)
    }m=b.Event("slide",{relatedTarget:g[0],direction:p});
    if(g.hasClass("active")){return
    }if(this.$indicators.length){this.$indicators.find(".active").removeClass("active");
    this.$element.one("slid",function(){var e=b(l.$indicators.children()[l.getActiveIndex()]);
    e&&e.addClass("active")
    })
    }if(b.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(m);
    if(m.isDefaultPrevented()){return
    }g.addClass(o);
    g[0].offsetWidth;
    q.addClass(p);
    g.addClass(p);
    this.$element.one(b.support.transition.end,function(){g.removeClass([o,p].join(" ")).addClass("active");
    q.removeClass(["active",p].join(" "));
    l.sliding=false;
    setTimeout(function(){l.$element.trigger("slid")
    },0)
    })
    }else{if(!b.support.transition&&this.$element.hasClass("slide")&&this.$element.hasClass("carousel-fade")){this.$element.trigger(m);
    if(m.isDefaultPrevented()){return
    }q.find("div").animate({opacity:0},600,function(){q.removeClass("active");
    l.sliding=false;
    setTimeout(function(){l.$element.trigger("slid")
    },0)
    });
    g.addClass(o).find("div").css({opacity:0}).animate({opacity:1},600,function(){g.removeClass(o).addClass("active")
    })
    }else{if(!b.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(m);
    if(m.isDefaultPrevented()){return
    }this.$element.trigger(m);
    if(m.isDefaultPrevented()){return
    }q.animate({left:(p=="right"?"100%":"-100%")},600,function(){q.removeClass("active");
    l.sliding=false;
    setTimeout(function(){l.$element.trigger("slid")
    },0)
    });
    g.addClass(o).css({left:(p=="right"?"-100%":"100%")}).animate({left:"0"},600,function(){g.removeClass(o).addClass("active")
    })
    }else{this.$element.trigger(m);
    if(m.isDefaultPrevented()){return
    }q.removeClass("active");
    g.addClass("active");
    this.sliding=false;
    this.$element.trigger("slid")
    }}}if(typeof CQ!="undefined"){var h=q.attr("data-editrollover");
    var f=g.attr("data-editrollover");
    if(typeof CQ.WCM.getEditable(h)!="undefined"){CQ.WCM.getEditable(h).hide()
    }if(typeof CQ.WCM.getEditable(f)!="undefined"){CQ.WCM.getEditable(f).show()
    }}n&&this.cycle();
    return this
    }};
    var a=b.fn.carousel;
    b.fn.carousel=function(d){return this.each(function(){var h=b(this),g=h.data("carousel"),e=b.extend({},b.fn.carousel.defaults,typeof d=="object"&&d),f=typeof d=="string"?d:e.slide;
    if(!g){h.data("carousel",(g=new c(this,e)))
    }if(typeof d=="number"){g.to(d)
    }else{if(f){g[f]()
    }else{if(e.interval){g.pause().cycle()
    }}}})
    };
    b.fn.carousel.defaults={interval:5000,pause:"hover"};
    b.fn.carousel.Constructor=c;
    b.fn.carousel.noConflict=function(){b.fn.carousel=a;
    return this
    };
    b(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(j){var i=b(this),f,d=b(i.attr("data-target")||(f=i.attr("href"))&&f.replace(/.*(?=#[^\s]+$)/,"")),g=b.extend({},d.data(),i.data()),h;
    d.carousel(g);
    if(h=i.attr("data-slide-to")){d.data("carousel").pause().to(h).cycle()
    }j.preventDefault()
    })
    }(window.jQuery);
    !function(c){var b=function(e,d){this.$element=$(e);
    this.options=$.extend({},$.fn.collapse.defaults,d);
    if(this.options.parent){this.$parent=$(this.options.parent)
    }this.options.toggle&&this.toggle()
    };
    b.prototype={constructor:b,dimension:function(){var d=this.$element.hasClass("width");
    return d?"width":"height"
    },show:function(){var h,d,g,e;
    if(this.transitioning||this.$element.hasClass("in")){return
    }h=this.dimension();
    if(typeof CQ!="undefined"){var f=$(this.$element[0]).attr("data-editrollover");
    if(typeof CQ.WCM.getEditable(f)!="undefined"){CQ.WCM.getEditable(f).show()
    }}d=$.camelCase(["scroll",h].join("-"));
    g=this.$parent&&this.$parent.find(".accordion-group > .in");
    if(g&&g.length){e=g.data("collapse");
    if(e&&e.transitioning){return
    }g.collapse("hide");
    e||g.data("collapse",null)
    }this.$element[h](0);
    this.transition("addClass",$.Event("show"),"shown");
    $.support.transition&&this.$element[h](this.$element[0][d])
    },hide:function(){var e;
    if(this.transitioning||!this.$element.hasClass("in")){return
    }e=this.dimension();
    if(typeof CQ!="undefined"){var d=$(this.$element[0]).attr("data-editrollover");
    if(typeof CQ.WCM.getEditable(d)!="undefined"){CQ.WCM.getEditable(d).hide()
    }}this.reset(this.$element[e]());
    this.transition("removeClass",$.Event("hide"),"hidden");
    this.$element[e](0)
    },reset:function(d){var e=this.dimension();
    this.$element.removeClass("collapse")[e](d||"auto")[0].offsetWidth;
    this.$element[d!==null?"addClass":"removeClass"]("collapse");
    return this
    },transition:function(h,e,f){var g=this,d=function(){if(e.type=="show"){g.reset()
    }g.transitioning=0;
    g.$element.trigger(f)
    };
    this.$element.trigger(e);
    if(e.isDefaultPrevented()){return
    }this.transitioning=1;
    this.$element[h]("in");
    $.support.transition&&this.$element.hasClass("collapse")?this.$element.one($.support.transition.end,d):d()
    },toggle:function(){if(!c.support.transition&&!this.$element.closest(".accordion").hasClass("tab-view")){if(this.$element.height()==0){var d=this.$element.find(".accordion-inner").outerHeight()
    }else{var d=0
    }this.$element.closest(".accordion").find(".accordion-body").animate({height:0},300,"linear");
    this.$element.stop().animate({height:d},300,"linear")
    }else{this[this.$element.hasClass("in")?"hide":"show"]()
    }}};
    var a=$.fn.collapse;
    $.fn.collapse=function(d){return this.each(function(){var g=$(this),f=g.data("collapse"),e=$.extend({},$.fn.collapse.defaults,g.data(),typeof d=="object"&&d);
    if(!f){g.data("collapse",(f=new b(this,e)))
    }if(typeof d=="string"){f[d]()
    }})
    };
    $.fn.collapse.defaults={toggle:true};
    $.fn.collapse.Constructor=b;
    $.fn.collapse.noConflict=function(){$.fn.collapse=a;
    return this
    };
    $(document).on("click.collapse.data-api","[data-toggle=collapse]",function(i){var h=$(this),d;
    var g=h.attr("data-target")||i.preventDefault()||(d=h.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),f=$(g).data("collapse")?"toggle":h.data();
    if(h.closest(".accordion").hasClass("tab-view")&&h.hasClass("selected")){}else{h[$(g).hasClass("in")?"addClass":"removeClass"]("collapsed");
    $(g).collapse(f);
    $(".accordion-toggle").removeClass("after-selected");
    if(!$(this).hasClass("selected")){$(this).closest(".accordion").find(".accordion-toggle").removeClass("selected");
    $(this).addClass("selected");
    $(this).parentsUntil(".accordion").next().find(".accordion-toggle").addClass("after-selected")
    }else{$(this).removeClass("selected")
    }}})
    }(window.jQuery);
    (function(a){a.fn.columnize=function(b){var c={width:400,columns:false,buildOnce:false,overflow:false,doneFunc:function(){},target:false,ignoreImageLoading:true,columnFloat:"left",lastNeverTallest:false,accuracy:false,manualBreaks:false,cssClassPrefix:""};
    b=a.extend(c,b);
    if(typeof(b.width)=="string"){b.width=parseInt(b.width,10);
    if(isNaN(b.width)){b.width=c.width
    }}return this.each(function(){var l=b.target?a(b.target):a(this);
    var o=a(this).height();
    var q=a("<div></div>");
    var d=0;
    var j=false;
    var r=b.manualBreaks;
    var i=c.cssClassPrefix;
    if(typeof(b.cssClassPrefix)=="string"){i=b.cssClassPrefix
    }var p=0;
    q.append(a(this).contents().clone(true));
    if(!b.ignoreImageLoading&&!b.target){if(!l.data("imageLoaded")){l.data("imageLoaded",true);
    if(a(this).find("img").length>0){var g=function(s,t){return function(){if(!s.data("firstImageLoaded")){s.data("firstImageLoaded","true");
    s.empty().append(t.children().clone(true));
    s.columnize(b)
    }}
    }(a(this),q);
    a(this).find("img").one("load",g);
    a(this).find("img").one("abort",g);
    return
    }}}l.empty();
    n();
    if(!b.buildOnce){a(window).resize(function(){if(!b.buildOnce){if(l.data("timeout")){clearTimeout(l.data("timeout"))
    }l.data("timeout",setTimeout(n,200))
    }})
    }function k(t,u){var s=u?".":"";
    if(i.length){return s+i+"-"+t
    }return s+t
    }function h(u,C,E,y){while((r||E.height()<y)&&C[0].childNodes.length){var v=C[0].childNodes[0];
    if(a(v).find(k("columnbreak",true)).length){return
    }if(a(v).hasClass(k("columnbreak"))){return
    }u.append(v)
    }if(u[0].childNodes.length===0){return
    }var t=u[0].childNodes;
    var x=t[t.length-1];
    u[0].removeChild(x);
    var D=a(x);
    if(D[0].nodeType==3){var A=D[0].nodeValue;
    var z=b.width/18;
    if(b.accuracy){z=b.accuracy
    }var s;
    var B=null;
    while(E.height()<y&&A.length){var w=A.indexOf(" ",z);
    if(w!=-1){s=A.substring(0,A.indexOf(" ",z))
    }else{s=A
    }B=document.createTextNode(s);
    u.append(B);
    if(A.length>z&&w!=-1){A=A.substring(w)
    }else{A=""
    }}if(E.height()>=y&&B!==null){u[0].removeChild(B);
    A=B.nodeValue+A
    }if(A.length){D[0].nodeValue=A
    }else{return false
    }}if(C.contents().length){C.prepend(D)
    }else{C.append(D)
    }return D[0].nodeType==3
    }function m(u,x,w,s){if(u.contents(":last").find(k("columnbreak",true)).length){return
    }if(u.contents(":last").hasClass(k("columnbreak"))){return
    }if(x.contents().length){var t=x.contents(":first");
    if(t.get(0).nodeType!=1){return
    }var v=t.clone(true);
    if(t.hasClass(k("columnbreak"))){u.append(v);
    t.remove()
    }else{if(r){u.append(v);
    t.remove()
    }else{if(v.get(0).nodeType==1&&!v.hasClass(k("dontend"))){u.append(v);
    if(v.is("img")&&w.height()<s+20){t.remove()
    }else{if(!t.hasClass(k("dontsplit"))&&w.height()<s+20){t.remove()
    }else{if(v.is("img")||t.hasClass(k("dontsplit"))){v.remove()
    }else{v.empty();
    if(!h(v,t,w,s)){t.addClass(k("split"));
    if(t.children().length){m(v,t,w,s)
    }}else{t.addClass(k("split"))
    }if(v.get(0).childNodes.length===0){v.remove()
    }}}}}}}}}function e(){if(l.data("columnized")&&l.children().length==1){return
    }l.data("columnized",true);
    l.data("columnizing",true);
    l.empty();
    l.append(a("<div class='"+k("first")+" "+k("last")+" "+k("column")+" ' style='width:100%; float: "+b.columnFloat+";'></div>"));
    $col=l.children().eq(l.children().length-1);
    $destroyable=q.clone(true);
    if(b.overflow){targetHeight=b.overflow.height;
    h($col,$destroyable,$col,targetHeight);
    if(!$destroyable.contents().find(":first-child").hasClass(k("dontend"))){m($col,$destroyable,$col,targetHeight)
    }while($col.contents(":last").length&&f($col.contents(":last").get(0))){var v=$col.contents(":last");
    v.remove();
    $destroyable.prepend(v)
    }var u="";
    var x=document.createElement("DIV");
    while($destroyable[0].childNodes.length>0){var s=$destroyable[0].childNodes[0];
    if(s.attributes){for(var t=0;
    t<s.attributes.length;
    t++){if(s.attributes[t].nodeName.indexOf("jQuery")===0){s.removeAttribute(s.attributes[t].nodeName)
    }}}x.innerHTML="";
    x.appendChild($destroyable[0].childNodes[0]);
    u+=x.innerHTML
    }var w=a(b.overflow.id)[0];
    w.innerHTML=u
    }else{$col.append($destroyable)
    }l.data("columnizing",false);
    if(b.overflow&&b.overflow.doneFunc){b.overflow.doneFunc()
    }}function f(s){if(s.nodeType==3){if(/^\s+$/.test(s.nodeValue)){if(!s.previousSibling){return false
    }return f(s.previousSibling)
    }return false
    }if(s.nodeType!=1){return false
    }if(a(s).hasClass(k("dontend"))){return true
    }if(s.childNodes.length===0){return false
    }return f(s.childNodes[s.childNodes.length-1])
    }function n(){p=0;
    if(d==l.width()){return
    }d=l.width();
    var v=Math.round(l.width()/b.width);
    var I=b.width;
    var y=b.height;
    if(b.columns){v=b.columns
    }if(r){v=q.find(k("columnbreak",true)).length+1;
    I=false
    }if(v<=1){return e()
    }if(l.data("columnizing")){return
    }l.data("columnized",true);
    l.data("columnizing",true);
    l.empty();
    l.append(a("<div style='width:"+(Math.floor(100/v))+"%; float: "+b.columnFloat+";'></div>"));
    J=l.children(":last");
    J.append(q.clone());
    o=J.height();
    l.empty();
    var x=o/v;
    var z=true;
    var A=3;
    var Q=false;
    if(b.overflow){A=1;
    x=b.overflow.height
    }else{if(y&&I){A=1;
    x=y;
    Q=true
    }}for(var E=0;
    E<A&&E<20;
    E++){l.empty();
    var F,s,J,t;
    try{F=q.clone(true)
    }catch(S){F=q.clone()
    }F.css("visibility","hidden");
    for(var P=0;
    P<v;
    P++){s=(P===0)?k("first"):"";
    s+=" "+k("column");
    s=(P==v-1)?(k("last")+" "+s):s;
    l.append(a("<div class='"+s+"' style='width:"+(Math.floor(100/v))+"%; float: "+b.columnFloat+";'></div>"))
    }P=0;
    while(P<v-(b.overflow?0:1)||Q&&F.contents().length){if(l.children().length<=P){l.append(a("<div class='"+s+"' style='width:"+(Math.floor(100/v))+"%; float: "+b.columnFloat+";'></div>"))
    }J=l.children().eq(P);
    if(Q){J.width(I+"px")
    }h(J,F,J,x);
    m(J,F,J,x);
    while(J.contents(":last").length&&f(J.contents(":last").get(0))){t=J.contents(":last");
    t.remove();
    F.prepend(t)
    }P++;
    if(J.contents().length===0&&F.contents().length){J.append(F.contents(":first"))
    }else{if(P==v-(b.overflow?0:1)&&!b.overflow){if(F.find(k("columnbreak",true)).length){v++
    }}}}if(b.overflow&&!Q){var N=false;
    var M=(document.all)&&(navigator.appVersion.indexOf("MSIE 7.")!=-1);
    if(N||M){var C="";
    var H=document.createElement("DIV");
    while(F[0].childNodes.length>0){var R=F[0].childNodes[0];
    for(P=0;
    P<R.attributes.length;
    P++){if(R.attributes[P].nodeName.indexOf("jQuery")===0){R.removeAttribute(R.attributes[P].nodeName)
    }}H.innerHTML="";
    H.appendChild(F[0].childNodes[0]);
    C+=H.innerHTML
    }var K=a(b.overflow.id)[0];
    K.innerHTML=C
    }else{a(b.overflow.id).empty().append(F.contents().clone(true))
    }}else{if(!Q){J=l.children().eq(l.children().length-1);
    while(F.contents().length){J.append(F.contents(":first"))
    }var u=J.height();
    var D=u-x;
    var T=0;
    var L=10000000;
    var O=0;
    var B=false;
    var G=0;
    l.children().each(function(U){return function(V){var X=U.children().eq(V);
    var Y=X.children(":last").find(k("columnbreak",true)).length;
    if(!Y){var W=X.height();
    B=false;
    T+=W;
    if(W>O){O=W;
    B=true
    }if(W<L){L=W
    }G++
    }}
    }(l));
    var w=T/G;
    if(T===0){E=A
    }else{if(b.lastNeverTallest&&B){p+=30;
    x=x+30;
    if(E==A-1){A++
    }}else{if(O-L>30){x=w+30
    }else{if(Math.abs(w-x)>20){x=w
    }else{E=A
    }}}}}else{l.children().each(function(U){J=l.children().eq(U);
    J.width(I+"px");
    if(U===0){J.addClass(k("first"))
    }else{if(U==l.children().length-1){J.addClass(k("last"))
    }else{J.removeClass(k("first"));
    J.removeClass(k("last"))
    }}});
    l.width(l.children().length*I+"px")
    }}l.append(a("<br style='clear:both;'>"))
    }l.find(k("column",true)).find(":first"+k("removeiffirst",true)).remove();
    l.find(k("column",true)).find(":last"+k("removeiflast",true)).remove();
    l.data("columnizing",false);
    if(b.overflow){b.overflow.doneFunc()
    }b.doneFunc()
    }})
    }
    })(jQuery);
    /*! jQuery Mobile v1.2.0 jquerymobile.com | jquery.org/license */
    (function(e,d,f){typeof define=="function"&&define.amd?define(["jquery"],function(a){return f(a,e,d),a.mobile
    }):f(e.jQuery,e,d)
    })(this,document,function(f,e,h,g){(function(i,c){var j={touch:"ontouchend" in h};
    i.mobile=i.mobile||{},i.mobile.support=i.mobile.support||{},i.extend(i.support,j),i.extend(i.mobile.support,j)
    })(f),function(aI,aH,aG,aF){function ak(b){while(b&&typeof b.originalEvent!="undefined"){b=b.originalEvent
    }return b
    }function aj(y,x){var w=y.type,v,u,t,s,r,q,j,d,a;
    y=aI.Event(y),y.type=x,v=y.originalEvent,u=aI.event.props,w.search(/^(mouse|click)/)>-1&&(u=az);
    if(v){for(j=u.length,s;
    j;
    ){s=u[--j],y[s]=v[s]
    }}w.search(/mouse(down|up)|click/)>-1&&!y.which&&(y.which=1);
    if(w.search(/^touch/)!==-1){t=ak(v),w=t.touches,r=t.changedTouches,q=w&&w.length?w[0]:r&&r.length?r[0]:aF;
    if(q){for(d=0,a=aB.length;
    d<a;
    d++){s=aB[d],y[s]=q[s]
    }}}return y
    }function ai(a){var k={},j,i;
    while(a){j=aI.data(a,aE);
    for(i in j){j[i]&&(k[i]=k.hasVirtualBinding=!0)
    }a=a.parentNode
    }return k
    }function ah(a,j){var i;
    while(a){i=aI.data(a,aE);
    if(i&&(!j||i[j])){return a
    }a=a.parentNode
    }return null
    }function ag(){aq=!1
    }function af(){aq=!0
    }function ae(){am=0,at.length=0,ar=!1,af()
    }function ad(){ag()
    }function ac(){ab(),ax=setTimeout(function(){ax=0,ae()
    },aI.vmouse.resetTimerDuration)
    }function ab(){ax&&(clearTimeout(ax),ax=0)
    }function aa(a,k,j){var i;
    if(j&&j[a]||!j&&ah(k.target,a)){i=aj(k,a),aI(k.target).trigger(i)
    }return i
    }function Z(a){var j=aI.data(a.target,aD);
    if(!ar&&(!am||am!==j)){var i=aa("v"+a.type,a);
    i&&(i.isDefaultPrevented()&&a.preventDefault(),i.isPropagationStopped()&&a.stopPropagation(),i.isImmediatePropagationStopped()&&a.stopImmediatePropagation())
    }}function Y(a){var l=ak(a).touches,k,j;
    if(l&&l.length===1){k=a.target,j=ai(k);
    if(j.hasVirtualBinding){am=an++,aI.data(k,aD,am),ab(),ad(),au=!1;
    var i=ak(a).touches[0];
    aw=i.pageX,av=i.pageY,aa("vmouseover",a,j),aa("vmousedown",a,j)
    }}}function X(b){if(aq){return
    }au||aa("vmousecancel",b,ai(b.target)),au=!0,ac()
    }function W(a){if(aq){return
    }var l=ak(a).touches[0],k=au,j=aI.vmouse.moveDistanceThreshold,i=ai(a.target);
    au=au||Math.abs(l.pageX-aw)>j||Math.abs(l.pageY-av)>j,au&&!k&&aa("vmousecancel",a,i),aa("vmousemove",a,i),ac()
    }function V(j){if(aq){return
    }af();
    var i=ai(j.target),l;
    aa("vmouseup",j,i);
    if(!au){var k=aa("vclick",j,i);
    k&&k.isDefaultPrevented()&&(l=ak(j).changedTouches[0],at.push({touchID:am,x:l.clientX,y:l.clientY}),ar=!0)
    }aa("vmouseout",j,i),au=!1,ac()
    }function U(a){var j=aI.data(a,aE),i;
    if(j){for(i in j){if(j[i]){return !0
    }}}return !1
    }function T(){}function S(a){var d=a.substr(1);
    return{setup:function(i,c){U(this)||aI.data(this,aE,{});
    var b=aI.data(this,aE);
    b[a]=!0,ay[a]=(ay[a]||0)+1,ay[a]===1&&ao.bind(d,Z),aI(this).bind(d,T),ap&&(ay.touchstart=(ay.touchstart||0)+1,ay.touchstart===1&&ao.bind("touchstart",Y).bind("touchend",V).bind("touchmove",W).bind("scroll",X))
    },teardown:function(j,i){--ay[a],ay[a]||ao.unbind(d,Z),ap&&(--ay.touchstart,ay.touchstart||ao.unbind("touchstart",Y).unbind("touchmove",W).unbind("touchend",V).unbind("scroll",X));
    var c=aI(this),b=aI.data(this,aE);
    b&&(b[a]=!1),c.unbind(d,T),U(this)||c.removeData(aE)
    }}
    }var aE="virtualMouseBindings",aD="virtualTouchID",aC="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),aB="clientX clientY pageX pageY screenX screenY".split(" "),aA=aI.event.mouseHooks?aI.event.mouseHooks.props:[],az=aI.event.props.concat(aA),ay={},ax=0,aw=0,av=0,au=!1,at=[],ar=!1,aq=!1,ap="addEventListener" in aG,ao=aI(aG),an=1,am=0,al;
    aI.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};
    for(var R=0;
    R<aC.length;
    R++){aI.event.special[aC[R]]=S(aC[R])
    }ap&&aG.addEventListener("click",function(s){var r=at.length,q=s.target,p,o,n,m,l,a;
    if(r){p=s.clientX,o=s.clientY,al=aI.vmouse.clickDistanceThreshold,n=q;
    while(n){for(m=0;
    m<r;
    m++){l=at[m],a=0;
    if(n===q&&Math.abs(l.x-p)<al&&Math.abs(l.y-o)<al||aI.data(n,aD)===l.touchID){s.preventDefault(),s.stopPropagation();
    return
    }}n=n.parentNode
    }}},!0)
    }(f,e,h),function(r,q,p){function c(a,s,j){var i=j.type;
    j.type=s,r.event.handle.call(a,j),j.type=i
    }r.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(a,d){r.fn[d]=function(b){return b?this.bind(d,b):this.trigger(d)
    },r.attrFn&&(r.attrFn[d]=!0)
    });
    var o=r.mobile.support.touch,n="touchmove scroll",m=o?"touchstart":"mousedown",l=o?"touchend":"mouseup",k=o?"touchmove":"mousemove";
    r.event.special.scrollstart={enabled:!0,setup:function(){function i(b,d){s=d,c(a,s?"scrollstart":"scrollstop",b)
    }var a=this,t=r(a),s,j;
    t.bind(n,function(d){if(!r.event.special.scrollstart.enabled){return
    }s||i(d,!0),clearTimeout(j),j=setTimeout(function(){i(d,!1)
    },50)
    })
    }},r.event.special.tap={tapholdThreshold:750,setup:function(){var a=this,i=r(a);
    i.bind("vmousedown",function(v){function j(){clearTimeout(s)
    }function d(){j(),i.unbind("vclick",b).unbind("vmouseup",j),r(h).unbind("vmousecancel",d)
    }function b(w){d(),u===w.target&&c(a,"tap",w)
    }if(v.which&&v.which!==1){return !1
    }var u=v.target,t=v.originalEvent,s;
    i.bind("vmouseup",j).bind("vclick",b),r(h).bind("vmousecancel",d),s=setTimeout(function(){c(a,"taphold",r.Event("taphold",{target:u}))
    },r.event.special.tap.tapholdThreshold)
    })
    }},r.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1000,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,setup:function(){var a=this,d=r(a);
    d.bind(m,function(i){function s(j){if(!u){return
    }var w=j.originalEvent.touches?j.originalEvent.touches[0]:j;
    t={time:(new Date).getTime(),coords:[w.pageX,w.pageY]},Math.abs(u.coords[0]-t.coords[0])>r.event.special.swipe.scrollSupressionThreshold&&j.preventDefault()
    }var v=i.originalEvent.touches?i.originalEvent.touches[0]:i,u={time:(new Date).getTime(),coords:[v.pageX,v.pageY],origin:r(i.target)},t;
    d.bind(k,s).one(l,function(j){d.unbind(k,s),u&&t&&t.time-u.time<r.event.special.swipe.durationThreshold&&Math.abs(u.coords[0]-t.coords[0])>r.event.special.swipe.horizontalDistanceThreshold&&Math.abs(u.coords[1]-t.coords[1])<r.event.special.swipe.verticalDistanceThreshold&&u.origin.trigger("swipe").trigger(u.coords[0]>t.coords[0]?"swipeleft":"swiperight"),u=t=p
    })
    })
    }},r.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe",swiperight:"swipe"},function(a,d){r.event.special[a]={setup:function(){r(this).bind(d,r.noop)
    }}
    })
    }(f,this)
    });
    /*! Backstretch - v2.0.3 - 2012-11-30
    * http://srobbin.com/jquery-plugins/backstretch/
    * Copyright (c) 2012 Scott Robbin; Licensed MIT */
    (function(f,b,g){f.fn.backstretch=function(h,e){return(h===g||h.length===0)&&f.error("No images were supplied for Backstretch"),f(b).scrollTop()===0&&b.scrollTo(0,0),this.each(function(){var i=f(this),j=i.data("backstretch");
    j&&(e=f.extend(j.options,e),j.destroy(!0)),j=new a(this,h,e),i.data("backstretch",j)
    })
    },f.backstretch=function(e,h){return f("body").backstretch(e,h).data("backstretch")
    },f.expr[":"].backstretch=function(e){return f(e).data("backstretch")!==g
    },f.fn.backstretch.defaults={centeredX:!0,centeredY:!0,duration:5000,fade:0};
    var d={wrap:{left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999999},img:{position:"absolute",display:"none",margin:0,padding:0,border:"none",width:"auto",height:"auto",maxWidth:"none",zIndex:-999999}},a=function(l,j,k){this.options=f.extend({},f.fn.backstretch.defaults,k||{}),this.images=f.isArray(j)?j:[j],f.each(this.images,function(){f("<img />")[0].src=this
    }),this.isBody=l===document.body,this.$container=f(l),this.$wrap=f('<div class="backstretch"></div>').css(d.wrap).appendTo(this.$container),this.$root=this.isBody?c?f(b):f(document):this.$container;
    if(!this.isBody){var h=this.$container.css("position"),e=this.$container.css("zIndex");
    this.$container.css({position:h==="static"?"relative":h,zIndex:e==="auto"?0:e,background:"none"}),this.$wrap.css({zIndex:-999998})
    }this.$wrap.css({position:this.isBody&&c?"fixed":"absolute"}),this.index=0,this.show(this.index),f(b).on("resize.backstretch",f.proxy(this.resize,this)).on("orientationchange.backstretch",f.proxy(function(){this.isBody&&b.pageYOffset===0&&(b.scrollTo(0,1),this.resize())
    },this))
    };
    a.prototype={resize:function(){try{var m={left:0,top:0},q=this.isBody?this.$root.width():this.$root.innerWidth(),l=q,j=this.isBody?b.innerHeight?b.innerHeight:this.$root.height():this.$root.innerHeight(),k=l/this.$img.data("ratio"),p;
    k>=j?(p=(k-j)/2,this.options.centeredY&&(m.top="-"+p+"px")):(k=j,l=k*this.$img.data("ratio"),p=(l-q)/2,this.options.centeredX&&(m.left="-"+p+"px")),this.$wrap.css({width:q,height:j}).find("img:not(.deleteable)").css({width:l,height:k}).css(m)
    }catch(h){}return this
    },show:function(h){if(Math.abs(h)>this.images.length-1){return
    }this.index=h;
    var k=this,e=k.$wrap.find("img").addClass("deleteable"),j=f.Event("backstretch.show",{relatedTarget:k.$container[0]});
    return clearInterval(k.interval),k.$img=f("<img />").css(d.img).bind("load",function(i){var l=this.width||f(i.target).width(),m=this.height||f(i.target).height();
    f(this).data("ratio",l/m),f(this).fadeIn(k.options.speed||k.options.fade,function(){e.remove(),k.paused||k.cycle(),k.$container.trigger(j,k)
    }),k.resize()
    }).appendTo(k.$wrap),k.$img.attr("src",k.images[h]),k
    },next:function(){return this.show(this.index<this.images.length-1?this.index+1:0)
    },prev:function(){return this.show(this.index===0?this.images.length-1:this.index-1)
    },pause:function(){return this.paused=!0,this
    },resume:function(){return this.paused=!1,this.next(),this
    },cycle:function(){return this.images.length>1&&(clearInterval(this.interval),this.interval=setInterval(f.proxy(function(){this.paused||this.next()
    },this),this.options.duration)),this
    },destroy:function(e){f(b).off("resize.backstretch orientationchange.backstretch"),clearInterval(this.interval),e||this.$wrap.remove(),this.$container.removeData("backstretch")
    }};
    var c=function(){var t=navigator.userAgent,k=navigator.platform,h=t.match(/AppleWebKit\/([0-9]+)/),p=!!h&&h[1],x=t.match(/Fennec\/([0-9]+)/),j=!!x&&x[1],w=t.match(/Opera Mobi\/([0-9]+)/),v=!!w&&w[1],q=t.match(/MSIE ([0-9]+)/),m=!!q&&q[1];
    return !((k.indexOf("iPhone")>-1||k.indexOf("iPad")>-1||k.indexOf("iPod")>-1)&&p&&p<534||b.operamini&&{}.toString.call(b.operamini)==="[object OperaMini]"||w&&v<7458||t.indexOf("Android")>-1&&p&&p<533||j&&j<6||"palmGetResource" in b&&p&&p<534||t.indexOf("MeeGo")>-1&&t.indexOf("NokiaBrowser/8.5.0")>-1||m&&m<=6)
    }()
    })(jQuery,window);
    (function(e,c){function f(B){var A=Array.prototype.slice.call(arguments,1);
    if(B.prop){return B.prop.apply(B,A)
    }return B.attr.apply(B,A)
    }function w(E,C,D){var B,A;
    for(B in D){if(D.hasOwnProperty(B)){A=B.replace(/ |$/g,C.eventNamespace);
    E.bind(A,D[B])
    }}}function d(C,A,B){w(C,B,{focus:function(){A.addClass(B.focusClass)
    },blur:function(){A.removeClass(B.focusClass);
    A.removeClass(B.activeClass)
    },mouseenter:function(){A.addClass(B.hoverClass)
    },mouseleave:function(){A.removeClass(B.hoverClass);
    A.removeClass(B.activeClass)
    },"mousedown touchbegin":function(){if(!C.is(":disabled")){A.addClass(B.activeClass)
    }},"mouseup touchend":function(){A.removeClass(B.activeClass)
    }})
    }function v(B,A){B.removeClass(A.hoverClass+" "+A.focusClass+" "+A.activeClass)
    }function t(B,C,A){if(A){B.addClass(C)
    }else{B.removeClass(C)
    }}function y(A,C,B){var E="checked",D=C.is(":"+E);
    if(C.prop){C.prop(E,D)
    }else{if(D){C.attr(E,E)
    }else{C.removeAttr(E)
    }}t(A,B.checkedClass,D)
    }function n(A,C,B){t(A,B.disabledClass,C.is(":disabled"))
    }function l(A,B,C){switch(C){case"after":A.after(B);
    return A.next();
    case"before":A.before(B);
    return A.prev();
    case"wrap":A.wrap(B);
    return A.parent()
    }return null
    }function q(D,C,E){var B,A,F;
    if(!E){E={}
    }E=e.extend({bind:{},divClass:null,divWrap:"wrap",spanClass:null,spanHtml:null,spanWrap:"wrap"},E);
    B=e("<div />");
    A=e("<span />");
    if(C.autoHide&&D.is(":hidden")&&D.css("display")==="none"){B.hide()
    }if(E.divClass){B.addClass(E.divClass)
    }if(C.wrapperClass){B.addClass(C.wrapperClass)
    }if(E.spanClass){A.addClass(E.spanClass)
    }F=f(D,"id");
    if(C.useID&&F){f(B,"id",C.idPrefix+"-"+F)
    }if(E.spanHtml){A.html(E.spanHtml)
    }B=l(D,B,E.divWrap);
    A=l(D,A,E.spanWrap);
    n(B,D,C);
    return{div:B,span:A}
    }function p(C,B){var A;
    if(!B.wrapperClass){return null
    }A=e("<span />").addClass(B.wrapperClass);
    A=l(C,A,"wrap");
    return A
    }function h(){var D,A,C,B;
    B="rgb(120,2,153)";
    A=e('<div style="width:0;height:0;color:'+B+'">');
    e("body").append(A);
    C=A.get(0);
    if(window.getComputedStyle){D=window.getComputedStyle(C,"").color
    }else{D=(C.currentStyle||C.style||{}).color
    }A.remove();
    return D.replace(/ /g,"")!==B
    }function o(A){if(!A){return""
    }return e("<span />").text(A).html()
    }function j(){return navigator.cpuClass&&!navigator.product
    }function k(){if(typeof window.XMLHttpRequest!=="undefined"){return true
    }return false
    }function a(B){var A;
    if(B[0].multiple){return true
    }A=f(B,"size");
    if(!A||A<=1){return false
    }return true
    }function g(){return false
    }function u(A,B){var C="none";
    w(A,B,{"selectstart dragstart mousedown":g});
    A.css({MozUserSelect:C,msUserSelect:C,webkitUserSelect:C,userSelect:C})
    }function x(D,B,C){var A=D.val();
    if(A===""){A=C.fileDefaultHtml
    }else{A=A.split(/[\/\\]+/);
    A=A[(A.length-1)]
    }B.text(A)
    }function m(B,D,E){var A,C;
    A=[];
    B.each(function(){var F;
    for(F in D){if(Object.prototype.hasOwnProperty.call(D,F)){A.push({el:this,name:F,old:this.style[F]});
    this.style[F]=D[F]
    }}});
    E();
    while(A.length){C=A.pop();
    C.el.style[C.name]=C.old
    }}function b(B,C){var A;
    A=B.parents();
    A.push(B[0]);
    A=A.not(":visible");
    m(A,{visibility:"hidden",display:"block",position:"absolute"},C)
    }function z(B,A){return function(){B.unwrap().unwrap().unbind(A.eventNamespace)
    }
    }var i=true,s=false,r=[{match:function(A){return A.is("a, button, :submit, :reset, input[type='button']")
    },apply:function(D,C){var A,B,E,G,F;
    B=C.submitDefaultHtml;
    if(D.is(":reset")){B=C.resetDefaultHtml
    }if(D.is("a, button")){G=function(){return D.html()||B
    }
    }else{G=function(){return o(f(D,"value"))||B
    }
    }E=q(D,C,{divClass:C.buttonClass,spanHtml:G()});
    A=E.div;
    d(D,A,C);
    F=false;
    w(A,C,{"click touchend":function(){var J,I,K,H;
    if(F){return
    }if(D.is(":disabled")){return
    }F=true;
    if(D[0].dispatchEvent){J=document.createEvent("MouseEvents");
    J.initEvent("click",true,true);
    I=D[0].dispatchEvent(J);
    if(D.is("a")&&I){K=f(D,"target");
    H=f(D,"href");
    if(!K||K==="_self"){document.location.href=H
    }else{window.open(H,K)
    }}}else{D.click()
    }F=false
    }});
    u(A,C);
    return{remove:function(){A.after(D);
    A.remove();
    D.unbind(C.eventNamespace);
    return D
    },update:function(){v(A,C);
    n(A,D,C);
    D.detach();
    E.span.html(G()).append(D)
    }}
    }},{match:function(A){return A.is(":checkbox")
    },apply:function(D,C){var E,B,A;
    E=q(D,C,{divClass:C.checkboxClass});
    B=E.div;
    A=E.span;
    d(D,B,C);
    w(D,C,{"click touchend":function(){y(A,D,C)
    }});
    y(A,D,C);
    return{remove:z(D,C),update:function(){v(B,C);
    A.removeClass(C.checkedClass);
    y(A,D,C);
    n(B,D,C)
    }}
    }},{match:function(A){return A.is(":file")
    },apply:function(E,D){var G,C,B,F;
    G=q(E,D,{divClass:D.fileClass,spanClass:D.fileButtonClass,spanHtml:D.fileButtonHtml,spanWrap:"after"});
    C=G.div;
    F=G.span;
    B=e("<span />").html(D.fileDefaultHtml);
    B.addClass(D.filenameClass);
    B=l(E,B,"after");
    if(!f(E,"size")){f(E,"size",C.width()/10)
    }function A(){x(E,B,D)
    }d(E,C,D);
    A();
    if(j()){w(E,D,{click:function(){E.trigger("change");
    setTimeout(A,0)
    }})
    }else{w(E,D,{change:A})
    }u(B,D);
    u(F,D);
    return{remove:function(){B.remove();
    F.remove();
    return E.unwrap().unbind(D.eventNamespace)
    },update:function(){v(C,D);
    x(E,B,D);
    n(C,E,D)
    }}
    }},{match:function(B){if(B.is("input")){var A=(" "+f(B,"type")+" ").toLowerCase(),C=" color date datetime datetime-local email month number password search tel text time url week ";
    return C.indexOf(A)>=0
    }return false
    },apply:function(C,B){var A,D;
    A=f(C,"type");
    C.addClass(B.inputClass);
    D=p(C,B);
    d(C,C,B);
    if(B.inputAddTypeAsClass){C.addClass(A)
    }return{remove:function(){C.removeClass(B.inputClass);
    if(B.inputAddTypeAsClass){C.removeClass(A)
    }if(D){C.unwrap()
    }},update:g}
    }},{match:function(A){return A.is(":radio")
    },apply:function(D,C){var E,B,A;
    E=q(D,C,{divClass:C.radioClass});
    B=E.div;
    A=E.span;
    d(D,B,C);
    w(D,C,{"click touchend":function(){e.uniform.update(e(':radio[name="'+f(D,"name")+'"]'))
    }});
    y(A,D,C);
    return{remove:z(D,C),update:function(){v(B,C);
    y(A,D,C);
    n(B,D,C)
    }}
    }},{match:function(A){if(A.is("select")&&!a(A)){return true
    }return false
    },apply:function(E,D){var F,B,A,C;
    if(D.selectAutoWidth){b(E,function(){C=E.width()
    })
    }F=q(E,D,{divClass:D.selectClass,spanHtml:(E.find(":selected:first")||E.find("option:first")).html(),spanWrap:"before"});
    B=F.div;
    A=F.span;
    if(D.selectAutoWidth){b(E,function(){m(e([A[0],B[0]]),{display:"block"},function(){var G;
    G=A.outerWidth()-A.width();
    B.width(C+G);
    A.width(C)
    })
    })
    }else{B.addClass("fixedWidth")
    }d(E,B,D);
    w(E,D,{change:function(){A.html(E.find(":selected").html());
    B.removeClass(D.activeClass)
    },"click touchend":function(){var G=E.find(":selected").html();
    if(A.html()!==G){E.trigger("change")
    }},keyup:function(){A.html(E.find(":selected").html())
    }});
    u(A,D);
    return{remove:function(){A.remove();
    E.unwrap().unbind(D.eventNamespace);
    return E
    },update:function(){if(D.selectAutoWidth){e.uniform.restore(E);
    E.uniform(D)
    }else{v(B,D);
    A.html(E.find(":selected").html());
    n(B,E,D)
    }}}
    }},{match:function(A){if(A.is("select")&&a(A)){return true
    }return false
    },apply:function(B,A){var C;
    B.addClass(A.selectMultiClass);
    C=p(B,A);
    d(B,B,A);
    return{remove:function(){B.removeClass(A.selectMultiClass);
    if(C){B.unwrap()
    }},update:g}
    }},{match:function(A){return A.is("textarea")
    },apply:function(B,A){var C;
    B.addClass(A.textareaClass);
    C=p(B,A);
    d(B,B,A);
    return{remove:function(){B.removeClass(A.textareaClass);
    if(C){B.unwrap()
    }},update:g}
    }}];
    if(j()&&!k()){i=false
    }e.uniform={defaults:{activeClass:"active",autoHide:true,buttonClass:"button",checkboxClass:"checker",checkedClass:"checked",disabledClass:"disabled",eventNamespace:".uniform",fileButtonClass:"action",fileButtonHtml:"Choose File",fileClass:"uploader",fileDefaultHtml:"No file selected",filenameClass:"filename",focusClass:"focus",hoverClass:"hover",idPrefix:"uniform",inputAddTypeAsClass:true,inputClass:"uniform-input",radioClass:"radio",resetDefaultHtml:"Reset",resetSelector:false,selectAutoWidth:true,selectClass:"selector",selectMultiClass:"uniform-multiselect",submitDefaultHtml:"Submit",textareaClass:"uniform",useID:true,wrapperClass:null},elements:[]};
    e.fn.uniform=function(A){var B=this;
    A=e.extend({},e.uniform.defaults,A);
    if(!s){s=true;
    if(h()){i=false
    }}if(!i){return this
    }if(A.resetSelector){e(A.resetSelector).mouseup(function(){window.setTimeout(function(){e.uniform.update(B)
    },10)
    })
    }return this.each(function(){var D=e(this),C,E,F;
    if(D.data("uniformed")){e.uniform.update(D);
    return
    }for(C=0;
    C<r.length;
    C=C+1){E=r[C];
    if(E.match(D,A)){F=E.apply(D,A);
    D.data("uniformed",F);
    e.uniform.elements.push(D.get(0));
    return
    }}})
    };
    e.uniform.restore=e.fn.uniform.restore=function(A){if(A===c){A=e.uniform.elements
    }e(A).each(function(){var D=e(this),B,C;
    C=D.data("uniformed");
    if(!C){return
    }C.remove();
    B=e.inArray(this,e.uniform.elements);
    if(B>=0){e.uniform.elements.splice(B,1)
    }D.removeData("uniformed")
    })
    };
    e.uniform.update=e.fn.uniform.update=function(A){if(A===c){A=e.uniform.elements
    }e(A).each(function(){var C=e(this),B;
    B=C.data("uniformed");
    if(!B){return
    }B.update(C,B.options)
    })
    }
    }(jQuery));
    (function(b,c){var a=0;
    var d=b(document);
    b.widget("ech.multiselect",{options:{header:true,height:175,minWidth:225,classes:"",checkAllText:"Select all",uncheckAllText:"Clear all",noneSelectedText:"Select options",selectedText:"# selected",selectedList:0,show:null,hide:null,autoOpen:false,multiple:true,position:{}},_create:function(){var h=this.element.hide();
    var j=this.options;
    this.speed=b.fx.speeds._default;
    this._isOpen=false;
    this._namespaceID=this.eventNamespace||("multiselect"+a);
    var g=(this.button=b('<button type="button"><span class="ui-icon ui-icon-triangle-2-n-s"></span></button>')).addClass("ui-multiselect ui-widget ui-state-default ui-corner-all").addClass(j.classes).attr({title:h.attr("title"),"aria-haspopup":true,tabIndex:h.attr("tabIndex")}).insertAfter(h),e=(this.buttonlabel=b("<span />")).html(j.noneSelectedText).appendTo(g),i=(this.menu=b("<div />")).addClass("ui-multiselect-menu ui-widget ui-widget-content ui-corner-all").addClass(j.classes).appendTo(document.body),l=(this.header=b("<div />")).addClass("ui-widget-header ui-corner-all ui-multiselect-header ui-helper-clearfix").appendTo(i),f=(this.headerLinkContainer=b("<ul />")).addClass("ui-helper-reset").html(function(){if(j.header===true){return'<li><a class="ui-multiselect-all" href="#"><span class="ui-icon ui-icon-check"></span><span>'+j.checkAllText+'</span></a></li><li><a class="ui-multiselect-none" href="#"><span class="ui-icon ui-icon-closethick"></span><span>'+j.uncheckAllText+"</span></a></li>"
    }else{if(typeof j.header==="string"){return"<li>"+j.header+"</li>"
    }else{return""
    }}}).append('<li class="ui-multiselect-close"><a href="#" class="ui-multiselect-close"><span class="ui-icon ui-icon-circle-close"></span></a></li>').appendTo(l),k=(this.checkboxContainer=b("<ul />")).addClass("ui-multiselect-checkboxes ui-helper-reset").appendTo(i);
    this._bindEvents();
    this.refresh(true);
    if(!j.multiple){i.addClass("ui-multiselect-single")
    }a++
    },_init:function(){if(this.options.header===false){this.header.hide()
    }if(!this.options.multiple){this.headerLinkContainer.find(".ui-multiselect-all, .ui-multiselect-none").hide()
    }if(this.options.autoOpen){this.open()
    }if(this.element.is(":disabled")){this.disable()
    }},refresh:function(j){var g=this.element;
    var i=this.options;
    var h=this.menu;
    var l=this.checkboxContainer;
    var e=[];
    var f="";
    var k=g.attr("id")||a++;
    g.find("option").each(function(o){var p=b(this);
    var u=this.parentNode;
    var s=this.innerHTML;
    var w=this.title;
    var t=this.value;
    var n="ui-multiselect-"+(this.id||k+"-option-"+o);
    var x=this.disabled;
    var m=this.selected;
    var r=["ui-corner-all"];
    var q=(x?"ui-multiselect-disabled ":" ")+this.className;
    var v;
    if(u.tagName==="OPTGROUP"){v=u.getAttribute("label");
    if(b.inArray(v,e)===-1){f+='<li class="ui-multiselect-optgroup-label '+u.className+'"><a href="#">'+v+"</a></li>";
    e.push(v)
    }}if(x){r.push("ui-state-disabled")
    }if(m&&!i.multiple){r.push("ui-state-active")
    }f+='<li class="'+q+'">';
    f+='<label for="'+n+'" title="'+w+'" class="'+r.join(" ")+'">';
    f+='<input id="'+n+'" name="multiselect_'+k+'" type="'+(i.multiple?"checkbox":"radio")+'" value="'+t+'" title="'+s+'"';
    if(m){f+=' checked="checked"';
    f+=' aria-selected="true"'
    }if(x){f+=' disabled="disabled"';
    f+=' aria-disabled="true"'
    }f+=" /><span>"+s+"</span></label></li>"
    });
    l.html(f);
    this.labels=h.find("label");
    this.inputs=this.labels.children("input");
    this._setButtonWidth();
    this._setMenuWidth();
    this.button[0].defaultValue=this.update();
    if(!j){this._trigger("refresh")
    }},update:function(){var i=this.options;
    var f=this.inputs;
    var e=f.filter(":checked");
    var g=e.length;
    var h;
    if(g===0){h=i.noneSelectedText
    }else{if(b.isFunction(i.selectedText)){h=i.selectedText.call(this,g,f.length,e.get())
    }else{if(/\d/.test(i.selectedList)&&i.selectedList>0&&g<=i.selectedList){h=e.map(function(){return b(this).next().html()
    }).get().join(", ")
    }else{h=i.selectedText.replace("#",g).replace("#",f.length)
    }}}this._setButtonValue(h);
    return h
    },_setButtonValue:function(e){this.buttonlabel.text(e)
    },_bindEvents:function(){var e=this;
    var f=this.button;
    function g(){e[e._isOpen?"close":"open"]();
    return false
    }f.find("span").bind("click.multiselect",g);
    f.bind({click:g,keypress:function(h){switch(h.which){case 27:case 38:case 37:e.close();
    break;
    case 39:case 40:e.open();
    break
    }},mouseenter:function(){if(!f.hasClass("ui-state-disabled")){b(this).addClass("ui-state-hover")
    }},mouseleave:function(){b(this).removeClass("ui-state-hover")
    },focus:function(){if(!f.hasClass("ui-state-disabled")){b(this).addClass("ui-state-focus")
    }},blur:function(){b(this).removeClass("ui-state-focus")
    }});
    this.header.delegate("a","click.multiselect",function(h){if(b(this).hasClass("ui-multiselect-close")){e.close()
    }else{e[b(this).hasClass("ui-multiselect-all")?"checkAll":"uncheckAll"]()
    }h.preventDefault()
    });
    this.menu.delegate("li.ui-multiselect-optgroup-label a","click.multiselect",function(l){l.preventDefault();
    var k=b(this);
    var j=k.parent().nextUntil("li.ui-multiselect-optgroup-label").find("input:visible:not(:disabled)");
    var h=j.get();
    var i=k.parent().text();
    if(e._trigger("beforeoptgrouptoggle",l,{inputs:h,label:i})===false){return
    }e._toggleChecked(j.filter(":checked").length!==j.length,j);
    e._trigger("optgrouptoggle",l,{inputs:h,label:i,checked:h[0].checked})
    }).delegate("label","mouseenter.multiselect",function(){if(!b(this).hasClass("ui-state-disabled")){e.labels.removeClass("ui-state-hover");
    b(this).addClass("ui-state-hover").find("input").focus()
    }}).delegate("label","keydown.multiselect",function(h){h.preventDefault();
    switch(h.which){case 9:case 27:e.close();
    break;
    case 38:case 40:case 37:case 39:e._traverse(h.which,this);
    break;
    case 13:b(this).find("input")[0].click();
    break
    }}).delegate('input[type="checkbox"], input[type="radio"]',"click.multiselect",function(k){var j=b(this);
    var l=this.value;
    var i=this.checked;
    var h=e.element.find("option");
    if(this.disabled||e._trigger("click",k,{value:l,text:this.title,checked:i})===false){k.preventDefault();
    return
    }j.focus();
    j.attr("aria-selected",i);
    h.each(function(){if(this.value===l){this.selected=i
    }else{if(!e.options.multiple){this.selected=false
    }}});
    if(!e.options.multiple){e.labels.removeClass("ui-state-active");
    j.closest("label").toggleClass("ui-state-active",i);
    e.close()
    }e.element.trigger("change");
    setTimeout(b.proxy(e.update,e),10)
    });
    d.bind("mousedown."+this._namespaceID,function(h){if(e._isOpen&&!b.contains(e.menu[0],h.target)&&!b.contains(e.button[0],h.target)&&h.target!==e.button[0]){e.close()
    }});
    b(this.element[0].form).bind("reset.multiselect",function(){setTimeout(b.proxy(e.refresh,e),10)
    })
    },_setButtonWidth:function(){var e=this.element.outerWidth();
    var f=this.options;
    if(/\d/.test(f.minWidth)&&e<f.minWidth){e=f.minWidth
    }},_setMenuWidth:function(){var e=this.menu;
    e.outerWidth(this.button.outerWidth())
    },_traverse:function(h,i){var f=b(i);
    var e=h===38||h===37;
    $next=f.parent()[e?"prevAll":"nextAll"]("li:not(.ui-multiselect-disabled, .ui-multiselect-optgroup-label)")[e?"last":"first"]();
    if(!$next.length){var g=this.menu.find("ul").last();
    this.menu.find("label")[e?"last":"first"]().trigger("mouseover");
    g.scrollTop(e?g.height():0)
    }else{$next.find("label").trigger("mouseover")
    }},_toggleState:function(f,e){return function(){if(!this.disabled){this[f]=e
    }if(e){this.setAttribute("aria-selected",true)
    }else{this.removeAttribute("aria-selected")
    }}
    },_toggleChecked:function(e,i){var h=(i&&i.length)?i:this.inputs;
    var g=this;
    h.each(this._toggleState("checked",e));
    h.eq(0).focus();
    this.update();
    var f=h.map(function(){return this.value
    }).get();
    this.element.find("option").each(function(){if(!this.disabled&&b.inArray(this.value,f)>-1){g._toggleState("selected",e).call(this)
    }});
    if(h.length){this.element.trigger("change")
    }},_toggleDisabled:function(f){this.button.attr({disabled:f,"aria-disabled":f})[f?"addClass":"removeClass"]("ui-state-disabled");
    var e=this.menu.find("input");
    var g="ech-multiselect-disabled";
    if(f){e=e.filter(":enabled").data(g,true)
    }else{e=e.filter(function(){return b.data(this,g)===true
    }).removeData(g)
    }e.attr({disabled:f,"arial-disabled":f}).parent()[f?"addClass":"removeClass"]("ui-state-disabled");
    this.element.attr({disabled:f,"aria-disabled":f})
    },open:function(j){var m=this;
    var i=this.button;
    var f=this.menu;
    var h=this.speed;
    var g=this.options;
    var k=[];
    if(this._trigger("beforeopen")===false||i.hasClass("ui-state-disabled")||this._isOpen){return
    }var l=f.find("ul").last();
    var n=g.show;
    if(b.isArray(g.show)){n=g.show[0];
    h=g.show[1]||m.speed
    }if(n){k=[n,h]
    }l.scrollTop(0).height(g.height);
    this.position();
    b.fn.show.apply(f,k);
    this.labels.eq(0).trigger("mouseover").trigger("mouseenter").find("input").trigger("focus");
    i.addClass("ui-state-active");
    this._isOpen=true;
    this._trigger("open")
    },close:function(){if(this._trigger("beforeclose")===false){return
    }var h=this.options;
    var f=h.hide;
    var g=this.speed;
    var e=[];
    if(b.isArray(h.hide)){f=h.hide[0];
    g=h.hide[1]||this.speed
    }if(f){e=[f,g]
    }b.fn.hide.apply(this.menu,e);
    this.button.removeClass("ui-state-active").trigger("blur").trigger("mouseleave");
    this._isOpen=false;
    this._trigger("close")
    },enable:function(){this._toggleDisabled(false)
    },disable:function(){this._toggleDisabled(true)
    },checkAll:function(f){this._toggleChecked(true);
    this._trigger("checkAll")
    },uncheckAll:function(){this._toggleChecked(false);
    this._trigger("uncheckAll")
    },getChecked:function(){return this.menu.find("input").filter(":checked")
    },destroy:function(){b.Widget.prototype.destroy.call(this);
    d.unbind(this._namespaceID);
    this.button.remove();
    this.menu.remove();
    this.element.show();
    return this
    },isOpen:function(){return this._isOpen
    },widget:function(){return this.menu
    },getButton:function(){return this.button
    },position:function(){var e=this.options;
    if(b.ui.position&&!b.isEmptyObject(e.position)){e.position.of=e.position.of||button;
    this.menu.show().position(e.position).hide()
    }else{var f=this.button.offset();
    this.menu.css({top:f.top+this.button.outerHeight(),left:f.left})
    }},_setOption:function(e,f){var g=this.menu;
    switch(e){case"header":g.find("div.ui-multiselect-header")[f?"show":"hide"]();
    break;
    case"checkAllText":g.find("a.ui-multiselect-all span").eq(-1).text(f);
    break;
    case"uncheckAllText":g.find("a.ui-multiselect-none span").eq(-1).text(f);
    break;
    case"height":g.find("ul").last().height(parseInt(f,10));
    break;
    case"minWidth":this.options[e]=parseInt(f,10);
    this._setButtonWidth();
    this._setMenuWidth();
    break;
    case"selectedText":case"selectedList":case"noneSelectedText":this.options[e]=f;
    this.update();
    break;
    case"classes":g.add(this.button).removeClass(this.options.classes).addClass(f);
    break;
    case"multiple":g.toggleClass("ui-multiselect-single",!f);
    this.options.multiple=f;
    this.element[0].multiple=f;
    this.refresh();
    break;
    case"position":this.position()
    }b.Widget.prototype._setOption.apply(this,arguments)
    }})
    })(jQuery);
    (function(a){var b=/[\-\[\]{}()*+?.,\\\^$|#\s]/g;
    a.widget("ech.multiselectfilter",{options:{label:"Filter:",width:null,placeholder:"Enter keywords",autoReset:false},_create:function(){var d=this.options;
    var c=(this.instance=a(this.element).data("multiselect"));
    var g=(this.header=c.menu.find(".ui-multiselect-header").addClass("ui-multiselect-hasfilter"));
    var f=(this.wrapper=a('<div class="ui-multiselect-filter">'+(d.label.length?d.label:"")+'<input placeholder="'+d.placeholder+'" type="search"'+(/\d/.test(d.width)?'style="width:'+d.width+'px"':"")+" /></div>").prependTo(this.header));
    this.inputs=c.menu.find('input[type="checkbox"], input[type="radio"]');
    this.input=f.find("input").bind({keydown:function(h){if(h.which===13){h.preventDefault()
    }},keyup:a.proxy(this._handler,this),click:a.proxy(this._handler,this)});
    this.updateCache();
    c._toggleChecked=function(i,l){var k=(l&&l.length)?l:this.labels.find("input");
    var h=c._isOpen?":disabled, :hidden":":disabled";
    k=k.not(h).each(this._toggleState("checked",i));
    this.update();
    var j=k.map(function(){return this.value
    }).get();
    this.element.find("option").filter(function(){if(!this.disabled&&a.inArray(this.value,j)>-1){_self._toggleState("selected",i).call(this)
    }});
    if(k.length){this.element.trigger("change")
    }};
    var e=a(document).bind("multiselectrefresh",a.proxy(function(){this.updateCache();
    this._handler()
    },this));
    if(this.options.autoReset){e.bind("multiselectclose",a.proxy(this._reset,this))
    }},_handler:function(i){var f=a.trim(this.input[0].value.toLowerCase()),h=this.rows,c=this.inputs,d=this.cache;
    if(!f){h.show()
    }else{h.hide();
    var g=new RegExp(f.replace(b,"\\$&"),"gi");
    this._trigger("filter",i,a.map(d,function(e,j){if(e.search(g)!==-1){h.eq(j).show();
    return c.get(j)
    }return null
    }))
    }this.instance.menu.find(".ui-multiselect-optgroup-label").each(function(){var j=a(this);
    var e=j.nextUntil(".ui-multiselect-optgroup-label").filter(function(){return a.css(this,"display")!=="none"
    }).length;
    j[e?"show":"hide"]()
    })
    },_reset:function(){this.input.val("").trigger("keyup")
    },updateCache:function(){this.rows=this.instance.menu.find(".ui-multiselect-checkboxes li:not(.ui-multiselect-optgroup-label)");
    this.cache=this.element.children().map(function(){var c=a(this);
    if(this.tagName.toLowerCase()==="optgroup"){c=c.children()
    }return c.map(function(){return this.innerHTML.toLowerCase()
    }).get()
    }).get()
    },widget:function(){return this.wrapper
    },destroy:function(){a.Widget.prototype.destroy.call(this);
    this.input.val("").trigger("keyup");
    this.wrapper.remove()
    }})
    })(jQuery);
    (function(b,c){var a=0;
    var d=b(document);
    b.widget("ech.multiselect",{options:{header:true,height:175,minWidth:225,classes:"",checkAllText:"Select all",uncheckAllText:"Clear all",noneSelectedText:"Select options",selectedText:"# selected",selectedList:0,show:null,hide:null,autoOpen:false,multiple:true,position:{}},_create:function(){var h=this.element.hide();
    var j=this.options;
    this.speed=b.fx.speeds._default;
    this._isOpen=false;
    this._namespaceID=this.eventNamespace||("multiselect"+a);
    var g=(this.button=b('<button type="button"><span class="ui-icon ui-icon-triangle-2-n-s"></span></button>')).addClass("ui-multiselect ui-widget ui-state-default ui-corner-all").addClass(j.classes).attr({title:h.attr("title"),"aria-haspopup":true,tabIndex:h.attr("tabIndex")}).insertAfter(h),e=(this.buttonlabel=b("<span />")).html(j.noneSelectedText).appendTo(g),i=(this.menu=b("<div />")).addClass("ui-multiselect-menu ui-widget ui-widget-content ui-corner-all").addClass(j.classes).appendTo(document.body),l=(this.header=b("<div />")).addClass("ui-widget-header ui-corner-all ui-multiselect-header ui-helper-clearfix").appendTo(i),f=(this.headerLinkContainer=b("<ul />")).addClass("ui-helper-reset").html(function(){if(j.header===true){return'<li><a class="ui-multiselect-all" href="#"><span class="ui-icon ui-icon-check"></span><span>'+j.checkAllText+'</span></a></li><li><a class="ui-multiselect-none" href="#"><span class="ui-icon ui-icon-closethick"></span><span>'+j.uncheckAllText+"</span></a></li>"
    }else{if(typeof j.header==="string"){return"<li>"+j.header+"</li>"
    }else{return""
    }}}).append('<li class="ui-multiselect-close"><a href="#" class="ui-multiselect-close"><span class="ui-icon ui-icon-circle-close"></span></a></li>').appendTo(l),k=(this.checkboxContainer=b("<ul />")).addClass("ui-multiselect-checkboxes ui-helper-reset").appendTo(i);
    l.append('<a href="#" id="update_button" class="ui-multiselect-close update-btn arrow visible-phone"><span class="btn-white-arrow">Update Selection<div class="icon"></div></span></a>');
    this._bindEvents();
    this.refresh(true);
    if(!j.multiple){i.addClass("ui-multiselect-single")
    }a++
    },_init:function(){if(this.options.header===false){this.header.hide()
    }if(!this.options.multiple){this.headerLinkContainer.find(".ui-multiselect-all, .ui-multiselect-none").hide()
    }if(this.options.autoOpen){this.open()
    }if(this.element.is(":disabled")){this.disable()
    }},refresh:function(j){var g=this.element;
    var i=this.options;
    var h=this.menu;
    var l=this.checkboxContainer;
    var e=[];
    var f="";
    var k=g.attr("id")||a++;
    g.find("option").each(function(o){var p=b(this);
    var u=this.parentNode;
    var s=this.innerHTML;
    var w=this.title;
    var t=this.value;
    var n="ui-multiselect-"+(this.id||k+"-option-"+o);
    var x=this.disabled;
    var m=this.selected;
    var r=["ui-corner-all"];
    var q=(x?"ui-multiselect-disabled ":" ")+this.className;
    var v;
    if(u.tagName==="OPTGROUP"){v=u.getAttribute("label");
    if(b.inArray(v,e)===-1){f+='<li class="ui-multiselect-optgroup-label '+u.className+'"><a href="#">'+v+"</a></li>";
    e.push(v)
    }}if(x){r.push("ui-state-disabled")
    }if(m&&!i.multiple){r.push("ui-state-active")
    }f+='<li class="'+q+'">';
    f+='<label for="'+n+'" title="'+w+'" class="'+r.join(" ")+'">';
    f+='<input id="'+n+'" name="multiselect_'+k+'" type="'+(i.multiple?"checkbox":"radio")+'" value="'+t+'" title="'+s+'"';
    if(m){f+=' checked="checked"';
    f+=' aria-selected="true"'
    }if(x){f+=' disabled="disabled"';
    f+=' aria-disabled="true"'
    }f+=" /><span>"+s+"</span></label></li>"
    });
    l.html(f);
    this.labels=h.find("label");
    this.inputs=this.labels.children("input");
    this._setButtonWidth();
    this._setMenuWidth();
    this.button[0].defaultValue=this.update();
    if(!j){this._trigger("refresh")
    }},update:function(){var i=this.options;
    var f=this.inputs;
    var e=f.filter(":checked");
    var g=e.length;
    var h;
    if(g===0){h=i.noneSelectedText
    }else{if(b.isFunction(i.selectedText)){h=i.selectedText.call(this,g,f.length,e.get())
    }else{if(/\d/.test(i.selectedList)&&i.selectedList>0&&g<=i.selectedList){h=e.map(function(){return b(this).next().html()
    }).get().join(", ")
    }else{h=i.selectedText.replace("#",g).replace("#",f.length)
    }}}this._setButtonValue(h);
    return h
    },_setButtonValue:function(e){this.buttonlabel.text(e)
    },_bindEvents:function(){var e=this;
    var f=this.button;
    function g(){e[e._isOpen?"close":"open"]();
    return false
    }f.find("span").bind("click.multiselect",g);
    f.bind({click:g,keypress:function(h){switch(h.which){case 27:case 38:case 37:e.close();
    break;
    case 39:case 40:e.open();
    break
    }},mouseenter:function(){if(!f.hasClass("ui-state-disabled")){b(this).addClass("ui-state-hover")
    }},mouseleave:function(){b(this).removeClass("ui-state-hover")
    },focus:function(){if(!f.hasClass("ui-state-disabled")){b(this).addClass("ui-state-focus")
    }},blur:function(){b(this).removeClass("ui-state-focus")
    }});
    if(b("html").hasClass("touch")){window.addEventListener("orientationchange",function(){e.close()
    },false)
    }this.header.delegate("a","click.multiselect",function(h){if(b(this).hasClass("ui-multiselect-close")){e.close()
    }else{e[b(this).hasClass("ui-multiselect-all")?"checkAll":"uncheckAll"]()
    }h.preventDefault()
    });
    this.menu.delegate("li.ui-multiselect-optgroup-label a","click.multiselect",function(l){l.preventDefault();
    var k=b(this);
    var j=k.parent().nextUntil("li.ui-multiselect-optgroup-label").find("input:visible:not(:disabled)");
    var h=j.get();
    var i=k.parent().text();
    if(e._trigger("beforeoptgrouptoggle",l,{inputs:h,label:i})===false){return
    }e._toggleChecked(j.filter(":checked").length!==j.length,j);
    e._trigger("optgrouptoggle",l,{inputs:h,label:i,checked:h[0].checked})
    }).delegate("label","mouseenter.multiselect",function(){if(!b(this).hasClass("ui-state-disabled")){e.labels.removeClass("ui-state-hover");
    b(this).addClass("ui-state-hover").find("input").focus()
    }}).delegate("label","keydown.multiselect",function(h){h.preventDefault();
    switch(h.which){case 9:case 27:e.close();
    break;
    case 38:case 40:case 37:case 39:e._traverse(h.which,this);
    break;
    case 13:b(this).find("input")[0].click();
    break
    }}).delegate('input[type="checkbox"], input[type="radio"]',"click.multiselect",function(k){var j=b(this);
    var l=this.value;
    var i=this.checked;
    var h=e.element.find("option");
    if(this.disabled||e._trigger("click",k,{value:l,text:this.title,checked:i})===false){k.preventDefault();
    return
    }j.focus();
    j.attr("aria-selected",i);
    h.each(function(){if(this.value===l){this.selected=i
    }else{if(!e.options.multiple){this.selected=false
    }}});
    if(!e.options.multiple){e.labels.removeClass("ui-state-active");
    j.closest("label").toggleClass("ui-state-active",i);
    e.close()
    }e.element.trigger("change");
    setTimeout(b.proxy(e.update,e),10)
    });
    d.bind("mousedown."+this._namespaceID,function(h){if(e._isOpen&&!b.contains(e.menu[0],h.target)&&!b.contains(e.button[0],h.target)&&h.target!==e.button[0]&&b(window).width()>640){e.close()
    }});
    b(this.element[0].form).bind("reset.multiselect",function(){setTimeout(b.proxy(e.refresh,e),10)
    })
    },_setButtonWidth:function(){var e=this.element.outerWidth();
    var f=this.options;
    if(/\d/.test(f.minWidth)&&e<f.minWidth){e=f.minWidth
    }},_setMenuWidth:function(){var e=this.menu;
    e.outerWidth(this.button.outerWidth())
    },_traverse:function(h,i){var f=b(i);
    var e=h===38||h===37;
    $next=f.parent()[e?"prevAll":"nextAll"]("li:not(.ui-multiselect-disabled, .ui-multiselect-optgroup-label)")[e?"last":"first"]();
    if(!$next.length){var g=this.menu.find("ul").last();
    this.menu.find("label")[e?"last":"first"]().trigger("mouseover");
    g.scrollTop(e?g.height():0)
    }else{$next.find("label").trigger("mouseover")
    }},_toggleState:function(f,e){return function(){if(!this.disabled){this[f]=e
    }if(e){this.setAttribute("aria-selected",true)
    }else{this.removeAttribute("aria-selected")
    }}
    },_toggleChecked:function(e,i){var h=(i&&i.length)?i:this.inputs;
    var g=this;
    h.each(this._toggleState("checked",e));
    h.eq(0).focus();
    this.update();
    var f=h.map(function(){return this.value
    }).get();
    this.element.find("option").each(function(){if(!this.disabled&&b.inArray(this.value,f)>-1){g._toggleState("selected",e).call(this)
    }});
    if(h.length){this.element.trigger("change")
    }},_toggleDisabled:function(f){this.button.attr({disabled:f,"aria-disabled":f})[f?"addClass":"removeClass"]("ui-state-disabled");
    var e=this.menu.find("input");
    var g="ech-multiselect-disabled";
    if(f){e=e.filter(":enabled").data(g,true)
    }else{e=e.filter(function(){return b.data(this,g)===true
    }).removeData(g)
    }e.attr({disabled:f,"arial-disabled":f}).parent()[f?"addClass":"removeClass"]("ui-state-disabled");
    this.element.attr({disabled:f,"aria-disabled":f})
    },open:function(j){var m=this;
    var i=this.button;
    var f=this.menu;
    var h=this.speed;
    var g=this.options;
    var k=[];
    if(b(window).width()<=640){b("html, body").css("overflow","hidden")
    }if(this._trigger("beforeopen")===false||i.hasClass("ui-state-disabled")||this._isOpen){return
    }var l=f.find("ul").last();
    var n=g.show;
    if(b.isArray(g.show)){n=g.show[0];
    h=g.show[1]||m.speed
    }if(n){k=[n,h]
    }l.scrollTop(0).height(g.height);
    this.position();
    b.fn.show.apply(f,k);
    this.labels.eq(0).trigger("mouseover").trigger("mouseenter").find("input").trigger("focus");
    i.addClass("ui-state-active");
    this._isOpen=true;
    this._trigger("open")
    },close:function(){if(this._trigger("beforeclose")===false){return
    }var g=this;
    b("html, body").css("overflow","visible");
    var i=g.options;
    var f=i.hide;
    var h=g.speed;
    var e=[];
    if(b.isArray(i.hide)){f=i.hide[0];
    h=i.hide[1]||g.speed
    }if(f){e=[f,h]
    }g.button.removeClass("ui-state-active").trigger("blur").trigger("mouseleave");
    if(b(window).width()<=640){b(".ui-multiselect-menu").animate({left:100},300,function(){b.fn.hide.apply(g.menu,e);
    g._isOpen=false;
    g._trigger("close")
    })
    }else{b.fn.hide.apply(g.menu,e);
    g._isOpen=false;
    g._trigger("close")
    }},enable:function(){this._toggleDisabled(false)
    },disable:function(){this._toggleDisabled(true)
    },checkAll:function(f){this._toggleChecked(true);
    this._trigger("checkAll")
    },uncheckAll:function(){this._toggleChecked(false);
    this._trigger("uncheckAll")
    },getChecked:function(){return this.menu.find("input").filter(":checked")
    },destroy:function(){b.Widget.prototype.destroy.call(this);
    d.unbind(this._namespaceID);
    this.button.remove();
    this.menu.remove();
    this.element.show();
    return this
    },isOpen:function(){return this._isOpen
    },widget:function(){return this.menu
    },getButton:function(){return this.button
    },position:function(){var e=this.options;
    if(b.ui.position&&!b.isEmptyObject(e.position)){e.position.of=e.position.of||button;
    this.menu.show().position(e.position).hide()
    }else{var f=this.button.offset();
    if(b(window).width()>640){this.menu.css({top:f.top+this.button.outerHeight(),left:f.left})
    }else{this.menu.css({left:b(window).width()}).animate({left:0},300)
    }}},_setOption:function(e,f){var g=this.menu;
    switch(e){case"header":g.find("div.ui-multiselect-header")[f?"show":"hide"]();
    break;
    case"checkAllText":g.find("a.ui-multiselect-all span").eq(-1).text(f);
    break;
    case"uncheckAllText":g.find("a.ui-multiselect-none span").eq(-1).text(f);
    break;
    case"height":g.find("ul").last().height(parseInt(f,10));
    break;
    case"minWidth":this.options[e]=parseInt(f,10);
    this._setButtonWidth();
    this._setMenuWidth();
    break;
    case"selectedText":case"selectedList":case"noneSelectedText":this.options[e]=f;
    this.update();
    break;
    case"classes":g.add(this.button).removeClass(this.options.classes).addClass(f);
    break;
    case"multiple":g.toggleClass("ui-multiselect-single",!f);
    this.options.multiple=f;
    this.element[0].multiple=f;
    this.refresh();
    break;
    case"position":this.position()
    }b.Widget.prototype._setOption.apply(this,arguments)
    }})
    })(jQuery);
    /*!
     * jQuery.ScrollTo
     * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
     * Dual licensed under MIT and GPL.
     * Date: 4/09/2012
     *
     * @projectDescription Easy element scrolling using jQuery.
     * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
     * @author Ariel Flesler
     * @version 1.4.3.1
     *
     * @id jQuery.scrollTo
     * @id jQuery.fn.scrollTo
     * @param {String, Number, DOMElement, jQuery, Object} target Where to scroll the matched elements.
     *	  The different options for target are:
     *		- A number position (will be applied to all axes).
     *		- A string position ('44', '100px', '+=90', etc ) will be applied to all axes
     *		- A jQuery/DOM element ( logically, child of the element to scroll )
     *		- A string selector, that will be relative to the element to scroll ( 'li:eq(2)', etc )
     *		- A hash { top:x, left:y }, x and y can be any kind of number/string like above.
     *		- A percentage of the container's dimension/s, for example: 50% to go to the middle.
     *		- The string 'max' for go-to-end. 
     * @param {Number, Function} duration The OVERALL length of the animation, this argument can be the settings object instead.
     * @param {Object,Function} settings Optional set of settings or the onAfter callback.
     *	 @option {String} axis Which axis must be scrolled, use 'x', 'y', 'xy' or 'yx'.
     *	 @option {Number, Function} duration The OVERALL length of the animation.
     *	 @option {String} easing The easing method for the animation.
     *	 @option {Boolean} margin If true, the margin of the target element will be deducted from the final position.
     *	 @option {Object, Number} offset Add/deduct from the end position. One number for both axes or { top:x, left:y }.
     *	 @option {Object, Number} over Add/deduct the height/width multiplied by 'over', can be { top:x, left:y } when using both axes.
     *	 @option {Boolean} queue If true, and both axis are given, the 2nd axis will only be animated after the first one ends.
     *	 @option {Function} onAfter Function to be called after the scrolling ends. 
     *	 @option {Function} onAfterFirst If queuing is activated, this function will be called after the first scrolling ends.
     * @return {jQuery} Returns the same jQuery object, for chaining.
     *
     * @desc Scroll to a fixed position
     * @example $('div').scrollTo( 340 );
     *
     * @desc Scroll relatively to the actual position
     * @example $('div').scrollTo( '+=340px', { axis:'y' } );
     *
     * @desc Scroll using a selector (relative to the scrolled element)
     * @example $('div').scrollTo( 'p.paragraph:eq(2)', 500, { easing:'swing', queue:true, axis:'xy' } );
     *
     * @desc Scroll to a DOM element (same for jQuery object)
     * @example var second_child = document.getElementById('container').firstChild.nextSibling;
     *			$('#container').scrollTo( second_child, { duration:500, axis:'x', onAfter:function(){
     *				alert('scrolled!!');																   
     *			}});
     *
     * @desc Scroll on both axes, to different values
     * @example $('div').scrollTo( { top: 300, left:'+=200' }, { axis:'xy', offset:-20 } );
     */
    ;
    (function(c){var a=c.scrollTo=function(f,e,d){c(window).scrollTo(f,e,d)
    };
    a.defaults={axis:"xy",duration:parseFloat(c.fn.jquery)>=1.3?0:1,limit:true};
    a.window=function(d){return c(window)._scrollable()
    };
    c.fn._scrollable=function(){return this.map(function(){var e=this,d=!e.nodeName||c.inArray(e.nodeName.toLowerCase(),["iframe","#document","html","body"])!=-1;
    if(!d){return e
    }var f=(e.contentWindow||e).document||e.ownerDocument||e;
    return/webkit/i.test(navigator.userAgent)||f.compatMode=="BackCompat"?f.body:f.documentElement
    })
    };
    c.fn.scrollTo=function(f,e,d){if(typeof e=="object"){d=e;
    e=0
    }if(typeof d=="function"){d={onAfter:d}
    }if(f=="max"){f=9000000000
    }d=c.extend({},a.defaults,d);
    e=e||d.duration;
    d.queue=d.queue&&d.axis.length>1;
    if(d.queue){e/=2
    }d.offset=b(d.offset);
    d.over=b(d.over);
    return this._scrollable().each(function(){if(f==null){return
    }var l=this,j=c(l),k=f,i,g={},m=j.is("html,body");
    switch(typeof k){case"number":case"string":if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(k)){k=b(k);
    break
    }k=c(k,this);
    if(!k.length){return
    }case"object":if(k.is||k.style){i=(k=c(k)).offset()
    }}c.each(d.axis.split(""),function(q,r){var s=r=="x"?"Left":"Top",u=s.toLowerCase(),p="scroll"+s,o=l[p],n=a.max(l,r);
    if(i){g[p]=i[u]+(m?0:o-j.offset()[u]);
    if(d.margin){g[p]-=parseInt(k.css("margin"+s))||0;
    g[p]-=parseInt(k.css("border"+s+"Width"))||0
    }g[p]+=d.offset[u]||0;
    if(d.over[u]){g[p]+=k[r=="x"?"width":"height"]()*d.over[u]
    }}else{var t=k[u];
    g[p]=t.slice&&t.slice(-1)=="%"?parseFloat(t)/100*n:t
    }if(d.limit&&/^\d+$/.test(g[p])){g[p]=g[p]<=0?0:Math.min(g[p],n)
    }if(!q&&d.queue){if(o!=g[p]){h(d.onAfterFirst)
    }delete g[p]
    }});
    h(d.onAfter);
    function h(n){j.animate(g,e,d.easing,n&&function(){n.call(this,f,d)
    })
    }}).end()
    };
    a.max=function(j,i){var h=i=="x"?"Width":"Height",e="scroll"+h;
    if(!c(j).is("html,body")){return j[e]-c(j)[h.toLowerCase()]()
    }var g="client"+h,f=j.ownerDocument.documentElement,d=j.ownerDocument.body;
    return Math.max(f[e],d[e])-Math.min(f[g],d[g])
    };
    function b(d){return typeof d=="object"?d:{top:d,left:d}
    }})(jQuery);
    /*! jQuery Validation Plugin - v1.10.0 - 9/7/2012
    * https://github.com/jzaefferer/jquery-validation
    * Copyright (c) 2012 Jörn Zaefferer; Licensed MIT, GPL */
    (function(b){b.extend(b.fn,{validate:function(a){if(!this.length){a&&a.debug&&window.console&&console.warn("nothing selected, can't validate, returning nothing");
    return
    }var d=b.data(this[0],"validator");
    return d?d:(this.attr("novalidate","novalidate"),d=new b.validator(a,this[0]),b.data(this[0],"validator",d),d.settings.onsubmit&&(this.validateDelegate(":submit","click",function(c){d.settings.submitHandler&&(d.submitButton=c.target),b(c.target).hasClass("cancel")&&(d.cancelSubmit=!0)
    }),this.submit(function(c){function e(){var f;
    return d.settings.submitHandler?(d.submitButton&&(f=b("<input type='hidden'/>").attr("name",d.submitButton.name).val(d.submitButton.value).appendTo(d.currentForm)),d.settings.submitHandler.call(d,d.currentForm,c),d.submitButton&&f.remove(),!1):!0
    }return d.settings.debug&&c.preventDefault(),d.cancelSubmit?(d.cancelSubmit=!1,e()):d.form()?d.pendingRequest?(d.formSubmitted=!0,!1):e():(d.focusInvalid(),!1)
    })),d)
    },valid:function(){if(b(this[0]).is("form")){return this.validate().form()
    }var a=!0,d=b(this[0].form).validate();
    return this.each(function(){a&=d.element(this)
    }),a
    },removeAttrs:function(a){var f={},e=this;
    return b.each(a.split(/\s/),function(d,c){f[c]=e.attr(c),e.removeAttr(c)
    }),f
    },rules:function(r,q){var p=this[0];
    if(r){var o=b.data(p.form,"validator").settings,n=o.rules,m=b.validator.staticRules(p);
    switch(r){case"add":b.extend(m,b.validator.normalizeRule(q)),n[p.name]=m,q.messages&&(o.messages[p.name]=b.extend(o.messages[p.name],q.messages));
    break;
    case"remove":if(!q){return delete n[p.name],m
    }var l={};
    return b.each(q.split(/\s/),function(d,c){l[c]=m[c],delete m[c]
    }),l
    }}var k=b.validator.normalizeRules(b.extend({},b.validator.metadataRules(p),b.validator.classRules(p),b.validator.attributeRules(p),b.validator.staticRules(p)),p);
    if(k.required){var a=k.required;
    delete k.required,k=b.extend({required:a},k)
    }return k
    }}),b.extend(b.expr[":"],{blank:function(a){return !b.trim(""+a.value)
    },filled:function(a){return !!b.trim(""+a.value)
    },unchecked:function(c){return !c.checked
    }}),b.validator=function(a,d){this.settings=b.extend(!0,{},b.validator.defaults,a),this.currentForm=d,this.init()
    },b.validator.format=function(a,d){return arguments.length===1?function(){var e=b.makeArray(arguments);
    return e.unshift(a),b.validator.format.apply(this,e)
    }:(arguments.length>2&&d.constructor!==Array&&(d=b.makeArray(arguments).slice(1)),d.constructor!==Array&&(d=[d]),b.each(d,function(e,f){a=a.replace(new RegExp("\\{"+e+"\\}","g"),f)
    }),a)
    },b.extend(b.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:!0,errorContainer:b([]),errorLabelContainer:b([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(d,c){this.lastActive=d,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,d,this.settings.errorClass,this.settings.validClass),this.addWrapper(this.errorsFor(d)).hide())
    },onfocusout:function(d,c){!this.checkable(d)&&(d.name in this.submitted||!this.optional(d))&&this.element(d)
    },onkeyup:function(d,c){if(c.which===9&&this.elementValue(d)===""){return
    }(d.name in this.submitted||d===this.lastActive)&&this.element(d)
    },onclick:function(d,c){d.name in this.submitted?this.element(d):d.parentNode.name in this.submitted&&this.element(d.parentNode)
    },highlight:function(a,f,e){a.type==="radio"?this.findByName(a.name).addClass(f).removeClass(e):b(a).addClass(f).removeClass(e)
    },unhighlight:function(a,f,e){a.type==="radio"?this.findByName(a.name).removeClass(f).addClass(e):b(a).removeClass(f).addClass(e)
    }},setDefaults:function(a){b.extend(b.validator.defaults,a)
    },messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:b.validator.format("Please enter no more than {0} characters."),minlength:b.validator.format("Please enter at least {0} characters."),rangelength:b.validator.format("Please enter a value between {0} and {1} characters long."),range:b.validator.format("Please enter a value between {0} and {1}."),max:b.validator.format("Please enter a value less than or equal to {0}."),min:b.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function e(g){var i=b.data(this[0].form,"validator"),h="on"+g.type.replace(/^validate/,"");
    i.settings[h]&&i.settings[h].call(i,this[0],g)
    }this.labelContainer=b(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||b(this.currentForm),this.containers=b(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();
    var a=this.groups={};
    b.each(this.settings.groups,function(h,g){b.each(g.split(/\s/),function(c,i){a[i]=h
    })
    });
    var f=this.settings.rules;
    b.each(f,function(c,g){f[c]=b.validator.normalizeRule(g)
    }),b(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",e).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",e),this.settings.invalidHandler&&b(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)
    },form:function(){return this.checkForm(),b.extend(this.submitted,this.errorMap),this.invalid=b.extend({},this.errorMap),this.valid()||b(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()
    },checkForm:function(){this.prepareForm();
    for(var d=0,c=this.currentElements=this.elements();
    c[d];
    d++){this.check(c[d])
    }return this.valid()
    },element:function(a){a=this.validationTargetFor(this.clean(a)),this.lastElement=a,this.prepareElement(a),this.currentElements=b(a);
    var d=this.check(a)!==!1;
    return d?delete this.invalid[a.name]:this.invalid[a.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),d
    },showErrors:function(a){if(a){b.extend(this.errorMap,a),this.errorList=[];
    for(var d in a){this.errorList.push({message:a[d],element:this.findByName(d)[0]})
    }this.successList=b.grep(this.successList,function(c){return !(c.name in a)
    })
    }this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()
    },resetForm:function(){b.fn.resetForm&&b(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
    },numberOfInvalids:function(){return this.objectLength(this.invalid)
    },objectLength:function(e){var d=0;
    for(var f in e){d++
    }return d
    },hideErrors:function(){this.addWrapper(this.toHide).hide()
    },valid:function(){return this.size()===0
    },size:function(){return this.errorList.length
    },focusInvalid:function(){if(this.settings.focusInvalid){try{b(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")
    }catch(a){}}},findLastActive:function(){var a=this.lastActive;
    return a&&b.grep(this.errorList,function(c){return c.element.name===a.name
    }).length===1&&a
    },elements:function(){var a=this,d={};
    return b(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){return !this.name&&a.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in d||!a.objectLength(b(this).rules())?!1:(d[this.name]=!0,!0)
    })
    },clean:function(a){return b(a)[0]
    },errors:function(){var a=this.settings.errorClass.replace(" ",".");
    return b(this.settings.errorElement+"."+a,this.errorContext)
    },reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=b([]),this.toHide=b([]),this.currentElements=b([])
    },prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)
    },prepareElement:function(c){this.reset(),this.toHide=this.errorsFor(c)
    },elementValue:function(a){var f=b(a).attr("type"),e=b(a).val();
    return f==="radio"||f==="checkbox"?b('input[name="'+b(a).attr("name")+'"]:checked').val():typeof e=="string"?e.replace(/\r/g,""):e
    },check:function(a){a=this.validationTargetFor(this.clean(a));
    var p=b(a).rules(),o=!1,n=this.elementValue(a),m;
    for(var l in p){var k={method:l,parameters:p[l]};
    try{m=b.validator.methods[l].call(this,n,a,k.parameters);
    if(m==="dependency-mismatch"){o=!0;
    continue
    }o=!1;
    if(m==="pending"){this.toHide=this.toHide.not(this.errorsFor(a));
    return
    }if(!m){return this.formatAndAdd(a,k),!1
    }}catch(j){throw this.settings.debug&&window.console&&console.log("exception occured when checking element "+a.id+", check the '"+k.method+"' method",j),j
    }}if(o){return
    }return this.objectLength(p)&&this.successList.push(a),!0
    },customMetaMessage:function(a,f){if(!b.metadata){return
    }var e=this.settings.meta?b(a).metadata()[this.settings.meta]:b(a).metadata();
    return e&&e.messages&&e.messages[f]
    },customDataMessage:function(a,d){return b(a).data("msg-"+d.toLowerCase())||a.attributes&&b(a).attr("data-msg-"+d.toLowerCase())
    },customMessage:function(e,d){var f=this.settings.messages[e];
    return f&&(f.constructor===String?f:f[d])
    },findDefined:function(){for(var c=0;
    c<arguments.length;
    c++){if(arguments[c]!==undefined){return arguments[c]
    }}return undefined
    },defaultMessage:function(a,d){return this.findDefined(this.customMessage(a.name,d),this.customDataMessage(a,d),this.customMetaMessage(a,d),!this.settings.ignoreTitle&&a.title||undefined,b.validator.messages[d],"<strong>Warning: No message defined for "+a.name+"</strong>")
    },formatAndAdd:function(a,h){var g=this.defaultMessage(a,h.method),f=/\$?\{(\d+)\}/g;
    typeof g=="function"?g=g.call(this,h.parameters,a):f.test(g)&&(g=b.validator.format(g.replace(f,"{$1}"),h.parameters)),this.errorList.push({message:g,element:a}),this.errorMap[a.name]=g,this.submitted[a.name]=g
    },addWrapper:function(c){return this.settings.wrapper&&(c=c.add(c.parent(this.settings.wrapper))),c
    },defaultShowErrors:function(){var e,d;
    for(e=0;
    this.errorList[e];
    e++){var f=this.errorList[e];
    this.settings.highlight&&this.settings.highlight.call(this,f.element,this.settings.errorClass,this.settings.validClass),this.showLabel(f.element,f.message)
    }this.errorList.length&&(this.toShow=this.toShow.add(this.containers));
    if(this.settings.success){for(e=0;
    this.successList[e];
    e++){this.showLabel(this.successList[e])
    }}if(this.settings.unhighlight){for(e=0,d=this.validElements();
    d[e];
    e++){this.settings.unhighlight.call(this,d[e],this.settings.errorClass,this.settings.validClass)
    }}this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()
    },validElements:function(){return this.currentElements.not(this.invalidElements())
    },invalidElements:function(){return b(this.errorList).map(function(){return this.element
    })
    },showLabel:function(a,f){var e=this.errorsFor(a);
    e.length?(e.removeClass(this.settings.validClass).addClass(this.settings.errorClass),e.attr("generated")&&e.html(f)):(e=b("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(a),generated:!0}).addClass(this.settings.errorClass).html(f||""),this.settings.wrapper&&(e=e.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.append(e).length||(this.settings.errorPlacement?this.settings.errorPlacement(e,b(a)):e.insertAfter(a))),!f&&this.settings.success&&(e.text(""),typeof this.settings.success=="string"?e.addClass(this.settings.success):this.settings.success(e,a)),this.toShow=this.toShow.add(e)
    },errorsFor:function(a){var d=this.idOrName(a);
    return this.errors().filter(function(){return b(this).attr("for")===d
    })
    },idOrName:function(c){return this.groups[c.name]||(this.checkable(c)?c.name:c.id||c.name)
    },validationTargetFor:function(c){return this.checkable(c)&&(c=this.findByName(c.name).not(this.settings.ignore)[0]),c
    },checkable:function(c){return/radio|checkbox/i.test(c.type)
    },findByName:function(a){return b(this.currentForm).find('[name="'+a+'"]')
    },getLength:function(a,d){switch(d.nodeName.toLowerCase()){case"select":return b("option:selected",d).length;
    case"input":if(this.checkable(d)){return this.findByName(d.name).filter(":checked").length
    }}return a.length
    },depend:function(d,c){return this.dependTypes[typeof d]?this.dependTypes[typeof d](d,c):!0
    },dependTypes:{"boolean":function(d,c){return d
    },string:function(a,d){return !!b(a,d.form).length
    },"function":function(d,c){return d(c)
    }},optional:function(a){var d=this.elementValue(a);
    return !b.validator.methods.required.call(this,d,a)&&"dependency-mismatch"
    },startRequest:function(c){this.pending[c.name]||(this.pendingRequest++,this.pending[c.name]=!0)
    },stopRequest:function(a,d){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[a.name],d&&this.pendingRequest===0&&this.formSubmitted&&this.form()?(b(this.currentForm).submit(),this.formSubmitted=!1):!d&&this.pendingRequest===0&&this.formSubmitted&&(b(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)
    },previousValue:function(a){return b.data(a,"previousValue")||b.data(a,"previousValue",{old:null,valid:!0,message:this.defaultMessage(a,"remote")})
    }},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(a,d){a.constructor===String?this.classRuleSettings[a]=d:b.extend(this.classRuleSettings,a)
    },classRules:function(a){var f={},e=b(a).attr("class");
    return e&&b.each(e.split(" "),function(){this in b.validator.classRuleSettings&&b.extend(f,b.validator.classRuleSettings[this])
    }),f
    },attributeRules:function(a){var j={},i=b(a);
    for(var h in b.validator.methods){var g;
    h==="required"?(g=i.get(0).getAttribute(h),g===""&&(g=!0),g=!!g):g=i.attr(h),g?j[h]=g:i[0].getAttribute("type")===h&&(j[h]=!0)
    }return j.maxlength&&/-1|2147483647|524288/.test(j.maxlength)&&delete j.maxlength,j
    },metadataRules:function(a){if(!b.metadata){return{}
    }var d=b.data(a.form,"validator").settings.meta;
    return d?b(a).metadata()[d]:b(a).metadata()
    },staticRules:function(a){var f={},e=b.data(a.form,"validator");
    return e.settings.rules&&(f=b.validator.normalizeRule(e.settings.rules[a.name])||{}),f
    },normalizeRules:function(a,d){return b.each(a,function(h,g){if(g===!1){delete a[h];
    return
    }if(g.param||g.depends){var c=!0;
    switch(typeof g.depends){case"string":c=!!b(g.depends,d.form).length;
    break;
    case"function":c=g.depends.call(d,d)
    }c?a[h]=g.param!==undefined?g.param:!0:delete a[h]
    }}),b.each(a,function(f,c){a[f]=b.isFunction(c)?c(d):c
    }),b.each(["minlength","maxlength","min","max"],function(){a[this]&&(a[this]=Number(a[this]))
    }),b.each(["rangelength","range"],function(){a[this]&&(a[this]=[Number(a[this][0]),Number(a[this][1])])
    }),b.validator.autoCreateRanges&&(a.min&&a.max&&(a.range=[a.min,a.max],delete a.min,delete a.max),a.minlength&&a.maxlength&&(a.rangelength=[a.minlength,a.maxlength],delete a.minlength,delete a.maxlength)),a.messages&&delete a.messages,a
    },normalizeRule:function(a){if(typeof a=="string"){var d={};
    b.each(a.split(/\s/),function(){d[this]=!0
    }),a=d
    }return a
    },addMethod:function(a,f,e){b.validator.methods[a]=f,b.validator.messages[a]=e!==undefined?e:b.validator.messages[a],f.length<3&&b.validator.addClassRules(a,b.validator.normalizeRule(a))
    },methods:{required:function(a,h,g){if(!this.depend(g,h)){return"dependency-mismatch"
    }if(h.nodeName.toLowerCase()==="select"){var f=b(h).val();
    return f&&f.length>0
    }return this.checkable(h)?this.getLength(a,h)>0:b.trim(a).length>0
    },remote:function(a,l,k){if(this.optional(l)){return"dependency-mismatch"
    }var j=this.previousValue(l);
    this.settings.messages[l.name]||(this.settings.messages[l.name]={}),j.originalMessage=this.settings.messages[l.name].remote,this.settings.messages[l.name].remote=j.message,k=typeof k=="string"&&{url:k}||k;
    if(this.pending[l.name]){return"pending"
    }if(j.old===a){return j.valid
    }j.old=a;
    var i=this;
    this.startRequest(l);
    var h={};
    return h[l.name]=a,b.ajax(b.extend(!0,{url:k,mode:"abort",port:"validate"+l.name,dataType:"json",data:h,success:function(n){i.settings.messages[l.name].remote=j.originalMessage;
    var m=n===!0||n==="true";
    if(m){var f=i.formSubmitted;
    i.prepareElement(l),i.formSubmitted=f,i.successList.push(l),delete i.invalid[l.name],i.showErrors()
    }else{var e={},c=n||i.defaultMessage(l,"remote");
    e[l.name]=j.message=b.isFunction(c)?c(a):c,i.invalid[l.name]=!0,i.showErrors(e)
    }j.valid=m,i.stopRequest(l,m)
    }},k)),"pending"
    },minlength:function(a,h,g){var f=b.isArray(a)?a.length:this.getLength(b.trim(a),h);
    return this.optional(h)||f>=g
    },maxlength:function(a,h,g){var f=b.isArray(a)?a.length:this.getLength(b.trim(a),h);
    return this.optional(h)||f<=g
    },rangelength:function(a,h,g){var f=b.isArray(a)?a.length:this.getLength(b.trim(a),h);
    return this.optional(h)||f>=g[0]&&f<=g[1]
    },min:function(e,d,f){return this.optional(d)||e>=f
    },max:function(e,d,f){return this.optional(d)||e<=f
    },range:function(e,d,f){return this.optional(d)||e>=f[0]&&e<=f[1]
    },email:function(d,c){return this.optional(c)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(d)
    },url:function(d,c){return this.optional(c)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(d)
    },date:function(d,c){return this.optional(c)||!/Invalid|NaN/.test(new Date(d))
    },dateISO:function(d,c){return this.optional(c)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(d)
    },number:function(d,c){return this.optional(c)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(d)
    },digits:function(d,c){return this.optional(c)||/^\d+$/.test(d)
    },creditcard:function(i,h){if(this.optional(h)){return"dependency-mismatch"
    }if(/[^0-9 \-]+/.test(i)){return !1
    }var n=0,m=0,l=!1;
    i=i.replace(/\D/g,"");
    for(var k=i.length-1;
    k>=0;
    k--){var j=i.charAt(k);
    m=parseInt(j,10),l&&(m*=2)>9&&(m-=9),n+=m,l=!l
    }return n%10===0
    },equalTo:function(a,h,g){var f=b(g);
    return this.settings.onfocusout&&f.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){b(h).valid()
    }),a===f.val()
    }}}),b.format=b.validator.format
    })(jQuery),function(e){var d={};
    if(e.ajaxPrefilter){e.ajaxPrefilter(function(b,i,h){var g=b.port;
    b.mode==="abort"&&(d[g]&&d[g].abort(),d[g]=h)
    })
    }else{var f=e.ajax;
    e.ajax=function(c){var b=("mode" in c?c:e.ajaxSettings).mode,a=("port" in c?c:e.ajaxSettings).port;
    return b==="abort"?(d[a]&&d[a].abort(),d[a]=f.apply(this,arguments)):f.apply(this,arguments)
    }
    }}(jQuery),function(b){!jQuery.event.special.focusin&&!jQuery.event.special.focusout&&document.addEventListener&&b.each({focus:"focusin",blur:"focusout"},function(a,f){function e(c){return c=b.event.fix(c),c.type=f,b.event.handle.call(this,c)
    }b.event.special[f]={setup:function(){this.addEventListener(a,e,!0)
    },teardown:function(){this.removeEventListener(a,e,!0)
    },handler:function(c){var g=arguments;
    return g[0]=b.event.fix(c),g[0].type=f,b.event.handle.apply(this,g)
    }}
    }),b.extend(b.fn,{validateDelegate:function(a,f,e){return this.bind(f,function(g){var d=b(g.target);
    if(d.is(a)){return e.apply(d,arguments)
    }})
    }})
    }(jQuery);
    (function(s){var F,Q,S,z,b,D,d,I,X,Y,L=0,u={},J=[],K=0,t={},E=[],f=null,U=new Image,i=/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,o=/[^\.]\.(swf)\s*$/i,j,l=1,V=0,O="",N,B,A=false,Z=s.extend(s("<div/>")[0],{prop:0}),m=s.browser.msie&&s.browser.version<7&&!window.XMLHttpRequest,n=function(){Q.hide();
    U.onerror=U.onload=null;
    f&&f.abort();
    F.empty()
    },v=function(){if(false===u.onError(J,L,u)){Q.hide();
    A=false
    }else{u.titleShow=false;
    u.width="auto";
    u.height="auto";
    F.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>');
    e()
    }},h=function(){var C=J[L],c,w,x,g,k,a;
    n();
    u=s.extend({},s.fn.fancybox.defaults,typeof s(C).data("fancybox")=="undefined"?u:s(C).data("fancybox"));
    a=u.onStart(J,L,u);
    if(a===false){A=false
    }else{if(typeof a=="object"){u=s.extend(u,a)
    }x=u.title||(C.nodeName?s(C).attr("title"):C.title)||"";
    if(C.nodeName&&!u.orig){u.orig=s(C).children("img:first").length?s(C).children("img:first"):s(C)
    }if(x===""&&u.orig&&u.titleFromAlt){x=u.orig.attr("alt")
    }c=u.href||(C.nodeName?s(C).attr("href"):C.href)||null;
    if(/^(?:javascript)/i.test(c)||c=="#"){c=null
    }if(u.type){w=u.type;
    if(!c){c=u.content
    }}else{if(u.content){w="html"
    }else{if(c){w=c.match(i)?"image":c.match(o)?"swf":s(C).hasClass("iframe")?"iframe":c.indexOf("#")===0?"inline":"ajax"
    }}}if(w){if(w=="inline"){C=c.substr(c.indexOf("#"));
    w=s(C).length>0?"inline":"ajax"
    }u.type=w;
    u.href=c;
    u.title=x;
    if(u.autoDimensions){if(u.type=="html"||u.type=="inline"||u.type=="ajax"){u.width="auto";
    u.height="auto"
    }else{u.autoDimensions=false
    }}if(u.modal){u.overlayShow=true;
    u.hideOnOverlayClick=false;
    u.hideOnContentClick=false;
    u.enableEscapeButton=false;
    u.showCloseButton=false
    }u.padding=parseInt(u.padding,10);
    u.margin=parseInt(u.margin,10);
    F.css("padding",u.padding+u.margin);
    s(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change",function(){s(this).replaceWith(D.children())
    });
    switch(w){case"html":F.html(u.content);
    e();
    break;
    case"inline":if(s(C).parent().is("#fancybox-content")===true){A=false;
    break
    }s('<div class="fancybox-inline-tmp" />').hide().insertBefore(s(C)).bind("fancybox-cleanup",function(){s(this).replaceWith(D.children())
    }).bind("fancybox-cancel",function(){s(this).replaceWith(F.children())
    });
    s(C).appendTo(F);
    e();
    break;
    case"image":A=false;
    s.fancybox.showActivity();
    U=new Image;
    U.onerror=function(){v()
    };
    U.onload=function(){A=true;
    U.onerror=U.onload=null;
    u.width=U.width;
    u.height=U.height;
    s("<img />").attr({id:"fancybox-img",src:U.src,alt:u.title}).appendTo(F);
    y()
    };
    U.src=c;
    break;
    case"swf":u.scrolling="no";
    g='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+u.width+'" height="'+u.height+'"><param name="movie" value="'+c+'"></param>';
    k="";
    s.each(u.swf,function(P,H){g+='<param name="'+P+'" value="'+H+'"></param>';
    k+=" "+P+'="'+H+'"'
    });
    g+='<embed src="'+c+'" type="application/x-shockwave-flash" width="'+u.width+'" height="'+u.height+'"'+k+"></embed></object>";
    F.html(g);
    e();
    break;
    case"ajax":A=false;
    s.fancybox.showActivity();
    u.ajax.win=u.ajax.success;
    f=s.ajax(s.extend({},u.ajax,{url:c,data:u.ajax.data||{},error:function(H){H.status>0&&v()
    },success:function(R,P,H){if((typeof H=="object"?H:f).status==200){if(typeof u.ajax.win=="function"){a=u.ajax.win(c,R,P,H);
    if(a===false){Q.hide();
    return
    }else{if(typeof a=="string"||typeof a=="object"){R=a
    }}}F.html(R);
    e()
    }}}));
    break;
    case"iframe":y()
    }}else{v()
    }}},e=function(){var a=u.width,c=u.height;
    a=a.toString().indexOf("%")>-1?parseInt((s(window).width()-u.margin*2)*parseFloat(a)/100,10)+"px":a=="auto"?"auto":a+"px";
    c=c.toString().indexOf("%")>-1?parseInt((s(window).height()-u.margin*2)*parseFloat(c)/100,10)+"px":c=="auto"?"auto":c+"px";
    F.wrapInner('<div style="width:'+a+";height:"+c+";overflow: "+(u.scrolling=="auto"?"auto":u.scrolling=="yes"?"scroll":"hidden")+';position:relative;"></div>');
    u.width=F.width();
    u.height=F.height();
    y()
    },y=function(){var a,c;
    Q.hide();
    if(z.is(":visible")&&false===t.onCleanup(E,K,t)){s.event.trigger("fancybox-cancel");
    A=false
    }else{A=true;
    s(D.add(S)).unbind();
    s(window).unbind("resize.fb scroll.fb");
    s(document).unbind("keydown.fb");
    z.is(":visible")&&t.titlePosition!=="outside"&&z.css("height",z.height());
    E=J;
    K=L;
    t=u;
    if(t.overlayShow){S.css({"background-color":t.overlayColor,opacity:t.overlayOpacity,cursor:t.hideOnOverlayClick?"pointer":"auto",height:s(document).height()});
    if(!S.is(":visible")){m&&s("select:not(#fancybox-tmp select)").filter(function(){return this.style.visibility!=="hidden"
    }).css({visibility:"hidden"}).one("fancybox-cleanup",function(){this.style.visibility="inherit"
    });
    S.show()
    }}else{S.hide()
    }B=p();
    O=t.title||"";
    V=0;
    I.empty().removeAttr("style").removeClass();
    if(t.titleShow!==false){if(s.isFunction(t.titleFormat)){a=t.titleFormat(O,E,K,t)
    }else{a=O&&O.length?t.titlePosition=="float"?'<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">'+O+'</td><td id="fancybox-title-float-right"></td></tr></table>':'<div id="fancybox-title-'+t.titlePosition+'">'+O+"</div>":false
    }O=a;
    if(!(!O||O==="")){I.addClass("fancybox-title-"+t.titlePosition).html(O).appendTo("body").show();
    switch(t.titlePosition){case"inside":I.css({width:B.width-t.padding*2,marginLeft:t.padding,marginRight:t.padding});
    V=I.outerHeight(true);
    I.appendTo(b);
    B.height+=V;
    break;
    case"over":I.css({marginLeft:t.padding,width:B.width-t.padding*2,bottom:t.padding}).appendTo(b);
    break;
    case"float":I.css("left",parseInt((I.width()-B.width-40)/2,10)*-1).appendTo(z);
    break;
    default:I.css({width:B.width-t.padding*2,paddingLeft:t.padding,paddingRight:t.padding}).appendTo(z)
    }}}I.hide();
    if(z.is(":visible")){s(d.add(X).add(Y)).hide();
    a=z.position();
    N={top:a.top,left:a.left,width:z.width(),height:z.height()};
    c=N.width==B.width&&N.height==B.height;
    D.fadeTo(t.changeFade,0.3,function(){var g=function(){D.html(F.contents()).fadeTo(t.changeFade,1,G)
    };
    s.event.trigger("fancybox-change");
    D.empty().removeAttr("filter").css({"border-width":t.padding,width:B.width-t.padding*2,height:u.autoDimensions?"auto":B.height-V-t.padding*2});
    if(c){g()
    }else{Z.prop=0;
    s(Z).animate({prop:1},{duration:t.changeSpeed,easing:t.easingChange,step:M,complete:g})
    }})
    }else{z.removeAttr("style");
    D.css("border-width",t.padding);
    if(t.transitionIn=="elastic"){N=W();
    D.html(F.contents());
    z.show();
    if(t.opacity){B.opacity=0
    }Z.prop=0;
    s(Z).animate({prop:1},{duration:t.speedIn,easing:t.easingIn,step:M,complete:G})
    }else{t.titlePosition=="inside"&&V>0&&I.show();
    D.css({width:B.width-t.padding*2,height:u.autoDimensions?"auto":B.height-V-t.padding*2}).html(F.contents());
    z.css(B).fadeIn(t.transitionIn=="none"?0:t.speedIn,G)
    }}}},q=function(){if(t.enableEscapeButton||t.enableKeyboardNav){s(document).bind("keydown.fb",function(a){if(a.keyCode==27&&t.enableEscapeButton){a.preventDefault();
    s.fancybox.close()
    }else{if((a.keyCode==37||a.keyCode==39)&&t.enableKeyboardNav&&a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&a.target.tagName!=="SELECT"){a.preventDefault();
    s.fancybox[a.keyCode==37?"prev":"next"]()
    }}})
    }if(t.showNavArrows){if(t.cyclic&&E.length>1||K!==0){X.show()
    }if(t.cyclic&&E.length>1||K!=E.length-1){Y.show()
    }}else{X.hide();
    Y.hide()
    }},G=function(){if(!s.support.opacity){D.get(0).style.removeAttribute("filter");
    z.get(0).style.removeAttribute("filter")
    }u.autoDimensions&&D.css("height","auto");
    z.css("height","auto");
    O&&O.length&&I.show();
    t.showCloseButton&&d.show();
    q();
    t.hideOnContentClick&&D.bind("click",s.fancybox.close);
    t.hideOnOverlayClick&&S.bind("click",s.fancybox.close);
    s(window).bind("resize.fb",s.fancybox.resize);
    t.centerOnScroll&&s(window).bind("scroll.fb",s.fancybox.center);
    if(t.type=="iframe"){s('<iframe id="fancybox-frame" name="fancybox-frame'+(new Date).getTime()+'" frameborder="0" hspace="0" '+(s.browser.msie?'allowtransparency="true""':"")+' scrolling="'+u.scrolling+'" src="'+t.href+'"></iframe>').appendTo(D)
    }z.show();
    A=false;
    s.fancybox.center();
    t.onComplete(E,K,t);
    var a,c;
    if(E.length-1>K){a=E[K+1].href;
    if(typeof a!=="undefined"&&a.match(i)){c=new Image;
    c.src=a
    }}if(K>0){a=E[K-1].href;
    if(typeof a!=="undefined"&&a.match(i)){c=new Image;
    c.src=a
    }}},M=function(a){var c={width:parseInt(N.width+(B.width-N.width)*a,10),height:parseInt(N.height+(B.height-N.height)*a,10),top:parseInt(N.top+(B.top-N.top)*a,10),left:parseInt(N.left+(B.left-N.left)*a,10)};
    if(typeof B.opacity!=="undefined"){c.opacity=a<0.5?0.5:a
    }z.css(c);
    D.css({width:c.width-t.padding*2,height:c.height-V*a-t.padding*2})
    },T=function(){return[s(window).width()-t.margin*2,s(window).height()-t.margin*2,s(document).scrollLeft()+t.margin,s(document).scrollTop()+t.margin]
    },p=function(){var a=T(),c={},g=t.autoScale,k=t.padding*2;
    c.width=t.width.toString().indexOf("%")>-1?parseInt(a[0]*parseFloat(t.width)/100,10):t.width+k;
    c.height=t.height.toString().indexOf("%")>-1?parseInt(a[1]*parseFloat(t.height)/100,10):t.height+k;
    if(g&&(c.width>a[0]||c.height>a[1])){if(u.type=="image"||u.type=="swf"){g=t.width/t.height;
    if(c.width>a[0]){c.width=a[0];
    c.height=parseInt((c.width-k)/g+k,10)
    }if(c.height>a[1]){c.height=a[1];
    c.width=parseInt((c.height-k)*g+k,10)
    }}else{c.width=Math.min(c.width,a[0]);
    c.height=Math.min(c.height,a[1])
    }}c.top=parseInt(Math.max(a[3]-20,a[3]+(a[1]-c.height-40)*0.5),10);
    c.left=parseInt(Math.max(a[2]-20,a[2]+(a[0]-c.width-40)*0.5),10);
    return c
    },W=function(){var a=u.orig?s(u.orig):false,c={};
    if(a&&a.length){c=a.offset();
    c.top+=parseInt(a.css("paddingTop"),10)||0;
    c.left+=parseInt(a.css("paddingLeft"),10)||0;
    c.top+=parseInt(a.css("border-top-width"),10)||0;
    c.left+=parseInt(a.css("border-left-width"),10)||0;
    c.width=a.width();
    c.height=a.height();
    c={width:c.width+t.padding*2,height:c.height+t.padding*2,top:c.top-t.padding-20,left:c.left-t.padding-20}
    }else{a=T();
    c={width:t.padding*2,height:t.padding*2,top:parseInt(a[3]+a[1]*0.5,10),left:parseInt(a[2]+a[0]*0.5,10)}
    }return c
    },r=function(){if(Q.is(":visible")){s("div",Q).css("top",l*-40+"px");
    l=(l+1)%12
    }else{clearInterval(j)
    }};
    s.fn.fancybox=function(a){if(!s(this).length){return this
    }s(this).data("fancybox",s.extend({},a,s.metadata?s(this).metadata():{})).unbind("click.fb").bind("click.fb",function(c){c.preventDefault();
    if(!A){A=true;
    s(this).blur();
    J=[];
    L=0;
    c=s(this).attr("rel")||"";
    if(!c||c==""||c==="nofollow"){J.push(this)
    }else{J=s("a[rel="+c+"], area[rel="+c+"]");
    L=J.index(this)
    }h()
    }});
    return this
    };
    s.fancybox=function(a,c){var k;
    if(!A){A=true;
    k=typeof c!=="undefined"?c:{};
    J=[];
    L=parseInt(k.index,10)||0;
    if(s.isArray(a)){for(var w=0,g=a.length;
    w<g;
    w++){if(typeof a[w]=="object"){s(a[w]).data("fancybox",s.extend({},k,a[w]))
    }else{a[w]=s({}).data("fancybox",s.extend({content:a[w]},k))
    }}J=jQuery.merge(J,a)
    }else{if(typeof a=="object"){s(a).data("fancybox",s.extend({},k,a))
    }else{a=s({}).data("fancybox",s.extend({content:a},k))
    }J.push(a)
    }if(L>J.length||L<0){L=0
    }h()
    }};
    s.fancybox.showActivity=function(){clearInterval(j);
    Q.show();
    j=setInterval(r,66)
    };
    s.fancybox.hideActivity=function(){Q.hide()
    };
    s.fancybox.next=function(){return s.fancybox.pos(K+1)
    };
    s.fancybox.prev=function(){return s.fancybox.pos(K-1)
    };
    s.fancybox.pos=function(a){if(!A){a=parseInt(a);
    J=E;
    if(a>-1&&a<E.length){L=a;
    h()
    }else{if(t.cyclic&&E.length>1){L=a>=E.length?0:E.length-1;
    h()
    }}}};
    s.fancybox.cancel=function(){if(!A){A=true;
    s.event.trigger("fancybox-cancel");
    n();
    u.onCancel(J,L,u);
    A=false
    }};
    s.fancybox.close=function(){function a(){S.fadeOut("fast");
    I.empty().hide();
    z.hide();
    s.event.trigger("fancybox-cleanup");
    D.empty();
    t.onClosed(E,K,t);
    E=u=[];
    K=L=0;
    t=u={};
    A=false
    }if(!(A||z.is(":hidden"))){A=true;
    if(t&&false===t.onCleanup(E,K,t)){A=false
    }else{n();
    s(d.add(X).add(Y)).hide();
    s(D.add(S)).unbind();
    s(window).unbind("resize.fb scroll.fb");
    s(document).unbind("keydown.fb");
    D.find("iframe").attr("src",m&&/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank");
    t.titlePosition!=="inside"&&I.empty();
    z.stop();
    if(t.transitionOut=="elastic"){N=W();
    var c=z.position();
    B={top:c.top,left:c.left,width:z.width(),height:z.height()};
    if(t.opacity){B.opacity=1
    }I.empty().hide();
    Z.prop=1;
    s(Z).animate({prop:0},{duration:t.speedOut,easing:t.easingOut,step:M,complete:a})
    }else{z.fadeOut(t.transitionOut=="none"?0:t.speedOut,a)
    }}}};
    s.fancybox.resize=function(){S.is(":visible")&&S.css("height",s(document).height());
    s.fancybox.center(true)
    };
    s.fancybox.center=function(a){var c,g;
    if(!A){g=a===true?1:0;
    c=T();
    !g&&(z.width()>c[0]||z.height()>c[1])||z.stop().animate({top:parseInt(Math.max(c[3]-20,c[3]+(c[1]-D.height()-40)*0.5-t.padding)),left:parseInt(Math.max(c[2]-20,c[2]+(c[0]-D.width()-40)*0.5-t.padding))},typeof a=="number"?a:200)
    }};
    s.fancybox.init=function(){if(!s("#fancybox-wrap").length){s("body").append(F=s('<div id="fancybox-tmp"></div>'),Q=s('<div id="fancybox-loading"><div></div></div>'),S=s('<div id="fancybox-overlay"></div>'),z=s('<div id="fancybox-wrap"></div>'));
    b=s('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(z);
    b.append(D=s('<div id="fancybox-content"></div>'),d=s('<a id="fancybox-close"></a>'),I=s('<div id="fancybox-title"></div>'),X=s('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),Y=s('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'));
    d.click(s.fancybox.close);
    Q.click(s.fancybox.cancel);
    X.click(function(a){a.preventDefault();
    s.fancybox.prev()
    });
    Y.click(function(a){a.preventDefault();
    s.fancybox.next()
    });
    s.fn.mousewheel&&z.bind("mousewheel.fb",function(a,c){if(A){a.preventDefault()
    }else{if(s(a.target).get(0).clientHeight==0||s(a.target).get(0).scrollHeight===s(a.target).get(0).clientHeight){a.preventDefault();
    s.fancybox[c>0?"prev":"next"]()
    }}});
    s.support.opacity||z.addClass("fancybox-ie");
    if(m){Q.addClass("fancybox-ie6");
    z.addClass("fancybox-ie6");
    s('<iframe id="fancybox-hide-sel-frame" src="'+(/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank")+'" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(b)
    }}};
    s.fn.fancybox.defaults={padding:10,margin:40,opacity:false,modal:false,cyclic:false,scrolling:"auto",width:560,height:340,autoScale:true,autoDimensions:true,centerOnScroll:false,ajax:{},swf:{wmode:"transparent"},hideOnOverlayClick:true,hideOnContentClick:false,overlayShow:true,overlayOpacity:0.7,overlayColor:"#777",titleShow:true,titlePosition:"float",titleFormat:null,titleFromAlt:false,transitionIn:"fade",transitionOut:"fade",speedIn:300,speedOut:300,changeSpeed:300,changeFade:"fast",easingIn:"swing",easingOut:"swing",showCloseButton:true,showNavArrows:true,enableEscapeButton:true,enableKeyboardNav:true,onStart:function(){},onCancel:function(){},onComplete:function(){},onCleanup:function(){},onClosed:function(){},onError:function(){}};
    s(document).ready(function(){s.fancybox.init()
    })
    })(jQuery);
    function launch_dynamic_video(b){var a=$(".brightcove-container").attr("id");
    customBC.createVideo("592","333","940636285001","AQ~~,AAAA2uzqPsk~,x6biOaTywG-jQsJXXUbfAgrJalJC0RhP",b,a);
    brightcove.createExperiences();
    $("#videoplayer").attr("href","#"+a).trigger("click")
    }function launch_video(b){var a=/videoPlayer=[0-9]*/g;
    document.getElementById("brightcove-video").innerHTML=document.getElementById("brightcove-video").innerHTML.replace(a,"videoPlayer="+b);
    $("#videoplayer").trigger("click")
    }$(document).ready(function(){$("a.iframe-video").each(function(){var b=$(this).attr("data-videoid");
    var a="/etc/designs/brightcove_iframe.html?pk=AQ~~,AAAA2uzqPsk~,x6biOaTywG-jQsJXXUbfAgrJalJC0RhP&vp="+b;
    $(this).attr("href",a)
    }).fancybox({width:480,height:270,hideOnContentClick:false,transitionIn:"linear",transitionOut:"linear",speedIn:400,speedOut:300,overlayShow:true,overlayOpacity:0.9,overlayColor:"#1A3C51",autoDimensions:true,scrolling:"no",padding:0,centerOnScroll:true,titleShow:false,type:"iframe"});
    $("#videoplayer").fancybox({transitionIn:"linear",transitionOut:"linear",speedIn:400,speedOut:300,overlayShow:true,overlayOpacity:0.9,overlayColor:"#1A3C51",autoDimensions:true,scrolling:"no",padding:0,centerOnScroll:true,titleShow:false,onCleanup:function(){if(typeof BCLvideoPlayer!=="undefined"){BCLvideoPlayer.stop()
    }}})
    });
    var fdcom=fdcom||{};
    fdcom.navHeight=80;
    fdcom.animateSpeed=300;
    fdcom.bodyWidth=976;
    fdcom.break1=640;
    fdcom.break2=1016;
    fdcom.touch=false;
    $(function(){if(Modernizr.touch){$("body").addClass("touch");
    fdcom.touch=true
    }fdcom.rightRailMargin();
    fdcom.checkCarouselFade();
    $(".notab").attr("tabindex","-1");
    $("a.inactive").click(function(a){a.preventDefault()
    });
    $("a.inactive").css("cursor","default");
    $(".backstretch").each(function(){$(this).attr("data-image",$(this).css("background-image").replace(/^url|[\(\)\"\']/g,""));
    if($("html").hasClass("lt-ie9")){var a=$(this).data("image");
    if(typeof a!=="undefined"&&a!==""){$(this).backstretch(a,{centeredY:false})
    }}});
    $(window).resize(function(){fdcom.rightRailMargin();
    fdcom.checkCarouselFade()
    });
    $("a.nav-button.search").on("click",function(){$(".search-box").focus()
    })
    });
    fdcom.rightRailMargin=function(){if($("body").hasClass("landing1")){var a=$(".landing1 .connect-scroll").outerHeight()+20;
    $(".landing1 .right-rail").css("margin-top",a+"px")
    }};
    fdcom.checkCarouselFade=function(){if($(window).width()<fdcom.break1){$(".carousel").removeClass("carousel-fade")
    }else{$(".carousel").addClass("carousel-fade")
    }};
    fdcom.getBootstrapEnvironment=function(){var c=["phone","tablet","desktop"];
    var b=$("<div>");
    b.appendTo($("body"));
    for(var a=c.length-1;
    a>=0;
    a--){var d=c[a];
    b.addClass("hidden-"+d);
    if(b.is(":hidden")){b.remove();
    return d
    }}};
    fdcom.getQueryParamMap=function(){var d={};
    var a=location.search.substr(1).split("&");
    for(var c=0;
    c<a.length;
    c++){var e=a[c],g=e.split("=");
    if(g.length>1){var b=g[0],f=decodeURIComponent(g[1].replace(/\+/g," "));
    if(b in d){d[b].push(f)
    }else{d[b]=[f]
    }}}return d
    };
    fdcom.getParmFromHash=function(b,d){var c=new RegExp("#.*[?&]?"+d+"=([^&]+)(&|$)","i");
    var a=b.match(c);
    return(a?a[1]:"")
    };
    fdcom.getParmFromLocation=function(b,e){var a=false;
    var d=new RegExp("[#?].*[?&]?"+e+"=([^&]+)(&|$)","i");
    var c=b.search?b.search.match(d):false;
    if(c){a=c[1]
    }else{c=b.hash?b.hash.match(d):false;
    a=(c?c[1]:false)
    }if(a){a=decodeURIComponent(a.replace(new RegExp("[{}()]","g"),""))
    }return a
    };
    fdcom.populateCookiesFromHash=function(){if(FDUtil.isCookieEnabled("useCookies")){var k=fdcom.getParmFromLocation(window.location,"medium");
    if(k){FDUtil.setCookie("medium",k)
    }var b=fdcom.getParmFromLocation(window.location,"content1");
    if(b){FDUtil.setCookie("content1",b)
    }var d=fdcom.getParmFromLocation(window.location,"campaign");
    if(d){FDUtil.setCookie("campaign",d)
    }var i=fdcom.getParmFromLocation(window.location,"channel");
    if(i){FDUtil.setCookie("channel",i)
    }var j=fdcom.getParmFromLocation(window.location,"creative");
    if(j){FDUtil.setCookie("creative",j)
    }var e=fdcom.getParmFromLocation(window.location,"placement");
    if(e){FDUtil.setCookie("placement",e)
    }var g=fdcom.getParmFromLocation(window.location,"keywords");
    if(g){FDUtil.setCookie("keywords",g)
    }var a=fdcom.getParmFromLocation(window.location,"source");
    if(a){FDUtil.setCookie("source",a)
    }var f=fdcom.getParmFromLocation(window.location,"program");
    if(f){FDUtil.setCookie("program",f)
    }var h=fdcom.getParmFromLocation(window.location,"content");
    if(h){FDUtil.setCookie("content",h)
    }var c=fdcom.getParmFromLocation(window.location,"term");
    if(c){FDUtil.setCookie("term",c)
    }}};
    window.scrollTo(0,1);
    if(typeof String.prototype.startsWith!="function"){String.prototype.startsWith=function(a){return this.indexOf(a)==0
    }
    }if(!Array.prototype.indexOf){Array.prototype.indexOf=function(c,d){for(var b=(d||0),a=this.length;
    b<a;
    b++){if(this[b]===c){return b
    }}return -1
    }
    }Array.prototype.unique=function(){var b=[];
    for(var a=0;
    a<this.length;
    a++){if(b.indexOf(this[a])==-1){b.push(this[a])
    }}return b
    };
    if(typeof CQ!="undefined"){CQ.WCM.on("editablesready",function(){var a=$(".accordion-body:not(.in), .carousel-slideshow .item:not(.active)");
    $.each(a,function(){var b=$(this).attr("data-editrollover");
    if(typeof CQ.WCM.getEditable(b)!="undefined"){CQ.WCM.getEditable(b).hide()
    }})
    })
    }jQuery(function(b){var a=b.fn.show;
    b.fn.show=function(d,c){return b(this).each(function(){var f=b(this),e=function(){if(b.isFunction(c)){c.apply(f)
    }f.trigger("afterShow")
    };
    f.trigger("beforeShow");
    a.apply(f,[d,e])
    })
    }
    });
    $(document).ready(function(){$(".carousel").on("slid",function(){if(typeof brcResizeVideoPlayers!=="undefined"){brcResizeVideoPlayers()
    }});
    if($("html").hasClass("lt-ie9")||fdcom.getBootstrapEnvironment()==="phone"){var a=$("#kenexa-container").data("map-url");
    if(typeof a!=="undefined"){$(".c317-Promo-Type7-JobsByLocation-cq a.btn").attr({href:a,target:"_blank"})
    }}$("input:radio, input:checkbox, select",$(".c464-FilterNav .filter-bar")).uniform()
    });
    $(document).ready(function(){var d=$('a[href^="mailto:"]').attr("href"),b=$('a[href^="tel:"]').attr("href"),e=window.location.hash;
    fdcom.populateCookiesFromHash();
    if(e){fdcom.populateCookiesFromHash();
    $('a[href^="mailto:"]').attr("href",d);
    $('a[href^="tel:"]').attr("href",b)
    }var c=window.location.pathname,a=c.search("en_us");
    if(a==-1&&$(".warning .c501-GenericModal").length>0){$("a:not([data-warning])").click(function(h){var g=$(this).attr("href");
    if(g){var f=g.search("phoenix.zhtml");
    if(f!==-1){h.preventDefault();
    $("#warning_modal").modal("show");
    $("#investor-link").attr("href",g);
    $(".warning_overlay").addClass("active");
    $(".warning_overlay").click(function(){$("#warning_modal").modal("hide");
    $(".warning_overlay").removeClass("active")
    })
    }}})
    }});
    $(document).ready(function(){fdcom.initNav()
    });
    fdcom.initNav=function(){$(".menu-collapse").collapse({toggle:false});
    $(".collapse-control:not(.languageToggleMap)").bind("click",function(c){var a=$(window).width();
    if(a>640||$(this).hasClass("phone")||$(this).hasClass("search")){c.preventDefault();
    fdcom.animateNav($(this),true)
    }else{var b=$(this).data("linkpath");
    if(b!=null){document.location.href=b
    }}});
    $(".search-box").keyup(function(){if($(this).val()===""){$(this).siblings(".search-button").removeClass("active")
    }else{$(this).siblings(".search-button").addClass("active")
    }});
    $("#background_overlay").bind("click",function(a){a.preventDefault();
    fdcom.animateNav($(this),true)
    });
    document.onkeydown=function(a){a=a||window.event;
    if(a.keyCode==27){fdcom.animateNav(a,true)
    }};
    $(".ie .stack .lists ul.cols3").columnize({columns:3});
    $(".ie .stack .lists ul.cols4").columnize({columns:4})
    };
    fdcom.checkNavHeight=function(){var d=$(".nav-button.extras").hasClass("active");
    var e=$(".nav-button.tablet").hasClass("active");
    var a=$(".nav-button.phone").hasClass("active");
    var c=$(".nav-link.link-partners").hasClass("active");
    var b=$(".nav-link.link-about").hasClass("active");
    if(e&&$(window).width()>=fdcom.break2){fdcom.animateNav($(".nav-button.extras"),false);
    $(".nav-button.tablet").removeClass("active");
    $(".nav-button.extras").addClass("active")
    }else{if($(window).width()<=fdcom.break2&&$(window).width()>=fdcom.break1){if(d||a){fdcom.animateNav($(".nav-button.tablet"),false);
    $(".nav-button.tablet").addClass("active");
    $(".nav-button.extras").removeClass("active")
    }else{if(c){fdcom.animateNav($(".nav-link.link-partners"),true);
    fdcom.animateNav($(".nav-button.extras"),false);
    $(".nav-button.tablet").addClass("active")
    }else{if(b){fdcom.animateNav($(".nav-link.link-about"),true);
    fdcom.animateNav($(".nav-button.extras"),false);
    $(".nav-button.tablet").addClass("active")
    }}}}else{if($(window).width()<=fdcom.break1){if(e){fdcom.animateNav($(".nav-button.phone"),false);
    $(".nav-button.tablet, .nav-button.extras").removeClass("active");
    $(".nav-button.phone").addClass("active")
    }}}}};
    fdcom.animateNav=function(d,a){var f=$(d).data("target");
    var e=0;
    var c=0;
    if($(f+" .notab").attr("tabindex")==-1){var b=d.attr("tabindex")
    }else{b=-1
    }$(f+" .notab").attr("tabindex",b);
    if(d.hasClass("languageToggleMap")){c=0
    }else{if($(window).width()<=fdcom.break1&&!d.hasClass("search")){c=$(".menu-fluid-inner").outerHeight()
    }else{$(f).find(".target-height").each(function(){c+=$(this).outerHeight();
    e+=$(this).data("heightoffset")||0
    })
    }}if($(d).hasClass("active")){$(d).removeClass("active");
    $(".menu-background").stop().animate({height:0},fdcom.animateSpeed,"linear")
    }else{$("a.nav-button, a.nav-link").removeClass("active");
    $(d).addClass("active");
    $(".menu-background").stop().animate({height:c},fdcom.animateSpeed,"linear")
    }if($(f).hasClass("in")&&a){$(f).stop().animate({height:0},fdcom.animateSpeed,"linear");
    $(".menu-collapse.in").removeClass("in")
    }else{if($(".menu-collapse").hasClass("in")){$(".menu-collapse.in").stop().animate({height:0},fdcom.animateSpeed,"linear")
    }$(".menu-collapse.in").removeClass("in");
    $(f).addClass("in");
    c+=e;
    $(f).stop().animate({height:c},fdcom.animateSpeed,"linear",function(){$(f).addClass("in");
    $(f).css("height","auto")
    })
    }if($(f).hasClass("in")){$("#background_overlay").fadeIn();
    $("#media-container","#captcha-container").hide()
    }else{$("#background_overlay").fadeOut();
    $("#media-container","#captcha-container").show()
    }};
    $(window).resize(function(){fdcom.checkNavHeight();
    fdcom.sameHeight(".contact-item-title .list-title")
    });
    $(document).ready(function(){$(".collapse-control.languageToggleMap").bind("click",function(a){a.preventDefault();
    fdcom.animateNav($(this),true)
    });
    fdcom.sameHeight(".contact-item-title .list-title")
    });
    fdcom.sameHeight=function(g){var a=0,b=0,f=[],e,d,c=0;
    $(g).each(function(){e=$(this);
    $(e).height("auto");
    c=e.position().top;
    if(b!==c){for(d=0;
    d<f.length;
    d++){f[d].height(a)
    }f.length=0;
    b=c;
    a=e.height();
    f.push(e)
    }else{f.push(e);
    a=(a<e.height())?(e.height()):(a)
    }for(d=0;
    d<f.length;
    d++){f[d].height(a)
    }})
    };
    $(document).ready(function(){fdcom.initCarousels()
    });
    fdcom.initCarousels=function(){if(!$("body").hasClass("cq-wcm-edit")){$(".carousel").each(function(){var d=$(this),a=parseInt(d.data("carousel-interval"),10),c="hover",b=d.data("disable-pause");
    if(isNaN(a)){a=false
    }if(typeof b!=="undefined"&&b){c=false
    }d.data("carousel",null).carousel({interval:a,pause:c})
    })
    }else{$(".carousel").carousel({interval:false})
    }$(".carousel.swipe").swiperight(function(){if(fdcom.touch){$(this).carousel("prev")
    }});
    $(".carousel.swipe").swipeleft(function(){if(fdcom.touch){$(this).carousel("next")
    }});
    fdcom.setCarouselHeight();
    $(".carousel").on("slide",function(b){var a=$(b.relatedTarget).index()+1;
    $(".page",this).html(a);
    var c=$(b.relatedTarget).find(".carousel-header").html();
    $(".feature-title",this).html(c)
    });
    $(".carousel").each(function(){$(".page",this).html("1");
    var a=$(".carousel-inner .item",this).length;
    $(".pages",this).html(a);
    var b=$(".active",this).find(".carousel-header").html();
    $(".feature-title",this).html(b)
    })
    };
    fdcom.setCarouselHeight=function(){$(".carousel").not(".fix-height").each(function(a){if($(this).parents(".c200-PageHeader-Home").length===0){$(".item",this).css("height","auto");
    $(".item",this).each(function(c){var b=Math.max.apply(null,$(this).parent().find(".item").map(function(){return $(this).outerHeight(true)
    }).get());
    $(this).height(b)
    })
    }})
    };
    $(window).resize(function(){fdcom.setCarouselHeight()
    });
    $(document).ready(function(){fdcom.initLocalNav()
    });
    fdcom.initLocalNav=function(){if($(window).width()>640){$(".ie .c061-LocalNav.L1").columnize({columns:2})
    }};
    $(document).ready(function(){fdcom.initBreadcrumb();
    var b=80;
    var a=$(".c441-Connect.visible-phone");
    if($(window).width()<=640){b=function(){var c=80;
    if($(".accordion-toggle",a).hasClass("selected")){c=a.offset().top+a.outerHeight()
    }return c
    }
    }$(".c077-Breadcrumb").affix({offset:{top:b}})
    });
    fdcom.initBreadcrumb=function(){$(".bc-dropdown .current a, .bc-control a").bind("click",function(c){c.preventDefault();
    if(!$(this).hasClass("no-dropdown")){var b=$(this).closest(".bc-dropdown").find(".notab").attr("tabindex");
    if(b==-1){var a=$(this).attr("tabindex")
    }else{a=-1
    }$(this).closest(".bc-dropdown").find(".notab").attr("tabindex",a);
    fdcom.bc_toggle($(this).closest(".bc-dropdown"))
    }})
    };
    fdcom.bc_toggle=function(b){var c=b.outerHeight();
    var d=b.find(".current").outerHeight();
    if(c==d){b.addClass("active");
    b.find(".current, .bc-control a").addClass("current");
    var a=b.outerHeight();
    $(".bc-dropdown").animate({top:a},200);
    $(".bc-control").animate({top:-1*a},200);
    b.find("div").animate({height:a},200)
    }else{b.find(".bc-control a").removeClass("current");
    $(".bc-dropdown").animate({top:0},200);
    $(".bc-control").animate({top:0},200,function(){b.removeClass("current")
    });
    b.find("div").animate({height:0},200,function(){b.removeClass("active")
    })
    }};
    fdcom.bc_respond=function(){var a=$(".bc-main").outerWidth();
    if(a<fdcom.bodyWidth){var g=$(".bc-dropdown").width();
    var b=107;
    var e=Math.max.apply(null,$(".bc-dropdown span").map(function(){return $(this).outerWidth(true)
    }).get());
    var d=e+b;
    var c=0;
    if(g<=d){$(".bc-dropdown").css("visibility","hidden");
    c=a-d;
    var f=(a-g);
    $(".bc-main li.percent").each(function(){var j=$(this).width();
    var i=j/a;
    var h=((i*c)/f)*100;
    $(this).width(h+"%")
    });
    $(".bc-dropdown").css("width","auto");
    $(".bc-dropdown").css("visibility","visible")
    }}else{$(".bc-main li.percent").each(function(){$(this).css("width","auto")
    })
    }};
    fdcom.bc_respond();
    $(window).resize(function(){fdcom.bc_respond()
    });
    $(document).ready(function(){fdcom.initHomeHeader()
    });
    fdcom.initHomeHeader=function(){fdcom.resizeHeader()
    };
    fdcom.resizeHeader=function(){$(".c200-PageHeader-Home .item .carousel-body").each(function(){$(this).css("height","auto")
    });
    var a=Math.max.apply(null,$(".c200-PageHeader-Home .item .carousel-body").map(function(){return $(this).height()
    }).get());
    $(".c200-PageHeader-Home .item .carousel-body").each(function(){$(this).css("height",a)
    })
    };
    $(window).resize(function(){fdcom.resizeHeader()
    });
    var fdcom=fdcom||{};
    $(document).ready(function(){fdcom.initAccordions();
    var a=fdcom.getBootstrapEnvironment();
    if(a!=="phone"){var b=$(".accordion .accordion-toggle.mobile-only");
    b.each(function(){var c=$(this);
    c.data("toggle","collapse");
    c.removeAttr("data-toggle");
    c.click(function(d){d.preventDefault()
    })
    })
    }});
    fdcom.initAccordions=function(){$(".accordion .accordion-toggle").bind("click",function(){if(!$(this).hasClass("selected")){var a=$(this).closest(".accordion").position().top-100;
    if(a>0){$.scrollTo(a,400)
    }}})
    };
    fdcom.initForms=function(){$("input:radio, select, input:checkbox",$(".c401-Forms")).uniform();
    $(".c401-Forms button.next-section").bind("click",function(a){a.preventDefault();
    $($(this).data("this")).collapse("toggle");
    $($(this).data("next")).collapse("toggle")
    })
    };
    fdcom.rightScroll=function(){var a=$(window).scrollTop();
    var b=$(window).height();
    var d=$(".body-wrap .body-start");
    var e=d.position();
    if(e){posTop=e.top
    }else{posTop=0
    }var c=445;
    if((a+c)>=(posTop)&&$(window).width()>640){$(".connect-scroll .c441-Connect").css({top:posTop,position:"absolute"});
    $(".connect-scroll").removeClass("unstick").addClass("stick")
    }else{$(".connect-scroll .c441-Connect").css({top:c,position:"fixed"});
    $(".connect-scroll").removeClass("stick").addClass("unstick")
    }};
    $(window).scroll(function(){fdcom.rightScroll()
    });
    $(document).ready(function(){fdcom.initTabs();
    fdcom.setButtonheight()
    });
    $(window).resize(function(){fdcom.setButtonheight()
    });
    fdcom.initTabs=function(){$(".c170-Tab .collapse").collapse();
    $(".c170-Tabs").each(function(){fdcom.setTabsHeight($(".accordion-toggle.selected",this))
    });
    $(".c170-Tabs .accordion-toggle").bind("click",function(a){fdcom.setTabsHeight($(this))
    })
    };
    fdcom.setTabsHeight=function(a){var b=a.parent().siblings(".accordion-body").height()+a.parent().height();
    if($(window).width()>640){a.closest(".c170-Tabs").height(b)
    }};
    fdcom.setButtonheight=function(){if($(window).width()>640){$(".c170-Tabs").each(function(a){$(".c170-Tabs .accordion-heading").each(function(c){var b=Math.max.apply(null,$(this).closest(".c170-Tabs").find(".accordion-heading").map(function(){return $(this).outerHeight(true)
    }).get());
    $(this).height(b);
    var d=parseInt($(this).children(".accordion-toggle").css("padding-top"));
    $(this).children(".accordion-toggle").height(b-(d*2));
    $(this).siblings(".accordion-body").css("top",(b-2)+"px")
    })
    })
    }else{$(".c170-Tabs .accordion-heading").removeAttr("style");
    $(".c170-Tabs .accordion-toggle").removeAttr("style");
    $(".c170-Tabs .accordion-body").removeAttr("style")
    }};
    $(document).ready(function(){$.each($(".multiple-filter"),function(e){var g=$(this),d=true,f=false,h=true;
    if(g.hasClass("single")){d=false;
    f=1;
    h="&nbsp;"
    }g.multiselect({noneSelectedText:g.attr("data-noneSelectedText"),selectedText:g.attr("data-selectedText"),selectedList:f,multiple:d,header:h,checkAll:function(i){c($('input[name^="multiselect_'+this.id+'"]').parent());
    b(this,".functionsSecondList")
    },uncheckAll:function(i){a($('input[name^="multiselect_'+this.id+'"]').parent());
    b(this,".functionsSecondList")
    },create:function(){$.each($(".ui-multiselect-menu").find("input").filter(":checked"),function(i,j){$(j).closest("label").addClass("checked")
    })
    },click:function(i,j){if(j.checked){$(i.originalEvent.target).closest("label").addClass("checked")
    }else{$(i.originalEvent.target).closest("label").removeClass("checked")
    }b(this,".functionsSecondList")
    }})
    });
    function b(f,d){var g=$(f).multiselect("getChecked");
    var e=$(d).empty();
    $(g).each(function(j,l){var h=$(document.createElement("span")).text($(l).val()),k=$(document.createElement("li")).append(h).appendTo(e)
    })
    }function c(d){$(d).addClass("checked")
    }function a(d){$(d).removeClass("checked")
    }$(".ui-helper-clearfix ul").addClass("clearfix")
    });
    $(window).load(function(){$(".unifyHeightsGroup").each(function(){var a=0;
    $(".unifyHeights",this).each(function(){var b=$(this).outerHeight();
    if(b>a){a=b
    }});
    $(".unifyHeights",this).css("min-height",a)
    })
    });
    window.matchMedia=window.matchMedia||(function(e,f){var c,a=e.documentElement,b=a.firstElementChild||a.firstChild,d=e.createElement("body"),g=e.createElement("div");
    g.id="mq-test-1";
    g.style.cssText="position:absolute;top:-100em";
    d.style.background="none";
    d.appendChild(g);
    return function(h){g.innerHTML='&shy;<style media="'+h+'"> #mq-test-1 { width: 42px; }</style>';
    a.insertBefore(d,b);
    c=g.offsetWidth===42;
    a.removeChild(d);
    return{matches:c,media:h}
    }
    }(document));
    window.carousel_picturefill=function(a){var b;
    if(a===b){a=$("body")
    }$("div.c000-Homev2-FeatureCarousel .item",a).each(function(){var d=this;
    var e=[];
    $("div[data-media]",d).each(function(){var f=$(this).attr("data-media");
    if(!f||(window.matchMedia&&window.matchMedia(f).matches)){e.push(this)
    }});
    var c=$(".slideshow-img",d).first();
    if(e.length){if(c.size()>0){c.css("background-image","url('"+e.pop().getAttribute("data-src")+"')")
    }}})
    };
    $(function(){window.carousel_picturefill()
    });
    $(window).on("debouncedresize",function(){window.carousel_picturefill()
    });
    $(window).on("resize",function(){window.carousel_picturefill()
    });
    var fdcom=fdcom||{};
    $(document).ready(function(){$("input:radio, input:checkbox",$(".c401-Forms-Careers")).uniform();
    $(".advanced-search-toggle").click(function(t){t.preventDefault();
    var s=$(this),r=s.closest("form"),q=r.find(".advanced-search-target"),p=q.find("div.selector");
    if(s.hasClass("close-icon")){q.height(0);
    s.removeClass("close-icon")
    }else{var o=$(".advanced-job-search-fieldset-wrap").outerHeight();
    q.height(o);
    s.addClass("close-icon")
    }});
    $(".multi-select-secondary-toggle").click(function(p){var o=$(".multi-select-secondary-menu");
    if(o.hasClass("hidden")){o.removeClass("hidden");
    $(this).addClass("close-icon")
    }else{o.addClass("hidden");
    $(this).removeClass("close-icon")
    }});
    function c(q,o){var r=$(q).multiselect("getChecked");
    var p=$(o).empty();
    $(r).each(function(t,v){var s=$(document.createElement("span")).text($(v).val());
    var u=$(document.createElement("li")).append(s).appendTo(p)
    })
    }function n(o){$(o).addClass("checked")
    }function i(o){$(o).removeClass("checked")
    }function a(){var q=$("#jobCategory").multiselect("getChecked");
    var t=$("#location").multiselect("getChecked");
    var p=$("#careers-state").multiselect("getChecked","disabled");
    var s=$("#careers-city").multiselect("getChecked","disabled");
    var o=$(".multi-select-secondary-toggle");
    var r=$(".multi-select-secondary-menu");
    if((q.length>1)||(t.length>1)||(p.length>1)||(s.length>1)){o.removeClass("hidden")
    }else{if((q.length<=1)&&(t.length<=1)&&(p.length<=1)&&(s.length<=1)){o.addClass("hidden");
    r.addClass("hidden")
    }}}$(".job-posting-date-item div.radio").click(function(){var s=$(this),t=$("div.radio span"),p=s.theSpan,r=s.closest("div.job-posting-date-item"),o=s.closest(".job-posting-dates"),q=o.find("div.selector"),u=o.find("select.text");
    if(r.hasClass("jobs-updated-after-range")){q.removeClass("disabled");
    u.removeAttr("disabled")
    }else{q.addClass("disabled");
    u.attr("disabled","disabled")
    }});
    $(".ui-helper-clearfix ul").addClass("clearfix");
    $("#update_button").bind("click",function(){});
    var l=$("#kenexa-job-search-form");
    var h=window.kenexaJobLocations||{};
    if(l.length>0){var b=fdcom.getQueryParamMap();
    var k=b.country||[],j=b.state||[],f=b.city||[],m=$("#country",l),d=$("#state",l),e=$("#city",l);
    m.change(function(){d.html("").val([]).multiselect("disable");
    e.html("").val([]).multiselect("disable");
    var p=m.val();
    if(p!==null){var o=h[p]||{};
    $.each(o,function(s,r){var q={value:s,text:s};
    if(s===""){q.text=p+" - Misc."
    }if($.inArray(s,j)>-1){q.selected="selected"
    }d.append($("<option/>",q))
    });
    d.trigger("change").multiselect("refresh");
    d.multiselect("widget").find(":checkbox:checked").each(function(){$(this).parent("label").addClass("checked")
    });
    if(!$.isEmptyObject(o)){d.multiselect("enable")
    }}j=[]
    });
    d.change(function(){e.multiselect("disable");
    var r=m.val(),o=d.val(),q=[];
    if(o!==null){$.each(o,function(s,t){q=q.concat(h[r][t])
    })
    }q=q.unique().sort();
    var p=e.val()||[];
    p=p.concat(f);
    e.html("");
    $.each(q,function(s,v){var u=v,t={value:v,text:u};
    if($.inArray(v,p)>-1){t.selected="selected"
    }e.append($("<option/>",t))
    });
    e.multiselect("refresh");
    e.multiselect("widget").find(":checkbox:checked").each(function(){$(this).parent("label").addClass("checked")
    });
    if(q.length>0){e.multiselect("enable")
    }f=[]
    });
    e.change(function(){});
    var g=function(o){if(o){console.log(o)
    }console.log(m.val());
    console.log(d.val());
    console.log(e.val());
    console.log("------")
    };
    $.each(h,function(q,p){var o={value:q,text:q};
    if($.inArray(q,k)>-1){o.selected="selected"
    }m.append($("<option/>",o))
    });
    m.trigger("change").multiselect("refresh")
    }});
    var fdcom=fdcom||{};
    function setBannerCookie(c){var a="useCookies";
    var d=new Date();
    d.setDate(d.getDate()+365);
    var b=escape(c)+"; expires="+d.toUTCString()+"; path=/";
    document.cookie=a+"="+b;
    if($("#coockiebanner-reminder").length){switchBannerCookies()
    }if(c=="0"){cleanAllCookies("useCookies")
    }}function cleanAllCookies(c){var d=document.cookie.split(";");
    for(var b=0;
    b<d.length;
    b++){var a=$.trim(d[b].split("=")[0]);
    if(c!=a){FDUtil.eraseCookie(a)
    }}}function switchBannerCookies(){var a="You enabled cookies, which make your experience better. To turn them off, see our ";
    var b="You disabled cookies, which are required for some pages. To turn them on, see our ";
    $("#coockiebanner").hide();
    $("#coockiebanner-reminder").hide();
    $("#coockiebanner-reminder-div").hide();
    if(FDUtil.isCookieEnabled("useCookies")){$("#coockiebanner-reminder").html(a+$("#coockiebanner-reminder").html().replace(b,""));
    $("#coockiebanner-reminder").show();
    $("#coockiebanner-reminder-div").show()
    }else{$("#coockiebanner-reminder").html(b+$("#coockiebanner-reminder").html().replace(a,""));
    $("#coockiebanner-reminder").show();
    $("#coockiebanner-reminder-div").show()
    }}function isCookieEnabled(b){var f=false;
    var e=b+"=",a=document.cookie.split(";");
    for(var d=0;
    d<a.length;
    d++){var g=a[d];
    while(g.charAt(0)==" "){g=g.substring(1,g.length)
    }if(g.indexOf(e)==0){f=(g.substring(e.length,g.length)=="1")
    }}return f
    }function setCookie(a,c){var d=new Date();
    d.setDate(d.getDate()+365);
    var b=escape(c)+"; expires="+d.toUTCString()+"; path=/";
    document.cookie=a+"="+b
    }$(document).ready(function(){var h=$(".cookiebanner-warning"),i=$(".alert-frame.cookiebanner-q"),g=$(".alert-frame.cookiebanner-enabled"),f=$(".alert-frame.cookiebanner-disabled"),k=$(".cookiebanner-q a.alert-button"),d=FDUtil.readCookie("useCookies"),a=fdcom.getBootstrapEnvironment(),l=(a==="phone")?200:100;
    function e(m){if($(".no-opacity").length){m.show()
    }else{m.fadeIn()
    }}function c(m){if($(".no-opacity").length){m.hide()
    }else{m.fadeOut()
    }}function j(){h.animate({height:"0"},400)
    }function b(){if(d==null){e(i.delay(500));
    k.on("click",function(m){setCookie("useCookies","1");
    i.delay(75).slideUp(400);
    m.preventDefault()
    });
    setCookie("useCookies","1")
    }else{if(d=="0"){e(f.delay(500))
    }}}if(h.length>0){b()
    }});
    function detectmob(){if(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)){return true
    }else{return false
    }}if(detectmob()){$(".c152-ListsLink").each(function(){var a=$(this);
    $(".list-group-download",a).each(function(){var c=$("a",this).attr("href");
    var e="\\.(exe|zip|swf)$";
    var d=new RegExp(e);
    if(d.test(c)){$(this).hide().addClass("hideMobile")
    }else{$(this).addClass("showMobile")
    }var b=$(".list-group-download.showMobile",a).size();
    if(b<1){a.hide()
    }})
    });
    $(".c151-ListsLink").each(function(){var a=$(this);
    $(".list-group",a).each(function(){var c=$("a",this).attr("href");
    var e="\\.(exe|zip|swf)$";
    var d=new RegExp(e);
    if(d.test(c)){$(this).hide().addClass("hideMobile")
    }else{$(this).addClass("showMobile")
    }var b=$(".list-group.showMobile",a).size();
    if(b<1){a.hide()
    }})
    })
    }
    /*!
     * VERSION: beta 1.9.7
     * DATE: 2013-05-16
     * UPDATES AND DOCS AT: http://www.greensock.com
     * 
     * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
     *
     * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
     * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     * 
     * @author: Jack Doyle, jack@greensock.com
     **/
    (window._gsQueue||(window._gsQueue=[])).push(function(){window._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(q,k,g){var u=[].slice,b=function(a,i,h){g.call(this,a,i,h),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0
    },d=function(a){return a.jquery||a.length&&a[0]&&a[0].nodeType&&a[0].style
    },m=b.prototype=g.to({},0.1,{}),c=[];
    b.version="1.9.7",m.constructor=b,m.kill()._gc=!1,b.killTweensOf=b.killDelayedCallsTo=g.killTweensOf,b.getTweensOf=g.getTweensOf,b.ticker=g.ticker,m.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),g.prototype.invalidate.call(this)
    },m.updateTo=function(l,y){var w,x=this.ratio;
    y&&this.timeline&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));
    for(w in l){this.vars[w]=l[w]
    }if(this._initted){if(y){this._initted=!1
    }else{if(this._notifyPluginsOfEnabled&&this._firstPT&&g._onPluginEvent("_onDisable",this),this._time/this._duration>0.998){var A=this._time;
    this.render(0,!0,!1),this._initted=!1,this.render(A,!0,!1)
    }else{if(this._time>0){this._initted=!1,this._init();
    for(var i,z=1/(1-x),v=this._firstPT;
    v;
    ){i=v.s+v.c,v.c*=z,v.s=i-v.c,v=v._next
    }}}}}return this
    },m.render=function(G,B,y){var H,o,w,D,z,x,E,F=this._dirty?this.totalDuration():this._totalDuration,v=this._time,A=this._totalTime,C=this._cycle;
    if(G>=F?(this._totalTime=F,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=this._duration,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(H=!0,o="onComplete"),0===this._duration&&((0===G||0>this._rawPrevTime)&&this._rawPrevTime!==G&&(y=!0,this._rawPrevTime>0&&(o="onReverseComplete",B&&(G=-1))),this._rawPrevTime=G)):1e-7>G?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==A||0===this._duration&&this._rawPrevTime>0)&&(o="onReverseComplete",H=this._reversed),0>G?(this._active=!1,0===this._duration&&(this._rawPrevTime>=0&&(y=!0),this._rawPrevTime=G)):this._initted||(y=!0)):(this._totalTime=this._time=G,0!==this._repeat&&(D=this._duration+this._repeatDelay,this._cycle=this._totalTime/D>>0,0!==this._cycle&&this._cycle===this._totalTime/D&&this._cycle--,this._time=this._totalTime-this._cycle*D,this._yoyo&&0!==(1&this._cycle)&&(this._time=this._duration-this._time),this._time>this._duration?this._time=this._duration:0>this._time&&(this._time=0)),this._easeType?(z=this._time/this._duration,x=this._easeType,E=this._easePower,(1===x||3===x&&z>=0.5)&&(z=1-z),3===x&&(z*=2),1===E?z*=z:2===E?z*=z*z:3===E?z*=z*z*z:4===E&&(z*=z*z*z*z),this.ratio=1===x?1-z:2===x?z:0.5>this._time/this._duration?z/2:1-z/2):this.ratio=this._ease.getRatio(this._time/this._duration)),v===this._time&&!y){return A!==this._totalTime&&this._onUpdate&&(B||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||c)),void 0
    }if(!this._initted){if(this._init(),!this._initted){return
    }this._time&&!H?this.ratio=this._ease.getRatio(this._time/this._duration):H&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))
    }for(this._active||this._paused||(this._active=!0),0===A&&(this._startAt&&(G>=0?this._startAt.render(G,B,y):o||(o="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===this._duration)&&(B||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||c))),w=this._firstPT;
    w;
    ){w.f?w.t[w.p](w.c*this.ratio+w.s):w.t[w.p]=w.c*this.ratio+w.s,w=w._next
    }this._onUpdate&&(0>G&&this._startAt&&this._startAt.render(G,B,y),B||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||c)),this._cycle!==C&&(B||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||c)),o&&(this._gc||(0>G&&this._startAt&&!this._onUpdate&&this._startAt.render(G,B,y),H&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!B&&this.vars[o]&&this.vars[o].apply(this.vars[o+"Scope"]||this,this.vars[o+"Params"]||c)))
    },b.to=function(h,l,a){return new b(h,l,a)
    },b.from=function(h,l,a){return a.runBackwards=!0,a.immediateRender=0!=a.immediateRender,new b(h,l,a)
    },b.fromTo=function(h,n,a,l){return l.startAt=a,l.immediateRender=0!=l.immediateRender&&0!=a.immediateRender,new b(h,n,l)
    },b.staggerTo=b.allTo=function(E,x,A,r,o,C,D){r=r||0;
    var i,w,z,n,y=A.delay||0,s=[],B=function(){A.onComplete&&A.onComplete.apply(A.onCompleteScope||this,A.onCompleteParams||c),o.apply(D||this,C||c)
    };
    for(E instanceof Array||("string"==typeof E&&(E=g.selector(E)||E),d(E)&&(E=u.call(E,0))),i=E.length,z=0;
    i>z;
    z++){w={};
    for(n in A){w[n]=A[n]
    }w.delay=y,z===i-1&&o&&(w.onComplete=B),s[z]=new b(E[z],x,w),y+=r
    }return s
    },b.staggerFrom=b.allFrom=function(r,w,l,v,y,h,x){return l.runBackwards=!0,l.immediateRender=0!=l.immediateRender,b.staggerTo(r,w,l,v,y,h,x)
    },b.staggerFromTo=b.allFromTo=function(v,y,r,x,A,l,z,w){return x.startAt=r,x.immediateRender=0!=x.immediateRender&&0!=r.immediateRender,b.staggerTo(v,y,x,A,l,z,w)
    },b.delayedCall=function(h,o,a,l,r){return new b(o,0,{delay:h,onComplete:o,onCompleteParams:a,onCompleteScope:l,onReverseComplete:o,onReverseCompleteParams:a,onReverseCompleteScope:l,immediateRender:!1,useFrames:r,overwrite:0})
    },b.set=function(a,h){return new b(a,0,h)
    },b.isTweening=function(a){for(var l,h=g.getTweensOf(a),i=h.length;
    --i>-1;
    ){if(l=h[i],l._active||l._startTime===l._timeline._time&&l._timeline._active){return !0
    }}return !1
    };
    var j=function(a,l){for(var h=[],i=0,o=a._first;
    o;
    ){o instanceof g?h[i++]=o:(l&&(h[i++]=o),h=h.concat(j(o,l)),i=h.length),o=o._next
    }return h
    },f=b.getAllTweens=function(a){return j(q._rootTimeline,a).concat(j(q._rootFramesTimeline,a))
    };
    b.killAll=function(B,w,C,e){null==w&&(w=!0),null==C&&(C=!0);
    var v,y,l,x=f(0!=e),z=x.length,A=w&&C&&e;
    for(l=0;
    z>l;
    l++){y=x[l],(A||y instanceof k||(v=y.target===y.vars.onComplete)&&C||w&&!v)&&(B?y.totalTime(y.totalDuration()):y._enabled(!1,!1))
    }},b.killChildTweensOf=function(v,x){if(null!=v){var n,y,w,i,s,r=g._tweenLookup;
    if("string"==typeof v&&(v=g.selector(v)||v),d(v)&&(v=u(v,0)),v instanceof Array){for(i=v.length;
    --i>-1;
    ){b.killChildTweensOf(v[i],x)
    }}else{n=[];
    for(w in r){for(y=r[w].target.parentNode;
    y;
    ){y===v&&(n=n.concat(r[w].tweens)),y=y.parentNode
    }}for(s=n.length,i=0;
    s>i;
    i++){x&&n[i].totalTime(n[i].totalDuration()),n[i]._enabled(!1,!1)
    }}}};
    var p=function(A,w,B,e){void 0===w&&(w=!0),void 0===B&&(B=!0);
    for(var v,y,l=f(e),x=w&&B&&e,z=l.length;
    --z>-1;
    ){y=l[z],(x||y instanceof k||(v=y.target===y.vars.onComplete)&&B||w&&!v)&&y.paused(A)
    }};
    return b.pauseAll=function(h,l,a){p(!0,h,l,a)
    },b.resumeAll=function(h,l,a){p(!1,h,l,a)
    },m.progress=function(a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()
    },m.totalProgress=function(a){return arguments.length?this.totalTime(this.totalDuration()*a,!1):this._totalTime/this.totalDuration()
    },m.time=function(a,h){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,h)):this._time
    },m.duration=function(a){return arguments.length?q.prototype.duration.call(this,a):this._duration
    },m.totalDuration=function(a){return arguments.length?-1===this._repeat?this:this.duration((a-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)
    },m.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat
    },m.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay
    },m.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo
    },b
    },!0),window._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(l,j,f){var m=function(o){j.call(this,o),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;
    for(var h,p,q=this.vars,e=b.length;
    --e>-1;
    ){if(p=q[b[e]]){for(h=p.length;
    --h>-1;
    ){"{self}"===p[h]&&(p=q[b[e]]=p.concat(),p[h]=this)
    }}}q.tweens instanceof Array&&this.add(q.tweens,0,q.align,q.stagger)
    },b=["onStartParams","onUpdateParams","onCompleteParams","onReverseCompleteParams","onRepeatParams"],d=[],k=function(h){var n,a={};
    for(n in h){a[n]=h[n]
    }return a
    },c=d.slice,g=m.prototype=new j;
    return m.version="1.9.7",g.constructor=m,g.kill()._gc=!1,g.to=function(a,n,h,i){return n?this.add(new f(a,n,h),i):this.set(a,h,i)
    },g.from=function(a,n,h,i){return this.add(f.from(a,n,h),i)
    },g.fromTo=function(a,o,h,i,p){return o?this.add(f.fromTo(a,o,h,i),p):this.set(a,i,p)
    },g.staggerTo=function(z,w,a,o,s,q,x,y){var i,v=new m({onComplete:q,onCompleteParams:x,onCompleteScope:y});
    for("string"==typeof z&&(z=f.selector(z)||z),!(z instanceof Array)&&z.length&&z[0]&&z[0].nodeType&&z[0].style&&(z=c.call(z,0)),o=o||0,i=0;
    z.length>i;
    i++){a.startAt&&(a.startAt=k(a.startAt)),v.to(z[i],w,k(a),i*o)
    }return this.add(v,s)
    },g.staggerFrom=function(q,w,p,u,v,y,h,x){return p.immediateRender=0!=p.immediateRender,p.runBackwards=!0,this.staggerTo(q,w,p,u,v,y,h,x)
    },g.staggerFromTo=function(z,x,v,A,p,u,y,q,w){return A.startAt=v,A.immediateRender=0!=A.immediateRender&&0!=v.immediateRender,this.staggerTo(z,x,A,p,u,y,q,w)
    },g.call=function(a,n,h,i){return this.add(f.delayedCall(0,a,n,h),i)
    },g.set=function(a,i,h){return h=this._parseTimeOrLabel(h,0,!0),null==i.immediateRender&&(i.immediateRender=h===this._time&&!this._paused),this.add(new f(a,0,i),h)
    },m.exportRoot=function(i,q){i=i||{},null==i.smoothChildTiming&&(i.smoothChildTiming=!0);
    var p,u,h=new m(i),s=h._timeline;
    for(null==q&&(q=!0),s._remove(h,!0),h._startTime=0,h._rawPrevTime=h._time=h._totalTime=s._time,p=s._first;
    p;
    ){u=p._next,q&&p instanceof f&&p.target===p.vars.onComplete||h.add(p,p._startTime-p._delay),p=u
    }return s.add(h,0),h
    },g.add=function(e,s,w,q){var v,t,x,y,i;
    if("number"!=typeof s&&(s=this._parseTimeOrLabel(s,0,!0,e)),!(e instanceof l)){if(e instanceof Array){for(w=w||"normal",q=q||0,v=s,t=e.length,x=0;
    t>x;
    x++){(y=e[x]) instanceof Array&&(y=new m({tweens:y})),this.add(y,v),"string"!=typeof y&&"function"!=typeof y&&("sequence"===w?v=y._startTime+y.totalDuration()/y._timeScale:"start"===w&&(y._startTime-=y.delay())),v+=q
    }return this._uncache(!0)
    }if("string"==typeof e){return this.addLabel(e,s)
    }if("function"!=typeof e){throw"Cannot add "+e+" into the timeline; it is neither a tween, timeline, function, nor a string."
    }e=f.delayedCall(0,e)
    }if(j.prototype.add.call(this,e,s),this._gc&&!this._paused&&this._time===this._duration&&this._time<this.duration()){for(i=this;
    i._gc&&i._timeline;
    ){i._timeline.smoothChildTiming?i.totalTime(i._totalTime,!0):i._enabled(!0,!1),i=i._timeline
    }}return this
    },g.remove=function(h){if(h instanceof l){return this._remove(h,!1)
    }if(h instanceof Array){for(var a=h.length;
    --a>-1;
    ){this.remove(h[a])
    }return this
    }return"string"==typeof h?this.removeLabel(h):this.kill(null,h)
    },g.append=function(a,h){return this.add(a,this._parseTimeOrLabel(null,h,!0,a))
    },g.insert=g.insertMultiple=function(h,o,a,n){return this.add(h,o||0,a,n)
    },g.appendMultiple=function(h,o,a,n){return this.add(h,this._parseTimeOrLabel(null,o,!0,h),a,n)
    },g.addLabel=function(a,h){return this._labels[a]=this._parseTimeOrLabel(h),this
    },g.removeLabel=function(a){return delete this._labels[a],this
    },g.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1
    },g._parseTimeOrLabel=function(p,a,h,o){var q;
    if(o instanceof l&&o.timeline===this){this.remove(o)
    }else{if(o instanceof Array){for(q=o.length;
    --q>-1;
    ){o[q] instanceof l&&o[q].timeline===this&&this.remove(o[q])
    }}}if("string"==typeof a){return this._parseTimeOrLabel(a,h&&"number"==typeof p&&null==this._labels[a]?p-this.duration():0,h)
    }if(a=a||0,"string"!=typeof p||!isNaN(p)&&null==this._labels[p]){null==p&&(p=this.duration())
    }else{if(q=p.indexOf("="),-1===q){return null==this._labels[p]?h?this._labels[p]=this.duration()+a:a:this._labels[p]+a
    }a=parseInt(p.charAt(q-1)+"1",10)*Number(p.substr(q+1)),p=q>1?this._parseTimeOrLabel(p.substr(0,q-1),0,h):this.duration()
    }return Number(p)+a
    },g.seek=function(a,h){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),h!==!1)
    },g.stop=function(){return this.paused(!0)
    },g.gotoAndPlay=function(a,h){return this.play(a,h)
    },g.gotoAndStop=function(a,h){return this.pause(a,h)
    },g.render=function(E,A,x){this._gc&&this._enabled(!0,!1),this._active=!this._paused;
    var F,n,B,v,y,w=this._dirty?this.totalDuration():this._totalDuration,C=this._time,D=this._startTime,q=this._timeScale,z=this._paused;
    if(E>=w?(this._totalTime=this._time=w,this._reversed||this._hasPausedChild()||(n=!0,v="onComplete",0===this._duration&&(0===E||0>this._rawPrevTime)&&this._rawPrevTime!==E&&this._first&&(y=!0,this._rawPrevTime>0&&(v="onReverseComplete"))),this._rawPrevTime=E,E=w+0.000001):1e-7>E?(this._totalTime=this._time=0,(0!==C||0===this._duration&&this._rawPrevTime>0)&&(v="onReverseComplete",n=this._reversed),0>E?(this._active=!1,0===this._duration&&this._rawPrevTime>=0&&this._first&&(y=!0)):this._initted||(y=!0),this._rawPrevTime=E,E=0):this._totalTime=this._time=this._rawPrevTime=E,this._time!==C&&this._first||x||y){if(this._initted||(this._initted=!0),0===C&&this.vars.onStart&&0!==this._time&&(A||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||d)),this._time>=C){for(F=this._first;
    F&&(B=F._next,!this._paused||z);
    ){(F._active||F._startTime<=this._time&&!F._paused&&!F._gc)&&(F._reversed?F.render((F._dirty?F.totalDuration():F._totalDuration)-(E-F._startTime)*F._timeScale,A,x):F.render((E-F._startTime)*F._timeScale,A,x)),F=B
    }}else{for(F=this._last;
    F&&(B=F._prev,!this._paused||z);
    ){(F._active||C>=F._startTime&&!F._paused&&!F._gc)&&(F._reversed?F.render((F._dirty?F.totalDuration():F._totalDuration)-(E-F._startTime)*F._timeScale,A,x):F.render((E-F._startTime)*F._timeScale,A,x)),F=B
    }}this._onUpdate&&(A||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||d)),v&&(this._gc||(D===this._startTime||q!==this._timeScale)&&(0===this._time||w>=this.totalDuration())&&(n&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!A&&this.vars[v]&&this.vars[v].apply(this.vars[v+"Scope"]||this,this.vars[v+"Params"]||d)))
    }},g._hasPausedChild=function(){for(var a=this._first;
    a;
    ){if(a._paused||a instanceof m&&a._hasPausedChild()){return !0
    }a=a._next
    }return !1
    },g.getChildren=function(i,u,p,q){q=q||-9999999999;
    for(var w=[],h=this._first,v=0;
    h;
    ){q>h._startTime||(h instanceof f?u!==!1&&(w[v++]=h):(p!==!1&&(w[v++]=h),i!==!1&&(w=w.concat(h.getChildren(!0,u,p)),v=w.length))),h=h._next
    }return w
    },g.getTweensOf=function(i,q){for(var o=f.getTweensOf(i),p=o.length,u=[],h=0;
    --p>-1;
    ){(o[p].timeline===this||q&&this._contains(o[p]))&&(u[h++]=o[p])
    }return u
    },g._contains=function(a){for(var h=a.timeline;
    h;
    ){if(h===this){return !0
    }h=h.timeline
    }return !1
    },g.shiftChildren=function(h,q,a){a=a||0;
    for(var o,p=this._first,u=this._labels;
    p;
    ){p._startTime>=a&&(p._startTime+=h),p=p._next
    }if(q){for(o in u){u[o]>=a&&(u[o]+=h)
    }}return this._uncache(!0)
    },g._kill=function(h,p){if(!h&&!p){return this._enabled(!1,!1)
    }for(var a=p?this.getTweensOf(p):this.getChildren(!0,!0,!1),n=a.length,o=!1;
    --n>-1;
    ){a[n]._kill(h,p)&&(o=!0)
    }return o
    },g.clear=function(h){var n=this.getChildren(!1,!0,!0),a=n.length;
    for(this._time=this._totalTime=0;
    --a>-1;
    ){n[a]._enabled(!1,!1)
    }return h!==!1&&(this._labels={}),this._uncache(!0)
    },g.invalidate=function(){for(var a=this._first;
    a;
    ){a.invalidate(),a=a._next
    }return this
    },g._enabled=function(e,a){if(e===this._gc){for(var h=this._first;
    h;
    ){h._enabled(e,!0),h=h._next
    }}return j.prototype._enabled.call(this,e,a)
    },g.progress=function(a){return arguments.length?this.totalTime(this.duration()*a,!1):this._time/this.duration()
    },g.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)
    },g.totalDuration=function(h){if(!arguments.length){if(this._dirty){for(var q,a,o=0,p=this._last,u=999999999999;
    p;
    ){q=p._prev,p._dirty&&p.totalDuration(),p._startTime>u&&this._sortChildren&&!p._paused?this.add(p,p._startTime-p._delay):u=p._startTime,0>p._startTime&&!p._paused&&(o-=p._startTime,this._timeline.smoothChildTiming&&(this._startTime+=p._startTime/this._timeScale),this.shiftChildren(-p._startTime,!1,-9999999999),u=0),a=p._startTime+p._totalDuration/p._timeScale,a>o&&(o=a),p=q
    }this._duration=this._totalDuration=o,this._dirty=!1
    }return this._totalDuration
    }return 0!==this.totalDuration()&&0!==h&&this.timeScale(this._totalDuration/h),this
    },g.usesFrames=function(){for(var a=this._timeline;
    a._timeline;
    ){a=a._timeline
    }return a===l._rootFramesTimeline
    },g.rawTime=function(){return this._paused||0!==this._totalTime&&this._totalTime!==this._totalDuration?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale
    },m
    },!0),window._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(d,h,c){var f=function(a){d.call(this,a),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0
    },g=[],k=new c(null,null,1,0),b=function(a){for(;
    a;
    ){if(a._paused){return !0
    }a=a._timeline
    }return !1
    },j=f.prototype=new d;
    return j.constructor=f,j.kill()._gc=!1,f.version="1.9.7",j.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),d.prototype.invalidate.call(this)
    },j.addCallback=function(e,a,l,m){return this.add(h.delayedCall(0,e,l,m),a)
    },j.removeCallback=function(l,o){if(null==o){this._kill(null,l)
    }else{for(var a=this.getTweensOf(l,!1),m=a.length,n=this._parseTimeOrLabel(o);
    --m>-1;
    ){a[m]._startTime===n&&a[m]._enabled(!1,!1)
    }}return this
    },j.tweenTo=function(m,l){l=l||{};
    var n,e,p={ease:k,overwrite:2,useFrames:this.usesFrames(),immediateRender:!1};
    for(n in l){p[n]=l[n]
    }return p.time=this._parseTimeOrLabel(m),e=new h(this,Math.abs(Number(p.time)-this._time)/this._timeScale||0.001,p),p.onStart=function(){e.target.paused(!0),e.vars.time!==e.target.time()&&e.duration(Math.abs(e.vars.time-e.target.time())/e.target._timeScale),l.onStart&&l.onStart.apply(l.onStartScope||e,l.onStartParams||g)
    },e
    },j.tweenFromTo=function(l,n,a){a=a||{},l=this._parseTimeOrLabel(l),a.startAt={onComplete:this.seek,onCompleteParams:[l],onCompleteScope:this},a.immediateRender=a.immediateRender!==!1;
    var m=this.tweenTo(n,a);
    return m.duration(Math.abs(m.vars.time-l)/this._timeScale||0.001)
    },j.render=function(E,Q,L){this._gc&&this._enabled(!0,!1),this._active=!this._paused;
    var F,I,V,H,M,K,W=this._dirty?this.totalDuration():this._totalDuration,D=this._duration,G=this._time,O=this._totalTime,S=this._startTime,J=this._timeScale,R=this._rawPrevTime,N=this._paused,C=this._cycle;
    if(E>=W?(this._locked||(this._totalTime=W,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(I=!0,H="onComplete",0===D&&(0===E||0>this._rawPrevTime)&&this._rawPrevTime!==E&&this._first&&(M=!0,this._rawPrevTime>0&&(H="onReverseComplete"))),this._rawPrevTime=E,this._yoyo&&0!==(1&this._cycle)?this._time=E=0:(this._time=D,E=D+0.000001)):1e-7>E?(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==G||0===D&&this._rawPrevTime>0&&!this._locked)&&(H="onReverseComplete",I=this._reversed),0>E?(this._active=!1,0===D&&this._rawPrevTime>=0&&this._first&&(M=!0)):this._initted||(M=!0),this._rawPrevTime=E,E=0):(this._time=this._rawPrevTime=E,this._locked||(this._totalTime=E,0!==this._repeat&&(K=D+this._repeatDelay,this._cycle=this._totalTime/K>>0,0!==this._cycle&&this._cycle===this._totalTime/K&&this._cycle--,this._time=this._totalTime-this._cycle*K,this._yoyo&&0!==(1&this._cycle)&&(this._time=D-this._time),this._time>D?(this._time=D,E=D+0.000001):0>this._time?this._time=E=0:E=this._time))),this._cycle!==C&&!this._locked){var z=this._yoyo&&0!==(1&C),q=z===(this._yoyo&&0!==(1&this._cycle)),B=this._totalTime,A=this._cycle,U=this._rawPrevTime,r=this._time;
    this._totalTime=C*D,C>this._cycle?z=!z:this._totalTime+=D,this._time=G,this._rawPrevTime=0===D?R-0.00001:R,this._cycle=C,this._locked=!0,G=z?0:D,this.render(G,Q,0===D),Q||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||g),q&&(G=z?D+0.000001:-0.000001,this.render(G,!0,!1)),this._time=r,this._totalTime=B,this._cycle=A,this._rawPrevTime=U,this._locked=!1
    }if(!(this._time!==G&&this._first||L||M)){return O!==this._totalTime&&this._onUpdate&&(Q||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||g)),void 0
    }if(this._initted||(this._initted=!0),0===O&&this.vars.onStart&&0!==this._totalTime&&(Q||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||g)),this._time>=G){for(F=this._first;
    F&&(V=F._next,!this._paused||N);
    ){(F._active||F._startTime<=this._time&&!F._paused&&!F._gc)&&(F._reversed?F.render((F._dirty?F.totalDuration():F._totalDuration)-(E-F._startTime)*F._timeScale,Q,L):F.render((E-F._startTime)*F._timeScale,Q,L)),F=V
    }}else{for(F=this._last;
    F&&(V=F._prev,!this._paused||N);
    ){(F._active||G>=F._startTime&&!F._paused&&!F._gc)&&(F._reversed?F.render((F._dirty?F.totalDuration():F._totalDuration)-(E-F._startTime)*F._timeScale,Q,L):F.render((E-F._startTime)*F._timeScale,Q,L)),F=V
    }}this._onUpdate&&(Q||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||g)),H&&(this._locked||this._gc||(S===this._startTime||J!==this._timeScale)&&(0===this._time||W>=this.totalDuration())&&(I&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!Q&&this.vars[H]&&this.vars[H].apply(this.vars[H+"Scope"]||this,this.vars[H+"Params"]||g)))
    },j.getActive=function(x,w,u){null==x&&(x=!0),null==w&&(w=!0),null==u&&(u=!1);
    var y,a,p=[],m=this.getChildren(x,w,u),v=0,q=m.length;
    for(y=0;
    q>y;
    y++){a=m[y],a._paused||a._timeline._time>=a._startTime&&a._timeline._time<a._startTime+a._totalDuration/a._timeScale&&(b(a._timeline)||(p[v++]=a))
    }return p
    },j.getLabelAfter=function(l){l||0!==l&&(l=this._time);
    var n,a=this.getLabelsArray(),m=a.length;
    for(n=0;
    m>n;
    n++){if(a[n].time>l){return a[n].name
    }}return null
    },j.getLabelBefore=function(l){null==l&&(l=this._time);
    for(var m=this.getLabelsArray(),a=m.length;
    --a>-1;
    ){if(l>m[a].time){return m[a].name
    }}return null
    },j.getLabelsArray=function(){var l,m=[],a=0;
    for(l in this._labels){m[a++]={time:this._labels[l],name:l}
    }return m.sort(function(i,n){return i.time-n.time
    }),m
    },j.progress=function(a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()
    },j.totalProgress=function(a){return arguments.length?this.totalTime(this.totalDuration()*a,!1):this._totalTime/this.totalDuration()
    },j.totalDuration=function(a){return arguments.length?-1===this._repeat?this:this.duration((a-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(d.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)
    },j.time=function(a,i){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,i)):this._time
    },j.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat
    },j.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay
    },j.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo
    },j.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+1e-8)
    },f
    },!0),function(){var F=180/Math.PI,z=Math.PI/180,w=[],G=[],b=[],k={},C=function(c,f,a,d){this.a=c,this.b=f,this.c=a,this.d=d,this.da=d-c,this.ca=a-c,this.ba=f-c
    },j=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",x=function(Q,M,J,R){var c={a:Q},H={},N={},m={c:R},K=(Q+M)/2,I=(M+J)/2,O=(J+R)/2,P=(K+I)/2,d=(I+O)/2,L=(d-P)/8;
    return c.b=K+(Q-K)/4,H.b=P+L,c.c=H.a=(c.b+H.b)/2,H.c=N.a=(P+d)/2,N.b=d-L,m.b=O+(R-O)/4,N.c=m.a=(N.b+m.b)/2,[c,H,N,m]
    },v=function(K,U,N,Y,M){var Q,Z,J,L,S,W,O,V,R,I,r,h,H,s=K.length-1,X=0,i=K[0].a;
    for(Q=0;
    s>Q;
    Q++){S=K[X],Z=S.a,J=S.d,L=K[X+1].d,M?(r=w[Q],h=G[Q],H=0.25*(h+r)*U/(Y?0.5:b[Q]||0.5),W=J-(J-Z)*(Y?0.5*U:0!==r?H/r:0),O=J+(L-J)*(Y?0.5*U:0!==h?H/h:0),V=J-(W+((O-W)*(3*r/(r+h)+0.5)/4||0))):(W=J-0.5*(J-Z)*U,O=J+0.5*(L-J)*U,V=J-(W+O)/2),W+=V,O+=V,S.c=R=W,S.b=0!==Q?i:i=S.a+0.6*(S.c-S.a),S.da=J-Z,S.ca=R-Z,S.ba=i-Z,N?(I=x(Z,i,R,J),K.splice(X,1,I[0],I[1],I[2],I[3]),X+=4):X++,i=O
    }S=K[X],S.b=i,S.c=i+0.4*(S.d-i),S.da=S.d-S.a,S.ca=S.c-S.a,S.ba=i-S.a,N&&(I=x(S.a,i,S.c,S.d),K.splice(X,1,I[0],I[1],I[2],I[3]))
    },D=function(L,I,a,i){var d,s,m,J,K,c,H=[];
    if(i){for(L=[i].concat(L),s=L.length;
    --s>-1;
    ){"string"==typeof(c=L[s][I])&&"="===c.charAt(1)&&(L[s][I]=i[I]+Number(c.charAt(0)+c.substr(2)))
    }}if(d=L.length-2,0>d){return H[0]=new C(L[0][I],0,0,L[-1>d?0:1][I]),H
    }for(s=0;
    d>s;
    s++){m=L[s][I],J=L[s+1][I],H[s]=new C(m,0,0,J),a&&(K=L[s+2][I],w[s]=(w[s]||0)+(J-m)*(J-m),G[s]=(G[s]||0)+(K-J)*(K-J))
    }return H[s]=new C(L[s][I],0,0,L[s+1][I]),H
    },E=function(R,H,N,o,Q,i){var s,J,l,I,r,P,L,n,O={},M=[],K=i||R[0];
    Q="string"==typeof Q?","+Q+",":j,null==H&&(H=1);
    for(J in R[0]){M.push(J)
    }if(R.length>1){for(n=R[R.length-1],L=!0,s=M.length;
    --s>-1;
    ){if(J=M[s],Math.abs(K[J]-n[J])>0.05){L=!1;
    break
    }}L&&(R=R.concat(),i&&R.unshift(i),R.push(R[1]),i=R[R.length-3])
    }for(w.length=G.length=b.length=0,s=M.length;
    --s>-1;
    ){J=M[s],k[J]=-1!==Q.indexOf(","+J+","),O[J]=D(R,J,k[J],i)
    }for(s=w.length;
    --s>-1;
    ){w[s]=Math.sqrt(w[s]),G[s]=Math.sqrt(G[s])
    }if(!o){for(s=M.length;
    --s>-1;
    ){if(k[J]){for(l=O[M[s]],P=l.length-1,I=0;
    P>I;
    I++){r=l[I+1].da/G[I]+l[I].da/w[I],b[I]=(b[I]||0)+r*r
    }}}for(s=b.length;
    --s>-1;
    ){b[s]=Math.sqrt(b[s])
    }}for(s=M.length,I=N?4:1;
    --s>-1;
    ){J=M[s],l=O[J],v(l,H,N,o,k[J]),L&&(l.splice(0,I),l.splice(l.length-I,I))
    }return O
    },g=function(I,U,Q){U=U||"soft";
    var J,K,N,M,R,P,X,H,L,T,W,O={},V="cubic"===U?3:2,S="soft"===U,a=[];
    if(S&&Q&&(I=[Q].concat(I)),null==I||V+1>I.length){throw"invalid Bezier data"
    }for(L in I[0]){a.push(L)
    }for(P=a.length;
    --P>-1;
    ){for(L=a[P],O[L]=R=[],T=0,H=I.length,X=0;
    H>X;
    X++){J=null==Q?I[X][L]:"string"==typeof(W=I[X][L])&&"="===W.charAt(1)?Q[L]+Number(W.charAt(0)+W.substr(2)):Number(W),S&&X>1&&H-1>X&&(R[T++]=(J+R[T-2])/2),R[T++]=J
    }for(H=T-V+1,T=0,X=0;
    H>X;
    X+=V){J=R[X],K=R[X+1],N=R[X+2],M=2===V?0:R[X+3],R[T++]=W=3===V?new C(J,K,N,M):new C(J,(2*K+J)/3,(2*K+N)/3,N)
    }R.length=T
    }return O
    },y=function(U,P,M){for(var V,d,J,R,I,N,L,S,T,H,O,Q=1/M,K=U.length;
    --K>-1;
    ){for(H=U[K],J=H.a,R=H.d-J,I=H.c-J,N=H.b-J,V=d=0,S=1;
    M>=S;
    S++){L=Q*S,T=1-L,V=d-(d=(L*L*R+3*T*(L*I+T*N))*L),O=K*M+S-1,P[O]=(P[O]||0)+V*V
    }}},B=function(O,K){K=K>>0||6;
    var I,P,c,m,L=[],f=[],J=0,H=0,M=K-1,N=[],d=[];
    for(I in O){y(O[I],L,K)
    }for(c=L.length,P=0;
    c>P;
    P++){J+=Math.sqrt(L[P]),m=P%K,d[m]=J,m===M&&(H+=J,m=P/K>>0,N[m]=d,f[m]=H,J=0,d=[])
    }return{length:H,lengths:f,segments:N}
    },q=window._gsDefine.plugin({propName:"bezier",priority:-1,API:2,global:!0,init:function(O,L,I){this._target=O,L instanceof Array&&(L={values:L}),this._func={},this._round={},this._props=[],this._timeRes=null==L.timeResolution?6:parseInt(L.timeResolution,10);
    var P,c,p,M,d,J=L.values||[],H={},N=J[0],K=L.autoRotate||I.vars.orientToBezier;
    this._autoRotate=K?K instanceof Array?K:[["x","y","rotation",K===!0?0:Number(K)||0]]:null;
    for(P in N){this._props.push(P)
    }for(p=this._props.length;
    --p>-1;
    ){P=this._props[p],this._overwriteProps.push(P),c=this._func[P]="function"==typeof O[P],H[P]=c?O[P.indexOf("set")||"function"!=typeof O["get"+P.substr(3)]?P:"get"+P.substr(3)]():parseFloat(O[P]),d||H[P]!==J[0][P]&&(d=H)
    }if(this._beziers="cubic"!==L.type&&"quadratic"!==L.type&&"soft"!==L.type?E(J,isNaN(L.curviness)?1:L.curviness,!1,"thruBasic"===L.type,L.correlate,d):g(J,L.type,H),this._segCount=this._beziers[P].length,this._timeRes){var u=B(this._beziers,this._timeRes);
    this._length=u.length,this._lengths=u.lengths,this._segments=u.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length
    }if(K=this._autoRotate){for(K[0] instanceof Array||(this._autoRotate=K=[K]),p=K.length;
    --p>-1;
    ){for(M=0;
    3>M;
    M++){P=K[p][M],this._func[P]="function"==typeof O[P]?O[P.indexOf("set")||"function"!=typeof O["get"+P.substr(3)]?P:"get"+P.substr(3)]:!1
    }}}return !0
    },set:function(Y){var U,M,N,Q,ab,P,V,S,ac,L,O=this._segCount,X=this._func,aa=this._target;
    if(this._timeRes){if(ac=this._lengths,L=this._curSeg,Y*=this._length,N=this._li,Y>this._l2&&O-1>N){for(S=O-1;
    S>N&&Y>=(this._l2=ac[++N]);
    ){}this._l1=ac[N-1],this._li=N,this._curSeg=L=this._segments[N],this._s2=L[this._s1=this._si=0]
    }else{if(this._l1>Y&&N>0){for(;
    N>0&&(this._l1=ac[--N])>=Y;
    ){}0===N&&this._l1>Y?this._l1=0:N++,this._l2=ac[N],this._li=N,this._curSeg=L=this._segments[N],this._s1=L[(this._si=L.length-1)-1]||0,this._s2=L[this._si]
    }}if(U=N,Y-=this._l1,N=this._si,Y>this._s2&&L.length-1>N){for(S=L.length-1;
    S>N&&Y>=(this._s2=L[++N]);
    ){}this._s1=L[N-1],this._si=N
    }else{if(this._s1>Y&&N>0){for(;
    N>0&&(this._s1=L[--N])>=Y;
    ){}0===N&&this._s1>Y?this._s1=0:N++,this._s2=L[N],this._si=N
    }}P=(N+(Y-this._s1)/(this._s2-this._s1))*this._prec
    }else{U=0>Y?0:Y>=1?O-1:O*Y>>0,P=(Y-U*(1/O))*O
    }for(M=1-P,N=this._props.length;
    --N>-1;
    ){Q=this._props[N],ab=this._beziers[Q][U],V=(P*P*ab.da+3*M*(P*ab.ca+M*ab.ba))*P+ab.a,this._round[Q]&&(V=V+(V>0?0.5:-0.5)>>0),X[Q]?aa[Q](V):aa[Q]=V
    }if(this._autoRotate){var R,Z,W,K,H,t,J,I=this._autoRotate;
    for(N=I.length;
    --N>-1;
    ){Q=I[N][2],t=I[N][3]||0,J=I[N][4]===!0?1:F,ab=this._beziers[I[N][0]],R=this._beziers[I[N][1]],ab&&R&&(ab=ab[U],R=R[U],Z=ab.a+(ab.b-ab.a)*P,K=ab.b+(ab.c-ab.b)*P,Z+=(K-Z)*P,K+=(ab.c+(ab.d-ab.c)*P-K)*P,W=R.a+(R.b-R.a)*P,H=R.b+(R.c-R.b)*P,W+=(H-W)*P,H+=(R.c+(R.d-R.c)*P-H)*P,V=Math.atan2(H-W,K-Z)*J+t,X[Q]?aa[Q](V):aa[Q]=V)
    }}}}),A=q.prototype;
    q.bezierThrough=E,q.cubicToQuadratic=x,q._autoCSS=!0,q.quadraticToCubic=function(c,d,a){return new C(c,(2*d+c)/3,(2*d+a)/3,a)
    },q._cssRegister=function(){var c=window._gsDefine.globals.CSSPlugin;
    if(c){var a=c._internals,d=a._parseToProxy,e=a._setPluginRatio,f=a.CSSPropTween;
    a._registerComplexSpecialProp("bezier",{parser:function(P,s,M,n,H,r){s instanceof Array&&(s={values:s}),r=new q;
    var N,O,m,J=s.values,L=J.length-1,K=[],I={};
    if(0>L){return H
    }for(N=0;
    L>=N;
    N++){m=d(P,J[N],n,H,r,L!==N),K[N]=m.end
    }for(O in s){I[O]=s[O]
    }return I.values=K,H=new f(P,"bezier",0,0,m.pt,2),H.data=m,H.plugin=r,H.setRatio=e,0===I.autoRotate&&(I.autoRotate=!0),!I.autoRotate||I.autoRotate instanceof Array||(N=I.autoRotate===!0?0:Number(I.autoRotate)*z,I.autoRotate=null!=m.end.left?[["left","top","rotation",N,!0]]:null!=m.end.x?[["x","y","rotation",N,!0]]:!1),I.autoRotate&&(n._transform||n._enableTransforms(!1),m.autoRotate=n._target._gsTransform),r._onInitTween(m.proxy,I,n._tween),H
    }})
    }},A._roundProps=function(c,f){for(var a=this._overwriteProps,d=a.length;
    --d>-1;
    ){(c[a[d]]||c.bezier||c.bezierThrough)&&(this._round[a[d]]=f)
    }},A._kill=function(c){var f,a,d=this._props;
    for(f in this._beziers){if(f in c){for(delete this._beziers[f],delete this._func[f],a=d.length;
    --a>-1;
    ){d[a]===f&&d.splice(a,1)
    }}}return this._super._kill.call(this,c)
    }
    }(),window._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(ap,aJ){var aE,aq,ar,ax,aP=function(){ap.call(this,"css"),this._overwriteProps.length=0
    },aw={},aF=aP.prototype=new ap("css");
    aF.constructor=aP,aP.version="1.9.7",aP.API=2,aP.defaultTransformPerspective=0,aF="px",aP.suffixMap={top:aF,right:aF,bottom:aF,left:aF,width:aF,height:aF,fontSize:aF,padding:aF,margin:aF,perspective:aF};
    var aB,aQ,ao,av,aI,aL,ay=/(?:\d|\-\d|\.\d|\-\.\d)+/g,aK=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,aH=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,an=/[^\d\-\.]/g,ak=/(?:\d|\-|\+|=|#|\.)*/g,aX=/opacity *= *([^)]*)/,am=/opacity:([^;]*)/,al=/alpha\(opacity *=.+?\)/i,aO=/^(rgb|hsl)/,a2=/([A-Z])/g,aC=/-([a-z])/gi,a0=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,aZ=function(a,b){return b.toUpperCase()
    },bn=/(?:Left|Right|Width)/i,bl=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,a3=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,bi=/,(?=[^\)]*(?:\(|$))/gi,a7=Math.PI/180,bb=180/Math.PI,bg={},bh=document,a5=bh.createElement("div"),a8=bh.createElement("img"),aT=aP._internals={_specialProps:aw},aW=navigator.userAgent,aj=function(){var b,c=aW.indexOf("Android"),a=bh.createElement("div");
    return ao=-1!==aW.indexOf("Safari")&&-1===aW.indexOf("Chrome")&&(-1===c||Number(aW.substr(c+8,1))>3),aI=ao&&6>Number(aW.substr(aW.indexOf("Version/")+8,1)),av=-1!==aW.indexOf("Firefox"),/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(aW),aL=parseFloat(RegExp.$1),a.innerHTML="<a style='top:1px;opacity:.55;'>a</a>",b=a.getElementsByTagName("a")[0],b?/^0.55/.test(b.style.opacity):!1
    }(),aS=function(a){return aX.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1
    },bm=function(a){window.console&&console.log(a)
    },aD="",au="",aV=function(b,f){f=f||a5;
    var a,c,d=f.style;
    if(void 0!==d[b]){return b
    }for(b=b.charAt(0).toUpperCase()+b.substr(1),a=["O","Moz","ms","Ms","Webkit"],c=5;
    --c>-1&&void 0===d[a[c]+b];
    ){}return c>=0?(au=3===c?"ms":a[c],aD="-"+au.toLowerCase()+"-",au+b):null
    },aR=bh.defaultView?bh.defaultView.getComputedStyle:function(){},bf=aP.getStyle=function(b,f,a,c,d){var g;
    return aj||"opacity"!==f?(!c&&b.style[f]?g=b.style[f]:(a=a||aR(b,null))?(b=a.getPropertyValue(f.replace(a2,"-$1").toLowerCase()),g=b||a.length?b:a[f]):b.currentStyle&&(a=b.currentStyle,g=a[f]),null==d||g&&"none"!==g&&"auto"!==g&&"auto auto"!==g?g:d):aS(b)
    },bs=function(p,k,g,q,b){if("px"===q||!q){return g
    }if("auto"===q||!g){return 0
    }var d,m=bn.test(k),c=p,j=a5.style,f=0>g;
    return f&&(g=-g),"%"===q&&-1!==k.indexOf("border")?d=g/100*(m?p.clientWidth:p.clientHeight):(j.cssText="border-style:solid; border-width:0; position:absolute; line-height:0;","%"!==q&&c.appendChild?j[m?"borderLeftWidth":"borderTopWidth"]=g+q:(c=p.parentNode||bh.body,j[m?"width":"height"]=g+q),c.appendChild(a5),d=parseFloat(a5[m?"offsetWidth":"offsetHeight"]),c.removeChild(a5),0!==d||b||(d=bs(p,k,g,q,!0))),f?-d:d
    },a1=function(b,f,a){if("absolute"!==bf(b,"position",a)){return 0
    }var c="left"===f?"Left":"Top",d=bf(b,"margin"+c,a);
    return b["offset"+c]-(bs(b,f,parseFloat(d),d.replace(ak,""))||0)
    },aU=function(b,f){var a,c,d={};
    if(f=f||aR(b,null)){if(a=f.length){for(;
    --a>-1;
    ){d[f[a].replace(aC,aZ)]=f.getPropertyValue(f[a])
    }}else{for(a in f){d[a]=f[a]
    }}}else{if(f=b.currentStyle||b.style){for(a in f){d[a.replace(aC,aZ)]=f[a]
    }}}return aj||(d.opacity=aS(b)),c=aY(b,f,!1),d.rotation=c.rotation*bb,d.skewX=c.skewX*bb,d.scaleX=c.scaleX,d.scaleY=c.scaleY,d.x=c.x,d.y=c.y,bz&&(d.z=c.z,d.rotationX=c.rotationX*bb,d.rotationY=c.rotationY*bb,d.scaleZ=c.scaleZ),d.filters&&delete d.filters,d
    },bd=function(p,k,g,q,b){var d,m,c,j={},f=p.style;
    for(m in g){"cssText"!==m&&"length"!==m&&isNaN(m)&&(k[m]!==(d=g[m])||b&&b[m])&&-1===m.indexOf("Origin")&&("number"==typeof d||"string"==typeof d)&&(j[m]="auto"!==d||"left"!==m&&"top"!==m?""!==d&&"auto"!==d&&"none"!==d||"string"!=typeof k[m]||""===k[m].replace(an,"")?d:0:a1(p,m),void 0!==f[m]&&(c=new aM(f,m,f[m],c)))
    }if(q){for(m in q){"className"!==m&&(j[m]=q[m])
    }}return{difs:j,firstMPT:c}
    },a9={width:["Left","Right"],height:["Top","Bottom"]},ba=["marginLeft","marginRight","marginTop","marginBottom"],bj=function(b,f,a){var c=parseFloat("width"===f?b.offsetWidth:b.offsetHeight),d=a9[f],g=d.length;
    for(a=a||aR(b,null);
    --g>-1;
    ){c-=parseFloat(bf(b,"padding"+d[g],a,!0))||0,c-=parseFloat(bf(b,"border"+d[g]+"Width",a,!0))||0
    }return c
    },ab=function(b,f){(null==b||""===b||"auto"===b||"auto auto"===b)&&(b="0 0");
    var a=b.split(" "),c=-1!==b.indexOf("left")?"0%":-1!==b.indexOf("right")?"100%":a[0],d=-1!==b.indexOf("top")?"0%":-1!==b.indexOf("bottom")?"100%":a[1];
    return null==d?d="0":"center"===d&&(d="50%"),("center"===c||isNaN(parseFloat(c)))&&(c="50%"),f&&(f.oxp=-1!==c.indexOf("%"),f.oyp=-1!==d.indexOf("%"),f.oxr="="===c.charAt(1),f.oyr="="===d.charAt(1),f.ox=parseFloat(c.replace(an,"")),f.oy=parseFloat(d.replace(an,""))),c+" "+d+(a.length>2?" "+a[2]:"")
    },az=function(a,b){return"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)
    },br=function(a,b){return null==a?b:"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*Number(a.substr(2))+b:parseFloat(a)
    },by=function(l,j,f,m){var b,d,k,c,g=0.000001;
    return null==l?c=j:"number"==typeof l?c=l*a7:(b=2*Math.PI,d=l.split("_"),k=Number(d[0].replace(an,""))*(-1===l.indexOf("rad")?a7:1)-("="===l.charAt(1)?0:j),d.length&&(m&&(m[f]=j+k),-1!==l.indexOf("short")&&(k%=b,k!==k%(b/2)&&(k=0>k?k+b:k-b)),-1!==l.indexOf("_cw")&&0>k?k=(k+9999999999*b)%b-(0|k/b)*b:-1!==l.indexOf("ccw")&&k>0&&(k=(k-9999999999*b)%b-(0|k/b)*b)),c=j+k),g>c&&c>-g&&(c=0),c
    },bc={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},bo=function(b,c,a){return b=0>b?b+1:b>1?b-1:b,0|255*(1>6*b?c+6*(a-c)*b:0.5>b?a:2>3*b?c+6*(a-c)*(2/3-b):c)+0.5
    },aG=function(d){var h,c,f,g,j,b;
    return d&&""!==d?"number"==typeof d?[d>>16,255&d>>8,255&d]:(","===d.charAt(d.length-1)&&(d=d.substr(0,d.length-1)),bc[d]?bc[d]:"#"===d.charAt(0)?(4===d.length&&(h=d.charAt(1),c=d.charAt(2),f=d.charAt(3),d="#"+h+h+c+c+f+f),d=parseInt(d.substr(1),16),[d>>16,255&d>>8,255&d]):"hsl"===d.substr(0,3)?(d=d.match(ay),g=Number(d[0])%360/360,j=Number(d[1])/100,b=Number(d[2])/100,c=0.5>=b?b*(j+1):b+j-b*j,h=2*b-c,d.length>3&&(d[3]=Number(d[3])),d[0]=bo(g+1/3,h,c),d[1]=bo(g,h,c),d[2]=bo(g-1/3,h,c),d):(d=d.match(ay)||bc.transparent,d[0]=Number(d[0]),d[1]=Number(d[1]),d[2]=Number(d[2]),d.length>3&&(d[3]=Number(d[3])),d)):bc.black
    },a4="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
    for(aF in bc){a4+="|"+aF+"\\b"
    }a4=RegExp(a4+")","gi");
    var bx=function(v,k,g,w){if(null==v){return function(a){return a
    }
    }var b,d=k?(v.match(a4)||[""])[0]:"",m=v.split(d).join("").match(aH)||[],c=v.substr(0,v.indexOf(m[0])),j=")"===v.charAt(v.length-1)?")":"",f=-1!==v.indexOf(" ")?" ":",",p=m.length,q=p>0?m[0].replace(ay,""):"";
    return p?b=k?function(a){var l,i,h,n;
    if("number"==typeof a){a+=q
    }else{if(w&&bi.test(a)){for(n=a.replace(bi,"|").split("|"),h=0;
    n.length>h;
    h++){n[h]=b(n[h])
    }return n.join(",")
    }}if(l=(a.match(a4)||[d])[0],i=a.split(l).join("").match(aH)||[],h=i.length,p>h--){for(;
    p>++h;
    ){i[h]=g?i[0|(h-1)/2]:m[h]
    }}return c+i.join(f)+f+l+j+(-1!==a.indexOf("inset")?" inset":"")
    }:function(a){var i,l,h;
    if("number"==typeof a){a+=q
    }else{if(w&&bi.test(a)){for(l=a.replace(bi,"|").split("|"),h=0;
    l.length>h;
    h++){l[h]=b(l[h])
    }return l.join(",")
    }}if(i=a.match(aH)||[],h=i.length,p>h--){for(;
    p>++h;
    ){i[h]=g?i[0|(h-1)/2]:m[h]
    }}return c+i.join(f)+j
    }:function(a){return a
    }
    },aa=function(a){return a=a.split(","),function(k,g,p,b,d,m,c){var j,f=(g+"").split(" ");
    for(c={},j=0;
    4>j;
    j++){c[a[j]]=f[j]=f[j]||f[(j-1)/2>>0]
    }return b.parse(k,c,d,m)
    }
    },aM=(aT._setPluginRatio=function(l){this.plugin.setRatio(l);
    for(var j,f,m,b,d=this.data,k=d.proxy,c=d.firstMPT,g=0.000001;
    c;
    ){j=k[c.v],c.r?j=j>0?0|j+0.5:0|j-0.5:g>j&&j>-g&&(j=0),c.t[c.p]=j,c=c._next
    }if(d.autoRotate&&(d.autoRotate.rotation=k.rotation),1===l){for(c=d.firstMPT;
    c;
    ){if(f=c.t,f.type){if(1===f.type){for(b=f.xs0+f.s+f.xs1,m=1;
    f.l>m;
    m++){b+=f["xn"+m]+f["xs"+(m+1)]
    }f.e=b
    }}else{f.e=f.s+f.xs0
    }c=c._next
    }}},function(b,f,a,c,d){this.t=b,this.p=f,this.v=a,this.r=d,c&&(c._prev=this,this._next=c)
    }),ah=(aT._parseToProxy=function(D,y,v,E,b,j){var A,g,w,q,B,C=E,d={},x={},z=v._transform,k=bg;
    for(v._transform=null,bg=y,E=B=v.parse(D,y,E,b),bg=k,j&&(v._transform=z,C&&(C._prev=null,C._prev&&(C._prev._next=null)));
    E&&E!==C;
    ){if(1>=E.type&&(g=E.p,x[g]=E.s+E.c,d[g]=E.s,j||(q=new aM(E,"s",g,q,E.r),E.c=0),1===E.type)){for(A=E.l;
    --A>0;
    ){w="xn"+A,g=E.p+"_"+w,x[g]=E.data[w],d[g]=E[w],j||(q=new aM(E,w,g,q,E.rxp[w]))
    }}E=E._next
    }return{proxy:d,end:x,firstMPT:q,pt:B}
    },aT.CSSPropTween=function(n,i,q,b,j,d,g,f,k,m,c){this.t=n,this.p=i,this.s=q,this.c=b,this.n=g||"css_"+i,n instanceof ah||ax.push(this.n),this.r=f,this.type=d||0,k&&(this.pr=k,aE=!0),this.b=void 0===m?q:m,this.e=void 0===c?q+b:c,j&&(this._next=j,j._prev=this)
    }),bv=aP.parseComplex=function(E,V,N,F,H,L,X,K,O,Y){N=N||L||"",X=new ah(E,V,0,0,X,Y?2:1,null,!1,K,N,F),F+="";
    var D,J,U,W,Q,B,m,b,z,q,l,M,j=N.split(", ").join(",").split(" "),d=F.split(", ").join(",").split(" "),I=j.length,G=aB!==!1;
    for((-1!==F.indexOf(",")||-1!==N.indexOf(","))&&(j=j.join(" ").replace(bi,", ").split(" "),d=d.join(" ").replace(bi,", ").split(" "),I=j.length),I!==d.length&&(j=(L||"").split(" "),I=j.length),X.plugin=O,X.setRatio=Y,D=0;
    I>D;
    D++){if(W=j[D],Q=d[D],b=parseFloat(W),b||0===b){X.appendXtra("",b,az(Q,b),Q.replace(aK,""),G&&-1!==Q.indexOf("px"),!0)
    }else{if(H&&("#"===W.charAt(0)||bc[W]||aO.test(W))){M=","===Q.charAt(Q.length-1)?"),":")",W=aG(W),Q=aG(Q),z=W.length+Q.length>6,z&&!aj&&0===Q[3]?(X["xs"+X.l]+=X.l?" transparent":"transparent",X.e=X.e.split(d[D]).join("transparent")):(aj||(z=!1),X.appendXtra(z?"rgba(":"rgb(",W[0],Q[0]-W[0],",",!0,!0).appendXtra("",W[1],Q[1]-W[1],",",!0).appendXtra("",W[2],Q[2]-W[2],z?",":M,!0),z&&(W=4>W.length?1:W[3],X.appendXtra("",W,(4>Q.length?1:Q[3])-W,M,!1)))
    }else{if(B=W.match(ay)){if(m=Q.match(aK),!m||m.length!==B.length){return X
    }for(U=0,J=0;
    B.length>J;
    J++){l=B[J],q=W.indexOf(l,U),X.appendXtra(W.substr(U,q-U),Number(l),az(m[J],l),"",G&&"px"===W.substr(q+l.length,2),0===J),U=q+l.length
    }X["xs"+X.l]+=W.substr(U)
    }else{X["xs"+X.l]+=X.l?" "+W:W
    }}}}if(-1!==F.indexOf("=")&&X.data){for(M=X.xs0+X.data.s,D=1;
    X.l>D;
    D++){M+=X["xs"+D]+X.data["xn"+D]
    }X.e=M+X["xs"+D]
    }return X.l||(X.type=-1,X.xs0=X.e),X.xfirst||X
    },at=9;
    for(aF=ah.prototype,aF.l=aF.pr=0;
    --at>0;
    ){aF["xn"+at]=0,aF["xs"+at]=""
    }aF.xs0="",aF._next=aF._prev=aF.xfirst=aF.data=aF.plugin=aF.setRatio=aF.rxp=null,aF.appendXtra=function(d,h,c,f,g,k){var b=this,j=b.l;
    return b["xs"+j]+=k&&j?" "+d:d||"",c||0===j||b.plugin?(b.l++,b.type=b.setRatio?2:1,b["xs"+b.l]=f||"",j>0?(b.data["xn"+j]=h+c,b.rxp["xn"+j]=g,b["xn"+j]=h,b.plugin||(b.xfirst=new ah(b,"xn"+j,h,c,b.xfirst||b,0,b.n,g,b.pr),b.xfirst.xs0=0),b):(b.data={s:h+c},b.rxp={},b.s=h,b.c=c,b.r=g,b)):(b["xs"+j]+=h+(f||""),b)
    };
    var bq=function(a,b){b=b||{},this.p=b.prefix?aV(a)||a:a,aw[a]=aw[this.p]=this,this.format=b.formatter||bx(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.pr=b.priority||0
    },ag=aT._registerComplexSpecialProp=function(d,h,c){"object"!=typeof h&&(h={parser:c});
    var f,g,j=d.split(","),b=h.defaultValue;
    for(c=c||[b],f=0;
    j.length>f;
    f++){h.prefix=0===f&&h.prefix,h.defaultValue=c[f]||b,g=new bq(j[f],h)
    }},bp=function(a){if(!aw[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";
    ag(a,{parser:function(f,e,j,k,m,d,g){var c=(window.GreenSockGlobals||window).com.greensock.plugins[b];
    return c?(c._cssRegister(),aw[j].parse(f,e,j,k,m,d,g)):(bm("Error: "+b+" js file not loaded."),m)
    }})
    }};
    aF=bq.prototype,aF.parseComplex=function(x,m,j,y,b,f){var q,d,k,g,v,w,c=this.keyword;
    if(this.multi&&(bi.test(j)||bi.test(m)?(d=m.replace(bi,"|").split("|"),k=j.replace(bi,"|").split("|")):c&&(d=[m],k=[j])),k){for(g=k.length>d.length?k.length:d.length,q=0;
    g>q;
    q++){m=d[q]=d[q]||this.dflt,j=k[q]=k[q]||this.dflt,c&&(v=m.indexOf(c),w=j.indexOf(c),v!==w&&(j=-1===w?k:d,j[q]+=" "+c))
    }m=d.join(", "),j=k.join(", ")
    }return bv(x,this.p,m,j,this.clrs,this.dflt,y,this.pr,b,f)
    },aF.parse=function(d,g,c,f,h,b){return this.parseComplex(d.style,this.format(bf(d,this.p,ar,!1,this.dflt)),this.format(g),h,b)
    },aP.registerSpecialProp=function(b,c,a){ag(b,{parser:function(e,g,i,k,d,j){var f=new ah(e,i,0,0,d,2,i,!1,a);
    return f.plugin=j,f.setRatio=c(e,g,k._tween,i),f
    },priority:a})
    };
    var ai="scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),bt=aV("transform"),bu=aD+"transform",ad=aV("transformOrigin"),bz=null!==aV("perspective"),aY=function(b2,ch,cd){var b3,b4,b8,b7,ce,ca,cl,b1,b6,cg,cj,b9,ci,cf=cd?b2._gsTransform||{skewY:0}:{skewY:0},b0=0>cf.scaleX,bX=0.00002,bD=100000,bZ=-Math.PI+0.0001,bY=Math.PI-0.0001,ck=bz?parseFloat(bf(b2,ad,ch,!1,"0 0 0").split(" ")[2])||cf.zOrigin||0:0;
    if(bt){b3=bf(b2,bu,ch,!0)
    }else{if(b2.currentStyle){if(b3=b2.currentStyle.filter.match(bl),b3&&4===b3.length){b3=[b3[0].substr(4),Number(b3[2].substr(4)),Number(b3[1].substr(4)),b3[3].substr(4),cf.x||0,cf.y||0].join(",")
    }else{if(null!=cf.x){return cf
    }b3=""
    }}}for(b4=(b3||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],b8=b4.length;
    --b8>-1;
    ){b7=Number(b4[b8]),b4[b8]=(ce=b7-(b7|=0))?(0|ce*bD+(0>ce?-0.5:0.5))/bD+b7:b7
    }if(16===b4.length){var bH=b4[8],cb=b4[9],bF=b4[10],bE=b4[12],bU=b4[13],bI=b4[14];
    if(cf.zOrigin&&(bI=-cf.zOrigin,bE=bH*bI-b4[12],bU=cb*bI-b4[13],bI=bF*bI+cf.zOrigin-b4[14]),!cd||null==cf.rotationX){var bS,bK,bO,bQ,bR,bJ,bL,G=b4[0],bC=b4[1],bW=b4[2],C=b4[3],bT=b4[4],cc=b4[5],b5=b4[6],bB=b4[7],a=b4[11],bV=cf.rotationX=Math.atan2(b5,bF),bG=bZ>bV||bV>bY;
    bV&&(bQ=Math.cos(-bV),bR=Math.sin(-bV),bS=bT*bQ+bH*bR,bK=cc*bQ+cb*bR,bO=b5*bQ+bF*bR,bH=bT*-bR+bH*bQ,cb=cc*-bR+cb*bQ,bF=b5*-bR+bF*bQ,a=bB*-bR+a*bQ,bT=bS,cc=bK,b5=bO),bV=cf.rotationY=Math.atan2(bH,G),bV&&(bJ=bZ>bV||bV>bY,bQ=Math.cos(-bV),bR=Math.sin(-bV),bS=G*bQ-bH*bR,bK=bC*bQ-cb*bR,bO=bW*bQ-bF*bR,cb=bC*bR+cb*bQ,bF=bW*bR+bF*bQ,a=C*bR+a*bQ,G=bS,bC=bK,bW=bO),bV=cf.rotation=Math.atan2(bC,cc),bV&&(bL=bZ>bV||bV>bY,bQ=Math.cos(-bV),bR=Math.sin(-bV),G=G*bQ+bT*bR,bK=bC*bQ+cc*bR,cc=bC*-bR+cc*bQ,b5=bW*-bR+b5*bQ,bC=bK),bL&&bG?cf.rotation=cf.rotationX=0:bL&&bJ?cf.rotation=cf.rotationY=0:bJ&&bG&&(cf.rotationY=cf.rotationX=0),cf.scaleX=(0|Math.sqrt(G*G+bC*bC)*bD+0.5)/bD,cf.scaleY=(0|Math.sqrt(cc*cc+cb*cb)*bD+0.5)/bD,cf.scaleZ=(0|Math.sqrt(b5*b5+bF*bF)*bD+0.5)/bD,cf.skewX=0,cf.perspective=a?1/(0>a?-a:a):0,cf.x=bE,cf.y=bU,cf.z=bI
    }}else{if(!(bz&&0!==b4.length&&cf.x===b4[4]&&cf.y===b4[5]&&(cf.rotationX||cf.rotationY)||void 0!==cf.x&&"none"===bf(b2,"display",ch))){var be=b4.length>=6,bP=be?b4[0]:1,bM=b4[1]||0,bN=b4[2]||0,ae=be?b4[3]:1;
    cf.x=b4[4]||0,cf.y=b4[5]||0,ca=Math.sqrt(bP*bP+bM*bM),cl=Math.sqrt(ae*ae+bN*bN),b1=bP||bM?Math.atan2(bM,bP):cf.rotation||0,b6=bN||ae?Math.atan2(bN,ae)+b1:cf.skewX||0,cg=ca-Math.abs(cf.scaleX||0),cj=cl-Math.abs(cf.scaleY||0),Math.abs(b6)>Math.PI/2&&Math.abs(b6)<1.5*Math.PI&&(b0?(ca*=-1,b6+=0>=b1?Math.PI:-Math.PI,b1+=0>=b1?Math.PI:-Math.PI):(cl*=-1,b6+=0>=b6?Math.PI:-Math.PI)),b9=(b1-cf.rotation)%Math.PI,ci=(b6-cf.skewX)%Math.PI,(void 0===cf.skewX||cg>bX||-bX>cg||cj>bX||-bX>cj||b9>bZ&&bY>b9&&false|b9*bD||ci>bZ&&bY>ci&&false|ci*bD)&&(cf.scaleX=ca,cf.scaleY=cl,cf.rotation=b1,cf.skewX=b6),bz&&(cf.rotationX=cf.rotationY=cf.z=0,cf.perspective=parseFloat(aP.defaultTransformPerspective)||0,cf.scaleZ=1)
    }}cf.zOrigin=ck;
    for(b8 in cf){bX>cf[b8]&&cf[b8]>-bX&&(cf[b8]=0)
    }return cd&&(b2._gsTransform=cf),cf
    },aN=function(C){var Q,L,D=this.data,E=-D.rotation,H=E+D.skewX,V=100000,G=(0|Math.cos(E)*D.scaleX*V)/V,M=(0|Math.sin(E)*D.scaleX*V)/V,J=(0|Math.sin(H)*-D.scaleY*V)/V,W=(0|Math.cos(H)*D.scaleY*V)/V,B=this.t.style,F=this.t.currentStyle;
    if(F){L=M,M=-J,J=-L,Q=F.filter,B.filter="";
    var O,I,T=this.t.offsetWidth,N=this.t.offsetHeight,A="absolute"!==F.position,z="progid:DXImageTransform.Microsoft.Matrix(M11="+G+", M12="+M+", M21="+J+", M22="+W,y=D.x,U=D.y;
    if(null!=D.ox&&(O=(D.oxp?0.01*T*D.ox:D.ox)-T/2,I=(D.oyp?0.01*N*D.oy:D.oy)-N/2,y+=O-(O*G+I*M),U+=I-(O*J+I*W)),A){O=T/2,I=N/2,z+=", Dx="+(O-(O*G+I*M)+y)+", Dy="+(I-(O*J+I*W)+U)+")"
    }else{var q,K,j,c=8>aL?1:-1;
    for(O=D.ieOffsetX||0,I=D.ieOffsetY||0,D.ieOffsetX=Math.round((T-((0>G?-G:G)*T+(0>M?-M:M)*N))/2+y),D.ieOffsetY=Math.round((N-((0>W?-W:W)*N+(0>J?-J:J)*T))/2+U),at=0;
    4>at;
    at++){K=ba[at],q=F[K],L=-1!==q.indexOf("px")?parseFloat(q):bs(this.t,K,parseFloat(q),q.replace(ak,""))||0,j=L!==D[K]?2>at?-D.ieOffsetX:-D.ieOffsetY:2>at?O-D.ieOffsetX:I-D.ieOffsetY,B[K]=(D[K]=Math.round(L-j*(0===at||2===at?1:c)))+"px"
    }z+=", sizingMethod='auto expand')"
    }B.filter=-1!==Q.indexOf("DXImageTransform.Microsoft.Matrix(")?Q.replace(a3,z):z+" "+Q,(0===C||1===C)&&1===G&&0===M&&0===J&&1===W&&(A&&-1===z.indexOf("Dx=0, Dy=0")||aX.test(Q)&&100!==parseFloat(RegExp.$1)||-1===Q.indexOf("gradient(")&&B.removeAttribute("filter"))
    }},ac=function(){var I,be,X,J,L,Q,bE,N,Y,V=this.data,bF=this.t.style,H=V.perspective,ae=V.scaleX,bC=0,U=0,bB=0,Z=0,G=V.scaleY,D=0,j=0,F=0,E=0,bD=V.scaleZ,z=0,W=0,q=0,p=H?-1/H:0,M=V.rotation,K=V.zOrigin,B=100000;
    av&&(bE=bF.top?"top":bF.bottom?"bottom":parseFloat(bf(this.t,"top",null,!1))?"bottom":"top",X=bf(this.t,bE,null,!1),N=parseFloat(X)||0,Y=X.substr((N+"").length)||"px",V._ffFix=!V._ffFix,bF[bE]=(V._ffFix?N+0.05:N-0.05)+Y),(M||V.skewX)&&(X=ae*Math.cos(M),J=G*Math.sin(M),M-=V.skewX,bC=ae*-Math.sin(M),G*=Math.cos(M),ae=X,Z=J),M=V.rotationY,M&&(I=Math.cos(M),be=Math.sin(M),X=ae*I,J=Z*I,L=bD*-be,Q=p*-be,U=ae*be,D=Z*be,bD*=I,p*=I,ae=X,Z=J,F=L,W=Q),M=V.rotationX,M&&(I=Math.cos(M),be=Math.sin(M),X=bC*I+U*be,J=G*I+D*be,L=E*I+bD*be,Q=q*I+p*be,U=bC*-be+U*I,D=G*-be+D*I,bD=E*-be+bD*I,p=q*-be+p*I,bC=X,G=J,E=L,q=Q),K&&(z-=K,bB=U*z,j=D*z,z=bD*z+K),bB=(X=(bB+=V.x)-(bB|=0))?(0|X*B+(0>X?-0.5:0.5))/B+bB:bB,j=(X=(j+=V.y)-(j|=0))?(0|X*B+(0>X?-0.5:0.5))/B+j:j,z=(X=(z+=V.z)-(z|=0))?(0|X*B+(0>X?-0.5:0.5))/B+z:z,bF[bt]="matrix3d("+[(0|ae*B)/B,(0|Z*B)/B,(0|F*B)/B,(0|W*B)/B,(0|bC*B)/B,(0|G*B)/B,(0|E*B)/B,(0|q*B)/B,(0|U*B)/B,(0|D*B)/B,(0|bD*B)/B,(0|p*B)/B,bB,j,z,H?1+-z/H:1].join(",")+")"
    },af=function(){var v,k,g,w,b,d,m,c,j,f=this.data,p=this.t,q=p.style;
    av&&(v=q.top?"top":q.bottom?"bottom":parseFloat(bf(p,"top",null,!1))?"bottom":"top",k=bf(p,v,null,!1),g=parseFloat(k)||0,w=k.substr((g+"").length)||"px",f._ffFix=!f._ffFix,q[v]=(f._ffFix?g+0.05:g-0.05)+w),f.rotation||f.skewX?(b=f.rotation,d=b-f.skewX,m=100000,c=f.scaleX*m,j=f.scaleY*m,q[bt]="matrix("+(0|Math.cos(b)*c)/m+","+(0|Math.sin(b)*c)/m+","+(0|Math.sin(d)*-j)/m+","+(0|Math.cos(d)*j)/m+","+f.x+","+f.y+")"):q[bt]="matrix("+f.scaleX+",0,0,"+f.scaleY+","+f.x+","+f.y+")"
    };
    ag("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation",{parser:function(r,H,D,w,A,K,z){if(w._transform){return A
    }var E,C,L,q,x,G,J,B=w._transform=aY(r,ar,!0),I=r.style,F=0.000001,k=ai.length,j=z,b={};
    if("string"==typeof j.transform&&bt){L=I.cssText,I[bt]=j.transform,I.display="block",E=aY(r,null,!1),I.cssText=L
    }else{if("object"==typeof j){if(E={scaleX:br(null!=j.scaleX?j.scaleX:j.scale,B.scaleX),scaleY:br(null!=j.scaleY?j.scaleY:j.scale,B.scaleY),scaleZ:br(null!=j.scaleZ?j.scaleZ:j.scale,B.scaleZ),x:br(j.x,B.x),y:br(j.y,B.y),z:br(j.z,B.z),perspective:br(j.transformPerspective,B.perspective)},J=j.directionalRotation,null!=J){if("object"==typeof J){for(L in J){j[L]=J[L]
    }}else{j.rotation=J
    }}E.rotation=by("rotation" in j?j.rotation:"shortRotation" in j?j.shortRotation+"_short":"rotationZ" in j?j.rotationZ:B.rotation*bb,B.rotation,"rotation",b),bz&&(E.rotationX=by("rotationX" in j?j.rotationX:"shortRotationX" in j?j.shortRotationX+"_short":B.rotationX*bb||0,B.rotationX,"rotationX",b),E.rotationY=by("rotationY" in j?j.rotationY:"shortRotationY" in j?j.shortRotationY+"_short":B.rotationY*bb||0,B.rotationY,"rotationY",b)),E.skewX=null==j.skewX?B.skewX:by(j.skewX,B.skewX),E.skewY=null==j.skewY?B.skewY:by(j.skewY,B.skewY),(C=E.skewY-B.skewY)&&(E.skewX+=C,E.rotation+=C)
    }}for(x=B.z||B.rotationX||B.rotationY||E.z||E.rotationX||E.rotationY||E.perspective,x||null==j.scale||(E.scaleZ=1);
    --k>-1;
    ){D=ai[k],q=E[D]-B[D],(q>F||-F>q||null!=bg[D])&&(G=!0,A=new ah(B,D,B[D],q,A),D in b&&(A.e=b[D]),A.xs0=0,A.plugin=K,w._overwriteProps.push(A.n))
    }return q=j.transformOrigin,(q||bz&&x&&B.zOrigin)&&(bt?(G=!0,q=(q||bf(r,D,ar,!1,"50% 50%"))+"",D=ad,A=new ah(I,D,0,0,A,-1,"css_transformOrigin"),A.b=I[D],A.plugin=K,bz?(L=B.zOrigin,q=q.split(" "),B.zOrigin=(q.length>2?parseFloat(q[2]):L)||0,A.xs0=A.e=I[D]=q[0]+" "+(q[1]||"50%")+" 0px",A=new ah(B,"zOrigin",0,0,A,-1,A.n),A.b=L,A.xs0=A.e=B.zOrigin):A.xs0=A.e=I[D]=q):ab(q+"",B)),G&&(w._transformType=x||3===this._transformType?3:2),A
    },prefix:!0}),ag("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ag("borderRadius",{defaultValue:"0px",parser:function(B,L,H,E,Q){L=this.format(L);
    var D,I,G,R,A,C,K,N,F,M,J,z,q,j,s,r,O=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],k=B.style;
    for(F=parseFloat(B.offsetWidth),M=parseFloat(B.offsetHeight),D=L.split(" "),I=0;
    O.length>I;
    I++){this.p.indexOf("border")&&(O[I]=aV(O[I])),A=R=bf(B,O[I],ar,!1,"0px"),-1!==A.indexOf(" ")&&(R=A.split(" "),A=R[0],R=R[1]),C=G=D[I],K=parseFloat(A),z=A.substr((K+"").length),q="="===C.charAt(1),q?(N=parseInt(C.charAt(0)+"1",10),C=C.substr(2),N*=parseFloat(C),J=C.substr((N+"").length-(0>N?1:0))||""):(N=parseFloat(C),J=C.substr((N+"").length)),""===J&&(J=aq[H]||z),J!==z&&(j=bs(B,"borderLeft",K,z),s=bs(B,"borderTop",K,z),"%"===J?(A=100*(j/F)+"%",R=100*(s/M)+"%"):"em"===J?(r=bs(B,"borderLeft",1,"em"),A=j/r+"em",R=s/r+"em"):(A=j+"px",R=s+"px"),q&&(C=parseFloat(A)+N+J,G=parseFloat(R)+N+J)),Q=bv(k,O[I],A+" "+R,C+" "+G,!1,"0px",Q)
    }return Q
    },prefix:!0,formatter:bx("0px 0px 0px 0px",!1,!0)}),ag("backgroundPosition",{defaultValue:"0 0",parser:function(D,y,r,E,j,A){var c,v,q,B,C,b,x="background-position",k=ar||aR(D,null),z=this.format((k?aL?k.getPropertyValue(x+"-x")+" "+k.getPropertyValue(x+"-y"):k.getPropertyValue(x):D.currentStyle.backgroundPositionX+" "+D.currentStyle.backgroundPositionY)||"0 0"),w=this.format(y);
    if(-1!==z.indexOf("%")!=(-1!==w.indexOf("%"))&&(b=bf(D,"backgroundImage").replace(a0,""),b&&"none"!==b)){for(c=z.split(" "),v=w.split(" "),a8.setAttribute("src",b),q=2;
    --q>-1;
    ){z=c[q],B=-1!==z.indexOf("%"),B!==(-1!==v[q].indexOf("%"))&&(C=0===q?D.offsetWidth-a8.width:D.offsetHeight-a8.height,c[q]=B?parseFloat(z)/100*C+"px":100*(parseFloat(z)/C)+"%")
    }z=c.join(" ")
    }return this.parseComplex(D.style,z,w,j,A)
    },formatter:ab}),ag("backgroundSize",{defaultValue:"0 0",formatter:ab}),ag("perspective",{defaultValue:"0px",prefix:!0}),ag("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ag("transformStyle",{prefix:!0}),ag("backfaceVisibility",{prefix:!0}),ag("margin",{parser:aa("marginTop,marginRight,marginBottom,marginLeft")}),ag("padding",{parser:aa("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ag("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(m,j,f,p,c,k){var b,g,d;
    return 9>aL?(g=m.currentStyle,d=8>aL?" ":",",b="rect("+g.clipTop+d+g.clipRight+d+g.clipBottom+d+g.clipLeft+")",j=this.format(j).split(",").join(d)):(b=this.format(bf(m,this.p,ar,!1,this.dflt)),j=this.format(j)),this.parseComplex(m.style,b,j,c,k)
    }}),ag("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ag("autoRound,strictUnits",{parser:function(b,f,a,c,d){return d
    }}),ag("border",{defaultValue:"0px solid #000",parser:function(d,g,c,f,h,b){return this.parseComplex(d.style,this.format(bf(d,"borderTopWidth",ar,!1,"0px")+" "+bf(d,"borderTopStyle",ar,!1,"solid")+" "+bf(d,"borderTopColor",ar,!1,"#000")),this.format(g),h,b)
    },color:!0,formatter:function(a){var b=a.split(" ");
    return b[0]+" "+(b[1]||"solid")+" "+(a.match(a4)||["#000"])[0]
    }}),ag("float,cssFloat,styleFloat",{parser:function(d,h,c,f,g){var j=d.style,b="cssFloat" in j?"cssFloat":"styleFloat";
    return new ah(j,b,0,0,g,-1,c,!1,0,j[b],h)
    }});
    var bA=function(b){var f,a=this.t,c=a.filter,d=0|this.s+this.c*b;
    100===d&&(-1===c.indexOf("atrix(")&&-1===c.indexOf("radient(")?(a.removeAttribute("filter"),f=!bf(this.data,"filter")):(a.filter=c.replace(al,""),f=!0)),f||(this.xn1&&(a.filter=c=c||"alpha(opacity=100)"),-1===c.indexOf("opacity")?a.filter+=" alpha(opacity="+d+")":a.filter=c.replace(aX,"opacity="+d))
    };
    ag("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(m,j,f,p,c,k){var b,g=parseFloat(bf(m,"opacity",ar,!1,"1")),d=m.style;
    return j=parseFloat(j),"autoAlpha"===f&&(b=bf(m,"visibility",ar),1===g&&"hidden"===b&&0!==j&&(g=0),c=new ah(d,"visibility",0,0,c,-1,null,!1,0,0!==g?"visible":"hidden",0===j?"hidden":"visible"),c.xs0="visible",p._overwriteProps.push(c.n)),aj?c=new ah(d,"opacity",g,j-g,c):(c=new ah(d,"opacity",100*g,100*(j-g),c),c.xn1="autoAlpha"===f?1:0,d.zoom=1,c.type=2,c.b="alpha(opacity="+c.s+")",c.e="alpha(opacity="+(c.s+c.c)+")",c.data=m,c.plugin=k,c.setRatio=bA),c
    }});
    var bw=function(a,b){b&&(a.removeProperty?a.removeProperty(b.replace(a2,"-$1").toLowerCase()):a.removeAttribute(b))
    },a6=function(b){if(this.t._gsClassPT=this,1===b||0===b){this.t.className=0===b?this.b:this.e;
    for(var c=this.data,a=this.t.style;
    c;
    ){c.v?a[c.p]=c.v:bw(a,c.p),c=c._next
    }1===b&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)
    }else{this.t.className!==this.e&&(this.t.className=this.e)
    }};
    ag("className",{parser:function(z,r,A,g,w,d,k){var j,x,y,b,q,v=z.className,i=z.style.cssText;
    if(w=g._classNamePT=new ah(z,A,0,0,w,2),w.setRatio=a6,w.pr=-11,aE=!0,w.b=v,x=aU(z,ar),y=z._gsClassPT){for(b={},q=y.data;
    q;
    ){b[q.p]=1,q=q._next
    }y.setRatio(1)
    }return z._gsClassPT=w,w.e="="!==r.charAt(1)?r:v.replace(RegExp("\\s*\\b"+r.substr(2)+"\\b"),"")+("+"===r.charAt(0)?" "+r.substr(2):""),g._tween._duration&&(z.className=w.e,j=bd(z,x,aU(z),k,b),z.className=v,w.data=j.firstMPT,z.style.cssText=i,w=w.xfirst=g.parse(z,j.difs,w,d)),w
    }});
    var bk=function(d){if((1===d||0===d)&&this.data._totalTime===this.data._totalDuration){for(var h,c="all"===this.e,f=this.t.style,g=c?f.cssText.split(";"):this.e.split(","),j=g.length,b=aw.transform.parse;
    --j>-1;
    ){h=g[j],c&&(h=h.substr(0,h.indexOf(":")).split(" ").join("")),aw[h]&&(h=aw[h].parse===b?bt:aw[h].p),bw(f,h)
    }}};
    for(ag("clearProps",{parser:function(a,d,b,c,f){return f=new ah(a,b,0,0,f,2),f.setRatio=bk,f.e=d,f.pr=-10,f.data=c._tween,aE=!0,f
    }}),aF="bezier,throwProps,physicsProps,physics2D".split(","),at=aF.length;
    at--;
    ){bp(aF[at])
    }aF=aP.prototype,aF._firstPT=null,aF._onInitTween=function(w,l,b){if(!w.nodeType){return !1
    }this._target=w,this._tween=b,this._vars=l,aB=l.autoRound,aE=!1,aq=l.suffixMap||aP.suffixMap,ar=aR(w,""),ax=this._overwriteProps;
    var j,a,q,f,n,k,u,r,i,s=w.style;
    if(aQ&&""===s.zIndex&&(j=bf(w,"zIndex",ar),("auto"===j||""===j)&&(s.zIndex=0)),"string"==typeof l&&(f=s.cssText,j=aU(w,ar),s.cssText=f+";"+l,j=bd(w,j,aU(w)).difs,!aj&&am.test(l)&&(j.opacity=parseFloat(RegExp.$1)),l=j,s.cssText=f),this._firstPT=a=this.parse(w,l,null),this._transformType){for(i=3===this._transformType,bt?ao&&(aQ=!0,""===s.zIndex&&(u=bf(w,"zIndex",ar),("auto"===u||""===u)&&(s.zIndex=0)),aI&&(s.WebkitBackfaceVisibility=this._vars.WebkitBackfaceVisibility||(i?"visible":"hidden"))):s.zoom=1,q=a;
    q&&q._next;
    ){q=q._next
    }r=new ah(w,"transform",0,0,null,2),this._linkCSSP(r,null,q),r.setRatio=i&&bz?ac:bt?af:aN,r.data=this._transform||aY(w,ar,!0),ax.pop()
    }if(aE){for(;
    a;
    ){for(k=a._next,q=f;
    q&&q.pr>a.pr;
    ){q=q._next
    }(a._prev=q?q._prev:n)?a._prev._next=a:f=a,(a._next=q)?q._prev=a:n=a,a=k
    }this._firstPT=f
    }return !0
    },aF.parse=function(C,s,l,j){var y,o,A,B,b,r,x,k,w,q,z=C.style;
    for(y in s){r=s[y],o=aw[y],o?l=o.parse(C,r,y,this,l,j,s):(b=bf(C,y,ar)+"",w="string"==typeof r,"color"===y||"fill"===y||"stroke"===y||-1!==y.indexOf("Color")||w&&aO.test(r)?(w||(r=aG(r),r=(r.length>3?"rgba(":"rgb(")+r.join(",")+")"),l=bv(z,y,b,r,!0,"transparent",l,0,j)):!w||-1===r.indexOf(" ")&&-1===r.indexOf(",")?(A=parseFloat(b),x=A||0===A?b.substr((A+"").length):"",(""===b||"auto"===b)&&("width"===y||"height"===y?(A=bj(C,y,ar),x="px"):"left"===y||"top"===y?(A=a1(C,y,ar),x="px"):(A="opacity"!==y?0:1,x="")),q=w&&"="===r.charAt(1),q?(B=parseInt(r.charAt(0)+"1",10),r=r.substr(2),B*=parseFloat(r),k=r.replace(ak,"")):(B=parseFloat(r),k=w?r.substr((B+"").length)||"":""),""===k&&(k=aq[y]||x),r=B||0===B?(q?B+A:B)+k:s[y],x!==k&&""!==k&&(B||0===B)&&(A||0===A)&&(A=bs(C,y,A,x),"%"===k?(A/=bs(C,y,100,"%")/100,A>100&&(A=100),s.strictUnits!==!0&&(b=A+"%")):"em"===k?A/=bs(C,y,1,"em"):(B=bs(C,y,B,k),k="px"),q&&(B||0===B)&&(r=B+A+k)),q&&(B+=A),!A&&0!==A||!B&&0!==B?void 0!==z[y]&&(r||"NaN"!=r+""&&null!=r)?(l=new ah(z,y,B||A||0,0,l,-1,"css_"+y,!1,0,b,r),l.xs0="none"!==r||"display"!==y&&-1===y.indexOf("Style")?r:b):bm("invalid "+y+" tween value: "+s[y]):(l=new ah(z,y,A,B-A,l,0,"css_"+y,aB!==!1&&("px"===k||"zIndex"===y),0,b,r),l.xs0=k)):l=bv(z,y,b,r,!0,null,l,0,j)),j&&l&&!l.plugin&&(l.plugin=j)
    }return l
    },aF.setRatio=function(b){var f,a,c,d=this._firstPT,g=0.000001;
    if(1!==b||this._tween._time!==this._tween._duration&&0!==this._tween._time){if(b||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-0.000001){for(;
    d;
    ){if(f=d.c*b+d.s,d.r?f=f>0?0|f+0.5:0|f-0.5:g>f&&f>-g&&(f=0),d.type){if(1===d.type){if(c=d.l,2===c){d.t[d.p]=d.xs0+f+d.xs1+d.xn1+d.xs2
    }else{if(3===c){d.t[d.p]=d.xs0+f+d.xs1+d.xn1+d.xs2+d.xn2+d.xs3
    }else{if(4===c){d.t[d.p]=d.xs0+f+d.xs1+d.xn1+d.xs2+d.xn2+d.xs3+d.xn3+d.xs4
    }else{if(5===c){d.t[d.p]=d.xs0+f+d.xs1+d.xn1+d.xs2+d.xn2+d.xs3+d.xn3+d.xs4+d.xn4+d.xs5
    }else{for(a=d.xs0+f+d.xs1,c=1;
    d.l>c;
    c++){a+=d["xn"+c]+d["xs"+(c+1)]
    }d.t[d.p]=a
    }}}}}else{-1===d.type?d.t[d.p]=d.xs0:d.setRatio&&d.setRatio(b)
    }}else{d.t[d.p]=f+d.xs0
    }d=d._next
    }}else{for(;
    d;
    ){2!==d.type?d.t[d.p]=d.b:d.setRatio(b),d=d._next
    }}}else{for(;
    d;
    ){2!==d.type?d.t[d.p]=d.e:d.setRatio(b),d=d._next
    }}},aF._enableTransforms=function(a){this._transformType=a||3===this._transformType?3:2
    },aF._linkCSSP=function(b,d,a,c){return b&&(d&&(d._prev=b),b._next&&(b._next._prev=b._prev),a?a._next=b:c||null!==this._firstPT||(this._firstPT=b),b._prev?b._prev._next=b._next:this._firstPT===b&&(this._firstPT=b._next),b._next=d,b._prev=a),b
    },aF._kill=function(d){var a,b,c,f=d;
    if(d.css_autoAlpha||d.css_alpha){f={};
    for(b in d){f[b]=d[b]
    }f.css_opacity=1,f.css_autoAlpha&&(f.css_visibility=1)
    }return d.css_className&&(a=this._classNamePT)&&(c=a.xfirst,c&&c._prev?this._linkCSSP(c._prev,a._next,c._prev._prev):c===this._firstPT&&(this._firstPT=a._next),a._next&&this._linkCSSP(a._next,a._next._next,c._prev),this._classNamePT=null),ap.prototype._kill.call(this,f)
    };
    var aA=function(d,h,c){var f,g,j,b;
    if(d.slice){for(g=d.length;
    --g>-1;
    ){aA(d[g],h,c)
    }}else{for(f=d.childNodes,g=f.length;
    --g>-1;
    ){j=f[g],b=j.type,j.style&&(h.push(aU(j)),c&&c.push(j)),1!==b&&9!==b&&11!==b||!j.childNodes.length||aA(j,h,c)
    }}};
    return aP.cascadeTo=function(v,g,w){var b,e,k,d=aJ.to(v,g,w),j=[d],f=[],m=[],q=[],c=aJ._internals.reservedProps;
    for(v=d._targets||d.target,aA(v,f,q),d.render(g,!0),aA(v,m),d.render(0,!0),d._enabled(!0),b=q.length;
    --b>-1;
    ){if(e=bd(q[b],f[b],m[b]),e.firstMPT){e=e.difs;
    for(k in w){c[k]&&(e[k]=w[k])
    }j.push(aJ.to(q[b],g,e))
    }}return j
    },ap.activate([aP]),aP
    },!0),function(){var a=window._gsDefine.plugin({propName:"roundProps",priority:-1,API:2,init:function(d,f,c){return this._tween=c,!0
    }}),b=a.prototype;
    b._onInitAllProps=function(){for(var f,j,d,g=this._tween,h=g.vars.roundProps instanceof Array?g.vars.roundProps:g.vars.roundProps.split(","),l=h.length,c={},k=g._propLookup.roundProps;
    --l>-1;
    ){c[h[l]]=1
    }for(l=h.length;
    --l>-1;
    ){for(f=h[l],j=g._firstPT;
    j;
    ){d=j._next,j.pg?j.t._roundProps(c,!0):j.n===f&&(this._add(j.t,f,j.s,j.c),d&&(d._prev=j._prev),j._prev?j._prev._next=d:g._firstPT===j&&(g._firstPT=d),j._next=j._prev=null,g._propLookup[f]=k),j=d
    }}return !1
    },b._add=function(d,g,c,f){this._addTween(d,g,c,c+f,g,!0),this._overwriteProps.push(g)
    }
    }(),window._gsDefine.plugin({propName:"attr",API:2,init:function(b,c){var a;
    if("function"!=typeof b.setAttribute){return !1
    }this._target=b,this._proxy={};
    for(a in c){this._addTween(this._proxy,a,parseFloat(b.getAttribute(a)),c[a],a),this._overwriteProps.push(a)
    }return !0
    },set:function(b){this._super.setRatio.call(this,b);
    for(var d,a=this._overwriteProps,c=a.length;
    --c>-1;
    ){d=a[c],this._target.setAttribute(d,this._proxy[d]+"")
    }}}),window._gsDefine.plugin({propName:"directionalRotation",API:2,init:function(p,k){"object"!=typeof k&&(k={rotation:k}),this.finals={};
    var g,q,b,d,m,c,j=k.useRadians===!0?2*Math.PI:360,f=0.000001;
    for(g in k){"useRadians"!==g&&(c=(k[g]+"").split("_"),q=c[0],b=parseFloat("function"!=typeof p[g]?p[g]:p[g.indexOf("set")||"function"!=typeof p["get"+g.substr(3)]?g:"get"+g.substr(3)]()),d=this.finals[g]="string"==typeof q&&"="===q.charAt(1)?b+parseInt(q.charAt(0)+"1",10)*Number(q.substr(2)):Number(q)||0,m=d-b,c.length&&(q=c.join("_"),-1!==q.indexOf("short")&&(m%=j,m!==m%(j/2)&&(m=0>m?m+j:m-j)),-1!==q.indexOf("_cw")&&0>m?m=(m+9999999999*j)%j-(0|m/j)*j:-1!==q.indexOf("ccw")&&m>0&&(m=(m-9999999999*j)%j-(0|m/j)*j)),(m>f||-f>m)&&(this._addTween(p,g,b,b+m,g),this._overwriteProps.push(g)))
    }return !0
    },set:function(a){var b;
    if(1!==a){this._super.setRatio.call(this,a)
    }else{for(b=this._firstPT;
    b;
    ){b.f?b.t[b.p](this.finals[b.p]):b.t[b.p]=this.finals[b.p],b=b._next
    }}}})._autoCSS=!0,window._gsDefine("easing.Back",["easing.Ease"],function(F){var z,w,G,b=window.GreenSockGlobals||window,k=b.com.greensock,C=2*Math.PI,j=Math.PI/2,x=k._class,v=function(f,a){var c=x("easing."+f,function(){},!0),d=c.prototype=new F;
    return d.constructor=c,d.getRatio=a,c
    },D=F.register||function(){},E=function(c,h,a,d){var f=x("easing."+c,{easeOut:new h,easeIn:new a,easeInOut:new d},!0);
    return D(f,c),f
    },g=function(c,d,a){this.t=c,this.v=d,a&&(this.next=a,a.prev=this,this.c=a.v-d,this.gap=a.t-c)
    },y=function(f,a){var c=x("easing."+f,function(e){this._p1=e||0===e?e:1.70158,this._p2=1.525*this._p1
    },!0),d=c.prototype=new F;
    return d.constructor=c,d.getRatio=a,d.config=function(e){return new c(e)
    },c
    },B=E("Back",y("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1
    }),y("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)
    }),y("BackInOut",function(a){return 1>(a*=2)?0.5*a*a*((this._p2+1)*a-this._p2):0.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)
    })),q=x("easing.SlowMo",function(c,d,a){d=d||0===d?d:0.7,null==c?c=0.7:c>1&&(c=1),this._p=1!==c?d:0,this._p1=(1-c)/2,this._p2=c,this._p3=this._p1+this._p2,this._calcEnd=a===!0
    },!0),A=q.prototype=new F;
    return A.constructor=q,A.getRatio=function(a){var c=a+(0.5-a)*this._p;
    return this._p1>a?this._calcEnd?1-(a=1-a/this._p1)*a:c-(a=1-a/this._p1)*a*a*a*c:a>this._p3?this._calcEnd?1-(a=(a-this._p3)/this._p1)*a:c+(a-c)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:c
    },q.ease=new q(0.7,0.7),A.config=q.config=function(c,d,a){return new q(c,d,a)
    },z=x("easing.SteppedEase",function(a){a=a||1,this._p1=1/a,this._p2=a+1
    },!0),A=z.prototype=new F,A.constructor=z,A.getRatio=function(a){return 0>a?a=0:a>=1&&(a=0.999999999),(this._p2*a>>0)*this._p1
    },A.config=z.config=function(a){return new z(a)
    },w=x("easing.RoughEase",function(O){O=O||{};
    for(var K,U,p,H,R,t,L=O.taper||"none",J=[],S=0,T=0|(O.points||20),N=T,Q=O.randomize!==!1,I=O.clamp===!0,P=O.template instanceof F?O.template:null,M="number"==typeof O.strength?0.4*O.strength:0.4;
    --N>-1;
    ){K=Q?Math.random():1/T*N,U=P?P.getRatio(K):K,"none"===L?p=M:"out"===L?(H=1-K,p=H*H*M):"in"===L?p=K*K*M:0.5>K?(H=2*K,p=0.5*H*H*M):(H=2*(1-K),p=0.5*H*H*M),Q?U+=Math.random()*p-0.5*p:N%2?U+=0.5*p:U-=0.5*p,I&&(U>1?U=1:0>U&&(U=0)),J[S++]={x:K,y:U}
    }for(J.sort(function(a,c){return a.x-c.x
    }),t=new g(1,1,null),N=T;
    --N>-1;
    ){R=J[N],t=new g(R.x,R.y,t)
    }this._prev=new g(0,0,0!==t.t?t:t.next)
    },!0),A=w.prototype=new F,A.constructor=w,A.getRatio=function(a){var c=this._prev;
    if(a>c.t){for(;
    c.next&&a>=c.t;
    ){c=c.next
    }c=c.prev
    }else{for(;
    c.prev&&c.t>=a;
    ){c=c.prev
    }}return this._prev=c,c.v+(a-c.t)/c.gap*c.c
    },A.config=function(a){return new w(a)
    },w.ease=new w,E("Bounce",v("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+0.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375
    }),v("BounceIn",function(a){return 1/2.75>(a=1-a)?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+0.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+0.9375):1-(7.5625*(a-=2.625/2.75)*a+0.984375)
    }),v("BounceInOut",function(a){var c=0.5>a;
    return a=c?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+0.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375,c?0.5*(1-a):0.5*a+0.5
    })),E("Circ",v("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)
    }),v("CircIn",function(a){return -(Math.sqrt(1-a*a)-1)
    }),v("CircInOut",function(a){return 1>(a*=2)?-0.5*(Math.sqrt(1-a*a)-1):0.5*(Math.sqrt(1-(a-=2)*a)+1)
    })),G=function(f,a,c){var d=x("easing."+f,function(i,l){this._p1=i||1,this._p2=l||c,this._p3=this._p2/C*(Math.asin(1/this._p1)||0)
    },!0),h=d.prototype=new F;
    return h.constructor=d,h.getRatio=a,h.config=function(i,l){return new d(i,l)
    },d
    },E("Elastic",G("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*C/this._p2)+1
    },0.3),G("ElasticIn",function(a){return -(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*C/this._p2))
    },0.3),G("ElasticInOut",function(a){return 1>(a*=2)?-0.5*this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*C/this._p2):0.5*this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*C/this._p2)+1
    },0.45)),E("Expo",v("ExpoOut",function(a){return 1-Math.pow(2,-10*a)
    }),v("ExpoIn",function(a){return Math.pow(2,10*(a-1))-0.001
    }),v("ExpoInOut",function(a){return 1>(a*=2)?0.5*Math.pow(2,10*(a-1)):0.5*(2-Math.pow(2,-10*(a-1)))
    })),E("Sine",v("SineOut",function(a){return Math.sin(a*j)
    }),v("SineIn",function(a){return -Math.cos(a*j)+1
    }),v("SineInOut",function(a){return -0.5*(Math.cos(Math.PI*a)-1)
    })),x("easing.EaseLookup",{find:function(a){return F.map[a]
    }},!0),D(b.SlowMo,"SlowMo","ease,"),D(w,"RoughEase","ease,"),D(z,"SteppedEase","ease,"),B
    },!0)
    }),function(ak){var ay,au,al,am,ap,aC=ak.GreenSockGlobals||ak,ao=function(b){var d,a=b.split("."),c=aC;
    for(d=0;
    a.length>d;
    d++){c[a[d]]=c=c[a[d]]||{}
    }return c
    },av=ao("com.greensock"),ar=[].slice,aD=function(){},aj={},an=function(d,a,b,c){this.sc=aj[d]?aj[d].sc:[],aj[d]=this,this.gsClass=null,this.func=b;
    var f=[];
    this.check=function(k){for(var g,i,n,p,e=a.length,o=e;
    --e>-1;
    ){(g=aj[a[e]]||new an(a[e],[])).gsClass?(f[e]=g.gsClass,o--):k&&g.sc.push(this)
    }if(0===o&&b){for(i=("com.greensock."+d).split("."),n=i.pop(),p=ao(i.join("."))[n]=this.gsClass=b.apply(b,f),c&&(aC[n]=p,"function"==typeof define&&define.amd?define((ak.GreenSockAMDPath?ak.GreenSockAMDPath+"/":"")+d.split(".").join("/"),[],function(){return p
    }):"undefined"!=typeof module&&module.exports&&(module.exports=p)),e=0;
    this.sc.length>e;
    e++){this.sc[e].check()
    }}},this.check(!0)
    },ax=ak._gsDefine=function(b,d,a,c){return new an(b,d,a,c)
    },aA=av._class=function(b,c,a){return c=c||function(){},ax(b,[],function(){return c
    },a),c
    };
    ax.globals=aC;
    var aq=[0,0,1,1],az=[],aw=aA("easing.Ease",function(b,d,a,c){this._func=b,this._type=a||0,this._power=c||0,this._params=d?aq.concat(d):aq
    },!0),ai=aw.map={},af=aw.register=function(v,h,g,w){for(var b,d,k,c,f=h.split(","),m=f.length,p=(g||"easeIn,easeOut,easeInOut").split(",");
    --m>-1;
    ){for(d=f[m],b=w?aA("easing."+d,null,!0):av.easing[d]||{},k=p.length;
    --k>-1;
    ){c=p[k],ai[d+"."+c]=ai[c+d]=b[c]=v.getRatio?v:v[c]||new v
    }}};
    for(al=aw.prototype,al._calcEnd=!1,al.getRatio=function(b){if(this._func){return this._params[0]=b,this._func.apply(null,this._params)
    }var d=this._type,a=this._power,c=1===d?1-b:2===d?b:0.5>b?2*b:2*(1-b);
    return 1===a?c*=c:2===a?c*=c*c:3===a?c*=c*c*c:4===a&&(c*=c*c*c*c),1===d?1-c:2===d?c:0.5>b?c/2:1-c/2
    },ay=["Linear","Quad","Cubic","Quart","Quint,Strong"],au=ay.length;
    --au>-1;
    ){al=ay[au]+",Power"+au,af(new aw(null,null,1,au),al,"easeOut",!0),af(new aw(null,null,2,au),al,"easeIn"+(0===au?",easeNone":"")),af(new aw(null,null,3,au),al,"easeInOut")
    }ai.linear=av.easing.Linear.easeIn,ai.swing=av.easing.Quad.easeInOut;
    var B=aA("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this
    });
    al=B.prototype,al.addEventListener=function(n,g,d,p,k){k=k||0;
    var b,f,c=this._listeners[n],m=0;
    for(null==c&&(this._listeners[n]=c=[]),f=c.length;
    --f>-1;
    ){b=c[f],b.c===g&&b.s===d?c.splice(f,1):0===m&&k>b.pr&&(m=f+1)
    }c.splice(m,0,{c:g,s:d,up:p,pr:k}),this!==am||ap||am.wake()
    },al.removeEventListener=function(b,d){var a,c=this._listeners[b];
    if(c){for(a=c.length;
    --a>-1;
    ){if(c[a].c===d){return c.splice(a,1),void 0
    }}}},al.dispatchEvent=function(b){var f,a,c,d=this._listeners[b];
    if(d){for(f=d.length,a=this._eventTarget;
    --f>-1;
    ){c=d[f],c.up?c.c.call(c.s||a,{type:b,target:a}):c.c.call(c.s||a)
    }}};
    var ah=ak.requestAnimationFrame,ag=ak.cancelAnimationFrame,aB=Date.now||function(){return(new Date).getTime()
    };
    for(ay=["ms","moz","webkit","o"],au=ay.length;
    --au>-1&&!ah;
    ){ah=ak[ay[au]+"RequestAnimationFrame"],ag=ak[ay[au]+"CancelAnimationFrame"]||ak[ay[au]+"CancelRequestAnimationFrame"]
    }aA("Ticker",function(w,n){var g,x,r,c,k,d=this,v=aB(),b=n!==!1&&ah,m=function(a){d.time=(aB()-v)/1000;
    var h=r,f=d.time-k;
    (!g||f>0||a===!0)&&(d.frame++,k+=f+(f>=c?0.004:c-f),d.dispatchEvent("tick")),a!==!0&&h===r&&(r=x(m))
    };
    B.call(d),this.time=this.frame=0,this.tick=function(){m(!0)
    },this.sleep=function(){null!=r&&(b&&ag?ag(r):clearTimeout(r),x=aD,r=null,d===am&&(ap=!1))
    },this.wake=function(){null!==r&&d.sleep(),x=0===g?aD:b&&ah?ah:function(a){return setTimeout(a,0|1000*(k-d.time)+1)
    },d===am&&(ap=!0),m(2)
    },this.fps=function(a){return arguments.length?(g=a,c=1/(g||60),k=this.time+c,d.wake(),void 0):g
    },this.useRAF=function(a){return arguments.length?(d.sleep(),b=a,d.fps(g),void 0):b
    },d.fps(w),setTimeout(function(){b&&(!r||5>d.frame)&&d.useRAF(!1)
    },1500)
    }),al=av.Ticker.prototype=new av.events.EventDispatcher,al.constructor=av.Ticker;
    var J=aA("core.Animation",function(b,c){if(this.vars=c||{},this._duration=this._totalDuration=b||0,this._delay=Number(this.vars.delay)||0,this._timeScale=1,this._active=this.vars.immediateRender===!0,this.data=this.vars.data,this._reversed=this.vars.reversed===!0,Q){ap||am.wake();
    var a=this.vars.useFrames?aa:Q;
    a.add(this,a._time),this.vars.paused&&this.paused(!0)
    }});
    am=J.ticker=new av.Ticker,al=J.prototype,al._dirty=al._gc=al._initted=al._paused=!1,al._totalTime=al._time=0,al._rawPrevTime=-1,al._next=al._last=al._onUpdate=al._timeline=al.timeline=null,al._paused=!1,al.play=function(a,b){return arguments.length&&this.seek(a,b),this.reversed(!1).paused(!1)
    },al.pause=function(a,b){return arguments.length&&this.seek(a,b),this.paused(!0)
    },al.resume=function(a,b){return arguments.length&&this.seek(a,b),this.paused(!1)
    },al.seek=function(a,b){return this.totalTime(Number(a),b!==!1)
    },al.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)
    },al.reverse=function(a,b){return arguments.length&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)
    },al.render=function(){},al.invalidate=function(){return this
    },al._enabled=function(a,b){return ap||am.wake(),this._gc=!a,this._active=a&&!this._paused&&this._totalTime>0&&this._totalTime<this._totalDuration,b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1
    },al._kill=function(){return this._enabled(!1,!1)
    },al.kill=function(a,b){return this._kill(a,b),this
    },al._uncache=function(a){for(var b=a?this:this.timeline;
    b;
    ){b._dirty=!0,b=b.timeline
    }return this
    },al.eventCallback=function(b,f,a,c){if(null==b){return null
    }if("on"===b.substr(0,2)){var d,g=this.vars;
    if(1===arguments.length){return g[b]
    }if(null==f){delete g[b]
    }else{if(g[b]=f,g[b+"Params"]=a,g[b+"Scope"]=c,a){for(d=a.length;
    --d>-1;
    ){"{self}"===a[d]&&(a=g[b+"Params"]=a.concat(),a[d]=this)
    }}}"onUpdate"===b&&(this._onUpdate=f)
    }return this
    },al.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay
    },al.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)
    },al.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration
    },al.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time
    },al.totalTime=function(d,g,c){if(ap||am.wake(),!arguments.length){return this._totalTime
    }if(this._timeline){if(0>d&&!c&&(d+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();
    var f=this._totalDuration,b=this._timeline;
    if(d>f&&!c&&(d=f),this._startTime=(this._paused?this._pauseTime:b._time)-(this._reversed?f-d:d)/this._timeScale,b._dirty||this._uncache(!1),!b._active){for(;
    b._timeline;
    ){b.totalTime(b._totalTime,!0),b=b._timeline
    }}}this._gc&&this._enabled(!0,!1),this._totalTime!==d&&this.render(d,g,!1)
    }return this
    },al.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime
    },al.timeScale=function(b){if(!arguments.length){return this._timeScale
    }if(b=b||0.000001,this._timeline&&this._timeline.smoothChildTiming){var c=this._pauseTime,a=c||0===c?c:this._timeline.totalTime();
    this._startTime=a-(a-this._startTime)*this._timeScale/b
    }return this._timeScale=b,this._uncache(!1)
    },al.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._totalTime,!0)),this):this._reversed
    },al.paused=function(b){if(!arguments.length){return this._paused
    }if(b!=this._paused&&this._timeline){ap||b||am.wake();
    var c=this._timeline.rawTime(),a=c-this._pauseTime;
    !b&&this._timeline.smoothChildTiming&&(this._startTime+=a,this._uncache(!1)),this._pauseTime=b?c:null,this._paused=b,this._active=!b&&this._totalTime>0&&this._totalTime<this._totalDuration,b||0===a||0===this._duration||this.render(this._totalTime,!0,!0)
    }return this._gc&&!b&&this._enabled(!0,!1),this
    };
    var at=aA("core.SimpleTimeline",function(a){J.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0
    });
    al=at.prototype=new J,al.constructor=at,al.kill()._gc=!1,al._first=al._last=null,al._sortChildren=!1,al.add=al.insert=function(b,d){var a,c;
    if(b._startTime=Number(d||0)+b._delay,b._paused&&this!==b._timeline&&(b._pauseTime=b._startTime+(this.rawTime()-b._startTime)/b._timeScale),b.timeline&&b.timeline._remove(b,!0),b.timeline=b._timeline=this,b._gc&&b._enabled(!0,!0),a=this._last,this._sortChildren){for(c=b._startTime;
    a&&a._startTime>c;
    ){a=a._prev
    }}return a?(b._next=a._next,a._next=b):(b._next=this._first,this._first=b),b._next?b._next._prev=b:this._last=b,b._prev=a,this._timeline&&this._uncache(!0),this
    },al._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a.timeline=null,a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),this._timeline&&this._uncache(!0)),this
    },al.render=function(b,f,a){var c,d=this._first;
    for(this._totalTime=this._time=this._rawPrevTime=b;
    d;
    ){c=d._next,(d._active||b>=d._startTime&&!d._paused)&&(d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(b-d._startTime)*d._timeScale,f,a):d.render((b-d._startTime)*d._timeScale,f,a)),d=c
    }},al.rawTime=function(){return ap||am.wake(),this._totalTime
    };
    var H=aA("TweenLite",function(d,h,c){if(J.call(this,h,c),null==d){throw"Cannot tween a null target."
    }this.target=d="string"!=typeof d?d:H.selector(d)||d;
    var f,g,l,b=d.jquery||d.length&&d[0]&&d[0].nodeType&&d[0].style,k=this.vars.overwrite;
    if(this._overwrite=k=null==k?Z[H.defaultOverwrite]:"number"==typeof k?k>>0:Z[k],(b||d instanceof Array)&&"number"!=typeof d[0]){for(this._targets=l=ar.call(d,0),this._propLookup=[],this._siblings=[],f=0;
    l.length>f;
    f++){g=l[f],g?"string"!=typeof g?g.length&&g[0]&&g[0].nodeType&&g[0].style?(l.splice(f--,1),this._targets=l=l.concat(ar.call(g,0))):(this._siblings[f]=W(g,this,!1),1===k&&this._siblings[f].length>1&&j(g,this,null,1,this._siblings[f])):(g=l[f--]=H.selector(g),"string"==typeof g&&l.splice(f+1,1)):l.splice(f--,1)
    }}else{this._propLookup={},this._siblings=W(d,this,!1),1===k&&this._siblings.length>1&&j(d,this,null,1,this._siblings)
    }(this.vars.immediateRender||0===h&&0===this._delay&&this.vars.immediateRender!==!1)&&this.render(-this._delay,!1,!0)
    },!0),G=function(a){return a.length&&a[0]&&a[0].nodeType&&a[0].style
    },ad=function(b,d){var a,c={};
    for(a in b){Y[a]||a in d&&"x"!==a&&"y"!==a&&"width"!==a&&"height"!==a&&"className"!==a||!(!K[a]||K[a]&&K[a]._autoCSS)||(c[a]=b[a],delete b[a])
    }b.css=c
    };
    al=H.prototype=new J,al.constructor=H,al.kill()._gc=!1,al.ratio=0,al._firstPT=al._targets=al._overwrittenProps=al._startAt=null,al._notifyPluginsOfEnabled=!1,H.version="1.9.7",H.defaultEase=al._ease=new aw(null,null,1,1),H.defaultOverwrite="auto",H.ticker=am,H.autoSleep=!0,H.selector=ak.$||ak.jQuery||function(a){return ak.$?(H.selector=ak.$,ak.$(a)):ak.document?ak.document.getElementById("#"===a.charAt(0)?a.substr(1):a):a
    };
    var ac=H._internals={},K=H._plugins={},ab=H._tweenLookup={},V=0,Y=ac.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1},Z={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},aa=J._rootFramesTimeline=new at,Q=J._rootTimeline=new at;
    Q._startTime=am.time,aa._startTime=am.frame,Q._active=aa._active=!0,J._updateRoot=function(){if(Q.render((am.time-Q._startTime)*Q._timeScale,!1,!1),aa.render((am.frame-aa._startTime)*aa._timeScale,!1,!1),!(am.frame%120)){var b,c,a;
    for(a in ab){for(c=ab[a].tweens,b=c.length;
    --b>-1;
    ){c[b]._gc&&c.splice(b,1)
    }0===c.length&&delete ab[a]
    }if(a=Q._first,(!a||a._paused)&&H.autoSleep&&!aa._first&&1===am._listeners.tick.length){for(;
    a&&a._paused;
    ){a=a._next
    }a||am.sleep()
    }}},am.addEventListener("tick",J._updateRoot);
    var W=function(b,f,a){var c,d,g=b._gsTweenID;
    if(ab[g||(b._gsTweenID=g="t"+V++)]||(ab[g]={target:b,tweens:[]}),f&&(c=ab[g].tweens,c[d=c.length]=f,a)){for(;
    --d>-1;
    ){c[d]===f&&c.splice(d,1)
    }}return ab[g].tweens
    },j=function(C,x,m,D,b){var g,y,d,v;
    if(1===D||D>=4){for(v=b.length,g=0;
    v>g;
    g++){if((d=b[g])!==x){d._gc||d._enabled(!1,!1)&&(y=!0)
    }else{if(5===D){break
    }}}return y
    }var k,z=x._startTime+1e-10,A=[],c=0,w=0===x._duration;
    for(g=b.length;
    --g>-1;
    ){(d=b[g])===x||d._gc||d._paused||(d._timeline!==x._timeline?(k=k||q(x,0,w),0===q(d,k,w)&&(A[c++]=d)):z>=d._startTime&&d._startTime+d.totalDuration()/d._timeScale+1e-10>z&&((w||!d._initted)&&2e-10>=z-d._startTime||(A[c++]=d)))
    }for(g=c;
    --g>-1;
    ){d=A[g],2===D&&d._kill(m,C)&&(y=!0),(2!==D||!d._firstPT&&d._initted)&&d._enabled(!1,!1)&&(y=!0)
    }return y
    },q=function(d,h,c){for(var f=d._timeline,g=f._timeScale,k=d._startTime,b=1e-10;
    f._timeline;
    ){if(k+=f._startTime,g*=f._timeScale,f._paused){return -100
    }f=f._timeline
    }return k/=g,k>h?k-h:c&&k===h||!d._initted&&2*b>k-h?b:(k+=d.totalDuration()/d._timeScale/g)>h+b?0:k-h-b
    };
    al._init=function(){var d,h,c,f,g=this.vars,l=this._overwrittenProps,b=this._duration,k=g.ease;
    if(g.startAt){if(g.startAt.overwrite=0,g.startAt.immediateRender=!0,this._startAt=H.to(this.target,0,g.startAt),g.immediateRender&&(this._startAt=null,0===this._time&&0!==b)){return
    }}else{if(g.runBackwards&&g.immediateRender&&0!==b){if(this._startAt){this._startAt.render(-1,!0),this._startAt=null
    }else{if(0===this._time){c={};
    for(f in g){Y[f]&&"autoCSS"!==f||(c[f]=g[f])
    }return c.overwrite=0,this._startAt=H.to(this.target,0,c),void 0
    }}}}if(this._ease=k?k instanceof aw?g.easeParams instanceof Array?k.config.apply(k,g.easeParams):k:"function"==typeof k?new aw(k,g.easeParams):ai[k]||H.defaultEase:H.defaultEase,this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets){for(d=this._targets.length;
    --d>-1;
    ){this._initProps(this._targets[d],this._propLookup[d]={},this._siblings[d],l?l[d]:null)&&(h=!0)
    }}else{h=this._initProps(this.target,this._propLookup,this._siblings,l)
    }if(h&&H._onPluginEvent("_onInitAllProps",this),l&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),g.runBackwards){for(c=this._firstPT;
    c;
    ){c.s+=c.c,c.c=-c.c,c=c._next
    }}this._onUpdate=g.onUpdate,this._initted=!0
    },al._initProps=function(v,m,g,w){var b,d,p,c,k,f,u;
    if(null==v){return !1
    }this.vars.css||v.style&&v.nodeType&&K.css&&this.vars.autoCSS!==!1&&ad(this.vars,v);
    for(b in this.vars){if(Y[b]){if(("onStartParams"===b||"onUpdateParams"===b||"onCompleteParams"===b||"onReverseCompleteParams"===b||"onRepeatParams"===b)&&(k=this.vars[b])){for(d=k.length;
    --d>-1;
    ){"{self}"===k[d]&&(k=this.vars[b]=k.concat(),k[d]=this)
    }}}else{if(K[b]&&(c=new K[b])._onInitTween(v,this.vars[b],this)){for(this._firstPT=f={_next:this._firstPT,t:c,p:"setRatio",s:0,c:1,f:!0,n:b,pg:!0,pr:c._priority},d=c._overwriteProps.length;
    --d>-1;
    ){m[c._overwriteProps[d]]=this._firstPT
    }(c._priority||c._onInitAllProps)&&(p=!0),(c._onDisable||c._onEnable)&&(this._notifyPluginsOfEnabled=!0)
    }else{this._firstPT=m[b]=f={_next:this._firstPT,t:v,p:b,f:"function"==typeof v[b],n:b,pg:!1,pr:0},f.s=f.f?v[b.indexOf("set")||"function"!=typeof v["get"+b.substr(3)]?b:"get"+b.substr(3)]():parseFloat(v[b]),u=this.vars[b],f.c="string"==typeof u&&"="===u.charAt(1)?parseInt(u.charAt(0)+"1",10)*Number(u.substr(2)):Number(u)-f.s||0
    }}f&&f._next&&(f._next._prev=f)
    }return w&&this._kill(w,v)?this._initProps(v,m,g,w):this._overwrite>1&&this._firstPT&&g.length>1&&j(v,this,m,this._overwrite,g)?(this._kill(m,v),this._initProps(v,m,g,w)):p
    },al.render=function(u,m,g){var v,b,d,p=this._time;
    if(u>=this._duration){this._totalTime=this._time=this._duration,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(v=!0,b="onComplete"),0===this._duration&&((0===u||0>this._rawPrevTime)&&this._rawPrevTime!==u&&(g=!0,this._rawPrevTime>0&&(b="onReverseComplete",m&&(u=-1))),this._rawPrevTime=u)
    }else{if(1e-7>u){this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==p||0===this._duration&&this._rawPrevTime>0)&&(b="onReverseComplete",v=this._reversed),0>u?(this._active=!1,0===this._duration&&(this._rawPrevTime>=0&&(g=!0),this._rawPrevTime=u)):this._initted||(g=!0)
    }else{if(this._totalTime=this._time=u,this._easeType){var c=u/this._duration,k=this._easeType,f=this._easePower;
    (1===k||3===k&&c>=0.5)&&(c=1-c),3===k&&(c*=2),1===f?c*=c:2===f?c*=c*c:3===f?c*=c*c*c:4===f&&(c*=c*c*c*c),this.ratio=1===k?1-c:2===k?c:0.5>u/this._duration?c/2:1-c/2
    }else{this.ratio=this._ease.getRatio(u/this._duration)
    }}}if(this._time!==p||g){if(!this._initted){if(this._init(),!this._initted){return
    }this._time&&!v?this.ratio=this._ease.getRatio(this._time/this._duration):v&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))
    }for(this._active||this._paused||(this._active=!0),0===p&&(this._startAt&&(u>=0?this._startAt.render(u,m,g):b||(b="_dummyGS")),this.vars.onStart&&(0!==this._time||0===this._duration)&&(m||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||az))),d=this._firstPT;
    d;
    ){d.f?d.t[d.p](d.c*this.ratio+d.s):d.t[d.p]=d.c*this.ratio+d.s,d=d._next
    }this._onUpdate&&(0>u&&this._startAt&&this._startAt.render(u,m,g),m||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||az)),b&&(this._gc||(0>u&&this._startAt&&!this._onUpdate&&this._startAt.render(u,m,g),v&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!m&&this.vars[b]&&this.vars[b].apply(this.vars[b+"Scope"]||this,this.vars[b+"Params"]||az)))
    }},al._kill=function(u,m){if("all"===u&&(u=null),null==u&&(null==m||m===this.target)){return this._enabled(!1,!1)
    }m="string"!=typeof m?m||this._targets||this.target:H.selector(m)||m;
    var g,v,b,d,p,c,k,f;
    if((m instanceof Array||G(m))&&"number"!=typeof m[0]){for(g=m.length;
    --g>-1;
    ){this._kill(u,m[g])&&(c=!0)
    }}else{if(this._targets){for(g=this._targets.length;
    --g>-1;
    ){if(m===this._targets[g]){p=this._propLookup[g]||{},this._overwrittenProps=this._overwrittenProps||[],v=this._overwrittenProps[g]=u?this._overwrittenProps[g]||{}:"all";
    break
    }}}else{if(m!==this.target){return !1
    }p=this._propLookup,v=this._overwrittenProps=u?this._overwrittenProps||{}:"all"
    }if(p){k=u||p,f=u!==v&&"all"!==v&&u!==p&&(null==u||u._tempKill!==!0);
    for(b in k){(d=p[b])&&(d.pg&&d.t._kill(k)&&(c=!0),d.pg&&0!==d.t._overwriteProps.length||(d._prev?d._prev._next=d._next:d===this._firstPT&&(this._firstPT=d._next),d._next&&(d._next._prev=d._prev),d._next=d._prev=null),delete p[b]),f&&(v[b]=1)
    }!this._firstPT&&this._initted&&this._enabled(!1,!1)
    }}return c
    },al.invalidate=function(){return this._notifyPluginsOfEnabled&&H._onPluginEvent("_onDisable",this),this._firstPT=null,this._overwrittenProps=null,this._onUpdate=null,this._startAt=null,this._initted=this._active=this._notifyPluginsOfEnabled=!1,this._propLookup=this._targets?{}:[],this
    },al._enabled=function(b,d){if(ap||am.wake(),b&&this._gc){var a,c=this._targets;
    if(c){for(a=c.length;
    --a>-1;
    ){this._siblings[a]=W(c[a],this,!0)
    }}else{this._siblings=W(this.target,this,!0)
    }}return J.prototype._enabled.call(this,b,d),this._notifyPluginsOfEnabled&&this._firstPT?H._onPluginEvent(b?"_onEnable":"_onDisable",this):!1
    },H.to=function(b,c,a){return new H(b,c,a)
    },H.from=function(b,c,a){return a.runBackwards=!0,a.immediateRender=0!=a.immediateRender,new H(b,c,a)
    },H.fromTo=function(b,d,a,c){return c.startAt=a,c.immediateRender=0!=c.immediateRender&&0!=a.immediateRender,new H(b,d,c)
    },H.delayedCall=function(b,f,a,c,d){return new H(f,0,{delay:b,onComplete:f,onCompleteParams:a,onCompleteScope:c,onReverseComplete:f,onReverseCompleteParams:a,onReverseCompleteScope:c,immediateRender:!1,useFrames:d,overwrite:0})
    },H.set=function(a,b){return new H(a,0,b)
    },H.killTweensOf=H.killDelayedCallsTo=function(b,d){for(var a=H.getTweensOf(b),c=a.length;
    --c>-1;
    ){a[c]._kill(d,b)
    }},H.getTweensOf=function(b){if(null==b){return[]
    }b="string"!=typeof b?b:H.selector(b)||b;
    var f,a,c,d;
    if((b instanceof Array||G(b))&&"number"!=typeof b[0]){for(f=b.length,a=[];
    --f>-1;
    ){a=a.concat(H.getTweensOf(b[f]))
    }for(f=a.length;
    --f>-1;
    ){for(d=a[f],c=f;
    --c>-1;
    ){d===a[c]&&a.splice(f,1)
    }}}else{for(a=W(b).concat(),f=a.length;
    --f>-1;
    ){a[f]._gc&&a.splice(f,1)
    }}return a
    };
    var ae=aA("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=ae.prototype
    },!0);
    if(al=ae.prototype,ae.version="1.9.1",ae.API=2,al._firstPT=null,al._addTween=function(d,h,c,f,g,l){var b,k;
    null!=f&&(b="number"==typeof f||"="!==f.charAt(1)?Number(f)-c:parseInt(f.charAt(0)+"1",10)*Number(f.substr(2)))&&(this._firstPT=k={_next:this._firstPT,t:d,p:h,s:c,c:b,f:"function"==typeof d[h],n:g||h,r:l},k._next&&(k._next._prev=k))
    },al.setRatio=function(b){for(var d,a=this._firstPT,c=0.000001;
    a;
    ){d=a.c*b+a.s,a.r?d=d+(d>0?0.5:-0.5)>>0:c>d&&d>-c&&(d=0),a.f?a.t[a.p](d):a.t[a.p]=d,a=a._next
    }},al._kill=function(b){var d,a=this._overwriteProps,c=this._firstPT;
    if(null!=b[this._propName]){this._overwriteProps=[]
    }else{for(d=a.length;
    --d>-1;
    ){null!=b[a[d]]&&a.splice(d,1)
    }}for(;
    c;
    ){null!=b[c.n]&&(c._next&&(c._next._prev=c._prev),c._prev?(c._prev._next=c._next,c._prev=null):this._firstPT===c&&(this._firstPT=c._next)),c=c._next
    }return !1
    },al._roundProps=function(b,c){for(var a=this._firstPT;
    a;
    ){(b[this._propName]||null!=a.n&&b[a.n.split(this._propName+"_").join("")])&&(a.r=c),a=a._next
    }},H._onPluginEvent=function(d,h){var c,f,g,l,b,k=h._firstPT;
    if("_onInitAllProps"===d){for(;
    k;
    ){for(b=k._next,f=g;
    f&&f.pr>k.pr;
    ){f=f._next
    }(k._prev=f?f._prev:l)?k._prev._next=k:g=k,(k._next=f)?f._prev=k:l=k,k=b
    }k=h._firstPT=g
    }for(;
    k;
    ){k.pg&&"function"==typeof k.t[d]&&k.t[d]()&&(c=!0),k=k._next
    }return c
    },ae.activate=function(a){for(var b=a.length;
    --b>-1;
    ){a[b].API===ae.API&&(K[(new a[b])._propName]=a[b])
    }return !0
    },ax.plugin=function(d){if(!(d&&d.propName&&d.init&&d.API)){throw"illegal plugin definition."
    }var h,c=d.propName,f=d.priority||0,g=d.overwriteProps,l={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},b=aA("plugins."+c.charAt(0).toUpperCase()+c.substr(1)+"Plugin",function(){ae.call(this,c,f),this._overwriteProps=g||[]
    },d.global===!0),k=b.prototype=new ae(c);
    k.constructor=b,b.API=d.API;
    for(h in l){"function"==typeof d[h]&&(k[l[h]]=d[h])
    }return b.version=d.version,ae.activate([b]),b
    },ay=ak._gsQueue){for(au=0;
    ay.length>au;
    au++){ay[au]()
    }for(al in aj){aj[al].func||ak.console.log("GSAP encountered missing dependency: com.greensock."+al)
    }}ap=!1
    }(window);
    (function(a){a.superscrollorama=function(r){var e=this;
    var h={isVertical:true,triggerAtCenter:true,playoutAnimations:true,reverse:true};
    e.settings=a.extend({},h,r);
    var d=a(window);
    var c=[],f=[],l={x:0,y:0},n=false,q,j;
    function p(){d.scroll(function(){n=true
    });
    TweenLite.ticker.addEventListener("tick",o)
    }function b(i){var s={top:parseFloat(i.css("top")),left:parseFloat(i.css("left"))};
    if(isNaN(s.top)){s.top=0
    }if(isNaN(s.left)){s.left=0
    }return s
    }function o(){if(n){m();
    n=false
    }}function g(i){i.el.css("position",i.origPositioning.pos);
    i.el.css("top",i.origPositioning.top);
    i.el.css("left",i.origPositioning.left)
    }function k(s,i){if(s){if(s.totalProgress){s.totalProgress(i).pause()
    }else{s.progress(i).pause()
    }}}function m(){var N=e.settings.isVertical?d.scrollTop()+l.y:d.scrollLeft()+l.x;
    var z=e.settings.triggerAtCenter?(e.settings.isVertical?-d.height()/2:-d.width()/2):0;
    var K,H,F;
    var D=c.length;
    for(K=0;
    K<D;
    K++){var s=c[K],O=s.target,y=s.offset;
    if(typeof(O)==="string"){q=a(O).offset()||{};
    H=e.settings.isVertical?q.top+l.y:q.left+l.x;
    y+=z
    }else{if(typeof(O)==="number"){H=O
    }else{if(a.isFunction(O)){H=O.call(this)
    }else{q=O.offset();
    H=e.settings.isVertical?q.top+l.y:q.left+l.x;
    y+=z
    }}}H+=y;
    F=H+s.dur;
    if((N>H&&N<F)&&s.state!=="TWEENING"){s.state="TWEENING";
    s.start=H;
    s.end=F
    }if(N<H&&s.state!=="BEFORE"&&s.reverse){if(e.settings.playoutAnimations||s.dur===0){s.tween.reverse()
    }else{k(s.tween,0)
    }s.state="BEFORE"
    }else{if(N>F&&s.state!=="AFTER"){if(e.settings.playoutAnimations||s.dur===0){s.tween.play()
    }else{k(s.tween,1)
    }s.state="AFTER"
    }else{if(s.state==="TWEENING"){var I=false;
    if(s.tween.repeat){I=(s.tween.repeat()===-1)
    }if(I){var A=s.tween.totalProgress();
    if(s.playeadLastPosition===null||A===s.playeadLastPosition){if(A===1){if(s.tween.yoyo()){s.tween.reverse()
    }else{s.tween.totalProgress(0).play()
    }}else{s.tween.play()
    }}s.playeadLastPosition=A
    }else{k(s.tween,(N-s.start)/(s.end-s.start))
    }}}}}var x=f.length;
    for(K=0;
    K<x;
    K++){var J=f[K];
    var t=J.el;
    if(J.state!=="PINNED"){var G=J.spacer.offset();
    if(J.state==="UPDATE"){g(J)
    }H=e.settings.isVertical?G.top+l.y:G.left+l.x;
    H+=J.offset;
    F=H+J.dur;
    var u=((N>F&&J.state==="BEFORE")||(N<H&&J.state==="AFTER"));
    var B=(N>H&&N<F);
    if(B||u){if(J.pushFollowers&&t.css("position")==="static"){t.css("position","relative")
    }J.origPositioning={pos:t.css("position"),top:J.spacer.css("top"),left:J.spacer.css("left")};
    J.fixedPositioning={top:e.settings.isVertical?-J.offset:G.top,left:e.settings.isVertical?G.left:-J.offset};
    t.css("position","fixed");
    t.css("top",J.fixedPositioning.top);
    t.css("left",J.fixedPositioning.left);
    J.pinStart=H;
    J.pinEnd=F;
    if(J.pushFollowers){if(e.settings.isVertical){J.spacer.height(J.dur+t.outerHeight())
    }else{J.spacer.width(J.dur+t.outerWidth())
    }}else{if(J.origPositioning.pos==="absolute"){J.spacer.width(0);
    J.spacer.height(0)
    }else{if(e.settings.isVertical){J.spacer.height(t.outerHeight())
    }else{J.spacer.width(t.outerWidth())
    }}}if(J.state==="UPDATE"){if(J.anim){k(J.anim,0)
    }}else{if(J.onPin){J.onPin(J.state==="AFTER")
    }}J.state="PINNED"
    }}if(J.state==="PINNED"){if(N<J.pinStart||N>J.pinEnd){var E=N<J.pinStart;
    J.state=E?"BEFORE":"AFTER";
    k(J.anim,E?0:1);
    var C=E?0:J.dur;
    if(e.settings.isVertical){J.spacer.height(J.pushFollowers?C:0)
    }else{J.spacer.width(J.pushFollowers?C:0)
    }var v=J.fixedPositioning.top-b(J.el).top;
    var w=J.fixedPositioning.left-b(J.el).left;
    g(J);
    if(!J.pushFollowers||J.origPositioning.pos==="absolute"){var M;
    if(J.origPositioning.pos==="relative"){M=e.settings.isVertical?parseFloat(J.origPositioning.top):parseFloat(J.origPositioning.left);
    if(isNaN(M)){M=0
    }}else{M=e.settings.isVertical?J.spacer.position().top:J.spacer.position().left
    }var L=e.settings.isVertical?"top":"left";
    J.el.css(L,M+C)
    }if(v!==0){J.el.css("top",b(J.el).top-v)
    }if(w!==0){J.el.css("left",b(J.el).left-w)
    }if(J.onUnpin){J.onUnpin(!E)
    }}else{if(J.anim){k(J.anim,(N-J.pinStart)/(J.pinEnd-J.pinStart))
    }}}}}e.addTween=function(u,s,t,v,i){s.pause();
    c.push({target:u,tween:s,offset:v||0,dur:t||0,reverse:(typeof i!=="undefined")?i:e.settings.reverse,state:"BEFORE"});
    return e
    };
    e.pin=function(t,s,v){if(typeof(t)==="string"){t=a(t)
    }var u={offset:0,pushFollowers:true};
    v=a.extend({},u,v);
    if(v.anim){v.anim.pause()
    }var i=a('<div class="superscrollorama-pin-spacer"></div>');
    i.css("position","relative");
    i.css("top",t.css("top"));
    i.css("left",t.css("left"));
    t.before(i);
    f.push({el:t,state:"BEFORE",dur:s,offset:v.offset,anim:v.anim,pushFollowers:v.pushFollowers,spacer:i,onPin:v.onPin,onUnpin:v.onUnpin});
    return e
    };
    e.updatePin=function(t,s,v){if(typeof(t)==="string"){t=a(t)
    }if(v.anim){v.anim.pause()
    }var i=f.length;
    for(j=0;
    j<i;
    j++){var u=f[j];
    if(t.get(0)===u.el.get(0)){if(s){u.dur=s
    }if(v.anim){u.anim=v.anim
    }if(v.offset){u.offset=v.offset
    }if(typeof v.pushFollowers!=="undefined"){u.pushFollowers=v.pushFollowers
    }if(v.onPin){u.onPin=v.onPin
    }if(v.onUnpin){u.onUnpin=v.onUnpin
    }if((s||v.anim||v.offset)&&u.state==="PINNED"){u.state="UPDATE";
    m()
    }}}return e
    };
    e.removeTween=function(w,s,u){var t=c.length;
    if(typeof u==="undefined"){u=true
    }for(var i=0;
    i<t;
    i++){var v=c[i];
    if(v.target===w&&(!s||v.tween===s)){c.splice(i,1);
    if(u){k(v.tween,0)
    }t--;
    i--
    }}return e
    };
    e.removePin=function(s,u){if(typeof(s)==="string"){s=a(s)
    }if(typeof u==="undefined"){u=true
    }var t=f.length;
    for(var i=0;
    i<t;
    i++){var v=f[i];
    if(v.el.is(s)){f.splice(i,1);
    if(u){v.spacer.remove();
    g(v);
    if(v.anim){k(v.anim,0)
    }}t--;
    i--
    }}return e
    };
    e.setScrollContainerOffset=function(i,s){l.x=i;
    l.y=s;
    return e
    };
    e.triggerCheckAnim=function(i){if(i){m()
    }else{n=true
    }return e
    };
    p();
    return e
    }
    })(jQuery);
    (function(b){var a=function(d){var c=0,e=0,h=[],g,f=0;
    b(d).each(function(){g=b(this);
    b(g).height("auto");
    f=g.position().top;
    if(e!=f){for(i=0;
    i<h.length;
    i++){h[i].height(c)
    }h.length=0;
    e=f;
    c=g.height();
    h.push(g)
    }else{h.push(g);
    c=(c<g.height())?(g.height()):(c)
    }for(var i=0;
    i<h.length;
    i++){h[i].height(c)
    }})
    };
    b(window).load(function(){a(".cart-grid .indcart");
    a(".indcart .carttxt");
    a(".indcart .cartimg")
    });
    b(window).resize(function(){a(".cart-grid .indcart");
    a(".indcart .carttxt");
    a(".indcart .cartimg")
    })
    })(jQuery);
    (function(b){var a=function(e,d){var c=!/[^\w\-\.:]/.test(e)?a.cache[e]=a.cache[e]||a(a.load(e)):new Function(a.arg+",tmpl","var _e=tmpl.encode"+a.helper+",_s='"+e.replace(a.regexp,a.func)+"';return _s;");
    return d?c(d,a):function(f){return c(f,a)
    }
    };
    a.cache={};
    a.load=function(c){return document.getElementById(c).innerHTML
    };
    a.regexp=/([\s'\\])(?!(?:[^{]|\{(?!%))*%\})|(?:\{%(=|#)([\s\S]+?)%\})|(\{%)|(%\})/g;
    a.func=function(d,h,g,f,e,c){if(h){return{"\n":"\\n","\r":"\\r","\t":"\\t"," ":" "}[h]||"\\"+h
    }if(g){if(g==="="){return"'+_e("+f+")+'"
    }return"'+("+f+"==null?'':"+f+")+'"
    }if(e){return"';"
    }if(c){return"_s+='"
    }};
    a.encReg=/[<>&"'\x00]/g;
    a.encMap={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#39;"};
    a.encode=function(c){return(c==null?"":""+c).replace(a.encReg,function(d){return a.encMap[d]||""
    })
    };
    a.arg="o";
    a.helper=",print=function(s,e){_s+=e?(s==null?'':s):_e(s);},include=function(s,d){_s+=tmpl(s,d);}";
    if(typeof define==="function"&&define.amd){define(function(){return a
    })
    }else{if(typeof module==="object"&&module.exports){module.exports=a
    }else{b.tmpl=a
    }}}(this));
    var CS=CS||{};
    $(".dynamic-list").each(function(){var a=$(this).attr("id");
    CS[a]={};
    CS[a].pagination={};
    CS[a].pagination.currentPage=1;
    CS[a].switch2Page=function(e){var c=$("#"+a);
    if($(".dynamic-items li.page_"+e,c).length>0){$(".dynamic-items li",c).hide();
    $(".dynamic-items li.page_"+e,c).show();
    $(".dynamic-pages li a",c).removeClass("current");
    $(".dynamic-pages li.page_"+e+" a",c).addClass("current");
    $(".dynamic-pages .filter-arrow-group a",c).removeClass("disabled");
    if(e<=1){$(".dynamic-pages .filter-arrow-group a.left",c).addClass("disabled")
    }if(e>=$(".dynamic-pages li.page",c).length){$(".dynamic-pages .filter-arrow-group a.right",c).addClass("disabled")
    }var d=$(".dynamic-pages li.page",c).length;
    $(".dynamic-pages li.page_placeholder",c).remove();
    if(d>10){for(var b=1;
    b<d;
    b++){if(b>4&&b<d-3){if(b<e-1||b>e+1){$(".dynamic-pages li.page_"+b,c).addClass("hide-page-count")
    }else{$(".dynamic-pages li.page_"+b,c).removeClass("hide-page-count")
    }}else{$(".dynamic-pages li.page_"+b,c).removeClass("hide-page-count")
    }}if(e>3&&e<d-5){$("<li class='page_placeholder'><a href='#' onclick='return false;'>...</a> </li>").insertAfter(".dynamic-pages li.page_"+(e+1));
    $(".dynamic-pages li.page_"+(e+1),c).removeClass("hide-page-count");
    if(e-2>4){$("<li class='page_placeholder'><a href='#' onclick='return false;'>...</a> </li>").insertBefore(".dynamic-pages li.page_"+(e-1))
    }}else{$("<li class='page_placeholder'><a href='#' onclick='return false;'>...</a> </li>").insertAfter(".dynamic-pages li.page_4")
    }}CS[a].pagination.currentPage=e;
    $(".dynamic-pages a.paginator span.current",c).text(CS[a].pagination.currentPage)
    }};
    CS[a].filterData=function(){var c=$("input.filter_item:checked",CS[a].container);
    var b=Object.create(CS[a].itemsArray);
    if(c.length>0){b[CS[a].root]=$.grep(b[CS[a].root],function(f,d){var e=false;
    $(c).each(function(){e=e||f[$(this).attr("data-filter-property")]===$(this).val()
    });
    return e
    })
    }b.total=b[CS[a].root].length;
    $(CS[a].itemsContainer).html(tmpl(CS[a].templateID,b));
    tmpl.cache[CS[a].templateID]=null;
    $(CS[a].pages).html(tmpl(CS[a].templatePagesID,b));
    tmpl.cache[CS[a].templatePagesID]=null;
    $("<li class='page_placeholder'><a href='#' onclick='return false;'>...</a> </li>").insertBefore($(".dynamic-pages li.page.hide-page-count")[0])
    };
    CS[a].initData=function(d){var b=$("#"+a);
    CS[a].container=b;
    var c=$(b).attr("data-providers-url");
    CS[a].addHTML=$(b).attr("data-template-addHtml");
    if(CS[a].addHTML){c+=".html"
    }if(d){c+="?q="+d+"&"
    }else{if(window.location.search.length>0){c+=window.location.search+"&";
    var d=window.location.search.split("q=");
    if(d.length>0){$("form input#q",CS[a].container).val(d[1].split("&")[0])
    }}else{c+="?"
    }}CS[a].pages=$("#"+($(b).attr("data-pages-id")?$(b).attr("data-pages-id"):b));
    CS[a].itemsContainer=$("#"+($(b).attr("data-items-id")?$(b).attr("data-items-id"):b));
    CS[a].filters=$(".filter-type",b);
    CS[a].templateID=$(b).attr("data-template-id");
    CS[a].templatePagesID=$(b).attr("data-template-pages-id");
    CS[a].root=$(b).attr("data-template-array")?$(b).attr("data-template-array"):"items";
    CS[a].total=$(b).attr("data-template-total")?$(b).attr("data-template-total"):"total";
    $.each($(b).data(),function(f,e){if(f.startsWith("lazyload_")){c+=f.replace("lazyload_","")+"="+e+"&"
    }});
    $(".spinner",b).show();
    $(CS[a].itemsContainer).html("");
    $(CS[a].pages).html("");
    $(CS[a].filters).each(function(){$("ul",$(this)).html("")
    });
    $.ajax({url:c,type:"get",dataType:"json",cache:false,success:function(g){var f=g;
    f.root=CS[a].root;
    CS[a].itemsArray=f;
    if(f[CS[a].root].length>0){$(CS[a].itemsContainer).html(tmpl(CS[a].templateID,f));
    tmpl.cache[CS[a].templateID]=null;
    $(CS[a].pages).html(tmpl(CS[a].templatePagesID,f));
    tmpl.cache[CS[a].templatePagesID]=null;
    $("<li class='page_placeholder'><a href='#' onclick='return false;'>...</a> </li>").insertBefore($(".dynamic-pages li.page.hide-page-count")[0]);
    var e=tmpl.helper;
    $(CS[a].filters).each(function(){tmpl.helper=e+",filter_property='"+$(this).attr("data-filter-property")+"'";
    var h=$(this).attr("data-template-id");
    $("ul",$(this)).html(tmpl(h,f[CS[a].root]));
    tmpl.cache[h]=null
    });
    $("input:checkbox",CS[a].filters).on("click",function(){CS[a].filterData()
    })
    }else{$(CS[a].itemsContainer).html("");
    $(CS[a].pages).html("");
    $(CS[a].filters).each(function(){$("ul",$(this)).html("")
    })
    }$(".spinner",b).hide()
    },async:true})
    };
    CS[a].initData();
    $("form",CS[a].container).submit(function(b){b.preventDefault();
    CS[a].initData($("form input#q",CS[a].container).val())
    })
    });
    var CS_TOOLS=CS_TOOLS||{};
    CS_TOOLS.Util=(function(b,i){function h(t,u,v){var r;
    if(v){var s=new Date();
    s.setTime(s.getTime()+(v*24*60*60*1000));
    r="; expires="+s.toGMTString()
    }else{r=""
    }document.cookie=t+"="+u+r+"; path=/"
    }function m(s){var u=s+"=";
    var r=document.cookie.split(";");
    for(var t=0;
    t<r.length;
    t++){var v=r[t];
    while(v.charAt(0)==" "){v=v.substring(1,v.length)
    }if(v.indexOf(u)===0){return v.substring(u.length,v.length)
    }}return null
    }function q(r){h(r,"",-1)
    }var f=function(t){t=t||i.location.href;
    var v={};
    var r=t.slice(t.indexOf("#")+1).split("?");
    if(r.length>1){v.page=r[0];
    r=r[1].split("&")
    }else{r=r[0].split("&")
    }for(var s=0;
    s<r.length;
    s++){var u=r[s].split("=");
    if(u.length>1){v[u[0]]=decodeURIComponent(u[1])
    }else{v[u[0]]=null
    }}return v
    }();
    var a=function(u){var s=[];
    var w=i.location.search;
    if(w!=""){w=search=w.split("?")[1];
    var v=w.split("&");
    var t;
    for(var r=0;
    r<v.length;
    r++){t=v[r].split("=")[0];
    if(t!="wcmmode"){s.push(t)
    }}}return s
    }();
    function k(r){var s=f[r]||"";
    return s
    }function j(){return f
    }function p(){return a
    }function e(t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
    var s=new RegExp("[\\?&]"+t+"=([^&#]*)"),r=s.exec(location.search),u=(r===null?"":decodeURIComponent(r[1].replace(/\+/g," ")));
    return u
    }function o(u,s,v){var r=u.indexOf("#");
    var x=r===-1?"":u.substr(r);
    u=r===-1?u:u.substr(0,r);
    var t=new RegExp("([?&])"+s+"=.*?(&|$)","i");
    var w=u.indexOf("?")!==-1?"&":"?";
    if(!v){u=u.replace(new RegExp("([?&]?)"+s+"=[^&]*","i"),"");
    if(u.slice(-1)==="?"){u=u.slice(0,-1)
    }if(u.indexOf("?")===-1){u=u.replace(/&/,"?")
    }}else{if(u.match(t)){u=u.replace(t,"$1"+s+"="+v+"$2")
    }else{u=u+w+s+"="+v
    }}return u+x
    }function c(r){var s=k(r)||e(r);
    return s
    }function g(r){var s=localStorage.getItem(r);
    s=s===null?"":s;
    return s
    }function d(r){console.debug("_invokeScripts",r);
    r.each(function(){var t=$(this),s=t.data("script").split(" ");
    console.info(t);
    console.group();
    $.each(s,function(u,v){if(typeof b[v]!=="undefined"){console.debug("calling %c [%s]","color:purple;",v);
    (b[v]).call(t)
    }else{console.warn("script does not exist! %c [%s]","color:black;",v)
    }});
    console.groupEnd()
    });
    return true
    }function l(r){if(typeof CQ!=="undefined"){$.each(r,function(){var s=$(this).attr("data-path");
    if(typeof CQ.WCM.getEditable(s)!=="undefined"){CQ.WCM.getEditable(s).hide()
    }})
    }}function n(t,s){var r;
    if(typeof CQ!="undefined"){$.each(s,function(){r=$(this).attr("data-path");
    if(typeof CQ.WCM.getEditable(r)!="undefined"){CQ.WCM.getEditable(r).hide()
    }});
    r=t.attr("data-path");
    if(typeof CQ.WCM.getEditable(r)!="undefined"){CQ.WCM.getEditable(r).show()
    }}}return{invokeScripts:d,toggleComponentEdit:n,createCookie:h,readCookie:m,eraseCookie:q,getLocalStorageItem:g,getQueryParameter:e,getHashParameter:k,getHashParameterMap:j,getQueryParamKeys:p,getUrlParameter:c,updateUrlParameter:o}
    }(CS_TOOLS,window));
    window.addEventListener("load",function(){var a=CS_TOOLS.Util.getQueryParamKeys();
    if($.myVM!=null&&$.myVM.form0!="undefined"&&a.length>0){for(var c=0;
    c<a.length;
    c++){var b=a[c];
    if(typeof key_mappings!=="undefined"){b=key_mappings[b]!=null?key_mappings[b]:b
    }var d=$.myVM.form0[b];
    if(typeof d!=="undefined"){var e=CS_TOOLS.Util.getUrlParameter(a[c]);
    if(typeof e!=="undefined"&&e.length>0){d(e)
    }}else{}}}else{}});