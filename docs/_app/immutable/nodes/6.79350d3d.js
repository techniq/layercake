import{e as Le}from"../chunks/index.93323930.js";import{s as Ie,q as he,a as j,f as y,l as oe,K as $e,d as p,c as q,g as D,h as C,m as re,j as i,w as _e,i as U,x as m,z as De,n as Ce,B as me,k as pe}from"../chunks/scheduler.101db06a.js";import{S as Me,i as Se,b as Z,d as ve,m as ee,t as te,c as Te,a as le,e as ae,g as He}from"../chunks/index.5bc76508.js";import{M as Ve,g as je}from"../chunks/downloadBlob.608f86a9.js";import{e as Q}from"../chunks/each.af0871f9.js";import{H as se,h as ge}from"../chunks/hljsDefineSvelte.348e44ec.js";import{D as qe,c as J}from"../chunks/cleanTitle.234f9993.js";import{e as Pe}from"../chunks/_examples_ssr.690d9380.js";async function xe({fetch:l,params:a}){const s=`${a.slug}.json`,t=await l(s),o=await t.json();if(t.status===200)return{slug:a.slug,content:o,active:"+page"};throw Le(500,`Could not load ${s}: ${o.message}`)}const Ne=Object.freeze(Object.defineProperty({__proto__:null,load:xe},Symbol.toStringTag,{value:"Module"}));const{document:ne}=je;function ke(l,a,s){const t=l.slice();return t[12]=a[s],t}function we(l,a,s){const t=l.slice();return t[12]=a[s],t}function be(l){let a,s=l[5](l[1].dek)+"";return{c(){a=y("div"),this.h()},l(t){a=D(t,"DIV",{class:!0});var o=C(a);o.forEach(p),this.h()},h(){i(a,"class","dek svelte-4xax0d")},m(t,o){U(t,a,o),a.innerHTML=s},p(t,o){o&2&&s!==(s=t[5](t[1].dek)+"")&&(a.innerHTML=s)},d(t){t&&p(a)}}}function Ee(l){let a,s=l[12].title+"",t,o,c,d;function _(){return l[9](l[12])}return{c(){a=y("li"),t=oe(s),this.h()},l(f){a=D(f,"LI",{class:!0});var v=C(a);t=re(v,s),v.forEach(p),this.h()},h(){i(a,"class",o="tab "+(l[2]===J(l[12].title)?"active":"")+" svelte-4xax0d")},m(f,v){U(f,a,v),m(a,t),c||(d=De(a,"click",_),c=!0)},p(f,v){l=f,v&8&&s!==(s=l[12].title+"")&&Ce(t,s),v&12&&o!==(o="tab "+(l[2]===J(l[12].title)?"active":"")+" svelte-4xax0d")&&i(a,"class",o)},d(f){f&&p(a),c=!1,d()}}}function ye(l){let a,s,t=l[6](l[12].contents,l[12].title)+"",o;return{c(){a=y("div"),s=y("pre"),o=j(),this.h()},l(c){a=D(c,"DIV",{class:!0,style:!0});var d=C(a);s=D(d,"PRE",{class:!0});var _=C(s);_.forEach(p),o=q(d),d.forEach(p),this.h()},h(){i(s,"class","svelte-4xax0d"),i(a,"class","contents"),pe(a,"display",l[2]===J(l[12].title)?"block":"none")},m(c,d){U(c,a,d),m(a,s),s.innerHTML=t,m(a,o)},p(c,d){d&8&&t!==(t=c[6](c[12].contents,c[12].title)+"")&&(s.innerHTML=t),d&12&&pe(a,"display",c[2]===J(c[12].title)?"block":"none")},d(c){c&&p(a)}}}function ze(l){let a,s,t,o,c=l[4].title+"",d,_,f,v,K,L,u,x,R,h,g,S,T,I,H,W,$,z,X,F,M,Y,ie;ne.title=a=l[4].title;var B=l[4].component;function ce(e){return{}}B&&(u=he(B,ce())),g=new qe({props:{data:l[1],slug:l[0],ssr:!0}});let E=l[1].dek&&be(l),O=Q(l[3]),k=[];for(let e=0;e<O.length;e+=1)k[e]=Ee(we(l,O,e));let A=Q(l[3]),w=[];for(let e=0;e<A.length;e+=1)w[e]=ye(ke(l,A,e));return{c(){s=j(),t=y("div"),o=y("h1"),d=oe(c),_=y("a"),f=oe("Edit"),K=j(),L=y("div"),u&&Z(u.$$.fragment),R=j(),h=y("div"),Z(g.$$.fragment),S=j(),E&&E.c(),T=j(),I=y("div"),H=y("ul");for(let e=0;e<k.length;e+=1)k[e].c();W=j(),$=y("div"),z=y("div"),X=j();for(let e=0;e<w.length;e+=1)w[e].c();this.h()},l(e){$e("svelte-1ynzqk4",ne.head).forEach(p),s=q(e),t=D(e,"DIV",{class:!0,"data-label":!0});var r=C(t);o=D(r,"H1",{});var n=C(o);d=re(n,c),_=D(n,"A",{class:!0,href:!0,target:!0,rel:!0});var V=C(_);f=re(V,"Edit"),V.forEach(p),n.forEach(p),K=q(r),L=D(r,"DIV",{class:!0,"data-slug":!0});var de=C(L);u&&ve(u.$$.fragment,de),de.forEach(p),R=q(r),h=D(r,"DIV",{class:!0});var ue=C(h);ve(g.$$.fragment,ue),ue.forEach(p),S=q(r),E&&E.l(r),T=q(r),I=D(r,"DIV",{id:!0,class:!0});var G=C(I);H=D(G,"UL",{id:!0,class:!0});var fe=C(H);for(let P=0;P<k.length;P+=1)k[P].l(fe);fe.forEach(p),W=q(G),$=D(G,"DIV",{id:!0,class:!0});var N=C($);z=D(N,"DIV",{class:!0}),C(z).forEach(p),X=q(N);for(let P=0;P<w.length;P+=1)w[P].l(N);N.forEach(p),G.forEach(p),r.forEach(p),this.h()},h(){i(_,"class","edit-repl svelte-4xax0d"),i(_,"href",v="https://svelte.dev/repl/"+l[4].replPath),i(_,"target","_blank"),i(_,"rel","noreferrer"),i(L,"class","chart-hero svelte-4xax0d"),i(L,"data-slug",x=l[0].toLowerCase()),i(h,"class","download svelte-4xax0d"),i(H,"id","page-nav"),i(H,"class","svelte-4xax0d"),i(z,"class","copy svelte-4xax0d"),i($,"id","contents-container"),i($,"class","svelte-4xax0d"),i(I,"id","pages"),i(I,"class",F=_e(l[1].dek?"has-dek":"")+" svelte-4xax0d"),i(t,"class","main svelte-4xax0d"),i(t,"data-label","Server-side")},m(e,b){U(e,s,b),U(e,t,b),m(t,o),m(o,d),m(o,_),m(_,f),m(t,K),m(t,L),u&&ee(u,L,null),m(t,R),m(t,h),ee(g,h,null),m(t,S),E&&E.m(t,null),m(t,T),m(t,I),m(I,H);for(let r=0;r<k.length;r+=1)k[r]&&k[r].m(H,null);m(I,W),m(I,$),m($,z),m($,X);for(let r=0;r<w.length;r+=1)w[r]&&w[r].m($,null);M=!0,Y||(ie=De(z,"click",l[7]),Y=!0)},p(e,[b]){if((!M||b&16)&&a!==(a=e[4].title)&&(ne.title=a),(!M||b&16)&&c!==(c=e[4].title+"")&&Ce(d,c),(!M||b&16&&v!==(v="https://svelte.dev/repl/"+e[4].replPath))&&i(_,"href",v),b&16&&B!==(B=e[4].component)){if(u){He();const n=u;te(n.$$.fragment,1,0,()=>{ae(n,1)}),Te()}B?(u=he(B,ce()),Z(u.$$.fragment),le(u.$$.fragment,1),ee(u,L,null)):u=null}(!M||b&1&&x!==(x=e[0].toLowerCase()))&&i(L,"data-slug",x);const r={};if(b&2&&(r.data=e[1]),b&1&&(r.slug=e[0]),g.$set(r),e[1].dek?E?E.p(e,b):(E=be(e),E.c(),E.m(t,T)):E&&(E.d(1),E=null),b&12){O=Q(e[3]);let n;for(n=0;n<O.length;n+=1){const V=we(e,O,n);k[n]?k[n].p(V,b):(k[n]=Ee(V),k[n].c(),k[n].m(H,null))}for(;n<k.length;n+=1)k[n].d(1);k.length=O.length}if(b&76){A=Q(e[3]);let n;for(n=0;n<A.length;n+=1){const V=ke(e,A,n);w[n]?w[n].p(V,b):(w[n]=ye(V),w[n].c(),w[n].m($,null))}for(;n<w.length;n+=1)w[n].d(1);w.length=A.length}(!M||b&2&&F!==(F=_e(e[1].dek?"has-dek":"")+" svelte-4xax0d"))&&i(I,"class",F)},i(e){M||(u&&le(u.$$.fragment,e),le(g.$$.fragment,e),M=!0)},o(e){u&&te(u.$$.fragment,e),te(g.$$.fragment,e),M=!1},d(e){e&&(p(s),p(t)),u&&ae(u),ae(g),E&&E.d(),me(k,e),me(w,e),Y=!1,ie()}}}function Be(l,a,s){let t,o;se.registerLanguage("svelte",ge),ge(se);const c=new Ve({html:!0,linkify:!0});let{data:d}=a,{slug:_,content:f,active:v}=d;function K(h){return c.render(h)}function L(h,g){const S=g.split(".");let T=S[S.length-1];return T==="csv"&&(T="diff"),se.highlight(h,{language:T}).value}const u=new Map;Pe.forEach(h=>{u.set(h.slug.toLowerCase(),h)});function x(){const h=t.filter(g=>J(g.title)===v)[0].contents;if(window.clipboardData&&window.clipboardData.setData)return window.clipboardData.setData("Text",h);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){const g=document.createElement("textarea");g.textContent=h,g.style.position="fixed",document.body.appendChild(g),g.select();try{return document.execCommand("copy")}catch(S){return console.warn("Copy to clipboard failed.",S),!1}finally{document.body.removeChild(g)}}}const R=h=>s(2,v=J(h.title));return l.$$set=h=>{"data"in h&&s(8,d=h.data)},l.$$.update=()=>{l.$$.dirty&256&&s(0,{slug:_,content:f,active:v}=d,_,(s(1,f),s(8,d)),(s(2,v),s(8,d))),l.$$.dirty&2&&s(3,t=[f.main].concat(f.components).concat(f.componentModules).concat(f.modules).concat(f.componentComponents).concat(f.jsons).concat(f.csvs)),l.$$.dirty&1&&s(4,o=u.get(_.toLowerCase()))},[_,f,v,t,o,K,L,x,d,R]}class Qe extends Me{constructor(a){super(),Se(this,a,Be,ze,Ie,{data:8})}}export{Qe as component,Ne as universal};