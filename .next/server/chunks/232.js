exports.id=232,exports.ids=[232],exports.modules={3954:(e,t,s)=>{"use strict";s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var r=s(997),i=s(4965),n=e([i]);i=(n.then?(await n)():n)[0];let __WEBPACK_DEFAULT_EXPORT__=({discount:e,product:t,slug:s,modal:a})=>{let{getNumber:n}=(0,i.Z)(),l=n(t?.isCombination?t?.variants[0]?.price:t?.prices?.price),c=n(t?.isCombination?t?.variants[0]?.originalPrice:t?.prices?.originalPrice),o=n((c-l)/c*100);return(0,r.jsxs)(r.Fragment,{children:[e>1&&(0,r.jsxs)("span",{className:a?"absolute text-dark text-sm bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 left-4 top-4":s?"text-dark text-sm bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 left-0 top-4":"absolute text-dark text-xs bg-orange-500 text-white py-1 px-2 rounded font-medium z-10",children:[e,"% Off"]}),void 0===e&&o>1&&(0,r.jsxs)("span",{className:a?"absolute text-dark text-sm bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 left-4 top-4":s?"text-dark text-sm bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 left-0 top-4":"absolute text-dark text-xs bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-0 top-0",children:[o," % Off"]})]})};a()}catch(e){a(e)}})},6257:(e,t,s)=>{"use strict";s.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var a=s(997);let{default:r}=s(8209),{useEffect:i,useState:n}=s(6689),l="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png",__WEBPACK_DEFAULT_EXPORT__=({fallback:e=l,alt:t,src:s,...c})=>{let[o,d]=n(null);return i(()=>{d(null)},[s]),a.jsx(r,{alt:t,onError:d,src:o?l:s,...c,fill:!0,style:{objectFit:"contain"},sizes:"100%",className:"object-contain transition duration-150 ease-linear transform group-hover:scale-105 p-2"})}},4319:(e,t,s)=>{"use strict";s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var r=s(997),i=s(4965),n=e([i]);i=(n.then?(await n)():n)[0];let __WEBPACK_DEFAULT_EXPORT__=({product:e,price:t,card:s,currency:a,originalPrice:n})=>{let{getNumberTwo:l}=(0,i.Z)();return r.jsx("div",{className:"font-serif product-price font-bold",children:e?.isCombination?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("span",{className:s?"inline-block text-lg font-semibold text-gray-800":"inline-block text-2xl",children:[a,l(t)]}),n>t?r.jsx(r.Fragment,{children:(0,r.jsxs)("del",{className:s?"sm:text-sm font-normal text-base text-gray-400 ml-1":"text-lg font-normal text-gray-400 ml-1",children:[a,l(n)]})}):null]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("span",{className:s?"inline-block text-lg font-semibold text-gray-800":"inline-block text-2xl",children:[a,l(e?.prices?.price)]}),n>t?r.jsx(r.Fragment,{children:(0,r.jsxs)("del",{className:s?"sm:text-sm font-normal text-base text-gray-400 ml-1":"text-lg font-normal text-gray-400 ml-1",children:[a,l(n)]})}):null]})})};a()}catch(e){a(e)}})},6160:(e,t,s)=>{"use strict";s.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var a=s(997),r=s(866),i=s.n(r);let __WEBPACK_DEFAULT_EXPORT__=({stock:e,card:t})=>{let{t:s}=i()();return a.jsx(a.Fragment,{children:e<=0?a.jsx("span",{className:"bg-red-100 absolute z-10 text-red-700 rounded-full inline-flex items-center justify-center px-2 py-0 text-xs font-medium font-serif",children:s("common:stockOut")}):a.jsx(a.Fragment,{children:(0,a.jsxs)("span",{className:`${t?"bg-gray-100 absolute z-10 text-[#e0015e] rounded-full text-xs px-2 py-0 font-medium":"bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center px-2 py-0 text-xs font-semibold font-serif"}`,children:[s("common:stock")," :",(0,a.jsxs)("span",{className:"text-orange-700 pl-1 font-bold",children:[e," "]})]})})})}},6980:(e,t,s)=>{"use strict";s.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var a=s(997);s(6689);let __WEBPACK_DEFAULT_EXPORT__=({product:e})=>a.jsx(a.Fragment,{children:0!==e.tag.length&&a.jsx("div",{className:"flex flex-row",children:JSON.parse(e?.tag).map((e,t)=>a.jsx("span",{className:"bg-gray-50 mr-2 border-0 text-gray-600 rounded-full inline-flex items-center justify-center px-3 py-1 text-xs font-semibold font-serif mt-2",children:e},t+1))})})},6129:(e,t,s)=>{"use strict";s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var r=s(997),i=s(866),n=s.n(i),l=s(8209),c=s.n(l),o=s(174),d=s.n(o),x=s(8793),m=s(6689),u=s(697),p=s(4319),h=s(6160),f=s(6980),g=s(7718),b=s(4509),j=s(5908),y=s(3954),v=s(7049),_=s(8476),w=s(4965),N=s(3305),k=e([p,y,v,w]);[p,y,v,w]=k.then?(await k)():k;let __WEBPACK_DEFAULT_EXPORT__=({modalOpen:e,setModalOpen:t,product:s,attributes:a,currency:i})=>{let l=(0,x.useRouter)(),{setIsLoading:o,isLoading:k}=(0,m.useContext)(_.l),{t:P}=n()("ns1"),{handleAddItem:C,setItem:E,item:A}=(0,b.Z)(),{lang:Z,showingTranslateValue:O,getNumber:T,getNumberTwo:F}=(0,w.Z)(),[B,S]=(0,m.useState)(""),[$,D]=(0,m.useState)(0),[K,L]=(0,m.useState)(""),[X,R]=(0,m.useState)(0),[U,W]=(0,m.useState)(0),[z,I]=(0,m.useState)(0),[M,V]=(0,m.useState)({}),[q,H]=(0,m.useState)({}),[J,G]=(0,m.useState)([]),[Q,Y]=(0,m.useState)([]);(0,m.useEffect)(()=>{if(B){let e=s?.variants?.filter(e=>Object.keys(q).every(t=>q[t]===e[t])),t=e?.map(({originalPrice:e,price:t,discount:s,quantity:a,barcode:r,sku:i,productId:n,image:l,...c})=>({...c})),a=Object.keys(Object.assign({},...t)),r=a?.reduce((e,t)=>({...e,[t]:M[t]}),{}),i=Object.entries(r).reduce((e,[t,s])=>(s&&(e[t]=s),e),{}),n=e?.find(e=>Object.keys(i).every(t=>i[t]===e[t]));if(e.length<=0||void 0===n)return W(0);Y(e),V(n),H(n),L(n?.image),W(n?.quantity);let l=T(n?.price),c=T(n?.originalPrice),o=T((c-l)/c*100);I(T(o)),D(l),R(c)}else if(s?.variants?.length>0){let e=s?.variants?.filter(e=>Object.keys(q).every(t=>q[t]===e[t]));Y(e),W(s.variants[0]?.quantity),V(s.variants[0]),H(s.variants[0]),L(s.variants[0]?.image);let t=T(s.variants[0]?.price),a=T(s.variants[0]?.originalPrice),r=T((a-t)/a*100);I(T(r)),D(t),R(a)}else{W(s?.stock),L(s?.image[0]);let e=T(s?.prices?.price),t=T(s?.prices?.originalPrice),a=T((t-e)/t*100);I(T(a)),D(e),R(t)}},[s?.prices?.discount,s?.prices?.originalPrice,s?.prices?.price,s?.stock,s.variants,q,M,B]),(0,m.useEffect)(()=>{let e=Object.keys(Object.assign({},...s?.variants)),t=a?.filter(t=>e.includes(t?._id));G(t?.sort())},[Q,a]);let handleAddToCart=e=>{if(1===e.variants.length&&e.variants[0].quantity<1||U<=0)return(0,g.cB)("Insufficient stock");if(!s?.variants.map(e=>Object.entries(e).sort().toString()===Object.entries(M).sort().toString()))return(0,g.cB)("Please select all variant first!");{let{variants:t,categories:a,description:r,...i}=s,n={...i,id:`${e?.variants.length<=0?e._id:e._id+"-"+J?.map(e=>M[e._id]).join("-")}`,title:`${e?.variants.length<=0?O(e.title):O(e.title)+"-"+J?.map(e=>e.variants?.find(t=>t._id===M[e._id])).map(e=>O(e?.name))}`,image:K,variant:M||{},price:0===e.variants.length?T(e.prices.price):T($),originalPrice:0===e.variants.length?T(e.prices.originalPrice):T(X)};C(n)}},handleMoreInfo=e=>{t(!1),l.push(`/product/${e}`),o(!k),(0,N.KX)("product",`opened ${e} product details`)},ee=O(s?.category?.name)?.toLowerCase()?.replace(/[^A-Z0-9]+/gi,"-");return r.jsx(r.Fragment,{children:r.jsx(j.Z,{modalOpen:e,setModalOpen:t,children:r.jsx("div",{className:"inline-block overflow-y-auto h-full align-middle transition-all transform bg-white shadow-xl rounded-2xl",children:(0,r.jsxs)("div",{className:"flex flex-col lg:flex-row md:flex-row w-full max-w-4xl overflow-hidden",children:[r.jsx(d(),{href:`/product/${s.slug}`,passHref:!0,children:(0,r.jsxs)("div",{onClick:()=>t(!1),className:"flex-shrink-0 flex items-center justify-center h-auto cursor-pointer",children:[r.jsx(y.Z,{product:s,discount:z,modal:!0}),s.image[0]?r.jsx(c(),{src:K||s.image[0],width:420,height:420,alt:"product"}):r.jsx(c(),{src:"https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png",width:420,height:420,alt:"product Image"})]})}),(0,r.jsxs)("div",{className:"w-full flex flex-col p-5 md:p-8 text-left",children:[(0,r.jsxs)("div",{className:"mb-2 md:mb-2.5 block -mt-1.5",children:[r.jsx(d(),{href:`/product/${s.slug}`,passHref:!0,children:r.jsx("h1",{onClick:()=>t(!1),className:"text-heading text-lg md:text-xl lg:text-2xl font-semibold font-serif hover:text-black cursor-pointer",children:O(s?.title)})}),r.jsx("div",{className:`${U<=0?"relative py-1 mb-2":"relative"}`,children:r.jsx(h.Z,{stock:U})})]}),r.jsx("p",{className:"text-sm leading-6 text-gray-500 md:leading-6",children:O(s?.description)}),r.jsx("div",{className:"flex items-center my-4",children:r.jsx(p.Z,{product:s,price:$,currency:i,originalPrice:X})}),r.jsx("div",{className:"mb-1",children:J?.map((e,t)=>r.jsxs("span",{children:[r.jsxs("h4",{className:"text-sm py-1 font-serif text-gray-700 font-bold",children:[O(e?.name),":"]}),r.jsx("div",{className:"flex flex-row mb-3",children:r.jsx(v.Z,{att:e._id,lang:Z,option:e.option,setValue:S,varTitle:J,variants:s?.variants,setSelectVa:H,selectVariant:M,setSelectVariant:V})})]},e._id))}),r.jsx("div",{className:"flex items-center mt-4",children:(0,r.jsxs)("div",{className:"flex items-center justify-between space-s-3 sm:space-s-4 w-full",children:[(0,r.jsxs)("div",{className:"group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0 border h-11 md:h-12 border-gray-300",children:[r.jsx("button",{onClick:()=>E(A-1),disabled:1===A,className:"flex items-center justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none w-8 md:w-12 text-heading border-e border-gray-300 hover:text-gray-500",children:r.jsx("span",{className:"text-dark text-base",children:r.jsx(u.ego,{})})}),r.jsx("p",{className:"font-semibold flex items-center justify-center h-full  transition-colors duration-250 ease-in-out cursor-default flex-shrink-0 text-base text-heading w-8  md:w-20 xl:w-24",children:A}),r.jsx("button",{onClick:()=>E(A+1),disabled:s.quantity<A||s.quantity===A,className:"flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none w-8 md:w-12 text-heading border-s border-gray-300 hover:text-gray-500",children:r.jsx("span",{className:"text-dark text-base",children:r.jsx(u.OvN,{})})})]}),r.jsx("button",{onClick:()=>handleAddToCart(s),disabled:s.quantity<1,className:"text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-serif text-center justify-center border-0 border-transparent rounded-md focus-visible:outline-none focus:outline-none text-white px-4 ml-4 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white bg-emerald-500 hover:bg-emerald-600 w-full h-12",children:P("common:addToCart")})]})}),r.jsx("div",{className:"flex items-center mt-4",children:(0,r.jsxs)("div",{className:"flex items-center justify-between space-s-3 sm:space-s-4 w-full",children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("span",{className:"font-serif font-semibold py-1 text-sm d-block",children:[(0,r.jsxs)("span",{className:"text-gray-700",children:[P("common:category"),":"]})," ",r.jsx(d(),{href:`/search?category=${ee}&_id=${s?.category?._id}`,children:r.jsx("button",{type:"button",className:"text-gray-600 font-serif font-medium underline ml-2 hover:text-teal-600",onClick:()=>o(!k),children:ee})})]}),r.jsx(f.Z,{product:s})]}),r.jsx("div",{children:r.jsx("button",{onClick:()=>handleMoreInfo(s.slug),className:"font-sans font-medium text-sm text-orange-500",children:P("common:moreInfo")})})]})}),r.jsx("div",{className:"flex justify-end mt-2",children:(0,r.jsxs)("p",{className:"text-xs sm:text-sm text-gray-600",children:["Call Us To Order By Mobile Number :"," ",r.jsx("span",{className:"text-emerald-700 font-semibold",children:"+0044235234"})," "]})})]})]})})})})};a()}catch(e){a(e)}})},2379:(e,t,s)=>{"use strict";s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>w});var r=s(997),i=s(2145),n=s.n(i),l=s(8209),c=s.n(l),o=s(6689),d=s(6467),x=s(9878),m=s(4319),u=s(6160),p=s(7718),h=s(4509),f=s(2068),g=s(3954),b=s(4965),j=s(6129),y=s(6257),v=s(3305),_=e([m,f,g,b,j]);[m,f,g,b,j]=_.then?(await _)():_;let ProductCard=({product:e,attributes:t})=>{let[s,a]=(0,o.useState)(!1),{items:i,addItem:n,updateItemQuantity:l,inCart:_}=(0,x.useCart)(),{handleIncreaseQuantity:w}=(0,h.Z)(),{globalSetting:N}=(0,f.Z)(),{showingTranslateValue:k}=(0,b.Z)(),P=N?.default_currency||"$",handleAddItem=t=>{if(t.stock<1)return(0,p.cB)("Insufficient stock!");if(t?.variants?.length>0){a(!s);return}let{slug:r,variants:i,categories:l,description:c,...o}=e,d={...o,title:k(t?.title),id:t._id,variant:t.prices,price:t.prices.price,originalPrice:e.prices?.originalPrice};n(d)},handleModalOpen=(e,t)=>{a(e)};return(0,r.jsxs)(r.Fragment,{children:[s&&r.jsx(j.Z,{modalOpen:s,setModalOpen:a,product:e,currency:P,attributes:t}),(0,r.jsxs)("div",{className:"group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative",children:[(0,r.jsxs)("div",{className:"w-full flex justify-between",children:[r.jsx(u.Z,{product:e,stock:e.stock,card:!0}),r.jsx(g.Z,{product:e})]}),r.jsx("div",{onClick:()=>{handleModalOpen(!s,e._id),(0,v.KX)("product",`opened ${k(e?.title)} product modal`)},className:"relative flex justify-center cursor-pointer pt-2 w-full h-44",children:r.jsx("div",{className:"relative w-full h-full p-2",children:e.image[0]?r.jsx(y.Z,{src:e.image[0],alt:"product"}):r.jsx(c(),{src:"https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png",fill:!0,style:{objectFit:"contain"},sizes:"100%",alt:"product",className:"object-contain transition duration-150 ease-linear transform group-hover:scale-105"})})}),(0,r.jsxs)("div",{className:"w-full px-3 lg:px-4 pb-4 overflow-hidden",children:[(0,r.jsxs)("div",{className:"relative mb-1",children:[r.jsx("span",{className:"text-gray-400 font-medium text-xs d-block mb-1",children:e.unit}),r.jsx("h2",{className:"text-heading truncate mb-0 block text-sm font-medium text-gray-600",children:r.jsx("span",{className:"line-clamp-2",children:k(e?.title)})})]}),(0,r.jsxs)("div",{className:"flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl",children:[r.jsx(m.Z,{card:!0,product:e,currency:P,price:e?.isCombination?e?.variants[0]?.price:e?.prices?.price,originalPrice:e?.isCombination?e?.variants[0]?.originalPrice:e?.prices?.originalPrice}),_(e._id)?(0,r.jsxs)("div",{children:[i.map(t=>t.id===e._id&&(0,r.jsxs)("div",{className:"h-9 w-auto flex flex-wrap items-center justify-evenly py-1 px-2 bg-emerald-500 text-white rounded",children:[r.jsx("button",{onClick:()=>l(t.id,t.quantity-1),children:r.jsx("span",{className:"text-dark text-base",children:r.jsx(d._kz,{})})}),r.jsx("p",{className:"text-sm text-dark px-1 font-serif font-semibold",children:t.quantity}),r.jsx("button",{onClick:()=>t?.variants?.length>0?handleAddItem(t):w(t),children:r.jsx("span",{className:"text-dark text-base",children:r.jsx(d.xcL,{})})})]},t.id))," "]}):(0,r.jsxs)("button",{onClick:()=>handleAddItem(e),"aria-label":"cart",className:"h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-[#e0015e] hover:border-[#e0015e] hover:bg-[#e0015e] hover:text-white transition-all",children:[" ",r.jsx("span",{className:"text-xl",children:r.jsx(d.Crz,{})})," "]})]})]})]})]})},w=n()(()=>Promise.resolve(ProductCard),{ssr:!1});a()}catch(e){a(e)}})},7049:(e,t,s)=>{"use strict";s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var r=s(997),i=s(4965),n=e([i]);i=(n.then?(await n)():n)[0];let __WEBPACK_DEFAULT_EXPORT__=({att:e,option:t,variants:s,setValue:a,varTitle:n,selectVariant:l,setSelectVariant:c,setSelectVa:o})=>{let{showingTranslateValue:d}=(0,i.Z)(),handleChangeVariant=t=>{a(t),c({...l,[e]:t}),o({[e]:t})};return r.jsx(r.Fragment,{children:"Dropdown"===t?(0,r.jsxs)("select",{onChange:e=>handleChangeVariant(e.target.value),className:"focus:shadow-none w-1/2 px-2 py-1 form-select outline-none h-10 text-sm focus:outline-none block rounded-md bg-gray-100 border-transparent focus:bg-white border-emerald-600 focus:border-emerald-400 focus:ring focus:ring-emerald-200",name:"parent",children:[[...new Map(s.map(t=>[t[e],t].filter(Boolean))).values()].filter(Boolean).map((t,s)=>Object?.values(l).includes(t[e])&&n.map(a=>a?.variants?.map(i=>a?._id===e&&i?._id===t[e]&&r.jsx("option",{value:l[e],defaultValue:l[e],hidden:!0,children:d(i.name)},s+1)))),[...new Map(s.map(t=>[t[e],t].filter(Boolean))).values()].filter(Boolean).map((t,s)=>n.map(s=>s?.variants?.map(a=>s?._id===e&&a?._id===t[e]&&r.jsx("option",{value:t[e],defaultValue:!0,children:d(a.name)},a._id))))]}):r.jsx("div",{className:"grid lg:grid-cols-3 grid-cols-2",children:[...new Map(s?.map(t=>[t[e],t].filter(Boolean))).values()].filter(Boolean).map((t,s)=>n.map(a=>a?.variants?.map(i=>a?._id===e&&i?._id===t[e]&&r.jsx("button",{onClick:s=>handleChangeVariant(t[e]),className:`${Object?.values(l).includes(t[e])?"bg-emerald-500 text-white mr-2 border-0 rounded-full inline-flex items-center justify-center px-3 py-1 text-xs font-serif mt-2 focus:outline-none":"bg-gray-100 mr-2 border-0 text-gray-600 rounded-full inline-flex items-center justify-center px-3 py-1 text-xs font-serif mt-2 focus:outline-none"}`,children:d(i.name)},s+1))))})})};a()}catch(e){a(e)}})},7285:(e,t,s)=>{"use strict";s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>n});var r=s(7228),i=e([r]);r=(i.then?(await i)():i)[0];let n={getAllAttributes:async()=>r.Z.get("/attributes"),getShowingAttributes:async()=>r.Z.get("/attributes/show"),addAttribute:async e=>r.Z.post("/attributes/add",e),addAllAttributes:async e=>r.Z.post("/attributes/add/all",e),getAttributeById:async e=>r.Z.get(`/attributes/${e}`),updateAttributes:async(e,t)=>r.Z.put(`/attributes/${e}`,t),updateStatus:async(e,t)=>r.Z.put(`/attributes/status/${e}`,t),deleteAttribute:async(e,t)=>r.Z.delete(`/attributes/${e}`,t)};a()}catch(e){a(e)}})},2875:(e,t,s)=>{"use strict";s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>n});var r=s(7228),i=e([r]);r=(i.then?(await i)():i)[0];let n={getShowingProducts:async()=>r.Z.get("/products/show"),getShowingStoreProducts:async({category:e="",title:t="",slug:s=""})=>r.Z.get(`/products/store?category=${e}&title=${t}&slug=${s}`),getDiscountedProducts:async()=>r.Z.get("/products/discount"),getProductBySlug:async e=>r.Z.get(`/products/${e}`)};a()}catch(e){a(e)}})},9176:()=>{},2996:()=>{},8722:()=>{}};