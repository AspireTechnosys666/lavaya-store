"use strict";exports.id=908,exports.ids=[908],exports.modules={908:(e,t,o)=>{o.a(e,async(e,a)=>{try{o.r(t),o.d(t,{default:()=>p});var n=o(997),r=o(4930),s=o(6386),i=o.n(s),c=e([r]);r=(c.then?(await c)():c)[0];let MyDocument=class MyDocument extends i(){static async getInitialProps(e){let t=await i().getInitialProps(e),o=await r.Z.getStoreSeoSetting();return{...t,setting:o}}render(){let e=this.props.setting;return(0,n.jsxs)(s.Html,{lang:"en",children:[(0,n.jsxs)(s.Head,{children:[n.jsx("link",{rel:"icon",href:e?.favicon||"/favicon.png"}),n.jsx("meta",{property:"og:title",content:e?.meta_title||"Lavaya - Online Shopping Store"}),n.jsx("meta",{property:"og:type",content:"eCommerce Website"}),n.jsx("meta",{property:"og:description",content:e?.meta_description||"React Grocery & Organic Food Store e-commerce Template"}),n.jsx("meta",{name:"keywords",content:e?.meta_keywords||"ecommenrce online store"}),n.jsx("meta",{property:"og:url",content:e?.meta_url||"https://lavaya.network"}),n.jsx("meta",{property:"og:image",content:e?.meta_img||"https://res.cloudinary.com/ahossain/image/upload/v1636729752/facebook-page_j7alju.png"})]}),(0,n.jsxs)("body",{children:[n.jsx(s.Main,{}),n.jsx(s.NextScript,{})]})]})}};let p=MyDocument;a()}catch(e){a(e)}})}};