(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,a,t){e.exports=t.p+"static/media/logo-2.0610d7f1.svg"},39:function(e,a,t){e.exports=t(67)},46:function(e,a,t){},47:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},62:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),i=t(12),c=t.n(i),l=(t(44),t(45),t(46),t(27)),s=t(68),o=t(69),m=t(70),u=t(71),d=t(72),h=t(73),g=t(74),E=t(31),p=t.n(E);t(47);function v(e){var a=Object(n.useState)(!1),t=Object(l.a)(a,2),i=t[0],c=t[1],E=Object(n.useState)(0),v=Object(l.a)(E,2),b=v[0],f=v[1];return r.a.createElement("header",{id:"header"},r.a.createElement(m.a,{color:"light",light:!0,expand:"md"},r.a.createElement(u.a,{href:"/pethealth"},r.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"})),r.a.createElement(d.a,{onClick:function(){return c(!i)}}),r.a.createElement(h.a,{isOpen:i,navbar:!0},r.a.createElement(g.a,{className:"ml-auto",navbar:!0},e.items.map(function(e,a){var t=e.label,n=e.path;return r.a.createElement(s.a,{key:a},r.a.createElement(o.a,{href:n||"#",active:b===a,onClick:function(){return f(a)}},t))})))),e.children)}var b=t(18),f=t(19),N=t(21),x=t(20),y=t(10),k=t(22),j=t(33),O=t(75),C=t(76),S=t(77),w=t(78),I=(t(57),function(e){function a(e){var t;return Object(b.a)(this,a),(t=Object(N.a)(this,Object(x.a)(a).call(this,e))).animating=void 0,t.state={activeIndex:0,count:0},t.next=t.next.bind(Object(y.a)(t)),t.previous=t.previous.bind(Object(y.a)(t)),t.goToIndex=t.goToIndex.bind(Object(y.a)(t)),t.onExiting=t.onExiting.bind(Object(y.a)(t)),t.onExited=t.onExited.bind(Object(y.a)(t)),t.animating=!1,t}return Object(k.a)(a,e),Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=r.a.Children.count(this.props.children);this.setState({count:e})}},{key:"onExiting",value:function(){this.animating=!0}},{key:"onExited",value:function(){this.animating=!1}},{key:"next",value:function(){var e=this.state,a=e.count,t=e.activeIndex;if(!this.animating){var n=t===a-1?0:t+1;this.setState({activeIndex:n})}}},{key:"previous",value:function(){var e=this.state,a=e.count,t=e.activeIndex;if(!this.animating){var n=0===t?a-1:t-1;this.setState({activeIndex:n})}}},{key:"goToIndex",value:function(e){this.animating||this.setState({activeIndex:e})}},{key:"getSlides",value:function(){var e=this,a=this.props,t=a.children,n=a.slideContent,i=void 0===n?[]:n;return r.a.Children.map(t,function(a,t){var n=i[t]||{},c=n.caption,l=void 0===c?"":c,s=n.captionHeader,o=void 0===s?"":s;return r.a.createElement(j.a,{onExiting:e.onExiting,onExited:e.onExited,key:"carouselItem-".concat(t)},a,r.a.createElement(O.a,{captionText:l,captionHeader:o}))})}},{key:"render",value:function(){var e=this.state.activeIndex,a=this.getSlides(),t=this.props.children,n=r.a.Children.toArray(t);return r.a.createElement(C.a,{activeIndex:e,next:this.next,previous:this.previous,className:this.props.className},r.a.createElement(S.a,{items:n,activeIndex:e,onClickHandler:this.goToIndex}),a,r.a.createElement(w.a,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),r.a.createElement(w.a,{direction:"next",directionText:"Next",onClickHandler:this.next}))}}]),a}(n.Component));t(58);function R(){return r.a.createElement("footer",null,r.a.createElement("p",{id:"text-1"},"2019 PetHealth"),r.a.createElement("p",{id:"text-2"},"PetHealth"))}var H=t(79),T=t(80),A=t(81),M=t(15),G=t(14),P=t(34),D=t(23);t(62);function B(){return r.a.createElement(H.a,{className:"content-overlay"},r.a.createElement(T.a,{style:{margin:0}},r.a.createElement(A.a,{md:"5",style:{alignSelf:"center"}},r.a.createElement("div",{className:"header-text"},r.a.createElement("div",{className:"header-heading"},r.a.createElement("h1",null,"PetHealth"),r.a.createElement("div",{className:"text-content"},r.a.createElement("h3",{className:"title"},"Beneficios"),r.a.createElement("div",{className:"list"},z.map(function(e,a){return r.a.createElement("div",{className:"item",key:a},r.a.createElement(G.a,{icon:P.a,style:{marginRight:"6px"}}),r.a.createElement("div",null,r.a.createElement("label",null,e)))})))),r.a.createElement("div",{className:"header-btns"},r.a.createElement("p",null,"Descargalo en"),r.a.createElement("a",{href:"https://developer.android.com/studio",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(G.a,{icon:D.a,className:"fa-icon"})),r.a.createElement("a",{href:"https://github.com/LuisGH1234/pethealth",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(G.a,{icon:D.c,className:"fa-icon"}))),r.a.createElement("div",{className:"header-btns"},r.a.createElement("p",null,"Visitanos"),r.a.createElement("a",{href:"https://www.facebook.com/Pethealth-433916874102086/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(G.a,{icon:D.b,className:"fa-icon"}))))),r.a.createElement(A.a,{md:"7",style:{alignSelf:"center"}},r.a.createElement("div",{className:"header-images"},r.a.createElement(M.a,{in:!0,tag:"div",timeout:200},r.a.createElement(I,null,r.a.createElement("img",{src:"".concat("/pethealth","/images/image2.png"),alt:"error"}),r.a.createElement("img",{src:"".concat("/pethealth","/images/image3.png"),alt:"error"}),r.a.createElement("img",{src:"".concat("/pethealth","/images/image4.png"),alt:"error"}),r.a.createElement("img",{src:"".concat("/pethealth","/images/image5.png"),alt:"error"}),r.a.createElement("img",{src:"".concat("/pethealth","/images/image6.png"),alt:"error"}),r.a.createElement("img",{src:"".concat("/pethealth","/images/image7.png"),alt:"error"})))))))}var z=["Recordatorios de las citas de tus mascotas","Comunicaci\xf3n con tu veterinario","Control clinico de tu mascota","Localizaci\xf3n de veterinarias cercanas a ti","Noticias para los amantes de animales","Apoyo a los due\xf1os de animales perdidos"],L=t(26),q=t.n(L),Y=t(36),J=t(37),U=t(82),_=t(83),K=t(84),Q=t(38),W=t.n(Q),V=t(13),$=(t(65),function(e){function a(e){var t;return Object(b.a)(this,a),(t=Object(N.a)(this,Object(x.a)(a).call(this,e))).state={showMessage:!1,collapse:!1,name:"",email:""},t.toggle=t.toggle.bind(Object(y.a)(t)),t.onChange=t.onChange.bind(Object(y.a)(t)),t.onRegistration=t.onRegistration.bind(Object(y.a)(t)),t}return Object(k.a)(a,e),Object(f.a)(a,[{key:"renderSentences",value:function(e,a){return r.a.createElement("p",{key:a},e)}},{key:"toggle",value:function(e){e?V.b.error("Debe ingresar un email"):V.b.success("\xa1Gracias por seguirnos!"),this.setState({name:"",email:""})}},{key:"onChange",value:function(e){var a=e.target,t=a.value,n=a.name;this.setState(Object(J.a)({},n,t))}},{key:"onRegistration",value:function(){var e=Object(Y.a)(q.a.mark(function e(){var a,t,n,r;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a=this.state,t=a.name,""!==(n=a.email)&&n){e.next=5;break}return this.toggle("Debe ingresar un email"),e.abrupt("return");case 5:return e.next=7,fetch(X,{method:"POST",body:JSON.stringify({name:t.trim(),email:n.trim(),date:W()().format("YYYY-MM-DD HH:mm:ss")}),headers:{"Content-Type":"application/json"}});case 7:404!==(r=e.sent).status&&500!==r.status||console.warn("Bad status: ".concat(r.status),r),console.assert(200===r.status,"Good registration"),this.toggle(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error("Error trying to resgistrate");case 16:case"end":return e.stop()}},e,this,[[0,13]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=(a.showMessage,a.name),n=a.email;return r.a.createElement("div",{className:"quienes-somos-content",id:"aboutus"},r.a.createElement("div",{className:"content row-1"},r.a.createElement("h1",{className:"main-title"},"QUIENES SOMOS"),r.a.createElement("div",{className:"who-we-are m-border"},F.map(this.renderSentences))),r.a.createElement("div",{className:"content row-2"},r.a.createElement("h1",{className:"main-title"},"\xbfQUIERES SABER MAS SOBRE NUESTRA APP?"),r.a.createElement("div",{className:"registration m-border"},r.a.createElement(U.a,{name:"name",placeholder:"Nombre",id:"input-name",value:t,onChange:this.onChange}),r.a.createElement(U.a,{name:"email",placeholder:"Correo electronico",id:"input-email",value:n,onChange:this.onChange}),r.a.createElement(_.a,{id:"btn-registration",color:"primary",onClick:function(){return e.onRegistration()}},"Enviar"),r.a.createElement("div",{className:"box-collapse"},r.a.createElement(h.a,{isOpen:this.state.collapse},r.a.createElement(K.a,{color:"success"},"\xa1Gracias por seguirnos!"))))),r.a.createElement("div",{className:"content row-3"},r.a.createElement("h1",{className:"main-title"},"Integrantes"),r.a.createElement(H.a,{className:"container-images"},r.a.createElement(T.a,null,r.a.createElement(A.a,null,r.a.createElement("div",{className:"image"},r.a.createElement("img",{className:"content image",src:"".concat("/pethealth","/images/MauricioRivas.jpg"),alt:"error",id:"mauricio-rivas"})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("label",{className:"names"},"Mauricio Rivas"))),r.a.createElement(A.a,null,r.a.createElement("div",{className:"image"},r.a.createElement("img",{className:"content image",src:"".concat("/pethealth","/images/LuisGalindo.jpg"),alt:"error",id:"luis-galindo"})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("label",{className:"names"},"Luis Galindo"))),r.a.createElement(A.a,null,r.a.createElement("div",{className:"image"},r.a.createElement("img",{className:"content image",src:"".concat("/pethealth","/images/SaritaRojas.jpg"),alt:"error",id:"sarita-rojas"})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("label",{className:"names"},"Sarita Rojas"))),r.a.createElement(A.a,null,r.a.createElement("div",{className:"image"},r.a.createElement("img",{className:"content image",src:"".concat("/pethealth","/images/OmarTronco.jpeg"),alt:"error",id:"omar-tronco"})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("label",{className:"names"},"Omar Troncos"))),r.a.createElement(A.a,null,r.a.createElement("div",{className:"image"},r.a.createElement("img",{className:"content image",src:"".concat("/pethealth","/images/KristellCollazos.jpg"),alt:"error",id:"kristell-collazos"})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("label",{className:"names"},"Kristel Collazos")))))))}}]),a}(n.Component)),F=["Nosotros somos una organizaci\xf3n que busca ayudar a las cl\xednicas veterinarias y a los due\xf1os de mascotas que est\xe1n en apuros.","\xbfCansado de no poder agendar una cita de manera r\xe1pida y sencilla a trav\xe9s de tu celular?","Con nuestra herramienta, las veterinarias podr\xe1n gestionar sus agendas de manera eficiente y los due\xf1os de mascotas, agendar una cita con el doctor de su preferencia.","\xa1Adem\xe1s, te damos consejos de salud animal y guardamos un registro de las citas de tu mascota!","Descarga nuestra aplicaci\xf3n y descubre todo lo que tenemos para ti."],X="https://pethealh-backend.herokuapp.com/api/register",Z=(t(66),[{label:"Home",path:"#header"},{label:"Nosotros",path:"#aboutus"},{label:"Github",path:"https://github.com/LuisGH1234/pethealth"}]),ee=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(V.a,null),r.a.createElement(v,{items:Z},r.a.createElement(B,null)),r.a.createElement($,null),r.a.createElement(R,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.cbe2a3a3.chunk.js.map