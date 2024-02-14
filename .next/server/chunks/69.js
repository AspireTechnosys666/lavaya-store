"use strict";exports.id=69,exports.ids=[69],exports.modules={7074:(e,s,t)=>{t.d(s,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var a=t(997);t(6689);var r=t(1635),n=t.n(r);let __WEBPACK_DEFAULT_EXPORT__=({order:e,currency:s})=>(0,a.jsxs)(a.Fragment,{children:[a.jsx("td",{className:"px-5 py-3 leading-6 whitespace-nowrap",children:a.jsx("span",{className:"uppercase text-sm font-medium",children:e?._id?.substring(20,24)})}),a.jsx("td",{className:"px-5 py-3 leading-6 text-center whitespace-nowrap",children:a.jsx("span",{className:"text-sm",children:n()(e.createdAt).format("MMMM D, YYYY")})}),a.jsx("td",{className:"px-5 py-3 leading-6 text-center whitespace-nowrap",children:a.jsx("span",{className:"text-sm",children:e.paymentMethod})}),(0,a.jsxs)("td",{className:"px-5 py-3 leading-6 text-center whitespace-nowrap font-medium text-sm",children:["Delivered"===e.status&&a.jsx("span",{className:"text-emerald-500",children:e.status}),"Pending"===e.status&&a.jsx("span",{className:"text-orange-500",children:e.status}),"Cancel"===e.status&&a.jsx("span",{className:"text-red-500",children:e.status}),"Processing"===e.status&&a.jsx("span",{className:"text-indigo-500",children:e.status})]}),a.jsx("td",{className:"px-5 py-3 leading-6 text-center whitespace-nowrap",children:(0,a.jsxs)("span",{className:"text-sm font-bold",children:[s,parseFloat(e?.total).toFixed(2)]})})]})},2069:(e,s,t)=>{t.a(e,async(e,a)=>{try{t.r(s),t.d(s,{default:()=>__WEBPACK_DEFAULT_EXPORT__,getStaticProps:()=>getStaticProps});var r=t(997),n=t(608),l=t(7462),i=t.n(l),d=t(6689),c=t(6467),x=t(9700),o=t.n(x),m=t(8476),p=t(7193),h=t(7074),g=t(2068),u=t(4965),N=e([g,u]);[g,u]=N.then?(await N)():N;let __WEBPACK_DEFAULT_EXPORT__=({data:e,loading:s,error:t})=>{let{handleChangePage:a}=(0,d.useContext)(m.l),{storeCustomizationSetting:n}=(0,g.Z)(),{showingTranslateValue:l}=(0,u.Z)(),i=Math.ceil(e?.totalDoc/8);return r.jsx(r.Fragment,{children:r.jsx("div",{className:"max-w-screen-2xl mx-auto",children:r.jsx("div",{className:"rounded-md font-serif",children:s?r.jsx(p.Z,{loading:s}):t?r.jsx("h2",{className:"text-xl text-center my-10 mx-auto w-11/12 text-red-400",children:t}):e?.orders?.length===0?(0,r.jsxs)("div",{className:"text-center",children:[r.jsx("span",{className:"flex justify-center my-30 pt-16 text-[#e0015e] font-semibold text-6xl",children:r.jsx(c.c77,{})}),r.jsx("h2",{className:"font-medium text-md my-4 text-gray-600",children:"You Have no order Yet!"})]}):(0,r.jsxs)("div",{className:"flex flex-col",children:[r.jsx("h3",{className:"text-lg font-serif font-medium mb-5",children:l(n?.dashboard?.recent_order)}),r.jsx("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:r.jsx("div",{className:"align-middle inline-block border border-gray-100 rounded-md min-w-full pb-2 sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"overflow-hidden border-b last:border-b-0 border-gray-100 rounded-md",children:[(0,r.jsxs)("table",{className:"table-auto min-w-full border border-gray-100 divide-y divide-gray-200",children:[r.jsx("thead",{className:"bg-gray-50",children:(0,r.jsxs)("tr",{className:"bg-gray-100",children:[r.jsx("th",{scope:"col",className:"text-left text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider",children:"ID"}),r.jsx("th",{scope:"col",className:"text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider",children:"OrderTime"}),r.jsx("th",{scope:"col",className:"text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider",children:"Method"}),r.jsx("th",{scope:"col",className:"text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider",children:"Status"}),r.jsx("th",{scope:"col",className:"text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider",children:"Total"})]})}),r.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:e?.orders?.map(e=>r.jsx("tr",{children:r.jsx(h.Z,{order:e})},e._id))})]}),e?.totalDoc>10&&r.jsx("div",{className:"paginationOrder",children:r.jsx(o(),{breakLabel:"...",nextLabel:"Next",onPageChange:e=>a(e.selected+1),pageRangeDisplayed:3,pageCount:i,previousLabel:"Previous",renderOnZeroPageCount:null,pageClassName:"page--item",pageLinkClassName:"page--link",previousClassName:"page-item",previousLinkClassName:"page-previous-link",nextClassName:"page-item",nextLinkClassName:"page-next-link",breakClassName:"page--item",breakLinkClassName:"page--link",containerClassName:"pagination",activeClassName:"activePagination"})})]})})})]})})})})};async function getStaticProps(e){return{props:{...await i()({...e,pathname:"/user/recent-order",loaderName:"getStaticProps",...n,loadLocaleFrom:(e,s)=>t(7655)(`./${e}/${s}`).then(e=>e.default)})}}}a()}catch(e){a(e)}})}};