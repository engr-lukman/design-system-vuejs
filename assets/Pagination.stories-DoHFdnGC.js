import{d as G,b as c,e as n,x as d,t as f,F as C,k as H,j as l,o as m,n as J,v as x}from"./vue.esm-bundler-Db6pwSvC.js";const K={class:"flex flex-col items-center gap-3 sm:flex-row sm:justify-between","aria-label":"Pagination"},Q={class:"text-sm text-gray-600"},R={class:"font-medium"},W={class:"font-medium"},X={class:"font-medium"},Y={class:"flex items-center gap-1"},ee=["disabled"],te={key:0,class:"inline-flex h-9 w-9 items-center justify-center text-sm text-gray-400"},ae=["aria-current","onClick"],re=["disabled"],u=G({__name:"Pagination",props:{totalItems:{},currentPage:{},perPage:{default:10},maxVisible:{default:5}},emits:["update:currentPage"],setup(s,{emit:T}){const r=s,$=T,w=l(()=>Math.max(1,Math.ceil(r.totalItems/r.perPage))),E=l(()=>r.currentPage===1),Z=l(()=>r.currentPage===w.value),z=l(()=>{const t=w.value,e=r.currentPage,a=r.maxVisible;if(t<=a)return Array.from({length:t},(g,U)=>U+1);const k=Math.floor(a/2);let p=Math.max(1,e-k),i=p+a-1;i>t&&(i=t,p=Math.max(1,i-a+1));const o=[];p>1&&(o.push(1),p>2&&o.push("ellipsis-start"));for(let g=p;g<=i;g++)o.includes(g)||o.push(g);return i<t&&(i<t-1&&o.push("ellipsis-end"),o.includes(t)||o.push(t)),o}),A=l(()=>(r.currentPage-1)*r.perPage+1),O=l(()=>Math.min(r.currentPage*r.perPage,r.totalItems));function h(t){t>=1&&t<=w.value&&t!==r.currentPage&&$("update:currentPage",t)}return(t,e)=>(m(),c("nav",K,[n("p",Q,[e[2]||(e[2]=d(" Showing ",-1)),n("span",R,f(A.value),1),e[3]||(e[3]=d(" to ",-1)),n("span",W,f(O.value),1),e[4]||(e[4]=d(" of ",-1)),n("span",X,f(s.totalItems),1),e[5]||(e[5]=d(" results ",-1))]),n("div",Y,[n("button",{type:"button",disabled:E.value,class:"inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 text-gray-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50","aria-label":"Previous page",onClick:e[0]||(e[0]=a=>h(s.currentPage-1))},[...e[6]||(e[6]=[n("svg",{class:"h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[n("path",{"fill-rule":"evenodd",d:"M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z","clip-rule":"evenodd"})],-1)])],8,ee),(m(!0),c(C,null,H(z.value,a=>(m(),c(C,{key:a},[a==="ellipsis-start"||a==="ellipsis-end"?(m(),c("span",te," … ")):(m(),c("button",{key:1,type:"button",class:J(["inline-flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium transition-colors",a===s.currentPage?"bg-blue-600 text-white":"border border-gray-300 text-gray-700 hover:bg-gray-50"]),"aria-current":a===s.currentPage?"page":void 0,onClick:k=>h(a)},f(a),11,ae))],64))),128)),n("button",{type:"button",disabled:Z.value,class:"inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 text-gray-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50","aria-label":"Next page",onClick:e[1]||(e[1]=a=>h(s.currentPage+1))},[...e[7]||(e[7]=[n("svg",{class:"h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[n("path",{"fill-rule":"evenodd",d:"M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"})],-1)])],8,re)])]))}});u.__docgenInfo={exportName:"default",displayName:"Pagination",description:"",tags:{},props:[{name:"totalItems",required:!0,type:{name:"number"}},{name:"currentPage",required:!0,type:{name:"number"}},{name:"perPage",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"maxVisible",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"5"}}],events:[{name:"update:currentPage",type:{names:["number"]}}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/components/ui/pagination/Pagination.vue"]};const se={title:"UI/Pagination",component:u,tags:["autodocs"],argTypes:{perPage:{control:"number"},maxVisible:{control:"number"}}},P={render:()=>({components:{Pagination:u},setup(){return{page:x(1)}},template:'<Pagination :total-items="100" v-model:current-page="page" />'})},v={render:()=>({components:{Pagination:u},setup(){return{page:x(5)}},template:'<Pagination :total-items="500" :per-page="10" v-model:current-page="page" />'})},b={render:()=>({components:{Pagination:u},setup(){return{page:x(1)}},template:'<Pagination :total-items="25" :per-page="10" v-model:current-page="page" />'})},y={render:()=>({components:{Pagination:u},setup(){return{page:x(1)}},template:'<Pagination :total-items="200" :per-page="25" v-model:current-page="page" />'})};var M,I,j;P.parameters={...P.parameters,docs:{...(M=P.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Pagination
    },
    setup() {
      const page = ref(1);
      return {
        page
      };
    },
    template: '<Pagination :total-items="100" v-model:current-page="page" />'
  })
}`,...(j=(I=P.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var V,F,S;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Pagination
    },
    setup() {
      const page = ref(5);
      return {
        page
      };
    },
    template: '<Pagination :total-items="500" :per-page="10" v-model:current-page="page" />'
  })
}`,...(S=(F=v.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var B,N,_;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Pagination
    },
    setup() {
      const page = ref(1);
      return {
        page
      };
    },
    template: '<Pagination :total-items="25" :per-page="10" v-model:current-page="page" />'
  })
}`,...(_=(N=b.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var q,L,D;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Pagination
    },
    setup() {
      const page = ref(1);
      return {
        page
      };
    },
    template: '<Pagination :total-items="200" :per-page="25" v-model:current-page="page" />'
  })
}`,...(D=(L=y.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};const oe=["Default","ManyPages","FewPages","CustomPerPage"];export{y as CustomPerPage,P as Default,b as FewPages,v as ManyPages,oe as __namedExportsOrder,se as default};
