import{d as _,b as o,g as l,f as m,e as j,n as k,o as p}from"./vue.esm-bundler-Db6pwSvC.js";const T={class:"rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden"},$={key:0,class:"border-b border-gray-200 px-6 py-4"},N={key:1,class:"border-t border-gray-200 px-6 py-4"},e=_({__name:"Card",props:{padding:{type:Boolean,default:!0}},setup(d){return(t,S)=>(p(),o("div",T,[t.$slots.header?(p(),o("div",$,[l(t.$slots,"header")])):m("",!0),j("div",{class:k(d.padding?"px-6 py-4":"")},[l(t.$slots,"default")],2),t.$slots.footer?(p(),o("div",N,[l(t.$slots,"footer")])):m("",!0)]))}});e.__docgenInfo={exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"padding",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],slots:[{name:"header"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/components/ui/card/Card.vue"]};const B={title:"UI/Card",component:e,tags:["autodocs"],argTypes:{padding:{control:"boolean"}}},a={render:()=>({components:{Card:e},template:`
      <Card>
        <p class="text-gray-600">This is a basic card with default padding.</p>
      </Card>
    `})},s={render:()=>({components:{Card:e},template:`
      <Card>
        <template #header>
          <h3 class="text-lg font-semibold text-gray-900">Card Title</h3>
        </template>
        <p class="text-gray-600">Card body content goes here.</p>
      </Card>
    `})},r={render:()=>({components:{Card:e},template:`
      <Card>
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold text-gray-900">Order #12345</h3>
            <span class="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">Completed</span>
          </div>
        </template>
        <div class="space-y-2">
          <p class="text-sm text-gray-600">Customer: Mohammad Lukman</p>
          <p class="text-sm text-gray-600">Total: $99.00</p>
        </div>
        <template #footer>
          <div class="flex justify-end gap-2">
            <button class="rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">Details</button>
            <button class="rounded-lg bg-blue-600 px-3 py-1.5 text-sm text-white hover:bg-blue-700">Action</button>
          </div>
        </template>
      </Card>
    `})},n={args:{padding:!1},render:d=>({components:{Card:e},setup:()=>({args:d}),template:`
      <Card v-bind="args">
        <img src="https://picsum.photos/600/200" alt="Card image" class="w-full h-48 object-cover" />
        <div class="px-6 py-4">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Image Card</h3>
          <p class="text-sm text-gray-600">Card with image and no body padding.</p>
        </div>
      </Card>
    `})};var c,i,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Card
    },
    template: \`
      <Card>
        <p class="text-gray-600">This is a basic card with default padding.</p>
      </Card>
    \`
  })
}`,...(g=(i=a.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var u,x,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Card
    },
    template: \`
      <Card>
        <template #header>
          <h3 class="text-lg font-semibold text-gray-900">Card Title</h3>
        </template>
        <p class="text-gray-600">Card body content goes here.</p>
      </Card>
    \`
  })
}`,...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var y,h,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Card
    },
    template: \`
      <Card>
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold text-gray-900">Order #12345</h3>
            <span class="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">Completed</span>
          </div>
        </template>
        <div class="space-y-2">
          <p class="text-sm text-gray-600">Customer: Mohammad Lukman</p>
          <p class="text-sm text-gray-600">Total: $99.00</p>
        </div>
        <template #footer>
          <div class="flex justify-end gap-2">
            <button class="rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">Details</button>
            <button class="rounded-lg bg-blue-600 px-3 py-1.5 text-sm text-white hover:bg-blue-700">Action</button>
          </div>
        </template>
      </Card>
    \`
  })
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var C,v,w;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    padding: false
  },
  render: args => ({
    components: {
      Card
    },
    setup: () => ({
      args
    }),
    template: \`
      <Card v-bind="args">
        <img src="https://picsum.photos/600/200" alt="Card image" class="w-full h-48 object-cover" />
        <div class="px-6 py-4">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Image Card</h3>
          <p class="text-sm text-gray-600">Card with image and no body padding.</p>
        </div>
      </Card>
    \`
  })
}`,...(w=(v=n.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const D=["Default","WithHeader","WithHeaderAndFooter","NoPadding"];export{a as Default,n as NoPadding,s as WithHeader,r as WithHeaderAndFooter,D as __namedExportsOrder,B as default};
