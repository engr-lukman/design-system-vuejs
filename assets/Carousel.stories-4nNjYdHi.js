import{d as N,B as L,C as z,b as t,f as o,g as I,x as E,F as x,u as S,e as R,k as C,v as W,o as r,n as X}from"./vue.esm-bundler-YEuhxn0F.js";const Z={key:1,class:"absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5"},O=["aria-label","onClick"],i=N({__name:"Carousel",props:{autoplay:{type:Boolean,default:!1},interval:{default:3e3},loop:{type:Boolean,default:!0},showArrows:{type:Boolean,default:!0},showDots:{type:Boolean,default:!0}},setup(e){const s=e,d=C(null),l=C(0),a=C(0);let n=null;function T(){d.value&&(a.value=d.value.querySelectorAll("[data-carousel-slide]").length)}function y(u){u<0?l.value=s.loop?a.value-1:0:u>=a.value?l.value=s.loop?0:a.value-1:l.value=u}function F(){y(l.value-1)}function b(){y(l.value+1)}const G=W(()=>`-${l.value*100}%`);function h(){s.autoplay&&!n&&(n=setInterval(b,s.interval))}function w(){n&&(clearInterval(n),n=null)}return L(()=>{T(),h()}),z(()=>{w()}),(u,c)=>(r(),t("div",{ref_key:"containerRef",ref:d,class:"group relative w-full overflow-hidden rounded-lg",onMouseenter:w,onMouseleave:h},[o("div",{class:"flex transition-transform duration-500 ease-in-out",style:E({transform:`translateX(${G.value})`})},[I(u.$slots,"default")],4),e.showArrows&&a.value>1?(r(),t(x,{key:0},[o("button",{type:"button",class:"absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white/80 p-2 opacity-0 shadow-md transition-opacity group-hover:opacity-100 hover:bg-white","aria-label":"Previous slide",onClick:F},[...c[0]||(c[0]=[o("svg",{class:"h-4 w-4 text-gray-700",viewBox:"0 0 20 20",fill:"currentColor"},[o("path",{"fill-rule":"evenodd",d:"M11.78 5.22a.75.75 0 0 1 0 1.06L8.56 10l3.22 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z","clip-rule":"evenodd"})],-1)])]),o("button",{type:"button",class:"absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white/80 p-2 opacity-0 shadow-md transition-opacity group-hover:opacity-100 hover:bg-white","aria-label":"Next slide",onClick:b},[...c[1]||(c[1]=[o("svg",{class:"h-4 w-4 text-gray-700",viewBox:"0 0 20 20",fill:"currentColor"},[o("path",{"fill-rule":"evenodd",d:"M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.44 10 8.22 6.28a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"})],-1)])])],64)):S("",!0),e.showDots&&a.value>1?(r(),t("div",Z,[(r(!0),t(x,null,R(a.value,p=>(r(),t("button",{key:p,type:"button",class:X(["h-2 rounded-full transition-all",l.value===p-1?"w-6 bg-white":"w-2 bg-white/60 hover:bg-white/80"]),"aria-label":`Go to slide ${p}`,onClick:U=>y(p-1)},null,10,O))),128))])):S("",!0)],544))}});i.__docgenInfo={exportName:"default",displayName:"Carousel",description:"",tags:{},props:[{name:"autoplay",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"interval",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"3000"}},{name:"loop",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showArrows",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showDots",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/carousel/Carousel.vue"]};const P={"data-carousel-slide":"",class:"w-full shrink-0"},g=N({__name:"CarouselSlide",props:{active:{type:Boolean,default:!1}},setup(e){return(s,d)=>(r(),t("div",P,[I(s.$slots,"default")]))}});g.__docgenInfo={exportName:"default",displayName:"CarouselSlide",description:"",tags:{},props:[{name:"active",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/design-system-vuejs/design-system-vuejs/src/components/ui/carousel/CarouselSlide.vue"]};const J={title:"Data Display/Carousel",component:i,tags:["autodocs"],argTypes:{autoplay:{control:"boolean"},interval:{control:"number"},loop:{control:"boolean"},showArrows:{control:"boolean"},showDots:{control:"boolean"}}},M=["bg-blue-500","bg-green-500","bg-purple-500","bg-amber-500","bg-red-500"],f={render:e=>({components:{Carousel:i,CarouselSlide:g},setup:()=>({args:e,slideColors:M}),template:`
      <div class="w-full max-w-lg">
        <Carousel v-bind="args">
          <CarouselSlide v-for="(color, i) in slideColors" :key="i">
            <div :class="[color, 'flex h-64 items-center justify-center rounded-lg text-2xl font-bold text-white']">
              Slide {{ i + 1 }}
            </div>
          </CarouselSlide>
        </Carousel>
      </div>
    `})},v={args:{autoplay:!0,interval:2e3},render:e=>({components:{Carousel:i,CarouselSlide:g},setup:()=>({args:e,slideColors:M}),template:`
      <div class="w-full max-w-lg">
        <Carousel v-bind="args">
          <CarouselSlide v-for="(color, i) in slideColors" :key="i">
            <div :class="[color, 'flex h-48 items-center justify-center rounded-lg text-xl font-bold text-white']">
              Slide {{ i + 1 }}
            </div>
          </CarouselSlide>
        </Carousel>
      </div>
    `})},m={render:e=>({components:{Carousel:i,CarouselSlide:g},setup:()=>({args:e}),template:`
      <div class="w-full max-w-lg">
        <Carousel v-bind="args">
          <CarouselSlide v-for="i in 4" :key="i">
            <div class="p-2">
              <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 class="text-lg font-semibold text-gray-900">Card {{ i }}</h3>
                <p class="mt-2 text-sm text-gray-500">This is a card inside a carousel slide. Great for showcasing content.</p>
              </div>
            </div>
          </CarouselSlide>
        </Carousel>
      </div>
    `})};var k,_,B;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Carousel,
      CarouselSlide
    },
    setup: () => ({
      args,
      slideColors
    }),
    template: \`
      <div class="w-full max-w-lg">
        <Carousel v-bind="args">
          <CarouselSlide v-for="(color, i) in slideColors" :key="i">
            <div :class="[color, 'flex h-64 items-center justify-center rounded-lg text-2xl font-bold text-white']">
              Slide {{ i + 1 }}
            </div>
          </CarouselSlide>
        </Carousel>
      </div>
    \`
  })
}`,...(B=(_=f.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var A,j,D;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    autoplay: true,
    interval: 2000
  },
  render: args => ({
    components: {
      Carousel,
      CarouselSlide
    },
    setup: () => ({
      args,
      slideColors
    }),
    template: \`
      <div class="w-full max-w-lg">
        <Carousel v-bind="args">
          <CarouselSlide v-for="(color, i) in slideColors" :key="i">
            <div :class="[color, 'flex h-48 items-center justify-center rounded-lg text-xl font-bold text-white']">
              Slide {{ i + 1 }}
            </div>
          </CarouselSlide>
        </Carousel>
      </div>
    \`
  })
}`,...(D=(j=v.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var V,$,q;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Carousel,
      CarouselSlide
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="w-full max-w-lg">
        <Carousel v-bind="args">
          <CarouselSlide v-for="i in 4" :key="i">
            <div class="p-2">
              <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 class="text-lg font-semibold text-gray-900">Card {{ i }}</h3>
                <p class="mt-2 text-sm text-gray-500">This is a card inside a carousel slide. Great for showcasing content.</p>
              </div>
            </div>
          </CarouselSlide>
        </Carousel>
      </div>
    \`
  })
}`,...(q=($=m.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};const K=["Default","Autoplay","WithCards"];export{v as Autoplay,f as Default,m as WithCards,K as __namedExportsOrder,J as default};
