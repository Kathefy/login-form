(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,a,n){e.exports=n(37)},25:function(e,a,n){},35:function(e,a,n){},37:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),s=n(10),l=n.n(s),o=(n(25),n(11)),i=n(12),m=n(18),c=n(13),u=n(19),p=n(17),d=(n(35),function(){return r.a.createElement("div",{className:"form"},r.a.createElement(p.a,{initialValues:{name:"",email:"",password:""},validate:function(e){var a={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(a.email=r.a.createElement("span",{className:"error"}," \u2022 Invalid email address"),a.emailClass="errorInput"):(a.email=r.a.createElement("span",{className:"error"}," \u2022 Required"),a.emailClass="errorInput"),e.name||(a.name=r.a.createElement("span",{className:"error"}," \u2022 Required"),a.nameClass="errorInput"),e.password?e.password.length<8&&(a.password=r.a.createElement("span",{className:"error"}," \u2022 min 8 characters"),a.passwordClass="errorInput"):(a.password=r.a.createElement("span",{className:"error"}," \u2022 Required"),a.passwordClass="errorInput"),a},onSubmit:function(e,a){var n=a.setSubmitting,t=["No such file or directory","Sorry, this username is taken","The server is not reachable","Site doesn't exist"],r=t[Math.floor(Math.random()*t.length)];setTimeout(function(){alert(r),n(!1)},400)}},function(e){var a=e.values,n=e.errors,t=e.touched,s=e.handleChange,l=e.handleBlur,o=e.handleSubmit,i=e.isSubmitting;return r.a.createElement("form",{onSubmit:o},r.a.createElement("div",{className:"loginForm"},r.a.createElement("div",{className:"container"},r.a.createElement("input",{className:"inputText "+(n.name&&t.name&&n.nameClass),type:"text",name:"name",onChange:s,onBlur:l,value:a.name}),r.a.createElement("span",{className:"labelFloat"},"Full Name",n.name&&t.name&&n.name)),r.a.createElement("div",{className:"container"},r.a.createElement("input",{className:"inputText "+(n.email&&t.email&&n.emailClass),type:"email",name:"email",onChange:s,onBlur:l,value:a.email}),r.a.createElement("span",{className:"labelFloat"},"Email",n.email&&t.email&&n.email)),r.a.createElement("div",{className:"container"},r.a.createElement("input",{className:"inputText inputTextLast "+(n.password&&t.password&&n.passwordClass),type:"password",name:"password",onChange:s,onBlur:l,value:a.password}),r.a.createElement("span",{className:"labelFloat"},"Password",n.password&&t.password&&n.password))),r.a.createElement("button",{type:"submit",disabled:i},"Submit"))}))}),w=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(d,null)}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.2cf2f73d.chunk.js.map