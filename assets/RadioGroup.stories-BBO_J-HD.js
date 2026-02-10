import{d as H,b as r,t as c,u as b,f as m,F as $,e as L,n as f,A as T,o as t,v as J}from"./vue.esm-bundler-DtUWbB1b.js";const K=["disabled"],M={key:0,class:"mb-1 text-sm font-medium text-gray-700"},Q=["aria-label"],U=["name","value","checked","disabled","onChange"],X={key:1,class:"text-sm text-red-600",role:"alert"},R=H({__name:"RadioGroup",props:{modelValue:{default:""},name:{default:""},label:{default:""},options:{},disabled:{type:Boolean,default:!1},error:{default:""},orientation:{default:"vertical"}},emits:["update:modelValue"],setup(e,{emit:E}){const G=e,P=E,W=T(),I=J(()=>G.name||`radio-group-${W}`);function j(p){P("update:modelValue",p)}return(p,Y)=>(t(),r("fieldset",{disabled:e.disabled,class:"flex flex-col gap-2"},[e.label?(t(),r("legend",M,c(e.label),1)):b("",!0),m("div",{class:f(["flex gap-3",e.orientation==="vertical"?"flex-col":"flex-row flex-wrap"]),role:"radiogroup","aria-label":e.label},[(t(!0),r($,null,L(e.options,a=>(t(),r("label",{key:a.value,class:f(["inline-flex cursor-pointer items-center gap-2 text-sm text-gray-700",(a.disabled||e.disabled)&&"cursor-not-allowed opacity-50"])},[m("input",{type:"radio",name:I.value,value:a.value,checked:e.modelValue===a.value,disabled:a.disabled||e.disabled,class:"h-4 w-4 border-gray-300 accent-gray-900 focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2",onChange:Z=>j(a.value)},null,40,U),m("span",null,c(a.label),1)],2))),128))],10,Q),e.error?(t(),r("p",X,c(e.error),1)):b("",!0)],8,K))}});R.__docgenInfo={exportName:"default",displayName:"RadioGroup",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]},defaultValue:{func:!1,value:"''"}},{name:"name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"options",required:!0,type:{name:"Array",elements:[{name:"RadioOption"}]}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"orientation",required:!1,type:{name:"union",elements:[{name:'"vertical"'},{name:'"horizontal"'}]},defaultValue:{func:!1,value:"'vertical'"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/radio-group/RadioGroup.vue"]};const l=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"}],ee={title:"Form/RadioGroup",component:R,tags:["autodocs"],argTypes:{orientation:{control:"select",options:["vertical","horizontal"]},disabled:{control:"boolean"}}},n={args:{label:"Favorite Fruit",options:l}},o={args:{label:"Favorite Fruit",options:l,orientation:"horizontal"}},s={args:{label:"Favorite Fruit",options:l,modelValue:"banana"}},i={args:{label:"Favorite Fruit",options:l,error:"Please select an option"}},u={args:{label:"Favorite Fruit",options:l,modelValue:"apple",disabled:!0}},d={args:{label:"Favorite Fruit",options:[{label:"Apple",value:"apple"},{label:"Banana (out of stock)",value:"banana",disabled:!0},{label:"Cherry",value:"cherry"}]}};var g,v,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Favorite Fruit',
    options: fruitOptions
  }
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var F,h,V;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Favorite Fruit',
    options: fruitOptions,
    orientation: 'horizontal'
  }
}`,...(V=(h=o.parameters)==null?void 0:h.docs)==null?void 0:V.source}}};var x,k,O;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Favorite Fruit',
    options: fruitOptions,
    modelValue: 'banana'
  }
}`,...(O=(k=s.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var C,q,z;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Favorite Fruit',
    options: fruitOptions,
    error: 'Please select an option'
  }
}`,...(z=(q=i.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var B,D,S;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Favorite Fruit',
    options: fruitOptions,
    modelValue: 'apple',
    disabled: true
  }
}`,...(S=(D=u.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var w,A,N;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Favorite Fruit',
    options: [{
      label: 'Apple',
      value: 'apple'
    }, {
      label: 'Banana (out of stock)',
      value: 'banana',
      disabled: true
    }, {
      label: 'Cherry',
      value: 'cherry'
    }]
  }
}`,...(N=(A=d.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};const ae=["Default","Horizontal","Preselected","WithError","Disabled","WithDisabledOption"];export{n as Default,u as Disabled,o as Horizontal,s as Preselected,d as WithDisabledOption,i as WithError,ae as __namedExportsOrder,ee as default};
