import{S as y,i as k,s as v,e as B,t as D,c as x,a as O,g as C,d as g,b as w,a4 as S,f as T,E,L,F as _,aO as N}from"./vendor-1f8923b3.js";import{k as q}from"./Brush.html-a62bf58f.js";import{d as z}from"./downloadBlob-f865e357.js";function F(r){let t,o,e,p;return{c(){t=B("button"),o=D("Download \xA0\xA0\xA0\xA0\xA0"),this.h()},l(l){t=x(l,"BUTTON",{title:!0,class:!0,style:!0});var c=O(t);o=C(c,"Download \xA0\xA0\xA0\xA0\xA0"),c.forEach(g),this.h()},h(){t.disabled=r[0],w(t,"title","download zip file"),w(t,"class","icon svelte-1gef78k"),S(t,"background-image","url(/icons/download.svg)")},m(l,c){T(l,t,c),E(t,o),e||(p=L(t,"click",r[1]),e=!0)},p(l,[c]){c&1&&(t.disabled=l[0])},i:_,o:_,d(l){l&&g(t),e=!1,p()}}}function I(r=""){return(r.match(/from\s'(.+)'?/gm)||[]).map(e=>e.replace(/(from |'|"|;)/g,"")).filter(e=>!e.startsWith("."))}function J(r,t,o){let{data:e}=t,{slug:p}=t,{ssr:l=!1}=t,c=!1;const f=[e.main,...e.components,...e.componentComponents].reduce((a,n)=>a.concat(I(n.contents)),[]).reduce((a,n)=>(a.includes(n)||a.push(n),a),[]);async function b(){o(0,c=!0);const a=new Date().getTime(),n=await(await window.fetch(`/svelte-app.json?${a}`)).json(),d=await(await window.fetch(`/deps.json?${a}`)).json();if(f.length>0){const s=n.findIndex(({path:i})=>i==="package.json"),u=JSON.parse(n[s].data),h={},m={};f.forEach(i=>{if(i==="layercake")m[i]=d[i];else{if(i==="svelte")return;h[i]=d[i]}d[i]||window.alert(`Missing dependency, add "${i}" to layercake.graphic's package.json`)}),Object.assign(u.dependencies,h),Object.assign(u.devDependencies,m),n[s].data=JSON.stringify(u,null,"  ")}n.push(...e.components.map(s=>({path:`src/routes/${s.title.replace("./","")}`,data:s.contents}))),n.push(...e.modules.map(s=>({path:`src/routes/${s.title.replace("./","")}`,data:s.contents}))),n.push(...e.componentModules.map(s=>({path:`src/routes/${s.title.replace("../","")}`,data:s.contents}))),n.push(...e.componentComponents.map(s=>({path:`src/routes/${s.title}`,data:s.contents}))),n.push(...e.csvs.map(s=>({path:`src/routes/${s.title.replace("../","")}`,data:s.contents}))),n.push(...e.jsons.map(s=>({path:`src/routes/${s.title.replace("../","")}`,data:s.contents}))),n.push({path:"src/routes/index.svelte",data:e.main.contents}),console.log("here");const j=q(n.filter(Boolean),"path",!1);z(N(j),`layercake-${l?"ssr-":""}${p}.zip`),o(0,c=!1)}return r.$$set=a=>{"data"in a&&o(2,e=a.data),"slug"in a&&o(3,p=a.slug),"ssr"in a&&o(4,l=a.ssr)},[c,b,e,p,l]}class U extends y{constructor(t){super();k(this,t,J,F,v,{data:2,slug:3,ssr:4})}}function W(r){const t=r.split("/"),o=t[t.length-1].split(".");return o.pop(),o.join(".").toLowerCase()}export{U as D,W as c};