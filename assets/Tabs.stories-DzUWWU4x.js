import{d as j,b as n,e as y,F as f,k as T,n as x,j as A,m as N,o as l,u as o,t as E,A as L,B as z,g as U,v as b}from"./vue.esm-bundler-Db6pwSvC.js";const G=["id","aria-selected","aria-controls","disabled","onClick"],H={class:"mt-4"},J=["id","aria-labelledby"],r=j({__name:"Tabs",props:{tabs:{},modelValue:{},variant:{default:"underline"},fullWidth:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:g}){const s=t,D=g,i=N(),B=A(()=>s.variant==="pills"?["inline-flex gap-1 rounded-lg bg-gray-100 p-1",s.fullWidth?"w-full":""]:["flex border-b border-gray-200",s.fullWidth?"w-full":""]);function I(a){const d=s.modelValue===a.key;return s.variant==="pills"?["rounded-md px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",s.fullWidth?"flex-1 text-center":"",a.disabled?"text-gray-400 cursor-not-allowed":d?"bg-white text-gray-900 shadow-sm":"text-gray-600 hover:text-gray-900"]:["border-b-2 px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset",s.fullWidth?"flex-1 text-center":"",a.disabled?"border-transparent text-gray-400 cursor-not-allowed":d?"border-blue-600 text-blue-600":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"]}function q(a){a.disabled||D("update:modelValue",a.key)}return(a,d)=>(l(),n("div",null,[y("div",{class:x(B.value),role:"tablist","aria-label":"Tabs"},[(l(!0),n(f,null,T(t.tabs,e=>(l(),n("button",{id:`${o(i)}-tab-${e.key}`,key:e.key,type:"button",role:"tab","aria-selected":t.modelValue===e.key,"aria-controls":`${o(i)}-panel-${e.key}`,class:x(I(e)),disabled:e.disabled,onClick:K=>q(e)},E(e.label),11,G))),128))],2),y("div",H,[(l(!0),n(f,null,T(t.tabs,e=>L((l(),n("div",{key:e.key,id:`${o(i)}-panel-${e.key}`,role:"tabpanel","aria-labelledby":`${o(i)}-tab-${e.key}`},[U(a.$slots,e.key,{tab:e})],8,J)),[[z,t.modelValue===e.key]])),128))])]))}});r.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"tabs",required:!0,type:{name:"Array",elements:[{name:"TabItem"}]}},{name:"modelValue",required:!0,type:{name:"string"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"underline"'},{name:'"pills"'}]},defaultValue:{func:!1,value:"'underline'"}},{name:"fullWidth",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],slots:[{name:"tab.key",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"tab",title:"binding"}]}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/components/ui/tabs/Tabs.vue"]};const Q={title:"UI/Tabs",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["underline","pills"]},fullWidth:{control:"boolean"}}},v=[{key:"overview",label:"Overview"},{key:"features",label:"Features"},{key:"pricing",label:"Pricing"}],p={render:()=>({components:{Tabs:r},setup(){const t=b("overview");return{tabs:v,activeTab:t}},template:`
      <Tabs :tabs="tabs" v-model="activeTab">
        <template #overview><p class="text-gray-600">Overview content here.</p></template>
        <template #features><p class="text-gray-600">Features content here.</p></template>
        <template #pricing><p class="text-gray-600">Pricing content here.</p></template>
      </Tabs>
    `})},c={render:()=>({components:{Tabs:r},setup(){const t=b("overview");return{tabs:v,activeTab:t}},template:`
      <Tabs :tabs="tabs" v-model="activeTab" variant="pills">
        <template #overview><p class="text-gray-600">Overview content.</p></template>
        <template #features><p class="text-gray-600">Features content.</p></template>
        <template #pricing><p class="text-gray-600">Pricing content.</p></template>
      </Tabs>
    `})},u={render:()=>({components:{Tabs:r},setup(){const t=b("overview");return{tabs:v,activeTab:t}},template:`
      <Tabs :tabs="tabs" v-model="activeTab" full-width>
        <template #overview><p class="text-gray-600">Full width tabs.</p></template>
        <template #features><p class="text-gray-600">Features.</p></template>
        <template #pricing><p class="text-gray-600">Pricing.</p></template>
      </Tabs>
    `})},m={render:()=>({components:{Tabs:r},setup(){const t=b("overview");return{tabs:[{key:"overview",label:"Overview"},{key:"features",label:"Features"},{key:"pricing",label:"Pricing",disabled:!0}],activeTab:t}},template:`
      <Tabs :tabs="tabs" v-model="activeTab">
        <template #overview><p class="text-gray-600">Overview content.</p></template>
        <template #features><p class="text-gray-600">Features content.</p></template>
        <template #pricing><p class="text-gray-600">Pricing content (disabled).</p></template>
      </Tabs>
    `})};var w,h,k;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tabs
    },
    setup() {
      const activeTab = ref('overview');
      return {
        tabs: sampleTabs,
        activeTab
      };
    },
    template: \`
      <Tabs :tabs="tabs" v-model="activeTab">
        <template #overview><p class="text-gray-600">Overview content here.</p></template>
        <template #features><p class="text-gray-600">Features content here.</p></template>
        <template #pricing><p class="text-gray-600">Pricing content here.</p></template>
      </Tabs>
    \`
  })
}`,...(k=(h=p.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var F,P,V;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tabs
    },
    setup() {
      const activeTab = ref('overview');
      return {
        tabs: sampleTabs,
        activeTab
      };
    },
    template: \`
      <Tabs :tabs="tabs" v-model="activeTab" variant="pills">
        <template #overview><p class="text-gray-600">Overview content.</p></template>
        <template #features><p class="text-gray-600">Features content.</p></template>
        <template #pricing><p class="text-gray-600">Pricing content.</p></template>
      </Tabs>
    \`
  })
}`,...(V=(P=c.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var W,O,$;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tabs
    },
    setup() {
      const activeTab = ref('overview');
      return {
        tabs: sampleTabs,
        activeTab
      };
    },
    template: \`
      <Tabs :tabs="tabs" v-model="activeTab" full-width>
        <template #overview><p class="text-gray-600">Full width tabs.</p></template>
        <template #features><p class="text-gray-600">Features.</p></template>
        <template #pricing><p class="text-gray-600">Pricing.</p></template>
      </Tabs>
    \`
  })
}`,...($=(O=u.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var S,_,C;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tabs
    },
    setup() {
      const activeTab = ref('overview');
      const tabs = [{
        key: 'overview',
        label: 'Overview'
      }, {
        key: 'features',
        label: 'Features'
      }, {
        key: 'pricing',
        label: 'Pricing',
        disabled: true
      }];
      return {
        tabs,
        activeTab
      };
    },
    template: \`
      <Tabs :tabs="tabs" v-model="activeTab">
        <template #overview><p class="text-gray-600">Overview content.</p></template>
        <template #features><p class="text-gray-600">Features content.</p></template>
        <template #pricing><p class="text-gray-600">Pricing content (disabled).</p></template>
      </Tabs>
    \`
  })
}`,...(C=(_=m.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const R=["Default","Pills","FullWidth","WithDisabled"];export{p as Default,u as FullWidth,c as Pills,m as WithDisabled,R as __namedExportsOrder,Q as default};
