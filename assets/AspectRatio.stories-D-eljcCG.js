import{d as b,b as x,f as A,g as R,x as y,v as w,o as _}from"./vue.esm-bundler-DtUWbB1b.js";const h={class:"absolute inset-0"},t=b({__name:"AspectRatio",props:{ratio:{default:16/9}},setup(e){const g=e,f=w(()=>`${1/g.ratio*100}%`);return(v,j)=>(_(),x("div",{class:"relative w-full",style:y({paddingBottom:f.value})},[A("div",h,[R(v.$slots,"default")])],4))}});t.__docgenInfo={exportName:"default",displayName:"AspectRatio",description:"",tags:{},props:[{name:"ratio",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"16 / 9"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/aspect-ratio/AspectRatio.vue"]};const B={title:"Layout/AspectRatio",component:t,tags:["autodocs"],argTypes:{ratio:{control:{type:"number",min:.1,max:4,step:.1}}}},s={args:{ratio:16/9},render:e=>({components:{AspectRatio:t},setup:()=>({args:e}),template:`
      <div class="w-96">
        <AspectRatio v-bind="args">
          <div class="flex h-full w-full items-center justify-center rounded-lg bg-gray-100 text-sm text-gray-500">16:9</div>
        </AspectRatio>
      </div>
    `})},a={args:{ratio:1},render:e=>({components:{AspectRatio:t},setup:()=>({args:e}),template:`
      <div class="w-64">
        <AspectRatio v-bind="args">
          <div class="flex h-full w-full items-center justify-center rounded-lg bg-blue-50 text-sm text-blue-600">1:1</div>
        </AspectRatio>
      </div>
    `})},n={args:{ratio:3/4},render:e=>({components:{AspectRatio:t},setup:()=>({args:e}),template:`
      <div class="w-48">
        <AspectRatio v-bind="args">
          <div class="flex h-full w-full items-center justify-center rounded-lg bg-amber-50 text-sm text-amber-600">3:4</div>
        </AspectRatio>
      </div>
    `})};var r,o,i;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    ratio: 16 / 9
  },
  render: args => ({
    components: {
      AspectRatio
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="w-96">
        <AspectRatio v-bind="args">
          <div class="flex h-full w-full items-center justify-center rounded-lg bg-gray-100 text-sm text-gray-500">16:9</div>
        </AspectRatio>
      </div>
    \`
  })
}`,...(i=(o=s.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var c,l,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ratio: 1
  },
  render: args => ({
    components: {
      AspectRatio
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="w-64">
        <AspectRatio v-bind="args">
          <div class="flex h-full w-full items-center justify-center rounded-lg bg-blue-50 text-sm text-blue-600">1:1</div>
        </AspectRatio>
      </div>
    \`
  })
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,u,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ratio: 3 / 4
  },
  render: args => ({
    components: {
      AspectRatio
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="w-48">
        <AspectRatio v-bind="args">
          <div class="flex h-full w-full items-center justify-center rounded-lg bg-amber-50 text-sm text-amber-600">3:4</div>
        </AspectRatio>
      </div>
    \`
  })
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const k=["Widescreen","Square","Portrait"];export{n as Portrait,a as Square,s as Widescreen,k as __namedExportsOrder,B as default};
