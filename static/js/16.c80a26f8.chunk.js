(this["webpackJsonp@axetroy/blog"]=this["webpackJsonp@axetroy/blog"]||[]).push([[16],{230:function(e){e.exports=JSON.parse('{"owner":"axetroy","repo":"blog","todo_repo":"todo","github_client_id":"b8257841dd7ca5eef2aa","github_client_secret":"4da33dd6fcb0a01d395945ad18613ecf9c12079e"}')},231:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var a=n(238),r=n.n(a),c=n(230),o=new r.a({withCredentials:!1,responseType:"json",auth:{clientId:c.github_client_id,clientSecret:c.github_client_secret}});t.a=o},232:function(e,t,n){"use strict";var a=n(237),r=n(235);t.a=function(e){return{updateOwner:function(e,t){return function(){return{OWNER:t}}},updateShowCases:function(e,t){return function(){return{SHOW_CASES:t}}},updateTodo:function(e,t,n){return function(){return{TODO:Object(r.a)({},e.TODO,{},Object(a.a)({},t,n))}}},updateTodoList:function(e,t){return function(){return{TODOS:t}}},updateTodoLabel:function(e,t){return function(){return{TODO_LABELS:t}}},updateRepositories:function(e,t){return function(){return{REPOS:t}}},updateArticles:function(e,t){return function(){return{POSTS:t}}},updateArticle:function(e,t,n){return function(){return{POST:Object(r.a)({},e.POST,{},Object(a.a)({},t,n))}}},updateStackoverflows:function(e,t){return function(){return{STACKOVERFLOWS:t}}},updateStackoverflow:function(e,t,n){return function(){return{STACKOVERFLOW:Object(r.a)({},e.STACKOVERFLOW,{},Object(a.a)({},t,n))}}},updateGistList:function(e,t){return function(){return{GISTS:t}}},updateGist:function(e,t,n){return function(){return{GIST:Object(r.a)({},e.GIST,{},Object(a.a)({},t,n))}}},updateFollowers:function(e,t){return function(){return{FOLLOWERS:t}}}}}},233:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a);function c(e){var t=e.title,n=e.children;return Object(a.useEffect)((function(){document.title=(t||[]).concat(["Axetroy's NeverLand"]).join(" | ")}),[t]),r.a.createElement(a.Fragment,null,n)}},363:function(e,t,n){},374:function(e,t,n){"use strict";n.r(t);var a=n(234),r=n.n(a),c=n(235),o=(n(281),n(279)),u=(n(92),n(55)),i=(n(93),n(32)),s=(n(283),n(278)),l=(n(240),n(243)),p=(n(134),n(21)),f=n(236),d=n(26),O=n(380),m=n(261),b=n.n(m),g=n(0),h=n.n(g),E=n(33),S=n(90),w=n(233),v=n(230),y=n(231),_=n(232);n(363);t.default=Object(S.connect)((function(e){return{STACKOVERFLOWS:e.STACKOVERFLOWS}}),_.a)((function(e){var t=e.STACKOVERFLOWS,n=e.updateStackoverflows,a=Object(E.f)(),m=Object(E.g)(),S=Object(g.useState)({page:1,per_page:25,total:0}),_=Object(d.a)(S,2),j=_[0],T=_[1],k=b.a.parse(m.search);j.page=+k.page||j.page,j.per_page=+k.per_page||j.per_page;var x=new AbortController;function L(e,t){return C.apply(this,arguments)}function C(){return(C=Object(f.a)(r.a.mark((function e(t,a){var o,u,i,s,l,p;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.issues.listForRepo({owner:v.owner,repo:"stackoverflow",creator:v.owner,state:"open",per_page:a,page:t,request:{signal:x.signal}});case 2:o=e.sent,u=o.data,i=o.headers,(s=i.link)&&(l=s.match(/<([^>]+)>(?=;\s+rel="last")/),p=l?l[1].match(/\bpage=(\d+)/)[1]:t,T(Object(c.a)({},j,{},{page:t,per_page:a,total:p*a}))),u.forEach((function(e){var t=/!\[[^\]]+\]\(([^)]+)\)/im.exec(e.body);t&&t[1]&&(e.thumbnails=t[1])})),n(u);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(g.useEffect)((function(){return L(j.page,j.per_page).catch((function(){})),function(){x.abort()}}),[]),h.a.createElement(w.a,{title:["\u8e29\u8fc7\u7684\u5751"]},h.a.createElement("div",null,h.a.createElement(u.a,{gutter:24,className:"stackoverflow-list"},t.map((function(e,t){return h.a.createElement(i.a,{key:e.number+"/"+t,xs:{span:22,offset:1},sm:{span:12,offset:0},md:{span:8,offset:0},lg:{span:8,offset:0},xl:{span:8,offset:0},xxl:{span:6,offset:0}},h.a.createElement(s.a,{style:{marginBottom:"2rem",minHeight:"200px",height:"300px",overflow:"hidden",cursor:"pointer"},onClick:function(){a.push({pathname:"/stackoverflow/".concat(e.number)})}},h.a.createElement("div",null,h.a.createElement("h3",{className:"post-title",style:{wordBreak:"break-word",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},title:e.title},e.title)),h.a.createElement("div",null,h.a.createElement("span",null,h.a.createElement(p.a,{type:"clock-circle-o"})," ",Object(O.a)(new Date(e.created_at),"yyyy-MM-dd"),"\xa0"),h.a.createElement("span",null,h.a.createElement(p.a,{type:"message"})," ",e.comments," "),h.a.createElement("span",{className:"label-list"},(e.labels||[]).map((function(e){return h.a.createElement(l.a,{key:e.id,color:"#"+e.color},e.name)})))),h.a.createElement("div",{style:{color:"#9E9E9E",wordBreak:"break-word",textOverflow:"ellipsis",overflow:"hidden",clear:"both",height:"150px"}},e.body.slice(0,150),"...")))}))),j.total>0?h.a.createElement(u.a,{className:"text-center",style:{marginBottom:"2rem"}},h.a.createElement(i.a,{span:24,style:{transition:"all 1s"}},h.a.createElement(o.a,{onChange:function(e){return function(e,t){var n=b.a.parse(m.search);a.push({search:b.a.stringify(Object.assign(n,{page:e,per_page:t}))}),L(e,t)}(e,j.per_page)},defaultCurrent:j.page,defaultPageSize:j.per_page,total:j.total}))):""))}))}}]);
//# sourceMappingURL=16.c80a26f8.chunk.js.map