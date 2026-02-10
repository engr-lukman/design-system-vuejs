import{d as H,b as d,g as c,p as w,q as T,T as j,o as u,x as k,n as D,u as V,k as S}from"./vue.esm-bundler-DtUWbB1b.js";const n=H({__name:"HoverCard",props:{side:{default:"bottom"},align:{default:"center"},openDelay:{default:200},closeDelay:{default:150},width:{default:"320px"}},setup(e){const o=e,l=S(!1);let t=null,a=null;function b(){a&&(clearTimeout(a),a=null),t=setTimeout(()=>{l.value=!0},o.openDelay)}function h(){t&&(clearTimeout(t),t=null),a=setTimeout(()=>{l.value=!1},o.closeDelay)}const y={top:"bottom-full mb-2",bottom:"top-full mt-2"},C={start:"left-0",center:"left-1/2 -translate-x-1/2",end:"right-0"};return(i,q)=>(u(),d("div",{class:"relative inline-block",onMouseenter:b,onMouseleave:h},[c(i.$slots,"trigger"),w(j,{"enter-active-class":"transition duration-150 ease-out","enter-from-class":"scale-95 opacity-0","enter-to-class":"scale-100 opacity-100","leave-active-class":"transition duration-100 ease-in","leave-from-class":"scale-100 opacity-100","leave-to-class":"scale-95 opacity-0"},{default:T(()=>[l.value?(u(),d("div",{key:0,class:D(["absolute z-50 rounded-md border border-gray-200 bg-white p-4 shadow-md",y[e.side],C[e.align]]),style:k({width:e.width})},[c(i.$slots,"default")],6)):V("",!0)]),_:3})],32))}});n.__docgenInfo={exportName:"default",displayName:"HoverCard",description:"",tags:{},props:[{name:"side",required:!1,type:{name:"HoverCardSide"},defaultValue:{func:!1,value:"'bottom'"}},{name:"align",required:!1,type:{name:"HoverCardAlign"},defaultValue:{func:!1,value:"'center'"}},{name:"openDelay",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"200"}},{name:"closeDelay",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"150"}},{name:"width",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'320px'"}}],slots:[{name:"trigger"},{name:"default"}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/hover-card/HoverCard.vue"]};const J={title:"Overlay/HoverCard",component:n,tags:["autodocs"],argTypes:{side:{control:"select",options:["top","bottom"]},align:{control:"select",options:["start","center","end"]},openDelay:{control:"number"},closeDelay:{control:"number"},width:{control:"text"}}},s={render:e=>({components:{HoverCard:n},setup:()=>({args:e}),template:`
      <div class="flex h-64 items-center justify-center">
        <HoverCard v-bind="args">
          <template #trigger>
            <a href="#" class="text-sm font-medium text-blue-600 underline hover:text-blue-700">@vuejs</a>
          </template>
          <div class="flex gap-4">
            <div class="h-10 w-10 shrink-0 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">V</div>
            <div class="space-y-1">
              <h4 class="text-sm font-semibold text-gray-900">Vue.js</h4>
              <p class="text-sm text-gray-500">The Progressive JavaScript Framework. An approachable, performant and versatile framework for building web user interfaces.</p>
              <div class="flex items-center gap-2 pt-1 text-xs text-gray-400">
                <span>Joined December 2013</span>
              </div>
            </div>
          </div>
        </HoverCard>
      </div>
    `})},r={args:{side:"top"},render:e=>({components:{HoverCard:n},setup:()=>({args:e}),template:`
      <div class="flex h-64 items-end justify-center pb-8">
        <HoverCard v-bind="args">
          <template #trigger>
            <a href="#" class="text-sm font-medium text-blue-600 underline hover:text-blue-700">Hover me (top)</a>
          </template>
          <p class="text-sm text-gray-600">This hover card appears above the trigger.</p>
        </HoverCard>
      </div>
    `})};var m,p,f;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      HoverCard
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="flex h-64 items-center justify-center">
        <HoverCard v-bind="args">
          <template #trigger>
            <a href="#" class="text-sm font-medium text-blue-600 underline hover:text-blue-700">@vuejs</a>
          </template>
          <div class="flex gap-4">
            <div class="h-10 w-10 shrink-0 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">V</div>
            <div class="space-y-1">
              <h4 class="text-sm font-semibold text-gray-900">Vue.js</h4>
              <p class="text-sm text-gray-500">The Progressive JavaScript Framework. An approachable, performant and versatile framework for building web user interfaces.</p>
              <div class="flex items-center gap-2 pt-1 text-xs text-gray-400">
                <span>Joined December 2013</span>
              </div>
            </div>
          </div>
        </HoverCard>
      </div>
    \`
  })
}`,...(f=(p=s.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var v,g,x;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    side: 'top'
  },
  render: args => ({
    components: {
      HoverCard
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="flex h-64 items-end justify-center pb-8">
        <HoverCard v-bind="args">
          <template #trigger>
            <a href="#" class="text-sm font-medium text-blue-600 underline hover:text-blue-700">Hover me (top)</a>
          </template>
          <p class="text-sm text-gray-600">This hover card appears above the trigger.</p>
        </HoverCard>
      </div>
    \`
  })
}`,...(x=(g=r.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const M=["Default","TopAligned"];export{s as Default,r as TopAligned,M as __namedExportsOrder,J as default};
