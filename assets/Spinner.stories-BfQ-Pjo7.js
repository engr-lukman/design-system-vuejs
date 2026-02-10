import{d as ne,b as r,f as t,n as s,t as y,u as f,v as te,o as n}from"./vue.esm-bundler-DtUWbB1b.js";const le=["aria-label"],ie={class:"flex flex-col items-center gap-3 rounded-lg bg-white p-6 shadow-lg"},oe=["aria-label"],l=ne({__name:"Spinner",props:{size:{default:"md"},variant:{default:"default"},label:{default:""},overlay:{type:Boolean,default:!1}},setup(e){const i=e,ee={xs:"h-3 w-3",sm:"h-4 w-4",md:"h-6 w-6",lg:"h-8 w-8",xl:"h-12 w-12"},ae={default:"text-gray-900",primary:"text-gray-900",secondary:"text-gray-500",danger:"text-red-500",success:"text-green-600"},se={default:"text-gray-200",primary:"text-gray-200",secondary:"text-gray-200",danger:"text-red-200",success:"text-green-200"},re={xs:"text-xs",sm:"text-xs",md:"text-sm",lg:"text-sm",xl:"text-base"},a=te(()=>({size:ee[i.size],color:ae[i.variant],track:se[i.variant],labelSize:re[i.size]}));return(ce,de)=>e.overlay?(n(),r("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-gray-950/50",role:"status","aria-label":e.label||"Loading"},[t("div",ie,[(n(),r("svg",{class:s(["animate-spin",a.value.size]),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","aria-hidden":"true"},[t("circle",{class:s(a.value.track),cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,2),t("path",{class:s(a.value.color),fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"},null,2)],2)),e.label?(n(),r("span",{key:0,class:s(["font-medium text-gray-700",a.value.labelSize])},y(e.label),3)):f("",!0)])],8,le)):(n(),r("div",{key:1,class:"inline-flex items-center gap-2",role:"status","aria-label":e.label||"Loading"},[(n(),r("svg",{class:s(["animate-spin",a.value.size]),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","aria-hidden":"true"},[t("circle",{class:s(a.value.track),cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,2),t("path",{class:s(a.value.color),fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"},null,2)],2)),e.label?(n(),r("span",{key:0,class:s(["text-gray-700",a.value.labelSize])},y(e.label),3)):f("",!0)],8,oe))}});l.__docgenInfo={exportName:"default",displayName:"Spinner",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"SpinnerSize"},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"SpinnerVariant"},defaultValue:{func:!1,value:"'default'"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"overlay",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/spinner/Spinner.vue"]};const me={title:"Feedback/Spinner",component:l,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]},variant:{control:"select",options:["default","primary","secondary","danger","success"]},label:{control:"text"},overlay:{control:"boolean"}}},o={args:{}},c={args:{label:"Loading..."}},d={args:{size:"sm",label:"Loading"}},p={args:{size:"lg",label:"Please wait"}},m={args:{size:"xl",label:"Loading data"}},u={args:{variant:"danger",label:"Error occurred"}},g={args:{variant:"success",label:"Processing"}},x={args:{variant:"secondary",label:"Syncing"}},b={render:()=>({components:{Spinner:l},template:`
      <div class="flex items-end gap-6">
        <Spinner size="xs" label="xs" />
        <Spinner size="sm" label="sm" />
        <Spinner size="md" label="md" />
        <Spinner size="lg" label="lg" />
        <Spinner size="xl" label="xl" />
      </div>
    `})},v={render:()=>({components:{Spinner:l},template:`
      <div class="flex items-end gap-6">
        <Spinner variant="default" label="Default" />
        <Spinner variant="primary" label="Primary" />
        <Spinner variant="secondary" label="Secondary" />
        <Spinner variant="danger" label="Danger" />
        <Spinner variant="success" label="Success" />
      </div>
    `})},S={render:()=>({components:{Spinner:l},template:`
      <div class="space-y-4">
        <div class="flex items-center gap-3 rounded-md border border-gray-200 p-4">
          <Spinner size="sm" />
          <span class="text-sm text-gray-700">Saving changes...</span>
        </div>
        <div class="flex items-center gap-3 rounded-md border border-gray-200 p-4">
          <Spinner size="sm" variant="success" />
          <span class="text-sm text-gray-700">Uploading file...</span>
        </div>
        <button
          class="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
          disabled
        >
          <Spinner size="xs" variant="secondary" />
          Processing
        </button>
      </div>
    `})};var z,h,w;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {}
}`,...(w=(h=o.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var k,L,C;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Loading...'
  }
}`,...(C=(L=c.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var V,D,P;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Loading'
  }
}`,...(P=(D=d.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var B,E,q;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Please wait'
  }
}`,...(q=(E=p.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var A,N,U;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    size: 'xl',
    label: 'Loading data'
  }
}`,...(U=(N=m.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var j,I,F;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    label: 'Error occurred'
  }
}`,...(F=(I=u.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var M,W,_;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    label: 'Processing'
  }
}`,...(_=(W=g.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var O,T,G;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    label: 'Syncing'
  }
}`,...(G=(T=x.parameters)==null?void 0:T.docs)==null?void 0:G.source}}};var H,J,K;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Spinner
    },
    template: \`
      <div class="flex items-end gap-6">
        <Spinner size="xs" label="xs" />
        <Spinner size="sm" label="sm" />
        <Spinner size="md" label="md" />
        <Spinner size="lg" label="lg" />
        <Spinner size="xl" label="xl" />
      </div>
    \`
  })
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,R,X;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Spinner
    },
    template: \`
      <div class="flex items-end gap-6">
        <Spinner variant="default" label="Default" />
        <Spinner variant="primary" label="Primary" />
        <Spinner variant="secondary" label="Secondary" />
        <Spinner variant="danger" label="Danger" />
        <Spinner variant="success" label="Success" />
      </div>
    \`
  })
}`,...(X=(R=v.parameters)==null?void 0:R.docs)==null?void 0:X.source}}};var Y,Z,$;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Spinner
    },
    template: \`
      <div class="space-y-4">
        <div class="flex items-center gap-3 rounded-md border border-gray-200 p-4">
          <Spinner size="sm" />
          <span class="text-sm text-gray-700">Saving changes...</span>
        </div>
        <div class="flex items-center gap-3 rounded-md border border-gray-200 p-4">
          <Spinner size="sm" variant="success" />
          <span class="text-sm text-gray-700">Uploading file...</span>
        </div>
        <button
          class="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
          disabled
        >
          <Spinner size="xs" variant="secondary" />
          Processing
        </button>
      </div>
    \`
  })
}`,...($=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};const ue=["Default","WithLabel","Small","Large","ExtraLarge","Danger","Success","Secondary","AllSizes","AllVariants","InlineUsage"];export{b as AllSizes,v as AllVariants,u as Danger,o as Default,m as ExtraLarge,S as InlineUsage,p as Large,x as Secondary,d as Small,g as Success,c as WithLabel,ue as __namedExportsOrder,me as default};
