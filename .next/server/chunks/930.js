"use strict";exports.id=930,exports.ids=[930],exports.modules={4930:(t,e,s)=>{s.a(t,async(t,n)=>{try{s.d(e,{Z:()=>r});var a=s(7228),o=t([a]);a=(o.then?(await o)():o)[0];let r={getStoreSetting:async()=>a.Z.get("/setting/store-setting/all"),getStoreSeoSetting:async()=>a.Z.get("/setting/store-setting/seo"),getStoreCustomizationSetting:async()=>a.Z.get("/setting/store/customization/all"),getShowingLanguage:async()=>a.Z.get("/language/show"),getGlobalSetting:async()=>a.Z.get("/setting/global/all")};n()}catch(t){n(t)}})},7228:(t,e,s)=>{s.a(t,async(t,n)=>{try{s.d(e,{Z:()=>l});var a=s(2167),o=s.n(a),r=s(9915),g=t([r]);r=(g.then?(await g)():g)[0];let i=o().create({baseURL:"http://3.106.202.194:5055/api",timeout:5e5,headers:{Accept:"application/json","Content-Type":"application/json"}});i.interceptors.request.use(function(t){let e;return r.default.get("userInfo")&&(e=JSON.parse(r.default.get("userInfo"))),{...t,headers:{authorization:e?`Bearer ${e.token}`:null}}});let responseBody=t=>t.data,l={get:(t,e)=>i.get(t,e).then(responseBody),post:(t,e,s)=>i.post(t,e,s).then(responseBody),put:(t,e)=>i.put(t,e).then(responseBody)};n()}catch(t){n(t)}})}};