(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e3b4"],{"1a23":function(t,e,n){var a,i;!function(r,o){a=o,i="function"===typeof a?a.call(e,n,e,t):a,void 0===i||(t.exports=i)}(0,function(t,e,n){var a=function(t,e,n,a,i,r){function o(t){var e,n,a,i,r,o,s=t<0;if(t=Math.abs(t).toFixed(l.decimals),t+="",e=t.split("."),n=e[0],a=e.length>1?l.options.decimal+e[1]:"",l.options.useGrouping){for(i="",r=0,o=n.length;r<o;++r)0!==r&&r%3===0&&(i=l.options.separator+i),i=n[o-r-1]+i;n=i}return l.options.numerals.length&&(n=n.replace(/[0-9]/g,function(t){return l.options.numerals[+t]}),a=a.replace(/[0-9]/g,function(t){return l.options.numerals[+t]})),(s?"-":"")+l.options.prefix+n+a+l.options.suffix}function s(t,e,n,a){return n*(1-Math.pow(2,-10*t/a))*1024/1023+e}function u(t){return"number"==typeof t&&!isNaN(t)}var l=this;if(l.version=function(){return"1.9.3"},l.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:s,formattingFn:o,prefix:"",suffix:"",numerals:[]},r&&"object"==typeof r)for(var c in l.options)r.hasOwnProperty(c)&&null!==r[c]&&(l.options[c]=r[c]);""===l.options.separator?l.options.useGrouping=!1:l.options.separator=""+l.options.separator;for(var d=0,m=["webkit","moz","ms","o"],f=0;f<m.length&&!window.requestAnimationFrame;++f)window.requestAnimationFrame=window[m[f]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[m[f]+"CancelAnimationFrame"]||window[m[f]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,e){var n=(new Date).getTime(),a=Math.max(0,16-(n-d)),i=window.setTimeout(function(){t(n+a)},a);return d=n+a,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)}),l.initialize=function(){return!!l.initialized||(l.error="",l.d="string"==typeof t?document.getElementById(t):t,l.d?(l.startVal=Number(e),l.endVal=Number(n),u(l.startVal)&&u(l.endVal)?(l.decimals=Math.max(0,a||0),l.dec=Math.pow(10,l.decimals),l.duration=1e3*Number(i)||2e3,l.countDown=l.startVal>l.endVal,l.frameVal=l.startVal,l.initialized=!0,!0):(l.error="[CountUp] startVal ("+e+") or endVal ("+n+") is not a number",!1)):(l.error="[CountUp] target is null or undefined",!1))},l.printValue=function(t){var e=l.options.formattingFn(t);"INPUT"===l.d.tagName?this.d.value=e:"text"===l.d.tagName||"tspan"===l.d.tagName?this.d.textContent=e:this.d.innerHTML=e},l.count=function(t){l.startTime||(l.startTime=t),l.timestamp=t;var e=t-l.startTime;l.remaining=l.duration-e,l.options.useEasing?l.countDown?l.frameVal=l.startVal-l.options.easingFn(e,0,l.startVal-l.endVal,l.duration):l.frameVal=l.options.easingFn(e,l.startVal,l.endVal-l.startVal,l.duration):l.countDown?l.frameVal=l.startVal-(l.startVal-l.endVal)*(e/l.duration):l.frameVal=l.startVal+(l.endVal-l.startVal)*(e/l.duration),l.countDown?l.frameVal=l.frameVal<l.endVal?l.endVal:l.frameVal:l.frameVal=l.frameVal>l.endVal?l.endVal:l.frameVal,l.frameVal=Math.round(l.frameVal*l.dec)/l.dec,l.printValue(l.frameVal),e<l.duration?l.rAF=requestAnimationFrame(l.count):l.callback&&l.callback()},l.start=function(t){l.initialize()&&(l.callback=t,l.rAF=requestAnimationFrame(l.count))},l.pauseResume=function(){l.paused?(l.paused=!1,delete l.startTime,l.duration=l.remaining,l.startVal=l.frameVal,requestAnimationFrame(l.count)):(l.paused=!0,cancelAnimationFrame(l.rAF))},l.reset=function(){l.paused=!1,delete l.startTime,l.initialized=!1,l.initialize()&&(cancelAnimationFrame(l.rAF),l.printValue(l.startVal))},l.update=function(t){if(l.initialize()){if(t=Number(t),!u(t))return void(l.error="[CountUp] update() - new endVal is not a number: "+t);l.error="",t!==l.frameVal&&(cancelAnimationFrame(l.rAF),l.paused=!1,delete l.startTime,l.startVal=l.frameVal,l.endVal=t,l.countDown=l.startVal>l.endVal,l.rAF=requestAnimationFrame(l.count))}},l.initialize()&&l.printValue(l.startVal)};return a})},"92fa3":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span")},i=[],r=(n("c5f6"),n("cadf"),n("551c"),n("097d"),n("1a23")),o=n.n(r),s={name:"d2-count-up",props:{start:{type:Number,required:!1,default:0},end:{type:Number,required:!0},decimals:{type:Number,required:!1,default:0},duration:{type:Number,required:!1,default:2},options:{type:Object,required:!1,default:function(){return{}}},callback:{type:Function,required:!1,default:function(){}}},data:function(){return{c:null}},watch:{end:function(t){this.c&&this.c.update&&this.c.update(t)}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.c||(this.c=new o.a(this.$el,this.start,this.end,this.decimals,this.duration,this.options),this.c.start(function(){t.callback(t.c)}))},destroy:function(){this.c=null}},beforeDestroy:function(){this.destroy()},start:function(t){var e=this;this.c&&this.c.start&&this.c.start(function(){t&&t(e.c)})},pauseResume:function(){this.c&&this.c.pauseResume&&this.c.pauseResume()},reset:function(){this.c&&this.c.reset&&this.c.reset()},update:function(t){this.c&&this.c.update&&this.c.update(t)}},u=s,l=n("2877"),c=Object(l["a"])(u,a,i,!1,null,null,null);c.options.__file="index.vue";e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-e3b4.6e2d446c.js.map