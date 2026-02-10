import{d as Me,b as a,F as ze,z as r,j as T,t as m,u as s,f as i,n as w,v as W,A as B,o as t}from"./vue.esm-bundler-DtUWbB1b.js";const Fe={class:"flex flex-col gap-1.5"},Be=["for"],Ie={key:0,class:"text-red-500","aria-hidden":"true"},Ae=["id","type","value","placeholder","disabled","required","min","max","step","aria-invalid","aria-describedby"],Ce={key:1,class:"flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-2"},Ne={class:"flex flex-1 flex-col gap-1.5"},Re=["for"],$e={key:0,class:"text-red-500","aria-hidden":"true"},je=["id","value","disabled","required","min","max","aria-invalid"],Oe={class:"flex flex-1 flex-col gap-1.5"},He=["for"],Le={key:0,class:"text-red-500","aria-hidden":"true"},Ge=["id","value","disabled","required","min","max"],Je=["id"],Ke=["id"],M=Me({__name:"DatePicker",props:{modelValue:{default:""},modelValueEnd:{default:""},mode:{default:"date"},label:{default:""},labelEnd:{default:""},placeholder:{default:""},size:{default:"md"},disabled:{type:Boolean,default:!1},error:{default:""},hint:{default:""},required:{type:Boolean,default:!1},min:{default:""},max:{default:""},step:{default:void 0}},emits:["update:modelValue","update:modelValueEnd","change"],setup(e,{emit:Pe}){const d=e,u=Pe,l=B(),z=B(),Ee=W(()=>({date:"date","date-range":"date",month:"month",week:"week",time:"time",datetime:"datetime-local"})[d.mode]),Te=W(()=>d.placeholder?d.placeholder:{date:"Select date","date-range":"Start date",month:"Select month",week:"Select week",time:"Select time",datetime:"Select date & time"}[d.mode]),we={sm:"h-8 px-3 py-1.5 text-sm",md:"h-9 px-3 py-2 text-sm",lg:"h-10 px-3 py-2.5 text-base"},E=W(()=>["block w-full rounded-md border bg-white transition-colors duration-150","focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-0","disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50",we[d.size],d.error?"border-red-500 focus-visible:ring-red-500/20":"border-gray-300 focus-visible:ring-gray-950"]);function F(o){const n=o.target.value;u("update:modelValue",n),u("change",n,d.mode==="date-range"?d.modelValueEnd:void 0)}function We(o){const n=o.target.value;u("update:modelValueEnd",n),u("change",d.modelValue,n)}return(o,n)=>(t(),a("div",Fe,[e.mode!=="date-range"?(t(),a(ze,{key:0},[e.label?(t(),a("label",{key:0,for:r(l),class:"text-sm font-medium text-gray-700"},[T(m(e.label)+" ",1),e.required?(t(),a("span",Ie,"*")):s("",!0)],8,Be)):s("",!0),i("input",{id:r(l),type:Ee.value,value:e.modelValue,class:w(E.value),placeholder:Te.value,disabled:e.disabled,required:e.required,min:e.min||void 0,max:e.max||void 0,step:e.step||void 0,"aria-invalid":!!e.error,"aria-describedby":e.error?`${r(l)}-error`:e.hint?`${r(l)}-hint`:void 0,onInput:F},null,42,Ae)],64)):(t(),a("div",Ce,[i("div",Ne,[e.label?(t(),a("label",{key:0,for:r(l),class:"text-sm font-medium text-gray-700"},[T(m(e.label||"Start date")+" ",1),e.required?(t(),a("span",$e,"*")):s("",!0)],8,Re)):s("",!0),i("input",{id:r(l),type:"date",value:e.modelValue,class:w(E.value),placeholder:"Start date",disabled:e.disabled,required:e.required,min:e.min||void 0,max:e.modelValueEnd||e.max||void 0,"aria-invalid":!!e.error,onInput:F},null,42,je)]),n[0]||(n[0]=i("span",{class:"hidden text-sm text-gray-500 sm:block sm:pb-2"},"to",-1)),i("div",Oe,[e.labelEnd||e.label?(t(),a("label",{key:0,for:r(z),class:"text-sm font-medium text-gray-700"},[T(m(e.labelEnd||"End date")+" ",1),e.required?(t(),a("span",Le,"*")):s("",!0)],8,He)):s("",!0),i("input",{id:r(z),type:"date",value:e.modelValueEnd,class:w(E.value),placeholder:"End date",disabled:e.disabled,required:e.required,min:e.modelValue||e.min||void 0,max:e.max||void 0,onInput:We},null,42,Ge)])])),e.error?(t(),a("p",{key:2,id:`${r(l)}-error`,class:"text-sm text-red-600",role:"alert"},m(e.error),9,Je)):e.hint?(t(),a("p",{key:3,id:`${r(l)}-hint`,class:"text-sm text-gray-500"},m(e.hint),9,Ke)):s("",!0)]))}});M.__docgenInfo={exportName:"default",displayName:"DatePicker",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"modelValueEnd",description:"For date-range mode: end value",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"mode",required:!1,type:{name:"DatePickerMode"},defaultValue:{func:!1,value:"'date'"}},{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"labelEnd",description:"For date-range mode: label for the end input",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"size",required:!1,type:{name:"DatePickerSize"},defaultValue:{func:!1,value:"'md'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hint",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"min",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"max",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"step",description:"Step attribute for time/datetime inputs (in seconds)",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"update:modelValue",type:{names:["string"]}},{name:"update:modelValueEnd",type:{names:["string"]}},{name:"change",type:{names:["string"]}}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/date-picker/DatePicker.vue"]};const Ue={title:"Form/DatePicker",component:M,tags:["autodocs"],argTypes:{mode:{control:"select",options:["date","date-range","month","week","time","datetime"]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},required:{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},error:{control:"text"},hint:{control:"text"},min:{control:"text"},max:{control:"text"}}},c={args:{label:"Date",mode:"date"}},f={args:{label:"Birthday",mode:"date",modelValue:"2000-06-15"}},g={args:{label:"Start date",labelEnd:"End date",mode:"date-range"}},p={args:{label:"Month",mode:"month"}},b={args:{label:"Week",mode:"week"}},h={args:{label:"Time",mode:"time"}},v={args:{label:"Date & Time",mode:"datetime"}},y={args:{label:"Appointment",mode:"date",min:"2026-02-01",max:"2026-02-28",hint:"Only February 2026 dates are available"}},k={args:{label:"Date",mode:"date",size:"sm"}},x={args:{label:"Date",mode:"date",size:"lg"}},D={args:{label:"Start date",mode:"date",required:!0}},V={args:{label:"Due date",mode:"date",required:!0,error:"Due date is required"}},q={args:{label:"Departure",mode:"date",hint:"Select your departure date"}},S={args:{label:"Date",mode:"date",modelValue:"2026-01-15",disabled:!0}},P={render:()=>({components:{DatePicker:M},template:`
      <div class="grid gap-6 sm:grid-cols-2">
        <DatePicker label="Date" mode="date" />
        <DatePicker label="Month" mode="month" />
        <DatePicker label="Week" mode="week" />
        <DatePicker label="Time" mode="time" />
        <DatePicker label="Date & Time" mode="datetime" />
        <div class="sm:col-span-2">
          <DatePicker label="Start date" label-end="End date" mode="date-range" />
        </div>
      </div>
    `})};var I,A,C;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Date',
    mode: 'date'
  }
}`,...(C=(A=c.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var N,R,$;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Birthday',
    mode: 'date',
    modelValue: '2000-06-15'
  }
}`,...($=(R=f.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var j,O,H;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Start date',
    labelEnd: 'End date',
    mode: 'date-range'
  }
}`,...(H=(O=g.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var L,G,J;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Month',
    mode: 'month'
  }
}`,...(J=(G=p.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    label: 'Week',
    mode: 'week'
  }
}`,...(U=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: 'Time',
    mode: 'time'
  }
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var _,ee,ae;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Date & Time',
    mode: 'datetime'
  }
}`,...(ae=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,re,de;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    label: 'Appointment',
    mode: 'date',
    min: '2026-02-01',
    max: '2026-02-28',
    hint: 'Only February 2026 dates are available'
  }
}`,...(de=(re=y.parameters)==null?void 0:re.docs)==null?void 0:de.source}}};var le,ne,se;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    label: 'Date',
    mode: 'date',
    size: 'sm'
  }
}`,...(se=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,ie,me;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    label: 'Date',
    mode: 'date',
    size: 'lg'
  }
}`,...(me=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:me.source}}};var ue,ce,fe;D.parameters={...D.parameters,docs:{...(ue=D.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    label: 'Start date',
    mode: 'date',
    required: true
  }
}`,...(fe=(ce=D.parameters)==null?void 0:ce.docs)==null?void 0:fe.source}}};var ge,pe,be;V.parameters={...V.parameters,docs:{...(ge=V.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    label: 'Due date',
    mode: 'date',
    required: true,
    error: 'Due date is required'
  }
}`,...(be=(pe=V.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var he,ve,ye;q.parameters={...q.parameters,docs:{...(he=q.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    label: 'Departure',
    mode: 'date',
    hint: 'Select your departure date'
  }
}`,...(ye=(ve=q.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var ke,xe,De;S.parameters={...S.parameters,docs:{...(ke=S.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    label: 'Date',
    mode: 'date',
    modelValue: '2026-01-15',
    disabled: true
  }
}`,...(De=(xe=S.parameters)==null?void 0:xe.docs)==null?void 0:De.source}}};var Ve,qe,Se;P.parameters={...P.parameters,docs:{...(Ve=P.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DatePicker
    },
    template: \`
      <div class="grid gap-6 sm:grid-cols-2">
        <DatePicker label="Date" mode="date" />
        <DatePicker label="Month" mode="month" />
        <DatePicker label="Week" mode="week" />
        <DatePicker label="Time" mode="time" />
        <DatePicker label="Date & Time" mode="datetime" />
        <div class="sm:col-span-2">
          <DatePicker label="Start date" label-end="End date" mode="date-range" />
        </div>
      </div>
    \`
  })
}`,...(Se=(qe=P.parameters)==null?void 0:qe.docs)==null?void 0:Se.source}}};const Xe=["Default","WithValue","DateRange","MonthPicker","WeekPicker","TimePicker","DateTimePicker","WithMinMax","Small","Large","Required","WithError","WithHint","Disabled","AllModes"];export{P as AllModes,g as DateRange,v as DateTimePicker,c as Default,S as Disabled,x as Large,p as MonthPicker,D as Required,k as Small,h as TimePicker,b as WeekPicker,V as WithError,q as WithHint,y as WithMinMax,f as WithValue,Xe as __namedExportsOrder,Ue as default};
