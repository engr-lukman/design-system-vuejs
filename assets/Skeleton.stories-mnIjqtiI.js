import{d as M,b as r,F as N,e as H,x as u,n as x,v as p,o as n}from"./vue.esm-bundler-YEuhxn0F.js";const t=M({__name:"Skeleton",props:{variant:{default:"text"},width:{default:"100%"},height:{default:""},lines:{default:1},animate:{type:Boolean,default:!0}},setup(e){const a=e,m=p(()=>["bg-gray-200",a.animate&&"animate-pulse"]),g=p(()=>{switch(a.variant){case"circular":return"rounded-full aspect-square";case"rectangular":return"";case"rounded":return"rounded-lg";case"text":default:return"rounded"}}),v=p(()=>{if(a.height)return a.height;switch(a.variant){case"circular":return a.width;case"text":return"1rem";default:return"100px"}});return(I,O)=>e.variant==="text"&&e.lines>1?(n(),r("div",{key:0,class:"flex flex-col gap-2",style:u({width:e.width})},[(n(!0),r(N,null,H(e.lines,h=>(n(),r("div",{key:h,class:x([...m.value,g.value]),style:u({width:h===e.lines?"75%":"100%",height:v.value})},null,6))),128))],4)):(n(),r("div",{key:1,class:x([...m.value,g.value]),style:u({width:e.width,height:v.value})},null,6))}});t.__docgenInfo={exportName:"default",displayName:"Skeleton",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"SkeletonVariant"},defaultValue:{func:!1,value:"'text'"}},{name:"width",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'100%'"}},{name:"height",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"lines",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"animate",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/skeleton/Skeleton.vue"]};const G={title:"Data Display/Skeleton",component:t,tags:["autodocs"],argTypes:{variant:{control:"select",options:["text","circular","rectangular","rounded"]},width:{control:"text"},height:{control:"text"},lines:{control:{type:"number",min:1,max:10}},animate:{control:"boolean"}}},s={args:{variant:"text",width:"200px"},render:e=>({components:{Skeleton:t},setup:()=>({args:e}),template:'<Skeleton v-bind="args" />'})},o={args:{variant:"text",lines:4,width:"300px"},render:e=>({components:{Skeleton:t},setup:()=>({args:e}),template:'<Skeleton v-bind="args" />'})},l={args:{variant:"circular",width:"48px"},render:e=>({components:{Skeleton:t},setup:()=>({args:e}),template:'<Skeleton v-bind="args" />'})},i={args:{variant:"rectangular",width:"300px",height:"150px"},render:e=>({components:{Skeleton:t},setup:()=>({args:e}),template:'<Skeleton v-bind="args" />'})},d={args:{variant:"rounded",width:"300px",height:"150px"},render:e=>({components:{Skeleton:t},setup:()=>({args:e}),template:'<Skeleton v-bind="args" />'})},c={render:()=>({components:{Skeleton:t},template:`
      <div class="w-72 rounded-lg border border-gray-200 p-4 space-y-3">
        <Skeleton variant="rounded" width="100%" height="120px" />
        <Skeleton variant="text" width="70%" />
        <Skeleton variant="text" lines="2" />
        <div class="flex items-center gap-3 pt-2">
          <Skeleton variant="circular" width="32px" />
          <Skeleton variant="text" width="100px" />
        </div>
      </div>
    `})};var S,k,f;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    width: '200px'
  },
  render: args => ({
    components: {
      Skeleton
    },
    setup: () => ({
      args
    }),
    template: '<Skeleton v-bind="args" />'
  })
}`,...(f=(k=s.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var w,y,b;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    lines: 4,
    width: '300px'
  },
  render: args => ({
    components: {
      Skeleton
    },
    setup: () => ({
      args
    }),
    template: '<Skeleton v-bind="args" />'
  })
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var C,q,V;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'circular',
    width: '48px'
  },
  render: args => ({
    components: {
      Skeleton
    },
    setup: () => ({
      args
    }),
    template: '<Skeleton v-bind="args" />'
  })
}`,...(V=(q=l.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var R,B,F;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'rectangular',
    width: '300px',
    height: '150px'
  },
  render: args => ({
    components: {
      Skeleton
    },
    setup: () => ({
      args
    }),
    template: '<Skeleton v-bind="args" />'
  })
}`,...(F=(B=i.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var L,T,j;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'rounded',
    width: '300px',
    height: '150px'
  },
  render: args => ({
    components: {
      Skeleton
    },
    setup: () => ({
      args
    }),
    template: '<Skeleton v-bind="args" />'
  })
}`,...(j=(T=d.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var z,D,E;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Skeleton
    },
    template: \`
      <div class="w-72 rounded-lg border border-gray-200 p-4 space-y-3">
        <Skeleton variant="rounded" width="100%" height="120px" />
        <Skeleton variant="text" width="70%" />
        <Skeleton variant="text" lines="2" />
        <div class="flex items-center gap-3 pt-2">
          <Skeleton variant="circular" width="32px" />
          <Skeleton variant="text" width="100px" />
        </div>
      </div>
    \`
  })
}`,...(E=(D=c.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const J=["Text","MultiLine","Circular","Rectangular","Rounded","CardSkeleton"];export{c as CardSkeleton,l as Circular,o as MultiLine,i as Rectangular,d as Rounded,s as Text,J as __namedExportsOrder,G as default};
