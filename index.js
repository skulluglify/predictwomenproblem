var S=Object.defineProperty;var O=Object.getOwnPropertyDescriptor;var j=Object.getOwnPropertyNames;var x=Object.prototype.hasOwnProperty;var W=(t,e)=>{for(var r in e)S(t,r,{get:e[r],enumerable:!0})},C=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let l of j(e))!x.call(t,l)&&l!==r&&S(t,l,{get:()=>e[l],enumerable:!(n=O(e,l))||n.enumerable});return t};var I=t=>C(S({},"__esModule",{value:!0}),t);var q={};W(q,{WomenProblem:()=>w,autoParseInt:()=>R,compareDate:()=>y,createCalendarDataWP:()=>E,createCalendarNextDataWP:()=>F,getDateRange:()=>d,getDaysInMonth:()=>g,normalizeDate:()=>u,predictWomenProblem:()=>M,predictWomenProblemNext:()=>h,zDate:()=>o});module.exports=I(q);String.prototype.hasOwnProperty("padStart")||(String.prototype.padStart=function(e,r=" "){let n=this.toString();for(e=e-n.length;0<e;)n=r+n,e=e-1;return n});String.prototype.hasOwnProperty("padEnd")||(String.prototype.padEnd=function(e,r=" "){let n=this.toString();for(e=e-n.length;0<e;)n=n+r,e=e-1;return n});var D=new Date,A=D.getDate(),B=D.getMonth()+1,Y=D.getFullYear();function g(t,e=Y){return t===1?31:t===2?e%4||e%400&&!(e%100)?28:29:t<=12?(t-3)%5&1?30:31:30}var o=class{day=1;month=1;year=1900;constructor(e,r,n){Object.defineProperty(this,"day",{value:e,enumerable:!0,configurable:!1,writable:!1}),Object.defineProperty(this,"month",{value:r,enumerable:!0,configurable:!1,writable:!1}),Object.defineProperty(this,"year",{value:n,enumerable:!0,configurable:!1,writable:!1}),Object.defineProperty(this,"toString",{value:()=>{let l=this?.day??1,i=this?.month??1;return(this?.year??1900).toString().padStart(4,"0")+"-"+i.toString().padStart(2,"0")+"-"+l.toString().padStart(2,"0")},enumerable:!1,configurable:!1,writable:!1})}};function u(t,e,r){if(r<=0)return new o(0,0,0);if(e<=0)for(;;){if(r=r-1,r==0)return new o(0,0,0);if(e=e<=0?12+e:e,0<e)break}if(12<e)for(;e=e-12,r=r+1,!(e<=12););if(t<=0)for(;;){if(e=e-1,e==0&&(r=r-1,e=12),r==0)return new o(0,0,0);let n=g(e,r);if(t=t<=0?n+t:t,0<t)break}for(;;){let n=g(e,r);if(n<t){if(e==12){t=t-n,r=r+1,e=1;continue}t=t-n,e=e+1;continue}return new o(t,e,r)}}function R(...t){let e=[];for(let r of t)if(["string","number"].includes(typeof r)){e.push(typeof r=="string"?Number.parseInt(r):r);continue}return e}function y(t,e){return e.day==t.day&&e.month==t.month&&e.year==t.year}function d(t,e){if(t.day<=e.day&&t.month<=e.month&&t.year<=e.year){let r=1,n=[t];for(;;){let l=u(t.day+r,t.month,t.year);if(n.push(l,e),y(l,e))break;r=r+1}return n}return[]}var w=class{menstrStart=new o(1,1,1900);menstrEnd=new o(1,1,1900);preProblem=new o(1,1,1900);problemPoint=new o(1,1,1900);postProblem=new o(1,1,1900);preMenstr=new o(1,1,1900);menstrRange=0;constructor(e,r,n,l,i,s,p){this.menstrStart=e,this.menstrEnd=r,this.preProblem=n,this.problemPoint=l,this.postProblem=i,this.preMenstr=s,this.menstrRange=p}};function M(t,e,r,n,l,i=4){[t,e,r,n,l,i]=R(t,e,r,n,l,i);let s=u(t,e,r);t=s.day,e=s.month,r=s.year;let p=t+n-1,c=Math.floor(l/2),a=c-3,b=c+3;c=t+c-1,a=t+a-1,b=t+b-1;let P=u(p,e,r),m=u(a,e,r),f=u(c,e,r),k=u(b,e,r),v=u(t+l-i,e,r);return new w(s,P,m,f,k,v,l)}function*h(t,e,r,n,l,i=4){for([t,e,r,n,l,i]=R(t,e,r,n,l,i);;)yield M(t,e,r,n,l,i),t=t+l}function E(t,e={customResult:(r,n)=>r}){let{menstrStart:r,menstrEnd:n,preProblem:l,problemPoint:i,postProblem:s,preMenstr:p,menstrRange:c}=t,a=u(r.day+c-1,r.month,r.year),b=d(r,n),P=[...d(l,u(i.day-1,i.month,i.year)),...d(u(i.day+1,i.month,i.year),s)],m=d(p,a);return[...b.map(f=>e.customResult(f,0)),...P.map(f=>e.customResult(f,1)),e.customResult(i,2),...m.map(f=>e.customResult(f,3))]}function*F(t,e,r,n,l,i=4,s={customResult:(p,c)=>p}){let p=h(t,e,r,n,l,i);for(;;){let c=p.next();yield E(c.value,s)}}0&&(module.exports={WomenProblem,autoParseInt,compareDate,createCalendarDataWP,createCalendarNextDataWP,getDateRange,getDaysInMonth,normalizeDate,predictWomenProblem,predictWomenProblemNext,zDate});
