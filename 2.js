(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1:function(n,t,r){"use strict";r.r(t);var e=r(2),u=r(3),o=r.n(u),i=r(4),c=r(5),f=e.M();o()("#build-id").text(f);var s="Build ID: "+f;o()("#report-issue").attr("href","https://github.com/jmmv/endbasic/issues/new?body="+s);var l=new i.Terminal;l.setOption("fontSize",18);const a=new c.FitAddon;l.loadAddon(a),l.open(document.getElementById("terminal")),a.fit();var d=new e.a,p=navigator.userAgent;if(/\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(p)||/\b(Android|Windows Phone|iPad|iPod)\b/i.test(p)){var h=d.on_screen_keyboard();o()("#button-esc").on("click",(function(){h.press_escape(),l.focus()})),o()("#button-up").on("click",(function(){h.press_arrow_up(),l.focus()})),o()("#button-down").on("click",(function(){h.press_arrow_down(),l.focus()})),o()("#button-left").on("click",(function(){h.press_arrow_left(),l.focus()})),o()("#button-right").on("click",(function(){h.press_arrow_right(),l.focus()})),o()("#controls").css("visibility","visible")}l.focus(),d.run_repl_loop(l)},2:function(n,t,r){"use strict";(function(n,e){r.d(t,"M",(function(){return A})),r.d(t,"a",(function(){return T})),r.d(t,"K",(function(){return E})),r.d(t,"E",(function(){return S})),r.d(t,"y",(function(){return W})),r.d(t,"d",(function(){return D})),r.d(t,"n",(function(){return I})),r.d(t,"g",(function(){return B})),r.d(t,"w",(function(){return P})),r.d(t,"D",(function(){return $})),r.d(t,"l",(function(){return F})),r.d(t,"q",(function(){return K})),r.d(t,"p",(function(){return q})),r.d(t,"o",(function(){return z})),r.d(t,"i",(function(){return J})),r.d(t,"A",(function(){return M})),r.d(t,"f",(function(){return C})),r.d(t,"m",(function(){return G})),r.d(t,"b",(function(){return H})),r.d(t,"e",(function(){return L})),r.d(t,"r",(function(){return N})),r.d(t,"c",(function(){return U})),r.d(t,"J",(function(){return Q})),r.d(t,"u",(function(){return R})),r.d(t,"h",(function(){return V})),r.d(t,"s",(function(){return X})),r.d(t,"v",(function(){return Y})),r.d(t,"t",(function(){return Z})),r.d(t,"x",(function(){return nn})),r.d(t,"B",(function(){return tn})),r.d(t,"z",(function(){return rn})),r.d(t,"C",(function(){return en})),r.d(t,"j",(function(){return un})),r.d(t,"k",(function(){return on})),r.d(t,"I",(function(){return cn})),r.d(t,"H",(function(){return fn})),r.d(t,"L",(function(){return sn})),r.d(t,"G",(function(){return ln})),r.d(t,"F",(function(){return an}));var u=r(8);const o=new Array(32).fill(void 0);function i(n){return o[n]}o.push(void 0,null,!0,!1);let c=o.length;function f(n){const t=i(n);return function(n){n<36||(o[n]=c,c=n)}(n),t}function s(n){c===o.length&&o.push(o.length+1);const t=c;return c=o[t],o[t]=n,t}let l=0,a=null;function d(){return null!==a&&a.buffer===u.l.buffer||(a=new Uint8Array(u.l.buffer)),a}let p=new("undefined"==typeof TextEncoder?(0,n.require)("util").TextEncoder:TextEncoder)("utf-8");const h="function"==typeof p.encodeInto?function(n,t){return p.encodeInto(n,t)}:function(n,t){const r=p.encode(n);return t.set(r),{read:n.length,written:r.length}};function b(n,t,r){if(void 0===r){const r=p.encode(n),e=t(r.length);return d().subarray(e,e+r.length).set(r),l=r.length,e}let e=n.length,u=t(e);const o=d();let i=0;for(;i<e;i++){const t=n.charCodeAt(i);if(t>127)break;o[u+i]=t}if(i!==e){0!==i&&(n=n.slice(i)),u=r(u,e,e=i+3*n.length);const t=d().subarray(u+i,u+e);i+=h(n,t).written}return l=i,u}let w=null;function y(){return null!==w&&w.buffer===u.l.buffer||(w=new Int32Array(u.l.buffer)),w}let g=new("undefined"==typeof TextDecoder?(0,n.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});function _(n,t){return g.decode(d().subarray(n,n+t))}function v(n,t,r,e){const o={a:n,b:t,cnt:1,dtor:r},i=(...n)=>{o.cnt++;const t=o.a;o.a=0;try{return e(t,o.b,...n)}finally{0==--o.cnt?u.d.get(o.dtor)(t,o.b):o.a=t}};return i.original=o,i}function m(n,t,r){u.j(n,t,s(r))}function k(n,t,r){u.i(n,t,s(r))}function A(){try{const r=u.e.value-16;u.e.value=r,u.k(r);var n=y()[r/4+0],t=y()[r/4+1];return _(n,t)}finally{u.e.value+=16,u.f(n,t)}}function O(n){return null==n}function j(n){return function(){try{return n.apply(this,arguments)}catch(n){u.c(s(n))}}}g.decode();Object.freeze({Width0:0,0:"Width0",Width1:1,1:"Width1",Width2:2,2:"Width2"});class x{static __wrap(n){const t=Object.create(x.prototype);return t.ptr=n,t}free(){const n=this.ptr;this.ptr=0,u.a(n)}press_escape(){u.q(this.ptr)}press_arrow_up(){u.p(this.ptr)}press_arrow_down(){u.m(this.ptr)}press_arrow_left(){u.n(this.ptr)}press_arrow_right(){u.o(this.ptr)}}class T{static __wrap(n){const t=Object.create(T.prototype);return t.ptr=n,t}free(){const n=this.ptr;this.ptr=0,u.b(n)}constructor(){var n=u.s();return T.__wrap(n)}on_screen_keyboard(){var n=u.t(this.ptr);return x.__wrap(n)}run_repl_loop(n){var t=this.ptr;return this.ptr=0,f(u.u(t,s(n)))}}const E=function(n){f(n)},S=function(n){const t=f(n).original;if(1==t.cnt--)return t.a=0,!0;return!1},W=function(n){return i(n).rows},D=function(n){return i(n).cols},I=function(n,t){var r=b(i(t).key,u.g,u.h),e=l;y()[n/4+1]=e,y()[n/4+0]=r},B=function(n){return s(i(n).domEvent)},P=function(n,t){return s(i(n).onKey(i(t)))},$=function(n,t,r){i(n).write(_(t,r))},F=function(n){return i(n)instanceof Window},K=j((function(n){var t=i(n).localStorage;return O(t)?0:s(t)})),q=j((function(n){return i(n).length})),z=j((function(n,t,r){var e=i(t).key(r>>>0),o=O(e)?0:b(e,u.g,u.h),c=l;y()[n/4+1]=c,y()[n/4+0]=o})),J=j((function(n,t,r,e){var o=i(t)[_(r,e)],c=O(o)?0:b(o,u.g,u.h),f=l;y()[n/4+1]=f,y()[n/4+0]=c})),M=j((function(n,t,r,e,u){i(n)[_(t,r)]=_(e,u)})),C=j((function(n,t,r){delete i(n)[_(t,r)]})),G=function(n){return i(n).keyCode},H=function(n){return i(n).altKey},L=function(n){return i(n).ctrlKey},N=function(n){return i(n).metaKey},U=j((function(n,t){return s(i(n).call(i(t)))})),Q=function(n){return s(i(n))},R=function(n,t){return s(new Function(_(n,t)))},V=function(n){return i(n).getTimezoneOffset()},X=function(){return s(new Date)},Y=function(){return Date.now()},Z=function(n,t){try{var r={a:n,b:t},e=new Promise((n,t)=>{const e=r.a;r.a=0;try{return function(n,t,r,e){u.r(n,t,s(r),s(e))}(e,r.b,n,t)}finally{r.a=e}});return s(e)}finally{r.a=r.b=0}},nn=function(n){return s(Promise.resolve(i(n)))},tn=function(n,t){return s(i(n).then(i(t)))},rn=j((function(){return s(self.self)})),en=j((function(){return s(window.window)})),un=j((function(){return s(globalThis.globalThis)})),on=j((function(){return s(e.global)})),cn=function(n){return void 0===i(n)},fn=function(n,t){var r=b(function n(t){const r=typeof t;if("number"==r||"boolean"==r||null==t)return""+t;if("string"==r)return`"${t}"`;if("symbol"==r){const n=t.description;return null==n?"Symbol":`Symbol(${n})`}if("function"==r){const n=t.name;return"string"==typeof n&&n.length>0?`Function(${n})`:"Function"}if(Array.isArray(t)){const r=t.length;let e="[";r>0&&(e+=n(t[0]));for(let u=1;u<r;u++)e+=", "+n(t[u]);return e+="]",e}const e=/\[object ([^\]]+)\]/.exec(toString.call(t));let u;if(!(e.length>1))return toString.call(t);if(u=e[1],"Object"==u)try{return"Object("+JSON.stringify(t)+")"}catch(n){return"Object"}return t instanceof Error?`${t.name}: ${t.message}\n${t.stack}`:u}(i(t)),u.g,u.h),e=l;y()[n/4+1]=e,y()[n/4+0]=r},sn=function(n,t){throw new Error(_(n,t))},ln=function(n,t,r){return s(v(n,t,23,m))},an=function(n,t,r){return s(v(n,t,119,k))}}).call(this,r(6)(n),r(7))},8:function(n,t,r){"use strict";var e=r.w[n.i];n.exports=e;r(2);e.v()}}]);