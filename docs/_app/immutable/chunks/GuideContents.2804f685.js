import{s as D,f as b,g as p,h as k,d,j as _,i as S,E as y,B,l as I,a as C,m as U,c as A,x as m,z as w}from"./scheduler.101db06a.js";import{e as G}from"./each.af0871f9.js";import{S as F,i as H}from"./index.5bc76508.js";function L(a,e,i){const t=a.slice();return t[5]=e[i],t}function j(a,e,i){const t=a.slice();return t[8]=e[i],t}function q(a){let e,i=a[8].title+"",t,l,c,s;return{c(){e=b("a"),t=I(i),this.h()},l(h){e=p(h,"A",{class:!0,href:!0});var n=k(e);t=U(n,i),n.forEach(d),this.h()},h(){_(e,"class",l="subsection "+(a[8].slug===a[0]?"active":"")+" svelte-7hddv0"),_(e,"href","/guide#"+a[8].slug)},m(h,n){S(h,e,n),m(e,t),c||(s=w(e,"click",a[2]),c=!0)},p(h,n){n&1&&l!==(l="subsection "+(h[8].slug===h[0]?"active":"")+" svelte-7hddv0")&&_(e,"class",l)},d(h){h&&d(e),c=!1,s()}}}function z(a){let e,i,t=a[5].metadata.title+"",l,c,s,h,n,E,g=G(a[5].subsections),r=[];for(let o=0;o<g.length;o+=1)r[o]=q(j(a,g,o));return{c(){e=b("li"),i=b("a"),l=I(t),s=C();for(let o=0;o<r.length;o+=1)r[o].c();h=C(),this.h()},l(o){e=p(o,"LI",{class:!0});var f=k(e);i=p(f,"A",{class:!0,href:!0});var u=k(i);l=U(u,t),u.forEach(d),s=A(f);for(let v=0;v<r.length;v+=1)r[v].l(f);h=A(f),f.forEach(d),this.h()},h(){_(i,"class",c="section "+(a[5].slug===a[0]?"active":"")+" svelte-7hddv0"),_(i,"href","/guide#"+a[5].slug),_(e,"class","svelte-7hddv0")},m(o,f){S(o,e,f),m(e,i),m(i,l),m(e,s);for(let u=0;u<r.length;u+=1)r[u]&&r[u].m(e,null);m(e,h),n||(E=w(i,"click",a[2]),n=!0)},p(o,f){if(f&1&&c!==(c="section "+(o[5].slug===o[0]?"active":"")+" svelte-7hddv0")&&_(i,"class",c),f&7){g=G(o[5].subsections);let u;for(u=0;u<g.length;u+=1){const v=j(o,g,u);r[u]?r[u].p(v,f):(r[u]=q(v),r[u].c(),r[u].m(e,h))}for(;u<r.length;u+=1)r[u].d(1);r.length=g.length}},d(o){o&&d(e),B(r,o),n=!1,E()}}}function J(a){let e,i=G(a[1]),t=[];for(let l=0;l<i.length;l+=1)t[l]=z(L(a,i,l));return{c(){e=b("ul");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=p(l,"UL",{class:!0});var c=k(e);for(let s=0;s<t.length;s+=1)t[s].l(c);c.forEach(d),this.h()},h(){_(e,"class","guide-toc svelte-7hddv0")},m(l,c){S(l,e,c);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null)},p(l,[c]){if(c&7){i=G(l[1]);let s;for(s=0;s<i.length;s+=1){const h=L(l,i,s);t[s]?t[s].p(h,c):(t[s]=z(h),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=i.length}},i:y,o:y,d(l){l&&d(e),B(t,l)}}}function K(a,e,i){let{open:t=!1}=e,{activeGuideSection:l=void 0}=e,{sections:c=[]}=e;const s=c.map(n=>({metadata:n.metadata,subsections:n.subsections,slug:n.slug}));function h(){i(3,t=!1)}return a.$$set=n=>{"open"in n&&i(3,t=n.open),"activeGuideSection"in n&&i(0,l=n.activeGuideSection),"sections"in n&&i(4,c=n.sections)},[l,s,h,t,c]}class P extends F{constructor(e){super(),H(this,e,K,J,D,{open:3,activeGuideSection:0,sections:4})}}export{P as G};
