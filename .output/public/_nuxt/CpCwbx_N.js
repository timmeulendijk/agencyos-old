import{d as r,D as l,K as m,G as c,b as u,H as p,o as f,g as v,w as d,x as h,U as w,j as _,b1 as y}from"./C1Qq1QLd.js";const D=r({__name:"Motionable",props:{as:{default:"div"},name:{},show:{type:Boolean,default:!0}},setup(t){const a=t,n=y(),s=l(!a.show);return m(()=>a.show,async e=>{const o=n[a.name];o&&o.isAnimating.value&&(o.stop("leave"),e&&o.apply("enter")),e||(s.value=!1,o.leave(()=>{s.value=!0}))}),(e,o)=>{const i=c("motion");return e.show||!u(s)?p((f(),v(w(e.as),{key:0},{default:d(()=>[h(e.$slots,"default")]),_:3})),[[i,e.name]]):_("",!0)}}});export{D as _};
