import{d as k,b as a,f as i,F as w,e as B,o as r,u as C,y as S,t as u,n as P}from"./vue.esm-bundler-DtUWbB1b.js";const D={"aria-label":"Breadcrumb"},N={class:"flex flex-wrap items-center gap-1.5 text-sm"},H={key:0,class:"text-gray-400","aria-hidden":"true"},L={key:0,class:"h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},F={key:1},I=["href","onClick"],T=["aria-current"],_=k({__name:"Breadcrumb",props:{items:{},separator:{default:"chevron"}},emits:["navigate"],setup(l){return(x,c)=>(r(),a("nav",D,[i("ol",N,[(r(!0),a(w,null,B(l.items,(e,o)=>(r(),a("li",{key:o,class:"inline-flex items-center gap-1.5"},[o>0?(r(),a("span",H,[l.separator==="chevron"?(r(),a("svg",L,[...c[0]||(c[0]=[i("path",{"fill-rule":"evenodd",d:"M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"},null,-1)])])):(r(),a("span",F,"/"))])):C("",!0),e.href&&!e.active?(r(),a("a",{key:1,href:e.href,class:"text-gray-500 transition-colors hover:text-gray-700",onClick:S(V=>x.$emit("navigate",e,o),["prevent"])},u(e.label),9,I)):(r(),a("span",{key:2,class:P(e.active?"font-medium text-gray-900":"text-gray-500"),"aria-current":e.active?"page":void 0},u(e.label),11,T))]))),128))])]))}});_.__docgenInfo={exportName:"default",displayName:"Breadcrumb",description:"",tags:{},props:[{name:"items",required:!0,type:{name:"Array",elements:[{name:"BreadcrumbItem"}]}},{name:"separator",required:!1,type:{name:"union",elements:[{name:'"slash"'},{name:'"chevron"'}]},defaultValue:{func:!1,value:"'chevron'"}}],events:[{name:"navigate",type:{names:["BreadcrumbItem"]}}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/breadcrumb/Breadcrumb.vue"]};const q={title:"Navigation/Breadcrumb",component:_,tags:["autodocs"],argTypes:{separator:{control:"select",options:["slash","chevron"]}}},s={args:{items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Category",href:"/products/category"},{label:"Current Page",active:!0}]}},t={args:{items:[{label:"Home",href:"/"},{label:"Settings",href:"/settings"},{label:"Profile",active:!0}],separator:"slash"}},n={args:{items:[{label:"Dashboard",href:"/"},{label:"Users",active:!0}]}};var m,d,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Products',
      href: '/products'
    }, {
      label: 'Category',
      href: '/products/category'
    }, {
      label: 'Current Page',
      active: true
    }]
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,h,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Settings',
      href: '/settings'
    }, {
      label: 'Profile',
      active: true
    }],
    separator: 'slash'
  }
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,b,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Dashboard',
      href: '/'
    }, {
      label: 'Users',
      active: true
    }]
  }
}`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const E=["Default","SlashSeparator","TwoLevels"];export{s as Default,t as SlashSeparator,n as TwoLevels,E as __namedExportsOrder,q as default};
