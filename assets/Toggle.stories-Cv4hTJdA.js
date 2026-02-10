import{d as J,b as c,f as u,n as i,z as m,t as K,u as M,v as g,A as P,o as b}from"./vue.esm-bundler-DtUWbB1b.js";const Q={class:"inline-flex items-center gap-3"},R=["id","aria-checked","aria-label","disabled"],U=["for"],q=J({__name:"Toggle",props:{modelValue:{type:Boolean,default:!1},label:{default:""},disabled:{type:Boolean,default:!1},size:{default:"md"}},emits:["update:modelValue"],setup(e,{emit:E}){const a=e,_=E,d=P(),I={sm:"h-5 w-9",md:"h-6 w-11",lg:"h-7 w-[52px]"},j={sm:"h-3.5 w-3.5",md:"h-4 w-4",lg:"h-5 w-5"},F={sm:"translate-x-4",md:"translate-x-5",lg:"translate-x-6"},A=g(()=>["relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2","disabled:opacity-50 disabled:cursor-not-allowed",I[a.size],a.modelValue?"bg-gray-900":"bg-gray-200"]),G=g(()=>["pointer-events-none inline-block rounded-full bg-white shadow-sm ring-0 transition-transform duration-200 ease-in-out",j[a.size],a.modelValue?F[a.size]:"translate-x-0.5"]);function H(){a.disabled||_("update:modelValue",!a.modelValue)}return(W,X)=>(b(),c("div",Q,[u("button",{id:m(d),type:"button",role:"switch","aria-checked":e.modelValue,"aria-label":e.label,disabled:e.disabled,class:i(A.value),onClick:H},[u("span",{class:i(G.value),"aria-hidden":"true"},null,2)],10,R),e.label?(b(),c("label",{key:0,for:m(d),class:i(["cursor-pointer text-sm text-gray-700 select-none",e.disabled&&"cursor-not-allowed opacity-50"])},K(e.label),11,U)):M("",!0)]))}});q.__docgenInfo={exportName:"default",displayName:"Toggle",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"ToggleSize"},defaultValue:{func:!1,value:"'md'"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/toggle/Toggle.vue"]};const Z={title:"Form/Toggle",component:q,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"}}},s={args:{label:"Enable notifications"}},l={args:{label:"Notifications enabled",modelValue:!0}},o={args:{label:"Cannot toggle",disabled:!0}},t={args:{label:"Locked on",modelValue:!0,disabled:!0}},r={args:{label:"Small toggle",size:"sm"}},n={args:{label:"Large toggle",size:"lg"}};var f,p,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications'
  }
}`,...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var y,V,v;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Notifications enabled',
    modelValue: true
  }
}`,...(v=(V=l.parameters)==null?void 0:V.docs)==null?void 0:v.source}}};var z,S,k;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
