"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[959],{50151:function(e,a,t){t.d(a,{A:function(){return Q}});var l=t(56768),s=t(24232),n=t(45130),i=t(90144),o=t(24113),c=t(76750),r=t(61981);const u=e=>((0,l.Qi)("data-v-7f08a64f"),e=e(),(0,l.jt)(),e),d=o+"#ic_biometric_face",v=o+"#ic_biometric_finger",_={class:"pin"},m={class:"label"},k={class:"field"},g={class:"field"},p=["disabled"],b={class:"field"},L=["disabled"],f={class:"field"},h=["disabled"],x={class:"field"},w=["disabled"],R={class:"field"},y=["disabled"],C={key:0,class:"warning"},T={key:0,class:"icon"},F=u((()=>(0,l.Lk)("use",{"xlink:href":d},null,-1))),$=[F],A={key:1,class:"icon"},E=u((()=>(0,l.Lk)("use",{"xlink:href":v},null,-1))),K=[E];var j={__name:"Auth",setup(e){const a=(0,c.o)(),t=(0,l.WQ)("emitter"),o=(0,i.KR)(["","","","","",""]),u=(0,i.KR)(""),d=(0,i.KR)(""),v=(0,i.KR)(!1),F=(0,i.KR)(!1),E=(0,i.KR)(!1),j=(0,i.KR)(!1),W=(0,i.KR)("finger");function D(e,a){e.target.value.length>=1&&a<6&&e.target.closest(".row").querySelector(`.field:nth-child(${a+1}) input`).focus()}function Q(e,a){setTimeout((()=>{0===e.target.value.length&&a>0&&e.target.closest(".row").querySelector(`.field:nth-child(${a}) input`).select()}))}function X(){Telegram.WebApp.isAccessGranted?B():Telegram.WebApp.BiometricManager.requestAccess({reason:"Наш текст"},(()=>B()))}function B(){Telegram.WebApp.BiometricManager.authenticate({reason:"Наш текст"},(e=>{e&&t.emit("auth")}))}async function I(){let e=await P();e?t.emit("auth"):await J()}async function P(){let e=await(0,r.mK)(o.value.join(""),d.value);return e===u.value}async function J(){v.value=!0;let e=F.value-1;F.value=e,e?a.updateUserAuthErrorLimit(e):t.emit("show_error_auth_modal"),o.value=["","","","","",""],v.value=!1}(0,l.KC)((async()=>{let e=await a.getMultipleData(["pin","hmacKey","authErrorLimit","isBiometric"]);u.value=e.pin,d.value=e.hmacKey,F.value=e.authErrorLimit,E.value=e.isBiometric,j.value=Telegram.WebApp.BiometricManager.isBiometricAvailable,"unknown"!=Telegram.WebApp.BiometricManager.biometricType&&(W.value=Telegram.WebApp.BiometricManager.biometricType),j.value&&E.value&&X()})),(0,l.wB)(o.value,(()=>{o.value[5].length&&document.activeElement.blur(),o.value[5].length&&F.value===a.authErrorLimit&&I()}));const S=(0,l.EW)((()=>""!=o.value[5].length));return(e,t)=>((0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("div",_,[(0,l.Lk)("div",m,(0,s.v_)(e.$t("message.auth_enter_pin_label")),1),(0,l.Lk)("div",{class:(0,s.C4)(["row",{error:v.value}])},[(0,l.Lk)("div",k,[(0,l.bo)((0,l.Lk)("input",{type:"password",class:(0,s.C4)(["input big",{active:o.value[0].length}]),"onUpdate:modelValue":t[0]||(t[0]=e=>o.value[0]=e),maxlength:"1",inputmode:"numeric",ref:"inputRef",onInput:t[1]||(t[1]=e=>D(e,1)),onKeydown:t[2]||(t[2]=(0,n.jR)((e=>Q(e,0)),["backspace"]))},null,34),[[n.Jo,o.value[0]]])]),(0,l.Lk)("div",g,[(0,l.bo)((0,l.Lk)("input",{type:"password",class:(0,s.C4)(["input big",{active:o.value[1].length}]),"onUpdate:modelValue":t[3]||(t[3]=e=>o.value[1]=e),maxlength:"1",inputmode:"numeric",disabled:!o.value[0].length,onInput:t[4]||(t[4]=e=>D(e,2)),onKeydown:t[5]||(t[5]=(0,n.jR)((e=>Q(e,1)),["backspace"]))},null,42,p),[[n.Jo,o.value[1]]])]),(0,l.Lk)("div",b,[(0,l.bo)((0,l.Lk)("input",{type:"password",class:(0,s.C4)(["input big",{active:o.value[2].length}]),"onUpdate:modelValue":t[6]||(t[6]=e=>o.value[2]=e),maxlength:"1",inputmode:"numeric",disabled:!o.value[1].length,onInput:t[7]||(t[7]=e=>D(e,3)),onKeydown:t[8]||(t[8]=(0,n.jR)((e=>Q(e,2)),["backspace"]))},null,42,L),[[n.Jo,o.value[2]]])]),(0,l.Lk)("div",f,[(0,l.bo)((0,l.Lk)("input",{type:"password",class:(0,s.C4)(["input big",{active:o.value[3].length}]),"onUpdate:modelValue":t[9]||(t[9]=e=>o.value[3]=e),maxlength:"1",inputmode:"numeric",disabled:!o.value[2].length,onInput:t[10]||(t[10]=e=>D(e,4)),onKeydown:t[11]||(t[11]=(0,n.jR)((e=>Q(e,3)),["backspace"]))},null,42,h),[[n.Jo,o.value[3]]])]),(0,l.Lk)("div",x,[(0,l.bo)((0,l.Lk)("input",{type:"password",class:(0,s.C4)(["input big",{active:o.value[4].length}]),"onUpdate:modelValue":t[12]||(t[12]=e=>o.value[4]=e),maxlength:"1",inputmode:"numeric",disabled:!o.value[3].length,onInput:t[13]||(t[13]=e=>D(e,5)),onKeydown:t[14]||(t[14]=(0,n.jR)((e=>Q(e,4)),["backspace"]))},null,42,w),[[n.Jo,o.value[4]]])]),(0,l.Lk)("div",R,[(0,l.bo)((0,l.Lk)("input",{type:"password",class:(0,s.C4)(["input big",{active:o.value[5].length}]),"onUpdate:modelValue":t[15]||(t[15]=e=>o.value[5]=e),maxlength:"1",inputmode:"numeric",disabled:!o.value[4].length,onInput:t[16]||(t[16]=e=>D(e,6)),onKeydown:t[17]||(t[17]=(0,n.jR)((e=>Q(e,5)),["backspace"]))},null,42,y),[[n.Jo,o.value[5]]])])],2),F.value<(0,i.R1)(a).authErrorLimit?((0,l.uX)(),(0,l.CE)("div",C,(0,s.v_)(e.$t("message.auth_error_warning",{count:F.value})),1)):(0,l.Q3)("",!0)]),j.value&&F.value==(0,i.R1)(a).authErrorLimit?((0,l.uX)(),(0,l.CE)("button",{key:0,class:(0,s.C4)(["biometric_btn",{show:!e.loading}]),onClick:(0,n.D$)(X,["prevent"])},[(0,l.Lk)("span",null,(0,s.v_)(e.$t("message.btn_biometric2")),1),"face"===e.biometrictype?((0,l.uX)(),(0,l.CE)("svg",T,$)):((0,l.uX)(),(0,l.CE)("svg",A,K))],2)):(0,l.Q3)("",!0),(0,l.Lk)("div",{class:(0,s.C4)(["btns",{show:!e.loading}])},[F.value<(0,i.R1)(a).authErrorLimit?((0,l.uX)(),(0,l.CE)("button",{key:0,class:(0,s.C4)(["btn",{disabled:!S.value}]),onClick:t[18]||(t[18]=(0,n.D$)((e=>I()),["prevent"]))},[(0,l.Lk)("span",null,(0,s.v_)(e.$t("message.btn_login")),1)],2)):(0,l.Q3)("",!0)],2)],64))}},W=t(71241);const D=(0,W.A)(j,[["__scopeId","data-v-7f08a64f"]]);var Q=D},89114:function(e,a,t){t.d(a,{A:function(){return d}});var l=t(56768);const s={class:"loader_wrap"},n=(0,l.Lk)("div",{class:"loader"},[(0,l.Lk)("span")],-1),i=[n];function o(e,a){return(0,l.uX)(),(0,l.CE)("div",s,i)}var c=t(71241);const r={},u=(0,c.A)(r,[["render",o]]);var d=u},99959:function(e,a,t){t.r(a),t.d(a,{default:function(){return Ie}});t(44114);var l=t(56768),s=t(24232),n=t(90144),i=t(45130),o=t(24113),c=t(76750),r=t(81387),u=t(67278),d=t(61981),v=t(89114);const _=e=>((0,l.Qi)("data-v-785c05ea"),e=e(),(0,l.jt)(),e),m=o+"#ic_close",k=o+"#ic_check",g=o+"#ic_arr_ver2",p={class:"modal"},b={class:"modal_content"},L={class:"data"},f=_((()=>(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":m})],-1))),h=[f],x={class:"modal_title"},w={class:"fee_tier"},R={class:"label"},y=_((()=>(0,l.Lk)("div",{class:"toggle_wrap"},[(0,l.Lk)("div",{class:"toggle"},[(0,l.Lk)("div",{class:"ball_wrap"},[(0,l.Lk)("div",{class:"ball"},[(0,l.Lk)("svg",null,[(0,l.Lk)("use",{"xlink:href":k})])])])])],-1))),C={class:"vals_wrap"},T={class:"vals"},F={class:"name"},$=_((()=>(0,l.Lk)("div",{class:"cost"},"<$0.01",-1))),A={class:"amount"},E={class:"denom"},K={class:"name"},j=_((()=>(0,l.Lk)("div",{class:"cost"},"<$0.01",-1))),W={class:"amount"},D={class:"denom"},Q={class:"name"},X=_((()=>(0,l.Lk)("div",{class:"cost"},"<$0.01",-1))),B={class:"amount"},I={class:"denom"},P={class:"fee_token"},J={class:"label"},S={class:"field"},U=["value"],N=_((()=>(0,l.Lk)("svg",{class:"arr"},[(0,l.Lk)("use",{"xlink:href":g})],-1))),M={class:"gas_adjustment"},V={class:"label"},G=(0,l.Fv)('<div class="toggle_wrap" data-v-785c05ea><div class="toggle" data-v-785c05ea><div class="ball_wrap" data-v-785c05ea><div class="ball" data-v-785c05ea><svg data-v-785c05ea><use xlink:href="'+k+'" data-v-785c05ea></use></svg></div></div></div></div>',1),q={class:"field"},H=["disabled"],z={class:"btns"};var O={__name:"TxFeeModal",setup(e){const a=(0,c.o)(),t=(0,l.WQ)("emitter"),o=(0,l.EW)((()=>a.TxFee.gasAdjustmentAuto?a.networks[a.currentNetwork].gas_adjustment:(0,n.KR)("")));return(e,c)=>((0,l.uX)(),(0,l.CE)("section",p,[(0,l.Lk)("div",b,[(0,l.Lk)("div",L,[(0,l.Lk)("button",{class:"close_btn",onClick:c[0]||(c[0]=(0,i.D$)((e=>(0,n.R1)(t).emit("close_tx_fee_modal")),["prevent"]))},h),(0,l.Lk)("div",x,(0,s.v_)(e.$t("message.tx_fee_modal_title")),1),(0,l.Lk)("div",w,[(0,l.Lk)("div",R,[(0,l.Lk)("span",null,(0,s.v_)(e.$t("message.tx_fee_fee_tier_label")),1),(0,l.Lk)("button",{class:(0,s.C4)(["toggle_btn",{enabled:(0,n.R1)(a).TxFee.remember}]),onClick:c[1]||(c[1]=(0,i.D$)((e=>(0,n.R1)(a).TxFee.remember=!(0,n.R1)(a).TxFee.remember),["prevent"]))},[(0,l.Lk)("span",null,(0,s.v_)(e.$t("message.tx_fee_remember_label")),1),y],2)]),(0,l.Lk)("div",C,[(0,l.Lk)("div",T,[(0,l.Lk)("button",{class:(0,s.C4)(["btn",{active:"Low"===(0,n.R1)(a).TxFee.currentPrice}]),onClick:c[2]||(c[2]=(0,i.D$)((e=>(0,n.R1)(a).TxFee.currentPrice="Low"),["prevent"]))},[(0,l.Lk)("div",F,(0,s.v_)(e.$t("message.tx_fee_low_label")),1),$,(0,l.Lk)("div",A,(0,s.v_)((0,n.R1)(a).TxFee.priceLow),1),(0,l.Lk)("div",E,(0,s.v_)((0,n.R1)(a).TxFee.currentSymbol),1)],2),(0,l.Lk)("button",{class:(0,s.C4)(["btn",{active:"Average"===(0,n.R1)(a).TxFee.currentPrice}]),onClick:c[3]||(c[3]=(0,i.D$)((e=>(0,n.R1)(a).TxFee.currentPrice="Average"),["prevent"]))},[(0,l.Lk)("div",K,(0,s.v_)(e.$t("message.tx_fee_average_label")),1),j,(0,l.Lk)("div",W,(0,s.v_)((0,n.R1)(a).TxFee.priceAverage),1),(0,l.Lk)("div",D,(0,s.v_)((0,n.R1)(a).TxFee.currentSymbol),1)],2),(0,l.Lk)("button",{class:(0,s.C4)(["btn",{active:"High"===(0,n.R1)(a).TxFee.currentPrice}]),onClick:c[4]||(c[4]=(0,i.D$)((e=>(0,n.R1)(a).TxFee.currentPrice="High"),["prevent"]))},[(0,l.Lk)("div",Q,(0,s.v_)(e.$t("message.tx_fee_high_label")),1),X,(0,l.Lk)("div",B,(0,s.v_)((0,n.R1)(a).TxFee.priceHigh),1),(0,l.Lk)("div",I,(0,s.v_)((0,n.R1)(a).TxFee.currentSymbol),1)],2)])])]),(0,l.Lk)("div",P,[(0,l.Lk)("div",J,(0,s.v_)(e.$t("message.tx_fee_fee_token_label")),1),(0,l.Lk)("div",S,[(0,l.Lk)("input",{type:"text",class:"input big",value:(0,n.R1)(a).TxFee.currentSymbol,readonly:""},null,8,U),N])]),(0,l.Lk)("div",M,[(0,l.Lk)("div",V,[(0,l.Lk)("span",null,(0,s.v_)(e.$t("message.tx_fee_gas_adjustment_label")),1),(0,l.Lk)("button",{class:(0,s.C4)(["toggle_btn",{enabled:(0,n.R1)(a).TxFee.gasAdjustmentAuto}]),onClick:c[5]||(c[5]=(0,i.D$)((e=>(0,n.R1)(a).TxFee.gasAdjustmentAuto=!(0,n.R1)(a).TxFee.gasAdjustmentAuto),["prevent"]))},[(0,l.Lk)("span",null,(0,s.v_)(e.$t("message.tx_fee_auto_label")),1),G],2)]),(0,l.Lk)("div",q,[(0,l.bo)((0,l.Lk)("input",{type:"number",class:"input big","onUpdate:modelValue":c[6]||(c[6]=e=>o.value=e),disabled:(0,n.R1)(a).TxFee.gasAdjustmentAuto},null,8,H),[[i.Jo,o.value]])])]),(0,l.Lk)("div",z,[(0,l.Lk)("button",{class:"btn",onClick:c[7]||(c[7]=(0,i.D$)((e=>(0,n.R1)(t).emit("close_tx_fee_modal")),["prevent"]))},[(0,l.Lk)("span",null,(0,s.v_)(e.$t("message.btn_close")),1)])])])]),(0,l.Lk)("div",{class:"overlay",onClick:c[8]||(c[8]=(0,i.D$)((e=>(0,n.R1)(t).emit("close_tx_fee_modal")),["prevent"]))})]))}},Y=t(71241);const Z=(0,Y.A)(O,[["__scopeId","data-v-785c05ea"]]);var ee=Z;const ae={class:"tx_fee"};var te={__name:"TxFee",setup(e){const a=(0,c.o)(),t=(0,l.WQ)("emitter"),o=(0,n.KR)(!1),r=a.balances.find((e=>e.denom==a.networks[a.currentNetwork].denom));return(0,l.KC)((()=>{a.TxFeeSetCurrentDenom(a.networks[a.currentNetwork].denom,a.networks[a.currentNetwork].token_name),a.TxFeeGetGasPrices(a.networks[a.currentNetwork].chain_id),a.TxFee.isEnough=(0,d.NJ)(r.amount,r.exponent)>a.TxFee.currentPriceAmount})),(0,l.wB)((0,l.EW)((()=>a.isBalancesGot)),(()=>{a.TxFee.isEnough=(0,d.NJ)(r.amount,r.exponent)>a.TxFee.currentPriceAmount})),t.on("close_tx_fee_modal",(()=>{o.value=!1})),(e,t)=>((0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("div",ae,[(0,l.Lk)("button",{class:(0,s.C4)(["btn",{red:!(0,n.R1)(a).TxFee.isEnough}]),onClick:t[0]||(t[0]=(0,i.D$)((e=>o.value=!0),["prevent"]))},(0,s.v_)(e.$t("message.tx_fee_label"))+" "+(0,s.v_)((0,n.R1)(a).TxFee.currentPriceAmount)+" "+(0,s.v_)((0,n.R1)(a).TxFee.currentSymbol),3)]),o.value?((0,l.uX)(),(0,l.Wv)(ee,{key:0})):(0,l.Q3)("",!0)],64))}};const le=(0,Y.A)(te,[["__scopeId","data-v-b9bcacec"]]);var se=le,ne=t(50151);const ie=e=>((0,l.Qi)("data-v-dc5a976e"),e=e(),(0,l.jt)(),e),oe=o+"#ic_close",ce={class:"modal"},re={class:"modal_content"},ue={class:"data"},de=ie((()=>(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":oe})],-1))),ve=[de],_e={class:"modal_title"},me={class:"auth_wrap"};var ke={__name:"SignTx",setup(e){const a=(0,l.WQ)("emitter");return(e,t)=>((0,l.uX)(),(0,l.CE)("section",ce,[(0,l.Lk)("div",re,[(0,l.Lk)("div",ue,[(0,l.Lk)("button",{class:"close_btn",onClick:t[0]||(t[0]=(0,i.D$)((e=>(0,n.R1)(a).emit("close_sign_tx_modal")),["prevent"]))},ve),(0,l.Lk)("div",_e,(0,s.v_)(e.$t("message.sign_tx_title")),1),(0,l.Lk)("div",me,[(0,l.bF)(ne.A)])])]),(0,l.Lk)("div",{class:"overlay",onClick:t[1]||(t[1]=(0,i.D$)((e=>(0,n.R1)(a).emit("close_sign_tx_modal")),["prevent"]))})]))}};const ge=(0,Y.A)(ke,[["__scopeId","data-v-dc5a976e"]]);var pe=ge;const be=e=>((0,l.Qi)("data-v-09aa3392"),e=e(),(0,l.jt)(),e),Le=o+"#ic_arrow_hor",fe={class:"page_container claim_confirm"},he={class:"cont"},xe={class:"head"},we=be((()=>(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":Le})],-1))),Re={class:"page_title"},ye={class:"data"},Ce={class:"label"},Te={class:"info_wrap"},Fe={class:"info"},$e={class:"logo"},Ae=["src"],Ee={class:"title"},Ke={key:0,class:"not_enought"},je={class:"memo"},We={class:"label"},De={class:"field"},Qe={class:"btns"};var Xe={__name:"ClaimConfirmPage",setup(e){const a=(0,c.o)(),t=(0,r.rd)(),o=(0,l.WQ)("emitter"),_=(0,l.WQ)("i18n"),m=(0,u.hN)(),k=(0,n.KR)(""),g=(0,n.KR)(!1),p=(0,n.KR)(!1);async function b(){g.value=!0;try{let e=[];a.stakedBalances.forEach((t=>{e.push({typeUrl:"/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",value:{delegatorAddress:a.currentAddress,validatorAddress:t.validator_info.operator_address}})}));let l=await(0,d.nw)(e);0===l.code?(await a.getRewards(),m.notify({group:"default",clean:!0}),m.notify({group:"default",speed:200,duration:2e3,title:_.global.t("message.notification_tx_success_title"),type:"success"}),t.push("/account")):(console.log(l),L(l),g.value=!1)}catch(e){console.log(e),L(e),g.value=!1}}function L(e){let a="";a=e.code?_.global.t(`message.notification_tx_error_${e.code}`):_.global.t("message.notification_tx_error_rejected"),m.notify({group:"default",clean:!0}),m.notify({group:"default",title:_.global.t("message.notification_tx_error_title"),text:a,type:"error"})}return(0,l.hi)((()=>{o.off("auth"),o.off("close_sign_tx_modal")})),o.on("auth",(()=>{p.value=!1,b()})),o.on("close_sign_tx_modal",(()=>{p.value=!1})),(e,t)=>{const o=(0,l.g2)("router-link");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("section",fe,[g.value?((0,l.uX)(),(0,l.Wv)(v.A,{key:0})):(0,l.Q3)("",!0),(0,l.Lk)("div",he,[(0,l.Lk)("div",xe,[(0,l.bF)(o,{to:"/account",class:"back_btn"},{default:(0,l.k6)((()=>[we])),_:1}),(0,l.Lk)("div",Re,(0,s.v_)(e.$t("message.claim_rewards_page_title")),1)]),(0,l.Lk)("div",ye,[(0,l.Lk)("div",Ce,(0,s.v_)(e.$t("message.details_label")),1),(0,l.Lk)("div",Te,[(0,l.Lk)("div",Fe,[(0,l.Lk)("div",$e,[(0,l.Lk)("img",{src:(0,n.R1)(d.oB)((0,n.R1)(a).networks[(0,n.R1)(a).currentNetwork].chain_id),alt:""},null,8,Ae)]),(0,l.Lk)("div",Ee,(0,s.v_)(e.$t("message.claim_rewards_title")),1)])]),(0,n.R1)(a).TxFee.isEnough?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.CE)("div",Ke,(0,s.v_)(e.$t("message.claim_rewards_not_enought",{denom:(0,n.R1)(a).TxFee.currentSymbol})),1))]),(0,l.Lk)("div",je,[(0,l.Lk)("div",We,(0,s.v_)(e.$t("message.memo_label")),1),(0,l.Lk)("div",De,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:"input big","onUpdate:modelValue":t[0]||(t[0]=e=>k.value=e)},null,512),[[i.Jo,k.value]])])]),(0,l.bF)(se),(0,l.Lk)("div",Qe,[(0,l.Lk)("button",{class:(0,s.C4)(["btn",{disabled:!(0,n.R1)(a).TxFee.isEnough}]),onClick:t[1]||(t[1]=(0,i.D$)((e=>p.value=!0),["prevent"]))},[(0,l.Lk)("span",null,(0,s.v_)(e.$t("message.btn_approve")),1)],2)])])]),p.value?((0,l.uX)(),(0,l.Wv)(pe,{key:0})):(0,l.Q3)("",!0)],64)}}};const Be=(0,Y.A)(Xe,[["__scopeId","data-v-09aa3392"]]);var Ie=Be}}]);
//# sourceMappingURL=959.85f6b8d2.js.map