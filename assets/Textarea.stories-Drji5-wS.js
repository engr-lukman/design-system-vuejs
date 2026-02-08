import{d as X,b as a,u as l,x as y,t as o,f as n,e as x,n as z,F as Z,j as V,m as _,o as r}from"./vue.esm-bundler-Db6pwSvC.js";const ee={class:"flex flex-col gap-1.5"},ae=["for"],re={key:0,class:"text-red-500","aria-hidden":"true"},te=["id","value","placeholder","rows","maxlength","disabled","readonly","required","aria-invalid","aria-describedby"],se={class:"flex items-center justify-between"},le=["id"],oe=["id"],U=X({__name:"Textarea",props:{modelValue:{default:""},label:{default:""},placeholder:{default:""},size:{default:"md"},rows:{default:4},maxLength:{default:void 0},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{default:""},hint:{default:""},required:{type:Boolean,default:!1},resize:{default:"vertical"},showCount:{type:Boolean,default:!1}},emits:["update:modelValue","focus","blur"],setup(e,{emit:A}){const u=e,G=A,t=_(),J={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-base",lg:"px-4 py-3 text-lg"},K={none:"resize-none",vertical:"resize-y",horizontal:"resize-x",both:"resize"},P=V(()=>["block w-full rounded-lg border transition-colors duration-150","focus:outline-none focus:ring-2 focus:ring-offset-0","disabled:bg-gray-100 disabled:cursor-not-allowed","placeholder:text-gray-400",J[u.size],K[u.resize],u.error?"border-red-500 focus:border-red-500 focus:ring-red-500/20":"border-gray-300 focus:border-blue-500 focus:ring-blue-500/20"]),v=V(()=>u.modelValue.length);function Q(d){const s=d.target;G("update:modelValue",s.value)}return(d,s)=>(r(),a("div",ee,[e.label?(r(),a("label",{key:0,for:l(t),class:"text-sm font-medium text-gray-700"},[y(o(e.label)+" ",1),e.required?(r(),a("span",re,"*")):n("",!0)],8,ae)):n("",!0),x("textarea",{id:l(t),value:e.modelValue,placeholder:e.placeholder,rows:e.rows,maxlength:e.maxLength,disabled:e.disabled,readonly:e.readonly,required:e.required,class:z(P.value),"aria-invalid":!!e.error,"aria-describedby":e.error?`${l(t)}-error`:e.hint?`${l(t)}-hint`:void 0,onInput:Q,onFocus:s[0]||(s[0]=p=>d.$emit("focus",p)),onBlur:s[1]||(s[1]=p=>d.$emit("blur",p))},null,42,te),x("div",se,[x("div",null,[e.error?(r(),a("p",{key:0,id:`${l(t)}-error`,class:"text-sm text-red-600",role:"alert"},o(e.error),9,le)):e.hint?(r(),a("p",{key:1,id:`${l(t)}-hint`,class:"text-sm text-gray-500"},o(e.hint),9,oe)):n("",!0)]),e.showCount?(r(),a("span",{key:0,class:z(["text-xs",e.maxLength&&v.value>=e.maxLength?"text-red-600":"text-gray-400"])},[y(o(v.value),1),e.maxLength?(r(),a(Z,{key:0},[y(" / "+o(e.maxLength),1)],64)):n("",!0)],2)):n("",!0)])]))}});U.__docgenInfo={exportName:"default",displayName:"Textarea",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"size",required:!1,type:{name:"TextareaSize"},defaultValue:{func:!1,value:"'md'"}},{name:"rows",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"4"}},{name:"maxLength",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hint",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"resize",required:!1,type:{name:"TextareaResize"},defaultValue:{func:!1,value:"'vertical'"}},{name:"showCount",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"focus",type:{names:["FocusEvent"]}},{name:"blur",type:{names:["FocusEvent"]}},{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/components/ui/textarea/Textarea.vue"]};const ue={title:"UI/Textarea",component:U,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},resize:{control:"select",options:["none","vertical","horizontal","both"]},disabled:{control:"boolean"},readonly:{control:"boolean"},required:{control:"boolean"},showCount:{control:"boolean"}}},i={args:{label:"Description",placeholder:"Enter a description..."}},c={args:{label:"Bio",placeholder:"Tell us about yourself",hint:"Write a brief bio for your profile"}},m={args:{label:"Message",modelValue:"Hi",error:"Message must be at least 10 characters"}},f={args:{label:"Tweet",placeholder:"What's happening?",maxLength:280,showCount:!0}},b={args:{label:"Feedback",placeholder:"Your feedback...",required:!0}},h={args:{label:"Notes",modelValue:"This is read-only content.",disabled:!0}},g={args:{label:"Fixed size",placeholder:"Cannot resize this textarea",resize:"none"}};var q,C,w;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'Enter a description...'
  }
}`,...(w=(C=i.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var k,T,B;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself',
    hint: 'Write a brief bio for your profile'
  }
}`,...(B=(T=c.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var F,W,L;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(E=(S=f.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var D,$,I;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Feedback',
    placeholder: 'Your feedback...',
    required: true
  }
}`,...(I=($=b.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};var R,j,H;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Notes',
    modelValue: 'This is read-only content.',
    disabled: true
  }
}`,...(H=(j=h.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var M,Y,O;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Fixed size',
    placeholder: 'Cannot resize this textarea',
    resize: 'none'
  }
}`,...(O=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:O.source}}};const de=["Default","WithHint","WithError","WithCharCount","Required","Disabled","NoResize"];export{i as Default,h as Disabled,g as NoResize,b as Required,f as WithCharCount,m as WithError,c as WithHint,de as __namedExportsOrder,ue as default};
