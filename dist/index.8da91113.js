import{u as o,l as f,m as r}from"./chunks/use-animation.5fa7cc73.js";import{j as e}from"./chunks/jsx-runtime.2a54e6d8.js";import"./chunks/index.6bb56bc7.js";const c="/Right.png",y="/spacejet.png",g="/plane.png",v=({...m})=>{const l=o(),s=o(),n=o(),d=o();return f.useScrollPosition(({prevPos:u,currPos:x})=>{const t=Math.abs(x.y),a=Math.abs(u.y),p=t/(document.documentElement.scrollHeight-document.documentElement.clientHeight),i=Math.round(p*100);i>50&&i<60&&(t>a?(s.start({rotate:"-14deg",x:-60,transition:{x:{duration:3},default:{ease:"linear"}}}),n.start({rotate:"14deg",x:60,transition:{x:{duration:3},default:{ease:"linear"}}})):t<a&&(s.start({x:0,rotate:0,transition:{x:{duration:3},default:{ease:"linear"}},transitionEnd:{visibility:"visible"}}),n.start({x:0,rotate:0,transition:{x:{duration:3},default:{ease:"linear"}},transitionEnd:{visibility:"visible"}}))),i>70&&i<80&&(t>a?(s.start({y:"100vh",transition:{y:{duration:3},default:{ease:"easeOut"}},transitionEnd:{opacity:0}}),n.start({y:"100vh",transition:{y:{duration:3},default:{ease:"easeOut"}},transitionEnd:{opacity:0}})):t<a&&(s.start({y:0,transition:{y:{duration:2},default:{ease:"easeIn"}},transitionEnd:{opacity:100}}),n.start({y:0,transition:{y:{duration:2},default:{ease:"easeIn"}},transitionEnd:{opacity:100}}))),i>80&&i<90&&(t>a?d.start({y:"100vh",transition:{y:{duration:2},default:{ease:"easeOut"}},transitionEnd:{opacity:0}}):t<a&&d.start({y:0,transition:{y:{duration:2},default:{ease:"easeIn"}},transitionEnd:{opacity:100}})),i>90&&i<100&&(t>a?l.start({y:"-100vh",x:"200px",rotate:"30deg",transition:{y:{duration:1},default:{ease:"linear"}},transitionEnd:{opacity:0}}):t<a&&l.start({y:0,x:0,rotate:0,transition:{y:{duration:.8},default:{ease:"easeIn"}},transitionEnd:{opacity:100}}))}),e.exports.jsxs("div",{id:"rocket",...m,children:[e.exports.jsx(r.div,{animate:l,className:"z-10 space-jet",children:e.exports.jsx("img",{alt:"rocket-img",src:y,className:"h-64"})}),e.exports.jsx(r.div,{animate:s,className:"absolute origin-bottom left-1 -top-7 2xl:top-[0rem] 2xl:left-7",children:e.exports.jsx("img",{alt:"rocket-img",src:c,className:"h-64 "})}),e.exports.jsx(r.div,{animate:d,className:"absolute -top-[6rem] left-28  2xl:left-[4rem] 2xl:top-[-6rem]",children:e.exports.jsx("img",{alt:"rocket-img",src:g,className:"h-[18rem] w-[7rem] 2xl:h-[23rem] 2xl:w-[8rem]"})}),e.exports.jsx(r.div,{animate:n,className:"absolute  -top-7 right-0  origin-bottom 2xl:top-0 2xl:right-8",children:e.exports.jsx("img",{alt:"rocket-img",src:c,className:"h-64 "})})]})};export{v as default};
