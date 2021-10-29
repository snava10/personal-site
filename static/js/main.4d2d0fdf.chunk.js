(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{21:function(e,t,n){"use strict";var c=n(0),a=n(1),i=n(16),s=n(3),l=n(12),r=Object({NODE_ENV:"production",PUBLIC_URL:"/personal-site",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),j=r.NODE_ENV,o=r.REACT_APP_GA_TRACKING_ID;"production"===j&&l.a.initialize(o);var b=function(){var e=Object(s.f)().pathname;return Object(a.useEffect)((function(){"production"===j&&(l.a.set({page:e}),l.a.pageview(e))}),[e]),null},u=n(5),h=n(25),d=[{index:!0,label:"Sergio Navarrete",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}],O=Object(a.lazy)((function(){return n.e(4).then(n.t.bind(null,167,7))})),m=function(){var e=Object(a.useState)(!1),t=Object(h.a)(e,2),n=t[0],i=t[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:n?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return i(!n)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return i(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(a.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:n,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:d.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,onClick:function(){return i(!n)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},x=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:d.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(u.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:d.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(m,{})]})},p=n(26),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(u.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("/personal-site","/images/me.jpeg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Sergio Navarrete"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:sergio.nava89@gmail.com",children:"sergio.nava89@gmail.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsxs)("p",{children:["Hi, I'm Sergio. I like computers, mathematics and science in general. I have a bachelours degree in Computer Science and I'm currently a Software Engineer at Facebook. I have worked as a Software Engineer at ",Object(c.jsx)("a",{href:"https://goldmansachs.com",children:"Goldman Sachs"}),", ",Object(c.jsx)("a",{href:"https://rosslyndatatech.com",children:"Rosslyn Data Technologies"})," and ",Object(c.jsx)("a",{href:"https://talentmap.com",children:"Talent Map"}),". I was also a teaching assistant and reasercher at the Technological University in Havana ",Object(c.jsx)("a",{href:"https://cujae.edu.cu",children:"CUJAE"})]}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(u.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(u.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(p.a,{}),Object(c.jsx)("p",{className:"copyright",children:"\xa9 Sergio Navarrete"})]})]})},g=function(){var e=Object(s.f)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},v=function(e){return Object(c.jsxs)(i.b,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(g,{}),Object(c.jsxs)(i.a,{titleTemplate:"%s | Sergio Navarrete",defaultTitle:"Sergio Navarrete",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(x,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};v.defaultProps={children:null,fullPage:!1,title:null,description:"Sergio Navarrete's personal website."};t.a=v},26:function(e,t,n){"use strict";var c=n(0),a=(n(1),n(24)),i=n(30),s=n(31),l=n(32),r=[{link:"https://github.com/snava10",label:"Github",icon:i.faGithub},{link:"https://www.linkedin.com/in/sergio-navarrete/",label:"LinkedIn",icon:s.faLinkedinIn},{link:"mailto:sergio.nava89@gmail.com",label:"Email",icon:l.faEnvelope}];t.a=function(){return Object(c.jsx)("ul",{className:"icons",children:r.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(a.a,{icon:e.icon})})},e.label)}))})}},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),s=n(15),l=n(5),r=n(3),j=n(21),o=(n(45),Object(a.lazy)((function(){return Promise.all([n.e(2),n.e(7)]).then(n.bind(null,163))}))),b=Object(a.lazy)((function(){return n.e(8).then(n.bind(null,164))})),u=Object(a.lazy)((function(){return n.e(9).then(n.bind(null,165))})),h=Object(a.lazy)((function(){return n.e(10).then(n.bind(null,166))})),d=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,170))})),O=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,168))})),m=Object(a.lazy)((function(){return n.e(11).then(n.bind(null,169))})),x=function(){return Object(c.jsx)(l.a,{basename:"/personal-site",children:Object(c.jsx)(a.Suspense,{fallback:Object(c.jsx)(j.a,{}),children:Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",component:u}),Object(c.jsx)(r.a,{path:"/about",component:o}),Object(c.jsx)(r.a,{path:"/projects",component:d}),Object(c.jsx)(r.a,{path:"/stats",component:m}),Object(c.jsx)(r.a,{path:"/contact",component:b}),Object(c.jsx)(r.a,{path:"/resume",component:O}),Object(c.jsx)(r.a,{component:h,status:404})]})})})},p=function(){return Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(x,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(s.hydrate)(Object(c.jsx)(p,{}),f):Object(s.render)(Object(c.jsx)(p,{}),f)}},[[46,1,3]]]);
//# sourceMappingURL=main.4d2d0fdf.chunk.js.map