"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3525],{51569:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var r=n(85893),i=n(11151),o=n(52991);const c={},s="Python",a={id:"python/index",title:"Python",description:"",source:"@site/docs/python/index.md",sourceDirName:"python",slug:"/python/",permalink:"/portfolio/docs/python/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Encryption",permalink:"/portfolio/docs/privacy/encryption"},next:{title:"Generators",permalink:"/portfolio/docs/python/generator"}},l={},d=[];function u(t){const e={h1:"h1",...(0,i.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"python",children:"Python"}),"\n","\n","\n",(0,r.jsx)(o.Z,{})]})}function p(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(u,{...t})}):u(t)}},52991:(t,e,n)=>{n.d(e,{Z:()=>y});n(67294);var r=n(86010),i=n(52802),o=n(39960),c=n(13919),s=n(95999),a=n(92503);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(85893);function u(t){let{href:e,children:n}=t;return(0,d.jsx)(o.Z,{href:e,className:(0,r.Z)("card padding--lg",l.cardContainer),children:n})}function p(t){let{href:e,icon:n,title:i,description:o}=t;return(0,d.jsxs)(u,{href:e,children:[(0,d.jsxs)(a.Z,{as:"h2",className:(0,r.Z)("text--truncate",l.cardTitle),title:i,children:[n," ",i]}),o&&(0,d.jsx)("p",{className:(0,r.Z)("text--truncate",l.cardDescription),title:o,children:o})]})}function h(t){let{item:e}=t;const n=(0,i.LM)(e);return n?(0,d.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function m(t){let{item:e}=t;const n=(0,c.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(e.docId??void 0);return(0,d.jsx)(p,{href:e.href,icon:n,title:e.label,description:e.description??r?.description})}function f(t){let{item:e}=t;switch(e.type){case"link":return(0,d.jsx)(m,{item:e});case"category":return(0,d.jsx)(h,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function x(t){let{className:e}=t;const n=(0,i.jA)();return(0,d.jsx)(y,{items:n.items,className:e})}function y(t){const{items:e,className:n}=t;if(!e)return(0,d.jsx)(x,{...t});const o=(0,i.MN)(e);return(0,d.jsx)("section",{className:(0,r.Z)("row",n),children:o.map(((t,e)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:t})},e)))})}},11151:(t,e,n)=>{n.d(e,{Z:()=>s,a:()=>c});var r=n(67294);const i={},o=r.createContext(i);function c(t){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:c(t.components),r.createElement(o.Provider,{value:e},t.children)}}}]);