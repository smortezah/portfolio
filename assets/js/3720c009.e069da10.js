"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3751],{10727:(t,e,s)=>{s.r(e),s.d(e,{default:()=>d});s(67294);var a=s(86010),r=s(1944),l=s(35281),n=s(35155),c=s(26090),i=s(90197),g=s(92503),o=s(85893);function u(t){let{title:e}=t;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.d,{title:e}),(0,o.jsx)(i.Z,{tag:"doc_tags_list"})]})}function h(t){let{tags:e,title:s}=t;return(0,o.jsx)(r.FG,{className:(0,a.Z)(l.k.page.docsTagsListPage),children:(0,o.jsx)("div",{className:"container margin-vert--lg",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,o.jsx)(g.Z,{as:"h1",children:s}),(0,o.jsx)(c.Z,{tags:e})]})})})})}function d(t){const e=(0,n.M)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u,{...t,title:e}),(0,o.jsx)(h,{...t,title:e})]})}},13008:(t,e,s)=>{s.d(e,{Z:()=>c});s(67294);var a=s(86010),r=s(39960);const l={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var n=s(85893);function c(t){let{permalink:e,label:s,count:c}=t;return(0,n.jsxs)(r.Z,{href:e,className:(0,a.Z)(l.tag,c?l.tagWithCount:l.tagRegular),children:[s,c&&(0,n.jsx)("span",{children:c})]})}},26090:(t,e,s)=>{s.d(e,{Z:()=>g});s(67294);var a=s(35155),r=s(13008),l=s(92503);const n={tag:"tag_Nnez"};var c=s(85893);function i(t){let{letterEntry:e}=t;return(0,c.jsxs)("article",{children:[(0,c.jsx)(l.Z,{as:"h2",id:e.letter,children:e.letter}),(0,c.jsx)("ul",{className:"padding--none",children:e.tags.map((t=>(0,c.jsx)("li",{className:n.tag,children:(0,c.jsx)(r.Z,{...t})},t.permalink)))}),(0,c.jsx)("hr",{})]})}function g(t){let{tags:e}=t;const s=(0,a.P)(e);return(0,c.jsx)("section",{className:"margin-vert--lg",children:s.map((t=>(0,c.jsx)(i,{letterEntry:t},t.letter)))})}},35155:(t,e,s)=>{s.d(e,{M:()=>r,P:()=>l});var a=s(95999);const r=()=>(0,a.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function l(t){const e={};return Object.values(t).forEach((t=>{const s=function(t){return t[0].toUpperCase()}(t.label);e[s]??=[],e[s].push(t)})),Object.entries(e).sort(((t,e)=>{let[s]=t,[a]=e;return s.localeCompare(a)})).map((t=>{let[e,s]=t;return{letter:e,tags:s.sort(((t,e)=>t.label.localeCompare(e.label)))}}))}}}]);