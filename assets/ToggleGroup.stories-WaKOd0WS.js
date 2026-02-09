import{d as X,b,F as Y,e as Z,n as T,v as ee,o as v,t as ae}from"./vue.esm-bundler-YEuhxn0F.js";const re=["aria-pressed","disabled","onClick"],s=X({__name:"ToggleGroup",props:{modelValue:{default:""},items:{},multiple:{type:Boolean,default:!1},variant:{default:"outline"},size:{default:"md"},disabled:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:J}){const a=e,y=J,K={sm:"px-2.5 py-1 text-xs",md:"px-3.5 py-1.5 text-sm",lg:"px-5 py-2.5 text-base"};function f(r){return a.multiple&&Array.isArray(a.modelValue)?a.modelValue.includes(r):a.modelValue===r}function P(r){const t=f(r.value),l=a.disabled||r.disabled;return["inline-flex items-center justify-center font-medium transition-colors duration-150","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2","first:rounded-l-lg last:rounded-r-lg","border-y first:border-l last:border-r",K[a.size],a.fullWidth?"flex-1":"",l?"opacity-50 cursor-not-allowed":"cursor-pointer",t&&a.variant==="solid"?"bg-gray-900 text-white border-gray-900":t&&a.variant==="outline"?"bg-gray-100 text-gray-900 border-gray-300":"bg-white text-gray-700 border-gray-300 hover:bg-gray-50"]}function Q(r){if(!(a.disabled||r.disabled))if(a.multiple){const t=Array.isArray(a.modelValue)?[...a.modelValue]:[],l=t.indexOf(r.value);l>=0?t.splice(l,1):t.push(r.value),y("update:modelValue",t)}else y("update:modelValue",f(r.value)?"":r.value)}const U=ee(()=>["inline-flex",a.fullWidth?"w-full":""]);return(r,t)=>(v(),b("div",{class:T(U.value),role:"group"},[(v(!0),b(Y,null,Z(e.items,l=>(v(),b("button",{key:l.value,type:"button",class:T(P(l)),"aria-pressed":f(l.value),disabled:e.disabled||l.disabled,onClick:le=>Q(l)},ae(l.label),11,re))),128))],2))}});s.__docgenInfo={exportName:"default",displayName:"ToggleGroup",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]}]},defaultValue:{func:!1,value:"''"}},{name:"items",required:!0,type:{name:"Array",elements:[{name:"ToggleGroupItem"}]}},{name:"multiple",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"variant",required:!1,type:{name:"ToggleGroupVariant"},defaultValue:{func:!1,value:"'outline'"}},{name:"size",required:!1,type:{name:"ToggleGroupSize"},defaultValue:{func:!1,value:"'md'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"fullWidth",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]}]}}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/toggle-group/ToggleGroup.vue"]};const c=[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}],$=[{label:"Grid",value:"grid"},{label:"List",value:"list"},{label:"Board",value:"board"}],H=[{label:"Mon",value:"mon"},{label:"Tue",value:"tue"},{label:"Wed",value:"wed"},{label:"Thu",value:"thu"},{label:"Fri",value:"fri"},{label:"Sat",value:"sat",disabled:!0},{label:"Sun",value:"sun",disabled:!0}],te={title:"Form/ToggleGroup",component:s,tags:["autodocs"],argTypes:{variant:{control:"select",options:["outline","solid"]},size:{control:"select",options:["sm","md","lg"]},multiple:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"}}},o={args:{items:c,modelValue:"center"},render:e=>({components:{ToggleGroup:s},setup:()=>({args:e}),template:'<ToggleGroup v-bind="args" />'})},u={args:{items:$,modelValue:"grid",variant:"solid"},render:e=>({components:{ToggleGroup:s},setup:()=>({args:e}),template:'<ToggleGroup v-bind="args" />'})},n={args:{items:c,modelValue:"left",size:"sm"},render:e=>({components:{ToggleGroup:s},setup:()=>({args:e}),template:'<ToggleGroup v-bind="args" />'})},i={args:{items:c,modelValue:"right",size:"lg"},render:e=>({components:{ToggleGroup:s},setup:()=>({args:e}),template:'<ToggleGroup v-bind="args" />'})},d={args:{items:H,modelValue:["mon","wed","fri"],multiple:!0},render:e=>({components:{ToggleGroup:s},setup:()=>({args:e}),template:'<ToggleGroup v-bind="args" />'})},m={args:{items:H,modelValue:["mon","tue"],multiple:!0,variant:"solid"},render:e=>({components:{ToggleGroup:s},setup:()=>({args:e}),template:'<ToggleGroup v-bind="args" />'})},g={args:{items:$,modelValue:"list",fullWidth:!0},render:e=>({components:{ToggleGroup:s},setup:()=>({args:e}),template:'<ToggleGroup v-bind="args" />'})},p={args:{items:c,modelValue:"center",disabled:!0},render:e=>({components:{ToggleGroup:s},setup:()=>({args:e}),template:'<ToggleGroup v-bind="args" />'})};var G,V,h;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    items: alignItems,
    modelValue: 'center'
  },
  render: args => ({
    components: {
      ToggleGroup
    },
    setup: () => ({
      args
    }),
    template: '<ToggleGroup v-bind="args" />'
  })
}`,...(h=(V=o.parameters)==null?void 0:V.docs)==null?void 0:h.source}}};var x,S,I;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    items: viewItems,
    modelValue: 'grid',
    variant: 'solid'
  },
  render: args => ({
    components: {
      ToggleGroup
    },
    setup: () => ({
      args
    }),
    template: '<ToggleGroup v-bind="args" />'
  })
}`,...(I=(S=u.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var w,z,W;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    items: alignItems,
    modelValue: 'left',
    size: 'sm'
  },
  render: args => ({
    components: {
      ToggleGroup
    },
    setup: () => ({
      args
    }),
    template: '<ToggleGroup v-bind="args" />'
  })
}`,...(W=(z=n.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var A,C,_;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    items: alignItems,
    modelValue: 'right',
    size: 'lg'
  },
  render: args => ({
    components: {
      ToggleGroup
    },
    setup: () => ({
      args
    }),
    template: '<ToggleGroup v-bind="args" />'
  })
}`,...(_=(C=i.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var q,F,k;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    items: dayItems,
    modelValue: ['mon', 'wed', 'fri'],
    multiple: true
  },
  render: args => ({
    components: {
      ToggleGroup
    },
    setup: () => ({
      args
    }),
    template: '<ToggleGroup v-bind="args" />'
  })
}`,...(k=(F=d.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var B,D,L;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    items: dayItems,
    modelValue: ['mon', 'tue'],
    multiple: true,
    variant: 'solid'
  },
  render: args => ({
    components: {
      ToggleGroup
    },
    setup: () => ({
      args
    }),
    template: '<ToggleGroup v-bind="args" />'
  })
}`,...(L=(D=m.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var M,j,E;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    items: viewItems,
    modelValue: 'list',
    fullWidth: true
  },
  render: args => ({
    components: {
      ToggleGroup
    },
    setup: () => ({
      args
    }),
    template: '<ToggleGroup v-bind="args" />'
  })
}`,...(E=(j=g.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var N,O,R;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    items: alignItems,
    modelValue: 'center',
    disabled: true
  },
  render: args => ({
    components: {
      ToggleGroup
    },
    setup: () => ({
      args
    }),
    template: '<ToggleGroup v-bind="args" />'
  })
}`,...(R=(O=p.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const oe=["Default","Solid","Small","Large","Multiple","MultipleSolid","FullWidth","Disabled"];export{o as Default,p as Disabled,g as FullWidth,i as Large,d as Multiple,m as MultipleSolid,n as Small,u as Solid,oe as __namedExportsOrder,te as default};
