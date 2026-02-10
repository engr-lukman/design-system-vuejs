import{d as Y,w as D,l as I,m as $,p as v,q as x,T as h,s as F,o as t,b as a,f as d,n as K,t as U,u as n,g as M,k as m}from"./vue.esm-bundler-DtUWbB1b.js";const Z=["aria-label"],A={key:0,class:"flex items-center justify-between border-b border-gray-200 px-6 py-4"},G={key:0,class:"text-lg font-semibold text-gray-900"},H={class:"px-6 py-4"},J={key:1,class:"flex items-center justify-end gap-3 border-t border-gray-200 px-6 py-4"},s=Y({__name:"Modal",props:{modelValue:{type:Boolean,default:!1},title:{default:""},size:{default:"md"},closable:{type:Boolean,default:!0},closeOnOverlay:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0}},emits:["update:modelValue","close"],setup(e,{emit:o}){const r=e,f=o,q={sm:"max-w-sm",md:"max-w-lg",lg:"max-w-2xl",xl:"max-w-4xl"};function b(){r.closable&&(f("update:modelValue",!1),f("close"))}function j(){r.closeOnOverlay&&b()}function g(l){l.key==="Escape"&&r.closeOnEscape&&b()}return D(()=>r.modelValue,l=>{l?(document.body.style.overflow="hidden",document.addEventListener("keydown",g)):(document.body.style.overflow="",document.removeEventListener("keydown",g))}),I(()=>{document.removeEventListener("keydown",g),document.body.style.overflow=""}),(l,y)=>(t(),$(F,{to:"body"},[v(h,{"enter-active-class":"duration-200 ease-out","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"duration-150 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:x(()=>[e.modelValue?(t(),a("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center p-4",role:"dialog","aria-modal":"true","aria-label":e.title},[d("div",{class:"fixed inset-0 bg-gray-950/50 transition-opacity","aria-hidden":"true",onClick:j}),v(h,{"enter-active-class":"duration-200 ease-out","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"duration-150 ease-in","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:x(()=>[e.modelValue?(t(),a("div",{key:0,class:K(["relative w-full rounded-lg bg-white shadow-lg transition-all",q[e.size]])},[e.title||e.closable?(t(),a("div",A,[e.title?(t(),a("h2",G,U(e.title),1)):n("",!0),e.closable?(t(),a("button",{key:1,type:"button",class:"ml-auto rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:outline-none","aria-label":"Close",onClick:b},[...y[0]||(y[0]=[d("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[d("path",{d:"M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"})],-1)])])):n("",!0)])):n("",!0),d("div",H,[M(l.$slots,"default")]),l.$slots.footer?(t(),a("div",J,[M(l.$slots,"footer")])):n("",!0)],2)):n("",!0)]),_:3})],8,Z)):n("",!0)]),_:3})]))}});s.__docgenInfo={exportName:"default",displayName:"Modal",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"size",required:!1,type:{name:"ModalSize"},defaultValue:{func:!1,value:"'md'"}},{name:"closable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"closeOnOverlay",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"closeOnEscape",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}},{name:"close"}],slots:[{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/modal/Modal.vue"]};const Q={title:"Feedback/Modal",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg","xl"]},closable:{control:"boolean"},closeOnOverlay:{control:"boolean"},closeOnEscape:{control:"boolean"}}},c={args:{title:"Modal Title",modelValue:!1},render:e=>({components:{Modal:s},setup(){const o=m(e.modelValue);return{args:e,open:o}},template:`
      <div>
        <button
          class="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          @click="open = true"
        >
          Open Modal
        </button>
        <Modal v-bind="args" v-model="open">
          <p class="text-gray-600">This is the modal body content.</p>
          <template #footer>
            <button
              class="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              @click="open = false"
            >
              Cancel
            </button>
            <button
              class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
              @click="open = false"
            >
              Confirm
            </button>
          </template>
        </Modal>
      </div>
    `})},u={args:{title:"Small Modal",size:"sm",modelValue:!1},render:e=>({components:{Modal:s},setup(){const o=m(e.modelValue);return{args:e,open:o}},template:`
      <div>
        <button
          class="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          @click="open = true"
        >
          Open Small Modal
        </button>
        <Modal v-bind="args" v-model="open">
          <p class="text-gray-600">Small modal content.</p>
        </Modal>
      </div>
    `})},i={args:{title:"Large Modal",size:"lg",modelValue:!1},render:e=>({components:{Modal:s},setup(){const o=m(e.modelValue);return{args:e,open:o}},template:`
      <div>
        <button
          class="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          @click="open = true"
        >
          Open Large Modal
        </button>
        <Modal v-bind="args" v-model="open">
          <p class="text-gray-600">Large modal with more room for content. You can add forms, tables, or any complex layout here.</p>
        </Modal>
      </div>
    `})},p={args:{title:"Non-closable Modal",closable:!1,closeOnOverlay:!1,closeOnEscape:!1,modelValue:!1},render:e=>({components:{Modal:s},setup(){const o=m(e.modelValue);return{args:e,open:o}},template:`
      <div>
        <button
          class="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          @click="open = true"
        >
          Open Non-closable Modal
        </button>
        <Modal v-bind="args" v-model="open">
          <p class="text-gray-600">You can only close this modal with the button below.</p>
          <template #footer>
            <button
              class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
              @click="open = false"
            >
              I understand
            </button>
          </template>
        </Modal>
      </div>
    `})};var w,k,V;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: 'Modal Title',
    modelValue: false
  },
  render: args => ({
    components: {
      Modal
    },
    setup() {
      const open = ref(args.modelValue);
      return {
        args,
        open
      };
    },
    template: \`
      <div>
        <button
          class="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          @click="open = true"
        >
          Open Modal
        </button>
        <Modal v-bind="args" v-model="open">
          <p class="text-gray-600">This is the modal body content.</p>
          <template #footer>
            <button
              class="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              @click="open = false"
            >
              Cancel
            </button>
            <button
              class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
              @click="open = false"
            >
              Confirm
            </button>
          </template>
        </Modal>
      </div>
    \`
  })
}`,...(V=(k=c.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var O,C,L;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    title: 'Small Modal',
    size: 'sm',
    modelValue: false
  },
  render: args => ({
    components: {
      Modal
    },
    setup() {
      const open = ref(args.modelValue);
      return {
        args,
        open
      };
    },
    template: \`
      <div>
        <button
          class="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          @click="open = true"
        >
          Open Small Modal
        </button>
        <Modal v-bind="args" v-model="open">
          <p class="text-gray-600">Small modal content.</p>
        </Modal>
      </div>
    \`
  })
}`,...(L=(C=u.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var S,z,E;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: 'Large Modal',
    size: 'lg',
    modelValue: false
  },
  render: args => ({
    components: {
      Modal
    },
    setup() {
      const open = ref(args.modelValue);
      return {
        args,
        open
      };
    },
    template: \`
      <div>
        <button
          class="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          @click="open = true"
        >
          Open Large Modal
        </button>
        <Modal v-bind="args" v-model="open">
          <p class="text-gray-600">Large modal with more room for content. You can add forms, tables, or any complex layout here.</p>
        </Modal>
      </div>
    \`
  })
}`,...(E=(z=i.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var N,B,T;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    title: 'Non-closable Modal',
    closable: false,
    closeOnOverlay: false,
    closeOnEscape: false,
    modelValue: false
  },
  render: args => ({
    components: {
      Modal
    },
    setup() {
      const open = ref(args.modelValue);
      return {
        args,
        open
      };
    },
    template: \`
      <div>
        <button
          class="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          @click="open = true"
        >
          Open Non-closable Modal
        </button>
        <Modal v-bind="args" v-model="open">
          <p class="text-gray-600">You can only close this modal with the button below.</p>
          <template #footer>
            <button
              class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
              @click="open = false"
            >
              I understand
            </button>
          </template>
        </Modal>
      </div>
    \`
  })
}`,...(T=(B=p.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};const R=["Default","Small","Large","NonClosable"];export{c as Default,i as Large,p as NonClosable,u as Small,R as __namedExportsOrder,Q as default};
