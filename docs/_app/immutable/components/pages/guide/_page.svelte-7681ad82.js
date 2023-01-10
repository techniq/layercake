import{S as W,i as X,s as Z,F as K,G as $,k as S,a as q,w as x,q as R,aa as ee,l as A,h as _,c as z,m as L,x as te,r as U,n as r,J as g,b as D,y as le,M as se,f as ae,t as ne,z as ie,N as j,j as oe,u as Q,ab as ce,ac as re}from"../../../chunks/index-bab5e66b.js";import{G as ue}from"../../../chunks/GuideContents-df5a5a2a.js";function F(i,l,t){const u=i.slice();return u[10]=l[t],u}function J(i,l,t){const u=i.slice();return u[10]=l[t],u}function O(i){let l,t,u,o=i[10].slug.replace(/^\w/,Y).replaceAll("-"," ")+"",f,d;return{c(){l=S("li"),t=S("a"),u=R("- "),f=R(o),this.h()},l(s){l=A(s,"LI",{});var n=L(l);t=A(n,"A",{href:!0,class:!0});var h=L(t);u=U(h,"- "),f=U(h,o),h.forEach(_),n.forEach(_),this.h()},h(){r(t,"href",d="#"+i[10].slug),r(t,"class","svelte-18b10gv")},m(s,n){D(s,l,n),g(l,t),g(t,u),g(t,f)},p(s,n){n&1&&o!==(o=s[10].slug.replace(/^\w/,Y).replaceAll("-"," ")+"")&&Q(f,o),n&1&&d!==(d="#"+s[10].slug)&&r(t,"href",d)},d(s){s&&_(l)}}}function P(i){let l,t,u=i[10].metadata.title+"",o,f,d,s,n,h,G,C,T=i[10].html+"",c,E;return{c(){l=S("section"),t=S("h2"),o=R(u),f=q(),d=S("small"),s=S("a"),n=R("edit this section"),G=q(),C=new ce(!1),c=q(),this.h()},l(p){l=A(p,"SECTION",{id:!0,class:!0});var v=L(l);t=A(v,"H2",{class:!0});var H=L(t);o=U(H,u),f=z(H),d=A(H,"SMALL",{class:!0});var I=L(d);s=A(I,"A",{href:!0,target:!0,rel:!0,class:!0});var m=L(s);n=U(m,"edit this section"),m.forEach(_),I.forEach(_),H.forEach(_),G=z(v),C=re(v,!1),c=z(v),v.forEach(_),this.h()},h(){r(s,"href",h="https://github.com/mhkeller/layercake/edit/master/src/content/guide/"+i[10].file),r(s,"target","_blank"),r(s,"rel","noreferrer"),r(s,"class","svelte-18b10gv"),r(d,"class","svelte-18b10gv"),r(t,"class","svelte-18b10gv"),C.a=c,r(l,"id",E=i[10].slug),r(l,"class","svelte-18b10gv")},m(p,v){D(p,l,v),g(l,t),g(t,o),g(t,f),g(t,d),g(d,s),g(s,n),g(l,G),C.m(T,l),g(l,c)},p(p,v){v&1&&u!==(u=p[10].metadata.title+"")&&Q(o,u),v&1&&h!==(h="https://github.com/mhkeller/layercake/edit/master/src/content/guide/"+p[10].file)&&r(s,"href",h),v&1&&T!==(T=p[10].html+"")&&C.p(T),v&1&&E!==(E=p[10].slug)&&r(l,"id",E)},d(p){p&&_(l)}}}function he(i){let l,t,u,o,f,d,s,n,h,G,C,T,c,E,p;function v(e){i[3](e)}let H={sections:i[0].sections};i[2]!==void 0&&(H.activeGuideSection=i[2]),f=new ue({props:H}),K.push(()=>$(f,"activeGuideSection",v,i[2]));let I=i[0].sections,m=[];for(let e=0;e<I.length;e+=1)m[e]=O(J(i,I,e));let B=i[0].sections,b=[];for(let e=0;e<B.length;e+=1)b[e]=P(F(i,B,e));return{c(){l=S("meta"),t=S("meta"),u=q(),o=S("sidebar"),x(f.$$.fragment),s=q(),n=S("div"),h=S("div"),G=S("h3"),C=R("Table of contents"),T=q(),c=S("ul");for(let e=0;e<m.length;e+=1)m[e].c();E=q();for(let e=0;e<b.length;e+=1)b[e].c();this.h()},l(e){const w=ee("svelte-133w6f",document.head);l=A(w,"META",{name:!0,content:!0}),t=A(w,"META",{name:!0,content:!0}),w.forEach(_),u=z(e),o=A(e,"SIDEBAR",{class:!0});var k=L(o);te(f.$$.fragment,k),k.forEach(_),s=z(e),n=A(e,"DIV",{id:!0,class:!0});var a=L(n);h=A(a,"DIV",{id:!0,class:!0});var y=L(h);G=A(y,"H3",{class:!0});var N=L(G);C=U(N,"Table of contents"),N.forEach(_),T=z(y),c=A(y,"UL",{class:!0});var V=L(c);for(let M=0;M<m.length;M+=1)m[M].l(V);V.forEach(_),y.forEach(_),E=z(a);for(let M=0;M<b.length;M+=1)b[M].l(a);a.forEach(_),this.h()},h(){document.title="LayerCake - Guide",r(l,"name","og:title"),r(l,"content","Layer Cake — Guide"),r(t,"name","twitter:title"),r(t,"content","Layer Cake — Guide"),r(o,"class","svelte-18b10gv"),r(G,"class","svelte-18b10gv"),r(c,"class","svelte-18b10gv"),r(h,"id","toc"),r(h,"class","svelte-18b10gv"),r(n,"id","container"),r(n,"class","content svelte-18b10gv")},m(e,w){g(document.head,l),g(document.head,t),D(e,u,w),D(e,o,w),le(f,o,null),D(e,s,w),D(e,n,w),g(n,h),g(h,G),g(G,C),g(h,T),g(h,c);for(let k=0;k<m.length;k+=1)m[k].m(c,null);g(n,E);for(let k=0;k<b.length;k+=1)b[k].m(n,null);i[4](n),p=!0},p(e,[w]){const k={};if(w&1&&(k.sections=e[0].sections),!d&&w&4&&(d=!0,k.activeGuideSection=e[2],se(()=>d=!1)),f.$set(k),w&1){I=e[0].sections;let a;for(a=0;a<I.length;a+=1){const y=J(e,I,a);m[a]?m[a].p(y,w):(m[a]=O(y),m[a].c(),m[a].m(c,null))}for(;a<m.length;a+=1)m[a].d(1);m.length=I.length}if(w&1){B=e[0].sections;let a;for(a=0;a<B.length;a+=1){const y=F(e,B,a);b[a]?b[a].p(y,w):(b[a]=P(y),b[a].c(),b[a].m(n,null))}for(;a<b.length;a+=1)b[a].d(1);b.length=B.length}},i(e){p||(ae(f.$$.fragment,e),p=!0)},o(e){ne(f.$$.fragment,e),p=!1},d(e){_(l),_(t),e&&_(u),e&&_(o),ie(f),e&&_(s),e&&_(n),j(m,e),j(b,e),i[4](null)}}}const Y=i=>i.toUpperCase();function fe(i,l,t){let{data:u}=l,o,f=[],d="introduction",s,n=[];oe(()=>{typeof window<"u"&&(n=o.querySelectorAll("[id]"),d=window.location.hash.slice(1),t(2,s=d),h(),G(),window.addEventListener("scroll",G,!0),window.addEventListener("resize",h,!0),setTimeout(h,1e3),setTimeout(h,5e3))});function h(){if(o){const{top:c}=o.getBoundingClientRect();f=[].map.call(n,E=>E.getBoundingClientRect().top-c)}}function G(){const c=-window.scrollY;let E=n.length;for(;E--;)if(f[E]+c<100){const p=n[E],{id:v}=p;v!==d&&(t(2,s=v),d=v);return}}function C(c){s=c,t(2,s)}function T(c){K[c?"unshift":"push"](()=>{o=c,t(1,o)})}return i.$$set=c=>{"data"in c&&t(0,u=c.data)},[u,o,s,C,T]}class me extends W{constructor(l){super(),X(this,l,fe,he,Z,{data:0})}}export{me as default};
