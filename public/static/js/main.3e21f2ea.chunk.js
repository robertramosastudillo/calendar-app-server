(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{114:function(e,t,n){},116:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(8),c=n.n(r),o=n(9),s=n(35),i=n(10),u=n(12),l=n.n(u),j=n(19),d=n(18),b=n.n(d),m="https://mern-calendar-serve.herokuapp.com/api",p=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(m,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},O=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(m,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},f="[ui] Open Modal",v="[ui] Close Modal",h="[event] Set Active",x="[event] Logout event",g="[event] Add new",y="[event] Clear active event",N="[event] Event updated",w="[event] Event deleted",k="[event] Events loaded",E="[auth] Finish checking login state",S="[auth] Login",C="[auth] Logout",D=n(5),T=n(16),P=n.n(T),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(D.a)(Object(D.a)({},e),{},{end:P()(e.end).toDate(),start:P()(e.start).toDate()})}))},A=function(e){return{type:g,payload:e}},_=function(){return{type:y}},L=function(e){return{type:N,payload:e}},R=function(){return{type:w}},G=function(e){return{type:k,payload:e}},M=function(){return{type:E}},F=function(e){return{type:S,payload:e}},V=function(){return{type:C}},H=n(14),J=n(25),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(H.a)(t,2),r=n[0],c=n[1],o=function(){c(e)},s=function(e){var t=e.target;c(Object(D.a)(Object(D.a)({},r),{},Object(J.a)({},t.name,t.value)))};return[r,s,o]},B=(n(75),n(2)),X=function(){var e=Object(o.b)(),t=U({lEmail:"robert@ramos.com",lPassword:"123456"}),n=Object(H.a)(t,2),a=n[0],r=n[1],c=a.lEmail,s=a.lPassword,i=U({rName:"Nando",rEmail:"nando@ramos.com",rPassword1:"123456",rPassword2:"123456"}),u=Object(H.a)(i,2),d=u[0],m=u[1],O=d.rName,f=d.rEmail,v=d.rPassword1,h=d.rPassword2;return Object(B.jsx)("div",{className:"container login-container",children:Object(B.jsxs)("div",{className:"row",children:[Object(B.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(B.jsx)("h3",{children:"Ingreso"}),Object(B.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=c,a=s,function(){var e=Object(j.a)(l.a.mark((function e(t){var r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("auth",{email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(F({uid:c.uid,name:c.name}))):b.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(B.jsx)("div",{className:"form-group",children:Object(B.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:c,onChange:r})}),Object(B.jsx)("div",{className:"form-group",children:Object(B.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:s,onChange:r})}),Object(B.jsx)("div",{className:"form-group",children:Object(B.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(B.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(B.jsx)("h3",{children:"Registro"}),Object(B.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),v!==h)return b.a.fire("Error","Las contrase\xf1as deben de ser iguales","error");var n,a,r;console.log(d),e((n=f,a=v,r=O,function(){var e=Object(j.a)(l.a.mark((function e(t){var c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("auth/new",{email:n,password:a,name:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(F({uid:o.uid,name:o.name}))):b.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(B.jsx)("div",{className:"form-group",children:Object(B.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:O,onChange:m})}),Object(B.jsx)("div",{className:"form-group",children:Object(B.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:f,onChange:m})}),Object(B.jsx)("div",{className:"form-group",children:Object(B.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:v,onChange:m})}),Object(B.jsx)("div",{className:"form-group",children:Object(B.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:h,onChange:m})}),Object(B.jsx)("div",{className:"form-group",children:Object(B.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})},q=function(){var e=Object(o.c)((function(e){return e.auth})).name,t=Object(o.b)();return Object(B.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(B.jsx)("span",{className:"navbar-brand",children:e}),Object(B.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){t(function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.clear(),t({type:x}),t(V());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:[Object(B.jsx)("li",{className:"fas fa-sign-out-alt"}),Object(B.jsx)("span",{children:" Salir"})]})]})},z=n(54),K=(n(77),{allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}}),Q=(n(78),function(e){var t=e.event,n=t.title,a=t.user;return Object(B.jsxs)("div",{children:[Object(B.jsxs)("strong",{children:[n," "]}),Object(B.jsxs)("span",{children:["- ",a.name]})]})}),W=n(49),Y=n.n(W),Z=n(50),$=n.n(Z),ee=function(){return{type:f}},te={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};Y.a.setAppElement("#root");var ne=P()().minutes(0).second(0).add(1,"hours"),ae=ne.clone().add(1,"hours"),re={title:"",notes:"",start:ne.toDate(),end:ae.toDate()},ce=function(){var e=Object(o.c)((function(e){return e.ui})).modalOpen,t=Object(o.c)((function(e){return e.calendar})).activeEvent,n=Object(o.b)(),r=Object(a.useState)(ne.toDate()),c=Object(H.a)(r,2),s=c[0],i=c[1],u=Object(a.useState)(ae.toDate()),d=Object(H.a)(u,2),m=d[0],p=d[1],f=Object(a.useState)(!0),h=Object(H.a)(f,2),x=h[0],g=h[1],y=Object(a.useState)(re),N=Object(H.a)(y,2),w=N[0],k=N[1],E=w.notes,S=w.title,C=w.start,T=w.end;Object(a.useEffect)((function(){k(t||re)}),[t,k]);var I=function(e){var t=e.target;k(Object(D.a)(Object(D.a)({},w),{},Object(J.a)({},t.name,t.value)))},R=function(){n({type:v}),n(_()),k(re)};return Object(B.jsxs)(Y.a,{isOpen:e,onRequestClose:R,style:te,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",children:[Object(B.jsxs)("h1",{children:[" ",t?"Editar evento":"Nuevo evento"]}),Object(B.jsx)("hr",{}),Object(B.jsxs)("form",{className:"container",onSubmit:function(e){e.preventDefault();var a,r=P()(C),c=P()(T);return r.isSameOrAfter(c)?b.a.fire("Error","La fecha fin debe de ser mayor a la fecha de inicio","error"):S.trim().length<2?g(!1):(n(t?(a=w,function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("events/".concat(a.id),a,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(r=e.sent).ok?t(L(a)):b.a.fire("Error",r.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(j.a)(l.a.mark((function t(n,a){var r,c,o,s,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,O("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:(i=t.sent).ok&&(e.id=i.evento.id,e.user={_id:c,name:o},console.log(e),n(A(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(w)),g(!0),void R())},children:[Object(B.jsxs)("div",{className:"form-group",children:[Object(B.jsx)("label",{children:"Fecha y hora inicio"}),Object(B.jsx)($.a,{onChange:function(e){i(e),k(Object(D.a)(Object(D.a)({},w),{},{start:e}))},value:s,className:"form-control"})]}),Object(B.jsxs)("div",{className:"form-group",children:[Object(B.jsx)("label",{children:"Fecha y hora fin"}),Object(B.jsx)($.a,{onChange:function(e){p(e),k(Object(D.a)(Object(D.a)({},w),{},{end:e}))},minDate:s,value:m,className:"form-control"})]}),Object(B.jsx)("hr",{}),Object(B.jsxs)("div",{className:"form-group",children:[Object(B.jsx)("label",{children:"Titulo y notas"}),Object(B.jsx)("input",{type:"text",className:"form-control ".concat(!x&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:S,onChange:I}),Object(B.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(B.jsxs)("div",{className:"form-group",children:[Object(B.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:E,onChange:I}),Object(B.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(B.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(B.jsx)("i",{className:"far fa-save"}),Object(B.jsx)("span",{children:" Guardar"})]})]})]})},oe=function(){var e=Object(o.b)();return Object(B.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(ee()),e(_())},children:Object(B.jsx)("li",{className:"fas fa-plus"})})},se=function(){var e=Object(o.b)();return Object(B.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(j.a)(l.a.mark((function e(t,n){var a,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,O("events/".concat(a),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t(R()):b.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(B.jsx)("li",{className:"fas fa-trash"}),Object(B.jsx)("span",{children:" Borrar evento"})]})};P.a.locale("es");var ie=Object(z.b)(P.a),ue=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.calendar})),n=t.events,r=t.activeEvent,c=Object(o.c)((function(e){return e.auth})).uid,s=Object(a.useState)(localStorage.getItem("lastView")||"month"),i=Object(H.a)(s,2),u=i[0],d=i[1];Object(a.useEffect)((function(){e(function(){var e=Object(j.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=I(a.eventos),t(G(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(B.jsxs)("div",{className:"calendar-screen",children:[Object(B.jsx)(q,{}),Object(B.jsx)(z.a,{localizer:ie,events:n,startAccessor:"start",endAccessor:"end",messages:K,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:c===e.user._id?"#367CF7":"#465660",bordeRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(t){e(ee())},onSelectEvent:function(t){e({type:h,payload:t})},onSelectSlot:function(t){e(_())},selectable:!0,onView:function(e){d(e),localStorage.setItem("lastView",e)},view:u,components:{event:Q}}),Object(B.jsx)(oe,{}),r&&Object(B.jsx)(se,{}),Object(B.jsx)(ce,{})]})},le=n(38),je=function(e){var t=e.isAuthenticated,n=e.component,a=Object(le.a)(e,["isAuthenticated","component"]);return Object(B.jsx)(i.b,Object(D.a)(Object(D.a)({},a),{},{component:function(e){return t?Object(B.jsx)(n,Object(D.a)({},e)):Object(B.jsx)(i.a,{to:"/login"})}}))},de=function(e){var t=e.isAuthenticated,n=e.component,a=Object(le.a)(e,["isAuthenticated","component"]);return Object(B.jsx)(i.b,Object(D.a)(Object(D.a)({},a),{},{component:function(e){return t?Object(B.jsx)(i.a,{to:"/"}):Object(B.jsx)(n,Object(D.a)({},e))}}))},be=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})),n=t.checking,r=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(j.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(F({uid:a.uid,name:a.name}))):t(M());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(B.jsx)("h5",{children:"Espere..."}):Object(B.jsx)(s.a,{children:Object(B.jsx)("div",{children:Object(B.jsxs)(i.d,{children:[Object(B.jsx)(de,{exact:!0,path:"/login",component:X,isAuthenticated:!!r}),Object(B.jsx)(je,{exact:!0,path:"/",component:ue,isAuthenticated:!!r}),Object(B.jsx)(i.a,{to:"/"})]})})})},me=n(22),pe=n(65),Oe={checking:!0},fe=n(55),ve={events:[],activeEvent:null},he={modalOpen:!1},xe=Object(me.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(D.a)(Object(D.a)({},e),{},{modalOpen:!0});case v:return Object(D.a)(Object(D.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(D.a)(Object(D.a)({},e),{},{activeEvent:t.payload});case g:return Object(D.a)(Object(D.a)({},e),{},{events:[].concat(Object(fe.a)(e.events),[t.payload])});case y:return Object(D.a)(Object(D.a)({},e),{},{activeEvent:null});case N:return Object(D.a)(Object(D.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case w:return Object(D.a)(Object(D.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case k:return Object(D.a)(Object(D.a)({},e),{},{events:Object(fe.a)(t.payload)});case x:return Object(D.a)({},ve);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(D.a)(Object(D.a)(Object(D.a)({},e),t.payload),{},{checking:!1});case E:return Object(D.a)(Object(D.a)({},e),{},{checking:!1});case C:return{checking:!1};default:return e}}}),ge="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||me.d,ye=Object(me.e)(xe,ge(Object(me.a)(pe.a))),Ne=function(){return Object(B.jsx)(o.a,{store:ye,children:Object(B.jsx)(be,{})})};n(114);c.a.render(Object(B.jsx)(Ne,{}),document.getElementById("root"))},75:function(e,t,n){}},[[116,1,2]]]);
//# sourceMappingURL=main.3e21f2ea.chunk.js.map