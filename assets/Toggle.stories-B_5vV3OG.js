import{d as H,b as u,e as c,n as i,u as m,t as J,f as K,j as g,m as M,o as b}from"./vue.esm-bundler-Db6pwSvC.js";const P={class:"inline-flex items-center gap-3"},Q=["id","aria-checked","aria-label","disabled"],R=["for"],q=H({__name:"Toggle",props:{modelValue:{type:Boolean,default:!1},label:{default:""},disabled:{type:Boolean,default:!1},size:{default:"md"}},emits:["update:modelValue"],setup(e,{emit:E}){const a=e,I=E,d=M(),_={sm:"h-5 w-9",md:"h-6 w-11",lg:"h-7 w-[52px]"},j={sm:"h-3.5 w-3.5",md:"h-4 w-4",lg:"h-5 w-5"},F={sm:"translate-x-4",md:"translate-x-5",lg:"translate-x-6"},U=g(()=>["relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2","disabled:opacity-50 disabled:cursor-not-allowed",_[a.size],a.modelValue?"bg-blue-600":"bg-gray-300"]),A=g(()=>["pointer-events-none inline-block rounded-full bg-white shadow-sm ring-0 transition-transform duration-200 ease-in-out",j[a.size],a.modelValue?F[a.size]:"translate-x-0.5"]);function G(){a.disabled||I("update:modelValue",!a.modelValue)}return(W,X)=>(b(),u("div",P,[c("button",{id:m(d),type:"button",role:"switch","aria-checked":e.modelValue,"aria-label":e.label,disabled:e.disabled,class:i(U.value),onClick:G},[c("span",{class:i(A.value),"aria-hidden":"true"},null,2)],10,Q),e.label?(b(),u("label",{key:0,for:m(d),class:i(["text-sm text-gray-700 cursor-pointer select-none",e.disabled&&"opacity-50 cursor-not-allowed"])},J(e.label),11,R)):K("",!0)]))}});q.__docgenInfo={exportName:"default",displayName:"Toggle",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"ToggleSize"},defaultValue:{func:!1,value:"'md'"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/components/ui/toggle/Toggle.vue"]};const Z={title:"UI/Toggle",component:q,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"}}},s={args:{label:"Enable notifications"}},l={args:{label:"Notifications enabled",modelValue:!0}},o={args:{label:"Cannot toggle",disabled:!0}},t={args:{label:"Locked on",modelValue:!0,disabled:!0}},r={args:{label:"Small toggle",size:"sm"}},n={args:{label:"Large toggle",size:"lg"}};var f,p,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications'
  }
}`,...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var V,y,v;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Notifications enabled',
    modelValue: true
  }
}`,...(v=(y=l.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var z,S,k;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Cannot toggle',
    disabled: true
  }
}`,...(k=(S=o.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var x,w,C;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Locked on',
    modelValue: true,
    disabled: true
  }
}`,...(C=(w=t.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var D,T,L;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Small toggle',
    size: 'sm'
  }
}`,...(L=(T=r.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var N,B,O;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Large toggle',
    size: 'lg'
  }
}`,...(O=(B=n.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};const $=["Default","On","Disabled","DisabledOn","Small","Large"];export{s as Default,o as Disabled,t as DisabledOn,n as Large,l as On,r as Small,$ as __namedExportsOrder,Z as default};
