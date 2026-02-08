import{d as j,m as C,p as N,o as d,b as u,g as V,u as c,q as _,s as k,n as m,x as q,t as D,e as I,f as L,T as R,v as S}from"./vue.esm-bundler-Db6pwSvC.js";const F=["id"],a=j({__name:"Tooltip",props:{content:{},position:{default:"top"},delay:{default:200}},setup(t){const v=t,l=C(),n=S(!1);let e=null,o=null;function i(){o&&(clearTimeout(o),o=null),e=setTimeout(()=>{n.value=!0},v.delay)}function p(){e&&(clearTimeout(e),e=null),o=setTimeout(()=>{n.value=!1},100)}N(()=>{e&&clearTimeout(e),o&&clearTimeout(o)});const h={top:"bottom-full left-1/2 -translate-x-1/2 mb-2",bottom:"top-full left-1/2 -translate-x-1/2 mt-2",left:"right-full top-1/2 -translate-y-1/2 mr-2",right:"left-full top-1/2 -translate-y-1/2 ml-2"},w={top:"top-full left-1/2 -translate-x-1/2 border-t-gray-800 border-l-transparent border-r-transparent border-b-transparent",bottom:"bottom-full left-1/2 -translate-x-1/2 border-b-gray-800 border-l-transparent border-r-transparent border-t-transparent",left:"left-full top-1/2 -translate-y-1/2 border-l-gray-800 border-t-transparent border-b-transparent border-r-transparent",right:"right-full top-1/2 -translate-y-1/2 border-r-gray-800 border-t-transparent border-b-transparent border-l-transparent"};return(B,P)=>(d(),u("div",{class:"relative inline-flex",onMouseenter:i,onMouseleave:p,onFocusin:i,onFocusout:p},[V(B.$slots,"default",{ariaDescribedby:n.value?c(l):void 0}),_(R,{"enter-active-class":"transition duration-150 ease-out","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"transition duration-100 ease-in","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:k(()=>[n.value?(d(),u("div",{key:0,id:c(l),role:"tooltip",class:m(["absolute z-50 rounded-md bg-gray-800 px-2.5 py-1.5 text-xs whitespace-nowrap text-white shadow-lg",h[t.position]])},[q(D(t.content)+" ",1),I("span",{class:m(["absolute border-4",w[t.position]]),"aria-hidden":"true"},null,2)],10,F)):L("",!0)]),_:1})],32))}});a.__docgenInfo={exportName:"default",displayName:"Tooltip",description:"",tags:{},props:[{name:"content",required:!0,type:{name:"string"}},{name:"position",required:!1,type:{name:"TooltipPosition"},defaultValue:{func:!1,value:"'top'"}},{name:"delay",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"200"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"aria-describedby",title:"binding"}]}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/components/ui/tooltip/Tooltip.vue"]};const E={title:"UI/Tooltip",component:a,tags:["autodocs"],argTypes:{position:{control:"select",options:["top","bottom","left","right"]},delay:{control:"number"}}},r={args:{content:"This is a tooltip"},render:t=>({components:{Tooltip:a},setup:()=>({args:t}),template:`
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
