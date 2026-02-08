import{d as N,b as i,n as u,f as p,g as P,e as B,j as W,o as m}from"./vue.esm-bundler-Db6pwSvC.js";const e=N({__name:"Badge",props:{variant:{default:"primary"},size:{default:"md"},rounded:{type:Boolean,default:!1},dot:{type:Boolean,default:!1},removable:{type:Boolean,default:!1}},emits:["remove"],setup(a){const g=a,j={primary:"bg-blue-100 text-blue-700",secondary:"bg-gray-100 text-gray-700",success:"bg-green-100 text-green-700",warning:"bg-amber-100 text-amber-700",danger:"bg-red-100 text-red-700",info:"bg-blue-100 text-blue-700"},A={primary:"bg-blue-500",secondary:"bg-gray-500",success:"bg-green-500",warning:"bg-amber-500",danger:"bg-red-500",info:"bg-blue-500"},E={sm:"px-1.5 py-0.5 text-xs",md:"px-2 py-0.5 text-xs",lg:"px-2.5 py-1 text-sm"},I=W(()=>["inline-flex items-center gap-1 font-medium",j[g.variant],E[g.size],g.rounded?"rounded-full":"rounded"]);return(c,n)=>(m(),i("span",{class:u(I.value)},[a.dot?(m(),i("span",{key:0,class:u(["inline-block h-1.5 w-1.5 rounded-full",A[a.variant]]),"aria-hidden":"true"},null,2)):p("",!0),P(c.$slots,"default"),a.removable?(m(),i("button",{key:1,type:"button",class:"-mr-0.5 ml-0.5 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full hover:bg-black/10 focus-visible:outline-none","aria-label":"Remove",onClick:n[0]||(n[0]=M=>c.$emit("remove"))},[...n[1]||(n[1]=[B("svg",{class:"h-3 w-3",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[B("path",{d:"M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"})],-1)])])):p("",!0)],2))}});e.__docgenInfo={exportName:"default",displayName:"Badge",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"BadgeVariant"},defaultValue:{func:!1,value:"'primary'"}},{name:"size",required:!1,type:{name:"BadgeSize"},defaultValue:{func:!1,value:"'md'"}},{name:"rounded",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dot",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"removable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"remove"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/components/ui/badge/Badge.vue"]};const F={title:"UI/Badge",component:e,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","success","warning","danger","info"]},size:{control:"select",options:["sm","md","lg"]},rounded:{control:"boolean"},dot:{control:"boolean"},removable:{control:"boolean"}}},r={render:a=>({components:{Badge:e},setup:()=>({args:a}),template:'<Badge v-bind="args">Badge</Badge>'})},d={render:()=>({components:{Badge:e},template:`
      <div class="flex flex-wrap gap-2">
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="info">Info</Badge>
      </div>
    `})},s={render:()=>({components:{Badge:e},template:`
      <div class="flex flex-wrap gap-2">
        <Badge variant="primary" rounded>Primary</Badge>
        <Badge variant="success" rounded>Active</Badge>
        <Badge variant="danger" rounded>Expired</Badge>
      </div>
    `})},t={render:()=>({components:{Badge:e},template:`
      <div class="flex flex-wrap gap-2">
        <Badge variant="success" dot>Online</Badge>
        <Badge variant="warning" dot>Away</Badge>
        <Badge variant="danger" dot>Offline</Badge>
      </div>
    `})},o={render:()=>({components:{Badge:e},template:`
      <div class="flex flex-wrap gap-2">
        <Badge variant="primary" removable>Tag 1</Badge>
        <Badge variant="info" removable>Tag 2</Badge>
        <Badge variant="secondary" removable>Tag 3</Badge>
      </div>
    `})},l={render:()=>({components:{Badge:e},template:`
      <div class="flex items-center gap-2">
        <Badge size="sm">Small</Badge>
        <Badge size="md">Medium</Badge>
        <Badge size="lg">Large</Badge>
      </div>
    `})};var v,f,b;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Badge
    },
    setup: () => ({
      args
    }),
    template: '<Badge v-bind="args">Badge</Badge>'
  })
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,x,w;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Badge
    },
    template: \`
      <div class="flex flex-wrap gap-2">
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="info">Info</Badge>
      </div>
    \`
  })
}`,...(w=(x=d.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var S,z,V;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Badge
    },
    template: \`
      <div class="flex flex-wrap gap-2">
        <Badge variant="primary" rounded>Primary</Badge>
        <Badge variant="success" rounded>Active</Badge>
        <Badge variant="danger" rounded>Expired</Badge>
      </div>
    \`
  })
}`,...(V=(z=s.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var h,k,C;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Badge
    },
    template: \`
      <div class="flex flex-wrap gap-2">
        <Badge variant="success" dot>Online</Badge>
        <Badge variant="warning" dot>Away</Badge>
        <Badge variant="danger" dot>Offline</Badge>
      </div>
    \`
  })
}`,...(C=(k=t.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var T,D,L;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Badge
    },
    template: \`
      <div class="flex flex-wrap gap-2">
        <Badge variant="primary" removable>Tag 1</Badge>
        <Badge variant="info" removable>Tag 2</Badge>
        <Badge variant="secondary" removable>Tag 3</Badge>
      </div>
    \`
  })
}`,...(L=(D=o.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var q,O,R;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Badge
    },
    template: \`
      <div class="flex items-center gap-2">
        <Badge size="sm">Small</Badge>
        <Badge size="md">Medium</Badge>
        <Badge size="lg">Large</Badge>
      </div>
    \`
  })
}`,...(R=(O=l.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const U=["Default","Variants","Rounded","WithDot","Removable","Sizes"];export{r as Default,o as Removable,s as Rounded,l as Sizes,d as Variants,t as WithDot,U as __namedExportsOrder,F as default};
