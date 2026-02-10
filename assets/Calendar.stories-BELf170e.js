import{d as $,k as m,b as v,f as l,t as D,F as V,e as S,v as G,o as f,n as H}from"./vue.esm-bundler-DtUWbB1b.js";const K={class:"w-72 rounded-lg border border-gray-200 bg-white p-4 shadow-sm"},Q={class:"mb-4 flex items-center justify-between"},R={class:"mb-1 grid grid-cols-7 text-center text-xs font-medium text-gray-500"},U={class:"grid grid-cols-7 text-center text-sm"},X=["disabled","onClick"],g=$({__name:"Calendar",props:{modelValue:{default:void 0},minDate:{default:null},maxDate:{default:null}},emits:["update:modelValue"],setup(c,{emit:d}){var C,F;const n=c,b=d,o=new Date,s=m(((C=n.modelValue)==null?void 0:C.getFullYear())??o.getFullYear()),a=m(((F=n.modelValue)==null?void 0:F.getMonth())??o.getMonth()),q=["Su","Mo","Tu","We","Th","Fr","Sa"],J=["January","February","March","April","May","June","July","August","September","October","November","December"],A=G(()=>{const e=new Date(s.value,a.value,1),i=new Date(s.value,a.value+1,0),t=e.getDay(),u=[],_=new Date(s.value,a.value,0);for(let r=t-1;r>=0;r--)u.push({date:new Date(s.value,a.value-1,_.getDate()-r),currentMonth:!1});for(let r=1;r<=i.getDate();r++)u.push({date:new Date(s.value,a.value,r),currentMonth:!0});const I=42-u.length;for(let r=1;r<=I;r++)u.push({date:new Date(s.value,a.value+1,r),currentMonth:!1});return u});function E(e){return e.getDate()===o.getDate()&&e.getMonth()===o.getMonth()&&e.getFullYear()===o.getFullYear()}function w(e){return n.modelValue?e.getDate()===n.modelValue.getDate()&&e.getMonth()===n.modelValue.getMonth()&&e.getFullYear()===n.modelValue.getFullYear():!1}function p(e){return!!(n.minDate&&e<n.minDate||n.maxDate&&e>n.maxDate)}function M(e){p(e)||b("update:modelValue",e)}function P(){a.value===0?(a.value=11,s.value--):a.value--}function Z(){a.value===11?(a.value=0,s.value++):a.value++}function z(){s.value=o.getFullYear(),a.value=o.getMonth(),M(new Date(o.getFullYear(),o.getMonth(),o.getDate()))}return(e,i)=>(f(),v("div",K,[l("div",Q,[l("button",{type:"button",class:"rounded-md p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600","aria-label":"Previous month",onClick:P},[...i[0]||(i[0]=[l("svg",{class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[l("path",{"fill-rule":"evenodd",d:"M11.78 5.22a.75.75 0 0 1 0 1.06L8.56 10l3.22 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z","clip-rule":"evenodd"})],-1)])]),l("button",{type:"button",class:"text-sm font-semibold text-gray-900 hover:text-gray-600",onClick:z},D(J[a.value])+" "+D(s.value),1),l("button",{type:"button",class:"rounded-md p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600","aria-label":"Next month",onClick:Z},[...i[1]||(i[1]=[l("svg",{class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[l("path",{"fill-rule":"evenodd",d:"M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.44 10 8.22 6.28a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"})],-1)])])]),l("div",R,[(f(),v(V,null,S(q,t=>l("div",{key:t,class:"py-1"},D(t),1)),64))]),l("div",U,[(f(!0),v(V,null,S(A.value,(t,u)=>(f(),v("button",{key:u,type:"button",disabled:p(t.date),class:H(["relative h-9 w-9 rounded-md text-sm transition-colors",!t.currentMonth&&"text-gray-300",t.currentMonth&&!w(t.date)&&!p(t.date)&&"text-gray-700 hover:bg-gray-100",E(t.date)&&!w(t.date)&&"bg-gray-100 font-semibold text-gray-900",w(t.date)&&"bg-gray-900 font-semibold text-white hover:bg-gray-900/90",p(t.date)&&"cursor-not-allowed text-gray-300"]),onClick:_=>M(t.date)},D(t.date.getDate()),11,X))),128))])]))}});g.__docgenInfo={exportName:"default",displayName:"Calendar",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"Date"},defaultValue:{func:!1,value:"undefined"}},{name:"minDate",required:!1,type:{name:"union",elements:[{name:"Date"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"maxDate",required:!1,type:{name:"union",elements:[{name:"Date"},{name:"null"}]},defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue",type:{names:["Date"]}}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/calendar/Calendar.vue"]};const te={title:"Data Display/Calendar",component:g,tags:["autodocs"]},y={render:()=>({components:{Calendar:g},setup(){return{date:m(void 0)}},template:`
      <div>
        <Calendar v-model="date" />
        <p class="mt-2 text-sm text-gray-500">Selected: {{ date?.toLocaleDateString() ?? 'None' }}</p>
      </div>
    `})},h={render:()=>({components:{Calendar:g},setup(){return{date:m(new Date)}},template:'<Calendar v-model="date" />'})},x={render:()=>({components:{Calendar:g},setup(){const c=m(void 0),d=new Date,n=new Date(d.getFullYear(),d.getMonth(),d.getDate()-5),b=new Date(d.getFullYear(),d.getMonth(),d.getDate()+10);return{date:c,minDate:n,maxDate:b}},template:`
      <div>
        <Calendar v-model="date" :min-date="minDate" :max-date="maxDate" />
        <p class="mt-2 text-xs text-gray-400">Only dates within ±5/+10 days from today are selectable.</p>
      </div>
    `})};var Y,k,N;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Calendar
    },
    setup() {
      const date = ref<Date | undefined>(undefined);
      return {
        date
      };
    },
    template: \`
      <div>
        <Calendar v-model="date" />
        <p class="mt-2 text-sm text-gray-500">Selected: {{ date?.toLocaleDateString() ?? 'None' }}</p>
      </div>
    \`
  })
}`,...(N=(k=y.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var L,B,T;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Calendar
    },
    setup() {
      const date = ref(new Date());
      return {
        date
      };
    },
    template: '<Calendar v-model="date" />'
  })
}`,...(T=(B=h.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var W,O,j;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Calendar
    },
    setup() {
      const date = ref<Date | undefined>(undefined);
      const today = new Date();
      const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5);
      const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 10);
      return {
        date,
        minDate,
        maxDate
      };
    },
    template: \`
      <div>
        <Calendar v-model="date" :min-date="minDate" :max-date="maxDate" />
        <p class="mt-2 text-xs text-gray-400">Only dates within ±5/+10 days from today are selectable.</p>
      </div>
    \`
  })
}`,...(j=(O=x.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};const ae=["Default","WithSelectedDate","WithMinMaxDates"];export{y as Default,x as WithMinMaxDates,h as WithSelectedDate,ae as __namedExportsOrder,te as default};
