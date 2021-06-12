(this["webpackJsonpin-my-wallet-react-app"]=this["webpackJsonpin-my-wallet-react-app"]||[]).push([[0],{45:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(19),s=n.n(c),i=n(0),o=function(){return Object(i.jsx)("h2",{children:"My Wallet"})},u=n(4),l=n.n(u),j=n(8),d=n(6),p=n(20),b=n(3),O=function(t,e){switch(e.type){case"GET_TRANSACTIONS":return Object(b.a)(Object(b.a)({},t),{},{loading:!1,transactions:e.payload});case"DELETE_TRANSACTION":return Object(b.a)(Object(b.a)({},t),{},{transactions:t.transactions.filter((function(t){return t._id!==e.payload}))});case"ADD_TRANSACTION":return Object(b.a)(Object(b.a)({},t),{},{transactions:[].concat(Object(p.a)(t.transactions),[e.payload])});case"TRANSACTION_ERROR":return Object(b.a)(Object(b.a)({},t),{},{error:e.payload});default:return t}},h=n(9),x=n.n(h),f={transactions:[],error:null,loading:!0},m=Object(a.createContext)(f),v=function(t){var e=t.children,n=Object(a.useReducer)(O,f),r=Object(d.a)(n,2),c=r[0],s=r[1];function o(){return(o=Object(j.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.a.get("/api/v1/transactions");case 3:e=t.sent,s({type:"GET_TRANSACTIONS",payload:e.data.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),s({type:"TRANSACTION_ERROR",payload:t.t0.response.data.error});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function u(){return(u=Object(j.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.a.delete("/api/v1/transactions/".concat(e));case 3:s({type:"DELETE_TRANSACTION",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),s({type:"TRANSACTION_ERROR",payload:t.t0.response.data.error});case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function p(){return(p=Object(j.a)(l.a.mark((function t(e){var n,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{"Content-Type":"application/json"}},t.prev=1,t.next=4,x.a.post("/api/v1/transactions/",e,n);case 4:a=t.sent,s({type:"ADD_TRANSACTION",payload:a.data.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),s({type:"TRANSACTION_ERROR",payload:t.t0.response.data.error});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}return Object(i.jsx)(m.Provider,{value:{transactions:c.transactions,error:c.error,loading:c.loading,getTransactions:function(){return o.apply(this,arguments)},deleteTransaction:function(t){return u.apply(this,arguments)},addTransaction:function(t){return p.apply(this,arguments)}},children:e})};function y(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var T=function(){var t=Object(a.useContext)(m).transactions.map((function(t){return t.amount})).reduce((function(t,e){return t+e}),0).toFixed(2);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h4",{children:" Balance in Wallet "}),Object(i.jsxs)("h1",{children:["$",y(t)]})]})},N=function(){var t=Object(a.useContext)(m).transactions.map((function(t){return t.amount})),e=t.filter((function(t){return t>0})).reduce((function(t,e){return t+e}),0).toFixed(2),n=(-1*t.filter((function(t){return t<0})).reduce((function(t,e){return t+e}),0)).toFixed(2);return Object(i.jsxs)("div",{class:"inc-exp-container",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:"Huat ah"}),Object(i.jsxs)("p",{id:"money-plus",className:"money plus",children:["$",y(e)]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:"Expenses"}),Object(i.jsxs)("p",{id:"money-minus",className:"money minus",children:["$",y(n)]})]})]})},A=function(t){var e=t.transaction,n=Object(a.useContext)(m).deleteTransaction,r=e.amount<0?"-":"+";return Object(i.jsxs)("li",{className:e.amount<0?"minus":"plus",children:[e.text,Object(i.jsxs)("span",{children:[r,"$",y(Math.abs(e.amount))]}),Object(i.jsx)("button",{onClick:function(){return n(e._id)},className:"delete-btn",children:"x "})," "]})},R=function(){var t=Object(a.useContext)(m),e=t.transactions,n=t.getTransactions;return Object(a.useEffect)((function(){n()}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{children:"Transaction History"}),Object(i.jsx)("ul",{id:"list",className:"list",children:e.map((function(t){return Object(i.jsx)(A,{transaction:t},t.id)}))})]})},g=function(){var t=Object(a.useContext)(m).addTransaction,e=Object(a.useState)(" "),n=Object(d.a)(e,2),r=n[0],c=n[1],s=Object(a.useState)(" "),o=Object(d.a)(s,2),u=o[0],l=o[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{children:"Add a Transaction"}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={id:Math.floor(1e8*Math.random()),text:r,amount:+u};t(n)},children:[Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsx)("label",{htmlFor:"text",children:" Description "}),Object(i.jsx)("input",{type:"text",value:r,onChange:function(t){return c(t.target.value)},placeholder:"Enter a Description..."})]}),Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsx)("label",{htmlFor:"amount",children:" Amount "}),Object(i.jsx)("input",{type:"number",value:u,onChange:function(t){return l(t.target.value)},placeholder:"Enter any amount... "})]}),Object(i.jsx)("label",{children:" (Eg. Expenses = -100 / Huat = 100 )"}),Object(i.jsx)("button",{className:"btn",children:"Proceed"})]})]})},C=function(){return Object(i.jsxs)("div",{className:"wrapper row5 ",children:["Designed and Developed by: ",Object(i.jsx)("a",{href:"https://www.linkedin.com/in/sashitharan/",target:"_blank",children:" Sashitharan"})]})};n(45);var E=function(){return Object(i.jsxs)(v,{children:[Object(i.jsx)(o,{}),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(T,{}),Object(i.jsx)(N,{}),Object(i.jsx)(R,{}),Object(i.jsx)(g,{}),Object(i.jsx)(C,{})]})]})};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(E,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.2893aa88.chunk.js.map