"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[43],{17086:function(e,a,t){t.d(a,{A:function(){return u}});var l=t(56768);const n={class:"loader_wrap"},s=(0,l.Lk)("div",{class:"loader"},[(0,l.Lk)("span")],-1),o=[s];function i(e,a){return(0,l.uX)(),(0,l.CE)("div",n,o)}var r=t(71241);const c={},d=(0,r.A)(c,[["render",i]]);var u=d},94754:function(e,a,t){t.r(a),t.d(a,{default:function(){return O}});t(44114);var l=t(56768),n=t(24232),s=t(90144),o=t(45130),i=t(24113),r=t(96011),c=t(81387),d=t(67278),u=t(61981),_=t(32344),v=t(17086),m=t(50358),g=t(86255);const k=e=>((0,l.Qi)("data-v-9c23d1ca"),e=e(),(0,l.jt)(),e),p=i+"#ic_arrow_hor",f={class:"page_container inner_page_container claim_confirm"},b={class:"cont"},w={class:"head"},y=k((()=>(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":p})],-1))),R={class:"page_title"},h={class:"data"},L={class:"field_label"},x={class:"info_wrap"},A={class:"info"},C={class:"logo"},$=["src"],F={class:"title"},T={class:"amount"},E={class:"val"},X={class:"cost"},B={key:0,class:"not_enought"},D={class:"memo"},K={class:"field_label"},Q={class:"field"},S={class:"btns"};var M={__name:"ClaimConfirmPage",setup(e){const a=(0,r.o)(),t=(0,c.rd)(),i=(0,l.WQ)("emitter"),k=(0,l.WQ)("i18n"),p=(0,d.hN)(),M=(0,s.KR)(""),W=(0,s.KR)(!1),N=(0,s.KR)(!1),O=(0,s.KR)([]),U=(0,s.KR)(!1);async function j(){U.value=!0;try{a.TxFee.isRemember&&await a.updateTxFeeInfo();let e=await(0,u.qS)(O.value,M.value);p.notify({group:"default",clean:!0}),p.notify({group:"default",speed:200,duration:-100,title:k.global.t("message.notification_tx_pending_title"),type:"pending",data:{isCollapsible:!0,explorer_link:(0,u.aS)(a.currentNetwork)}}),(0,u.nw)(e).catch((e=>{console.log(e),H(e)})),a.checkTxResult(),t.push("/account")}catch(e){console.log(e),H(e)}}function H(e){U.value=!1;let t="";t=e.code?k.global.t(`message.notification_tx_error_${e.code}`):k.global.t("message.notification_tx_error_rejected"),p.notify({group:"default",clean:!0}),p.notify({group:"default",speed:200,duration:6e3,title:k.global.t("message.notification_tx_error_title"),text:t,type:"error"}),a.networks[a.currentNetwork].currentTxHash=null,a.resetTxFee()}function I(){W.value=!0,a.isAnyModalOpen=!0}return(0,l.KC)((()=>{a.stakedBalances.forEach((e=>{O.value.push({typeUrl:"/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",value:_.MsgWithdrawDelegatorReward.fromPartial({delegatorAddress:a.currentAddress,validatorAddress:e.validator_info.operator_address})})}))})),(0,l.hi)((()=>{i.off("auth"),i.off("close_sign_tx_modal"),i.off("close_tx_warning_modal")})),i.on("auth",(()=>{W.value=!1,a.isAnyModalOpen=!1,j()})),i.on("close_sign_tx_modal",(()=>{W.value=!1,a.isAnyModalOpen=!1})),i.on("close_tx_warning_modal",(()=>{a.isAnyModalOpen=!1})),i.on("close_any_modal",(()=>{W.value=!1,a.isAnyModalOpen=!1})),(e,t)=>{const r=(0,l.g2)("router-link");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("section",f,[U.value?((0,l.uX)(),(0,l.Wv)(v.A,{key:0})):(0,l.Q3)("",!0),(0,l.Lk)("div",b,[(0,l.Lk)("div",w,[(0,l.bF)(r,{to:"/account?activeSlide=1",class:"back_btn"},{default:(0,l.k6)((()=>[y])),_:1}),(0,l.Lk)("div",R,(0,n.v_)(e.$t("message.claim_rewards_page_title")),1)]),(0,l.Lk)("div",h,[(0,l.Lk)("div",L,(0,n.v_)(e.$t("message.details_label")),1),(0,l.Lk)("div",x,[(0,l.Lk)("div",A,[(0,l.Lk)("div",C,[(0,l.Lk)("img",{src:(0,s.R1)(u.oB)((0,s.R1)(a).networks[(0,s.R1)(a).currentNetwork].chain_id),alt:""},null,8,$)]),(0,l.Lk)("div",F,(0,n.v_)(e.$t("message.claim_rewards_title")),1),(0,l.Lk)("div",T,[(0,l.Lk)("div",E," ~ "+(0,n.v_)((0,s.R1)(u.NJ)((0,s.R1)(a).rewardsBalances[0].amount,(0,s.R1)(a).rewardsBalances[0].exponent).toLocaleString("ru-RU",{maximumFractionDigits:5}).replace(",","."))+" "+(0,n.v_)((0,s.R1)(a).rewardsBalances[0].token_info.symbol),1),(0,l.Lk)("div",X," ~ "+(0,n.v_)((0,s.R1)(u.ST)((0,s.R1)(u.Ko)("USD"),"USD"))+"$ ",1)])])]),(0,s.R1)(a).TxFee.isEnough?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.CE)("div",B,(0,n.v_)(e.$t("message.claim_rewards_not_enought",{denom:(0,s.R1)(a).TxFee.currentSymbol})),1))]),(0,l.Lk)("div",D,[(0,l.Lk)("div",K,(0,n.v_)(e.$t("message.memo_label")),1),(0,l.Lk)("div",Q,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:"input big","onUpdate:modelValue":t[0]||(t[0]=e=>M.value=e)},null,512),[[o.Jo,M.value]])])]),(0,s.R1)(a).isBalancesGot?((0,l.uX)(),(0,l.Wv)(m.A,{key:0,msgAny:O.value,txType:"claim"},null,8,["msgAny"])):(0,l.Q3)("",!0),(0,l.Lk)("div",S,[(0,s.R1)(a).networks[(0,s.R1)(a).currentNetwork].currentTxHash?((0,l.uX)(),(0,l.CE)("button",{key:1,class:"btn waiting_btn",onClick:t[2]||(t[2]=(0,o.D$)((e=>(0,s.R1)(i).emit("show_collapsible_notification")),["prevent"]))},[(0,l.Lk)("span",null,(0,n.v_)(e.$t("message.btn_waiting_tx")),1)])):((0,l.uX)(),(0,l.CE)("button",{key:0,class:(0,n.C4)(["btn",{disabled:!(0,s.R1)(a).TxFee.isEnough}]),onClick:t[1]||(t[1]=(0,o.D$)((e=>I()),["prevent"]))},[(0,l.Lk)("span",null,(0,n.v_)(e.$t("message.btn_approve")),1)],2))])])]),(0,l.bF)(o.eB,{name:"modal"},{default:(0,l.k6)((()=>[W.value?((0,l.uX)(),(0,l.Wv)(g.A,{key:0})):(0,l.Q3)("",!0)])),_:1}),(0,l.bF)(o.eB,{name:"fade"},{default:(0,l.k6)((()=>[W.value||N.value?((0,l.uX)(),(0,l.CE)("div",{key:0,class:"modal_overlay",onClick:t[3]||(t[3]=(0,o.D$)((e=>(0,s.R1)(i).emit("close_any_modal")),["prevent"]))})):(0,l.Q3)("",!0)])),_:1})],64)}}},W=t(71241);const N=(0,W.A)(M,[["__scopeId","data-v-9c23d1ca"]]);var O=N}}]);
//# sourceMappingURL=43.89e18423.js.map