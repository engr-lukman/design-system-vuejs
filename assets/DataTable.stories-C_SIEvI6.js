import{d as ee,k as x,w as ae,b as l,f as r,E as te,G as le,u as v,F as y,e as k,g as A,t as p,v as C,o as s,x as se,n as _,j as B}from"./vue.esm-bundler-YEuhxn0F.js";const re={class:"w-full space-y-4"},ne={key:0,class:"relative"},oe=["placeholder"],ue={class:"overflow-x-auto rounded-lg border border-gray-200"},ie={class:"w-full text-left text-sm text-gray-700"},de={class:"border-b border-gray-200 bg-gray-50 text-xs font-medium tracking-wider text-gray-500 uppercase"},ce=["onClick"],me={class:"flex items-center gap-1"},ge={key:0,class:"text-gray-400"},pe={key:0,class:"h-3.5 w-3.5",fill:"currentColor",viewBox:"0 0 20 20"},ve={key:1,class:"h-3.5 w-3.5",fill:"currentColor",viewBox:"0 0 20 20"},ye={key:2,class:"h-3.5 w-3.5 opacity-40",fill:"currentColor",viewBox:"0 0 20 20"},be={class:"divide-y divide-gray-200"},fe=["onClick"],he={key:0},xe=["colspan"],ke={key:1,class:"flex items-center justify-between text-sm text-gray-600"},we={class:"flex items-center gap-2"},Se=["value"],Ce=["value"],_e={class:"text-gray-500"},De={key:0,class:"flex items-center gap-1"},ze=["disabled"],Te=["onClick"],$e={key:1,class:"px-1"},Ve=["disabled"],N=ee({__name:"DataTable",props:{columns:{},data:{},searchable:{type:Boolean,default:!1},searchPlaceholder:{default:"Search..."},pageSize:{default:10},pageSizeOptions:{default:()=>[10,25,50,100]},striped:{type:Boolean,default:!1}},emits:["row-click"],setup(o,{emit:d}){const b=o,W=d,w=x(""),g=x(null),c=x(null),n=x(1),m=x(b.pageSize);ae(()=>b.pageSize,t=>{m.value=t});function X(t){m.value=t,n.value=1}function Y(t){t.sortable&&(g.value!==t.key?(g.value=t.key,c.value="asc"):c.value==="asc"?c.value="desc":(g.value=null,c.value=null),n.value=1)}const q=C(()=>{if(!w.value)return b.data;const t=w.value.toLowerCase();return b.data.filter(a=>b.columns.some(e=>{if(e.filterable===!1)return!1;const i=a[e.key];return i!=null&&String(i).toLowerCase().includes(t)}))}),f=C(()=>{if(!g.value||!c.value)return q.value;const t=g.value,a=c.value==="asc"?1:-1;return[...q.value].sort((e,i)=>{const u=e[t],S=i[t];return u==null?1:S==null?-1:typeof u=="number"&&typeof S=="number"?(u-S)*a:String(u).localeCompare(String(S))*a})}),h=C(()=>Math.max(1,Math.ceil(f.value.length/m.value))),E=C(()=>{const t=(n.value-1)*m.value;return f.value.slice(t,t+m.value)});function P(t){n.value=Math.max(1,Math.min(t,h.value))}const j={left:"text-left",center:"text-center",right:"text-right"};return(t,a)=>(s(),l("div",re,[o.searchable?(s(),l("div",ne,[a[5]||(a[5]=r("svg",{class:"absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[r("path",{"fill-rule":"evenodd",d:"M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.45 4.39l3.58 3.58a.75.75 0 1 1-1.06 1.06l-3.58-3.58A7 7 0 0 1 2 9Z","clip-rule":"evenodd"})],-1)),te(r("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>w.value=e),type:"text",placeholder:o.searchPlaceholder,class:"w-full rounded-md border border-gray-300 py-2 pr-4 pl-10 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950",onInput:a[1]||(a[1]=e=>n.value=1)},null,40,oe),[[le,w.value]])])):v("",!0),r("div",ue,[r("table",ie,[r("thead",de,[r("tr",null,[(s(!0),l(y,null,k(o.columns,e=>(s(),l("th",{key:e.key,class:_(["px-6 py-3",j[e.align||"left"],e.sortable&&"cursor-pointer select-none hover:text-gray-700"]),style:se(e.width?{width:e.width}:{}),onClick:i=>Y(e)},[r("div",me,[A(t.$slots,`header-${e.key}`,{column:e},()=>[B(p(e.label),1)]),e.sortable?(s(),l("span",ge,[g.value===e.key&&c.value==="asc"?(s(),l("svg",pe,[...a[6]||(a[6]=[r("path",{d:"M10 3l7 7H3z"},null,-1)])])):g.value===e.key&&c.value==="desc"?(s(),l("svg",ve,[...a[7]||(a[7]=[r("path",{d:"M10 17l-7-7h14z"},null,-1)])])):(s(),l("svg",ye,[...a[8]||(a[8]=[r("path",{d:"M10 3l5 5H5zm0 14l-5-5h10z"},null,-1)])]))])):v("",!0)])],14,ce))),128))])]),r("tbody",be,[(s(!0),l(y,null,k(E.value,(e,i)=>(s(),l("tr",{key:i,class:_(["cursor-pointer hover:bg-gray-50",o.striped&&i%2===1&&"bg-gray-50/50"]),onClick:u=>W("row-click",e)},[(s(!0),l(y,null,k(o.columns,u=>(s(),l("td",{key:u.key,class:_(["px-6 py-4",j[u.align||"left"]])},[A(t.$slots,`cell-${u.key}`,{row:e,value:e[u.key]},()=>[B(p(e[u.key]),1)])],2))),128))],10,fe))),128)),E.value.length===0?(s(),l("tr",he,[r("td",{colspan:o.columns.length,class:"px-6 py-12 text-center text-gray-400"},[A(t.$slots,"empty",{},()=>[a[9]||(a[9]=B(" No results found ",-1))])],8,xe)])):v("",!0)])])]),f.value.length>0?(s(),l("div",ke,[r("div",we,[a[10]||(a[10]=r("span",null,"Rows per page",-1)),r("select",{value:m.value,class:"rounded-md border border-gray-300 bg-white px-2 py-1 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950",onChange:a[2]||(a[2]=e=>X(Number(e.target.value)))},[(s(!0),l(y,null,k(o.pageSizeOptions,e=>(s(),l("option",{key:e,value:e},p(e),9,Ce))),128))],40,Se),r("span",_e,p((n.value-1)*m.value+1)+"-"+p(Math.min(n.value*m.value,f.value.length))+" of "+p(f.value.length),1)]),h.value>1?(s(),l("div",De,[r("button",{disabled:n.value===1,class:"rounded-md px-3 py-1.5 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50",onClick:a[3]||(a[3]=e=>P(n.value-1))}," Previous ",8,ze),(s(!0),l(y,null,k(h.value,e=>(s(),l(y,{key:e},[e===1||e===h.value||e>=n.value-1&&e<=n.value+1?(s(),l("button",{key:0,class:_(["rounded-md px-3 py-1.5",n.value===e?"bg-gray-900 text-white":"hover:bg-gray-100"]),onClick:i=>P(e)},p(e),11,Te)):e===n.value-2||e===n.value+2?(s(),l("span",$e,"...")):v("",!0)],64))),128)),r("button",{disabled:n.value===h.value,class:"rounded-md px-3 py-1.5 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50",onClick:a[4]||(a[4]=e=>P(n.value+1))}," Next ",8,Ve)])):v("",!0)])):v("",!0)]))}});N.__docgenInfo={exportName:"default",displayName:"DataTable",description:"",tags:{},props:[{name:"columns",required:!0,type:{name:"Array",elements:[{name:"DataTableColumn"}]}},{name:"data",required:!0,type:{name:"Array",elements:[{name:"Record",elements:[{name:"string"},{name:"unknown"}]}]}},{name:"searchable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"searchPlaceholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Search...'"}},{name:"pageSize",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"pageSizeOptions",required:!1,type:{name:"Array",elements:[{name:"number"}]},defaultValue:{func:!1,value:"() => [10, 25, 50, 100]"}},{name:"striped",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"row-click",type:{names:["Record"],elements:[{name:"string"},{name:"unknown"}]}}],slots:[{name:"`header-${col.key}`",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"column",title:"binding"}]},{name:"`cell-${col.key}`",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"row",title:"binding"},{name:"value",title:"binding"}]},{name:"empty"}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/data-table/DataTable.vue"]};const V=[{key:"id",label:"ID",sortable:!0,width:"80px"},{key:"name",label:"Name",sortable:!0},{key:"email",label:"Email",sortable:!0},{key:"role",label:"Role",sortable:!0},{key:"status",label:"Status",align:"center"}],M=Array.from({length:55},(o,d)=>({id:d+1,name:["Alice","Bob","Charlie","Diana","Eve"][d%5]+` ${d+1}`,email:`user${d+1}@example.com`,role:["Admin","Editor","Viewer"][d%3],status:d%4===0?"Inactive":"Active"})),Pe={title:"Data Display/DataTable",component:N,tags:["autodocs"],argTypes:{searchable:{control:"boolean"},pageSize:{control:"number"},striped:{control:"boolean"}}},D={args:{columns:V,data:M,searchable:!0,pageSize:10}},z={args:{columns:V,data:M,searchable:!0,pageSize:10,striped:!0}},T={args:{columns:V,data:M,searchable:!0,pageSize:5}},$={args:{columns:V,data:M,searchable:!0,pageSize:10},render:o=>({components:{DataTable:N},setup:()=>({args:o}),template:`
      <DataTable v-bind="args">
        <template #cell-status="{ value }">
          <span :class="[
            'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium',
            value === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600',
          ]">{{ value }}</span>
        </template>
      </DataTable>
    `})};var I,O,R;D.parameters={...D.parameters,docs:{...(I=D.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    searchable: true,
    pageSize: 10
  }
}`,...(R=(O=D.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var F,L,H;z.parameters={...z.parameters,docs:{...(F=z.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    searchable: true,
    pageSize: 10,
    striped: true
  }
}`,...(H=(L=z.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var Z,G,K;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    searchable: true,
    pageSize: 5
  }
}`,...(K=(G=T.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,U,J;$.parameters={...$.parameters,docs:{...(Q=$.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    searchable: true,
    pageSize: 10
  },
  render: args => ({
    components: {
      DataTable
    },
    setup: () => ({
      args
    }),
    template: \`
      <DataTable v-bind="args">
        <template #cell-status="{ value }">
          <span :class="[
            'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium',
            value === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600',
          ]">{{ value }}</span>
        </template>
      </DataTable>
    \`
  })
}`,...(J=(U=$.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};const Ae=["Default","Striped","SmallPage","CustomCells"];export{$ as CustomCells,D as Default,T as SmallPage,z as Striped,Ae as __namedExportsOrder,Pe as default};
