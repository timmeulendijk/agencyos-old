import{_ as H}from"./Ck_z0UYv.js";import{_ as N}from"./BkkHuSuh.js";import{_ as S}from"./BZUOr_mi.js";import{_ as V,a as q}from"./JsshA9eX.js";import{_ as L}from"./0VR8Jqnb.js";import{d as j,u as E,a as G,c as d,f as h,b as e,o as _,g as b,w as c,v as i,h as r,i as n,t as v,am as I,m as M,A as R,F as U,an as z,k as J,l as k}from"./C1Qq1QLd.js";import{u as K}from"./BAzV2P3u.js";import{w as O,u as C}from"./CDSSNFII.js";import"./DnFU_lOv.js";import"./jXwMPzuP.js";import"./dCmjBx8L.js";import"./DlAUqK2U.js";import"./BLRN7I0I.js";import"./BWVliGJj.js";import"./Dts3F0k1.js";import"./DnmWVJMN.js";import"./DWctDv8V.js";import"./KCR-tHi3.js";import"./BPBXaj21.js";import"./BsD3NFIs.js";import"./DKF2w7xO.js";import"./BF1h8QGO.js";import"./DQ9UKlTQ.js";import"./BV9iaqG7.js";import"./Ba5XwZFk.js";import"./D9e1F_hZ.js";import"./DbJPzKJT.js";import"./BXOgAUqj.js";import"./nG6B8Cf1.js";import"./D_yz1VK7.js";import"./kJgbbY6C.js";const Q={class:"pb-6 border-b-2 border-gray-300 dark:border-gray-700"},W=i("div",null,null,-1),X={class:"relative items-center w-full py-12 space-y-12"},Y={class:"relative grid gap-12 pb-12 border-b-2 border-gray-300 md:grid-cols-2 lg:grid-cols-4 dark:border-gray-700"},Z={class:"space-y-4 lg:col-span-3"},D={class:"relative grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-4"},Nt=j({__name:"[category]",async setup(tt){let l,u;const{params:m,path:x}=E(),{globals:a}=G(),{fileUrl:w}=K(),{data:g}=([l,u]=O(()=>J(x,()=>{const t=C(k("categories",{filter:{slug:{_eq:m.category}},fields:["title","slug","color","headline",{seo:["*"]}],limit:1})),o=C(k("posts",{filter:{category:{slug:{_eq:m.category}}},sort:["date_published"],fields:["title","slug","summary","date_published","image","type",{category:["title","slug","color"],author:["image","name","job_title"]}]}));return Promise.all([t,o])},{transform:([t,o])=>({category:t[0],posts:o})})),l=await l,u(),l),p=d(()=>{var t;return((t=e(g))==null?void 0:t.category)??{}}),$=d(()=>{var t;return((t=e(g))==null?void 0:t.posts)??[]}),y=d(()=>{var o,s;const t=e(p);return{title:((o=t==null?void 0:t.seo)==null?void 0:o.title)??(t==null?void 0:t.title)??void 0,description:((s=t==null?void 0:t.seo)==null?void 0:s.meta_description)??z(t==null?void 0:t.headline)??void 0,image:a!=null&&a.og_image?w(a==null?void 0:a.og_image):void 0}});return h({title:()=>{var t;return(t=e(y))==null?void 0:t.title}}),h({title:()=>{var t;return(t=e(y))==null?void 0:t.title}}),(t,o)=>{const s=H,B=N,T=S,A=V,P=q,F=L;return _(),b(F,null,{default:c(()=>[i("header",Q,[r(s,null,{default:c(()=>[n(v(e(p).title),1)]),_:1}),r(B,{content:e(p).headline},null,8,["content"]),W]),i("section",X,[i("div",Y,[i("div",null,[r(s,{as:"p",class:"text-gray-700 dark:text-gray-400"},{default:c(()=>[n("Search")]),_:1}),r(T,{collections:["posts"],class:"flex"}),r(s,{as:"p",class:"mt-8 text-gray-700 dark:text-gray-400"},{default:c(()=>[n("Categories")]),_:1}),r(A)]),i("div",Z,[r(s,{as:"p"},{default:c(()=>[n("Items for Category: "+v(("deslugify"in t?t.deslugify:e(I))(e(m).category)),1)]),_:1}),i("div",D,[(_(!0),M(U,null,R(e($),f=>(_(),b(P,{key:f.id,post:f,class:"col-span-2 pb-6 border-b border-gray-300 dark:border-gray-700"},null,8,["post"]))),128))])])])])]),_:1})}}});export{Nt as default};
