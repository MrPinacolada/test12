import{_ as a,f as _,c as d,a as o,d as n,t as e,o as r}from"./entry.f3a16584.js";const i={name:"comment",setup(){return{comment:_().query,closeModal:()=>{window.close()}}}},u={class:"modal"},p={class:"modal-content"},h=o("h2",null,"Comment Details",-1),f=o("strong",null,"ID:",-1),g=o("strong",null,"PostID:",-1),y=o("strong",null,"Name:",-1),x=o("strong",null,"Email:",-1),v=o("strong",null,"Body:",-1);function B(l,s,c,t,D,M){return r(),d("div",u,[o("div",p,[h,o("p",null,[f,n(" "+e(t.comment.postId),1)]),o("p",null,[g,n(" "+e(t.comment.id),1)]),o("p",null,[y,n(" "+e(t.comment.name),1)]),o("p",null,[x,n(" "+e(t.comment.email),1)]),o("p",null,[v,n(" "+e(t.comment.body),1)]),o("button",{onClick:s[0]||(s[0]=(...m)=>t.closeModal&&t.closeModal(...m))},"Close")])])}const C=a(i,[["render",B]]);export{C as default};
