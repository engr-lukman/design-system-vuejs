import{d as X,b as a,z as l,j as y,t as o,u as n,f as x,n as z,F as Z,v as V,A as _,o as r}from"./vue.esm-bundler-DtUWbB1b.js";const ee={class:"flex flex-col gap-1.5"},ae=["for"],re={key:0,class:"text-red-500","aria-hidden":"true"},se=["id","value","placeholder","rows","maxlength","disabled","readonly","required","aria-invalid","aria-describedby"],te={class:"flex items-center justify-between"},le=["id"],oe=["id"],O=X({__name:"Textarea",props:{modelValue:{default:""},label:{default:""},placeholder:{default:""},size:{default:"md"},rows:{default:4},maxLength:{default:void 0},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{default:""},hint:{default:""},required:{type:Boolean,default:!1},resize:{default:"vertical"},showCount:{type:Boolean,default:!1}},emits:["update:modelValue","focus","blur"],setup(e,{emit:G}){const i=e,J=G,s=_(),K={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-sm",lg:"px-4 py-3 text-lg"},P={none:"resize-none",vertical:"resize-y",horizontal:"resize-x",both:"resize"},Q=V(()=>["block w-full rounded-md border transition-colors duration-150","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-0","disabled:bg-gray-100 disabled:cursor-not-allowed","placeholder:text-gray-400",K[i.size],P[i.resize],i.error?"border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20":"border-gray-300 focus-visible:border-gray-950 focus-visible:ring-gray-950"]),v=V(()=>i.modelValue.length);function U(u){const t=u.target;J("update:modelValue",t.value)}return(u,t)=>(r(),a("div",ee,[e.label?(r(),a("label",{key:0,for:l(s),class:"text-sm font-medium text-gray-700"},[y(o(e.label)+" ",1),e.required?(r(),a("span",re,"*")):n("",!0)],8,ae)):n("",!0),x("textarea",{id:l(s),value:e.modelValue,placeholder:e.placeholder,rows:e.rows,maxlength:e.maxLength,disabled:e.disabled,readonly:e.readonly,required:e.required,class:z(Q.value),"aria-invalid":!!e.error,"aria-describedby":e.error?`${l(s)}-error`:e.hint?`${l(s)}-hint`:void 0,onInput:U,onFocus:t[0]||(t[0]=p=>u.$emit("focus",p)),onBlur:t[1]||(t[1]=p=>u.$emit("blur",p))},null,42,se),x("div",te,[x("div",null,[e.error?(r(),a("p",{key:0,id:`${l(s)}-error`,class:"text-sm text-red-600",role:"alert"},o(e.error),9,le)):e.hint?(r(),a("p",{key:1,id:`${l(s)}-hint`,class:"text-sm text-gray-500"},o(e.hint),9,oe)):n("",!0)]),e.showCount?(r(),a("span",{key:0,class:z(["text-xs",e.maxLength&&v.value>=e.maxLength?"text-red-600":"text-gray-400"])},[y(o(v.value),1),e.maxLength?(r(),a(Z,{key:0},[y(" / "+o(e.maxLength),1)],64)):n("",!0)],2)):n("",!0)])]))}});O.__docgenInfo={exportName:"default",displayName:"Textarea",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"size",required:!1,type:{name:"TextareaSize"},defaultValue:{func:!1,value:"'md'"}},{name:"rows",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"4"}},{name:"maxLength",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hint",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"resize",required:!1,type:{name:"TextareaResize"},defaultValue:{func:!1,value:"'vertical'"}},{name:"showCount",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"focus",type:{names:["FocusEvent"]}},{name:"blur",type:{names:["FocusEvent"]}},{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/textarea/Textarea.vue"]};const ie={title:"Form/Textarea",component:O,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},resize:{control:"select",options:["none","vertical","horizontal","both"]},disabled:{control:"boolean"},readonly:{control:"boolean"},required:{control:"boolean"},showCount:{control:"boolean"}}},d={args:{label:"Description",placeholder:"Enter a description..."}},c={args:{label:"Bio",placeholder:"Tell us about yourself",hint:"Write a brief bio for your profile"}},m={args:{label:"Message",modelValue:"Hi",error:"Message must be at least 10 characters"}},f={args:{label:"Tweet",placeholder:"What's happening?",maxLength:280,showCount:!0}},b={args:{label:"Feedback",placeholder:"Your feedback...",required:!0}},g={args:{label:"Notes",modelValue:"This is read-only content.",disabled:!0}},h={args:{label:"Fixed size",placeholder:"Cannot resize this textarea",resize:"none"}};var q,C,w;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'Enter a description...'
  }
}`,...(w=(C=d.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var k,T,F;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself',
    hint: 'Write a brief bio for your profile'
  }
}`,...(F=(T=c.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var B,W,L;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Message',
    modelValue: 'Hi',
    error: 'Message must be at least 10 characters'
  }
}`,...(L=(W=m.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var N,S,E;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Tweet',
    placeholder: "What's happening?",
    maxLength: 280,
    showCount: true
  }
}`,...(E=(S=f.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var D,$,R;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Feedback',
    placeholder: 'Your feedback...',
    required: true
  }
}`,...(R=($=b.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var j,H,I;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Notes',
    modelValue: 'This is read-only content.',
    disabled: true
  }
}`,...(I=(H=g.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var M,Y,A;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Fixed size',
    placeholder: 'Cannot resize this textarea',
    resize: 'none'
  }
}`,...(A=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:A.source}}};const ue=["Default","WithHint","WithError","WithCharCount","Required","Disabled","NoResize"];export{d as Default,g as Disabled,h as NoResize,b as Required,f as WithCharCount,m as WithError,c as WithHint,ue as __namedExportsOrder,ie as default};
