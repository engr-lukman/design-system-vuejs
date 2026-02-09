import{d as Q,b as s,z as l,j as X,t as g,u as y,f as Y,n as Z,v as _,A as ee,o as t}from"./vue.esm-bundler-YEuhxn0F.js";const ae={class:"flex flex-col gap-1.5"},re=["for"],le={key:0,class:"text-red-500","aria-hidden":"true"},se=["id","type","value","placeholder","disabled","readonly","required","aria-invalid","aria-describedby"],te=["id"],ne=["id"],U=Q({__name:"TextInput",props:{modelValue:{default:""},label:{default:""},placeholder:{default:""},type:{default:"text"},size:{default:"md"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{default:""},hint:{default:""},required:{type:Boolean,default:!1}},emits:["update:modelValue","focus","blur"],setup(e,{emit:A}){const h=e,O=A,a=ee(),G={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-sm",lg:"px-4 py-3 text-lg"},J=_(()=>["block w-full rounded-md border transition-colors duration-150","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-0","disabled:bg-gray-100 disabled:cursor-not-allowed","placeholder:text-gray-400",G[h.size],h.error?"border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20":"border-gray-300 focus-visible:border-gray-950 focus-visible:ring-gray-950"]);function K(n){const r=n.target;O("update:modelValue",r.value)}return(n,r)=>(t(),s("div",ae,[e.label?(t(),s("label",{key:0,for:l(a),class:"text-sm font-medium text-gray-700"},[X(g(e.label)+" ",1),e.required?(t(),s("span",le,"*")):y("",!0)],8,re)):y("",!0),Y("input",{id:l(a),type:e.type,value:e.modelValue,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,required:e.required,class:Z(J.value),"aria-invalid":!!e.error,"aria-describedby":e.error?`${l(a)}-error`:e.hint?`${l(a)}-hint`:void 0,onInput:K,onFocus:r[0]||(r[0]=b=>n.$emit("focus",b)),onBlur:r[1]||(r[1]=b=>n.$emit("blur",b))},null,42,se),e.error?(t(),s("p",{key:1,id:`${l(a)}-error`,class:"text-sm text-red-600",role:"alert"},g(e.error),9,te)):e.hint?(t(),s("p",{key:2,id:`${l(a)}-hint`,class:"text-sm text-gray-500"},g(e.hint),9,ne)):y("",!0)]))}});U.__docgenInfo={exportName:"default",displayName:"TextInput",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"type",required:!1,type:{name:"union",elements:[{name:'"text"'},{name:'"email"'},{name:'"password"'},{name:'"number"'},{name:'"tel"'},{name:'"url"'},{name:'"search"'}]},defaultValue:{func:!1,value:"'text'"}},{name:"size",required:!1,type:{name:"InputSize"},defaultValue:{func:!1,value:"'md'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hint",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"focus",type:{names:["FocusEvent"]}},{name:"blur",type:{names:["FocusEvent"]}},{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/text-input/TextInput.vue"]};const de={title:"Form/TextInput",component:U,tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number","tel","url","search"]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},readonly:{control:"boolean"},required:{control:"boolean"}}},o={args:{label:"Email",placeholder:"you@example.com",type:"email"}},d={args:{label:"Username",placeholder:"Enter username",hint:"Must be 3-20 characters"}},u={args:{label:"Email",placeholder:"you@example.com",modelValue:"invalid",error:"Please enter a valid email address"}},i={args:{label:"Full Name",placeholder:"Enter your name",required:!0}},c={args:{label:"Disabled Input",modelValue:"Cannot edit this",disabled:!0}},m={args:{label:"Small",placeholder:"Small input",size:"sm"}},p={args:{label:"Large",placeholder:"Large input",size:"lg"}},f={args:{label:"Password",placeholder:"Enter password",type:"password"}};var v,x,V;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    type: 'email'
  }
}`,...(V=(x=o.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};var q,E,S;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    hint: 'Must be 3-20 characters'
  }
}`,...(S=(E=d.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var w,z,I;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    modelValue: 'invalid',
    error: 'Please enter a valid email address'
  }
}`,...(I=(z=u.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var k,B,C;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Full Name',
    placeholder: 'Enter your name',
    required: true
  }
}`,...(C=(B=i.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var D,F,N;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    modelValue: 'Cannot edit this',
    disabled: true
  }
}`,...(N=(F=c.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var L,P,T;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Small',
    placeholder: 'Small input',
    size: 'sm'
  }
}`,...(T=(P=m.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var $,W,j;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Large',
    placeholder: 'Large input',
    size: 'lg'
  }
}`,...(j=(W=p.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var H,M,R;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password'
  }
}`,...(R=(M=f.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};const ue=["Default","WithHint","WithError","Required","Disabled","Small","Large","Password"];export{o as Default,c as Disabled,p as Large,f as Password,i as Required,m as Small,u as WithError,d as WithHint,ue as __namedExportsOrder,de as default};
