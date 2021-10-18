(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{21:function(e,t,n){"use strict";var c=n(0),a=n(1),l=n(16),i=n(3),r=n(12),s=Object({NODE_ENV:"production",PUBLIC_URL:"/personal-site",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GA_TRACKING_ID:"UA-68649021-1"}),o=s.NODE_ENV,j=s.REACT_APP_GA_TRACKING_ID;"production"===o&&r.a.initialize(j);var b=function(){var e=Object(i.f)().pathname;return Object(a.useEffect)((function(){"production"===o&&(r.a.set({page:e}),r.a.pageview(e))}),[e]),null},h=n(5),d=n(22),u=[{index:!0,label:"Sergio Navarrete",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}],O=Object(a.lazy)((function(){return n.e(5).then(n.t.bind(null,172,7))})),m=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],l=t[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:n?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(a.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:n,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:u.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:e.path,onClick:function(){return l(!n)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},x=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:u.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(h.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:u.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(m,{})]})},p=n(25),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(h.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("/personal-site","/images/me.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Sergio Navarrete"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:sergio.nava89@gmail.com",children:"sergio.nava89@gmail.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsxs)("p",{children:["Hi, I'm Sergio. I like building things. I am a ",Object(c.jsx)("a",{href:"https://icme.stanford.edu/",children:"Stanford ICME"})," graduate, YC Alumni, and the co-founder and CTO of ",Object(c.jsx)("a",{href:"https://arthena.com",children:"Arthena"}),". Before Arthena I was at ",Object(c.jsx)("a",{href:"https://matroid.com",children:"Matroid"}),", ",Object(c.jsx)("a",{href:"https://planet.com",children:"Planet"}),", ",Object(c.jsx)("a",{href:"https://planetaryresources.com",children:"Planetary Resources"}),", ",Object(c.jsx)("a",{href:"https://facebook.com",children:"Facebook"}),", and ",Object(c.jsx)("a",{href:"https://seds.org",children:"SEDS"}),"."]}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(h.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(h.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(p.a,{}),Object(c.jsxs)("p",{className:"copyright",children:["\xa9 Sergio Navarrete ",Object(c.jsx)(h.b,{to:"/",children:"mldangelo.com"}),"."]})]})]})},g=function(){var e=Object(i.f)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},v=function(e){return Object(c.jsxs)(l.b,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(g,{}),Object(c.jsxs)(l.a,{titleTemplate:"%s | Sergio Navarrete",defaultTitle:"Sergio Navarrete",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(x,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};v.defaultProps={children:null,fullPage:!1,title:null,description:"Sergio Navarrete's personal website."};t.a=v},25:function(e,t,n){"use strict";var c=n(0),a=(n(1),n(29)),l=n(30),i=n(31),r=n(32),s=n(33),o=n(34),j=n(35),b=n(36),h=[{link:"https://github.com/mldangelo",label:"Github",icon:l.faGithub},{link:"https://facebook.com/md",label:"Facebook",icon:i.faFacebookF},{link:"https://www.instagram.com/dangelosaurus/",label:"Instagram",icon:r.faInstagram},{link:"https://www.linkedin.com/in/michaelldangelo",label:"LinkedIn",icon:s.faLinkedinIn},{link:"https://angel.co/michael-d-angelo",label:"Angel List",icon:o.faAngellist},{link:"https://twitter.com/dangelosaurus",label:"Twitter",icon:j.faTwitter},{link:"mailto:michael.l.dangelo@gmail.com",label:"Email",icon:b.faEnvelope}];t.a=function(){return Object(c.jsx)("ul",{className:"icons",children:h.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(a.a,{icon:e.icon})})},e.label)}))})}},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),l=n.n(a),i=n(15),r=n(5),s=n(3),o=n(21),j=(n(49),Object(a.lazy)((function(){return Promise.all([n.e(2),n.e(8)]).then(n.bind(null,169))}))),b=Object(a.lazy)((function(){return n.e(9).then(n.bind(null,176))})),h=Object(a.lazy)((function(){return n.e(10).then(n.bind(null,170))})),d=Object(a.lazy)((function(){return n.e(11).then(n.bind(null,171))})),u=Object(a.lazy)((function(){return n.e(7).then(n.bind(null,175))})),O=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,173))})),m=Object(a.lazy)((function(){return Promise.all([n.e(4),n.e(12)]).then(n.bind(null,174))})),x=function(){return Object(c.jsx)(r.a,{basename:"/personal-site",children:Object(c.jsx)(a.Suspense,{fallback:Object(c.jsx)(o.a,{}),children:Object(c.jsxs)(s.c,{children:[Object(c.jsx)(s.a,{exact:!0,path:"/",component:h}),Object(c.jsx)(s.a,{path:"/about",component:j}),Object(c.jsx)(s.a,{path:"/projects",component:u}),Object(c.jsx)(s.a,{path:"/stats",component:m}),Object(c.jsx)(s.a,{path:"/contact",component:b}),Object(c.jsx)(s.a,{path:"/resume",component:O}),Object(c.jsx)(s.a,{component:d,status:404})]})})})},p=function(){return Object(c.jsx)(l.a.StrictMode,{children:Object(c.jsx)(x,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(i.hydrate)(Object(c.jsx)(p,{}),f):Object(i.render)(Object(c.jsx)(p,{}),f)}},[[50,1,3]]]);
//# sourceMappingURL=main.f86773e7.chunk.js.map