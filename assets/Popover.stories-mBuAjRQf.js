import{d as T,B as _,C as E,b as u,f as S,g as m,p as V,q as j,T as O,k as g,o as v,x as z,n as B,u as N}from"./vue.esm-bundler-DtUWbB1b.js";const n=T({__name:"Popover",props:{side:{default:"bottom"},align:{default:"center"},width:{default:"320px"}},setup(t){const s=t,r=g(!1),l=g(null);function w(){r.value=!r.value}function i(){r.value=!1}function d(e){l.value&&!l.value.contains(e.target)&&i()}function p(e){e.key==="Escape"&&i()}_(()=>{document.addEventListener("mousedown",d),document.addEventListener("keydown",p)}),E(()=>{document.removeEventListener("mousedown",d),document.removeEventListener("keydown",p)});const k={top:"bottom-full mb-2",bottom:"top-full mt-2",left:"right-full mr-2 top-0",right:"left-full ml-2 top-0"},c={vertical:{start:"left-0",center:"left-1/2 -translate-x-1/2",end:"right-0"},horizontal:{start:"top-0",center:"top-1/2 -translate-y-1/2",end:"bottom-0"}};function C(){const e=s.side==="top"||s.side==="bottom";return[k[s.side],e?c.vertical[s.align]:c.horizontal[s.align]]}return(e,q)=>(v(),u("div",{ref_key:"containerRef",ref:l,class:"relative inline-block"},[S("div",{onClick:w},[m(e.$slots,"trigger")]),V(O,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"scale-95 opacity-0","enter-to-class":"scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"scale-100 opacity-100","leave-to-class":"scale-95 opacity-0"},{default:j(()=>[r.value?(v(),u("div",{key:0,class:B(["absolute z-50 rounded-md border border-gray-200 bg-white p-4 shadow-md",...C()]),style:z({width:t.width})},[m(e.$slots,"default")],6)):N("",!0)]),_:3})],512))}});n.__docgenInfo={exportName:"default",displayName:"Popover",description:"",tags:{},props:[{name:"side",required:!1,type:{name:"PopoverSide"},defaultValue:{func:!1,value:"'bottom'"}},{name:"align",required:!1,type:{name:"PopoverAlign"},defaultValue:{func:!1,value:"'center'"}},{name:"width",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'320px'"}}],slots:[{name:"trigger"},{name:"default"}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/popover/Popover.vue"]};const L={title:"Overlay/Popover",component:n,tags:["autodocs"],argTypes:{side:{control:"select",options:["top","bottom","left","right"]},align:{control:"select",options:["start","center","end"]},width:{control:"text"}}},o={render:t=>({components:{Popover:n},setup:()=>({args:t}),template:`
      <div class="flex h-64 items-center justify-center">
        <Popover v-bind="args">
          <template #trigger>
            <button class="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Open popover</button>
          </template>
          <div class="space-y-2">
            <h4 class="font-medium text-gray-900">Dimensions</h4>
            <p class="text-sm text-gray-500">Set the dimensions for the layer.</p>
            <div class="grid gap-2">
              <div class="grid grid-cols-3 items-center gap-4">
                <label class="text-sm text-gray-700">Width</label>
                <input class="col-span-2 rounded border border-gray-300 px-2 py-1 text-sm" value="100%" />
              </div>
              <div class="grid grid-cols-3 items-center gap-4">
                <label class="text-sm text-gray-700">Height</label>
                <input class="col-span-2 rounded border border-gray-300 px-2 py-1 text-sm" value="25px" />
              </div>
            </div>
          </div>
        </Popover>
      </div>
    `})},a={args:{side:"top"},render:t=>({components:{Popover:n},setup:()=>({args:t}),template:`
      <div class="flex h-64 items-end justify-center pb-8">
        <Popover v-bind="args">
          <template #trigger>
            <button class="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Top popover</button>
          </template>
          <p class="text-sm text-gray-600">This popover appears above the trigger.</p>
        </Popover>
      </div>
    `})};var f,y,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Popover
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="flex h-64 items-center justify-center">
        <Popover v-bind="args">
          <template #trigger>
            <button class="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Open popover</button>
          </template>
          <div class="space-y-2">
            <h4 class="font-medium text-gray-900">Dimensions</h4>
            <p class="text-sm text-gray-500">Set the dimensions for the layer.</p>
            <div class="grid gap-2">
              <div class="grid grid-cols-3 items-center gap-4">
                <label class="text-sm text-gray-700">Width</label>
                <input class="col-span-2 rounded border border-gray-300 px-2 py-1 text-sm" value="100%" />
              </div>
              <div class="grid grid-cols-3 items-center gap-4">
                <label class="text-sm text-gray-700">Height</label>
                <input class="col-span-2 rounded border border-gray-300 px-2 py-1 text-sm" value="25px" />
              </div>
            </div>
          </div>
        </Popover>
      </div>
    \`
  })
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var x,h,P;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    side: 'top'
  },
  render: args => ({
    components: {
      Popover
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="flex h-64 items-end justify-center pb-8">
        <Popover v-bind="args">
          <template #trigger>
            <button class="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Top popover</button>
          </template>
          <p class="text-sm text-gray-600">This popover appears above the trigger.</p>
        </Popover>
      </div>
    \`
  })
}`,...(P=(h=a.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};const H=["Default","Top"];export{o as Default,a as Top,H as __namedExportsOrder,L as default};
