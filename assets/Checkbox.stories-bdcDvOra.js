import{d as L,b as c,f as m,z as f,t as p,g as W,n as Y,u as O,A as T,o as d}from"./vue.esm-bundler-YEuhxn0F.js";const $={class:"flex flex-col gap-1"},G=["for"],H=["id","checked","disabled","indeterminate","aria-invalid"],J={key:0},K={key:0,class:"ml-6 text-sm text-red-600",role:"alert"},_=L({__name:"Checkbox",props:{modelValue:{type:Boolean,default:!1},label:{default:""},disabled:{type:Boolean,default:!1},error:{default:""},indeterminate:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:j}){const z=j,i=T();function F(l){const u=l.target;z("update:modelValue",u.checked)}return(l,u)=>(d(),c("div",$,[m("label",{for:f(i),class:Y(["inline-flex cursor-pointer items-center gap-2 text-sm text-gray-700",e.disabled&&"cursor-not-allowed opacity-50"])},[m("input",{id:f(i),type:"checkbox",checked:e.modelValue,disabled:e.disabled,indeterminate:e.indeterminate,class:"h-4 w-4 rounded border-gray-300 accent-gray-900 focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed","aria-invalid":!!e.error,onChange:F},null,40,H),e.label?(d(),c("span",J,p(e.label),1)):W(l.$slots,"default",{key:1})],10,G),e.error?(d(),c("p",K,p(e.error),1)):O("",!0)]))}});_.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"indeterminate",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/checkbox/Checkbox.vue"]};const P={title:"Form/Checkbox",component:_,tags:["autodocs"],argTypes:{disabled:{control:"boolean"},indeterminate:{control:"boolean"}}},a={args:{label:"Accept terms and conditions"}},t={args:{label:"Accept terms and conditions",modelValue:!0}},r={args:{label:"Accept terms and conditions",error:"You must accept the terms to continue"}},s={args:{label:"Cannot change",disabled:!0}},o={args:{label:"Locked selection",modelValue:!0,disabled:!0}},n={args:{label:"Select all",indeterminate:!0}};var b,g,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions'
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,k,x;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    modelValue: true
  }
}`,...(x=(k=t.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var V,v,C;r.parameters={...r.parameters,docs:{...(V=r.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    error: 'You must accept the terms to continue'
  }
}`,...(C=(v=r.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var S,A,D;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Cannot change',
    disabled: true
  }
}`,...(D=(A=s.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var B,q,I;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Locked selection',
    modelValue: true,
    disabled: true
  }
}`,...(I=(q=o.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var w,E,N;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Select all',
    indeterminate: true
  }
}`,...(N=(E=n.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const Q=["Default","Checked","WithError","Disabled","DisabledChecked","Indeterminate"];export{t as Checked,a as Default,s as Disabled,o as DisabledChecked,n as Indeterminate,r as WithError,Q as __namedExportsOrder,P as default};
