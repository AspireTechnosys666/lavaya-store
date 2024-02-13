"use strict";(()=>{var e={};e.id=757,e.ids=[757,660,888],e.modules={3185:(e,r,s)=>{s.a(e,async(e,t)=>{try{s.r(r),s.d(r,{config:()=>g,default:()=>u,getServerSideProps:()=>x,getStaticPaths:()=>m,getStaticProps:()=>c,reportWebVitals:()=>h,routeModule:()=>_,unstable_getServerProps:()=>P,unstable_getServerSideProps:()=>S,unstable_getStaticParams:()=>b,unstable_getStaticPaths:()=>f,unstable_getStaticProps:()=>w});var a=s(7666),o=s(2323),i=s(431),n=s(908),d=s(3726),l=s(1959),p=e([n,d,l]);[n,d,l]=p.then?(await p)():p;let u=(0,i.l)(l,"default"),c=(0,i.l)(l,"getStaticProps"),m=(0,i.l)(l,"getStaticPaths"),x=(0,i.l)(l,"getServerSideProps"),g=(0,i.l)(l,"config"),h=(0,i.l)(l,"reportWebVitals"),w=(0,i.l)(l,"unstable_getStaticProps"),f=(0,i.l)(l,"unstable_getStaticPaths"),b=(0,i.l)(l,"unstable_getStaticParams"),P=(0,i.l)(l,"unstable_getServerProps"),S=(0,i.l)(l,"unstable_getServerSideProps"),_=new a.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/user/forget-password/[token]",pathname:"/user/forget-password/[token]",bundlePath:"",filename:""},components:{App:d.default,Document:n.default},userland:l});t()}catch(e){t(e)}})},1959:(e,r,s)=>{s.a(e,async(e,t)=>{try{s.r(r),s.d(r,{default:()=>__WEBPACK_DEFAULT_EXPORT__,getServerSideProps:()=>getServerSideProps});var a=s(997),o=s(608),i=s(7462),n=s.n(i),d=s(8793),l=s(6689),p=s(9915),u=s(5641),c=s(697),m=s(1187),x=s(9361),g=s(3091),h=s(2591),w=s(3687),f=s(7718),b=e([p,u,h,w]);[p,u,h,w]=b.then?(await b)():b;let __WEBPACK_DEFAULT_EXPORT__=()=>{let[e,r]=(0,l.useState)(!1),[s,t]=(0,l.useState)(!1),{dispatch:o}=(0,l.useContext)(w.S),i=(0,d.useRouter)(),n=(0,l.useRef)(""),{register:b,handleSubmit:P,watch:S,setValue:_,formState:{errors:y}}=(0,u.useForm)();return n.current=S("newPassword"),(0,a.jsxs)(a.Fragment,{children:[a.jsx(m.ToastContainer,{}),a.jsx("div",{className:"h-screen flex items-center justify-center bg-gray-100",children:(0,a.jsxs)("div",{className:"bg-white rounded-lg shadow max-w-md w-full space-y-8 py-12 px-4 sm:px-6 lg:px-8",children:[(0,a.jsxs)("div",{className:"text-center mb-6",children:[a.jsx("h2",{className:"text-2xl font-bold font-serif",children:s?"Login":"Forget Password"}),a.jsx("p",{className:"text-sm md:text-base text-gray-500 mt-2 mb-8 sm:mb-10",children:s?"Login with your email and new password":"Reset Your Password"})]}),a.jsx("form",{onSubmit:P(({registerEmail:e,password:s,newPassword:a})=>{r(!0),a&&h.Z.resetPassword({newPassword:a,token:i.query?.token}).then(e=>{r(!1),t(!0),(0,f.t5)(e.message),_("newPassword")}).catch(e=>{r(!1),(0,f.cB)(e?e.response.data.message:e.message)}),e&&s&&h.Z.customerLogin({registerEmail:e,password:s}).then(e=>{r(!1),i.push("/"),(0,f.t5)("Login Success!"),o({type:"USER_LOGIN",payload:e}),p.default.set("userInfo",JSON.stringify(e))}).catch(e=>{r(!1),(0,f.cB)(e?e.response.data.message:e.message)})}),className:"flex flex-col justify-center",children:(0,a.jsxs)("div",{className:"grid grid-cols-1 gap-5",children:[s&&(0,a.jsxs)(a.Fragment,{children:[" ",(0,a.jsxs)("div",{className:"form-group",children:[a.jsx(g.Z,{register:b,label:"Email",name:"registerEmail",type:"email",placeholder:"Email",Icon:c.Imn}),a.jsx(x.Z,{errorName:y.registerEmail})]}),(0,a.jsxs)("div",{className:"form-group",children:[a.jsx(g.Z,{register:b,label:"Password",name:"password",type:"password",autocomplete:"new-password",placeholder:"Password",Icon:c.UIZ}),a.jsx(x.Z,{errorName:y.password})]})]}),!s&&(0,a.jsxs)(a.Fragment,{children:[" ",(0,a.jsxs)("div",{className:"form-group",children:[a.jsx("input",{name:"newPassword",type:"password",placeholder:"New password",...b("newPassword",{required:"You must specify a password",minLength:{value:8,message:"Password must have at least 8 characters"}}),className:"py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-gray-100 border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"}),a.jsx(x.Z,{errorName:y.newPassword})]}),(0,a.jsxs)("div",{className:"form-group",children:[a.jsx("input",{name:"confirm_password",type:"password",placeholder:"Confirm password",...b("confirm_password",{validate:e=>e===n.current||"The passwords do not match"}),className:"py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-gray-100 border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"}),a.jsx(x.Z,{errorName:y.confirm_password})]})]}),a.jsx("button",{disabled:e,type:"submit",className:"w-full text-center py-3 rounded bg-emerald-500 font-medium text-sm text-white hover:bg-emerald-600 transition-all focus:outline-none my-1",children:s?"Login":"Reset Password"})]})})]})})]})};async function getServerSideProps(e){return{props:{...await n()({...e,pathname:"/user/forget-password/[token]",loaderName:"getServerSideProps",...o,loadLocaleFrom:(e,r)=>s(7655)(`./${e}/${r}`).then(e=>e.default)})}}}t()}catch(e){t(e)}})},6999:e=>{e.exports=require("@react-oauth/google")},5184:e=>{e.exports=require("@reduxjs/toolkit")},4515:e=>{e.exports=require("@stripe/react-stripe-js")},943:e=>{e.exports=require("@stripe/stripe-js")},1725:e=>{e.exports=require("@tawk.to/tawk-messenger-react")},2167:e=>{e.exports=require("axios")},6641:e=>{e.exports=require("next-seo")},5668:e=>{e.exports=require("next-translate/appWithI18n")},7462:e=>{e.exports=require("next-translate/loadNamespaces")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},5131:e=>{e.exports=require("react-ga4")},6022:e=>{e.exports=require("react-redux")},1187:e=>{e.exports=require("react-toastify")},9878:e=>{e.exports=require("react-use-cart")},997:e=>{e.exports=require("react/jsx-runtime")},4161:e=>{e.exports=require("redux-persist")},1127:e=>{e.exports=require("redux-persist/integration/react")},3094:e=>{e.exports=require("redux-persist/lib/storage/session")},9915:e=>{e.exports=import("js-cookie")},5641:e=>{e.exports=import("react-hook-form")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var r=require("../../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),s=r.X(0,[627,793,386,403,238,339,930,742,908,729,62],()=>__webpack_exec__(3185));module.exports=s})();