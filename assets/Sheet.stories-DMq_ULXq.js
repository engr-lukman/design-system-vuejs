import{d as T,w as $,l as j,m as U,p as y,q as h,T as x,s as z,o as a,b as o,f as l,n as A,t as S,u as r,g as w,k as f}from"./vue.esm-bundler-DtUWbB1b.js";const F={key:0,class:"fixed inset-0 z-50"},H={class:"flex items-start justify-between p-6"},P={key:0,class:"text-lg font-semibold text-gray-900"},R={key:1,class:"mt-1 text-sm text-gray-500"},D={class:"px-6 pb-6"},I={key:0,class:"border-t border-gray-200 p-6"},n=T({__name:"Sheet",props:{modelValue:{type:Boolean,default:!1},side:{default:"right"},title:{default:""},description:{default:""},closable:{type:Boolean,default:!0},closeOnOverlay:{type:Boolean,default:!0}},emits:["update:modelValue","close"],setup(e,{emit:t}){const g=e,b=t,M={top:"inset-x-0 top-0 max-h-[80vh] rounded-b-lg",bottom:"inset-x-0 bottom-0 max-h-[80vh] rounded-t-lg",left:"inset-y-0 left-0 w-full max-w-md",right:"inset-y-0 right-0 w-full max-w-md"},v={top:"-translate-y-full",bottom:"translate-y-full",left:"-translate-x-full",right:"translate-x-full"};function m(){g.closable&&(b("update:modelValue",!1),b("close"))}function p(s){s.key==="Escape"&&m()}return $(()=>g.modelValue,s=>{s?(document.body.style.overflow="hidden",document.addEventListener("keydown",p)):(document.body.style.overflow="",document.removeEventListener("keydown",p))}),j(()=>{document.removeEventListener("keydown",p),document.body.style.overflow=""}),(s,d)=>(a(),U(z,{to:"body"},[y(x,{"enter-active-class":"duration-300 ease-out","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"duration-200 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:h(()=>[e.modelValue?(a(),o("div",F,[l("div",{class:"fixed inset-0 bg-gray-950/50",onClick:d[0]||(d[0]=K=>e.closeOnOverlay&&m())}),y(x,{"enter-active-class":"transform transition duration-300 ease-out","enter-from-class":v[e.side],"enter-to-class":"translate-x-0 translate-y-0","leave-active-class":"transform transition duration-200 ease-in","leave-from-class":"translate-x-0 translate-y-0","leave-to-class":v[e.side]},{default:h(()=>[e.modelValue?(a(),o("div",{key:0,class:A(["fixed overflow-y-auto bg-white shadow-xl",M[e.side]])},[l("div",H,[l("div",null,[e.title?(a(),o("h2",P,S(e.title),1)):r("",!0),e.description?(a(),o("p",R,S(e.description),1)):r("",!0)]),e.closable?(a(),o("button",{key:0,type:"button",class:"rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:outline-none","aria-label":"Close",onClick:m},[...d[1]||(d[1]=[l("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[l("path",{d:"M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"})],-1)])])):r("",!0)]),l("div",D,[w(s.$slots,"default")]),s.$slots.footer?(a(),o("div",I,[w(s.$slots,"footer")])):r("",!0)],2)):r("",!0)]),_:3},8,["enter-from-class","leave-to-class"])])):r("",!0)]),_:3})]))}});n.__docgenInfo={exportName:"default",displayName:"Sheet",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"side",required:!1,type:{name:"SheetSide"},defaultValue:{func:!1,value:"'right'"}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"description",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"closable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"closeOnOverlay",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}},{name:"close"}],slots:[{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/sheet/Sheet.vue"]};const G={title:"Overlay/Sheet",component:n,tags:["autodocs"],argTypes:{side:{control:"select",options:["top","bottom","left","right"]},title:{control:"text"},description:{control:"text"},closable:{control:"boolean"}}},i={args:{title:"Edit Profile",description:"Make changes to your profile here.",side:"right"},render:e=>({components:{Sheet:n},setup(){const t=f(!1);return{args:e,open:t}},template:`
      <div>
        <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700" @click="open = true">Open Sheet</button>
        <Sheet v-bind="args" v-model="open">
          <div class="space-y-4">
            <div><label class="text-sm font-medium text-gray-700">Name</label><input class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" value="Lukman" /></div>
            <div><label class="text-sm font-medium text-gray-700">Username</label><input class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" value="@lukman" /></div>
          </div>
          <template #footer>
            <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white" @click="open = false">Save changes</button>
          </template>
        </Sheet>
      </div>
    `})},u={args:{title:"Share",description:"Share this document with others.",side:"bottom"},render:e=>({components:{Sheet:n},setup(){const t=f(!1);return{args:e,open:t}},template:`
      <div>
        <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700" @click="open = true">Open Bottom Sheet</button>
        <Sheet v-bind="args" v-model="open">
          <p class="text-sm text-gray-600">Bottom sheet content for mobile-friendly interactions.</p>
        </Sheet>
      </div>
    `})},c={args:{title:"Menu",side:"left"},render:e=>({components:{Sheet:n},setup(){const t=f(!1);return{args:e,open:t}},template:`
      <div>
        <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700" @click="open = true">Open Left Sheet</button>
        <Sheet v-bind="args" v-model="open">
          <nav class="space-y-1">
            <a href="#" class="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Home</a>
            <a href="#" class="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">About</a>
            <a href="#" class="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact</a>
          </nav>
        </Sheet>
      </div>
    `})};var k,V,B;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: 'Edit Profile',
    description: 'Make changes to your profile here.',
    side: 'right'
  },
  render: args => ({
    components: {
      Sheet
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
        <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700" @click="open = true">Open Sheet</button>
        <Sheet v-bind="args" v-model="open">
          <div class="space-y-4">
            <div><label class="text-sm font-medium text-gray-700">Name</label><input class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" value="Lukman" /></div>
            <div><label class="text-sm font-medium text-gray-700">Username</label><input class="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" value="@lukman" /></div>
          </div>
          <template #footer>
            <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white" @click="open = false">Save changes</button>
          </template>
        </Sheet>
      </div>
    \`
  })
}`,...(B=(V=i.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var O,L,C;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    title: 'Share',
    description: 'Share this document with others.',
    side: 'bottom'
  },
  render: args => ({
    components: {
      Sheet
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
        <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700" @click="open = true">Open Bottom Sheet</button>
        <Sheet v-bind="args" v-model="open">
          <p class="text-sm text-gray-600">Bottom sheet content for mobile-friendly interactions.</p>
        </Sheet>
      </div>
    \`
  })
}`,...(C=(L=u.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var E,q,N;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    title: 'Menu',
    side: 'left'
  },
  render: args => ({
    components: {
      Sheet
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
        <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700" @click="open = true">Open Left Sheet</button>
        <Sheet v-bind="args" v-model="open">
          <nav class="space-y-1">
            <a href="#" class="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Home</a>
            <a href="#" class="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">About</a>
            <a href="#" class="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact</a>
          </nav>
        </Sheet>
      </div>
    \`
  })
}`,...(N=(q=c.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};const J=["Right","Bottom","Left"];export{u as Bottom,c as Left,i as Right,J as __namedExportsOrder,G as default};
