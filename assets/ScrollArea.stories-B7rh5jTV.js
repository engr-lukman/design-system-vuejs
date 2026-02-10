import{d as p,b as g,f as u,g as v,x as b,o as y,n as x}from"./vue.esm-bundler-DtUWbB1b.js";const f={class:x(["h-full overflow-y-auto","scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400","[&::-webkit-scrollbar]:w-2","[&::-webkit-scrollbar-track]:bg-transparent","[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300","[&::-webkit-scrollbar-thumb]:hover:bg-gray-400"])},s=p({__name:"ScrollArea",props:{maxHeight:{default:"300px"},size:{default:"md"}},setup(e){return(t,h)=>(y(),g("div",{class:"relative overflow-hidden rounded-lg",style:b({maxHeight:e.maxHeight})},[u("div",f,[v(t.$slots,"default")])],4))}});s.__docgenInfo={exportName:"default",displayName:"ScrollArea",description:"",tags:{},props:[{name:"maxHeight",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'300px'"}},{name:"size",required:!1,type:{name:"ScrollAreaSize"},defaultValue:{func:!1,value:"'md'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/scroll-area/ScrollArea.vue"]};const A={title:"Layout/ScrollArea",component:s,tags:["autodocs"],argTypes:{maxHeight:{control:"text"}}},m=Array.from({length:30},(e,t)=>`Item ${t+1}`),r={args:{maxHeight:"200px"},render:e=>({components:{ScrollArea:s},setup:()=>({args:e,items:m}),template:`
      <div class="w-64 rounded-lg border border-gray-200">
        <ScrollArea v-bind="args">
          <div class="p-4 space-y-2">
            <div v-for="item in items" :key="item" class="rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">{{ item }}</div>
          </div>
        </ScrollArea>
      </div>
    `})},a={args:{maxHeight:"400px"},render:e=>({components:{ScrollArea:s},setup:()=>({args:e,items:m}),template:`
      <div class="w-64 rounded-lg border border-gray-200">
        <ScrollArea v-bind="args">
          <div class="p-4 space-y-2">
            <div v-for="item in items" :key="item" class="rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">{{ item }}</div>
          </div>
        </ScrollArea>
      </div>
    `})};var o,l,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    maxHeight: '200px'
  },
  render: args => ({
    components: {
      ScrollArea
    },
    setup: () => ({
      args,
      items
    }),
    template: \`
      <div class="w-64 rounded-lg border border-gray-200">
        <ScrollArea v-bind="args">
          <div class="p-4 space-y-2">
            <div v-for="item in items" :key="item" class="rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">{{ item }}</div>
          </div>
        </ScrollArea>
      </div>
    \`
  })
}`,...(n=(l=r.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var d,i,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    maxHeight: '400px'
  },
  render: args => ({
    components: {
      ScrollArea
    },
    setup: () => ({
      args,
      items
    }),
    template: \`
      <div class="w-64 rounded-lg border border-gray-200">
        <ScrollArea v-bind="args">
          <div class="p-4 space-y-2">
            <div v-for="item in items" :key="item" class="rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">{{ item }}</div>
          </div>
        </ScrollArea>
      </div>
    \`
  })
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const k=["Default","Tall"];export{r as Default,a as Tall,k as __namedExportsOrder,A as default};
