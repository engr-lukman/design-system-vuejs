import{d as v,k as b,b as f,f as l,g as n,n as y,o as x}from"./vue.esm-bundler-YEuhxn0F.js";const w={class:"w-full"},h={class:"overflow-hidden"},a=v({__name:"Collapsible",props:{defaultOpen:{type:Boolean,default:!1}},setup(e){const t=b(e.defaultOpen);function o(){t.value=!t.value}return(i,O)=>(x(),f("div",w,[l("div",{onClick:o},[n(i.$slots,"trigger",{isOpen:t.value,toggle:o})]),l("div",{class:y(["grid transition-all duration-200",t.value?"grid-rows-[1fr] opacity-100":"grid-rows-[0fr] opacity-0"])},[l("div",h,[n(i.$slots,"default",{isOpen:t.value})])],2)]))}});a.__docgenInfo={exportName:"default",displayName:"Collapsible",description:"",tags:{},props:[{name:"defaultOpen",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"trigger",scoped:!0,bindings:[{name:"is-open",title:"binding"},{name:"toggle",title:"binding"}]},{name:"default",scoped:!0,bindings:[{name:"is-open",title:"binding"}]}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/collapsible/Collapsible.vue"]};const B={title:"Overlay/Collapsible",component:a,tags:["autodocs"],argTypes:{defaultOpen:{control:"boolean"}}},s={render:e=>({components:{Collapsible:a},setup:()=>({args:e}),template:`
      <div class="w-80">
        <Collapsible v-bind="args">
          <template #trigger="{ isOpen }">
            <button class="flex w-full items-center justify-between rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <span>3 items tagged</span>
              <svg :class="['h-4 w-4 transition-transform', isOpen && 'rotate-180']" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
            </button>
          </template>
          <div class="mt-2 space-y-2">
            <div class="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-600">@radix-ui/primitives</div>
            <div class="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-600">@radix-ui/colors</div>
            <div class="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-600">@stitches/react</div>
          </div>
        </Collapsible>
      </div>
    `})},r={args:{defaultOpen:!0},render:e=>({components:{Collapsible:a},setup:()=>({args:e}),template:`
      <div class="w-80">
        <Collapsible v-bind="args">
          <template #trigger="{ isOpen }">
            <button class="flex w-full items-center justify-between rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <span>Show details</span>
              <svg :class="['h-4 w-4 transition-transform', isOpen && 'rotate-180']" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
            </button>
          </template>
          <div class="mt-2 rounded-lg bg-gray-50 p-4 text-sm text-gray-600">
            This content is visible by default. You can toggle it by clicking the button above.
          </div>
        </Collapsible>
      </div>
    `})};var d,p,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Collapsible
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="w-80">
        <Collapsible v-bind="args">
          <template #trigger="{ isOpen }">
            <button class="flex w-full items-center justify-between rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <span>3 items tagged</span>
              <svg :class="['h-4 w-4 transition-transform', isOpen && 'rotate-180']" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
            </button>
          </template>
          <div class="mt-2 space-y-2">
            <div class="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-600">@radix-ui/primitives</div>
            <div class="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-600">@radix-ui/colors</div>
            <div class="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-600">@stitches/react</div>
          </div>
        </Collapsible>
      </div>
    \`
  })
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,c,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  },
  render: args => ({
    components: {
      Collapsible
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="w-80">
        <Collapsible v-bind="args">
          <template #trigger="{ isOpen }">
            <button class="flex w-full items-center justify-between rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <span>Show details</span>
              <svg :class="['h-4 w-4 transition-transform', isOpen && 'rotate-180']" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
            </button>
          </template>
          <div class="mt-2 rounded-lg bg-gray-50 p-4 text-sm text-gray-600">
            This content is visible by default. You can toggle it by clicking the button above.
          </div>
        </Collapsible>
      </div>
    \`
  })
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const L=["Default","DefaultOpen"];export{s as Default,r as DefaultOpen,L as __namedExportsOrder,B as default};
