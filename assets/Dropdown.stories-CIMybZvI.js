import{d as q,w as R,p as F,b as a,e as l,g as z,q as O,s as U,T as W,v as y,o as s,x as $,n as b,F as h,k as K,t as G,f as H}from"./vue.esm-bundler-Db6pwSvC.js";const J={key:0,class:"my-1 border-t border-gray-200",role:"separator"},P=["disabled","onClick"],m=q({__name:"Dropdown",props:{items:{},align:{default:"left"},width:{default:"auto"}},emits:["select"],setup(t,{emit:N}){const S=N,r=y(!1),g=y(),T={auto:"min-w-[160px]",sm:"w-40",md:"w-56",lg:"w-72"};function A(){r.value=!r.value}function p(){r.value=!1}function j(e){e.disabled||(S("select",e),p())}function v(e){const o=e.target;g.value&&!g.value.contains(o)&&p()}function f(e){e.key==="Escape"&&p()}return R(r,e=>{e?(document.addEventListener("click",v),document.addEventListener("keydown",f)):(document.removeEventListener("click",v),document.removeEventListener("keydown",f))}),F(()=>{document.removeEventListener("click",v),document.removeEventListener("keydown",f)}),(e,o)=>(s(),a("div",{ref_key:"triggerRef",ref:g,class:"relative inline-block"},[l("div",{onClick:A},[z(e.$slots,"trigger",{},()=>[o[0]||(o[0]=l("button",{type:"button",class:"focus-visible:ring-blue-500 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 focus-visible:ring-2 focus-visible:outline-none"},[$(" Actions "),l("svg",{class:"ml-1 inline-block h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[l("path",{"fill-rule":"evenodd",d:"M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"})])],-1))])]),O(W,{"enter-active-class":"transition duration-150 ease-out","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"transition duration-100 ease-in","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:U(()=>[r.value?(s(),a("div",{key:0,class:b(["absolute z-50 mt-1 rounded-lg border border-gray-200 bg-white py-1 shadow-lg",T[t.width],t.align==="right"?"right-0":"left-0"]),role:"menu"},[(s(!0),a(h,null,K(t.items,n=>(s(),a(h,{key:n.key},[n.separator?(s(),a("div",J)):(s(),a("button",{key:1,type:"button",role:"menuitem",disabled:n.disabled,class:b(["flex w-full items-center px-3 py-2 text-left text-sm transition-colors",n.disabled?"cursor-not-allowed text-gray-400":n.danger?"text-red-600 hover:bg-red-50":"text-gray-700 hover:bg-gray-100"]),onClick:Q=>j(n)},G(n.label),11,P))],64))),128))],2)):H("",!0)]),_:1})],512))}});m.__docgenInfo={exportName:"default",displayName:"Dropdown",description:"",tags:{},props:[{name:"items",required:!0,type:{name:"Array",elements:[{name:"DropdownItem"}]}},{name:"align",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'}]},defaultValue:{func:!1,value:"'left'"}},{name:"width",required:!1,type:{name:"union",elements:[{name:'"auto"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'auto'"}}],events:[{name:"select",type:{names:["DropdownItem"]}}],slots:[{name:"trigger"}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/components/ui/dropdown/Dropdown.vue"]};const Y={title:"UI/Dropdown",component:m,tags:["autodocs"],argTypes:{align:{control:"select",options:["left","right"]},width:{control:"select",options:["auto","sm","md","lg"]}}},w=[{key:"edit",label:"Edit"},{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"},{key:"sep",label:"",separator:!0},{key:"delete",label:"Delete",danger:!0}],i={args:{items:w}},d={args:{items:w,align:"right"},render:t=>({components:{Dropdown:m},setup:()=>({args:t}),template:`
      <div class="flex justify-end">
        <Dropdown v-bind="args" />
      </div>
    `})},c={args:{items:[{key:"view",label:"View"},{key:"edit",label:"Edit",disabled:!0},{key:"delete",label:"Delete",danger:!0}]}},u={args:{items:w},render:t=>({components:{Dropdown:m},setup:()=>({args:t}),template:`
      <Dropdown v-bind="args">
        <template #trigger>
          <button class="rounded-full p-2 hover:bg-gray-100">
            <svg class="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM11.5 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
            </svg>
          </button>
        </template>
      </Dropdown>
    `})};var k,x,D;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    items: defaultItems
  }
}`,...(D=(x=i.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var C,E,I;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    align: 'right'
  },
  render: args => ({
    components: {
      Dropdown
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="flex justify-end">
        <Dropdown v-bind="args" />
      </div>
    \`
  })
}`,...(I=(E=d.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var L,_,V;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    items: [{
      key: 'view',
      label: 'View'
    }, {
      key: 'edit',
      label: 'Edit',
      disabled: true
    }, {
      key: 'delete',
      label: 'Delete',
      danger: true
    }]
  }
}`,...(V=(_=c.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var M,Z,B;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    items: defaultItems
  },
  render: args => ({
    components: {
      Dropdown
    },
    setup: () => ({
      args
    }),
    template: \`
      <Dropdown v-bind="args">
        <template #trigger>
          <button class="rounded-full p-2 hover:bg-gray-100">
            <svg class="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM11.5 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
            </svg>
          </button>
        </template>
      </Dropdown>
    \`
  })
}`,...(B=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:B.source}}};const ee=["Default","RightAligned","WithDisabledItem","CustomTrigger"];export{u as CustomTrigger,i as Default,d as RightAligned,c as WithDisabledItem,ee as __namedExportsOrder,Y as default};
