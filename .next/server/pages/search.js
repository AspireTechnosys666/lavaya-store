"use strict";(()=>{var e={};e.id=603,e.ids=[603,660,888],e.modules={6645:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>g,default:()=>x,getServerSideProps:()=>m,getStaticPaths:()=>u,getStaticProps:()=>p,reportWebVitals:()=>h,routeModule:()=>b,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>_,unstable_getStaticParams:()=>v,unstable_getStaticPaths:()=>w,unstable_getStaticProps:()=>f});var a=r(7666),i=r(2323),l=r(431),o=r(908),n=r(3726),c=r(992),d=e([o,n,c]);[o,n,c]=d.then?(await d)():d;let x=(0,l.l)(c,"default"),p=(0,l.l)(c,"getStaticProps"),u=(0,l.l)(c,"getStaticPaths"),m=(0,l.l)(c,"getServerSideProps"),g=(0,l.l)(c,"config"),h=(0,l.l)(c,"reportWebVitals"),f=(0,l.l)(c,"unstable_getStaticProps"),w=(0,l.l)(c,"unstable_getStaticPaths"),v=(0,l.l)(c,"unstable_getStaticParams"),j=(0,l.l)(c,"unstable_getServerProps"),_=(0,l.l)(c,"unstable_getServerSideProps"),b=new a.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/search",pathname:"/search",bundlePath:"",filename:""},components:{App:n.default,Document:o.default},userland:c});s()}catch(e){s(e)}})},9543:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>w});var a=r(997),i=r(8209),l=r.n(i),o=r(8793),n=r(6689),c=r.n(n),d=r(6467),x=r(3877);r(8722),r(9176),r(2996);var p=r(3015),u=r(2113),m=r(8476),g=r(3491),h=r(4965),f=e([x,p,g,h]);[x,p,g,h]=f.then?(await f)():f;let w=c().memo(()=>{let e=(0,o.useRouter)(),t=(0,n.useRef)(null),r=(0,n.useRef)(null),{showingTranslateValue:s}=(0,h.Z)(),{isLoading:i,setIsLoading:c}=(0,n.useContext)(m.l),{data:f,error:w}=(0,u.Z)(()=>g.Z.getShowingCategory()),handleCategoryClick=(t,r)=>{let a=s(r)?.toLowerCase().replace(/[^A-Z0-9]+/gi,"-");e.push(`/search?category=${a}&_id=${t}`),c(!i)};return a.jsx(a.Fragment,{children:(0,a.jsxs)(p.Swiper,{onInit:e=>{e.params.navigation.prevEl=t.current,e.params.navigation.nextEl=r.current,e.navigation.init(),e.navigation.update()},spaceBetween:8,navigation:!0,allowTouchMove:!1,loop:!0,breakpoints:{375:{width:375,slidesPerView:2},414:{width:414,slidesPerView:3},660:{width:660,slidesPerView:4},768:{width:768,slidesPerView:6},991:{width:991,slidesPerView:8},1140:{width:1140,slidesPerView:9},1680:{width:1680,slidesPerView:10},1920:{width:1920,slidesPerView:10}},modules:[x.Navigation],className:"mySwiper category-slider my-10",children:[w?a.jsx("p",{className:"flex justify-center align-middle items-center m-auto text-xl text-red-500",children:(0,a.jsxs)("span",{children:[" ",w]})}):a.jsx("div",{children:f[0]?.children?.map((e,t)=>a.jsx(p.SwiperSlide,{className:"group",children:a.jsxs("div",{onClick:()=>handleCategoryClick(e?._id,e.name),className:"text-center cursor-pointer p-3 bg-white rounded-lg",children:[a.jsx("div",{className:"bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md",children:e?.icon?a.jsx(l(),{src:e?.icon,alt:"category",width:"35",height:"35"}):a.jsx(l(),{src:"https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png",alt:"category",width:"35",height:"35"})}),a.jsx("h3",{className:"text-xs text-gray-600 mt-2 font-serif group-hover:text-[#e0015e]",children:s(e?.name)})]})},t+1))}),a.jsx("button",{ref:t,className:"prev",children:a.jsx(d.$Ku,{})}),a.jsx("button",{ref:r,className:"next",children:a.jsx(d.mzm,{})})]})})});s()}catch(e){s(e)}})},3189:(e,t,r)=>{r.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var s=r(997);r(6689);var a=r(174),i=r.n(a),l=r(8209),o=r.n(l),n=r(5575);let __WEBPACK_DEFAULT_EXPORT__=()=>s.jsx(s.Fragment,{children:n.sW.map(e=>s.jsx("div",{className:"mx-auto w-full relative rounded-lg overflow-hidden transition ease-out duration-400 delay-150 transform hover:shadow-xl",children:(0,s.jsxs)(i(),{href:e.url,className:"block",children:[s.jsx(o(),{width:550,height:234,src:e.image,alt:e.title,priority:!0,className:"object-cover"}),s.jsx("div",{className:"absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full text-center justify-center",children:(0,s.jsxs)("div",{className:"pt-4",children:[(0,s.jsxs)("h2",{className:"font-serif text-base sm:text-lg md:text-lg lg:text-lg font-semibold text-gray-100",children:[e.title," ",s.jsx("br",{}),s.jsx("span",{className:"text-lg sm:text-2xl md:text-2xl lg:text-2xl font-bold text-white",children:e.subTitle})]}),s.jsx("p",{className:"text-sm font-sans text-gray-50",children:"Weekend discount offer"}),s.jsx("button",{className:"hidden sm:block lg:block text-xs mx-auto leading-6 font-serif font-medium mt-4 px-4 py-1 bg-[#e0015e] text-center rounded-full text-white hover:bg-[#1ab8d9]",children:"Shop Now"})]})})]})},e.id))})},8573:(e,t,r)=>{r.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var s=r(8793),a=r(6689);let __WEBPACK_DEFAULT_EXPORT__=e=>{let[t,r]=(0,a.useState)([]),[i,l]=(0,a.useState)([]),[o,n]=(0,a.useState)([]),[c,d]=(0,a.useState)(""),x=(0,s.useRouter)(),p=(0,a.useMemo)(()=>{let t=e;if("/user/dashboard"===x.pathname){let e=t?.filter(e=>"Pending"===e.status);r(e);let s=t?.filter(e=>"Processing"===e.status);l(s);let a=t?.filter(e=>"Delivered"===e.status);n(a)}return"Low"===c&&(t=t?.sort((e,t)=>e.prices.price<t.prices.price&&-1)),"High"===c&&(t=t?.sort((e,t)=>e.prices.price>t.prices.price&&-1)),t},[c,e]);return{productData:p,pending:t,processing:i,delivered:o,setSortedField:d}}},992:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__,getServerSideProps:()=>getServerSideProps});var a=r(997),i=r(608),l=r(7462),o=r.n(l),n=r(6689),c=r(8209),d=r.n(c),x=r(866),p=r.n(x),u=r(8692),m=r(8573),g=r(3189),h=r(2875),f=r(2379),w=r(9543),v=r(8476),j=r(7193),_=r(7285),b=e([u,h,f,w,_]);[u,h,f,w,_]=b.then?(await b)():b;let __WEBPACK_DEFAULT_EXPORT__=({products:e,attributes:t})=>{let{t:r}=p()(),{isLoading:s,setIsLoading:i}=(0,n.useContext)(v.l),[l,o]=(0,n.useState)(18);(0,n.useEffect)(()=>{i(!1)},[e]);let{setSortedField:c,productData:x}=(0,m.Z)(e);return a.jsx(u.Z,{title:"Search",description:"This is search page",children:a.jsx("div",{className:"mx-auto max-w-screen-2xl px-3 sm:px-10",children:a.jsx("div",{className:"flex py-10 lg:py-12",children:a.jsx("div",{className:"flex w-full",children:(0,a.jsxs)("div",{className:"w-full",children:[a.jsx("div",{className:"w-full grid grid-col gap-4 grid-cols-1 2xl:gap-6 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2",children:a.jsx(g.Z,{})}),a.jsx("div",{className:"relative",children:a.jsx(w.Z,{})}),x?.length===0?(0,a.jsxs)("div",{className:"text-center align-middle mx-auto p-5 my-5",children:[a.jsx(d(),{className:"my-4",src:"/no-result.svg",alt:"no-result",width:400,height:380}),(0,a.jsxs)("h2",{className:"text-lg md:text-xl lg:text-2xl xl:text-2xl text-center mt-2 font-medium font-serif text-gray-600",children:[r("common:sorryText")," \uD83D\uDE1E"]})]}):(0,a.jsxs)("div",{className:"flex justify-between my-3 bg-orange-100 border border-gray-100 rounded p-3",children:[(0,a.jsxs)("h6",{className:"text-sm font-serif",children:[r("common:totalI")," ",a.jsx("span",{className:"font-bold",children:x?.length})," ",r("common:itemsFound")]}),a.jsx("span",{className:"text-sm font-serif",children:(0,a.jsxs)("select",{onChange:e=>c(e.target.value),className:"py-0 text-sm font-serif font-medium block w-full rounded border-0 bg-white pr-10 cursor-pointer focus:ring-0",children:[a.jsx("option",{className:"px-3",value:"All",defaultValue:!0,hidden:!0,children:r("common:sortByPrice")}),a.jsx("option",{className:"px-3",value:"Low",children:r("common:lowToHigh")}),a.jsx("option",{className:"px-3",value:"High",children:r("common:highToLow")})]})})]}),s?a.jsx(j.Z,{loading:s}):(0,a.jsxs)(a.Fragment,{children:[a.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3",children:x?.slice(0,l).map((e,r)=>a.jsx(f.Z,{product:e,attributes:t},r+1))}),x?.length>l&&a.jsx("button",{onClick:()=>o(e=>e+10),className:"w-auto mx-auto md:text-sm leading-5 flex items-center transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md focus-visible:outline-none focus:outline-none bg-indigo-100 text-gray-700 px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-[#e0015e] h-12 mt-6 text-sm lg:text-sm",children:r("common:loadMoreBtn")})]})]})})})})})},_getServerSideProps=async e=>{let{query:t,_id:r}=e.query,[s,a]=await Promise.all([h.Z.getShowingStoreProducts({category:r||"",title:t?encodeURIComponent(t):""}),_.Z.getShowingAttributes({})]);return{props:{products:s?.products,attributes:a}}};async function getServerSideProps(e){let t=_getServerSideProps(e);return"function"==typeof t.then&&(t=await t),{...t,props:{...t.props||{},...await o()({...e,pathname:"/search",loaderName:"getServerSideProps",...i,loadLocaleFrom:(e,t)=>r(7655)(`./${e}/${t}`).then(e=>e.default)})}}}s()}catch(e){s(e)}})},8768:e=>{e.exports=require("@heroicons/react/outline")},6999:e=>{e.exports=require("@react-oauth/google")},5184:e=>{e.exports=require("@reduxjs/toolkit")},4515:e=>{e.exports=require("@stripe/react-stripe-js")},943:e=>{e.exports=require("@stripe/stripe-js")},1725:e=>{e.exports=require("@tawk.to/tawk-messenger-react")},2167:e=>{e.exports=require("axios")},1635:e=>{e.exports=require("dayjs")},6641:e=>{e.exports=require("next-seo")},5668:e=>{e.exports=require("next-translate/appWithI18n")},7462:e=>{e.exports=require("next-translate/loadNamespaces")},866:e=>{e.exports=require("next-translate/useTranslation")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},5307:e=>{e.exports=require("rc-drawer")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},5131:e=>{e.exports=require("react-ga4")},6022:e=>{e.exports=require("react-redux")},6158:e=>{e.exports=require("react-share")},2633:e=>{e.exports=require("react-spinners/ScaleLoader")},1187:e=>{e.exports=require("react-toastify")},9878:e=>{e.exports=require("react-use-cart")},997:e=>{e.exports=require("react/jsx-runtime")},4161:e=>{e.exports=require("redux-persist")},1127:e=>{e.exports=require("redux-persist/integration/react")},3094:e=>{e.exports=require("redux-persist/lib/storage/session")},2905:e=>{e.exports=import("html-react-parser")},9915:e=>{e.exports=import("js-cookie")},5641:e=>{e.exports=import("react-hook-form")},4275:e=>{e.exports=import("react-loading-skeleton")},3877:e=>{e.exports=import("swiper")},3015:e=>{e.exports=import("swiper/react")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[627,793,386,403,238,467,944,339,383,578,930,742,908,729,577,62,692,232],()=>__webpack_exec__(6645));module.exports=r})();