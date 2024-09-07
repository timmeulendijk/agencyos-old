import{_ as E}from"./BkkHuSuh.js";import{_ as L}from"./BWVliGJj.js";import{_ as F}from"./D9e1F_hZ.js";import{_}from"./BLRN7I0I.js";import{n as N,p as C,d as P,q,c as G,r as A,s as H,o,m as d,v as U,x as k,g as b,y as f,j as c,z as w,i as S,t as j,F as V,A as z,B as $,C as T,D as O,E as J,G as R,H as W,b as r,h as v,w as D}from"./C1Qq1QLd.js";import{U as Y}from"./DWctDv8V.js";import{u as K}from"./dCmjBx8L.js";import{_ as I}from"./DlAUqK2U.js";import{_ as Q}from"./Cl3ZEGEj.js";import{_ as X}from"./BfNv8Klg.js";import"./Dts3F0k1.js";import"./DnmWVJMN.js";import"./KCR-tHi3.js";import"./D3QtpRVU.js";import"./BsD3NFIs.js";import"./DKF2w7xO.js";const Z={wrapper:"w-full relative overflow-hidden",inner:"w-0 flex-1",title:"text-sm font-medium",description:"mt-1 text-sm leading-4 opacity-90",actions:"flex items-center gap-2 mt-3 flex-shrink-0",shadow:"",rounded:"rounded-lg",padding:"p-4",gap:"gap-3",icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0 self-center",size:"md"},color:{white:{solid:"text-gray-900 dark:text-white bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800"}},variant:{solid:"bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",outline:"text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",soft:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",subtle:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"},default:{color:"white",variant:"solid",icon:null,closeButton:null,actionButton:{size:"xs",color:"primary",variant:"link"}}},p=N(C.ui.strategy,C.ui.alert,Z),x=P({components:{UIcon:Y,UAvatar:F,UButton:_},inheritAttrs:!1,props:{title:{type:String,default:null},description:{type:String,default:null},icon:{type:String,default:()=>p.default.icon},avatar:{type:Object,default:null},closeButton:{type:Object,default:()=>p.default.closeButton},actions:{type:Array,default:()=>[]},color:{type:String,default:()=>p.default.color,validator(e){return[...C.ui.colors,...Object.keys(p.color)].includes(e)}},variant:{type:String,default:()=>p.default.variant,validator(e){return[...Object.keys(p.variant),...Object.values(p.color).flatMap(t=>Object.keys(t))].includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["close"],setup(e){const{ui:t,attrs:n}=K("alert",q(e,"ui"),p),s=G(()=>{var m,a;const l=((a=(m=t.value.color)==null?void 0:m[e.color])==null?void 0:a[e.variant])||t.value.variant[e.variant];return A(H(t.value.wrapper,t.value.rounded,t.value.shadow,t.value.padding,l==null?void 0:l.replaceAll("{color}",e.color)),e.class)});function i(l){l.click&&l.click()}return{ui:t,attrs:n,alertClass:s,onAction:i,twMerge:A}}});function ee(e,t,n,s,i,l){const m=L,a=F,g=_;return o(),d("div",w({class:e.alertClass},e.attrs),[U("div",{class:f(["flex",[e.ui.gap,{"items-start":e.description||e.$slots.description,"items-center":!e.description&&!e.$slots.description}]])},[k(e.$slots,"icon",{icon:e.icon},()=>[e.icon?(o(),b(m,{key:0,name:e.icon,class:f(e.ui.icon.base)},null,8,["name","class"])):c("",!0)]),k(e.$slots,"avatar",{avatar:e.avatar},()=>[e.avatar?(o(),b(a,w({key:0},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):c("",!0)]),U("div",{class:f(e.ui.inner)},[e.title||e.$slots.title?(o(),d("p",{key:0,class:f(e.ui.title)},[k(e.$slots,"title",{title:e.title},()=>[S(j(e.title),1)])],2)):c("",!0),e.description||e.$slots.description?(o(),d("div",{key:1,class:f(e.twMerge(e.ui.description,!e.title&&!e.$slots.title&&"mt-0 leading-5"))},[k(e.$slots,"description",{description:e.description},()=>[S(j(e.description),1)])],2)):c("",!0),(e.description||e.$slots.description)&&(e.actions.length||e.$slots.actions)?(o(),d("div",{key:2,class:f(e.ui.actions)},[k(e.$slots,"actions",{},()=>[(o(!0),d(V,null,z(e.actions,(u,y)=>(o(),b(g,w({key:y,ref_for:!0},{...e.ui.default.actionButton||{},...u},{onClick:$(h=>e.onAction(u),["stop"])}),null,16,["onClick"]))),128))])],2)):c("",!0)],2),e.closeButton||!e.description&&!e.$slots.description&&e.actions.length?(o(),d("div",{key:0,class:f(e.twMerge(e.ui.actions,"mt-0"))},[!e.description&&!e.$slots.description&&(e.actions.length||e.$slots.actions)?k(e.$slots,"actions",{key:0},()=>[(o(!0),d(V,null,z(e.actions,(u,y)=>(o(),b(g,w({key:y,ref_for:!0},{...e.ui.default.actionButton||{},...u},{onClick:$(h=>e.onAction(u),["stop"])}),null,16,["onClick"]))),128))]):c("",!0),e.closeButton?(o(),b(g,w({key:1,"aria-label":"Close"},{...e.ui.default.closeButton||{},...e.closeButton},{onClick:t[0]||(t[0]=$(u=>e.$emit("close"),["stop"]))}),null,16)):c("",!0)],2)):c("",!0)],2)],16)}const te=I(x,[["render",ee]]),oe={__name:"LoginForm",setup(e){const{login:t}=T(),n=O(!1),s=O(null),i=J({email:"ashley@example.com",password:"password"});async function l(){const{email:m,password:a}=r(i);n.value=!0,s.value=null;try{await t(m,a)}catch(g){s.value=g.message}n.value=!1}return(m,a)=>{const g=te,u=Q,y=X,h=_,M=R("auto-animate");return W((o(),d("div",null,[r(s)?(o(),b(g,{key:0,type:"error",class:"mb-4",title:"Oops! Something went wrong.",description:r(s),color:"rose",variant:"outline",icon:"material-symbols:warning-rounded"},null,8,["description"])):c("",!0),U("form",{class:"grid gap-4",onSubmit:$(l,["prevent"])},[v(y,{label:"Email",required:""},{default:D(()=>[v(u,{modelValue:r(i).email,"onUpdate:modelValue":a[0]||(a[0]=B=>r(i).email=B),type:"email",disabled:r(n),size:"lg",name:"email",label:"Work Email",placeholder:"john@example.com"},null,8,["modelValue","disabled"])]),_:1}),v(y,{label:"Password",required:""},{default:D(()=>[v(u,{modelValue:r(i).password,"onUpdate:modelValue":a[1]||(a[1]=B=>r(i).password=B),type:"password",disabled:r(n),size:"lg",name:"password",label:"Password",placeholder:"Your Password"},null,8,["modelValue","disabled"])]),_:1}),v(h,{type:"submit",loading:r(n),disabled:!r(i).email,size:"lg",label:"Sign In","trailing-icon":"material-symbols:arrow-forward",block:""},null,8,["loading","disabled"])],32)])),[[M]])}}},ae={},re={class:"space-y-8"};function ne(e,t){const n=E,s=oe;return o(),d("div",re,[v(n,{content:"<em>Sign in</em> to your portal"}),v(s)])}const he=I(ae,[["render",ne]]);export{he as default};
