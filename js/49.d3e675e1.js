"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[49],{6113:function(e,a,l){l.r(a),l.d(a,{default:function(){return ne}});l(4114);var n=l(6768),s=l(4232),t=l(5130),i=l(4113),u=l(144),o=l(1387),d=l(1981),c=l(6571),p=l(5129),v=l(9114);const r=e=>((0,n.Qi)("data-v-030f61ee"),e=e(),(0,n.jt)(),e),b=i+"#ic_biometric",m={class:"page_container careate_pin_page"},g={class:"cont"},k={class:"page_title"},L={class:"page_data_wrap"},_={class:"page_data"},h={class:"wallet_name"},w={class:"label"},y={class:"field"},f=["placeholder"],K={class:"pin"},R={class:"label"},j={class:"row"},x={class:"field"},I={class:"field"},V=["disabled"],J={class:"field"},U=["disabled"],$={class:"field"},C=["disabled"],A={class:"field"},W=["disabled"],B={class:"field"},T=["disabled"],M={class:"pin"},Q={class:"label"},q={class:"field"},E=["disabled"],D={class:"field"},P=["disabled"],S={class:"field"},X=["disabled"],z={class:"field"},F=["disabled"],G={class:"field"},H=["disabled"],N={class:"field"},O=["disabled"],Y=r((()=>(0,n.Lk)("svg",{class:"icon"},[(0,n.Lk)("use",{"xlink:href":b})],-1))),Z={class:"btns"};var ee={__name:"CreatePinPage",setup(e){const a=(0,o.rd)(),l=(0,u.KR)(!0),i=(0,u.KR)(""),r=(0,u.KR)(!1),b=(0,u.KR)(!1),ee=(0,u.KR)(["","","","","",""]),ae=(0,u.KR)(["","","","","",""]),le=(0,u.KR)(!1),{isAuthorized:ne}=(0,p.Q)();function se(){i.value.trim().length?r.value=!0:r.value=!1,b.value=!0}function te(e,a){e.target.value.length>=1&&a<6&&e.target.closest(".row").querySelector(`.field:nth-child(${a+1}) input`).focus()}function ie(e,a){setTimeout((()=>{0===e.target.value.length&&a>0&&e.target.closest(".row").querySelector(`.field:nth-child(${a}) input`).select()}))}(0,n.KC)((async()=>{l.value=!1})),(0,n.sV)((async()=>{le.value=await Telegram.WebApp.BiometricManager.isBiometricAvailable}));const ue=(0,n.EW)((()=>ee.value.join("")===ae.value.join(""))),oe=(0,n.EW)((()=>""!=ae.value[5].length&&ue.value&&r.value));async function de(){Telegram.WebApp.BiometricManager.isInited||Telegram.WebApp.BiometricManager.init((async()=>{Telegram.WebApp.BiometricManager.requestAccess({reason:"Наш текст"},((e,a)=>{alert(e,a)}))}))}async function ce(){l.value=!0;let e=await(0,d.Q1)();await(0,c.ys)("wallet",[["hmacKey",e],["pin",await(0,d.mK)(ee.value.join(""),e)],["name",i.value],["isRegister",!0]]),ne.value=!0,a.push("/wallet_created")}return(e,a)=>((0,n.uX)(),(0,n.CE)("section",m,[(0,n.Lk)("div",g,[(0,n.Lk)("div",k,(0,s.v_)(e.$t("message.create_pin_title")),1),(0,n.Lk)("div",L,[(0,n.Lk)("div",_,[l.value?((0,n.uX)(),(0,n.Wv)(v.A,{key:0})):(0,n.Q3)("",!0),(0,n.Lk)("div",h,[(0,n.Lk)("div",w,(0,s.v_)(e.$t("message.create_pin_wallet_name_label")),1),(0,n.Lk)("div",y,[(0,n.bo)((0,n.Lk)("input",{type:"text",class:(0,s.C4)(["input big",{error:!r.value&&b.value,success:r.value&&b.value}]),"onUpdate:modelValue":a[0]||(a[0]=e=>i.value=e),placeholder:e.$t("message.create_pin_wallet_name_placeholder"),onInput:se},null,42,f),[[t.Jo,i.value]])])]),(0,n.Lk)("div",K,[(0,n.Lk)("div",R,(0,s.v_)(e.$t("message.create_pin_create_pin_label")),1),(0,n.Lk)("div",j,[(0,n.Lk)("div",x,[(0,n.bo)((0,n.Lk)("input",{type:"password",class:"input big","onUpdate:modelValue":a[1]||(a[1]=e=>ee.value[0]=e),maxlength:"1",inputmode:"numeric",onInput:a[2]||(a[2]=e=>te(e,1)),onKeydown:a[3]||(a[3]=(0,t.jR)((e=>ie(e,0)),["backspace"]))},null,544),[[t.Jo,ee.value[0]]])]),(0,n.Lk)("div",I,[(0,n.bo)((0,n.Lk)("input",{type:"password",class:"input big","onUpdate:modelValue":a[4]||(a[4]=e=>ee.value[1]=e),maxlength:"1",inputmode:"numeric",disabled:!ee.value[0].length,onInput:a[5]||(a[5]=e=>te(e,2)),onKeydown:a[6]||(a[6]=(0,t.jR)((e=>ie(e,1)),["backspace"]))},null,40,V),[[t.Jo,ee.value[1]]])]),(0,n.Lk)("div",J,[(0,n.bo)((0,n.Lk)("input",{type:"password",class:"input big","onUpdate:modelValue":a[7]||(a[7]=e=>ee.value[2]=e),maxlength:"1",inputmode:"numeric",disabled:!ee.value[1].length,onInput:a[8]||(a[8]=e=>te(e,3)),onKeydown:a[9]||(a[9]=(0,t.jR)((e=>ie(e,2)),["backspace"]))},null,40,U),[[t.Jo,ee.value[2]]])]),(0,n.Lk)("div",$,[(0,n.bo)((0,n.Lk)("input",{type:"password",class:"input big","onUpdate:modelValue":a[10]||(a[10]=e=>ee.value[3]=e),maxlength:"1",inputmode:"numeric",disabled:!ee.value[2].length,onInput:a[11]||(a[11]=e=>te(e,4)),onKeydown:a[12]||(a[12]=(0,t.jR)((e=>ie(e,3)),["backspace"]))},null,40,C),[[t.Jo,ee.value[3]]])]),(0,n.Lk)("div",A,[(0,n.bo)((0,n.Lk)("input",{type:"password",class:"input big","onUpdate:modelValue":a[13]||(a[13]=e=>ee.value[4]=e),maxlength:"1",inputmode:"numeric",disabled:!ee.value[3].length,onInput:a[14]||(a[14]=e=>te(e,5)),onKeydown:a[15]||(a[15]=(0,t.jR)((e=>ie(e,4)),["backspace"]))},null,40,W),[[t.Jo,ee.value[4]]])]),(0,n.Lk)("div",B,[(0,n.bo)((0,n.Lk)("input",{type:"password",class:"input big","onUpdate:modelValue":a[16]||(a[16]=e=>ee.value[5]=e),maxlength:"1",inputmode:"numeric",disabled:!ee.value[4].length,onInput:a[17]||(a[17]=e=>te(e,6)),onKeydown:a[18]||(a[18]=(0,t.jR)((e=>ie(e,5)),["backspace"]))},null,40,T),[[t.Jo,ee.value[5]]])])])]),(0,n.Lk)("div",M,[(0,n.Lk)("div",Q,(0,s.v_)(e.$t("message.create_pin_confirm_pin_label")),1),(0,n.Lk)("div",{class:(0,s.C4)(["row",{error:ae.value[5].length&&!ue.value,success:ae.value[5].length&&ue.value}])},[(0,n.Lk)("div",q,[(0,n.bo)((0,n.Lk)("input",{type:"password",class:"input big","onUpdate:modelValue":a[19]||(a[19]=e=>ae.value[0]=e),maxlength:"1",inputmode:"numeric",disabled:!ee.value[3].length,onInput:a[20]||(a[20]=e=>te(e,1)),onKeydown:a[21]||(a[21]=(0,t.jR)((e=>ie(e,0)),["backspace"]))},null,40,E),[[t.Jo,ae.value[0]]])]),(0,n.Lk)("div",D,[(0,n.bo)((0,n.Lk)("input",{type:"password",class:"input big","onUpdate:modelValue":a[22]||(a[22]=e=>ae.value[1]=e),maxlength:"1",inputmode:"numeric",disabled:!ae.value[0].length,onInput:a[23]||(a[23]=e=>te(e,2)),onKeydown:a[24]||(a[24]=(0,t.jR)((e=>ie(e,1)),["backspace"]))},null,40,P),[[t.Jo,ae.value[1]]])]),(0,n.Lk)("div",S,[(0,n.bo)((0,n.Lk)("input",{type:"password",class:"input big","onUpdate:modelValue":a[25]||(a[25]=e=>ae.value[2]=e),maxlength:"1",inputmode:"numeric",disabled:!ae.value[1].length,onInput:a[26]||(a[26]=e=>te(e,3)),onKeydown:a[27]||(a[27]=(0,t.jR)((e=>ie(e,2)),["backspace"]))},null,40,X),[[t.Jo,ae.value[2]]])]),(0,n.Lk)("div",z,[(0,n.bo)((0,n.Lk)("input",{type:"password",class:"input big","onUpdate:modelValue":a[28]||(a[28]=e=>ae.value[3]=e),maxlength:"1",inputmode:"numeric",disabled:!ae.value[2].length,onInput:a[29]||(a[29]=e=>te(e,4)),onKeydown:a[30]||(a[30]=(0,t.jR)((e=>ie(e,3)),["backspace"]))},null,40,F),[[t.Jo,ae.value[3]]])]),(0,n.Lk)("div",G,[(0,n.bo)((0,n.Lk)("input",{type:"password",class:"input big","onUpdate:modelValue":a[31]||(a[31]=e=>ae.value[4]=e),maxlength:"1",inputmode:"numeric",disabled:!ae.value[3].length,onInput:a[32]||(a[32]=e=>te(e,5)),onKeydown:a[33]||(a[33]=(0,t.jR)((e=>ie(e,4)),["backspace"]))},null,40,H),[[t.Jo,ae.value[4]]])]),(0,n.Lk)("div",N,[(0,n.bo)((0,n.Lk)("input",{type:"password",class:"input big","onUpdate:modelValue":a[34]||(a[34]=e=>ae.value[5]=e),maxlength:"1",inputmode:"numeric",disabled:!ae.value[4].length,onInput:a[35]||(a[35]=e=>te(e,6)),onKeydown:a[36]||(a[36]=(0,t.jR)((e=>ie(e,5)),["backspace"]))},null,40,O),[[t.Jo,ae.value[5]]])])],2)]),(0,n.Lk)("button",{class:"biometric_btn",onClick:(0,t.D$)(de,["prevent"])},[Y,(0,n.Lk)("span",null,(0,s.v_)(e.$t("message.btn_biometric")),1)]),(0,n.Lk)("div",Z,[(0,n.Lk)("button",{class:(0,s.C4)(["btn",{disabled:!oe.value}]),onClick:(0,t.D$)(ce,["prevent"])},[(0,n.Lk)("span",null,(0,s.v_)(e.$t("message.btn_next")),1)],2)])])])])]))}},ae=l(1241);const le=(0,ae.A)(ee,[["__scopeId","data-v-030f61ee"]]);var ne=le}}]);
//# sourceMappingURL=49.d3e675e1.js.map