import{d as y,b as o,F as S,f as l,t as h,n as p,o as i}from"./vue.esm-bundler-DtUWbB1b.js";const w=["role","aria-orientation"],C={class:"px-3 text-sm text-gray-500"},a=y({__name:"Separator",props:{orientation:{default:"horizontal"},decorative:{type:Boolean,default:!0},label:{default:""}},setup(e){return(z,t)=>(i(),o("div",{role:e.decorative?"none":"separator","aria-orientation":e.decorative?void 0:e.orientation,class:p([e.orientation==="horizontal"?"flex w-full items-center":"inline-flex h-full flex-col items-center"])},[e.label&&e.orientation==="horizontal"?(i(),o(S,{key:0},[t[0]||(t[0]=l("div",{class:"h-px flex-1 bg-gray-200"},null,-1)),l("span",C,h(e.label),1),t[1]||(t[1]=l("div",{class:"h-px flex-1 bg-gray-200"},null,-1))],64)):(i(),o("div",{key:1,class:p(["bg-gray-200",e.orientation==="horizontal"?"h-px w-full":"w-px self-stretch"])},null,2))],10,w))}});a.__docgenInfo={exportName:"default",displayName:"Separator",description:"",tags:{},props:[{name:"orientation",required:!1,type:{name:"SeparatorOrientation"},defaultValue:{func:!1,value:"'horizontal'"}},{name:"decorative",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/separator/Separator.vue"]};const k={title:"Layout/Separator",component:a,tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},decorative:{control:"boolean"},label:{control:"text"}}},n={render:e=>({components:{Separator:a},setup:()=>({args:e}),template:`
      <div class="space-y-4 w-80">
        <p class="text-sm text-gray-700">Content above</p>
        <Separator v-bind="args" />
        <p class="text-sm text-gray-700">Content below</p>
      </div>
    `})},r={args:{orientation:"vertical"},render:e=>({components:{Separator:a},setup:()=>({args:e}),template:`
      <div class="flex h-6 items-center gap-3">
        <span class="text-sm">Home</span>
        <Separator v-bind="args" />
        <span class="text-sm">About</span>
        <Separator v-bind="args" />
        <span class="text-sm">Contact</span>
      </div>
    `})},s={args:{label:"OR"},render:e=>({components:{Separator:a},setup:()=>({args:e}),template:`
      <div class="w-80 space-y-4">
        <button class="w-full rounded-lg bg-blue-600 px-4 py-2 text-white">Continue with Google</button>
        <Separator v-bind="args" />
        <button class="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700">Sign in with email</button>
      </div>
    `})};var c,d,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Separator
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="space-y-4 w-80">
        <p class="text-sm text-gray-700">Content above</p>
        <Separator v-bind="args" />
        <p class="text-sm text-gray-700">Content below</p>
      </div>
    \`
  })
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,g,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  render: args => ({
    components: {
      Separator
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="flex h-6 items-center gap-3">
        <span class="text-sm">Home</span>
        <Separator v-bind="args" />
        <span class="text-sm">About</span>
        <Separator v-bind="args" />
        <span class="text-sm">Contact</span>
      </div>
    \`
  })
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,x,f;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'OR'
  },
  render: args => ({
    components: {
      Separator
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="w-80 space-y-4">
        <button class="w-full rounded-lg bg-blue-600 px-4 py-2 text-white">Continue with Google</button>
        <Separator v-bind="args" />
        <button class="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700">Sign in with email</button>
      </div>
    \`
  })
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const B=["Horizontal","Vertical","WithLabel"];export{n as Horizontal,r as Vertical,s as WithLabel,B as __namedExportsOrder,k as default};
