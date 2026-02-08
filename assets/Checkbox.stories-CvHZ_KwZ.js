import{d as Y,b as c,e as m,u as f,t as p,g as z,n as F,f as O,m as T,o as d}from"./vue.esm-bundler-Db6pwSvC.js";const U={class:"flex flex-col gap-1"},$=["for"],G=["id","checked","disabled","indeterminate","aria-invalid"],H={key:0},J={key:0,class:"ml-6 text-sm text-red-600",role:"alert"},_=Y({__name:"Checkbox",props:{modelValue:{type:Boolean,default:!1},label:{default:""},disabled:{type:Boolean,default:!1},error:{default:""},indeterminate:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:j}){const L=j,i=T();function W(l){const u=l.target;L("update:modelValue",u.checked)}return(l,u)=>(d(),c("div",U,[m("label",{for:f(i),class:F(["inline-flex items-center gap-2 cursor-pointer text-sm text-gray-700",e.disabled&&"opacity-50 cursor-not-allowed"])},[m("input",{id:f(i),type:"checkbox",checked:e.modelValue,disabled:e.disabled,indeterminate:e.indeterminate,class:"h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 disabled:cursor-not-allowed","aria-invalid":!!e.error,onChange:W},null,40,G),e.label?(d(),c("span",H,p(e.label),1)):z(l.$slots,"default",{key:1})],10,$),e.error?(d(),c("p",J,p(e.error),1)):O("",!0)]))}});_.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"indeterminate",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/components/ui/checkbox/Checkbox.vue"]};const M={title:"UI/Checkbox",component:_,tags:["autodocs"],argTypes:{disabled:{control:"boolean"},indeterminate:{control:"boolean"}}},a={args:{label:"Accept terms and conditions"}},t={args:{label:"Accept terms and conditions",modelValue:!0}},r={args:{label:"Accept terms and conditions",error:"You must accept the terms to continue"}},s={args:{label:"Cannot change",disabled:!0}},o={args:{label:"Locked selection",modelValue:!0,disabled:!0}},n={args:{label:"Select all",indeterminate:!0}};var b,g,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions'
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var k,y,x;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    modelValue: true
  }
}`,...(x=(y=t.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var V,C,v;r.parameters={...r.parameters,docs:{...(V=r.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    error: 'You must accept the terms to continue'
  }
}`,...(v=(C=r.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var S,D,A;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Cannot change',
    disabled: true
  }
}`,...(A=(D=s.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var B,I,q;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Locked selection',
    modelValue: true,
    disabled: true
  }
}`,...(q=(I=o.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var w,E,N;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Select all',
    indeterminate: true
  }
}`,...(N=(E=n.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const P=["Default","Checked","WithError","Disabled","DisabledChecked","Indeterminate"];export{t as Checked,a as Default,s as Disabled,o as DisabledChecked,n as Indeterminate,r as WithError,P as __namedExportsOrder,M as default};
