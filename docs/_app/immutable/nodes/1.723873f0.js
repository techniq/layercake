import{s as b,f as u,l as h,a as S,g as d,h as v,m as g,d as m,c as q,i as _,x as E,n as x,E as $,D as y}from"../chunks/scheduler.101db06a.js";import{S as C,i as D}from"../chunks/index.5bc76508.js";import{p as H}from"../chunks/stores.58f15e05.js";function P(i){var f;let a,s=i[0].status+"",r,o,n,p=((f=i[0].error)==null?void 0:f.message)+"",c;return{c(){a=u("h1"),r=h(s),o=S(),n=u("p"),c=h(p)},l(e){a=d(e,"H1",{});var t=v(a);r=g(t,s),t.forEach(m),o=q(e),n=d(e,"P",{});var l=v(n);c=g(l,p),l.forEach(m)},m(e,t){_(e,a,t),E(a,r),_(e,o,t),_(e,n,t),E(n,c)},p(e,[t]){var l;t&1&&s!==(s=e[0].status+"")&&x(r,s),t&1&&p!==(p=((l=e[0].error)==null?void 0:l.message)+"")&&x(c,p)},i:$,o:$,d(e){e&&(m(a),m(o),m(n))}}}function j(i,a,s){let r;return y(i,H,o=>s(0,r=o)),[r]}class A extends C{constructor(a){super(),D(this,a,j,P,b,{})}}export{A as component};
