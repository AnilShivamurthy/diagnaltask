(this.webpackJsonpdiagnaltask=this.webpackJsonpdiagnaltask||[]).push([[0],{16:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(4),a=n.n(i),o=(n(16),n(7)),s=n.n(o),u=n(9),l=n(2),h=n(1),f=function(){var e=Object(l.c)((function(e){return e.combinePageOne.pageOne}));return Object(h.jsx)("div",{className:"grid grid-cols-3 gap-x-3.5 gap-y-11 mx-3.5 pt-4",children:void 0!==e?e&&e.map((function(e,t){return e["content-items"].content.map((function(e,n){return Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:"posterthatismissing.jpg"===e["poster-image"]?"placeholder_for_missing_posters.png":e["poster-image"],alt:e.name}),Object(h.jsx)("div",{className:"font-titillium text-white text-sm font-extralight pt-3",children:e.name})]},t)}))})):null})},p="SET_PAGE_TITLE",d="SET_PAGE_ONE",j="SET_PAGE_TWO",b="SET_PAGE_TWO",g="SET_SHOW",O="SET_SEARCH",m=function(e){return{type:p,payload:e}},x=function(e){return{type:O,payload:e}},v=n(11),T=function(e){var t=e.handleClickSearch,n=Object(l.c)((function(e){return e.combineShow.show})),c=Object(l.b)();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(v.a,{className:"text-white mt-1.5 absolute right-5",onClick:function(){c(function(e){return{type:g,payload:e}}(!n))}}),n?Object(h.jsx)("input",{type:"text",placeholder:"Search",className:"font-titillium text-white text-xs font-extralight border border-solid border-white bg-black rounded text-white pl-1",onChange:function(e){return function(e){t(e.target.value)}(e)}}):null]})},w=function(){var e=Object(l.c)((function(e){return e.combineSearch.searchItem}));return Object(h.jsx)("div",{className:"grid grid-cols-3 gap-x-3.5 gap-y-11 mx-3.5 pt-4",children:void 0!==e?e&&e.map((function(e,t){return Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:"posterthatismissing.jpg"===e["poster-image"]?"placeholder_for_missing_posters.png":e["poster-image"],alt:e.name}),Object(h.jsx)("div",{className:"font-titillium text-white text-sm font-extralight pt-3",children:e.name})]},t)})):null})},y=r.a.lazy((function(){return new Promise((function(e,t){return setTimeout((function(){return e(n.e(4).then(n.bind(null,26)))}),1e3)}))})),E=r.a.lazy((function(){return new Promise((function(e,t){return setTimeout((function(){return e(n.e(3).then(n.bind(null,27)))}),5e3)}))}));var _=function(){var e=Object(l.c)((function(e){return e.combinePageTitle.pageTitle}));console.log(e);var t=Object(l.c)((function(e){return e.combinePageOne.pageOne})),n=Object(l.c)((function(e){return e.combinePageTwo.pageTwo})),r=Object(l.c)((function(e){return e.combinePageThree.pageThree})),i=Object(l.c)((function(e){return e.combineSearch.searchItem})),a=Object(l.b)(),o=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./CONTENTLISTINGPAGE-PAGE1.json").then((function(e){return e.json()})).then((function(e){var t;a((t=[e.page],{type:d,payload:t})),a(m(e.page.title))}));case 2:return e.next=4,fetch("./CONTENTLISTINGPAGE-PAGE2.json").then((function(e){return e.json()})).then((function(e){var t;a((t=[e.page],{type:j,payload:t}))}));case 4:return e.next=6,fetch("./CONTENTLISTINGPAGE-PAGE3.json").then((function(e){return e.json()})).then((function(e){var t;a((t=[e.page],{type:b,payload:t}))}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){o()}),[]),Object(h.jsxs)("div",{className:"bg-black",children:[Object(h.jsxs)("div",{className:"flex justify-between pt-4 px-4",children:[Object(h.jsx)("div",{className:"font-titillium text-white text-base font-light",children:e}),Object(h.jsx)(T,{handleClickSearch:function(e){var c=[];t&&t.filter((function(t,n){t["content-items"].content.filter((function(t){if(t.name.toLowerCase()===e.toLowerCase())return a(x(i.concat(t))),c.push(t)}))})),n&&n.filter((function(t,n){t["content-items"].content.filter((function(t){if(t.name.toLowerCase()===e.toLowerCase())return a(x(i.concat(t))),c.push(t)}))})),r&&r.filter((function(t,n){t["content-items"].content.filter((function(t){if(t.name.toLowerCase()===e.toLowerCase())return c.push(t)}))})),a(x(i.concat(c)))}})]}),0!==i.length?Object(h.jsx)(w,{}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{}),Object(h.jsxs)(c.Suspense,{fallback:Object(h.jsx)("div",{children:"Loading"}),children:[Object(h.jsx)(y,{}),Object(h.jsx)(E,{})]})]})]})},S=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,28)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))},N=n(5),P=n(3),C={pageTitle:"",pageOne:[],pageTwo:[],pageThree:[],show:!1,searchItem:[]},I=Object(N.a)({combinePageTitle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case p:return Object(P.a)(Object(P.a)({},e),{},{pageTitle:c});default:return e}},combinePageOne:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case d:return Object(P.a)(Object(P.a)({},e),{},{pageOne:c});default:return e}},combinePageTwo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case j:return Object(P.a)(Object(P.a)({},e),{},{pageTwo:c});default:return e}},combinePageThree:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case j:return Object(P.a)(Object(P.a)({},e),{},{pageThree:c});default:return e}},combineShow:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case g:return Object(P.a)(Object(P.a)({},e),{},{show:c});default:return e}},combineSearch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case O:return Object(P.a)(Object(P.a)({},e),{},{searchItem:c});default:return e}}}),L=Object(N.b)(I,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(l.a,{store:L,children:Object(h.jsx)(_,{})})}),document.getElementById("root")),S()}},[[25,1,2]]]);
//# sourceMappingURL=main.8e1cf353.chunk.js.map