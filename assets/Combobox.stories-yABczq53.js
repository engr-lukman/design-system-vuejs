import{d as qe,w as Se,B as Fe,C as Me,b as t,z as b,j as ze,t as x,u as p,f as d,n as W,y as U,p as Le,q as Be,T as De,A as $e,k as g,v as I,D as E,o as l,F as Ie,e as Ee}from"./vue.esm-bundler-YEuhxn0F.js";const Oe=["for"],Re={key:0,class:"text-red-500","aria-hidden":"true"},Ne={class:"relative"},Ae=["id","value","placeholder","disabled","required","aria-expanded","aria-activedescendant","aria-invalid","aria-describedby"],Te={key:0,class:"px-4 py-2 text-sm text-gray-500"},je=["id","aria-selected","aria-disabled","onMousedown","onMouseenter"],We={class:"flex-1"},Ue={key:0,class:"h-4 w-4 text-gray-900",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},Ze=["id"],He=["id"],n=qe({__name:"Combobox",props:{modelValue:{default:""},options:{},placeholder:{default:"Search..."},label:{default:""},size:{default:"md"},disabled:{type:Boolean,default:!1},error:{default:""},hint:{default:""},required:{type:Boolean,default:!1},emptyMessage:{default:"No results found"}},emits:["update:modelValue","change"],setup(e,{emit:ge}){const c=e,h=ge,u=$e(),O=`${u}-listbox`,L=g(null),B=g(null),R=g(null),i=g(!1),m=g(""),o=g(-1),xe={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-sm",lg:"px-4 py-3 text-lg"},D=I(()=>c.options.find(a=>a.value===c.modelValue)),$=I(()=>{if(!m.value)return c.options;const a=m.value.toLowerCase();return c.options.filter(r=>r.label.toLowerCase().includes(a))}),he=I(()=>["block w-full rounded-md border transition-colors duration-150","focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-0","disabled:bg-gray-100 disabled:cursor-not-allowed","placeholder:text-gray-400",xe[c.size],c.error?"border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20":"border-gray-300 focus-visible:ring-gray-950"]);Se(()=>c.modelValue,()=>{var a;i.value||(m.value=((a=D.value)==null?void 0:a.label)||"")},{immediate:!0});function N(){c.disabled||(i.value=!0,m.value="",o.value=-1,E(()=>{var a;return(a=B.value)==null?void 0:a.focus()}))}function y(){var a;i.value=!1,m.value=((a=D.value)==null?void 0:a.label)||"",o.value=-1}function A(a){a.disabled||(h("update:modelValue",a.value),h("change",a.value),y())}function ye(){h("update:modelValue",""),h("change",""),m.value="",E(()=>{var a;return(a=B.value)==null?void 0:a.focus()})}function we(){i.value||N()}function Ce(a){const r=a.target;m.value=r.value,o.value=-1,i.value||(i.value=!0)}function T(){E(()=>{const a=R.value;if(!a)return;const r=a.children[o.value];r&&r.scrollIntoView({block:"nearest"})})}function ke(a){var s,f;const r=$.value;switch(a.key){case"ArrowDown":if(a.preventDefault(),!i.value)N();else{for(o.value=Math.min(o.value+1,r.length-1);o.value<r.length&&((s=r[o.value])!=null&&s.disabled);)o.value++;o.value>=r.length&&(o.value=r.length-1),T()}break;case"ArrowUp":for(a.preventDefault(),o.value=Math.max(o.value-1,0);o.value>0&&((f=r[o.value])!=null&&f.disabled);)o.value--;T();break;case"Enter":a.preventDefault(),i.value&&o.value>=0&&r[o.value]&&A(r[o.value]);break;case"Escape":a.preventDefault(),y();break;case"Tab":y();break}}function j(a){L.value&&!L.value.contains(a.target)&&y()}return Fe(()=>document.addEventListener("mousedown",j)),Me(()=>document.removeEventListener("mousedown",j)),(a,r)=>(l(),t("div",{ref_key:"containerRef",ref:L,class:"relative flex flex-col gap-1.5"},[e.label?(l(),t("label",{key:0,for:b(u),class:"text-sm font-medium text-gray-700"},[ze(x(e.label)+" ",1),e.required?(l(),t("span",Re,"*")):p("",!0)],8,Oe)):p("",!0),d("div",Ne,[d("input",{id:b(u),ref_key:"inputRef",ref:B,type:"text",role:"combobox",value:m.value,placeholder:e.placeholder,disabled:e.disabled,required:e.required,class:W(he.value),"aria-expanded":i.value,"aria-controls":O,"aria-activedescendant":o.value>=0?`${b(u)}-option-${o.value}`:void 0,"aria-invalid":!!e.error,"aria-describedby":e.error?`${b(u)}-error`:e.hint?`${b(u)}-hint`:void 0,autocomplete:"off",onInput:Ce,onFocus:we,onKeydown:ke},null,42,Ae),D.value&&!e.disabled?(l(),t("button",{key:0,type:"button",class:"absolute inset-y-0 right-8 flex items-center px-1 text-gray-400 hover:text-gray-600",tabindex:"-1","aria-label":"Clear selection",onMousedown:U(ye,["prevent"])},[...r[0]||(r[0]=[d("svg",{class:"h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[d("path",{d:"M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"})],-1)])],32)):p("",!0),r[1]||(r[1]=d("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"},[d("svg",{class:"h-4 w-4 text-gray-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[d("path",{"fill-rule":"evenodd",d:"M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"})])],-1))]),Le(De,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"scale-95 opacity-0","enter-to-class":"scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"scale-100 opacity-100","leave-to-class":"scale-95 opacity-0"},{default:Be(()=>[i.value?(l(),t("ul",{key:0,id:O,ref_key:"listRef",ref:R,role:"listbox",class:"absolute top-full z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-200 bg-white py-1 shadow-md"},[$.value.length===0?(l(),t("li",Te,x(e.emptyMessage),1)):p("",!0),(l(!0),t(Ie,null,Ee($.value,(s,f)=>(l(),t("li",{id:`${b(u)}-option-${f}`,key:s.value,role:"option","aria-selected":s.value===e.modelValue,"aria-disabled":s.disabled,class:W(["flex cursor-pointer items-center px-4 py-2 text-sm transition-colors",s.disabled?"cursor-not-allowed text-gray-400":f===o.value?"bg-gray-100 text-gray-900":s.value===e.modelValue?"bg-gray-50 text-gray-900":"text-gray-700 hover:bg-gray-50"]),onMousedown:U(Ve=>A(s),["prevent"]),onMouseenter:Ve=>o.value=f},[d("span",We,x(s.label),1),s.value===e.modelValue?(l(),t("svg",Ue,[...r[2]||(r[2]=[d("path",{"fill-rule":"evenodd",d:"M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z","clip-rule":"evenodd"},null,-1)])])):p("",!0)],42,je))),128))],512)):p("",!0)]),_:1}),e.error?(l(),t("p",{key:1,id:`${b(u)}-error`,class:"text-sm text-red-600",role:"alert"},x(e.error),9,Ze)):e.hint?(l(),t("p",{key:2,id:`${b(u)}-hint`,class:"text-sm text-gray-500"},x(e.hint),9,He)):p("",!0)],512))}});n.__docgenInfo={exportName:"default",displayName:"Combobox",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]},defaultValue:{func:!1,value:"''"}},{name:"options",required:!0,type:{name:"Array",elements:[{name:"ComboboxOption"}]}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Search...'"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"size",required:!1,type:{name:"ComboboxSize"},defaultValue:{func:!1,value:"'md'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hint",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"emptyMessage",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'No results found'"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}},{name:"change",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/combobox/Combobox.vue"]};const v=[{label:"Vue",value:"vue"},{label:"React",value:"react"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"},{label:"Solid",value:"solid"},{label:"Ember",value:"ember",disabled:!0}],Ke=[{label:"Bangladesh",value:"bd"},{label:"United States",value:"us"},{label:"United Kingdom",value:"uk"},{label:"Canada",value:"ca"},{label:"Australia",value:"au"},{label:"Germany",value:"de"},{label:"France",value:"fr"},{label:"Japan",value:"jp"},{label:"India",value:"in"},{label:"Brazil",value:"br"}],Ge={title:"Form/Combobox",component:n,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},required:{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},error:{control:"text"},hint:{control:"text"},emptyMessage:{control:"text"}}},w={args:{options:v,label:"Framework",placeholder:"Select a framework..."},render:e=>({components:{Combobox:n},setup:()=>({args:e}),template:'<div class="h-80"><Combobox v-bind="args" /></div>'})},C={args:{options:v,label:"Framework",modelValue:"vue"},render:e=>({components:{Combobox:n},setup:()=>({args:e}),template:'<div class="h-80"><Combobox v-bind="args" /></div>'})},k={args:{options:Ke,label:"Country",placeholder:"Search countries..."},render:e=>({components:{Combobox:n},setup:()=>({args:e}),template:'<div class="h-96"><Combobox v-bind="args" /></div>'})},V={args:{options:v,label:"Framework",size:"sm"},render:e=>({components:{Combobox:n},setup:()=>({args:e}),template:'<div class="h-80"><Combobox v-bind="args" /></div>'})},q={args:{options:v,label:"Framework",size:"lg"},render:e=>({components:{Combobox:n},setup:()=>({args:e}),template:'<div class="h-80"><Combobox v-bind="args" /></div>'})},S={args:{options:v,label:"Framework",required:!0},render:e=>({components:{Combobox:n},setup:()=>({args:e}),template:'<div class="h-80"><Combobox v-bind="args" /></div>'})},F={args:{options:v,label:"Framework",hint:"Choose the framework for your project"},render:e=>({components:{Combobox:n},setup:()=>({args:e}),template:'<div class="h-80"><Combobox v-bind="args" /></div>'})},M={args:{options:v,label:"Framework",required:!0,error:"Please select a framework"},render:e=>({components:{Combobox:n},setup:()=>({args:e}),template:'<div class="h-80"><Combobox v-bind="args" /></div>'})},z={args:{options:v,label:"Framework",modelValue:"vue",disabled:!0},render:e=>({components:{Combobox:n},setup:()=>({args:e}),template:'<Combobox v-bind="args" />'})};var Z,H,K;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    options: frameworks,
    label: 'Framework',
    placeholder: 'Select a framework...'
  },
  render: args => ({
    components: {
      Combobox
    },
    setup: () => ({
      args
    }),
    template: '<div class="h-80"><Combobox v-bind="args" /></div>'
  })
}`,...(K=(H=w.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var P,G,J;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    options: frameworks,
    label: 'Framework',
    modelValue: 'vue'
  },
  render: args => ({
    components: {
      Combobox
    },
    setup: () => ({
      args
    }),
    template: '<div class="h-80"><Combobox v-bind="args" /></div>'
  })
}`,...(J=(G=C.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Y;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    options: countries,
    label: 'Country',
    placeholder: 'Search countries...'
  },
  render: args => ({
    components: {
      Combobox
    },
    setup: () => ({
      args
    }),
    template: '<div class="h-96"><Combobox v-bind="args" /></div>'
  })
}`,...(Y=(X=k.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var _,ee,ae;V.parameters={...V.parameters,docs:{...(_=V.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    options: frameworks,
    label: 'Framework',
    size: 'sm'
  },
  render: args => ({
    components: {
      Combobox
    },
    setup: () => ({
      args
    }),
    template: '<div class="h-80"><Combobox v-bind="args" /></div>'
  })
}`,...(ae=(ee=V.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var oe,re,se;q.parameters={...q.parameters,docs:{...(oe=q.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    options: frameworks,
    label: 'Framework',
    size: 'lg'
  },
  render: args => ({
    components: {
      Combobox
    },
    setup: () => ({
      args
    }),
    template: '<div class="h-80"><Combobox v-bind="args" /></div>'
  })
}`,...(se=(re=q.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var te,le,ne;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    options: frameworks,
    label: 'Framework',
    required: true
  },
  render: args => ({
    components: {
      Combobox
    },
    setup: () => ({
      args
    }),
    template: '<div class="h-80"><Combobox v-bind="args" /></div>'
  })
}`,...(ne=(le=S.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var ie,ue,de;F.parameters={...F.parameters,docs:{...(ie=F.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    options: frameworks,
    label: 'Framework',
    hint: 'Choose the framework for your project'
  },
  render: args => ({
    components: {
      Combobox
    },
    setup: () => ({
      args
    }),
    template: '<div class="h-80"><Combobox v-bind="args" /></div>'
  })
}`,...(de=(ue=F.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var ce,me,be;M.parameters={...M.parameters,docs:{...(ce=M.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    options: frameworks,
    label: 'Framework',
    required: true,
    error: 'Please select a framework'
  },
  render: args => ({
    components: {
      Combobox
    },
    setup: () => ({
      args
    }),
    template: '<div class="h-80"><Combobox v-bind="args" /></div>'
  })
}`,...(be=(me=M.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};var ve,pe,fe;z.parameters={...z.parameters,docs:{...(ve=z.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    options: frameworks,
    label: 'Framework',
    modelValue: 'vue',
    disabled: true
  },
  render: args => ({
    components: {
      Combobox
    },
    setup: () => ({
      args
    }),
    template: '<Combobox v-bind="args" />'
  })
}`,...(fe=(pe=z.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};const Je=["Default","WithSelection","ManyOptions","Small","Large","Required","WithHint","WithError","Disabled"];export{w as Default,z as Disabled,q as Large,k as ManyOptions,S as Required,V as Small,M as WithError,F as WithHint,C as WithSelection,Je as __namedExportsOrder,Ge as default};
