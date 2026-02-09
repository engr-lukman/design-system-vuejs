import{d as ea,o as ra,m as pa,q as ta,g as oa,n as sa,I as na,z as ga}from"./vue.esm-bundler-YEuhxn0F.js";const e=ea({__name:"Typography",props:{variant:{default:"p"},as:{default:""}},setup(a){const c=a,X={h1:"scroll-m-20 text-4xl font-extrabold tracking-tight text-gray-900",h2:"scroll-m-20 text-3xl font-semibold tracking-tight text-gray-900",h3:"scroll-m-20 text-2xl font-semibold tracking-tight text-gray-900",h4:"scroll-m-20 text-xl font-semibold tracking-tight text-gray-900",p:"leading-7 text-gray-700",lead:"text-xl text-gray-600",large:"text-lg font-semibold text-gray-900",small:"text-sm font-medium leading-none text-gray-700",muted:"text-sm text-gray-500",code:"relative rounded bg-gray-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-gray-900",blockquote:"border-l-4 border-gray-300 pl-4 italic text-gray-600"},Y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",lead:"p",large:"p",small:"small",muted:"p",code:"code",blockquote:"blockquote"},Z=c.as||Y[c.variant];return(aa,ya)=>(ra(),pa(na(ga(Z)),{class:sa(X[a.variant])},{default:ta(()=>[oa(aa.$slots,"default")]),_:3},8,["class"]))}});e.__docgenInfo={exportName:"default",displayName:"Typography",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"TypographyVariant"},defaultValue:{func:!1,value:"'p'"}},{name:"as",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/typography/Typography.vue"]};const da={title:"Data Display/Typography",component:e,tags:["autodocs"],argTypes:{variant:{control:"select",options:["h1","h2","h3","h4","p","lead","large","small","muted","code","blockquote"]},as:{control:"text"}}},r={args:{variant:"h1"},render:a=>({components:{Typography:e},setup:()=>({args:a}),template:'<Typography v-bind="args">Heading 1</Typography>'})},p={args:{variant:"h2"},render:a=>({components:{Typography:e},setup:()=>({args:a}),template:'<Typography v-bind="args">Heading 2</Typography>'})},t={args:{variant:"h3"},render:a=>({components:{Typography:e},setup:()=>({args:a}),template:'<Typography v-bind="args">Heading 3</Typography>'})},o={args:{variant:"h4"},render:a=>({components:{Typography:e},setup:()=>({args:a}),template:'<Typography v-bind="args">Heading 4</Typography>'})},s={args:{variant:"p"},render:a=>({components:{Typography:e},setup:()=>({args:a}),template:'<Typography v-bind="args">The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.</Typography>'})},n={args:{variant:"lead"},render:a=>({components:{Typography:e},setup:()=>({args:a}),template:'<Typography v-bind="args">A modal dialog that interrupts the user with important content and expects a response.</Typography>'})},g={args:{variant:"large"},render:a=>({components:{Typography:e},setup:()=>({args:a}),template:'<Typography v-bind="args">Are you absolutely sure?</Typography>'})},y={args:{variant:"small"},render:a=>({components:{Typography:e},setup:()=>({args:a}),template:'<Typography v-bind="args">Email address</Typography>'})},i={args:{variant:"muted"},render:a=>({components:{Typography:e},setup:()=>({args:a}),template:'<Typography v-bind="args">Enter your email address.</Typography>'})},d={args:{variant:"code"},render:a=>({components:{Typography:e},setup:()=>({args:a}),template:'<Typography v-bind="args">@radix-ui/vue</Typography>'})},h={args:{variant:"blockquote"},render:a=>({components:{Typography:e},setup:()=>({args:a}),template:`<Typography v-bind="args">"After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."</Typography>`})},l={render:()=>({components:{Typography:e},template:`
      <div class="space-y-4 max-w-lg">
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="h4">Heading 4</Typography>
        <Typography variant="lead">Lead paragraph text</Typography>
        <Typography variant="p">Regular paragraph body text with normal sizing.</Typography>
        <Typography variant="large">Large text</Typography>
        <Typography variant="small">Small text</Typography>
        <Typography variant="muted">Muted text</Typography>
        <Typography variant="code">inline code</Typography>
        <Typography variant="blockquote">A blockquote example</Typography>
      </div>
    `})};var m,u,T;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'h1'
  },
  render: args => ({
    components: {
      Typography
    },
    setup: () => ({
      args
    }),
    template: '<Typography v-bind="args">Heading 1</Typography>'
  })
}`,...(T=(u=r.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};var v,x,b;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'h2'
  },
  render: args => ({
    components: {
      Typography
    },
    setup: () => ({
      args
    }),
    template: '<Typography v-bind="args">Heading 2</Typography>'
  })
}`,...(b=(x=p.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var f,k,H;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'h3'
  },
  render: args => ({
    components: {
      Typography
    },
    setup: () => ({
      args
    }),
    template: '<Typography v-bind="args">Heading 3</Typography>'
  })
}`,...(H=(k=t.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var S,q,w;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'h4'
  },
  render: args => ({
    components: {
      Typography
    },
    setup: () => ({
      args
    }),
    template: '<Typography v-bind="args">Heading 4</Typography>'
  })
}`,...(w=(q=o.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var j,A,L;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'p'
  },
  render: args => ({
    components: {
      Typography
    },
    setup: () => ({
      args
    }),
    template: '<Typography v-bind="args">The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.</Typography>'
  })
}`,...(L=(A=s.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var _,C,z;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'lead'
  },
  render: args => ({
    components: {
      Typography
    },
    setup: () => ({
      args
    }),
    template: '<Typography v-bind="args">A modal dialog that interrupts the user with important content and expects a response.</Typography>'
  })
}`,...(z=(C=n.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var E,V,B;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'large'
  },
  render: args => ({
    components: {
      Typography
    },
    setup: () => ({
      args
    }),
    template: '<Typography v-bind="args">Are you absolutely sure?</Typography>'
  })
}`,...(B=(V=g.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var M,D,I;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: 'small'
  },
  render: args => ({
    components: {
      Typography
    },
    setup: () => ({
      args
    }),
    template: '<Typography v-bind="args">Email address</Typography>'
  })
}`,...(I=(D=y.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var N,P,R;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'muted'
  },
  render: args => ({
    components: {
      Typography
    },
    setup: () => ({
      args
    }),
    template: '<Typography v-bind="args">Enter your email address.</Typography>'
  })
}`,...(R=(P=i.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var F,O,$;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'code'
  },
  render: args => ({
    components: {
      Typography
    },
    setup: () => ({
      args
    }),
    template: '<Typography v-bind="args">@radix-ui/vue</Typography>'
  })
}`,...($=(O=d.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var G,J,K;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'blockquote'
  },
  render: args => ({
    components: {
      Typography
    },
    setup: () => ({
      args
    }),
    template: '<Typography v-bind="args">"After all," he said, "everyone enjoys a good joke, so it\\'s only fair that they should pay for the privilege."</Typography>'
  })
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,W;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Typography
    },
    template: \`
      <div class="space-y-4 max-w-lg">
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="h4">Heading 4</Typography>
        <Typography variant="lead">Lead paragraph text</Typography>
        <Typography variant="p">Regular paragraph body text with normal sizing.</Typography>
        <Typography variant="large">Large text</Typography>
        <Typography variant="small">Small text</Typography>
        <Typography variant="muted">Muted text</Typography>
        <Typography variant="code">inline code</Typography>
        <Typography variant="blockquote">A blockquote example</Typography>
      </div>
    \`
  })
}`,...(W=(U=l.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};const ha=["Heading1","Heading2","Heading3","Heading4","Paragraph","Lead","Large","Small","Muted","Code","Blockquote","AllVariants"];export{l as AllVariants,h as Blockquote,d as Code,r as Heading1,p as Heading2,t as Heading3,o as Heading4,g as Large,n as Lead,i as Muted,s as Paragraph,y as Small,ha as __namedExportsOrder,da as default};
