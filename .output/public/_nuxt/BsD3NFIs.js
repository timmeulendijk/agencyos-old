import{V as x,ad as p,aF as I}from"./C1Qq1QLd.js";import{c as f}from"./DKF2w7xO.js";const m="data-n-ids",g="-";function E(t){var r,i,d,u,a,c;if(typeof t!="string")throw new TypeError("[nuxt] [useId] key must be a string.");t=`n${t.slice(1)}`;const e=x(),n=I();if(!n)throw new TypeError("[nuxt] `useId` must be called within a component setup function.");e._id||(e._id=0),n._nuxtIdIndex||(n._nuxtIdIndex={}),(r=n._nuxtIdIndex)[t]||(r[t]=0);const o=t+g+n._nuxtIdIndex[t]++;if(e.payload.serverRendered&&e.isHydrating&&!p(f,!1)){const s=((i=n.vnode.el)==null?void 0:i.nodeType)===8&&((u=(d=n.vnode.el)==null?void 0:d.nextElementSibling)!=null&&u.getAttribute)?(a=n.vnode.el)==null?void 0:a.nextElementSibling:n.vnode.el,l=JSON.parse(((c=s==null?void 0:s.getAttribute)==null?void 0:c.call(s,m))||"{}");if(l[o])return l[o]}return t+"_"+e._id++}export{E as u};
