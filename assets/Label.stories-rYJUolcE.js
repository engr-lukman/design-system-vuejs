import{d as C,b as d,g as F,u as I,n as N,o as u}from"./vue.esm-bundler-YEuhxn0F.js";const j=["for"],w={key:0,class:"ml-0.5 text-red-500","aria-hidden":"true"},a=C({__name:"Label",props:{for:{default:void 0},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{default:"md"}},setup(e){const V=e,k={sm:"text-xs",md:"text-sm",lg:"text-base"};return(B,R)=>(u(),d("label",{for:V.for,class:N(["leading-none font-medium text-gray-700",k[e.size],e.disabled&&"cursor-not-allowed opacity-50"])},[F(B.$slots,"default"),e.required?(u(),d("span",w,"*")):I("",!0)],10,j))}});a.__docgenInfo={exportName:"default",displayName:"Label",description:"",tags:{},props:[{name:"for",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/label/Label.vue"]};const O={title:"Form/Label",component:a,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},required:{control:"boolean"},disabled:{control:"boolean"}}},s={render:e=>({components:{Label:a},setup:()=>({args:e}),template:'<Label v-bind="args">Email address</Label>'})},r={args:{required:!0},render:e=>({components:{Label:a},setup:()=>({args:e}),template:'<Label v-bind="args">Full name</Label>'})},l={args:{size:"sm"},render:e=>({components:{Label:a},setup:()=>({args:e}),template:'<Label v-bind="args">Small label</Label>'})},t={args:{size:"lg"},render:e=>({components:{Label:a},setup:()=>({args:e}),template:'<Label v-bind="args">Large label</Label>'})},o={args:{disabled:!0},render:e=>({components:{Label:a},setup:()=>({args:e}),template:'<Label v-bind="args">Disabled label</Label>'})},n={args:{for:"email-input",required:!0},render:e=>({components:{Label:a},setup:()=>({args:e}),template:`
      <div class="flex flex-col gap-1.5">
        <Label v-bind="args">Email</Label>
        <input id="email-input" type="email" placeholder="you@example.com" class="rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
      </div>
    `})};var m,i,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Label
    },
    setup: () => ({
      args
    }),
    template: '<Label v-bind="args">Email address</Label>'
  })
}`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,b,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    required: true
  },
  render: args => ({
    components: {
      Label
    },
    setup: () => ({
      args
    }),
    template: '<Label v-bind="args">Full name</Label>'
  })
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,L,v;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  },
  render: args => ({
    components: {
      Label
    },
    setup: () => ({
      args
    }),
    template: '<Label v-bind="args">Small label</Label>'
  })
}`,...(v=(L=l.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var y,x,q;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  },
  render: args => ({
    components: {
      Label
    },
    setup: () => ({
      args
    }),
    template: '<Label v-bind="args">Large label</Label>'
  })
}`,...(q=(x=t.parameters)==null?void 0:x.docs)==null?void 0:q.source}}};var S,z,h;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => ({
    components: {
      Label
    },
    setup: () => ({
      args
    }),
    template: '<Label v-bind="args">Disabled label</Label>'
  })
}`,...(h=(z=o.parameters)==null?void 0:z.docs)==null?void 0:h.source}}};var _,D,E;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    for: 'email-input',
    required: true
  },
  render: args => ({
    components: {
      Label
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="flex flex-col gap-1.5">
        <Label v-bind="args">Email</Label>
        <input id="email-input" type="email" placeholder="you@example.com" class="rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
      </div>
    \`
  })
}`,...(E=(D=n.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const T=["Default","Required","Small","Large","Disabled","WithInput"];export{s as Default,o as Disabled,t as Large,r as Required,l as Small,n as WithInput,T as __namedExportsOrder,O as default};
