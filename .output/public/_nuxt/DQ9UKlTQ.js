import{c as b,o as h,u as j,A as P}from"./jXwMPzuP.js";import{ac as G,O as N,D as p,c as O,d as w,ab as A,aa as T,ad as y,L as K,K as U,M as L,R as W,E as B,aF as q}from"./C1Qq1QLd.js";function E(e){if(b.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=h(e);if(t)return t.ownerDocument}return document}let x=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var V=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(V||{}),X=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(X||{}),z=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(z||{});function $(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(x)).sort((t,o)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(o.tabIndex||Number.MAX_SAFE_INTEGER)))}var I=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(I||{});function H(e,t=0){var o;return e===((o=E(e))==null?void 0:o.body)?!1:j(t,{0(){return e.matches(x)},1(){let n=e;for(;n!==null;){if(n.matches(x))return!0;n=n.parentElement}return!1}})}function fe(e){let t=E(e);G(()=>{t&&!H(t.activeElement,0)&&Q(e)})}var J=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(J||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function Q(e){e==null||e.focus({preventScroll:!0})}let Y=["textarea","input"].join(",");function Z(e){var t,o;return(o=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Y))!=null?o:!1}function ee(e,t=o=>o){return e.slice().sort((o,n)=>{let i=t(o),r=t(n);if(i===null||r===null)return 0;let u=i.compareDocumentPosition(r);return u&Node.DOCUMENT_POSITION_FOLLOWING?-1:u&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function ve(e,t){return te($(),t,{relativeTo:e})}function te(e,t,{sorted:o=!0,relativeTo:n=null,skipElements:i=[]}={}){var r;let u=(r=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?r:document,l=Array.isArray(e)?o?ee(e):e:$(e);i.length>0&&l.length>1&&(l=l.filter(c=>!i.includes(c))),n=n??u.activeElement;let f=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,l.indexOf(n))-1;if(t&4)return Math.max(0,l.indexOf(n))+1;if(t&8)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),a=t&32?{preventScroll:!0}:{},m=0,d=l.length,v;do{if(m>=d||m+d<=0)return 0;let c=s+m;if(t&16)c=(c+d)%d;else{if(c<0)return 3;if(c>=d)return 1}v=l[c],v==null||v.focus(a),m+=f}while(v!==u.activeElement);return t&6&&Z(v)&&v.select(),2}function ne(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function re(){return/Android/gi.test(window.navigator.userAgent)}function oe(){return ne()||re()}function g(e,t,o){b.isServer||N(n=>{document.addEventListener(e,t,o),n(()=>document.removeEventListener(e,t,o))})}function C(e,t,o){b.isServer||N(n=>{window.addEventListener(e,t,o),n(()=>window.removeEventListener(e,t,o))})}function me(e,t,o=O(()=>!0)){function n(r,u){if(!o.value||r.defaultPrevented)return;let l=u(r);if(l===null||!l.getRootNode().contains(l))return;let f=function s(a){return typeof a=="function"?s(a()):Array.isArray(a)||a instanceof Set?a:[a]}(e);for(let s of f){if(s===null)continue;let a=s instanceof HTMLElement?s:h(s);if(a!=null&&a.contains(l)||r.composed&&r.composedPath().includes(a))return}return!H(l,I.Loose)&&l.tabIndex!==-1&&r.preventDefault(),t(r,l)}let i=p(null);g("pointerdown",r=>{var u,l;o.value&&(i.value=((l=(u=r.composedPath)==null?void 0:u.call(r))==null?void 0:l[0])||r.target)},!0),g("mousedown",r=>{var u,l;o.value&&(i.value=((l=(u=r.composedPath)==null?void 0:u.call(r))==null?void 0:l[0])||r.target)},!0),g("click",r=>{oe()||i.value&&(n(r,()=>i.value),i.value=null)},!0),g("touchend",r=>n(r,()=>r.target instanceof HTMLElement?r.target:null),!0),C("blur",r=>n(r,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var D=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(D||{});let le=w({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:o}){return()=>{var n;let{features:i,...r}=e,u={"aria-hidden":(i&2)===2?!0:(n=r["aria-hidden"])!=null?n:void 0,hidden:(i&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(i&4)===4&&(i&2)!==2&&{display:"none"}}};return P({ourProps:u,theirProps:r,slot:{},attrs:o,slots:t,name:"Hidden"})}}});function pe(e,t,o,n){b.isServer||N(i=>{e=e??window,e.addEventListener(t,o,n),i(()=>e.removeEventListener(t,o,n))})}var ae=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(ae||{});function he(){let e=p(0);return C("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function we({defaultContainers:e=[],portals:t,mainTreeNodeRef:o}={}){let n=p(null),i=E(n);function r(){var u,l,f;let s=[];for(let a of e)a!==null&&(a instanceof HTMLElement?s.push(a):"value"in a&&a.value instanceof HTMLElement&&s.push(a.value));if(t!=null&&t.value)for(let a of t.value)s.push(a);for(let a of(u=i==null?void 0:i.querySelectorAll("html > *, body > *"))!=null?u:[])a!==document.body&&a!==document.head&&a instanceof HTMLElement&&a.id!=="headlessui-portal-root"&&(a.contains(h(n))||a.contains((f=(l=h(n))==null?void 0:l.getRootNode())==null?void 0:f.host)||s.some(m=>a.contains(m))||s.push(a));return s}return{resolveContainers:r,contains(u){return r().some(l=>l.contains(u))},mainTreeNodeRef:n,MainTreeNode(){return o!=null?null:A(le,{features:D.Hidden,ref:n})}}}let R=Symbol("ForcePortalRootContext");function ue(){return y(R,!1)}let Ee=w({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:o}){return T(R,e.force),()=>{let{force:n,...i}=e;return P({theirProps:i,ourProps:{},slot:{},slots:t,attrs:o,name:"ForcePortalRoot"})}}});function ie(e){let t=E(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let o=t.getElementById("headlessui-portal-root");if(o)return o;let n=t.createElement("div");return n.setAttribute("id","headlessui-portal-root"),t.body.appendChild(n)}const F=new WeakMap;function se(e){var t;return(t=F.get(e))!=null?t:0}function M(e,t){let o=t(se(e));return o<=0?F.delete(e):F.set(e,o),o}let ge=w({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:o}){let n=p(null),i=O(()=>E(n)),r=ue(),u=y(k,null),l=p(r===!0||u==null?ie(n.value):u.resolveTarget());l.value&&M(l.value,d=>d+1);let f=p(!1);K(()=>{f.value=!0}),N(()=>{r||u!=null&&(l.value=u.resolveTarget())});let s=y(S,null),a=!1,m=q();return U(n,()=>{if(a||!s)return;let d=h(n);d&&(L(s.register(d),m),a=!0)}),L(()=>{var d,v;let c=(d=i.value)==null?void 0:d.getElementById("headlessui-portal-root");!c||l.value!==c||M(l.value,_=>_-1)||l.value.children.length>0||(v=l.value.parentElement)==null||v.removeChild(l.value)}),()=>{if(!f.value||l.value===null)return null;let d={ref:n,"data-headlessui-portal":""};return A(W,{to:l.value},P({ourProps:d,theirProps:e,slot:{},attrs:o,slots:t,name:"Portal"}))}}}),S=Symbol("PortalParentContext");function ye(){let e=y(S,null),t=p([]);function o(r){return t.value.push(r),e&&e.register(r),()=>n(r)}function n(r){let u=t.value.indexOf(r);u!==-1&&t.value.splice(u,1),e&&e.unregister(r)}let i={register:o,unregister:n,portals:t};return[t,w({name:"PortalWrapper",setup(r,{slots:u}){return T(S,i),()=>{var l;return(l=u.default)==null?void 0:l.call(u)}}})]}let k=Symbol("PortalGroupContext"),be=w({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:o}){let n=B({resolveTarget(){return e.target}});return T(k,n),()=>{let{target:i,...r}=e;return P({theirProps:r,ourProps:{},slot:{},attrs:t,slots:o,name:"PortalGroup"})}}});export{ge as $,pe as E,V as N,ee as O,te as P,Q as S,X as T,fe as _,H as a,he as b,we as c,ae as d,Ee as e,le as f,$ as g,I as h,E as i,oe as n,ye as q,ne as t,D as u,ve as v,me as w,be as z};
