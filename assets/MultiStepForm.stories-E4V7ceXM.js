import{d as re,b as a,f as r,F as C,e as D,j as B,t as m,n as d,u as f,v as L,o as n,E as ae,H as ne,g as le,k as Y}from"./vue.esm-bundler-YEuhxn0F.js";const oe={class:"w-full"},ie={"aria-label":"Progress"},de={class:"flex items-center"},ue=["disabled","aria-current","onClick"],me={key:0,class:"h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},pe={key:1},ce={class:"ml-3 hidden sm:block"},ge={class:"mt-8"},be=["aria-label"],ve={key:0,class:"mt-8 flex items-center justify-between border-t border-gray-200 pt-4"},fe=["disabled"],ye={class:"text-sm text-gray-500"},xe={key:0,class:"ml-1.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},N=re({__name:"MultiStepForm",props:{steps:{},modelValue:{default:0},showNavigation:{type:Boolean,default:!0},nextLabel:{default:"Next"},prevLabel:{default:"Back"},finishLabel:{default:"Finish"},linear:{type:Boolean,default:!0}},emits:["update:modelValue","next","prev","finish","step-click"],setup(t,{emit:g}){const l=t,u=g,b=L(()=>l.steps.length),M=L(()=>l.modelValue===0),V=L(()=>l.modelValue===b.value-1);function i(s){return s<l.modelValue?"completed":s===l.modelValue?"current":"upcoming"}function ee(s){l.linear&&s>l.modelValue||(u("update:modelValue",s),u("step-click",s))}function te(){if(V.value)u("finish");else{const s=l.modelValue+1;u("update:modelValue",s),u("next",s)}}function se(){if(!M.value){const s=l.modelValue-1;u("update:modelValue",s),u("prev",s)}}return(s,p)=>(n(),a("div",oe,[r("nav",ie,[r("ol",de,[(n(!0),a(C,null,D(t.steps,(v,e)=>(n(),a("li",{key:e,class:d(["flex items-center",e<b.value-1?"flex-1":""])},[r("button",{type:"button",class:d(["group flex items-center",!t.linear||e<=t.modelValue?"cursor-pointer":"cursor-not-allowed"]),disabled:t.linear&&e>t.modelValue,"aria-current":i(e)==="current"?"step":void 0,onClick:F=>ee(e)},[r("span",{class:d(["flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-medium transition-colors duration-150",i(e)==="completed"?"bg-gray-900 text-white":i(e)==="current"?"border-2 border-gray-900 bg-white text-gray-900":"border-2 border-gray-300 bg-white text-gray-500"])},[i(e)==="completed"?(n(),a("svg",me,[...p[0]||(p[0]=[r("path",{"fill-rule":"evenodd",d:"M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z","clip-rule":"evenodd"},null,-1)])])):(n(),a("span",pe,m(e+1),1))],2),r("span",ce,[r("span",{class:d(["text-sm font-medium",i(e)==="completed"||i(e)==="current"?"text-gray-900":"text-gray-500"])},m(v.label),3),v.description?(n(),a("span",{key:0,class:d(["block text-xs",i(e)==="upcoming"?"text-gray-400":"text-gray-500"])},m(v.description),3)):f("",!0)])],10,ue),e<b.value-1?(n(),a("div",{key:0,class:d(["mx-4 h-0.5 flex-1 transition-colors duration-150",e<t.modelValue?"bg-gray-900":"bg-gray-200"]),"aria-hidden":"true"},null,2)):f("",!0)],2))),128))])]),r("div",ge,[(n(!0),a(C,null,D(t.steps,(v,e)=>{var F;return ae((n(),a("div",{key:e,role:"tabpanel","aria-label":(F=t.steps[e])==null?void 0:F.label},[le(s.$slots,`step-${e+1}`,{step:e,status:i(e)})],8,be)),[[ne,e===t.modelValue]])}),128))]),t.showNavigation?(n(),a("div",ve,[r("button",{type:"button",class:d(["inline-flex items-center rounded-md px-4 py-2 text-sm font-medium transition-colors duration-150","border border-gray-200 bg-white text-gray-900 hover:bg-gray-100","focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none","disabled:pointer-events-none disabled:opacity-50"]),disabled:M.value,onClick:se},[p[1]||(p[1]=r("svg",{class:"mr-1.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[r("path",{"fill-rule":"evenodd",d:"M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z","clip-rule":"evenodd"})],-1)),B(" "+m(t.prevLabel),1)],8,fe),r("span",ye," Step "+m(t.modelValue+1)+" of "+m(b.value),1),r("button",{type:"button",class:d(["inline-flex items-center rounded-md px-4 py-2 text-sm font-medium transition-colors duration-150","bg-gray-900 text-white hover:bg-gray-900/90","focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none","disabled:pointer-events-none disabled:opacity-50"]),onClick:te},[B(m(V.value?t.finishLabel:t.nextLabel)+" ",1),V.value?f("",!0):(n(),a("svg",xe,[...p[2]||(p[2]=[r("path",{"fill-rule":"evenodd",d:"M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"},null,-1)])]))])])):f("",!0)]))}});N.__docgenInfo={exportName:"default",displayName:"MultiStepForm",description:"",tags:{},props:[{name:"steps",required:!0,type:{name:"Array",elements:[{name:"MultiStepFormStep"}]}},{name:"modelValue",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"showNavigation",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"nextLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Next'"}},{name:"prevLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Back'"}},{name:"finishLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Finish'"}},{name:"linear",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue",type:{names:["number"]}},{name:"next",type:{names:["number"]}},{name:"prev",type:{names:["number"]}},{name:"finish"},{name:"step-click",type:{names:["number"]}}],slots:[{name:"`step-${index + 1}`",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"step",title:"binding"},{name:"status",title:"binding"}]}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/multi-step-form/MultiStepForm.vue"]};const we={title:"Form/MultiStepForm",component:N,tags:["autodocs"],argTypes:{modelValue:{control:{type:"number",min:0,max:3}},showNavigation:{control:"boolean"},linear:{control:"boolean"},nextLabel:{control:"text"},prevLabel:{control:"text"},finishLabel:{control:"text"}}},c=[{label:"Account",description:"Create your account"},{label:"Profile",description:"Set up your profile"},{label:"Review",description:"Review and confirm"}],o={render:t=>({components:{MultiStepForm:N},setup(){const g=Y(0);return{args:t,step:g}},template:`
      <MultiStepForm v-bind="args" v-model="step" :steps="args.steps">
        <template #step-1>
          <div class="rounded-md border border-gray-200 p-6">
            <h3 class="text-lg font-semibold text-gray-900">Account Information</h3>
            <p class="mt-1 text-sm text-gray-500">Enter your email and password.</p>
            <div class="mt-4 space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" placeholder="you@example.com" class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" placeholder="••••••••" class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950" />
              </div>
            </div>
          </div>
        </template>
        <template #step-2>
          <div class="rounded-md border border-gray-200 p-6">
            <h3 class="text-lg font-semibold text-gray-900">Profile Details</h3>
            <p class="mt-1 text-sm text-gray-500">Tell us about yourself.</p>
            <div class="mt-4 space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" placeholder="John Doe" class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Bio</label>
                <textarea rows="3" placeholder="A short bio..." class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950"></textarea>
              </div>
            </div>
          </div>
        </template>
        <template #step-3>
          <div class="rounded-md border border-gray-200 p-6">
            <h3 class="text-lg font-semibold text-gray-900">Review</h3>
            <p class="mt-1 text-sm text-gray-500">Please review your information before submitting.</p>
            <div class="mt-4 rounded-md bg-gray-50 p-4 text-sm text-gray-700">
              All steps completed. Click <strong>Finish</strong> to submit.
            </div>
          </div>
        </template>
      </MultiStepForm>
    `}),args:{steps:c,showNavigation:!0,linear:!0}},y={render:o.render,args:{steps:c,modelValue:1,showNavigation:!0,linear:!1}},x={render:o.render,args:{steps:c,modelValue:2,showNavigation:!0,linear:!1}},h={render:o.render,args:{steps:c,showNavigation:!0,linear:!1}},w={render:t=>({components:{MultiStepForm:N},setup(){const g=Y(1);return{args:t,step:g}},template:`
      <MultiStepForm v-bind="args" v-model="step" :steps="args.steps">
        <template #step-1>
          <div class="rounded-md border border-gray-200 p-6">
            <p class="text-sm text-gray-700">Step 1 content — navigation is hidden.</p>
          </div>
        </template>
        <template #step-2>
          <div class="rounded-md border border-gray-200 p-6">
            <p class="text-sm text-gray-700">Step 2 content — navigation is hidden.</p>
          </div>
        </template>
        <template #step-3>
          <div class="rounded-md border border-gray-200 p-6">
            <p class="text-sm text-gray-700">Step 3 content — navigation is hidden.</p>
          </div>
        </template>
      </MultiStepForm>
    `}),args:{steps:c,showNavigation:!1}},S={render:o.render,args:{steps:[{label:"Cart",description:"Review items"},{label:"Shipping",description:"Delivery address"},{label:"Payment",description:"Payment method"},{label:"Confirm",description:"Place order"}],showNavigation:!0,linear:!0}},k={render:o.render,args:{steps:c,showNavigation:!0,linear:!0,nextLabel:"Continue",prevLabel:"Go Back",finishLabel:"Submit"}};var P,A,q;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
      <MultiStepForm v-bind="args" v-model="step" :steps="args.steps">
        <template #step-1>
          <div class="rounded-md border border-gray-200 p-6">
            <h3 class="text-lg font-semibold text-gray-900">Account Information</h3>
            <p class="mt-1 text-sm text-gray-500">Enter your email and password.</p>
            <div class="mt-4 space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" placeholder="you@example.com" class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" placeholder="••••••••" class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950" />
              </div>
            </div>
          </div>
        </template>
        <template #step-2>
          <div class="rounded-md border border-gray-200 p-6">
            <h3 class="text-lg font-semibold text-gray-900">Profile Details</h3>
            <p class="mt-1 text-sm text-gray-500">Tell us about yourself.</p>
            <div class="mt-4 space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" placeholder="John Doe" class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Bio</label>
                <textarea rows="3" placeholder="A short bio..." class="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950"></textarea>
              </div>
            </div>
          </div>
        </template>
        <template #step-3>
          <div class="rounded-md border border-gray-200 p-6">
            <h3 class="text-lg font-semibold text-gray-900">Review</h3>
            <p class="mt-1 text-sm text-gray-500">Please review your information before submitting.</p>
            <div class="mt-4 rounded-md bg-gray-50 p-4 text-sm text-gray-700">
              All steps completed. Click <strong>Finish</strong> to submit.
            </div>
          </div>
        </template>
      </MultiStepForm>
    \`
  }),
  args: {
    steps: defaultSteps,
    showNavigation: true,
    linear: true
  }
}`,...(q=(A=o.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var E,R,j;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: Default.render,
  args: {
    steps: defaultSteps,
    modelValue: 1,
    showNavigation: true,
    linear: false
  }
}`,...(j=(R=y.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var T,$,I;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: Default.render,
  args: {
    steps: defaultSteps,
    modelValue: 2,
    showNavigation: true,
    linear: false
  }
}`,...(I=($=x.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};var Z,G,J;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: Default.render,
  args: {
    steps: defaultSteps,
    showNavigation: true,
    linear: false
  }
}`,...(J=(G=h.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var _,z,H;w.parameters={...w.parameters,docs:{...(_=w.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => ({
    components: {
      MultiStepForm
    },
    setup() {
      const step = ref(1);
      return {
        args,
        step
      };
    },
    template: \`
      <MultiStepForm v-bind="args" v-model="step" :steps="args.steps">
        <template #step-1>
          <div class="rounded-md border border-gray-200 p-6">
            <p class="text-sm text-gray-700">Step 1 content — navigation is hidden.</p>
          </div>
        </template>
        <template #step-2>
          <div class="rounded-md border border-gray-200 p-6">
            <p class="text-sm text-gray-700">Step 2 content — navigation is hidden.</p>
          </div>
        </template>
        <template #step-3>
          <div class="rounded-md border border-gray-200 p-6">
            <p class="text-sm text-gray-700">Step 3 content — navigation is hidden.</p>
          </div>
        </template>
      </MultiStepForm>
    \`
  }),
  args: {
    steps: defaultSteps,
    showNavigation: false
  }
}`,...(H=(z=w.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var O,K,Q;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: Default.render,
  args: {
    steps: [{
      label: 'Cart',
      description: 'Review items'
    }, {
      label: 'Shipping',
      description: 'Delivery address'
    }, {
      label: 'Payment',
      description: 'Payment method'
    }, {
      label: 'Confirm',
      description: 'Place order'
    }],
    showNavigation: true,
    linear: true
  }
}`,...(Q=(K=S.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,W,X;k.parameters={...k.parameters,docs:{...(U=k.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: Default.render,
  args: {
    steps: defaultSteps,
    showNavigation: true,
    linear: true,
    nextLabel: 'Continue',
    prevLabel: 'Go Back',
    finishLabel: 'Submit'
  }
}`,...(X=(W=k.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const Se=["Default","MiddleStep","LastStep","NonLinear","NoNavigation","FourSteps","CustomLabels"];export{k as CustomLabels,o as Default,S as FourSteps,x as LastStep,y as MiddleStep,w as NoNavigation,h as NonLinear,Se as __namedExportsOrder,we as default};
