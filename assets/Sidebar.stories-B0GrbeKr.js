import{d as L,b as t,f as n,g as h,n as u,F as g,e as S,u as o,x as T,o as s,t as m,k as y}from"./vue.esm-bundler-DtUWbB1b.js";const z={class:"flex items-center justify-between border-b border-gray-200 p-4"},I={key:0,class:"text-sm font-semibold text-gray-900"},P={class:"flex-1 overflow-y-auto p-2"},U={key:0,class:"mb-1 px-3 text-xs font-medium tracking-wider text-gray-400 uppercase"},Z={class:"space-y-0.5"},O=["title","onClick"],R={class:"flex-1 truncate text-left"},G={key:0,class:"rounded-full bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-700"},H={key:0,class:"mt-0.5 ml-6 space-y-0.5 border-l border-gray-200 pl-3"},K=["onClick"],Q={key:0,class:"border-t border-gray-200 p-4"},p=L({__name:"Sidebar",props:{sections:{},collapsed:{type:Boolean,default:!1},width:{default:"256px"},collapsedWidth:{default:"64px"}},emits:["navigate","update:collapsed"],setup(e,{emit:r}){const J=e,w=r,i=y(new Set);function A(l){i.value.has(l)?i.value.delete(l):i.value.add(l)}function C(l){w("navigate",l)}function E(){w("update:collapsed",!J.collapsed)}return(l,d)=>(s(),t("aside",{class:"flex h-full flex-col border-r border-gray-200 bg-white transition-all duration-200",style:T({width:e.collapsed?e.collapsedWidth:e.width})},[n("div",z,[h(l.$slots,"header",{collapsed:e.collapsed},()=>[e.collapsed?o("",!0):(s(),t("span",I," Menu "))]),n("button",{type:"button",class:"rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600","aria-label":"Toggle sidebar",onClick:E},[(s(),t("svg",{class:u(["h-4 w-4 transition-transform",e.collapsed&&"rotate-180"]),viewBox:"0 0 20 20",fill:"currentColor"},[...d[0]||(d[0]=[n("path",{"fill-rule":"evenodd",d:"M11.78 5.22a.75.75 0 0 1 0 1.06L8.56 10l3.22 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z","clip-rule":"evenodd"},null,-1)])],2))])]),n("nav",P,[(s(!0),t(g,null,S(e.sections,(x,j)=>(s(),t("div",{key:j,class:u(j>0&&"mt-4")},[x.title&&!e.collapsed?(s(),t("p",U,m(x.title),1)):o("",!0),n("ul",Z,[(s(!0),t(g,null,S(x.items,a=>(s(),t("li",{key:a.value},[n("button",{type:"button",class:u(["flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",a.active?"bg-gray-100 font-medium text-gray-900":"text-gray-700 hover:bg-gray-100",e.collapsed&&"justify-center"]),title:e.collapsed?a.label:void 0,onClick:c=>a.children?A(a.value):C(a)},[h(l.$slots,`icon-${a.value}`,{item:a},()=>[d[1]||(d[1]=n("span",{class:"h-4 w-4 shrink-0 rounded bg-gray-200"},null,-1))]),e.collapsed?o("",!0):(s(),t(g,{key:0},[n("span",R,m(a.label),1),a.badge?(s(),t("span",G,m(a.badge),1)):o("",!0),a.children?(s(),t("svg",{key:1,class:u(["h-3.5 w-3.5 shrink-0 transition-transform",i.value.has(a.value)&&"rotate-90"]),viewBox:"0 0 20 20",fill:"currentColor"},[...d[2]||(d[2]=[n("path",{"fill-rule":"evenodd",d:"M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.44 10 8.22 6.28a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"},null,-1)])],2)):o("",!0)],64))],10,O),a.children&&i.value.has(a.value)&&!e.collapsed?(s(),t("ul",H,[(s(!0),t(g,null,S(a.children,c=>(s(),t("li",{key:c.value},[n("button",{type:"button",class:u(["flex w-full items-center gap-2 rounded-lg px-3 py-1.5 text-sm transition-colors",c.active?"font-medium text-gray-900":"text-gray-600 hover:bg-gray-100 hover:text-gray-900"]),onClick:X=>C(c)},m(c.label),11,K)]))),128))])):o("",!0)]))),128))])],2))),128))]),l.$slots.footer?(s(),t("div",Q,[h(l.$slots,"footer",{collapsed:e.collapsed})])):o("",!0)],4))}});p.__docgenInfo={exportName:"default",displayName:"Sidebar",description:"",tags:{},props:[{name:"sections",required:!0,type:{name:"Array",elements:[{name:"SidebarSection"}]}},{name:"collapsed",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"width",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'256px'"}},{name:"collapsedWidth",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'64px'"}}],events:[{name:"navigate",type:{names:["SidebarItem"]}},{name:"update:collapsed",type:{names:["boolean"]}}],slots:[{name:"header",scoped:!0,bindings:[{name:"collapsed",title:"binding"}]},{name:"`icon-${item.value}`",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"item",title:"binding"}]},{name:"footer",scoped:!0,bindings:[{name:"collapsed",title:"binding"}]}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/sidebar/Sidebar.vue"]};const k=[{title:"Main",items:[{label:"Dashboard",value:"dashboard",active:!0,badge:"New"},{label:"Projects",value:"projects",badge:5},{label:"Tasks",value:"tasks"}]},{title:"Management",items:[{label:"Users",value:"users",children:[{label:"All Users",value:"all-users"},{label:"Roles",value:"roles"},{label:"Permissions",value:"permissions"}]},{label:"Settings",value:"settings"},{label:"Analytics",value:"analytics"}]}],_={title:"Navigation/Sidebar",component:p,tags:["autodocs"],argTypes:{collapsed:{control:"boolean"},width:{control:"text"}}},b={args:{sections:k},render:e=>({components:{Sidebar:p},setup(){const r=y(!1);return{args:e,collapsed:r}},template:`
      <div class="h-96 rounded-lg border border-gray-200">
        <Sidebar v-bind="args" v-model:collapsed="collapsed" />
      </div>
    `})},v={args:{sections:k},render:e=>({components:{Sidebar:p},setup(){const r=y(!0);return{args:e,collapsed:r}},template:`
      <div class="h-96 rounded-lg border border-gray-200">
        <Sidebar v-bind="args" v-model:collapsed="collapsed" />
      </div>
    `})},f={args:{sections:k},render:e=>({components:{Sidebar:p},setup(){const r=y(!1);return{args:e,collapsed:r}},template:`
      <div class="h-[500px] rounded-lg border border-gray-200">
        <Sidebar v-bind="args" v-model:collapsed="collapsed">
          <template #footer="{ collapsed: c }">
            <div class="flex items-center gap-3">
              <div class="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-700">JD</div>
              <div v-if="!c" class="min-w-0">
                <p class="truncate text-sm font-medium text-gray-900">John Doe</p>
                <p class="truncate text-xs text-gray-500">john@example.com</p>
              </div>
            </div>
          </template>
        </Sidebar>
      </div>
    `})};var D,$,B;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    sections
  },
  render: args => ({
    components: {
      Sidebar
    },
    setup() {
      const collapsed = ref(false);
      return {
        args,
        collapsed
      };
    },
    template: \`
      <div class="h-96 rounded-lg border border-gray-200">
        <Sidebar v-bind="args" v-model:collapsed="collapsed" />
      </div>
    \`
  })
}`,...(B=($=b.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var N,F,M;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    sections
  },
  render: args => ({
    components: {
      Sidebar
    },
    setup() {
      const collapsed = ref(true);
      return {
        args,
        collapsed
      };
    },
    template: \`
      <div class="h-96 rounded-lg border border-gray-200">
        <Sidebar v-bind="args" v-model:collapsed="collapsed" />
      </div>
    \`
  })
}`,...(M=(F=v.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var V,W,q;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    sections
  },
  render: args => ({
    components: {
      Sidebar
    },
    setup() {
      const collapsed = ref(false);
      return {
        args,
        collapsed
      };
    },
    template: \`
      <div class="h-[500px] rounded-lg border border-gray-200">
        <Sidebar v-bind="args" v-model:collapsed="collapsed">
          <template #footer="{ collapsed: c }">
            <div class="flex items-center gap-3">
              <div class="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-700">JD</div>
              <div v-if="!c" class="min-w-0">
                <p class="truncate text-sm font-medium text-gray-900">John Doe</p>
                <p class="truncate text-xs text-gray-500">john@example.com</p>
              </div>
            </div>
          </template>
        </Sidebar>
      </div>
    \`
  })
}`,...(q=(W=f.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};const ee=["Default","Collapsed","WithFooter"];export{v as Collapsed,b as Default,f as WithFooter,ee as __namedExportsOrder,_ as default};
