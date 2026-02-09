import{d as I,b as a,t as U,f as Z,n as v,u as T,v as g,o as s}from"./vue.esm-bundler-YEuhxn0F.js";const G=["src","alt"],H={key:1,"aria-hidden":"true"},J={key:2,class:"h-[60%] w-[60%] text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},K=["aria-label"],t=I({__name:"Avatar",props:{src:{default:""},alt:{default:""},name:{default:""},size:{default:"md"},shape:{default:"circle"},status:{default:void 0}},setup(e){const n=e,D={xs:"h-6 w-6 text-xs",sm:"h-8 w-8 text-sm",md:"h-10 w-10 text-base",lg:"h-12 w-12 text-lg",xl:"h-16 w-16 text-xl"},F={xs:"h-1.5 w-1.5",sm:"h-2 w-2",md:"h-2.5 w-2.5",lg:"h-3 w-3",xl:"h-3.5 w-3.5"},O={online:"bg-green-500",offline:"bg-gray-400",away:"bg-amber-500",busy:"bg-red-500"},d=g(()=>n.name?n.name.split(" ").map(p=>p.charAt(0)).slice(0,2).join("").toUpperCase():""),N=g(()=>["relative inline-flex items-center justify-center overflow-hidden bg-gray-200 text-gray-600 font-medium shrink-0",D[n.size],n.shape==="circle"?"rounded-full":"rounded-lg"]);return(p,r)=>(s(),a("span",{class:v(N.value)},[e.src?(s(),a("img",{key:0,src:e.src,alt:e.alt||e.name,class:"h-full w-full object-cover",onError:r[0]||(r[0]=E=>E.target.style.display="none")},null,40,G)):d.value?(s(),a("span",H,U(d.value),1)):(s(),a("svg",J,[...r[1]||(r[1]=[Z("path",{d:"M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z"},null,-1)])])),e.status?(s(),a("span",{key:3,class:v(["absolute right-0 bottom-0 block rounded-full ring-2 ring-white",F[e.size],O[e.status]]),"aria-label":e.status},null,10,K)):T("",!0)],2))}});t.__docgenInfo={exportName:"default",displayName:"Avatar",description:"",tags:{},props:[{name:"src",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"alt",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"size",required:!1,type:{name:"AvatarSize"},defaultValue:{func:!1,value:"'md'"}},{name:"shape",required:!1,type:{name:"AvatarShape"},defaultValue:{func:!1,value:"'circle'"}},{name:"status",required:!1,type:{name:"union",elements:[{name:'"online"'},{name:'"offline"'},{name:'"away"'},{name:'"busy"'}]},defaultValue:{func:!1,value:"undefined"}}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/avatar/Avatar.vue"]};const Q={title:"Data Display/Avatar",component:t,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]},shape:{control:"select",options:["circle","square"]},status:{control:"select",options:[void 0,"online","offline","away","busy"]}}},l={args:{name:"Mohammad Lukman"}},o={args:{src:"https://i.pravatar.cc/150?img=3",alt:"User avatar"}},i={render:()=>({components:{Avatar:t},template:"<Avatar />"})},m={render:()=>({components:{Avatar:t},template:`
      <div class="flex items-center gap-3">
        <Avatar name="ML" size="xs" />
        <Avatar name="ML" size="sm" />
        <Avatar name="ML" size="md" />
        <Avatar name="ML" size="lg" />
        <Avatar name="ML" size="xl" />
      </div>
    `})},c={args:{name:"ML",shape:"square",size:"lg"}},u={render:()=>({components:{Avatar:t},template:`
      <div class="flex items-center gap-4">
        <Avatar name="Online" status="online" size="lg" />
        <Avatar name="AW" status="away" size="lg" />
        <Avatar name="BS" status="busy" size="lg" />
        <Avatar name="OF" status="offline" size="lg" />
      </div>
    `})};var f,h,A;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    name: 'Mohammad Lukman'
  }
}`,...(A=(h=l.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var y,z,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    alt: 'User avatar'
  }
}`,...(x=(z=o.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var w,b,S;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Avatar
    },
    template: '<Avatar />'
  })
}`,...(S=(b=i.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var M,L,k;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Avatar
    },
    template: \`
      <div class="flex items-center gap-3">
        <Avatar name="ML" size="xs" />
        <Avatar name="ML" size="sm" />
        <Avatar name="ML" size="md" />
        <Avatar name="ML" size="lg" />
        <Avatar name="ML" size="xl" />
      </div>
    \`
  })
}`,...(k=(L=m.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var q,C,V;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    name: 'ML',
    shape: 'square',
    size: 'lg'
  }
}`,...(V=(C=c.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var B,W,j;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Avatar
    },
    template: \`
      <div class="flex items-center gap-4">
        <Avatar name="Online" status="online" size="lg" />
        <Avatar name="AW" status="away" size="lg" />
        <Avatar name="BS" status="busy" size="lg" />
        <Avatar name="OF" status="offline" size="lg" />
      </div>
    \`
  })
}`,...(j=(W=u.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};const R=["Default","WithImage","Fallback","Sizes","Square","WithStatus"];export{l as Default,i as Fallback,m as Sizes,c as Square,o as WithImage,u as WithStatus,R as __namedExportsOrder,Q as default};
