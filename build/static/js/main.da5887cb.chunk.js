(this.webpackJsonpgallery=this.webpackJsonpgallery||[]).push([[0],{122:function(e,t,n){e.exports={spinner:"src_spinner__18g4U"}},170:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(14),r=n.n(i),o=n(44),s=n(50),l=n(20),j=n(216),u=n(57),b=n(221),d=n(222),m=n(218),O=n(220),h=n(18),p=[{menuTitle:"Home",pageURL:"/home"},{menuTitle:"Gallery",pageURL:"/gallery"},{menuTitle:"Contact",pageURL:"/contact"}],x=[{menuTitle:"Naslovnica",pageURL:"/home"},{menuTitle:"Galerija",pageURL:"/gallery"},{menuTitle:"Kontakt",pageURL:"/contact"}],g=n(2),f=Object(j.a)((function(e){return{headerOptions:{display:"flex",flex:1,justifyContent:"flex-end",background:"transparent"},headerButton:{marginLeft:20,marginRight:20,color:"inherit","&:hover":{transform:"scale(1.02) ",color:"#eef",cursor:"pointer"},textDecoration:"none"},active:{transform:"scale(1.02) ",color:"#eef",textDecoration:"underline"}}})),v=function(e){var t=f();return Object(g.jsx)("div",{className:t.headerOptions,children:e.menuItems.map((function(e){var n=e.menuTitle,a=e.pageURL;return Object(g.jsx)(o.b,{to:a,activeClassName:t.active,className:t.headerButton,children:Object(g.jsx)(m.a,{variant:"h6",children:n})},n)}))})},k=n(15),A=n(219),w=n(114),N=n.n(w),S=n(246),C=n(124),E=n(245),M=Object(j.a)((function(e){return{menuButton:{}}})),T=function(e){var t=M(),n=c.a.useState(null),a=Object(k.a)(n,2),i=a[0],r=a[1],o=Boolean(i),s="en"===Object(E.a)().i18n.language?p:x;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(A.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",onClick:function(e){r(e.currentTarget)},children:Object(g.jsx)(N.a,{})}),Object(g.jsx)(C.a,{id:"menu-appbar",anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:o,onClose:function(){return r(null)},children:s.map((function(t){var n=t.menuTitle,a=t.pageURL;return Object(g.jsx)(S.a,{onClick:function(){return function(t){e.history.push(t),r(null)}(a)},children:n},n)}))})]})},y=n(63),R=n.n(y),I=n(115),Y=n.n(I),D=function(){var e=Object(a.useState)({eng:!1,cro:!0}),t=Object(k.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(null),r=Object(k.a)(i,2),o=r[0],s=r[1],l=Object(E.a)(),j=l.t,u=l.i18n;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("button",{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},className:R.a.picker,children:[Object(g.jsx)(m.a,{variant:"h6",component:"span",children:j("select-language")}),Object(g.jsx)(Y.a,{})]}),Object(g.jsxs)(C.a,{id:"simple-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:function(){s(null)},children:[Object(g.jsx)(S.a,{onClick:function(){!0===n.eng&&!1===n.cro&&(u.changeLanguage("hr"),c({eng:!1,cro:!0}))},children:Object(g.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlEMDM4OTYyMEMzRjExRTZBMjkzQzhBQkY5NEQzNEE2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlEMDM4OTYzMEMzRjExRTZBMjkzQzhBQkY5NEQzNEE2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUQwMzg5NjAwQzNGMTFFNkEyOTNDOEFCRjk0RDM0QTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUQwMzg5NjEwQzNGMTFFNkEyOTNDOEFCRjk0RDM0QTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7ik8L8AAAFTklEQVR42qyXf2xTVRTHv6/t1q3tHF3XdT9CxjIcZdBtxgGOERkqmkkCRghECVFZTIgS/5ggBESjEmL45QjGGIQ54Q+DGuIfKjEGmT+WiXPAslU3GBss+9mt+9XSrT+v5+2+Zmu3tm+Bk3zSd+89957Td8499z6BQbZkEE8RTxIWqa2TxpxEP9FM/EZcJXplrcpiU0B8QQwSTCZDxFmiMNb60QZ1xFHCNQ/D4UwQx4ik+TqQTzQ8gOFwGollch1YQfRGWmzSkMbcCwxTzx2WEnbHspqPJSczj8EYzYl+YlW4PSEsCc1SAqXP7Oy0lMArqLCovx1vZu2G8f4QNizqRsWWd6CgZQ5dqsHFO7nQJAHnu4+hw5QLJc3Lba4LT7kBYh3xX7BjpgNa4k+iaOaMsbQsbH7vAmxpGjz3Qz2e/roaTn8c6jaVwrfDD7Xfh9ory6H/0YqmoSVI3V6MzPIeZA9P4OjBj2CwdYY70USskXYO/YFpeT/cuChteSvQrNdD727Gpxlr8J3mCTSoF6PHZoTVYcFNRxHso8nY++7P2PzsP0hVOTDhycE3+vVoNxfOtfHEzg+CDZX0m0+8NZf2401XkNe7Fy2pG7Ew144CTS9Uk5No9SZgLDED8fChZ0CLYxc2AHHpeMNTA2W1AwFzKYpa/oi0+3cTXxItwRCcI3ZG0r74/E7sqziOtL5OWC7+hMduNyNHM4ZHUpRTieSzT6B9VI8b5iLcqngROr8LZ87shqnx72gl6CviVYFt22ZCINBKjQWRNO8n6lBnWIzSG79C67IDSoqc2wuMjHEFfTKgjgP8AYwnpOD3leVYPdKBlLFByjIh0rLjxBLaH2w7iyWDNsaWmRkzpjJ26hTvs1oZy8zktLTwvtOnuY6oK86JLTvEHCiLWa/dHqC7j7bEGCcovWHlXhwbHAI8Xj4ntqwTyIu/6GFVVLU+Mn7yJOBwUIVI57hcwK1bfDwvD9BoaJcPcN0kKgiVlXRcZcRyoEEMwd2YL6q/f/r54EFe2ZYune7Lz+d9+/fPPSey3FPMOFKji9MZ2k5ImP0cTLhw3ciiVclS8/uBrVsBmw3YuJFeXAPQ1QUUF/PxAweA7Gzg8mU6SVYARiMdxmfluSArBN3djOl0/DUfPsz72tqmD5rWVt535Ahvi7riHBkhUEk3meyoXiooUuXl/A2Ib6O2lu+AtWv5eGMjTz6fj/elpUXb/6GHE3lxNqafw8OMORyhSWixTI8XFIQmodPJmN0u5w1UK6TjN7rQYQSPY3ZeBCUQCE1CN+mmpMh5A7XCrl2/mAIB1kaN5Ig5yASkKibwoaEB8QoqMsvp0BwZ4aEQpayMO2ltgo/F4ZC9GDZfIlRC1CvvuEIhmAWttkpsVBOvRb64CvAwJV7PvIeqj1cifvMWOqfpTmHO5wr/WoGl+fB+fwmV+67h8+6FiBcCNCuqA+eJV1Q6XbzYOEG8TKijzrDn4O6JcezxNaIky4PE3Owp9yaHRlH/7XWcqBrF1cFFMCSJ2spoS4l1+vhU1Eymz4KdYsfbsYLmcjOofB48mqlCtoEb6bL7cbvPB68yDhq1Qk7sPyEqwx3QSVeyQjnfEh7acT7Gk06MdTxtaEFe6RE/XkoJR/iVzCmFYSDWCqIhNRnUxrEp1PKNUyHBS0Hj4Q5MpROxSSpOD1vEP/YCYQ2pcXMoXiOeIa4/ROM3iPVE/awiG2GCVbqoiLtj8gEMu6WEK5NiD7kOQIrTHqJEusEOz8OwqFsjza2U7n9zipzj+KZ0Y86SPs/FE2g5YZpxl7gv5Y1V+jy/QvTI8fR/AQYA7p4AfmeaXd8AAAAASUVORK5CYIIyMjcw",alt:"cro",className:n.cro?R.a["active-lang"]:R.a["inactive-lang"]})}),Object(g.jsx)(S.a,{onClick:function(){!1===n.eng&&!0===n.cro&&(u.changeLanguage("en"),c({eng:!0,cro:!1}))},children:Object(g.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAyNjMzNTMxMEQyRDExRTY4MDBCQzkwMkVDNDdCODZCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAyNjMzNTMyMEQyRDExRTY4MDBCQzkwMkVDNDdCODZCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDI2MzM1MkYwRDJEMTFFNjgwMEJDOTAyRUM0N0I4NkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDI2MzM1MzAwRDJEMTFFNjgwMEJDOTAyRUM0N0I4NkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7eQ9iZAAAFL0lEQVR42sSXf0yUdRzH38/dwx13iKA0kFoiIZxC/kihNBHlABdo/qg0RWtG6voDXQtc2VraVqupqJuVLbd0M4e6Rchczg45EEqTBha/UcofU8FNLH4dd8fd0/t57vzN4V1c63N73W73fJ/P+/P5Pp/n8/1+hZz3vsc3+08DI7TwaD1WLF+eGFm4c6mx92xtSuu8FZMEUR0JQRihXHdKPRKkdoPpcJ1+2qSKV3IPmb8rqr2GoKF95qyeCRGPtslkPVlMHvMwRv5/HJlB1pKbpJjsJr8N5Vw1xDU5u63kDFkzhPhgFkbedN+7jQT7GkA8MZONRId/b4Ekn5STBG8DSCKlJBH+s2nkJHnuoQAs/Xagqx/oJhb7BEgo4f+R8L9FQJKOUmOiokXNPmqLC9MmIDyYM6URg2oarhVWVl0Yw6rmxGsAwU/SkiQnB6hVEakZCYVJSdHJsA70PJsYBXH5gkmQoW0mU0tKm7FjbxUqfm7DnUCGL4y09Hjk5xqR/qRmir3kh4/sHe159hM/QbTUt0ClDYjXxj61Qb5nYfoEBTmQgq+rcOo0A+mzKb681+XgXpsibExzCWdEadF34AiaduyF9fqNXF2CYZ+g1dSLTTPmM1NnXnDKDG34+hwEp82GKlB7XyCf7jqJAYfT6wAGHBKenxOH999ORcZYCh8sROOeA7B1dCAkMwNRB97SUC+fzWy1cKv4eETfuYZmEqrS6xCSZcSolxcoQdw2BzNqu9SJuHFhYCcEOyF4M2vEXSR8VPKHnRDshGj98ybGR4dB1daGq18dRP8fl6AOGYnR2UswMj3lttsuYhA4XSv541tvs7P83ojmlJcGDWBiZTEC4+N8qZLXxd7qc3Ndv+8tec8PvL+x9a7wbRNcX301dXD09mGQi578pgo1oYYzgzUIj0ZxQa0evPgcDvhUrUC1SGdj/NVpBJXK5+Yk3llS/RKBz50rSIX/2UQ+sx738jn8TH17/rL1ipLT2c4fUd5rCx4DUDqgb0F0iHGmw/UPvgUPupfuew1bcHnDh3wTVHcDkSRlTNTuT6A1xHgO/mG/9WLQ9Mlm9+7FK1OJ4sNZSq4v/dQEXxtRuejefPxNQpT+aKpA56GjcHR1Qxc9Fo+vy4YzJoat+CZi2YqdVqtHb85+17XzF9mKOfbejJ2Wftw6UkL/p5Rx+umTu5i8ScVsOiS7vairtBLns1ahZd4ydB0zYXR8DMLWrMSxS3YkL/wSmwpKvU5r42cnkLJoD46Xt96dOV0gRi19kevMfAx0/oVrWwqKLyx+47rYmPgCJKutwNLQkq2NDNcatn4A3aplMF22YfvHZpjNzZwWC16N8X5PqlYLqKJ4Vu0VGJPHI2/tLGSlGiAvdqFLMmVslsbW7dSFGD5vNgLUQoMm97XPAxbNzzNdsWHbuydcwk4uwboAQK9xVb8vb0oQNzIaNcoYSFnleRhnxyJ/XTIy5yo18oUuPq5O6QPlnPaz1RchDYhbft30Y3r5yaYpd4QFcfidUQ6ERVtWwUCqLiA1JbbumYTIzdySIUnekhUVVaOQOx8Ea3sgqrMRKJZROMKv7U4ORK8EcsNc3rrCXNrUjW4rlq6ZJdcGMx3JTam8MdUFNHLwIt7S/h903Q76XkyNBkWLmnpqD7YW/ELSSY0fxWtJBjnt7cmogcgblQK5+Q1DWG4MO92+6nw9G3a7j1UzyT7S6YOwPHa/+9533Ps/D6vho+0cySFPECOZQ55WTjquA6yyqrnrRp65Cvcx7Ko3kf4jwAAdHOLgDxaveQAAAABJRU5ErkJggjIyMzk=",alt:"uk",className:n.eng?R.a["active-lang"]:R.a["inactive-lang"]})})]})]})},G=Object(j.a)((function(e){var t;return{root:{flexGrow:1},header:{backgroundColor:"#fff",color:"white",background:"linear-gradient(90deg, #159015, #26ac29, #3cc453)"},title:(t={},Object(l.a)(t,e.breakpoints.down("sm"),{flexGrow:1,fontSize:"1.5rem"}),Object(l.a)(t,"fontSize","2rem"),Object(l.a)(t,"&:hover",{cursor:"pointer"}),Object(l.a)(t,"fontWeight",300),Object(l.a)(t,"marginLeft",10),t)}})),z=Object(h.i)((function(e){var t=e.history,n=G(),a=Object(u.a)(),c=Object(O.a)(a.breakpoints.down("sm")),i=Object(E.a)(),r=i.t,o="en"===i.i18n.language?p:x;return Object(g.jsx)("div",{className:n.root,children:Object(g.jsx)(b.a,{position:"static",className:n.header,children:Object(g.jsxs)(d.a,{children:[Object(g.jsx)(m.a,{variant:"h6",className:n.title,onClick:function(){return t.push("/")},children:r("page-title")}),c?Object(g.jsx)(T,{history:t}):Object(g.jsx)(v,{menuItems:o,handleButtonClick:function(e){t.push(e)}}),Object(g.jsx)(D,{})]})})})})),B=n(43),Z=n.n(B),L=n(58),Q=n(26),U=n.n(Q),H=n(116),W=n(223),F=n(224),V=n(238),J=Object(j.a)((function(e){var t;return{container:(t={backgroundColor:"white",minHeight:"200px",display:"flex",marginTop:20,marginBottom:"5%",padding:10,boxShadow:"rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px",fontSize:"1.2rem"},Object(l.a)(t,e.breakpoints.down("sm"),{textAlign:"center"}),Object(l.a)(t,e.breakpoints.up("sm"),{textAlign:"justify"}),t),text:{marginTop:10,textAlign:"justify"}}})),P=function(e){var t=J(),n=Object(E.a)().t;return Object(g.jsx)(W.a,{children:Object(g.jsxs)(V.a,{container:!0,component:F.a,className:t.container,boxShadow:2,spacing:2,children:[Object(g.jsx)(m.a,{variant:"h3",component:"h2",color:"primary",children:n("home-title")}),Object(g.jsx)(m.a,{variant:"body1",component:"p",className:t.text,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenascommodo dictum velit, id pharetra mi vestibulum nec. Donecullamcorper, arcu eget commodo lobortis, eros ante dignissim dolor,bibendum hendrerit tellus lectus nec velit. Aliquam quis justofelis. Orci varius natoque penatibus et magnis dis parturientmontes, nascetur ridiculus mus. Etiam malesuada lobortis metusblandit aliquam. Pellentesque turpis mauris, semper eu egestas in,sollicitudin at sapien. Sed ultricies orci quis ipsum facilisis, nonvehicula risus facilisis. Pellentesque quis quam justo."})]})})},X=(n(170),Object(j.a)((function(e){var t;return{image:(t={},Object(l.a)(t,e.breakpoints.down("sm"),{width:"100%"}),Object(l.a)(t,e.breakpoints.up("md"),{width:"80%"}),Object(l.a)(t,e.breakpoints.up("lg"),{width:"65%"}),Object(l.a)(t,e.breakpoints.up("xl"),{width:"55%"}),t)}}))),q=function(e){var t=X(),n=Object(O.a)("(max-width:600px)"),i=Object(a.useState)([]),r=Object(k.a)(i,2),o=r[0],s=r[1];Object(a.useEffect)((function(){var e=U.a.CancelToken.source();return function(){var t=Object(L.a)(Z.a.mark((function t(){var n;return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,U.a.get("/images/",{cancelToken:e.token});case 3:n=t.sent,s(n.data),t.next=14;break;case 7:if(t.prev=7,t.t0=t.catch(0),!U.a.isCancel(t.t0)){t.next=13;break}console.log(t.t0),t.next=14;break;case 13:throw t.t0;case 14:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}()(),function(){e.cancel()}}),[]);var l=o.map((function(e){return Object(g.jsx)("img",{src:e.path_to_file,alt:"preview",className:t.image})}));return Object(g.jsxs)(c.a.Fragment,{children:[Object(g.jsx)(P,{}),Object(g.jsx)(H.Carousel,{slides:l,arrows:!n})]})},K=n(225),_=n(226),$=n(229),ee=n(228),te=n(230),ne=n(59),ae=n.n(ne),ce=n(227),ie=Object(j.a)({root:{maxWidth:300,display:"inline-block",margin:"auto",marginTop:30,minWidth:300,"&:hover":{transform:"scale(1.02) "}},media:{height:200,width:"100%"},success:{light:"#81c784",main:"#4caf50",dark:"#388e3c"},circular:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}});function re(e){var t=ie(),n=Object(E.a)().t,c=Object(h.g)(),i=Object(a.useState)(!1),r=Object(k.a)(i,2),o=r[0],s=r[1];return Object(g.jsxs)(K.a,{className:t.root,children:[Object(g.jsxs)(_.a,{onClick:function(){e.onClickInfo({title:e.title,description:e.description,path:e.path})},children:[Object(g.jsx)(ae.a,{duration:2e3,children:Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("img",{style:o?{}:{display:"none"},src:e.path,className:t.media,onLoad:function(){return s(!0)},alt:"preview"}),!o&&Object(g.jsx)("div",{className:t.media,children:Object(g.jsx)(ce.a,{className:t.circular})})]})}),Object(g.jsxs)(ee.a,{children:[Object(g.jsx)(m.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.title}),Object(g.jsx)(m.a,{variant:"body2",color:"textSecondary",component:"p",children:e.shortendDescription})]})]}),Object(g.jsx)($.a,{children:Object(g.jsx)(te.a,{size:"small",color:"primary",value:e.index,onClick:function(e){c.push("/paintings/"+e.currentTarget.value)},children:n("learn-more")})})]})}var oe=n(242),se=Object(j.a)((function(e){return{paper:{boxShadow:e.shadows[5],border:"none",width:"100%"},test:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}}}));function le(e){var t=se();return Object(g.jsx)("div",{children:Object(g.jsx)(oe.a,{open:e.open,onClose:e.handleClose,children:Object(g.jsx)("div",{className:t.test,children:Object(g.jsx)(ae.a,{duration:1500,children:Object(g.jsx)("img",{src:e.path,className:t.paper,onLoad:e.handleOpen,alt:"preview"})})})})})}var je=Object(j.a)((function(e){return{container:{display:"flex !important",flexDirection:"row",flexWrap:"wrap"}}})),ue=function(){var e=je(),t=Object(a.useState)([]),n=Object(k.a)(t,2),i=n[0],r=n[1],o=Object(a.useState)(""),s=Object(k.a)(o,2),l=s[0],j=s[1],u=c.a.useState(!1),b=Object(k.a)(u,2),d=b[0],m=b[1];Object(a.useEffect)((function(){var e=U.a.CancelToken.source();return function(){var t=Object(L.a)(Z.a.mark((function t(){var n;return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,U.a.get("/images/",{cancelToken:e.token});case 3:n=t.sent,r(n.data),t.next=14;break;case 7:if(t.prev=7,t.t0=t.catch(0),!U.a.isCancel(t.t0)){t.next=13;break}console.log(t.t0),t.next=14;break;case 13:throw t.t0;case 14:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}()(),function(){e.cancel()}}),[]);var O=function(e){m(!0),j(e)};return Object(g.jsxs)(c.a.Fragment,{children:[Object(g.jsx)(W.a,{maxWidth:"lg",className:e.container,children:i.map((function(e,t){var n=e.description;if(n.length>50){var a=n.match(/.{1,80}(\s|$)/g);n=a[0]+"..."}return Object(g.jsx)(re,{index:t,title:e.title,description:e.description,shortendDescription:n,path:e.path_to_file,painted_at:e.painted_at,onClickInfo:O},e._id)}))}),Object(g.jsx)(le,{title:l.title,description:l.description,path:l.path,handleClose:function(){m(!1)},open:d})]})},be=n(231),de=n(239),me=n(232),Oe=n(244),he=n(241);function pe(e){return Object(g.jsx)(he.a,Object(s.a)({elevation:6,variant:"filled"},e))}var xe=function(e){var t=Object(E.a)().t,n=function(t,n){"clickaway"!==n&&e.setSuccessOpen(!1)},a=function(t,n){"clickaway"!==n&&e.setErrorOpen(!1)},i=function(t,n){"clickaway"!==n&&e.setInfoOpen(!1)};return Object(g.jsxs)(c.a.Fragment,{children:[Object(g.jsx)(Oe.a,{open:e.successOpen,autoHideDuration:3e3,onClose:n,children:Object(g.jsx)(pe,{onClose:n,severity:"success",children:t("success-message")})}),Object(g.jsx)(Oe.a,{open:e.errorOpen,autoHideDuration:3e3,onClose:a,children:Object(g.jsx)(pe,{onClose:a,severity:"error",children:t("error-message")})}),Object(g.jsx)(Oe.a,{open:e.infoOpen,autoHideDuration:3e3,onClose:i,children:Object(g.jsx)(pe,{onClose:i,severity:"info",children:t("info-message")})})]})},ge=Object(j.a)((function(e){return{container:{width:"80%",marginTop:"5rem",textAlign:"center"},button:{marginTop:15},form:Object(l.a)({width:"50%",margin:"auto"},e.breakpoints.down("md"),{width:"100%"})}})),fe=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,ve=function(e){var t=Object(a.useState)(""),n=Object(k.a)(t,2),c=n[0],i=n[1],r=Object(a.useState)(null),o=Object(k.a)(r,2),s=o[0],l=o[1],j=Object(a.useState)(""),u=Object(k.a)(j,2),b=u[0],d=u[1],O=Object(a.useState)(null),h=Object(k.a)(O,2),p=h[0],x=h[1],f=Object(a.useState)(""),v=Object(k.a)(f,2),A=v[0],w=v[1],N=Object(a.useState)(null),S=Object(k.a)(N,2),C=S[0],M=S[1],T=Object(a.useState)(!1),y=Object(k.a)(T,2),R=y[0],I=y[1],Y=Object(a.useState)(!1),D=Object(k.a)(Y,2),G=D[0],z=D[1],B=Object(a.useState)(!1),Z=Object(k.a)(B,2),L=Z[0],Q=Z[1],H=Object(a.useState)(!1),F=Object(k.a)(H,2),V=F[0],J=F[1],P=ge(),X=Object(E.a)().t,q=function(e){i(e.target.value),e.target.value.trim().length<3?l(!1):l(!0)},K=function(e){d(e.target.value),e.target.value.trim().length<10?x(!1):x(!0)},_=function(e){w(e.target.value),fe.test(e.target.value)?M(!0):M(!1)};Object(a.useEffect)((function(){if(C&&s&&p)return console.log("valid form"),void I(!0);I(!1)}),[C,s,p]);var $=function(){w(""),i(""),d("")};return Object(g.jsxs)(W.a,{className:P.container,children:[Object(g.jsx)(m.a,{variant:"h3",component:"h2",color:"primary",children:X("contact-title")}),Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),J(!0);var t={name:c.trim(),message:b.trim(),email:A.trim()};U.a.post("/send",t).then((function(e){$(),J(!1),z(!0)}),(function(e){J(!1),Q(!0)}))},className:P.form,children:[Object(g.jsx)("div",{children:Object(g.jsx)(be.a,{fullWidth:!0,margin:"normal",children:Object(g.jsx)(de.a,{required:!0,id:"name",label:X("name"),value:c,onChange:q,onBlur:q,error:!s&&null!=s,helperText:s||null==s?"":X("name-restriction")})})}),Object(g.jsx)("div",{children:Object(g.jsx)(be.a,{fullWidth:!0,margin:"normal",children:Object(g.jsx)(de.a,{required:!0,id:"message",label:X("message"),multiline:!0,rows:4,variant:"outlined",value:b,onChange:K,onBlur:K,error:!p&&null!=p,helperText:p||null==p?"":X("message-restriction")})})}),Object(g.jsx)("div",{children:Object(g.jsxs)(be.a,{fullWidth:!0,children:[Object(g.jsx)(de.a,{required:!0,id:"email",label:X("email"),type:"email",value:A,onChange:_,onBlur:_,error:!C&&null!=C,helperText:C||null==C?"":X("email-restriction")}),Object(g.jsx)(me.a,{id:"my-helper-text",children:X("email-helper-text")})]})}),Object(g.jsx)(te.a,{variant:"contained",fullWidth:!0,type:"submit",disabled:!R,color:"primary",className:P.button,children:X("submit")})]}),Object(g.jsx)(xe,{errorOpen:L,successOpen:G,setErrorOpen:Q,setSuccessOpen:z,setInfoOpen:J,infoOpen:V})]})},ke=n(123),Ae=n(236),we=n(117),Ne=Object(j.a)((function(e){return{container:{marginTop:50,marginBottom:40,background:"white",textAlign:"center"},textGrid:{textAlign:"justify",padding:12,"& h2":{marginTop:10}}}})),Se=function(e){var t=Ne(),n=e.imageInfo,a=Object(E.a)().t;return Object(g.jsx)(W.a,{className:t.container,fixed:!0,children:Object(g.jsxs)(V.a,{container:!0,component:F.a,boxShadow:2,spacing:2,children:[Object(g.jsxs)(F.a,{item:!0,xs:12,md:4,className:t.textGrid,children:[Object(g.jsx)(m.a,{variant:"h3",component:"h2",color:"primary",children:n.title}),Object(g.jsx)(m.a,{variant:"body1",component:"h2",children:n.description}),Object(g.jsxs)(m.a,{variant:"subtitle1",component:"h2",children:[Object(g.jsxs)("strong",{children:[a("painted-at")," "]})," ",n.painted_at.substring(0,4)]}),Object(g.jsxs)(m.a,{variant:"subtitle1",component:"h2",children:[Object(g.jsxs)("strong",{children:[a("technique")," "]})," ",n.technique]})]}),Object(g.jsx)(F.a,{item:!0,xs:12,md:8,children:Object(g.jsx)(we.a,{src:n.path_to_file,zoomImgSrc:n.path_to_file,zoom:1.5,mgWidth:200,mgHeight:200,mgShowOverflow:!1,className:t.image,mgBorderWidth:1})})]})})},Ce=n(235),Ee=n(240),Me=n(237),Te=n(233),ye=n(234);n(173),n(174),n(175),n(176);Me.a.use([Te.a,ye.a]);var Re=function(e){var t=Object(h.h)().index,n=Object(a.useState)([]),c=Object(k.a)(n,2),i=c[0],r=c[1];Object(a.useEffect)((function(){var e=U.a.CancelToken.source();return function(){var t=Object(L.a)(Z.a.mark((function t(){var n;return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,U.a.get("/images/",{cancelToken:e.token});case 3:n=t.sent,r(n.data),t.next=14;break;case 7:if(t.prev=7,t.t0=t.catch(0),!U.a.isCancel(t.t0)){t.next=13;break}console.log(t.t0),t.next=14;break;case 13:throw t.t0;case 14:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}()(),function(){e.cancel()}}),[]);var o=i.map((function(e){return Object(g.jsx)(Ce.a,{children:Object(g.jsx)(Se,{imageInfo:e})},e._id)}));return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(ae.a,{duration:1500,children:Object(g.jsx)(Ee.a,{navigation:!0,pagination:!0,autoHeight:!1,initialSlide:+t,children:o})})})},Ie=Object(ke.a)({palette:{primary:{contrastText:"#fff",light:"#81c784",main:"#4caf50",dark:"#388e3c"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}},typography:{fontFamily:["Kaisei HarunoUmi"]}});var Ye=function(){var e=Object(E.a)().i18n;return Object(a.useEffect)((function(){e.changeLanguage("hr")}),[]),Object(g.jsx)("div",{children:Object(g.jsxs)(Ae.a,{theme:Ie,children:[Object(g.jsx)(z,{}),Object(g.jsxs)(h.d,{children:[Object(g.jsx)(h.b,{exact:!0,from:"/",children:Object(g.jsx)(h.a,{to:"/home"})}),Object(g.jsx)(h.b,{exact:!0,path:"/home",render:function(e){return Object(g.jsx)(q,Object(s.a)({},e))}}),Object(g.jsx)(h.b,{exact:!0,path:"/gallery",render:function(e){return Object(g.jsx)(ue,Object(s.a)({},e))}}),Object(g.jsx)(h.b,{exact:!0,path:"/contact",render:function(e){return Object(g.jsx)(ve,Object(s.a)({},e))}}),Object(g.jsx)(h.b,{exact:!0,path:"/paintings/:index",render:function(e){return Object(g.jsx)(Re,Object(s.a)({},e))}})]})]})})},De=n(90),Ge=n(67),ze=n(119),Be=n(121);De.a.use(ze.a).use(Be.a).use(Ge.e).init({fallbackLng:"hr",debug:!0,interpolation:{escapeValue:!1}});De.a;var Ze=n(122),Le=n.n(Ze);r.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(a.Suspense,{fallback:Object(g.jsx)(ce.a,{className:Le.a.spinner}),children:Object(g.jsx)(o.a,{children:Object(g.jsx)(Ye,{})})})}),document.getElementById("root"))},63:function(e,t,n){e.exports={picker:"LanguagePicker_picker__2SbAO","active-lang":"LanguagePicker_active-lang__2pAOU","inactive-lang":"LanguagePicker_inactive-lang__34XT9"}}},[[177,1,2]]]);
//# sourceMappingURL=main.da5887cb.chunk.js.map