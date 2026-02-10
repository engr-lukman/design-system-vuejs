import{k as W,d as z,m as F,f as n,p as I,q as U,L as j,n as y,s as q,o as a,b as c,F as M,e as P,z as S,t as p,u as w}from"./vue.esm-bundler-DtUWbB1b.js";const d=W([]);let $=0;function l(t){const e=`toast-${++$}`,r=t.duration??4e3;return d.value.push({...t,id:e}),r>0&&setTimeout(()=>{A(e)},r),e}function A(t){const e=d.value.findIndex(r=>r.id===t);e!==-1&&d.value.splice(e,1)}function f(){return{toasts:d,toast(t,e){return l({title:t,variant:"default",...e})},success(t,e){return l({title:t,variant:"success",...e})},error(t,e){return l({title:t,variant:"error",...e})},warning(t,e){return l({title:t,variant:"warning",...e})},info(t,e){return l({title:t,variant:"info",...e})},dismiss:A,dismissAll(){d.value=[]}}}const Y={class:"min-w-0 flex-1"},G={class:"text-sm font-medium text-gray-900"},O={key:0,class:"mt-0.5 text-sm text-gray-500"},Z=["onClick"],H=["onClick"],u=z({__name:"Sonner",props:{position:{default:"bottom-right"},maxVisible:{default:5}},setup(t){const{toasts:e,dismiss:r}=f();function x(h){var i;(i=h.action)==null||i.onClick(),r(h.id)}const v={"top-right":"top-4 right-4","top-left":"top-4 left-4","bottom-right":"bottom-4 right-4","bottom-left":"bottom-4 left-4","top-center":"top-4 left-1/2 -translate-x-1/2","bottom-center":"bottom-4 left-1/2 -translate-x-1/2"},s={default:{bg:"bg-white",border:"border-gray-200",icon:"",iconColor:""},success:{bg:"bg-white",border:"border-green-200",icon:"✓",iconColor:"text-green-600 bg-green-100"},error:{bg:"bg-white",border:"border-red-200",icon:"✕",iconColor:"text-red-600 bg-red-100"},warning:{bg:"bg-white",border:"border-amber-200",icon:"!",iconColor:"text-amber-600 bg-amber-100"},info:{bg:"bg-white",border:"border-blue-200",icon:"i",iconColor:"text-blue-600 bg-blue-100"}};return(h,i)=>(a(),F(q,{to:"body"},[n("div",{class:y(["fixed z-[100] flex w-80 flex-col gap-2",v[t.position]]),role:"region","aria-label":"Notifications"},[I(j,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"translate-y-2 scale-95 opacity-0","enter-to-class":"translate-y-0 scale-100 opacity-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"translate-y-0 scale-100 opacity-100","leave-to-class":"translate-y-2 scale-95 opacity-0","move-class":"transition duration-200 ease-in-out"},{default:U(()=>[(a(!0),c(M,null,P(S(e).slice(-t.maxVisible),o=>(a(),c("div",{key:o.id,class:y(["flex items-start gap-3 rounded-md border p-4 shadow-lg",s[o.variant||"default"].bg,s[o.variant||"default"].border]),role:"alert"},[s[o.variant||"default"].icon?(a(),c("span",{key:0,class:y(["flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold",s[o.variant||"default"].iconColor])},p(s[o.variant||"default"].icon),3)):w("",!0),n("div",Y,[n("p",G,p(o.title),1),o.description?(a(),c("p",O,p(o.description),1)):w("",!0),o.action?(a(),c("button",{key:1,type:"button",class:"mt-2 text-sm font-medium text-gray-900 hover:text-gray-700",onClick:L=>x(o)},p(o.action.label),9,Z)):w("",!0)]),n("button",{type:"button",class:"shrink-0 rounded p-0.5 text-gray-400 hover:text-gray-600","aria-label":"Dismiss",onClick:L=>S(r)(o.id)},[...i[0]||(i[0]=[n("svg",{class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[n("path",{d:"M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"})],-1)])],8,H)],2))),128))]),_:1})],2)]))}});u.__docgenInfo={exportName:"default",displayName:"Sonner",description:"",tags:{},props:[{name:"position",required:!1,type:{name:"Position"},defaultValue:{func:!1,value:"'bottom-right'"}},{name:"maxVisible",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"5"}}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/sonner/Sonner.vue"]};const K={title:"Feedback/Sonner",component:u,tags:["autodocs"],argTypes:{position:{control:"select",options:["top-right","top-left","bottom-right","bottom-left","top-center","bottom-center"]}}},g={args:{position:"bottom-right"},render:t=>({components:{Sonner:u},setup(){const{toast:e,success:r,error:x,warning:v,info:s}=f();return{args:t,toast:e,success:r,error:x,warning:v,info:s}},template:`
      <div>
        <Sonner v-bind="args" />
        <div class="flex flex-wrap gap-2">
          <button class="rounded-lg bg-gray-100 px-3 py-2 text-sm" @click="toast('Event has been created')">Default</button>
          <button class="rounded-lg bg-green-100 px-3 py-2 text-sm text-green-700" @click="success('Saved successfully')">Success</button>
          <button class="rounded-lg bg-red-100 px-3 py-2 text-sm text-red-700" @click="error('Something went wrong')">Error</button>
          <button class="rounded-lg bg-amber-100 px-3 py-2 text-sm text-amber-700" @click="warning('Please review your input')">Warning</button>
          <button class="rounded-lg bg-blue-100 px-3 py-2 text-sm text-blue-700" @click="info('New version available')">Info</button>
        </div>
      </div>
    `})},b={args:{position:"bottom-right"},render:t=>({components:{Sonner:u},setup(){const{success:e,error:r}=f();return{args:t,showSuccess:()=>e("Changes saved",{description:"Your profile has been updated successfully."}),showError:()=>r("Upload failed",{description:"The file exceeds the maximum size of 10MB."})}},template:`
      <div>
        <Sonner v-bind="args" />
        <div class="flex gap-2">
          <button class="rounded-lg bg-green-100 px-3 py-2 text-sm text-green-700" @click="showSuccess">Success + Description</button>
          <button class="rounded-lg bg-red-100 px-3 py-2 text-sm text-red-700" @click="showError">Error + Description</button>
        </div>
      </div>
    `})},m={args:{position:"bottom-right"},render:t=>({components:{Sonner:u},setup(){const{toast:e}=f();return{args:t,showToast:()=>e("Event deleted",{description:'The event "Team meeting" was removed.',action:{label:"Undo",onClick:()=>{}}})}},template:`
      <div>
        <Sonner v-bind="args" />
        <button class="rounded-lg bg-gray-100 px-3 py-2 text-sm" @click="showToast">Toast with Action</button>
      </div>
    `})};var k,C,T;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    position: 'bottom-right'
  },
  render: args => ({
    components: {
      Sonner
    },
    setup() {
      const {
        toast,
        success,
        error,
        warning,
        info
      } = useSonner();
      return {
        args,
        toast,
        success,
        error,
        warning,
        info
      };
    },
    template: \`
      <div>
        <Sonner v-bind="args" />
        <div class="flex flex-wrap gap-2">
          <button class="rounded-lg bg-gray-100 px-3 py-2 text-sm" @click="toast('Event has been created')">Default</button>
          <button class="rounded-lg bg-green-100 px-3 py-2 text-sm text-green-700" @click="success('Saved successfully')">Success</button>
          <button class="rounded-lg bg-red-100 px-3 py-2 text-sm text-red-700" @click="error('Something went wrong')">Error</button>
          <button class="rounded-lg bg-amber-100 px-3 py-2 text-sm text-amber-700" @click="warning('Please review your input')">Warning</button>
          <button class="rounded-lg bg-blue-100 px-3 py-2 text-sm text-blue-700" @click="info('New version available')">Info</button>
        </div>
      </div>
    \`
  })
}`,...(T=(C=g.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var _,E,D;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    position: 'bottom-right'
  },
  render: args => ({
    components: {
      Sonner
    },
    setup() {
      const {
        success,
        error
      } = useSonner();
      return {
        args,
        showSuccess: () => success('Changes saved', {
          description: 'Your profile has been updated successfully.'
        }),
        showError: () => error('Upload failed', {
          description: 'The file exceeds the maximum size of 10MB.'
        })
      };
    },
    template: \`
      <div>
        <Sonner v-bind="args" />
        <div class="flex gap-2">
          <button class="rounded-lg bg-green-100 px-3 py-2 text-sm text-green-700" @click="showSuccess">Success + Description</button>
          <button class="rounded-lg bg-red-100 px-3 py-2 text-sm text-red-700" @click="showError">Error + Description</button>
        </div>
      </div>
    \`
  })
}`,...(D=(E=b.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var N,V,B;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    position: 'bottom-right'
  },
  render: args => ({
    components: {
      Sonner
    },
    setup() {
      const {
        toast
      } = useSonner();
      return {
        args,
        showToast: () => toast('Event deleted', {
          description: 'The event "Team meeting" was removed.',
          action: {
            label: 'Undo',
            onClick: () => {}
          }
        })
      };
    },
    template: \`
      <div>
        <Sonner v-bind="args" />
        <button class="rounded-lg bg-gray-100 px-3 py-2 text-sm" @click="showToast">Toast with Action</button>
      </div>
    \`
  })
}`,...(B=(V=m.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};const Q=["Default","WithDescription","WithAction"];export{g as Default,m as WithAction,b as WithDescription,Q as __namedExportsOrder,K as default};
