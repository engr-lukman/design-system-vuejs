import{d as Z,b,e as B,f as _,g as ee,n as te,j as ae,o as f}from"./vue.esm-bundler-Db6pwSvC.js";const re=["type","disabled"],se={key:0,class:"mr-2 h-4 w-4 animate-spin",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","aria-hidden":"true"},t=Z({__name:"Button",props:{variant:{default:"primary"},size:{default:"md"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},type:{default:"button"},fullWidth:{type:Boolean,default:!1}},emits:["click"],setup(e){const p=e,Q={primary:"bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500",secondary:"bg-gray-200 text-gray-800 hover:bg-gray-300 focus-visible:ring-gray-400",outline:"border border-blue-600 text-blue-600 hover:bg-blue-50 focus-visible:ring-blue-500",ghost:"text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-400",danger:"bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500"},R={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-base",lg:"px-6 py-3 text-lg"},X=ae(()=>["inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-150","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2","disabled:opacity-50 disabled:cursor-not-allowed",Q[p.variant],R[p.size],p.fullWidth?"w-full":""]);return(g,a)=>(f(),b("button",{type:e.type,class:te(X.value),disabled:e.disabled||e.loading,onClick:a[0]||(a[0]=Y=>g.$emit("click",Y))},[e.loading?(f(),b("svg",se,[...a[1]||(a[1]=[B("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),B("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"},null,-1)])])):_("",!0),ee(g.$slots,"default")],10,re))}});t.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"ButtonVariant"},defaultValue:{func:!1,value:"'primary'"}},{name:"size",required:!1,type:{name:"ButtonSize"},defaultValue:{func:!1,value:"'md'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"type",required:!1,type:{name:"union",elements:[{name:'"button"'},{name:'"submit"'},{name:'"reset"'}]},defaultValue:{func:!1,value:"'button'"}},{name:"fullWidth",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click",type:{names:["MouseEvent"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/components/ui/button/Button.vue"]};const ne={title:"UI/Button",component:t,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","outline","ghost","danger"]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},loading:{control:"boolean"},fullWidth:{control:"boolean"}}},r={args:{variant:"primary"},render:e=>({components:{Button:t},setup:()=>({args:e}),template:'<Button v-bind="args">Primary</Button>'})},s={args:{variant:"secondary"},render:e=>({components:{Button:t},setup:()=>({args:e}),template:'<Button v-bind="args">Secondary</Button>'})},o={args:{variant:"outline"},render:e=>({components:{Button:t},setup:()=>({args:e}),template:'<Button v-bind="args">Outline</Button>'})},n={args:{variant:"ghost"},render:e=>({components:{Button:t},setup:()=>({args:e}),template:'<Button v-bind="args">Ghost</Button>'})},u={args:{variant:"danger"},render:e=>({components:{Button:t},setup:()=>({args:e}),template:'<Button v-bind="args">Danger</Button>'})},l={args:{size:"sm"},render:e=>({components:{Button:t},setup:()=>({args:e}),template:'<Button v-bind="args">Small</Button>'})},i={args:{size:"lg"},render:e=>({components:{Button:t},setup:()=>({args:e}),template:'<Button v-bind="args">Large</Button>'})},d={args:{loading:!0},render:e=>({components:{Button:t},setup:()=>({args:e}),template:'<Button v-bind="args">Loading</Button>'})},c={args:{disabled:!0},render:e=>({components:{Button:t},setup:()=>({args:e}),template:'<Button v-bind="args">Disabled</Button>'})},m={args:{fullWidth:!0},render:e=>({components:{Button:t},setup:()=>({args:e}),template:'<Button v-bind="args">Full Width</Button>'})};var v,y,h;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  },
  render: args => ({
    components: {
      Button
    },
    setup: () => ({
      args
    }),
    template: '<Button v-bind="args">Primary</Button>'
  })
}`,...(h=(y=r.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var S,x,w;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  },
  render: args => ({
    components: {
      Button
    },
    setup: () => ({
      args
    }),
    template: '<Button v-bind="args">Secondary</Button>'
  })
}`,...(w=(x=s.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var z,k,V;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'outline'
  },
  render: args => ({
    components: {
      Button
    },
    setup: () => ({
      args
    }),
    template: '<Button v-bind="args">Outline</Button>'
  })
}`,...(V=(k=o.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var W,C,D;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: 'ghost'
  },
  render: args => ({
    components: {
      Button
    },
    setup: () => ({
      args
    }),
    template: '<Button v-bind="args">Ghost</Button>'
  })
}`,...(D=(C=n.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var L,q,F;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'danger'
  },
  render: args => ({
    components: {
      Button
    },
    setup: () => ({
      args
    }),
    template: '<Button v-bind="args">Danger</Button>'
  })
}`,...(F=(q=u.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var O,j,G;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  },
  render: args => ({
    components: {
      Button
    },
    setup: () => ({
      args
    }),
    template: '<Button v-bind="args">Small</Button>'
  })
}`,...(G=(j=l.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var N,P,E;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  },
  render: args => ({
    components: {
      Button
    },
    setup: () => ({
      args
    }),
    template: '<Button v-bind="args">Large</Button>'
  })
}`,...(E=(P=i.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var I,M,$;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    loading: true
  },
  render: args => ({
    components: {
      Button
    },
    setup: () => ({
      args
    }),
    template: '<Button v-bind="args">Loading</Button>'
  })
}`,...($=(M=d.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var T,U,A;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => ({
    components: {
      Button
    },
    setup: () => ({
      args
    }),
    template: '<Button v-bind="args">Disabled</Button>'
  })
}`,...(A=(U=c.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var H,J,K;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  },
  render: args => ({
    components: {
      Button
    },
    setup: () => ({
      args
    }),
    template: '<Button v-bind="args">Full Width</Button>'
  })
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const ue=["Primary","Secondary","Outline","Ghost","Danger","Small","Large","Loading","Disabled","FullWidth"];export{u as Danger,c as Disabled,m as FullWidth,n as Ghost,i as Large,d as Loading,o as Outline,r as Primary,s as Secondary,l as Small,ue as __namedExportsOrder,ne as default};
