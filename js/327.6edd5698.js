"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[327],{4795:function(e,a,l){l.r(a),l.d(a,{default:function(){return se}});l(4114);var n=l(6768),s=l(4232),t=l(5130),i=l(4113),u=l(144),d=l(1387),o=l(1981),c=l(6571),p=l(5129),v=l(2035),r=l(9114);const b=e=>((0,n.Qi)("data-v-169bd78a"),e=e(),(0,n.jt)(),e),m=i+"#ic_biometric",g={class:"page_container careate_pin_page"},k={class:"cont"},L={class:"page_title"},_={class:"page_data_wrap"},h={class:"page_data"},w={class:"wallet_name"},y={class:"label"},f={class:"field"},K=["placeholder"],R={class:"pin"},j={class:"label"},x={class:"row"},I={class:"field"},V={class:"field"},J=["disabled"],U={class:"field"},$=["disabled"],C={class:"field"},A=["disabled"],Q={class:"field"},W=["disabled"],B={class:"field"},E=["disabled"],q={class:"pin"},D={class:"label"},P={class:"field"},S=["disabled"],T={class:"field"},X=["disabled"],z={class:"field"},H=["disabled"],M={class:"field"},F=["disabled"],G={class:"field"},N=["disabled"],O={class:"field"},Y=["disabled"],Z=b((()=>(0,n.Lk)("svg",{class:"icon"},[(0,n.Lk)("use",{"xlink:href":m})],-1))),ee={class:"btns"};var ae={__name:"CreatePinPage",setup(e){const a=(0,d.rd)(),l=(0,u.KR)(!0),i=(0,u.KR)(""),b=(0,u.KR)(!1),m=(0,u.KR)(!1),ae=(0,u.KR)(["","","","","",""]),le=(0,u.KR)(["","","","","",""]),ne=(0,u.KR)(!1),{isAuthorized:se}=(0,p.Q)();function te(){i.value.trim().length?b.value=!0:b.value=!1,m.value=!0}function ie(e,a){e.target.value.length>=1&&a<6&&e.target.closest(".row").querySelector(`.field:nth-child(${a+1}) input`).focus()}function ue(e,a){setTimeout((()=>{0===e.target.value.length&&a>0&&e.target.closest(".row").querySelector(`.field:nth-child(${a}) input`).select()}))}(0,n.KC)((async()=>{l.value=!1})),(0,n.sV)((async()=>{ne.value=await Telegram.WebApp.BiometricManager.isBiometricAvailable}));const de=(0,n.EW)((()=>ae.value.join("")===le.value.join(""))),oe=(0,n.EW)((()=>""!=le.value[5].length&&de.value&&b.value));async function ce(){let e=(0,v.nH)(),a=(0,v.Kw)();e.ready(),alert(a.isBiometricAvailable.value)}async function pe(){l.value=!0;let e=await(0,o.Q1)();await(0,c.ys)("wallet",[["hmacKey",e],["pin",await(0,o.mK)(ae.value.join(""),e)],["name",i.value],["isRegister",!0]]),se.value=!0,a.push("/wallet_created")}return(e,a)=>((0,n.uX)(),(0,n.CE)("section",g,[(0,n.Lk)("div",k,[(0,n.Lk)("div",L,(0,s.v_)(e.$t("message.create_pin_title")),1),(0,n.Lk)("div",_,[(0,n.Lk)("div",h,[l.value?((0,n.uX)(),(0,n.Wv)(r.A,{key:0})):(0,n.Q3)("",!0),(0,n.Lk)("div",w,[(0,n.Lk)("div",y,(0,s.v_)(e.$t("message.create_pin_wallet_name_label")),1),(0,n.Lk)("div",f,[(0,n.bo)((0,n.Lk)("input",{type:"text",class:(0,s.C4)(["input big",{error:!b.value&&m.value,success:b.value&&m.value}]),"onUpdate:modelValue":a[0]||(a[0]=e=>i.value=e),placeholder:e.$t("message.create_pin_wallet_name_placeholder"),onInput:te},null,42,K),[[t.Jo,i.value]])])]),(0,n.Lk)("div",R,[(0,n.Lk)("div",j,(0,s.v_)(e.$t("message.create_pin_create_pin_label")),1),(0,n.Lk)("div",x,[(0,n.Lk)("div",I,[(0,n.bo)((0,n.Lk)("input",{type:"password",class:"input big","onUpdate:modelValue":a[1]||(a[1]=e=>ae.value[0]=e),maxlength:"1",inputmode:"numeric",onInput:a[2]||(a[2]=e=>ie(e,1)),onKeydown:a[3]||(a[3]=(0,t.jR)((e=>ue(e,0)),["backspace"]))},null,544),[[t.Jo,ae.value[0]]])]),(0,n.Lk)("div",V,[(0,n.bo)((0,n.Lk)("input",{type:"password",class:"input big","onUpdate:modelValue":a[4]||(a[4]=e=>ae.value[1]=e),maxlength:"1",inputmode:"numeric",disabled:!ae.value[0].length,onInput:a[5]||(a[5]=e=>ie(e,2)),onKeydown:a[6]||(a[6]=(0,t.jR)((e=>ue(e,1)),["backspace"]))},null,40,J),[[t.Jo,ae.value[1]]])]),(0,n.Lk)("div",U,[(0,n.bo)((0,n.Lk)("input",{type:"password",class:"input big","onUpdate:modelValue":a[7]||(a[7]=e=>ae.value[2]=e),maxlength:"1",inputmode:"numeric",disabled:!ae.value[1].length,onInput:a[8]||(a[8]=e=>ie(e,3)),onKeydown:a[9]||(a[9]=(0,t.jR)((e=>ue(e,2)),["backspace"]))},null,40,$),[[t.Jo,ae.value[2]]])]),(0,n.Lk)("div",C,[(0,n.bo)((0,n.Lk)("input",{type:"password",class:"input big","onUpdate:modelValue":a[10]||(a[10]=e=>ae.value[3]=e),maxlength:"1",inputmode:"numeric",disabled:!ae.value[2].length,onInput:a[11]||(a[11]=e=>ie(e,4)),onKeydown:a[12]||(a[12]=(0,t.jR)((e=>ue(e,3)),["backspace"]))},null,40,A),[[t.Jo,ae.value[3]]])]),(0,n.Lk)("div",Q,[(0,n.bo)((0,n.Lk)("input",{type:"password",class:"input big","onUpdate:modelValue":a[13]||(a[13]=e=>ae.value[4]=e),maxlength:"1",inputmode:"numeric",disabled:!ae.value[3].length,onInput:a[14]||(a[14]=e=>ie(e,5)),onKeydown:a[15]||(a[15]=(0,t.jR)((e=>ue(e,4)),["backspace"]))},null,40,W),[[t.Jo,ae.value[4]]])]),(0,n.Lk)("div",B,[(0,n.bo)((0,n.Lk)("input",{type:"password",class:"input big","onUpdate:modelValue":a[16]||(a[16]=e=>ae.value[5]=e),maxlength:"1",inputmode:"numeric",disabled:!ae.value[4].length,onInput:a[17]||(a[17]=e=>ie(e,6)),onKeydown:a[18]||(a[18]=(0,t.jR)((e=>ue(e,5)),["backspace"]))},null,40,E),[[t.Jo,ae.value[5]]])])])]),(0,n.Lk)("div",q,[(0,n.Lk)("div",D,(0,s.v_)(e.$t("message.create_pin_confirm_pin_label")),1),(0,n.Lk)("div",{class:(0,s.C4)(["row",{error:le.value[5].length&&!de.value,success:le.value[5].length&&de.value}])},[(0,n.Lk)("div",P,[(0,n.bo)((0,n.Lk)("input",{type:"password",class:"input big","onUpdate:modelValue":a[19]||(a[19]=e=>le.value[0]=e),maxlength:"1",inputmode:"numeric",disabled:!ae.value[3].length,onInput:a[20]||(a[20]=e=>ie(e,1)),onKeydown:a[21]||(a[21]=(0,t.jR)((e=>ue(e,0)),["backspace"]))},null,40,S),[[t.Jo,le.value[0]]])]),(0,n.Lk)("div",T,[(0,n.bo)((0,n.Lk)("input",{type:"password",class:"input big","onUpdate:modelValue":a[22]||(a[22]=e=>le.value[1]=e),maxlength:"1",inputmode:"numeric",disabled:!le.value[0].length,onInput:a[23]||(a[23]=e=>ie(e,2)),onKeydown:a[24]||(a[24]=(0,t.jR)((e=>ue(e,1)),["backspace"]))},null,40,X),[[t.Jo,le.value[1]]])]),(0,n.Lk)("div",z,[(0,n.bo)((0,n.Lk)("input",{type:"password",class:"input big","onUpdate:modelValue":a[25]||(a[25]=e=>le.value[2]=e),maxlength:"1",inputmode:"numeric",disabled:!le.value[1].length,onInput:a[26]||(a[26]=e=>ie(e,3)),onKeydown:a[27]||(a[27]=(0,t.jR)((e=>ue(e,2)),["backspace"]))},null,40,H),[[t.Jo,le.value[2]]])]),(0,n.Lk)("div",M,[(0,n.bo)((0,n.Lk)("input",{type:"password",class:"input big","onUpdate:modelValue":a[28]||(a[28]=e=>le.value[3]=e),maxlength:"1",inputmode:"numeric",disabled:!le.value[2].length,onInput:a[29]||(a[29]=e=>ie(e,4)),onKeydown:a[30]||(a[30]=(0,t.jR)((e=>ue(e,3)),["backspace"]))},null,40,F),[[t.Jo,le.value[3]]])]),(0,n.Lk)("div",G,[(0,n.bo)((0,n.Lk)("input",{type:"password",class:"input big","onUpdate:modelValue":a[31]||(a[31]=e=>le.value[4]=e),maxlength:"1",inputmode:"numeric",disabled:!le.value[3].length,onInput:a[32]||(a[32]=e=>ie(e,5)),onKeydown:a[33]||(a[33]=(0,t.jR)((e=>ue(e,4)),["backspace"]))},null,40,N),[[t.Jo,le.value[4]]])]),(0,n.Lk)("div",O,[(0,n.bo)((0,n.Lk)("input",{type:"password",class:"input big","onUpdate:modelValue":a[34]||(a[34]=e=>le.value[5]=e),maxlength:"1",inputmode:"numeric",disabled:!le.value[4].length,onInput:a[35]||(a[35]=e=>ie(e,6)),onKeydown:a[36]||(a[36]=(0,t.jR)((e=>ue(e,5)),["backspace"]))},null,40,Y),[[t.Jo,le.value[5]]])])],2)]),(0,n.Lk)("button",{class:"biometric_btn",onClick:(0,t.D$)(ce,["prevent"])},[Z,(0,n.Lk)("span",null,(0,s.v_)(e.$t("message.btn_biometric")),1)]),(0,n.Lk)("div",ee,[(0,n.Lk)("button",{class:(0,s.C4)(["btn",{disabled:!oe.value}]),onClick:(0,t.D$)(pe,["prevent"])},[(0,n.Lk)("span",null,(0,s.v_)(e.$t("message.btn_next")),1)],2)])])])])]))}},le=l(1241);const ne=(0,le.A)(ae,[["__scopeId","data-v-169bd78a"]]);var se=ne}}]);
//# sourceMappingURL=327.6edd5698.js.map