"use strict";exports.id=563,exports.ids=[563],exports.modules={8563:(e,t,n)=>{n.d(t,{p:()=>C});var l,r,o,s=n(6689),u=n(3775),a=n(808),i=n(495),c=n(8725),d=n(5334),p=n(8234),f=n(7336),P=n(4213),y=n(1406),m=n(8069);let I=null!=(o=s.startTransition)?o:function(e){e()};var S=((l=S||{})[l.Open=0]="Open",l[l.Closed=1]="Closed",l),E=((r=E||{})[r.ToggleDisclosure=0]="ToggleDisclosure",r[r.CloseDisclosure=1]="CloseDisclosure",r[r.SetButtonId=2]="SetButtonId",r[r.SetPanelId=3]="SetPanelId",r[r.LinkPanel=4]="LinkPanel",r[r.UnlinkPanel=5]="UnlinkPanel",r);let D={0:e=>({...e,disclosureState:(0,u.E)(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},k=(0,s.createContext)(null);function M(e){let t=(0,s.useContext)(k);if(null===t){let t=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,M),t}return t}k.displayName="DisclosureContext";let g=(0,s.createContext)(null);g.displayName="DisclosureAPIContext";let v=(0,s.createContext)(null);function Y(e,t){return(0,u.E)(t.type,D,e,t)}v.displayName="DisclosurePanelContext";let b=s.Fragment,R=a.AN.RenderStrategy|a.AN.Static,C=Object.assign((0,a.yV)(function(e,t){let{defaultOpen:n=!1,...l}=e,r=(0,s.useRef)(null),o=(0,i.T)(t,(0,i.h)(e=>{r.current=e},void 0===e.as||e.as===s.Fragment)),c=(0,s.useRef)(null),d=(0,s.useRef)(null),p=(0,s.useReducer)(Y,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:d,panelRef:c,buttonId:null,panelId:null}),[{disclosureState:P,buttonId:I},S]=p,E=(0,m.z)(e=>{S({type:1});let t=(0,y.r)(r);if(!t||!I)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(I):t.getElementById(I);null==n||n.focus()}),D=(0,s.useMemo)(()=>({close:E}),[E]),v=(0,s.useMemo)(()=>({open:0===P,close:E}),[P,E]);return s.createElement(k.Provider,{value:p},s.createElement(g.Provider,{value:D},s.createElement(f.up,{value:(0,u.E)(P,{0:f.ZM.Open,1:f.ZM.Closed})},(0,a.sY)({ourProps:{ref:o},theirProps:l,slot:v,defaultTag:b,name:"Disclosure"}))))}),{Button:(0,a.yV)(function(e,t){let n=(0,c.M)(),{id:l=`headlessui-disclosure-button-${n}`,...r}=e,[o,u]=M("Disclosure.Button"),f=(0,s.useContext)(v),y=null!==f&&f===o.panelId,I=(0,s.useRef)(null),S=(0,i.T)(I,t,y?null:o.buttonRef);(0,s.useEffect)(()=>{if(!y)return u({type:2,buttonId:l}),()=>{u({type:2,buttonId:null})}},[l,u,y]);let E=(0,m.z)(e=>{var t;if(y){if(1===o.disclosureState)return;switch(e.key){case d.R.Space:case d.R.Enter:e.preventDefault(),e.stopPropagation(),u({type:0}),null==(t=o.buttonRef.current)||t.focus()}}else switch(e.key){case d.R.Space:case d.R.Enter:e.preventDefault(),e.stopPropagation(),u({type:0})}}),D=(0,m.z)(e=>{e.key===d.R.Space&&e.preventDefault()}),k=(0,m.z)(t=>{var n;(0,p.P)(t.currentTarget)||e.disabled||(y?(u({type:0}),null==(n=o.buttonRef.current)||n.focus()):u({type:0}))}),g=(0,s.useMemo)(()=>({open:0===o.disclosureState}),[o]),b=(0,P.f)(e,I),R=y?{ref:S,type:b,onKeyDown:E,onClick:k}:{ref:S,id:l,type:b,"aria-expanded":0===o.disclosureState,"aria-controls":o.linkedPanel?o.panelId:void 0,onKeyDown:E,onKeyUp:D,onClick:k};return(0,a.sY)({ourProps:R,theirProps:r,slot:g,defaultTag:"button",name:"Disclosure.Button"})}),Panel:(0,a.yV)(function(e,t){let n=(0,c.M)(),{id:l=`headlessui-disclosure-panel-${n}`,...r}=e,[o,u]=M("Disclosure.Panel"),{close:d}=function w(e){let t=(0,s.useContext)(g);if(null===t){let t=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,w),t}return t}("Disclosure.Panel"),p=(0,i.T)(t,o.panelRef,e=>{I(()=>u({type:e?4:5}))});(0,s.useEffect)(()=>(u({type:3,panelId:l}),()=>{u({type:3,panelId:null})}),[l,u]);let P=(0,f.oJ)(),y=null!==P?(P&f.ZM.Open)===f.ZM.Open:0===o.disclosureState,m=(0,s.useMemo)(()=>({open:0===o.disclosureState,close:d}),[o,d]);return s.createElement(v.Provider,{value:o.panelId},(0,a.sY)({ourProps:{ref:p,id:l},theirProps:r,slot:m,defaultTag:"div",features:R,visible:y,name:"Disclosure.Panel"}))})})}};