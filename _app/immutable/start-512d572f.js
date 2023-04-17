import{S as dt,i as pt,s as ht,a as mt,e as H,c as _t,b as X,g as ge,t as K,d as we,f as M,h as G,j as gt,o as Te,k as wt,l as yt,m as bt,n as Le,p as B,q as vt,r as Et,u as kt,v as Ie,w as Q,x,y as De,z as ee,A as te,B as me}from"./chunks/index-d6470de1.js";import{S as it,a as lt,I as $,g as Qe,f as xe,b as Ae,c as _e,s as F,i as et,d as oe,P as tt,e as St,h as Rt}from"./chunks/singletons-4d192a21.js";import{b as Z,s as Lt}from"./chunks/paths-22944c7b.js";function It(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function At(a){return a.split("%25").map(decodeURI).join("%25")}function Pt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const Ot=["href","pathname","search","searchParams","toString","toJSON"];function Ut(a,e){const n=new URL(a);for(const s of Ot){let i=n[s];Object.defineProperty(n,s,{get(){return e(),i},enumerable:!0,configurable:!0})}return Nt(n),n}function Nt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Tt="/__data.json";function jt(a){return a.replace(/\/$/,"")+Tt}function ct(a){try{return JSON.parse(sessionStorage[a])}catch{}}function nt(a,e){const n=JSON.stringify(e);try{sessionStorage[a]=n}catch{}}function Dt(...a){let e=5381;for(const n of a)if(typeof n=="string"){let s=n.length;for(;s;)e=e*33^n.charCodeAt(--s)}else if(ArrayBuffer.isView(n)){const s=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let i=s.length;for(;i;)e=e*33^s[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const ye=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&se.delete(Ce(a)),ye(a,e));const se=new Map;function Ct(a,e){const n=Ce(a,e),s=document.querySelector(n);if(s!=null&&s.textContent){const{body:i,...u}=JSON.parse(s.textContent),t=s.getAttribute("data-ttl");return t&&se.set(n,{body:i,init:u,ttl:1e3*Number(t)}),Promise.resolve(new Response(i,u))}return ye(a,e)}function Vt(a,e,n){if(se.size>0){const s=Ce(a,n),i=se.get(s);if(i){if(performance.now()<i.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(i.body,i.init);se.delete(s)}}return ye(e,n)}function Ce(a,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;if(e!=null&&e.headers||e!=null&&e.body){const i=[];e.headers&&i.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&i.push(e.body),s+=`[data-hash="${Dt(...i)}"]`}return s}const qt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function $t(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${Ft(a).map(s=>{const i=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(i)return e.push({name:i[1],matcher:i[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(u)return e.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const t=s.split(/\[(.+?)\](?!\])/);return"/"+t.map((_,h)=>{if(h%2){if(_.startsWith("x+"))return Pe(String.fromCharCode(parseInt(_.slice(2),16)));if(_.startsWith("u+"))return Pe(String.fromCharCode(..._.slice(2).split("-").map(I=>parseInt(I,16))));const m=qt.exec(_);if(!m)throw new Error(`Invalid param: ${_}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,k,P,L,C]=m;return e.push({name:L,matcher:C,optional:!!k,rest:!!P,chained:P?h===1&&t[0]==="":!1}),P?"(.*?)":k?"([^/]*)?":"([^/]+?)"}return Pe(_)}).join("")}).join("")}/?$`),params:e}}function Bt(a){return!/^\([^)]+\)$/.test(a)}function Ft(a){return a.slice(1).split("/").filter(Bt)}function Ht(a,e,n){const s={},i=a.slice(1);let u=0;for(let t=0;t<e.length;t+=1){const c=e[t],_=i[t-u];if(c.chained&&c.rest&&u){s[c.name]=i.slice(t-u,t+1).filter(h=>h).join("/"),u=0;continue}if(_===void 0){c.rest&&(s[c.name]="");continue}if(!c.matcher||n[c.matcher](_)){s[c.name]=_;continue}if(c.optional&&c.chained){u++;continue}return}if(!u)return s}function Pe(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Kt(a,e,n,s){const i=new Set(e);return Object.entries(n).map(([c,[_,h,m]])=>{const{pattern:k,params:P}=$t(c),L={id:c,exec:C=>{const I=k.exec(C);if(I)return Ht(I,P,s)},errors:[1,...m||[]].map(C=>a[C]),layouts:[0,...h||[]].map(t),leaf:u(_)};return L.errors.length=L.layouts.length=Math.max(L.errors.length,L.layouts.length),L});function u(c){const _=c<0;return _&&(c=~c),[_,a[c]]}function t(c){return c===void 0?c:[i.has(c),a[c]]}}function Mt(a){let e,n,s;var i=a[1][0];function u(t){return{props:{data:t[3],form:t[2]}}}return i&&(e=Q(i,u(a)),a[12](e)),{c(){e&&x(e.$$.fragment),n=H()},l(t){e&&De(e.$$.fragment,t),n=H()},m(t,c){e&&ee(e,t,c),X(t,n,c),s=!0},p(t,c){const _={};if(c&8&&(_.data=t[3]),c&4&&(_.form=t[2]),i!==(i=t[1][0])){if(e){ge();const h=e;K(h.$$.fragment,1,0,()=>{te(h,1)}),we()}i?(e=Q(i,u(t)),t[12](e),x(e.$$.fragment),M(e.$$.fragment,1),ee(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){s||(e&&M(e.$$.fragment,t),s=!0)},o(t){e&&K(e.$$.fragment,t),s=!1},d(t){a[12](null),t&&G(n),e&&te(e,t)}}}function Gt(a){let e,n,s;var i=a[1][0];function u(t){return{props:{data:t[3],$$slots:{default:[Jt]},$$scope:{ctx:t}}}}return i&&(e=Q(i,u(a)),a[11](e)),{c(){e&&x(e.$$.fragment),n=H()},l(t){e&&De(e.$$.fragment,t),n=H()},m(t,c){e&&ee(e,t,c),X(t,n,c),s=!0},p(t,c){const _={};if(c&8&&(_.data=t[3]),c&8215&&(_.$$scope={dirty:c,ctx:t}),i!==(i=t[1][0])){if(e){ge();const h=e;K(h.$$.fragment,1,0,()=>{te(h,1)}),we()}i?(e=Q(i,u(t)),t[11](e),x(e.$$.fragment),M(e.$$.fragment,1),ee(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){s||(e&&M(e.$$.fragment,t),s=!0)},o(t){e&&K(e.$$.fragment,t),s=!1},d(t){a[11](null),t&&G(n),e&&te(e,t)}}}function Jt(a){let e,n,s;var i=a[1][1];function u(t){return{props:{data:t[4],form:t[2]}}}return i&&(e=Q(i,u(a)),a[10](e)),{c(){e&&x(e.$$.fragment),n=H()},l(t){e&&De(e.$$.fragment,t),n=H()},m(t,c){e&&ee(e,t,c),X(t,n,c),s=!0},p(t,c){const _={};if(c&16&&(_.data=t[4]),c&4&&(_.form=t[2]),i!==(i=t[1][1])){if(e){ge();const h=e;K(h.$$.fragment,1,0,()=>{te(h,1)}),we()}i?(e=Q(i,u(t)),t[10](e),x(e.$$.fragment),M(e.$$.fragment,1),ee(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){s||(e&&M(e.$$.fragment,t),s=!0)},o(t){e&&K(e.$$.fragment,t),s=!1},d(t){a[10](null),t&&G(n),e&&te(e,t)}}}function at(a){let e,n=a[6]&&rt(a);return{c(){e=wt("div"),n&&n.c(),this.h()},l(s){e=yt(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=bt(e);n&&n.l(i),i.forEach(G),this.h()},h(){Le(e,"id","svelte-announcer"),Le(e,"aria-live","assertive"),Le(e,"aria-atomic","true"),B(e,"position","absolute"),B(e,"left","0"),B(e,"top","0"),B(e,"clip","rect(0 0 0 0)"),B(e,"clip-path","inset(50%)"),B(e,"overflow","hidden"),B(e,"white-space","nowrap"),B(e,"width","1px"),B(e,"height","1px")},m(s,i){X(s,e,i),n&&n.m(e,null)},p(s,i){s[6]?n?n.p(s,i):(n=rt(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&G(e),n&&n.d()}}}function rt(a){let e;return{c(){e=vt(a[7])},l(n){e=Et(n,a[7])},m(n,s){X(n,e,s)},p(n,s){s&128&&kt(e,n[7])},d(n){n&&G(e)}}}function zt(a){let e,n,s,i,u;const t=[Gt,Mt],c=[];function _(m,k){return m[1][1]?0:1}e=_(a),n=c[e]=t[e](a);let h=a[5]&&at(a);return{c(){n.c(),s=mt(),h&&h.c(),i=H()},l(m){n.l(m),s=_t(m),h&&h.l(m),i=H()},m(m,k){c[e].m(m,k),X(m,s,k),h&&h.m(m,k),X(m,i,k),u=!0},p(m,[k]){let P=e;e=_(m),e===P?c[e].p(m,k):(ge(),K(c[P],1,1,()=>{c[P]=null}),we(),n=c[e],n?n.p(m,k):(n=c[e]=t[e](m),n.c()),M(n,1),n.m(s.parentNode,s)),m[5]?h?h.p(m,k):(h=at(m),h.c(),h.m(i.parentNode,i)):h&&(h.d(1),h=null)},i(m){u||(M(n),u=!0)},o(m){K(n),u=!1},d(m){c[e].d(m),m&&G(s),h&&h.d(m),m&&G(i)}}}function Wt(a,e,n){let{stores:s}=e,{page:i}=e,{constructors:u}=e,{components:t=[]}=e,{form:c}=e,{data_0:_=null}=e,{data_1:h=null}=e;gt(s.page.notify);let m=!1,k=!1,P=null;Te(()=>{const S=s.page.subscribe(()=>{m&&(n(6,k=!0),n(7,P=document.title||"untitled page"))});return n(5,m=!0),S});function L(S){Ie[S?"unshift":"push"](()=>{t[1]=S,n(0,t)})}function C(S){Ie[S?"unshift":"push"](()=>{t[0]=S,n(0,t)})}function I(S){Ie[S?"unshift":"push"](()=>{t[0]=S,n(0,t)})}return a.$$set=S=>{"stores"in S&&n(8,s=S.stores),"page"in S&&n(9,i=S.page),"constructors"in S&&n(1,u=S.constructors),"components"in S&&n(0,t=S.components),"form"in S&&n(2,c=S.form),"data_0"in S&&n(3,_=S.data_0),"data_1"in S&&n(4,h=S.data_1)},a.$$.update=()=>{a.$$.dirty&768&&s.page.set(i)},[t,u,c,_,h,m,k,P,s,i,L,C,I]}class Yt extends dt{constructor(e){super(),pt(this,e,Wt,zt,ht,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const Xt="modulepreload",Zt=function(a,e){return new URL(a,e).href},ot={},W=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(u=>{if(u=Zt(u,s),u in ot)return;ot[u]=!0;const t=u.endsWith(".css"),c=t?'[rel="stylesheet"]':"";if(!!s)for(let m=i.length-1;m>=0;m--){const k=i[m];if(k.href===u&&(!t||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${c}`))return;const h=document.createElement("link");if(h.rel=t?"stylesheet":Xt,t||(h.as="script",h.crossOrigin=""),h.href=u,document.head.appendChild(h),t)return new Promise((m,k)=>{h.addEventListener("load",m),h.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${u}`)))})})).then(()=>e())},Qt={},be=[()=>W(()=>import("./chunks/0-eabe4769.js"),["./chunks/0-eabe4769.js","./chunks/_layout-da46b06b.js","./components/pages/_layout.svelte-3fbd6c77.js","./chunks/index-d6470de1.js","./chunks/paths-22944c7b.js","./chunks/stores-c3cf1624.js","./chunks/singletons-4d192a21.js","./assets/_layout-4b26ba48.css"],import.meta.url),()=>W(()=>import("./chunks/1-2dcda1a3.js"),["./chunks/1-2dcda1a3.js","./components/error.svelte-fb9ab26e.js","./chunks/index-d6470de1.js","./chunks/stores-c3cf1624.js","./chunks/singletons-4d192a21.js","./chunks/paths-22944c7b.js"],import.meta.url),()=>W(()=>import("./chunks/2-6bf64025.js"),["./chunks/2-6bf64025.js","./components/pages/_page.svelte-985a67fa.js","./chunks/index-d6470de1.js","./chunks/paths-22944c7b.js"],import.meta.url),()=>W(()=>import("./chunks/3-5a3cb433.js"),["./chunks/3-5a3cb433.js","./components/pages/about/_page.svelte-c3b4ebfb.js","./chunks/index-d6470de1.js","./chunks/paths-22944c7b.js"],import.meta.url),()=>W(()=>import("./chunks/4-a054b25d.js"),["./chunks/4-a054b25d.js","./components/pages/blog/1/_page.svelte-b21705ca.js","./chunks/index-d6470de1.js","./chunks/BlogPage-45049952.js"],import.meta.url),()=>W(()=>import("./chunks/5-b0afcc89.js"),["./chunks/5-b0afcc89.js","./components/pages/blog/2/_page.svelte-80d1ccd3.js","./chunks/index-d6470de1.js","./chunks/BlogPage-45049952.js"],import.meta.url),()=>W(()=>import("./chunks/6-d3ad1f3d.js"),["./chunks/6-d3ad1f3d.js","./components/pages/map/_page.svelte-ed6a44e5.js","./chunks/index-d6470de1.js"],import.meta.url)],xt=[],en={"/":[2],"/about":[3],"/blog/1":[4],"/blog/2":[5],"/map":[6]},tn={handleError:({error:a})=>{console.error(a)}};let ie=class{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}},st=class{constructor(e,n){this.status=e,this.location=n}};async function nn(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([s,i])=>[s,await i])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const an=-1,rn=-2,on=-3,sn=-4,ln=-5,cn=-6;function fn(a,e){if(typeof a=="number")return i(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const n=a,s=Array(n.length);function i(u,t=!1){if(u===an)return;if(u===on)return NaN;if(u===sn)return 1/0;if(u===ln)return-1/0;if(u===cn)return-0;if(t)throw new Error("Invalid input");if(u in s)return s[u];const c=n[u];if(!c||typeof c!="object")s[u]=c;else if(Array.isArray(c))if(typeof c[0]=="string"){const _=c[0],h=e==null?void 0:e[_];if(h)return s[u]=h(i(c[1]));switch(_){case"Date":s[u]=new Date(c[1]);break;case"Set":const m=new Set;s[u]=m;for(let L=1;L<c.length;L+=1)m.add(i(c[L]));break;case"Map":const k=new Map;s[u]=k;for(let L=1;L<c.length;L+=2)k.set(i(c[L]),i(c[L+1]));break;case"RegExp":s[u]=new RegExp(c[1],c[2]);break;case"Object":s[u]=Object(c[1]);break;case"BigInt":s[u]=BigInt(c[1]);break;case"null":const P=Object.create(null);s[u]=P;for(let L=1;L<c.length;L+=2)P[c[L]]=i(c[L+1]);break;default:throw new Error(`Unknown type ${_}`)}}else{const _=new Array(c.length);s[u]=_;for(let h=0;h<c.length;h+=1){const m=c[h];m!==rn&&(_[h]=i(m))}}else{const _={};s[u]=_;for(const h in c){const m=c[h];_[h]=i(m)}}return s[u]}return i(0)}function un(a){return a.filter(e=>e!=null)}const Oe=Kt(be,xt,en,Qt),ft=be[0],je=be[1];ft();je();const Y=ct(it)??{},ae=ct(lt)??{};function Ue(a){Y[a]=oe()}function dn({target:a}){var Ye;const e=document.documentElement,n=[],s=[];let i=null;const u={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},c=!1,_=!1,h=!0,m=!1,k=!1,P=!1,L=!1,C,I=(Ye=history.state)==null?void 0:Ye[$];I||(I=Date.now(),history.replaceState({...history.state,[$]:I},"",location.href));const S=Y[I];S&&(history.scrollRestoration="manual",scrollTo(S.x,S.y));let J,Ve,le;async function qe(){le=le||Promise.resolve(),await le,le=null;const r=new URL(location.href),o=ue(r,!0);i=null,await He(o,r,[])}function $e(r){s.some(o=>o==null?void 0:o.snapshot)&&(ae[r]=s.map(o=>{var f;return(f=o==null?void 0:o.snapshot)==null?void 0:f.capture()}))}function Be(r){var o;(o=ae[r])==null||o.forEach((f,l)=>{var p,d;(d=(p=s[l])==null?void 0:p.snapshot)==null||d.restore(f)})}async function ve(r,{noScroll:o=!1,replaceState:f=!1,keepFocus:l=!1,state:p={},invalidateAll:d=!1},w,g){return typeof r=="string"&&(r=new URL(r,Qe(document))),pe({url:r,scroll:o?oe():null,keepfocus:l,redirect_chain:w,details:{state:p,replaceState:f},nav_token:g,accepted:()=>{d&&(L=!0)},blocked:()=>{},type:"goto"})}async function Fe(r){const o=ue(r,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);return i={id:o.id,promise:Ge(o).then(f=>(f.type==="loaded"&&f.state.error&&(i=null),f))},i.promise}async function ce(...r){const f=Oe.filter(l=>r.some(p=>l.exec(p))).map(l=>Promise.all([...l.layouts,l.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(f)}async function He(r,o,f,l,p,d={},w){var b,v;Ve=d;let g=r&&await Ge(r);if(g||(g=await We(o,{id:null},await re(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(r==null?void 0:r.url)||o,Ve!==d)return!1;if(g.type==="redirect")if(f.length>10||f.includes(o.pathname))g=await fe({status:500,error:await re(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return ve(new URL(g.location,o).href,{},[...f,o.pathname],d),!1;else((v=(b=g.props)==null?void 0:b.page)==null?void 0:v.status)>=400&&await F.updated.check()&&await he(o);if(n.length=0,L=!1,m=!0,l&&(Ue(l),$e(l)),p&&p.details){const{details:E}=p,O=E.replaceState?0:1;if(E.state[$]=I+=O,history[E.replaceState?"replaceState":"pushState"](E.state,"",o),!E.replaceState){let N=I+1;for(;ae[N]||Y[N];)delete ae[N],delete Y[N],N+=1}}if(i=null,_?(t=g.state,g.props.page&&(g.props.page.url=o),C.$set(g.props)):Ke(g),p){const{scroll:E,keepfocus:O}=p,{activeElement:N}=document;await me();const A=document.activeElement!==N&&document.activeElement!==document.body;if(!O&&!A&&await Ne(),h){const y=o.hash&&document.getElementById(decodeURIComponent(o.hash.slice(1)));E?scrollTo(E.x,E.y):y?y.scrollIntoView():scrollTo(0,0)}}else await me();h=!0,g.props.page&&(J=g.props.page),w&&w(),m=!1}function Ke(r){var l;t=r.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),J=r.props.page,C=new Yt({target:a,props:{...r.props,stores:F,components:s},hydrate:!0}),Be(I);const f={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};u.after_navigate.forEach(p=>p(f)),_=!0}async function ne({url:r,params:o,branch:f,status:l,error:p,route:d,form:w}){let g="never";for(const A of f)(A==null?void 0:A.slash)!==void 0&&(g=A.slash);r.pathname=It(r.pathname,g),r.search=r.search;const b={type:"loaded",state:{url:r,params:o,branch:f,error:p,route:d},props:{constructors:un(f).map(A=>A.node.component)}};w!==void 0&&(b.props.form=w);let v={},E=!J,O=0;for(let A=0;A<Math.max(f.length,t.branch.length);A+=1){const y=f[A],j=t.branch[A];(y==null?void 0:y.data)!==(j==null?void 0:j.data)&&(E=!0),y&&(v={...v,...y.data},E&&(b.props[`data_${O}`]=v),O+=1)}return(!t.url||r.href!==t.url.href||t.error!==p||w!==void 0&&w!==J.form||E)&&(b.props.page={error:p,params:o,route:{id:(d==null?void 0:d.id)??null},status:l,url:new URL(r),form:w??null,data:E?v:J.data}),b}async function Ee({loader:r,parent:o,url:f,params:l,route:p,server_data_node:d}){var v,E,O;let w=null;const g={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await r();if((v=b.universal)!=null&&v.load){let N=function(...y){for(const j of y){const{href:V}=new URL(j,f);g.dependencies.add(V)}};const A={route:{get id(){return g.route=!0,p.id}},params:new Proxy(l,{get:(y,j)=>(g.params.add(j),y[j])}),data:(d==null?void 0:d.data)??null,url:Ut(f,()=>{g.url=!0}),async fetch(y,j){let V;y instanceof Request?(V=y.url,j={body:y.method==="GET"||y.method==="HEAD"?void 0:await y.blob(),cache:y.cache,credentials:y.credentials,headers:y.headers,integrity:y.integrity,keepalive:y.keepalive,method:y.method,mode:y.mode,redirect:y.redirect,referrer:y.referrer,referrerPolicy:y.referrerPolicy,signal:y.signal,...j}):V=y;const q=new URL(V,f);return N(q.href),q.origin===f.origin&&(V=q.href.slice(f.origin.length)),_?Vt(V,q.href,j):Ct(V,j)},setHeaders:()=>{},depends:N,parent(){return g.parent=!0,o()}};w=await b.universal.load.call(null,A)??null,w=w?await nn(w):null}return{node:b,loader:r,server:d,universal:(E=b.universal)!=null&&E.load?{type:"data",data:w,uses:g}:null,data:w??(d==null?void 0:d.data)??null,slash:((O=b.universal)==null?void 0:O.trailingSlash)??(d==null?void 0:d.slash)}}function Me(r,o,f,l,p){if(L)return!0;if(!l)return!1;if(l.parent&&r||l.route&&o||l.url&&f)return!0;for(const d of l.params)if(p[d]!==t.params[d])return!0;for(const d of l.dependencies)if(n.some(w=>w(new URL(d))))return!0;return!1}function ke(r,o){return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set(r.uses.dependencies??[]),params:new Set(r.uses.params??[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url},slash:r.slash}:(r==null?void 0:r.type)==="skip"?o??null:null}async function Ge({id:r,invalidating:o,url:f,params:l,route:p}){if((i==null?void 0:i.id)===r)return i.promise;const{errors:d,layouts:w,leaf:g}=p,b=[...w,g];d.forEach(R=>R==null?void 0:R().catch(()=>{})),b.forEach(R=>R==null?void 0:R[1]().catch(()=>{}));let v=null;const E=t.url?r!==t.url.pathname+t.url.search:!1,O=t.route?p.id!==t.route.id:!1;let N=!1;const A=b.map((R,D)=>{var z;const U=t.branch[D],T=!!(R!=null&&R[0])&&((U==null?void 0:U.loader)!==R[1]||Me(N,O,E,(z=U.server)==null?void 0:z.uses,l));return T&&(N=!0),T});if(A.some(Boolean)){try{v=await pn(f,A)}catch(R){return fe({status:R instanceof ie?R.status:500,error:await re(R,{url:f,params:l,route:{id:p.id}}),url:f,route:p})}if(v.type==="redirect")return v}const y=v==null?void 0:v.nodes;let j=!1;const V=b.map(async(R,D)=>{var Se;if(!R)return;const U=t.branch[D],T=y==null?void 0:y[D];if((!T||T.type==="skip")&&R[1]===(U==null?void 0:U.loader)&&!Me(j,O,E,(Se=U.universal)==null?void 0:Se.uses,l))return U;if(j=!0,(T==null?void 0:T.type)==="error")throw T;return Ee({loader:R[1],url:f,params:l,route:p,parent:async()=>{var Ze;const Xe={};for(let Re=0;Re<D;Re+=1)Object.assign(Xe,(Ze=await V[Re])==null?void 0:Ze.data);return Xe},server_data_node:ke(T===void 0&&R[0]?{type:"skip"}:T??null,U==null?void 0:U.server)})});for(const R of V)R.catch(()=>{});const q=[];for(let R=0;R<b.length;R+=1)if(b[R])try{q.push(await V[R])}catch(D){if(D instanceof st)return{type:"redirect",location:D.location};let U=500,T;if(y!=null&&y.includes(D))U=D.status??U,T=D.error;else if(D instanceof ie)U=D.status,T=D.body;else{if(await F.updated.check())return await he(f);T=await re(D,{params:l,url:f,route:{id:p.id}})}const z=await Je(R,q,d);return z?await ne({url:f,params:l,branch:q.slice(0,z.idx).concat(z.node),status:U,error:T,route:p}):await We(f,{id:p.id},T,U)}else q.push(void 0);return await ne({url:f,params:l,branch:q,status:200,error:null,route:p,form:o?void 0:null})}async function Je(r,o,f){for(;r--;)if(f[r]){let l=r;for(;!o[l];)l-=1;try{return{idx:l+1,node:{node:await f[r](),loader:f[r],data:{},server:null,universal:null}}}catch{continue}}}async function fe({status:r,error:o,url:f,route:l}){const p={},w=await Ee({loader:ft,url:f,params:p,route:l,parent:()=>Promise.resolve({}),server_data_node:ke(null)}),g={node:await je(),loader:je,universal:null,server:null,data:null};return await ne({url:f,params:p,branch:[w,g],status:r,error:o,route:null})}function ue(r,o){if(et(r,Z))return;const f=de(r);for(const l of Oe){const p=l.exec(f);if(p)return{id:r.pathname+r.search,invalidating:o,route:l,params:Pt(p),url:r}}}function de(r){return At(r.pathname.slice(Z.length)||"/")}function ze({url:r,type:o,intent:f,delta:l}){var g,b;let p=!1;const d={from:{params:t.params,route:{id:((g=t.route)==null?void 0:g.id)??null},url:t.url},to:{params:(f==null?void 0:f.params)??null,route:{id:((b=f==null?void 0:f.route)==null?void 0:b.id)??null},url:r},willUnload:!f,type:o};l!==void 0&&(d.delta=l);const w={...d,cancel:()=>{p=!0}};return k||u.before_navigate.forEach(v=>v(w)),p?null:d}async function pe({url:r,scroll:o,keepfocus:f,redirect_chain:l,details:p,type:d,delta:w,nav_token:g,accepted:b,blocked:v}){const E=ue(r,!1),O=ze({url:r,type:d,delta:w,intent:E});if(!O){v();return}const N=I;b(),k=!0,_&&F.navigating.set(O),await He(E,r,l,N,{scroll:o,keepfocus:f,details:p},g,()=>{k=!1,u.after_navigate.forEach(A=>A(O)),F.navigating.set(null)})}async function We(r,o,f,l){return r.origin===location.origin&&r.pathname===location.pathname&&!c?await fe({status:l,error:f,url:r,route:o}):await he(r)}function he(r){return location.href=r.href,new Promise(()=>{})}function ut(){let r;e.addEventListener("mousemove",d=>{const w=d.target;clearTimeout(r),r=setTimeout(()=>{l(w,2)},20)});function o(d){l(d.composedPath()[0],1)}e.addEventListener("mousedown",o),e.addEventListener("touchstart",o,{passive:!0});const f=new IntersectionObserver(d=>{for(const w of d)w.isIntersecting&&(ce(de(new URL(w.target.href))),f.unobserve(w.target))},{threshold:0});function l(d,w){const g=xe(d,e);if(!g)return;const{url:b,external:v}=Ae(g,Z);if(v)return;const E=_e(g);E.reload||(w<=E.preload_data?Fe(b):w<=E.preload_code&&ce(de(b)))}function p(){f.disconnect();for(const d of e.querySelectorAll("a")){const{url:w,external:g}=Ae(d,Z);if(g)continue;const b=_e(d);b.reload||(b.preload_code===tt.viewport&&f.observe(d),b.preload_code===tt.eager&&ce(de(w)))}}u.after_navigate.push(p),p()}return{after_navigate:r=>{Te(()=>(u.after_navigate.push(r),()=>{const o=u.after_navigate.indexOf(r);u.after_navigate.splice(o,1)}))},before_navigate:r=>{Te(()=>(u.before_navigate.push(r),()=>{const o=u.before_navigate.indexOf(r);u.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(m||!_)&&(h=!1)},goto:(r,o={})=>ve(r,o,[]),invalidate:r=>{if(typeof r=="function")n.push(r);else{const{href:o}=new URL(r,location.href);n.push(f=>f.href===o)}return qe()},invalidateAll:()=>(L=!0,qe()),preload_data:async r=>{const o=new URL(r,Qe(document));await Fe(o)},preload_code:ce,apply_action:async r=>{if(r.type==="error"){const o=new URL(location.href),{branch:f,route:l}=t;if(!l)return;const p=await Je(t.branch.length,f,l.errors);if(p){const d=await ne({url:o,params:t.params,branch:f.slice(0,p.idx).concat(p.node),status:r.status??500,error:r.error,route:l});t=d.state,C.$set(d.props),me().then(Ne)}}else if(r.type==="redirect")ve(r.location,{invalidateAll:!0},[]);else{const o={form:r.data,page:{...J,form:r.data,status:r.status}};C.$set(o),r.type==="success"&&me().then(Ne)}},_start_router:()=>{var r;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var l;let f=!1;if(!k){const p={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>f=!0};u.before_navigate.forEach(d=>d(p))}f?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&(Ue(I),nt(it,Y),$e(I),nt(lt,ae))}),(r=navigator.connection)!=null&&r.saveData||ut(),e.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const f=xe(o.composedPath()[0],e);if(!f)return;const{url:l,external:p,target:d}=Ae(f,Z);if(!l)return;if(d==="_parent"||d==="_top"){if(window.parent!==window)return}else if(d&&d!=="_self")return;const w=_e(f);if(!(f instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:"))return;if(p||w.reload){ze({url:l,type:"link"})||o.preventDefault(),k=!0;return}const[b,v]=l.href.split("#");if(v!==void 0&&b===location.href.split("#")[0]){P=!0,Ue(I),t.url=l,F.page.set({...J,url:l}),F.page.notify();return}pe({url:l,scroll:w.noscroll?oe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),e.addEventListener("submit",o=>{if(o.defaultPrevented)return;const f=HTMLFormElement.prototype.cloneNode.call(o.target),l=o.submitter;if(((l==null?void 0:l.formMethod)||f.method)!=="get")return;const d=new URL((l==null?void 0:l.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||f.action);if(et(d,Z))return;const w=o.target,{noscroll:g,reload:b}=_e(w);if(b)return;o.preventDefault(),o.stopPropagation();const v=new FormData(w),E=l==null?void 0:l.getAttribute("name");E&&v.append(E,(l==null?void 0:l.getAttribute("value"))??""),d.search=new URLSearchParams(v).toString(),pe({url:d,scroll:g?oe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async o=>{var f;if((f=o.state)!=null&&f[$]){if(o.state[$]===I)return;const l=Y[o.state[$]];if(t.url.href.split("#")[0]===location.href.split("#")[0]){Y[I]=oe(),I=o.state[$],scrollTo(l.x,l.y);return}const p=o.state[$]-I;let d=!1;await pe({url:new URL(location.href),scroll:l,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{I=o.state[$]},blocked:()=>{history.go(-p),d=!0},type:"popstate",delta:p}),d||Be(I)}}),addEventListener("hashchange",()=>{P&&(P=!1,history.replaceState({...history.state,[$]:++I},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&F.navigating.set(null)})},_hydrate:async({status:r=200,error:o,node_ids:f,params:l,route:p,data:d,form:w})=>{c=!0;const g=new URL(location.href);({params:l={},route:p={id:null}}=ue(g,!1)||{});let b;try{const v=f.map(async(E,O)=>{const N=d[O];return Ee({loader:be[E],url:g,params:l,route:p,parent:async()=>{const A={};for(let y=0;y<O;y+=1)Object.assign(A,(await v[y]).data);return A},server_data_node:ke(N)})});b=await ne({url:g,params:l,branch:await Promise.all(v),status:r,error:o,form:w,route:Oe.find(({id:E})=>E===p.id)??null})}catch(v){if(v instanceof st){await he(new URL(v.location,location.href));return}b=await fe({status:v instanceof ie?v.status:500,error:await re(v,{url:g,params:l,route:p}),url:g,route:p})}Ke(b)}}}async function pn(a,e){var u;const n=new URL(a);n.pathname=jt(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const s=await ye(n.href),i=await s.json();if(!s.ok)throw new ie(s.status,i);return(u=i.nodes)==null||u.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=fn(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),i}function re(a,e){return a instanceof ie?a.body:tn.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Ne(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");return e.tabIndex=-1,e.focus({preventScroll:!0}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex"),new Promise(s=>{setTimeout(()=>{var i;s((i=getSelection())==null?void 0:i.removeAllRanges())})})}}async function yn({assets:a,env:e,hydrate:n,target:s,version:i}){Lt(a),Rt(i);const u=dn({target:s});St({client:u}),n?await u._hydrate(n):u.goto(location.href,{replaceState:!0}),u._start_router()}export{yn as start};
