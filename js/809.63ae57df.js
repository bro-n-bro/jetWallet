"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[809],{85868:function(e,a,t){t.d(a,{A:function(){return I}});var l=t(56768),n=t(24232),i=t(45130),s=t(90144),u=t(24113),o=t(76750),r=t(61981);const c=e=>((0,l.Qi)("data-v-4cace600"),e=e(),(0,l.jt)(),e),d=u+"#ic_biometric_face",v=u+"#ic_biometric_finger",p={class:"pin"},m={class:"field_label"},_={class:"field"},g={class:"field"},h=["disabled"],k={class:"field"},b=["disabled"],L={class:"field"},f=["disabled"],y={class:"field"},w=["disabled"],C={class:"field"},E=["disabled"],A={key:0,class:"warning"},K={key:0,class:"icon"},R=c((()=>(0,l.Lk)("use",{"xlink:href":d},null,-1))),X=[R],$={key:1,class:"icon"},x=c((()=>(0,l.Lk)("use",{"xlink:href":v},null,-1))),B=[x],W={class:"btns"},j={key:0},Q={key:1};var T={__name:"Auth",setup(e){const a=(0,o.o)(),t=(0,l.WQ)("emitter"),u=(0,s.KR)(["","","","","",""]),c=(0,s.KR)(""),d=(0,s.KR)(""),v=(0,s.KR)(!1),R=(0,s.KR)(a.authErrorLimit),x=(0,s.KR)(!1),T=(0,s.KR)(!1),D=(0,s.KR)("finger");function F(e,a){e.target.value.length>=1&&a<6&&e.target.closest(".row").querySelector(`.field:nth-child(${a+1}) input`).focus()}function I(e,a){setTimeout((()=>{0===e.target.value.length&&a>0&&e.target.closest(".row").querySelector(`.field:nth-child(${a}) input`).select()}))}function U(){Telegram.WebApp.isAccessGranted?M():Telegram.WebApp.BiometricManager.requestAccess({reason:""},(()=>M()))}function M(){Telegram.WebApp.BiometricManager.authenticate({reason:""},(e=>{e&&t.emit("auth")}))}async function J(){let e=await V();e?(R.value=a.authErrorLimit,t.emit("auth")):await q()}async function V(){let e=await(0,r.mK)(u.value.join(""),d.value);return e===c.value}async function q(){v.value=!0;let e=R.value-1;R.value=e,a.isAuthorized?e||t.emit("show_error_sign_tx_modal"):e?a.updateUserAuthErrorLimit(e):t.emit("show_error_auth_modal"),u.value=["","","","","",""],v.value=!1}(0,l.KC)((async()=>{let e=await a.getMultipleData(["pin","hmacKey","authErrorLimit","isBiometric"]);c.value=e.pin,d.value=e.hmacKey,R.value=e.authErrorLimit,x.value=e.isBiometric,T.value=Telegram.WebApp.BiometricManager.isBiometricAvailable,"unknown"!=Telegram.WebApp.BiometricManager.biometricType&&(D.value=Telegram.WebApp.BiometricManager.biometricType),T.value&&x.value&&U()})),(0,l.wB)(u.value,(()=>{u.value[5].length&&document.activeElement.blur(),u.value[5].length&&R.value===a.authErrorLimit&&J()}));const z=(0,l.EW)((()=>""!=u.value[5].length));return(e,t)=>((0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("div",p,[(0,l.Lk)("div",m,(0,n.v_)(e.$t("message.auth_enter_pin_label")),1),(0,l.Lk)("div",{class:(0,n.C4)(["row",{error:v.value}])},[(0,l.Lk)("div",_,[(0,l.bo)((0,l.Lk)("input",{type:"password",class:(0,n.C4)(["input big",{active:u.value[0].length}]),"onUpdate:modelValue":t[0]||(t[0]=e=>u.value[0]=e),maxlength:"1",inputmode:"numeric",ref:"inputRef",onInput:t[1]||(t[1]=e=>F(e,1)),onKeydown:t[2]||(t[2]=(0,i.jR)((e=>I(e,0)),["backspace"]))},null,34),[[i.Jo,u.value[0]]])]),(0,l.Lk)("div",g,[(0,l.bo)((0,l.Lk)("input",{type:"password",class:(0,n.C4)(["input big",{active:u.value[1].length}]),"onUpdate:modelValue":t[3]||(t[3]=e=>u.value[1]=e),maxlength:"1",inputmode:"numeric",disabled:!u.value[0].length,onInput:t[4]||(t[4]=e=>F(e,2)),onKeydown:t[5]||(t[5]=(0,i.jR)((e=>I(e,1)),["backspace"]))},null,42,h),[[i.Jo,u.value[1]]])]),(0,l.Lk)("div",k,[(0,l.bo)((0,l.Lk)("input",{type:"password",class:(0,n.C4)(["input big",{active:u.value[2].length}]),"onUpdate:modelValue":t[6]||(t[6]=e=>u.value[2]=e),maxlength:"1",inputmode:"numeric",disabled:!u.value[1].length,onInput:t[7]||(t[7]=e=>F(e,3)),onKeydown:t[8]||(t[8]=(0,i.jR)((e=>I(e,2)),["backspace"]))},null,42,b),[[i.Jo,u.value[2]]])]),(0,l.Lk)("div",L,[(0,l.bo)((0,l.Lk)("input",{type:"password",class:(0,n.C4)(["input big",{active:u.value[3].length}]),"onUpdate:modelValue":t[9]||(t[9]=e=>u.value[3]=e),maxlength:"1",inputmode:"numeric",disabled:!u.value[2].length,onInput:t[10]||(t[10]=e=>F(e,4)),onKeydown:t[11]||(t[11]=(0,i.jR)((e=>I(e,3)),["backspace"]))},null,42,f),[[i.Jo,u.value[3]]])]),(0,l.Lk)("div",y,[(0,l.bo)((0,l.Lk)("input",{type:"password",class:(0,n.C4)(["input big",{active:u.value[4].length}]),"onUpdate:modelValue":t[12]||(t[12]=e=>u.value[4]=e),maxlength:"1",inputmode:"numeric",disabled:!u.value[3].length,onInput:t[13]||(t[13]=e=>F(e,5)),onKeydown:t[14]||(t[14]=(0,i.jR)((e=>I(e,4)),["backspace"]))},null,42,w),[[i.Jo,u.value[4]]])]),(0,l.Lk)("div",C,[(0,l.bo)((0,l.Lk)("input",{type:"password",class:(0,n.C4)(["input big",{active:u.value[5].length}]),"onUpdate:modelValue":t[15]||(t[15]=e=>u.value[5]=e),maxlength:"1",inputmode:"numeric",disabled:!u.value[4].length,onInput:t[16]||(t[16]=e=>F(e,6)),onKeydown:t[17]||(t[17]=(0,i.jR)((e=>I(e,5)),["backspace"]))},null,42,E),[[i.Jo,u.value[5]]])])],2),R.value<(0,s.R1)(a).authErrorLimit?((0,l.uX)(),(0,l.CE)("div",A,(0,n.v_)(e.$t("message.auth_error_warning",{count:R.value})),1)):(0,l.Q3)("",!0)]),T.value&&R.value==(0,s.R1)(a).authErrorLimit?((0,l.uX)(),(0,l.CE)("button",{key:0,class:"biometric_btn",onClick:(0,i.D$)(U,["prevent"])},[(0,l.Lk)("span",null,(0,n.v_)(e.$t("message.btn_biometric2")),1),"face"===e.biometrictype?((0,l.uX)(),(0,l.CE)("svg",K,X)):((0,l.uX)(),(0,l.CE)("svg",$,B))])):(0,l.Q3)("",!0),(0,l.Lk)("div",W,[R.value<(0,s.R1)(a).authErrorLimit?((0,l.uX)(),(0,l.CE)("button",{key:0,class:(0,n.C4)(["btn",{disabled:!z.value}]),onClick:t[18]||(t[18]=(0,i.D$)((e=>J()),["prevent"]))},[(0,s.R1)(a).isAuthorized?((0,l.uX)(),(0,l.CE)("span",j,(0,n.v_)(e.$t("message.btn_sign")),1)):((0,l.uX)(),(0,l.CE)("span",Q,(0,n.v_)(e.$t("message.btn_login")),1))],2)):(0,l.Q3)("",!0)])],64))}},D=t(71241);const F=(0,D.A)(T,[["__scopeId","data-v-4cace600"]]);var I=F},17086:function(e,a,t){t.d(a,{A:function(){return d}});var l=t(56768);const n={class:"loader_wrap"},i=(0,l.Lk)("div",{class:"loader"},[(0,l.Lk)("span")],-1),s=[i];function u(e,a){return(0,l.uX)(),(0,l.CE)("div",n,s)}var o=t(71241);const r={},c=(0,o.A)(r,[["render",u]]);var d=c},6809:function(e,a,t){t.r(a),t.d(a,{default:function(){return Q}});t(44114);var l=t(56768),n=t(24232),i=t(45130),s=t(90144),u=t(76750),o=t(81387),r=t(85868),c=t(24113),d=t(17086);const v=c+"#ic_close",p={class:"modal"},m={class:"modal_content"},_={class:"data"},g=(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":v})],-1),h={class:"modal_title"},k={class:"modal_desc"},b={class:"btns"};var L={__name:"AuthErrorModal",setup(e){const a=(0,u.o)(),t=(0,s.KR)(!0);return(0,l.KC)((async()=>{await a.clearAllData(),t.value=!1})),(e,a)=>{const i=(0,l.g2)("router-link");return(0,l.uX)(),(0,l.CE)("section",p,[(0,l.Lk)("div",m,[(0,l.Lk)("div",_,[t.value?((0,l.uX)(),(0,l.Wv)(d.A,{key:0})):((0,l.uX)(),(0,l.CE)(l.FK,{key:1},[(0,l.bF)(i,{to:"/",class:"close_btn"},{default:(0,l.k6)((()=>[g])),_:1}),(0,l.Lk)("div",h,(0,n.v_)(e.$t("message.auth_error_title")),1),(0,l.Lk)("div",k,(0,n.v_)(e.$t("message.auth_error_desc")),1),(0,l.Lk)("div",b,[(0,l.bF)(i,{to:"/import_wallet",class:"btn"},{default:(0,l.k6)((()=>[(0,l.Lk)("span",null,(0,n.v_)(e.$t("message.btn_import_existing_wallet")),1)])),_:1})])],64))])])])}}};const f=L;var y=f;const w=e=>((0,l.Qi)("data-v-59056eac"),e=e(),(0,l.jt)(),e),C={class:"page_container auth_page"},E={class:"cont"},A={class:"page_title"},K={class:"page_data_wrap"},R={class:"page_data"},X={class:"btns"},$=w((()=>(0,l.Lk)("span",null,"Delete address",-1))),x=[$];var B={__name:"AuthPage",setup(e){const a=(0,u.o)(),t=(0,o.rd)(),c=(0,l.WQ)("emitter"),d=(0,s.KR)(!1);async function v(){await a.clearAllData(),t.push("/")}return(0,l.hi)((()=>{c.off("auth"),c.off("show_error_auth_modal")})),c.on("auth",(()=>{a.updateUserAuthErrorLimit(a.authErrorLimit),a.isAuthorized=!0,t.push("/account")})),c.on("show_error_auth_modal",(()=>{d.value=!0})),(e,a)=>((0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("section",C,[(0,l.Lk)("div",E,[(0,l.Lk)("div",A,(0,n.v_)(e.$t("message.auth_title")),1),(0,l.Lk)("div",K,[(0,l.Lk)("div",R,[(0,l.bF)(r.A),(0,l.Lk)("div",X,[(0,l.Lk)("button",{class:"btn",onClick:a[0]||(a[0]=(0,i.D$)((e=>v()),["prevent"]))},x)])])])])]),(0,l.bF)(i.eB,{name:"modal"},{default:(0,l.k6)((()=>[d.value?((0,l.uX)(),(0,l.Wv)(y,{key:0})):(0,l.Q3)("",!0)])),_:1}),(0,l.bF)(i.eB,{name:"fade"},{default:(0,l.k6)((()=>[d.value?((0,l.uX)(),(0,l.CE)("div",{key:0,class:"modal_overlay",onClick:a[1]||(a[1]=(0,i.D$)((e=>(0,s.R1)(c).emit("close_any_modal")),["prevent"]))})):(0,l.Q3)("",!0)])),_:1})],64))}},W=t(71241);const j=(0,W.A)(B,[["__scopeId","data-v-59056eac"]]);var Q=j}}]);
//# sourceMappingURL=809.63ae57df.js.map