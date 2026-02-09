import{d as w,B as E,C as B,b as s,g as I,m as S,p as j,q as D,T as F,s as L,k as a,o as n,x as N,F as v,e as O,n as R,f as V,t as y,u as f}from"./vue.esm-bundler-YEuhxn0F.js";const $={key:0,class:"my-1 border-t border-gray-200",role:"separator"},z=["disabled","onClick"],A={key:0,class:"ml-6 text-xs text-gray-400"},c=w({__name:"ContextMenu",props:{items:{}},emits:["select"],setup(o,{emit:h}){const C=h,l=a(!1),d=a(0),i=a(0),k=a(null);function _(e){e.preventDefault(),d.value=e.clientX,i.value=e.clientY,l.value=!0}function u(){l.value=!1}function M(e){e.disabled||e.separator||(C("select",e),u())}function m(){u()}function p(e){e.key==="Escape"&&u()}return E(()=>{document.addEventListener("click",m),document.addEventListener("keydown",p)}),B(()=>{document.removeEventListener("click",m),document.removeEventListener("keydown",p)}),(e,X)=>(n(),s("div",{ref_key:"containerRef",ref:k,onContextmenu:_},[I(e.$slots,"default"),(n(),S(L,{to:"body"},[j(F,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"scale-95 opacity-0","enter-to-class":"scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"scale-100 opacity-100","leave-to-class":"scale-95 opacity-0"},{default:D(()=>[l.value?(n(),s("div",{key:0,class:"fixed z-50 min-w-[160px] rounded-md border border-gray-200 bg-white py-1 shadow-md",style:N({left:`${d.value}px`,top:`${i.value}px`}),role:"menu"},[(n(!0),s(v,null,O(o.items,t=>(n(),s(v,{key:t.value},[t.separator?(n(),s("div",$)):(n(),s("button",{key:1,type:"button",role:"menuitem",disabled:t.disabled,class:R(["flex w-full items-center justify-between px-3 py-1.5 text-left text-sm transition-colors",t.disabled?"cursor-not-allowed text-gray-400":t.danger?"text-red-600 hover:bg-red-50":"text-gray-700 hover:bg-gray-100"]),onClick:q=>M(t)},[V("span",null,y(t.label),1),t.shortcut?(n(),s("span",A,y(t.shortcut),1)):f("",!0)],10,z))],64))),128))],4)):f("",!0)]),_:1})]))],544))}});c.__docgenInfo={exportName:"default",displayName:"ContextMenu",description:"",tags:{},props:[{name:"items",required:!0,type:{name:"Array",elements:[{name:"ContextMenuItem"}]}}],events:[{name:"select",type:{names:["ContextMenuItem"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/context-menu/ContextMenu.vue"]};const T=[{label:"Cut",value:"cut",shortcut:"⌘X"},{label:"Copy",value:"copy",shortcut:"⌘C"},{label:"Paste",value:"paste",shortcut:"⌘V"},{value:"sep1",separator:!0},{label:"Select All",value:"select-all",shortcut:"⌘A"},{label:"Find",value:"find",shortcut:"⌘F"},{value:"sep2",separator:!0},{label:"Share",value:"share",disabled:!0},{label:"Delete",value:"delete",danger:!0}],K={title:"Overlay/ContextMenu",component:c,tags:["autodocs"]},r={args:{items:T},render:o=>({components:{ContextMenu:c},setup:()=>({args:o}),template:`
      <ContextMenu v-bind="args">
        <div class="flex h-48 w-80 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 text-sm text-gray-500">
          Right-click here
        </div>
      </ContextMenu>
    `})};var x,b,g;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    items: menuItems
  },
  render: args => ({
    components: {
      ContextMenu
    },
    setup: () => ({
      args
    }),
    template: \`
      <ContextMenu v-bind="args">
        <div class="flex h-48 w-80 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 text-sm text-gray-500">
          Right-click here
        </div>
      </ContextMenu>
    \`
  })
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const P=["Default"];export{r as Default,P as __namedExportsOrder,K as default};
