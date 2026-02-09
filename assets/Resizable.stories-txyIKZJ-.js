import{d as Y,B as G,C as J,b as u,F as k,e as K,n as S,k as p,v as Q,o as g,f as B,g as W,x as Z,u as ee}from"./vue.esm-bundler-YEuhxn0F.js";const te=["onPointerdown"],o=Y({__name:"Resizable",props:{panels:{},direction:{default:"horizontal"}},setup(e){const i=e,z=p(null),n=p([]),c=p(!1),d=p(-1);G(()=>{n.value=i.panels.map(t=>t.defaultSize??100/i.panels.length)});const I=Q(()=>["flex h-full w-full overflow-hidden rounded-lg border border-gray-200",i.direction==="horizontal"?"flex-row":"flex-col"]);function U(t,a){a.preventDefault(),c.value=!0,d.value=t,document.addEventListener("pointermove",b),document.addEventListener("pointerup",x)}function b(t){if(!c.value||!z.value)return;const a=z.value.getBoundingClientRect(),r=i.direction==="horizontal",l=r?a.width:a.height,_=(r?t.clientX-a.left:t.clientY-a.top)/l*100,s=d.value;let w=0;for(let R=0;R<s;R++)w+=n.value[R];const m=_-w,y=n.value[s]+n.value[s+1]-m,j=i.panels[s],L=i.panels[s+1],$=j.minSize??10,A=j.maxSize??90,O=L.minSize??10,X=L.maxSize??90;m>=$&&m<=A&&y>=O&&y<=X&&(n.value[s]=m,n.value[s+1]=y)}function x(){c.value=!1,d.value=-1,document.removeEventListener("pointermove",b),document.removeEventListener("pointerup",x)}return J(()=>{document.removeEventListener("pointermove",b),document.removeEventListener("pointerup",x)}),(t,a)=>(g(),u("div",{ref_key:"containerRef",ref:z,class:S(I.value)},[(g(!0),u(k,null,K(e.panels,(r,l)=>(g(),u(k,{key:r.id},[B("div",{style:Z({[e.direction==="horizontal"?"width":"height"]:`${n.value[l]}%`}),class:"overflow-auto"},[W(t.$slots,r.id)],4),l<e.panels.length-1?(g(),u("div",{key:0,class:S(["group relative flex shrink-0 items-center justify-center bg-gray-100 transition-colors hover:bg-gray-200",e.direction==="horizontal"?"w-1.5 cursor-col-resize":"h-1.5 cursor-row-resize",c.value&&d.value===l?"bg-gray-200":""]),onPointerdown:P=>U(l,P)},[B("div",{class:S(["rounded-full bg-gray-400 transition-colors group-hover:bg-gray-600",e.direction==="horizontal"?"h-6 w-0.5":"h-0.5 w-6"])},null,2)],42,te)):ee("",!0)],64))),128))],2))}});o.__docgenInfo={exportName:"default",displayName:"Resizable",description:"",tags:{},props:[{name:"panels",required:!0,type:{name:"Array",elements:[{name:"ResizablePanel"}]}},{name:"direction",required:!1,type:{name:"union",elements:[{name:'"horizontal"'},{name:'"vertical"'}]},defaultValue:{func:!1,value:"'horizontal'"}}],slots:[{name:"panel.id",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/resizable/Resizable.vue"]};const se={title:"Layout/Resizable",component:o,tags:["autodocs"],argTypes:{direction:{control:"select",options:["horizontal","vertical"]}}},q=[{id:"left",defaultSize:50,minSize:20},{id:"right",defaultSize:50,minSize:20}],ne=[{id:"sidebar",defaultSize:25,minSize:15,maxSize:40},{id:"main",defaultSize:50,minSize:30},{id:"detail",defaultSize:25,minSize:15,maxSize:40}],f={args:{panels:q,direction:"horizontal"},render:e=>({components:{Resizable:o},setup:()=>({args:e}),template:`
      <div class="h-48">
        <Resizable v-bind="args">
          <template #left>
            <div class="flex h-full items-center justify-center bg-gray-50 p-4 text-sm text-gray-600">Left Panel</div>
          </template>
          <template #right>
            <div class="flex h-full items-center justify-center bg-gray-50 p-4 text-sm text-gray-600">Right Panel</div>
          </template>
        </Resizable>
      </div>
    `})},v={args:{panels:q,direction:"vertical"},render:e=>({components:{Resizable:o},setup:()=>({args:e}),template:`
      <div class="h-80">
        <Resizable v-bind="args">
          <template #left>
            <div class="flex h-full items-center justify-center bg-gray-50 p-4 text-sm text-gray-600">Top Panel</div>
          </template>
          <template #right>
            <div class="flex h-full items-center justify-center bg-gray-50 p-4 text-sm text-gray-600">Bottom Panel</div>
          </template>
        </Resizable>
      </div>
    `})},h={args:{panels:ne,direction:"horizontal"},render:e=>({components:{Resizable:o},setup:()=>({args:e}),template:`
      <div class="h-64">
        <Resizable v-bind="args">
          <template #sidebar>
            <div class="flex h-full items-center justify-center bg-blue-50 p-4 text-sm text-blue-600">Sidebar</div>
          </template>
          <template #main>
            <div class="flex h-full items-center justify-center bg-gray-50 p-4 text-sm text-gray-600">Main Content</div>
          </template>
          <template #detail>
            <div class="flex h-full items-center justify-center bg-green-50 p-4 text-sm text-green-600">Detail</div>
          </template>
        </Resizable>
      </div>
    `})};var C,E,T;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    panels: twoPanels,
    direction: 'horizontal'
  },
  render: args => ({
    components: {
      Resizable
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="h-48">
        <Resizable v-bind="args">
          <template #left>
            <div class="flex h-full items-center justify-center bg-gray-50 p-4 text-sm text-gray-600">Left Panel</div>
          </template>
          <template #right>
            <div class="flex h-full items-center justify-center bg-gray-50 p-4 text-sm text-gray-600">Right Panel</div>
          </template>
        </Resizable>
      </div>
    \`
  })
}`,...(T=(E=f.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var D,V,M;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    panels: twoPanels,
    direction: 'vertical'
  },
  render: args => ({
    components: {
      Resizable
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="h-80">
        <Resizable v-bind="args">
          <template #left>
            <div class="flex h-full items-center justify-center bg-gray-50 p-4 text-sm text-gray-600">Top Panel</div>
          </template>
          <template #right>
            <div class="flex h-full items-center justify-center bg-gray-50 p-4 text-sm text-gray-600">Bottom Panel</div>
          </template>
        </Resizable>
      </div>
    \`
  })
}`,...(M=(V=v.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var N,F,H;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    panels: threePanels,
    direction: 'horizontal'
  },
  render: args => ({
    components: {
      Resizable
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="h-64">
        <Resizable v-bind="args">
          <template #sidebar>
            <div class="flex h-full items-center justify-center bg-blue-50 p-4 text-sm text-blue-600">Sidebar</div>
          </template>
          <template #main>
            <div class="flex h-full items-center justify-center bg-gray-50 p-4 text-sm text-gray-600">Main Content</div>
          </template>
          <template #detail>
            <div class="flex h-full items-center justify-center bg-green-50 p-4 text-sm text-green-600">Detail</div>
          </template>
        </Resizable>
      </div>
    \`
  })
}`,...(H=(F=h.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};const ie=["Horizontal","Vertical","ThreePanels"];export{f as Horizontal,h as ThreePanels,v as Vertical,ie as __namedExportsOrder,se as default};
