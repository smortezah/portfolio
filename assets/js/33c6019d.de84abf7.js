"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9589],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(r),p=o,d=u["".concat(l,".").concat(p)]||u[p]||f[p]||a;return r?n.createElement(d,c(c({ref:t},m),{},{components:r})):n.createElement(d,c({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(67294),o=r(86010),a=r(52802),c=r(39960),i=r(13919),l=r(95999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:r}=e;return n.createElement(c.Z,{href:t,className:(0,o.Z)("card padding--lg",s.cardContainer)},r)}function u(e){let{href:t,icon:r,title:a,description:c}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",s.cardTitle),title:a},r," ",a),c&&n.createElement("p",{className:(0,o.Z)("text--truncate",s.cardDescription),title:c},c))}function f(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const r=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function d(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(p,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const c=(0,a.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(d,{item:e})))))}},5481:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var n=r(87462),o=(r(67294),r(3905)),a=r(52991);const c={},i="Data Format",l={unversionedId:"format/index",id:"format/index",title:"Data Format",description:"",source:"@site/docs/format/index.md",sourceDirName:"format",slug:"/format/",permalink:"/portfolio/docs/format/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ETL Pipeline",permalink:"/portfolio/docs/etl/airflow-docker"},next:{title:"Structured Formats for Data Science",permalink:"/portfolio/docs/format/structured-formats"}},s={},m=[],u={toc:m},f="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-format"},"Data Format"),(0,o.kt)(a.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);