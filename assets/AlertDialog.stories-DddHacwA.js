import{d as T,w as q,l as B,m as E,p as y,q as b,T as v,s as N,o,b as n,f as r,t as s,u as i,g as j,n as S,k as V}from"./vue.esm-bundler-DtUWbB1b.js";const O={key:0,class:"fixed inset-0 z-50 flex items-center justify-center p-4"},z=["aria-labelledby","aria-describedby"],F={key:0,id:"alert-dialog-title",class:"text-lg font-semibold text-gray-900"},I={key:1,id:"alert-dialog-description",class:"mt-2 text-sm text-gray-500"},K={class:"mt-6 flex justify-end gap-3"},u=T({__name:"AlertDialog",props:{modelValue:{type:Boolean,default:!1},title:{default:"Are you sure?"},description:{default:""},confirmLabel:{default:"Continue"},cancelLabel:{default:"Cancel"},variant:{default:"default"},closable:{type:Boolean,default:!0}},emits:["update:modelValue","confirm","cancel"],setup(e,{emit:t}){const f=e,l=t;function g(){l("update:modelValue",!1),l("cancel")}function L(){l("update:modelValue",!1),l("confirm")}function m(a){a.key==="Escape"&&f.closable&&g()}q(()=>f.modelValue,a=>{a?(document.body.style.overflow="hidden",document.addEventListener("keydown",m)):(document.body.style.overflow="",document.removeEventListener("keydown",m))}),B(()=>{document.removeEventListener("keydown",m),document.body.style.overflow=""});const C={default:"bg-gray-900 text-white hover:bg-gray-900/90 focus-visible:ring-gray-950",danger:"bg-red-600 text-white hover:bg-red-700 focus-visible:ring-gray-950"};return(a,p)=>(o(),E(N,{to:"body"},[y(v,{"enter-active-class":"duration-200 ease-out","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"duration-150 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:b(()=>[e.modelValue?(o(),n("div",O,[p[0]||(p[0]=r("div",{class:"fixed inset-0 bg-gray-950/50","aria-hidden":"true"},null,-1)),y(v,{"enter-active-class":"duration-200 ease-out","enter-from-class":"scale-95 opacity-0","enter-to-class":"scale-100 opacity-100","leave-active-class":"duration-150 ease-in","leave-from-class":"scale-100 opacity-100","leave-to-class":"scale-95 opacity-0"},{default:b(()=>[e.modelValue?(o(),n("div",{key:0,class:"relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg",role:"alertdialog","aria-modal":"true","aria-labelledby":e.title?"alert-dialog-title":void 0,"aria-describedby":e.description?"alert-dialog-description":void 0},[e.title?(o(),n("h2",F,s(e.title),1)):i("",!0),e.description?(o(),n("p",I,s(e.description),1)):i("",!0),j(a.$slots,"default"),r("div",K,[r("button",{type:"button",class:"rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none",onClick:g},s(e.cancelLabel),1),r("button",{type:"button",class:S(["rounded-md px-4 py-2 text-sm font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",C[e.variant]]),onClick:L},s(e.confirmLabel),3)])],8,z)):i("",!0)]),_:3})])):i("",!0)]),_:3})]))}});u.__docgenInfo={exportName:"default",displayName:"AlertDialog",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Are you sure?'"}},{name:"description",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"confirmLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Continue'"}},{name:"cancelLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Cancel'"}},{name:"variant",required:!1,type:{name:"AlertDialogVariant"},defaultValue:{func:!1,value:"'default'"}},{name:"closable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}},{name:"confirm"},{name:"cancel"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/alert-dialog/AlertDialog.vue"]};const $={title:"Feedback/AlertDialog",component:u,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","danger"]},title:{control:"text"},description:{control:"text"},confirmLabel:{control:"text"},cancelLabel:{control:"text"}}},c={args:{title:"Are you sure?",description:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."},render:e=>({components:{AlertDialog:u},setup(){const t=V(!1);return{args:e,open:t}},template:`
      <div>
        <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700" @click="open = true">Open Dialog</button>
        <AlertDialog v-bind="args" v-model="open" />
      </div>
    `})},d={args:{title:"Delete Account",description:"Are you sure you want to delete your account? All of your data will be permanently removed. This action cannot be undone.",variant:"danger",confirmLabel:"Delete"},render:e=>({components:{AlertDialog:u},setup(){const t=V(!1);return{args:e,open:t}},template:`
      <div>
        <button class="rounded-lg bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700" @click="open = true">Delete Account</button>
        <AlertDialog v-bind="args" v-model="open" />
      </div>
    `})};var x,h,w;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Are you sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.'
  },
  render: args => ({
    components: {
      AlertDialog
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
        <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700" @click="open = true">Open Dialog</button>
        <AlertDialog v-bind="args" v-model="open" />
      </div>
    \`
  })
}`,...(w=(h=c.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var D,A,k;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: 'Delete Account',
    description: 'Are you sure you want to delete your account? All of your data will be permanently removed. This action cannot be undone.',
    variant: 'danger',
    confirmLabel: 'Delete'
  },
  render: args => ({
    components: {
      AlertDialog
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
        <button class="rounded-lg bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700" @click="open = true">Delete Account</button>
        <AlertDialog v-bind="args" v-model="open" />
      </div>
    \`
  })
}`,...(k=(A=d.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};const G=["Default","Danger"];export{d as Danger,c as Default,G as __namedExportsOrder,$ as default};
