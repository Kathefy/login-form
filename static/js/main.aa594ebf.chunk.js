(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,a,t){e.exports=t(245)},106:function(e,a,t){},116:function(e,a,t){},245:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(97),i=t.n(o),s=(t(106),t(36)),m=(t(116),t(22)),l=function(e,a){var t=a.resetForm,r=["No such file or directory","Sorry, this username is taken","The server is not reachable","Site doesn't exist"],n=r[Math.floor(Math.random()*r.length)];setTimeout(function(){alert(n),t()},2e3)},c=function(e){var a=e.errorsName,t=e.touched,r=e.name,o=e.title,i=e.type;return n.a.createElement("div",{className:"container"},n.a.createElement(s.a,{className:"inputText".concat(a&&t?" errorInput":""),type:i,name:r}),n.a.createElement("span",{className:"labelFloat"},o,a&&t&&n.a.createElement("span",{className:"error"},a)))},u=Object(s.c)({mapPropsToValues:function(){return{name:"",email:"",password:""}},validationSchema:m.object().shape({name:m.string().required("Required"),email:m.string().email("Invalid email address").required("Required"),password:m.string().min(8,"min 8 characters").required("Required")}),handleSubmit:l})(function(e){var a=e.errors,t=e.touched,r=e.isSubmitting;return n.a.createElement("div",{className:"form"},n.a.createElement(s.b,null,n.a.createElement("div",{className:"loginForm"},n.a.createElement(c,{errorsName:a.name,touched:t.name,name:"name",type:"text",title:"Full Name"}),n.a.createElement(c,{errorsName:a.email,touched:t.email,name:"email",type:"email",title:"Email"}),n.a.createElement(c,{errorsName:a.password,touched:t.password,name:"password",type:"password",title:"Password"})),n.a.createElement("button",{type:"submit",disabled:r},"Submit")))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[101,2,1]]]);
//# sourceMappingURL=main.aa594ebf.chunk.js.map