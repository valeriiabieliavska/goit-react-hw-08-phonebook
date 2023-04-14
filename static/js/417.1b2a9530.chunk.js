"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[417],{417:function(e,n,t){t.r(n),t.d(n,{default:function(){return L}});var r=t(791),a=t(434),u="NOT_FOUND";var o=function(e,n){return e===n};function i(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,a=void 0===r?o:r,i=t.maxSize,c=void 0===i?1:i,s=t.resultEqualityCheck,l=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!e(n[a],t[a]))return!1;return!0}}(a),f=1===c?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:u},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(l):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var a=t[r];return r>0&&(t.splice(r,1),t.unshift(a)),a.value}return u}return{get:r,put:function(n,a){r(n)===u&&(t.unshift({key:n,value:a}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(c,l);function m(){var n=f.get(arguments);if(n===u){if(n=e.apply(null,arguments),s){var t=f.getEntries(),r=t.find((function(e){return s(e.value,n)}));r&&(n=r.value)}f.put(arguments,n)}return n}return m.clearCache=function(){return f.clear()},m}function c(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function s(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var a=function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var u,o=0,i={memoizeOptions:void 0},s=r.pop();if("object"===typeof s&&(i=s,s=r.pop()),"function"!==typeof s)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof s+"]");var l=i,f=l.memoizeOptions,m=void 0===f?t:f,p=Array.isArray(m)?m:[m],d=c(r),v=e.apply(void 0,[function(){return o++,s.apply(null,arguments)}].concat(p)),h=e((function(){for(var e=[],n=d.length,t=0;t<n;t++)e.push(d[t].apply(null,arguments));return u=v.apply(null,e)}));return Object.assign(h,{resultFunc:s,memoizedResultFunc:v,dependencies:d,lastResult:function(){return u},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),h};return a}var l=s(i),f=function(e){return e.contacts.contacts.isLoading},m=function(e){return e.contacts.contacts.error},p=(l([function(e){return e.contacts.contacts.items},function(e){return e.contacts.filter}],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n)}))})),t(208)),d=t(439),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")},h="Form_contactsForm__3p8Ak",y="Form_inputName__+Pfkf",_="Form_input__FTtTw",b="Form_btn__0ebGo",g=t(184),x=function(){var e=(0,r.useState)(""),n=(0,d.Z)(e,2),t=n[0],u=n[1],o=(0,r.useState)(""),i=(0,d.Z)(o,2),c=i[0],s=i[1],l=(0,a.v9)((function(e){return e.contacts.items})),f=(0,a.I0)(),m=function(e){var n=e.currentTarget,t=n.name,r=n.value;"name"===t?u(r):"number"===t&&s(r)},x=function(){u(""),s("")};return(0,g.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={id:v(),name:t,number:c};l&&l.find((function(e){return e.name&&e.name.toLowerCase()===n.name.toLowerCase()}))?alert("".concat(n.name," is already in contacts")):f((0,p.uK)(n)),x()},className:h,children:[(0,g.jsxs)("label",{className:y,children:["Name",(0,g.jsx)("input",{className:_,type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:m})]}),(0,g.jsxs)("label",{className:y,children:["Number",(0,g.jsx)("input",{className:_,type:"tel",name:"number",value:c,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:m})]}),(0,g.jsx)("button",{className:b,type:"submit",children:"Add contact"})]})},j=t(661),C="Filter_filter__vxThR",k="Filter_filterInput__1Cysk",w=function(){var e=(0,a.v9)((function(e){return e.filter})),n=(0,a.I0)();return(0,g.jsxs)("label",{className:C,children:["Filter contacts by name",(0,g.jsx)("input",{className:k,value:e,onChange:function(e){n((0,j.W1)(e.target.value))},type:"text"})]})},N={list:"ContactList_list__csErn",btnDelete:"ContactList_btnDelete__Eeo9v",item:"ContactList_item__EZYHO"},F=function(){var e=(0,a.v9)((function(e){return e.contacts.items})),n=(0,a.v9)((function(e){return e.filter})),t=(0,a.I0)();if((0,r.useEffect)((function(){t((0,p.yF)())}),[t]),!e)return null;var u=e.filter((function(e){var t;return(null===e||void 0===e?void 0:e.name)&&e.name.toLowerCase().includes(null!==(t=null===n||void 0===n?void 0:n.toLowerCase())&&void 0!==t?t:"")}));return(0,g.jsx)(g.Fragment,{children:0===u.length?(0,g.jsx)("p",{className:N.message,children:"There are no contacts in the Phonebook"}):(0,g.jsx)("ul",{className:N.list,children:u.map((function(e){var n=e.id,r=e.name,a=e.number;return(0,g.jsxs)("li",{className:N.item,id:n,children:[r,": ",a,(0,g.jsx)("button",{className:N.btnDelete,type:"button",onClick:function(){return t((0,p.GK)(n))},children:"Delete."})]},n)}))})})},A=t(323),E={},L=function(){var e=(0,a.I0)(),n=(0,a.v9)(f),t=(0,a.v9)(m);return(0,r.useEffect)((function(){e((0,p.yF)())}),[e]),(0,g.jsxs)("div",{className:E.contactsWrap,children:[(0,g.jsx)("h2",{children:"Phonebook"}),(0,g.jsx)(x,{}),(0,g.jsx)("h2",{children:"Contacts"}),(0,g.jsx)(w,{}),n&&(0,g.jsx)(A.Z,{}),t&&!n&&(0,g.jsx)("h3",{style:{color:"red"},children:t||"Error..."}),!n&&!t&&(0,g.jsx)(F,{})]})}}}]);
//# sourceMappingURL=417.1b2a9530.chunk.js.map