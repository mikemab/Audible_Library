(self.webpackChunk=self.webpackChunk||[]).push([[121],{4662:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i}),r(2759),r(895),r(2482),r(911),r(3238);const i={methods:{slugify:function(t){var e="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",r=new RegExp(e.split("").join("|"),"g");return encodeURIComponent(t.toString().toLowerCase().replace(/\s+/g,"-").replace(r,(function(t){return"aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------".charAt(e.indexOf(t))})).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,""))}}}},4145:(t,e,r)=>{var i=r(9775),o=r(3167),n=r(9251),a=r(7826).f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});o(e,t)||a(e,t,{value:n.f(t)})}},5070:(t,e,r)=>{var i=r(8759),o=r(7530);t.exports=function(t,e,r){var n,a;return o&&"function"==typeof(n=e.constructor)&&n!==r&&i(a=n.prototype)&&a!==r.prototype&&o(t,a),t}},3226:(t,e,r)=>{var i=r(4088),o=r(62).f,n={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==n.call(t)?function(t){try{return o(t)}catch(t){return a.slice()}}(t):o(i(t))}},9251:(t,e,r)=>{var i=r(211);e.f=i},2759:(t,e,r)=>{var i=r(5283),o=r(2086),n=r(7189),a=r(5070),s=r(7826).f,l=r(62).f,c=r(7994),u=r(4276),p=r(4930),f=r(1007),y=r(3677),g=r(3278).set,d=r(7420),v=r(211)("match"),h=o.RegExp,b=h.prototype,m=/a/g,k=/a/g,x=new h(m)!==m,E=p.UNSUPPORTED_Y;if(i&&n("RegExp",!x||E||y((function(){return k[v]=!1,h(m)!=m||h(k)==k||"/a/i"!=h(m,"i")})))){for(var S=function(t,e){var r,i=this instanceof S,o=c(t),n=void 0===e;if(!i&&o&&t.constructor===S&&n)return t;x?o&&!n&&(t=t.source):t instanceof S&&(n&&(e=u.call(t)),t=t.source),E&&(r=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var s=a(x?new h(t,e):h(t,e),i?this:b,S);return E&&r&&g(s,{sticky:r}),s},w=function(t){t in S||s(S,t,{configurable:!0,get:function(){return h[t]},set:function(e){h[t]=e}})},T=l(h),$=0;T.length>$;)w(T[$++]);b.constructor=S,S.prototype=b,f(o,"RegExp",S)}d("RegExp")},2189:(t,e,r)=>{"use strict";var i=r(1695),o=r(5283),n=r(2086),a=r(3167),s=r(8759),l=r(7826).f,c=r(8474),u=n.Symbol;if(o&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var p={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new u(t):void 0===t?u():u(t);return""===t&&(p[e]=!0),e};c(f,u);var y=f.prototype=u.prototype;y.constructor=f;var g=y.toString,d="Symbol(test)"==String(u("test")),v=/^Symbol\((.*)\)[^)]+$/;l(y,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=g.call(t);if(a(p,t))return"";var r=d?e.slice(7,-1):e.replace(v,"$1");return""===r?void 0:r}}),i({global:!0,forced:!0},{Symbol:f})}},5901:(t,e,r)=>{"use strict";var i=r(1695),o=r(2086),n=r(563),a=r(3296),s=r(5283),l=r(3193),c=r(1876),u=r(3677),p=r(3167),f=r(6526),y=r(8759),g=r(6112),d=r(3060),v=r(4088),h=r(1288),b=r(5736),m=r(4710),k=r(8779),x=r(62),E=r(3226),S=r(6952),w=r(4399),T=r(7826),$=r(7446),_=r(2585),O=r(1007),C=r(9197),P=r(8944),R=r(7153),L=r(5422),M=r(211),N=r(9251),j=r(4145),B=r(914),I=r(3278),Y=r(8062).forEach,X=P("hidden"),A="Symbol",F=M("toPrimitive"),V=I.set,Z=I.getterFor(A),q=Object.prototype,z=o.Symbol,D=n("JSON","stringify"),U=w.f,W=T.f,H=E.f,G=$.f,J=C("symbols"),Q=C("op-symbols"),K=C("string-to-symbol-registry"),tt=C("symbol-to-string-registry"),et=C("wks"),rt=o.QObject,it=!rt||!rt.prototype||!rt.prototype.findChild,ot=s&&u((function(){return 7!=m(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,r){var i=U(q,e);i&&delete q[e],W(t,e,r),i&&t!==q&&W(q,e,i)}:W,nt=function(t,e){var r=J[t]=m(z.prototype);return V(r,{type:A,tag:t,description:e}),s||(r.description=e),r},at=c?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof z},st=function(t,e,r){t===q&&st(Q,e,r),g(t);var i=h(e,!0);return g(r),p(J,i)?(r.enumerable?(p(t,X)&&t[X][i]&&(t[X][i]=!1),r=m(r,{enumerable:b(0,!1)})):(p(t,X)||W(t,X,b(1,{})),t[X][i]=!0),ot(t,i,r)):W(t,i,r)},lt=function(t,e){g(t);var r=v(e),i=k(r).concat(ft(r));return Y(i,(function(e){s&&!ct.call(r,e)||st(t,e,r[e])})),t},ct=function(t){var e=h(t,!0),r=G.call(this,e);return!(this===q&&p(J,e)&&!p(Q,e))&&(!(r||!p(this,e)||!p(J,e)||p(this,X)&&this[X][e])||r)},ut=function(t,e){var r=v(t),i=h(e,!0);if(r!==q||!p(J,i)||p(Q,i)){var o=U(r,i);return!o||!p(J,i)||p(r,X)&&r[X][i]||(o.enumerable=!0),o}},pt=function(t){var e=H(v(t)),r=[];return Y(e,(function(t){p(J,t)||p(R,t)||r.push(t)})),r},ft=function(t){var e=t===q,r=H(e?Q:v(t)),i=[];return Y(r,(function(t){!p(J,t)||e&&!p(q,t)||i.push(J[t])})),i};l||(O((z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=L(t),r=function(t){this===q&&r.call(Q,t),p(this,X)&&p(this[X],e)&&(this[X][e]=!1),ot(this,e,b(1,t))};return s&&it&&ot(q,e,{configurable:!0,set:r}),nt(e,t)}).prototype,"toString",(function(){return Z(this).tag})),O(z,"withoutSetter",(function(t){return nt(L(t),t)})),$.f=ct,T.f=st,w.f=ut,x.f=E.f=pt,S.f=ft,N.f=function(t){return nt(M(t),t)},s&&(W(z.prototype,"description",{configurable:!0,get:function(){return Z(this).description}}),a||O(q,"propertyIsEnumerable",ct,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:z}),Y(k(et),(function(t){j(t)})),i({target:A,stat:!0,forced:!l},{for:function(t){var e=String(t);if(p(K,e))return K[e];var r=z(e);return K[e]=r,tt[r]=e,r},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(p(tt,t))return tt[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),i({target:"Object",stat:!0,forced:!l,sham:!s},{create:function(t,e){return void 0===e?m(t):lt(m(t),e)},defineProperty:st,defineProperties:lt,getOwnPropertyDescriptor:ut}),i({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:pt,getOwnPropertySymbols:ft}),i({target:"Object",stat:!0,forced:u((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(d(t))}}),D&&i({target:"JSON",stat:!0,forced:!l||u((function(){var t=z();return"[null]"!=D([t])||"{}"!=D({a:t})||"{}"!=D(Object(t))}))},{stringify:function(t,e,r){for(var i,o=[t],n=1;arguments.length>n;)o.push(arguments[n++]);if(i=e,(y(e)||void 0!==t)&&!at(t))return f(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!at(e))return e}),o[1]=e,D.apply(null,o)}}),z.prototype[F]||_(z.prototype,F,z.prototype.valueOf),B(z,A),R[X]=!0},411:t=>{!function(){"use strict";t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var r,i=t.HTMLElement||t.Element,o={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:i.prototype.scroll||s,scrollIntoView:i.prototype.scrollIntoView},n=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,a=(r=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(r)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?g.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):o.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(l(arguments[0])?o.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):g.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},i.prototype.scroll=i.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==l(arguments[0])){var t=arguments[0].left,e=arguments[0].top;g.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},i.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},i.prototype.scrollIntoView=function(){if(!0!==l(arguments[0])){var r=f(this),i=r.getBoundingClientRect(),n=this.getBoundingClientRect();r!==e.body?(g.call(this,r,r.scrollLeft+n.left-i.left,r.scrollTop+n.top-i.top),"fixed"!==t.getComputedStyle(r).position&&t.scrollBy({left:i.left,top:i.top,behavior:"smooth"})):t.scrollBy({left:n.left,top:n.top,behavior:"smooth"})}else o.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(t,e){this.scrollLeft=t,this.scrollTop=e}function l(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(t,e){return"Y"===e?t.clientHeight+a<t.scrollHeight:"X"===e?t.clientWidth+a<t.scrollWidth:void 0}function u(e,r){var i=t.getComputedStyle(e,null)["overflow"+r];return"auto"===i||"scroll"===i}function p(t){var e=c(t,"Y")&&u(t,"Y"),r=c(t,"X")&&u(t,"X");return e||r}function f(t){for(;t!==e.body&&!1===p(t);)t=t.parentNode||t.host;return t}function y(e){var r,i,o,a,s=(n()-e.startTime)/468;a=s=s>1?1:s,r=.5*(1-Math.cos(Math.PI*a)),i=e.startX+(e.x-e.startX)*r,o=e.startY+(e.y-e.startY)*r,e.method.call(e.scrollable,i,o),i===e.x&&o===e.y||t.requestAnimationFrame(y.bind(t,e))}function g(r,i,a){var l,c,u,p,f=n();r===e.body?(l=t,c=t.scrollX||t.pageXOffset,u=t.scrollY||t.pageYOffset,p=o.scroll):(l=r,c=r.scrollLeft,u=r.scrollTop,p=s),y({scrollable:l,method:p,startTime:f,startX:c,startY:u,x:i,y:a})}}}}()},2078:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>g}),r(1418),r(3238),r(5769),r(4078);var i=r(906),o=(r(8010),r(4662));const n={mixins:[o.Z],methods:{prepCategoriesSubPage:function(t){if("category"===this.$route.name){var e=this,r={parent:this.$route.params.parent,child:this.$route.params.child,book:this.$route.params.query},i=_.filter(this.$store.state.library.books,(function(t){if(t.categories){var i=!!t.categories[0]&&e.slugify(t.categories[0].name),o=!!t.categories[1]&&e.slugify(t.categories[1].name);if(i&&o&&r.parent===i&&r.child===o)return!0;if(i&&r.parent===i&&!r.child)return!0}}));if(i&&(r.parent||r.child)){var o=i[0].categories[0]?i[0].categories[0].name:null,n=i[0].categories[1]?i[0].categories[1].name:null;o&&(this.pageTitle=o),o&&(this.pageSubTitle=n)}this.$store.commit("prop",{key:"pageCollection",value:i}),this.collectionSource="pageCollection"}}}};r(2327),r(5623),r(1514),r(5901),r(2189);const a={mixins:[o.Z],methods:{prepCollectionsSubPage:function(t){if("collection"===this.$route.name){var e=this.$route.params.collection,r=_.find(this.$store.state.library.collections,{id:e});if(r){var i=_.filter(this.$store.state.library.books,(function(t){return _.includes(r.books,t.asin)}));(r.title||r.description)&&(r.title&&(this.pageTitle=r.title),r.description&&(this.pageSubTitle=r.description)),this.$store.commit("prop",{key:"pageCollection",value:i}),this.collectionSource="pageCollection"}}}}};r(9217);const s={methods:{prepSeriesSubPage:function(){if("series"===this.$route.name){this.$store.commit("addListRenderingOpts",{listName:"sort",option:{active:!1,current:!1,key:"seriesOrder",label:"Series order",type:"sort",tippy:"The infinite symbol (∞) means the book is in a series but does not have a number."},activate:!this.$route.query.sort||"seriesOrder"===this.$route.query.sort,sortValues:!0});var t=this.$route.params.series,e=_.find(this.$store.state.library.series,{asin:t}),r=_.filter(this.$store.state.library.books,(function(t){return _.includes(e.books,t.asin)}));if(r.length>0){var i=_.find(r[0].series,{asin:t});i&&(this.pageTitle=i.name)}this.$store.commit("prop",{key:"pageCollection",value:r}),this.collectionSource="pageCollection"}}}},l={mixins:[o.Z],methods:{prepWishlist:function(t){"wishlist"===this.$route.name&&(this.$store.commit("prop",{key:"pageCollection",value:this.$store.state.library.wishlist}),this.collectionSource="pageCollection")}}};var c=r(3223),u=r(6564);r(1203);const p={methods:{updateListRenderingOptions:function(){var t=this,e={scope:[{active:!0,key:"title"},{active:!0,key:"authors.name"},{active:!0,key:"narrators.name"},{active:!0,key:"series.name"},{active:!1,key:"categories.name"},{active:!1,key:"publishers.name"}],filter:[{active:!0,type:"filter",label:"Not started",key:"notStarted",condition:function(t){return!t.progress}},{active:!0,type:"filter",label:"Started",key:"started",condition:function(t){return!(!t.progress||t.progress.toLowerCase().match("finished"))}},{active:!0,type:"filter",label:"Finished",key:"finished",condition:function(t){return!(!t.progress||!t.progress.toLowerCase().match("finished"))}},{type:"divider",key:"divider1"},{active:!0,type:"filterExtras",label:"All",key:"all",group:"filterExtras",condition:function(t){return t.asin}},{active:!1,type:"filterExtras",label:"Favorites",key:"favorites",group:"filterExtras",condition:function(t){return t.favorite}},{active:!1,type:"filterExtras",label:"Not in series",key:"not-inseries",group:"filterExtras",condition:function(t){return!t.series}},{active:!1,type:"filterExtras",label:"In series",key:"inseries",group:"filterExtras",condition:function(t){return t.series}},{active:!1,type:"filterExtras",label:"From plus catalog",key:"from-plus-catalog",group:"filterExtras",condition:function(t){return t.fromPlusCatalog}},{active:!1,type:"filterExtras",label:"Unavailable",key:"unavailable",group:"filterExtras",condition:function(t){return t.fromPlusCatalog&&t.unavailable}},{active:!1,type:"filterExtras",label:"Store page unavailable",key:"store-page-unavailable",group:"filterExtras",condition:function(t){return t.storePageChanged||t.storePageMissing}},{active:!1,type:"filterExtras",label:"New books",key:"new-books",group:"filterExtras",condition:function(t){return t.isNew}},{type:"divider",key:"divider2.0"},{active:!1,type:"filterExtras",label:"Length 0-1h",key:"length-0-1h",group:"filterExtras",condition:function(e){if(e.length)return t.timeStringToSeconds(e.length)<=3600}},{active:!1,type:"filterExtras",label:"Length 1-3h",key:"length-1-3h",group:"filterExtras",condition:function(e){if(e.length){var r=t.timeStringToSeconds(e.length);return r>3600&&r<=10800}}},{active:!1,type:"filterExtras",label:"Length 3-5h",key:"length-3-5h",group:"filterExtras",condition:function(e){if(e.length){var r=t.timeStringToSeconds(e.length);return r>10800&&r<=18e3}}},{active:!1,type:"filterExtras",label:"Length 5-10h",key:"length-5-10h",group:"filterExtras",condition:function(e){if(e.length){var r=t.timeStringToSeconds(e.length);return r>18e3&&r<=36e3}}},{active:!1,type:"filterExtras",label:"Length 10-20h",key:"length-10-20h",group:"filterExtras",condition:function(e){if(e.length){var r=t.timeStringToSeconds(e.length);return r>36e3&&r<=72e3}}},{active:!1,type:"filterExtras",label:"Length 20-30h",key:"length-20-30h",group:"filterExtras",condition:function(e){if(e.length){var r=t.timeStringToSeconds(e.length);return r>72e3&&r<=108e3}}},{active:!1,type:"filterExtras",label:"Length +30h",key:"length-plus30h",group:"filterExtras",condition:function(e){if(e.length)return t.timeStringToSeconds(e.length)>108e3}},{type:"divider",key:"divider2.1"},{active:!1,type:"filterExtras",label:"Multiple narrators",key:"multiple-narrators",group:"filterExtras",condition:function(t){return t.narrators&&t.narrators.length>1}},{active:!1,type:"filterExtras",label:"Multiple narrators 2",key:"multiple-narrators2",group:"filterExtras",condition:function(t){return t.narrators&&2===t.narrators.length}},{active:!1,type:"filterExtras",label:"Multiple narrators 3-5",key:"multiple-narrators-3-5",group:"filterExtras",condition:function(t){return t.narrators&&t.narrators.length>2&&t.narrators.length<=5}},{active:!1,type:"filterExtras",label:"Multiple narrators 6-10",key:"multiple-narrators-6-10",group:"filterExtras",condition:function(t){return t.narrators&&t.narrators.length>5&&t.narrators.length<=10}},{active:!1,type:"filterExtras",label:"Multiple narrators > 10",key:"multiple-narrators-greater-10",group:"filterExtras",condition:function(t){return t.narrators&&t.narrators.length>10}},{type:"divider",key:"divider3"},{active:!1,type:"filterExtras",label:"Books in series 1",key:"1inSeries",group:"filterExtras",condition:function(e){var r=!1;return _.each(e.series,(function(e){var i=_.find(t.$store.state.library.series,{asin:e.asin});return i&&i.books&&1===i.books.length&&(r=!0),!1})),r}},{active:!1,type:"filterExtras",label:"Books in series > 1",key:"plus1series",group:"filterExtras",condition:function(e){var r=!1;return _.each(e.series,(function(e){var i=_.find(t.$store.state.library.series,{asin:e.asin});return i&&i.books&&i.books.length>1&&(r=!0),!1})),r}},{active:!1,type:"filterExtras",label:"Books in series > 5",key:"plus5series",group:"filterExtras",condition:function(e){var r=!1;return _.each(e.series,(function(e){var i=_.find(t.$store.state.library.series,{asin:e.asin});return i&&i.books&&i.books.length>5&&(r=!0),!1})),r}},{active:!1,type:"filterExtras",label:"Books in series > 10",key:"plus10series",group:"filterExtras",condition:function(e){var r=!1;return _.each(e.series,(function(e){var i=_.find(t.$store.state.library.series,{asin:e.asin});return i&&i.books&&i.books.length>10&&(r=!0),!1})),r}},{active:!1,type:"filterExtras",label:"Books in series > 20",key:"plus20series",group:"filterExtras",condition:function(e){var r=!1;return _.each(e.series,(function(e){var i=_.find(t.$store.state.library.series,{asin:e.asin});return i&&i.books&&i.books.length>20&&(r=!0),!1})),r}},{active:!1,type:"filterExtras",label:"Books in series > 30",key:"plus30series",group:"filterExtras",condition:function(e){var r=!1;return _.each(e.series,(function(e){var i=_.find(t.$store.state.library.series,{asin:e.asin});return i&&i.books&&i.books.length>30&&(r=!0),!1})),r}},{type:"divider",key:"divider4"},{active:!1,type:"filterExtras",label:"Average rating 1",key:"rating-1",group:"filterExtras",condition:function(t){return t.rating>=1&&t.rating<2}},{active:!1,type:"filterExtras",label:"Average rating 2",key:"rating-2",group:"filterExtras",condition:function(t){return t.rating>=2&&t.rating<3}},{active:!1,type:"filterExtras",label:"Average rating 3",key:"rating-3",group:"filterExtras",condition:function(t){return t.rating>=3&&t.rating<4}},{active:!1,type:"filterExtras",label:"Average rating 4",key:"rating-4",group:"filterExtras",condition:function(t){return t.rating>=4&&t.rating<5}},{active:!1,type:"filterExtras",label:"Average rating 5",key:"rating-5",group:"filterExtras",condition:function(t){return 5===t.rating}},{type:"divider",key:"divider5"},{active:!1,type:"filterExtras",label:"My rating 1",key:"my-rating-1",group:"filterExtras",condition:function(t){return t.myRating>=1&&t.myRating<2},tippy:"Not for me"},{active:!1,type:"filterExtras",label:"My rating 2",key:"my-rating-2",group:"filterExtras",condition:function(t){return t.myRating>=2&&t.myRating<3},tippy:"It’s okay"},{active:!1,type:"filterExtras",label:"My rating 3",key:"my-rating-3",group:"filterExtras",condition:function(t){return t.myRating>=3&&t.myRating<4},tippy:"Pretty good"},{active:!1,type:"filterExtras",label:"My rating 4",key:"my-rating-4",group:"filterExtras",condition:function(t){return t.myRating>=4&&t.myRating<5},tippy:"It’s great"},{active:!1,type:"filterExtras",label:"My rating 5",key:"my-rating-5",group:"filterExtras",condition:function(t){return 5===t.myRating},tippy:"I love it"}],sort:[{active:!1,sticky:!0,key:"sortValues",label:"Show sort values",type:"sortExtras",tippy:"Shows the active sorter's value on top of the cover in the grid view."},{active:!1,key:"randomize",label:"Randomize",type:"sortExtras",tippy:"Sorting is ignored and the order is randomized."},{type:"divider",key:"divider1"},{active:!0,current:!0,key:"added",label:"Added",type:"sort",tippy:'<div style="text-align: left;"><small>&#9650;</small> Old at the top <br><small style="display: inline-block; transform: rotate(180deg);">&#9650;</small> New at the top</div>'},{active:!0,current:!1,key:"title",label:"Title",type:"sort"},{active:!0,current:!1,key:"authors.name",label:"Author",type:"sort"},{active:!0,current:!1,key:"narrators.name",label:"Narrator",type:"sort"},{active:!1,current:!1,key:"releaseDate",label:"Release date",type:"sort"},{active:!1,current:!1,key:"length",label:"Length",type:"sort"},{type:"divider",key:"divider2"},{active:!1,current:!1,key:"rating",label:"Rating",type:"sort"},{active:!1,current:!1,key:"ratings",label:"Number of ratings",type:"sort"},{active:!1,current:!1,key:"progress",label:"Progress",type:"sort"},{active:!0,current:!1,key:"publishers.name",label:"Publishers",type:"sort"},{type:"divider",key:"divider3"},{active:!1,current:!1,key:"favorite",label:"Favorite",type:"sort"},{active:!0,current:!1,key:"series",label:"Series",type:"sort",tippy:"Sorts books by the series name alphabetically."},{active:!1,current:!1,key:"myRating",label:"My rating",type:"sort"},{active:!0,current:!1,key:"categories",label:"Categories",type:"sort"},{active:!1,current:!1,key:"isNew",label:"New books",type:"sort"},{type:"divider",key:"divider4"},{active:!0,current:!1,key:"language",label:"Language",type:"sort"},{active:!0,current:!1,key:"format",label:"Format",type:"sort"},{active:!1,current:!1,key:"fromPlusCatalog",label:"From plus catalog",type:"sort"},{active:!1,current:!1,key:"unavailable",label:"Unavailable",type:"sort",tippy:"From the plus catalog and currently unavailable..."},{active:!1,current:!1,key:"downloaded",label:"Downloaded",type:"sort"},{type:"divider",key:"divider5"},{active:!1,current:!1,key:"storePageMissing",label:"Store page missing",type:"sort",tippy:"The original store page could not be found. There may be a new store page that replaced it."},{active:!1,current:!1,key:"storePageChanged",label:"Store page changed",type:"sort",tippy:"There is a store page that exists, but it is for a different version of the book."},{active:!1,current:!1,key:"isbn10",label:"Isbn 10",type:"sort"},{active:!1,current:!1,key:"isbn13",label:"Isbn 13",type:"sort"},{active:!0,current:!1,key:"bookNumbers",label:"Book Numbers",type:"sort",tippy:'<strong>This is only a simple number sort.</strong> <br> If you want the correct series order, as listed in Audible, check the series page in the top menu or the "my books in the series" button in book details. <br><br>Click any book cover (or row) to reveal book details. <br><br> The infinite symbol (∞) means the book is in a series but does not have a number.'}]};this.$setListRenderingOpts(e)}}};var f=r(411);r.n(f)().polyfill();const y={name:"aleGallery",components:{aleSearch:i.Z,aleGridView:function(){return r.e(577).then(r.bind(r,139))},aleListView:function(){return r.e(901).then(r.bind(r,6711))}},mixins:[u.Z,n,a,s,l,c.Z,p],data:function(){return{collectionSource:"library.books",pageTitle:null,pageSubTitle:null}},beforeCreate:function(){this.$route.query.view&&this.$store.commit("stickyProp",{key:"viewMode",value:this.$route.query.view})},created:function(){this.updateListRenderingOptions(),this.prepCategoriesSubPage(),this.prepCollectionsSubPage(),this.prepSeriesSubPage(),this.prepWishlist()}},g=(0,r(810).Z)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"ale-gallery","data-audio-player-visible":t.$store.state.audioPlayerVisible}},[t.pageTitle||t.pageSubTitle?r("div",{staticClass:"gallery-title-wrapper"},[t.pageTitle?r("h2",{staticClass:"gallery-title"},[t._v("\n      "+t._s(t.pageTitle)+"\n    ")]):t._e(),t._v(" "),r("div",{staticClass:"divider"}),t._v(" "),t.pageSubTitle?r("h3",{staticClass:"gallery-sub-title"},[t._v("\n      "+t._s(t.pageSubTitle)+"\n    ")]):t._e()]):t._e(),t._v(" "),r("ale-search",{attrs:{collectionSource:t.collectionSource}}),t._v(" "),t.$store.getters.collection&&t.$store.getters.collection.length>0?r("div",["grid"===t.$store.state.sticky.viewMode?r("ale-grid-view"):"spreadsheet"===t.$store.state.sticky.viewMode?r("ale-list-view"):t._e()],1):t._e()],1)}),[],!1,null,"3aacfa50",null).exports}}]);