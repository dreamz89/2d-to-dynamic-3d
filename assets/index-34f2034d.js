(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function al(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const it={},or=[],on=()=>{},Ud=()=>!1,Id=/^on[^a-z]/,mo=n=>Id.test(n),ll=n=>n.startsWith("onUpdate:"),xt=Object.assign,cl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Od=Object.prototype.hasOwnProperty,Ke=(n,e)=>Od.call(n,e),He=Array.isArray,Br=n=>_o(n)==="[object Map]",Nd=n=>_o(n)==="[object Set]",Ve=n=>typeof n=="function",St=n=>typeof n=="string",ul=n=>typeof n=="symbol",lt=n=>n!==null&&typeof n=="object",wf=n=>lt(n)&&Ve(n.then)&&Ve(n.catch),Fd=Object.prototype.toString,_o=n=>Fd.call(n),Bd=n=>_o(n).slice(8,-1),zd=n=>_o(n)==="[object Object]",fl=n=>St(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Zs=al(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),go=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Hd=/-(\w)/g,vn=go(n=>n.replace(Hd,(e,t)=>t?t.toUpperCase():"")),kd=/\B([A-Z])/g,yr=go(n=>n.replace(kd,"-$1").toLowerCase()),vo=go(n=>n.charAt(0).toUpperCase()+n.slice(1)),Bo=go(n=>n?`on${vo(n)}`:""),Zr=(n,e)=>!Object.is(n,e),zo=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},io=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Gd=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Zl;const wa=()=>Zl||(Zl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function hl(n){if(He(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=St(i)?qd(i):hl(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(St(n))return n;if(lt(n))return n}}const Vd=/;(?![^(]*\))/g,Wd=/:([^]+)/,Xd=/\/\*[^]*?\*\//g;function qd(n){const e={};return n.replace(Xd,"").split(Vd).forEach(t=>{if(t){const i=t.split(Wd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function dl(n){let e="";if(St(n))e=n;else if(He(n))for(let t=0;t<n.length;t++){const i=dl(n[t]);i&&(e+=i+" ")}else if(lt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Yd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jd=al(Yd);function Rf(n){return!!n||n===""}let Zt;class Kd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Zt,!e&&Zt&&(this.index=(Zt.scopes||(Zt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Zt;try{return Zt=this,e()}finally{Zt=t}}}on(){Zt=this}off(){Zt=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function $d(n,e=Zt){e&&e.active&&e.effects.push(n)}function Zd(){return Zt}const pl=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Cf=n=>(n.w&ti)>0,Pf=n=>(n.n&ti)>0,Jd=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=ti},Qd=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];Cf(r)&&!Pf(r)?r.delete(n):e[t++]=r,r.w&=~ti,r.n&=~ti}e.length=t}},Ra=new WeakMap;let Ir=0,ti=1;const Ca=30;let Qt;const xi=Symbol(""),Pa=Symbol("");class ml{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,$d(this,i)}run(){if(!this.active)return this.fn();let e=Qt,t=$n;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Qt,Qt=this,$n=!0,ti=1<<++Ir,Ir<=Ca?Jd(this):Jl(this),this.fn()}finally{Ir<=Ca&&Qd(this),ti=1<<--Ir,Qt=this.parent,$n=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Qt===this?this.deferStop=!0:this.active&&(Jl(this),this.onStop&&this.onStop(),this.active=!1)}}function Jl(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let $n=!0;const Lf=[];function Sr(){Lf.push($n),$n=!1}function Mr(){const n=Lf.pop();$n=n===void 0?!0:n}function Nt(n,e,t){if($n&&Qt){let i=Ra.get(n);i||Ra.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=pl()),Df(r)}}function Df(n,e){let t=!1;Ir<=Ca?Pf(n)||(n.n|=ti,t=!Cf(n)):t=!n.has(Qt),t&&(n.add(Qt),Qt.deps.push(n))}function Fn(n,e,t,i,r,s){const o=Ra.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&He(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":He(n)?fl(t)&&a.push(o.get("length")):(a.push(o.get(xi)),Br(n)&&a.push(o.get(Pa)));break;case"delete":He(n)||(a.push(o.get(xi)),Br(n)&&a.push(o.get(Pa)));break;case"set":Br(n)&&a.push(o.get(xi));break}if(a.length===1)a[0]&&La(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);La(pl(l))}}function La(n,e){const t=He(n)?n:[...n];for(const i of t)i.computed&&Ql(i);for(const i of t)i.computed||Ql(i)}function Ql(n,e){(n!==Qt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const ep=al("__proto__,__v_isRef,__isVue"),Uf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ul)),tp=_l(),np=_l(!1,!0),ip=_l(!0),ec=rp();function rp(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=$e(this);for(let s=0,o=this.length;s<o;s++)Nt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map($e)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Sr();const i=$e(this)[e].apply(this,t);return Mr(),i}}),n}function sp(n){const e=$e(this);return Nt(e,"has",n),e.hasOwnProperty(n)}function _l(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?yp:Bf:e?Ff:Nf).get(i))return i;const o=He(i);if(!n){if(o&&Ke(ec,r))return Reflect.get(ec,r,s);if(r==="hasOwnProperty")return sp}const a=Reflect.get(i,r,s);return(ul(r)?Uf.has(r):ep(r))||(n||Nt(i,"get",r),e)?a:At(a)?o&&fl(r)?a:a.value:lt(a)?n?Hf(a):Eo(a):a}}const op=If(),ap=If(!0);function If(n=!1){return function(t,i,r,s){let o=t[i];if(hr(o)&&At(o)&&!At(r))return!1;if(!n&&(!ro(r)&&!hr(r)&&(o=$e(o),r=$e(r)),!He(t)&&At(o)&&!At(r)))return o.value=r,!0;const a=He(t)&&fl(i)?Number(i)<t.length:Ke(t,i),l=Reflect.set(t,i,r,s);return t===$e(s)&&(a?Zr(r,o)&&Fn(t,"set",i,r):Fn(t,"add",i,r)),l}}function lp(n,e){const t=Ke(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&Fn(n,"delete",e,void 0),i}function cp(n,e){const t=Reflect.has(n,e);return(!ul(e)||!Uf.has(e))&&Nt(n,"has",e),t}function up(n){return Nt(n,"iterate",He(n)?"length":xi),Reflect.ownKeys(n)}const Of={get:tp,set:op,deleteProperty:lp,has:cp,ownKeys:up},fp={get:ip,set(n,e){return!0},deleteProperty(n,e){return!0}},hp=xt({},Of,{get:np,set:ap}),gl=n=>n,xo=n=>Reflect.getPrototypeOf(n);function vs(n,e,t=!1,i=!1){n=n.__v_raw;const r=$e(n),s=$e(e);t||(e!==s&&Nt(r,"get",e),Nt(r,"get",s));const{has:o}=xo(r),a=i?gl:t?El:Jr;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function xs(n,e=!1){const t=this.__v_raw,i=$e(t),r=$e(n);return e||(n!==r&&Nt(i,"has",n),Nt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Es(n,e=!1){return n=n.__v_raw,!e&&Nt($e(n),"iterate",xi),Reflect.get(n,"size",n)}function tc(n){n=$e(n);const e=$e(this);return xo(e).has.call(e,n)||(e.add(n),Fn(e,"add",n,n)),this}function nc(n,e){e=$e(e);const t=$e(this),{has:i,get:r}=xo(t);let s=i.call(t,n);s||(n=$e(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?Zr(e,o)&&Fn(t,"set",n,e):Fn(t,"add",n,e),this}function ic(n){const e=$e(this),{has:t,get:i}=xo(e);let r=t.call(e,n);r||(n=$e(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&Fn(e,"delete",n,void 0),s}function rc(){const n=$e(this),e=n.size!==0,t=n.clear();return e&&Fn(n,"clear",void 0,void 0),t}function ys(n,e){return function(i,r){const s=this,o=s.__v_raw,a=$e(o),l=e?gl:n?El:Jr;return!n&&Nt(a,"iterate",xi),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Ss(n,e,t){return function(...i){const r=this.__v_raw,s=$e(r),o=Br(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?gl:e?El:Jr;return!e&&Nt(s,"iterate",l?Pa:xi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function zn(n){return function(...e){return n==="delete"?!1:this}}function dp(){const n={get(s){return vs(this,s)},get size(){return Es(this)},has:xs,add:tc,set:nc,delete:ic,clear:rc,forEach:ys(!1,!1)},e={get(s){return vs(this,s,!1,!0)},get size(){return Es(this)},has:xs,add:tc,set:nc,delete:ic,clear:rc,forEach:ys(!1,!0)},t={get(s){return vs(this,s,!0)},get size(){return Es(this,!0)},has(s){return xs.call(this,s,!0)},add:zn("add"),set:zn("set"),delete:zn("delete"),clear:zn("clear"),forEach:ys(!0,!1)},i={get(s){return vs(this,s,!0,!0)},get size(){return Es(this,!0)},has(s){return xs.call(this,s,!0)},add:zn("add"),set:zn("set"),delete:zn("delete"),clear:zn("clear"),forEach:ys(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Ss(s,!1,!1),t[s]=Ss(s,!0,!1),e[s]=Ss(s,!1,!0),i[s]=Ss(s,!0,!0)}),[n,t,e,i]}const[pp,mp,_p,gp]=dp();function vl(n,e){const t=e?n?gp:_p:n?mp:pp;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ke(t,r)&&r in i?t:i,r,s)}const vp={get:vl(!1,!1)},xp={get:vl(!1,!0)},Ep={get:vl(!0,!1)},Nf=new WeakMap,Ff=new WeakMap,Bf=new WeakMap,yp=new WeakMap;function Sp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Mp(n){return n.__v_skip||!Object.isExtensible(n)?0:Sp(Bd(n))}function Eo(n){return hr(n)?n:xl(n,!1,Of,vp,Nf)}function zf(n){return xl(n,!1,hp,xp,Ff)}function Hf(n){return xl(n,!0,fp,Ep,Bf)}function xl(n,e,t,i,r){if(!lt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=Mp(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function ar(n){return hr(n)?ar(n.__v_raw):!!(n&&n.__v_isReactive)}function hr(n){return!!(n&&n.__v_isReadonly)}function ro(n){return!!(n&&n.__v_isShallow)}function kf(n){return ar(n)||hr(n)}function $e(n){const e=n&&n.__v_raw;return e?$e(e):n}function Gf(n){return io(n,"__v_skip",!0),n}const Jr=n=>lt(n)?Eo(n):n,El=n=>lt(n)?Hf(n):n;function Vf(n){$n&&Qt&&(n=$e(n),Df(n.dep||(n.dep=pl())))}function Wf(n,e){n=$e(n);const t=n.dep;t&&La(t)}function At(n){return!!(n&&n.__v_isRef===!0)}function bp(n){return Xf(n,!1)}function Tp(n){return Xf(n,!0)}function Xf(n,e){return At(n)?n:new Ap(n,e)}class Ap{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:$e(e),this._value=t?e:Jr(e)}get value(){return Vf(this),this._value}set value(e){const t=this.__v_isShallow||ro(e)||hr(e);e=t?e:$e(e),Zr(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Jr(e),Wf(this))}}function lr(n){return At(n)?n.value:n}const wp={get:(n,e,t)=>lr(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return At(r)&&!At(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function qf(n){return ar(n)?n:new Proxy(n,wp)}class Rp{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ml(e,()=>{this._dirty||(this._dirty=!0,Wf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=$e(this);return Vf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Cp(n,e,t=!1){let i,r;const s=Ve(n);return s?(i=n,r=on):(i=n.get,r=n.set),new Rp(i,r,s||!r,t)}function Zn(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){yo(s,e,t)}return r}function an(n,e,t,i){if(Ve(n)){const s=Zn(n,e,t,i);return s&&wf(s)&&s.catch(o=>{yo(o,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(an(n[s],e,t,i));return r}function yo(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Zn(l,null,10,[n,o,a]);return}}Pp(n,t,r,i)}function Pp(n,e,t,i=!0){console.error(n)}let Qr=!1,Da=!1;const Tt=[];let _n=0;const cr=[];let Pn=null,_i=0;const Yf=Promise.resolve();let yl=null;function jf(n){const e=yl||Yf;return n?e.then(this?n.bind(this):n):e}function Lp(n){let e=_n+1,t=Tt.length;for(;e<t;){const i=e+t>>>1;es(Tt[i])<n?e=i+1:t=i}return e}function Sl(n){(!Tt.length||!Tt.includes(n,Qr&&n.allowRecurse?_n+1:_n))&&(n.id==null?Tt.push(n):Tt.splice(Lp(n.id),0,n),Kf())}function Kf(){!Qr&&!Da&&(Da=!0,yl=Yf.then(Zf))}function Dp(n){const e=Tt.indexOf(n);e>_n&&Tt.splice(e,1)}function Up(n){He(n)?cr.push(...n):(!Pn||!Pn.includes(n,n.allowRecurse?_i+1:_i))&&cr.push(n),Kf()}function sc(n,e=Qr?_n+1:0){for(;e<Tt.length;e++){const t=Tt[e];t&&t.pre&&(Tt.splice(e,1),e--,t())}}function $f(n){if(cr.length){const e=[...new Set(cr)];if(cr.length=0,Pn){Pn.push(...e);return}for(Pn=e,Pn.sort((t,i)=>es(t)-es(i)),_i=0;_i<Pn.length;_i++)Pn[_i]();Pn=null,_i=0}}const es=n=>n.id==null?1/0:n.id,Ip=(n,e)=>{const t=es(n)-es(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Zf(n){Da=!1,Qr=!0,Tt.sort(Ip);const e=on;try{for(_n=0;_n<Tt.length;_n++){const t=Tt[_n];t&&t.active!==!1&&Zn(t,null,14)}}finally{_n=0,Tt.length=0,$f(),Qr=!1,yl=null,(Tt.length||cr.length)&&Zf()}}function Op(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||it;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||it;h&&(r=t.map(p=>St(p)?p.trim():p)),f&&(r=t.map(Gd))}let a,l=i[a=Bo(e)]||i[a=Bo(vn(e))];!l&&s&&(l=i[a=Bo(yr(e))]),l&&an(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,an(c,n,6,r)}}function Jf(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ve(n)){const l=c=>{const u=Jf(c,e,!0);u&&(a=!0,xt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(lt(n)&&i.set(n,null),null):(He(s)?s.forEach(l=>o[l]=null):xt(o,s),lt(n)&&i.set(n,o),o)}function So(n,e){return!n||!mo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ke(n,e[0].toLowerCase()+e.slice(1))||Ke(n,yr(e))||Ke(n,e))}let rn=null,Qf=null;function so(n){const e=rn;return rn=n,Qf=n&&n.type.__scopeId||null,e}function Ua(n,e=rn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&_c(-1);const s=so(e);let o;try{o=n(...r)}finally{so(s),i._d&&_c(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ho(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:p,ctx:g,inheritAttrs:v}=n;let m,d;const w=so(n);try{if(t.shapeFlag&4){const y=r||i;m=pn(u.call(y,y,f,s,p,h,g)),d=l}else{const y=e;m=pn(y.length>1?y(s,{attrs:l,slots:a,emit:c}):y(s,null)),d=e.props?l:Np(l)}}catch(y){Hr.length=0,yo(y,n,1),m=It(ts)}let E=m;if(d&&v!==!1){const y=Object.keys(d),{shapeFlag:C}=E;y.length&&C&7&&(o&&y.some(ll)&&(d=Fp(d,o)),E=dr(E,d))}return t.dirs&&(E=dr(E),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&(E.transition=t.transition),m=E,so(w),m}const Np=n=>{let e;for(const t in n)(t==="class"||t==="style"||mo(t))&&((e||(e={}))[t]=n[t]);return e},Fp=(n,e)=>{const t={};for(const i in n)(!ll(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Bp(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?oc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!So(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?oc(i,o,c):!0:!!o;return!1}function oc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!So(t,s))return!0}return!1}function zp({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Hp=n=>n.__isSuspense;function kp(n,e){e&&e.pendingBranch?He(n)?e.effects.push(...n):e.effects.push(n):Up(n)}const Ms={};function Js(n,e,t){return eh(n,e,t)}function eh(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:o}=it){var a;const l=Zd()===((a=Et)==null?void 0:a.scope)?Et:null;let c,u=!1,f=!1;if(At(n)?(c=()=>n.value,u=ro(n)):ar(n)?(c=()=>n,i=!0):He(n)?(f=!0,u=n.some(y=>ar(y)||ro(y)),c=()=>n.map(y=>{if(At(y))return y.value;if(ar(y))return nr(y);if(Ve(y))return Zn(y,l,2)})):Ve(n)?e?c=()=>Zn(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),an(n,l,3,[p])}:c=on,e&&i){const y=c;c=()=>nr(y())}let h,p=y=>{h=w.onStop=()=>{Zn(y,l,4)}},g;if(is)if(p=on,e?t&&an(e,l,3,[c(),f?[]:void 0,p]):c(),r==="sync"){const y=Im();g=y.__watcherHandles||(y.__watcherHandles=[])}else return on;let v=f?new Array(n.length).fill(Ms):Ms;const m=()=>{if(w.active)if(e){const y=w.run();(i||u||(f?y.some((C,I)=>Zr(C,v[I])):Zr(y,v)))&&(h&&h(),an(e,l,3,[y,v===Ms?void 0:f&&v[0]===Ms?[]:v,p]),v=y)}else w.run()};m.allowRecurse=!!e;let d;r==="sync"?d=m:r==="post"?d=()=>Ut(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),d=()=>Sl(m));const w=new ml(c,d);e?t?m():v=w.run():r==="post"?Ut(w.run.bind(w),l&&l.suspense):w.run();const E=()=>{w.stop(),l&&l.scope&&cl(l.scope.effects,w)};return g&&g.push(E),E}function Gp(n,e,t){const i=this.proxy,r=St(n)?n.includes(".")?th(i,n):()=>i[n]:n.bind(i,i);let s;Ve(e)?s=e:(s=e.handler,t=e);const o=Et;pr(this);const a=eh(r,s.bind(i),t);return o?pr(o):Ei(),a}function th(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function nr(n,e){if(!lt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),At(n))nr(n.value,e);else if(He(n))for(let t=0;t<n.length;t++)nr(n[t],e);else if(Nd(n)||Br(n))n.forEach(t=>{nr(t,e)});else if(zd(n))for(const t in n)nr(n[t],e);return n}function ci(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Sr(),an(l,t,8,[n.el,a,n,e]),Mr())}}function nh(n,e){return Ve(n)?(()=>xt({name:n.name},e,{setup:n}))():n}const Qs=n=>!!n.type.__asyncLoader,ih=n=>n.type.__isKeepAlive;function Vp(n,e){rh(n,"a",e)}function Wp(n,e){rh(n,"da",e)}function rh(n,e,t=Et){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Mo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ih(r.parent.vnode)&&Xp(i,e,t,r),r=r.parent}}function Xp(n,e,t,i){const r=Mo(e,n,i,!0);sh(()=>{cl(i[e],r)},t)}function Mo(n,e,t=Et,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Sr(),pr(t);const a=an(e,t,n,o);return Ei(),Mr(),a});return i?r.unshift(s):r.push(s),s}}const Bn=n=>(e,t=Et)=>(!is||n==="sp")&&Mo(n,(...i)=>e(...i),t),qp=Bn("bm"),Yp=Bn("m"),jp=Bn("bu"),Kp=Bn("u"),$p=Bn("bum"),sh=Bn("um"),Zp=Bn("sp"),Jp=Bn("rtg"),Qp=Bn("rtc");function em(n,e=Et){Mo("ec",n,e)}const oh="components";function bo(n,e){return nm(oh,n,!0,e)||n}const tm=Symbol.for("v-ndc");function nm(n,e,t=!0,i=!1){const r=rn||Et;if(r){const s=r.type;if(n===oh){const a=Lm(s,!1);if(a&&(a===e||a===vn(e)||a===vo(vn(e))))return s}const o=ac(r[n]||s[n],e)||ac(r.appContext[n],e);return!o&&i?s:o}}function ac(n,e){return n&&(n[e]||n[vn(e)]||n[vo(vn(e))])}const Ia=n=>n?xh(n)?Rl(n)||n.proxy:Ia(n.parent):null,zr=xt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ia(n.parent),$root:n=>Ia(n.root),$emit:n=>n.emit,$options:n=>Ml(n),$forceUpdate:n=>n.f||(n.f=()=>Sl(n.update)),$nextTick:n=>n.n||(n.n=jf.bind(n.proxy)),$watch:n=>Gp.bind(n)}),ko=(n,e)=>n!==it&&!n.__isScriptSetup&&Ke(n,e),im={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(ko(i,e))return o[e]=1,i[e];if(r!==it&&Ke(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&Ke(c,e))return o[e]=3,s[e];if(t!==it&&Ke(t,e))return o[e]=4,t[e];Oa&&(o[e]=0)}}const u=zr[e];let f,h;if(u)return e==="$attrs"&&Nt(n,"get",e),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==it&&Ke(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Ke(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return ko(r,e)?(r[e]=t,!0):i!==it&&Ke(i,e)?(i[e]=t,!0):Ke(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==it&&Ke(n,o)||ko(e,o)||(a=s[0])&&Ke(a,o)||Ke(i,o)||Ke(zr,o)||Ke(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ke(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function lc(n){return He(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Oa=!0;function rm(n){const e=Ml(n),t=n.proxy,i=n.ctx;Oa=!1,e.beforeCreate&&cc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:g,activated:v,deactivated:m,beforeDestroy:d,beforeUnmount:w,destroyed:E,unmounted:y,render:C,renderTracked:I,renderTriggered:P,errorCaptured:te,serverPrefetch:b,expose:R,inheritAttrs:ce,components:_e,directives:H,filters:$}=e;if(c&&sm(c,i,null),o)for(const W in o){const K=o[W];Ve(K)&&(i[W]=K.bind(t))}if(r){const W=r.call(t,t);lt(W)&&(n.data=Eo(W))}if(Oa=!0,s)for(const W in s){const K=s[W],me=Ve(K)?K.bind(t,t):Ve(K.get)?K.get.bind(t,t):on,fe=!Ve(K)&&Ve(K.set)?K.set.bind(t):on,z=en({get:me,set:fe});Object.defineProperty(i,W,{enumerable:!0,configurable:!0,get:()=>z.value,set:q=>z.value=q})}if(a)for(const W in a)ah(a[W],i,t,W);if(l){const W=Ve(l)?l.call(t):l;Reflect.ownKeys(W).forEach(K=>{eo(K,W[K])})}u&&cc(u,n,"c");function oe(W,K){He(K)?K.forEach(me=>W(me.bind(t))):K&&W(K.bind(t))}if(oe(qp,f),oe(Yp,h),oe(jp,p),oe(Kp,g),oe(Vp,v),oe(Wp,m),oe(em,te),oe(Qp,I),oe(Jp,P),oe($p,w),oe(sh,y),oe(Zp,b),He(R))if(R.length){const W=n.exposed||(n.exposed={});R.forEach(K=>{Object.defineProperty(W,K,{get:()=>t[K],set:me=>t[K]=me})})}else n.exposed||(n.exposed={});C&&n.render===on&&(n.render=C),ce!=null&&(n.inheritAttrs=ce),_e&&(n.components=_e),H&&(n.directives=H)}function sm(n,e,t=on){He(n)&&(n=Na(n));for(const i in n){const r=n[i];let s;lt(r)?"default"in r?s=On(r.from||i,r.default,!0):s=On(r.from||i):s=On(r),At(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function cc(n,e,t){an(He(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function ah(n,e,t,i){const r=i.includes(".")?th(t,i):()=>t[i];if(St(n)){const s=e[n];Ve(s)&&Js(r,s)}else if(Ve(n))Js(r,n.bind(t));else if(lt(n))if(He(n))n.forEach(s=>ah(s,e,t,i));else{const s=Ve(n.handler)?n.handler.bind(t):e[n.handler];Ve(s)&&Js(r,s,n)}}function Ml(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>oo(l,c,o,!0)),oo(l,e,o)),lt(e)&&s.set(e,l),l}function oo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&oo(n,s,t,!0),r&&r.forEach(o=>oo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=om[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const om={data:uc,props:fc,emits:fc,methods:Or,computed:Or,beforeCreate:Ct,created:Ct,beforeMount:Ct,mounted:Ct,beforeUpdate:Ct,updated:Ct,beforeDestroy:Ct,beforeUnmount:Ct,destroyed:Ct,unmounted:Ct,activated:Ct,deactivated:Ct,errorCaptured:Ct,serverPrefetch:Ct,components:Or,directives:Or,watch:lm,provide:uc,inject:am};function uc(n,e){return e?n?function(){return xt(Ve(n)?n.call(this,this):n,Ve(e)?e.call(this,this):e)}:e:n}function am(n,e){return Or(Na(n),Na(e))}function Na(n){if(He(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ct(n,e){return n?[...new Set([].concat(n,e))]:e}function Or(n,e){return n?xt(Object.create(null),n,e):e}function fc(n,e){return n?He(n)&&He(e)?[...new Set([...n,...e])]:xt(Object.create(null),lc(n),lc(e??{})):e}function lm(n,e){if(!n)return e;if(!e)return n;const t=xt(Object.create(null),n);for(const i in e)t[i]=Ct(n[i],e[i]);return t}function lh(){return{app:null,config:{isNativeTag:Ud,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cm=0;function um(n,e){return function(i,r=null){Ve(i)||(i=xt({},i)),r!=null&&!lt(r)&&(r=null);const s=lh(),o=new Set;let a=!1;const l=s.app={_uid:cm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Om,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ve(c.install)?(o.add(c),c.install(l,...u)):Ve(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=It(i,r);return h.appContext=s,u&&e?e(h,c):n(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Rl(h.component)||h.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){ao=l;try{return c()}finally{ao=null}}};return l}}let ao=null;function eo(n,e){if(Et){let t=Et.provides;const i=Et.parent&&Et.parent.provides;i===t&&(t=Et.provides=Object.create(i)),t[n]=e}}function On(n,e,t=!1){const i=Et||rn;if(i||ao){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:ao._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ve(e)?e.call(i&&i.proxy):e}}function fm(n,e,t,i=!1){const r={},s={};io(s,Ao,1),n.propsDefaults=Object.create(null),ch(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:zf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function hm(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=$e(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(So(n.emitsOptions,h))continue;const p=e[h];if(l)if(Ke(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const g=vn(h);r[g]=Fa(l,a,g,p,n,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{ch(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Ke(e,f)&&((u=yr(f))===f||!Ke(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Fa(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ke(e,f))&&(delete s[f],c=!0)}c&&Fn(n,"set","$attrs")}function ch(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Zs(l))continue;const c=e[l];let u;r&&Ke(r,u=vn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:So(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=$e(t),c=a||it;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Fa(r,l,f,c[f],n,!Ke(c,f))}}return o}function Fa(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Ke(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ve(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(pr(r),i=c[t]=l.call(null,e),Ei())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===yr(t))&&(i=!0))}return i}function uh(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ve(n)){const u=f=>{l=!0;const[h,p]=uh(f,e,!0);xt(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return lt(n)&&i.set(n,or),or;if(He(s))for(let u=0;u<s.length;u++){const f=vn(s[u]);hc(f)&&(o[f]=it)}else if(s)for(const u in s){const f=vn(u);if(hc(f)){const h=s[u],p=o[f]=He(h)||Ve(h)?{type:h}:xt({},h);if(p){const g=mc(Boolean,p.type),v=mc(String,p.type);p[0]=g>-1,p[1]=v<0||g<v,(g>-1||Ke(p,"default"))&&a.push(f)}}}const c=[o,a];return lt(n)&&i.set(n,c),c}function hc(n){return n[0]!=="$"}function dc(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function pc(n,e){return dc(n)===dc(e)}function mc(n,e){return He(e)?e.findIndex(t=>pc(t,n)):Ve(e)&&pc(e,n)?0:-1}const fh=n=>n[0]==="_"||n==="$stable",bl=n=>He(n)?n.map(pn):[pn(n)],dm=(n,e,t)=>{if(e._n)return e;const i=Ua((...r)=>bl(e(...r)),t);return i._c=!1,i},hh=(n,e,t)=>{const i=n._ctx;for(const r in n){if(fh(r))continue;const s=n[r];if(Ve(s))e[r]=dm(r,s,i);else if(s!=null){const o=bl(s);e[r]=()=>o}}},dh=(n,e)=>{const t=bl(e);n.slots.default=()=>t},pm=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=$e(e),io(e,"_",t)):hh(e,n.slots={})}else n.slots={},e&&dh(n,e);io(n.slots,Ao,1)},mm=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=it;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(xt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,hh(e,r)),o=e}else e&&(dh(n,e),o={default:1});if(s)for(const a in r)!fh(a)&&!(a in o)&&delete r[a]};function Ba(n,e,t,i,r=!1){if(He(n)){n.forEach((h,p)=>Ba(h,e&&(He(e)?e[p]:e),t,i,r));return}if(Qs(i)&&!r)return;const s=i.shapeFlag&4?Rl(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===it?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(St(c)?(u[c]=null,Ke(f,c)&&(f[c]=null)):At(c)&&(c.value=null)),Ve(l))Zn(l,a,12,[o,u]);else{const h=St(l),p=At(l);if(h||p){const g=()=>{if(n.f){const v=h?Ke(f,l)?f[l]:u[l]:l.value;r?He(v)&&cl(v,s):He(v)?v.includes(s)||v.push(s):h?(u[l]=[s],Ke(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=o,Ke(f,l)&&(f[l]=o)):p&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,Ut(g,t)):g()}}}const Ut=kp;function _m(n){return gm(n)}function gm(n,e){const t=wa();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=on,insertStaticContent:g}=n,v=(_,M,T,U=null,D=null,k=null,J=!1,V=null,ne=!!M.dynamicChildren)=>{if(_===M)return;_&&!Ar(_,M)&&(U=B(_),q(_,D,k,!0),_=null),M.patchFlag===-2&&(ne=!1,M.dynamicChildren=null);const{type:ee,ref:Re,shapeFlag:S}=M;switch(ee){case To:m(_,M,T,U);break;case ts:d(_,M,T,U);break;case Go:_==null&&w(M,T,U,J);break;case Ln:_e(_,M,T,U,D,k,J,V,ne);break;default:S&1?C(_,M,T,U,D,k,J,V,ne):S&6?H(_,M,T,U,D,k,J,V,ne):(S&64||S&128)&&ee.process(_,M,T,U,D,k,J,V,ne,de)}Re!=null&&D&&Ba(Re,_&&_.ref,k,M||_,!M)},m=(_,M,T,U)=>{if(_==null)i(M.el=a(M.children),T,U);else{const D=M.el=_.el;M.children!==_.children&&c(D,M.children)}},d=(_,M,T,U)=>{_==null?i(M.el=l(M.children||""),T,U):M.el=_.el},w=(_,M,T,U)=>{[_.el,_.anchor]=g(_.children,M,T,U,_.el,_.anchor)},E=({el:_,anchor:M},T,U)=>{let D;for(;_&&_!==M;)D=h(_),i(_,T,U),_=D;i(M,T,U)},y=({el:_,anchor:M})=>{let T;for(;_&&_!==M;)T=h(_),r(_),_=T;r(M)},C=(_,M,T,U,D,k,J,V,ne)=>{J=J||M.type==="svg",_==null?I(M,T,U,D,k,J,V,ne):b(_,M,D,k,J,V,ne)},I=(_,M,T,U,D,k,J,V)=>{let ne,ee;const{type:Re,props:S,shapeFlag:x,transition:N,dirs:ie}=_;if(ne=_.el=o(_.type,k,S&&S.is,S),x&8?u(ne,_.children):x&16&&te(_.children,ne,null,U,D,k&&Re!=="foreignObject",J,V),ie&&ci(_,null,U,"created"),P(ne,_,_.scopeId,J,U),S){for(const ue in S)ue!=="value"&&!Zs(ue)&&s(ne,ue,null,S[ue],k,_.children,U,D,Ue);"value"in S&&s(ne,"value",null,S.value),(ee=S.onVnodeBeforeMount)&&hn(ee,U,_)}ie&&ci(_,null,U,"beforeMount");const ae=(!D||D&&!D.pendingBranch)&&N&&!N.persisted;ae&&N.beforeEnter(ne),i(ne,M,T),((ee=S&&S.onVnodeMounted)||ae||ie)&&Ut(()=>{ee&&hn(ee,U,_),ae&&N.enter(ne),ie&&ci(_,null,U,"mounted")},D)},P=(_,M,T,U,D)=>{if(T&&p(_,T),U)for(let k=0;k<U.length;k++)p(_,U[k]);if(D){let k=D.subTree;if(M===k){const J=D.vnode;P(_,J,J.scopeId,J.slotScopeIds,D.parent)}}},te=(_,M,T,U,D,k,J,V,ne=0)=>{for(let ee=ne;ee<_.length;ee++){const Re=_[ee]=V?Xn(_[ee]):pn(_[ee]);v(null,Re,M,T,U,D,k,J,V)}},b=(_,M,T,U,D,k,J)=>{const V=M.el=_.el;let{patchFlag:ne,dynamicChildren:ee,dirs:Re}=M;ne|=_.patchFlag&16;const S=_.props||it,x=M.props||it;let N;T&&ui(T,!1),(N=x.onVnodeBeforeUpdate)&&hn(N,T,M,_),Re&&ci(M,_,T,"beforeUpdate"),T&&ui(T,!0);const ie=D&&M.type!=="foreignObject";if(ee?R(_.dynamicChildren,ee,V,T,U,ie,k):J||K(_,M,V,null,T,U,ie,k,!1),ne>0){if(ne&16)ce(V,M,S,x,T,U,D);else if(ne&2&&S.class!==x.class&&s(V,"class",null,x.class,D),ne&4&&s(V,"style",S.style,x.style,D),ne&8){const ae=M.dynamicProps;for(let ue=0;ue<ae.length;ue++){const Te=ae[ue],ge=S[Te],Y=x[Te];(Y!==ge||Te==="value")&&s(V,Te,ge,Y,D,_.children,T,U,Ue)}}ne&1&&_.children!==M.children&&u(V,M.children)}else!J&&ee==null&&ce(V,M,S,x,T,U,D);((N=x.onVnodeUpdated)||Re)&&Ut(()=>{N&&hn(N,T,M,_),Re&&ci(M,_,T,"updated")},U)},R=(_,M,T,U,D,k,J)=>{for(let V=0;V<M.length;V++){const ne=_[V],ee=M[V],Re=ne.el&&(ne.type===Ln||!Ar(ne,ee)||ne.shapeFlag&70)?f(ne.el):T;v(ne,ee,Re,null,U,D,k,J,!0)}},ce=(_,M,T,U,D,k,J)=>{if(T!==U){if(T!==it)for(const V in T)!Zs(V)&&!(V in U)&&s(_,V,T[V],null,J,M.children,D,k,Ue);for(const V in U){if(Zs(V))continue;const ne=U[V],ee=T[V];ne!==ee&&V!=="value"&&s(_,V,ee,ne,J,M.children,D,k,Ue)}"value"in U&&s(_,"value",T.value,U.value)}},_e=(_,M,T,U,D,k,J,V,ne)=>{const ee=M.el=_?_.el:a(""),Re=M.anchor=_?_.anchor:a("");let{patchFlag:S,dynamicChildren:x,slotScopeIds:N}=M;N&&(V=V?V.concat(N):N),_==null?(i(ee,T,U),i(Re,T,U),te(M.children,T,Re,D,k,J,V,ne)):S>0&&S&64&&x&&_.dynamicChildren?(R(_.dynamicChildren,x,T,D,k,J,V),(M.key!=null||D&&M===D.subTree)&&ph(_,M,!0)):K(_,M,T,Re,D,k,J,V,ne)},H=(_,M,T,U,D,k,J,V,ne)=>{M.slotScopeIds=V,_==null?M.shapeFlag&512?D.ctx.activate(M,T,U,J,ne):$(M,T,U,D,k,J,ne):Z(_,M,ne)},$=(_,M,T,U,D,k,J)=>{const V=_.component=Am(_,U,D);if(ih(_)&&(V.ctx.renderer=de),wm(V),V.asyncDep){if(D&&D.registerDep(V,oe),!_.el){const ne=V.subTree=It(ts);d(null,ne,M,T)}return}oe(V,_,M,T,D,k,J)},Z=(_,M,T)=>{const U=M.component=_.component;if(Bp(_,M,T))if(U.asyncDep&&!U.asyncResolved){W(U,M,T);return}else U.next=M,Dp(U.update),U.update();else M.el=_.el,U.vnode=M},oe=(_,M,T,U,D,k,J)=>{const V=()=>{if(_.isMounted){let{next:Re,bu:S,u:x,parent:N,vnode:ie}=_,ae=Re,ue;ui(_,!1),Re?(Re.el=ie.el,W(_,Re,J)):Re=ie,S&&zo(S),(ue=Re.props&&Re.props.onVnodeBeforeUpdate)&&hn(ue,N,Re,ie),ui(_,!0);const Te=Ho(_),ge=_.subTree;_.subTree=Te,v(ge,Te,f(ge.el),B(ge),_,D,k),Re.el=Te.el,ae===null&&zp(_,Te.el),x&&Ut(x,D),(ue=Re.props&&Re.props.onVnodeUpdated)&&Ut(()=>hn(ue,N,Re,ie),D)}else{let Re;const{el:S,props:x}=M,{bm:N,m:ie,parent:ae}=_,ue=Qs(M);if(ui(_,!1),N&&zo(N),!ue&&(Re=x&&x.onVnodeBeforeMount)&&hn(Re,ae,M),ui(_,!0),S&&Me){const Te=()=>{_.subTree=Ho(_),Me(S,_.subTree,_,D,null)};ue?M.type.__asyncLoader().then(()=>!_.isUnmounted&&Te()):Te()}else{const Te=_.subTree=Ho(_);v(null,Te,T,U,_,D,k),M.el=Te.el}if(ie&&Ut(ie,D),!ue&&(Re=x&&x.onVnodeMounted)){const Te=M;Ut(()=>hn(Re,ae,Te),D)}(M.shapeFlag&256||ae&&Qs(ae.vnode)&&ae.vnode.shapeFlag&256)&&_.a&&Ut(_.a,D),_.isMounted=!0,M=T=U=null}},ne=_.effect=new ml(V,()=>Sl(ee),_.scope),ee=_.update=()=>ne.run();ee.id=_.uid,ui(_,!0),ee()},W=(_,M,T)=>{M.component=_;const U=_.vnode.props;_.vnode=M,_.next=null,hm(_,M.props,U,T),mm(_,M.children,T),Sr(),sc(),Mr()},K=(_,M,T,U,D,k,J,V,ne=!1)=>{const ee=_&&_.children,Re=_?_.shapeFlag:0,S=M.children,{patchFlag:x,shapeFlag:N}=M;if(x>0){if(x&128){fe(ee,S,T,U,D,k,J,V,ne);return}else if(x&256){me(ee,S,T,U,D,k,J,V,ne);return}}N&8?(Re&16&&Ue(ee,D,k),S!==ee&&u(T,S)):Re&16?N&16?fe(ee,S,T,U,D,k,J,V,ne):Ue(ee,D,k,!0):(Re&8&&u(T,""),N&16&&te(S,T,U,D,k,J,V,ne))},me=(_,M,T,U,D,k,J,V,ne)=>{_=_||or,M=M||or;const ee=_.length,Re=M.length,S=Math.min(ee,Re);let x;for(x=0;x<S;x++){const N=M[x]=ne?Xn(M[x]):pn(M[x]);v(_[x],N,T,null,D,k,J,V,ne)}ee>Re?Ue(_,D,k,!0,!1,S):te(M,T,U,D,k,J,V,ne,S)},fe=(_,M,T,U,D,k,J,V,ne)=>{let ee=0;const Re=M.length;let S=_.length-1,x=Re-1;for(;ee<=S&&ee<=x;){const N=_[ee],ie=M[ee]=ne?Xn(M[ee]):pn(M[ee]);if(Ar(N,ie))v(N,ie,T,null,D,k,J,V,ne);else break;ee++}for(;ee<=S&&ee<=x;){const N=_[S],ie=M[x]=ne?Xn(M[x]):pn(M[x]);if(Ar(N,ie))v(N,ie,T,null,D,k,J,V,ne);else break;S--,x--}if(ee>S){if(ee<=x){const N=x+1,ie=N<Re?M[N].el:U;for(;ee<=x;)v(null,M[ee]=ne?Xn(M[ee]):pn(M[ee]),T,ie,D,k,J,V,ne),ee++}}else if(ee>x)for(;ee<=S;)q(_[ee],D,k,!0),ee++;else{const N=ee,ie=ee,ae=new Map;for(ee=ie;ee<=x;ee++){const ve=M[ee]=ne?Xn(M[ee]):pn(M[ee]);ve.key!=null&&ae.set(ve.key,ee)}let ue,Te=0;const ge=x-ie+1;let Y=!1,L=0;const he=new Array(ge);for(ee=0;ee<ge;ee++)he[ee]=0;for(ee=N;ee<=S;ee++){const ve=_[ee];if(Te>=ge){q(ve,D,k,!0);continue}let Ee;if(ve.key!=null)Ee=ae.get(ve.key);else for(ue=ie;ue<=x;ue++)if(he[ue-ie]===0&&Ar(ve,M[ue])){Ee=ue;break}Ee===void 0?q(ve,D,k,!0):(he[Ee-ie]=ee+1,Ee>=L?L=Ee:Y=!0,v(ve,M[Ee],T,null,D,k,J,V,ne),Te++)}const Pe=Y?vm(he):or;for(ue=Pe.length-1,ee=ge-1;ee>=0;ee--){const ve=ie+ee,Ee=M[ve],Ne=ve+1<Re?M[ve+1].el:U;he[ee]===0?v(null,Ee,T,Ne,D,k,J,V,ne):Y&&(ue<0||ee!==Pe[ue]?z(Ee,T,Ne,2):ue--)}}},z=(_,M,T,U,D=null)=>{const{el:k,type:J,transition:V,children:ne,shapeFlag:ee}=_;if(ee&6){z(_.component.subTree,M,T,U);return}if(ee&128){_.suspense.move(M,T,U);return}if(ee&64){J.move(_,M,T,de);return}if(J===Ln){i(k,M,T);for(let S=0;S<ne.length;S++)z(ne[S],M,T,U);i(_.anchor,M,T);return}if(J===Go){E(_,M,T);return}if(U!==2&&ee&1&&V)if(U===0)V.beforeEnter(k),i(k,M,T),Ut(()=>V.enter(k),D);else{const{leave:S,delayLeave:x,afterLeave:N}=V,ie=()=>i(k,M,T),ae=()=>{S(k,()=>{ie(),N&&N()})};x?x(k,ie,ae):ae()}else i(k,M,T)},q=(_,M,T,U=!1,D=!1)=>{const{type:k,props:J,ref:V,children:ne,dynamicChildren:ee,shapeFlag:Re,patchFlag:S,dirs:x}=_;if(V!=null&&Ba(V,null,T,_,!0),Re&256){M.ctx.deactivate(_);return}const N=Re&1&&x,ie=!Qs(_);let ae;if(ie&&(ae=J&&J.onVnodeBeforeUnmount)&&hn(ae,M,_),Re&6)De(_.component,T,U);else{if(Re&128){_.suspense.unmount(T,U);return}N&&ci(_,null,M,"beforeUnmount"),Re&64?_.type.remove(_,M,T,D,de,U):ee&&(k!==Ln||S>0&&S&64)?Ue(ee,M,T,!1,!0):(k===Ln&&S&384||!D&&Re&16)&&Ue(ne,M,T),U&&Se(_)}(ie&&(ae=J&&J.onVnodeUnmounted)||N)&&Ut(()=>{ae&&hn(ae,M,_),N&&ci(_,null,M,"unmounted")},T)},Se=_=>{const{type:M,el:T,anchor:U,transition:D}=_;if(M===Ln){we(T,U);return}if(M===Go){y(_);return}const k=()=>{r(T),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(_.shapeFlag&1&&D&&!D.persisted){const{leave:J,delayLeave:V}=D,ne=()=>J(T,k);V?V(_.el,k,ne):ne()}else k()},we=(_,M)=>{let T;for(;_!==M;)T=h(_),r(_),_=T;r(M)},De=(_,M,T)=>{const{bum:U,scope:D,update:k,subTree:J,um:V}=_;U&&zo(U),D.stop(),k&&(k.active=!1,q(J,_,M,T)),V&&Ut(V,M),Ut(()=>{_.isUnmounted=!0},M),M&&M.pendingBranch&&!M.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===M.pendingId&&(M.deps--,M.deps===0&&M.resolve())},Ue=(_,M,T,U=!1,D=!1,k=0)=>{for(let J=k;J<_.length;J++)q(_[J],M,T,U,D)},B=_=>_.shapeFlag&6?B(_.component.subTree):_.shapeFlag&128?_.suspense.next():h(_.anchor||_.el),le=(_,M,T)=>{_==null?M._vnode&&q(M._vnode,null,null,!0):v(M._vnode||null,_,M,null,null,null,T),sc(),$f(),M._vnode=_},de={p:v,um:q,m:z,r:Se,mt:$,mc:te,pc:K,pbc:R,n:B,o:n};let ye,Me;return e&&([ye,Me]=e(de)),{render:le,hydrate:ye,createApp:um(le,ye)}}function ui({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function ph(n,e,t=!1){const i=n.children,r=e.children;if(He(i)&&He(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Xn(r[s]),a.el=o.el),t||ph(o,a)),a.type===To&&(a.el=o.el)}}function vm(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const xm=n=>n.__isTeleport,Ln=Symbol.for("v-fgt"),To=Symbol.for("v-txt"),ts=Symbol.for("v-cmt"),Go=Symbol.for("v-stc"),Hr=[];let sn=null;function hs(n=!1){Hr.push(sn=n?null:[])}function Em(){Hr.pop(),sn=Hr[Hr.length-1]||null}let ns=1;function _c(n){ns+=n}function mh(n){return n.dynamicChildren=ns>0?sn||or:null,Em(),ns>0&&sn&&sn.push(n),n}function _h(n,e,t,i,r,s){return mh(vh(n,e,t,i,r,s,!0))}function Tl(n,e,t,i,r){return mh(It(n,e,t,i,r,!0))}function za(n){return n?n.__v_isVNode===!0:!1}function Ar(n,e){return n.type===e.type&&n.key===e.key}const Ao="__vInternal",gh=({key:n})=>n??null,to=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?St(n)||At(n)||Ve(n)?{i:rn,r:n,k:e,f:!!t}:n:null);function vh(n,e=null,t=null,i=0,r=null,s=n===Ln?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&gh(e),ref:e&&to(e),scopeId:Qf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:rn};return a?(Al(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=St(t)?8:16),ns>0&&!o&&sn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&sn.push(l),l}const It=ym;function ym(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===tm)&&(n=ts),za(n)){const a=dr(n,e,!0);return t&&Al(a,t),ns>0&&!s&&sn&&(a.shapeFlag&6?sn[sn.indexOf(n)]=a:sn.push(a)),a.patchFlag|=-2,a}if(Dm(n)&&(n=n.__vccOpts),e){e=Sm(e);let{class:a,style:l}=e;a&&!St(a)&&(e.class=dl(a)),lt(l)&&(kf(l)&&!He(l)&&(l=xt({},l)),e.style=hl(l))}const o=St(n)?1:Hp(n)?128:xm(n)?64:lt(n)?4:Ve(n)?2:0;return vh(n,e,t,i,r,o,s,!0)}function Sm(n){return n?kf(n)||Ao in n?xt({},n):n:null}function dr(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=e?Mm(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&gh(a),ref:e&&e.ref?t&&r?He(r)?r.concat(to(e)):[r,to(e)]:to(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ln?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&dr(n.ssContent),ssFallback:n.ssFallback&&dr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Ha(n=" ",e=0){return It(To,null,n,e)}function pn(n){return n==null||typeof n=="boolean"?It(ts):He(n)?It(Ln,null,n.slice()):typeof n=="object"?Xn(n):It(To,null,String(n))}function Xn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:dr(n)}function Al(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(He(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Al(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Ao in e)?e._ctx=rn:r===3&&rn&&(rn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ve(e)?(e={default:e,_ctx:rn},t=32):(e=String(e),i&64?(t=16,e=[Ha(e)]):t=8);n.children=e,n.shapeFlag|=t}function Mm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=dl([e.class,i.class]));else if(r==="style")e.style=hl([e.style,i.style]);else if(mo(r)){const s=e[r],o=i[r];o&&s!==o&&!(He(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function hn(n,e,t,i=null){an(n,e,7,[t,i])}const bm=lh();let Tm=0;function Am(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||bm,s={uid:Tm++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Kd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:uh(i,r),emitsOptions:Jf(i,r),emit:null,emitted:null,propsDefaults:it,inheritAttrs:i.inheritAttrs,ctx:it,data:it,props:it,attrs:it,slots:it,refs:it,setupState:it,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Op.bind(null,s),n.ce&&n.ce(s),s}let Et=null,wl,Di,gc="__VUE_INSTANCE_SETTERS__";(Di=wa()[gc])||(Di=wa()[gc]=[]),Di.push(n=>Et=n),wl=n=>{Di.length>1?Di.forEach(e=>e(n)):Di[0](n)};const pr=n=>{wl(n),n.scope.on()},Ei=()=>{Et&&Et.scope.off(),wl(null)};function xh(n){return n.vnode.shapeFlag&4}let is=!1;function wm(n,e=!1){is=e;const{props:t,children:i}=n.vnode,r=xh(n);fm(n,t,r,e),pm(n,i);const s=r?Rm(n,e):void 0;return is=!1,s}function Rm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Gf(new Proxy(n.ctx,im));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Pm(n):null;pr(n),Sr();const s=Zn(i,n,0,[n.props,r]);if(Mr(),Ei(),wf(s)){if(s.then(Ei,Ei),e)return s.then(o=>{vc(n,o,e)}).catch(o=>{yo(o,n,0)});n.asyncDep=s}else vc(n,s,e)}else Eh(n,e)}function vc(n,e,t){Ve(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:lt(e)&&(n.setupState=qf(e)),Eh(n,t)}let xc;function Eh(n,e,t){const i=n.type;if(!n.render){if(!e&&xc&&!i.render){const r=i.template||Ml(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=xt(xt({isCustomElement:s,delimiters:a},o),l);i.render=xc(r,c)}}n.render=i.render||on}pr(n),Sr(),rm(n),Mr(),Ei()}function Cm(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return Nt(n,"get","$attrs"),e[t]}}))}function Pm(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return Cm(n)},slots:n.slots,emit:n.emit,expose:e}}function Rl(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(qf(Gf(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in zr)return zr[t](n)},has(e,t){return t in e||t in zr}}))}function Lm(n,e=!0){return Ve(n)?n.displayName||n.name:n.name||e&&n.__name}function Dm(n){return Ve(n)&&"__vccOpts"in n}const en=(n,e)=>Cp(n,e,is);function yh(n,e,t){const i=arguments.length;return i===2?lt(e)&&!He(e)?za(e)?It(n,null,[e]):It(n,e):It(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&za(t)&&(t=[t]),It(n,e,t))}const Um=Symbol.for("v-scx"),Im=()=>On(Um),Om="3.3.4",Nm="http://www.w3.org/2000/svg",gi=typeof document<"u"?document:null,Ec=gi&&gi.createElement("template"),Fm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?gi.createElementNS(Nm,n):gi.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>gi.createTextNode(n),createComment:n=>gi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>gi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Ec.innerHTML=i?`<svg>${n}</svg>`:n;const a=Ec.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Bm(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function zm(n,e,t){const i=n.style,r=St(t);if(t&&!r){if(e&&!St(e))for(const s in e)t[s]==null&&ka(i,s,"");for(const s in t)ka(i,s,t[s])}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const yc=/\s*!important$/;function ka(n,e,t){if(He(t))t.forEach(i=>ka(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Hm(n,e);yc.test(t)?n.setProperty(yr(i),t.replace(yc,""),"important"):n[i]=t}}const Sc=["Webkit","Moz","ms"],Vo={};function Hm(n,e){const t=Vo[e];if(t)return t;let i=vn(e);if(i!=="filter"&&i in n)return Vo[e]=i;i=vo(i);for(let r=0;r<Sc.length;r++){const s=Sc[r]+i;if(s in n)return Vo[e]=s}return e}const Mc="http://www.w3.org/1999/xlink";function km(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Mc,e.slice(6,e.length)):n.setAttributeNS(Mc,e,t);else{const s=jd(e);t==null||s&&!Rf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Gm(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){n._value=t;const c=a==="OPTION"?n.getAttribute("value"):n.value,u=t??"";c!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Rf(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function Vm(n,e,t,i){n.addEventListener(e,t,i)}function Wm(n,e,t,i){n.removeEventListener(e,t,i)}function Xm(n,e,t,i,r=null){const s=n._vei||(n._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=qm(e);if(i){const c=s[e]=Km(i,r);Vm(n,a,c,l)}else o&&(Wm(n,a,o,l),s[e]=void 0)}}const bc=/(?:Once|Passive|Capture)$/;function qm(n){let e;if(bc.test(n)){e={};let i;for(;i=n.match(bc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):yr(n.slice(2)),e]}let Wo=0;const Ym=Promise.resolve(),jm=()=>Wo||(Ym.then(()=>Wo=0),Wo=Date.now());function Km(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;an($m(i,t.value),e,5,[i])};return t.value=n,t.attached=jm(),t}function $m(n,e){if(He(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Tc=/^on[a-z]/,Zm=(n,e,t,i,r=!1,s,o,a,l)=>{e==="class"?Bm(n,i,r):e==="style"?zm(n,t,i):mo(e)?ll(e)||Xm(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Jm(n,e,i,r))?Gm(n,e,i,s,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),km(n,e,i,r))};function Jm(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Tc.test(e)&&Ve(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Tc.test(e)&&St(t)?!1:e in n}const Qm=xt({patchProp:Zm},Fm);let Ac;function e_(){return Ac||(Ac=_m(Qm))}const t_=(...n)=>{const e=e_().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=n_(i);if(!r)return;const s=e._component;!Ve(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function n_(n){return St(n)?document.querySelector(n):n}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Zi=typeof window<"u";function i_(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Je=Object.assign;function Xo(n,e){const t={};for(const i in e){const r=e[i];t[i]=ln(r)?r.map(n):n(r)}return t}const kr=()=>{},ln=Array.isArray,r_=/\/$/,s_=n=>n.replace(r_,"");function qo(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=c_(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function o_(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function wc(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function a_(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&mr(e.matched[i],t.matched[r])&&Sh(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function mr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Sh(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!l_(n[t],e[t]))return!1;return!0}function l_(n,e){return ln(n)?Rc(n,e):ln(e)?Rc(e,n):n===e}function Rc(n,e){return ln(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function c_(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var rs;(function(n){n.pop="pop",n.push="push"})(rs||(rs={}));var Gr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Gr||(Gr={}));function u_(n){if(!n)if(Zi){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),s_(n)}const f_=/^[^#]+#/;function h_(n,e){return n.replace(f_,"#")+e}function d_(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const wo=()=>({left:window.pageXOffset,top:window.pageYOffset});function p_(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=d_(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Cc(n,e){return(history.state?history.state.position-e:-1)+n}const Ga=new Map;function m_(n,e){Ga.set(n,e)}function __(n){const e=Ga.get(n);return Ga.delete(n),e}let g_=()=>location.protocol+"//"+location.host;function Mh(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),wc(l,"")}return wc(t,n)+i+r}function v_(n,e,t,i){let r=[],s=[],o=null;const a=({state:h})=>{const p=Mh(n,location),g=t.value,v=e.value;let m=0;if(h){if(t.value=p,e.value=h,o&&o===g){o=null;return}m=v?h.position-v.position:0}else i(p);r.forEach(d=>{d(t.value,g,{delta:m,type:rs.pop,direction:m?m>0?Gr.forward:Gr.back:Gr.unknown})})};function l(){o=t.value}function c(h){r.push(h);const p=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(p),p}function u(){const{history:h}=window;h.state&&h.replaceState(Je({},h.state,{scroll:wo()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Pc(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?wo():null}}function x_(n){const{history:e,location:t}=window,i={value:Mh(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:g_()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(p){console.error(p),t[u?"replace":"assign"](h)}}function o(l,c){const u=Je({},e.state,Pc(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=Je({},r.value,e.state,{forward:l,scroll:wo()});s(u.current,u,!0);const f=Je({},Pc(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function E_(n){n=u_(n);const e=x_(n),t=v_(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=Je({location:"",base:n,go:i,createHref:h_.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function y_(n){return typeof n=="string"||n&&typeof n=="object"}function bh(n){return typeof n=="string"||typeof n=="symbol"}const Hn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Th=Symbol("");var Lc;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Lc||(Lc={}));function _r(n,e){return Je(new Error,{type:n,[Th]:!0},e)}function Sn(n,e){return n instanceof Error&&Th in n&&(e==null||!!(n.type&e))}const Dc="[^/]+?",S_={sensitive:!1,strict:!1,start:!0,end:!0},M_=/[.+*?^${}()[\]/\\]/g;function b_(n,e){const t=Je({},S_,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(M_,"\\$&"),p+=40;else if(h.type===1){const{value:g,repeatable:v,optional:m,regexp:d}=h;s.push({name:g,repeatable:v,optional:m});const w=d||Dc;if(w!==Dc){p+=10;try{new RegExp(`(${w})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${g}" (${w}): `+y.message)}}let E=v?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;f||(E=m&&c.length<2?`(?:/${E})`:"/"+E),m&&(E+="?"),r+=E,p+=20,m&&(p+=-8),v&&(p+=-20),w===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",g=s[h-1];f[g.name]=p&&g.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:v,optional:m}=p,d=g in c?c[g]:"";if(ln(d)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const w=ln(d)?d.join("/"):d;if(!w)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=w}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function T_(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function A_(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=T_(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Uc(i))return 1;if(Uc(r))return-1}return r.length-i.length}function Uc(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const w_={type:0,value:""},R_=/[a-zA-Z0-9_]/;function C_(n){if(!n)return[[]];if(n==="/")return[[w_]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:R_.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function P_(n,e,t){const i=b_(C_(n.path),t),r=Je(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function L_(n,e){const t=[],i=new Map;e=Nc({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,h){const p=!h,g=D_(u);g.aliasOf=h&&h.record;const v=Nc(e,u),m=[g];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const y of E)m.push(Je({},g,{components:h?h.record.components:g.components,path:y,aliasOf:h?h.record:g}))}let d,w;for(const E of m){const{path:y}=E;if(f&&y[0]!=="/"){const C=f.record.path,I=C[C.length-1]==="/"?"":"/";E.path=f.record.path+(y&&I+y)}if(d=P_(E,f,v),h?h.alias.push(d):(w=w||d,w!==d&&w.alias.push(d),p&&u.name&&!Oc(d)&&o(u.name)),g.children){const C=g.children;for(let I=0;I<C.length;I++)s(C[I],d,h&&h.children[I])}h=h||d,(d.record.components&&Object.keys(d.record.components).length||d.record.name||d.record.redirect)&&l(d)}return w?()=>{o(w)}:kr}function o(u){if(bh(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let f=0;for(;f<t.length&&A_(u,t[f])>=0&&(u.record.path!==t[f].record.path||!Ah(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!Oc(u)&&i.set(u.record.name,u)}function c(u,f){let h,p={},g,v;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw _r(1,{location:u});v=h.record.name,p=Je(Ic(f.params,h.keys.filter(w=>!w.optional).map(w=>w.name)),u.params&&Ic(u.params,h.keys.map(w=>w.name))),g=h.stringify(p)}else if("path"in u)g=u.path,h=t.find(w=>w.re.test(g)),h&&(p=h.parse(g),v=h.record.name);else{if(h=f.name?i.get(f.name):t.find(w=>w.re.test(f.path)),!h)throw _r(1,{location:u,currentLocation:f});v=h.record.name,p=Je({},f.params,u.params),g=h.stringify(p)}const m=[];let d=h;for(;d;)m.unshift(d.record),d=d.parent;return{name:v,path:g,params:p,matched:m,meta:I_(m)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Ic(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function D_(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:U_(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function U_(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Oc(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function I_(n){return n.reduce((e,t)=>Je(e,t.meta),{})}function Nc(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Ah(n,e){return e.children.some(t=>t===n||Ah(n,t))}const wh=/#/g,O_=/&/g,N_=/\//g,F_=/=/g,B_=/\?/g,Rh=/\+/g,z_=/%5B/g,H_=/%5D/g,Ch=/%5E/g,k_=/%60/g,Ph=/%7B/g,G_=/%7C/g,Lh=/%7D/g,V_=/%20/g;function Cl(n){return encodeURI(""+n).replace(G_,"|").replace(z_,"[").replace(H_,"]")}function W_(n){return Cl(n).replace(Ph,"{").replace(Lh,"}").replace(Ch,"^")}function Va(n){return Cl(n).replace(Rh,"%2B").replace(V_,"+").replace(wh,"%23").replace(O_,"%26").replace(k_,"`").replace(Ph,"{").replace(Lh,"}").replace(Ch,"^")}function X_(n){return Va(n).replace(F_,"%3D")}function q_(n){return Cl(n).replace(wh,"%23").replace(B_,"%3F")}function Y_(n){return n==null?"":q_(n).replace(N_,"%2F")}function lo(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function j_(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Rh," "),o=s.indexOf("="),a=lo(o<0?s:s.slice(0,o)),l=o<0?null:lo(s.slice(o+1));if(a in e){let c=e[a];ln(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Fc(n){let e="";for(let t in n){const i=n[t];if(t=X_(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(ln(i)?i.map(s=>s&&Va(s)):[i&&Va(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function K_(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=ln(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const $_=Symbol(""),Bc=Symbol(""),Pl=Symbol(""),Dh=Symbol(""),Wa=Symbol("");function wr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function qn(n,e,t,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(_r(4,{from:t,to:e})):f instanceof Error?a(f):y_(f)?a(_r(2,{from:e,to:f})):(s&&i.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),o())},c=n.call(i&&i.instances[r],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function Yo(n,e,t,i){const r=[];for(const s of n)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(Z_(a)){const c=(a.__vccOpts||a)[e];c&&r.push(qn(c,t,i,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=i_(c)?c.default:c;s.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&qn(h,t,i,s,o)()}))}}return r}function Z_(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function zc(n){const e=On(Pl),t=On(Dh),i=en(()=>e.resolve(lr(n.to))),r=en(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(mr.bind(null,u));if(h>-1)return h;const p=Hc(l[c-2]);return c>1&&Hc(u)===p&&f[f.length-1].path!==p?f.findIndex(mr.bind(null,l[c-2])):h}),s=en(()=>r.value>-1&&tg(t.params,i.value.params)),o=en(()=>r.value>-1&&r.value===t.matched.length-1&&Sh(t.params,i.value.params));function a(l={}){return eg(l)?e[lr(n.replace)?"replace":"push"](lr(n.to)).catch(kr):Promise.resolve()}return{route:i,href:en(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const J_=nh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zc,setup(n,{slots:e}){const t=Eo(zc(n)),{options:i}=On(Pl),r=en(()=>({[kc(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[kc(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:yh("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),Q_=J_;function eg(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function tg(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!ln(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Hc(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const kc=(n,e,t)=>n??e??t,ng=nh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=On(Wa),r=en(()=>n.route||i.value),s=On(Bc,0),o=en(()=>{let c=lr(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=en(()=>r.value.matched[o.value]);eo(Bc,en(()=>o.value+1)),eo($_,a),eo(Wa,r);const l=bp();return Js(()=>[l.value,a.value,n.name],([c,u,f],[h,p,g])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!mr(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return Gc(t.default,{Component:h,route:c});const p=f.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=yh(h,Je({},g,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Gc(t.default,{Component:m,route:c})||m}}});function Gc(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const ig=ng;function rg(n){const e=L_(n.routes,n),t=n.parseQuery||j_,i=n.stringifyQuery||Fc,r=n.history,s=wr(),o=wr(),a=wr(),l=Tp(Hn);let c=Hn;Zi&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Xo.bind(null,B=>""+B),f=Xo.bind(null,Y_),h=Xo.bind(null,lo);function p(B,le){let de,ye;return bh(B)?(de=e.getRecordMatcher(B),ye=le):ye=B,e.addRoute(ye,de)}function g(B){const le=e.getRecordMatcher(B);le&&e.removeRoute(le)}function v(){return e.getRoutes().map(B=>B.record)}function m(B){return!!e.getRecordMatcher(B)}function d(B,le){if(le=Je({},le||l.value),typeof B=="string"){const T=qo(t,B,le.path),U=e.resolve({path:T.path},le),D=r.createHref(T.fullPath);return Je(T,U,{params:h(U.params),hash:lo(T.hash),redirectedFrom:void 0,href:D})}let de;if("path"in B)de=Je({},B,{path:qo(t,B.path,le.path).path});else{const T=Je({},B.params);for(const U in T)T[U]==null&&delete T[U];de=Je({},B,{params:f(T)}),le.params=f(le.params)}const ye=e.resolve(de,le),Me=B.hash||"";ye.params=u(h(ye.params));const _=o_(i,Je({},B,{hash:W_(Me),path:ye.path})),M=r.createHref(_);return Je({fullPath:_,hash:Me,query:i===Fc?K_(B.query):B.query||{}},ye,{redirectedFrom:void 0,href:M})}function w(B){return typeof B=="string"?qo(t,B,l.value.path):Je({},B)}function E(B,le){if(c!==B)return _r(8,{from:le,to:B})}function y(B){return P(B)}function C(B){return y(Je(w(B),{replace:!0}))}function I(B){const le=B.matched[B.matched.length-1];if(le&&le.redirect){const{redirect:de}=le;let ye=typeof de=="function"?de(B):de;return typeof ye=="string"&&(ye=ye.includes("?")||ye.includes("#")?ye=w(ye):{path:ye},ye.params={}),Je({query:B.query,hash:B.hash,params:"path"in ye?{}:B.params},ye)}}function P(B,le){const de=c=d(B),ye=l.value,Me=B.state,_=B.force,M=B.replace===!0,T=I(de);if(T)return P(Je(w(T),{state:typeof T=="object"?Je({},Me,T.state):Me,force:_,replace:M}),le||de);const U=de;U.redirectedFrom=le;let D;return!_&&a_(i,ye,de)&&(D=_r(16,{to:U,from:ye}),z(ye,ye,!0,!1)),(D?Promise.resolve(D):R(U,ye)).catch(k=>Sn(k)?Sn(k,2)?k:fe(k):K(k,U,ye)).then(k=>{if(k){if(Sn(k,2))return P(Je({replace:M},w(k.to),{state:typeof k.to=="object"?Je({},Me,k.to.state):Me,force:_}),le||U)}else k=_e(U,ye,!0,M,Me);return ce(U,ye,k),k})}function te(B,le){const de=E(B,le);return de?Promise.reject(de):Promise.resolve()}function b(B){const le=we.values().next().value;return le&&typeof le.runWithContext=="function"?le.runWithContext(B):B()}function R(B,le){let de;const[ye,Me,_]=sg(B,le);de=Yo(ye.reverse(),"beforeRouteLeave",B,le);for(const T of ye)T.leaveGuards.forEach(U=>{de.push(qn(U,B,le))});const M=te.bind(null,B,le);return de.push(M),Ue(de).then(()=>{de=[];for(const T of s.list())de.push(qn(T,B,le));return de.push(M),Ue(de)}).then(()=>{de=Yo(Me,"beforeRouteUpdate",B,le);for(const T of Me)T.updateGuards.forEach(U=>{de.push(qn(U,B,le))});return de.push(M),Ue(de)}).then(()=>{de=[];for(const T of _)if(T.beforeEnter)if(ln(T.beforeEnter))for(const U of T.beforeEnter)de.push(qn(U,B,le));else de.push(qn(T.beforeEnter,B,le));return de.push(M),Ue(de)}).then(()=>(B.matched.forEach(T=>T.enterCallbacks={}),de=Yo(_,"beforeRouteEnter",B,le),de.push(M),Ue(de))).then(()=>{de=[];for(const T of o.list())de.push(qn(T,B,le));return de.push(M),Ue(de)}).catch(T=>Sn(T,8)?T:Promise.reject(T))}function ce(B,le,de){a.list().forEach(ye=>b(()=>ye(B,le,de)))}function _e(B,le,de,ye,Me){const _=E(B,le);if(_)return _;const M=le===Hn,T=Zi?history.state:{};de&&(ye||M?r.replace(B.fullPath,Je({scroll:M&&T&&T.scroll},Me)):r.push(B.fullPath,Me)),l.value=B,z(B,le,de,M),fe()}let H;function $(){H||(H=r.listen((B,le,de)=>{if(!De.listening)return;const ye=d(B),Me=I(ye);if(Me){P(Je(Me,{replace:!0}),ye).catch(kr);return}c=ye;const _=l.value;Zi&&m_(Cc(_.fullPath,de.delta),wo()),R(ye,_).catch(M=>Sn(M,12)?M:Sn(M,2)?(P(M.to,ye).then(T=>{Sn(T,20)&&!de.delta&&de.type===rs.pop&&r.go(-1,!1)}).catch(kr),Promise.reject()):(de.delta&&r.go(-de.delta,!1),K(M,ye,_))).then(M=>{M=M||_e(ye,_,!1),M&&(de.delta&&!Sn(M,8)?r.go(-de.delta,!1):de.type===rs.pop&&Sn(M,20)&&r.go(-1,!1)),ce(ye,_,M)}).catch(kr)}))}let Z=wr(),oe=wr(),W;function K(B,le,de){fe(B);const ye=oe.list();return ye.length?ye.forEach(Me=>Me(B,le,de)):console.error(B),Promise.reject(B)}function me(){return W&&l.value!==Hn?Promise.resolve():new Promise((B,le)=>{Z.add([B,le])})}function fe(B){return W||(W=!B,$(),Z.list().forEach(([le,de])=>B?de(B):le()),Z.reset()),B}function z(B,le,de,ye){const{scrollBehavior:Me}=n;if(!Zi||!Me)return Promise.resolve();const _=!de&&__(Cc(B.fullPath,0))||(ye||!de)&&history.state&&history.state.scroll||null;return jf().then(()=>Me(B,le,_)).then(M=>M&&p_(M)).catch(M=>K(M,B,le))}const q=B=>r.go(B);let Se;const we=new Set,De={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:m,getRoutes:v,resolve:d,options:n,push:y,replace:C,go:q,back:()=>q(-1),forward:()=>q(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:oe.add,isReady:me,install(B){const le=this;B.component("RouterLink",Q_),B.component("RouterView",ig),B.config.globalProperties.$router=le,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>lr(l)}),Zi&&!Se&&l.value===Hn&&(Se=!0,y(r.location).catch(Me=>{}));const de={};for(const Me in Hn)Object.defineProperty(de,Me,{get:()=>l.value[Me],enumerable:!0});B.provide(Pl,le),B.provide(Dh,zf(de)),B.provide(Wa,l);const ye=B.unmount;we.add(B),B.unmount=function(){we.delete(B),we.size<1&&(c=Hn,H&&H(),H=null,l.value=Hn,Se=!1,W=!1),ye()}}};function Ue(B){return B.reduce((le,de)=>le.then(()=>b(de)),Promise.resolve())}return De}function sg(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>mr(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>mr(c,l))||r.push(l))}return[t,i,r]}const ds=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},og={};function ag(n,e){const t=bo("router-view");return hs(),Tl(t)}const lg=ds(og,[["render",ag]]);function cg(n){if(n&&!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=n,document.head.appendChild(e),n}}function ir(n,e){var t=n.__state.conversionName.toString(),i=Math.round(n.r),r=Math.round(n.g),s=Math.round(n.b),o=n.a,a=Math.round(n.h),l=n.s.toFixed(1),c=n.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var u=n.hex.toString(16);u.length<6;)u="0"+u;return"#"+u}else{if(t==="CSS_RGB")return"rgb("+i+","+r+","+s+")";if(t==="CSS_RGBA")return"rgba("+i+","+r+","+s+","+o+")";if(t==="HEX")return"0x"+n.hex.toString(16);if(t==="RGB_ARRAY")return"["+i+","+r+","+s+"]";if(t==="RGBA_ARRAY")return"["+i+","+r+","+s+","+o+"]";if(t==="RGB_OBJ")return"{r:"+i+",g:"+r+",b:"+s+"}";if(t==="RGBA_OBJ")return"{r:"+i+",g:"+r+",b:"+s+",a:"+o+"}";if(t==="HSV_OBJ")return"{h:"+a+",s:"+l+",v:"+c+"}";if(t==="HSVA_OBJ")return"{h:"+a+",s:"+l+",v:"+c+",a:"+o+"}"}return"unknown format"}var Vc=Array.prototype.forEach,Rr=Array.prototype.slice,pe={BREAK:{},extend:function(e){return this.each(Rr.call(arguments,1),function(t){var i=this.isObject(t)?Object.keys(t):[];i.forEach((function(r){this.isUndefined(t[r])||(e[r]=t[r])}).bind(this))},this),e},defaults:function(e){return this.each(Rr.call(arguments,1),function(t){var i=this.isObject(t)?Object.keys(t):[];i.forEach((function(r){this.isUndefined(e[r])&&(e[r]=t[r])}).bind(this))},this),e},compose:function(){var e=Rr.call(arguments);return function(){for(var t=Rr.call(arguments),i=e.length-1;i>=0;i--)t=[e[i].apply(this,t)];return t[0]}},each:function(e,t,i){if(e){if(Vc&&e.forEach&&e.forEach===Vc)e.forEach(t,i);else if(e.length===e.length+0){var r=void 0,s=void 0;for(r=0,s=e.length;r<s;r++)if(r in e&&t.call(i,e[r],r)===this.BREAK)return}else for(var o in e)if(t.call(i,e[o],o)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,i){var r=void 0;return function(){var s=this,o=arguments;function a(){r=null,i||e.apply(s,o)}var l=i||!r;clearTimeout(r),r=setTimeout(a,t),l&&e.apply(s,o)}},toArray:function(e){return e.toArray?e.toArray():Rr.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(n){function e(t){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}(function(n){return isNaN(n)}),isArray:Array.isArray||function(n){return n.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},ug=[{litmus:pe.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:ir},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:ir},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:ir},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:ir}}},{litmus:pe.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:pe.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:pe.isObject,conversions:{RGBA_OBJ:{read:function(e){return pe.isNumber(e.r)&&pe.isNumber(e.g)&&pe.isNumber(e.b)&&pe.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return pe.isNumber(e.r)&&pe.isNumber(e.g)&&pe.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return pe.isNumber(e.h)&&pe.isNumber(e.s)&&pe.isNumber(e.v)&&pe.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return pe.isNumber(e.h)&&pe.isNumber(e.s)&&pe.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],Cr=void 0,bs=void 0,Xa=function(){bs=!1;var e=arguments.length>1?pe.toArray(arguments):arguments[0];return pe.each(ug,function(t){if(t.litmus(e))return pe.each(t.conversions,function(i,r){if(Cr=i.read(e),bs===!1&&Cr!==!1)return bs=Cr,Cr.conversionName=r,Cr.conversion=i,pe.BREAK}),pe.BREAK}),bs},Wc=void 0,co={hsv_to_rgb:function(e,t,i){var r=Math.floor(e/60)%6,s=e/60-Math.floor(e/60),o=i*(1-t),a=i*(1-s*t),l=i*(1-(1-s)*t),c=[[i,l,o],[a,i,o],[o,i,l],[o,a,i],[l,o,i],[i,o,a]][r];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(e,t,i){var r=Math.min(e,t,i),s=Math.max(e,t,i),o=s-r,a=void 0,l=void 0;if(s!==0)l=o/s;else return{h:NaN,s:0,v:0};return e===s?a=(t-i)/o:t===s?a=2+(i-e)/o:a=4+(e-t)/o,a/=6,a<0&&(a+=1),{h:a*360,s:l,v:s/255}},rgb_to_hex:function(e,t,i){var r=this.hex_with_component(0,2,e);return r=this.hex_with_component(r,1,t),r=this.hex_with_component(r,0,i),r},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,i){return i<<(Wc=t*8)|e&~(255<<Wc)}},fg=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},cn=function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")},un=function(){function n(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),ni=function n(e,t,i){e===null&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(r===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:n(s,t,i)}else{if("value"in r)return r.value;var o=r.get;return o===void 0?void 0:o.call(i)}},ri=function(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)},si=function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:n},gt=function(){function n(){if(cn(this,n),this.__state=Xa.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return un(n,[{key:"toString",value:function(){return ir(this)}},{key:"toHexString",value:function(){return ir(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),n}();function Ll(n,e,t){Object.defineProperty(n,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(gt.recalculateRGB(this,e,t),this.__state[e])},set:function(r){this.__state.space!=="RGB"&&(gt.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=r}})}function Dl(n,e){Object.defineProperty(n,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(gt.recalculateHSV(this),this.__state[e])},set:function(i){this.__state.space!=="HSV"&&(gt.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=i}})}gt.recalculateRGB=function(n,e,t){if(n.__state.space==="HEX")n.__state[e]=co.component_from_hex(n.__state.hex,t);else if(n.__state.space==="HSV")pe.extend(n.__state,co.hsv_to_rgb(n.__state.h,n.__state.s,n.__state.v));else throw new Error("Corrupted color state")};gt.recalculateHSV=function(n){var e=co.rgb_to_hsv(n.r,n.g,n.b);pe.extend(n.__state,{s:e.s,v:e.v}),pe.isNaN(e.h)?pe.isUndefined(n.__state.h)&&(n.__state.h=0):n.__state.h=e.h};gt.COMPONENTS=["r","g","b","h","s","v","hex","a"];Ll(gt.prototype,"r",2);Ll(gt.prototype,"g",1);Ll(gt.prototype,"b",0);Dl(gt.prototype,"h");Dl(gt.prototype,"s");Dl(gt.prototype,"v");Object.defineProperty(gt.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(gt.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=co.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var Ci=function(){function n(e,t){cn(this,n),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return un(n,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),n}(),hg={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},Uh={};pe.each(hg,function(n,e){pe.each(n,function(t){Uh[t]=e})});var dg=/(\d+(\.\d+)?)px/;function dn(n){if(n==="0"||pe.isUndefined(n))return 0;var e=n.match(dg);return pe.isNull(e)?0:parseFloat(e[1])}var j={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,i){var r=i,s=t;pe.isUndefined(s)&&(s=!0),pe.isUndefined(r)&&(r=!0),e.style.position="absolute",s&&(e.style.left=0,e.style.right=0),r&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,i,r){var s=i||{},o=Uh[t];if(!o)throw new Error("Event type "+t+" not supported.");var a=document.createEvent(o);switch(o){case"MouseEvents":{var l=s.x||s.clientX||0,c=s.y||s.clientY||0;a.initMouseEvent(t,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var u=a.initKeyboardEvent||a.initKeyEvent;pe.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(t,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{a.initEvent(t,s.bubbles||!1,s.cancelable||!0);break}}pe.defaults(a,r),e.dispatchEvent(a)},bind:function(e,t,i,r){var s=r||!1;return e.addEventListener?e.addEventListener(t,i,s):e.attachEvent&&e.attachEvent("on"+t,i),j},unbind:function(e,t,i,r){var s=r||!1;return e.removeEventListener?e.removeEventListener(t,i,s):e.detachEvent&&e.detachEvent("on"+t,i),j},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var i=e.className.split(/ +/);i.indexOf(t)===-1&&(i.push(t),e.className=i.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return j},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var i=e.className.split(/ +/),r=i.indexOf(t);r!==-1&&(i.splice(r,1),e.className=i.join(" "))}else e.className=void 0;return j},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return dn(t["border-left-width"])+dn(t["border-right-width"])+dn(t["padding-left"])+dn(t["padding-right"])+dn(t.width)},getHeight:function(e){var t=getComputedStyle(e);return dn(t["border-top-width"])+dn(t["border-bottom-width"])+dn(t["padding-top"])+dn(t["padding-bottom"])+dn(t.height)},getOffset:function(e){var t=e,i={left:0,top:0};if(t.offsetParent)do i.left+=t.offsetLeft,i.top+=t.offsetTop,t=t.offsetParent;while(t);return i},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},Ih=function(n){ri(e,n);function e(t,i){cn(this,e);var r=si(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),s=r;r.__prev=r.getValue(),r.__checkbox=document.createElement("input"),r.__checkbox.setAttribute("type","checkbox");function o(){s.setValue(!s.__prev)}return j.bind(r.__checkbox,"change",o,!1),r.domElement.appendChild(r.__checkbox),r.updateDisplay(),r}return un(e,[{key:"setValue",value:function(i){var r=ni(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),r}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),ni(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Ci),pg=function(n){ri(e,n);function e(t,i,r){cn(this,e);var s=si(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),o=r,a=s;if(s.__select=document.createElement("select"),pe.isArray(o)){var l={};pe.each(o,function(c){l[c]=c}),o=l}return pe.each(o,function(c,u){var f=document.createElement("option");f.innerHTML=u,f.setAttribute("value",c),a.__select.appendChild(f)}),s.updateDisplay(),j.bind(s.__select,"change",function(){var c=this.options[this.selectedIndex].value;a.setValue(c)}),s.domElement.appendChild(s.__select),s}return un(e,[{key:"setValue",value:function(i){var r=ni(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),r}},{key:"updateDisplay",value:function(){return j.isActive(this.__select)?this:(this.__select.value=this.getValue(),ni(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(Ci),mg=function(n){ri(e,n);function e(t,i){cn(this,e);var r=si(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),s=r;function o(){s.setValue(s.__input.value)}function a(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),j.bind(r.__input,"keyup",o),j.bind(r.__input,"change",o),j.bind(r.__input,"blur",a),j.bind(r.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return un(e,[{key:"updateDisplay",value:function(){return j.isActive(this.__input)||(this.__input.value=this.getValue()),ni(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Ci);function Xc(n){var e=n.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var Oh=function(n){ri(e,n);function e(t,i,r){cn(this,e);var s=si(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),o=r||{};return s.__min=o.min,s.__max=o.max,s.__step=o.step,pe.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=Xc(s.__impliedStep),s}return un(e,[{key:"setValue",value:function(i){var r=i;return this.__min!==void 0&&r<this.__min?r=this.__min:this.__max!==void 0&&r>this.__max&&(r=this.__max),this.__step!==void 0&&r%this.__step!==0&&(r=Math.round(r/this.__step)*this.__step),ni(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,r)}},{key:"min",value:function(i){return this.__min=i,this}},{key:"max",value:function(i){return this.__max=i,this}},{key:"step",value:function(i){return this.__step=i,this.__impliedStep=i,this.__precision=Xc(i),this}}]),e}(Ci);function _g(n,e){var t=Math.pow(10,e);return Math.round(n*t)/t}var uo=function(n){ri(e,n);function e(t,i,r){cn(this,e);var s=si(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,r));s.__truncationSuspended=!1;var o=s,a=void 0;function l(){var g=parseFloat(o.__input.value);pe.isNaN(g)||o.setValue(g)}function c(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}function u(){c()}function f(g){var v=a-g.clientY;o.setValue(o.getValue()+v*o.__impliedStep),a=g.clientY}function h(){j.unbind(window,"mousemove",f),j.unbind(window,"mouseup",h),c()}function p(g){j.bind(window,"mousemove",f),j.bind(window,"mouseup",h),a=g.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),j.bind(s.__input,"change",l),j.bind(s.__input,"blur",u),j.bind(s.__input,"mousedown",p),j.bind(s.__input,"keydown",function(g){g.keyCode===13&&(o.__truncationSuspended=!0,this.blur(),o.__truncationSuspended=!1,c())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return un(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():_g(this.getValue(),this.__precision),ni(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Oh);function qc(n,e,t,i,r){return i+(r-i)*((n-e)/(t-e))}var qa=function(n){ri(e,n);function e(t,i,r,s,o){cn(this,e);var a=si(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,{min:r,max:s,step:o})),l=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),j.bind(a.__background,"mousedown",c),j.bind(a.__background,"touchstart",h),j.addClass(a.__background,"slider"),j.addClass(a.__foreground,"slider-fg");function c(v){document.activeElement.blur(),j.bind(window,"mousemove",u),j.bind(window,"mouseup",f),u(v)}function u(v){v.preventDefault();var m=l.__background.getBoundingClientRect();return l.setValue(qc(v.clientX,m.left,m.right,l.__min,l.__max)),!1}function f(){j.unbind(window,"mousemove",u),j.unbind(window,"mouseup",f),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function h(v){v.touches.length===1&&(j.bind(window,"touchmove",p),j.bind(window,"touchend",g),p(v))}function p(v){var m=v.touches[0].clientX,d=l.__background.getBoundingClientRect();l.setValue(qc(m,d.left,d.right,l.__min,l.__max))}function g(){j.unbind(window,"touchmove",p),j.unbind(window,"touchend",g),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return un(e,[{key:"updateDisplay",value:function(){var i=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=i*100+"%",ni(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Oh),Nh=function(n){ri(e,n);function e(t,i,r){cn(this,e);var s=si(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),o=s;return s.__button=document.createElement("div"),s.__button.innerHTML=r===void 0?"Fire":r,j.bind(s.__button,"click",function(a){return a.preventDefault(),o.fire(),!1}),j.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return un(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(Ci),Ya=function(n){ri(e,n);function e(t,i){cn(this,e);var r=si(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i));r.__color=new gt(r.getValue()),r.__temp=new gt(0);var s=r;r.domElement=document.createElement("div"),j.makeSelectable(r.domElement,!1),r.__selector=document.createElement("div"),r.__selector.className="selector",r.__saturation_field=document.createElement("div"),r.__saturation_field.className="saturation-field",r.__field_knob=document.createElement("div"),r.__field_knob.className="field-knob",r.__field_knob_border="2px solid ",r.__hue_knob=document.createElement("div"),r.__hue_knob.className="hue-knob",r.__hue_field=document.createElement("div"),r.__hue_field.className="hue-field",r.__input=document.createElement("input"),r.__input.type="text",r.__input_textShadow="0 1px 1px ",j.bind(r.__input,"keydown",function(v){v.keyCode===13&&f.call(this)}),j.bind(r.__input,"blur",f),j.bind(r.__selector,"mousedown",function(){j.addClass(this,"drag").bind(window,"mouseup",function(){j.removeClass(s.__selector,"drag")})}),j.bind(r.__selector,"touchstart",function(){j.addClass(this,"drag").bind(window,"touchend",function(){j.removeClass(s.__selector,"drag")})});var o=document.createElement("div");pe.extend(r.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),pe.extend(r.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:r.__field_knob_border+(r.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),pe.extend(r.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),pe.extend(r.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),pe.extend(o.style,{width:"100%",height:"100%",background:"none"}),Yc(o,"top","rgba(0,0,0,0)","#000"),pe.extend(r.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),vg(r.__hue_field),pe.extend(r.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:r.__input_textShadow+"rgba(0,0,0,0.7)"}),j.bind(r.__saturation_field,"mousedown",a),j.bind(r.__saturation_field,"touchstart",a),j.bind(r.__field_knob,"mousedown",a),j.bind(r.__field_knob,"touchstart",a),j.bind(r.__hue_field,"mousedown",l),j.bind(r.__hue_field,"touchstart",l);function a(v){p(v),j.bind(window,"mousemove",p),j.bind(window,"touchmove",p),j.bind(window,"mouseup",c),j.bind(window,"touchend",c)}function l(v){g(v),j.bind(window,"mousemove",g),j.bind(window,"touchmove",g),j.bind(window,"mouseup",u),j.bind(window,"touchend",u)}function c(){j.unbind(window,"mousemove",p),j.unbind(window,"touchmove",p),j.unbind(window,"mouseup",c),j.unbind(window,"touchend",c),h()}function u(){j.unbind(window,"mousemove",g),j.unbind(window,"touchmove",g),j.unbind(window,"mouseup",u),j.unbind(window,"touchend",u),h()}function f(){var v=Xa(this.value);v!==!1?(s.__color.__state=v,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function h(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}r.__saturation_field.appendChild(o),r.__selector.appendChild(r.__field_knob),r.__selector.appendChild(r.__saturation_field),r.__selector.appendChild(r.__hue_field),r.__hue_field.appendChild(r.__hue_knob),r.domElement.appendChild(r.__input),r.domElement.appendChild(r.__selector),r.updateDisplay();function p(v){v.type.indexOf("touch")===-1&&v.preventDefault();var m=s.__saturation_field.getBoundingClientRect(),d=v.touches&&v.touches[0]||v,w=d.clientX,E=d.clientY,y=(w-m.left)/(m.right-m.left),C=1-(E-m.top)/(m.bottom-m.top);return C>1?C=1:C<0&&(C=0),y>1?y=1:y<0&&(y=0),s.__color.v=C,s.__color.s=y,s.setValue(s.__color.toOriginal()),!1}function g(v){v.type.indexOf("touch")===-1&&v.preventDefault();var m=s.__hue_field.getBoundingClientRect(),d=v.touches&&v.touches[0]||v,w=d.clientY,E=1-(w-m.top)/(m.bottom-m.top);return E>1?E=1:E<0&&(E=0),s.__color.h=E*360,s.setValue(s.__color.toOriginal()),!1}return r}return un(e,[{key:"updateDisplay",value:function(){var i=Xa(this.getValue());if(i!==!1){var r=!1;pe.each(gt.COMPONENTS,function(a){if(!pe.isUndefined(i[a])&&!pe.isUndefined(this.__color.__state[a])&&i[a]!==this.__color.__state[a])return r=!0,{}},this),r&&pe.extend(this.__color.__state,i)}pe.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,o=255-s;pe.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,Yc(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),pe.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})}}]),e}(Ci),gg=["-moz-","-o-","-webkit-","-ms-",""];function Yc(n,e,t,i){n.style.background="",pe.each(gg,function(r){n.style.cssText+="background: "+r+"linear-gradient("+e+", "+t+" 0%, "+i+" 100%); "})}function vg(n){n.style.background="",n.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",n.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var xg={load:function(e,t){var i=t||document,r=i.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,i.getElementsByTagName("head")[0].appendChild(r)},inject:function(e,t){var i=t||document,r=document.createElement("style");r.type="text/css",r.innerHTML=e;var s=i.getElementsByTagName("head")[0];try{s.appendChild(r)}catch{}}},Eg=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,yg=function(e,t){var i=e[t];return pe.isArray(arguments[2])||pe.isObject(arguments[2])?new pg(e,t,arguments[2]):pe.isNumber(i)?pe.isNumber(arguments[2])&&pe.isNumber(arguments[3])?pe.isNumber(arguments[4])?new qa(e,t,arguments[2],arguments[3],arguments[4]):new qa(e,t,arguments[2],arguments[3]):pe.isNumber(arguments[4])?new uo(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new uo(e,t,{min:arguments[2],max:arguments[3]}):pe.isString(i)?new mg(e,t):pe.isFunction(i)?new Nh(e,t,""):pe.isBoolean(i)?new Ih(e,t):null};function Sg(n){setTimeout(n,1e3/60)}var Mg=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||Sg,bg=function(){function n(){cn(this,n),this.backgroundElement=document.createElement("div"),pe.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),j.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),pe.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;j.bind(this.backgroundElement,"click",function(){e.hide()})}return un(n,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),pe.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,i=function r(){t.domElement.style.display="none",t.backgroundElement.style.display="none",j.unbind(t.domElement,"webkitTransitionEnd",r),j.unbind(t.domElement,"transitionend",r),j.unbind(t.domElement,"oTransitionEnd",r)};j.bind(this.domElement,"webkitTransitionEnd",i),j.bind(this.domElement,"transitionend",i),j.bind(this.domElement,"oTransitionEnd",i),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-j.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-j.getHeight(this.domElement)/2+"px"}}]),n}(),Tg=cg(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);xg.inject(Tg);var jc="dg",Kc=72,$c=20,ss="Default",Nr=function(){try{return!!window.localStorage}catch{return!1}}(),Vr=void 0,Zc=!0,Ji=void 0,jo=!1,Fh=[],et=function n(e){var t=this,i=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),j.addClass(this.domElement,jc),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],i=pe.defaults(i,{closeOnTop:!1,autoPlace:!0,width:n.DEFAULT_WIDTH}),i=pe.defaults(i,{resizable:i.autoPlace,hideable:i.autoPlace}),pe.isUndefined(i.load)?i.load={preset:ss}:i.preset&&(i.load.preset=i.preset),pe.isUndefined(i.parent)&&i.hideable&&Fh.push(this),i.resizable=pe.isUndefined(i.parent)&&i.resizable,i.autoPlace&&pe.isUndefined(i.scrollable)&&(i.scrollable=!0);var r=Nr&&localStorage.getItem(Qi(this,"isLocal"))==="true",s=void 0,o=void 0;if(Object.defineProperties(this,{parent:{get:function(){return i.parent}},scrollable:{get:function(){return i.scrollable}},autoPlace:{get:function(){return i.autoPlace}},closeOnTop:{get:function(){return i.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:i.load.preset},set:function(h){t.parent?t.getRoot().preset=h:i.load.preset=h,Cg(this),t.revert()}},width:{get:function(){return i.width},set:function(h){i.width=h,$a(t,h)}},name:{get:function(){return i.name},set:function(h){i.name=h,o&&(o.innerHTML=i.name)}},closed:{get:function(){return i.closed},set:function(h){i.closed=h,i.closed?j.addClass(t.__ul,n.CLASS_CLOSED):j.removeClass(t.__ul,n.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=h?n.TEXT_OPEN:n.TEXT_CLOSED)}},load:{get:function(){return i.load}},useLocalStorage:{get:function(){return r},set:function(h){Nr&&(r=h,h?j.bind(window,"unload",s):j.unbind(window,"unload",s),localStorage.setItem(Qi(t,"isLocal"),h))}}}),pe.isUndefined(i.parent)){if(this.closed=i.closed||!1,j.addClass(this.domElement,n.CLASS_MAIN),j.makeSelectable(this.domElement,!1),Nr&&r){t.useLocalStorage=!0;var a=localStorage.getItem(Qi(this,"gui"));a&&(i.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=n.TEXT_CLOSED,j.addClass(this.__closeButton,n.CLASS_CLOSE_BUTTON),i.closeOnTop?(j.addClass(this.__closeButton,n.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(j.addClass(this.__closeButton,n.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),j.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{i.closed===void 0&&(i.closed=!0);var l=document.createTextNode(i.name);j.addClass(l,"controller-name"),o=Ul(t,l);var c=function(h){return h.preventDefault(),t.closed=!t.closed,!1};j.addClass(this.__ul,n.CLASS_CLOSED),j.addClass(o,"title"),j.bind(o,"click",c),i.closed||(this.closed=!1)}i.autoPlace&&(pe.isUndefined(i.parent)&&(Zc&&(Ji=document.createElement("div"),j.addClass(Ji,jc),j.addClass(Ji,n.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Ji),Zc=!1),Ji.appendChild(this.domElement),j.addClass(this.domElement,n.CLASS_AUTO_PLACE)),this.parent||$a(t,i.width)),this.__resizeHandler=function(){t.onResizeDebounced()},j.bind(window,"resize",this.__resizeHandler),j.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),j.bind(this.__ul,"transitionend",this.__resizeHandler),j.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),i.resizable&&Rg(this),s=function(){Nr&&localStorage.getItem(Qi(t,"isLocal"))==="true"&&localStorage.setItem(Qi(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function u(){var f=t.getRoot();f.width+=1,pe.defer(function(){f.width-=1})}i.parent||u()};et.toggleHide=function(){jo=!jo,pe.each(Fh,function(n){n.domElement.style.display=jo?"none":""})};et.CLASS_AUTO_PLACE="a";et.CLASS_AUTO_PLACE_CONTAINER="ac";et.CLASS_MAIN="main";et.CLASS_CONTROLLER_ROW="cr";et.CLASS_TOO_TALL="taller-than-window";et.CLASS_CLOSED="closed";et.CLASS_CLOSE_BUTTON="close-button";et.CLASS_CLOSE_TOP="close-top";et.CLASS_CLOSE_BOTTOM="close-bottom";et.CLASS_DRAG="drag";et.DEFAULT_WIDTH=245;et.TEXT_CLOSED="Close Controls";et.TEXT_OPEN="Open Controls";et._keydownHandler=function(n){document.activeElement.type!=="text"&&(n.which===Kc||n.keyCode===Kc)&&et.toggleHide()};j.bind(window,"keydown",et._keydownHandler,!1);pe.extend(et.prototype,{add:function(e,t){return Wr(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return Wr(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;pe.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Ji.removeChild(this.domElement);var e=this;pe.each(this.__folders,function(t){e.removeFolder(t)}),j.unbind(window,"keydown",et._keydownHandler,!1),Jc(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var i=new et(t);this.__folders[e]=i;var r=Ul(this,i.domElement);return j.addClass(r,"folder"),i},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],Jc(e);var t=this;pe.each(e.__folders,function(i){e.removeFolder(i)}),pe.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=j.getOffset(e.__ul).top,i=0;pe.each(e.__ul.childNodes,function(r){e.autoPlace&&r===e.__save_row||(i+=j.getHeight(r))}),window.innerHeight-t-$c<i?(j.addClass(e.domElement,et.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-$c+"px"):(j.removeClass(e.domElement,et.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&pe.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:pe.debounce(function(){this.onResize()},50),remember:function(){if(pe.isUndefined(Vr)&&(Vr=new bg,Vr.domElement.innerHTML=Eg),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;pe.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&wg(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&$a(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=Ts(this)),e.folders={},pe.each(this.__folders,function(t,i){e.folders[i]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=Ts(this),ja(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[ss]=Ts(this,!0)),this.load.remembered[e]=Ts(this),this.preset=e,Ka(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){pe.each(this.__controllers,function(t){this.getRoot().load.remembered?Bh(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),pe.each(this.__folders,function(t){t.revert(t)}),e||ja(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&zh(this.__listening)},updateDisplay:function(){pe.each(this.__controllers,function(e){e.updateDisplay()}),pe.each(this.__folders,function(e){e.updateDisplay()})}});function Ul(n,e,t){var i=document.createElement("li");return e&&i.appendChild(e),t?n.__ul.insertBefore(i,t):n.__ul.appendChild(i),n.onResize(),i}function Jc(n){j.unbind(window,"resize",n.__resizeHandler),n.saveToLocalStorageIfPossible&&j.unbind(window,"unload",n.saveToLocalStorageIfPossible)}function ja(n,e){var t=n.__preset_select[n.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function Ag(n,e,t){if(t.__li=e,t.__gui=n,pe.extend(t,{options:function(o){if(arguments.length>1){var a=t.__li.nextElementSibling;return t.remove(),Wr(n,t.object,t.property,{before:a,factoryArgs:[pe.toArray(arguments)]})}if(pe.isArray(o)||pe.isObject(o)){var l=t.__li.nextElementSibling;return t.remove(),Wr(n,t.object,t.property,{before:l,factoryArgs:[o]})}},name:function(o){return t.__li.firstElementChild.firstElementChild.innerHTML=o,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof qa){var i=new uo(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});pe.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var o=t[s],a=i[s];t[s]=i[s]=function(){var l=Array.prototype.slice.call(arguments);return a.apply(i,l),o.apply(t,l)}}),j.addClass(e,"has-slider"),t.domElement.insertBefore(i.domElement,t.domElement.firstElementChild)}else if(t instanceof uo){var r=function(o){if(pe.isNumber(t.__min)&&pe.isNumber(t.__max)){var a=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var c=Wr(n,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return c.name(a),l&&c.listen(),c}return o};t.min=pe.compose(r,t.min),t.max=pe.compose(r,t.max)}else t instanceof Ih?(j.bind(e,"click",function(){j.fakeEvent(t.__checkbox,"click")}),j.bind(t.__checkbox,"click",function(s){s.stopPropagation()})):t instanceof Nh?(j.bind(e,"click",function(){j.fakeEvent(t.__button,"click")}),j.bind(e,"mouseover",function(){j.addClass(t.__button,"hover")}),j.bind(e,"mouseout",function(){j.removeClass(t.__button,"hover")})):t instanceof Ya&&(j.addClass(e,"color"),t.updateDisplay=pe.compose(function(s){return e.style.borderLeftColor=t.__color.toString(),s},t.updateDisplay),t.updateDisplay());t.setValue=pe.compose(function(s){return n.getRoot().__preset_select&&t.isModified()&&ja(n.getRoot(),!0),s},t.setValue)}function Bh(n,e){var t=n.getRoot(),i=t.__rememberedObjects.indexOf(e.object);if(i!==-1){var r=t.__rememberedObjectIndecesToControllers[i];if(r===void 0&&(r={},t.__rememberedObjectIndecesToControllers[i]=r),r[e.property]=e,t.load&&t.load.remembered){var s=t.load.remembered,o=void 0;if(s[n.preset])o=s[n.preset];else if(s[ss])o=s[ss];else return;if(o[i]&&o[i][e.property]!==void 0){var a=o[i][e.property];e.initialValue=a,e.setValue(a)}}}}function Wr(n,e,t,i){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var r=void 0;if(i.color)r=new Ya(e,t);else{var s=[e,t].concat(i.factoryArgs);r=yg.apply(n,s)}i.before instanceof Ci&&(i.before=i.before.__li),Bh(n,r),j.addClass(r.domElement,"c");var o=document.createElement("span");j.addClass(o,"property-name"),o.innerHTML=r.property;var a=document.createElement("div");a.appendChild(o),a.appendChild(r.domElement);var l=Ul(n,a,i.before);return j.addClass(l,et.CLASS_CONTROLLER_ROW),r instanceof Ya?j.addClass(l,"color"):j.addClass(l,fg(r.getValue())),Ag(n,l,r),n.__controllers.push(r),r}function Qi(n,e){return document.location.href+"."+e}function Ka(n,e,t){var i=document.createElement("option");i.innerHTML=e,i.value=e,n.__preset_select.appendChild(i),t&&(n.__preset_select.selectedIndex=n.__preset_select.length-1)}function Qc(n,e){e.style.display=n.useLocalStorage?"block":"none"}function wg(n){var e=n.__save_row=document.createElement("li");j.addClass(n.domElement,"has-save"),n.__ul.insertBefore(e,n.__ul.firstChild),j.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",j.addClass(t,"button gears");var i=document.createElement("span");i.innerHTML="Save",j.addClass(i,"button"),j.addClass(i,"save");var r=document.createElement("span");r.innerHTML="New",j.addClass(r,"button"),j.addClass(r,"save-as");var s=document.createElement("span");s.innerHTML="Revert",j.addClass(s,"button"),j.addClass(s,"revert");var o=n.__preset_select=document.createElement("select");if(n.load&&n.load.remembered?pe.each(n.load.remembered,function(f,h){Ka(n,h,h===n.preset)}):Ka(n,ss,!1),j.bind(o,"change",function(){for(var f=0;f<n.__preset_select.length;f++)n.__preset_select[f].innerHTML=n.__preset_select[f].value;n.preset=this.value}),e.appendChild(o),e.appendChild(t),e.appendChild(i),e.appendChild(r),e.appendChild(s),Nr){var a=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(Qi(n,"isLocal"))==="true"&&l.setAttribute("checked","checked"),Qc(n,a),j.bind(l,"change",function(){n.useLocalStorage=!n.useLocalStorage,Qc(n,a)})}var u=document.getElementById("dg-new-constructor");j.bind(u,"keydown",function(f){f.metaKey&&(f.which===67||f.keyCode===67)&&Vr.hide()}),j.bind(t,"click",function(){u.innerHTML=JSON.stringify(n.getSaveObject(),void 0,2),Vr.show(),u.focus(),u.select()}),j.bind(i,"click",function(){n.save()}),j.bind(r,"click",function(){var f=prompt("Enter a new preset name.");f&&n.saveAs(f)}),j.bind(s,"click",function(){n.revert()})}function Rg(n){var e=void 0;n.__resize_handle=document.createElement("div"),pe.extend(n.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(s){return s.preventDefault(),n.width+=e-s.clientX,n.onResize(),e=s.clientX,!1}function i(){j.removeClass(n.__closeButton,et.CLASS_DRAG),j.unbind(window,"mousemove",t),j.unbind(window,"mouseup",i)}function r(s){return s.preventDefault(),e=s.clientX,j.addClass(n.__closeButton,et.CLASS_DRAG),j.bind(window,"mousemove",t),j.bind(window,"mouseup",i),!1}j.bind(n.__resize_handle,"mousedown",r),j.bind(n.__closeButton,"mousedown",r),n.domElement.insertBefore(n.__resize_handle,n.domElement.firstElementChild)}function $a(n,e){n.domElement.style.width=e+"px",n.__save_row&&n.autoPlace&&(n.__save_row.style.width=e+"px"),n.__closeButton&&(n.__closeButton.style.width=e+"px")}function Ts(n,e){var t={};return pe.each(n.__rememberedObjects,function(i,r){var s={},o=n.__rememberedObjectIndecesToControllers[r];pe.each(o,function(a,l){s[l]=e?a.initialValue:a.getValue()}),t[r]=s}),t}function Cg(n){for(var e=0;e<n.__preset_select.length;e++)n.__preset_select[e].value===n.preset&&(n.__preset_select.selectedIndex=e)}function zh(n){n.length!==0&&Mg.call(window,function(){zh(n)}),pe.each(n,function(e){e.updateDisplay()})}var Hh=et;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Il="156",Ui={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ii={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pg=0,eu=1,Lg=2,kh=1,Dg=2,Cn=3,ii=0,Ot=1,Dn=2,Jn=0,ur=1,tu=2,nu=3,iu=4,Ug=5,er=100,Ig=101,Og=102,ru=103,su=104,Ng=200,Fg=201,Bg=202,zg=203,Gh=204,Vh=205,Hg=206,kg=207,Gg=208,Vg=209,Wg=210,Xg=0,qg=1,Yg=2,Za=3,jg=4,Kg=5,$g=6,Zg=7,Wh=0,Jg=1,Qg=2,Qn=0,ev=1,tv=2,nv=3,iv=4,rv=5,Xh=300,gr=301,vr=302,Ja=303,Qa=304,Ro=306,el=1e3,tn=1001,tl=1002,Dt=1003,ou=1004,Ko=1005,Xt=1006,sv=1007,os=1008,ei=1009,ov=1010,av=1011,Ol=1012,qh=1013,jn=1014,Kn=1015,as=1016,Yh=1017,jh=1018,yi=1020,lv=1021,nn=1023,cv=1024,uv=1025,Si=1026,xr=1027,fv=1028,Kh=1029,hv=1030,$h=1031,Zh=1033,$o=33776,Zo=33777,Jo=33778,Qo=33779,au=35840,lu=35841,cu=35842,uu=35843,dv=36196,fu=37492,hu=37496,du=37808,pu=37809,mu=37810,_u=37811,gu=37812,vu=37813,xu=37814,Eu=37815,yu=37816,Su=37817,Mu=37818,bu=37819,Tu=37820,Au=37821,ea=36492,wu=36494,Ru=36495,pv=36283,Cu=36284,Pu=36285,Lu=36286,Jh=3e3,Mi=3001,mv=3200,_v=3201,gv=0,vv=1,bi="",rt="srgb",xn="srgb-linear",Co="display-p3",ta=7680,xv=519,Ev=512,yv=513,Sv=514,Mv=515,bv=516,Tv=517,Av=518,wv=519,Du=35044,Uu="300 es",nl=1035,Un=2e3,fo=2001;class Pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Iu=1234567;const Xr=Math.PI/180,ls=180/Math.PI;function Li(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]).toLowerCase()}function _t(n,e,t){return Math.max(e,Math.min(t,n))}function Nl(n,e){return(n%e+e)%e}function Rv(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Cv(n,e,t){return n!==e?(t-n)/(e-n):0}function qr(n,e,t){return(1-t)*n+t*e}function Pv(n,e,t,i){return qr(n,e,1-Math.exp(-t*i))}function Lv(n,e=1){return e-Math.abs(Nl(n,e*2)-e)}function Dv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Uv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Iv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Ov(n,e){return n+Math.random()*(e-n)}function Nv(n){return n*(.5-Math.random())}function Fv(n){n!==void 0&&(Iu=n);let e=Iu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bv(n){return n*Xr}function zv(n){return n*ls}function il(n){return(n&n-1)===0&&n!==0}function Hv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ho(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function kv(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function tr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Pt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Gv={DEG2RAD:Xr,RAD2DEG:ls,generateUUID:Li,clamp:_t,euclideanModulo:Nl,mapLinear:Rv,inverseLerp:Cv,lerp:qr,damp:Pv,pingpong:Lv,smoothstep:Dv,smootherstep:Uv,randInt:Iv,randFloat:Ov,randFloatSpread:Nv,seededRandom:Fv,degToRad:Bv,radToDeg:zv,isPowerOfTwo:il,ceilPowerOfTwo:Hv,floorPowerOfTwo:ho,setQuaternionFromProperEuler:kv,normalize:Pt,denormalize:tr};class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,r,s,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],v=r[0],m=r[3],d=r[6],w=r[1],E=r[4],y=r[7],C=r[2],I=r[5],P=r[8];return s[0]=o*v+a*w+l*C,s[3]=o*m+a*E+l*I,s[6]=o*d+a*y+l*P,s[1]=c*v+u*w+f*C,s[4]=c*m+u*E+f*I,s[7]=c*d+u*y+f*P,s[2]=h*v+p*w+g*C,s[5]=h*m+p*E+g*I,s[8]=h*d+p*y+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,g=t*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(na.makeScale(e,t)),this}rotate(e){return this.premultiply(na.makeRotation(-e)),this}translate(e,t){return this.premultiply(na.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const na=new We;function Qh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function po(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Vv(){const n=po("canvas");return n.style.display="block",n}const Ou={};function Yr(n){n in Ou||(Ou[n]=!0,console.warn(n))}function fr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ia(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Wv=new We().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Xv=new We().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function qv(n){return n.convertSRGBToLinear().applyMatrix3(Xv)}function Yv(n){return n.applyMatrix3(Wv).convertLinearToSRGB()}const jv={[xn]:n=>n,[rt]:n=>n.convertSRGBToLinear(),[Co]:qv},Kv={[xn]:n=>n,[rt]:n=>n.convertLinearToSRGB(),[Co]:Yv},Yt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return xn},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=jv[e],r=Kv[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Oi;class ed{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Oi===void 0&&(Oi=po("canvas")),Oi.width=e.width,Oi.height=e.height;const i=Oi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Oi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=po("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=fr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fr(t[i]/255)*255):t[i]=fr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $v=0;class td{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$v++}),this.uuid=Li(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ra(r[o].image)):s.push(ra(r[o]))}else s=ra(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ra(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ed.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zv=0;class kt extends Pi{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,i=tn,r=tn,s=Xt,o=os,a=nn,l=ei,c=kt.DEFAULT_ANISOTROPY,u=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=Li(),this.name="",this.source=new td(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Mi?rt:bi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case el:e.x=e.x-Math.floor(e.x);break;case tn:e.x=e.x<0?0:1;break;case tl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case el:e.y=e.y-Math.floor(e.y);break;case tn:e.y=e.y<0?0:1;break;case tl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===rt?Mi:Jh}set encoding(e){Yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Mi?rt:bi}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Xh;kt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,i=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,y=(p+1)/2,C=(d+1)/2,I=(u+h)/4,P=(f+v)/4,te=(g+m)/4;return E>y&&E>C?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=I/i,s=P/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=I/r,s=te/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=P/s,r=te/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(f-v)/w,this.z=(h-u)/w,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jv extends Pi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Yr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Mi?rt:bi),this.texture=new kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Xt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new td(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends Jv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class nd extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qv extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ai{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==h||c!==p||u!==g){let m=1-a;const d=l*h+c*p+u*g+f*v,w=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){const C=Math.sqrt(E),I=Math.atan2(C,d*w);m=Math.sin(m*I)/C,a=Math.sin(a*I)/C}const y=a*w;if(l=l*m+h*y,c=c*m+p*y,u=u*m+g*y,f=f*m+v*y,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*p-c*h,e[t+1]=l*g+u*h+c*f-a*p,e[t+2]=c*g+u*p+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*i,u=l*i+a*t-s*r,f=l*r+s*i-o*t,h=-s*t-o*i-a*r;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sa.copy(this).projectOnVector(e),this.sub(sa)}reflect(e){return this.sub(sa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sa=new F,Nu=new Ai;class ps{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ni.copy(e.boundingBox),Ni.applyMatrix4(e.matrixWorld),this.union(Ni);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)bn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(bn)}else r.boundingBox===null&&r.computeBoundingBox(),Ni.copy(r.boundingBox),Ni.applyMatrix4(e.matrixWorld),this.union(Ni)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),As.subVectors(this.max,Pr),Fi.subVectors(e.a,Pr),Bi.subVectors(e.b,Pr),zi.subVectors(e.c,Pr),kn.subVectors(Bi,Fi),Gn.subVectors(zi,Bi),fi.subVectors(Fi,zi);let t=[0,-kn.z,kn.y,0,-Gn.z,Gn.y,0,-fi.z,fi.y,kn.z,0,-kn.x,Gn.z,0,-Gn.x,fi.z,0,-fi.x,-kn.y,kn.x,0,-Gn.y,Gn.x,0,-fi.y,fi.x,0];return!oa(t,Fi,Bi,zi,As)||(t=[1,0,0,0,1,0,0,0,1],!oa(t,Fi,Bi,zi,As))?!1:(ws.crossVectors(kn,Gn),t=[ws.x,ws.y,ws.z],oa(t,Fi,Bi,zi,As))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mn=[new F,new F,new F,new F,new F,new F,new F,new F],bn=new F,Ni=new ps,Fi=new F,Bi=new F,zi=new F,kn=new F,Gn=new F,fi=new F,Pr=new F,As=new F,ws=new F,hi=new F;function oa(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){hi.fromArray(n,s);const a=r.x*Math.abs(hi.x)+r.y*Math.abs(hi.y)+r.z*Math.abs(hi.z),l=e.dot(hi),c=t.dot(hi),u=i.dot(hi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const e0=new ps,Lr=new F,aa=new F;class Fl{constructor(e=new F,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):e0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);const t=Lr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Lr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(aa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(aa)),this.expandByPoint(Lr.copy(e.center).sub(aa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new F,la=new F,Rs=new F,Vn=new F,ca=new F,Cs=new F,ua=new F;class id{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.origin).addScaledVector(this.direction,t),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){la.copy(e).add(t).multiplyScalar(.5),Rs.copy(t).sub(e).normalize(),Vn.copy(this.origin).sub(la);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Rs),a=Vn.dot(this.direction),l=-Vn.dot(Rs),c=Vn.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const v=1/u;f*=v,h*=v,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(la).addScaledVector(Rs,h),p}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);const i=Tn.dot(this.direction),r=Tn.dot(Tn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,i,r,s){ca.subVectors(t,e),Cs.subVectors(i,e),ua.crossVectors(ca,Cs);let o=this.direction.dot(ua),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,e);const l=a*this.direction.dot(Cs.crossVectors(Vn,Cs));if(l<0)return null;const c=a*this.direction.dot(ca.cross(Vn));if(c<0||l+c>o)return null;const u=-a*Vn.dot(ua);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,i,r,s,o,a,l,c,u,f,h,p,g,v,m){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,p,g,v,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,p,g,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Hi.setFromMatrixColumn(e,0).length(),s=1/Hi.setFromMatrixColumn(e,1).length(),o=1/Hi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,v=c*f;t[0]=h+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,v=c*f;t[0]=h-v*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+g,t[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(t0,e,n0)}lookAt(e,t,i){const r=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Wn.crossVectors(i,zt),Wn.lengthSq()===0&&(Math.abs(i.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Wn.crossVectors(i,zt)),Wn.normalize(),Ps.crossVectors(zt,Wn),r[0]=Wn.x,r[4]=Ps.x,r[8]=zt.x,r[1]=Wn.y,r[5]=Ps.y,r[9]=zt.y,r[2]=Wn.z,r[6]=Ps.z,r[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],v=i[6],m=i[10],d=i[14],w=i[3],E=i[7],y=i[11],C=i[15],I=r[0],P=r[4],te=r[8],b=r[12],R=r[1],ce=r[5],_e=r[9],H=r[13],$=r[2],Z=r[6],oe=r[10],W=r[14],K=r[3],me=r[7],fe=r[11],z=r[15];return s[0]=o*I+a*R+l*$+c*K,s[4]=o*P+a*ce+l*Z+c*me,s[8]=o*te+a*_e+l*oe+c*fe,s[12]=o*b+a*H+l*W+c*z,s[1]=u*I+f*R+h*$+p*K,s[5]=u*P+f*ce+h*Z+p*me,s[9]=u*te+f*_e+h*oe+p*fe,s[13]=u*b+f*H+h*W+p*z,s[2]=g*I+v*R+m*$+d*K,s[6]=g*P+v*ce+m*Z+d*me,s[10]=g*te+v*_e+m*oe+d*fe,s[14]=g*b+v*H+m*W+d*z,s[3]=w*I+E*R+y*$+C*K,s[7]=w*P+E*ce+y*Z+C*me,s[11]=w*te+E*_e+y*oe+C*fe,s[15]=w*b+E*H+y*W+C*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+v*(+t*l*p-t*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],w=f*m*c-v*h*c+v*l*p-a*m*p-f*l*d+a*h*d,E=g*h*c-u*m*c-g*l*p+o*m*p+u*l*d-o*h*d,y=u*v*c-g*f*c+g*a*p-o*v*p-u*a*d+o*f*d,C=g*f*l-u*v*l-g*a*h+o*v*h+u*a*m-o*f*m,I=t*w+i*E+r*y+s*C;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return e[0]=w*P,e[1]=(v*h*s-f*m*s-v*r*p+i*m*p+f*r*d-i*h*d)*P,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*d+i*l*d)*P,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*P,e[4]=E*P,e[5]=(u*m*s-g*h*s+g*r*p-t*m*p-u*r*d+t*h*d)*P,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*d-t*l*d)*P,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*p+t*l*p)*P,e[8]=y*P,e[9]=(g*f*s-u*v*s-g*i*p+t*v*p+u*i*d-t*f*d)*P,e[10]=(o*v*s-g*a*s+g*i*c-t*v*c-o*i*d+t*a*d)*P,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*P,e[12]=C*P,e[13]=(u*v*r-g*f*r+g*i*h-t*v*h-u*i*m+t*f*m)*P,e[14]=(g*a*r-o*v*r-g*i*l+t*v*l+o*i*m-t*a*m)*P,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,g=s*f,v=o*u,m=o*f,d=a*f,w=l*c,E=l*u,y=l*f,C=i.x,I=i.y,P=i.z;return r[0]=(1-(v+d))*C,r[1]=(p+y)*C,r[2]=(g-E)*C,r[3]=0,r[4]=(p-y)*I,r[5]=(1-(h+d))*I,r[6]=(m+w)*I,r[7]=0,r[8]=(g+E)*P,r[9]=(m-w)*P,r[10]=(1-(h+v))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Hi.set(r[0],r[1],r[2]).length();const o=Hi.set(r[4],r[5],r[6]).length(),a=Hi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],jt.copy(this);const c=1/s,u=1/o,f=1/a;return jt.elements[0]*=c,jt.elements[1]*=c,jt.elements[2]*=c,jt.elements[4]*=u,jt.elements[5]*=u,jt.elements[6]*=u,jt.elements[8]*=f,jt.elements[9]*=f,jt.elements[10]*=f,t.setFromRotationMatrix(jt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Un){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,g;if(a===Un)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===fo)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Un){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,p=(i+r)*u;let g,v;if(a===Un)g=(o+s)*f,v=-2*f;else if(a===fo)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Hi=new F,jt=new vt,t0=new F(0,0,0),n0=new F(1,1,1),Wn=new F,Ps=new F,zt=new F,Fu=new vt,Bu=new Ai;class Po{constructor(e=0,t=0,i=0,r=Po.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(_t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bu.setFromEuler(this),this.setFromQuaternion(Bu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Po.DEFAULT_ORDER="XYZ";class rd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let i0=0;const zu=new F,ki=new Ai,An=new vt,Ls=new F,Dr=new F,r0=new F,s0=new Ai,Hu=new F(1,0,0),ku=new F(0,1,0),Gu=new F(0,0,1),o0={type:"added"},a0={type:"removed"};class Gt extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new F,t=new Po,i=new Ai,r=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new We}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new rd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.multiply(ki),this}rotateOnWorldAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.premultiply(ki),this}rotateX(e){return this.rotateOnAxis(Hu,e)}rotateY(e){return this.rotateOnAxis(ku,e)}rotateZ(e){return this.rotateOnAxis(Gu,e)}translateOnAxis(e,t){return zu.copy(e).applyQuaternion(this.quaternion),this.position.add(zu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hu,e)}translateY(e){return this.translateOnAxis(ku,e)}translateZ(e){return this.translateOnAxis(Gu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ls.copy(e):Ls.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(Dr,Ls,this.up):An.lookAt(Ls,Dr,this.up),this.quaternion.setFromRotationMatrix(An),r&&(An.extractRotation(r.matrixWorld),ki.setFromRotationMatrix(An),this.quaternion.premultiply(ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(o0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(a0)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,e,r0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,s0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new F(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kt=new F,wn=new F,fa=new F,Rn=new F,Gi=new F,Vi=new F,Vu=new F,ha=new F,da=new F,pa=new F;let Ds=!1;class Jt{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Kt.subVectors(e,t),r.cross(Kt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Kt.subVectors(r,t),wn.subVectors(i,t),fa.subVectors(e,t);const o=Kt.dot(Kt),a=Kt.dot(wn),l=Kt.dot(fa),c=wn.dot(wn),u=wn.dot(fa),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Rn),Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getUV(e,t,i,r,s,o,a,l){return Ds===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ds=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Rn),l.setScalar(0),l.addScaledVector(s,Rn.x),l.addScaledVector(o,Rn.y),l.addScaledVector(a,Rn.z),l}static isFrontFacing(e,t,i,r){return Kt.subVectors(i,t),wn.subVectors(e,t),Kt.cross(wn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),Kt.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Ds===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ds=!0),Jt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Jt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Gi.subVectors(r,i),Vi.subVectors(s,i),ha.subVectors(e,i);const l=Gi.dot(ha),c=Vi.dot(ha);if(l<=0&&c<=0)return t.copy(i);da.subVectors(e,r);const u=Gi.dot(da),f=Vi.dot(da);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Gi,o);pa.subVectors(e,s);const p=Gi.dot(pa),g=Vi.dot(pa);if(g>=0&&p<=g)return t.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Vi,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Vu.subVectors(s,r),a=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(Vu,a);const d=1/(m+v+h);return o=v*d,a=h*d,t.copy(i).addScaledVector(Gi,o).addScaledVector(Vi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let l0=0;class Lo extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=ur,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gh,this.blendDst=Vh,this.blendEquation=er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ta,this.stencilZFail=ta,this.stencilZPass=ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ur&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$t={h:0,s:0,l:0},Us={h:0,s:0,l:0};function ma(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Yt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Yt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Yt.workingColorSpace){if(e=Nl(e,1),t=_t(t,0,1),i=_t(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ma(o,s,e+1/3),this.g=ma(o,s,e),this.b=ma(o,s,e-1/3)}return Yt.toWorkingColorSpace(this,r),this}setStyle(e,t=rt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rt){const i=sd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=ia(e.r),this.g=ia(e.g),this.b=ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rt){return Yt.fromWorkingColorSpace(bt.copy(this),e),Math.round(_t(bt.r*255,0,255))*65536+Math.round(_t(bt.g*255,0,255))*256+Math.round(_t(bt.b*255,0,255))}getHexString(e=rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Yt.workingColorSpace){Yt.fromWorkingColorSpace(bt.copy(this),t);const i=bt.r,r=bt.g,s=bt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=rt){Yt.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,i=bt.g,r=bt.b;return e!==rt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL($t),$t.h+=e,$t.s+=t,$t.l+=i,this.setHSL($t.h,$t.s,$t.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($t),e.getHSL(Us);const i=qr($t.h,Us.h,t),r=qr($t.s,Us.s,t),s=qr($t.l,Us.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new nt;nt.NAMES=sd;class Bl extends Lo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new F,Is=new Ae;class gn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Du,this.updateRange={offset:0,count:-1},this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Is.fromBufferAttribute(this,t),Is.applyMatrix3(e),this.setXY(t,Is.x,Is.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=tr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=tr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=tr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=tr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=tr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),r=Pt(r,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Du&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class od extends gn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ad extends gn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Nn extends gn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let c0=0;const Wt=new vt,_a=new Gt,Wi=new F,Ht=new ps,Ur=new ps,mt=new F;class oi extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qh(e)?ad:od)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,i){return Wt.makeTranslation(e,t,i),this.applyMatrix4(Wt),this}scale(e,t,i){return Wt.makeScale(e,t,i),this.applyMatrix4(Wt),this}lookAt(e){return _a.lookAt(e),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Nn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ht.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ur.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(Ht.min,Ur.min),Ht.expandByPoint(mt),mt.addVectors(Ht.max,Ur.max),Ht.expandByPoint(mt)):(Ht.expandByPoint(Ur.min),Ht.expandByPoint(Ur.max))}Ht.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(mt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)mt.fromBufferAttribute(a,c),l&&(Wi.fromBufferAttribute(e,c),mt.add(Wi)),r=Math.max(r,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new F,u[R]=new F;const f=new F,h=new F,p=new F,g=new Ae,v=new Ae,m=new Ae,d=new F,w=new F;function E(R,ce,_e){f.fromArray(r,R*3),h.fromArray(r,ce*3),p.fromArray(r,_e*3),g.fromArray(o,R*2),v.fromArray(o,ce*2),m.fromArray(o,_e*2),h.sub(f),p.sub(f),v.sub(g),m.sub(g);const H=1/(v.x*m.y-m.x*v.y);isFinite(H)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(H),w.copy(p).multiplyScalar(v.x).addScaledVector(h,-m.x).multiplyScalar(H),c[R].add(d),c[ce].add(d),c[_e].add(d),u[R].add(w),u[ce].add(w),u[_e].add(w))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let R=0,ce=y.length;R<ce;++R){const _e=y[R],H=_e.start,$=_e.count;for(let Z=H,oe=H+$;Z<oe;Z+=3)E(i[Z+0],i[Z+1],i[Z+2])}const C=new F,I=new F,P=new F,te=new F;function b(R){P.fromArray(s,R*3),te.copy(P);const ce=c[R];C.copy(ce),C.sub(P.multiplyScalar(P.dot(ce))).normalize(),I.crossVectors(te,ce);const H=I.dot(u[R])<0?-1:1;l[R*4]=C.x,l[R*4+1]=C.y,l[R*4+2]=C.z,l[R*4+3]=H}for(let R=0,ce=y.length;R<ce;++R){const _e=y[R],H=_e.start,$=_e.count;for(let Z=H,oe=H+$;Z<oe;Z+=3)b(i[Z+0]),b(i[Z+1]),b(i[Z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,f=new F;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let d=0;d<u;d++)h[g++]=c[p++]}return new gn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new oi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wu=new vt,di=new id,Os=new Fl,Xu=new F,Xi=new F,qi=new F,Yi=new F,ga=new F,Ns=new F,Fs=new Ae,Bs=new Ae,zs=new Ae,qu=new F,Yu=new F,ju=new F,Hs=new F,ks=new F;class In extends Gt{constructor(e=new oi,t=new Bl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ns.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(ga.fromBufferAttribute(f,e),o?Ns.addScaledVector(ga,u):Ns.addScaledVector(ga.sub(t),u))}t.add(Ns)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Os.copy(i.boundingSphere),Os.applyMatrix4(s),di.copy(e.ray).recast(e.near),!(Os.containsPoint(di.origin)===!1&&(di.intersectSphere(Os,Xu)===null||di.origin.distanceToSquared(Xu)>(e.far-e.near)**2))&&(Wu.copy(s).invert(),di.copy(e.ray).applyMatrix4(Wu),!(i.boundingBox!==null&&di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],d=o[m.materialIndex],w=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=w,C=E;y<C;y+=3){const I=a.getX(y),P=a.getX(y+1),te=a.getX(y+2);r=Gs(this,d,e,i,c,u,f,I,P,te),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const w=a.getX(m),E=a.getX(m+1),y=a.getX(m+2);r=Gs(this,o,e,i,c,u,f,w,E,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],d=o[m.materialIndex],w=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=w,C=E;y<C;y+=3){const I=y,P=y+1,te=y+2;r=Gs(this,d,e,i,c,u,f,I,P,te),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const w=m,E=m+1,y=m+2;r=Gs(this,o,e,i,c,u,f,w,E,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function u0(n,e,t,i,r,s,o,a){let l;if(e.side===Ot?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ii,a),l===null)return null;ks.copy(a),ks.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ks);return c<t.near||c>t.far?null:{distance:c,point:ks.clone(),object:n}}function Gs(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Xi),n.getVertexPosition(l,qi),n.getVertexPosition(c,Yi);const u=u0(n,e,t,i,Xi,qi,Yi,Hs);if(u){r&&(Fs.fromBufferAttribute(r,a),Bs.fromBufferAttribute(r,l),zs.fromBufferAttribute(r,c),u.uv=Jt.getInterpolation(Hs,Xi,qi,Yi,Fs,Bs,zs,new Ae)),s&&(Fs.fromBufferAttribute(s,a),Bs.fromBufferAttribute(s,l),zs.fromBufferAttribute(s,c),u.uv1=Jt.getInterpolation(Hs,Xi,qi,Yi,Fs,Bs,zs,new Ae),u.uv2=u.uv1),o&&(qu.fromBufferAttribute(o,a),Yu.fromBufferAttribute(o,l),ju.fromBufferAttribute(o,c),u.normal=Jt.getInterpolation(Hs,Xi,qi,Yi,qu,Yu,ju,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new F,materialIndex:0};Jt.getNormal(Xi,qi,Yi,f.normal),u.face=f}return u}class ms extends oi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Nn(c,3)),this.setAttribute("normal",new Nn(u,3)),this.setAttribute("uv",new Nn(f,2));function g(v,m,d,w,E,y,C,I,P,te,b){const R=y/P,ce=C/te,_e=y/2,H=C/2,$=I/2,Z=P+1,oe=te+1;let W=0,K=0;const me=new F;for(let fe=0;fe<oe;fe++){const z=fe*ce-H;for(let q=0;q<Z;q++){const Se=q*R-_e;me[v]=Se*w,me[m]=z*E,me[d]=$,c.push(me.x,me.y,me.z),me[v]=0,me[m]=0,me[d]=I>0?1:-1,u.push(me.x,me.y,me.z),f.push(q/P),f.push(1-fe/te),W+=1}}for(let fe=0;fe<te;fe++)for(let z=0;z<P;z++){const q=h+z+Z*fe,Se=h+z+Z*(fe+1),we=h+(z+1)+Z*(fe+1),De=h+(z+1)+Z*fe;l.push(q,Se,De),l.push(Se,we,De),K+=6}a.addGroup(p,K,b),p+=K,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ms(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Er(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Lt(n){const e={};for(let t=0;t<n.length;t++){const i=Er(n[t]);for(const r in i)e[r]=i[r]}return e}function f0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ld(n){return n.getRenderTarget()===null?n.outputColorSpace:xn}const h0={clone:Er,merge:Lt};var d0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends Lo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d0,this.fragmentShader=p0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Er(e.uniforms),this.uniformsGroups=f0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class cd extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Un}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class qt extends cd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ls*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ji=-90,Ki=1;class m0 extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new qt(ji,Ki,e,t);r.layers=this.layers,this.add(r);const s=new qt(ji,Ki,e,t);s.layers=this.layers,this.add(s);const o=new qt(ji,Ki,e,t);o.layers=this.layers,this.add(o);const a=new qt(ji,Ki,e,t);a.layers=this.layers,this.add(a);const l=new qt(ji,Ki,e,t);l.layers=this.layers,this.add(l);const c=new qt(ji,Ki,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Un)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.xr.enabled;e.xr.enabled=!1;const h=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=h,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class ud extends kt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:gr,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _0 extends Ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Yr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Mi?rt:bi),this.texture=new ud(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ms(5,5,5),s=new wi({name:"CubemapFromEquirect",uniforms:Er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ot,blending:Jn});s.uniforms.tEquirect.value=t;const o=new In(r,s),a=t.minFilter;return t.minFilter===os&&(t.minFilter=Xt),new m0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const va=new F,g0=new F,v0=new We;class Yn{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=va.subVectors(i,t).cross(g0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(va),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||v0.getNormalMatrix(e),r=this.coplanarPoint(va).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new Fl,Vs=new F;class fd{constructor(e=new Yn,t=new Yn,i=new Yn,r=new Yn,s=new Yn,o=new Yn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Un){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],g=r[9],v=r[10],m=r[11],d=r[12],w=r[13],E=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,m-p,y-d).normalize(),i[1].setComponents(l+s,h+c,m+p,y+d).normalize(),i[2].setComponents(l+o,h+u,m+g,y+w).normalize(),i[3].setComponents(l-o,h-u,m-g,y-w).normalize(),i[4].setComponents(l-a,h-f,m-v,y-E).normalize(),t===Un)i[5].setComponents(l+a,h+f,m+v,y+E).normalize();else if(t===fo)i[5].setComponents(a,f,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Vs.x=r.normal.x>0?e.max.x:e.min.x,Vs.y=r.normal.y>0?e.max.y:e.min.y,Vs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hd(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function x0(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=n.SHORT;else if(f instanceof Uint32Array)g=n.UNSIGNED_INT;else if(f instanceof Int32Array)g=n.INT;else if(f instanceof Int8Array)g=n.BYTE;else if(f instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,p=u.updateRange;n.bindBuffer(f,c),p.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class zl extends oi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,p=[],g=[],v=[],m=[];for(let d=0;d<u;d++){const w=d*h-o;for(let E=0;E<c;E++){const y=E*f-s;g.push(y,-w,0),v.push(0,0,1),m.push(E/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let w=0;w<a;w++){const E=w+c*d,y=w+c*(d+1),C=w+1+c*(d+1),I=w+1+c*d;p.push(E,y,I),p.push(y,C,I)}this.setIndex(p),this.setAttribute("position",new Nn(g,3)),this.setAttribute("normal",new Nn(v,3)),this.setAttribute("uv",new Nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.width,e.height,e.widthSegments,e.heightSegments)}}var E0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,y0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,S0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,M0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,T0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,w0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,R0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,L0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,D0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,k0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,G0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,V0=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,W0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,j0="gl_FragColor = linearToOutputTexel( gl_FragColor );",K0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Z0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,J0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Q0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ex=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ix=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ox=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ax=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ux=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,px=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_x=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,gx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vx=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ex=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,yx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,bx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Tx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ax=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Px=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ux=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ix=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ox=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Nx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Gx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Yx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$x=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,eE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,sE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,aE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_E=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ME=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,TE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,AE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LE=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,DE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,NE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,BE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,GE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YE=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,KE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$E=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:E0,alphahash_pars_fragment:y0,alphamap_fragment:S0,alphamap_pars_fragment:M0,alphatest_fragment:b0,alphatest_pars_fragment:T0,aomap_fragment:A0,aomap_pars_fragment:w0,begin_vertex:R0,beginnormal_vertex:C0,bsdfs:P0,iridescence_fragment:L0,bumpmap_pars_fragment:D0,clipping_planes_fragment:U0,clipping_planes_pars_fragment:I0,clipping_planes_pars_vertex:O0,clipping_planes_vertex:N0,color_fragment:F0,color_pars_fragment:B0,color_pars_vertex:z0,color_vertex:H0,common:k0,cube_uv_reflection_fragment:G0,defaultnormal_vertex:V0,displacementmap_pars_vertex:W0,displacementmap_vertex:X0,emissivemap_fragment:q0,emissivemap_pars_fragment:Y0,colorspace_fragment:j0,colorspace_pars_fragment:K0,envmap_fragment:$0,envmap_common_pars_fragment:Z0,envmap_pars_fragment:J0,envmap_pars_vertex:Q0,envmap_physical_pars_fragment:fx,envmap_vertex:ex,fog_vertex:tx,fog_pars_vertex:nx,fog_fragment:ix,fog_pars_fragment:rx,gradientmap_pars_fragment:sx,lightmap_fragment:ox,lightmap_pars_fragment:ax,lights_lambert_fragment:lx,lights_lambert_pars_fragment:cx,lights_pars_begin:ux,lights_toon_fragment:hx,lights_toon_pars_fragment:dx,lights_phong_fragment:px,lights_phong_pars_fragment:mx,lights_physical_fragment:_x,lights_physical_pars_fragment:gx,lights_fragment_begin:vx,lights_fragment_maps:xx,lights_fragment_end:Ex,logdepthbuf_fragment:yx,logdepthbuf_pars_fragment:Sx,logdepthbuf_pars_vertex:Mx,logdepthbuf_vertex:bx,map_fragment:Tx,map_pars_fragment:Ax,map_particle_fragment:wx,map_particle_pars_fragment:Rx,metalnessmap_fragment:Cx,metalnessmap_pars_fragment:Px,morphcolor_vertex:Lx,morphnormal_vertex:Dx,morphtarget_pars_vertex:Ux,morphtarget_vertex:Ix,normal_fragment_begin:Ox,normal_fragment_maps:Nx,normal_pars_fragment:Fx,normal_pars_vertex:Bx,normal_vertex:zx,normalmap_pars_fragment:Hx,clearcoat_normal_fragment_begin:kx,clearcoat_normal_fragment_maps:Gx,clearcoat_pars_fragment:Vx,iridescence_pars_fragment:Wx,opaque_fragment:Xx,packing:qx,premultiplied_alpha_fragment:Yx,project_vertex:jx,dithering_fragment:Kx,dithering_pars_fragment:$x,roughnessmap_fragment:Zx,roughnessmap_pars_fragment:Jx,shadowmap_pars_fragment:Qx,shadowmap_pars_vertex:eE,shadowmap_vertex:tE,shadowmask_pars_fragment:nE,skinbase_vertex:iE,skinning_pars_vertex:rE,skinning_vertex:sE,skinnormal_vertex:oE,specularmap_fragment:aE,specularmap_pars_fragment:lE,tonemapping_fragment:cE,tonemapping_pars_fragment:uE,transmission_fragment:fE,transmission_pars_fragment:hE,uv_pars_fragment:dE,uv_pars_vertex:pE,uv_vertex:mE,worldpos_vertex:_E,background_vert:gE,background_frag:vE,backgroundCube_vert:xE,backgroundCube_frag:EE,cube_vert:yE,cube_frag:SE,depth_vert:ME,depth_frag:bE,distanceRGBA_vert:TE,distanceRGBA_frag:AE,equirect_vert:wE,equirect_frag:RE,linedashed_vert:CE,linedashed_frag:PE,meshbasic_vert:LE,meshbasic_frag:DE,meshlambert_vert:UE,meshlambert_frag:IE,meshmatcap_vert:OE,meshmatcap_frag:NE,meshnormal_vert:FE,meshnormal_frag:BE,meshphong_vert:zE,meshphong_frag:HE,meshphysical_vert:kE,meshphysical_frag:GE,meshtoon_vert:VE,meshtoon_frag:WE,points_vert:XE,points_frag:qE,shadow_vert:YE,shadow_frag:jE,sprite_vert:KE,sprite_frag:$E},Ce={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},mn={basic:{uniforms:Lt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Lt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new nt(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Lt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Lt([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Lt([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new nt(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Lt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Lt([Ce.points,Ce.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Lt([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Lt([Ce.common,Ce.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Lt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Lt([Ce.sprite,Ce.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Lt([Ce.common,Ce.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Lt([Ce.lights,Ce.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};mn.physical={uniforms:Lt([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Ws={r:0,b:0,g:0};function ZE(n,e,t,i,r,s,o){const a=new nt(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function g(m,d){let w=!1,E=d.isScene===!0?d.background:null;E&&E.isTexture&&(E=(d.backgroundBlurriness>0?t:e).get(E)),E===null?v(a,l):E&&E.isColor&&(v(E,1),w=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),E&&(E.isCubeTexture||E.mapping===Ro)?(u===void 0&&(u=new In(new ms(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:Er(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=E.colorSpace!==rt,(f!==E||h!==E.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=E,h=E.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new In(new zl(2,2),new wi({name:"BackgroundMaterial",uniforms:Er(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=E.colorSpace!==rt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||h!==E.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=E,h=E.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,d){m.getRGB(Ws,ld(n)),i.buffers.color.setClear(Ws.r,Ws.g,Ws.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:g}}function JE(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f($,Z,oe,W,K){let me=!1;if(o){const fe=v(W,oe,Z);c!==fe&&(c=fe,p(c.object)),me=d($,W,oe,K),me&&w($,W,oe,K)}else{const fe=Z.wireframe===!0;(c.geometry!==W.id||c.program!==oe.id||c.wireframe!==fe)&&(c.geometry=W.id,c.program=oe.id,c.wireframe=fe,me=!0)}K!==null&&t.update(K,n.ELEMENT_ARRAY_BUFFER),(me||u)&&(u=!1,te($,Z,oe,W),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p($){return i.isWebGL2?n.bindVertexArray($):s.bindVertexArrayOES($)}function g($){return i.isWebGL2?n.deleteVertexArray($):s.deleteVertexArrayOES($)}function v($,Z,oe){const W=oe.wireframe===!0;let K=a[$.id];K===void 0&&(K={},a[$.id]=K);let me=K[Z.id];me===void 0&&(me={},K[Z.id]=me);let fe=me[W];return fe===void 0&&(fe=m(h()),me[W]=fe),fe}function m($){const Z=[],oe=[],W=[];for(let K=0;K<r;K++)Z[K]=0,oe[K]=0,W[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:oe,attributeDivisors:W,object:$,attributes:{},index:null}}function d($,Z,oe,W){const K=c.attributes,me=Z.attributes;let fe=0;const z=oe.getAttributes();for(const q in z)if(z[q].location>=0){const we=K[q];let De=me[q];if(De===void 0&&(q==="instanceMatrix"&&$.instanceMatrix&&(De=$.instanceMatrix),q==="instanceColor"&&$.instanceColor&&(De=$.instanceColor)),we===void 0||we.attribute!==De||De&&we.data!==De.data)return!0;fe++}return c.attributesNum!==fe||c.index!==W}function w($,Z,oe,W){const K={},me=Z.attributes;let fe=0;const z=oe.getAttributes();for(const q in z)if(z[q].location>=0){let we=me[q];we===void 0&&(q==="instanceMatrix"&&$.instanceMatrix&&(we=$.instanceMatrix),q==="instanceColor"&&$.instanceColor&&(we=$.instanceColor));const De={};De.attribute=we,we&&we.data&&(De.data=we.data),K[q]=De,fe++}c.attributes=K,c.attributesNum=fe,c.index=W}function E(){const $=c.newAttributes;for(let Z=0,oe=$.length;Z<oe;Z++)$[Z]=0}function y($){C($,0)}function C($,Z){const oe=c.newAttributes,W=c.enabledAttributes,K=c.attributeDivisors;oe[$]=1,W[$]===0&&(n.enableVertexAttribArray($),W[$]=1),K[$]!==Z&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"]($,Z),K[$]=Z)}function I(){const $=c.newAttributes,Z=c.enabledAttributes;for(let oe=0,W=Z.length;oe<W;oe++)Z[oe]!==$[oe]&&(n.disableVertexAttribArray(oe),Z[oe]=0)}function P($,Z,oe,W,K,me,fe){fe===!0?n.vertexAttribIPointer($,Z,oe,K,me):n.vertexAttribPointer($,Z,oe,W,K,me)}function te($,Z,oe,W){if(i.isWebGL2===!1&&($.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const K=W.attributes,me=oe.getAttributes(),fe=Z.defaultAttributeValues;for(const z in me){const q=me[z];if(q.location>=0){let Se=K[z];if(Se===void 0&&(z==="instanceMatrix"&&$.instanceMatrix&&(Se=$.instanceMatrix),z==="instanceColor"&&$.instanceColor&&(Se=$.instanceColor)),Se!==void 0){const we=Se.normalized,De=Se.itemSize,Ue=t.get(Se);if(Ue===void 0)continue;const B=Ue.buffer,le=Ue.type,de=Ue.bytesPerElement,ye=i.isWebGL2===!0&&(le===n.INT||le===n.UNSIGNED_INT||Se.gpuType===qh);if(Se.isInterleavedBufferAttribute){const Me=Se.data,_=Me.stride,M=Se.offset;if(Me.isInstancedInterleavedBuffer){for(let T=0;T<q.locationSize;T++)C(q.location+T,Me.meshPerAttribute);$.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let T=0;T<q.locationSize;T++)y(q.location+T);n.bindBuffer(n.ARRAY_BUFFER,B);for(let T=0;T<q.locationSize;T++)P(q.location+T,De/q.locationSize,le,we,_*de,(M+De/q.locationSize*T)*de,ye)}else{if(Se.isInstancedBufferAttribute){for(let Me=0;Me<q.locationSize;Me++)C(q.location+Me,Se.meshPerAttribute);$.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Me=0;Me<q.locationSize;Me++)y(q.location+Me);n.bindBuffer(n.ARRAY_BUFFER,B);for(let Me=0;Me<q.locationSize;Me++)P(q.location+Me,De/q.locationSize,le,we,De*de,De/q.locationSize*Me*de,ye)}}else if(fe!==void 0){const we=fe[z];if(we!==void 0)switch(we.length){case 2:n.vertexAttrib2fv(q.location,we);break;case 3:n.vertexAttrib3fv(q.location,we);break;case 4:n.vertexAttrib4fv(q.location,we);break;default:n.vertexAttrib1fv(q.location,we)}}}}I()}function b(){_e();for(const $ in a){const Z=a[$];for(const oe in Z){const W=Z[oe];for(const K in W)g(W[K].object),delete W[K];delete Z[oe]}delete a[$]}}function R($){if(a[$.id]===void 0)return;const Z=a[$.id];for(const oe in Z){const W=Z[oe];for(const K in W)g(W[K].object),delete W[K];delete Z[oe]}delete a[$.id]}function ce($){for(const Z in a){const oe=a[Z];if(oe[$.id]===void 0)continue;const W=oe[$.id];for(const K in W)g(W[K].object),delete W[K];delete oe[$.id]}}function _e(){H(),u=!0,c!==l&&(c=l,p(c.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:_e,resetDefaultState:H,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfProgram:ce,initAttributes:E,enableAttribute:y,disableUnusedAttributes:I}}function QE(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,p;if(r)h=n,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function ey(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=h>0,y=o||e.has("OES_texture_float"),C=E&&y,I=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:w,vertexTextures:E,floatFragmentTextures:y,floatVertexTextures:C,maxSamples:I}}function ty(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Yn,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const w=s?0:i,E=w*4;let y=d.clippingState||null;l.value=y,y=u(g,h,E,p);for(let C=0;C!==E;++C)y[C]=t[C];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const d=p+v*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,y=p;E!==v;++E,y+=4)o.copy(f[E]).applyMatrix4(w,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function ny(n){let e=new WeakMap;function t(o,a){return a===Ja?o.mapping=gr:a===Qa&&(o.mapping=vr),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ja||a===Qa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new _0(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class iy extends cd{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const rr=4,Ku=[.125,.215,.35,.446,.526,.582],vi=20,xa=new iy,$u=new nt;let Ea=null;const mi=(1+Math.sqrt(5))/2,$i=1/mi,Zu=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,mi,$i),new F(0,mi,-$i),new F($i,0,mi),new F(-$i,0,mi),new F(mi,$i,0),new F(-mi,$i,0)];class Ju{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ea=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ef(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ea),e.scissorTest=!1,Xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gr||e.mapping===vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ea=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:as,format:nn,colorSpace:xn,depthBuffer:!1},r=Qu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ry(s)),this._blurMaterial=sy(s,e,t)}return r}_compileMaterial(e){const t=new In(this._lodPlanes[0],e);this._renderer.compile(t,xa)}_sceneToCubeUV(e,t,i,r){const a=new qt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor($u),u.toneMapping=Qn,u.autoClear=!1;const p=new Bl({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),g=new In(new ms,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy($u),v=!0);for(let d=0;d<6;d++){const w=d%3;w===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):w===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const E=this._cubeSize;Xs(r,w*E,d>2?E:0,E,E),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===gr||e.mapping===vr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ef());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new In(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Xs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,xa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Zu[(r-1)%Zu.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new In(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*vi-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):vi;m>vi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vi}`);const d=[];let w=0;for(let P=0;P<vi;++P){const te=P/v,b=Math.exp(-te*te/2);d.push(b),P===0?w+=b:P<m&&(w+=2*b)}for(let P=0;P<d.length;P++)d[P]=d[P]/w;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=g,h.mipInt.value=E-i;const y=this._sizeLods[r],C=3*y*(r>E-rr?r-E+rr:0),I=4*(this._cubeSize-y);Xs(t,C,I,3*y,2*y),l.setRenderTarget(t),l.render(f,xa)}}function ry(n){const e=[],t=[],i=[];let r=n;const s=n-rr+1+Ku.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-rr?l=Ku[o-n+rr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,v=3,m=2,d=1,w=new Float32Array(v*g*p),E=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let I=0;I<p;I++){const P=I%3*2/3-1,te=I>2?0:-1,b=[P,te,0,P+2/3,te,0,P+2/3,te+1,0,P,te,0,P+2/3,te+1,0,P,te+1,0];w.set(b,v*g*I),E.set(h,m*g*I);const R=[I,I,I,I,I,I];y.set(R,d*g*I)}const C=new oi;C.setAttribute("position",new gn(w,v)),C.setAttribute("uv",new gn(E,m)),C.setAttribute("faceIndex",new gn(y,d)),e.push(C),r>rr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Qu(n,e,t){const i=new Ti(n,e,t);return i.texture.mapping=Ro,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function sy(n,e,t){const i=new Float32Array(vi),r=new F(0,1,0);return new wi({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function ef(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function tf(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Hl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function oy(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ja||l===Qa,u=l===gr||l===vr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Ju(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Ju(n));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ay(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ly(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let m=0,d=v.length;m<d;m++)e.remove(v[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const v=p[g];for(let m=0,d=v.length;m<d;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let v=0;if(p!==null){const w=p.array;v=p.version;for(let E=0,y=w.length;E<y;E+=3){const C=w[E+0],I=w[E+1],P=w[E+2];h.push(C,I,I,P,P,C)}}else if(g!==void 0){const w=g.array;v=g.version;for(let E=0,y=w.length/3-1;E<y;E+=3){const C=E+0,I=E+1,P=E+2;h.push(C,I,I,P,P,C)}}else return;const m=new(Qh(h)?ad:od)(h,1);m.version=v;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function cy(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,p){n.drawElements(s,p,a,h*l),t.update(p,s,1)}function f(h,p,g){if(g===0)return;let v,m;if(r)v=n,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](s,p,a,h*l,g),t.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function uy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function fy(n,e){return n[0]-e[0]}function hy(n,e){return Math.abs(e[1])-Math.abs(n[1])}function dy(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new yt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==v){let Z=function(){H.dispose(),s.delete(u),u.removeEventListener("dispose",Z)};var p=Z;m!==void 0&&m.texture.dispose();const E=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,I=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],te=u.morphAttributes.color||[];let b=0;E===!0&&(b=1),y===!0&&(b=2),C===!0&&(b=3);let R=u.attributes.position.count*b,ce=1;R>e.maxTextureSize&&(ce=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const _e=new Float32Array(R*ce*4*v),H=new nd(_e,R,ce,v);H.type=Kn,H.needsUpdate=!0;const $=b*4;for(let oe=0;oe<v;oe++){const W=I[oe],K=P[oe],me=te[oe],fe=R*ce*4*oe;for(let z=0;z<W.count;z++){const q=z*$;E===!0&&(o.fromBufferAttribute(W,z),_e[fe+q+0]=o.x,_e[fe+q+1]=o.y,_e[fe+q+2]=o.z,_e[fe+q+3]=0),y===!0&&(o.fromBufferAttribute(K,z),_e[fe+q+4]=o.x,_e[fe+q+5]=o.y,_e[fe+q+6]=o.z,_e[fe+q+7]=0),C===!0&&(o.fromBufferAttribute(me,z),_e[fe+q+8]=o.x,_e[fe+q+9]=o.y,_e[fe+q+10]=o.z,_e[fe+q+11]=me.itemSize===4?o.w:1)}}m={count:v,texture:H,size:new Ae(R,ce)},s.set(u,m),u.addEventListener("dispose",Z)}let d=0;for(let E=0;E<h.length;E++)d+=h[E];const w=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",w),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=h===void 0?0:h.length;let v=i[u.id];if(v===void 0||v.length!==g){v=[];for(let y=0;y<g;y++)v[y]=[y,0];i[u.id]=v}for(let y=0;y<g;y++){const C=v[y];C[0]=y,C[1]=h[y]}v.sort(hy);for(let y=0;y<8;y++)y<g&&v[y][1]?(a[y][0]=v[y][0],a[y][1]=v[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(fy);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let w=0;for(let y=0;y<8;y++){const C=a[y],I=C[0],P=C[1];I!==Number.MAX_SAFE_INTEGER&&P?(m&&u.getAttribute("morphTarget"+y)!==m[I]&&u.setAttribute("morphTarget"+y,m[I]),d&&u.getAttribute("morphNormal"+y)!==d[I]&&u.setAttribute("morphNormal"+y,d[I]),r[y]=P,w+=P):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),d&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const E=u.morphTargetsRelative?1:1-w;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function py(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const dd=new kt,pd=new nd,md=new Qv,_d=new ud,nf=[],rf=[],sf=new Float32Array(16),of=new Float32Array(9),af=new Float32Array(4);function br(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=nf[r];if(s===void 0&&(s=new Float32Array(r),nf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Do(n,e){let t=rf[e];t===void 0&&(t=new Int32Array(e),rf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function my(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function _y(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2fv(this.addr,e),pt(t,e)}}function gy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;n.uniform3fv(this.addr,e),pt(t,e)}}function vy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4fv(this.addr,e),pt(t,e)}}function xy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;af.set(i),n.uniformMatrix2fv(this.addr,!1,af),pt(t,i)}}function Ey(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;of.set(i),n.uniformMatrix3fv(this.addr,!1,of),pt(t,i)}}function yy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;sf.set(i),n.uniformMatrix4fv(this.addr,!1,sf),pt(t,i)}}function Sy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function My(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2iv(this.addr,e),pt(t,e)}}function by(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3iv(this.addr,e),pt(t,e)}}function Ty(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4iv(this.addr,e),pt(t,e)}}function Ay(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function wy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2uiv(this.addr,e),pt(t,e)}}function Ry(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3uiv(this.addr,e),pt(t,e)}}function Cy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4uiv(this.addr,e),pt(t,e)}}function Py(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||dd,r)}function Ly(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||md,r)}function Dy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||_d,r)}function Uy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||pd,r)}function Iy(n){switch(n){case 5126:return my;case 35664:return _y;case 35665:return gy;case 35666:return vy;case 35674:return xy;case 35675:return Ey;case 35676:return yy;case 5124:case 35670:return Sy;case 35667:case 35671:return My;case 35668:case 35672:return by;case 35669:case 35673:return Ty;case 5125:return Ay;case 36294:return wy;case 36295:return Ry;case 36296:return Cy;case 35678:case 36198:case 36298:case 36306:case 35682:return Py;case 35679:case 36299:case 36307:return Ly;case 35680:case 36300:case 36308:case 36293:return Dy;case 36289:case 36303:case 36311:case 36292:return Uy}}function Oy(n,e){n.uniform1fv(this.addr,e)}function Ny(n,e){const t=br(e,this.size,2);n.uniform2fv(this.addr,t)}function Fy(n,e){const t=br(e,this.size,3);n.uniform3fv(this.addr,t)}function By(n,e){const t=br(e,this.size,4);n.uniform4fv(this.addr,t)}function zy(n,e){const t=br(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Hy(n,e){const t=br(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ky(n,e){const t=br(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Gy(n,e){n.uniform1iv(this.addr,e)}function Vy(n,e){n.uniform2iv(this.addr,e)}function Wy(n,e){n.uniform3iv(this.addr,e)}function Xy(n,e){n.uniform4iv(this.addr,e)}function qy(n,e){n.uniform1uiv(this.addr,e)}function Yy(n,e){n.uniform2uiv(this.addr,e)}function jy(n,e){n.uniform3uiv(this.addr,e)}function Ky(n,e){n.uniform4uiv(this.addr,e)}function $y(n,e,t){const i=this.cache,r=e.length,s=Do(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||dd,s[o])}function Zy(n,e,t){const i=this.cache,r=e.length,s=Do(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||md,s[o])}function Jy(n,e,t){const i=this.cache,r=e.length,s=Do(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||_d,s[o])}function Qy(n,e,t){const i=this.cache,r=e.length,s=Do(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||pd,s[o])}function eS(n){switch(n){case 5126:return Oy;case 35664:return Ny;case 35665:return Fy;case 35666:return By;case 35674:return zy;case 35675:return Hy;case 35676:return ky;case 5124:case 35670:return Gy;case 35667:case 35671:return Vy;case 35668:case 35672:return Wy;case 35669:case 35673:return Xy;case 5125:return qy;case 36294:return Yy;case 36295:return jy;case 36296:return Ky;case 35678:case 36198:case 36298:case 36306:case 35682:return $y;case 35679:case 36299:case 36307:return Zy;case 35680:case 36300:case 36308:case 36293:return Jy;case 36289:case 36303:case 36311:case 36292:return Qy}}class tS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Iy(t.type)}}class nS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=eS(t.type)}}class iS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ya=/(\w+)(\])?(\[|\.)?/g;function lf(n,e){n.seq.push(e),n.map[e.id]=e}function rS(n,e,t){const i=n.name,r=i.length;for(ya.lastIndex=0;;){const s=ya.exec(i),o=ya.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){lf(t,c===void 0?new tS(a,n,e):new nS(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new iS(a),lf(t,f)),t=f}}}class no{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);rS(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function cf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let sS=0;function oS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function aS(n){switch(n){case xn:return["Linear","( value )"];case rt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function uf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+oS(n.getShaderSource(e),o)}else return r}function lS(n,e){const t=aS(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function cS(n,e){let t;switch(e){case ev:t="Linear";break;case tv:t="Reinhard";break;case nv:t="OptimizedCineon";break;case iv:t="ACESFilmic";break;case rv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function uS(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fr).join(`
`)}function fS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function hS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Fr(n){return n!==""}function ff(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dS=/^[ \t]*#include +<([\w\d./]+)>/gm;function rl(n){return n.replace(dS,mS)}const pS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function mS(n,e){let t=Ge[e];if(t===void 0){const i=pS.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return rl(t)}const _S=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function df(n){return n.replace(_S,gS)}function gS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pf(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===kh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Dg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Cn&&(e="SHADOWMAP_TYPE_VSM"),e}function xS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case gr:case vr:e="ENVMAP_TYPE_CUBE";break;case Ro:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ES(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case vr:e="ENVMAP_MODE_REFRACTION";break}return e}function yS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Wh:e="ENVMAP_BLENDING_MULTIPLY";break;case Jg:e="ENVMAP_BLENDING_MIX";break;case Qg:e="ENVMAP_BLENDING_ADD";break}return e}function SS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function MS(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=vS(t),c=xS(t),u=ES(t),f=yS(t),h=SS(t),p=t.isWebGL2?"":uS(t),g=fS(s),v=r.createProgram();let m,d,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fr).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fr).join(`
`),d.length>0&&(d+=`
`)):(m=[pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),d=[p,pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Qn?cS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,lS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fr).join(`
`)),o=rl(o),o=ff(o,t),o=hf(o,t),a=rl(a),a=ff(a,t),a=hf(a,t),o=df(o),a=df(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=w+m+o,y=w+d+a,C=cf(r,r.VERTEX_SHADER,E),I=cf(r,r.FRAGMENT_SHADER,y);if(r.attachShader(v,C),r.attachShader(v,I),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),n.debug.checkShaderErrors){const b=r.getProgramInfoLog(v).trim(),R=r.getShaderInfoLog(C).trim(),ce=r.getShaderInfoLog(I).trim();let _e=!0,H=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(_e=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,C,I);else{const $=uf(r,C,"vertex"),Z=uf(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+b+`
`+$+`
`+Z)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(R===""||ce==="")&&(H=!1);H&&(this.diagnostics={runnable:_e,programLog:b,vertexShader:{log:R,prefix:m},fragmentShader:{log:ce,prefix:d}})}r.deleteShader(C),r.deleteShader(I);let P;this.getUniforms=function(){return P===void 0&&(P=new no(r,v)),P};let te;return this.getAttributes=function(){return te===void 0&&(te=hS(r,v)),te},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sS++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=I,this}let bS=0;class TS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new AS(e),t.set(e,i)),i}}class AS{constructor(e){this.id=bS++,this.code=e,this.usedTimes=0}}function wS(n,e,t,i,r,s,o){const a=new rd,l=new TS,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return b===0?"uv":`uv${b}`}function m(b,R,ce,_e,H){const $=_e.fog,Z=H.geometry,oe=b.isMeshStandardMaterial?_e.environment:null,W=(b.isMeshStandardMaterial?t:e).get(b.envMap||oe),K=W&&W.mapping===Ro?W.image.height:null,me=g[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const fe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,z=fe!==void 0?fe.length:0;let q=0;Z.morphAttributes.position!==void 0&&(q=1),Z.morphAttributes.normal!==void 0&&(q=2),Z.morphAttributes.color!==void 0&&(q=3);let Se,we,De,Ue;if(me){const tt=mn[me];Se=tt.vertexShader,we=tt.fragmentShader}else Se=b.vertexShader,we=b.fragmentShader,l.update(b),De=l.getVertexShaderID(b),Ue=l.getFragmentShaderID(b);const B=n.getRenderTarget(),le=H.isInstancedMesh===!0,de=!!b.map,ye=!!b.matcap,Me=!!W,_=!!b.aoMap,M=!!b.lightMap,T=!!b.bumpMap,U=!!b.normalMap,D=!!b.displacementMap,k=!!b.emissiveMap,J=!!b.metalnessMap,V=!!b.roughnessMap,ne=b.anisotropy>0,ee=b.clearcoat>0,Re=b.iridescence>0,S=b.sheen>0,x=b.transmission>0,N=ne&&!!b.anisotropyMap,ie=ee&&!!b.clearcoatMap,ae=ee&&!!b.clearcoatNormalMap,ue=ee&&!!b.clearcoatRoughnessMap,Te=Re&&!!b.iridescenceMap,ge=Re&&!!b.iridescenceThicknessMap,Y=S&&!!b.sheenColorMap,L=S&&!!b.sheenRoughnessMap,he=!!b.specularMap,Pe=!!b.specularColorMap,ve=!!b.specularIntensityMap,Ee=x&&!!b.transmissionMap,Ne=x&&!!b.thicknessMap,je=!!b.gradientMap,O=!!b.alphaMap,Le=b.alphaTest>0,Q=!!b.alphaHash,xe=!!b.extensions,be=!!Z.attributes.uv1,Xe=!!Z.attributes.uv2,Ze=!!Z.attributes.uv3;let Qe=Qn;return b.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Qe=n.toneMapping),{isWebGL2:u,shaderID:me,shaderType:b.type,shaderName:b.name,vertexShader:Se,fragmentShader:we,defines:b.defines,customVertexShaderID:De,customFragmentShaderID:Ue,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,instancing:le,instancingColor:le&&H.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:B===null?n.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:xn,map:de,matcap:ye,envMap:Me,envMapMode:Me&&W.mapping,envMapCubeUVHeight:K,aoMap:_,lightMap:M,bumpMap:T,normalMap:U,displacementMap:h&&D,emissiveMap:k,normalMapObjectSpace:U&&b.normalMapType===vv,normalMapTangentSpace:U&&b.normalMapType===gv,metalnessMap:J,roughnessMap:V,anisotropy:ne,anisotropyMap:N,clearcoat:ee,clearcoatMap:ie,clearcoatNormalMap:ae,clearcoatRoughnessMap:ue,iridescence:Re,iridescenceMap:Te,iridescenceThicknessMap:ge,sheen:S,sheenColorMap:Y,sheenRoughnessMap:L,specularMap:he,specularColorMap:Pe,specularIntensityMap:ve,transmission:x,transmissionMap:Ee,thicknessMap:Ne,gradientMap:je,opaque:b.transparent===!1&&b.blending===ur,alphaMap:O,alphaTest:Le,alphaHash:Q,combine:b.combine,mapUv:de&&v(b.map.channel),aoMapUv:_&&v(b.aoMap.channel),lightMapUv:M&&v(b.lightMap.channel),bumpMapUv:T&&v(b.bumpMap.channel),normalMapUv:U&&v(b.normalMap.channel),displacementMapUv:D&&v(b.displacementMap.channel),emissiveMapUv:k&&v(b.emissiveMap.channel),metalnessMapUv:J&&v(b.metalnessMap.channel),roughnessMapUv:V&&v(b.roughnessMap.channel),anisotropyMapUv:N&&v(b.anisotropyMap.channel),clearcoatMapUv:ie&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:ae&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Y&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:L&&v(b.sheenRoughnessMap.channel),specularMapUv:he&&v(b.specularMap.channel),specularColorMapUv:Pe&&v(b.specularColorMap.channel),specularIntensityMapUv:ve&&v(b.specularIntensityMap.channel),transmissionMapUv:Ee&&v(b.transmissionMap.channel),thicknessMapUv:Ne&&v(b.thicknessMap.channel),alphaMapUv:O&&v(b.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(U||ne),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,vertexUv1s:be,vertexUv2s:Xe,vertexUv3s:Ze,pointsUvs:H.isPoints===!0&&!!Z.attributes.uv&&(de||O),fog:!!$,useFog:b.fog===!0,fogExp2:$&&$.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:H.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:q,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&ce.length>0,shadowMapType:n.shadowMap.type,toneMapping:Qe,useLegacyLights:n._useLegacyLights,decodeVideoTexture:de&&b.map.isVideoTexture===!0&&b.map.colorSpace===rt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Dn,flipSided:b.side===Ot,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:xe&&b.extensions.derivatives===!0,extensionFragDepth:xe&&b.extensions.fragDepth===!0,extensionDrawBuffers:xe&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:xe&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function d(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const ce in b.defines)R.push(ce),R.push(b.defines[ce]);return b.isRawShaderMaterial===!1&&(w(R,b),E(R,b),R.push(n.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function w(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function E(b,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),b.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function y(b){const R=g[b.type];let ce;if(R){const _e=mn[R];ce=h0.clone(_e.uniforms)}else ce=b.uniforms;return ce}function C(b,R){let ce;for(let _e=0,H=c.length;_e<H;_e++){const $=c[_e];if($.cacheKey===R){ce=$,++ce.usedTimes;break}}return ce===void 0&&(ce=new MS(n,R,b,s),c.push(ce)),ce}function I(b){if(--b.usedTimes===0){const R=c.indexOf(b);c[R]=c[c.length-1],c.pop(),b.destroy()}}function P(b){l.remove(b)}function te(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:C,releaseProgram:I,releaseShaderCache:P,programs:c,dispose:te}}function RS(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function CS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function mf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function _f(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,g,v,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=v,d.group=m),e++,d}function a(f,h,p,g,v,m){const d=o(f,h,p,g,v,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,g,v,m){const d=o(f,h,p,g,v,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||CS),i.length>1&&i.sort(h||mf),r.length>1&&r.sort(h||mf)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function PS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new _f,n.set(i,[o])):r>=s.length?(o=new _f,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function LS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new nt};break;case"SpotLight":t={position:new F,direction:new F,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function DS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let US=0;function IS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function OS(n,e){const t=new LS,i=DS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new F);const s=new F,o=new vt,a=new vt;function l(u,f){let h=0,p=0,g=0;for(let ce=0;ce<9;ce++)r.probe[ce].set(0,0,0);let v=0,m=0,d=0,w=0,E=0,y=0,C=0,I=0,P=0,te=0;u.sort(IS);const b=f===!0?Math.PI:1;for(let ce=0,_e=u.length;ce<_e;ce++){const H=u[ce],$=H.color,Z=H.intensity,oe=H.distance,W=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)h+=$.r*Z*b,p+=$.g*Z*b,g+=$.b*Z*b;else if(H.isLightProbe)for(let K=0;K<9;K++)r.probe[K].addScaledVector(H.sh.coefficients[K],Z);else if(H.isDirectionalLight){const K=t.get(H);if(K.color.copy(H.color).multiplyScalar(H.intensity*b),H.castShadow){const me=H.shadow,fe=i.get(H);fe.shadowBias=me.bias,fe.shadowNormalBias=me.normalBias,fe.shadowRadius=me.radius,fe.shadowMapSize=me.mapSize,r.directionalShadow[v]=fe,r.directionalShadowMap[v]=W,r.directionalShadowMatrix[v]=H.shadow.matrix,y++}r.directional[v]=K,v++}else if(H.isSpotLight){const K=t.get(H);K.position.setFromMatrixPosition(H.matrixWorld),K.color.copy($).multiplyScalar(Z*b),K.distance=oe,K.coneCos=Math.cos(H.angle),K.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),K.decay=H.decay,r.spot[d]=K;const me=H.shadow;if(H.map&&(r.spotLightMap[P]=H.map,P++,me.updateMatrices(H),H.castShadow&&te++),r.spotLightMatrix[d]=me.matrix,H.castShadow){const fe=i.get(H);fe.shadowBias=me.bias,fe.shadowNormalBias=me.normalBias,fe.shadowRadius=me.radius,fe.shadowMapSize=me.mapSize,r.spotShadow[d]=fe,r.spotShadowMap[d]=W,I++}d++}else if(H.isRectAreaLight){const K=t.get(H);K.color.copy($).multiplyScalar(Z),K.halfWidth.set(H.width*.5,0,0),K.halfHeight.set(0,H.height*.5,0),r.rectArea[w]=K,w++}else if(H.isPointLight){const K=t.get(H);if(K.color.copy(H.color).multiplyScalar(H.intensity*b),K.distance=H.distance,K.decay=H.decay,H.castShadow){const me=H.shadow,fe=i.get(H);fe.shadowBias=me.bias,fe.shadowNormalBias=me.normalBias,fe.shadowRadius=me.radius,fe.shadowMapSize=me.mapSize,fe.shadowCameraNear=me.camera.near,fe.shadowCameraFar=me.camera.far,r.pointShadow[m]=fe,r.pointShadowMap[m]=W,r.pointShadowMatrix[m]=H.shadow.matrix,C++}r.point[m]=K,m++}else if(H.isHemisphereLight){const K=t.get(H);K.skyColor.copy(H.color).multiplyScalar(Z*b),K.groundColor.copy(H.groundColor).multiplyScalar(Z*b),r.hemi[E]=K,E++}}w>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=g;const R=r.hash;(R.directionalLength!==v||R.pointLength!==m||R.spotLength!==d||R.rectAreaLength!==w||R.hemiLength!==E||R.numDirectionalShadows!==y||R.numPointShadows!==C||R.numSpotShadows!==I||R.numSpotMaps!==P)&&(r.directional.length=v,r.spot.length=d,r.rectArea.length=w,r.point.length=m,r.hemi.length=E,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=I,r.spotShadowMap.length=I,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=I+P-te,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=te,R.directionalLength=v,R.pointLength=m,R.spotLength=d,R.rectAreaLength=w,R.hemiLength=E,R.numDirectionalShadows=y,R.numPointShadows=C,R.numSpotShadows=I,R.numSpotMaps=P,r.version=US++)}function c(u,f){let h=0,p=0,g=0,v=0,m=0;const d=f.matrixWorldInverse;for(let w=0,E=u.length;w<E;w++){const y=u[w];if(y.isDirectionalLight){const C=r.directional[h];C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(d),h++}else if(y.isSpotLight){const C=r.spot[g];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(d),C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(d),g++}else if(y.isRectAreaLight){const C=r.rectArea[v];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(d),a.identity(),o.copy(y.matrixWorld),o.premultiply(d),a.extractRotation(o),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const C=r.point[p];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){const C=r.hemi[m];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:r}}function gf(n,e){const t=new OS(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function NS(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new gf(n,e),t.set(s,[l])):o>=a.length?(l=new gf(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class FS extends Lo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BS extends Lo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kS(n,e,t){let i=new fd;const r=new Ae,s=new Ae,o=new yt,a=new FS({depthPacking:_v}),l=new BS,c={},u=t.maxTextureSize,f={[ii]:Ot,[Ot]:ii,[Dn]:Dn},h=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:zS,fragmentShader:HS}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new oi;g.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new In(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kh;let d=this.type;this.render=function(C,I,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const te=n.getRenderTarget(),b=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),ce=n.state;ce.setBlending(Jn),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const _e=d!==Cn&&this.type===Cn,H=d===Cn&&this.type!==Cn;for(let $=0,Z=C.length;$<Z;$++){const oe=C[$],W=oe.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const K=W.getFrameExtents();if(r.multiply(K),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,W.mapSize.y=s.y)),W.map===null||_e===!0||H===!0){const fe=this.type!==Cn?{minFilter:Dt,magFilter:Dt}:{};W.map!==null&&W.map.dispose(),W.map=new Ti(r.x,r.y,fe),W.map.texture.name=oe.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const me=W.getViewportCount();for(let fe=0;fe<me;fe++){const z=W.getViewport(fe);o.set(s.x*z.x,s.y*z.y,s.x*z.z,s.y*z.w),ce.viewport(o),W.updateMatrices(oe,fe),i=W.getFrustum(),y(I,P,W.camera,oe,this.type)}W.isPointLightShadow!==!0&&this.type===Cn&&w(W,P),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(te,b,R)};function w(C,I){const P=e.update(v);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ti(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(I,null,P,h,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(I,null,P,p,v,null)}function E(C,I,P,te){let b=null;const R=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)b=R;else if(b=P.isPointLight===!0?l:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const ce=b.uuid,_e=I.uuid;let H=c[ce];H===void 0&&(H={},c[ce]=H);let $=H[_e];$===void 0&&($=b.clone(),H[_e]=$),b=$}if(b.visible=I.visible,b.wireframe=I.wireframe,te===Cn?b.side=I.shadowSide!==null?I.shadowSide:I.side:b.side=I.shadowSide!==null?I.shadowSide:f[I.side],b.alphaMap=I.alphaMap,b.alphaTest=I.alphaTest,b.map=I.map,b.clipShadows=I.clipShadows,b.clippingPlanes=I.clippingPlanes,b.clipIntersection=I.clipIntersection,b.displacementMap=I.displacementMap,b.displacementScale=I.displacementScale,b.displacementBias=I.displacementBias,b.wireframeLinewidth=I.wireframeLinewidth,b.linewidth=I.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const ce=n.properties.get(b);ce.light=P}return b}function y(C,I,P,te,b){if(C.visible===!1)return;if(C.layers.test(I.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===Cn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const _e=e.update(C),H=C.material;if(Array.isArray(H)){const $=_e.groups;for(let Z=0,oe=$.length;Z<oe;Z++){const W=$[Z],K=H[W.materialIndex];if(K&&K.visible){const me=E(C,K,te,b);n.renderBufferDirect(P,null,_e,me,C,W)}}}else if(H.visible){const $=E(C,H,te,b);n.renderBufferDirect(P,null,_e,$,C,null)}}const ce=C.children;for(let _e=0,H=ce.length;_e<H;_e++)y(ce[_e],I,P,te,b)}}function GS(n,e,t){const i=t.isWebGL2;function r(){let O=!1;const Le=new yt;let Q=null;const xe=new yt(0,0,0,0);return{setMask:function(be){Q!==be&&!O&&(n.colorMask(be,be,be,be),Q=be)},setLocked:function(be){O=be},setClear:function(be,Xe,Ze,Qe,Ft){Ft===!0&&(be*=Qe,Xe*=Qe,Ze*=Qe),Le.set(be,Xe,Ze,Qe),xe.equals(Le)===!1&&(n.clearColor(be,Xe,Ze,Qe),xe.copy(Le))},reset:function(){O=!1,Q=null,xe.set(-1,0,0,0)}}}function s(){let O=!1,Le=null,Q=null,xe=null;return{setTest:function(be){be?B(n.DEPTH_TEST):le(n.DEPTH_TEST)},setMask:function(be){Le!==be&&!O&&(n.depthMask(be),Le=be)},setFunc:function(be){if(Q!==be){switch(be){case Xg:n.depthFunc(n.NEVER);break;case qg:n.depthFunc(n.ALWAYS);break;case Yg:n.depthFunc(n.LESS);break;case Za:n.depthFunc(n.LEQUAL);break;case jg:n.depthFunc(n.EQUAL);break;case Kg:n.depthFunc(n.GEQUAL);break;case $g:n.depthFunc(n.GREATER);break;case Zg:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=be}},setLocked:function(be){O=be},setClear:function(be){xe!==be&&(n.clearDepth(be),xe=be)},reset:function(){O=!1,Le=null,Q=null,xe=null}}}function o(){let O=!1,Le=null,Q=null,xe=null,be=null,Xe=null,Ze=null,Qe=null,Ft=null;return{setTest:function(tt){O||(tt?B(n.STENCIL_TEST):le(n.STENCIL_TEST))},setMask:function(tt){Le!==tt&&!O&&(n.stencilMask(tt),Le=tt)},setFunc:function(tt,fn,wt){(Q!==tt||xe!==fn||be!==wt)&&(n.stencilFunc(tt,fn,wt),Q=tt,xe=fn,be=wt)},setOp:function(tt,fn,wt){(Xe!==tt||Ze!==fn||Qe!==wt)&&(n.stencilOp(tt,fn,wt),Xe=tt,Ze=fn,Qe=wt)},setLocked:function(tt){O=tt},setClear:function(tt){Ft!==tt&&(n.clearStencil(tt),Ft=tt)},reset:function(){O=!1,Le=null,Q=null,xe=null,be=null,Xe=null,Ze=null,Qe=null,Ft=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},p={},g=new WeakMap,v=[],m=null,d=!1,w=null,E=null,y=null,C=null,I=null,P=null,te=null,b=!1,R=null,ce=null,_e=null,H=null,$=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,W=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(K)[1]),oe=W>=1):K.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),oe=W>=2);let me=null,fe={};const z=n.getParameter(n.SCISSOR_BOX),q=n.getParameter(n.VIEWPORT),Se=new yt().fromArray(z),we=new yt().fromArray(q);function De(O,Le,Q,xe){const be=new Uint8Array(4),Xe=n.createTexture();n.bindTexture(O,Xe),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<Q;Ze++)i&&(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)?n.texImage3D(Le,0,n.RGBA,1,1,xe,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(Le+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return Xe}const Ue={};Ue[n.TEXTURE_2D]=De(n.TEXTURE_2D,n.TEXTURE_2D,1),Ue[n.TEXTURE_CUBE_MAP]=De(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ue[n.TEXTURE_2D_ARRAY]=De(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ue[n.TEXTURE_3D]=De(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),B(n.DEPTH_TEST),l.setFunc(Za),D(!1),k(eu),B(n.CULL_FACE),T(Jn);function B(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function le(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function de(O,Le){return p[O]!==Le?(n.bindFramebuffer(O,Le),p[O]=Le,i&&(O===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Le),O===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Le)),!0):!1}function ye(O,Le){let Q=v,xe=!1;if(O)if(Q=g.get(Le),Q===void 0&&(Q=[],g.set(Le,Q)),O.isWebGLMultipleRenderTargets){const be=O.texture;if(Q.length!==be.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let Xe=0,Ze=be.length;Xe<Ze;Xe++)Q[Xe]=n.COLOR_ATTACHMENT0+Xe;Q.length=be.length,xe=!0}}else Q[0]!==n.COLOR_ATTACHMENT0&&(Q[0]=n.COLOR_ATTACHMENT0,xe=!0);else Q[0]!==n.BACK&&(Q[0]=n.BACK,xe=!0);xe&&(t.isWebGL2?n.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Me(O){return m!==O?(n.useProgram(O),m=O,!0):!1}const _={[er]:n.FUNC_ADD,[Ig]:n.FUNC_SUBTRACT,[Og]:n.FUNC_REVERSE_SUBTRACT};if(i)_[ru]=n.MIN,_[su]=n.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(_[ru]=O.MIN_EXT,_[su]=O.MAX_EXT)}const M={[Ng]:n.ZERO,[Fg]:n.ONE,[Bg]:n.SRC_COLOR,[Gh]:n.SRC_ALPHA,[Wg]:n.SRC_ALPHA_SATURATE,[Gg]:n.DST_COLOR,[Hg]:n.DST_ALPHA,[zg]:n.ONE_MINUS_SRC_COLOR,[Vh]:n.ONE_MINUS_SRC_ALPHA,[Vg]:n.ONE_MINUS_DST_COLOR,[kg]:n.ONE_MINUS_DST_ALPHA};function T(O,Le,Q,xe,be,Xe,Ze,Qe){if(O===Jn){d===!0&&(le(n.BLEND),d=!1);return}if(d===!1&&(B(n.BLEND),d=!0),O!==Ug){if(O!==w||Qe!==b){if((E!==er||I!==er)&&(n.blendEquation(n.FUNC_ADD),E=er,I=er),Qe)switch(O){case ur:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case tu:n.blendFunc(n.ONE,n.ONE);break;case nu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case iu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ur:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case tu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case nu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case iu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,C=null,P=null,te=null,w=O,b=Qe}return}be=be||Le,Xe=Xe||Q,Ze=Ze||xe,(Le!==E||be!==I)&&(n.blendEquationSeparate(_[Le],_[be]),E=Le,I=be),(Q!==y||xe!==C||Xe!==P||Ze!==te)&&(n.blendFuncSeparate(M[Q],M[xe],M[Xe],M[Ze]),y=Q,C=xe,P=Xe,te=Ze),w=O,b=!1}function U(O,Le){O.side===Dn?le(n.CULL_FACE):B(n.CULL_FACE);let Q=O.side===Ot;Le&&(Q=!Q),D(Q),O.blending===ur&&O.transparent===!1?T(Jn):T(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const xe=O.stencilWrite;c.setTest(xe),xe&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),V(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?B(n.SAMPLE_ALPHA_TO_COVERAGE):le(n.SAMPLE_ALPHA_TO_COVERAGE)}function D(O){R!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),R=O)}function k(O){O!==Pg?(B(n.CULL_FACE),O!==ce&&(O===eu?n.cullFace(n.BACK):O===Lg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):le(n.CULL_FACE),ce=O}function J(O){O!==_e&&(oe&&n.lineWidth(O),_e=O)}function V(O,Le,Q){O?(B(n.POLYGON_OFFSET_FILL),(H!==Le||$!==Q)&&(n.polygonOffset(Le,Q),H=Le,$=Q)):le(n.POLYGON_OFFSET_FILL)}function ne(O){O?B(n.SCISSOR_TEST):le(n.SCISSOR_TEST)}function ee(O){O===void 0&&(O=n.TEXTURE0+Z-1),me!==O&&(n.activeTexture(O),me=O)}function Re(O,Le,Q){Q===void 0&&(me===null?Q=n.TEXTURE0+Z-1:Q=me);let xe=fe[Q];xe===void 0&&(xe={type:void 0,texture:void 0},fe[Q]=xe),(xe.type!==O||xe.texture!==Le)&&(me!==Q&&(n.activeTexture(Q),me=Q),n.bindTexture(O,Le||Ue[O]),xe.type=O,xe.texture=Le)}function S(){const O=fe[me];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function x(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function N(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ie(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ae(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function L(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(O){Se.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Se.copy(O))}function ve(O){we.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),we.copy(O))}function Ee(O,Le){let Q=f.get(Le);Q===void 0&&(Q=new WeakMap,f.set(Le,Q));let xe=Q.get(O);xe===void 0&&(xe=n.getUniformBlockIndex(Le,O.name),Q.set(O,xe))}function Ne(O,Le){const xe=f.get(Le).get(O);u.get(Le)!==xe&&(n.uniformBlockBinding(Le,xe,O.__bindingPointIndex),u.set(Le,xe))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},me=null,fe={},p={},g=new WeakMap,v=[],m=null,d=!1,w=null,E=null,y=null,C=null,I=null,P=null,te=null,b=!1,R=null,ce=null,_e=null,H=null,$=null,Se.set(0,0,n.canvas.width,n.canvas.height),we.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:B,disable:le,bindFramebuffer:de,drawBuffers:ye,useProgram:Me,setBlending:T,setMaterial:U,setFlipSided:D,setCullFace:k,setLineWidth:J,setPolygonOffset:V,setScissorTest:ne,activeTexture:ee,bindTexture:Re,unbindTexture:S,compressedTexImage2D:x,compressedTexImage3D:N,texImage2D:L,texImage3D:he,updateUBOMapping:Ee,uniformBlockBinding:Ne,texStorage2D:ge,texStorage3D:Y,texSubImage2D:ie,texSubImage3D:ae,compressedTexSubImage2D:ue,compressedTexSubImage3D:Te,scissor:Pe,viewport:ve,reset:je}}function VS(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(S,x){return d?new OffscreenCanvas(S,x):po("canvas")}function E(S,x,N,ie){let ae=1;if((S.width>ie||S.height>ie)&&(ae=ie/Math.max(S.width,S.height)),ae<1||x===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const ue=x?ho:Math.floor,Te=ue(ae*S.width),ge=ue(ae*S.height);v===void 0&&(v=w(Te,ge));const Y=N?w(Te,ge):v;return Y.width=Te,Y.height=ge,Y.getContext("2d").drawImage(S,0,0,Te,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+Te+"x"+ge+")."),Y}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function y(S){return il(S.width)&&il(S.height)}function C(S){return a?!1:S.wrapS!==tn||S.wrapT!==tn||S.minFilter!==Dt&&S.minFilter!==Xt}function I(S,x){return S.generateMipmaps&&x&&S.minFilter!==Dt&&S.minFilter!==Xt}function P(S){n.generateMipmap(S)}function te(S,x,N,ie,ae=!1){if(a===!1)return x;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ue=x;return x===n.RED&&(N===n.FLOAT&&(ue=n.R32F),N===n.HALF_FLOAT&&(ue=n.R16F),N===n.UNSIGNED_BYTE&&(ue=n.R8)),x===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(ue=n.R8UI),N===n.UNSIGNED_SHORT&&(ue=n.R16UI),N===n.UNSIGNED_INT&&(ue=n.R32UI),N===n.BYTE&&(ue=n.R8I),N===n.SHORT&&(ue=n.R16I),N===n.INT&&(ue=n.R32I)),x===n.RG&&(N===n.FLOAT&&(ue=n.RG32F),N===n.HALF_FLOAT&&(ue=n.RG16F),N===n.UNSIGNED_BYTE&&(ue=n.RG8)),x===n.RGBA&&(N===n.FLOAT&&(ue=n.RGBA32F),N===n.HALF_FLOAT&&(ue=n.RGBA16F),N===n.UNSIGNED_BYTE&&(ue=ie===rt&&ae===!1?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(ue=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(ue=n.RGB5_A1)),(ue===n.R16F||ue===n.R32F||ue===n.RG16F||ue===n.RG32F||ue===n.RGBA16F||ue===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function b(S,x,N){return I(S,N)===!0||S.isFramebufferTexture&&S.minFilter!==Dt&&S.minFilter!==Xt?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function R(S){return S===Dt||S===ou||S===Ko?n.NEAREST:n.LINEAR}function ce(S){const x=S.target;x.removeEventListener("dispose",ce),H(x),x.isVideoTexture&&g.delete(x)}function _e(S){const x=S.target;x.removeEventListener("dispose",_e),Z(x)}function H(S){const x=i.get(S);if(x.__webglInit===void 0)return;const N=S.source,ie=m.get(N);if(ie){const ae=ie[x.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&$(S),Object.keys(ie).length===0&&m.delete(N)}i.remove(S)}function $(S){const x=i.get(S);n.deleteTexture(x.__webglTexture);const N=S.source,ie=m.get(N);delete ie[x.__cacheKey],o.memory.textures--}function Z(S){const x=S.texture,N=i.get(S),ie=i.get(x);if(ie.__webglTexture!==void 0&&(n.deleteTexture(ie.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(N.__webglFramebuffer[ae]))for(let ue=0;ue<N.__webglFramebuffer[ae].length;ue++)n.deleteFramebuffer(N.__webglFramebuffer[ae][ue]);else n.deleteFramebuffer(N.__webglFramebuffer[ae]);N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer[ae])}else{if(Array.isArray(N.__webglFramebuffer))for(let ae=0;ae<N.__webglFramebuffer.length;ae++)n.deleteFramebuffer(N.__webglFramebuffer[ae]);else n.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&n.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let ae=0;ae<N.__webglColorRenderbuffer.length;ae++)N.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(N.__webglColorRenderbuffer[ae]);N.__webglDepthRenderbuffer&&n.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let ae=0,ue=x.length;ae<ue;ae++){const Te=i.get(x[ae]);Te.__webglTexture&&(n.deleteTexture(Te.__webglTexture),o.memory.textures--),i.remove(x[ae])}i.remove(x),i.remove(S)}let oe=0;function W(){oe=0}function K(){const S=oe;return S>=l&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+l),oe+=1,S}function me(S){const x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function fe(S,x){const N=i.get(S);if(S.isVideoTexture&&ee(S),S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){const ie=S.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(N,S,x);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+x)}function z(S,x){const N=i.get(S);if(S.version>0&&N.__version!==S.version){de(N,S,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+x)}function q(S,x){const N=i.get(S);if(S.version>0&&N.__version!==S.version){de(N,S,x);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+x)}function Se(S,x){const N=i.get(S);if(S.version>0&&N.__version!==S.version){ye(N,S,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+x)}const we={[el]:n.REPEAT,[tn]:n.CLAMP_TO_EDGE,[tl]:n.MIRRORED_REPEAT},De={[Dt]:n.NEAREST,[ou]:n.NEAREST_MIPMAP_NEAREST,[Ko]:n.NEAREST_MIPMAP_LINEAR,[Xt]:n.LINEAR,[sv]:n.LINEAR_MIPMAP_NEAREST,[os]:n.LINEAR_MIPMAP_LINEAR},Ue={[Ev]:n.NEVER,[wv]:n.ALWAYS,[yv]:n.LESS,[Mv]:n.LEQUAL,[Sv]:n.EQUAL,[Av]:n.GEQUAL,[bv]:n.GREATER,[Tv]:n.NOTEQUAL};function B(S,x,N){if(N?(n.texParameteri(S,n.TEXTURE_WRAP_S,we[x.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,we[x.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,we[x.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,De[x.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,De[x.minFilter])):(n.texParameteri(S,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(S,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==tn||x.wrapT!==tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,n.TEXTURE_MAG_FILTER,R(x.magFilter)),n.texParameteri(S,n.TEXTURE_MIN_FILTER,R(x.minFilter)),x.minFilter!==Dt&&x.minFilter!==Xt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Ue[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Dt||x.minFilter!==Ko&&x.minFilter!==os||x.type===Kn&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===as&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(S,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function le(S,x){let N=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",ce));const ie=x.source;let ae=m.get(ie);ae===void 0&&(ae={},m.set(ie,ae));const ue=me(x);if(ue!==S.__cacheKey){ae[ue]===void 0&&(ae[ue]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),ae[ue].usedTimes++;const Te=ae[S.__cacheKey];Te!==void 0&&(ae[S.__cacheKey].usedTimes--,Te.usedTimes===0&&$(x)),S.__cacheKey=ue,S.__webglTexture=ae[ue].texture}return N}function de(S,x,N){let ie=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ie=n.TEXTURE_3D);const ae=le(S,x),ue=x.source;t.bindTexture(ie,S.__webglTexture,n.TEXTURE0+N);const Te=i.get(ue);if(ue.version!==Te.__version||ae===!0){t.activeTexture(n.TEXTURE0+N),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const ge=C(x)&&y(x.image)===!1;let Y=E(x.image,ge,!1,u);Y=Re(x,Y);const L=y(Y)||a,he=s.convert(x.format,x.colorSpace);let Pe=s.convert(x.type),ve=te(x.internalFormat,he,Pe,x.colorSpace,x.isVideoTexture);B(ie,x,L);let Ee;const Ne=x.mipmaps,je=a&&x.isVideoTexture!==!0,O=Te.__version===void 0||ae===!0,Le=b(x,Y,L);if(x.isDepthTexture)ve=n.DEPTH_COMPONENT,a?x.type===Kn?ve=n.DEPTH_COMPONENT32F:x.type===jn?ve=n.DEPTH_COMPONENT24:x.type===yi?ve=n.DEPTH24_STENCIL8:ve=n.DEPTH_COMPONENT16:x.type===Kn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Si&&ve===n.DEPTH_COMPONENT&&x.type!==Ol&&x.type!==jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=jn,Pe=s.convert(x.type)),x.format===xr&&ve===n.DEPTH_COMPONENT&&(ve=n.DEPTH_STENCIL,x.type!==yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=yi,Pe=s.convert(x.type))),O&&(je?t.texStorage2D(n.TEXTURE_2D,1,ve,Y.width,Y.height):t.texImage2D(n.TEXTURE_2D,0,ve,Y.width,Y.height,0,he,Pe,null));else if(x.isDataTexture)if(Ne.length>0&&L){je&&O&&t.texStorage2D(n.TEXTURE_2D,Le,ve,Ne[0].width,Ne[0].height);for(let Q=0,xe=Ne.length;Q<xe;Q++)Ee=Ne[Q],je?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Ee.width,Ee.height,he,Pe,Ee.data):t.texImage2D(n.TEXTURE_2D,Q,ve,Ee.width,Ee.height,0,he,Pe,Ee.data);x.generateMipmaps=!1}else je?(O&&t.texStorage2D(n.TEXTURE_2D,Le,ve,Y.width,Y.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Y.width,Y.height,he,Pe,Y.data)):t.texImage2D(n.TEXTURE_2D,0,ve,Y.width,Y.height,0,he,Pe,Y.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){je&&O&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,ve,Ne[0].width,Ne[0].height,Y.depth);for(let Q=0,xe=Ne.length;Q<xe;Q++)Ee=Ne[Q],x.format!==nn?he!==null?je?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Ee.width,Ee.height,Y.depth,he,Ee.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,ve,Ee.width,Ee.height,Y.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Ee.width,Ee.height,Y.depth,he,Pe,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,ve,Ee.width,Ee.height,Y.depth,0,he,Pe,Ee.data)}else{je&&O&&t.texStorage2D(n.TEXTURE_2D,Le,ve,Ne[0].width,Ne[0].height);for(let Q=0,xe=Ne.length;Q<xe;Q++)Ee=Ne[Q],x.format!==nn?he!==null?je?t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,Ee.width,Ee.height,he,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,ve,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Ee.width,Ee.height,he,Pe,Ee.data):t.texImage2D(n.TEXTURE_2D,Q,ve,Ee.width,Ee.height,0,he,Pe,Ee.data)}else if(x.isDataArrayTexture)je?(O&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,ve,Y.width,Y.height,Y.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,he,Pe,Y.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ve,Y.width,Y.height,Y.depth,0,he,Pe,Y.data);else if(x.isData3DTexture)je?(O&&t.texStorage3D(n.TEXTURE_3D,Le,ve,Y.width,Y.height,Y.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,he,Pe,Y.data)):t.texImage3D(n.TEXTURE_3D,0,ve,Y.width,Y.height,Y.depth,0,he,Pe,Y.data);else if(x.isFramebufferTexture){if(O)if(je)t.texStorage2D(n.TEXTURE_2D,Le,ve,Y.width,Y.height);else{let Q=Y.width,xe=Y.height;for(let be=0;be<Le;be++)t.texImage2D(n.TEXTURE_2D,be,ve,Q,xe,0,he,Pe,null),Q>>=1,xe>>=1}}else if(Ne.length>0&&L){je&&O&&t.texStorage2D(n.TEXTURE_2D,Le,ve,Ne[0].width,Ne[0].height);for(let Q=0,xe=Ne.length;Q<xe;Q++)Ee=Ne[Q],je?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,he,Pe,Ee):t.texImage2D(n.TEXTURE_2D,Q,ve,he,Pe,Ee);x.generateMipmaps=!1}else je?(O&&t.texStorage2D(n.TEXTURE_2D,Le,ve,Y.width,Y.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,he,Pe,Y)):t.texImage2D(n.TEXTURE_2D,0,ve,he,Pe,Y);I(x,L)&&P(ie),Te.__version=ue.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function ye(S,x,N){if(x.image.length!==6)return;const ie=le(S,x),ae=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+N);const ue=i.get(ae);if(ae.version!==ue.__version||ie===!0){t.activeTexture(n.TEXTURE0+N),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const Te=x.isCompressedTexture||x.image[0].isCompressedTexture,ge=x.image[0]&&x.image[0].isDataTexture,Y=[];for(let Q=0;Q<6;Q++)!Te&&!ge?Y[Q]=E(x.image[Q],!1,!0,c):Y[Q]=ge?x.image[Q].image:x.image[Q],Y[Q]=Re(x,Y[Q]);const L=Y[0],he=y(L)||a,Pe=s.convert(x.format,x.colorSpace),ve=s.convert(x.type),Ee=te(x.internalFormat,Pe,ve,x.colorSpace),Ne=a&&x.isVideoTexture!==!0,je=ue.__version===void 0||ie===!0;let O=b(x,L,he);B(n.TEXTURE_CUBE_MAP,x,he);let Le;if(Te){Ne&&je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,O,Ee,L.width,L.height);for(let Q=0;Q<6;Q++){Le=Y[Q].mipmaps;for(let xe=0;xe<Le.length;xe++){const be=Le[xe];x.format!==nn?Pe!==null?Ne?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe,0,0,be.width,be.height,Pe,be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe,Ee,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe,0,0,be.width,be.height,Pe,ve,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe,Ee,be.width,be.height,0,Pe,ve,be.data)}}}else{Le=x.mipmaps,Ne&&je&&(Le.length>0&&O++,t.texStorage2D(n.TEXTURE_CUBE_MAP,O,Ee,Y[0].width,Y[0].height));for(let Q=0;Q<6;Q++)if(ge){Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Y[Q].width,Y[Q].height,Pe,ve,Y[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ee,Y[Q].width,Y[Q].height,0,Pe,ve,Y[Q].data);for(let xe=0;xe<Le.length;xe++){const Xe=Le[xe].image[Q].image;Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe+1,0,0,Xe.width,Xe.height,Pe,ve,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe+1,Ee,Xe.width,Xe.height,0,Pe,ve,Xe.data)}}else{Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Pe,ve,Y[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ee,Pe,ve,Y[Q]);for(let xe=0;xe<Le.length;xe++){const be=Le[xe];Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe+1,0,0,Pe,ve,be.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe+1,Ee,Pe,ve,be.image[Q])}}}I(x,he)&&P(n.TEXTURE_CUBE_MAP),ue.__version=ae.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function Me(S,x,N,ie,ae,ue){const Te=s.convert(N.format,N.colorSpace),ge=s.convert(N.type),Y=te(N.internalFormat,Te,ge,N.colorSpace);if(!i.get(x).__hasExternalTextures){const he=Math.max(1,x.width>>ue),Pe=Math.max(1,x.height>>ue);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,ue,Y,he,Pe,x.depth,0,Te,ge,null):t.texImage2D(ae,ue,Y,he,Pe,0,Te,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),ne(x)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,ae,i.get(N).__webglTexture,0,V(x)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,ae,i.get(N).__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _(S,x,N){if(n.bindRenderbuffer(n.RENDERBUFFER,S),x.depthBuffer&&!x.stencilBuffer){let ie=n.DEPTH_COMPONENT16;if(N||ne(x)){const ae=x.depthTexture;ae&&ae.isDepthTexture&&(ae.type===Kn?ie=n.DEPTH_COMPONENT32F:ae.type===jn&&(ie=n.DEPTH_COMPONENT24));const ue=V(x);ne(x)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,ie,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,ie,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,ie,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,S)}else if(x.depthBuffer&&x.stencilBuffer){const ie=V(x);N&&ne(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,n.DEPTH24_STENCIL8,x.width,x.height):ne(x)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,S)}else{const ie=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let ae=0;ae<ie.length;ae++){const ue=ie[ae],Te=s.convert(ue.format,ue.colorSpace),ge=s.convert(ue.type),Y=te(ue.internalFormat,Te,ge,ue.colorSpace),L=V(x);N&&ne(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,L,Y,x.width,x.height):ne(x)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,L,Y,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Y,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function M(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),fe(x.depthTexture,0);const ie=i.get(x.depthTexture).__webglTexture,ae=V(x);if(x.depthTexture.format===Si)ne(x)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(x.depthTexture.format===xr)ne(x)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function T(S){const x=i.get(S),N=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");M(x.__webglFramebuffer,S)}else if(N){x.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[ie]),x.__webglDepthbuffer[ie]=n.createRenderbuffer(),_(x.__webglDepthbuffer[ie],S,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),_(x.__webglDepthbuffer,S,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function U(S,x,N){const ie=i.get(S);x!==void 0&&Me(ie.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&T(S)}function D(S){const x=S.texture,N=i.get(S),ie=i.get(x);S.addEventListener("dispose",_e),S.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=x.version,o.memory.textures++);const ae=S.isWebGLCubeRenderTarget===!0,ue=S.isWebGLMultipleRenderTargets===!0,Te=y(S)||a;if(ae){N.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(a&&x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[ge]=[];for(let Y=0;Y<x.mipmaps.length;Y++)N.__webglFramebuffer[ge][Y]=n.createFramebuffer()}else N.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let ge=0;ge<x.mipmaps.length;ge++)N.__webglFramebuffer[ge]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(ue)if(r.drawBuffers){const ge=S.texture;for(let Y=0,L=ge.length;Y<L;Y++){const he=i.get(ge[Y]);he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&ne(S)===!1){const ge=ue?x:[x];N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Y=0;Y<ge.length;Y++){const L=ge[Y];N.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[Y]);const he=s.convert(L.format,L.colorSpace),Pe=s.convert(L.type),ve=te(L.internalFormat,he,Pe,L.colorSpace,S.isXRRenderTarget===!0),Ee=V(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,ve,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,N.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),_(N.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),B(n.TEXTURE_CUBE_MAP,x,Te);for(let ge=0;ge<6;ge++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let Y=0;Y<x.mipmaps.length;Y++)Me(N.__webglFramebuffer[ge][Y],S,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Y);else Me(N.__webglFramebuffer[ge],S,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);I(x,Te)&&P(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){const ge=S.texture;for(let Y=0,L=ge.length;Y<L;Y++){const he=ge[Y],Pe=i.get(he);t.bindTexture(n.TEXTURE_2D,Pe.__webglTexture),B(n.TEXTURE_2D,he,Te),Me(N.__webglFramebuffer,S,he,n.COLOR_ATTACHMENT0+Y,n.TEXTURE_2D,0),I(he,Te)&&P(n.TEXTURE_2D)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?ge=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ge,ie.__webglTexture),B(ge,x,Te),a&&x.mipmaps&&x.mipmaps.length>0)for(let Y=0;Y<x.mipmaps.length;Y++)Me(N.__webglFramebuffer[Y],S,x,n.COLOR_ATTACHMENT0,ge,Y);else Me(N.__webglFramebuffer,S,x,n.COLOR_ATTACHMENT0,ge,0);I(x,Te)&&P(ge),t.unbindTexture()}S.depthBuffer&&T(S)}function k(S){const x=y(S)||a,N=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ie=0,ae=N.length;ie<ae;ie++){const ue=N[ie];if(I(ue,x)){const Te=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ge=i.get(ue).__webglTexture;t.bindTexture(Te,ge),P(Te),t.unbindTexture()}}}function J(S){if(a&&S.samples>0&&ne(S)===!1){const x=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],N=S.width,ie=S.height;let ae=n.COLOR_BUFFER_BIT;const ue=[],Te=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(S),Y=S.isWebGLMultipleRenderTargets===!0;if(Y)for(let L=0;L<x.length;L++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let L=0;L<x.length;L++){ue.push(n.COLOR_ATTACHMENT0+L),S.depthBuffer&&ue.push(Te);const he=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(he===!1&&(S.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),Y&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[L]),he===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Te]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Te])),Y){const Pe=i.get(x[L]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pe,0)}n.blitFramebuffer(0,0,N,ie,0,0,N,ie,ae,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ue)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let L=0;L<x.length;L++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.RENDERBUFFER,ge.__webglColorRenderbuffer[L]);const he=i.get(x[L]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.TEXTURE_2D,he,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function V(S){return Math.min(f,S.samples)}function ne(S){const x=i.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ee(S){const x=o.render.frame;g.get(S)!==x&&(g.set(S,x),S.update())}function Re(S,x){const N=S.colorSpace,ie=S.format,ae=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===nl||N!==xn&&N!==bi&&(N===rt||N===Co?a===!1?e.has("EXT_sRGB")===!0&&ie===nn?(S.format=nl,S.minFilter=Xt,S.generateMipmaps=!1):x=ed.sRGBToLinear(x):(ie!==nn||ae!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}this.allocateTextureUnit=K,this.resetTextureUnits=W,this.setTexture2D=fe,this.setTexture2DArray=z,this.setTexture3D=q,this.setTextureCube=Se,this.rebindTextures=U,this.setupRenderTarget=D,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=T,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ne}const WS=0,ht=1;function XS(n,e,t){const i=t.isWebGL2;function r(s,o=bi){let a;const l=o===rt||o===Co?ht:WS;if(s===ei)return n.UNSIGNED_BYTE;if(s===Yh)return n.UNSIGNED_SHORT_4_4_4_4;if(s===jh)return n.UNSIGNED_SHORT_5_5_5_1;if(s===ov)return n.BYTE;if(s===av)return n.SHORT;if(s===Ol)return n.UNSIGNED_SHORT;if(s===qh)return n.INT;if(s===jn)return n.UNSIGNED_INT;if(s===Kn)return n.FLOAT;if(s===as)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===lv)return n.ALPHA;if(s===nn)return n.RGBA;if(s===cv)return n.LUMINANCE;if(s===uv)return n.LUMINANCE_ALPHA;if(s===Si)return n.DEPTH_COMPONENT;if(s===xr)return n.DEPTH_STENCIL;if(s===nl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===fv)return n.RED;if(s===Kh)return n.RED_INTEGER;if(s===hv)return n.RG;if(s===$h)return n.RG_INTEGER;if(s===Zh)return n.RGBA_INTEGER;if(s===$o||s===Zo||s===Jo||s===Qo)if(l===ht)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===$o)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Zo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Jo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===$o)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Zo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Jo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===au||s===lu||s===cu||s===uu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===au)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===lu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===cu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===uu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===dv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===fu||s===hu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===fu)return l===ht?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===hu)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===du||s===pu||s===mu||s===_u||s===gu||s===vu||s===xu||s===Eu||s===yu||s===Su||s===Mu||s===bu||s===Tu||s===Au)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===du)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===pu)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===mu)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_u)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===gu)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===vu)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===xu)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Eu)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===yu)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Su)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Mu)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===bu)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Tu)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Au)return l===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ea||s===wu||s===Ru)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ea)return l===ht?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===wu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ru)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===pv||s===Cu||s===Pu||s===Lu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ea)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Cu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Pu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Lu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===yi?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class qS extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class qs extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YS={type:"move"};class Sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(YS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new qs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class jS extends kt{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Si,u!==Si&&u!==xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Si&&(i=jn),i===void 0&&u===xr&&(i=yi),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class KS extends Pi{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const v=t.getContextAttributes();let m=null,d=null;const w=[],E=[],y=new qt;y.layers.enable(1),y.viewport=new yt;const C=new qt;C.layers.enable(2),C.viewport=new yt;const I=[y,C],P=new qS;P.layers.enable(1),P.layers.enable(2);let te=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let q=w[z];return q===void 0&&(q=new Sa,w[z]=q),q.getTargetRaySpace()},this.getControllerGrip=function(z){let q=w[z];return q===void 0&&(q=new Sa,w[z]=q),q.getGripSpace()},this.getHand=function(z){let q=w[z];return q===void 0&&(q=new Sa,w[z]=q),q.getHandSpace()};function R(z){const q=E.indexOf(z.inputSource);if(q===-1)return;const Se=w[q];Se!==void 0&&(Se.update(z.inputSource,z.frame,c||o),Se.dispatchEvent({type:z.type,data:z.inputSource}))}function ce(){r.removeEventListener("select",R),r.removeEventListener("selectstart",R),r.removeEventListener("selectend",R),r.removeEventListener("squeeze",R),r.removeEventListener("squeezestart",R),r.removeEventListener("squeezeend",R),r.removeEventListener("end",ce),r.removeEventListener("inputsourceschange",_e);for(let z=0;z<w.length;z++){const q=E[z];q!==null&&(E[z]=null,w[z].disconnect(q))}te=null,b=null,e.setRenderTarget(m),p=null,h=null,f=null,r=null,d=null,fe.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",ce),r.addEventListener("inputsourceschange",_e),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,q),r.updateRenderState({baseLayer:p}),d=new Ti(p.framebufferWidth,p.framebufferHeight,{format:nn,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let q=null,Se=null,we=null;v.depth&&(we=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=v.stencil?xr:Si,Se=v.stencil?yi:jn);const De={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(De),r.updateRenderState({layers:[h]}),d=new Ti(h.textureWidth,h.textureHeight,{format:nn,type:ei,depthTexture:new jS(h.textureWidth,h.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Ue=e.properties.get(d);Ue.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),fe.setContext(r),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function _e(z){for(let q=0;q<z.removed.length;q++){const Se=z.removed[q],we=E.indexOf(Se);we>=0&&(E[we]=null,w[we].disconnect(Se))}for(let q=0;q<z.added.length;q++){const Se=z.added[q];let we=E.indexOf(Se);if(we===-1){for(let Ue=0;Ue<w.length;Ue++)if(Ue>=E.length){E.push(Se),we=Ue;break}else if(E[Ue]===null){E[Ue]=Se,we=Ue;break}if(we===-1)break}const De=w[we];De&&De.connect(Se)}}const H=new F,$=new F;function Z(z,q,Se){H.setFromMatrixPosition(q.matrixWorld),$.setFromMatrixPosition(Se.matrixWorld);const we=H.distanceTo($),De=q.projectionMatrix.elements,Ue=Se.projectionMatrix.elements,B=De[14]/(De[10]-1),le=De[14]/(De[10]+1),de=(De[9]+1)/De[5],ye=(De[9]-1)/De[5],Me=(De[8]-1)/De[0],_=(Ue[8]+1)/Ue[0],M=B*Me,T=B*_,U=we/(-Me+_),D=U*-Me;q.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(D),z.translateZ(U),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const k=B+U,J=le+U,V=M-D,ne=T+(we-D),ee=de*le/J*k,Re=ye*le/J*k;z.projectionMatrix.makePerspective(V,ne,ee,Re,k,J),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function oe(z,q){q===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(q.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;P.near=C.near=y.near=z.near,P.far=C.far=y.far=z.far,(te!==P.near||b!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),te=P.near,b=P.far);const q=z.parent,Se=P.cameras;oe(P,q);for(let we=0;we<Se.length;we++)oe(Se[we],q);Se.length===2?Z(P,y,C):P.projectionMatrix.copy(y.projectionMatrix),W(z,P,q)};function W(z,q,Se){Se===null?z.matrix.copy(q.matrixWorld):(z.matrix.copy(Se.matrixWorld),z.matrix.invert(),z.matrix.multiply(q.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(q.projectionMatrix),z.projectionMatrixInverse.copy(q.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=ls*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(z){l=z,h!==null&&(h.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)};let K=null;function me(z,q){if(u=q.getViewerPose(c||o),g=q,u!==null){const Se=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let we=!1;Se.length!==P.cameras.length&&(P.cameras.length=0,we=!0);for(let De=0;De<Se.length;De++){const Ue=Se[De];let B=null;if(p!==null)B=p.getViewport(Ue);else{const de=f.getViewSubImage(h,Ue);B=de.viewport,De===0&&(e.setRenderTargetTextures(d,de.colorTexture,h.ignoreDepthValues?void 0:de.depthStencilTexture),e.setRenderTarget(d))}let le=I[De];le===void 0&&(le=new qt,le.layers.enable(De),le.viewport=new yt,I[De]=le),le.matrix.fromArray(Ue.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(Ue.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(B.x,B.y,B.width,B.height),De===0&&(P.matrix.copy(le.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),we===!0&&P.cameras.push(le)}}for(let Se=0;Se<w.length;Se++){const we=E[Se],De=w[Se];we!==null&&De!==void 0&&De.update(we,q,c||o)}K&&K(z,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),g=null}const fe=new hd;fe.setAnimationLoop(me),this.setAnimationLoop=function(z){K=z},this.dispose=function(){}}}function $S(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,ld(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,w,E,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,w,E):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ot&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ot&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const w=e.get(d).envMap;if(w&&(m.envMap.value=w,m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const E=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*E,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,w,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*w,m.scale.value=E*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,w){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ot&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const w=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ZS(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(w,E){const y=E.program;i.uniformBlockBinding(w,y)}function c(w,E){let y=r[w.id];y===void 0&&(g(w),y=u(w),r[w.id]=y,w.addEventListener("dispose",m));const C=E.program;i.updateUBOMapping(w,C);const I=e.render.frame;s[w.id]!==I&&(h(w),s[w.id]=I)}function u(w){const E=f();w.__bindingPointIndex=E;const y=n.createBuffer(),C=w.__size,I=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,y),y}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const E=r[w.id],y=w.uniforms,C=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let I=0,P=y.length;I<P;I++){const te=y[I];if(p(te,I,C)===!0){const b=te.__offset,R=Array.isArray(te.value)?te.value:[te.value];let ce=0;for(let _e=0;_e<R.length;_e++){const H=R[_e],$=v(H);typeof H=="number"?(te.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,b+ce,te.__data)):H.isMatrix3?(te.__data[0]=H.elements[0],te.__data[1]=H.elements[1],te.__data[2]=H.elements[2],te.__data[3]=H.elements[0],te.__data[4]=H.elements[3],te.__data[5]=H.elements[4],te.__data[6]=H.elements[5],te.__data[7]=H.elements[0],te.__data[8]=H.elements[6],te.__data[9]=H.elements[7],te.__data[10]=H.elements[8],te.__data[11]=H.elements[0]):(H.toArray(te.__data,ce),ce+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,b,te.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,E,y){const C=w.value;if(y[E]===void 0){if(typeof C=="number")y[E]=C;else{const I=Array.isArray(C)?C:[C],P=[];for(let te=0;te<I.length;te++)P.push(I[te].clone());y[E]=P}return!0}else if(typeof C=="number"){if(y[E]!==C)return y[E]=C,!0}else{const I=Array.isArray(y[E])?y[E]:[y[E]],P=Array.isArray(C)?C:[C];for(let te=0;te<I.length;te++){const b=I[te];if(b.equals(P[te])===!1)return b.copy(P[te]),!0}}return!1}function g(w){const E=w.uniforms;let y=0;const C=16;let I=0;for(let P=0,te=E.length;P<te;P++){const b=E[P],R={boundary:0,storage:0},ce=Array.isArray(b.value)?b.value:[b.value];for(let _e=0,H=ce.length;_e<H;_e++){const $=ce[_e],Z=v($);R.boundary+=Z.boundary,R.storage+=Z.storage}if(b.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=y,P>0){I=y%C;const _e=C-I;I!==0&&_e-R.boundary<0&&(y+=C-I,b.__offset=y)}y+=R.storage}return I=y%C,I>0&&(y+=C-I),w.__size=y,w.__cache={},this}function v(w){const E={boundary:0,storage:0};return typeof w=="number"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function m(w){const E=w.target;E.removeEventListener("dispose",m);const y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function d(){for(const w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class gd{constructor(e={}){const{canvas:t=Vv(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const d=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=rt,this._useLegacyLights=!1,this.toneMapping=Qn,this.toneMappingExposure=1;const E=this;let y=!1,C=0,I=0,P=null,te=-1,b=null;const R=new yt,ce=new yt;let _e=null;const H=new nt(0);let $=0,Z=t.width,oe=t.height,W=1,K=null,me=null;const fe=new yt(0,0,Z,oe),z=new yt(0,0,Z,oe);let q=!1;const Se=new fd;let we=!1,De=!1,Ue=null;const B=new vt,le=new Ae,de=new F,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Me(){return P===null?W:1}let _=i;function M(A,G){for(let re=0;re<A.length;re++){const X=A[re],se=t.getContext(X,G);if(se!==null)return se}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Il}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",xe,!1),_===null){const G=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&G.shift(),_=M(G,A),_===null)throw M(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&_ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),_.getShaderPrecisionFormat===void 0&&(_.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let T,U,D,k,J,V,ne,ee,Re,S,x,N,ie,ae,ue,Te,ge,Y,L,he,Pe,ve,Ee,Ne;function je(){T=new ay(_),U=new ey(_,T,e),T.init(U),ve=new XS(_,T,U),D=new GS(_,T,U),k=new uy(_),J=new RS,V=new VS(_,T,D,J,U,ve,k),ne=new ny(E),ee=new oy(E),Re=new x0(_,U),Ee=new JE(_,T,Re,U),S=new ly(_,Re,k,Ee),x=new py(_,S,Re,k),L=new dy(_,U,V),Te=new ty(J),N=new wS(E,ne,ee,T,U,Ee,Te),ie=new $S(E,J),ae=new PS,ue=new NS(T,U),Y=new ZE(E,ne,ee,D,x,h,l),ge=new kS(E,x,U),Ne=new ZS(_,k,U,D),he=new QE(_,T,k,U),Pe=new cy(_,T,k,U),k.programs=N.programs,E.capabilities=U,E.extensions=T,E.properties=J,E.renderLists=ae,E.shadowMap=ge,E.state=D,E.info=k}je();const O=new KS(E,_);this.xr=O,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const A=T.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=T.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(Z,oe,!1))},this.getSize=function(A){return A.set(Z,oe)},this.setSize=function(A,G,re=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=A,oe=G,t.width=Math.floor(A*W),t.height=Math.floor(G*W),re===!0&&(t.style.width=A+"px",t.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(Z*W,oe*W).floor()},this.setDrawingBufferSize=function(A,G,re){Z=A,oe=G,W=re,t.width=Math.floor(A*re),t.height=Math.floor(G*re),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(fe)},this.setViewport=function(A,G,re,X){A.isVector4?fe.set(A.x,A.y,A.z,A.w):fe.set(A,G,re,X),D.viewport(R.copy(fe).multiplyScalar(W).floor())},this.getScissor=function(A){return A.copy(z)},this.setScissor=function(A,G,re,X){A.isVector4?z.set(A.x,A.y,A.z,A.w):z.set(A,G,re,X),D.scissor(ce.copy(z).multiplyScalar(W).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(A){D.setScissorTest(q=A)},this.setOpaqueSort=function(A){K=A},this.setTransparentSort=function(A){me=A},this.getClearColor=function(A){return A.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(A=!0,G=!0,re=!0){let X=0;if(A){let se=!1;if(P!==null){const Ie=P.texture.format;se=Ie===Zh||Ie===$h||Ie===Kh}if(se){const Ie=P.texture.type,Oe=Ie===ei||Ie===jn||Ie===Ol||Ie===yi||Ie===Yh||Ie===jh,Be=Y.getClearColor(),ze=Y.getClearAlpha(),qe=Be.r,Fe=Be.g,ke=Be.b;Oe?(p[0]=qe,p[1]=Fe,p[2]=ke,p[3]=ze,_.clearBufferuiv(_.COLOR,0,p)):(g[0]=qe,g[1]=Fe,g[2]=ke,g[3]=ze,_.clearBufferiv(_.COLOR,0,g))}else X|=_.COLOR_BUFFER_BIT}G&&(X|=_.DEPTH_BUFFER_BIT),re&&(X|=_.STENCIL_BUFFER_BIT),_.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),ae.dispose(),ue.dispose(),J.dispose(),ne.dispose(),ee.dispose(),x.dispose(),Ee.dispose(),Ne.dispose(),N.dispose(),O.dispose(),O.removeEventListener("sessionstart",tt),O.removeEventListener("sessionend",fn),Ue&&(Ue.dispose(),Ue=null),wt.stop()};function Le(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=k.autoReset,G=ge.enabled,re=ge.autoUpdate,X=ge.needsUpdate,se=ge.type;je(),k.autoReset=A,ge.enabled=G,ge.autoUpdate=re,ge.needsUpdate=X,ge.type=se}function xe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function be(A){const G=A.target;G.removeEventListener("dispose",be),Xe(G)}function Xe(A){Ze(A),J.remove(A)}function Ze(A){const G=J.get(A).programs;G!==void 0&&(G.forEach(function(re){N.releaseProgram(re)}),A.isShaderMaterial&&N.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,re,X,se,Ie){G===null&&(G=ye);const Oe=se.isMesh&&se.matrixWorld.determinant()<0,Be=Cd(A,G,re,X,se);D.setMaterial(X,Oe);let ze=re.index,qe=1;if(X.wireframe===!0){if(ze=S.getWireframeAttribute(re),ze===void 0)return;qe=2}const Fe=re.drawRange,ke=re.attributes.position;let ot=Fe.start*qe,at=(Fe.start+Fe.count)*qe;Ie!==null&&(ot=Math.max(ot,Ie.start*qe),at=Math.min(at,(Ie.start+Ie.count)*qe)),ze!==null?(ot=Math.max(ot,0),at=Math.min(at,ze.count)):ke!=null&&(ot=Math.max(ot,0),at=Math.min(at,ke.count));const Vt=at-ot;if(Vt<0||Vt===1/0)return;Ee.setup(se,X,Be,re,ze);let yn,ct=he;if(ze!==null&&(yn=Re.get(ze),ct=Pe,ct.setIndex(yn)),se.isMesh)X.wireframe===!0?(D.setLineWidth(X.wireframeLinewidth*Me()),ct.setMode(_.LINES)):ct.setMode(_.TRIANGLES);else if(se.isLine){let Ye=X.linewidth;Ye===void 0&&(Ye=1),D.setLineWidth(Ye*Me()),se.isLineSegments?ct.setMode(_.LINES):se.isLineLoop?ct.setMode(_.LINE_LOOP):ct.setMode(_.LINE_STRIP)}else se.isPoints?ct.setMode(_.POINTS):se.isSprite&&ct.setMode(_.TRIANGLES);if(se.isInstancedMesh)ct.renderInstances(ot,Vt,se.count);else if(re.isInstancedBufferGeometry){const Ye=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Io=Math.min(re.instanceCount,Ye);ct.renderInstances(ot,Vt,Io)}else ct.render(ot,Vt)},this.compile=function(A,G){function re(X,se,Ie){X.transparent===!0&&X.side===Dn&&X.forceSinglePass===!1?(X.side=Ot,X.needsUpdate=!0,gs(X,se,Ie),X.side=ii,X.needsUpdate=!0,gs(X,se,Ie),X.side=Dn):gs(X,se,Ie)}m=ue.get(A),m.init(),w.push(m),A.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights(E._useLegacyLights),A.traverse(function(X){const se=X.material;if(se)if(Array.isArray(se))for(let Ie=0;Ie<se.length;Ie++){const Oe=se[Ie];re(Oe,A,X)}else re(se,A,X)}),w.pop(),m=null};let Qe=null;function Ft(A){Qe&&Qe(A)}function tt(){wt.stop()}function fn(){wt.start()}const wt=new hd;wt.setAnimationLoop(Ft),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(A){Qe=A,O.setAnimationLoop(A),A===null?wt.stop():wt.start()},O.addEventListener("sessionstart",tt),O.addEventListener("sessionend",fn),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(G),G=O.getCamera()),A.isScene===!0&&A.onBeforeRender(E,A,G,P),m=ue.get(A,w.length),m.init(),w.push(m),B.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Se.setFromProjectionMatrix(B),De=this.localClippingEnabled,we=Te.init(this.clippingPlanes,De),v=ae.get(A,d.length),v.init(),d.push(v),Xl(A,G,0,E.sortObjects),v.finish(),E.sortObjects===!0&&v.sort(K,me),this.info.render.frame++,we===!0&&Te.beginShadows();const re=m.state.shadowsArray;if(ge.render(re,A,G),we===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(v,A),m.setupLights(E._useLegacyLights),G.isArrayCamera){const X=G.cameras;for(let se=0,Ie=X.length;se<Ie;se++){const Oe=X[se];ql(v,A,Oe,Oe.viewport)}}else ql(v,A,G);P!==null&&(V.updateMultisampleRenderTarget(P),V.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(E,A,G),Ee.resetDefaultState(),te=-1,b=null,w.pop(),w.length>0?m=w[w.length-1]:m=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function Xl(A,G,re,X){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Se.intersectsSprite(A)){X&&de.setFromMatrixPosition(A.matrixWorld).applyMatrix4(B);const Oe=x.update(A),Be=A.material;Be.visible&&v.push(A,Oe,Be,re,de.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Se.intersectsObject(A))){const Oe=x.update(A),Be=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),de.copy(A.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),de.copy(Oe.boundingSphere.center)),de.applyMatrix4(A.matrixWorld).applyMatrix4(B)),Array.isArray(Be)){const ze=Oe.groups;for(let qe=0,Fe=ze.length;qe<Fe;qe++){const ke=ze[qe],ot=Be[ke.materialIndex];ot&&ot.visible&&v.push(A,Oe,ot,re,de.z,ke)}}else Be.visible&&v.push(A,Oe,Be,re,de.z,null)}}const Ie=A.children;for(let Oe=0,Be=Ie.length;Oe<Be;Oe++)Xl(Ie[Oe],G,re,X)}function ql(A,G,re,X){const se=A.opaque,Ie=A.transmissive,Oe=A.transparent;m.setupLightsView(re),we===!0&&Te.setGlobalState(E.clippingPlanes,re),Ie.length>0&&Rd(se,Ie,G,re),X&&D.viewport(R.copy(X)),se.length>0&&_s(se,G,re),Ie.length>0&&_s(Ie,G,re),Oe.length>0&&_s(Oe,G,re),D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function Rd(A,G,re,X){const se=U.isWebGL2;Ue===null&&(Ue=new Ti(1,1,{generateMipmaps:!0,type:T.has("EXT_color_buffer_half_float")?as:ei,minFilter:os,samples:se?4:0})),E.getDrawingBufferSize(le),se?Ue.setSize(le.x,le.y):Ue.setSize(ho(le.x),ho(le.y));const Ie=E.getRenderTarget();E.setRenderTarget(Ue),E.getClearColor(H),$=E.getClearAlpha(),$<1&&E.setClearColor(16777215,.5),E.clear();const Oe=E.toneMapping;E.toneMapping=Qn,_s(A,re,X),V.updateMultisampleRenderTarget(Ue),V.updateRenderTargetMipmap(Ue);let Be=!1;for(let ze=0,qe=G.length;ze<qe;ze++){const Fe=G[ze],ke=Fe.object,ot=Fe.geometry,at=Fe.material,Vt=Fe.group;if(at.side===Dn&&ke.layers.test(X.layers)){const yn=at.side;at.side=Ot,at.needsUpdate=!0,Yl(ke,re,X,ot,at,Vt),at.side=yn,at.needsUpdate=!0,Be=!0}}Be===!0&&(V.updateMultisampleRenderTarget(Ue),V.updateRenderTargetMipmap(Ue)),E.setRenderTarget(Ie),E.setClearColor(H,$),E.toneMapping=Oe}function _s(A,G,re){const X=G.isScene===!0?G.overrideMaterial:null;for(let se=0,Ie=A.length;se<Ie;se++){const Oe=A[se],Be=Oe.object,ze=Oe.geometry,qe=X===null?Oe.material:X,Fe=Oe.group;Be.layers.test(re.layers)&&Yl(Be,G,re,ze,qe,Fe)}}function Yl(A,G,re,X,se,Ie){A.onBeforeRender(E,G,re,X,se,Ie),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),se.onBeforeRender(E,G,re,X,A,Ie),se.transparent===!0&&se.side===Dn&&se.forceSinglePass===!1?(se.side=Ot,se.needsUpdate=!0,E.renderBufferDirect(re,G,X,se,A,Ie),se.side=ii,se.needsUpdate=!0,E.renderBufferDirect(re,G,X,se,A,Ie),se.side=Dn):E.renderBufferDirect(re,G,X,se,A,Ie),A.onAfterRender(E,G,re,X,se,Ie)}function gs(A,G,re){G.isScene!==!0&&(G=ye);const X=J.get(A),se=m.state.lights,Ie=m.state.shadowsArray,Oe=se.state.version,Be=N.getParameters(A,se.state,Ie,G,re),ze=N.getProgramCacheKey(Be);let qe=X.programs;X.environment=A.isMeshStandardMaterial?G.environment:null,X.fog=G.fog,X.envMap=(A.isMeshStandardMaterial?ee:ne).get(A.envMap||X.environment),qe===void 0&&(A.addEventListener("dispose",be),qe=new Map,X.programs=qe);let Fe=qe.get(ze);if(Fe!==void 0){if(X.currentProgram===Fe&&X.lightsStateVersion===Oe)return jl(A,Be),Fe}else Be.uniforms=N.getUniforms(A),A.onBuild(re,Be,E),A.onBeforeCompile(Be,E),Fe=N.acquireProgram(Be,ze),qe.set(ze,Fe),X.uniforms=Be.uniforms;const ke=X.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ke.clippingPlanes=Te.uniform),jl(A,Be),X.needsLights=Ld(A),X.lightsStateVersion=Oe,X.needsLights&&(ke.ambientLightColor.value=se.state.ambient,ke.lightProbe.value=se.state.probe,ke.directionalLights.value=se.state.directional,ke.directionalLightShadows.value=se.state.directionalShadow,ke.spotLights.value=se.state.spot,ke.spotLightShadows.value=se.state.spotShadow,ke.rectAreaLights.value=se.state.rectArea,ke.ltc_1.value=se.state.rectAreaLTC1,ke.ltc_2.value=se.state.rectAreaLTC2,ke.pointLights.value=se.state.point,ke.pointLightShadows.value=se.state.pointShadow,ke.hemisphereLights.value=se.state.hemi,ke.directionalShadowMap.value=se.state.directionalShadowMap,ke.directionalShadowMatrix.value=se.state.directionalShadowMatrix,ke.spotShadowMap.value=se.state.spotShadowMap,ke.spotLightMatrix.value=se.state.spotLightMatrix,ke.spotLightMap.value=se.state.spotLightMap,ke.pointShadowMap.value=se.state.pointShadowMap,ke.pointShadowMatrix.value=se.state.pointShadowMatrix);const ot=Fe.getUniforms(),at=no.seqWithValue(ot.seq,ke);return X.currentProgram=Fe,X.uniformsList=at,Fe}function jl(A,G){const re=J.get(A);re.outputColorSpace=G.outputColorSpace,re.instancing=G.instancing,re.instancingColor=G.instancingColor,re.skinning=G.skinning,re.morphTargets=G.morphTargets,re.morphNormals=G.morphNormals,re.morphColors=G.morphColors,re.morphTargetsCount=G.morphTargetsCount,re.numClippingPlanes=G.numClippingPlanes,re.numIntersection=G.numClipIntersection,re.vertexAlphas=G.vertexAlphas,re.vertexTangents=G.vertexTangents,re.toneMapping=G.toneMapping}function Cd(A,G,re,X,se){G.isScene!==!0&&(G=ye),V.resetTextureUnits();const Ie=G.fog,Oe=X.isMeshStandardMaterial?G.environment:null,Be=P===null?E.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:xn,ze=(X.isMeshStandardMaterial?ee:ne).get(X.envMap||Oe),qe=X.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Fe=!!re.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),ke=!!re.morphAttributes.position,ot=!!re.morphAttributes.normal,at=!!re.morphAttributes.color;let Vt=Qn;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Vt=E.toneMapping);const yn=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,ct=yn!==void 0?yn.length:0,Ye=J.get(X),Io=m.state.lights;if(we===!0&&(De===!0||A!==b)){const Bt=A===b&&X.id===te;Te.setState(X,A,Bt)}let ut=!1;X.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Io.state.version||Ye.outputColorSpace!==Be||se.isInstancedMesh&&Ye.instancing===!1||!se.isInstancedMesh&&Ye.instancing===!0||se.isSkinnedMesh&&Ye.skinning===!1||!se.isSkinnedMesh&&Ye.skinning===!0||se.isInstancedMesh&&Ye.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&Ye.instancingColor===!1&&se.instanceColor!==null||Ye.envMap!==ze||X.fog===!0&&Ye.fog!==Ie||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Te.numPlanes||Ye.numIntersection!==Te.numIntersection)||Ye.vertexAlphas!==qe||Ye.vertexTangents!==Fe||Ye.morphTargets!==ke||Ye.morphNormals!==ot||Ye.morphColors!==at||Ye.toneMapping!==Vt||U.isWebGL2===!0&&Ye.morphTargetsCount!==ct)&&(ut=!0):(ut=!0,Ye.__version=X.version);let ai=Ye.currentProgram;ut===!0&&(ai=gs(X,G,se));let Kl=!1,Tr=!1,Oo=!1;const Rt=ai.getUniforms(),li=Ye.uniforms;if(D.useProgram(ai.program)&&(Kl=!0,Tr=!0,Oo=!0),X.id!==te&&(te=X.id,Tr=!0),Kl||b!==A){Rt.setValue(_,"projectionMatrix",A.projectionMatrix),Rt.setValue(_,"viewMatrix",A.matrixWorldInverse);const Bt=Rt.map.cameraPosition;Bt!==void 0&&Bt.setValue(_,de.setFromMatrixPosition(A.matrixWorld)),U.logarithmicDepthBuffer&&Rt.setValue(_,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Rt.setValue(_,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,Tr=!0,Oo=!0)}if(se.isSkinnedMesh){Rt.setOptional(_,se,"bindMatrix"),Rt.setOptional(_,se,"bindMatrixInverse");const Bt=se.skeleton;Bt&&(U.floatVertexTextures?(Bt.boneTexture===null&&Bt.computeBoneTexture(),Rt.setValue(_,"boneTexture",Bt.boneTexture,V),Rt.setValue(_,"boneTextureSize",Bt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const No=re.morphAttributes;if((No.position!==void 0||No.normal!==void 0||No.color!==void 0&&U.isWebGL2===!0)&&L.update(se,re,ai),(Tr||Ye.receiveShadow!==se.receiveShadow)&&(Ye.receiveShadow=se.receiveShadow,Rt.setValue(_,"receiveShadow",se.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(li.envMap.value=ze,li.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),Tr&&(Rt.setValue(_,"toneMappingExposure",E.toneMappingExposure),Ye.needsLights&&Pd(li,Oo),Ie&&X.fog===!0&&ie.refreshFogUniforms(li,Ie),ie.refreshMaterialUniforms(li,X,W,oe,Ue),no.upload(_,Ye.uniformsList,li,V)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(no.upload(_,Ye.uniformsList,li,V),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Rt.setValue(_,"center",se.center),Rt.setValue(_,"modelViewMatrix",se.modelViewMatrix),Rt.setValue(_,"normalMatrix",se.normalMatrix),Rt.setValue(_,"modelMatrix",se.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Bt=X.uniformsGroups;for(let Fo=0,Dd=Bt.length;Fo<Dd;Fo++)if(U.isWebGL2){const $l=Bt[Fo];Ne.update($l,ai),Ne.bind($l,ai)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ai}function Pd(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function Ld(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,G,re){J.get(A.texture).__webglTexture=G,J.get(A.depthTexture).__webglTexture=re;const X=J.get(A);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=re===void 0,X.__autoAllocateDepthBuffer||T.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,G){const re=J.get(A);re.__webglFramebuffer=G,re.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,re=0){P=A,C=G,I=re;let X=!0,se=null,Ie=!1,Oe=!1;if(A){const ze=J.get(A);ze.__useDefaultFramebuffer!==void 0?(D.bindFramebuffer(_.FRAMEBUFFER,null),X=!1):ze.__webglFramebuffer===void 0?V.setupRenderTarget(A):ze.__hasExternalTextures&&V.rebindTextures(A,J.get(A.texture).__webglTexture,J.get(A.depthTexture).__webglTexture);const qe=A.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Oe=!0);const Fe=J.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Fe[G])?se=Fe[G][re]:se=Fe[G],Ie=!0):U.isWebGL2&&A.samples>0&&V.useMultisampledRTT(A)===!1?se=J.get(A).__webglMultisampledFramebuffer:Array.isArray(Fe)?se=Fe[re]:se=Fe,R.copy(A.viewport),ce.copy(A.scissor),_e=A.scissorTest}else R.copy(fe).multiplyScalar(W).floor(),ce.copy(z).multiplyScalar(W).floor(),_e=q;if(D.bindFramebuffer(_.FRAMEBUFFER,se)&&U.drawBuffers&&X&&D.drawBuffers(A,se),D.viewport(R),D.scissor(ce),D.setScissorTest(_e),Ie){const ze=J.get(A.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+G,ze.__webglTexture,re)}else if(Oe){const ze=J.get(A.texture),qe=G||0;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,ze.__webglTexture,re||0,qe)}te=-1},this.readRenderTargetPixels=function(A,G,re,X,se,Ie,Oe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=J.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Oe!==void 0&&(Be=Be[Oe]),Be){D.bindFramebuffer(_.FRAMEBUFFER,Be);try{const ze=A.texture,qe=ze.format,Fe=ze.type;if(qe!==nn&&ve.convert(qe)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Fe===as&&(T.has("EXT_color_buffer_half_float")||U.isWebGL2&&T.has("EXT_color_buffer_float"));if(Fe!==ei&&ve.convert(Fe)!==_.getParameter(_.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===Kn&&(U.isWebGL2||T.has("OES_texture_float")||T.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-X&&re>=0&&re<=A.height-se&&_.readPixels(G,re,X,se,ve.convert(qe),ve.convert(Fe),Ie)}finally{const ze=P!==null?J.get(P).__webglFramebuffer:null;D.bindFramebuffer(_.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(A,G,re=0){const X=Math.pow(2,-re),se=Math.floor(G.image.width*X),Ie=Math.floor(G.image.height*X);V.setTexture2D(G,0),_.copyTexSubImage2D(_.TEXTURE_2D,re,0,0,A.x,A.y,se,Ie),D.unbindTexture()},this.copyTextureToTexture=function(A,G,re,X=0){const se=G.image.width,Ie=G.image.height,Oe=ve.convert(re.format),Be=ve.convert(re.type);V.setTexture2D(re,0),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,re.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,re.unpackAlignment),G.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,X,A.x,A.y,se,Ie,Oe,Be,G.image.data):G.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,X,A.x,A.y,G.mipmaps[0].width,G.mipmaps[0].height,Oe,G.mipmaps[0].data):_.texSubImage2D(_.TEXTURE_2D,X,A.x,A.y,Oe,Be,G.image),X===0&&re.generateMipmaps&&_.generateMipmap(_.TEXTURE_2D),D.unbindTexture()},this.copyTextureToTexture3D=function(A,G,re,X,se=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ie=A.max.x-A.min.x+1,Oe=A.max.y-A.min.y+1,Be=A.max.z-A.min.z+1,ze=ve.convert(X.format),qe=ve.convert(X.type);let Fe;if(X.isData3DTexture)V.setTexture3D(X,0),Fe=_.TEXTURE_3D;else if(X.isDataArrayTexture)V.setTexture2DArray(X,0),Fe=_.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,X.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,X.unpackAlignment);const ke=_.getParameter(_.UNPACK_ROW_LENGTH),ot=_.getParameter(_.UNPACK_IMAGE_HEIGHT),at=_.getParameter(_.UNPACK_SKIP_PIXELS),Vt=_.getParameter(_.UNPACK_SKIP_ROWS),yn=_.getParameter(_.UNPACK_SKIP_IMAGES),ct=re.isCompressedTexture?re.mipmaps[0]:re.image;_.pixelStorei(_.UNPACK_ROW_LENGTH,ct.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,ct.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,A.min.x),_.pixelStorei(_.UNPACK_SKIP_ROWS,A.min.y),_.pixelStorei(_.UNPACK_SKIP_IMAGES,A.min.z),re.isDataTexture||re.isData3DTexture?_.texSubImage3D(Fe,se,G.x,G.y,G.z,Ie,Oe,Be,ze,qe,ct.data):re.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),_.compressedTexSubImage3D(Fe,se,G.x,G.y,G.z,Ie,Oe,Be,ze,ct.data)):_.texSubImage3D(Fe,se,G.x,G.y,G.z,Ie,Oe,Be,ze,qe,ct),_.pixelStorei(_.UNPACK_ROW_LENGTH,ke),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,ot),_.pixelStorei(_.UNPACK_SKIP_PIXELS,at),_.pixelStorei(_.UNPACK_SKIP_ROWS,Vt),_.pixelStorei(_.UNPACK_SKIP_IMAGES,yn),se===0&&X.generateMipmaps&&_.generateMipmap(Fe),D.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?V.setTextureCube(A,0):A.isData3DTexture?V.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?V.setTexture2DArray(A,0):V.setTexture2D(A,0),D.unbindTexture()},this.resetState=function(){C=0,I=0,P=null,D.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===rt?Mi:Jh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Mi?rt:xn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class JS extends gd{}JS.prototype.isWebGL1Renderer=!0;class QS extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class En{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,p=(o-u)/h;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Ae:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new F,r=[],s=[],o=[],a=new F,l=new vt;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new F)}s[0]=new F,o[0]=new F;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(_t(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(_t(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class kl extends En{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const i=t||new Ae,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*f+this.aX,c=h*f+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class eM extends kl{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Gl(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,p*=u,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Ys=new F,Ma=new Gl,ba=new Gl,Ta=new Gl;class tM extends En{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new F){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Ys.subVectors(r[0],r[1]).add(r[0]),c=Ys);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Ys.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ys),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Ma.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,v,m),ba.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,v,m),Ta.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Ma.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),ba.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Ta.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(Ma.calc(l),ba.calc(l),Ta.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new F().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function vf(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function nM(n,e){const t=1-n;return t*t*e}function iM(n,e){return 2*(1-n)*n*e}function rM(n,e){return n*n*e}function jr(n,e,t,i){return nM(n,e)+iM(n,t)+rM(n,i)}function sM(n,e){const t=1-n;return t*t*t*e}function oM(n,e){const t=1-n;return 3*t*t*n*e}function aM(n,e){return 3*(1-n)*n*n*e}function lM(n,e){return n*n*n*e}function Kr(n,e,t,i,r){return sM(n,e)+oM(n,t)+aM(n,i)+lM(n,r)}class vd extends En{constructor(e=new Ae,t=new Ae,i=new Ae,r=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Ae){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Kr(e,r.x,s.x,o.x,a.x),Kr(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class cM extends En{constructor(e=new F,t=new F,i=new F,r=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new F){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Kr(e,r.x,s.x,o.x,a.x),Kr(e,r.y,s.y,o.y,a.y),Kr(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Vl extends En{constructor(e=new Ae,t=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ae){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uM extends En{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xd extends En{constructor(e=new Ae,t=new Ae,i=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ae){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(jr(e,r.x,s.x,o.x),jr(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fM extends En{constructor(e=new F,t=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new F){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(jr(e,r.x,s.x,o.x),jr(e,r.y,s.y,o.y),jr(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ed extends En{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ae){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(vf(a,l.x,c.x,u.x,f.x),vf(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Ae().fromArray(r))}return this}}var yd=Object.freeze({__proto__:null,ArcCurve:eM,CatmullRomCurve3:tM,CubicBezierCurve:vd,CubicBezierCurve3:cM,EllipseCurve:kl,LineCurve:Vl,LineCurve3:uM,QuadraticBezierCurve:xd,QuadraticBezierCurve3:fM,SplineCurve:Ed});class hM extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Vl(t,e))}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new yd[r.type]().fromJSON(r))}return this}}class xf extends hM{constructor(e){super(),this.type="Path",this.currentPoint=new Ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Vl(this.currentPoint.clone(),new Ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new xd(this.currentPoint.clone(),new Ae(e,t),new Ae(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new vd(this.currentPoint.clone(),new Ae(e,t),new Ae(i,r),new Ae(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Ed(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const c=new kl(e,t,i,r,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Sd extends xf{constructor(e){super(e),this.uuid=Li(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new xf().fromJSON(r))}return this}}const dM={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=Md(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,f,h,p;if(i&&(s=vM(n,e,s,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let g=t;g<r;g+=t)f=n[g],h=n[g+1],f<a&&(a=f),h<l&&(l=h),f>c&&(c=f),h>u&&(u=h);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return cs(s,o,t,a,l,p,0),o}};function Md(n,e,t,i,r){let s,o;if(r===CM(n,e,t,i)>0)for(s=e;s<t;s+=i)o=Ef(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=Ef(s,n[s],n[s+1],o);return o&&Uo(o,o.next)&&(fs(o),o=o.next),o}function Ri(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Uo(t,t.next)||st(t.prev,t,t.next)===0)){if(fs(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function cs(n,e,t,i,r,s,o){if(!n)return;!o&&s&&MM(n,i,r,s);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?mM(n,i,r,s):pM(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),fs(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=_M(Ri(n),e,t),cs(n,e,t,i,r,s,2)):o===2&&gM(n,e,t,i,r,s):cs(Ri(n),e,t,i,r,s,1);break}}}function pM(n){const e=n.prev,t=n,i=n.next;if(st(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,f=a<l?a<c?a:c:l<c?l:c,h=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=p&&sr(r,a,s,l,o,c,g.x,g.y)&&st(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function mM(n,e,t,i){const r=n.prev,s=n,o=n.next;if(st(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,h=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<f?u<h?u:h:f<h?f:h,v=a>l?a>c?a:c:l>c?l:c,m=u>f?u>h?u:h:f>h?f:h,d=sl(p,g,e,t,i),w=sl(v,m,e,t,i);let E=n.prevZ,y=n.nextZ;for(;E&&E.z>=d&&y&&y.z<=w;){if(E.x>=p&&E.x<=v&&E.y>=g&&E.y<=m&&E!==r&&E!==o&&sr(a,u,l,f,c,h,E.x,E.y)&&st(E.prev,E,E.next)>=0||(E=E.prevZ,y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&sr(a,u,l,f,c,h,y.x,y.y)&&st(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;E&&E.z>=d;){if(E.x>=p&&E.x<=v&&E.y>=g&&E.y<=m&&E!==r&&E!==o&&sr(a,u,l,f,c,h,E.x,E.y)&&st(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;y&&y.z<=w;){if(y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&sr(a,u,l,f,c,h,y.x,y.y)&&st(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function _M(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!Uo(r,s)&&bd(r,i,i.next,s)&&us(r,s)&&us(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),fs(i),fs(i.next),i=n=s),i=i.next}while(i!==n);return Ri(i)}function gM(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&AM(o,a)){let l=Td(o,a);o=Ri(o,o.next),l=Ri(l,l.next),cs(o,e,t,i,r,s,0),cs(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function vM(n,e,t,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=Md(n,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(TM(c));for(r.sort(xM),s=0;s<r.length;s++)t=EM(r[s],t);return t}function xM(n,e){return n.x-e.x}function EM(n,e){const t=yM(n,e);if(!t)return e;const i=Td(t,n);return Ri(i,i.next),Ri(t,t.next)}function yM(n,e){let t=e,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=s&&h>i&&(i=h,r=t.x<t.next.x?t:t.next,h===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,f;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&sr(o<c?s:i,o,l,c,o<c?i:s,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(s-t.x),us(t,n)&&(f<u||f===u&&(t.x>r.x||t.x===r.x&&SM(r,t)))&&(r=t,u=f)),t=t.next;while(t!==a);return r}function SM(n,e){return st(n.prev,n,e.prev)<0&&st(e.next,n,n.next)<0}function MM(n,e,t,i){let r=n;do r.z===0&&(r.z=sl(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,bM(r)}function bM(n){let e,t,i,r,s,o,a,l,c=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(o>1);return n}function sl(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function TM(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function sr(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function AM(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!wM(n,e)&&(us(n,e)&&us(e,n)&&RM(n,e)&&(st(n.prev,n,e.prev)||st(n,e.prev,e))||Uo(n,e)&&st(n.prev,n,n.next)>0&&st(e.prev,e,e.next)>0)}function st(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Uo(n,e){return n.x===e.x&&n.y===e.y}function bd(n,e,t,i){const r=Ks(st(n,e,t)),s=Ks(st(n,e,i)),o=Ks(st(t,i,n)),a=Ks(st(t,i,e));return!!(r!==s&&o!==a||r===0&&js(n,t,e)||s===0&&js(n,i,e)||o===0&&js(t,n,i)||a===0&&js(t,e,i))}function js(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ks(n){return n>0?1:n<0?-1:0}function wM(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&bd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function us(n,e){return st(n.prev,n,n.next)<0?st(n,e,n.next)>=0&&st(n,n.prev,e)>=0:st(n,e,n.prev)<0||st(n,n.next,e)<0}function RM(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Td(n,e){const t=new ol(n.i,n.x,n.y),i=new ol(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Ef(n,e,t,i){const r=new ol(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function fs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ol(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function CM(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class $r{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return $r.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];yf(e),Sf(i,e);let o=e.length;t.forEach(yf);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Sf(i,t[l]);const a=dM.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function yf(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Sf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Wl extends oi{constructor(e=new Sd([new Ae(.5,.5),new Ae(-.5,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Nn(r,3)),this.setAttribute("uv",new Nn(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:PM;let E,y=!1,C,I,P,te;d&&(E=d.getSpacedPoints(u),y=!0,h=!1,C=d.computeFrenetFrames(u,!1),I=new F,P=new F,te=new F),h||(m=0,p=0,g=0,v=0);const b=a.extractPoints(c);let R=b.shape;const ce=b.holes;if(!$r.isClockWise(R)){R=R.reverse();for(let _=0,M=ce.length;_<M;_++){const T=ce[_];$r.isClockWise(T)&&(ce[_]=T.reverse())}}const H=$r.triangulateShape(R,ce),$=R;for(let _=0,M=ce.length;_<M;_++){const T=ce[_];R=R.concat(T)}function Z(_,M,T){return M||console.error("THREE.ExtrudeGeometry: vec does not exist"),_.clone().addScaledVector(M,T)}const oe=R.length,W=H.length;function K(_,M,T){let U,D,k;const J=_.x-M.x,V=_.y-M.y,ne=T.x-_.x,ee=T.y-_.y,Re=J*J+V*V,S=J*ee-V*ne;if(Math.abs(S)>Number.EPSILON){const x=Math.sqrt(Re),N=Math.sqrt(ne*ne+ee*ee),ie=M.x-V/x,ae=M.y+J/x,ue=T.x-ee/N,Te=T.y+ne/N,ge=((ue-ie)*ee-(Te-ae)*ne)/(J*ee-V*ne);U=ie+J*ge-_.x,D=ae+V*ge-_.y;const Y=U*U+D*D;if(Y<=2)return new Ae(U,D);k=Math.sqrt(Y/2)}else{let x=!1;J>Number.EPSILON?ne>Number.EPSILON&&(x=!0):J<-Number.EPSILON?ne<-Number.EPSILON&&(x=!0):Math.sign(V)===Math.sign(ee)&&(x=!0),x?(U=-V,D=J,k=Math.sqrt(Re)):(U=J,D=V,k=Math.sqrt(Re/2))}return new Ae(U/k,D/k)}const me=[];for(let _=0,M=$.length,T=M-1,U=_+1;_<M;_++,T++,U++)T===M&&(T=0),U===M&&(U=0),me[_]=K($[_],$[T],$[U]);const fe=[];let z,q=me.concat();for(let _=0,M=ce.length;_<M;_++){const T=ce[_];z=[];for(let U=0,D=T.length,k=D-1,J=U+1;U<D;U++,k++,J++)k===D&&(k=0),J===D&&(J=0),z[U]=K(T[U],T[k],T[J]);fe.push(z),q=q.concat(z)}for(let _=0;_<m;_++){const M=_/m,T=p*Math.cos(M*Math.PI/2),U=g*Math.sin(M*Math.PI/2)+v;for(let D=0,k=$.length;D<k;D++){const J=Z($[D],me[D],U);B(J.x,J.y,-T)}for(let D=0,k=ce.length;D<k;D++){const J=ce[D];z=fe[D];for(let V=0,ne=J.length;V<ne;V++){const ee=Z(J[V],z[V],U);B(ee.x,ee.y,-T)}}}const Se=g+v;for(let _=0;_<oe;_++){const M=h?Z(R[_],q[_],Se):R[_];y?(P.copy(C.normals[0]).multiplyScalar(M.x),I.copy(C.binormals[0]).multiplyScalar(M.y),te.copy(E[0]).add(P).add(I),B(te.x,te.y,te.z)):B(M.x,M.y,0)}for(let _=1;_<=u;_++)for(let M=0;M<oe;M++){const T=h?Z(R[M],q[M],Se):R[M];y?(P.copy(C.normals[_]).multiplyScalar(T.x),I.copy(C.binormals[_]).multiplyScalar(T.y),te.copy(E[_]).add(P).add(I),B(te.x,te.y,te.z)):B(T.x,T.y,f/u*_)}for(let _=m-1;_>=0;_--){const M=_/m,T=p*Math.cos(M*Math.PI/2),U=g*Math.sin(M*Math.PI/2)+v;for(let D=0,k=$.length;D<k;D++){const J=Z($[D],me[D],U);B(J.x,J.y,f+T)}for(let D=0,k=ce.length;D<k;D++){const J=ce[D];z=fe[D];for(let V=0,ne=J.length;V<ne;V++){const ee=Z(J[V],z[V],U);y?B(ee.x,ee.y+E[u-1].y,E[u-1].x+T):B(ee.x,ee.y,f+T)}}}we(),De();function we(){const _=r.length/3;if(h){let M=0,T=oe*M;for(let U=0;U<W;U++){const D=H[U];le(D[2]+T,D[1]+T,D[0]+T)}M=u+m*2,T=oe*M;for(let U=0;U<W;U++){const D=H[U];le(D[0]+T,D[1]+T,D[2]+T)}}else{for(let M=0;M<W;M++){const T=H[M];le(T[2],T[1],T[0])}for(let M=0;M<W;M++){const T=H[M];le(T[0]+oe*u,T[1]+oe*u,T[2]+oe*u)}}i.addGroup(_,r.length/3-_,0)}function De(){const _=r.length/3;let M=0;Ue($,M),M+=$.length;for(let T=0,U=ce.length;T<U;T++){const D=ce[T];Ue(D,M),M+=D.length}i.addGroup(_,r.length/3-_,1)}function Ue(_,M){let T=_.length;for(;--T>=0;){const U=T;let D=T-1;D<0&&(D=_.length-1);for(let k=0,J=u+m*2;k<J;k++){const V=oe*k,ne=oe*(k+1),ee=M+U+V,Re=M+D+V,S=M+D+ne,x=M+U+ne;de(ee,Re,S,x)}}}function B(_,M,T){l.push(_),l.push(M),l.push(T)}function le(_,M,T){ye(_),ye(M),ye(T);const U=r.length/3,D=w.generateTopUV(i,r,U-3,U-2,U-1);Me(D[0]),Me(D[1]),Me(D[2])}function de(_,M,T,U){ye(_),ye(M),ye(U),ye(M),ye(T),ye(U);const D=r.length/3,k=w.generateSideWallUV(i,r,D-6,D-3,D-2,D-1);Me(k[0]),Me(k[1]),Me(k[3]),Me(k[1]),Me(k[2]),Me(k[3])}function ye(_){r.push(l[_*3+0]),r.push(l[_*3+1]),r.push(l[_*3+2])}function Me(_){s.push(_.x),s.push(_.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return LM(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new yd[r.type]().fromJSON(r)),new Wl(i,e.options)}}const PM={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new Ae(s,o),new Ae(a,l),new Ae(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],h=e[r*3],p=e[r*3+1],g=e[r*3+2],v=e[s*3],m=e[s*3+1],d=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Ae(o,1-l),new Ae(c,1-f),new Ae(h,1-g),new Ae(v,1-d)]:[new Ae(a,1-l),new Ae(u,1-f),new Ae(p,1-g),new Ae(m,1-d)]}};function LM(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Mf{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Il}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Il);const bf={type:"change"},Aa={type:"start"},Tf={type:"end"},$s=new id,Af=new Yn,DM=Math.cos(70*Gv.DEG2RAD);class UM extends Pi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ui.ROTATE,MIDDLE:Ui.DOLLY,RIGHT:Ui.PAN},this.touches={ONE:Ii.ROTATE,TWO:Ii.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",x),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",x),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(bf),i.update(),s=r.NONE},this.update=function(){const L=new F,he=new Ai().setFromUnitVectors(e.up,new F(0,1,0)),Pe=he.clone().invert(),ve=new F,Ee=new Ai,Ne=new F,je=2*Math.PI;return function(Le=null){const Q=i.object.position;L.copy(Q).sub(i.target),L.applyQuaternion(he),a.setFromVector3(L),i.autoRotate&&s===r.NONE&&ce(b(Le)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let xe=i.minAzimuthAngle,be=i.maxAzimuthAngle;isFinite(xe)&&isFinite(be)&&(xe<-Math.PI?xe+=je:xe>Math.PI&&(xe-=je),be<-Math.PI?be+=je:be>Math.PI&&(be-=je),xe<=be?a.theta=Math.max(xe,Math.min(be,a.theta)):a.theta=a.theta>(xe+be)/2?Math.max(xe,a.theta):Math.min(be,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.zoomToCursor&&I||i.object.isOrthographicCamera?a.radius=me(a.radius):a.radius=me(a.radius*c),L.setFromSpherical(a),L.applyQuaternion(Pe),Q.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let Xe=!1;if(i.zoomToCursor&&I){let Ze=null;if(i.object.isPerspectiveCamera){const Qe=L.length();Ze=me(Qe*c);const Ft=Qe-Ze;i.object.position.addScaledVector(y,Ft),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Qe=new F(C.x,C.y,0);Qe.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Xe=!0;const Ft=new F(C.x,C.y,0);Ft.unproject(i.object),i.object.position.sub(Ft).add(Qe),i.object.updateMatrixWorld(),Ze=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Ze!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Ze).add(i.object.position):($s.origin.copy(i.object.position),$s.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot($s.direction))<DM?e.lookAt(i.target):(Af.setFromNormalAndCoplanarPoint(i.object.up,i.target),$s.intersectPlane(Af,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Xe=!0);return c=1,I=!1,Xe||ve.distanceToSquared(i.object.position)>o||8*(1-Ee.dot(i.object.quaternion))>o||Ne.distanceToSquared(i.target)>0?(i.dispatchEvent(bf),ve.copy(i.object.position),Ee.copy(i.object.quaternion),Ne.copy(i.target),Xe=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ae),i.domElement.removeEventListener("pointerdown",J),i.domElement.removeEventListener("pointercancel",ne),i.domElement.removeEventListener("wheel",S),i.domElement.removeEventListener("pointermove",V),i.domElement.removeEventListener("pointerup",ne),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",x),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Mf,l=new Mf;let c=1;const u=new F,f=new Ae,h=new Ae,p=new Ae,g=new Ae,v=new Ae,m=new Ae,d=new Ae,w=new Ae,E=new Ae,y=new F,C=new Ae;let I=!1;const P=[],te={};function b(L){return L!==null?2*Math.PI/60*i.autoRotateSpeed*L:2*Math.PI/60/60*i.autoRotateSpeed}function R(){return Math.pow(.95,i.zoomSpeed)}function ce(L){l.theta-=L}function _e(L){l.phi-=L}const H=function(){const L=new F;return function(Pe,ve){L.setFromMatrixColumn(ve,0),L.multiplyScalar(-Pe),u.add(L)}}(),$=function(){const L=new F;return function(Pe,ve){i.screenSpacePanning===!0?L.setFromMatrixColumn(ve,1):(L.setFromMatrixColumn(ve,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(Pe),u.add(L)}}(),Z=function(){const L=new F;return function(Pe,ve){const Ee=i.domElement;if(i.object.isPerspectiveCamera){const Ne=i.object.position;L.copy(Ne).sub(i.target);let je=L.length();je*=Math.tan(i.object.fov/2*Math.PI/180),H(2*Pe*je/Ee.clientHeight,i.object.matrix),$(2*ve*je/Ee.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(H(Pe*(i.object.right-i.object.left)/i.object.zoom/Ee.clientWidth,i.object.matrix),$(ve*(i.object.top-i.object.bottom)/i.object.zoom/Ee.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function oe(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(L){if(!i.zoomToCursor)return;I=!0;const he=i.domElement.getBoundingClientRect(),Pe=L.clientX-he.left,ve=L.clientY-he.top,Ee=he.width,Ne=he.height;C.x=Pe/Ee*2-1,C.y=-(ve/Ne)*2+1,y.set(C.x,C.y,1).unproject(i.object).sub(i.object.position).normalize()}function me(L){return Math.max(i.minDistance,Math.min(i.maxDistance,L))}function fe(L){f.set(L.clientX,L.clientY)}function z(L){K(L),d.set(L.clientX,L.clientY)}function q(L){g.set(L.clientX,L.clientY)}function Se(L){h.set(L.clientX,L.clientY),p.subVectors(h,f).multiplyScalar(i.rotateSpeed);const he=i.domElement;ce(2*Math.PI*p.x/he.clientHeight),_e(2*Math.PI*p.y/he.clientHeight),f.copy(h),i.update()}function we(L){w.set(L.clientX,L.clientY),E.subVectors(w,d),E.y>0?oe(R()):E.y<0&&W(R()),d.copy(w),i.update()}function De(L){v.set(L.clientX,L.clientY),m.subVectors(v,g).multiplyScalar(i.panSpeed),Z(m.x,m.y),g.copy(v),i.update()}function Ue(L){K(L),L.deltaY<0?W(R()):L.deltaY>0&&oe(R()),i.update()}function B(L){let he=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?_e(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(0,i.keyPanSpeed),he=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?_e(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(0,-i.keyPanSpeed),he=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?ce(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(i.keyPanSpeed,0),he=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?ce(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Z(-i.keyPanSpeed,0),he=!0;break}he&&(L.preventDefault(),i.update())}function le(){if(P.length===1)f.set(P[0].pageX,P[0].pageY);else{const L=.5*(P[0].pageX+P[1].pageX),he=.5*(P[0].pageY+P[1].pageY);f.set(L,he)}}function de(){if(P.length===1)g.set(P[0].pageX,P[0].pageY);else{const L=.5*(P[0].pageX+P[1].pageX),he=.5*(P[0].pageY+P[1].pageY);g.set(L,he)}}function ye(){const L=P[0].pageX-P[1].pageX,he=P[0].pageY-P[1].pageY,Pe=Math.sqrt(L*L+he*he);d.set(0,Pe)}function Me(){i.enableZoom&&ye(),i.enablePan&&de()}function _(){i.enableZoom&&ye(),i.enableRotate&&le()}function M(L){if(P.length==1)h.set(L.pageX,L.pageY);else{const Pe=Y(L),ve=.5*(L.pageX+Pe.x),Ee=.5*(L.pageY+Pe.y);h.set(ve,Ee)}p.subVectors(h,f).multiplyScalar(i.rotateSpeed);const he=i.domElement;ce(2*Math.PI*p.x/he.clientHeight),_e(2*Math.PI*p.y/he.clientHeight),f.copy(h)}function T(L){if(P.length===1)v.set(L.pageX,L.pageY);else{const he=Y(L),Pe=.5*(L.pageX+he.x),ve=.5*(L.pageY+he.y);v.set(Pe,ve)}m.subVectors(v,g).multiplyScalar(i.panSpeed),Z(m.x,m.y),g.copy(v)}function U(L){const he=Y(L),Pe=L.pageX-he.x,ve=L.pageY-he.y,Ee=Math.sqrt(Pe*Pe+ve*ve);w.set(0,Ee),E.set(0,Math.pow(w.y/d.y,i.zoomSpeed)),oe(E.y),d.copy(w)}function D(L){i.enableZoom&&U(L),i.enablePan&&T(L)}function k(L){i.enableZoom&&U(L),i.enableRotate&&M(L)}function J(L){i.enabled!==!1&&(P.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",V),i.domElement.addEventListener("pointerup",ne)),ue(L),L.pointerType==="touch"?N(L):ee(L))}function V(L){i.enabled!==!1&&(L.pointerType==="touch"?ie(L):Re(L))}function ne(L){Te(L),P.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",V),i.domElement.removeEventListener("pointerup",ne)),i.dispatchEvent(Tf),s=r.NONE}function ee(L){let he;switch(L.button){case 0:he=i.mouseButtons.LEFT;break;case 1:he=i.mouseButtons.MIDDLE;break;case 2:he=i.mouseButtons.RIGHT;break;default:he=-1}switch(he){case Ui.DOLLY:if(i.enableZoom===!1)return;z(L),s=r.DOLLY;break;case Ui.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;q(L),s=r.PAN}else{if(i.enableRotate===!1)return;fe(L),s=r.ROTATE}break;case Ui.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;fe(L),s=r.ROTATE}else{if(i.enablePan===!1)return;q(L),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Aa)}function Re(L){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;Se(L);break;case r.DOLLY:if(i.enableZoom===!1)return;we(L);break;case r.PAN:if(i.enablePan===!1)return;De(L);break}}function S(L){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(L.preventDefault(),i.dispatchEvent(Aa),Ue(L),i.dispatchEvent(Tf))}function x(L){i.enabled===!1||i.enablePan===!1||B(L)}function N(L){switch(ge(L),P.length){case 1:switch(i.touches.ONE){case Ii.ROTATE:if(i.enableRotate===!1)return;le(),s=r.TOUCH_ROTATE;break;case Ii.PAN:if(i.enablePan===!1)return;de(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Ii.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Me(),s=r.TOUCH_DOLLY_PAN;break;case Ii.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;_(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Aa)}function ie(L){switch(ge(L),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;M(L),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;T(L),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;D(L),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;k(L),i.update();break;default:s=r.NONE}}function ae(L){i.enabled!==!1&&L.preventDefault()}function ue(L){P.push(L)}function Te(L){delete te[L.pointerId];for(let he=0;he<P.length;he++)if(P[he].pointerId==L.pointerId){P.splice(he,1);return}}function ge(L){let he=te[L.pointerId];he===void 0&&(he=new Ae,te[L.pointerId]=he),he.set(L.pageX,L.pageY)}function Y(L){const he=L.pointerId===P[0].pointerId?P[1]:P[0];return te[he.pointerId]}i.domElement.addEventListener("contextmenu",ae),i.domElement.addEventListener("pointerdown",J),i.domElement.addEventListener("pointercancel",ne),i.domElement.addEventListener("wheel",S,{passive:!1}),this.update()}}const IM={props:{geometry:Array,color:String,editableHeight:Number},watch:{color(n){this.mesh.material.color.set(n)},editableHeight(n){this.mesh.scale.z=n}},mounted(){this.sizes={width:window.innerWidth,height:window.innerHeight},this.canvas=this.$refs.canvas,this.scene=new QS,this.extrudeGeometry=this.createExtrudeGeometry(),this.mesh=this.createMesh(),this.camera=this.createCamera(),this.renderer=this.createRenderer(),this.createControls(),this.addResizeListener(),this.setAnimation()},methods:{createExtrudeGeometry(){const n=new Sd,e=this.geometry[0];n.moveTo(e[0],e[1]);for(let r=1;r<this.geometry.length;r++){const s=this.geometry[r];n.lineTo(s[0],s[1])}n.lineTo(e[0],e[1]);const t={steps:1,depth:this.editableHeight,bevelEnabled:!1};return new Wl(n,t)},createMesh(){const n=new Bl({color:this.color}),e=new In(this.extrudeGeometry,n);return e.rotation.x=-Math.PI/2,e.geometry.center(),this.scene.add(e),e},createCamera(){const e=this.sizes.width/this.sizes.height,t=new qt(75,e);return t.position.x=2,t.position.y=2,t.position.z=10,t.lookAt(this.mesh.position),this.scene.add(t),t},createRenderer(){const n=new gd({antialias:!0,canvas:this.canvas});return n.setSize(this.sizes.width,this.sizes.height),n.render(this.scene,this.camera),n},createControls(){const n=new UM(this.camera,this.canvas);n.enableDamping=!0},addResizeListener(){window.addEventListener("resize",()=>{this.sizes.width=window.innerWidth,this.sizes.height=window.innerHeight,this.camera.aspect=this.sizes.width/this.sizes.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.sizes.width,this.sizes.height)})},setAnimation(){this.renderer.render(this.scene,this.camera),window.requestAnimationFrame(this.setAnimation)}}},OM={ref:"canvas"};function NM(n,e,t,i,r,s){return hs(),_h("canvas",OM,null,512)}const Ad=ds(IM,[["render",NM]]),FM={components:{ThreeDObjectGenerator:Ad},data(){return{color:"#008080",height:1}},created(){this.GEOMETRY=[[0,0],[0,10],[15,10],[7,15],[7,8],[7,0]],this.createGui()},methods:{createGui(){const n=new Hh;n.domElement.id="gui",n.add(this,"height").min(0).max(5).step(1),n.addColor(this,"color")}}};function BM(n,e,t,i,r,s){const o=bo("ThreeDObjectGenerator");return hs(),Tl(o,{geometry:n.GEOMETRY,color:r.color,editableHeight:r.height},null,8,["geometry","color","editableHeight"])}const zM=ds(FM,[["render",BM]]),HM={components:{ThreeDObjectGenerator:Ad},data(){return{color:"#008080",height:1}},created(){this.GEOMETRY=[[0,0],[7,12],[0,14]],this.createGui()},methods:{createGui(){const n=new Hh;n.domElement.id="gui",n.add(this,"height").min(0).max(5).step(1),n.addColor(this,"color")}}};function kM(n,e,t,i,r,s){const o=bo("ThreeDObjectGenerator");return hs(),Tl(o,{geometry:n.GEOMETRY,color:r.color,editableHeight:r.height},null,8,["geometry","color","editableHeight"])}const GM=ds(HM,[["render",kM]]);const VM={},WM={class:"main"};function XM(n,e){const t=bo("router-link");return hs(),_h("div",WM,[It(t,{to:"/1"},{default:Ua(()=>[Ha("Go to Geometry One")]),_:1}),It(t,{to:"/2"},{default:Ua(()=>[Ha("Go to Geometry Two")]),_:1})])}const qM=ds(VM,[["render",XM]]),YM=[{path:"/",component:qM},{path:"/1",component:zM},{path:"/2",component:GM}],jM=rg({history:E_(),routes:YM}),wd=t_(lg);wd.use(jM);wd.mount("#app");
