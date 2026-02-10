import{d as ae,b as l,z as s,t as d,u as m,f as o,n as w,x as re,v as x,A as te,o as n}from"./vue.esm-bundler-DtUWbB1b.js";const le={class:"flex w-full flex-col gap-1.5"},se={key:0,class:"flex items-center justify-between"},ne=["for"],oe={key:1,class:"text-sm text-gray-500 tabular-nums"},ue={class:"relative flex items-center"},ie={class:w(["absolute inset-y-0 left-0 flex w-full items-center"])},de=["id","value","min","max","step","disabled","aria-valuenow","aria-valuemin","aria-valuemax","aria-label","aria-invalid","aria-describedby"],me=["id"],ce=["id"],a=ae({__name:"Slider",props:{modelValue:{default:0},min:{default:0},max:{default:100},step:{default:1},label:{default:""},disabled:{type:Boolean,default:!1},size:{default:"md"},showValue:{type:Boolean,default:!1},error:{default:""},hint:{default:""}},emits:["update:modelValue","change"],setup(e,{emit:Q}){const r=e,y=Q,t=te(),S={sm:"h-1",md:"h-2",lg:"h-3"},U={sm:"[&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:w-3.5 [&::-moz-range-thumb]:h-3.5 [&::-moz-range-thumb]:w-3.5",md:"[&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5",lg:"[&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6"},X=x(()=>(r.modelValue-r.min)/(r.max-r.min)*100),Y=x(()=>["w-full cursor-pointer appearance-none rounded-full bg-transparent",S[r.size],U[r.size],"[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-gray-900 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-150","[&::-webkit-slider-thumb]:hover:scale-110","[&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-gray-900 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow-sm [&::-moz-range-thumb]:transition-transform [&::-moz-range-thumb]:duration-150","[&::-moz-range-thumb]:hover:scale-110","focus-visible:outline-none [&::-webkit-slider-thumb]:focus-visible:ring-2 [&::-webkit-slider-thumb]:focus-visible:ring-gray-950 [&::-webkit-slider-thumb]:focus-visible:ring-offset-2",r.disabled&&"cursor-not-allowed opacity-50 [&::-webkit-slider-thumb]:hover:scale-100 [&::-moz-range-thumb]:hover:scale-100"]);function Z(u){const i=u.target,ee=Number(i.value);y("update:modelValue",ee)}function _(u){const i=u.target;y("change",Number(i.value))}return(u,i)=>(n(),l("div",le,[e.label||e.showValue?(n(),l("div",se,[e.label?(n(),l("label",{key:0,for:s(t),class:"text-sm font-medium text-gray-700"},d(e.label),9,ne)):m("",!0),e.showValue?(n(),l("span",oe,d(e.modelValue),1)):m("",!0)])):m("",!0),o("div",ue,[o("div",ie,[o("div",{class:w(["w-full rounded-full bg-gray-200",S[e.size]])},[o("div",{class:w(["rounded-full bg-gray-900 transition-all duration-100",S[e.size]]),style:re({width:`${X.value}%`})},null,6)],2)]),o("input",{id:s(t),type:"range",value:e.modelValue,min:e.min,max:e.max,step:e.step,disabled:e.disabled,class:w(Y.value),"aria-valuenow":e.modelValue,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-label":e.label||void 0,"aria-invalid":!!e.error,"aria-describedby":e.error?`${s(t)}-error`:e.hint?`${s(t)}-hint`:void 0,onInput:Z,onChange:_},null,42,de)]),e.error?(n(),l("p",{key:1,id:`${s(t)}-error`,class:"text-sm text-red-600",role:"alert"},d(e.error),9,me)):e.hint?(n(),l("p",{key:2,id:`${s(t)}-hint`,class:"text-sm text-gray-500"},d(e.hint),9,ce)):m("",!0)]))}});a.__docgenInfo={exportName:"default",displayName:"Slider",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"min",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"step",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"SliderSize"},defaultValue:{func:!1,value:"'md'"}},{name:"showValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hint",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue",type:{names:["number"]}},{name:"change",type:{names:["number"]}}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/slider/Slider.vue"]};const ge={title:"Form/Slider",component:a,tags:["autodocs"],argTypes:{modelValue:{control:{type:"number",min:0,max:100,step:1}},min:{control:"number"},max:{control:"number"},step:{control:"number"},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},showValue:{control:"boolean"},label:{control:"text"},error:{control:"text"},hint:{control:"text"}}},c={args:{modelValue:50},render:e=>({components:{Slider:a},setup:()=>({args:e}),template:'<Slider v-bind="args" />'})},b={args:{modelValue:30,label:"Volume",showValue:!0},render:e=>({components:{Slider:a},setup:()=>({args:e}),template:'<Slider v-bind="args" />'})},g={args:{modelValue:40,label:"Small slider",size:"sm",showValue:!0},render:e=>({components:{Slider:a},setup:()=>({args:e}),template:'<Slider v-bind="args" />'})},h={args:{modelValue:60,label:"Large slider",size:"lg",showValue:!0},render:e=>({components:{Slider:a},setup:()=>({args:e}),template:'<Slider v-bind="args" />'})},p={args:{modelValue:25,min:0,max:50,step:5,label:"Price",showValue:!0},render:e=>({components:{Slider:a},setup:()=>({args:e}),template:'<Slider v-bind="args" />'})},f={args:{modelValue:70,label:"Brightness",showValue:!0,hint:"Adjust screen brightness level"},render:e=>({components:{Slider:a},setup:()=>({args:e}),template:'<Slider v-bind="args" />'})},v={args:{modelValue:5,label:"Minimum order",showValue:!0,error:"Value must be at least 10"},render:e=>({components:{Slider:a},setup:()=>({args:e}),template:'<Slider v-bind="args" />'})},V={args:{modelValue:50,label:"Disabled slider",showValue:!0,disabled:!0},render:e=>({components:{Slider:a},setup:()=>({args:e}),template:'<Slider v-bind="args" />'})};var z,k,q;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    modelValue: 50
  },
  render: args => ({
    components: {
      Slider
    },
    setup: () => ({
      args
    }),
    template: '<Slider v-bind="args" />'
  })
}`,...(q=(k=c.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var B,C,D;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    modelValue: 30,
    label: 'Volume',
    showValue: true
  },
  render: args => ({
    components: {
      Slider
    },
    setup: () => ({
      args
    }),
    template: '<Slider v-bind="args" />'
  })
}`,...(D=(C=b.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var L,N,W;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    modelValue: 40,
    label: 'Small slider',
    size: 'sm',
    showValue: true
  },
  render: args => ({
    components: {
      Slider
    },
    setup: () => ({
      args
    }),
    template: '<Slider v-bind="args" />'
  })
}`,...(W=(N=g.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var j,$,E;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    modelValue: 60,
    label: 'Large slider',
    size: 'lg',
    showValue: true
  },
  render: args => ({
    components: {
      Slider
    },
    setup: () => ({
      args
    }),
    template: '<Slider v-bind="args" />'
  })
}`,...(E=($=h.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var I,A,H;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    modelValue: 25,
    min: 0,
    max: 50,
    step: 5,
    label: 'Price',
    showValue: true
  },
  render: args => ({
    components: {
      Slider
    },
    setup: () => ({
      args
    }),
    template: '<Slider v-bind="args" />'
  })
}`,...(H=(A=p.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var P,F,M;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    modelValue: 70,
    label: 'Brightness',
    showValue: true,
    hint: 'Adjust screen brightness level'
  },
  render: args => ({
    components: {
      Slider
    },
    setup: () => ({
      args
    }),
    template: '<Slider v-bind="args" />'
  })
}`,...(M=(F=f.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var R,O,T;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    modelValue: 5,
    label: 'Minimum order',
    showValue: true,
    error: 'Value must be at least 10'
  },
  render: args => ({
    components: {
      Slider
    },
    setup: () => ({
      args
    }),
    template: '<Slider v-bind="args" />'
  })
}`,...(T=(O=v.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var G,J,K;V.parameters={...V.parameters,docs:{...(G=V.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    modelValue: 50,
    label: 'Disabled slider',
    showValue: true,
    disabled: true
  },
  render: args => ({
    components: {
      Slider
    },
    setup: () => ({
      args
    }),
    template: '<Slider v-bind="args" />'
  })
}`,...(K=(J=V.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const he=["Default","WithLabel","Small","Large","CustomRange","WithHint","WithError","Disabled"];export{p as CustomRange,c as Default,V as Disabled,h as Large,g as Small,v as WithError,f as WithHint,b as WithLabel,he as __namedExportsOrder,ge as default};
