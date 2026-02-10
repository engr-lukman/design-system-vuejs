import{d as R,b as t,f as n,F as g,e as y,n as o,g as f,u as L,o as r,x as O,j as x,t as S}from"./vue.esm-bundler-DtUWbB1b.js";const W={class:"w-full overflow-x-auto rounded-lg border border-gray-200"},G={class:"w-full text-left text-sm text-gray-700"},H={class:"border-b border-gray-200 bg-gray-50 text-xs font-medium tracking-wider text-gray-500 uppercase"},K={key:0},M=["colspan"],v=R({__name:"Table",props:{columns:{},data:{},striped:{type:Boolean,default:!1},hoverable:{type:Boolean,default:!0},bordered:{type:Boolean,default:!1},compact:{type:Boolean,default:!1}},setup(e){const h={left:"text-left",center:"text-center",right:"text-right"};return(b,k)=>(r(),t("div",W,[n("table",G,[n("thead",H,[n("tr",null,[(r(!0),t(g,null,y(e.columns,a=>(r(),t("th",{key:a.key,class:o([e.compact?"px-4 py-2":"px-6 py-3",h[a.align||"left"]]),style:O(a.width?{width:a.width}:{})},[f(b.$slots,`header-${a.key}`,{column:a},()=>[x(S(a.label),1)])],6))),128))])]),n("tbody",{class:o(e.bordered?"divide-y divide-gray-200":"")},[(r(!0),t(g,null,y(e.data,(a,T)=>(r(),t("tr",{key:T,class:o([e.hoverable&&"hover:bg-gray-50",e.striped&&T%2===1&&"bg-gray-50/50",e.bordered&&"border-b border-gray-200 last:border-b-0"])},[(r(!0),t(g,null,y(e.columns,s=>(r(),t("td",{key:s.key,class:o([e.compact?"px-4 py-2":"px-6 py-4",h[s.align||"left"]])},[f(b.$slots,`cell-${s.key}`,{row:a,value:a[s.key]},()=>[x(S(a[s.key]),1)])],2))),128))],2))),128)),e.data.length===0?(r(),t("tr",K,[n("td",{colspan:e.columns.length,class:"px-6 py-12 text-center text-gray-400"},[f(b.$slots,"empty",{},()=>[k[0]||(k[0]=x(" No data available ",-1))])],8,M)])):L("",!0)],2)])]))}});v.__docgenInfo={exportName:"default",displayName:"Table",description:"",tags:{},props:[{name:"columns",required:!0,type:{name:"Array",elements:[{name:"TableColumn"}]}},{name:"data",required:!0,type:{name:"Array",elements:[{name:"Record",elements:[{name:"string"},{name:"unknown"}]}]}},{name:"striped",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hoverable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"bordered",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"compact",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"`header-${col.key}`",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"column",title:"binding"}]},{name:"`cell-${col.key}`",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"row",title:"binding"},{name:"value",title:"binding"}]},{name:"empty"}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/table/Table.vue"]};const l=[{key:"name",label:"Name"},{key:"email",label:"Email"},{key:"role",label:"Role"},{key:"status",label:"Status",align:"center"}],p=[{name:"John Doe",email:"john@example.com",role:"Admin",status:"Active"},{name:"Jane Smith",email:"jane@example.com",role:"Editor",status:"Active"},{name:"Bob Wilson",email:"bob@example.com",role:"Viewer",status:"Inactive"},{name:"Alice Brown",email:"alice@example.com",role:"Editor",status:"Active"}],Q={title:"Data Display/Table",component:v,tags:["autodocs"],argTypes:{striped:{control:"boolean"},hoverable:{control:"boolean"},bordered:{control:"boolean"},compact:{control:"boolean"}}},m={args:{columns:l,data:p}},d={args:{columns:l,data:p,striped:!0,bordered:!0}},u={args:{columns:l,data:p,compact:!0,bordered:!0}},c={args:{columns:l,data:[]}},i={args:{columns:l,data:p},render:e=>({components:{Table:v},setup:()=>({args:e}),template:`
      <Table v-bind="args">
        <template #cell-status="{ value }">
          <span :class="[
            'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium',
            value === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600',
          ]">{{ value }}</span>
        </template>
      </Table>
    `})};var C,w,A;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    columns,
    data
  }
}`,...(A=(w=m.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var B,V,E;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    striped: true,
    bordered: true
  }
}`,...(E=(V=d.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var N,$,q;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    compact: true,
    bordered: true
  }
}`,...(q=($=u.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var D,j,F;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    columns,
    data: []
  }
}`,...(F=(j=c.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var z,I,J;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    columns,
    data
  },
  render: args => ({
    components: {
      Table
    },
    setup: () => ({
      args
    }),
    template: \`
      <Table v-bind="args">
        <template #cell-status="{ value }">
          <span :class="[
            'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium',
            value === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600',
          ]">{{ value }}</span>
        </template>
      </Table>
    \`
  })
}`,...(J=(I=i.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};const U=["Default","Striped","Compact","Empty","CustomCells"];export{u as Compact,i as CustomCells,m as Default,c as Empty,d as Striped,U as __namedExportsOrder,Q as default};
