(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{729:function(e){e.exports={owner:"axetroy",repo:"blog",todo_repo:"todo",github_client_id:"b8257841dd7ca5eef2aa",github_client_secret:"4da33dd6fcb0a01d395945ad18613ecf9c12079e"}},730:function(e,t,n){"use strict";n.d(t,"b",function(){return c});var r=n(729),a=n(738),c=new(n.n(a).a)({params:{client_id:r.github_client_id,client_secret:r.github_client_secret},withCredentials:!1,responseType:"json"});t.a=c},732:function(e,t,n){"use strict";var r=n(736),a=n(731);t.a=function(e){return{updateOwner:function(e,t){return function(){return{OWNER:t}}},updateShowCases:function(e,t){return function(){return{SHOW_CASES:t}}},updateTodo:function(e,t,n){return function(){return{TODO:Object(a.a)({},e.TODO,Object(r.a)({},t,n))}}},updateTodoList:function(e,t){return function(){return{TODOS:t}}},updateTodoLabel:function(e,t){return function(){return{TODO_LABELS:t}}},updateRepositories:function(e,t){return function(){return{REPOS:t}}},updateArticles:function(e,t){return function(){return{POSTS:t}}},updateArticle:function(e,t,n){return function(){return{POST:Object(a.a)({},e.POST,Object(r.a)({},t,n))}}},updateGistList:function(e,t){return function(){return{GISTS:t}}},updateGist:function(e,t,n){return function(){return{GIST:Object(a.a)({},e.GIST,Object(r.a)({},t,n))}}},updateFollowers:function(e,t){return function(){return{FOLLOWERS:t}}}}}},735:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var r=n(731),a=n(41),c=n(42),i=n(44),o=n(43),s=n(45),l=n(0),u=n.n(l),m=n(317),p=n.n(m),d=n(739),b=n.n(d),f=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).PropTypes={title:p.a.array,revert:p.a.bool},n}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=(this.props.title||[]).concat(["Axetroy's NeverLand"]),t=Object(r.a)({},this.props,{title:e});return u.a.createElement(b.a,t)}}]),t}(l.Component)},749:function(e,t,n){"use strict";var r=n(733),a=n.n(r),c=n(734),i=n(41),o=n(42),s=n(44),l=n(43),u=n(45),m=n(0),p=n.n(m),d=n(198),b=n(199),f=n.n(b),h=n(730),g=n(729),v=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).state={comments:[]},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){switch(this.props.type){case"issues":var e=this.props,t=e.owner,n=e.repo,r=e.number;"number"===typeof r&&this.getIssuesComments(t,n,r);break;case"gist":var a=this.props.gistId;"string"===typeof a&&this.getGistComments(a)}}},{key:"componentWillReceiveProps",value:function(e){switch(e.type){case"issues":e.number!==this.props.number&&"number"===typeof e.number&&this.getIssuesComments(e.owner,e.repo,e.number);break;case"gist":e.gistId!==this.props.gistId&&"string"===typeof e.gistId&&this.getGistComments(e.gistId)}}},{key:"getIssuesComments",value:function(){var e=Object(c.a)(a.a.mark(function e(t,n,r){var c,i,o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c=[],e.prev=1,e.next=4,h.a.issues.listComments({owner:t,repo:n,number:r,client_id:g.github_client_id,client_secret:g.github_client_secret,headers:{Accept:"application/vnd.github.v3.html"}});case 4:i=e.sent,o=i.data,this.setState({comments:o}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:return e.abrupt("return",c);case 13:case"end":return e.stop()}},e,this,[[1,9]])}));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"getGistComments",value:function(){var e=Object(c.a)(a.a.mark(function e(t){var n,r,c;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.prev=1,e.next=4,h.a.gists.listComments({gist_id:t,client_id:g.github_client_id,client_secret:g.github_client_secret,headers:{Accept:"application/vnd.github.v3.html"}});case 4:r=e.sent,c=r.data,n=n.concat(c||[]),this.setState({comments:n}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:return e.abrupt("return",n);case 14:case"end":return e.stop()}},e,this,[[1,10]])}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.type,n=e.owner,r=e.repo,a=e.number,c=e.gistId;return p.a.createElement("div",null,p.a.createElement("h3",null,"\u5927\u725b\u4eec\u7684\u8bc4\u8bba:",p.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"issues"===t?"https://github.com/".concat(n,"/").concat(r,"/issues/").concat(a,"#new_comment_field"):"gist"===t?"https://gist.github.com/".concat(c,"#new_comment_field"):"javascript:void 0",style:{float:"right"}},"\u6715\u6709\u8bdd\u8bf4")),this.state.comments.length?this.state.comments.map(function(e){return p.a.createElement("div",{key:e.id,style:{border:"0.1rem solid #e2e2e2",borderRadius:"0.5rem",margin:"1rem 0"}},p.a.createElement("div",{className:"comment-header",style:{overflow:"hidden"}},p.a.createElement("img",{style:{width:"3.2rem",verticalAlign:"middle",borderRadius:"50%"},src:e.user.avatar_url,alt:""}),"\xa0\xa0",p.a.createElement("strong",{style:{color:"#586069"}},p.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/".concat(e.user.login)},e.user.login)),"\xa0\xa0",p.a.createElement("span",null," ","\u8bc4\u8bba\u4e8e ".concat(Object(d.distanceInWordsToNow)(e.created_at,{locale:f.a}),"\u524d"),e.created_at!==e.updated_at?"&nbsp;&nbsp;\u66f4\u65b0\u4e8e ".concat(Object(d.distanceInWordsToNow)(e.updated_at,{locale:f.a}),"\u524d"):"")),p.a.createElement("div",{className:"comment-body",style:{padding:"1.2rem"}},p.a.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:e.body_html}})))}):p.a.createElement("div",null,p.a.createElement("p",null,"\u8fd8\u6ca1\u6709\u4eba\u8bc4\u8bba\u54e6\uff0c\u8d76\u7d27\u62a2\u6c99\u53d1!")))}}]),t}(m.Component);t.a=v},883:function(e,t,n){},921:function(e,t,n){"use strict";n.r(t);n(321);var r=n(204),a=(n(758),n(763)),c=(n(879),n(916)),i=(n(881),n(884)),o=(n(319),n(200)),s=(n(318),n(46)),l=(n(320),n(115)),u=n(733),m=n.n(u),p=n(734),d=n(41),b=n(42),f=n(44),h=n(43),g=n(45),v=n(0),y=n.n(v),E=n(197),w=n(87),O=n(198),_=n(199),k=n.n(_),j=n(735),x=n(730),S=n(203),T=n(729),A=n(749),I=n(732),N=(n(883),function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={banners:["35051293-df358be0-fbdf-11e7-9d74-80e8ad97d713","35051427-28b5ed6e-fbe0-11e7-90b5-a5c3f0c9cba2","35051446-3424927c-fbe0-11e7-9e41-5c3725781867","35051488-4c3c2de8-fbe0-11e7-9c5c-0d35a171a15b","35051508-5b01e00c-fbe0-11e7-85e6-ca93570ee11f","35051527-66aaa218-fbe0-11e7-9821-9390595c4ae6","35051549-73e310a0-fbe0-11e7-87ed-3b023cab3019","35051561-7e618ae8-fbe0-11e7-9355-a7285cb4821f","35051580-8a893db6-fbe0-11e7-93ff-5bd11e96630e","35051598-95948738-fbe0-11e7-96c3-dbd6f7c93f71","35051610-9f056a9e-fbe0-11e7-92d4-502b449a4c51","35051630-a956162e-fbe0-11e7-86a0-fd4c4dea6e75","35051654-b3af78fe-fbe0-11e7-9a61-d8a89a4ddf66","35051683-c78c5360-fbe0-11e7-831c-60b5e25188fb","35051708-d447aeb0-fbe0-11e7-8e62-a1042f373488","35051727-dee8460e-fbe0-11e7-8b35-7c4bf8f6d8a9","35051749-e8af347c-fbe0-11e7-951b-2d9e03ee443a","35051761-f24f0c0a-fbe0-11e7-893f-6bfcbb036c3e","35051785-fd3a9fc6-fbe0-11e7-8faf-a97facebe5ce"].map(function(e){return"https://user-images.githubusercontent.com/9758711/"+e+".png"})},n}return Object(g.a)(t,e),Object(b.a)(t,[{key:"componentWillMount",value:function(){var e=Object(p.a)(m.a.mark(function e(){var t,r,a=this;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.match.params.number,r=t%this.state.banners.length,this.setState({banner:this.state.banners[r]}),n.e(10).then(n.t.bind(null,905,7)).then(function(e){a.setState({QRCode:e.default})}),!t){e.next=7;break}return e.next=7,this.getPost(t);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillReceiveProps",value:function(){var e=Object(p.a)(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=t.match.params.number)||n===this.props.match.params.number){e.next=4;break}return e.next=4,this.getPost(t.match.params.number);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getPost",value:function(){var e=Object(p.a)(m.a.mark(function e(t){var n,r,a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.prev=1,e.next=4,x.a.issues.get({owner:T.owner,repo:T.repo,number:t,client_id:T.github_client_id,client_secret:T.github_client_secret,headers:{Accept:"application/vnd.github.v3.html"}});case 4:r=e.sent,a=r.data,(n=a).filter_html=this.htmlFilter(a.body_html),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:return this.props.updateArticle(t,n),e.abrupt("return",n);case 15:case"end":return e.stop()}},e,this,[[1,10]])}));return function(t){return e.apply(this,arguments)}}()},{key:"htmlFilter",value:function(e){var t=document.createElement("div");t.innerHTML=e;var n=t.querySelector("img[alt=banner]");if(n){n.src&&this.setState({banner:n.src});var r=n.parentElement;r&&"A"===r.tagName?r.parentNode&&"P"===r.parentElement.tagName?r.parentElement.remove():r.remove():n.remove()}else{var a=t.querySelector("img");a&&this.setState({banner:a.src})}return t.innerHTML}},{key:"getShareMenu",value:function(e){var t=[{title:"\u5206\u4eab\u5230\u65b0\u6d6a\u5fae\u535a",url:"http://service.weibo.com/share/share.php?appkey=&title=".concat("\u5206\u4eab: "+e.title,"&url=").concat(window.location.href,"&pic=&searchPic=false&style=simple")},{title:"\u5206\u4eab\u5230 Twitter",url:"https://twitter.com/intent/tweet?text=".concat("\u5206\u4eab: "+e.title,"&url=").concat(window.location.href,"&via=Axetroy")},{title:"\u5206\u4eab\u5230 Telegram",url:"https://telegram.me/share/url?url=".concat(window.location.href,"&text=").concat("\u5206\u4eab: "+e.title)},{title:"\u5206\u4eab\u5230 QQ",url:"http://connect.qq.com/widget/shareqq/index.html?site=Axetroy's NeverLand&title=".concat("\u5206\u4eab: "+e.title,"&summary=\u6b22\u8fce\u6765\u5230 Axetroy's NeverLand\u3002&pics=&url=").concat(window.location.href)}];return y.a.createElement(l.b,null,t.map(function(e){return y.a.createElement(l.b.Item,{key:e.title},y.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:e.url},e.title))}))}},{key:"render",value:function(){var e=this.state.QRCode,t=this.props.match.params.number,n=this.props.POST[t]||{};return y.a.createElement(j.a,{title:[n.title,"\u535a\u5ba2\u6587\u7ae0"]},y.a.createElement(r.a,{spinning:!Object.keys(n).length},y.a.createElement("div",{className:"bg-white",style:{marginBottom:20}},y.a.createElement("div",{style:{position:"relative",width:"100%",height:"24rem",backgroundImage:"url(".concat(this.state.banner,")"),backgroundOrigin:"border-box",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPositionY:"25%"}},y.a.createElement("div",{className:"post-meta",style:{position:"absolute",bottom:0,left:0,width:"100%",padding:"2rem",backgroundColor:"#fff",transition:"all 0.2s ease-in-out",borderBottom:"1px dashed #e5e5e5"}},n.user&&n.user.avatar_url?y.a.createElement("img",{src:n.user.avatar_url,alt:"",style:{width:"4.4rem",height:"4.4rem",borderRadius:"50%",verticalAlign:"middle"}}):"",y.a.createElement("div",{style:{display:"inline-block",verticalAlign:"middle",margin:"0 1rem"}},y.a.createElement("strong",null,y.a.createElement(s.a,{type:"user",style:{marginRight:"0.5rem"}}),Object(S.c)(n&&n.user?n.user.login:"")),y.a.createElement("br",null),y.a.createElement("span",null,y.a.createElement(s.a,{type:"calendar",style:{marginRight:"0.5rem"}}),"\u53d1\u5e03\u4e8e\xa0",Object(O.distanceInWordsToNow)(n.created_at,{locale:k.a}),"\u524d"),y.a.createElement("br",null),y.a.createElement("span",null,y.a.createElement(s.a,{type:"message",style:{marginRight:"0.5rem"}}),n.comments?"\u5df2\u6709 ".concat(n.comments," \u6761\u7559\u8a00"):"\u8fd8\u672a\u6709\u4eba\u7559\u8a00\u54e6")),y.a.createElement("div",{style:{textAlign:"right",float:"right",fontSize:"2.4rem"}},y.a.createElement("span",{style:{margin:"0.5rem"}},y.a.createElement(o.a,{title:"\u7f16\u8f91\u6587\u7ae0",placement:"topRight"},y.a.createElement("a",{target:"blank",href:"https://github.com/".concat(T.owner,"/").concat(T.repo,"/issues/").concat(n.number),style:{color:"inherit"}},y.a.createElement(s.a,{type:"edit"})))),y.a.createElement("span",{style:{cursor:"pointer",margin:"0.5rem"}},y.a.createElement(i.a,{placement:"bottomLeft",title:"\u5728\u5176\u4ed6\u8bbe\u5907\u4e2d\u626b\u63cf\u4e8c\u7ef4\u7801",trigger:"click",content:y.a.createElement("div",{className:"text-center"},e?y.a.createElement(e,{value:window.location.href}):"Loading...")},y.a.createElement(s.a,{type:"qrcode"}))),y.a.createElement("span",{style:{cursor:"pointer",margin:"0.5rem"}},y.a.createElement(c.a,{overlay:this.getShareMenu(n),trigger:["click"]},y.a.createElement(s.a,{type:"share-alt"})))))),y.a.createElement("h2",{style:{textAlign:"center",marginTop:"20px",marginBottom:"20px"}},y.a.createElement("span",{style:{color:"#303030"}},n.title," "),y.a.createElement("span",{style:{verticalAlign:"top"}},(n.labels||[]).map(function(e){return y.a.createElement(a.a,{key:e.id,color:"#"+e.color},e.name)}))),y.a.createElement("div",{className:"markdown-body post-content",style:{margin:"2rem 0",borderBottom:"1px dashed #e6e6e6",paddingBottom:"2rem"},dangerouslySetInnerHTML:{__html:Object(S.b)(n.filter_html)}}),y.a.createElement("blockquote",{className:"blockquote"},y.a.createElement("p",null,"\u6ce8\u610f\uff1a"),y.a.createElement("p",null,"1. \u82e5\u975e\u58f0\u660e\u6587\u7ae0\u4e3a\u8f6c\u8f7d, \u5219\u4e3a\u539f\u521b\u6587\u7ae0."),y.a.createElement("p",null,"2. \u6b22\u8fce\u8f6c\u8f7d, \u4f46\u9700\u8981\u6ce8\u660e\u51fa\u5904."),y.a.createElement("p",null,"3. \u5982\u679c\u672c\u6587\u5bf9\u60a8\u9020\u6210\u4fb5\u6743\uff0c\u8bf7\u5728\u6587\u7ae0\u8bc4\u8bba\u4e2d\u58f0\u660e.")),y.a.createElement("div",{className:"comment-box"},y.a.createElement(A.a,{type:"issues",owner:T.owner,repo:T.repo,number:n.number})))))}}]),t}(v.Component));t.default=Object(E.connect)(function(e){return{POST:e.POST}},I.a)(Object(w.e)(N))}}]);
//# sourceMappingURL=14.7baa8c6d.chunk.js.map