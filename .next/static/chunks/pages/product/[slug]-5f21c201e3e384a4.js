(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[915],{7607:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/[slug]",function(){return r(2476)}])},2476:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return K},default:function(){return _slug_}});var n,i,s=r(7168),l=r(4382),o=r(8114),a=r.n(o),c=r(7136),d=r.n(c),u=r(655),h=r(8381),m=r(7957),x=(n=function(e,t){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function __(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}),p=function(e){function AssertionError(t){var r=e.call(this,t)||this;return r.name="AssertionError",r}return x(AssertionError,e),AssertionError}(Error);function assert(e,t){if(!e)throw new p(t)}function objectToGetParams(e){var t=Object.entries(e).filter(function(e){return null!=e[1]}).map(function(e){var t=e[0],r=e[1];return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(String(r)))});return t.length>0?"?".concat(t.join("&")):""}var f=r(3333),v=r.n(f),g=(i=function(e,t){return(i=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function __(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}),__assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},__generator=function(e,t){var r,n,i,s,l={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function verb(s){return function(o){return function(s){if(r)throw TypeError("Generator is already executing.");for(;l;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return l.label++,{value:s[1],done:!1};case 5:l.label++,n=s[1],s=[0];continue;case 7:s=l.ops.pop(),l.trys.pop();continue;default:if(!(i=(i=l.trys).length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){l=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){l.label=s[1];break}if(6===s[0]&&l.label<i[1]){l.label=i[1],i=s;break}if(i&&l.label<i[2]){l.label=i[2],l.ops.push(s);break}i[2]&&l.ops.pop(),l.trys.pop();continue}s=t.call(e,l)}catch(e){s=[6,e],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,o])}}},__rest=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r},w=function(e){function ShareButton(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var r=t.props,n=r.onShareWindowClose,i=r.windowHeight,s=void 0===i?400:i,l=r.windowPosition,o=void 0===l?"windowCenter":l,a=r.windowWidth,c=void 0===a?550:a;!function(e,t,r){var n=t.height,i=t.width,s=__rest(t,["height","width"]),l=__assign({height:n,width:i,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},s),o=window.open(e,"",Object.keys(l).map(function(e){return"".concat(e,"=").concat(l[e])}).join(", "));if(r)var a=window.setInterval(function(){try{(null===o||o.closed)&&(window.clearInterval(a),r(o))}catch(e){console.error(e)}},1e3)}(e,__assign({height:s,width:c},"windowCenter"===o?{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-c/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-s/2}:{top:(window.screen.height-s)/2,left:(window.screen.width-c)/2}),n)},t.handleClick=function(e){var r,n,i;return r=void 0,n=void 0,i=function(){var t,r,n,i,s,l,o,a,c;return __generator(this,function(d){switch(d.label){case 0:var u;if(r=(t=this.props).beforeOnClick,n=t.disabled,i=t.networkLink,s=t.onClick,l=t.url,o=t.openShareDialogOnClick,a=i(l,t.opts),n)return[2];if(e.preventDefault(),!r||!((u=c=r())&&("object"==typeof u||"function"==typeof u)&&"function"==typeof u.then))return[3,2];return[4,c];case 1:d.sent(),d.label=2;case 2:return o&&this.openShareDialog(a),s&&s(e,a),[2]}})},new(n||(n=Promise))(function(e,s){function fulfilled(e){try{step(i.next(e))}catch(e){s(e)}}function rejected(e){try{step(i.throw(e))}catch(e){s(e)}}function step(t){var r;t.done?e(t.value):((r=t.value)instanceof n?r:new n(function(e){e(r)})).then(fulfilled,rejected)}step((i=i.apply(t,r||[])).next())})},t}return g(ShareButton,e),ShareButton.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),r=e.className,n=e.disabled,i=e.disabledStyle,s=e.forwardedRef,l=(e.networkLink,e.networkName),o=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),a=e.style,c=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,__rest(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),d=v()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!n,disabled:!!n},r),u=o?__assign(__assign({backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"},a),n&&i):__assign(__assign({},a),n&&i);return h.createElement("button",__assign({},c,{"aria-label":c["aria-label"]||l,className:d,onClick:this.handleClick,ref:s,style:u}),t)},ShareButton.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},ShareButton}(h.Component),createShareButton_assign=function(){return(createShareButton_assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},hocs_createShareButton=function(e,t,r,n){function CreatedButton(i,s){var l=r(i),o=createShareButton_assign({},i);return Object.keys(l).forEach(function(e){delete o[e]}),h.createElement(w,createShareButton_assign({},n,o,{forwardedRef:s,networkName:e,networkLink:t,opts:r(i)}))}return CreatedButton.displayName="ShareButton-".concat(e),(0,h.forwardRef)(CreatedButton)},j=hocs_createShareButton("facebook",function(e,t){var r=t.quote,n=t.hashtag;return assert(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+objectToGetParams({u:e,quote:r,hashtag:n})},function(e){return{quote:e.quote,hashtag:e.hashtag}},{windowWidth:550,windowHeight:400}),y=r(1913),b=hocs_createShareButton("twitter",function(e,t){var r=t.title,n=t.via,i=t.hashtags,s=void 0===i?[]:i,l=t.related,o=void 0===l?[]:l;return assert(e,"twitter.url"),assert(Array.isArray(s),"twitter.hashtags is not an array"),assert(Array.isArray(o),"twitter.related is not an array"),"https://twitter.com/share"+objectToGetParams({url:e,text:r,via:n,hashtags:s.length>0?s.join(","):void 0,related:o.length>0?o.join(","):void 0})},function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}},{windowWidth:550,windowHeight:400}),_=r(599),N=hocs_createShareButton("reddit",function(e,t){var r=t.title;return assert(e,"reddit.url"),"https://www.reddit.com/submit"+objectToGetParams({url:e,title:r})},function(e){return{title:e.title}},{windowWidth:660,windowHeight:460,windowPosition:"windowCenter"}),k=(0,r(5793).Z)({color:"#ff4500",networkName:"reddit",path:"m 52.8165,31.942362 c 0,-2.4803 -2.0264,-4.4965 -4.5169,-4.4965 -1.2155,0 -2.3171,0.4862 -3.128,1.2682 -3.077,-2.0247 -7.2403,-3.3133 -11.8507,-3.4782 l 2.5211,-7.9373 6.8272,1.5997 -0.0102,0.0986 c 0,2.0281 1.6575,3.6771 3.6958,3.6771 2.0366,0 3.6924,-1.649 3.6924,-3.6771 0,-2.0281 -1.6575,-3.6788 -3.6924,-3.6788 -1.564,0 -2.8968,0.9758 -3.4357,2.3443 l -7.3593,-1.7255 c -0.3213,-0.0782 -0.6477,0.1071 -0.748,0.4233 L 32,25.212062 c -4.8246,0.0578 -9.1953,1.3566 -12.41,3.4425 -0.8058,-0.7446 -1.8751,-1.2104 -3.0583,-1.2104 -2.4905,0 -4.5152,2.0179 -4.5152,4.4982 0,1.649 0.9061,3.0787 2.2389,3.8607 -0.0884,0.4794 -0.1462,0.9639 -0.1462,1.4569 0,6.6487 8.1736,12.0581 18.2223,12.0581 10.0487,0 18.224,-5.4094 18.224,-12.0581 0,-0.4658 -0.0493,-0.9248 -0.1275,-1.377 1.4144,-0.7599 2.3885,-2.2304 2.3885,-3.9406 z m -29.2808,3.0872 c 0,-1.4756 1.207,-2.6775 2.6894,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 -1.4824,0 -2.6894,-1.2002 -2.6894,-2.6758 z m 15.4037,7.9373 c -1.3549,1.3481 -3.4816,2.0043 -6.5008,2.0043 l -0.0221,-0.0051 -0.0221,0.0051 c -3.0209,0 -5.1476,-0.6562 -6.5008,-2.0043 -0.2465,-0.2448 -0.2465,-0.6443 0,-0.8891 0.2465,-0.2465 0.6477,-0.2465 0.8942,0 1.105,1.0999 2.9393,1.6337 5.6066,1.6337 l 0.0221,0.0051 0.0221,-0.0051 c 2.6673,0 4.5016,-0.5355 5.6066,-1.6354 0.2465,-0.2465 0.6477,-0.2448 0.8942,0 0.2465,0.2465 0.2465,0.6443 0,0.8908 z m -0.3213,-5.2615 c -1.4824,0 -2.6877,-1.2002 -2.6877,-2.6758 0,-1.4756 1.2053,-2.6775 2.6877,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 z"}),S=hocs_createShareButton("whatsapp",function(e,t){var r=t.title,n=t.separator;return assert(e,"whatsapp.url"),"https://"+(/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)?"api":"web")+".whatsapp.com/send"+objectToGetParams({text:r?r+n+e:e})},function(e){return{title:e.title,separator:e.separator||" "}},{windowWidth:550,windowHeight:400}),O=r(3399),C=hocs_createShareButton("linkedin",function(e,t){var r=t.title,n=t.summary,i=t.source;return assert(e,"linkedin.url"),"https://linkedin.com/shareArticle"+objectToGetParams({url:e,mini:"true",title:r,summary:n,source:i})},function(e){return{title:e.title,summary:e.summary,source:e.source}},{windowWidth:750,windowHeight:600}),P=r(8314),B=r(8386),E=r(1403),T=r(3061),q=r(2769),Z=r(3463),z=r(6286),A=r(2182),slug_card_Card=()=>{var e,t,r,n,i,l,o;let{storeCustomizationSetting:a}=(0,z.Z)(),{showingTranslateValue:c}=(0,A.Z)();return(0,s.jsxs)("ul",{className:"my-0",children:[(0,s.jsxs)("li",{className:"flex items-center py-3",children:[(0,s.jsx)("span",{className:"text-xl text-gray-400 items-start mr-4",children:(0,s.jsx)(m.C4B,{})}),(0,s.jsx)("p",{className:"font-sans leading-5 text-sm text-gray-500",children:c(null==a?void 0:null===(e=a.slug)||void 0===e?void 0:e.card_description_one)})]}),(0,s.jsxs)("li",{className:"flex items-center py-3",children:[(0,s.jsx)("span",{className:"text-xl text-gray-400 items-start mr-4",children:(0,s.jsx)(m.m6D,{})}),(0,s.jsx)("p",{className:"font-sans leading-5 text-sm text-gray-500",children:c(null==a?void 0:null===(t=a.slug)||void 0===t?void 0:t.card_description_one)})]}),(0,s.jsxs)("li",{className:"flex items-center py-3",children:[(0,s.jsx)("span",{className:"text-xl text-gray-400 items-start mr-4",children:(0,s.jsx)(m.oQC,{})}),(0,s.jsx)("p",{className:"font-sans leading-5 text-sm text-gray-500",children:c(null==a?void 0:null===(r=a.slug)||void 0===r?void 0:r.card_description_two)})]}),(0,s.jsxs)("li",{className:"flex items-center py-3",children:[(0,s.jsx)("span",{className:"text-xl text-gray-400 items-start mr-4",children:(0,s.jsx)(m.ERY,{})}),(0,s.jsx)("p",{className:"font-sans leading-5 text-sm text-gray-500",children:c(null==a?void 0:null===(n=a.slug)||void 0===n?void 0:n.card_description_three)})]}),(0,s.jsxs)("li",{className:"flex items-center py-3",children:[(0,s.jsx)("span",{className:"text-xl text-gray-400 items-start mr-4",children:(0,s.jsx)(m.OH,{})}),(0,s.jsx)("p",{className:"font-sans leading-5 text-sm text-gray-500",children:c(null==a?void 0:null===(i=a.slug)||void 0===i?void 0:i.card_description_five)})]}),(0,s.jsxs)("li",{className:"flex items-center py-3",children:[(0,s.jsx)("span",{className:"text-xl text-gray-400 items-start mr-4",children:(0,s.jsx)(m.kXG,{})}),(0,s.jsx)("p",{className:"font-sans leading-5 text-sm text-gray-500",children:c(null==a?void 0:null===(l=a.slug)||void 0===l?void 0:l.card_description_six)})]}),(0,s.jsxs)("li",{className:"flex items-center py-3",children:[(0,s.jsx)("span",{className:"text-xl text-gray-400 items-start mr-4",children:(0,s.jsx)(m.i63,{})}),(0,s.jsx)("p",{className:"font-sans leading-5 text-sm text-gray-500",children:c(null==a?void 0:null===(o=a.slug)||void 0===o?void 0:o.card_description_seven)})]})]})},W=r(9114),I=r(5847),H=r(274),R=r(251),L=r(7222),D=r(259),G=r(30),V=r.n(G),U=r(4423),X=r(5625);r(2261),r(9831),r(6735);var Y=r(3183);let ImageCarousel=e=>{let{images:t,handleChangeImage:r}=e,n=(0,h.useRef)(null),i=(0,h.useRef)(null);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(Y.tq,{spaceBetween:1,navigation:!0,allowTouchMove:!1,loop:!0,slidesPerView:4,modules:[X.W_],className:"mySwiper image-carousel",children:[null==t?void 0:t.map((e,t)=>(0,s.jsx)(Y.o5,{className:"group",children:(0,s.jsx)("button",{onClick:()=>r(e),children:(0,s.jsx)(a(),{className:"border inline-flex items-center justify-center px-3 py-1 mt-2",src:e,alt:"product",width:100,height:100})})},t+1)),(0,s.jsx)("button",{ref:n,className:"prev",children:(0,s.jsx)(U.$Ku,{})}),(0,s.jsx)("button",{ref:i,className:"next",children:(0,s.jsx)(U.mzm,{})})]})})};var F=V()(()=>Promise.resolve(ImageCarousel),{ssr:!1}),K=!0,_slug_=e=>{var t,r,n,i,o,c,x,p,f,v,g,w,z;let{product:G,attributes:V,relatedProducts:U}=e,X=(0,u.useRouter)(),{lang:Y,showingTranslateValue:K,getNumber:M,currency:Q}=(0,A.Z)(),{isLoading:$,setIsLoading:J}=(0,h.useContext)(L.l),{handleAddItem:ee,item:et,setItem:er}=(0,W.Z)(),[en,ei]=(0,h.useState)(""),[es,el]=(0,h.useState)(0),[eo,ea]=(0,h.useState)(""),[ec,ed]=(0,h.useState)(0),[eu,eh]=(0,h.useState)(0),[em,ex]=(0,h.useState)(0),[ep,ef]=(0,h.useState)({}),[ev,eg]=(0,h.useState)(!0),[ew,ej]=(0,h.useState)({}),[ey,eb]=(0,h.useState)([]),[e_,eN]=(0,h.useState)([]);(0,h.useEffect)(()=>{var e,t,r,n,i,s,l,o,a;if(en){let e=null==G?void 0:null===(t=G.variants)||void 0===t?void 0:t.filter(e=>Object.keys(ew).every(t=>ew[t]===e[t])),r=null==e?void 0:e.map(e=>{let{originalPrice:t,discount:r,quantity:n,inUse:i,inUseOrder:s,barcode:l,sku:o,productId:a,image:c,...d}=e;return{...d}}),n=Object.keys(Object.assign({},...r)),i=null==n?void 0:n.reduce((e,t)=>({...e,[t]:ep[t]}),{}),s=Object.entries(i).reduce((e,t)=>{let[r,n]=t;return n&&(e[r]=n),e},{}),l=null==e?void 0:e.find(e=>Object.keys(s).every(t=>s[t]===e[t]));if(e.length<=0||void 0===l)return eh(0);eN(e),ef(l),ej(l),ea(null==l?void 0:l.image),eh(null==l?void 0:l.quantity);let o=M(null==l?void 0:l.price),a=M(null==l?void 0:l.originalPrice),c=M((a-o)/a*100);ex(M(c)),el(o),ed(a)}else if((null==G?void 0:null===(e=G.variants)||void 0===e?void 0:e.length)>0){let e=null==G?void 0:null===(r=G.variants)||void 0===r?void 0:r.filter(e=>Object.keys(ew).every(t=>ew[t]===e[t]));eN(e),eh(null===(n=G.variants[0])||void 0===n?void 0:n.quantity),ef(G.variants[0]),ej(G.variants[0]),ea(null===(i=G.variants[0])||void 0===i?void 0:i.image);let t=M(null===(s=G.variants[0])||void 0===s?void 0:s.price),o=M(null===(l=G.variants[0])||void 0===l?void 0:l.originalPrice),a=M((o-t)/o*100);ex(M(a)),el(t),ed(o)}else{eh(null==G?void 0:G.stock),ea(null==G?void 0:G.image[0]);let e=M(null==G?void 0:null===(o=G.prices)||void 0===o?void 0:o.price),t=M(null==G?void 0:null===(a=G.prices)||void 0===a?void 0:a.originalPrice),r=M((t-e)/t*100);ex(M(r)),el(e),ed(t)}},[null==G?void 0:null===(t=G.prices)||void 0===t?void 0:t.discount,null==G?void 0:null===(r=G.prices)||void 0===r?void 0:r.originalPrice,null==G?void 0:null===(n=G.prices)||void 0===n?void 0:n.price,null==G?void 0:G.stock,G.variants,ew,ep,en]),(0,h.useEffect)(()=>{let e=Object.keys(Object.assign({},...null==G?void 0:G.variants)),t=null==V?void 0:V.filter(t=>e.includes(null==t?void 0:t._id));eb(null==t?void 0:t.sort())},[e_,V]),(0,h.useEffect)(()=>{J(!1)},[G]);let handleAddToCart=e=>{if(1===e.variants.length&&e.variants[0].quantity<1||eu<=0)return(0,Z.cB)("Insufficient stock");if(null==G||!G.variants.map(e=>Object.entries(e).sort().toString()===Object.entries(ep).sort().toString()))return(0,Z.cB)("Please select all variant first!");{let{variants:t,categories:r,description:n,...i}=G,s={...i,id:"".concat(e.variants.length<=1?e._id:e._id+(null==ey?void 0:ey.map(e=>ep[e._id]).join("-"))),title:"".concat(e.variants.length<=1?K(null==G?void 0:G.title):K(null==G?void 0:G.title)+"-"+(null==ey?void 0:ey.map(e=>{var t;return null===(t=e.variants)||void 0===t?void 0:t.find(t=>t._id===ep[e._id])}).map(e=>K(null==e?void 0:e.name)))),image:eo,variant:ep,price:es,originalPrice:ec};ee(s)}},{t:ek}=(0,l.Z)(),eS=K(null==G?void 0:null===(i=G.category)||void 0===i?void 0:i.name).toLowerCase().replace(/[^A-Z0-9]+/gi,"-");return(0,s.jsx)(s.Fragment,{children:$?(0,s.jsx)(I.Z,{loading:$}):(0,s.jsx)(q.Z,{title:K(null==G?void 0:G.title),description:K(G.description),children:(0,s.jsx)("div",{className:"px-0 py-10 lg:py-10",children:(0,s.jsxs)("div",{className:"mx-auto px-3 lg:px-10 max-w-screen-2xl",children:[(0,s.jsx)("div",{className:"flex items-center pb-4",children:(0,s.jsxs)("ol",{className:"flex items-center w-full overflow-hidden font-serif",children:[(0,s.jsx)("li",{className:"text-sm pr-1 transition duration-200 ease-in cursor-pointer hover:text-emerald-500 font-semibold",children:(0,s.jsx)(d(),{href:"/",children:"Home"})}),(0,s.jsxs)("li",{className:"text-sm mt-[1px]",children:[" ",(0,s.jsx)(m.Tfp,{})," "]}),(0,s.jsx)("li",{className:"text-sm pl-1 transition duration-200 ease-in cursor-pointer hover:text-emerald-500 font-semibold ",children:(0,s.jsx)(d(),{href:"/search?category=".concat(eS,"&_id=").concat(null==G?void 0:null===(o=G.category)||void 0===o?void 0:o._id),children:(0,s.jsx)("button",{type:"button",onClick:()=>J(!$),children:eS})})}),(0,s.jsxs)("li",{className:"text-sm mt-[1px]",children:[" ",(0,s.jsx)(m.Tfp,{})," "]}),(0,s.jsx)("li",{className:"text-sm px-1 transition duration-200 ease-in ",children:K(null==G?void 0:G.title)})]})}),(0,s.jsx)("div",{className:"w-full rounded-lg p-3 lg:p-12 bg-white",children:(0,s.jsxs)("div",{className:"flex flex-col xl:flex-row",children:[(0,s.jsxs)("div",{className:"flex-shrink-0 xl:pr-10 lg:block w-full mx-auto md:w-6/12 lg:w-5/12 xl:w-4/12",children:[(0,s.jsx)(D.Z,{slug:!0,product:G,discount:em}),G.image[0]?(0,s.jsx)(a(),{src:eo||G.image[0],alt:"product",width:650,height:650,priority:!0}):(0,s.jsx)(a(),{src:"https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png",width:650,height:650,alt:"product Image"}),(null==G?void 0:null===(c=G.image)||void 0===c?void 0:c.length)>1&&(0,s.jsx)("div",{className:"flex flex-row flex-wrap mt-4 border-t",children:(0,s.jsx)(F,{images:G.image,handleChangeImage:e=>{ea(e)}})})]}),(0,s.jsx)("div",{className:"w-full",children:(0,s.jsxs)("div",{className:"flex flex-col md:flex-row lg:flex-row xl:flex-row",children:[(0,s.jsxs)("div",{className:" w-3/5 xl:pr-6 md:pr-6  md:w-2/3 mob-w-full",children:[(0,s.jsxs)("div",{className:"mb-6",children:[(0,s.jsx)("h1",{className:"leading-7 text-lg md:text-xl lg:text-2xl mb-1 font-semibold font-serif text-gray-800",children:K(null==G?void 0:G.title)}),(0,s.jsxs)("p",{className:"uppercase font-serif font-medium text-gray-500 text-sm",children:["SKU :"," ",(0,s.jsx)("span",{className:"font-bold text-gray-600",children:G.sku})]}),(0,s.jsx)("div",{className:"relative",children:(0,s.jsx)(E.Z,{stock:eu})})]}),(0,s.jsx)(B.Z,{price:es,product:G,currency:Q,originalPrice:ec}),(0,s.jsx)("div",{className:"mb-4",children:null==ey?void 0:ey.map((e,t)=>(0,s.jsxs)("span",{children:[(0,s.jsxs)("h4",{className:"text-sm py-1",children:[K(null==e?void 0:e.name),":"]}),(0,s.jsx)("div",{className:"flex flex-row mb-3",children:(0,s.jsx)(R.Z,{att:e._id,lang:Y,option:e.option,setValue:ei,varTitle:ey,setSelectVa:ej,variants:G.variants,selectVariant:ep,setSelectVariant:ef})})]},t+1))}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"text-sm leading-6 text-gray-500 md:leading-7",children:[ev?null===(x=K(null==G?void 0:G.description))||void 0===x?void 0:x.slice(0,230):K(null==G?void 0:G.description),(0,s.jsx)("br",{}),(null===(f=Object)||void 0===f?void 0:null===(p=f.keys(null==G?void 0:G.description))||void 0===p?void 0:p.includes(Y))?(null==G?void 0:null===(v=G.description[Y])||void 0===v?void 0:v.length)>230&&(0,s.jsx)("span",{onClick:()=>eg(!ev),className:"read-or-hide",children:ek(ev?"common:moreInfo":"common:showLess")}):(null==G?void 0:null===(w=G.description)||void 0===w?void 0:null===(g=w.en)||void 0===g?void 0:g.length)>230&&(0,s.jsx)("span",{onClick:()=>eg(!ev),className:"read-or-hide",children:ek(ev?"common:moreInfo":"common:showLess")})]}),(0,s.jsx)("div",{className:"flex items-center mt-4",children:(0,s.jsxs)("div",{className:"flex items-center justify-between space-s-3 sm:space-s-4 w-full",children:[(0,s.jsxs)("div",{className:"group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0 border h-11 md:h-12 border-gray-300",children:[(0,s.jsx)("button",{onClick:()=>er(et-1),disabled:1===et,className:"flex items-center justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none w-8 md:w-12 text-heading border-e border-gray-300 hover:text-gray-500",children:(0,s.jsx)("span",{className:"text-dark text-base",children:(0,s.jsx)(m.ego,{})})}),(0,s.jsx)("p",{className:"font-semibold flex items-center justify-center h-full  transition-colors duration-250 ease-in-out cursor-default flex-shrink-0 text-base text-heading w-8  md:w-20 xl:w-24",children:et}),(0,s.jsx)("button",{onClick:()=>er(et+1),disabled:(null==ep?void 0:ep.quantity)<=et,className:"flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none w-8 md:w-12 text-heading border-s border-gray-300 hover:text-gray-500",children:(0,s.jsx)("span",{className:"text-dark text-base",children:(0,s.jsx)(m.OvN,{})})})]}),(0,s.jsx)("button",{onClick:()=>handleAddToCart(G),className:"text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-serif text-center justify-center border-0 border-transparent rounded-md focus-visible:outline-none focus:outline-none text-white px-4 ml-4 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white bg-emerald-500 hover:bg-emerald-600 w-full h-12",children:ek("common:addToCart")})]})}),(0,s.jsxs)("div",{className:"flex flex-col mt-4",children:[(0,s.jsxs)("span",{className:"font-serif font-semibold py-1 text-sm d-block",children:[(0,s.jsxs)("span",{className:"text-gray-800",children:[ek("common:category"),":"]})," ",(0,s.jsx)(d(),{href:"/search?category=".concat(eS,"&_id=").concat(null==G?void 0:null===(z=G.category)||void 0===z?void 0:z._id),children:(0,s.jsx)("button",{type:"button",className:"text-gray-600 font-serif font-medium underline ml-2 hover:text-teal-600",onClick:()=>J(!$),children:eS})})]}),(0,s.jsx)(T.Z,{product:G})]}),(0,s.jsx)("div",{className:"mt-8",children:(0,s.jsxs)("p",{className:"text-xs sm:text-sm text-gray-700 font-medium",children:["Call Us To Order By Mobile Number :"," ",(0,s.jsx)("span",{className:"text-emerald-700 font-semibold",children:"+0044235234"})," "]})}),(0,s.jsxs)("div",{className:"mt-2",children:[(0,s.jsx)("h3",{className:"text-base font-semibold mb-1 font-serif",children:ek("common:shareYourSocial")}),(0,s.jsx)("p",{className:"font-sans text-sm text-gray-500",children:ek("common:shareYourSocialText")}),(0,s.jsxs)("ul",{className:"flex mt-4",children:[(0,s.jsx)("li",{className:"flex items-center text-center border border-gray-100 rounded-full hover:bg-emerald-500  mr-2 transition ease-in-out duration-500",children:(0,s.jsx)(j,{url:"https://kachabazar-store-nine.vercel.app/product/".concat(X.query.slug),quote:"",children:(0,s.jsx)(y.Z,{size:32,round:!0})})}),(0,s.jsx)("li",{className:"flex items-center text-center border border-gray-100 rounded-full hover:bg-emerald-500  mr-2 transition ease-in-out duration-500",children:(0,s.jsx)(b,{url:"https://kachabazar-store-nine.vercel.app/product/".concat(X.query.slug),quote:"",children:(0,s.jsx)(_.Z,{size:32,round:!0})})}),(0,s.jsx)("li",{className:"flex items-center text-center border border-gray-100 rounded-full hover:bg-emerald-500  mr-2 transition ease-in-out duration-500",children:(0,s.jsx)(N,{url:"https://kachabazar-store-nine.vercel.app/product/".concat(X.query.slug),quote:"",children:(0,s.jsx)(k,{size:32,round:!0})})}),(0,s.jsx)("li",{className:"flex items-center text-center border border-gray-100 rounded-full hover:bg-emerald-500  mr-2 transition ease-in-out duration-500",children:(0,s.jsx)(S,{url:"https://kachabazar-store-nine.vercel.app/product/".concat(X.query.slug),quote:"",children:(0,s.jsx)(O.Z,{size:32,round:!0})})}),(0,s.jsx)("li",{className:"flex items-center text-center border border-gray-100 rounded-full hover:bg-emerald-500  mr-2 transition ease-in-out duration-500",children:(0,s.jsx)(C,{url:"https://kachabazar-store-nine.vercel.app/product/".concat(X.query.slug),quote:"",children:(0,s.jsx)(P.Z,{size:32,round:!0})})})]})]})]})]}),(0,s.jsx)("div",{className:"w-full xl:w-5/12 lg:w-6/12 md:w-5/12",children:(0,s.jsx)("div",{className:"mt-6 md:mt-0 lg:mt-0 bg-gray-50 border border-gray-100 p-4 lg:p-8 rounded-lg",children:(0,s.jsx)(slug_card_Card,{})})})]})})]})}),(null==U?void 0:U.length)>=2&&(0,s.jsxs)("div",{className:"pt-10 lg:pt-20 lg:pb-10",children:[(0,s.jsx)("h3",{className:"leading-7 text-lg lg:text-xl mb-3 font-semibold font-serif hover:text-gray-600",children:ek("common:relatedProducts")}),(0,s.jsx)("div",{className:"flex",children:(0,s.jsx)("div",{className:"w-full",children:(0,s.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3",children:null==U?void 0:U.slice(1,13).map((e,t)=>(0,s.jsx)(H.Z,{product:e,attributes:V},e._id))})})})]})]})})})})}}},function(e){e.O(0,[260,609,519,351,929,679,318,921,769,274,774,888,179],function(){return e(e.s=7607)}),_N_E=e.O()}]);