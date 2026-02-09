import{d as T,w as $,l as J,m as M,p as x,q as h,T as w,s as W,o as r,b as s,f as n,n as I,t as K,u as o,g as D,k as m}from"./vue.esm-bundler-YEuhxn0F.js";const U={key:0,class:"fixed inset-0 z-50"},Z={class:"flex h-full flex-col"},A={key:0,class:"flex items-center justify-between border-b border-gray-200 px-6 py-4"},G={key:0,class:"text-lg font-semibold text-gray-900"},H={class:"flex-1 overflow-y-auto px-6 py-4"},Q={key:1,class:"border-t border-gray-200 px-6 py-4"},l=T({__name:"Drawer",props:{modelValue:{type:Boolean,default:!1},side:{default:"right"},size:{default:"md"},title:{default:""},closable:{type:Boolean,default:!0},closeOnOverlay:{type:Boolean,default:!0}},emits:["update:modelValue","close"],setup(e,{emit:t}){const p=e,f=t,F={left:{sm:"w-64",md:"w-80",lg:"w-96",xl:"w-[480px]",full:"w-screen"},right:{sm:"w-64",md:"w-80",lg:"w-96",xl:"w-[480px]",full:"w-screen"},top:{sm:"h-32",md:"h-48",lg:"h-64",xl:"h-96",full:"h-screen"},bottom:{sm:"h-32",md:"h-48",lg:"h-64",xl:"h-96",full:"h-screen"}},P={left:"inset-y-0 left-0",right:"inset-y-0 right-0",top:"inset-x-0 top-0",bottom:"inset-x-0 bottom-0"},v={left:"-translate-x-full",right:"translate-x-full",top:"-translate-y-full",bottom:"translate-y-full"};function g(){p.closable&&(f("update:modelValue",!1),f("close"))}function R(){p.closeOnOverlay&&g()}function b(a){a.key==="Escape"&&g()}return $(()=>p.modelValue,a=>{a?(document.body.style.overflow="hidden",document.addEventListener("keydown",b)):(document.body.style.overflow="",document.removeEventListener("keydown",b))}),J(()=>{document.removeEventListener("keydown",b),document.body.style.overflow=""}),(a,y)=>(r(),M(W,{to:"body"},[x(w,{"enter-active-class":"duration-300 ease-out","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"duration-200 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:h(()=>[e.modelValue?(r(),s("div",U,[n("div",{class:"fixed inset-0 bg-gray-950/50","aria-hidden":"true",onClick:R}),x(w,{"enter-active-class":"transform transition duration-300 ease-out","enter-from-class":v[e.side],"enter-to-class":"translate-x-0 translate-y-0","leave-active-class":"transform transition duration-200 ease-in","leave-from-class":"translate-x-0 translate-y-0","leave-to-class":v[e.side]},{default:h(()=>[e.modelValue?(r(),s("div",{key:0,class:I(["fixed bg-white shadow-xl",P[e.side],F[e.side][e.size]])},[n("div",Z,[e.title||e.closable?(r(),s("div",A,[e.title?(r(),s("h2",G,K(e.title),1)):o("",!0),e.closable?(r(),s("button",{key:1,type:"button",class:"ml-auto rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:outline-none","aria-label":"Close",onClick:g},[...y[0]||(y[0]=[n("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[n("path",{d:"M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"})],-1)])])):o("",!0)])):o("",!0),n("div",H,[D(a.$slots,"default")]),a.$slots.footer?(r(),s("div",Q,[D(a.$slots,"footer")])):o("",!0)])],2)):o("",!0)]),_:3},8,["enter-from-class","leave-to-class"])])):o("",!0)]),_:3})]))}});l.__docgenInfo={exportName:"default",displayName:"Drawer",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"side",required:!1,type:{name:"DrawerSide"},defaultValue:{func:!1,value:"'right'"}},{name:"size",required:!1,type:{name:"DrawerSize"},defaultValue:{func:!1,value:"'md'"}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"closable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"closeOnOverlay",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}},{name:"close"}],slots:[{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/drawer/Drawer.vue"]};const Y={title:"Overlay/Drawer",component:l,tags:["autodocs"],argTypes:{side:{control:"select",options:["left","right","top","bottom"]},size:{control:"select",options:["sm","md","lg","xl","full"]},title:{control:"text"},closable:{control:"boolean"},closeOnOverlay:{control:"boolean"}}},i={args:{title:"Settings",side:"right"},render:e=>({components:{Drawer:l},setup(){const t=m(!1);return{args:e,open:t}},template:`
      <div>
        <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700" @click="open = true">Open Right Drawer</button>
        <Drawer v-bind="args" v-model="open">
          <p class="text-sm text-gray-600">Drawer content goes here. Slide in from the right side.</p>
        </Drawer>
      </div>
    `})},d={args:{title:"Navigation",side:"left"},render:e=>({components:{Drawer:l},setup(){const t=m(!1);return{args:e,open:t}},template:`
      <div>
        <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700" @click="open = true">Open Left Drawer</button>
        <Drawer v-bind="args" v-model="open">
          <nav class="space-y-2">
            <a href="#" class="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</a>
            <a href="#" class="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Projects</a>
            <a href="#" class="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
          </nav>
        </Drawer>
      </div>
    `})},c={args:{title:"Filters",side:"bottom",size:"md"},render:e=>({components:{Drawer:l},setup(){const t=m(!1);return{args:e,open:t}},template:`
      <div>
        <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700" @click="open = true">Open Bottom Drawer</button>
        <Drawer v-bind="args" v-model="open">
          <p class="text-sm text-gray-600">Bottom drawer content for mobile-friendly interactions.</p>
        </Drawer>
      </div>
    `})},u={args:{title:"Edit Profile",side:"right",size:"lg"},render:e=>({components:{Drawer:l},setup(){const t=m(!1);return{args:e,open:t}},template:`
      <div>
        <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700" @click="open = true">Open Drawer</button>
        <Drawer v-bind="args" v-model="open">
          <div class="space-y-4">
            <div><label class="text-sm font-medium text-gray-700">Name</label><input class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" value="John Doe" /></div>
            <div><label class="text-sm font-medium text-gray-700">Email</label><input class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" value="john@example.com" /></div>
          </div>
          <template #footer>
            <div class="flex justify-end gap-2">
              <button class="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700" @click="open = false">Cancel</button>
              <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white">Save</button>
            </div>
          </template>
        </Drawer>
      </div>
    `})};var k,O,V;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: 'Settings',
    side: 'right'
  },
  render: args => ({
    components: {
      Drawer
    },
    setup() {
      const open = ref(false);
      return {
        args,
        open
      };
    },
    template: \`
      <div>
        <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700" @click="open = true">Open Right Drawer</button>
        <Drawer v-bind="args" v-model="open">
          <p class="text-sm text-gray-600">Drawer content goes here. Slide in from the right side.</p>
        </Drawer>
      </div>
    \`
  })
}`,...(V=(O=i.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var S,B,z;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: 'Navigation',
    side: 'left'
  },
  render: args => ({
    components: {
      Drawer
    },
    setup() {
      const open = ref(false);
      return {
        args,
        open
      };
    },
    template: \`
      <div>
        <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700" @click="open = true">Open Left Drawer</button>
        <Drawer v-bind="args" v-model="open">
          <nav class="space-y-2">
            <a href="#" class="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</a>
            <a href="#" class="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Projects</a>
            <a href="#" class="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
          </nav>
        </Drawer>
      </div>
    \`
  })
}`,...(z=(B=d.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var C,L,E;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: 'Filters',
    side: 'bottom',
    size: 'md'
  },
  render: args => ({
    components: {
      Drawer
    },
    setup() {
      const open = ref(false);
      return {
        args,
        open
      };
    },
    template: \`
      <div>
        <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700" @click="open = true">Open Bottom Drawer</button>
        <Drawer v-bind="args" v-model="open">
          <p class="text-sm text-gray-600">Bottom drawer content for mobile-friendly interactions.</p>
        </Drawer>
      </div>
    \`
  })
}`,...(E=(L=c.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var j,N,q;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: 'Edit Profile',
    side: 'right',
    size: 'lg'
  },
  render: args => ({
    components: {
      Drawer
    },
    setup() {
      const open = ref(false);
      return {
        args,
        open
      };
    },
    template: \`
      <div>
        <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700" @click="open = true">Open Drawer</button>
        <Drawer v-bind="args" v-model="open">
          <div class="space-y-4">
            <div><label class="text-sm font-medium text-gray-700">Name</label><input class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" value="John Doe" /></div>
            <div><label class="text-sm font-medium text-gray-700">Email</label><input class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" value="john@example.com" /></div>
          </div>
          <template #footer>
            <div class="flex justify-end gap-2">
              <button class="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700" @click="open = false">Cancel</button>
              <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white">Save</button>
            </div>
          </template>
        </Drawer>
      </div>
    \`
  })
}`,...(q=(N=u.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};const _=["Right","Left","Bottom","WithFooter"];export{c as Bottom,d as Left,i as Right,u as WithFooter,_ as __namedExportsOrder,Y as default};
