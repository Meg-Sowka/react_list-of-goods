(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var s,r=n(4),i=n.n(r),o=n(5),c=n(6),a=n(9),l=n(7),u=n(8),h=n(1),d=n.n(h),b=n(2),p=n.n(b),j=(n(14),n(15),n(0)),N=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var v=function(t){Object(a.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={isReversed:!1,sortType:s.NONE},t.handleSort=function(e){t.setState((function(t){return{sortType:e,isReversed:e!==s.NONE&&t.isReversed}}))},t.handleReverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=function(t,e){var n=e.sortType,r=e.isReversed,i=Object(u.a)(t);switch(n){case s.ALPHABET:i.sort((function(t,e){return t.localeCompare(e)}));break;case s.LENGTH:i.sort((function(t,e){return t.length-e.length}))}return r&&i.reverse(),console.log(n,r),i}(N,this.state);return Object(j.jsxs)("div",{className:"section content",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",className:p()("button is-info",{"is-light":this.state.sortType!==s.ALPHABET}),onClick:function(){return t.handleSort(s.ALPHABET)},children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",className:p()("button is-success",{"is-light":this.state.sortType!==s.LENGTH}),onClick:function(){return t.handleSort(s.LENGTH)},children:"Sort by length"}),Object(j.jsx)("button",{type:"button",className:p()("button is-warning",{"is-light":!this.state.isReversed}),onClick:this.handleReverse,children:"Reverse"}),(this.state.isReversed||this.state.sortType!==s.NONE)&&Object(j.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){return t.handleSort(s.NONE)},children:"Reset"})]}),Object(j.jsx)("ul",{children:e.map((function(t){return Object(j.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})}}]),n}(d.a.PureComponent);i.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.1bb2f083.chunk.js.map