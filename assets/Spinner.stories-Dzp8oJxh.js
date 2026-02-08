import{d as I,b as n,e as s,n as g,t as L,f,g as N,o as t}from"./vue.esm-bundler-Db6pwSvC.js";const O=["aria-label"],T={class:"flex flex-col items-center gap-3"},E={key:0,class:"text-sm text-gray-600"},M=["aria-label"],P={key:0,class:"text-sm text-gray-600"},a=I({__name:"Spinner",props:{size:{default:"md"},variant:{default:"primary"},label:{default:"Loading..."},overlay:{type:Boolean,default:!1}},setup(e){const d={xs:"h-4 w-4",sm:"h-5 w-5",md:"h-8 w-8",lg:"h-12 w-12",xl:"h-16 w-16"},m={primary:"text-blue-600",white:"text-white",neutral:"text-gray-400"};return(u,r)=>e.overlay?(t(),n("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-white/80",role:"status","aria-label":e.label},[s("div",T,[(t(),n("svg",{class:g(["animate-spin",d[e.size],m[e.variant]]),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","aria-hidden":"true"},[...r[0]||(r[0]=[s("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),s("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"},null,-1)])],2)),e.label?(t(),n("span",E,L(e.label),1)):f("",!0)])],8,O)):(t(),n("div",{key:1,class:"inline-flex items-center gap-2",role:"status","aria-label":e.label},[(t(),n("svg",{class:g(["animate-spin",d[e.size],m[e.variant]]),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","aria-hidden":"true"},[...r[1]||(r[1]=[s("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),s("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"},null,-1)])],2)),u.$slots.default?(t(),n("span",P,[N(u.$slots,"default")])):f("",!0)],8,M))}});a.__docgenInfo={exportName:"default",displayName:"Spinner",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"SpinnerSize"},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"SpinnerVariant"},defaultValue:{func:!1,value:"'primary'"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Loading...'"}},{name:"overlay",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/components/ui/spinner/Spinner.vue"]};const $={title:"UI/Spinner",component:a,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]},variant:{control:"select",options:["primary","white","neutral"]},overlay:{control:"boolean"}}},i={args:{}},l={render:()=>({components:{Spinner:a},template:`
      <div class="flex items-center gap-4">
        <Spinner size="xs" />
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
        <Spinner size="xl" />
      </div>
    `})},o={render:()=>({components:{Spinner:a},template:"<Spinner>Loading data...</Spinner>"})},c={render:()=>({components:{Spinner:a},template:`
      <div class="flex items-center justify-center rounded-lg bg-gray-800 p-8">
        <Spinner variant="white" size="lg" />
      </div>
    `})},p={render:()=>({components:{Spinner:a},template:`
      <button class="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white" disabled>
        <Spinner size="xs" variant="white" label="" />
        Processing...
      </button>
    `})};var x,S,v;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {}
}`,...(v=(S=i.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var y,h,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Spinner
    },
    template: \`
      <div class="flex items-center gap-4">
        <Spinner size="xs" />
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
        <Spinner size="xl" />
      </div>
    \`
  })
}`,...(b=(h=l.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var w,z,k;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Spinner
    },
    template: '<Spinner>Loading data...</Spinner>'
  })
}`,...(k=(z=o.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var C,V,B;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Spinner
    },
    template: \`
      <div class="flex items-center justify-center rounded-lg bg-gray-800 p-8">
        <Spinner variant="white" size="lg" />
      </div>
    \`
  })
}`,...(B=(V=c.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var j,D,q;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Spinner
    },
    template: \`
      <button class="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white" disabled>
        <Spinner size="xs" variant="white" label="" />
        Processing...
      </button>
    \`
  })
}`,...(q=(D=p.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};const F=["Default","Sizes","WithText","OnDark","InButton"];export{i as Default,p as InButton,c as OnDark,l as Sizes,o as WithText,F as __namedExportsOrder,$ as default};
