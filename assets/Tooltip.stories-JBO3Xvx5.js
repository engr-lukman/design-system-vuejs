import{d as B,l as k,b as d,g as C,z as u,p as N,q as V,T as _,k as q,A as D,o as c,n as m,j as F,t as L,f as R,u as S}from"./vue.esm-bundler-DtUWbB1b.js";const z=["id"],a=B({__name:"Tooltip",props:{content:{},position:{default:"top"},delay:{default:200}},setup(t){const v=t,l=D(),n=q(!1);let e=null,o=null;function i(){o&&(clearTimeout(o),o=null),e=setTimeout(()=>{n.value=!0},v.delay)}function p(){e&&(clearTimeout(e),e=null),o=setTimeout(()=>{n.value=!1},100)}k(()=>{e&&clearTimeout(e),o&&clearTimeout(o)});const h={top:"bottom-full left-1/2 -translate-x-1/2 mb-2",bottom:"top-full left-1/2 -translate-x-1/2 mt-2",left:"right-full top-1/2 -translate-y-1/2 mr-2",right:"left-full top-1/2 -translate-y-1/2 ml-2"},w={top:"top-full left-1/2 -translate-x-1/2 border-t-gray-900 border-l-transparent border-r-transparent border-b-transparent",bottom:"bottom-full left-1/2 -translate-x-1/2 border-b-gray-900 border-l-transparent border-r-transparent border-t-transparent",left:"left-full top-1/2 -translate-y-1/2 border-l-gray-900 border-t-transparent border-b-transparent border-r-transparent",right:"right-full top-1/2 -translate-y-1/2 border-r-gray-900 border-t-transparent border-b-transparent border-l-transparent"};return(j,I)=>(c(),d("div",{class:"relative inline-flex",onMouseenter:i,onMouseleave:p,onFocusin:i,onFocusout:p},[C(j.$slots,"default",{ariaDescribedby:n.value?u(l):void 0}),N(_,{"enter-active-class":"transition duration-150 ease-out","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"transition duration-100 ease-in","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:V(()=>[n.value?(c(),d("div",{key:0,id:u(l),role:"tooltip",class:m(["absolute z-50 rounded-md bg-gray-900 px-2.5 py-1.5 text-xs whitespace-nowrap text-white shadow-lg",h[t.position]])},[F(L(t.content)+" ",1),R("span",{class:m(["absolute border-4",w[t.position]]),"aria-hidden":"true"},null,2)],10,z)):S("",!0)]),_:1})],32))}});a.__docgenInfo={exportName:"default",displayName:"Tooltip",description:"",tags:{},props:[{name:"content",required:!0,type:{name:"string"}},{name:"position",required:!1,type:{name:"TooltipPosition"},defaultValue:{func:!1,value:"'top'"}},{name:"delay",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"200"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"aria-describedby",title:"binding"}]}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/tooltip/Tooltip.vue"]};const E={title:"Feedback/Tooltip",component:a,tags:["autodocs"],argTypes:{position:{control:"select",options:["top","bottom","left","right"]},delay:{control:"number"}}},r={args:{content:"This is a tooltip"},render:t=>({components:{Tooltip:a},setup:()=>({args:t}),template:`
      <div class="flex items-center justify-center p-20">
        <Tooltip v-bind="args">
          <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white">Hover me</button>
        </Tooltip>
      </div>
    `})},s={render:()=>({components:{Tooltip:a},template:`
      <div class="flex items-center justify-center gap-8 p-20">
        <Tooltip content="Top tooltip" position="top">
          <button class="rounded-lg border border-gray-300 px-4 py-2 text-sm">Top</button>
        </Tooltip>
        <Tooltip content="Bottom tooltip" position="bottom">
          <button class="rounded-lg border border-gray-300 px-4 py-2 text-sm">Bottom</button>
        </Tooltip>
        <Tooltip content="Left tooltip" position="left">
          <button class="rounded-lg border border-gray-300 px-4 py-2 text-sm">Left</button>
        </Tooltip>
        <Tooltip content="Right tooltip" position="right">
          <button class="rounded-lg border border-gray-300 px-4 py-2 text-sm">Right</button>
        </Tooltip>
      </div>
    `})};var b,f,g;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    content: 'This is a tooltip'
  },
  render: args => ({
    components: {
      Tooltip
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="flex items-center justify-center p-20">
        <Tooltip v-bind="args">
          <button class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white">Hover me</button>
        </Tooltip>
      </div>
    \`
  })
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,T,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tooltip
    },
    template: \`
      <div class="flex items-center justify-center gap-8 p-20">
        <Tooltip content="Top tooltip" position="top">
          <button class="rounded-lg border border-gray-300 px-4 py-2 text-sm">Top</button>
        </Tooltip>
        <Tooltip content="Bottom tooltip" position="bottom">
          <button class="rounded-lg border border-gray-300 px-4 py-2 text-sm">Bottom</button>
        </Tooltip>
        <Tooltip content="Left tooltip" position="left">
          <button class="rounded-lg border border-gray-300 px-4 py-2 text-sm">Left</button>
        </Tooltip>
        <Tooltip content="Right tooltip" position="right">
          <button class="rounded-lg border border-gray-300 px-4 py-2 text-sm">Right</button>
        </Tooltip>
      </div>
    \`
  })
}`,...(x=(T=s.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const H=["Default","Positions"];export{r as Default,s as Positions,H as __namedExportsOrder,E as default};
