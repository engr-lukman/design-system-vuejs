import{d as K,b as n,t as i,u as f,F as h,e as m,f as o,v as g,o as s,x as Q}from"./vue.esm-bundler-YEuhxn0F.js";const U={class:"w-full"},W={key:0,class:"mb-3 text-sm font-semibold text-gray-900"},Y=["viewBox","aria-label"],_=["x","y","width","height","fill"],ee=["x","y"],te=["x","y"],ae=["viewBox","aria-label"],le=["d"],ne=["d"],se=["cx","cy"],re=["x","y"],oe=["x","y"],ue={key:3,class:"flex items-center gap-6"},ie=["aria-label"],ce=["d","stroke"],de={x:"80",y:"76","text-anchor":"middle",class:"fill-gray-900 text-lg font-bold"},he={class:"min-w-0 space-y-1.5"},me={class:"truncate text-gray-600"},ge={class:"ml-auto font-medium text-gray-900"},v=K({__name:"Chart",props:{data:{},type:{default:"bar"},height:{default:200},showLabels:{type:Boolean,default:!0},showValues:{type:Boolean,default:!0},title:{default:""}},setup(e){const c=e,y=["#3b82f6","#22c55e","#f59e0b","#ef4444","#8b5cf6","#06b6d4","#f97316","#ec4899"],x=g(()=>Math.max(...c.data.map(r=>r.value),1)),u=g(()=>{const a=c.height,t=40,l=(400-t*2)/Math.max(c.data.length-1,1);return c.data.map((d,k)=>({x:t+k*l,y:a-t-d.value/x.value*(a-t*2),...d}))}),C=g(()=>u.value.length===0?"":u.value.map((r,a)=>`${a===0?"M":"L"} ${r.x} ${r.y}`).join(" ")),E=g(()=>{if(u.value.length===0)return"";const r=c.height,a=40,t=u.value[0],l=u.value[u.value.length-1];return`${C.value} L ${l.x} ${r-a} L ${t.x} ${r-a} Z`}),M=g(()=>c.data.reduce((r,a)=>r+a.value,0)),J=g(()=>{let r=-90;const a=60,t=80,l=80;return c.data.map((d,k)=>{const B=d.value/M.value*360,D=r+B,O=B>180?1:0,V=r*Math.PI/180,L=D*Math.PI/180,z=t+a*Math.cos(V),X=l+a*Math.sin(V),Z=t+a*Math.cos(L),G=l+a*Math.sin(L),H=`M ${z} ${X} A ${a} ${a} 0 ${O} 1 ${Z} ${G}`;return r=D,{path:H,color:d.color||y[k%y.length],...d}})});function $(r,a){return a||y[r%y.length]}return(r,a)=>(s(),n("div",U,[e.title?(s(),n("h3",W,i(e.title),1)):f("",!0),e.type==="bar"?(s(),n("svg",{key:1,viewBox:`0 0 400 ${e.height}`,class:"w-full",role:"img","aria-label":e.title||"Bar chart"},[(s(!0),n(h,null,m(e.data,(t,l)=>(s(),n("g",{key:l},[o("rect",{x:40+l*(320/e.data.length)+4,y:e.height-40-t.value/x.value*(e.height-80),width:320/e.data.length-8,height:t.value/x.value*(e.height-80),fill:$(l,t.color),rx:"4",class:"transition-all duration-300"},null,8,_),e.showLabels?(s(),n("text",{key:0,x:40+l*(320/e.data.length)+320/e.data.length/2,y:e.height-20,"text-anchor":"middle",class:"fill-gray-500 text-[10px]"},i(t.label),9,ee)):f("",!0),e.showValues?(s(),n("text",{key:1,x:40+l*(320/e.data.length)+320/e.data.length/2,y:e.height-44-t.value/x.value*(e.height-80),"text-anchor":"middle",class:"fill-gray-600 text-[10px] font-medium"},i(t.value),9,te)):f("",!0)]))),128))],8,Y)):e.type==="line"?(s(),n("svg",{key:2,viewBox:`0 0 400 ${e.height}`,class:"w-full",role:"img","aria-label":e.title||"Line chart"},[o("path",{d:E.value,fill:"#3b82f6",opacity:"0.1"},null,8,le),o("path",{d:C.value,fill:"none",stroke:"#3b82f6","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},null,8,ne),(s(!0),n(h,null,m(u.value,(t,l)=>(s(),n("circle",{key:l,cx:t.x,cy:t.y,r:"4",fill:"white",stroke:"#3b82f6","stroke-width":"2"},null,8,se))),128)),(s(!0),n(h,null,m(u.value,(t,l)=>(s(),n("text",{key:"l"+l,x:t.x,y:e.height-20,"text-anchor":"middle",class:"fill-gray-500 text-[10px]"},i(t.label),9,re))),128)),(s(!0),n(h,null,m(u.value,(t,l)=>(s(),n("text",{key:"v"+l,x:t.x,y:t.y-10,"text-anchor":"middle",class:"fill-gray-600 text-[10px] font-medium"},i(t.value),9,oe))),128))],8,ae)):e.type==="donut"?(s(),n("div",ue,[(s(),n("svg",{viewBox:"0 0 160 160",class:"h-40 w-40 shrink-0",role:"img","aria-label":e.title||"Donut chart"},[a[0]||(a[0]=o("circle",{cx:"80",cy:"80",r:"60",fill:"none",stroke:"#f3f4f6","stroke-width":"20"},null,-1)),(s(!0),n(h,null,m(J.value,(t,l)=>(s(),n("path",{key:l,d:t.path,fill:"none",stroke:t.color,"stroke-width":"20","stroke-linecap":"round"},null,8,ce))),128)),o("text",de,i(M.value),1),a[1]||(a[1]=o("text",{x:"80",y:"92","text-anchor":"middle",class:"fill-gray-400 text-[10px]"},"Total",-1))],8,ie)),o("div",he,[(s(!0),n(h,null,m(e.data,(t,l)=>(s(),n("div",{key:l,class:"flex items-center gap-2 text-sm"},[o("span",{class:"h-2.5 w-2.5 shrink-0 rounded-full",style:Q({backgroundColor:$(l,t.color)})},null,4),o("span",me,i(t.label),1),o("span",ge,i(t.value),1)]))),128))])])):f("",!0)]))}});v.__docgenInfo={exportName:"default",displayName:"Chart",description:"",tags:{},props:[{name:"data",required:!0,type:{name:"Array",elements:[{name:"ChartDataPoint"}]}},{name:"type",required:!1,type:{name:"ChartType"},defaultValue:{func:!1,value:"'bar'"}},{name:"height",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"200"}},{name:"showLabels",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showValues",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"title",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/chart/Chart.vue"]};const I=[{label:"Jan",value:120},{label:"Feb",value:180},{label:"Mar",value:90},{label:"Apr",value:250},{label:"May",value:200},{label:"Jun",value:170}],ve=[{label:"Desktop",value:450},{label:"Mobile",value:320},{label:"Tablet",value:130},{label:"Other",value:50}],xe={title:"Data Display/Chart",component:v,tags:["autodocs"],argTypes:{type:{control:"select",options:["bar","line","donut"]},height:{control:"number"},showLabels:{control:"boolean"},showValues:{control:"boolean"},title:{control:"text"}}},b={args:{data:I,type:"bar",title:"Monthly Revenue"},render:e=>({components:{Chart:v},setup:()=>({args:e}),template:'<div class="max-w-lg"><Chart v-bind="args" /></div>'})},p={args:{data:I,type:"line",title:"Monthly Trends"},render:e=>({components:{Chart:v},setup:()=>({args:e}),template:'<div class="max-w-lg"><Chart v-bind="args" /></div>'})},w={args:{data:ve,type:"donut",title:"Device Breakdown"},render:e=>({components:{Chart:v},setup:()=>({args:e}),template:'<div class="max-w-md"><Chart v-bind="args" /></div>'})};var q,A,P;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    data: barData,
    type: 'bar',
    title: 'Monthly Revenue'
  },
  render: args => ({
    components: {
      Chart
    },
    setup: () => ({
      args
    }),
    template: '<div class="max-w-lg"><Chart v-bind="args" /></div>'
  })
}`,...(P=(A=b.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var S,T,j;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    data: barData,
    type: 'line',
    title: 'Monthly Trends'
  },
  render: args => ({
    components: {
      Chart
    },
    setup: () => ({
      args
    }),
    template: '<div class="max-w-lg"><Chart v-bind="args" /></div>'
  })
}`,...(j=(T=p.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var F,N,R;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    data: donutData,
    type: 'donut',
    title: 'Device Breakdown'
  },
  render: args => ({
    components: {
      Chart
    },
    setup: () => ({
      args
    }),
    template: '<div class="max-w-md"><Chart v-bind="args" /></div>'
  })
}`,...(R=(N=w.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};const fe=["BarChart","LineChart","DonutChart"];export{b as BarChart,w as DonutChart,p as LineChart,fe as __namedExportsOrder,xe as default};
