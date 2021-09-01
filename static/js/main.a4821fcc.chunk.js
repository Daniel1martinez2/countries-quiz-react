(this["webpackJsonpcountries-quiz"]=this["webpackJsonpcountries-quiz"]||[]).push([[0],{16:function(t,e,a){},17:function(t,e,a){"use strict";a.r(e);var n=a(1),o=a.n(n),c=a(5),r=a.n(c),s=a(3),l=a(8),i=a.n(l),u=a(9),_=function(){var t=Object(n.useState)({}),e=Object(s.a)(t,2),a=e[0],o=e[1];return{countriesData:a,fetchCountries:Object(n.useCallback)(Object(u.a)(i.a.mark((function t(){var e,a,n,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://restcountries.eu/rest/v2/all");case 2:return e=t.sent,t.next=5,e.json();case 5:a=t.sent,n=Array.from({length:4}).map((function(t){var e=a[Math.round(Math.random()*a.length-1)];return""!==e.capital?e:a[Math.round(Math.random()*a.length-1)]})),c=n[Math.round(3*Math.random())],o({options:n.map((function(t){return""!==t.capital?t.capital:"***Not capital sorry***"})),answer:c});case 9:case"end":return t.stop()}}),t)}))),[])}},d=a(6),m=a.n(d),j=a(0),b=function(t){var e=t.country;return Object(j.jsxs)("main",{className:m.a.country,children:[Object(j.jsx)("h1",{className:m.a.country__title,children:e.answer&&e.answer.name}),Object(j.jsx)("img",{className:m.a.country__img,src:e.answer&&e.answer.flag,alt:""})]})},h=a(4),p=a.n(h),f=function(t){var e=t.options,a=t.setAnswer,o=Object(n.useState)(""),c=Object(s.a)(o,2),r=c[0],l=c[1];return Object(j.jsxs)("form",{className:p.a.form,onSubmit:function(t){t.preventDefault(),a(r)},children:[Object(j.jsx)("label",{htmlFor:"answer-select",className:p.a.label,children:"Choose a capital:"}),Object(j.jsxs)("select",{onChange:function(t){l(t.target.value)},className:p.a.select,name:"answers",id:"answer-select",value:r,children:[Object(j.jsx)("option",{value:"",children:"--Please choose an option--"}),e&&e.map((function(t){return Object(j.jsx)("option",{value:t.trim(""),children:t},Math.random().toString())}))]}),Object(j.jsx)("button",{className:p.a.btn,children:"CLICK"})]})},O=a(2),x=a.n(O),v=function(t){var e=t.done,a=t.modalData;return Object(j.jsx)(o.a.Fragment,{children:r.a.createPortal(Object(j.jsx)("div",{className:x.a.backdrop,children:Object(j.jsxs)("main",{className:x.a.modal,children:[Object(j.jsx)("h1",{className:"".concat(x.a.modal__title," ").concat(x.a[a.response]),children:a.response}),Object(j.jsxs)("h4",{className:x.a.modal__p,children:["The capital of",Object(j.jsxs)("strong",{className:x.a.modal__country,children:[" ",a.country," "]}),"is",Object(j.jsxs)("strong",{className:x.a.modal__answer,children:[" ",a.capital," "]})]}),Object(j.jsx)("button",{className:x.a.modal__btn,onClick:e,children:"Continue"})]})}),document.querySelector(".modal-gate"))})};a(16);var y=function(){var t,e,a,o=_(),c=o.countriesData,r=o.fetchCountries,l=Object(n.useState)(!1),i=Object(s.a)(l,2),u=i[0],d=i[1],m=Object(n.useState)(""),h=Object(s.a)(m,2),p=h[0],O=h[1],x={country:null===c||void 0===c||null===(t=c.answer)||void 0===t?void 0:t.name,capital:null===c||void 0===c||null===(e=c.answer)||void 0===e?void 0:e.capital,response:p===(null===c||void 0===c||null===(a=c.answer)||void 0===a?void 0:a.capital)?"correct":"incorrect"};return Object(n.useEffect)((function(){r()}),[r]),Object(j.jsxs)("div",{className:"App",children:[u&&Object(j.jsx)(v,{answer:p,done:function(){d(!1),r()},modalData:x}),Object(j.jsx)(b,{country:c}),Object(j.jsx)(f,{setAnswer:function(t){d(!0),O(t)},onSubmit:{fetchCountries:r,setIsActive:d},options:c.options&&c.options})]})};r.a.render(Object(j.jsx)(y,{}),document.getElementById("root"))},2:function(t,e,a){t.exports={backdrop:"Modal_backdrop__14mg6",modal:"Modal_modal__1m6Sa",modal__title:"Modal_modal__title__J0MnK",modal__p:"Modal_modal__p__1NYFQ",modal__btn:"Modal_modal__btn__2WD9p",modal__country:"Modal_modal__country__1V7Ga",modal__answer:"Modal_modal__answer__3390P",incorrect:"Modal_incorrect__3Rxl8",correct:"Modal_correct__g_Ddm"}},4:function(t,e,a){t.exports={form:"Form_form__2hemT",label:"Form_label__1ILmH",select:"Form_select__1Z7Kx",btn:"Form_btn__2RK0U"}},6:function(t,e,a){t.exports={country:"Country_country__1hT3S",country__title:"Country_country__title__2xTxB",country__img:"Country_country__img__RkNMy"}}},[[17,1,2]]]);
//# sourceMappingURL=main.a4821fcc.chunk.js.map