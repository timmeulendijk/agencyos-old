import{d as c,D as p,L as m,I as f,o as u,m as d,y as g,$ as h}from"./C1Qq1QLd.js";const b=["innerHTML"],k=c({__name:"Prose",props:{content:{},size:{default:"md"}},setup(_){const s=h(),n=p(null);return m(()=>{if(!n.value)return;const e=Array.from(n.value.getElementsByTagName("a"));if(e)for(const r of e){const o=r.getAttribute("href");if(!o)return;new URL(o,window.location.origin).hostname===s.public.siteUrl?r.addEventListener("click",t=>{const{pathname:a,searchParams:i,hash:l}=new URL(r.href);f({path:a,hash:l,query:Object.fromEntries(i.entries())}),t.preventDefault()}):(r.setAttribute("target","_blank"),r.setAttribute("rel","noopener noreferrer"))}}),(e,r)=>(u(),d("div",{ref_key:"contentEl",ref:n,class:g([{"prose-sm":e.size==="sm","md:prose-base lg:prose-lg":e.size==="md","prose-lg lg:prose-xl":e.size==="lg"},"prose dark:prose-invert prose-img:rounded-lg prose-img:rounded-lg prose-img:border-2 prose-img:border-gray-500 prose-headings:font-display prose-headings:font-semibold"]),innerHTML:e.content},null,10,b))}});export{k as _};
