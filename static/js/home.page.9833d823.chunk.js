webpackJsonp([9],{858:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,i){try{var a=t[o](i),u=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}return r("next")})}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(304),c=(n.n(u),n(303)),s=n.n(c),l=n(308),p=(n.n(l),n(305)),f=n.n(p),h=n(307),y=(n.n(h),n(27)),m=n.n(y),v=n(302),d=n.n(v),b=n(0),_=n.n(b),w=n(107),g=n(65),E=n(108),k=n.n(E),O=n(301),P=n(334),T=n(866),j=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),R=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),j(t,[{key:"componentDidMount",value:function(){var e=k.a.owner,t=k.a.repo;this.getReadme(e,t)}},{key:"setStateAsync",value:function(e){var t=this;return new Promise(function(n){t.setState(e,function(){n()})})}},{key:"storeReadme",value:function(){var e;return(e=this.props).storeReadMe.apply(e,arguments)}},{key:"getReadme",value:function(){function e(e,n){return t.apply(this,arguments)}var t=r(d.a.mark(function e(t,n){var r,o;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="",e.prev=1,e.next=4,O.a.get("/repos/"+t+"/"+n+"/readme",{headers:{Accept:"application/vnd.github.v3.html"},responseType:"text"});case 4:o=e.sent,r=o.data,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:return this.storeReadme(r),e.abrupt("return",r);case 13:case"end":return e.stop()}},e,this,[[1,8]])}));return e}()},{key:"render",value:function(){return _.a.createElement(T.a,{title:"Home"},_.a.createElement(s.a,{spinning:!this.props.READ_ME},_.a.createElement("div",{className:"edit-this-page-container"},_.a.createElement("div",{className:"edit-this-page"},_.a.createElement(f.a,{placement:"topLeft",title:"编辑此页",arrowPointAtCenter:!0},_.a.createElement("a",{href:"https://github.com/"+k.a.owner+"/"+k.a.repo+"/edit/master/README.md",target:"_blank"},_.a.createElement(m.a,{type:"edit",style:{fontSize:"3rem"}})))),_.a.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:this.props.READ_ME}}))))}}]),t}(b.Component);t.default=n.i(w.b)(function(e){return{READ_ME:e.READ_ME}},function(e){return n.i(g.a)({storeReadMe:P.a},e)})(R)},866:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),u=(n.n(a),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),c=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.PropTypes={title:a.PropTypes.string,suffix:a.PropTypes.string},n.root="Axetroy's NeverLand",n}return i(t,e),u(t,[{key:"componentWillMount",value:function(){this.__originTitle||(this.__originTitle=document.title);var e=this.props,t=e.title,n=e.suffix;t&&this.setTitle(t,n)}},{key:"componentWillReceiveProps",value:function(e){var t=e.title,n=e.suffix;t&&this.setTitle(t,n)}},{key:"componentWillUnmount",value:function(){this.__originTitle&&(document.title=this.__originTitle)}},{key:"setTitle",value:function(e,t){return document.title=e+(t?" | "+t.join("|")+" ":"")+" | Axetroy's NeverLand",this}},{key:"render",value:function(){return this.props.children||""}}]),t}(a.Component);t.a=c}});
//# sourceMappingURL=home.page.9833d823.chunk.js.map