import{S as Y,i as x,s as ee,x as te,y as le,z as se,f as ie,t as re,A as ce,k as m,a as I,q as y,l as d,m as v,h as o,c as w,r as E,n as p,b as g,F as _,U as ne,u as N,V as O,e as T,E as B}from"../../../../chunks/index-4b522de0.js";import{S as ae}from"../../../../chunks/Section-61f8c73e.js";function M(n,l,i){const s=n.slice();return s[5]=l[i],s}function R(n,l,i){const s=n.slice();return s[8]=l[i],s}function J(n,l,i){const s=n.slice();return s[8]=l[i],s}function oe(n){let l;function i(e,c){return e[5].listType==="ordered"?he:ue}let s=i(n),t=s(n);return{c(){t.c(),l=T()},l(e){t.l(e),l=T()},m(e,c){t.m(e,c),g(e,l,c)},p(e,c){s===(s=i(e))&&t?t.p(e,c):(t.d(1),t=s(e),t&&(t.c(),t.m(l.parentNode,l)))},d(e){t.d(e),e&&o(l)}}}function fe(n){let l,i,s,t,e,c,r=n[5].description&&W(n);return{c(){l=m("figure"),i=m("img"),e=I(),r&&r.c(),c=I(),this.h()},l(a){l=d(a,"FIGURE",{class:!0});var f=v(l);i=d(f,"IMG",{src:!0,alt:!0}),e=w(f),r&&r.l(f),c=w(f),f.forEach(o),this.h()},h(){B(i.src,s=n[5].src)||p(i,"src",s),p(i,"alt",t=n[5].alt),p(l,"class","svelte-uwtz2e")},m(a,f){g(a,l,f),_(l,i),_(l,e),r&&r.m(l,null),_(l,c)},p(a,f){f&1&&!B(i.src,s=a[5].src)&&p(i,"src",s),f&1&&t!==(t=a[5].alt)&&p(i,"alt",t),a[5].description?r?r.p(a,f):(r=W(a),r.c(),r.m(l,c)):r&&(r.d(1),r=null)},d(a){a&&o(l),r&&r.d()}}}function _e(n){let l;function i(e,c){return e[5].title?me:pe}let s=i(n),t=s(n);return{c(){t.c(),l=T()},l(e){t.l(e),l=T()},m(e,c){t.m(e,c),g(e,l,c)},p(e,c){s===(s=i(e))&&t?t.p(e,c):(t.d(1),t=s(e),t&&(t.c(),t.m(l.parentNode,l)))},d(e){t.d(e),e&&o(l)}}}function ue(n){let l,i,s=n[5].items,t=[];for(let e=0;e<s.length;e+=1)t[e]=K(R(n,s,e));return{c(){l=m("ul");for(let e=0;e<t.length;e+=1)t[e].c();i=I(),this.h()},l(e){l=d(e,"UL",{class:!0});var c=v(l);for(let r=0;r<t.length;r+=1)t[r].l(c);i=w(c),c.forEach(o),this.h()},h(){p(l,"class","list-disc ml-6")},m(e,c){g(e,l,c);for(let r=0;r<t.length;r+=1)t[r].m(l,null);_(l,i)},p(e,c){if(c&1){s=e[5].items;let r;for(r=0;r<s.length;r+=1){const a=R(e,s,r);t[r]?t[r].p(a,c):(t[r]=K(a),t[r].c(),t[r].m(l,i))}for(;r<t.length;r+=1)t[r].d(1);t.length=s.length}},d(e){e&&o(l),O(t,e)}}}function he(n){let l,i,s=n[5].items,t=[];for(let e=0;e<s.length;e+=1)t[e]=Q(J(n,s,e));return{c(){l=m("ol");for(let e=0;e<t.length;e+=1)t[e].c();i=I(),this.h()},l(e){l=d(e,"OL",{class:!0});var c=v(l);for(let r=0;r<t.length;r+=1)t[r].l(c);i=w(c),c.forEach(o),this.h()},h(){p(l,"class","list-decimal ml-6")},m(e,c){g(e,l,c);for(let r=0;r<t.length;r+=1)t[r].m(l,null);_(l,i)},p(e,c){if(c&1){s=e[5].items;let r;for(r=0;r<s.length;r+=1){const a=J(e,s,r);t[r]?t[r].p(a,c):(t[r]=Q(a),t[r].c(),t[r].m(l,i))}for(;r<t.length;r+=1)t[r].d(1);t.length=s.length}},d(e){e&&o(l),O(t,e)}}}function K(n){let l,i=n[8]+"",s;return{c(){l=m("li"),s=y(i),this.h()},l(t){l=d(t,"LI",{class:!0});var e=v(l);s=E(e,i),e.forEach(o),this.h()},h(){p(l,"class","pl-3")},m(t,e){g(t,l,e),_(l,s)},p(t,e){e&1&&i!==(i=t[8]+"")&&N(s,i)},d(t){t&&o(l)}}}function Q(n){let l,i=n[8]+"",s;return{c(){l=m("li"),s=y(i),this.h()},l(t){l=d(t,"LI",{class:!0});var e=v(l);s=E(e,i),e.forEach(o),this.h()},h(){p(l,"class","pl-3")},m(t,e){g(t,l,e),_(l,s)},p(t,e){e&1&&i!==(i=t[8]+"")&&N(s,i)},d(t){t&&o(l)}}}function W(n){let l,i=n[5].description+"",s;return{c(){l=m("figcaption"),s=y(i),this.h()},l(t){l=d(t,"FIGCAPTION",{class:!0});var e=v(l);s=E(e,i),e.forEach(o),this.h()},h(){p(l,"class","svelte-uwtz2e")},m(t,e){g(t,l,e),_(l,s)},p(t,e){e&1&&i!==(i=t[5].description+"")&&N(s,i)},d(t){t&&o(l)}}}function pe(n){let l,i=n[5].text+"",s;return{c(){l=m("p"),s=y(i),this.h()},l(t){l=d(t,"P",{class:!0});var e=v(l);s=E(e,i),e.forEach(o),this.h()},h(){p(l,"class","text-justify")},m(t,e){g(t,l,e),_(l,s)},p(t,e){e&1&&i!==(i=t[5].text+"")&&N(s,i)},d(t){t&&o(l)}}}function me(n){let l,i=n[5].title+"",s,t,e,c=n[5].text+"",r;return{c(){l=m("h2"),s=y(i),t=I(),e=m("p"),r=y(c),this.h()},l(a){l=d(a,"H2",{class:!0});var f=v(l);s=E(f,i),f.forEach(o),t=w(a),e=d(a,"P",{});var P=v(e);r=E(P,c),P.forEach(o),this.h()},h(){p(l,"class","text-gray-900 font-semibold font-display svelte-uwtz2e")},m(a,f){g(a,l,f),_(l,s),g(a,t,f),g(a,e,f),_(e,r)},p(a,f){f&1&&i!==(i=a[5].title+"")&&N(s,i),f&1&&c!==(c=a[5].text+"")&&N(r,c)},d(a){a&&o(l),a&&o(t),a&&o(e)}}}function X(n){let l;function i(e,c){if(e[5].type==="paragraph")return _e;if(e[5].type==="image")return fe;if(e[5].type==="list"&&e[5].items)return oe}let s=i(n),t=s&&s(n);return{c(){t&&t.c(),l=T()},l(e){t&&t.l(e),l=T()},m(e,c){t&&t.m(e,c),g(e,l,c)},p(e,c){s===(s=i(e))&&t?t.p(e,c):(t&&t.d(1),t=s&&s(e),t&&(t.c(),t.m(l.parentNode,l)))},d(e){t&&t.d(e),e&&o(l)}}}function de(n){let l,i,s,t,e,c,r,a,f,P,V,z,q,U,A,S,D,C,L=n[0],b=[];for(let h=0;h<L.length;h+=1)b[h]=X(M(n,L,h));return{c(){l=m("div"),i=m("div"),s=m("button"),t=m("i"),e=I(),c=m("span"),r=y("Zurück"),a=I(),f=m("h1"),P=y(n[2]),V=I(),z=m("p"),q=y("von "),U=y(n[1]),A=I(),S=m("div");for(let h=0;h<b.length;h+=1)b[h].c();this.h()},l(h){l=d(h,"DIV",{class:!0});var k=v(l);i=d(k,"DIV",{class:!0});var u=v(i);s=d(u,"BUTTON",{class:!0});var $=v(s);t=d($,"I",{class:!0}),v(t).forEach(o),e=w($),c=d($,"SPAN",{class:!0});var H=v(c);r=E(H,"Zurück"),H.forEach(o),$.forEach(o),a=w(u),f=d(u,"H1",{class:!0});var Z=v(f);P=E(Z,n[2]),Z.forEach(o),V=w(u),z=d(u,"P",{class:!0});var F=v(z);q=E(F,"von "),U=E(F,n[1]),F.forEach(o),u.forEach(o),A=w(k),S=d(k,"DIV",{class:!0});var j=v(S);for(let G=0;G<b.length;G+=1)b[G].l(j);j.forEach(o),k.forEach(o),this.h()},h(){p(t,"class","i-ph-arrow-bend-up-left"),p(c,"class","ml-2"),p(s,"class","inline-flex items-center mb-1 text-xs"),p(f,"class","text-3xl gray-900 font-semibold font-display mb-2 sm:text-4xl svelte-uwtz2e"),p(z,"class","text-sm tracking-wide"),p(i,"class","not-prose"),p(S,"class","prose mx-auto mt-12"),p(l,"class","prose break-words mx-auto")},m(h,k){g(h,l,k),_(l,i),_(i,s),_(s,t),_(s,e),_(s,c),_(c,r),_(i,a),_(i,f),_(f,P),_(i,V),_(i,z),_(z,q),_(z,U),_(l,A),_(l,S);for(let u=0;u<b.length;u+=1)b[u].m(S,null);D||(C=ne(s,"click",n[4]),D=!0)},p(h,k){if(k&4&&N(P,h[2]),k&2&&N(U,h[1]),k&1){L=h[0];let u;for(u=0;u<L.length;u+=1){const $=M(h,L,u);b[u]?b[u].p($,k):(b[u]=X($),b[u].c(),b[u].m(S,null))}for(;u<b.length;u+=1)b[u].d(1);b.length=L.length}},d(h){h&&o(l),O(b,h),D=!1,C()}}}function ve(n){let l,i;return l=new ae({props:{$$slots:{default:[de]},$$scope:{ctx:n}}}),{c(){te(l.$$.fragment)},l(s){le(l.$$.fragment,s)},m(s,t){se(l,s,t),i=!0},p(s,[t]){const e={};t&8199&&(e.$$scope={dirty:t,ctx:s}),l.$set(e)},i(s){i||(ie(l.$$.fragment,s),i=!0)},o(s){re(l.$$.fragment,s),i=!1},d(s){ce(l,s)}}}function be(n,l,i){let s,t,e,{data:c}=l;const r=()=>history.back();return n.$$set=a=>{"data"in a&&i(3,c=a.data)},n.$$.update=()=>{n.$$.dirty&8&&i(2,{title:s,author:t,blocks:e}=c,s,(i(1,t),i(3,c)),(i(0,e),i(3,c)))},[e,t,s,c,r]}class ye extends Y{constructor(l){super(),x(this,l,be,ve,ee,{data:3})}}export{ye as default};
