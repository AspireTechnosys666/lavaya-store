(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[505],{2109:function(e,n,i){"use strict";var d=i(5477),p={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,n){var i,f,x,y,b,h,g,v,j=!1;n||(n={}),x=n.debug||!1;try{if(b=d(),h=document.createRange(),g=document.getSelection(),(v=document.createElement("span")).textContent=e,v.ariaHidden="true",v.style.all="unset",v.style.position="fixed",v.style.top=0,v.style.clip="rect(0, 0, 0, 0)",v.style.whiteSpace="pre",v.style.webkitUserSelect="text",v.style.MozUserSelect="text",v.style.msUserSelect="text",v.style.userSelect="text",v.addEventListener("copy",function(i){if(i.stopPropagation(),n.format){if(i.preventDefault(),void 0===i.clipboardData){x&&console.warn("unable to use e.clipboardData"),x&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var d=p[n.format]||p.default;window.clipboardData.setData(d,e)}else i.clipboardData.clearData(),i.clipboardData.setData(n.format,e)}n.onCopy&&(i.preventDefault(),n.onCopy(i.clipboardData))}),document.body.appendChild(v),h.selectNodeContents(v),g.addRange(h),!document.execCommand("copy"))throw Error("copy command was unsuccessful");j=!0}catch(d){x&&console.error("unable to copy using execCommand: ",d),x&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(n.format||"text",e),n.onCopy&&n.onCopy(window.clipboardData),j=!0}catch(d){x&&console.error("unable to copy using clipboardData: ",d),x&&console.error("falling back to prompt"),i="message"in n?n.message:"Copy to clipboard: #{key}, Enter",f=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",y=i.replace(/#{\s*key\s*}/g,f),window.prompt(y,e)}}finally{g&&("function"==typeof g.removeRange?g.removeRange(h):g.removeAllRanges()),v&&document.body.removeChild(v),b()}return j}},2659:function(e,n,i){"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.CopyToClipboard=void 0;var d=_interopRequireDefault(i(8381)),p=_interopRequireDefault(i(2109)),f=["text","onCopy","options","children"];function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function ownKeys(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);n&&(d=d.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),i.push.apply(i,d)}return i}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?ownKeys(Object(i),!0).forEach(function(n){_defineProperty(e,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ownKeys(Object(i)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))})}return e}function _defineProperties(e,n){for(var i=0;i<n.length;i++){var d=n[i];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(e,d.key,d)}}function _setPrototypeOf(e,n){return(_setPrototypeOf=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function _assertThisInitialized(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _defineProperty(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}var x=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&_setPrototypeOf(e,n)}(CopyToClipboard,e);var n,i,x,y=(n=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,i=_getPrototypeOf(CopyToClipboard);if(n){var d=_getPrototypeOf(this).constructor;e=Reflect.construct(i,arguments,d)}else e=i.apply(this,arguments);return function(e,n){if(n&&("object"===_typeof(n)||"function"==typeof n))return n;if(void 0!==n)throw TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}(this,e)});function CopyToClipboard(){var e;!function(e,n){if(!(e instanceof n))throw TypeError("Cannot call a class as a function")}(this,CopyToClipboard);for(var n=arguments.length,i=Array(n),f=0;f<n;f++)i[f]=arguments[f];return _defineProperty(_assertThisInitialized(e=y.call.apply(y,[this].concat(i))),"onClick",function(n){var i=e.props,f=i.text,x=i.onCopy,y=i.children,b=i.options,h=d.default.Children.only(y),g=(0,p.default)(f,b);x&&x(f,g),h&&h.props&&"function"==typeof h.props.onClick&&h.props.onClick(n)}),e}return i=[{key:"render",value:function(){var e=this.props,n=(e.text,e.onCopy,e.options,e.children),i=function(e,n){if(null==e)return{};var i,d,p=function(e,n){if(null==e)return{};var i,d,p={},f=Object.keys(e);for(d=0;d<f.length;d++)i=f[d],n.indexOf(i)>=0||(p[i]=e[i]);return p}(e,n);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(e);for(d=0;d<f.length;d++)i=f[d],!(n.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(p[i]=e[i])}return p}(e,f),p=d.default.Children.only(n);return d.default.cloneElement(p,_objectSpread(_objectSpread({},i),{},{onClick:this.onClick}))}}],_defineProperties(CopyToClipboard.prototype,i),x&&_defineProperties(CopyToClipboard,x),Object.defineProperty(CopyToClipboard,"prototype",{writable:!1}),CopyToClipboard}(d.default.PureComponent);n.CopyToClipboard=x,_defineProperty(x,"defaultProps",{onCopy:void 0,options:void 0})},3267:function(e,n,i){"use strict";var d=i(2659).CopyToClipboard;d.CopyToClipboard=d,e.exports=d},3550:function(e,n,i){var d;"undefined"!=typeof self&&self,e.exports=(d=i(8381),(()=>{"use strict";var e={156:e=>{e.exports=d}},n={};function o(i){var d=n[i];if(void 0!==d)return d.exports;var p=n[i]={exports:{}};return e[i](p,p.exports,o),p.exports}o.d=(e,n)=>{for(var i in n)o.o(n,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{o.r(i),o.d(i,{default:()=>l,useStopwatch:()=>u,useTime:()=>m,useTimer:()=>c});var e=o(156);let t=class t{static expiryTimestamp(e){let n=new Date(e).getTime()>0;return n||console.warn("react-timer-hook: { useTimer } Invalid expiryTimestamp settings",e),n}static onExpire(e){let n=e&&"function"==typeof e;return e&&!n&&console.warn("react-timer-hook: { useTimer } Invalid onExpire settings function",e),n}};let r=class r{static getTimeFromSeconds(e){let n=Math.ceil(e);return{totalSeconds:n,seconds:Math.floor(n%60),minutes:Math.floor(n%3600/60),hours:Math.floor(n%86400/3600),days:Math.floor(n/86400)}}static getSecondsFromExpiry(e,n){let i=e-(new Date).getTime();if(i>0){let e=i/1e3;return n?Math.round(e):e}return 0}static getSecondsFromPrevTime(e,n){let i=(new Date).getTime()-e;if(i>0){let e=i/1e3;return n?Math.round(e):e}return 0}static getSecondsFromTimeNow(){let e=new Date;return e.getTime()/1e3-60*e.getTimezoneOffset()}static getFormattedTimeFromSeconds(e,n){let{seconds:i,minutes:d,hours:p}=r.getTimeFromSeconds(e),f="",x=p;return"12-hour"===n&&(f=p>=12?"pm":"am",x=p%12),{seconds:i,minutes:d,hours:x,ampm:f}}};function s(n,i){let d=(0,e.useRef)();(0,e.useEffect)(()=>{d.current=n}),(0,e.useEffect)(()=>{if(!i)return()=>{};let e=setInterval(()=>{d.current&&d.current()},i);return()=>clearInterval(e)},[i])}function a(e){if(!t.expiryTimestamp(e))return null;let n=r.getSecondsFromExpiry(e),i=Math.floor(1e3*(n-Math.floor(n)));return i>0?i:1e3}function c(){let{expiryTimestamp:n,onExpire:i,autoStart:d=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[p,f]=(0,e.useState)(n),[x,y]=(0,e.useState)(r.getSecondsFromExpiry(p)),[b,h]=(0,e.useState)(d),[g,v]=(0,e.useState)(d),[j,w]=(0,e.useState)(a(p)),C=(0,e.useCallback)(()=>{t.onExpire(i)&&i(),h(!1),w(null)},[i]),T=(0,e.useCallback)(()=>{h(!1)},[]),N=(0,e.useCallback)(function(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];w(a(e)),v(n),h(n),f(e),y(r.getSecondsFromExpiry(e))},[]),S=(0,e.useCallback)(()=>{let e=new Date;e.setMilliseconds(e.getMilliseconds()+1e3*x),N(e)},[x,N]),O=(0,e.useCallback)(()=>{g?(y(r.getSecondsFromExpiry(p)),h(!0)):S()},[p,g,S]);return s(()=>{1e3!==j&&w(1e3);let e=r.getSecondsFromExpiry(p);y(e),e<=0&&C()},b?j:null),{...r.getTimeFromSeconds(x),start:O,pause:T,resume:S,restart:N,isRunning:b}}function u(){let{autoStart:n,offsetTimestamp:i}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[d,p]=(0,e.useState)(r.getSecondsFromExpiry(i,!0)||0),[f,x]=(0,e.useState)(new Date),[y,b]=(0,e.useState)(d+r.getSecondsFromPrevTime(f||0,!0)),[h,g]=(0,e.useState)(n);s(()=>{b(d+r.getSecondsFromPrevTime(f,!0))},h?1e3:null);let v=(0,e.useCallback)(()=>{let e=new Date;x(e),g(!0),b(d+r.getSecondsFromPrevTime(e,!0))},[d]),j=(0,e.useCallback)(()=>{p(y),g(!1)},[y]),w=(0,e.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=r.getSecondsFromExpiry(e,!0)||0,d=new Date;x(d),p(i),g(n),b(i+r.getSecondsFromPrevTime(d,!0))},[]);return{...r.getTimeFromSeconds(y),start:v,pause:j,reset:w,isRunning:h}}function m(){let{format:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[i,d]=(0,e.useState)(r.getSecondsFromTimeNow());return s(()=>{d(r.getSecondsFromTimeNow())},1e3),{...r.getFormattedTimeFromSeconds(i,n)}}function l(n){if((0,e.useEffect)(()=>{console.warn("react-timer-hook: default export useTimer is deprecated, use named exports { useTimer, useStopwatch, useTime } instead")},[]),n.expiryTimestamp){let e=c(n);return{...e,startTimer:e.start,stopTimer:e.pause,resetTimer:()=>{}}}let i=u(n);return{...i,startTimer:i.start,stopTimer:i.pause,resetTimer:i.reset}}})(),i})())},5477:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var n=document.activeElement,i=[],d=0;d<e.rangeCount;d++)i.push(e.getRangeAt(d));switch(n.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":n.blur();break;default:n=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||i.forEach(function(n){e.addRange(n)}),n&&n.focus()}}},2505:function(e,n,i){"use strict";i.d(n,{Z:function(){return coupon_Coupon}});var d=i(7168),p=i(8381),f=i(8114),x=i.n(f),y=i(6635),b=i.n(y),h=i(3267),g=i(2913),v=i(4671),j=i(3550),w=p.memo(e=>{let{expiryTimestamp:n,darkGreen:i}=e,{seconds:p,minutes:f,hours:x,days:y}=(0,j.useTimer)({expiryTimestamp:n});return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{className:"flex items-center justify-center ".concat(i?"bg-emerald-500 text-white":"bg-emerald-100","  text-sm font-serif font-semibold px-2 py-1 rounded mx-1"),children:y}),":",(0,d.jsx)("span",{className:"flex items-center justify-center ".concat(i?"bg-emerald-500 text-white":"bg-emerald-100","  text-sm font-serif font-semibold px-2 py-1 rounded mx-1"),children:x}),":",(0,d.jsx)("span",{className:"flex items-center justify-center ".concat(i?"bg-emerald-500 text-white":"bg-emerald-100","  text-sm font-serif font-semibold px-2 py-1 rounded mx-1"),children:f}),":",(0,d.jsx)("span",{className:"flex items-center justify-center ".concat(i?"bg-emerald-500 text-white":"bg-emerald-100","  text-sm font-serif font-semibold px-2 py-1 rounded mx-1"),children:p})]})}),C=i(2182),coupon_Coupon=e=>{let{couponInHome:n}=e,[i,f]=(0,p.useState)(""),[y,j]=(0,p.useState)(!1),{data:T,error:N}=(0,g.Z)(v.Z.getShowingCoupons),{showingTranslateValue:S,currency:O}=(0,C.Z)(),handleCopied=e=>{f(e),j(!0)};return(0,d.jsx)(d.Fragment,{children:N?(0,d.jsx)("p",{className:"flex justify-center align-middle items-center m-auto text-xl text-red-500",children:(0,d.jsxs)("span",{children:[" ",N]})}):n?null==T?void 0:T.slice(0,2).map(e=>{var n,p,f;return(0,d.jsxs)("div",{className:"coupon coupon-home mx-4 my-5 block md:flex lg:flex md:justify-between lg:justify-between items-center bg-white rounded-md shadow",children:[(0,d.jsxs)("div",{className:"tengah py-2 px-3 flex items-center justify-items-start",children:[(0,d.jsx)("figure",{children:(0,d.jsx)(x(),{src:e.logo||"",width:100,height:100,className:"rounded-lg",alt:S(e.title)})}),(0,d.jsxs)("div",{className:"ml-3",children:[(0,d.jsxs)("div",{className:"flex items-center font-serif",children:[(0,d.jsxs)("h6",{className:"pl-1 text-base font-medium text-gray-600",children:[(0,d.jsx)("span",{className:"text-lg md:text-xl lg:text-xl text-red-500 font-bold",children:(null==e?void 0:null===(n=e.discountType)||void 0===n?void 0:n.type)==="fixed"?(0,d.jsxs)("span",{children:["$",null==e?void 0:null===(p=e.discountType)||void 0===p?void 0:p.value]}):(0,d.jsxs)("span",{children:[null==e?void 0:null===(f=e.discountType)||void 0===f?void 0:f.value,"%"]})})," ","Off"]}),(0,d.jsx)("div",{className:"ml-2",children:b()().isAfter(b()(e.endTime))?(0,d.jsx)("span",{className:"text-red-600 inline-block px-4 py-1 rounded-full font-medium text-xs bg-red-100",children:"Inactive"}):(0,d.jsx)("span",{className:"text-emerald-600 inline-block px-4 py-1 rounded-full font-medium text-xs bg-emerald-100",children:"Active"})})]}),(0,d.jsx)("h2",{className:"pl-1 font-serif text-base text-gray-700 leading-6 font-semibold mb-2",children:S(null==e?void 0:e.title)}),b()().isAfter(b()(e.endTime))?(0,d.jsx)("span",{className:"inline-block mb-2",children:(0,d.jsxs)("div",{className:"flex items-center font-semibold",children:[(0,d.jsx)("span",{className:"flex items-center justify-center bg-red-500 text-white text-sm font-serif font-semibold mx-1 px-2 py-1 rounded",children:"00"}),":",(0,d.jsx)("span",{className:"flex items-center justify-center bg-red-500 text-white text-sm font-serif font-semibold mx-1 px-2 py-1 rounded",children:"00"}),":",(0,d.jsx)("span",{className:"flex items-center justify-center bg-red-500 text-white text-sm font-serif font-semibold mx-1 px-2 py-1 rounded",children:"00"}),":",(0,d.jsx)("span",{className:"flex items-center justify-center bg-red-500 text-white text-sm font-serif font-semibold mx-1 px-2 py-1 rounded",children:"00"})]})}):(0,d.jsx)("span",{className:"inline-block mb-2",children:(0,d.jsx)("div",{className:"flex items-center font-semibold",children:(0,d.jsx)(w,{expiryTimestamp:new Date(e.endTime),darkGreen:!0})})})]})]}),(0,d.jsx)("div",{className:"md:border-l-2 lg:border-l-2 border-dashed lg:w-1/3 md:w-1/3 relative px-4",children:(0,d.jsx)("div",{className:"info flex items-center",children:(0,d.jsxs)("div",{className:"w-full",children:[(0,d.jsx)("div",{className:"block",children:(0,d.jsx)("div",{className:"font-serif border border-dashed bg-emerald-50 py-1 border-emerald-300 rounded-lg text-center block",children:(0,d.jsx)(h.CopyToClipboard,{text:e.couponCode,onCopy:()=>handleCopied(e.couponCode),children:(0,d.jsx)("button",{className:"block w-full",children:y&&e.couponCode===i?(0,d.jsx)("span",{className:"text-emerald-600 text-sm leading-7 font-semibold",children:"Copied!"}):(0,d.jsxs)("span",{className:"uppercase font-serif font-semibold text-sm leading-7 text-emerald-600",children:[e.couponCode," "]})})})})}),(0,d.jsxs)("p",{className:"text-xs leading-4 text-gray-500 mt-2",children:["* This coupon apply when shopping more then"," ",(0,d.jsxs)("span",{className:"font-bold",children:[O,e.minimumAmount]})," "]})]})})})]},e._id)}):null==T?void 0:T.map(e=>{var n,p,f;return(0,d.jsxs)("div",{className:"coupon block md:flex lg:flex md:justify-between lg:justify-between items-center bg-white rounded-md shadow-sm",children:[(0,d.jsxs)("div",{className:"tengah p-6 flex items-center justify-items-start",children:[(0,d.jsx)("figure",{children:(0,d.jsx)(x(),{src:e.logo,alt:e.title,width:120,height:120,className:"rounded-lg"})}),(0,d.jsxs)("div",{className:"ml-5",children:[b()().isAfter(b()(e.endTime))?(0,d.jsx)("span",{className:"inline-block mb-2",children:(0,d.jsxs)("div",{className:"flex items-center font-semibold",children:[(0,d.jsx)("span",{className:"flex items-center justify-center bg-red-100 text-sm font-serif font-semibold px-2 py-1 rounded mx-1",children:"00"}),":",(0,d.jsx)("span",{className:"flex items-center justify-center bg-red-100 text-sm font-serif font-semibold px-2 py-1 rounded mx-1",children:"00"}),":",(0,d.jsx)("span",{className:"flex items-center justify-center bg-red-100 text-sm font-serif font-semibold px-2 py-1 rounded mx-1",children:"00"}),":",(0,d.jsx)("span",{className:"flex items-center justify-center bg-red-100 text-sm font-serif font-semibold px-2 py-1 rounded mx-1",children:"00"})]})}):(0,d.jsx)("span",{className:"inline-block mb-2",children:(0,d.jsx)("div",{className:"flex items-center font-semibold",children:(0,d.jsx)(w,{expiryTimestamp:new Date(e.endTime)})})}),(0,d.jsx)("h2",{className:"font-serif text-lg leading-6 font-medium mb-3",children:S(null==e?void 0:e.title)}),(0,d.jsxs)("h2",{className:"pl-1 text-base font-medium text-gray-600",children:[(0,d.jsx)("span",{className:"text-lg md:text-xl lg:text-xl text-red-500 font-bold",children:(null==e?void 0:null===(n=e.discountType)||void 0===n?void 0:n.type)==="fixed"?(0,d.jsxs)("span",{children:["$",null==e?void 0:null===(p=e.discountType)||void 0===p?void 0:p.value]}):(0,d.jsxs)("span",{children:[null==e?void 0:null===(f=e.discountType)||void 0===f?void 0:f.value,"%"]})})," ","Off"]})]})]}),(0,d.jsx)("div",{className:"md:border-l-2 lg:border-l-2 border-dashed lg:w-1/3 md:w-1/3 relative px-6",children:(0,d.jsx)("div",{className:"info flex lg:my-6 md:my-5 mb-6 items-center",children:(0,d.jsxs)("div",{className:"w-full",children:[(0,d.jsxs)("div",{className:"block",children:[(0,d.jsxs)("div",{className:"font-serif font-medium flex items-center mb-1",children:[(0,d.jsx)("span",{children:"Coupon"}),(0,d.jsx)("div",{className:"ml-2",children:b()().isAfter(b()(e.endTime))?(0,d.jsx)("span",{className:"text-red-600 inline-block",children:"Inactive"}):(0,d.jsx)("span",{className:"text-emerald-600 inline-block",children:"Active"})})]}),(0,d.jsx)("div",{className:"font-serif border border-dashed bg-emerald-50 py-2 border-emerald-300 rounded-lg text-center block",children:(0,d.jsx)(h.CopyToClipboard,{text:e.couponCode,onCopy:()=>handleCopied(e.couponCode),children:(0,d.jsx)("button",{className:"block w-full",children:y&&e.couponCode===i?(0,d.jsx)("span",{className:"text-emerald-600 text-base leading-7 font-semibold",children:"Copied!"}):(0,d.jsxs)("span",{className:"uppercase font-serif font-semibold text-base leading-7 text-emerald-600",children:[e.couponCode," "]})})})})]}),(0,d.jsxs)("p",{className:"text-xs leading-5 text-gray-500 mt-2",children:["* This coupon code will apply on when you shopping more then"," ",(0,d.jsxs)("span",{className:"font-bold text-gray-700",children:[O,e.minimumAmount]})," "]})]})})})]},e._id)})})}},4671:function(e,n,i){"use strict";var d=i(3049);n.Z={getAllCoupons:async()=>d.Z.get("/coupon"),getShowingCoupons:async()=>d.Z.get("/coupon/show")}}}]);