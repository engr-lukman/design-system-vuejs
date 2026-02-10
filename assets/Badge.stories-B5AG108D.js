import{d as M,b as l,n as p,u,g as $,f as B,v as A,o as i}from"./vue.esm-bundler-DtUWbB1b.js";const e=M({__name:"Badge",props:{variant:{default:"primary"},size:{default:"md"},dot:{type:Boolean,default:!1},removable:{type:Boolean,default:!1}},emits:["remove"],setup(a){const m=a,q={primary:"bg-gray-900 text-gray-50",secondary:"bg-gray-100 text-gray-700",success:"bg-green-100 text-green-700",warning:"bg-amber-100 text-amber-700",danger:"bg-red-100 text-red-700",info:"bg-blue-100 text-blue-700",outline:"border border-gray-200 text-gray-900 bg-transparent"},N={primary:"bg-gray-50",secondary:"bg-gray-500",success:"bg-green-500",warning:"bg-amber-500",danger:"bg-red-500",info:"bg-blue-500",outline:"bg-gray-900"},j={sm:"px-1.5 py-0.5 text-xs",md:"px-2 py-0.5 text-xs",lg:"px-2.5 py-1 text-sm"},I=A(()=>["inline-flex items-center gap-1 font-medium",q[m.variant],j[m.size],"rounded-full"]);return(c,n)=>(i(),l("span",{class:p(I.value)},[a.dot?(i(),l("span",{key:0,class:p(["inline-block h-1.5 w-1.5 rounded-full",N[a.variant]]),"aria-hidden":"true"},null,2)):u("",!0),$(c.$slots,"default"),a.removable?(i(),l("button",{key:1,type:"button",class:"-mr-0.5 ml-0.5 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full hover:bg-black/10 focus-visible:outline-none","aria-label":"Remove",onClick:n[0]||(n[0]=E=>c.$emit("remove"))},[...n[1]||(n[1]=[B("svg",{class:"h-3 w-3",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[B("path",{d:"M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"})],-1)])])):u("",!0)],2))}});e.__docgenInfo={exportName:"default",displayName:"Badge",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"BadgeVariant"},defaultValue:{func:!1,value:"'primary'"}},{name:"size",required:!1,type:{name:"BadgeSize"},defaultValue:{func:!1,value:"'md'"}},{name:"dot",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"removable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"remove"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/badge/Badge.vue"]};const F={title:"Data Display/Badge",component:e,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","success","warning","danger","info","outline"]},size:{control:"select",options:["sm","md","lg"]},dot:{control:"boolean"},removable:{control:"boolean"}}},r={render:a=>({components:{Badge:e},setup:()=>({args:a}),template:'<Badge v-bind="args">Badge</Badge>'})},t={render:()=>({components:{Badge:e},template:`
      <div class="flex flex-wrap gap-2">
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    `})},s={render:()=>({components:{Badge:e},template:`
      <div class="flex flex-wrap gap-2">
        <Badge variant="outline">Default</Badge>
        <Badge variant="outline" dot>With Dot</Badge>
        <Badge variant="outline" removable>Removable</Badge>
      </div>
    `})},d={render:()=>({components:{Badge:e},template:`
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
    `})},g={render:()=>({components:{Badge:e},template:`
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
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,x,w;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
        <Badge variant="outline">Outline</Badge>
      </div>
    \`
  })
}`,...(w=(x=t.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var S,z,D;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Badge
    },
    template: \`
      <div class="flex flex-wrap gap-2">
        <Badge variant="outline">Default</Badge>
        <Badge variant="outline" dot>With Dot</Badge>
        <Badge variant="outline" removable>Removable</Badge>
      </div>
    \`
  })
}`,...(D=(z=s.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var h,O,V;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(V=(O=d.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var k,C,T;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(T=(C=o.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var L,W,R;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(R=(W=g.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};const Z=["Default","Variants","Outline","WithDot","Removable","Sizes"];export{r as Default,s as Outline,o as Removable,g as Sizes,t as Variants,d as WithDot,Z as __namedExportsOrder,F as default};
