"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4313],{33338:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=n(85893),i=n(11151),c=n(52991);const s={},o="Best Practices",a={id:"best-practices/index",title:"Best Practices",description:"",source:"@site/docs/best-practices/index.md",sourceDirName:"best-practices",slug:"/best-practices/",permalink:"/portfolio/docs/best-practices/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Automatic Git Commit",permalink:"/portfolio/docs/automation/auto-commit"},next:{title:"PEP 8",permalink:"/portfolio/docs/best-practices/pep8"}},l={},d=[];function u(t){const e={h1:"h1",...(0,i.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"best-practices",children:"Best Practices"}),"\n","\n","\n",(0,r.jsx)(c.Z,{})]})}function m(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(u,{...t})}):u(t)}},52991:(t,e,n)=>{n.d(e,{Z:()=>j});n(67294);var r=n(86010),i=n(52802),c=n(39960),s=n(13919),o=n(95999),a=n(92503);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(85893);function u(t){let{href:e,children:n}=t;return(0,d.jsx)(c.Z,{href:e,className:(0,r.Z)("card padding--lg",l.cardContainer),children:n})}function m(t){let{href:e,icon:n,title:i,description:c}=t;return(0,d.jsxs)(u,{href:e,children:[(0,d.jsxs)(a.Z,{as:"h2",className:(0,r.Z)("text--truncate",l.cardTitle),title:i,children:[n," ",i]}),c&&(0,d.jsx)("p",{className:(0,r.Z)("text--truncate",l.cardDescription),title:c,children:c})]})}function p(t){let{item:e}=t;const n=(0,i.LM)(e);return n?(0,d.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f(t){let{item:e}=t;const n=(0,s.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(e.docId??void 0);return(0,d.jsx)(m,{href:e.href,icon:n,title:e.label,description:e.description??r?.description})}function h(t){let{item:e}=t;switch(e.type){case"link":return(0,d.jsx)(f,{item:e});case"category":return(0,d.jsx)(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function x(t){let{className:e}=t;const n=(0,i.jA)();return(0,d.jsx)(j,{items:n.items,className:e})}function j(t){const{items:e,className:n}=t;if(!e)return(0,d.jsx)(x,{...t});const c=(0,i.MN)(e);return(0,d.jsx)("section",{className:(0,r.Z)("row",n),children:c.map(((t,e)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:t})},e)))})}},11151:(t,e,n)=>{n.d(e,{Z:()=>o,a:()=>s});var r=n(67294);const i={},c=r.createContext(i);function s(t){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),r.createElement(c.Provider,{value:e},t.children)}}}]);