webpackJsonp([11],{854:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,i){try{var a=t[o](i),u=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}return r("next")})}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(304),c=(n.n(u),n(303)),s=n.n(c),l=n(308),p=(n.n(l),n(305)),f=n.n(p),h=n(307),y=(n.n(h),n(27)),b=n.n(y),v=n(302),m=n.n(v),d=n(0),_=n.n(d),w=n(107),g=n(49),O=n(65),T=n(108),E=n.n(T),k=n(301),A=n(322),P=n(866),j=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),M=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),j(t,[{key:"componentDidMount",value:function(){var e=E.a.owner,t=E.a.repo;this.getAbout(e,t)}},{key:"getAbout",value:function(){function e(e,n){return t.apply(this,arguments)}var t=r(m.a.mark(function e(t,n){var r,o;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="",e.prev=1,e.next=4,k.a.get("/repos/"+t+"/"+n+"/contents/ABOUTME.md",{headers:{Accept:"application/vnd.github.v3.html"},responseType:"text"});case 4:o=e.sent,r=o.data,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:return this.storeAboutMe(r),e.abrupt("return",r);case 13:case"end":return e.stop()}},e,this,[[1,8]])}));return e}()},{key:"storeAboutMe",value:function(){var e;return(e=this.props).storeAboutMe.apply(e,arguments)}},{key:"render",value:function(){return _.a.createElement(P.a,{title:"关于我"},_.a.createElement(s.a,{spinning:!this.props.ABOUT_ME},_.a.createElement("div",{className:"edit-this-page-container"},_.a.createElement("div",{className:"edit-this-page"},_.a.createElement(f.a,{placement:"topLeft",title:"编辑此页",arrowPointAtCenter:!0},_.a.createElement("a",{href:"https://github.com/"+E.a.owner+"/"+E.a.repo+"/edit/master/ABOUTME.md",target:"_blank"},_.a.createElement(b.a,{type:"edit",style:{fontSize:"3rem"}})))),_.a.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:this.props.ABOUT_ME}}))))}}]),t}(d.Component);t.default=n.i(w.b)(function(e){return{ABOUT_ME:e.ABOUT_ME}},function(e){return n.i(O.a)({storeAboutMe:A.a},e)})(n.i(g.e)(M))},866:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),u=(n.n(a),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),c=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.PropTypes={title:a.PropTypes.string,suffix:a.PropTypes.string},n.root="Axetroy's NeverLand",n}return i(t,e),u(t,[{key:"componentWillMount",value:function(){this.__originTitle||(this.__originTitle=document.title);var e=this.props,t=e.title,n=e.suffix;t&&this.setTitle(t,n)}},{key:"componentWillReceiveProps",value:function(e){var t=e.title,n=e.suffix;t&&this.setTitle(t,n)}},{key:"componentWillUnmount",value:function(){this.__originTitle&&(document.title=this.__originTitle)}},{key:"setTitle",value:function(e,t){return document.title=e+(t?" | "+t.join("|")+" ":"")+" | Axetroy's NeverLand",this}},{key:"render",value:function(){return this.props.children||""}}]),t}(a.Component);t.a=c}});
//# sourceMappingURL=about.page.ce788225.chunk.js.map