import{s as ve,f as _,a as L,K as de,g as b,d as g,c as S,h as w,r as O,j as r,x as o,i as z,B as te,q as R,l as U,m as X,L as ue}from"../chunks/scheduler.101db06a.js";import{S as me,i as ge,a as H,c as Y,t as M,b as W,d as ce,m as F,g as K,e as N}from"../chunks/index.5bc76508.js";import{e as P}from"../chunks/each.af0871f9.js";import{H as Q,h as ae}from"../chunks/hljsDefineSvelte.348e44ec.js";import{e as se}from"../chunks/_examples.d2017060.js";import{e as le}from"../chunks/_examples_ssr.f286f231.js";function re(m,a,n){const i=m.slice();return i[1]=a[n],i}function oe(m,a,n){const i=m.slice();return i[1]=a[n],i}function ne(m){let a,n,i,v=m[1].title+"",$,E,d,x,C,t,y,k;var j=m[1].component;function A(l){return{}}return j&&(t=R(j,A())),{c(){a=_("div"),n=_("h4"),i=_("a"),$=U(v),E=L(),d=_("a"),x=U("Edit"),C=L(),t&&W(t.$$.fragment),y=L(),this.h()},l(l){a=b(l,"DIV",{class:!0});var u=w(a);n=b(u,"H4",{class:!0});var h=w(n);i=b(h,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var I=w(i);$=X(I,v),I.forEach(g),E=S(h),d=b(h,"A",{class:!0,href:!0,target:!0,rel:!0});var T=w(d);x=X(T,"Edit"),T.forEach(g),h.forEach(g),C=S(u),t&&ce(t.$$.fragment,u),y=S(u),u.forEach(g),this.h()},h(){r(i,"sveltekit:prefetch",""),r(i,"href","/example/"+m[1].slug),r(i,"class","svelte-9objxt"),r(d,"class","edit-repl svelte-9objxt"),r(d,"href","https://svelte.dev/repl/"+m[1].replPath),r(d,"target","_blank"),r(d,"rel","noreferrer"),r(n,"class","title svelte-9objxt"),r(a,"class","gallery-item svelte-9objxt")},m(l,u){z(l,a,u),o(a,n),o(n,i),o(i,$),o(n,E),o(n,d),o(d,x),o(a,C),t&&F(t,a,null),o(a,y),k=!0},p(l,u){if(j!==(j=l[1].component)){if(t){K();const h=t;M(h.$$.fragment,1,0,()=>{N(h,1)}),Y()}j?(t=R(j,A()),W(t.$$.fragment),H(t.$$.fragment,1),F(t,a,y)):t=null}},i(l){k||(t&&H(t.$$.fragment,l),k=!0)},o(l){t&&M(t.$$.fragment,l),k=!1},d(l){l&&g(a),t&&N(t)}}}function ie(m){let a,n,i,v=m[1].title+"",$,E,d,x,C,t,y,k;var j=m[1].component;function A(l){return{}}return j&&(t=R(j,A())),{c(){a=_("div"),n=_("h4"),i=_("a"),$=U(v),E=L(),d=_("a"),x=U("Edit"),C=L(),t&&W(t.$$.fragment),y=L(),this.h()},l(l){a=b(l,"DIV",{class:!0});var u=w(a);n=b(u,"H4",{class:!0});var h=w(n);i=b(h,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var I=w(i);$=X(I,v),I.forEach(g),E=S(h),d=b(h,"A",{class:!0,href:!0,target:!0,rel:!0});var T=w(d);x=X(T,"Edit"),T.forEach(g),h.forEach(g),C=S(u),t&&ce(t.$$.fragment,u),y=S(u),u.forEach(g),this.h()},h(){r(i,"sveltekit:prefetch",""),r(i,"href","/example-ssr/"+m[1].slug),r(i,"class","svelte-9objxt"),r(d,"class","edit-repl svelte-9objxt"),r(d,"href","https://svelte.dev/repl/"+m[1].replPath),r(d,"target","_blank"),r(d,"rel","noreferrer"),r(n,"class","title svelte-9objxt"),r(a,"class","gallery-item svelte-9objxt"),ue(a,"scaled",m[1].title.toLowerCase().includes("map"))},m(l,u){z(l,a,u),o(a,n),o(n,i),o(i,$),o(n,E),o(n,d),o(d,x),o(a,C),t&&F(t,a,null),o(a,y),k=!0},p(l,u){if(j!==(j=l[1].component)){if(t){K();const h=t;M(h.$$.fragment,1,0,()=>{N(h,1)}),Y()}j?(t=R(j,A()),W(t.$$.fragment),H(t.$$.fragment,1),F(t,a,y)):t=null}},i(l){k||(t&&H(t.$$.fragment,l),k=!0)},o(l){t&&M(t.$$.fragment,l),k=!1},d(l){l&&g(a),t&&N(t)}}}function _e(m){let a,n,i,v,$,E='<div id="logo" class="svelte-9objxt"></div> <h1 class="svelte-9objxt">Layer Cake</h1>',d,x,C='<p class="svelte-9objxt">Layer Cake is a graphics framework for <a href="https://svelte.dev" target="_blank" rel="noreferrer" class="svelte-9objxt">Svelte</a>. It uses the measurements of your target div and your data extents to create scales that <span class="strong svelte-9objxt">stay synced</span> on layout changes. Use these scales to organize multiple, <span class="strong svelte-9objxt">mostly-reusable Svelte components</span>, whether they be SVG, HTML, Canvas or WebGL. Since they all share the same coordinate space, you can build your graphic one layer at a time. It can also be used to easily create <span class="strong svelte-9objxt">responsive graphics server-side</span> that <a href="#server-side" class="svelte-9objxt">work without JavaScript</a>.</p> <p class="svelte-9objxt">Unlike other libraries, <a href="/components"="" class="svelte-9objxt">chart components</a> live <span class="strong svelte-9objxt">inside your project</span>, so you have complete control for <span class="strong svelte-9objxt">customization</span>. It also includes some handy <a href="/guide#helper-functions"="" class="svelte-9objxt">helper functions</a> to help format your data into the right shape.</p> <p class="svelte-9objxt">Read the <a href="guide"="" class="svelte-9objxt">guide</a>, try the <a href="https://github.com/mhkeller/layercake-template" target="_blank" rel="noreferrer" class="svelte-9objxt">starter template</a> or check out the <a href="components"="" class="svelte-9objxt">example components</a>. See the examples below and even edit them live. Here&#39;s a sample of what the code looks like:</p>',t,y,k,j=Q.highlight(m[0],{language:"svelte"}).value+"",A,l,u,h,I='<h2 class="svelte-9objxt">Server-side rendering</h2> <p class="svelte-9objxt">Svelte makes it easy to render your project server side and Layer Cake has built-in helpers to make it even easier for charts. All of these examples below (except for their canvas components) will load and be responsive without client-side JavaScript. The advantage is that you can see the chart as soon as the page loads, avoiding blank placeholder spaces. HTML charts use percentage-based scales and SVG charts take advanage of certain <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox" target="_blank" rel="noreferrer" class="svelte-9objxt">viewBox</a> and CSS settings that Rich Harris, Svelte&#39;s creator, outlined in <a href="https://dev.to/richharris/a-new-technique-for-making-responsive-javascript-free-charts-gmp" target="_blank" rel="noreferrer" class="svelte-9objxt">this blog post</a>.</p> <p>For shapes that are difficult to render using percentages, such as swoopy arrows, Layer Cake makes it easy to superimpose client-side components that will hydrate once JavaScript is available. See the annotated column example below.</p>',T,D,J,B=P(se),p=[];for(let s=0;s<B.length;s+=1)p[s]=ne(oe(m,B,s));const he=s=>M(p[s],1,1,()=>{p[s]=null});let q=P(le),f=[];for(let s=0;s<q.length;s+=1)f[s]=ie(re(m,q,s));const pe=s=>M(f[s],1,1,()=>{f[s]=null});return{c(){a=_("meta"),n=_("meta"),i=L(),v=_("div"),$=_("div"),$.innerHTML=E,d=L(),x=_("div"),x.innerHTML=C,t=L(),y=_("div"),k=_("pre"),A=L(),l=_("div");for(let s=0;s<p.length;s+=1)p[s].c();u=L(),h=_("div"),h.innerHTML=I,T=L(),D=_("div");for(let s=0;s<f.length;s+=1)f[s].c();this.h()},l(s){const c=de("svelte-ep3aok",document.head);a=b(c,"META",{name:!0,content:!0}),n=b(c,"META",{name:!0,content:!0}),c.forEach(g),i=S(s),v=b(s,"DIV",{class:!0});var e=w(v);$=b(e,"DIV",{class:!0,["data-svelte-h"]:!0}),O($)!=="svelte-hlk5td"&&($.innerHTML=E),d=S(e),x=b(e,"DIV",{id:!0,class:!0,["data-svelte-h"]:!0}),O(x)!=="svelte-16o7gm7"&&(x.innerHTML=C),t=S(e),y=b(e,"DIV",{class:!0});var V=w(y);k=b(V,"PRE",{class:!0});var fe=w(k);fe.forEach(g),V.forEach(g),A=S(e),l=b(e,"DIV",{id:!0});var Z=w(l);for(let G=0;G<p.length;G+=1)p[G].l(Z);Z.forEach(g),u=S(e),h=b(e,"DIV",{class:!0,id:!0,["data-svelte-h"]:!0}),O(h)!=="svelte-1q3rgko"&&(h.innerHTML=I),T=S(e),D=b(e,"DIV",{id:!0});var ee=w(D);for(let G=0;G<f.length;G+=1)f[G].l(ee);ee.forEach(g),e.forEach(g),this.h()},h(){document.title="Layer Cake",r(a,"name","og:title"),r(a,"content","Layer Cake"),r(n,"name","twitter:title"),r(n,"content","Layer Cake"),r($,"class","logo-container svelte-9objxt"),r(x,"id","dek"),r(x,"class","svelte-9objxt"),r(k,"class","svelte-9objxt"),r(y,"class","code-example svelte-9objxt"),r(l,"id","gallery"),r(h,"class","section-hed svelte-9objxt"),r(h,"id","server-side"),r(D,"id","ssr-gallery"),r(v,"class","main svelte-9objxt")},m(s,c){o(document.head,a),o(document.head,n),z(s,i,c),z(s,v,c),o(v,$),o(v,d),o(v,x),o(v,t),o(v,y),o(y,k),k.innerHTML=j,o(v,A),o(v,l);for(let e=0;e<p.length;e+=1)p[e]&&p[e].m(l,null);o(v,u),o(v,h),o(v,T),o(v,D);for(let e=0;e<f.length;e+=1)f[e]&&f[e].m(D,null);J=!0},p(s,[c]){if(c&0){B=P(se);let e;for(e=0;e<B.length;e+=1){const V=oe(s,B,e);p[e]?(p[e].p(V,c),H(p[e],1)):(p[e]=ne(V),p[e].c(),H(p[e],1),p[e].m(l,null))}for(K(),e=B.length;e<p.length;e+=1)he(e);Y()}if(c&0){q=P(le);let e;for(e=0;e<q.length;e+=1){const V=re(s,q,e);f[e]?(f[e].p(V,c),H(f[e],1)):(f[e]=ie(V),f[e].c(),H(f[e],1),f[e].m(D,null))}for(K(),e=q.length;e<f.length;e+=1)pe(e);Y()}},i(s){if(!J){for(let c=0;c<B.length;c+=1)H(p[c]);for(let c=0;c<q.length;c+=1)H(f[c]);J=!0}},o(s){p=p.filter(Boolean);for(let c=0;c<p.length;c+=1)M(p[c]);f=f.filter(Boolean);for(let c=0;c<f.length;c+=1)M(f[c]);J=!1},d(s){s&&(g(i),g(v)),g(a),g(n),te(p,s),te(f,s)}}}function be(m){return Q.registerLanguage("svelte",ae),ae(Q),[`<script>
	// The library provides a main wrapper component
	// and a bunch empty layout components...
	import { LayerCake, Svg, Html, Canvas } from 'layercake';

	// ...that you fill with your own chart components,
	// that live inside your project and which you
	// can copy and paste from here as starting points.
	import AxisX from './components/AxisX.svelte';
  import AxisY from './components/AxisY.svelte';
  import Line from './components/Line.svelte';
  import Scatter from './components/Scatter.svelte';
  import Labels from './components/Labels.svelte';

	const data = [{ x: 0, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 3 }];
<\/script>

<style>
	.chart-container {
		width: 100%;
		height: 500px;
	}
</style>

<div class="chart-container">
	<LayerCake
		x='x'
		y='y'
		{data}
	>
		<Svg>
			<AxisX/>
			<AxisY/>
			<Line color='#f0c'/>
		</Svg>

		<Canvas>
			<Scatter color='#0fc'/>
		</Canvas>

		<Html>
			<Labels/>
		</Html>
	</LayerCake>
</div>`.trim().replace(/\t/g,"  ")]}class Le extends me{constructor(a){super(),ge(this,a,be,_e,ve,{})}}export{Le as component};