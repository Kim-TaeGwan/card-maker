(this["webpackJsonpcard-maker"]=this["webpackJsonpcard-maker"]||[]).push([[0],{10:function(e,t,a){e.exports={makerWheat:"wheat",makerShadow:"rgba(217, 217, 217, 1)",makerBlack:"black",makerWhite:"white",makerColorful:"linear-gradient(166deg, rgba(237, 193, 211, 1) 0%,rgba(212, 149, 161, 1) 60%, rgba(162, 63, 63, 1) 100%, rgba(127, 188, 242, 1) 100%)",card:"Card_card__37onG",dark:"Card_dark__aHHEL",light:"Card_light__3GdVH",colorful:"Card_colorful__1X2OC",avatar:"Card_avatar__1peJA",info:"Card_info__1kRf7",name:"Card_name___76-E",company:"Card_company__E_Df5",title:"Card_title__3mN58",email:"Card_email__2ELj0",message:"Card_message__3MQ8J"}},13:function(e,t,a){e.exports={makerBlack:"black",makerWhite:"white",form:"CardEditForm_form__1oGlm",input:"CardEditForm_input__2rliD",select:"CardEditForm_select__2RmrE",textarea:"CardEditForm_textarea__3VPzq",button:"CardEditForm_button__3vVBr",fileInput:"CardEditForm_fileInput__k1sTs"}},14:function(e,t,a){e.exports={makerBlack:"black",makerWhite:"white",form:"CardAddForm_form__2FwsM",input:"CardAddForm_input__1xh61",select:"CardAddForm_select__1rPZZ",textarea:"CardAddForm_textarea__dxSM0",button:"CardAddForm_button__2McQ1",fileInput:"CardAddForm_fileInput__3czTS"}},18:function(e,t,a){e.exports={makerLightGrey:"#e8e7e6",makerPink:"pink",makerLightPink:"#ffeae8",container:"ImageFileInput_container__9ZzuM",input:"ImageFileInput_input__18siL",button:"ImageFileInput_button__1foJ2",pink:"ImageFileInput_pink__RY8Gb",grey:"ImageFileInput_grey__eZk75",loading:"ImageFileInput_loading__35knc",spin:"ImageFileInput_spin__30RJU"}},23:function(e,t,a){e.exports={makerGreen:"#385461",makerWhite:"white",makerBlack:"black",header:"Header_header__1WAEX",logo:"Header_logo__30izX",title:"Header_title__2NpdD",logout:"Header_logout__1ALOc"}},26:function(e,t,a){e.exports={makerGreen:"#385461",preview:"Preview_preview__308UN",title:"Preview_title__3wbo8",cards:"Preview_cards__3IRv7"}},31:function(e,t,a){e.exports={mediaQuery:"62rem",makerWhite:"white",maker:"Maker_maker__37cgR",container:"Maker_container__2jFhD"}},32:function(e,t,a){e.exports={makerGreen:"#385461",makerWhite:"white",footer:"Footer_footer__2RKK3",title:"Footer_title__1e7kK"}},33:function(e,t,a){e.exports={makerGreen:"#385461",makerLightGrey:"#e8e7e6",editor:"Editor_editor__11BT6",title:"Editor_title__2YvXG"}},36:function(e,t,a){e.exports={makerGreen:"#385461",makerWhite:"white",login:"Login_login__Ui2uf",list:"Login_list__Me7-w"}},37:function(e,t,a){e.exports={makerGreen:"#385461",makerLightPink:"#ffeae8",item:"LoginButton_item__YHiZ1",button:"LoginButton_button__2e711"}},40:function(e,t,a){e.exports={makerWhite:"white",makerGreen:"#385461",button:"Button_button__2xd1w"}},42:function(e,t,a){e.exports={makerGrey:"#626262",app:"App_app__1kX79"}},48:function(e,t,a){e.exports={makerGrey:"#626262"}},61:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(2),c=a.n(r),i=a(39),o=a.n(i),s=(a(48),a(43)),l=a(5),u=a(15),d=a(31),m=a.n(d),j=a(32),f=a.n(j),p=a(1),b=Object(r.memo)((function(){return Object(p.jsx)("footer",{className:f.a.footer,children:Object(p.jsx)("p",{className:f.a.title,children:"Code your dream"})})})),h=a(23),_=a.n(h),O=Object(r.memo)((function(e){var t=e.onLogout;return Object(p.jsxs)("header",{className:_.a.header,children:[t&&Object(p.jsx)("button",{className:_.a.logout,onClick:t,children:"Logout"}),Object(p.jsx)("img",{className:_.a.logo,src:"../../../assets/images/logo.png",alt:"logo"}),Object(p.jsx)("h1",{className:_.a.title,children:"Business Card Maker"})]})})),x=a(33),g=a.n(x),k=a(24),v=a(40),C=a.n(v),N=Object(r.memo)((function(e){var t=e.name,a=e.onClick;return Object(p.jsx)("button",{className:C.a.button,onClick:a,children:t})})),y=a(13),w=a.n(y),F=function(e){var t=e.FileInput,a=e.card,c=e.updateCard,i=e.deleteCard,o=Object(r.useRef)(),s=Object(r.useRef)(),l=Object(r.useRef)(),u=Object(r.useRef)(),d=Object(r.useRef)(),m=Object(r.useRef)(),j=a.name,f=a.company,b=a.title,h=a.email,_=a.message,O=a.theme,x=a.fileName,g=function(e){null!=e.currentTarget&&(e.preventDefault(),c(Object(n.a)(Object(n.a)({},a),{},Object(k.a)({},e.currentTarget.name,e.currentTarget.value))))};return Object(p.jsxs)("form",{className:w.a.form,children:[Object(p.jsx)("input",{className:w.a.input,type:"text",name:"name",ref:o,value:j,onChange:g}),Object(p.jsx)("input",{className:w.a.input,type:"text",name:"company",ref:s,value:f,onChange:g}),Object(p.jsxs)("select",{className:w.a.select,name:"theme",ref:l,value:O,onChange:g,children:[Object(p.jsx)("option",{value:"Light",children:"Light"}),Object(p.jsx)("option",{value:"Dark",children:"Dark"}),Object(p.jsx)("option",{value:"Colorful",children:"Colorful"})]}),Object(p.jsx)("input",{className:w.a.input,type:"text",name:"title",ref:u,value:b,onChange:g}),Object(p.jsx)("input",{className:w.a.input,type:"text",name:"email",ref:d,value:h,onChange:g}),Object(p.jsx)("textarea",{className:w.a.textarea,ref:m,name:"message",value:_,onChange:g}),Object(p.jsx)("div",{className:w.a.fileInput,children:Object(p.jsx)(t,{name:x,onFileChange:function(e){c(Object(n.a)(Object(n.a)({},a),{},{fileName:e.name,fileURL:e.url}))}})}),Object(p.jsx)(N,{name:"Delete",onClick:function(){i(a)}})]})},I=a(14),R=a.n(I),L=Object(r.memo)((function(e){var t=e.FileInput,a=e.onAdd,n=Object(r.useRef)(),c=Object(r.useRef)(),i=Object(r.useRef)(),o=Object(r.useRef)(),s=Object(r.useRef)(),l=Object(r.useRef)(),d=Object(r.useRef)(),m=Object(r.useState)({fileName:null,fileURL:null}),j=Object(u.a)(m,2),f=j[0],b=j[1];return Object(p.jsxs)("form",{ref:n,className:R.a.form,children:[Object(p.jsx)("input",{ref:c,className:R.a.input,type:"text",name:"name",placeholder:"Name"}),Object(p.jsx)("input",{ref:i,className:R.a.input,type:"text",name:"company",placeholder:"Company"}),Object(p.jsxs)("select",{ref:o,className:R.a.select,name:"theme",placeholder:"Theme",children:[Object(p.jsx)("option",{placeholder:"Dark",children:"Light"}),Object(p.jsx)("option",{placeholder:"Light",children:"Dark"}),Object(p.jsx)("option",{placeholder:"Colorful",children:"Colorful"})]}),Object(p.jsx)("input",{ref:s,className:R.a.input,type:"text",name:"title",placeholder:"Title"}),Object(p.jsx)("input",{ref:l,className:R.a.input,type:"text",name:"email",placeholder:"Email"}),Object(p.jsx)("textarea",{ref:d,className:R.a.textarea,name:"message",placeholder:"Message"}),Object(p.jsx)("div",{className:R.a.fileInput,children:Object(p.jsx)(t,{name:f.fileName,onFileChange:function(e){b({fileName:e.name,fileURL:e.url})}})}),Object(p.jsx)(N,{name:"Add",onClick:function(e){e.preventDefault();var t={id:Date.now(),name:c.current.value||"",company:i.current.value||"",theme:o.current.value,title:s.current.value||"",email:l.current.value||"",message:d.current.value||"",fileName:f.fileName||"",fileURL:f.fileURL||""};n.current.reset(),b({fileName:null,fileURL:null}),a(t)}})]})})),G=function(e){var t=e.FileInput,a=e.cards,n=e.addCard,r=e.updateCard,c=e.deleteCard;return Object(p.jsxs)("section",{className:g.a.editor,children:[Object(p.jsx)("h1",{className:g.a.title,children:"Card Maker"}),Object.keys(a).map((function(e){return Object(p.jsx)(F,{FileInput:t,card:a[e],updateCard:r,deleteCard:c},e)})),Object(p.jsx)(L,{FileInput:t,onAdd:n})]})},A=a(10),E=a.n(A);function S(e){switch(e){case"Dark":return E.a.dark;case"Light":return E.a.light;case"Colorful":return E.a.colorful;default:throw new Error("unknown theme: ".concat(e))}}var D=Object(r.memo)((function(e){var t=e.card,a=t.name,n=t.company,r=t.theme,c=t.title,i=t.email,o=t.message,s=t.fileURL||"../../../../assets/images/default_logo.png";return Object(p.jsxs)("li",{className:"".concat(E.a.card," ").concat(S(r)),children:[Object(p.jsx)("img",{src:s,alt:"profile",className:E.a.avatar}),Object(p.jsxs)("div",{className:E.a.info,children:[Object(p.jsx)("h1",{className:E.a.name,children:a}),Object(p.jsx)("p",{className:E.a.company,children:n}),Object(p.jsx)("p",{className:E.a.title,children:c}),Object(p.jsx)("p",{className:E.a.email,children:i}),Object(p.jsx)("p",{className:E.a.message,children:o})]})]})})),P=a(26),B=a.n(P),U=function(e){var t=e.cards;return Object(p.jsxs)("section",{className:B.a.preview,children:[Object(p.jsx)("h1",{className:B.a.title,children:"Card Preview"}),Object(p.jsx)("ul",{className:B.a.cards,children:Object.keys(t).map((function(e){return Object(p.jsx)(D,{card:t[e]},e)}))})]})},M=function(e){var t,a=e.FileInput,c=e.authService,i=e.cardRepository,o=Object(l.f)(),s=null===o||void 0===o||null===(t=o.location)||void 0===t?void 0:t.state,d=Object(r.useState)({}),j=Object(u.a)(d,2),f=j[0],h=j[1],_=Object(r.useState)(s&&s.id),x=Object(u.a)(_,2),g=x[0],k=x[1],v=Object(r.useCallback)((function(){c.logout()}),[c]);Object(r.useEffect)((function(){if(g){var e=i.syncCards(g,(function(e){h(e)}));return function(){return e()}}}),[g,i]),Object(r.useEffect)((function(){c.onAuthChange((function(e){e?k(e.uid):o.push("/")}))}),[c,o]);var C=function(e){h((function(t){var a=Object(n.a)({},t);return a[e.id]=e,a})),i.saveCard(g,e)};return Object(p.jsxs)("section",{className:m.a.maker,children:[Object(p.jsx)(O,{onLogout:v}),Object(p.jsxs)("div",{className:m.a.container,children:[Object(p.jsx)(G,{FileInput:a,cards:f,addCard:C,updateCard:C,deleteCard:function(e){h((function(t){var a=Object(n.a)({},t);return delete a[e.id],a})),i.removeCard(g,e)}}),Object(p.jsx)(U,{cards:f})]}),Object(p.jsx)(b,{})]})},W=a(36),H=a.n(W),T=a(37),z=a.n(T),J=function(e){var t=e.ButtonName,a=e.loginClick;return Object(p.jsx)("li",{className:z.a.item,children:Object(p.jsx)("button",{className:z.a.button,onClick:a,children:t})})},Z=function(e){var t=e.authService,a=Object(l.f)(),n=function(e){a.push({pathname:"/card-maker/maker",state:{id:e}})},c=function(e){t.login(e.currentTarget.textContent).then((function(e){return n(e.user.uid)}))};return Object(r.useEffect)((function(){t.onAuthChange((function(e){e&&n(e.uid)}))})),Object(p.jsxs)("section",{className:H.a.login,children:[Object(p.jsx)(O,{}),Object(p.jsxs)("section",{children:[Object(p.jsx)("h1",{children:"Login"}),Object(p.jsxs)("ul",{className:H.a.list,children:[Object(p.jsx)(J,{ButtonName:"Google",loginClick:c}),Object(p.jsx)(J,{ButtonName:"Github",loginClick:c})]})]}),Object(p.jsx)(b,{})]})},K=a(42),X=a.n(K);var Q=function(e){var t=e.FileInput,a=e.authService,n=e.cardRepository;return Object(p.jsx)("div",{className:X.a.app,children:Object(p.jsx)(s.a,{children:Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{exact:!0,path:"/card-maker",children:Object(p.jsx)(Z,{authService:a})}),Object(p.jsx)(l.a,{path:"/card-maker/maker",children:Object(p.jsx)(M,{FileInput:t,authService:a,cardRepository:n})})]})})})},Y=a(19),q=a(20),V=a(27),$=(a(54),a(56),V.a.initializeApp({apiKey:"AIzaSyBhHYHo5Skm-QW3uDCdk90IsGUCpUK8Zn8",authDomain:"business-card-maker-1a408.firebaseapp.com",projectId:"business-card-maker-1a408",databaseURL:"https://business-card-maker-1a408-default-rtdb.firebaseio.com"})),ee=$.auth(),te=$.database(),ae=new V.a.auth.GoogleAuthProvider,ne=new V.a.auth.GithubAuthProvider,re=function(){function e(){Object(Y.a)(this,e)}return Object(q.a)(e,[{key:"login",value:function(e){var t=this.getProvider(e);return ee.signInWithPopup(t)}},{key:"logout",value:function(){ee.signOut()}},{key:"onAuthChange",value:function(e){ee.onAuthStateChanged((function(t){e(t)}))}},{key:"getProvider",value:function(e){switch(e){case"Google":return ae;case"Github":return ne;default:throw new Error("not supported Provider: ".concat(e))}}}]),e}(),ce=a(21),ie=a.n(ce),oe=a(25),se=function(){function e(){Object(Y.a)(this,e)}return Object(q.a)(e,[{key:"upload",value:function(){var e=Object(oe.a)(ie.a.mark((function e(t){var a,n;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("file",t),a.append("upload_preset","iqhqvdfz"),e.next=5,fetch("https://api.cloudinary.com/v1_1/dzvotkila/upload",{method:"POST",body:a});case 5:return n=e.sent,e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),le=function(){function e(){Object(Y.a)(this,e)}return Object(q.a)(e,[{key:"syncCards",value:function(e,t){var a=te.ref("".concat(e,"/cards"));return a.on("value",(function(e){var a=e.val();a&&t(a)})),function(){return a.off()}}},{key:"saveCard",value:function(e,t){te.ref("".concat(e,"/cards/").concat(t.id)).set(t)}},{key:"removeCard",value:function(e,t){te.ref("".concat(e,"/cards/").concat(t.id)).remove()}}]),e}(),ue=a(18),de=a.n(ue),me=Object(r.memo)((function(e){var t=e.imageUploader,a=e.name,n=e.onFileChange,c=Object(r.useState)(!1),i=Object(u.a)(c,2),o=i[0],s=i[1],l=Object(r.useRef)(),d=function(){var e=Object(oe.a)(ie.a.mark((function e(a){var r;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,t.upload(a.target.files[0]);case 3:r=e.sent,s(!1),n({name:r.original_filename,url:r.url});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:de.a.container,children:[Object(p.jsx)("input",{ref:l,className:de.a.input,type:"file",accept:"image/*",name:"file",onChange:d}),!o&&Object(p.jsx)("button",{className:"".concat(de.a.button," ").concat(a?de.a.pink:de.a.grey),onClick:function(e){e.preventDefault(),l.current.click()},children:a||"No file"}),o&&Object(p.jsx)("div",{className:de.a.loading})]})})),je=new re,fe=new se,pe=new le,be=Object(r.memo)((function(e){return Object(p.jsx)(me,Object(n.a)(Object(n.a)({},e),{},{imageUploader:fe}))}));o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(Q,{authService:je,FileInput:be,cardRepository:pe})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.0a1578fd.chunk.js.map