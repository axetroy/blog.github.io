(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{729:function(e){e.exports={owner:"axetroy",repo:"blog",todo_repo:"todo",github_client_id:"b8257841dd7ca5eef2aa",github_client_secret:"4da33dd6fcb0a01d395945ad18613ecf9c12079e"}},730:function(e,t,n){"use strict";n.d(t,"b",function(){return c});var r=n(729),a=n(738),c=new(n.n(a).a)({params:{client_id:r.github_client_id,client_secret:r.github_client_secret},withCredentials:!1,responseType:"json"});t.a=c},732:function(e,t,n){"use strict";var r=n(736),a=n(731);t.a=function(e){return{updateOwner:function(e,t){return function(){return{OWNER:t}}},updateShowCases:function(e,t){return function(){return{SHOW_CASES:t}}},updateTodo:function(e,t,n){return function(){return{TODO:Object(a.a)({},e.TODO,Object(r.a)({},t,n))}}},updateTodoList:function(e,t){return function(){return{TODOS:t}}},updateTodoLabel:function(e,t){return function(){return{TODO_LABELS:t}}},updateRepositories:function(e,t){return function(){return{REPOS:t}}},updateArticles:function(e,t){return function(){return{POSTS:t}}},updateArticle:function(e,t,n){return function(){return{POST:Object(a.a)({},e.POST,Object(r.a)({},t,n))}}},updateGistList:function(e,t){return function(){return{GISTS:t}}},updateGist:function(e,t,n){return function(){return{GIST:Object(a.a)({},e.GIST,Object(r.a)({},t,n))}}},updateFollowers:function(e,t){return function(){return{FOLLOWERS:t}}}}}},735:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var r=n(731),a=n(41),c=n(42),i=n(44),s=n(43),o=n(45),u=n(0),l=n.n(u),p=n(317),m=n.n(p),d=n(739),h=n.n(d),f=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).PropTypes={title:m.a.array,revert:m.a.bool},n}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=(this.props.title||[]).concat(["Axetroy's NeverLand"]),t=Object(r.a)({},this.props,{title:e});return l.a.createElement(h.a,t)}}]),t}(u.Component)},749:function(e,t,n){"use strict";var r=n(733),a=n.n(r),c=n(734),i=n(41),s=n(42),o=n(44),u=n(43),l=n(45),p=n(0),m=n.n(p),d=n(198),h=n(199),f=n.n(h),b=n(730),g=n(729),v=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={comments:[]},n}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){switch(this.props.type){case"issues":var e=this.props,t=e.owner,n=e.repo,r=e.number;"number"===typeof r&&this.getIssuesComments(t,n,r);break;case"gist":var a=this.props.gistId;"string"===typeof a&&this.getGistComments(a)}}},{key:"componentWillReceiveProps",value:function(e){switch(e.type){case"issues":e.number!==this.props.number&&"number"===typeof e.number&&this.getIssuesComments(e.owner,e.repo,e.number);break;case"gist":e.gistId!==this.props.gistId&&"string"===typeof e.gistId&&this.getGistComments(e.gistId)}}},{key:"getIssuesComments",value:function(){var e=Object(c.a)(a.a.mark(function e(t,n,r){var c,i,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c=[],e.prev=1,e.next=4,b.a.issues.listComments({owner:t,repo:n,number:r,client_id:g.github_client_id,client_secret:g.github_client_secret,headers:{Accept:"application/vnd.github.v3.html"}});case 4:i=e.sent,s=i.data,this.setState({comments:s}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:return e.abrupt("return",c);case 13:case"end":return e.stop()}},e,this,[[1,9]])}));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"getGistComments",value:function(){var e=Object(c.a)(a.a.mark(function e(t){var n,r,c;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.prev=1,e.next=4,b.a.gists.listComments({gist_id:t,client_id:g.github_client_id,client_secret:g.github_client_secret,headers:{Accept:"application/vnd.github.v3.html"}});case 4:r=e.sent,c=r.data,n=n.concat(c||[]),this.setState({comments:n}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:return e.abrupt("return",n);case 14:case"end":return e.stop()}},e,this,[[1,10]])}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.type,n=e.owner,r=e.repo,a=e.number,c=e.gistId;return m.a.createElement("div",null,m.a.createElement("h3",null,"\u5927\u725b\u4eec\u7684\u8bc4\u8bba:",m.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"issues"===t?"https://github.com/".concat(n,"/").concat(r,"/issues/").concat(a,"#new_comment_field"):"gist"===t?"https://gist.github.com/".concat(c,"#new_comment_field"):"javascript:void 0",style:{float:"right"}},"\u6715\u6709\u8bdd\u8bf4")),this.state.comments.length?this.state.comments.map(function(e){return m.a.createElement("div",{key:e.id,style:{border:"0.1rem solid #e2e2e2",borderRadius:"0.5rem",margin:"1rem 0"}},m.a.createElement("div",{className:"comment-header",style:{overflow:"hidden"}},m.a.createElement("img",{style:{width:"3.2rem",verticalAlign:"middle",borderRadius:"50%"},src:e.user.avatar_url,alt:""}),"\xa0\xa0",m.a.createElement("strong",{style:{color:"#586069"}},m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/".concat(e.user.login)},e.user.login)),"\xa0\xa0",m.a.createElement("span",null," ","\u8bc4\u8bba\u4e8e ".concat(Object(d.distanceInWordsToNow)(e.created_at,{locale:f.a}),"\u524d"),e.created_at!==e.updated_at?"&nbsp;&nbsp;\u66f4\u65b0\u4e8e ".concat(Object(d.distanceInWordsToNow)(e.updated_at,{locale:f.a}),"\u524d"):"")),m.a.createElement("div",{className:"comment-body",style:{padding:"1.2rem"}},m.a.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:e.body_html}})))}):m.a.createElement("div",null,m.a.createElement("p",null,"\u8fd8\u6ca1\u6709\u4eba\u8bc4\u8bba\u54e6\uff0c\u8d76\u7d27\u62a2\u6c99\u53d1!")))}}]),t}(p.Component);t.a=v},899:function(e,t){var n=["B","kB","MB","GB","TB","PB","EB","ZB","YB"];e.exports=function(e){if(!Number.isFinite(e))throw new TypeError("Expected a finite number, got ".concat(typeof e,": ").concat(e));var t=e<0;if(t&&(e=-e),e<1)return(t?"-":"")+e+" B";var r=Math.min(Math.floor(Math.log(e)/Math.log(1e3)),n.length-1);return(t?"-":"")+Number((e/Math.pow(1e3,r)).toPrecision(3))+" "+n[r]}},923:function(e,t,n){"use strict";n.r(t);n(321);var r=n(204),a=(n(892),n(917)),c=(n(319),n(200)),i=(n(318),n(46)),s=n(733),o=n.n(s),u=n(734),l=n(41),p=n(42),m=n(44),d=n(43),h=n(45),f=n(0),b=n.n(f),g=n(197),v=n(87),y=n(894),_=n.n(y),O=n(897),w=n.n(O),E=n(899),k=n.n(E),j=n(735),S=n(749),x=n(203),T=n(730),I=n(732),C=n(729);var G=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){console.log("id",this.props.match.params.id),this.init(this.props.match.params.id)}},{key:"componentWillReceiveProps",value:function(e){var t=e.match.params.id;t&&t!==this.props.match.params.id&&(console.log("next id",t),this.init(t))}},{key:"init",value:function(){var e=Object(u.a)(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return e.next=3,[this.getGist(t)];case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getGist",value:function(){var e=Object(u.a)(o.a.mark(function e(t){var n,r,a,c,i,s,u;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.prev=1,e.next=4,T.a.gists.get({gist_id:t,client_id:C.github_client_id,client_secret:C.github_client_secret,headers:{Accept:"application/vnd.github.v3.html"}});case 4:r=e.sent,a=r.data,n=a,e.t0=o.a.keys(n.files);case 8:if((e.t1=e.t0()).done){e.next=19;break}if(c=e.t1.value,!n.files.hasOwnProperty(c)){e.next=17;break}return i=n.files[c],e.next=14,T.a.markdown.render({text:"```"+i.language+"\n"+i.content+"\n```",mode:"markdown",client_id:C.github_client_id,client_secret:C.github_client_secret});case 14:s=e.sent,u=s.data,i.html=u;case 17:e.next=8;break;case 19:this.props.updateGist(t,n),e.next=25;break;case 22:e.prev=22,e.t2=e.catch(1),console.error(e.t2);case 25:return e.abrupt("return",n);case 26:case"end":return e.stop()}},e,this,[[1,22]])}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.match.params.id,t=(this.props.GIST||{})[e]||{};return b.a.createElement(j.a,{title:[t.description,"\u4ee3\u7801\u7247\u6bb5"]},b.a.createElement(r.a,{spinning:!Object.keys(t).length},b.a.createElement("div",{className:"bg-white",style:{marginBottom:20}},b.a.createElement("h2",{style:{textAlign:"center",padding:"1rem 0"}},t.description,b.a.createElement(c.a,{placement:"topLeft",title:"\u7f16\u8f91\u6b64\u9875"},b.a.createElement("a",{href:"https://gist.github.com/".concat(t.owner?t.owner.login:"","/").concat(t.id,"/edit"),target:"_blank",rel:"noopener noreferrer"},b.a.createElement(i.a,{type:"edit"})))),(function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&(t=t.concat([e[n]]));return t}(t.files)||[]).map(function(e){return b.a.createElement("div",{key:e.filename},b.a.createElement("h3",{style:{backgroundColor:"#eaeaea",padding:"0.5rem",marginBottom:0}},b.a.createElement("span",null,b.a.createElement(i.a,{type:"file"}),e.filename),b.a.createElement("span",{style:{margin:"0 0.5rem"}},b.a.createElement(w.a,{file:e.filename,content:e.content,style:{display:"inline"}},b.a.createElement("a",{href:"javascript: void 0"},b.a.createElement(i.a,{type:"download"}),k()(e.size||0)))),b.a.createElement("span",null,b.a.createElement(_.a,{style:{cursor:"pointer"},value:e.content,onSuccess:function(){return a.a.success("Copy Success!")},onError:function(){return a.a.error("Copy Fail!")}},b.a.createElement(i.a,{type:"copy"}),"Copy"))),b.a.createElement("div",{className:"markdown-body",style:{fontSize:"1.6rem"},dangerouslySetInnerHTML:{__html:Object(x.b)(e.html)}}))}),b.a.createElement("div",{className:"comment-box"},b.a.createElement(S.a,{type:"gist",gistId:this.props.match.params.id})))))}}]),t}(f.Component);t.default=Object(g.connect)(function(e){return{GIST:e.GIST}},I.a)(Object(v.e)(G))}}]);
//# sourceMappingURL=17.92674ab9.chunk.js.map