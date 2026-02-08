import{d as j,b as o,n as s,e as a,t as q,f as v,g as H,j as b,o as l}from"./vue.esm-bundler-Db6pwSvC.js";const O=["d"],$={class:"flex-1"},r=j({__name:"Alert",props:{variant:{default:"info"},title:{default:""},dismissible:{type:Boolean,default:!1}},emits:["dismiss"],setup(e,{emit:Y}){const E=e,N={info:{bg:"bg-blue-50",border:"border-blue-500",text:"text-blue-700",icon:"M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"},success:{bg:"bg-green-50",border:"border-green-500",text:"text-green-700",icon:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"},warning:{bg:"bg-amber-50",border:"border-amber-500",text:"text-amber-700",icon:"M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"},danger:{bg:"bg-red-50",border:"border-red-500",text:"text-red-700",icon:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"}},t=b(()=>N[E.variant]),P=b(()=>["flex gap-3 rounded-lg border-l-4 p-4",t.value.bg,t.value.border]);return(p,n)=>(l(),o("div",{class:s(P.value),role:"alert"},[(l(),o("svg",{class:s(["h-5 w-5 shrink-0 mt-0.5",t.value.text]),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[a("path",{"fill-rule":"evenodd",d:t.value.icon,"clip-rule":"evenodd"},null,8,O)],2)),a("div",$,[e.title?(l(),o("h3",{key:0,class:s(["text-sm font-semibold",t.value.text])},q(e.title),3)):v("",!0),a("div",{class:s(["text-sm",t.value.text,e.title?"mt-1":""])},[H(p.$slots,"default")],2)]),e.dismissible?(l(),o("button",{key:0,type:"button",class:s(["ml-auto shrink-0 rounded-lg p-1 transition-colors","hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1",t.value.text]),"aria-label":"Dismiss",onClick:n[0]||(n[0]=_=>p.$emit("dismiss"))},[...n[1]||(n[1]=[a("svg",{class:"h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[a("path",{d:"M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"})],-1)])],2)):v("",!0)],2))}});r.__docgenInfo={exportName:"default",displayName:"Alert",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"AlertVariant"},defaultValue:{func:!1,value:"'info'"}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"dismissible",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"dismiss"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/components/ui/alert/Alert.vue"]};const F={title:"UI/Alert",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["info","success","warning","danger"]},dismissible:{control:"boolean"}}},i={args:{variant:"info",title:"Information"},render:e=>({components:{Alert:r},setup:()=>({args:e}),template:'<Alert v-bind="args">This is an informational message.</Alert>'})},c={args:{variant:"success",title:"Success"},render:e=>({components:{Alert:r},setup:()=>({args:e}),template:'<Alert v-bind="args">Operation completed successfully.</Alert>'})},d={args:{variant:"warning",title:"Warning"},render:e=>({components:{Alert:r},setup:()=>({args:e}),template:'<Alert v-bind="args">Please review the changes before proceeding.</Alert>'})},m={args:{variant:"danger",title:"Error"},render:e=>({components:{Alert:r},setup:()=>({args:e}),template:'<Alert v-bind="args">Something went wrong. Please try again.</Alert>'})},u={args:{variant:"info"},render:e=>({components:{Alert:r},setup:()=>({args:e}),template:'<Alert v-bind="args">A simple alert without a title.</Alert>'})},g={args:{variant:"success",title:"Saved!",dismissible:!0},render:e=>({components:{Alert:r},setup:()=>({args:e}),template:'<Alert v-bind="args">Your changes have been saved.</Alert>'})};var f,A,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Information'
  },
  render: args => ({
    components: {
      Alert
    },
    setup: () => ({
      args
    }),
    template: '<Alert v-bind="args">This is an informational message.</Alert>'
  })
}`,...(h=(A=i.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};var w,x,y;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Success'
  },
  render: args => ({
    components: {
      Alert
    },
    setup: () => ({
      args
    }),
    template: '<Alert v-bind="args">Operation completed successfully.</Alert>'
  })
}`,...(y=(x=c.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var S,Z,k;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Warning'
  },
  render: args => ({
    components: {
      Alert
    },
    setup: () => ({
      args
    }),
    template: '<Alert v-bind="args">Please review the changes before proceeding.</Alert>'
  })
}`,...(k=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:k.source}}};var L,C,M;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    title: 'Error'
  },
  render: args => ({
    components: {
      Alert
    },
    setup: () => ({
      args
    }),
    template: '<Alert v-bind="args">Something went wrong. Please try again.</Alert>'
  })
}`,...(M=(C=m.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var B,D,I;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'info'
  },
  render: args => ({
    components: {
      Alert
    },
    setup: () => ({
      args
    }),
    template: '<Alert v-bind="args">A simple alert without a title.</Alert>'
  })
}`,...(I=(D=u.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var V,W,T;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Saved!',
    dismissible: true
  },
  render: args => ({
    components: {
      Alert
    },
    setup: () => ({
      args
    }),
    template: '<Alert v-bind="args">Your changes have been saved.</Alert>'
  })
}`,...(T=(W=g.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};const U=["Info","Success","Warning","Danger","WithoutTitle","Dismissible"];export{m as Danger,g as Dismissible,i as Info,c as Success,d as Warning,u as WithoutTitle,U as __namedExportsOrder,F as default};
