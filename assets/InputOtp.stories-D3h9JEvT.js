import{d as oe,k as x,w as ue,b as p,z as g,t as w,u as S,f as q,F,e as pe,A as ce,o as c,n as ie,D as de,v as me}from"./vue.esm-bundler-YEuhxn0F.js";const ge={class:"flex flex-col gap-1.5"},fe=["for"],be=["aria-label"],he={key:0,class:"text-gray-400","aria-hidden":"true"},ve=["id","type","value","disabled","aria-label","aria-invalid","onInput","onKeydown"],Ie=["id"],Oe=["id"],n=oe({__name:"InputOtp",props:{modelValue:{default:""},length:{default:6},disabled:{type:Boolean,default:!1},error:{default:""},label:{default:""},hint:{default:""},mask:{type:Boolean,default:!1}},emits:["update:modelValue","complete"],setup(e,{emit:te}){const l=e,P=te,d=ce(),k=x([]),u=x(Array.from({length:l.length},()=>""));ue(()=>l.modelValue,t=>{const a=(t||"").split("");for(let s=0;s<l.length;s++)u.value[s]=a[s]||""},{immediate:!0});const ae=me(()=>u.value.join(""));function D(){const t=ae.value;P("update:modelValue",t),t.length===l.length&&P("complete",t)}function i(t){de(()=>{var a,s;(a=k.value[t])==null||a.focus(),(s=k.value[t])==null||s.select()})}function re(t,a){const r=a.target.value.replace(/\D/g,"").slice(-1);u.value[t]=r,r&&t<l.length-1&&i(t+1),D()}function se(t,a){a.key==="Backspace"?!u.value[t]&&t>0&&(a.preventDefault(),u.value[t-1]="",i(t-1),D()):a.key==="ArrowLeft"&&t>0?(a.preventDefault(),i(t-1)):a.key==="ArrowRight"&&t<l.length-1&&(a.preventDefault(),i(t+1))}function ne(t){var o;t.preventDefault();const s=(((o=t.clipboardData)==null?void 0:o.getData("text"))||"").replace(/\D/g,"").slice(0,l.length).split("");for(let m=0;m<l.length;m++)u.value[m]=s[m]||"";const r=Math.min(s.length,l.length-1);i(r),D()}function le(t){var a;(a=t.target)==null||a.select()}return(t,a)=>(c(),p("div",ge,[e.label?(c(),p("label",{key:0,for:`${g(d)}-0`,class:"text-sm font-medium text-gray-700"},w(e.label),9,fe)):S("",!0),q("div",{class:"flex items-center gap-2",role:"group","aria-label":e.label||"One-time password input"},[(c(!0),p(F,null,pe(e.length,(s,r)=>(c(),p(F,{key:r},[r===Math.floor(e.length/2)&&e.length>1?(c(),p("span",he,"–")):S("",!0),q("input",{id:`${g(d)}-${r}`,ref_for:!0,ref:o=>{o&&(k.value[r]=o)},type:e.mask?"password":"text",inputmode:"numeric",autocomplete:"one-time-code",maxlength:"1",value:u.value[r],disabled:e.disabled,"aria-label":`Digit ${r+1} of ${e.length}`,"aria-invalid":!!e.error,class:ie(["h-10 w-10 rounded-md border text-center text-lg font-semibold transition-colors duration-150","focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:outline-none","disabled:cursor-not-allowed disabled:bg-gray-100",e.error?"border-red-500":"border-gray-300"]),onInput:o=>re(r,o),onKeydown:o=>se(r,o),onPaste:ne,onFocus:le},null,42,ve)],64))),128))],8,be),e.error?(c(),p("p",{key:1,id:`${g(d)}-error`,class:"text-sm text-red-600",role:"alert"},w(e.error),9,Ie)):e.hint?(c(),p("p",{key:2,id:`${g(d)}-hint`,class:"text-sm text-gray-500"},w(e.hint),9,Oe)):S("",!0)]))}});n.__docgenInfo={exportName:"default",displayName:"InputOtp",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"length",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"6"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hint",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"mask",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["string"]}},{name:"complete",type:{names:["string"]}}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/input-otp/InputOtp.vue"]};const Ve={title:"Form/InputOtp",component:n,tags:["autodocs"],argTypes:{length:{control:{type:"number",min:4,max:8}},disabled:{control:"boolean"},mask:{control:"boolean"},label:{control:"text"},error:{control:"text"},hint:{control:"text"}}},f={args:{length:6},render:e=>({components:{InputOtp:n},setup:()=>({args:e}),template:'<InputOtp v-bind="args" />'})},b={args:{length:6,label:"Verification code"},render:e=>({components:{InputOtp:n},setup:()=>({args:e}),template:'<InputOtp v-bind="args" />'})},h={args:{length:4,label:"PIN"},render:e=>({components:{InputOtp:n},setup:()=>({args:e}),template:'<InputOtp v-bind="args" />'})},v={args:{length:6,label:"Secure code",mask:!0},render:e=>({components:{InputOtp:n},setup:()=>({args:e}),template:'<InputOtp v-bind="args" />'})},I={args:{length:6,label:"OTP",hint:"Enter the 6-digit code sent to your phone"},render:e=>({components:{InputOtp:n},setup:()=>({args:e}),template:'<InputOtp v-bind="args" />'})},O={args:{length:6,label:"Verification code",modelValue:"12345",error:"Invalid verification code"},render:e=>({components:{InputOtp:n},setup:()=>({args:e}),template:'<InputOtp v-bind="args" />'})},y={args:{length:6,label:"OTP",modelValue:"123456",disabled:!0},render:e=>({components:{InputOtp:n},setup:()=>({args:e}),template:'<InputOtp v-bind="args" />'})},V={args:{length:6,label:"Code",modelValue:"482961"},render:e=>({components:{InputOtp:n},setup:()=>({args:e}),template:'<InputOtp v-bind="args" />'})};var $,B,E;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    length: 6
  },
  render: args => ({
    components: {
      InputOtp
    },
    setup: () => ({
      args
    }),
    template: '<InputOtp v-bind="args" />'
  })
}`,...(E=(B=f.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var N,T,W;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    length: 6,
    label: 'Verification code'
  },
  render: args => ({
    components: {
      InputOtp
    },
    setup: () => ({
      args
    }),
    template: '<InputOtp v-bind="args" />'
  })
}`,...(W=(T=b.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var C,A,L;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    length: 4,
    label: 'PIN'
  },
  render: args => ({
    components: {
      InputOtp
    },
    setup: () => ({
      args
    }),
    template: '<InputOtp v-bind="args" />'
  })
}`,...(L=(A=h.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var M,j,K;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    length: 6,
    label: 'Secure code',
    mask: true
  },
  render: args => ({
    components: {
      InputOtp
    },
    setup: () => ({
      args
    }),
    template: '<InputOtp v-bind="args" />'
  })
}`,...(K=(j=v.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};var z,H,R;I.parameters={...I.parameters,docs:{...(z=I.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    length: 6,
    label: 'OTP',
    hint: 'Enter the 6-digit code sent to your phone'
  },
  render: args => ({
    components: {
      InputOtp
    },
    setup: () => ({
      args
    }),
    template: '<InputOtp v-bind="args" />'
  })
}`,...(R=(H=I.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var G,J,Q;O.parameters={...O.parameters,docs:{...(G=O.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    length: 6,
    label: 'Verification code',
    modelValue: '12345',
    error: 'Invalid verification code'
  },
  render: args => ({
    components: {
      InputOtp
    },
    setup: () => ({
      args
    }),
    template: '<InputOtp v-bind="args" />'
  })
}`,...(Q=(J=O.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Y;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    length: 6,
    label: 'OTP',
    modelValue: '123456',
    disabled: true
  },
  render: args => ({
    components: {
      InputOtp
    },
    setup: () => ({
      args
    }),
    template: '<InputOtp v-bind="args" />'
  })
}`,...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,_,ee;V.parameters={...V.parameters,docs:{...(Z=V.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    length: 6,
    label: 'Code',
    modelValue: '482961'
  },
  render: args => ({
    components: {
      InputOtp
    },
    setup: () => ({
      args
    }),
    template: '<InputOtp v-bind="args" />'
  })
}`,...(ee=(_=V.parameters)==null?void 0:_.docs)==null?void 0:ee.source}}};const ke=["Default","WithLabel","FourDigits","Masked","WithHint","WithError","Disabled","Prefilled"];export{f as Default,y as Disabled,h as FourDigits,v as Masked,V as Prefilled,O as WithError,I as WithHint,b as WithLabel,ke as __namedExportsOrder,Ve as default};
