import{d as Y,b as l,e as n,F as C,k as P,g as L,n as i,t as y,j as f,o as a,f as V,A as z,B as O,C as U,D as x,v as _}from"./vue.esm-bundler-Db6pwSvC.js";const K=Symbol("multi-step-form"),Z={class:"flex flex-col gap-8"},G={"aria-label":"Progress"},H={class:"flex items-center"},J=["disabled","aria-current","onClick"],Q={key:0,class:"h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},W={key:1},X={class:"flex flex-col items-center"},ee={key:0,class:"hidden text-xs text-gray-400 sm:block"},te={class:"min-h-0"},se={key:0,class:"flex items-center justify-between border-t border-gray-200 pt-6"},re={key:1,class:"flex items-center justify-between border-t border-gray-200 pt-6"},le=["disabled"],c=Y({__name:"MultiStepForm",props:{steps:{},modelValue:{default:0},linear:{type:Boolean,default:!1}},emits:["update:modelValue","step-change","complete"],setup(s,{expose:o,emit:q}){const F=s,k=q,e=f(()=>F.modelValue),M=f(()=>F.steps.length),d=f(()=>e.value===0),m=f(()=>e.value===M.value-1);function p(r){if(r<0||r>=M.value||F.linear&&r>e.value+1)return;const v=r>e.value?"next":r<e.value?"prev":"jump";k("update:modelValue",r),k("step-change",r,v)}function g(){m.value?k("complete"):p(e.value+1)}function b(){d.value||p(e.value-1)}return U(K,{currentStep:x(e),totalSteps:x(M),isFirstStep:x(d),isLastStep:x(m),next:g,prev:b,goTo:p}),o({next:g,prev:b,goTo:p}),(r,v)=>(a(),l("div",Z,[n("nav",G,[n("ol",H,[(a(!0),l(C,null,P(s.steps,(u,t)=>(a(),l("li",{key:t,class:i(["relative flex items-center",t<s.steps.length-1?"flex-1":""])},[t>0?(a(),l("div",{key:0,class:i(["absolute top-4 right-1/2 -left-full h-0.5 transition-colors duration-200",t<=e.value?"bg-blue-600":"bg-gray-200"]),"aria-hidden":"true"},null,2)):V("",!0),n("button",{type:"button",class:i(["group relative z-10 flex flex-col items-center gap-2",!s.linear||t<=e.value+1?"cursor-pointer":"cursor-not-allowed"]),disabled:s.linear&&t>e.value+1,"aria-current":t===e.value?"step":void 0,onClick:ae=>p(t)},[n("span",{class:i(["flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors duration-200",t<e.value?"bg-blue-600 text-white":t===e.value?"border-blue-600 text-blue-600 border-2 bg-white":"border-2 border-gray-300 bg-white text-gray-500"])},[t<e.value?(a(),l("svg",Q,[...v[0]||(v[0]=[n("path",{"fill-rule":"evenodd",d:"M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z","clip-rule":"evenodd"},null,-1)])])):(a(),l("span",W,y(t+1),1))],2),n("span",X,[n("span",{class:i(["text-xs font-medium whitespace-nowrap",t<=e.value?"text-blue-600":"text-gray-500"])},y(u.title),3),u.description?(a(),l("span",ee,y(u.description),1)):V("",!0)])],10,J)],2))),128))])]),n("div",te,[(a(!0),l(C,null,P(s.steps,(u,t)=>z((a(),l("div",{key:t,role:"tabpanel"},[L(r.$slots,`step-${t}`,{step:u,index:t})],512)),[[O,t===e.value]])),128))]),r.$slots.actions?(a(),l("div",se,[L(r.$slots,"actions",{currentStep:e.value,isFirstStep:d.value,isLastStep:m.value,next:g,prev:b,goTo:p})])):(a(),l("div",re,[n("button",{type:"button",disabled:d.value,class:i(["rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors",d.value?"cursor-not-allowed opacity-50":"hover:bg-gray-50"]),onClick:b}," Previous ",10,le),n("button",{type:"button",class:"bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors",onClick:g},y(m.value?"Complete":"Next"),1)]))]))}});c.__docgenInfo={exportName:"default",displayName:"MultiStepForm",description:"",tags:{},expose:[{name:"next"},{name:"prev"},{name:"goTo"}],props:[{name:"steps",required:!0,type:{name:"Array",elements:[{name:"StepDefinition"}]}},{name:"modelValue",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"linear",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["number"]}},{name:"step-change",type:{names:["number"]}},{name:"complete"}],slots:[{name:"`step-${index}`",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"step",title:"binding"},{name:"index",title:"binding"}]},{name:"actions",scoped:!0,bindings:[{name:"current-step",title:"binding"},{name:"is-first-step",title:"binding"},{name:"is-last-step",title:"binding"},{name:"next",title:"binding"},{name:"prev",title:"binding"},{name:"go-to",title:"binding"}]}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/components/ui/multi-step-form/MultiStepForm.vue"]};const oe={title:"UI/MultiStepForm",component:c,tags:["autodocs"],argTypes:{linear:{control:"boolean"}}},T=[{title:"Account",description:"Basic info"},{title:"Profile",description:"Personal details"},{title:"Settings",description:"Preferences"},{title:"Review",description:"Confirm"}],S={args:{steps:T},render:s=>({components:{MultiStepForm:c},setup(){const o=_(0);return{args:s,step:o}},template:`
      <MultiStepForm v-bind="args" v-model="step">
        <template #step-0>
          <div class="rounded-lg border border-gray-200 p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Account Information</h3>
            <div class="flex flex-col gap-4">
              <input class="w-full rounded-lg border border-gray-300 px-4 py-2" placeholder="Email address" />
              <input class="w-full rounded-lg border border-gray-300 px-4 py-2" type="password" placeholder="Password" />
            </div>
          </div>
        </template>
        <template #step-1>
          <div class="rounded-lg border border-gray-200 p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Profile Details</h3>
            <div class="flex flex-col gap-4">
              <input class="w-full rounded-lg border border-gray-300 px-4 py-2" placeholder="Full name" />
              <input class="w-full rounded-lg border border-gray-300 px-4 py-2" placeholder="Phone number" />
            </div>
          </div>
        </template>
        <template #step-2>
          <div class="rounded-lg border border-gray-200 p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Settings</h3>
            <label class="inline-flex items-center gap-2">
              <input type="checkbox" class="rounded" />
              <span>Receive email notifications</span>
            </label>
          </div>
        </template>
        <template #step-3>
          <div class="rounded-lg border border-gray-200 p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Review</h3>
            <p class="text-gray-600">Please review your information before submitting.</p>
          </div>
        </template>
      </MultiStepForm>
    `})},h={args:{steps:T,linear:!0},render:s=>({components:{MultiStepForm:c},setup(){const o=_(0);return{args:s,step:o}},template:`
      <MultiStepForm v-bind="args" v-model="step">
        <template #step-0>
          <div class="rounded-lg border border-gray-200 p-6">
            <p class="text-gray-600">Step 1: You must go in order (linear mode).</p>
          </div>
        </template>
        <template #step-1>
          <div class="rounded-lg border border-gray-200 p-6">
            <p class="text-gray-600">Step 2: Continue forward.</p>
          </div>
        </template>
        <template #step-2>
          <div class="rounded-lg border border-gray-200 p-6">
            <p class="text-gray-600">Step 3: Almost there.</p>
          </div>
        </template>
        <template #step-3>
          <div class="rounded-lg border border-gray-200 p-6">
            <p class="text-gray-600">Step 4: Complete!</p>
          </div>
        </template>
      </MultiStepForm>
    `})},w={args:{steps:[{title:"Step 1"},{title:"Step 2"},{title:"Step 3"}]},render:s=>({components:{MultiStepForm:c},setup(){const o=_(0);return{args:s,step:o}},template:`
      <MultiStepForm v-bind="args" v-model="step">
        <template #step-0>
          <div class="rounded-lg border border-gray-200 p-6">
            <p class="text-gray-600">Custom action buttons below.</p>
          </div>
        </template>
        <template #step-1>
          <div class="rounded-lg border border-gray-200 p-6">
            <p class="text-gray-600">Step 2 content.</p>
          </div>
        </template>
        <template #step-2>
          <div class="rounded-lg border border-gray-200 p-6">
            <p class="text-gray-600">Final step.</p>
          </div>
        </template>
        <template #actions="{ isFirstStep, isLastStep, next, prev }">
          <button
            v-if="!isFirstStep"
            class="rounded-lg border border-gray-300 px-4 py-2 text-sm"
            @click="prev"
          >
            ← Back
          </button>
          <span v-else />
          <div class="flex gap-2">
            <button
              v-if="!isLastStep"
              class="rounded-lg bg-gray-200 px-4 py-2 text-sm"
              @click="next"
            >
              Skip
            </button>
            <button
              class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white"
              @click="next"
            >
              {{ isLastStep ? 'Submit' : 'Continue →' }}
            </button>
          </div>
        </template>
      </MultiStepForm>
    `})};var A,B,D;S.parameters={...S.parameters,docs:{...(A=S.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps
  },
  render: args => ({
    components: {
      MultiStepForm
    },
    setup() {
      const step = ref(0);
      return {
        args,
        step
      };
    },
    template: \`
      <MultiStepForm v-bind="args" v-model="step">
        <template #step-0>
          <div class="rounded-lg border border-gray-200 p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Account Information</h3>
            <div class="flex flex-col gap-4">
              <input class="w-full rounded-lg border border-gray-300 px-4 py-2" placeholder="Email address" />
              <input class="w-full rounded-lg border border-gray-300 px-4 py-2" type="password" placeholder="Password" />
            </div>
          </div>
        </template>
        <template #step-1>
          <div class="rounded-lg border border-gray-200 p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Profile Details</h3>
            <div class="flex flex-col gap-4">
              <input class="w-full rounded-lg border border-gray-300 px-4 py-2" placeholder="Full name" />
              <input class="w-full rounded-lg border border-gray-300 px-4 py-2" placeholder="Phone number" />
            </div>
          </div>
        </template>
        <template #step-2>
          <div class="rounded-lg border border-gray-200 p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Settings</h3>
            <label class="inline-flex items-center gap-2">
              <input type="checkbox" class="rounded" />
              <span>Receive email notifications</span>
            </label>
          </div>
        </template>
        <template #step-3>
          <div class="rounded-lg border border-gray-200 p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Review</h3>
            <p class="text-gray-600">Please review your information before submitting.</p>
          </div>
        </template>
      </MultiStepForm>
    \`
  })
}`,...(D=(B=S.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var j,E,R;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    linear: true
  },
  render: args => ({
    components: {
      MultiStepForm
    },
    setup() {
      const step = ref(0);
      return {
        args,
        step
      };
    },
    template: \`
      <MultiStepForm v-bind="args" v-model="step">
        <template #step-0>
          <div class="rounded-lg border border-gray-200 p-6">
            <p class="text-gray-600">Step 1: You must go in order (linear mode).</p>
          </div>
        </template>
        <template #step-1>
          <div class="rounded-lg border border-gray-200 p-6">
            <p class="text-gray-600">Step 2: Continue forward.</p>
          </div>
        </template>
        <template #step-2>
          <div class="rounded-lg border border-gray-200 p-6">
            <p class="text-gray-600">Step 3: Almost there.</p>
          </div>
        </template>
        <template #step-3>
          <div class="rounded-lg border border-gray-200 p-6">
            <p class="text-gray-600">Step 4: Complete!</p>
          </div>
        </template>
      </MultiStepForm>
    \`
  })
}`,...(R=(E=h.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var $,I,N;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    steps: [{
      title: 'Step 1'
    }, {
      title: 'Step 2'
    }, {
      title: 'Step 3'
    }]
  },
  render: args => ({
    components: {
      MultiStepForm
    },
    setup() {
      const step = ref(0);
      return {
        args,
        step
      };
    },
    template: \`
      <MultiStepForm v-bind="args" v-model="step">
        <template #step-0>
          <div class="rounded-lg border border-gray-200 p-6">
            <p class="text-gray-600">Custom action buttons below.</p>
          </div>
        </template>
        <template #step-1>
          <div class="rounded-lg border border-gray-200 p-6">
            <p class="text-gray-600">Step 2 content.</p>
          </div>
        </template>
        <template #step-2>
          <div class="rounded-lg border border-gray-200 p-6">
            <p class="text-gray-600">Final step.</p>
          </div>
        </template>
        <template #actions="{ isFirstStep, isLastStep, next, prev }">
          <button
            v-if="!isFirstStep"
            class="rounded-lg border border-gray-300 px-4 py-2 text-sm"
            @click="prev"
          >
            ← Back
          </button>
          <span v-else />
          <div class="flex gap-2">
            <button
              v-if="!isLastStep"
              class="rounded-lg bg-gray-200 px-4 py-2 text-sm"
              @click="next"
            >
              Skip
            </button>
            <button
              class="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white"
              @click="next"
            >
              {{ isLastStep ? 'Submit' : 'Continue →' }}
            </button>
          </div>
        </template>
      </MultiStepForm>
    \`
  })
}`,...(N=(I=w.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};const pe=["Default","Linear","CustomActions"];export{w as CustomActions,S as Default,h as Linear,pe as __namedExportsOrder,oe as default};
