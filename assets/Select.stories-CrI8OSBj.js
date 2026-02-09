import{d as G,b as l,z as t,j as J,t as o,u as v,f as n,n as K,F as Q,e as X,v as Y,A as _,o as s}from"./vue.esm-bundler-YEuhxn0F.js";const ee={class:"flex flex-col gap-1.5"},ae=["for"],le={key:0,class:"text-red-500","aria-hidden":"true"},se={class:"relative"},re=["id","value","disabled","required","aria-invalid","aria-describedby"],te={value:"",disabled:""},ne=["value","disabled"],oe=["id"],ie=["id"],M=G({__name:"Select",props:{modelValue:{default:""},label:{default:""},options:{},placeholder:{default:"Select an option"},size:{default:"md"},disabled:{type:Boolean,default:!1},error:{default:""},hint:{default:""},required:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:A}){const h=e,y=A,r=_(),R={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-sm",lg:"px-4 py-3 text-lg"},U=Y(()=>["block w-full appearance-none rounded-md border bg-white transition-colors duration-150","pr-10 bg-no-repeat bg-right","focus:outline-none focus:ring-2 focus:ring-offset-0","disabled:bg-gray-100 disabled:cursor-not-allowed",R[h.size],h.error?"border-red-500 focus:border-red-500 focus:ring-red-500/20":"border-gray-300 focus-visible:ring-2 focus-visible:ring-gray-950"]);function Z(S){const a=S.target.value;y("update:modelValue",a),y("change",a)}return(S,f)=>(s(),l("div",ee,[e.label?(s(),l("label",{key:0,for:t(r),class:"text-sm font-medium text-gray-700"},[J(o(e.label)+" ",1),e.required?(s(),l("span",le,"*")):v("",!0)],8,ae)):v("",!0),n("div",se,[n("select",{id:t(r),value:e.modelValue,disabled:e.disabled,required:e.required,class:K(U.value),"aria-invalid":!!e.error,"aria-describedby":e.error?`${t(r)}-error`:e.hint?`${t(r)}-hint`:void 0,onChange:Z},[n("option",te,o(e.placeholder),1),(s(!0),l(Q,null,X(e.options,a=>(s(),l("option",{key:a.value,value:a.value,disabled:a.disabled},o(a.label),9,ne))),128))],42,re),f[0]||(f[0]=n("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"},[n("svg",{class:"h-4 w-4 text-gray-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[n("path",{"fill-rule":"evenodd",d:"M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"})])],-1))]),e.error?(s(),l("p",{key:1,id:`${t(r)}-error`,class:"text-sm text-red-600",role:"alert"},o(e.error),9,oe)):e.hint?(s(),l("p",{key:2,id:`${t(r)}-hint`,class:"text-sm text-gray-500"},o(e.hint),9,ie)):v("",!0)]))}});M.__docgenInfo={exportName:"default",displayName:"Select",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]},defaultValue:{func:!1,value:"''"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"options",required:!0,type:{name:"Array",elements:[{name:"SelectOption"}]}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Select an option'"}},{name:"size",required:!1,type:{name:"SelectSize"},defaultValue:{func:!1,value:"'md'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hint",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}},{name:"change",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/select/Select.vue"]};const i=[{label:"Option One",value:"one"},{label:"Option Two",value:"two"},{label:"Option Three",value:"three"},{label:"Disabled Option",value:"disabled",disabled:!0}],ue={title:"Form/Select",component:M,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},required:{control:"boolean"}}},d={args:{label:"Choose option",options:i}},u={args:{label:"Country",options:[{label:"Bangladesh",value:"bd"},{label:"India",value:"in"},{label:"United States",value:"us"}],hint:"Select your country of residence"}},c={args:{label:"Category",options:i,error:"Please select a category"}},m={args:{label:"Priority",options:[{label:"Low",value:"low"},{label:"Medium",value:"medium"},{label:"High",value:"high"}],required:!0}},p={args:{label:"Disabled Select",options:i,modelValue:"one",disabled:!0}},b={args:{label:"Small",options:i,size:"sm"}},g={args:{label:"Large",options:i,size:"lg"}};var x,q,V;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Choose option',
    options: sampleOptions
  }
}`,...(V=(q=d.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var w,C,O;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Country',
    options: [{
      label: 'Bangladesh',
      value: 'bd'
    }, {
      label: 'India',
      value: 'in'
    }, {
      label: 'United States',
      value: 'us'
    }],
    hint: 'Select your country of residence'
  }
}`,...(O=(C=u.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var z,k,L;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Category',
    options: sampleOptions,
    error: 'Please select a category'
  }
}`,...(L=(k=c.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var B,D,I;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Priority',
    options: [{
      label: 'Low',
      value: 'low'
    }, {
      label: 'Medium',
      value: 'medium'
    }, {
      label: 'High',
      value: 'high'
    }],
    required: true
  }
}`,...(I=(D=m.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var N,E,F;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Select',
    options: sampleOptions,
    modelValue: 'one',
    disabled: true
  }
}`,...(F=(E=p.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var H,P,T;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Small',
    options: sampleOptions,
    size: 'sm'
  }
}`,...(T=(P=b.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var W,$,j;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Large',
    options: sampleOptions,
    size: 'lg'
  }
}`,...(j=($=g.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};const ce=["Default","WithHint","WithError","Required","Disabled","Small","Large"];export{d as Default,p as Disabled,g as Large,m as Required,b as Small,c as WithError,u as WithHint,ce as __namedExportsOrder,ue as default};
