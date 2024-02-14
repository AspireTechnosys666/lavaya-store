exports.id=742,exports.ids=[742],exports.modules={7655:(e,a,t)=>{var n={"./de/common":[1545,545],"./de/common.json":[1545,545],"./en/common":[464,464],"./en/common.json":[464,464]};function webpackAsyncContext(e){if(!t.o(n,e))return Promise.resolve().then(()=>{var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a});var a=n[e],r=a[0];return t.e(a[1]).then(()=>t.t(r,19))}webpackAsyncContext.keys=()=>Object.keys(n),webpackAsyncContext.id=7655,e.exports=webpackAsyncContext},7513:(e,a,t)=>{"use strict";t.a(e,async(e,n)=>{try{t.d(a,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var r=t(997);t(6689);var i=t(6641),o=t(2113),l=t(4930),d=e([l]);l=(d.then?(await d)():d)[0];let __WEBPACK_DEFAULT_EXPORT__=()=>{let{data:e,loading:a,error:t}=(0,o.Z)(l.Z.getGlobalSetting);return r.jsx(i.DefaultSeo,{title:e?.meta_title||"Lavaya - Online Shopping Store",openGraph:{type:"website",locale:"en_IE",url:e?.meta_url||"https://lavaya.network",site_name:e?.meta_title||"Lavaya - Online Shopping Store"},twitter:{handle:"@handle",site:"@site",cardType:"summary_large_image"},additionalMetaTags:[{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"theme-color",content:"#ffffff"}],additionalLinkTags:[{rel:"apple-touch-icon",href:"/icon-192x192.png"},{rel:"manifest",href:"/manifest.json"}]})};n()}catch(e){n(e)}})},8476:(e,a,t)=>{"use strict";t.d(a,{H:()=>SidebarProvider,l:()=>i});var n=t(997),r=t(6689);let i=(0,r.createContext)(),SidebarProvider=({children:e})=>{let[a,t]=(0,r.useState)(!1),[o,l]=(0,r.useState)(!1),[d,s]=(0,r.useState)(!1),[c,m]=(0,r.useState)(1),[u,p]=(0,r.useState)(!1),toggleCartDrawer=()=>t(!a),closeCartDrawer=()=>t(!1),toggleCategoryDrawer=()=>l(!o),closeCategoryDrawer=()=>l(!1),toggleModal=()=>s(!d),closeModal=()=>s(!1),handleChangePage=e=>{m(e)},g=(0,r.useMemo)(()=>({cartDrawerOpen:a,toggleCartDrawer,closeCartDrawer,setCartDrawerOpen:t,categoryDrawerOpen:o,toggleCategoryDrawer,closeCategoryDrawer,isModalOpen:d,toggleModal,closeModal,currentPage:c,setCurrentPage:m,handleChangePage,isLoading:u,setIsLoading:p}),[a,o,d,c,u]);return n.jsx(i.Provider,{value:g,children:e})}},3687:(e,a,t)=>{"use strict";t.a(e,async(e,n)=>{try{t.d(a,{S:()=>d,d:()=>UserProvider});var r=t(997),i=t(9915),o=t(6689),l=e([i]);i=(l.then?(await l)():l)[0];let d=(0,o.createContext)(),s={userInfo:i.default.get("userInfo")?JSON.parse(i.default.get("userInfo")):null,shippingAddress:i.default.get("shippingAddress")?JSON.parse(i.default.get("shippingAddress")):{},couponInfo:i.default.get("couponInfo")?JSON.parse(i.default.get("couponInfo")):{}};function reducer(e,a){switch(a.type){case"USER_LOGIN":return{...e,userInfo:a.payload};case"USER_LOGOUT":return{...e,userInfo:null};case"SAVE_SHIPPING_ADDRESS":return{...e,shippingAddress:a.payload};case"SAVE_COUPON":return{...e,couponInfo:a.payload}}}let UserProvider=({children:e})=>{let[a,t]=(0,o.useReducer)(reducer,s);return r.jsx(d.Provider,{value:{state:a,dispatch:t},children:e})};n()}catch(e){n(e)}})},2113:(e,a,t)=>{"use strict";t.d(a,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var n=t(2167),r=t.n(n),i=t(6689);let __WEBPACK_DEFAULT_EXPORT__=e=>{let[a,t]=(0,i.useState)([]),[n,o]=(0,i.useState)(""),[l,d]=(0,i.useState)(""),[s,c]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{let a=!1,n=r().CancelToken.source();return(async()=>{try{let r=await e({cancelToken:n.token});a||(t(r),o(""),c(!1))}catch(e){d(e?.response?.status),a||(console.log(e.message),o(e.message),r().isCancel(e),o(e.message),c(!1),t({}))}})(),()=>{a=!0,n.cancel("Cancelled in cleanup")}},[]),(0,i.useEffect)(()=>{401===l&&(Cookies.remove("userInfo"),console.log("status 401",l),window.location.replace("http://3.27.207.150/"))},[l]),{data:a,error:n,loading:s}}},3726:(e,a,t)=>{"use strict";t.a(e,async(e,n)=>{try{t.r(a),t.d(a,{default:()=>j,getServerSideProps:()=>getServerSideProps});var r=t(997),i=t(608),o=t(5668),l=t.n(o);t(5003);var d=t(9878),s=t(4515),c=t(6999),m=t(1127),u=t(4161),p=t(6022),g=t(5131),y=t.n(g),f=t(6689),h=t(8793),S=t(1725),_=t.n(S),v=t(1891),D=t(5452),w=t(2113),C=t(3687),P=t(7513),E=t(8476),I=t(4930),x=t(3305),A=e([D,C,P,I]);[D,C,P,I]=A.then?(await A)():A;let O=(0,u.persistStore)(v.Z),k=(0,D.Z)(),getServerSideProps=async()=>{let e=await I.Z.getStoreSeoSetting();return{props:{storeSetting:e}}},j=l()(function({Component:e,pageProps:a}){let t=(0,h.useRouter)(),{data:n,loading:i,error:o}=(0,w.Z)(I.Z.getStoreSetting);return(0,f.useEffect)(()=>{if(!i&&!o&&n?.google_analytic_status){y().initialize(n?.google_analytic_key||""),(0,x.Xv)();let handleRouteChange=e=>{(0,x.Xv)(`/${t.pathname}`,"Kachabazar")};return t.events.on("routeChangeComplete",handleRouteChange),()=>{t.events.off("routeChangeComplete",handleRouteChange)}}},[n]),(0,r.jsxs)(r.Fragment,{children:[!i&&!o&&n?.tawk_chat_status&&r.jsx(_(),{propertyId:n?.tawk_chat_property_id||"",widgetId:n?.tawk_chat_widget_id||""}),r.jsx(c.GoogleOAuthProvider,{clientId:n?.google_client_id||"",children:r.jsx(C.d,{children:r.jsx(p.Provider,{store:v.Z,children:r.jsx(m.PersistGate,{loading:null,persistor:O,children:r.jsx(E.H,{children:r.jsx(s.Elements,{stripe:k,children:(0,r.jsxs)(d.CartProvider,{children:[r.jsx(P.Z,{}),r.jsx(e,{...a})]})})})})})})})]})},{...i,isLoader:!0,skipInitialProps:!0,loadLocaleFrom:(e,a)=>t(7655)(`./${e}/${a}`).then(e=>e.default)});n()}catch(e){n(e)}})},9274:(e,a,t)=>{"use strict";t.d(a,{XS:()=>i,ZP:()=>d});var n=t(5184);let r=(0,n.createSlice)({name:"setting",initialState:{settingItem:[]},reducers:{addSetting:(e,a)=>{let t=e.settingItem.find(e=>e.name===a.payload.name);return t?{...e,settingItem:e.settingItem.map(e=>(e.name,t.name,e))}:{...e,settingItem:[...e.settingItem,a.payload]}},removeSetting:(e,a)=>({...e,settingItem:e.settingItem.filter(e=>e.name!==a.payload)}),clearSetting:e=>({...e,settingItem:[]})}}),{addSetting:i,removeSetting:o,clearSetting:l}=r.actions,d=r.reducer},1891:(e,a,t)=>{"use strict";t.d(a,{Z:()=>w});var n=t(3094),r=t.n(n),i=t(5184),o=t(4161);let uniqueArrayOfObjects=e=>{let a=new Map;return e?.forEach(e=>a.set(e?._id,e)),Array.from(a?.values())},l=(0,i.createSlice)({name:"data",initialState:{dynamicData:[]},reducers:{addData:(e,a)=>{let t=e.dynamicData.find(e=>e.name===a.payload.name);return t?{...e,dynamicData:e.dynamicData.map(e=>(e.name,t.name,e))}:{...e,dynamicData:[...e.dynamicData,a.payload]}},addSingleData:(e,a)=>{let t=e.dynamicData.find(e=>e.name===a.payload.name),n=e.dynamicData.filter(e=>e.name!==a.payload.name),r=uniqueArrayOfObjects([...t?.data,a.payload.data]),i=[...n,{name:t.name,data:r}];return{...e,dynamicData:i}},updateSingleData:(e,a)=>{let t=e.dynamicData.find(e=>e.name===a.payload.name),n=e.dynamicData.filter(e=>e.name!==a.payload.name),r=t?.data?.filter(e=>e?._id!==a?.payload?.data?._id),i=[...r,a?.payload?.data],o=[...n,{name:t.name,data:i}];return{...e,dynamicData:o}},updateMultipleData:(e,a)=>{let t=e.dynamicData.find(e=>e.name===a.payload.name),n=e.dynamicData.filter(e=>e.name!==a.payload.name),r=t?.data?.filter(e=>!a?.payload?.ids?.includes(e?._id)),i=[...r,...a?.payload?.data],o=[...n,{name:t.name,data:i}];return{...e,dynamicData:o}},removeData:(e,a)=>({...e,dynamicData:e.dynamicData.filter(e=>e.name!==a.payload)}),removeSingleData:(e,a)=>{let t=e.dynamicData.find(e=>e.name===a.payload.name),n=e.dynamicData?.filter(e=>e.name!==a.payload.name),r=t?.data?.filter(e=>e?._id!==a?.payload.id),i=[...n,{name:t.name,data:r}];return{...e,dynamicData:i}},removeMultipleData:(e,a)=>{let t=e.dynamicData.find(e=>e.name===a.payload.name),n=e.dynamicData?.filter(e=>e.name!==a.payload.name),r=t?.data?.filter(e=>!a?.payload?.ids?.includes(e?._id)),i=[...n,{name:t.name,data:r}];return{...e,dynamicData:i}},clearData:e=>({...e,dynamicData:[]})}}),{addData:d,clearData:s,removeData:c,addSingleData:m,updateSingleData:u,updateMultipleData:p,removeSingleData:g,removeMultipleData:y}=l.actions,f=l.reducer;var h=t(9274);let S={key:"root",version:1,storage:r(),blacklist:["/"]},_=(0,i.combineReducers)({setting:h.ZP,data:f}),v=(0,o.persistReducer)(S,_),D=(0,i.configureStore)({reducer:v,middleware:e=>e({serializableCheck:{ignoredActions:[o.FLUSH,o.REHYDRATE,o.PAUSE,o.PERSIST,o.PURGE,o.REGISTER]}})}),w=D},3305:(e,a,t)=>{"use strict";t.d(a,{KX:()=>handleLogEvent,Xv:()=>handlePageView});var n=t(5131),r=t.n(n);let handlePageView=(e,a)=>{r().send({hitType:"pageview",page:e,title:a})},handleLogEvent=(e="",a="",t="")=>{console.log("category",e,"action",a),e&&a&&r().event({category:e,action:a,label:t})}},5452:(e,a,t)=>{"use strict";t.a(e,async(e,n)=>{try{let l;t.d(a,{Z:()=>d});var r=t(4930),i=t(943),o=e([r]);r=(o.then?(await o)():o)[0];let getStripe=async()=>{let e=await r.Z.getStoreSetting();return l||(l=(0,i.loadStripe)(e?.stripe_key||null)),l},d=getStripe;n()}catch(e){n(e)}})},5003:()=>{},608:e=>{"use strict";e.exports=JSON.parse('{"locales":["en","de"],"defaultLocale":"en","pages":{"*":["common"]}}')}};