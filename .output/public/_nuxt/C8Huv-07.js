import{_ as N}from"./BkkHuSuh.js";import{_ as R}from"./DwYUTqBu.js";import{_ as A}from"./Cl3ZEGEj.js";import{_ as L}from"./BLRN7I0I.js";import{_ as q}from"./BwYgItWI.js";import{_ as P}from"./DX9skQdG.js";import{_ as E}from"./CswkOXNq.js";import{_ as H,a as G}from"./ByyqGGT4.js";import{d as j,D as g,c as J,b as a,o as c,m as K,v as b,h as s,S as C,w as t,i as V,t as _,g as v,j as $,F as M,k as O,l as W,u as X}from"./C1Qq1QLd.js";import{w as Y,u as Z}from"./CDSSNFII.js";import{g as Q,a as ee}from"./CGNRextM.js";import{_ as te}from"./Cb2pLvH4.js";import"./BWVliGJj.js";import"./Dts3F0k1.js";import"./DWctDv8V.js";import"./DlAUqK2U.js";import"./dCmjBx8L.js";import"./D3QtpRVU.js";import"./KCR-tHi3.js";import"./DnmWVJMN.js";import"./D9e1F_hZ.js";import"./BAzV2P3u.js";import"./BmwJRmHE.js";import"./BK4Bl150.js";import"./BsD3NFIs.js";import"./DKF2w7xO.js";import"./BF1h8QGO.js";import"./DnFU_lOv.js";import"./jXwMPzuP.js";import"./DQ9UKlTQ.js";import"./BV9iaqG7.js";import"./Ba5XwZFk.js";import"./BMcm88wx.js";import"./CYRz50eo.js";import"./DekjeW-g.js";import"./nG6B8Cf1.js";import"./wi-U1sct.js";import"./BUQ8j0qe.js";import"./Bf5SMuIn.js";import"./yIDA3Pbn.js";import"./BrqazIaq.js";import"./BfNv8Klg.js";import"./D5hYVxtM.js";import"./COtxFzAH.js";import"./X2QR9rfB.js";import"./DwdgSWLY.js";const oe={class:"flex items-center justify-between gap-3 pb-3 border-b dark:border-gray-700"},ae={class:"font-medium text-gray-900"},se={class:"text-xs capitalize"},ne=j({__name:"TaskList",props:{projectId:{}},async setup(T){let i,u;const d=T,{data:f,pending:h,error:x}=([i,u]=Y(()=>O(`${d.projectId}-tasks`,()=>Z(W("os_tasks",{fields:["*",{assigned_to:["id","first_name","last_name","email","avatar"]}],filter:{_and:[{project:{_eq:d.projectId}},{is_visible_to_client:{_eq:!0}},{type:{_neq:"milestone"}}]}})))),i=await i,u(),i),k=[{key:"name",label:"Name",sortable:!0},{key:"due_date",label:"Due Date",sortable:!0},{key:"status",label:"Status",sortable:!0},{key:"type",label:"Type",sortable:!0},{key:"assigned_to",label:"Assigned To",sortable:!0},{key:"actions"}],m=g(!1),y=g(null);async function w(r){y.value=r,m.value=!0}const n=g(),D=J(()=>{var o;return(o=a(f))==null?void 0:o.filter(l=>l.type!=="milestone").filter(l=>{var p;return n.value?l.name.toLowerCase().includes((p=n==null?void 0:n.value)==null?void 0:p.toLowerCase()):!0})});return(r,o)=>{const l=A,p=L,U=q,B=P,z=E,S=H,F=G;return c(),K(M,null,[b("div",oe,[s(l,{modelValue:a(n),"onUpdate:modelValue":o[0]||(o[0]=e=>C(n)?n.value=e:null),type:"text",icon:"i-heroicons-magnifying-glass-20-solid",placeholder:"Search..."},null,8,["modelValue"])]),s(z,{columns:k,rows:a(D),"column-attribute":"label"},{"name-data":t(({row:e})=>[s(p,{variant:"link",padded:!1,onClick:I=>w(e.id)},{default:t(()=>[V(_(e.name),1)]),_:2},1032,["onClick"])]),"due_date-data":t(({row:e})=>[b("p",ae,_(("getFriendlyDate"in r?r.getFriendlyDate:a(Q))(e.due_date,{monthAbbr:!0})),1),b("p",se,_(("getRelativeTime"in r?r.getRelativeTime:a(ee))(e.due_date)),1)]),"type-data":t(({row:e})=>[s(U,{class:"capitalize",variant:"subtle"},{default:t(()=>[V(_(e.type),1)]),_:2},1024)]),"assigned_to-data":t(({row:e})=>[e.assigned_to?(c(),v(B,{key:0,user:e.assigned_to,size:"sm"},null,8,["user"])):$("",!0)]),"actions-data":t(({row:e})=>[s(p,{icon:"i-heroicons-arrow-right",color:"primary",size:"sm",variant:"outline",onClick:I=>w(e.id)},null,8,["onClick"])]),_:1},8,["rows"]),s(F,{modelValue:a(m),"onUpdate:modelValue":o[2]||(o[2]=e=>C(m)?m.value=e:null),ui:{width:"max-w-xl"}},{default:t(()=>[a(y)?(c(),v(S,{key:0,"task-id":a(y),class:"overflow-y-auto",onClose:o[1]||(o[1]=e=>m.value=!1)},null,8,["task-id"])):$("",!0)]),_:1},8,["modelValue"])],64)}}}),Ze=j({__name:"tasks",setup(T){const{params:i}=X();return(u,d)=>{const f=N,h=R,x=ne,k=te;return c(),v(k,{class:"mt-6"},{header:t(()=>[s(f,{content:"Tasks",size:"xs"}),s(h,{size:"sm",content:"Teamwork makes the dreamwork. These are the open tasks you'll need to complete for a successful project."})]),default:t(()=>[s(x,{"project-id":a(i).id},null,8,["project-id"])]),_:1})}}});export{Ze as default};
