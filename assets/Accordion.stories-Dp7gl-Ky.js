import{d as S,b as i,F as C,e as j,n as o,o as d,f as s,t as g,g as F,j as N,k as V}from"./vue.esm-bundler-DtUWbB1b.js";const D=["disabled","aria-expanded","onClick"],L={class:"overflow-hidden"},n=S({__name:"Accordion",props:{items:{},multiple:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1}},setup(e){const B=e,t=V(new Set);function q(a){t.value.has(a)?t.value.delete(a):(B.multiple||t.value.clear(),t.value.add(a)),t.value=new Set(t.value)}function p(a){return t.value.has(a)}return(a,v)=>(d(),i("div",{class:o(["w-full divide-y divide-gray-200",e.bordered&&"rounded-lg border border-gray-200"])},[(d(!0),i(C,null,j(e.items,r=>(d(),i("div",{key:r.value},[s("button",{type:"button",disabled:r.disabled,"aria-expanded":p(r.value),class:o(["flex w-full items-center justify-between py-4 text-left text-sm font-medium transition-colors",e.bordered?"px-4":"",r.disabled?"cursor-not-allowed text-gray-400":"text-gray-900 hover:text-gray-600"]),onClick:M=>q(r.value)},[s("span",null,g(r.title),1),(d(),i("svg",{class:o(["h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200",p(r.value)&&"rotate-180"]),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[...v[0]||(v[0]=[s("path",{"fill-rule":"evenodd",d:"M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"},null,-1)])],2))],10,D),s("div",{class:o(["grid transition-all duration-200",p(r.value)?"grid-rows-[1fr] opacity-100":"grid-rows-[0fr] opacity-0"])},[s("div",L,[s("div",{class:o(["pb-4 text-sm text-gray-600",e.bordered?"px-4":""])},[F(a.$slots,r.value,{item:r},()=>[N(g(r.content),1)])],2)])],2)]))),128))],2))}});n.__docgenInfo={exportName:"default",displayName:"Accordion",description:"",tags:{},props:[{name:"items",required:!0,type:{name:"Array",elements:[{name:"AccordionItem"}]}},{name:"multiple",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"bordered",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"item.value",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"item",title:"binding"}]}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/accordion/Accordion.vue"]};const m=[{value:"shipping",title:"What are your shipping options?",content:"We offer standard (5-7 days), express (2-3 days), and overnight shipping. Free shipping on orders over $50."},{value:"returns",title:"What is your return policy?",content:"You can return most items within 30 days of delivery for a full refund. Items must be in original condition."},{value:"support",title:"How can I contact customer support?",content:"You can reach us via email at support@example.com, call us at 1-800-555-0199, or use our live chat feature."},{value:"warranty",title:"Is there a warranty?",content:"All products come with a 1-year limited warranty covering manufacturing defects.",disabled:!0}],W={title:"Overlay/Accordion",component:n,tags:["autodocs"],argTypes:{multiple:{control:"boolean"},bordered:{control:"boolean"}}},l={args:{items:m},render:e=>({components:{Accordion:n},setup:()=>({args:e}),template:'<div class="w-[480px]"><Accordion v-bind="args" /></div>'})},c={args:{items:m,multiple:!0},render:e=>({components:{Accordion:n},setup:()=>({args:e}),template:'<div class="w-[480px]"><Accordion v-bind="args" /></div>'})},u={args:{items:m,bordered:!0},render:e=>({components:{Accordion:n},setup:()=>({args:e}),template:'<div class="w-[480px]"><Accordion v-bind="args" /></div>'})};var f,y,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    items: faqItems
  },
  render: args => ({
    components: {
      Accordion
    },
    setup: () => ({
      args
    }),
    template: '<div class="w-[480px]"><Accordion v-bind="args" /></div>'
  })
}`,...(b=(y=l.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var w,x,h;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    items: faqItems,
    multiple: true
  },
  render: args => ({
    components: {
      Accordion
    },
    setup: () => ({
      args
    }),
    template: '<div class="w-[480px]"><Accordion v-bind="args" /></div>'
  })
}`,...(h=(x=c.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var A,I,k;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    items: faqItems,
    bordered: true
  },
  render: args => ({
    components: {
      Accordion
    },
    setup: () => ({
      args
    }),
    template: '<div class="w-[480px]"><Accordion v-bind="args" /></div>'
  })
}`,...(k=(I=u.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};const _=["Default","Multiple","Bordered"];export{u as Bordered,l as Default,c as Multiple,_ as __namedExportsOrder,W as default};
