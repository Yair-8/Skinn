import{d,r as g,e as u,o as s,f as a,b as e,t as c,u as p,g as h}from"./index-BFlimCU0.js";const b={class:"blog-detail"},f={key:0,class:"blog-detail__container"},m={class:"blog-detail__image-ibg"},v=["src","alt"],B={class:"blog-detail__content content"},k={class:"content__name"},y={class:"content__description paragraph"},x={key:1},D={__name:"BlogDetail",setup(j){const l=p(),i=h(),o=g(null);function _(){l.push("/blog")}return u(async()=>{try{const n=await(await fetch("/data/blogs.json")).json();o.value=n.find(r=>r.id===Number(i.params.id))}catch(t){console.error("Failed to fetch blog details:",t)}}),(t,n)=>(s(),a("section",b,[o.value?(s(),a("div",f,[e("div",m,[e("img",{src:o.value.image,alt:o.value.name},null,8,v)]),e("div",B,[e("h1",k,c(o.value.title),1),e("p",y,c(o.value.description),1),e("div",{class:"blog-detail__actions"},[e("a",{href:"#",onClick:_},"To Blogs")])])])):(s(),a("p",x,"Loading..."))]))}},N=d(D,[["__scopeId","data-v-e87e7fe3"]]);export{N as default};
