import{d as oe,b as f,f as y,u as ue,g as ie,n as le,v as de,o as b}from"./vue.esm-bundler-DtUWbB1b.js";const ce=["type","disabled"],me={key:0,class:"mr-2 h-4 w-4 animate-spin",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","aria-hidden":"true"},t=oe({__name:"Button",props:{variant:{default:"primary"},size:{default:"md"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},type:{default:"button"},fullWidth:{type:Boolean,default:!1}},emits:["click"],setup(e){const B=e,ae={primary:"bg-gray-900 text-white hover:bg-gray-900/90 focus-visible:ring-gray-950",secondary:"bg-gray-100 text-gray-900 hover:bg-gray-100/80 focus-visible:ring-gray-950",outline:"border border-gray-200 bg-white text-gray-900 hover:bg-gray-100 focus-visible:ring-gray-950",ghost:"text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-950",danger:"bg-red-500 text-white hover:bg-red-500/90 focus-visible:ring-gray-950",link:"text-gray-900 underline-offset-4 hover:underline bg-transparent"},re={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-sm",lg:"px-6 py-3 text-lg"},ne=de(()=>["inline-flex items-center justify-center font-medium rounded-md transition-colors duration-150","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2","disabled:opacity-50 disabled:pointer-events-none",ae[B.variant],re[B.size],B.fullWidth?"w-full":""]);return(v,a)=>(b(),f("button",{type:e.type,class:le(ne.value),disabled:e.disabled||e.loading,onClick:a[0]||(a[0]=se=>v.$emit("click",se))},[e.loading?(b(),f("svg",me,[...a[1]||(a[1]=[y("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),y("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"},null,-1)])])):ue("",!0),ie(v.$slots,"default")],10,ce))}});t.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"ButtonVariant"},defaultValue:{func:!1,value:"'primary'"}},{name:"size",required:!1,type:{name:"ButtonSize"},defaultValue:{func:!1,value:"'md'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"type",required:!1,type:{name:"union",elements:[{name:'"button"'},{name:'"submit"'},{name:'"reset"'}]},defaultValue:{func:!1,value:"'button'"}},{name:"fullWidth",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click",type:{names:["MouseEvent"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/button/Button.vue"]};const ge={title:"Form/Button",component:t,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","outline","ghost","danger","link"]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},loading:{control:"boolean"},fullWidth:{control:"boolean"}}},r={args:{variant:"primary"},render:e=>({components:{Button:t},setup:()=>({args:e}),template:'<Button v-bind="args">Primary</Button>'})},n={args:{variant:"secondary"},render:e=>({components:{Button:t},setup:()=>({args:e}),template:'<Button v-bind="args">Secondary</Button>'})},s={args:{variant:"outline"},render:e=>({components:{Button:t},setup:()=>({args:e}),template:'<Button v-bind="args">Outline</Button>'})},o={args:{variant:"ghost"},render:e=>({components:{Button:t},setup:()=>({args:e}),template:'<Button v-bind="args">Ghost</Button>'})},u={args:{variant:"danger"},render:e=>({components:{Button:t},setup:()=>({args:e}),template:'<Button v-bind="args">Danger</Button>'})},i={args:{variant:"link"},render:e=>({components:{Button:t},setup:()=>({args:e}),template:'<Button v-bind="args">Link</Button>'})},l={args:{size:"sm"},render:e=>({components:{Button:t},setup:()=>({args:e}),template:'<Button v-bind="args">Small</Button>'})},d={args:{size:"lg"},render:e=>({components:{Button:t},setup:()=>({args:e}),template:'<Button v-bind="args">Large</Button>'})},c={args:{loading:!0},render:e=>({components:{Button:t},setup:()=>({args:e}),template:'<Button v-bind="args">Loading</Button>'})},m={args:{disabled:!0},render:e=>({components:{Button:t},setup:()=>({args:e}),template:'<Button v-bind="args">Disabled</Button>'})},p={args:{fullWidth:!0},render:e=>({components:{Button:t},setup:()=>({args:e}),template:'<Button v-bind="args">Full Width</Button>'})},g={render:()=>({components:{Button:t},template:`
      <div class="flex flex-wrap items-center gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="link">Link</Button>
      </div>
    `})};var h,S,k;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(k=(S=r.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var x,w,L;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(L=(w=n.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var z,V,D;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(D=(V=s.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var W,C,O;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(O=(C=o.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var q,F,G;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(G=(F=u.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var P,N,j;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'link'
  },
  render: args => ({
    components: {
      Button
    },
    setup: () => ({
      args
    }),
    template: '<Button v-bind="args">Link</Button>'
  })
}`,...(j=(N=i.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var E,M,$;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...($=(M=l.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var I,T,A;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(A=(T=d.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var H,J,K;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,R,U;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(U=(R=m.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var X,Y,Z;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var _,ee,te;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button
    },
    template: \`
      <div class="flex flex-wrap items-center gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="link">Link</Button>
      </div>
    \`
  })
}`,...(te=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const Be=["Primary","Secondary","Outline","Ghost","Danger","Link","Small","Large","Loading","Disabled","FullWidth","Variants"];export{u as Danger,m as Disabled,p as FullWidth,o as Ghost,d as Large,i as Link,c as Loading,s as Outline,r as Primary,n as Secondary,l as Small,g as Variants,Be as __namedExportsOrder,ge as default};
