function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function o(){return Object.create(null)}function s(t){t.forEach(r)}function a(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e,n,r){if(t){const o=l(t,e,n,r);return t[0](o)}}function l(t,e,r,o){return t[1]&&o?n(r.ctx.slice(),t[1](o(e))):r.ctx}function u(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}const f="undefined"!=typeof window;let p=f?()=>window.performance.now():()=>Date.now(),d=f?t=>requestAnimationFrame(t):t;const h=new Set;function m(t){h.forEach(e=>{e.c(t)||(h.delete(e),e.f())}),0!==h.size&&d(m)}function g(t){let e;return 0===h.size&&d(m),{promise:new Promise(n=>{h.add(e={c:t,f:n})}),abort(){h.delete(e)}}}function $(t,e){t.appendChild(e)}function y(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function v(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function E(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function x(t){return document.createTextNode(t)}function _(){return x(" ")}function S(){return x("")}function R(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function A(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t){return Array.from(t.childNodes)}function P(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;for(;e<o.attributes.length;){const t=o.attributes[e];n[t.name]?e++:o.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?E(e):w(e)}function C(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return x(e)}function N(t){return C(t," ")}function q(t,e){e=""+e,t.data!==e&&(t.data=e)}function L(t,e,n){t.classList[n?"add":"remove"](e)}function O(t,e=document.body){return Array.from(e.querySelectorAll(t))}let j,U,I=0,M={};function D(t,e,n,r,o,s,a,c=0){const i=16.666/r;let l="{\n";for(let t=0;t<=1;t+=i){const r=e+(n-e)*s(t);l+=100*t+`%{${a(r,1-r)}}\n`}const u=l+`100% {${a(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${c}`;if(!M[f]){if(!j){const t=w("style");document.head.appendChild(t),j=t.sheet}M[f]=!0,j.insertRule(`@keyframes ${f} ${u}`,j.cssRules.length)}const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${r}ms linear ${o}ms 1 both`,I+=1,f}function B(t,e){t.style.animation=(t.style.animation||"").split(", ").filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")).join(", "),e&&!--I&&d(()=>{if(I)return;let t=j.cssRules.length;for(;t--;)j.deleteRule(t);M={}})}function J(t){U=t}function T(){if(!U)throw new Error("Function called outside component initialization");return U}function z(t){T().$$.on_mount.push(t)}function H(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}const K=[],F=[],G=[],V=[],W=Promise.resolve();let X=!1;function Y(t){G.push(t)}let Q=!1;const Z=new Set;function tt(){if(!Q){Q=!0;do{for(let t=0;t<K.length;t+=1){const e=K[t];J(e),et(e.$$)}for(K.length=0;F.length;)F.pop()();for(let t=0;t<G.length;t+=1){const e=G[t];Z.has(e)||(Z.add(e),e())}G.length=0}while(K.length);for(;V.length;)V.pop()();X=!1,Q=!1,Z.clear()}}function et(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Y)}}let nt;function rt(){return nt||(nt=Promise.resolve()).then(()=>{nt=null}),nt}function ot(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const st=new Set;let at;function ct(){at={r:0,c:[],p:at}}function it(){at.r||s(at.c),at=at.p}function lt(t,e){t&&t.i&&(st.delete(t),t.i(e))}function ut(t,e,n,r){if(t&&t.o){if(st.has(t))return;st.add(t),at.c.push(()=>{st.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const ft={duration:0};function pt(n,r,o){let s,c,i=r(n,o),l=!1,u=0;function f(){s&&B(n,s)}function d(){const{delay:r=0,duration:o=300,easing:a=e,tick:d=t,css:h}=i||ft;h&&(s=D(n,0,1,o,r,a,h,u++)),d(0,1);const m=p()+r,$=m+o;c&&c.abort(),l=!0,Y(()=>ot(n,!0,"start")),c=g(t=>{if(l){if(t>=$)return d(1,0),ot(n,!0,"end"),f(),l=!1;if(t>=m){const e=a((t-m)/o);d(e,1-e)}}return l})}let h=!1;return{start(){h||(B(n),a(i)?(i=i(),rt().then(d)):d())},invalidate(){h=!1},end(){l&&(f(),l=!1)}}}function dt(n,r,o){let c,i=r(n,o),l=!0;const u=at;function f(){const{delay:r=0,duration:o=300,easing:a=e,tick:f=t,css:d}=i||ft;d&&(c=D(n,1,0,o,r,a,d));const h=p()+r,m=h+o;Y(()=>ot(n,!1,"start")),g(t=>{if(l){if(t>=m)return f(0,1),ot(n,!1,"end"),--u.r||s(u.c),!1;if(t>=h){const e=a((t-h)/o);f(1-e,e)}}return l})}return u.r+=1,a(i)?rt().then(()=>{i=i(),f()}):f(),{end(t){t&&i.tick&&i.tick(1,0),l&&(c&&B(n,c),l=!1)}}}function ht(n,r,o,c){let i=r(n,o),l=c?0:1,u=null,f=null,d=null;function h(){d&&B(n,d)}function m(t,e){const n=t.b-l;return e*=Math.abs(n),{a:l,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function $(r){const{delay:o=0,duration:a=300,easing:c=e,tick:$=t,css:y}=i||ft,b={start:p()+o,b:r};r||(b.group=at,at.r+=1),u?f=b:(y&&(h(),d=D(n,l,r,a,o,c,y)),r&&$(0,1),u=m(b,a),Y(()=>ot(n,r,"start")),g(t=>{if(f&&t>f.start&&(u=m(f,a),f=null,ot(n,u.b,"start"),y&&(h(),d=D(n,l,u.b,u.duration,0,c,i.css))),u)if(t>=u.end)$(l=u.b,1-l),ot(n,u.b,"end"),f||(u.b?h():--u.group.r||s(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;l=u.a+u.d*c(e/u.duration),$(l,1-l)}return!(!u&&!f)}))}return{run(t){a(i)?rt().then(()=>{i=i(),$(t)}):$(t)},end(){h(),u=f=null}}}const mt="undefined"!=typeof window?window:global;function gt(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function $t(t){return"object"==typeof t&&null!==t?t:{}}function yt(t){t&&t.c()}function bt(t,e){t&&t.l(e)}function vt(t,e,n){const{fragment:o,on_mount:c,on_destroy:i,after_update:l}=t.$$;o&&o.m(e,n),Y(()=>{const e=c.map(r).filter(a);i?i.push(...e):s(e),t.$$.on_mount=[]}),l.forEach(Y)}function wt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Et(t,e){-1===t.$$.dirty[0]&&(K.push(t),X||(X=!0,W.then(tt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function xt(e,n,r,a,c,i,l=[-1]){const u=U;J(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:l};let d=!1;p.ctx=r?r(e,f,(t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),d&&Et(e,t)),n}):[],p.update(),d=!0,s(p.before_update),p.fragment=!!a&&a(p.ctx),n.target&&(n.hydrate?p.fragment&&p.fragment.l(k(n.target)):p.fragment&&p.fragment.c(),n.intro&&lt(e.$$.fragment),vt(e,n.target,n.anchor),tt()),J(u)}class _t{$destroy(){wt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const St=[];function Rt(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!St.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),St.push(n,e)}if(t){for(let t=0;t<St.length;t+=2)St[t][0](St[t+1]);St.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const i=[a,c];return o.push(i),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const At={},kt=()=>({});function Pt(t){let e,n,r,o,s,a,c,f,p,d;const h=t[1].default,m=i(h,t,t[0],null);return{c(){e=w("header"),n=w("em"),r=x("powered by"),o=_(),s=w("a"),a=w("img"),f=_(),p=w("main"),m&&m.c(),this.h()},l(t){var c=k(e=P(t,"HEADER",{class:!0})),i=k(n=P(c,"EM",{}));r=C(i,"powered by"),i.forEach(b),o=N(c);var l=k(s=P(c,"A",{href:!0,rel:!0,target:!0}));a=P(l,"IMG",{src:!0,width:!0,height:!0,alt:!0,class:!0}),l.forEach(b),c.forEach(b),f=N(t);var u=k(p=P(t,"MAIN",{class:!0}));m&&m.l(u),u.forEach(b),this.h()},h(){a.src!==(c="elastos.png")&&A(a,"src","elastos.png"),A(a,"width","auto"),A(a,"height","20"),A(a,"alt","Elastos"),A(a,"class","svelte-c5pgwc"),A(s,"href","https://www.elastos.org/"),A(s,"rel","noopener"),A(s,"target","_blank"),A(e,"class","svelte-c5pgwc"),A(p,"class","svelte-c5pgwc")},m(t,c){y(t,e,c),$(e,n),$(n,r),$(e,o),$(e,s),$(s,a),y(t,f,c),y(t,p,c),m&&m.m(p,null),d=!0},p(t,[e]){m&&m.p&&1&e&&m.p(l(h,t,t[0],null),u(h,t[0],e,null))},i(t){d||(lt(m,t),d=!0)},o(t){ut(m,t),d=!1},d(t){t&&b(e),t&&b(f),t&&b(p),m&&m.d(t)}}}function Ct(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$set=(t=>{"$$scope"in t&&n(0,o=t.$$scope)}),[o,r]}class Nt extends _t{constructor(t){super(),xt(this,t,Ct,Pt,c,{})}}function qt(t){let e,n,r=t[1].stack+"";return{c(){e=w("pre"),n=x(r)},l(t){var o=k(e=P(t,"PRE",{}));n=C(o,r),o.forEach(b)},m(t,r){y(t,e,r),$(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&q(n,r)},d(t){t&&b(e)}}}function Lt(e){let n,r,o,s,a,c,i,l,u,f=e[1].message+"";document.title=n=e[0];let p=e[2]&&e[1].stack&&qt(e);return{c(){r=_(),o=w("h1"),s=x(e[0]),a=_(),c=w("p"),i=x(f),l=_(),p&&p.c(),u=S(),this.h()},l(t){O('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(b),r=N(t);var n=k(o=P(t,"H1",{class:!0}));s=C(n,e[0]),n.forEach(b),a=N(t);var d=k(c=P(t,"P",{class:!0}));i=C(d,f),d.forEach(b),l=N(t),p&&p.l(t),u=S(),this.h()},h(){A(o,"class","svelte-8od9u6"),A(c,"class","svelte-8od9u6")},m(t,e){y(t,r,e),y(t,o,e),$(o,s),y(t,a,e),y(t,c,e),$(c,i),y(t,l,e),p&&p.m(t,e),y(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&q(s,t[0]),2&e&&f!==(f=t[1].message+"")&&q(i,f),t[2]&&t[1].stack?p?p.p(t,e):((p=qt(t)).c(),p.m(u.parentNode,u)):p&&(p.d(1),p=null)},i:t,o:t,d(t){t&&b(r),t&&b(o),t&&b(a),t&&b(c),t&&b(l),p&&p.d(t),t&&b(u)}}}function Ot(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=(t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)}),[r,o,!1]}class jt extends _t{constructor(t){super(),xt(this,t,Ot,Lt,c,{status:0,error:1})}}function Ut(t){let e,r;const o=[t[4].props];var s=t[4].component;function a(t){let e={};for(let t=0;t<o.length;t+=1)e=n(e,o[t]);return{props:e}}if(s)var c=new s(a());return{c(){c&&yt(c.$$.fragment),e=S()},l(t){c&&bt(c.$$.fragment,t),e=S()},m(t,n){c&&vt(c,t,n),y(t,e,n),r=!0},p(t,n){const r=16&n?gt(o,[$t(t[4].props)]):{};if(s!==(s=t[4].component)){if(c){ct();const t=c;ut(t.$$.fragment,1,0,()=>{wt(t,1)}),it()}s?(yt((c=new s(a())).$$.fragment),lt(c.$$.fragment,1),vt(c,e.parentNode,e)):c=null}else s&&c.$set(r)},i(t){r||(c&&lt(c.$$.fragment,t),r=!0)},o(t){c&&ut(c.$$.fragment,t),r=!1},d(t){t&&b(e),c&&wt(c,t)}}}function It(t){let e;const n=new jt({props:{error:t[0],status:t[1]}});return{c(){yt(n.$$.fragment)},l(t){bt(n.$$.fragment,t)},m(t,r){vt(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(lt(n.$$.fragment,t),e=!0)},o(t){ut(n.$$.fragment,t),e=!1},d(t){wt(n,t)}}}function Mt(t){let e,n,r,o;const s=[It,Ut],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=S()},l(t){n.l(t),r=S()},m(t,n){a[e].m(t,n),y(t,r,n),o=!0},p(t,o){let i=e;(e=c(t))===i?a[e].p(t,o):(ct(),ut(a[i],1,1,()=>{a[i]=null}),it(),(n=a[e])||(n=a[e]=s[e](t)).c(),lt(n,1),n.m(r.parentNode,r))},i(t){o||(lt(n),o=!0)},o(t){ut(n),o=!1},d(t){a[e].d(t),t&&b(r)}}}function Dt(t){let e;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[Mt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=n(o,r[t]);const s=new Nt({props:o});return{c(){yt(s.$$.fragment)},l(t){bt(s.$$.fragment,t)},m(t,n){vt(s,t,n),e=!0},p(t,[e]){const n=12&e?gt(r,[4&e&&{segment:t[2][0]},8&e&&$t(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){e||(lt(s.$$.fragment,t),e=!0)},o(t){ut(s.$$.fragment,t),e=!1},d(t){wt(s,t)}}}function Bt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e;var l,u;return l=At,u=r,T().$$.context.set(l,u),t.$set=(t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1)}),[o,s,a,c,i,r]}class Jt extends _t{constructor(t){super(),xt(this,t,Bt,Dt,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const Tt=[],zt=[{js:()=>import("./index.77ccdc58.js"),css:["index.77ccdc58.css","client.01c129dc.css"]}],Ht=[{pattern:/^\/$/,parts:[{i:0}]}];const Kt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Ft,Gt,Vt,Wt=!1,Xt=[],Yt="{}";const Qt={page:Rt({}),preloading:Rt(null),session:Rt(Kt&&Kt.session)};let Zt,te;Qt.session.subscribe(async t=>{if(Zt=t,!Wt)return;te=!0;const e=ie(new URL(location.href)),n=Gt={},{redirect:r,props:o,branch:s}=await pe(e);n===Gt&&await fe(r,s,o,e.page)});let ee,ne=null;let re,oe=1;const se="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},ae={};function ce(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function ie(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Kt.baseUrl))return null;let e=t.pathname.slice(Kt.baseUrl.length);if(""===e&&(e="/"),!Tt.some(t=>t.test(e)))for(let n=0;n<Ht.length;n+=1){const r=Ht[n],o=r.pattern.exec(e);if(o){const n=ce(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function le(){return{x:pageXOffset,y:pageYOffset}}async function ue(t,e,n,r){if(e)re=e;else{const t=le();ae[re]=t,e=re=++oe,ae[re]=n?t:{x:0,y:0}}re=e,Ft&&Qt.preloading.set(!0);const o=ne&&ne.href===t.href?ne.promise:pe(t);ne=null;const s=Gt={},{redirect:a,props:c,branch:i}=await o;if(s===Gt&&(await fe(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=ae[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}ae[re]=t,t&&scrollTo(t.x,t.y)}}async function fe(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=ie(new URL(t,document.baseURI));return n?(se[e.replaceState?"replaceState":"pushState"]({id:re},"",t),ue(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Qt.page.set(r),Qt.preloading.set(!1),Ft)Ft.$set(n);else{n.stores={page:{subscribe:Qt.page.subscribe},preloading:{subscribe:Qt.preloading.subscribe},session:Qt.session},n.level0={props:await Vt};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)he(t.nextSibling);he(t),he(e)}Ft=new Jt({target:ee,props:n,hydrate:!0})}Xt=e,Yt=JSON.stringify(r.query),Wt=!0,te=!1}async function pe(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let c;Vt||(Vt=Kt.preloaded[0]||kt.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Zt));let i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Yt)return!0;const o=Xt[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,l,o)&&(u=!0),s.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!te&&!u&&Xt[c]&&Xt[c].part===e.i)return Xt[c];u=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(de);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(zt[e.i]);let m;return m=Wt||!Kt.preloaded[c+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Zt):{}:Kt.preloaded[c+1],s[`level${p}`]={component:d,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}function de(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=(()=>t()),r.onerror=n,document.head.appendChild(r)})}function he(t){t.parentNode.removeChild(t)}function me(t){const e=ie(new URL(t,document.baseURI));if(e)return ne&&t===ne.href||function(t,e){ne={href:t,promise:e}}(t,pe(e)),ne.promise}let ge;function $e(t){clearTimeout(ge),ge=setTimeout(()=>{ye(t)},20)}function ye(t){const e=ve(t.target);e&&"prefetch"===e.rel&&me(e.href)}function be(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=ve(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=ie(o);if(s){ue(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),se.pushState({id:re},"",o.href)}}function ve(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function we(t){if(ae[re]=le(),t.state){const e=ie(new URL(location.href));e?ue(e,t.state.id):location.href=location.href}else(function(t){re=t})(oe=oe+1),se.replaceState({id:re},"",location.href)}!function(t){var e;"scrollRestoration"in se&&(se.scrollRestoration="manual"),e=t.target,ee=e,addEventListener("click",be),addEventListener("popstate",we),addEventListener("touchstart",ye),addEventListener("mousemove",$e),Promise.resolve().then(()=>{const{hash:t,href:e}=location;se.replaceState({id:oe},"",e);const n=new URL(location.href);if(Kt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:c}=Kt;Vt||(Vt=s&&s[0]),fe(null,[],{error:c,status:a,session:o,level0:{props:Vt},level1:{props:{status:a,error:c},component:jt},segments:s},{host:e,path:n,query:ce(r),params:{}})}();const r=ie(n);return r?ue(r,oe,!0,t):void 0})}({target:document.querySelector("#sapper")});export{yt as A,S as B,bt as C,vt as D,wt as E,ct as F,it as G,H,e as I,Y as J,pt as K,ht as L,dt as M,s as N,O,mt as P,_t as S,_ as a,k as b,P as c,b as d,w as e,N as f,C as g,A as h,xt as i,y as j,$ as k,L as l,R as m,t as n,v as o,z as p,F as q,i as r,c as s,x as t,q as u,l as v,u as w,lt as x,ut as y,E as z};
