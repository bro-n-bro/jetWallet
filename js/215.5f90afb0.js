"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[215],{75303:function(e,a,t){t.r(a),t.d(a,{default:function(){return ee}});t(44114);var s=t(56768),n=t(24232),l=t(90144),o=t(45130),i=t(24113),c=t(76750),r=t(81387),d=t(67278),_=t(61981),u=t(32344),v=t(51115),k=t(2736),g=t(29234);const m=e=>((0,s.Qi)("data-v-3cdc3897"),e=e(),(0,s.jt)(),e),p=i+"#ic_close",f={class:"modal"},b={class:"modal_content"},w={class:"data"},L=m((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":p})],-1))),x=[L],R={class:"modal_title"},h={class:"desc"},y={class:"btns"};var $={__name:"TxWarning",setup(e){const a=(0,s.WQ)("emitter");return(e,t)=>((0,s.uX)(),(0,s.CE)("section",f,[(0,s.Lk)("div",b,[(0,s.Lk)("div",w,[(0,s.Lk)("button",{class:"close_btn",onClick:t[0]||(t[0]=(0,o.D$)((e=>(0,l.R1)(a).emit("close_tx_warning_modal")),["prevent"]))},x),(0,s.Lk)("div",R,(0,n.v_)(e.$t("message.tx_warning_title")),1),(0,s.Lk)("div",h,(0,n.v_)(e.$t("message.tx_warning_desc")),1),(0,s.Lk)("div",y,[(0,s.Lk)("button",{class:"btn",onClick:t[1]||(t[1]=(0,o.D$)((e=>(0,l.R1)(a).emit("close_tx_warning_modal")),["prevent"]))},[(0,s.Lk)("span",null,(0,n.v_)(e.$t("message.btn_accept")),1)])])])]),(0,s.Lk)("div",{class:"overlay",onClick:t[2]||(t[2]=(0,o.D$)((e=>(0,l.R1)(a).emit("close_tx_warning_modal")),["prevent"]))})]))}},C=t(71241);const T=(0,C.A)($,[["__scopeId","data-v-3cdc3897"]]);var A=T;const D=e=>((0,s.Qi)("data-v-00c9675f"),e=e(),(0,s.jt)(),e),F=i+"#ic_arrow_hor",Q={class:"page_container inner_page_container claim_confirm"},W={class:"cont"},X={class:"head"},E=D((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":F})],-1))),K={class:"page_title"},S={class:"data"},B={class:"field_label"},N={class:"info_wrap"},U={class:"info"},j={class:"logo"},I=["src"],H={class:"title"},J={class:"amount"},M={class:"val"},P={class:"cost"},q={key:0,class:"not_enought"},G={class:"memo"},V={class:"field_label"},z={class:"field"},O={class:"btns"};var Y={__name:"ClaimConfirmPage",setup(e){const a=(0,c.o)(),t=(0,r.rd)(),i=(0,s.WQ)("emitter"),m=(0,s.WQ)("i18n"),p=(0,d.hN)(),f=(0,l.KR)(""),b=(0,l.KR)(!1),w=(0,l.KR)(!1),L=(0,l.KR)([]),x=(0,l.KR)(!1);async function R(){x.value=!0;try{a.TxFee.isRemember&&await a.updateTxFeeInfo();let e=await(0,_.qS)(L.value,f.value);p.notify({group:"default",clean:!0}),p.notify({group:"default",speed:200,duration:-100,title:m.global.t("message.notification_tx_pending_title"),type:"pending",data:{explorer_link:(0,_.aS)(a.currentNetwork)}}),(0,_.nw)(e).catch((e=>{console.log(e),h(e)})),a.checkTxResult(),t.push("/account")}catch(e){console.log(e),h(e)}}function h(e){x.value=!1;let t="";t=e.code?m.global.t(`message.notification_tx_error_${e.code}`):m.global.t("message.notification_tx_error_rejected"),p.notify({group:"default",clean:!0}),p.notify({group:"default",speed:200,duration:6e3,title:m.global.t("message.notification_tx_error_title"),text:t,type:"error"}),a.networks[a.currentNetwork].currentTxHash=null,a.resetTxFee()}return(0,s.KC)((()=>{w.value=!a.hasNativeToken(),a.stakedBalances.forEach((e=>{L.value.push({typeUrl:"/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",value:u.MsgWithdrawDelegatorReward.fromPartial({delegatorAddress:a.currentAddress,validatorAddress:e.validator_info.operator_address})})}))})),(0,s.hi)((()=>{i.off("auth"),i.off("close_sign_tx_modal"),i.off("close_tx_warning_modal")})),i.on("auth",(()=>{b.value=!1,R()})),i.on("close_sign_tx_modal",(()=>{b.value=!1})),i.on("close_tx_warning_modal",(()=>{w.value=!1})),(e,t)=>{const c=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("section",Q,[x.value?((0,s.uX)(),(0,s.Wv)(v.A,{key:0})):(0,s.Q3)("",!0),(0,s.Lk)("div",W,[(0,s.Lk)("div",X,[(0,s.bF)(c,{to:"/account?activeSlide=1",class:"back_btn"},{default:(0,s.k6)((()=>[E])),_:1}),(0,s.Lk)("div",K,(0,n.v_)(e.$t("message.claim_rewards_page_title")),1)]),(0,s.Lk)("div",S,[(0,s.Lk)("div",B,(0,n.v_)(e.$t("message.details_label")),1),(0,s.Lk)("div",N,[(0,s.Lk)("div",U,[(0,s.Lk)("div",j,[(0,s.Lk)("img",{src:(0,l.R1)(_.oB)((0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].chain_id),alt:""},null,8,I)]),(0,s.Lk)("div",H,(0,n.v_)(e.$t("message.claim_rewards_title")),1),(0,s.Lk)("div",J,[(0,s.Lk)("div",M," ~ "+(0,n.v_)((0,l.R1)(_.NJ)((0,l.R1)(a).rewardsBalances[0].amount,(0,l.R1)(a).rewardsBalances[0].exponent).toLocaleString("ru-RU",{maximumFractionDigits:5}).replace(",","."))+" "+(0,n.v_)((0,l.R1)(a).rewardsBalances[0].token_info.symbol),1),(0,s.Lk)("div",P," ~ "+(0,n.v_)((0,l.R1)(_.ST)((0,l.R1)(_.Ko)("USD"),"USD"))+"$ ",1)])])]),(0,l.R1)(a).TxFee.isEnough?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("div",q,(0,n.v_)(e.$t("message.claim_rewards_not_enought",{denom:(0,l.R1)(a).TxFee.currentSymbol})),1))]),(0,s.Lk)("div",G,[(0,s.Lk)("div",V,(0,n.v_)(e.$t("message.memo_label")),1),(0,s.Lk)("div",z,[(0,s.bo)((0,s.Lk)("input",{type:"text",class:"input big","onUpdate:modelValue":t[0]||(t[0]=e=>f.value=e),onFocus:t[1]||(t[1]=e=>(0,l.R1)(i).emit("show_keyboard")),onBlur:t[2]||(t[2]=e=>(0,l.R1)(i).emit("hide_keyboard"))},null,544),[[o.Jo,f.value]])])]),(0,l.R1)(a).isBalancesGot?((0,s.uX)(),(0,s.Wv)(k.A,{key:0,msgAny:L.value,txType:"claim"},null,8,["msgAny"])):(0,s.Q3)("",!0),(0,s.Lk)("div",O,[(0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].currentTxHash?((0,s.uX)(),(0,s.CE)("button",{key:1,class:"btn waiting_btn",onClick:t[4]||(t[4]=(0,o.D$)((e=>(0,l.R1)(i).emit("show_pending_notification")),["prevent"]))},[(0,s.Lk)("span",null,(0,n.v_)(e.$t("message.btn_waiting_tx")),1)])):((0,s.uX)(),(0,s.CE)("button",{key:0,class:(0,n.C4)(["btn",{disabled:!(0,l.R1)(a).TxFee.isEnough}]),onClick:t[3]||(t[3]=(0,o.D$)((e=>b.value=!0),["prevent"]))},[(0,s.Lk)("span",null,(0,n.v_)(e.$t("message.btn_approve")),1)],2))])])]),b.value?((0,s.uX)(),(0,s.Wv)(g.A,{key:0})):(0,s.Q3)("",!0),w.value?((0,s.uX)(),(0,s.Wv)(A,{key:1})):(0,s.Q3)("",!0)],64)}}};const Z=(0,C.A)(Y,[["__scopeId","data-v-00c9675f"]]);var ee=Z}}]);
//# sourceMappingURL=215.5f90afb0.js.map