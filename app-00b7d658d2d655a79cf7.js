webpackJsonp([0xd2a57dc1d883],{453:function(n,e,t){"use strict";function o(n,e,t){var o=u.map(function(t){if(t.plugin[n]){var o=t.plugin[n](e,t.options);return o}});return o=o.filter(function(n){return"undefined"!=typeof n}),o.length>0?o:t?[t]:[]}function r(n,e,t){return u.reduce(function(t,o){return o.plugin[n]?t.then(function(){return o.plugin[n](e,o.options)}):t},Promise.resolve())}e.__esModule=!0,e.apiRunner=o,e.apiRunnerAsync=r;var u=[{plugin:t(726),options:{plugins:[]}},{plugin:t(725),options:{plugins:[]}}]},577:function(n,e,t){"use strict";e.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":t(688),"component---src-templates-blog-post-js":t(691),"component---src-templates-subject-list-js":t(692),"component---src-pages-index-js":t(690)},e.json={"layout-index.json":t(693),"offline-plugin-app-shell-fallback.json":t(723),"discrete-structure-05-number-theory-part-3-and-induction.json":t(707),"electrical-circuit-for-ice-05-thevenin-and-norton-equivalent-circuit.json":t(714),"advanced-computer-programming-05-libraries.json":t(699),"history-of-science-04-structure-of-scientific-revolutions.json":t(719),"discrete-structure-04-number-theory-contd.json":t(706),"electrical-circuit-for-ice-04-mesh-current-analysis.json":t(713),"advanced-computer-programming-04-server-side-python.json":t(698),"electrical-circuit-for-ice-03-node-voltage-analysis.json":t(712),"advanced-computer-programming-03-intro-to-python-part-2.json":t(697),"discrete-structure-03-number-theory.json":t(705),"electrical-circuit-for-ice-02-resistive-circuits.json":t(711),"advanced-computer-programming-02-introduction-to-python.json":t(696),"history-of-science-03-science-in-thai-ways-living.json":t(718),"history-of-science-02-history-of-astronomy.json":t(717),"discrete-structure-02-pattern-of-proofs.json":t(704),"advanced-mathermatics-method-01-course-overview.json":t(701),"electrical-circuit-for-ice-00-course-overview.json":t(709),"electrical-circuit-for-ice-01-introduction.json":t(710),"advanced-computer-programming-01-introduction.json":t(695),"history-of-science-01-orientation.json":t(716),"discrete-structure-01-mathematical-fundamentals-statements-and-logic.json":t(703),"intro-to-ice-01-introduction.json":t(721),"discrete-strcuture.json":t(702),"electrical-circuit-for-ice.json":t(708),"advanced-computer-programming.json":t(694),"history-of-science.json":t(715),"advanced-mathematics-method.json":t(700),"introduction-to-ice.json":t(722),"index.json":t(720)},e.layouts={"layout---index":t(689)}},578:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function u(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function a(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var c=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},i=t(2),s=o(i),l=t(3),p=o(l),f=t(529),d=o(f),m=t(433),h=o(m),g=t(453),y=t(804),v=o(y),j=function(n){var e=n.children;return s.default.createElement("div",null,e())},x=function(n){function e(t){r(this,e);var o=u(this,n.call(this)),a=t.location;return d.default.getPage(a.pathname)||(a=c({},a,{pathname:"/404.html"})),o.state={location:a,pageResources:d.default.getResourcesForPathname(a.pathname)},o}return a(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var t=d.default.getResourcesForPathname(n.location.pathname);if(t)this.setState({location:n.location,pageResources:t});else{var o=n.location;d.default.getPage(o.pathname)||(o=c({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(n){e.setState({location:o,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,v.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,g.apiRunner)("replaceComponentRenderer",{props:c({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,i.createElement)(this.state.pageResources.component,c({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:j,c({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(s.default.Component);x.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=x,n.exports=e.default},433:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(792),u=o(r),a=(0,u.default)();n.exports=a},579:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(449),u=t(530),a=o(u),c={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),u=(0,a.default)(o,e);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),c[u])return c[u];var i=void 0;return n.some(function(n){if(n.matchPath){if((0,r.matchPath)(u,{path:n.path})||(0,r.matchPath)(u,{path:n.matchPath}))return i=n,c[u]=n,!0}else{if((0,r.matchPath)(u,{path:n.path,exact:!0}))return i=n,c[u]=n,!0;if((0,r.matchPath)(u,{path:n.path+"index.html"}))return i=n,c[u]=n,!0}return!1}),i}}},580:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(572),u=o(r),a=t(453),c=(0,a.apiRunner)("replaceHistory"),i=c[0],s=i||(0,u.default)();n.exports=s},695:function(n,e,t){t(26),n.exports=function(n){return t.e(0x7c64cba07944,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(758)})})}},696:function(n,e,t){t(26),n.exports=function(n){return t.e(1319442753623,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(759)})})}},697:function(n,e,t){t(26),n.exports=function(n){return t.e(90664221229457,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(760)})})}},698:function(n,e,t){t(26),n.exports=function(n){return t.e(0xe5433991aa5,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(761)})})}},699:function(n,e,t){t(26),n.exports=function(n){return t.e(0x620d9e5c0154,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(762)})})}},694:function(n,e,t){t(26),n.exports=function(n){return t.e(0x73d25bdd9fda,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(763)})})}},700:function(n,e,t){t(26),n.exports=function(n){return t.e(36285012908994,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(764)})})}},701:function(n,e,t){t(26),n.exports=function(n){return t.e(0xb5ab6dcede09,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(765)})})}},702:function(n,e,t){t(26),n.exports=function(n){return t.e(0xa2becb82eb72,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(766)})})}},703:function(n,e,t){t(26),n.exports=function(n){return t.e(67024707619387,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(767)})})}},704:function(n,e,t){t(26),n.exports=function(n){return t.e(0xeae2ec9d2b6e,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(768)})})}},705:function(n,e,t){t(26),n.exports=function(n){return t.e(90397072644963,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(769)})})}},706:function(n,e,t){t(26),n.exports=function(n){return t.e(25907346632334,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(770)})})}},707:function(n,e,t){t(26),n.exports=function(n){return t.e(22857024457509,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(771)})})}},709:function(n,e,t){t(26),n.exports=function(n){return t.e(0xc6a580fd6b0a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(772)})})}},710:function(n,e,t){t(26),n.exports=function(n){return t.e(0xc86cc9074e5a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(773)})})}},711:function(n,e,t){t(26),n.exports=function(n){return t.e(0xa085914f023e,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(774)})})}},712:function(n,e,t){t(26),n.exports=function(n){return t.e(0xbca9236a44c1,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(775)})})}},713:function(n,e,t){t(26),n.exports=function(n){return t.e(0x94071aaf4f7a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(776)})})}},714:function(n,e,t){t(26),n.exports=function(n){return t.e(0xa0936555632,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(777)})})}},708:function(n,e,t){t(26),n.exports=function(n){return t.e(0xa24feb471f49,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(778)})})}},716:function(n,e,t){t(26),n.exports=function(n){return t.e(0xfea925fea1e5,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(779)})})}},717:function(n,e,t){t(26),n.exports=function(n){return t.e(0xa627fb84fed7,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(780)})})}},718:function(n,e,t){t(26),n.exports=function(n){return t.e(0xad63d894dc6c,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(781)})})}},719:function(n,e,t){t(26),n.exports=function(n){return t.e(0x81f9f1690044,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(782)})})}},715:function(n,e,t){t(26),n.exports=function(n){return t.e(26966880406025,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(783)})})}},720:function(n,e,t){t(26),n.exports=function(n){return t.e(0x81b8806e4260,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(784)})})}},721:function(n,e,t){t(26),n.exports=function(n){return t.e(93781359809347,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(785)})})}},722:function(n,e,t){t(26),n.exports=function(n){return t.e(0x6b525e73184c,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(786)})})}},693:function(n,e,t){t(26),n.exports=function(n){return t.e(60335399758886,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(485)})})}},723:function(n,e,t){t(26),n.exports=function(n){return t.e(0xbf4c176e203a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(787)})})}},689:function(n,e,t){t(26),n.exports=function(n){return t.e(0x67ef26645b2a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(581)})})}},529:function(n,e,t){(function(n){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var r=t(2),u=(o(r),t(579)),a=o(u),c=t(433),i=o(c),s=t(530),l=o(s),p=void 0,f={},d={},m={},h={},g={},y=[],v=[],j={},x="",b=[],C={},N=function(n){return n&&n.default||n},R=void 0,k=!0,w=[],_={},P={},E=5;R=t(582)({getNextQueuedResources:function(){return b.slice(-1)[0]},createResourceDownload:function(n){L(n,function(){b=b.filter(function(e){return e!==n}),R.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){R.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){R.onPostLoadPageResources(n)});var O=function(n,e){return C[n]>C[e]?1:C[n]<C[e]?-1:0},T=function(n,e){return j[n]>j[e]?1:j[n]<j[e]?-1:0},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[e])n.nextTick(function(){t(null,h[e])});else{var o=void 0;o="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],o(function(n,o){h[e]=o,w.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),w=w.slice(-E),t(n,o)})}},S=function(e,t){g[e]?n.nextTick(function(){t(null,g[e])}):P[e]?n.nextTick(function(){t(P[e])}):L(e,function(n,o){if(n)t(n);else{var r=N(o());g[e]=r,t(n,r)}})},A=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=w.find(function(n){return n.succeeded});return!!e},D=function(n,e){console.log(e),_[n]||(_[n]=e),A()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},U=1,M={empty:function(){v=[],j={},C={},b=[],y=[],x=""},addPagesArray:function(n){y=n,x="/lecture-notes",p=(0,a.default)(n,x)},addDevRequires:function(n){f=n},addProdRequires:function(n){d=n},dequeue:function(){return v.pop()},enqueue:function(n){var e=(0,l.default)(n,x);if(!y.some(function(n){return n.path===e}))return!1;var t=1/U;U+=1,j[e]?j[e]+=1:j[e]=1,M.has(e)||v.unshift(e),v.sort(T);var o=p(e);return o.jsonName&&(C[o.jsonName]?C[o.jsonName]+=1+t:C[o.jsonName]=1+t,b.indexOf(o.jsonName)!==-1||h[o.jsonName]||b.unshift(o.jsonName)),o.componentChunkName&&(C[o.componentChunkName]?C[o.componentChunkName]+=1+t:C[o.componentChunkName]=1+t,b.indexOf(o.componentChunkName)!==-1||h[o.jsonName]||b.unshift(o.componentChunkName)),b.sort(O),R.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:b,resourcesCount:C}},getPages:function(){return{pathArray:v,pathCount:j}},getPage:function(n){return p(n)},has:function(n){return v.some(function(e){return e===n})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};k&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,t=Array.isArray(e),o=0,e=t?e:e[Symbol.iterator]();;){var r;if(t){if(o>=e.length)break;r=e[o++]}else{if(o=e.next(),o.done)break;r=o.value}var u=r;u.unregister()}window.location.reload()}})),k=!1;if(_[e])return D(e,'Previously detected load failure for "'+e+'"'),t();var o=p(e);if(!o)return D(e,"A page wasn't found for \""+e+'"'),t();if(e=o.path,m[e])return n.nextTick(function(){t(m[e]),i.default.emit("onPostLoadPageResources",{page:o,pageResources:m[e]})}),m[e];i.default.emit("onPreLoadPageResources",{path:e});var r=void 0,u=void 0,a=void 0,c=function(){if(r&&u&&(!o.layoutComponentChunkName||a)){m[e]={component:r,json:u,layout:a,page:o};var n={component:r,json:u,layout:a,page:o};t(n),i.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return S(o.componentChunkName,function(n,e){n&&D(o.path,"Loading the component for "+o.path+" failed"),r=e,c()}),S(o.jsonName,function(n,e){n&&D(o.path,"Loading the JSON for "+o.path+" failed"),u=e,c()}),void(o.layoutComponentChunkName&&S(o.layout,function(n,e){n&&D(o.path,"Loading the Layout for "+o.path+" failed"),a=e,c()}))},peek:function(n){return v.slice(-1)[0]},length:function(){return v.length},indexOf:function(n){return v.length-v.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:M.getResourcesForPathname};e.default=M}).call(e,t(452))},788:function(n,e){n.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"discrete-structure-05-number-theory-part-3-and-induction.json",path:"/discrete-structure/05-number-theory-part-3-and-induction/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"electrical-circuit-for-ice-05-thevenin-and-norton-equivalent-circuit.json",path:"/electrical-circuit-for-ice/05-thevenin-and-norton-equivalent-circuit/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"advanced-computer-programming-05-libraries.json",path:"/advanced-computer-programming/05-libraries/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"history-of-science-04-structure-of-scientific-revolutions.json",path:"/history-of-science/04-structure-of-scientific-revolutions/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"discrete-structure-04-number-theory-contd.json",path:"/discrete-structure/04-number-theory-contd/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"electrical-circuit-for-ice-04-mesh-current-analysis.json",path:"/electrical-circuit-for-ice/04-mesh-current-analysis/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"advanced-computer-programming-04-server-side-python.json",path:"/advanced-computer-programming/04-server-side-python/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"electrical-circuit-for-ice-03-node-voltage-analysis.json",path:"/electrical-circuit-for-ice/03-node-voltage-analysis/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"advanced-computer-programming-03-intro-to-python-part-2.json",path:"/advanced-computer-programming/03-intro-to-python-part-2/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"discrete-structure-03-number-theory.json",path:"/discrete-structure/03-number-theory/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"electrical-circuit-for-ice-02-resistive-circuits.json",path:"/electrical-circuit-for-ice/02-resistive-circuits/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"advanced-computer-programming-02-introduction-to-python.json",path:"/advanced-computer-programming/02-introduction-to-python/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"history-of-science-03-science-in-thai-ways-living.json",path:"/history-of-science/03-science-in-thai-ways-living/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"history-of-science-02-history-of-astronomy.json",path:"/history-of-science/02-history-of-astronomy/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"discrete-structure-02-pattern-of-proofs.json",path:"/discrete-structure/02-pattern-of-proofs/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"advanced-mathermatics-method-01-course-overview.json",path:"/advanced-mathermatics-method/01-course-overview/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"electrical-circuit-for-ice-00-course-overview.json",path:"/electrical-circuit-for-ice/00-course-overview/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"electrical-circuit-for-ice-01-introduction.json",path:"/electrical-circuit-for-ice/01-introduction/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"advanced-computer-programming-01-introduction.json",path:"/advanced-computer-programming/01-Introduction/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"history-of-science-01-orientation.json",path:"/history-of-science/01-orientation/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"discrete-structure-01-mathematical-fundamentals-statements-and-logic.json",path:"/discrete-structure/01-mathematical-fundamentals-statements-and-logic/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"intro-to-ice-01-introduction.json",path:"/intro-to-ice/01-Introduction/"},{componentChunkName:"component---src-templates-subject-list-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"discrete-strcuture.json",path:"/discrete-strcuture"},{componentChunkName:"component---src-templates-subject-list-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"electrical-circuit-for-ice.json",path:"/electrical-circuit-for-ice"},{componentChunkName:"component---src-templates-subject-list-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"advanced-computer-programming.json",path:"/advanced-computer-programming"},{componentChunkName:"component---src-templates-subject-list-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"history-of-science.json",path:"/history-of-science"},{componentChunkName:"component---src-templates-subject-list-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"advanced-mathematics-method.json",path:"/advanced-mathematics-method"},{componentChunkName:"component---src-templates-subject-list-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"introduction-to-ice.json",path:"/introduction-to-ice"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"}]},582:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,t=n.createResourceDownload,o=[],r=[],u=function(){var n=e();n&&(r.push(n),t(n))},a=function(n){switch(n.type){case"RESOURCE_FINISHED":r=r.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&u()},0)};return{onResourcedFinished:function(n){a({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){a({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){a({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){a({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},u=t(453),a=t(2),c=o(a),i=t(17),s=o(i),l=t(449),p=t(730),f=t(683),d=o(f),m=t(135),h=t(580),g=o(h),y=t(433),v=o(y),j=t(788),x=o(j),b=t(789),C=o(b),N=t(578),R=o(N),k=t(577),w=o(k),_=t(529),P=o(_);t(601),window.___history=g.default,window.___emitter=v.default,P.default.addPagesArray(x.default),P.default.addProdRequires(w.default),window.asyncRequires=w.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=C.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),O=function(n){var e=E[n];return null!=e&&(g.default.replace(e.toPath),!0)};O(window.location.pathname),(0,u.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&i!==!1||(window.___history=n,i=!0,n.listen(function(n,e){O(n.pathname)||setTimeout(function(){(0,u.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var t=e.location.pathname,o=(0,u.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:t});if(o.length>0)return o[0];if(n){var r=n.location.pathname;if(r===t)return!1}return!0}(0,u.apiRunner)("registerServiceWorker").length>0&&t(583);var o=function(n,e){function t(n){n.page.path===P.default.getPage(r).path&&(v.default.off("onPostLoadPageResources",t),clearTimeout(i),c(o))}var o=(0,m.createLocation)(n,null,null,g.default.location),r=o.pathname,u=E[r];u&&(r=u.toPath);var a=window.location;if(a.pathname!==o.pathname||a.search!==o.search||a.hash!==o.hash){var c=e?window.___history.replace:window.___history.push,i=setTimeout(function(){v.default.off("onPostLoadPageResources",t),v.default.emit("onDelayedLoadPageResources",{pathname:r}),c(o)},1e3);P.default.getResourcesForPathname(r)?(clearTimeout(i),c(o)):v.default.on("onPostLoadPageResources",t)}};window.___push=function(n){return o(n,!1)},window.___replace=function(n){return o(n,!0)},window.___navigateTo=window.___push,(0,u.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var i=!1,f=(0,u.apiRunner)("replaceRouterComponent",{history:g.default})[0],h=function(n){var e=n.children;return c.default.createElement(l.Router,{history:g.default},e)},y=(0,l.withRouter)(R.default);P.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,a.createElement)(f?f:h,null,(0,a.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,a.createElement)(y,{layout:!0,children:function(e){return(0,a.createElement)(l.Route,{render:function(t){n(t.history);var o=e?e:t;return P.default.getPage(o.location.pathname)?(0,a.createElement)(R.default,r({page:!0},o)):(0,a.createElement)(R.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,u.apiRunner)("wrapRootComponent",{Root:t},t)[0],i=(0,u.apiRunner)("replaceHydrateFunction",void 0,s.default.render)[0];(0,d.default)(function(){return i(c.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,u.apiRunner)("onInitialClientRender")})})})})},789:function(n,e){n.exports=[]},583:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(433),u=o(r),a="/";a="/lecture-notes/","serviceWorker"in navigator&&navigator.serviceWorker.register(a+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),u.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},530:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},683:function(n,e,t){!function(e,t){n.exports=t()}("domready",function(){var n,e=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",u=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return u||t.addEventListener(r,n=function(){for(t.removeEventListener(r,n),u=1;n=e.shift();)n()}),function(n){u?setTimeout(n,0):e.push(n)}})},26:function(n,e,t){"use strict";function o(){function n(n){var e=o.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,o=document.querySelector("head"),r=t.e,u=t.s;t.e=function(o,a){var c=!1,i=!0,s=function(n){a&&(a(t,n),a=null)};return!u&&e&&e[o]?void s(!0):(r(o,function(){c||(c=!0,i?setTimeout(function(){s()}):s())}),void(c||(i=!1,n(function(){c||(c=!0,u?u[o]=void 0:(e||(e={}),e[o]=!0),s(!0))}))))}}o()},688:function(n,e,t){t(26),n.exports=function(n){return t.e(99219681209289,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(724)})})}},725:function(n,e){"use strict";e.registerServiceWorker=function(){return!0}},726:function(n,e,t){"use strict";var o=function(n){setTimeout(function(){var e=window.decodeURI(window.location.hash.replace("#",""));if(""!==e){var t=document.getElementById(e);if(t){var o=t.offsetTop;window.scrollTo(0,o-n)}}},10)};e.onClientEntry=function(n,e){var t=0;e.offsetY&&(t=e.offsetY)},e.onRouteUpdate=function(n,e){var t=0;e.offsetY&&(t=e.offsetY),o(t)}},792:function(n,e){function t(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).slice().map(function(n){n(t)}),(n["*"]||[]).slice().map(function(n){n(e,t)})}}}n.exports=t},452:function(n,e){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(n){if(l===setTimeout)return setTimeout(n,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function u(n){if(p===clearTimeout)return clearTimeout(n);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(n);try{return p(n)}catch(e){try{return p.call(null,n)}catch(e){return p.call(this,n)}}}function a(){h&&d&&(h=!1,d.length?m=d.concat(m):g=-1,m.length&&c())}function c(){if(!h){var n=r(a);h=!0;for(var e=m.length;e;){for(d=m,m=[];++g<e;)d&&d[g].run();g=-1,e=m.length}d=null,h=!1,u(n)}}function i(n,e){this.fun=n,this.array=e}function s(){}var l,p,f=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(n){l=t}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(n){p=o}}();var d,m=[],h=!1,g=-1;
f.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];m.push(new i(n,e)),1!==m.length||h||r(c)},i.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=s,f.addListener=s,f.once=s,f.off=s,f.removeListener=s,f.removeAllListeners=s,f.emit=s,f.prependListener=s,f.prependOnceListener=s,f.listeners=function(n){return[]},f.binding=function(n){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(n){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},804:function(n,e){"use strict";function t(n,e){for(var t in n)if(!(t in e))return!0;for(var o in e)if(n[o]!==e[o])return!0;return!1}e.__esModule=!0,e.default=function(n,e,o){return t(n.props,e)||t(n.state,o)},n.exports=e.default},690:function(n,e,t){t(26),n.exports=function(n){return t.e(35783957827783,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(588)})})}},691:function(n,e,t){t(26),n.exports=function(n){return t.e(0x620f737b6699,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(589)})})}},692:function(n,e,t){t(26),n.exports=function(n){return t.e(0xba7fb6b12c52,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(590)})})}}});
//# sourceMappingURL=app-00b7d658d2d655a79cf7.js.map