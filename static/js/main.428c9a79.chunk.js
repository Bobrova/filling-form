(window["webpackJsonpfilling-form"]=window["webpackJsonpfilling-form"]||[]).push([[0],{1:function(t,e,a){t.exports={outputConteiner:"OutputForm_outputConteiner__1-F6J",output:"OutputForm_output__11KmZ",outputAdditionalInformation:"OutputForm_outputAdditionalInformation__3lwCv",outputPersonal__item:"OutputForm_outputPersonal__item__18DGx",outputText:"OutputForm_outputText__1YP0u",headline:"OutputForm_headline__2_5M7",outputPersonal:"OutputForm_outputPersonal__y_k6y",outputContacts:"OutputForm_outputContacts__2zZ4l"}},18:function(t,e,a){t.exports={inputContainer:"InputForm_inputContainer__2caIo"}},19:function(t,e,a){t.exports={page:"App_page__dog3n"}},22:function(t,e,a){t.exports=a(32)},32:function(t,e,a){"use strict";a.r(e);var n={};a.r(n),a.d(n,"setValue",function(){return s});var r=a(0),o=a.n(r),i=a(7),l=a(5),u=a(3),c="SET_VALUE",s=function(t){return{type:c,payload:t}},p=a(15),m=a(16),d=a(20),f=a(17),_=a(21),O={name:{title:"\u0418\u043c\u044f",type:"text"},surname:{title:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",type:"text"},address:{title:"\u0410\u0434\u0440\u0435\u0441",type:"text"},dateOfBirth:{title:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f",type:"text"},email:{title:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430",type:"email"},phone:{title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",type:"tel"},AdditionalInformation:{title:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f",type:"text"}},h=function(t){if(t.length>10)return"withoutChanges";var e=t.replace(/[^0-9.]/g,"").slice(0,10);if(0!==e.length){var a=e.replace(/(^\d{2})(\d{1,2})/,["$1","$2"].join("."));e=a.replace(/(^\d{2})(.\d{2})(\d$)/,["$1$2","$3"].join("."))}return e},x=a(6),E=a.n(x),g=function(t){function e(){var t,a;Object(p.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(r)))).handleInputChange=function(t){var e=a.props.setValue,n=t.target,r=n.value,o=n.name,i=r;"dateOfBirth"===o&&"withoutChanges"===(i=h(r))||e({title:o,text:i})},a}return Object(_.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){var t=this.props,e=t.name,a=t.error,n=t.value,r="";return"phone"===e&&(r="+7(___)___-__-__"),"dateOfBirth"===e&&(r="\u0434\u0434.\u043c\u043c.\u0433\u0433\u0433\u0433"),o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:e,className:E.a.fieldName},O[e].title),"AdditionalInformation"===e?o.a.createElement("textarea",{className:E.a.textareaText,name:e,id:e,onChange:this.handleInputChange,value:n}):o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{type:O[e].type,className:E.a.inputText,id:e,name:e,onChange:this.handleInputChange,value:n,placeholder:r}),o.a.createElement("p",{className:E.a.error},a)))}}]),e}(r.Component),v=a(18),y=a.n(v),b=function(t){var e=t.inputFieldList,a=t.actions.setValue;return o.a.createElement("div",{className:y.a.inputContainer},Object.values(e).map(function(t){return o.a.createElement(g,{key:t.title,name:t.title,setValue:a,error:t.error,value:t.text})}))},N=Object(l.b)(function(t){return{inputFieldList:t.fields,fullDate:t.fullDate}},function(t){return{actions:Object(u.a)(n,t)}})(b),j=a(1),I=a.n(j),w=function(t){var e=t.inputFieldList;return o.a.createElement("div",{className:I.a.outputConteiner},o.a.createElement("h2",{className:I.a.headline},"\u0417\u0430\u044f\u0432\u043a\u0430 \u043d\u0430 \u0447\u0442\u043e-\u0442\u043e"),o.a.createElement("div",{className:I.a.output},o.a.createElement("div",{className:I.a.outputPersonal},o.a.createElement("div",{className:I.a.outputPersonal__item},o.a.createElement("p",{className:I.a.outputText},e.name.text),o.a.createElement("p",{className:I.a.outputText},e.surname.text),o.a.createElement("p",{className:I.a.outputText},e.dateOfBirth.text)),o.a.createElement("div",{className:"".concat(I.a.outputPersonal__item," ").concat(I.a.outputContacts)},o.a.createElement("p",{className:I.a.outputText},e.phone.text),o.a.createElement("p",{className:I.a.outputText},e.email.text),o.a.createElement("p",{className:I.a.outputText},e.address.text))),o.a.createElement("div",{className:I.a.outputAdditionalInformation},o.a.createElement("p",{className:I.a.addInformation},"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f:"),o.a.createElement("p",{className:I.a.outputText},e.AdditionalInformation.text))))},C=Object(l.b)(function(t){return{inputFieldList:t.fields}},function(t){return{actions:Object(u.a)(n,t)}})(w),T=a(19),F=a.n(T);var P=function(){return o.a.createElement("section",{className:F.a.page},o.a.createElement(N,null),o.a.createElement(C,null))},A=a(12),S=function(){var t=localStorage.getItem("filling-form-3F");return!!t&&JSON.parse(t)}()||{fields:{name:{title:"name",text:"",error:""},surname:{title:"surname",text:"",error:""},address:{title:"address",text:"",error:""},dateOfBirth:{title:"dateOfBirth",text:"",error:""},email:{title:"email",text:"",error:""},phone:{title:"phone",text:"",error:""},AdditionalInformation:{title:"AdditionalInformation",text:"",error:""}}},D=function(t,e){if(""!==t){if("name"===e||"surname"===e)return/[A-Za-z]/.test(t)?"\u0422\u043e\u043b\u044c\u043a\u043e \u0440\u0443\u0441\u0441\u043a\u0438\u0435 \u0431\u0443\u043a\u0432\u044b":/\d/.test(t)?"\u041f\u043e\u043b\u0435 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b":/^[\u0430-\u044f]{1}/.test(t)?"\u0414\u043e\u043b\u0436\u043d\u043e \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0431\u0443\u043a\u0432\u044b":/^[\u0410-\u042f]+[\u0430-\u044f]?/.test(t)?"":"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435, \u0442\u043e\u043b\u044c\u043a\u043e \u0440\u0443\u0441\u0441\u043a\u0438\u0435 \u0431\u0443\u043a\u0432\u044b \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0435\u0441\u044f \u0441 \u0437\u0430\u0433\u043b\u0430\u0432\u043d\u043e\u0439.";if("dateOfBirth"===e)return/(0[1-9]|[12][0-9]|3[01])[- .](0[1-9]|1[012])[- .](19|20)\d\d/.test(t)?"":"\u041d\u0435\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0430\u044f \u0434\u0430\u0442\u0430";if("phone"===e)return/^\+7/.test(t)||/^8/.test(t)?/^[+]??\d[\d(\\) -]{4,13}\d$/.test(t)?"":"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0432\u0432\u043e\u0434":"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0432\u0432\u043e\u0434. \u0414\u043e\u043b\u0436\u043d\u043e \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +7 \u0438\u043b\u0438 8 \u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0446\u0438\u0444\u0440\u044b";if("email"===e)return/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(t)?" ":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 e-mail."}};function B(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)}return a}function $(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?B(a,!0).forEach(function(e){Object(A.a)(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):B(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var L=Object(u.b)(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c:return $({},t,{fields:$({},t.fields,Object(A.a)({},e.payload.title,$({},t.fields[e.payload.title],{text:e.payload.text,error:D(e.payload.text,e.payload.title)})))});default:return t}},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());L.subscribe(function(){localStorage.setItem("filling-form-3F",JSON.stringify(L.getState()))}),Object(i.render)(o.a.createElement(l.a,{store:L},o.a.createElement(P,null)),document.getElementById("root"))},6:function(t,e,a){t.exports={inputContainer:"Input_inputContainer__2sYwq",field:"Input_field__3pX03",fieldName:"Input_fieldName__3Mw29",inputText:"Input_inputText__K5ftC",textareaText:"Input_textareaText__ihj8f",error:"Input_error__3ebN8"}}},[[22,1,2]]]);
//# sourceMappingURL=main.428c9a79.chunk.js.map