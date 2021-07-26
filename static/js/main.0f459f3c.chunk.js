(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},17:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(8),i=n.n(c),s=(n(17),n(12)),o=n(3),u=n(4),l=n(6),b=n(5),d=n(9),m=n.n(d),h=(n(26),n(27),n(0)),j=function(e){var t=e.id,n=e.name,a=e.number,r=e.onDeleteContacts;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("li",{children:[Object(h.jsxs)("p",{children:[n,Object(h.jsx)("span",{children:a})]}),Object(h.jsx)("button",{type:"button",onClick:function(){return r(t)},children:"Delete"})]},t)})},f=function(e){var t=e.contacts,n=e.onDeleteContacts;return Object(h.jsx)("ul",{className:"ContactList",children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(h.jsx)(j,{name:a,number:r,onDeleteContacts:function(){return n(t)}},t)}))})},p=n(10),O=n(11),C=(n(29),function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleInputChanged=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(O.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("form",{className:"ContactForm",onSubmit:this.handleSubmit,children:[Object(h.jsxs)("label",{children:["Name",Object(h.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:this.state.name,onChange:this.handleInputChanged,required:!0})]}),Object(h.jsxs)("label",{children:["Number",Object(h.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:this.state.number,onChange:this.handleInputChanged,required:!0})]}),Object(h.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(r.a.Component)),v=(n(30),function(e){var t=e.value,n=e.onChange;return Object(h.jsxs)("label",{className:"Filter",children:["Find contacts by name",Object(h.jsx)("input",{type:"text",name:"filter",value:t,onChange:n})]})}),x=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:p,filter:""},e.FormSubmitHandler=function(t){var n=t.name,a=t.number;if(e.state.contacts.find((function(e){return e.name.toLowerCase()===n.toLowerCase()})))alert("".concat(n," is already in contacts."));else{var r={id:m.a.generate(),name:n,number:a};e.setState((function(e){var t=e.contacts;return{contacts:[r].concat(Object(s.a)(t))}}))}},e.deleteContacts=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getVisibleContacts=function(){var t=e.state,n=t.contacts,a=t.filter.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(a)}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.getVisibleContacts();return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(C,{onSubmit:this.FormSubmitHandler}),Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(v,{value:e,onChange:this.changeFilter}),Object(h.jsx)(f,{contacts:t,onDeleteContacts:this.deleteContacts})]})}}]),n}(r.a.Component);i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.0f459f3c.chunk.js.map