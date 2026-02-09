import{d as H,b as o,t as b,u as f,f as w,x as J,n as P,v as K,o as l}from"./vue.esm-bundler-YEuhxn0F.js";const Q={class:"w-full"},R={key:0,class:"mb-1.5 flex items-center justify-between"},X={key:0,class:"text-sm font-medium text-gray-700"},Y={key:1,class:"text-sm text-gray-500 tabular-nums"},Z=["aria-valuenow","aria-valuemax","aria-label"],G=H({__name:"Progress",props:{value:{default:0},max:{default:100},size:{default:"md"},variant:{default:"default"},showValue:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},label:{default:""}},setup(e){const r=e,s=K(()=>Math.min(100,Math.max(0,r.value/r.max*100))),t={sm:"h-1.5",md:"h-2.5",lg:"h-4"},p={default:"bg-gray-900",success:"bg-green-600",warning:"bg-amber-500",danger:"bg-red-600"};return(ee,ae)=>(l(),o("div",Q,[e.label||e.showValue?(l(),o("div",R,[e.label?(l(),o("span",X,b(e.label),1)):f("",!0),e.showValue&&!e.indeterminate?(l(),o("span",Y,b(Math.round(s.value))+"% ",1)):f("",!0)])):f("",!0),w("div",{class:P(["w-full overflow-hidden rounded-full bg-gray-200",t[e.size]]),role:"progressbar","aria-valuenow":e.indeterminate?void 0:e.value,"aria-valuemin":0,"aria-valuemax":e.max,"aria-label":e.label||"Progress"},[w("div",{class:P(["rounded-full transition-all duration-300",t[e.size],p[e.variant],e.indeterminate&&"animate-indeterminate w-1/3"]),style:J(e.indeterminate?void 0:{width:`${s.value}%`})},null,6)],10,Z)]))}}),_=(e,r)=>{const s=e.__vccOpts||e;for(const[t,p]of r)s[t]=p;return s},a=_(G,[["__scopeId","data-v-04d5489e"]]);G.__docgenInfo={exportName:"default",displayName:"Progress",description:"",tags:{},props:[{name:"value",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"size",required:!1,type:{name:"ProgressSize"},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"ProgressVariant"},defaultValue:{func:!1,value:"'default'"}},{name:"showValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"indeterminate",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/progress/Progress.vue"]};const re={title:"Other/Progress",component:a,tags:["autodocs"],argTypes:{value:{control:{type:"number",min:0,max:100}},max:{control:"number"},size:{control:"select",options:["sm","md","lg"]},variant:{control:"select",options:["default","success","warning","danger"]},showValue:{control:"boolean"},indeterminate:{control:"boolean"},label:{control:"text"}}},n={args:{value:60},render:e=>({components:{Progress:a},setup:()=>({args:e}),template:'<div class="w-80"><Progress v-bind="args" /></div>'})},u={args:{value:45,label:"Upload progress",showValue:!0},render:e=>({components:{Progress:a},setup:()=>({args:e}),template:'<div class="w-80"><Progress v-bind="args" /></div>'})},d={args:{value:70,size:"sm"},render:e=>({components:{Progress:a},setup:()=>({args:e}),template:'<div class="w-80"><Progress v-bind="args" /></div>'})},i={args:{value:55,size:"lg",showValue:!0,label:"Storage"},render:e=>({components:{Progress:a},setup:()=>({args:e}),template:'<div class="w-80"><Progress v-bind="args" /></div>'})},c={args:{value:100,variant:"success",label:"Complete",showValue:!0},render:e=>({components:{Progress:a},setup:()=>({args:e}),template:'<div class="w-80"><Progress v-bind="args" /></div>'})},m={args:{value:75,variant:"warning",label:"Disk usage",showValue:!0},render:e=>({components:{Progress:a},setup:()=>({args:e}),template:'<div class="w-80"><Progress v-bind="args" /></div>'})},g={args:{value:90,variant:"danger",label:"CPU usage",showValue:!0},render:e=>({components:{Progress:a},setup:()=>({args:e}),template:'<div class="w-80"><Progress v-bind="args" /></div>'})},v={args:{indeterminate:!0,label:"Loading..."},render:e=>({components:{Progress:a},setup:()=>({args:e}),template:'<div class="w-80"><Progress v-bind="args" /></div>'})};var h,y,V;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    value: 60
  },
  render: args => ({
    components: {
      Progress
    },
    setup: () => ({
      args
    }),
    template: '<div class="w-80"><Progress v-bind="args" /></div>'
  })
}`,...(V=(y=n.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};var x,S,z;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    value: 45,
    label: 'Upload progress',
    showValue: true
  },
  render: args => ({
    components: {
      Progress
    },
    setup: () => ({
      args
    }),
    template: '<div class="w-80"><Progress v-bind="args" /></div>'
  })
}`,...(z=(S=u.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var k,C,q;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    value: 70,
    size: 'sm'
  },
  render: args => ({
    components: {
      Progress
    },
    setup: () => ({
      args
    }),
    template: '<div class="w-80"><Progress v-bind="args" /></div>'
  })
}`,...(q=(C=d.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};var D,L,B;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    value: 55,
    size: 'lg',
    showValue: true,
    label: 'Storage'
  },
  render: args => ({
    components: {
      Progress
    },
    setup: () => ({
      args
    }),
    template: '<div class="w-80"><Progress v-bind="args" /></div>'
  })
}`,...(B=(L=i.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var I,N,U;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    value: 100,
    variant: 'success',
    label: 'Complete',
    showValue: true
  },
  render: args => ({
    components: {
      Progress
    },
    setup: () => ({
      args
    }),
    template: '<div class="w-80"><Progress v-bind="args" /></div>'
  })
}`,...(U=(N=c.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var W,j,M;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    value: 75,
    variant: 'warning',
    label: 'Disk usage',
    showValue: true
  },
  render: args => ({
    components: {
      Progress
    },
    setup: () => ({
      args
    }),
    template: '<div class="w-80"><Progress v-bind="args" /></div>'
  })
}`,...(M=(j=m.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var O,E,F;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    value: 90,
    variant: 'danger',
    label: 'CPU usage',
    showValue: true
  },
  render: args => ({
    components: {
      Progress
    },
    setup: () => ({
      args
    }),
    template: '<div class="w-80"><Progress v-bind="args" /></div>'
  })
}`,...(F=(E=g.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var T,$,A;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    label: 'Loading...'
  },
  render: args => ({
    components: {
      Progress
    },
    setup: () => ({
      args
    }),
    template: '<div class="w-80"><Progress v-bind="args" /></div>'
  })
}`,...(A=($=v.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};const te=["Default","WithLabel","Small","Large","Success","Warning","Danger","Indeterminate"];export{g as Danger,n as Default,v as Indeterminate,i as Large,d as Small,c as Success,m as Warning,u as WithLabel,te as __namedExportsOrder,re as default};
