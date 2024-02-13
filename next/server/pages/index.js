"use strict";(()=>{var e={};e.id=405,e.ids=[405,660,888],e.modules={2453:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>p,default:()=>x,getServerSideProps:()=>h,getStaticPaths:()=>u,getStaticProps:()=>m,reportWebVitals:()=>g,routeModule:()=>y,unstable_getServerProps:()=>b,unstable_getServerSideProps:()=>v,unstable_getStaticParams:()=>j,unstable_getStaticPaths:()=>f,unstable_getStaticProps:()=>_});var i=r(7666),l=r(2323),a=r(431),o=r(908),n=r(3726),d=r(117),c=e([o,n,d]);[o,n,d]=c.then?(await c)():c;let x=(0,a.l)(d,"default"),m=(0,a.l)(d,"getStaticProps"),u=(0,a.l)(d,"getStaticPaths"),h=(0,a.l)(d,"getServerSideProps"),p=(0,a.l)(d,"config"),g=(0,a.l)(d,"reportWebVitals"),_=(0,a.l)(d,"unstable_getStaticProps"),f=(0,a.l)(d,"unstable_getStaticPaths"),j=(0,a.l)(d,"unstable_getStaticParams"),b=(0,a.l)(d,"unstable_getServerProps"),v=(0,a.l)(d,"unstable_getServerSideProps"),y=new i.PagesRouteModule({definition:{kind:l.x.PAGES,page:"/index",pathname:"/",bundlePath:"",filename:""},components:{App:n.default,Document:o.default},userland:d});s()}catch(e){s(e)}})},63:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var i=r(997),l=r(174),a=r.n(l);r(6689);var o=r(2068),n=r(4965),d=e([o,n]);[o,n]=d.then?(await d)():d;let __WEBPACK_DEFAULT_EXPORT__=()=>{let{storeCustomizationSetting:e}=(0,o.Z)(),{showingTranslateValue:t}=(0,n.Z)();return i.jsx(i.Fragment,{children:(0,i.jsxs)("div",{className:"flex justify-between items-center",children:[(0,i.jsxs)("div",{children:[(0,i.jsxs)("h1",{className:"font-serif text-xl",children:[i.jsx("span",{className:"text-emerald-600 font-bold",children:t(e?.home?.promotion_title)})," "]}),i.jsx("p",{className:"text-gray-500",children:t(e?.home?.promotion_description)})]}),i.jsx(a(),{href:`${e?.home?.promotion_button_link}`,className:"text-sm font-serif font-medium px-6 py-2 bg-emerald-500 text-center rounded-full text-white hover:bg-emerald-700",children:t(e?.home?.promotion_button_name)})]})})};s()}catch(e){s(e)}})},3703:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var i=r(997);r(6689);var l=r(174),a=r.n(l),o=r(8209),n=r.n(o),d=r(3015),c=r(3877);r(8722),r(2996),r(9176);var x=r(2068),m=r(4965),u=e([d,c,x,m]);[d,c,x,m]=u.then?(await u)():u;let __WEBPACK_DEFAULT_EXPORT__=()=>{let{storeCustomizationSetting:e}=(0,x.Z)(),{showingTranslateValue:t,showingUrl:r,showingImage:s}=(0,m.Z)(),l=[{id:1,title:t(e?.slider?.first_title),info:t(e?.slider?.first_description),buttonName:t(e?.slider?.first_button),url:r(e?.slider?.first_link),image:s(e?.slider?.first_img)||"/slider/slider-1.jpg"},{id:2,title:t(e?.slider?.second_title),info:t(e?.slider?.second_description),buttonName:t(e?.slider?.second_button),url:r(e?.slider?.second_link),image:s(e?.slider?.second_img)||"/slider/slider-2.jpg"},{id:3,title:t(e?.slider?.third_title),info:t(e?.slider?.third_description),buttonName:t(e?.slider?.third_button),url:r(e?.slider?.third_link),image:s(e?.slider?.third_img)||"/slider/slider-3.jpg"},{id:4,title:t(e?.slider?.four_title),info:t(e?.slider?.four_description),buttonName:t(e?.slider?.four_button),url:r(e?.slider?.four_link),image:s(e?.slider?.four_img)||"/slider/slider-1.jpg"},{id:5,title:t(e?.slider?.five_title),info:t(e?.slider?.five_description),buttonName:t(e?.slider?.five_button),url:r(e?.slider?.five_link),image:s(e?.slider?.five_img)||"/slider/slider-2.jpg"}];return i.jsx(i.Fragment,{children:i.jsx(d.Swiper,{spaceBetween:30,centeredSlides:!0,autoplay:{delay:2e3,disableOnInteraction:!1},loop:!0,pagination:(e?.slider?.bottom_dots||e?.slider?.both_slider)&&{clickable:!0},navigation:(e?.slider?.left_right_arrow||e?.slider?.both_slider)&&{clickable:!0},modules:[c.Autoplay,c.Pagination,c.Navigation],className:"mySwiper",children:l?.map((e,t)=>i.jsxs(d.SwiperSlide,{className:"h-full relative rounded-lg overflow-hidden",children:[i.jsx("div",{className:"text-sm text-gray-600 hover:text-emerald-dark",children:i.jsx(n(),{width:950,height:400,src:e.image,alt:e.title,className:"object-cover",priority:!0})}),i.jsx("div",{className:"absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full h-full place-items-start justify-center",children:i.jsxs("div",{className:"pl-4 pr-12 sm:pl-10 sm:pr-16 w-10/12 lg:w-8/12 xl:w-7/12",children:[i.jsx("h1",{className:"mb-2 font-serif text-xl sm:text-lg md:text-2xl line-clamp-1 md:line-clamp-none  lg:line-clamp-none  lg:text-3xl font-bold text-gray-800",children:e.title}),i.jsx("p",{className:"text-base leading-6 text-gray-600 font-sans line-clamp-1  md:line-clamp-none lg:line-clamp-none",children:e.info}),i.jsx(a(),{href:e.url,className:"hidden sm:inline-block lg:inline-block text-sm leading-6 font-serif font-medium mt-6 px-6 py-2 bg-emerald-500 text-center rounded-md text-white hover:bg-emerald-600",children:e.buttonName})]})})]},t+1))})})};s()}catch(e){s(e)}})},6915:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>h});var i=r(997),l=r(2145),a=r.n(l),o=r(6689),n=r(6467),d=r(9878),c=r(8476),x=r(2113),m=r(4930),u=e([m]);m=(u.then?(await u)():u)[0];let StickyCart=()=>{let{totalItems:e,cartTotal:t}=(0,d.useCart)(),{toggleCartDrawer:r}=(0,o.useContext)(c.l),{data:s}=(0,x.Z)(m.Z.getGlobalSetting),l=s?.default_currency||"$";return i.jsx("button",{"aria-label":"Cart",onClick:r,className:"absolute",children:(0,i.jsxs)("div",{className:"right-0 w-35 float-right fixed top-2/4 bottom-2/4 align-middle shadow-lg cursor-pointer z-30 hidden lg:block xl:block",children:[(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center bg-indigo-50 rounded-tl-lg p-2 text-gray-700",children:[i.jsx("span",{className:"text-2xl mb-1 text-emerald-600",children:i.jsx(n.a8s,{})}),(0,i.jsxs)("span",{className:"px-2 text-sm font-serif font-medium",children:[e," Items"]})]}),(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center bg-emerald-700 p-2 text-white text-base font-serif font-medium rounded-bl-lg mx-auto",children:[l,t.toFixed(2)]})]})})},h=a()(()=>Promise.resolve(StickyCart),{ssr:!1});s()}catch(e){s(e)}})},8100:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var i=r(997),l=r(8209),a=r.n(l),o=r(8793),n=r(6689),d=r(6467),c=r(2113),x=r(3491),m=r(2521),u=r(8476),h=r(4965),p=e([x,m,h]);[x,m,h]=p.then?(await p)():p;let __WEBPACK_DEFAULT_EXPORT__=()=>{let e=(0,o.useRouter)(),{isLoading:t,setIsLoading:r}=(0,n.useContext)(u.l),{showingTranslateValue:s}=(0,h.Z)(),{data:l,error:p,loading:g}=(0,c.Z)(x.Z.getShowingCategory),handleCategoryClick=(s,i)=>{let l=i.toLowerCase().replace(/[^A-Z0-9]+/gi,"-"),a=`/search?category=${l}&_id=${s}`;e.push(a),r(!t)};return i.jsx(i.Fragment,{children:g?i.jsx(m.Z,{count:10,height:20,error:p,loading:g}):i.jsx("ul",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6",children:l[0]?.children?.map((e,t)=>i.jsx("li",{className:"group",children:i.jsx("div",{className:"flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg",children:i.jsxs("div",{className:"flex items-center",children:[i.jsx("div",{children:e.icon?i.jsx(a(),{src:e?.icon,alt:"category",width:35,height:35}):i.jsx(a(),{src:"https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png",alt:"category",width:35,height:35})}),i.jsxs("div",{className:"pl-4",children:[i.jsx("h3",{onClick:()=>handleCategoryClick(e._id,s(e?.name)),className:"text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1  group-hover",children:s(e?.name)}),i.jsx("ul",{className:"pt-1 mt-1",children:e?.children?.slice(0,3).map(e=>i.jsx("li",{className:"pt-1",children:i.jsxs("a",{onClick:()=>handleCategoryClick(e._id,s(e?.name)),className:"flex items-center font-serif text-xs text-gray-400 cursor-pointer",children:[i.jsx("span",{className:"text-xs text-gray-400 ",children:i.jsx(d.onJ,{})}),s(e?.name)]})},e._id))})]})]})})},t+1))})})};s()}catch(e){s(e)}})},4192:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var i=r(997);r(6689);var l=r(8209),a=r.n(l),o=r(174),n=r.n(o),d=r(2068),c=r(2521),x=r(4965),m=e([d,c,x]);[d,c,x]=m.then?(await m)():m;let __WEBPACK_DEFAULT_EXPORT__=()=>{let{storeCustomizationSetting:e,error:t,loading:r}=(0,d.Z)(),{showingTranslateValue:s}=(0,x.Z)();return i.jsx(i.Fragment,{children:i.jsx("div",{className:"w-full bg-white shadow-sm lg:px-10 lg:py-5 p-6 rounded-lg",children:(0,i.jsxs)("div",{className:"flex justify-between items-center",children:[(0,i.jsxs)("div",{className:"lg:w-3/5",children:[i.jsx("span",{className:"text-base lg:text-lg",children:i.jsx(c.Z,{count:1,height:20,error:t,loading:r,data:e?.home?.quick_delivery_subtitle})}),i.jsx("h2",{className:"font-serif text-lg lg:text-2xl font-bold mb-1",children:i.jsx(c.Z,{count:1,height:30,error:t,loading:r,data:e?.home?.quick_delivery_title})}),i.jsx("p",{className:"text-sm font-sans leading-6",children:i.jsx(c.Z,{count:4,height:20,error:t,loading:r,data:e?.home?.quick_delivery_description})}),i.jsx(n(),{href:`${e?.home?.quick_delivery_link}`,className:"lg:w-1/3  text-xs font-serif font-medium inline-block mt-5 px-8 py-3 bg-emerald-500 text-center text-white rounded-full hover:text-white contact-btn",target:"_blank",children:s(e?.home?.quick_delivery_button)})]}),i.jsx("div",{className:"w-1/5 flex-grow hidden lg:flex md:flex md:justify-items-center lg:justify-end",children:i.jsx(a(),{width:373,height:250,alt:"Quick Delivery to Your Home",className:"block w-auto object-contain",src:e?.home?.quick_delivery_img||"/cta/delivery-boy.png"})})]})})})};s()}catch(e){s(e)}})},4474:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var i=r(997);r(6689);var l=r(5835),a=r(2068),o=r(4965),n=e([l,a,o]);[l,a,o]=n.then?(await n)():n;let __WEBPACK_DEFAULT_EXPORT__=()=>{let{storeCustomizationSetting:e}=(0,a.Z)(),{showingTranslateValue:t}=(0,o.Z)();return i.jsx("div",{className:"w-full group",children:(0,i.jsxs)("div",{className:"bg-gray-50 h-full border-2 border-orange-500 transition duration-150 ease-linear transform group-hover:border-emerald-500 rounded shadow",children:[i.jsx("div",{className:"bg-orange-100 text-gray-900 px-6 py-2 rounded-t border-b flex items-center justify-center",children:i.jsx("h3",{className:"text-base font-serif font-medium ",children:t(e?.home?.discount_title)})}),i.jsx("div",{className:"overflow-hidden",children:i.jsx(l.Z,{couponInHome:!0})})]})})};s()}catch(e){s(e)}})},117:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__,getServerSideProps:()=>getServerSideProps});var i=r(997),l=r(608),a=r(7462),o=r.n(a),n=r(8476),d=r(6689),c=r(8793);r(866);var x=r(8692),m=r(63),u=r(2068),h=r(4192),p=r(4474),g=r(6915),_=r(7193),f=r(2875),j=r(2379),b=r(3703),v=r(8100),y=r(7285),N=r(2521),w=e([x,m,u,h,p,g,f,j,b,v,y,N]);[x,m,u,h,p,g,f,j,b,v,y,N]=w.then?(await w)():w;let _getServerSideProps=async e=>{let{cookies:t}=e.req,{query:r,_id:s}=e.query,[i,l]=await Promise.all([f.Z.getShowingStoreProducts({category:s||"",title:r||""}),y.Z.getShowingAttributes()]);return{props:{popularProducts:i.popularProducts,discountProducts:i.discountedProducts,cookies:t,attributes:l}}},__WEBPACK_DEFAULT_EXPORT__=({popularProducts:e,discountProducts:t,attributes:r})=>{let s=(0,c.useRouter)(),{isLoading:l,setIsLoading:a}=(0,d.useContext)(n.l),{loading:o,error:f,storeCustomizationSetting:y}=(0,u.Z)();return(0,d.useEffect)(()=>{s.asPath,a(!1)},[s]),i.jsx(i.Fragment,{children:l?i.jsx(_.Z,{loading:l}):i.jsx(x.Z,{children:(0,i.jsxs)("div",{className:"min-h-screen",children:[i.jsx(g.Z,{}),i.jsx("div",{className:"bg-white",children:(0,i.jsxs)("div",{className:"mx-auto py-5 max-w-screen-2xl px-3 sm:px-10",children:[(0,i.jsxs)("div",{className:"flex w-full",children:[i.jsx("div",{className:"flex-shrink-0 xl:pr-6 lg:block w-full lg:w-3/5",children:i.jsx(b.Z,{})}),i.jsx("div",{className:"w-full hidden lg:flex",children:i.jsx(p.Z,{})})]}),y?.home?.promotion_banner_status&&i.jsx("div",{className:"bg-orange-100 px-10 py-6 rounded-lg mt-6",children:i.jsx(m.Z,{})})]})}),y?.home?.featured_status&&i.jsx("div",{className:"bg-gray-100 lg:py-16 py-10",children:(0,i.jsxs)("div",{className:"mx-auto max-w-screen-2xl px-3 sm:px-10",children:[i.jsx("div",{className:"mb-10 flex justify-center",children:(0,i.jsxs)("div",{className:"text-center w-full lg:w-2/5",children:[i.jsx("h2",{className:"text-xl lg:text-2xl mb-2 font-serif font-semibold",children:i.jsx(N.Z,{count:1,height:30,loading:o,data:y?.home?.feature_title})}),i.jsx("p",{className:"text-base font-sans text-gray-600 leading-6",children:i.jsx(N.Z,{count:4,height:10,error:f,loading:o,data:y?.home?.feature_description})})]})}),i.jsx(v.Z,{})]})}),y?.home?.popular_products_status&&(0,i.jsxs)("div",{className:"bg-gray-50 lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10",children:[i.jsx("div",{className:"mb-10 flex justify-center",children:(0,i.jsxs)("div",{className:"text-center w-full lg:w-2/5",children:[i.jsx("h2",{className:"text-xl lg:text-2xl mb-2 font-serif font-semibold",children:i.jsx(N.Z,{count:1,height:30,loading:o,data:y?.home?.popular_title})}),i.jsx("p",{className:"text-base font-sans text-gray-600 leading-6",children:i.jsx(N.Z,{count:5,height:10,error:f,loading:o,data:y?.home?.popular_description})})]})}),i.jsx("div",{className:"flex",children:i.jsx("div",{className:"w-full",children:o?i.jsx(N.Z,{count:20,height:20,error:f,loading:o}):i.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3",children:e?.slice(0,y?.home?.popular_product_limit).map(e=>i.jsx(j.Z,{product:e,attributes:r},e._id))})})})]}),y?.home?.delivery_status&&i.jsx("div",{className:"block mx-auto max-w-screen-2xl",children:i.jsx("div",{className:"mx-auto max-w-screen-2xl px-4 sm:px-10",children:i.jsx("div",{className:"lg:p-16 p-6 bg-emerald-500 shadow-sm border rounded-lg",children:i.jsx(h.Z,{})})})}),y?.home?.discount_product_status&&t?.length>0&&(0,i.jsxs)("div",{id:"discount",className:"bg-gray-50 lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10",children:[i.jsx("div",{className:"mb-10 flex justify-center",children:(0,i.jsxs)("div",{className:"text-center w-full lg:w-2/5",children:[i.jsx("h2",{className:"text-xl lg:text-2xl mb-2 font-serif font-semibold",children:i.jsx(N.Z,{count:1,height:30,loading:o,data:y?.home?.latest_discount_title})}),i.jsx("p",{className:"text-base font-sans text-gray-600 leading-6",children:i.jsx(N.Z,{count:5,height:20,loading:o,data:y?.home?.latest_discount_description})})]})}),i.jsx("div",{className:"flex",children:i.jsx("div",{className:"w-full",children:o?i.jsx(N.Z,{count:20,height:20,error:f,loading:o}):i.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3",children:t?.slice(0,y?.home?.latest_discount_product_limit).map(e=>i.jsx(j.Z,{product:e,attributes:r},e._id))})})})]})]})})})};async function getServerSideProps(e){let t=_getServerSideProps(e);return"function"==typeof t.then&&(t=await t),{...t,props:{...t.props||{},...await o()({...e,pathname:"/index",loaderName:"getServerSideProps",...l,loadLocaleFrom:(e,t)=>r(7655)(`./${e}/${t}`).then(e=>e.default)})}}}s()}catch(e){s(e)}})},8768:e=>{e.exports=require("@heroicons/react/outline")},6999:e=>{e.exports=require("@react-oauth/google")},5184:e=>{e.exports=require("@reduxjs/toolkit")},4515:e=>{e.exports=require("@stripe/react-stripe-js")},943:e=>{e.exports=require("@stripe/stripe-js")},1725:e=>{e.exports=require("@tawk.to/tawk-messenger-react")},2167:e=>{e.exports=require("axios")},1635:e=>{e.exports=require("dayjs")},6641:e=>{e.exports=require("next-seo")},5668:e=>{e.exports=require("next-translate/appWithI18n")},7462:e=>{e.exports=require("next-translate/loadNamespaces")},866:e=>{e.exports=require("next-translate/useTranslation")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},5307:e=>{e.exports=require("rc-drawer")},6689:e=>{e.exports=require("react")},2807:e=>{e.exports=require("react-copy-to-clipboard")},6405:e=>{e.exports=require("react-dom")},5131:e=>{e.exports=require("react-ga4")},6022:e=>{e.exports=require("react-redux")},6158:e=>{e.exports=require("react-share")},2633:e=>{e.exports=require("react-spinners/ScaleLoader")},1305:e=>{e.exports=require("react-timer-hook")},1187:e=>{e.exports=require("react-toastify")},9878:e=>{e.exports=require("react-use-cart")},997:e=>{e.exports=require("react/jsx-runtime")},4161:e=>{e.exports=require("redux-persist")},1127:e=>{e.exports=require("redux-persist/integration/react")},3094:e=>{e.exports=require("redux-persist/lib/storage/session")},2905:e=>{e.exports=import("html-react-parser")},9915:e=>{e.exports=import("js-cookie")},5641:e=>{e.exports=import("react-hook-form")},4275:e=>{e.exports=import("react-loading-skeleton")},3877:e=>{e.exports=import("swiper")},3015:e=>{e.exports=import("swiper/react")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[627,793,386,403,238,467,944,339,383,578,930,742,908,729,577,62,692,232,835],()=>__webpack_exec__(2453));module.exports=r})();