(this.webpackJsonpremove=this.webpackJsonpremove||[]).push([[0],{72:function(t,e,a){t.exports=a(90)},77:function(t,e,a){},78:function(t,e,a){},90:function(t,e,a){"use strict";a.r(e);var i=a(0),s=a.n(i),n=a(30),o=a.n(n),r=(a(77),a(78),a(37)),h=a(21),l=a(3),c=a(4),u=a(15),m=a(9),f=a(10),p=(a(79),function(t){for(var e=[],a=0;a<t;a++){for(var i=[],s=0;s<t;s++)i.push(0);e.push(i)}return e}),d=function(){function t(){Object(l.a)(this,t),this.isInit=!1,this.map=[],this.size=null}return Object(c.a)(t,[{key:"init",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;return this.size=t,this.map=p(this.size),this.isInit=!0,this}},{key:"createFoo",value:function(t,e){if(this.isInit)return this.map[t>this.size-1?this.size-1:t][e>this.size-1?this.size-1:e]=1,this;throw Error("\u0418\u0433\u0440\u0430 \u043d\u0435 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0430...")}},{key:"next",value:function(){var t=this;if(this.isInit){for(var e=p(this.size),a=0;a<this.size;a++)for(var i=function(i){var s=t.map[a][i],n=0,o=[];a>0&&a<t.size-1&&i>0&&i<t.size-1&&(o=[t.map[a-1][i-1],t.map[a-1][i],t.map[a-1][i+1],t.map[a][i-1],t.map[a][i+1],t.map[a+1][i-1],t.map[a+1][i],t.map[a+1][i+1]]),0===a&&i>0&&i<t.size-1&&(o=[t.map[a][i-1],t.map[a][i+1],t.map[a+1][i-1],t.map[a+1][i],t.map[a+1][i+1]]),0===a&&0===i&&(o=[t.map[a][i+1],t.map[a+1][i],t.map[a+1][i+1]]),0===a&&i===t.size-1&&(o=[t.map[a][i-1],t.map[a+1][i-1],t.map[a+1][i]]),0===i&&a>0&&a<t.size-1&&(o=[t.map[a-1][i],t.map[a-1][i+1],t.map[a][i+1],t.map[a+1][i],t.map[a+1][i+1]]),0===i&&a===t.size-1&&(o=[t.map[a-1][i],t.map[a-1][i+1],t.map[a][i+1]]),a===t.size-1&&i>0&&i<t.size-1&&(o=[t.map[a-1][i-1],t.map[a-1][i],t.map[a-1][i+1],t.map[a][i-1],t.map[a][i+1]]),a===t.size-1&&i===t.size-1&&(o=[t.map[a-1][i-1],t.map[a-1][i],t.map[a][i-1]]),i===t.size-1&&a>0&&a<t.size-1&&(o=[t.map[a-1][i-1],t.map[a-1][i],t.map[a][i-1],t.map[a+1][i-1],t.map[a+1][i]]),o.map((function(t){1===t&&n++})),1===s?(n>=2&&n<=3&&(e[a][i]=1),n>3&&(e[a][i]=0),n<2&&(e[a][i]=0)):3===n&&(e[a][i]=1)},s=0;s<this.size;s++)i(s);return this.map=e,this}throw Error("\u0418\u0433\u0440\u0430 \u043d\u0435 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0430...")}},{key:"clearMap",value:function(){if(this.isInit)return this.map=p(this.size),this;throw Error("\u0418\u0433\u0440\u0430 \u043d\u0435 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0430...")}},{key:"draw",value:function(t){if(this.isInit){t.clearRect(0,0,500,500);for(var e=500/this.size,a=0;a<this.size;a++)for(var i=0;i<this.size;i++)1===this.map[a][i]&&t.fillRect(a*e,i*e,e,e);return this}throw Error("\u0418\u0433\u0440\u0430 \u043d\u0435 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0430...")}}]),t}(),v=a(71),b=a(47),y=a(67),g=a(66),x=a(53),E=a(51),w=function(t){Object(m.a)(a,t);var e=Object(f.a)(a);function a(t){var i;return Object(l.a)(this,a),(i=e.call(this,t)).state={delay:50,isInit:!1,size:500,isStart:!1,iter:1e7,counter:0,isEdit:!1,draw:!1,width:null,height:null,context:null,mouse:{x:0,y:0}},i.life=new d,i.mousedown=i.mousedown.bind(Object(u.a)(i)),i.mousemove=i.mousemove.bind(Object(u.a)(i)),i.mouseup=i.mouseup.bind(Object(u.a)(i)),i.onClear=i.onClear.bind(Object(u.a)(i)),i.onEdit=i.onEdit.bind(Object(u.a)(i)),i.onNext=i.onNext.bind(Object(u.a)(i)),i.onStart=i.onStart.bind(Object(u.a)(i)),i.onInit=i.onInit.bind(Object(u.a)(i)),i.onChange=i.onChange.bind(Object(u.a)(i)),i.generator=i.generator.bind(Object(u.a)(i)),i}return Object(c.a)(a,[{key:"generator",value:function(){this.life.next().draw(this.state.context),this.setState(Object(h.a)({},this.state,{counter:this.state.counter+1}))}},{key:"componentDidMount",value:function(){var t=document.getElementById("world"),e=t.getContext("2d");this.setState(Object(h.a)({},this.state,{width:t.width,height:t.height,context:e}))}},{key:"componentDidUpdate",value:function(){this.state.isStart&&this.state.iter>this.state.counter&&setTimeout(this.generator,this.state.delay)}},{key:"onChange",value:function(t){var e=t.getParameter("name"),a=t.getParameter("value");this.setState(Object(h.a)({},this.state,Object(r.a)({},e,a)))}},{key:"onInit",value:function(){this.life.init(this.state.size).clearMap(),this.setState(Object(h.a)({},this.state,{isInit:!this.state.isInit}))}},{key:"onClear",value:function(){this.state.context.clearRect(0,0,this.state.width,this.state.height),this.life.clearMap(),this.setState(Object(h.a)({},this.state,{isStart:!1,counter:0}))}},{key:"onEdit",value:function(){this.setState(Object(h.a)({},this.state,{isEdit:!this.state.isEdit}))}},{key:"onStart",value:function(){this.setState(Object(h.a)({},this.state,{isStart:!this.state.isStart}))}},{key:"onNext",value:function(){this.life.next(),this.life.draw(this.state.context)}},{key:"mousedown",value:function(t){if(this.state.isEdit){var e=500/this.state.size,a={x:t.pageX-t.target.offsetLeft,y:t.pageY-t.target.offsetTop},i={x:Math.floor(a.x/e)*e,y:Math.floor(a.y/e)*e};this.state.context.fillRect(i.x,i.y,e,e),this.life.createFoo(Math.floor(a.x/e),Math.floor(a.y/e)),this.setState(Object(h.a)({},this.state,{mouse:i,draw:!0}))}}},{key:"mousemove",value:function(t){if(this.state.draw&&this.state.isEdit){var e=500/this.state.size,a={x:t.pageX-t.target.offsetLeft,y:t.pageY-t.target.offsetTop},i={x:Math.floor(a.x/e)*e,y:Math.floor(a.y/e)*e};this.state.context.fillRect(i.x,i.y,e,e),this.life.createFoo(Math.floor(a.x/e),Math.floor(a.y/e)),this.setState(Object(h.a)({},this.state,{mouse:i}))}}},{key:"mouseup",value:function(t){if(this.state.isEdit){var e=500/this.state.size,a={x:t.pageX-t.target.offsetLeft,y:t.pageY-t.target.offsetTop},i={x:Math.floor(a.x/e)*e,y:Math.floor(a.y/e)*e};this.state.context.fillRect(i.x,i.y,e,e),this.life.createFoo(Math.floor(a.x/e),Math.floor(a.y/e)),this.setState(Object(h.a)({},this.setState,{mouse:i,draw:!1}))}}},{key:"render",value:function(){return s.a.createElement("div",{style:{display:"flex"}},s.a.createElement("canvas",{id:"world",width:"500",height:"500",onMouseDown:this.mousedown,onMouseUp:this.mouseup,onMouseMove:this.mousemove,style:{backgroundColor:"#eee",border:"1px solid #ccc",margin:"10px"}}),s.a.createElement("div",{style:{display:"flex",margin:"10px",justifyContent:"space-between"}},s.a.createElement(v.a,{style:{width:"300px"}},s.a.createElement(b.a,{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043a\u0430\u0440\u0442\u044b"},s.a.createElement(y.a,{label:"\u0420\u0430\u0437\u043c\u0435\u0440"},s.a.createElement(g.a,{onChange:this.onChange,name:"size",disabled:this.state.isInit,value:this.state.size}))),s.a.createElement(b.a,{title:"\u0421\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"},s.a.createElement(y.a,{label:"\u0417\u0430\u0434\u0435\u0440\u0436\u043a\u0430"},s.a.createElement(g.a,{onChange:this.onChange,name:"delay",disabled:this.state.isInit,value:this.state.delay}))),s.a.createElement(b.a,{title:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f"},s.a.createElement(x.a,{disabled:this.state.isStart||this.state.isEdit,onClick:this.onInit},this.state.isInit?"\u0421\u0431\u0440\u043e\u0441\u0442\u044c":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"," \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),s.a.createElement(x.a,{disabled:!this.state.isInit||this.state.isEdit,onClick:this.onStart,design:this.state.isStart?E.a.Reject:E.a.Accept},this.state.isStart?"\u041e\u0441\u0442\u0430\u043d\u043e\u0432\u0430\u0442\u044c":"\u041d\u0430\u0447\u0430\u0442\u044c"," \u0441\u0438\u043c\u0443\u043b\u044f\u0446\u0438\u044e"),s.a.createElement(x.a,{disabled:!this.state.isInit||this.state.isStart,onClick:this.onEdit},this.state.isEdit?"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c":"\u041d\u0430\u0447\u0430\u0442\u044c"," \u0440\u0438\u0441\u043e\u0432\u0430\u043d\u0438\u0435"),s.a.createElement(x.a,{disabled:!this.state.isInit,onClick:this.onClear},"\u041e\u0442\u0447\u0438\u0441\u0442\u0438\u0442\u044c")))),s.a.createElement("span",null,"x: ",this.state.mouse.x," y: ",this.state.mouse.y))}}]),a}(i.Component);var z=function(){return s.a.createElement("div",null,s.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=a(70);o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(j.a,{withToastContainer:!0},s.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[72,1,2]]]);
//# sourceMappingURL=main.783580c1.chunk.js.map