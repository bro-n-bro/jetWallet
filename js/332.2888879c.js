"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[332],{81683:function(e,a,t){t.d(a,{A:function(){return M}});var l=t(56768),n=t(24232),i=t(90144),u=t(45130),o=t(24113),s=t(76750),r=t(61981);const c=e=>((0,l.Qi)("data-v-3afdd748"),e=e(),(0,l.jt)(),e),d=o+"#ic_biometric_face",v=o+"#ic_biometric_finger",m={class:"pin"},p={class:"field_label"},h={class:"field"},_={class:"field"},k=["disabled"],b={class:"field"},g=["disabled"],y={class:"field"},L=["disabled"],f={class:"field"},w=["disabled"],R={class:"field"},C=["disabled"],E={key:0,class:"warning"},A={key:0,class:"icon"},K=c((()=>(0,l.Lk)("use",{"xlink:href":d},null,-1))),B=[K],X={key:1,class:"icon"},$=c((()=>(0,l.Lk)("use",{"xlink:href":v},null,-1))),x=[$],F={class:"btns"},W={key:0},T={key:1};var j={__name:"Auth",setup(e){const a=(0,s.o)(),t=(0,l.WQ)("emitter"),o=(0,i.KR)(["","","","","",""]),c=(0,i.KR)(""),d=(0,i.KR)(""),v=(0,i.KR)(!1),K=(0,i.KR)(a.authErrorLimit),$=(0,i.KR)(!1),j=(0,i.KR)(!1),U=(0,i.KR)("finger");function I(e,a){e.target.value.length>=1&&a<6&&e.target.closest(".row").querySelector(`.field:nth-child(${a+1}) input`).focus()}function M(e,a){setTimeout((()=>{0===e.target.value.length&&a>0&&e.target.closest(".row").querySelector(`.field:nth-child(${a}) input`).select()}))}function Q(){Telegram.WebApp.isAccessGranted?D():Telegram.WebApp.BiometricManager.requestAccess({reason:"Наш текст"},(()=>D()))}function D(){Telegram.WebApp.BiometricManager.authenticate({reason:"Наш текст"},(e=>{e&&t.emit("auth")}))}async function J(){let e=await V();e?(K.value=a.authErrorLimit,t.emit("auth")):await q()}async function V(){let e=await(0,r.mK)(o.value.join(""),d.value);return e===c.value}async function q(){v.value=!0;let e=K.value-1;K.value=e,a.isAuthorized?e||t.emit("show_error_sign_tx_modal"):e?a.updateUserAuthErrorLimit(e):t.emit("show_error_auth_modal"),o.value=["","","","","",""],v.value=!1}(0,l.KC)((async()=>{let e=await a.getMultipleData(["pin","hmacKey","authErrorLimit","isBiometric"]);c.value=e.pin,d.value=e.hmacKey,K.value=e.authErrorLimit,$.value=e.isBiometric,j.value=Telegram.WebApp.BiometricManager.isBiometricAvailable,"unknown"!=Telegram.WebApp.BiometricManager.biometricType&&(U.value=Telegram.WebApp.BiometricManager.biometricType),j.value&&$.value&&Q()})),(0,l.wB)(o.value,(()=>{o.value[5].length&&document.activeElement.blur(),o.value[5].length&&K.value===a.authErrorLimit&&J()}));const z=(0,l.EW)((()=>""!=o.value[5].length));return(e,s)=>((0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("div",m,[(0,l.Lk)("div",p,(0,n.v_)(e.$t("message.auth_enter_pin_label")),1),(0,l.Lk)("div",{class:(0,n.C4)(["row",{error:v.value}])},[(0,l.Lk)("div",h,[(0,l.bo)((0,l.Lk)("input",{type:"password",class:(0,n.C4)(["input big",{active:o.value[0].length}]),"onUpdate:modelValue":s[0]||(s[0]=e=>o.value[0]=e),maxlength:"1",inputmode:"numeric",ref:"inputRef",onFocus:s[1]||(s[1]=e=>(0,i.R1)(t).emit("show_keyboard")),onBlur:s[2]||(s[2]=e=>(0,i.R1)(t).emit("hide_keyboard")),onInput:s[3]||(s[3]=e=>I(e,1)),onKeydown:s[4]||(s[4]=(0,u.jR)((e=>M(e,0)),["backspace"]))},null,34),[[u.Jo,o.value[0]]])]),(0,l.Lk)("div",_,[(0,l.bo)((0,l.Lk)("input",{type:"password",class:(0,n.C4)(["input big",{active:o.value[1].length}]),"onUpdate:modelValue":s[5]||(s[5]=e=>o.value[1]=e),maxlength:"1",inputmode:"numeric",disabled:!o.value[0].length,onFocus:s[6]||(s[6]=e=>(0,i.R1)(t).emit("show_keyboard")),onBlur:s[7]||(s[7]=e=>(0,i.R1)(t).emit("hide_keyboard")),onInput:s[8]||(s[8]=e=>I(e,2)),onKeydown:s[9]||(s[9]=(0,u.jR)((e=>M(e,1)),["backspace"]))},null,42,k),[[u.Jo,o.value[1]]])]),(0,l.Lk)("div",b,[(0,l.bo)((0,l.Lk)("input",{type:"password",class:(0,n.C4)(["input big",{active:o.value[2].length}]),"onUpdate:modelValue":s[10]||(s[10]=e=>o.value[2]=e),maxlength:"1",inputmode:"numeric",disabled:!o.value[1].length,onFocus:s[11]||(s[11]=e=>(0,i.R1)(t).emit("show_keyboard")),onBlur:s[12]||(s[12]=e=>(0,i.R1)(t).emit("hide_keyboard")),onInput:s[13]||(s[13]=e=>I(e,3)),onKeydown:s[14]||(s[14]=(0,u.jR)((e=>M(e,2)),["backspace"]))},null,42,g),[[u.Jo,o.value[2]]])]),(0,l.Lk)("div",y,[(0,l.bo)((0,l.Lk)("input",{type:"password",class:(0,n.C4)(["input big",{active:o.value[3].length}]),"onUpdate:modelValue":s[15]||(s[15]=e=>o.value[3]=e),maxlength:"1",inputmode:"numeric",disabled:!o.value[2].length,onFocus:s[16]||(s[16]=e=>(0,i.R1)(t).emit("show_keyboard")),onBlur:s[17]||(s[17]=e=>(0,i.R1)(t).emit("hide_keyboard")),onInput:s[18]||(s[18]=e=>I(e,4)),onKeydown:s[19]||(s[19]=(0,u.jR)((e=>M(e,3)),["backspace"]))},null,42,L),[[u.Jo,o.value[3]]])]),(0,l.Lk)("div",f,[(0,l.bo)((0,l.Lk)("input",{type:"password",class:(0,n.C4)(["input big",{active:o.value[4].length}]),"onUpdate:modelValue":s[20]||(s[20]=e=>o.value[4]=e),maxlength:"1",inputmode:"numeric",disabled:!o.value[3].length,onFocus:s[21]||(s[21]=e=>(0,i.R1)(t).emit("show_keyboard")),onBlur:s[22]||(s[22]=e=>(0,i.R1)(t).emit("hide_keyboard")),onInput:s[23]||(s[23]=e=>I(e,5)),onKeydown:s[24]||(s[24]=(0,u.jR)((e=>M(e,4)),["backspace"]))},null,42,w),[[u.Jo,o.value[4]]])]),(0,l.Lk)("div",R,[(0,l.bo)((0,l.Lk)("input",{type:"password",class:(0,n.C4)(["input big",{active:o.value[5].length}]),"onUpdate:modelValue":s[25]||(s[25]=e=>o.value[5]=e),maxlength:"1",inputmode:"numeric",disabled:!o.value[4].length,onFocus:s[26]||(s[26]=e=>(0,i.R1)(t).emit("show_keyboard")),onBlur:s[27]||(s[27]=e=>(0,i.R1)(t).emit("hide_keyboard")),onInput:s[28]||(s[28]=e=>I(e,6)),onKeydown:s[29]||(s[29]=(0,u.jR)((e=>M(e,5)),["backspace"]))},null,42,C),[[u.Jo,o.value[5]]])])],2),K.value<(0,i.R1)(a).authErrorLimit?((0,l.uX)(),(0,l.CE)("div",E,(0,n.v_)(e.$t("message.auth_error_warning",{count:K.value})),1)):(0,l.Q3)("",!0)]),j.value&&K.value==(0,i.R1)(a).authErrorLimit?((0,l.uX)(),(0,l.CE)("button",{key:0,class:"biometric_btn",onClick:(0,u.D$)(Q,["prevent"])},[(0,l.Lk)("span",null,(0,n.v_)(e.$t("message.btn_biometric2")),1),"face"===e.biometrictype?((0,l.uX)(),(0,l.CE)("svg",A,B)):((0,l.uX)(),(0,l.CE)("svg",X,x))])):(0,l.Q3)("",!0),(0,l.Lk)("div",F,[K.value<(0,i.R1)(a).authErrorLimit?((0,l.uX)(),(0,l.CE)("button",{key:0,class:(0,n.C4)(["btn",{disabled:!z.value}]),onClick:s[30]||(s[30]=(0,u.D$)((e=>J()),["prevent"]))},[(0,i.R1)(a).isAuthorized?((0,l.uX)(),(0,l.CE)("span",W,(0,n.v_)(e.$t("message.btn_sign")),1)):((0,l.uX)(),(0,l.CE)("span",T,(0,n.v_)(e.$t("message.btn_login")),1))],2)):(0,l.Q3)("",!0)])],64))}},U=t(71241);const I=(0,U.A)(j,[["__scopeId","data-v-3afdd748"]]);var M=I},89114:function(e,a,t){t.d(a,{A:function(){return d}});var l=t(56768);const n={class:"loader_wrap"},i=(0,l.Lk)("div",{class:"loader"},[(0,l.Lk)("span")],-1),u=[i];function o(e,a){return(0,l.uX)(),(0,l.CE)("div",n,u)}var s=t(71241);const r={},c=(0,s.A)(r,[["render",o]]);var d=c},98332:function(e,a,t){t.r(a),t.d(a,{default:function(){return $}});t(44114);var l=t(56768),n=t(24232),i=t(45130),u=t(90144),o=t(76750),s=t(81387),r=t(81683),c=t(24113),d=t(89114);const v=c+"#ic_close",m={class:"modal"},p={class:"modal_content"},h={class:"data"},_=(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":v})],-1),k={class:"modal_title"},b={class:"modal_desc"},g={class:"btns"},y=(0,l.Lk)("div",{class:"overlay"},null,-1);var L={__name:"AuthErrorModal",setup(e){const a=(0,o.o)(),t=(0,u.KR)(!0);return(0,l.KC)((async()=>{await a.clearAllData(),t.value=!1})),(e,a)=>{const i=(0,l.g2)("router-link");return(0,l.uX)(),(0,l.CE)("section",m,[(0,l.Lk)("div",p,[(0,l.Lk)("div",h,[t.value?((0,l.uX)(),(0,l.Wv)(d.A,{key:0})):((0,l.uX)(),(0,l.CE)(l.FK,{key:1},[(0,l.bF)(i,{to:"/",class:"close_btn"},{default:(0,l.k6)((()=>[_])),_:1}),(0,l.Lk)("div",k,(0,n.v_)(e.$t("message.auth_error_title")),1),(0,l.Lk)("div",b,(0,n.v_)(e.$t("message.auth_error_desc")),1),(0,l.Lk)("div",g,[(0,l.bF)(i,{to:"/import_wallet",class:"btn"},{default:(0,l.k6)((()=>[(0,l.Lk)("span",null,(0,n.v_)(e.$t("message.btn_import_existing_wallet")),1)])),_:1})])],64))])]),y])}}};const f=L;var w=f;const R={class:"page_container auth_page"},C={class:"cont"},E={class:"page_title"},A={class:"page_data_wrap"},K={class:"page_data"};var B={__name:"AuthPage",setup(e){const a=(0,o.o)(),t=(0,s.rd)(),c=(0,l.WQ)("emitter"),d=(0,u.KR)(!1);async function v(){await a.clearAllData(),t.push("/")}return(0,l.hi)((()=>{c.off("auth"),c.off("show_error_auth_modal")})),c.on("auth",(()=>{a.updateUserAuthErrorLimit(a.authErrorLimit),a.isAuthorized=!0,t.push("/account")})),c.on("show_error_auth_modal",(()=>d.value=!0)),(e,a)=>((0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("section",R,[(0,l.Lk)("div",C,[(0,l.Lk)("div",E,(0,n.v_)(e.$t("message.auth_title")),1),(0,l.Lk)("div",A,[(0,l.Lk)("div",K,[(0,l.bF)(r.A),(0,l.Lk)("button",{onClick:(0,i.D$)(v,["prevent"]),style:{margin:"20px auto 0",width:"70px"}},"Удалить всё")])])])]),d.value?((0,l.uX)(),(0,l.Wv)(w,{key:0})):(0,l.Q3)("",!0)],64))}};const X=B;var $=X}}]);
//# sourceMappingURL=332.2888879c.js.map