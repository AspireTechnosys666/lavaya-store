(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[896],{8681:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/recent-order",function(){return t(2304)}])},3240:function(e,s,t){"use strict";var a=t(7168);t(8381);var n=t(6635),r=t.n(n);s.Z=e=>{var s;let{order:t,currency:n}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("td",{className:"px-5 py-3 leading-6 whitespace-nowrap",children:(0,a.jsx)("span",{className:"uppercase text-sm font-medium",children:null==t?void 0:null===(s=t._id)||void 0===s?void 0:s.substring(20,24)})}),(0,a.jsx)("td",{className:"px-5 py-3 leading-6 text-center whitespace-nowrap",children:(0,a.jsx)("span",{className:"text-sm",children:r()(t.createdAt).format("MMMM D, YYYY")})}),(0,a.jsx)("td",{className:"px-5 py-3 leading-6 text-center whitespace-nowrap",children:(0,a.jsx)("span",{className:"text-sm",children:t.paymentMethod})}),(0,a.jsxs)("td",{className:"px-5 py-3 leading-6 text-center whitespace-nowrap font-medium text-sm",children:["Delivered"===t.status&&(0,a.jsx)("span",{className:"text-emerald-500",children:t.status}),"Pending"===t.status&&(0,a.jsx)("span",{className:"text-orange-500",children:t.status}),"Cancel"===t.status&&(0,a.jsx)("span",{className:"text-red-500",children:t.status}),"Processing"===t.status&&(0,a.jsx)("span",{className:"text-indigo-500",children:t.status})]}),(0,a.jsx)("td",{className:"px-5 py-3 leading-6 text-center whitespace-nowrap",children:(0,a.jsxs)("span",{className:"text-sm font-bold",children:[n,parseFloat(null==t?void 0:t.total).toFixed(2)]})})]})}},2304:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSG:function(){return p}});var a=t(7168),n=t(8381),r=t(4423),l=t(8876),i=t.n(l),d=t(7222),c=t(5847),o=t(3240),x=t(6286),m=t(2182),p=!0;s.default=e=>{var s,t,l;let{data:p,loading:u,error:h}=e,{handleChangePage:g}=(0,n.useContext)(d.l),{storeCustomizationSetting:N}=(0,x.Z)(),{showingTranslateValue:f}=(0,m.Z)(),v=Math.ceil((null==p?void 0:p.totalDoc)/8);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"max-w-screen-2xl mx-auto",children:(0,a.jsx)("div",{className:"rounded-md font-serif",children:u?(0,a.jsx)(c.Z,{loading:u}):h?(0,a.jsx)("h2",{className:"text-xl text-center my-10 mx-auto w-11/12 text-red-400",children:h}):(null==p?void 0:null===(s=p.orders)||void 0===s?void 0:s.length)===0?(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("span",{className:"flex justify-center my-30 pt-16 text-emerald-500 font-semibold text-6xl",children:(0,a.jsx)(r.c77,{})}),(0,a.jsx)("h2",{className:"font-medium text-md my-4 text-gray-600",children:"You Have no order Yet!"})]}):(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("h3",{className:"text-lg font-serif font-medium mb-5",children:f(null==N?void 0:null===(t=N.dashboard)||void 0===t?void 0:t.recent_order)}),(0,a.jsx)("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:(0,a.jsx)("div",{className:"align-middle inline-block border border-gray-100 rounded-md min-w-full pb-2 sm:px-6 lg:px-8",children:(0,a.jsxs)("div",{className:"overflow-hidden border-b last:border-b-0 border-gray-100 rounded-md",children:[(0,a.jsxs)("table",{className:"table-auto min-w-full border border-gray-100 divide-y divide-gray-200",children:[(0,a.jsx)("thead",{className:"bg-gray-50",children:(0,a.jsxs)("tr",{className:"bg-gray-100",children:[(0,a.jsx)("th",{scope:"col",className:"text-left text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider",children:"ID"}),(0,a.jsx)("th",{scope:"col",className:"text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider",children:"OrderTime"}),(0,a.jsx)("th",{scope:"col",className:"text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider",children:"Method"}),(0,a.jsx)("th",{scope:"col",className:"text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider",children:"Status"}),(0,a.jsx)("th",{scope:"col",className:"text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider",children:"Total"})]})}),(0,a.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:null==p?void 0:null===(l=p.orders)||void 0===l?void 0:l.map(e=>(0,a.jsx)("tr",{children:(0,a.jsx)(o.Z,{order:e})},e._id))})]}),(null==p?void 0:p.totalDoc)>10&&(0,a.jsx)("div",{className:"paginationOrder",children:(0,a.jsx)(i(),{breakLabel:"...",nextLabel:"Next",onPageChange:e=>g(e.selected+1),pageRangeDisplayed:3,pageCount:v,previousLabel:"Previous",renderOnZeroPageCount:null,pageClassName:"page--item",pageLinkClassName:"page--link",previousClassName:"page-item",previousLinkClassName:"page-previous-link",nextClassName:"page-item",nextLinkClassName:"page-next-link",breakClassName:"page--item",breakLinkClassName:"page--link",containerClassName:"pagination",activeClassName:"activePagination"})})]})})})]})})})})}}},function(e){e.O(0,[260,461,921,774,888,179],function(){return e(e.s=8681)}),_N_E=e.O()}]);