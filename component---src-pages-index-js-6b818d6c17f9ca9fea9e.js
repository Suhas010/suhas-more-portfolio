(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"7W2i":function(e,t,a){var n=a("SksO");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Fxm3:function(e,t,a){"use strict";a("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){var t,a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var r=+new Date;!!t&&r<t+n?(clearTimeout(a),a=setTimeout((function(){t=r,e()}),n)):(t=r,e())}};t.default=n},Ijbi:function(e,t,a){var n=a("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},Nsbk:function(e,t){function a(t){return e.exports=a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(t)}e.exports=a},OGtf:function(e,t,a){var n=a("XKFU"),r=a("eeVq"),o=a("vhPU"),l=/"/g,i=function(e,t,a,n){var r=String(o(e)),i="<"+t;return""!==a&&(i+=" "+a+'="'+String(n).replace(l,"&quot;")+'"'),i+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(i),n(n.P+n.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},RIqP:function(e,t,a){var n=a("Ijbi"),r=a("EbDI"),o=a("ZhPi"),l=a("Bnag");e.exports=function(e){return n(e)||r(e)||o(e)||l()}},RXBc:function(e,t,a){"use strict";a.r(t);a("tUrg"),a("f3/d");var n=a("q1tI"),r=a.n(n),o=a("7oih"),l=a("YIkO"),i=a.n(l),s=a("dwco"),c=a.n(s);var m=function(e){return e.children},f=function(e){var t,a;function n(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.componentDidMount=function(){c.a.polyfill()},o.handleClick=function(e){e.preventDefault();var t=0,a=!0,n=this.props,r=n.type,o=n.element,l=n.offset,i=n.timeout;if(r&&o)switch(r){case"class":a=!!(t=document.getElementsByClassName(o)[0]);break;case"id":a=!!(t=document.getElementById(o))}a?this.scrollTo(t,l,i):console.log("Element not found: "+o)},o.scrollTo=function(e,t,a){void 0===t&&(t=0),void 0===a&&(a=null);var n=e?e.getBoundingClientRect().top+window.pageYOffset:0;a?setTimeout((function(){window.scroll({top:n+t,left:0,behavior:"smooth"})}),a):window.scroll({top:n+t,left:0,behavior:"smooth"})},o.render=function(){return r.a.createElement(m,null,"object"==typeof this.props.children?r.a.cloneElement(this.props.children,{onClick:this.handleClick}):r.a.createElement("span",{onClick:this.handleClick},this.props.children))},n}(r.a.Component),u=a("tnry"),p=a.n(u),d=a("obyI"),h=a.n(d);var g=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={tabs:[{content:"About",href:"about"},{content:"Experience",href:"experience"},{content:"Education",href:"education"},{content:"Skills",href:"skills"},{content:"Interests",href:"interests"},{content:"Awards",href:"awards"}],toggle:!1},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this,t=this.state.tabs;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},r.a.createElement("a",{className:"navbar-brand",href:"#page-top"},r.a.createElement("span",{className:"d-block d-lg-none"},h.a.firstName," ",h.a.lastName),r.a.createElement("span",{className:"d-none d-lg-block"},r.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:p.a,alt:"Suhas More profile picture"}))),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:function(){return e.setState((function(e){return{toggle:!e.toggle}}))}},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:this.state.toggle?"navbar-collapse":"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement(i.a,{items:t.map((function(e){return e.href})),currentClassName:"active",offset:-300,className:"navbar-nav"},t.map((function(e,t){var a=e.href,n=e.content;return r.a.createElement("li",{className:"nav-item",key:a},r.a.createElement(f,{type:"id",element:a},r.a.createElement("a",{className:"nav-link",href:"#"+a},n)))})),r.a.createElement("li",{className:"nav-item",key:"https://blog.suhas010.com"},r.a.createElement("a",{className:"nav-link",href:"https://blog.suhas010.com",target:"_blank",rel:"noopener noreferrer"},"Blog")),r.a.createElement("li",{className:"nav-item",key:"https://drive.google.com/drive/folders/1GjXAjds3SA8-WsYMkT3wDWCJp01RALfM"},r.a.createElement("a",{className:"nav-link",href:"https://drive.google.com/drive/folders/1GjXAjds3SA8-WsYMkT3wDWCJp01RALfM",target:"_blank",rel:"noopener noreferrer"},"Certificates")))))},n}(n.Component);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(g,null),r.a.createElement("div",{className:"container-fluid p-0"},r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},r.a.createElement("div",{className:"w-100 custome-center"},r.a.createElement("h1",{className:"mb-0"},r.a.createElement("span",{className:"text-primary"}," Hello")," World,"),r.a.createElement("h1",null,"I'm"),r.a.createElement("h1",{className:"mb-0"},h.a.firstName,r.a.createElement("span",{className:"text-primary"},h.a.lastName)),r.a.createElement("hr",{className:"small hr"}),r.a.createElement("p",{className:"lead mb-5",style:{textAlign:"start"}},"Front-End Engineer with 3+ years of experience in crafting products and software for various domains like Media, eCommerce, CRM, and Helth Care and now working on the Media and Infotainment domain.",r.a.createElement("br",null),r.a.createElement("br",null),"I believe sharing knowledge is the only way to improve the depth of knowledge. I tweet and write blogs often whenever I get time.",r.a.createElement("br",null),r.a.createElement("br",null),"I love to keep myself up to date in terms of tech and I do that by attending meetups, reading open-sourced code, and spend my free time reading tech blogs."),r.a.createElement("div",{className:"social-icons"},h.a.socialLinks.map((function(e){var t=e.icon,a=e.url;return r.a.createElement("a",{key:a,href:a,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab "+t}))}))))),r.a.createElement("hr",{className:" small hr"}),r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Experience"),h.a.experiance.map((function(e){var t=e.name,a=e.link,n=e.position,o=e.duration,l=e.description,i=e.stack;return r.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},n),r.a.createElement("div",{className:"subheading mb-3"},r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},"-> ",t)),r.a.createElement("p",null,l),r.a.createElement("div",{className:"tech-used"},i.map((function(e){return r.a.createElement("span",null,e)})))),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},o)))})))),r.a.createElement("hr",{className:" small hr"}),r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Education"),r.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},"Nowrosjee Wadia College"),r.a.createElement("div",{className:"subheading mb-3"},"Masters Of Computer Science")),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},"June 2015 - December 2016"))),r.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},"Pune University"),r.a.createElement("div",{className:"subheading mb-3"},"Bachelor of Computer Science")),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},"June 2012 - April 2015"))))),r.a.createElement("hr",{className:" small hr"}),r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Skills"),r.a.createElement("div",{className:"subheading mb-3"},"Programming Languages & Tools"),r.a.createElement("ul",{className:"list-inline dev-icons"},r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("i",{className:"fab fa-react"})),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("i",{className:"fab fa-js-square"})),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("i",{className:"fab fa-node-js"})),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("i",{className:"fab fa-html5"})),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("i",{className:"fab fa-css3-alt"})),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("i",{className:"fab fa-python"})),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("i",{className:"fab fa-sass"})),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("i",{className:"fab fa-less"})),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("i",{className:"fab fa-wordpress"})),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("i",{className:"fab fa-npm"})),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("i",{className:"fab fa-git"}))),r.a.createElement("div",{className:"subheading mb-3"},"Workflow"),r.a.createElement("ul",{className:"fa-ul mb-0"},r.a.createElement("li",null,r.a.createElement("i",{className:"fa-li fa fa-check"}),"Mobile-First, Responsive Design"),r.a.createElement("li",null,r.a.createElement("i",{className:"fa-li fa fa-check"}),"Cross Browser Testing & Debugging"),r.a.createElement("li",null,r.a.createElement("i",{className:"fa-li fa fa-check"}),"Cross Functional Teams"),r.a.createElement("li",null,r.a.createElement("i",{className:"fa-li fa fa-check"}),"Agile Development & Scrum")))),r.a.createElement("hr",{className:" small hr"}),r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"interests"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Interests"),r.a.createElement("p",null,"Apart from being a web developer, I enjoy most of my time being outdoors. I like to go for solo road trips. Whenever I'm not learning anything new or not working on personal projects on weekends I love to go for ride. Sometimes with my gorgeus wife and Sometimes with my friends"),r.a.createElement("p",{className:"mb-0"},"When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world."))),r.a.createElement("hr",{className:" small hr"}),r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"awards"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Awards & Certifications"),r.a.createElement("ul",{className:"fa-ul mb-0"},r.a.createElement("li",null,r.a.createElement("i",{className:"fa-li fa fa-certificate  text-warning"}),"Freecodecamp -",r.a.createElement("a",{href:"https://www.freecodecamp.org/certification/suhas010/responsive-web-design",target:"_blank",rel:"noopener noreferrer"},"JavaScript Algorithms and Data Structures Cirtification")),r.a.createElement("li",null,r.a.createElement("i",{className:"fa-li fa fa-certificate  text-warning"}),"Freecodecamp -",r.a.createElement("a",{href:"https://www.freecodecamp.org/certification/suhas010/responsive-web-design",target:"_blank",rel:"noopener noreferrer"},"Responsive Web Desiging")),r.a.createElement("li",null,r.a.createElement("i",{className:"fa-li fa fa-trophy text-warning"}),"Shortlisted in the top 40 profiles among 8k participants on ",r.a.createElement("a",{href:"https://www.hackerrank.com/",target:"_blank",rel:"noopener noreferrer"},"Hackerank")," in Hiring Competition for ",r.a.createElement("a",{href:"https://www.castsoftware.com/",target:"_blank",rel:"noopener noreferrer"}," Cast Software"),"."),r.a.createElement("li",null,r.a.createElement("i",{className:"fa-li fa fa-trophy text-warning"}),"Shortlisted in the top 50 profiles among 3k participants on ",r.a.createElement("a",{href:"https://www.hackerrank.com/",target:"_blank",rel:"noopener noreferrer"},"Hackerank")," in Hiring Competition for ",r.a.createElement("a",{href:"https://www.varian.com/",target:"_blank",rel:"noopener noreferrer"}," Varian medical"),"."),r.a.createElement("li",null,r.a.createElement("i",{className:"fa-li fa fa-trophy text-warning"}),"2",r.a.createElement("sup",null,"nd "),"  Position in National Level Project Competition Held at M.J College Jalgaon, while attending Post Graduation"),r.a.createElement("li",null,r.a.createElement("i",{className:"fa-li fa fa-trophy text-warning"}),"3",r.a.createElement("sup",null,"rd "),"  Position in National Level Project Competition Held at M.J College Jalgaon, while attending Graduation"),r.a.createElement("li",null,r.a.createElement("i",{className:"fa-li fa fa-trophy text-warning"}),"2",r.a.createElement("sup",null,"nd "),"  Price in Blind Faith Programming Competition")))),r.a.createElement("div",{className:"bottom-social-links"},r.a.createElement("div",{className:"social-icons"},h.a.socialLinks.map((function(e){var t=e.icon,a=e.url;return r.a.createElement("a",{key:a,href:a,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab "+t}))}))))))}},SksO:function(e,t){function a(t,n){return e.exports=a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(t,n)}e.exports=a},TSYQ:function(e,t,a){var n;a("LK8F"),function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===o)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},W8MJ:function(e,t){function a(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}},YIkO:function(e,t,a){"use strict";a("V+eJ"),a("dZ+Y"),a("bWfx"),a("2Spj"),a("LK8F"),a("HAE/");var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("pVnL")),o=n(a("lSNA")),l=n(a("RIqP")),i=n(a("lwsE")),s=n(a("a1gu")),c=n(a("Nsbk")),m=n(a("PJYZ")),f=n(a("W8MJ")),u=n(a("7W2i")),p=n(a("17x9")),d=n(a("q1tI")),h=n(a("TSYQ")),g=n(a("Fxm3"));var v=function(e){function t(e){var a;return(0,i.default)(this,t),(a=(0,s.default)(this,(0,c.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},a._handleSpy=a._handleSpy.bind((0,m.default)(a)),a}return(0,u.default)(t,e),(0,f.default)(t,null,[{key:"propTypes",get:function(){return{items:p.default.arrayOf(p.default.string).isRequired,currentClassName:p.default.string.isRequired,scrolledPastClassName:p.default.string,style:p.default.object,componentTag:p.default.oneOfType([p.default.string,p.default.element]),offset:p.default.number,rootEl:p.default.string,onUpdate:p.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,f.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var a=[],n=0,r=e.length;n<r;n++)a[n]=t;return a}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],a=[],n=[],r=e||this.state.targetItems,o=!1,i=0,s=r.length;i<s;i++){var c=r[i],m=!o&&this._isInView(c);m?(o=!0,t.push(c)):a.push(c);var f=i===s-1,u=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!m&&f&&u&&(a.pop(),a.push.apply(a,(0,l.default)(t)),t=[c],n=this._fillArray(n,!1),m=!0),n.push(m)}return{inView:t,outView:a,viewStatusList:n,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(n)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,a=this.props,n=a.rootEl,r=a.offset;n&&(t=document.querySelector(n).getBoundingClientRect());var o=e.getBoundingClientRect(),l=n?t.height:window.innerHeight,i=this._getScrollDimension().scrollTop,s=i+l,c=n?o.top+i-t.top+r:o.top+i+r,m=c+e.offsetHeight;return c<s&&m>i}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),a=t.scrollTop,n=t.scrollHeight;return a+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=n}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,a=this._getElemsViewState(e),n=this.state.inViewState;this.setState({inViewState:a.viewStatusList,isScrolledPast:a.scrolledPast},(function(){t._update(n)}))}},{key:"_update",value:function(e){var t,a;(t=this.state.inViewState,a=e,t.length===a.length&&t.every((function(e,t){return e===a[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,g.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,a=this.props,n=a.children,l=a.className,i=a.scrolledPastClassName,s=a.style,c=0,m=d.default.Children.map(n,(function(t,a){var n;if(!t)return null;var l=t.type,s=i&&e.state.isScrolledPast[a],m=(0,h.default)((n={},(0,o.default)(n,"".concat(t.props.className),t.props.className),(0,o.default)(n,"".concat(e.props.currentClassName),e.state.inViewState[a]),(0,o.default)(n,"".concat(e.props.scrolledPastClassName),s),n));return d.default.createElement(l,(0,r.default)({},t.props,{className:m,key:c++}),t.props.children)})),f=(0,h.default)((0,o.default)({},"".concat(l),l));return d.default.createElement(t,{className:f,style:s},m)}}]),t}(d.default.Component);t.default=v},ZhPi:function(e,t,a){var n=a("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}},a1gu:function(e,t,a){var n=a("cDf5"),r=a("PJYZ");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?r(e):t}},cDf5:function(e,t){function a(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=a=function(e){return typeof e}:e.exports=a=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(t)}e.exports=a},dwco:function(e,t,a){a("Oyvg"),a("eM6i"),a("2Spj"),function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var a,n=e.HTMLElement||e.Element,r={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:n.prototype.scroll||i,scrollIntoView:n.prototype.scrollIntoView},o=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,l=(a=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(a)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?d.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):r.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?r.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):d.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var e=arguments[0].left,t=arguments[0].top;d.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var a=u(this),n=a.getBoundingClientRect(),o=this.getBoundingClientRect();a!==t.body?(d.call(this,a,a.scrollLeft+o.left-n.left,a.scrollTop+o.top-n.top),"fixed"!==e.getComputedStyle(a).position&&e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function i(e,t){this.scrollLeft=e,this.scrollTop=t}function s(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+l<e.scrollHeight:"X"===t?e.clientWidth+l<e.scrollWidth:void 0}function m(t,a){var n=e.getComputedStyle(t,null)["overflow"+a];return"auto"===n||"scroll"===n}function f(e){var t=c(e,"Y")&&m(e,"Y"),a=c(e,"X")&&m(e,"X");return t||a}function u(e){for(;e!==t.body&&!1===f(e);)e=e.parentNode||e.host;return e}function p(t){var a,n,r,l,i=(o()-t.startTime)/468;l=i=i>1?1:i,a=.5*(1-Math.cos(Math.PI*l)),n=t.startX+(t.x-t.startX)*a,r=t.startY+(t.y-t.startY)*a,t.method.call(t.scrollable,n,r),n===t.x&&r===t.y||e.requestAnimationFrame(p.bind(e,t))}function d(a,n,l){var s,c,m,f,u=o();a===t.body?(s=e,c=e.scrollX||e.pageXOffset,m=e.scrollY||e.pageYOffset,f=r.scroll):(s=a,c=a.scrollLeft,m=a.scrollTop,f=i),p({scrollable:s,method:f,startTime:u,startX:c,startY:m,x:n,y:l})}}}}()},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},obyI:function(e,t){e.exports={siteTitle:"Suhas More",manifestName:"Suhas More",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/favicon.png",pathPrefix:"/",firstName:"Suhas",lastName:" More",socialLinks:[{icon:"fa-linkedin-in",name:"Linkedin",url:"https://linkedin.com/in/suhas-more/"},{icon:"fa-twitter",name:"Twitter",url:"https://twitter.com/suhas0101"},{icon:"fa-github",name:"Github",url:"https://github.com/suhas010"},{icon:"fa-codepen",name:"Codepen",url:"https://codepen.com/suhas010"},{icon:"fa-medium",name:"Medium",url:"https://medium.com/@suhas010"},{icon:"fa-facebook-f",name:"Facebook",url:"https://facebook.com/suhas010"}],experiance:[{name:"Josh",link:"https://joshsoftware.com/",duration:"December 2018 - present",position:"Software Engineer",description:"Working with one of the largest media house worldwide and crafting monetary and performance management tools for them.\n      Responsible for designing pixel-perfect, reusable ReactJS components.\n      Wrote common Request handler and interceptor using Axios which removed thousands of lines of unnecessary code.\n      Added env support and removed hardcoded configs.\n      Optimized existing components that improved the performance of the application by almost 20%.\n      \n      ",stack:["ReactJS","JavaScript","NodeJS","HTML5","CSS"]},{name:"Coditas",link:"https://coditas.com/",duration:"February 2018 - December 2018",position:"Software Engineer",description:"Worked as ReactJS and NodeJS developer on CRM application.\n      Was responsible for designing API in NodeJS and reusable ReactJS components.\n      Optimized API's and MongoDB queries which resulted in 60% performance improvements in the API response time.\n      Was responsible for client communication and gathering requirements.\n      ",stack:["ReactJS","JavaScript","NodeJS","HTML5","CSS"]},{name:"SpringCT",link:"http://www.springct.com/",duration:"June 2017 - February 2018",position:"Junior Software Engineer",description:"Worked as ReactJS developer on multiple projects,\n      Refactored and redesigned one of our product's codebase and removed repetitive code.\n      Reduced bundle size by almost 50%.\n      Wrote a common notification manager which will be used throughout the application",stack:["ReactJS","JavaScript","HTML5","CSS"]},{name:"SpringCT",link:"http://www.springct.com/",duration:"January 2017 - June 2017",position:"Intern",description:"Joined as an intern with another 12 candidates and due to my proficiency in HTML and CSS, I got selected for the front-end role and received training on React for two weeks.\n      Immediately after training, I have been selected to work on the Live project.\n      Worked on a phishing simulation and training platform and was closely working with Senior React developers and handling UI related issues.",stack:["ReactJS","JavaScript","HTML5","CSS"]}],email:"hey@suhas010.com",phone:"+91 968 964 9696",address:"Bawadhan, Pune India"}},tUrg:function(e,t,a){"use strict";a("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},tnry:function(e,t,a){e.exports=a.p+"static/suhas-more-555bf5e4e88631fab709ecba8f320b4a.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-6b818d6c17f9ca9fea9e.js.map