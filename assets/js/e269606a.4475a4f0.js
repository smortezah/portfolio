"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[611],{70099:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=n(85893),r=n(11151),c=n(52991);const s={},o="Machine learning",a={id:"machine-learning/index",title:"Machine learning",description:"",source:"@site/docs/machine-learning/index.md",sourceDirName:"machine-learning",slug:"/machine-learning/",permalink:"/portfolio/docs/machine-learning/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Optuna",permalink:"/portfolio/docs/hypertune/optuna"},next:{title:"Logistic Regression Thresholds",permalink:"/portfolio/docs/machine-learning/thresh-log-regr"}},l={},d=[];function u(e){const t={h1:"h1",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"machine-learning",children:"Machine learning"}),"\n","\n","\n",(0,i.jsx)(c.Z,{})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},52991:(e,t,n)=>{n.d(t,{Z:()=>x});n(67294);var i=n(86010),r=n(52802),c=n(39960),s=n(13919),o=n(95999),a=n(92503);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(85893);function u(e){let{href:t,children:n}=e;return(0,d.jsx)(c.Z,{href:t,className:(0,i.Z)("card padding--lg",l.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:r,description:c}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(a.Z,{as:"h2",className:(0,i.Z)("text--truncate",l.cardTitle),title:r,children:[n," ",r]}),c&&(0,d.jsx)("p",{className:(0,i.Z)("text--truncate",l.cardDescription),title:c,children:c})]})}function m(e){let{item:t}=e;const n=(0,r.LM)(t);return n?(0,d.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.xz)(t.docId??void 0);return(0,d.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(p,{item:t});case"category":return(0,d.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,r.jA)();return(0,d.jsx)(x,{items:n.items,className:t})}function x(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(g,{...e});const c=(0,r.MN)(t);return(0,d.jsx)("section",{className:(0,i.Z)("row",n),children:c.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},t)))})}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var i=n(67294);const r={},c=i.createContext(r);function s(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);