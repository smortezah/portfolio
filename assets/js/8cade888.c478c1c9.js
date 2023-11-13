"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5107],{75177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=n(85893),i=n(11151),c=n(52991);const s={},o="Web Scraping",a={id:"scrape/index",title:"Web Scraping",description:"",source:"@site/docs/scrape/index.md",sourceDirName:"scrape",slug:"/scrape/",permalink:"/portfolio/docs/scrape/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lambda Functions",permalink:"/portfolio/docs/python/lambda"},next:{title:"Scraping Job Listings",permalink:"/portfolio/docs/scrape/jobinventory.com"}},l={},d=[];function u(e){const t={h1:"h1",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"web-scraping",children:"Web Scraping"}),"\n","\n","\n",(0,r.jsx)(c.Z,{})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},52991:(e,t,n)=>{n.d(t,{Z:()=>g});n(67294);var r=n(86010),i=n(52802),c=n(39960),s=n(13919),o=n(95999),a=n(92503);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(85893);function u(e){let{href:t,children:n}=e;return(0,d.jsx)(c.Z,{href:t,className:(0,r.Z)("card padding--lg",l.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:i,description:c}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(a.Z,{as:"h2",className:(0,r.Z)("text--truncate",l.cardTitle),title:i,children:[n," ",i]}),c&&(0,d.jsx)("p",{className:(0,r.Z)("text--truncate",l.cardDescription),title:c,children:c})]})}function m(e){let{item:t}=e;const n=(0,i.LM)(t);return n?(0,d.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,i.jA)();return(0,d.jsx)(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const c=(0,i.MN)(t);return(0,d.jsx)("section",{className:(0,r.Z)("row",n),children:c.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:e})},t)))})}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var r=n(67294);const i={},c=r.createContext(i);function s(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);