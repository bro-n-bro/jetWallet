"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[768],{37768:function(e,a,t){t.r(a),t.d(a,{default:function(){return N}});t(44114);var l=t(56768),s=t(24232),o=t(90144),n=t(45130),i=t(24113),r=t(96011),c=t(81387),d=t(67278),u=t(90405),_=t(32344),v=t(17086),m=t(50358),g=t(86255);const k=i+"#ic_arrow_hor",p={class:"page_container inner_page_container claim_confirm"},f={class:"cont"},b={class:"head"},y={class:"page_title"},w={class:"data"},h={class:"field_label"},R={class:"info_wrap"},x={class:"info"},L={class:"logo"},C=["src"],A={class:"title"},$={class:"amount"},F={class:"val"},T={class:"cost"},S={key:0,class:"not_enought"},B={class:"memo"},D={class:"field_label"},E={class:"field"},K=["placeholder"],X={class:"btns"};var M={__name:"ClaimConfirmPage",setup(e){const a=(0,r.useGlobalStore)(),t=(0,c.rd)(),i=(0,l.WQ)("emitter"),M=(0,l.WQ)("i18n"),Q=(0,d.hN)(),W=(0,o.KR)(""),N=(0,o.KR)(!1),O=(0,o.KR)(!1),U=(0,o.KR)([]),G=(0,o.KR)(!1);async function H(){G.value=!0;try{a.TxFee.isRemember&&await a.updateTxFeeInfo();let e=await(0,u.qS)(U.value,W.value);Q.notify({group:"default",clean:!0}),Q.notify({group:"default",speed:200,duration:-100,title:M.global.t("message.notification_tx_pending_title"),type:"pending",data:{isCollapsible:!0,explorer_link:(0,u.aS)(a.currentNetwork)}}),(0,u.nw)(e).catch((e=>{console.log(e),I(e)})),t.push("/account")}catch(e){console.log(e),I(e)}}function I(e){G.value=!1;let t="";t=e.code?M.global.t(`message.notification_tx_error_${e.code}`):M.global.t("message.notification_tx_error_rejected"),Q.notify({group:"default",clean:!0}),Q.notify({group:"default",speed:200,duration:6e3,title:M.global.t("message.notification_tx_error_title"),text:t,type:"error"}),a.networks[a.currentNetwork].currentTxHash=null,a.resetTxFee()}function J(){N.value=!0,a.isAnyModalOpen=!0}return(0,l.KC)((()=>{a.stakedBalances.forEach((e=>{U.value.push({typeUrl:"/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",value:_.MsgWithdrawDelegatorReward.fromPartial({delegatorAddress:a.currentAddress,validatorAddress:e.validator_info.operator_address})})}))})),(0,l.hi)((()=>{i.off("auth"),i.off("close_sign_tx_modal"),i.off("close_tx_warning_modal")})),i.on("auth",(()=>{N.value=!1,a.isAnyModalOpen=!1,H()})),i.on("close_sign_tx_modal",(()=>{N.value=!1,a.isAnyModalOpen=!1})),i.on("close_tx_warning_modal",(()=>{a.isAnyModalOpen=!1})),i.on("close_any_modal",(()=>{N.value=!1,a.isAnyModalOpen=!1})),(e,t)=>{const r=(0,l.g2)("router-link");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("section",p,[G.value?((0,l.uX)(),(0,l.Wv)(v.A,{key:0})):(0,l.Q3)("",!0),(0,l.Lk)("div",f,[(0,l.Lk)("div",b,[(0,l.bF)(r,{to:"/account?activeSlide=1",class:"back_btn"},{default:(0,l.k6)((()=>t[4]||(t[4]=[(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":k})],-1)]))),_:1}),(0,l.Lk)("div",y,(0,s.v_)(e.$t("message.claim_rewards_page_title")),1)]),(0,l.Lk)("div",w,[(0,l.Lk)("div",h,(0,s.v_)(e.$t("message.details_label")),1),(0,l.Lk)("div",R,[(0,l.Lk)("div",x,[(0,l.Lk)("div",L,[(0,l.Lk)("img",{src:(0,o.R1)(u.oB)((0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].chain_id),alt:""},null,8,C)]),(0,l.Lk)("div",A,(0,s.v_)(e.$t("message.claim_rewards_title")),1),(0,l.Lk)("div",$,[(0,l.Lk)("div",F," ~ "+(0,s.v_)((0,o.R1)(u.NJ)((0,o.R1)(a).rewardsBalances[0].amount,(0,o.R1)(a).rewardsBalances[0].exponent).toLocaleString("ru-RU",{maximumFractionDigits:5}).replace(",","."))+" "+(0,s.v_)((0,o.R1)(a).rewardsBalances[0].token_info.symbol),1),(0,l.Lk)("div",T," ~ "+(0,s.v_)((0,o.R1)(u.ST)((0,o.R1)(u.Ko)("USD"),"USD"))+"$ ",1)])])]),(0,o.R1)(a).TxFee.isEnough?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.CE)("div",S,(0,s.v_)(e.$t("message.claim_rewards_not_enought",{denom:(0,o.R1)(a).TxFee.currentSymbol})),1))]),(0,l.Lk)("div",B,[(0,l.Lk)("div",D,(0,s.v_)(e.$t("message.memo_label")),1),(0,l.Lk)("div",E,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:"input big","onUpdate:modelValue":t[0]||(t[0]=e=>W.value=e),placeholder:e.$t("message.placeholder_memo2")},null,8,K),[[n.Jo,W.value]])])]),(0,o.R1)(a).isBalancesGot?((0,l.uX)(),(0,l.Wv)(m.A,{key:0,msgAny:U.value,txType:"claim"},null,8,["msgAny"])):(0,l.Q3)("",!0),(0,l.Lk)("div",X,[(0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].currentTxHash?((0,l.uX)(),(0,l.CE)("button",{key:1,class:"btn waiting_btn",onClick:t[2]||(t[2]=(0,n.D$)((e=>(0,o.R1)(i).emit("show_collapsible_notification")),["prevent"]))},[(0,l.Lk)("span",null,(0,s.v_)(e.$t("message.btn_waiting_tx")),1)])):((0,l.uX)(),(0,l.CE)("button",{key:0,class:(0,s.C4)(["btn",{disabled:!(0,o.R1)(a).TxFee.isEnough}]),onClick:t[1]||(t[1]=(0,n.D$)((e=>J()),["prevent"]))},[(0,l.Lk)("span",null,(0,s.v_)(e.$t("message.btn_approve")),1)],2))])])]),(0,l.bF)(n.eB,{name:"modal"},{default:(0,l.k6)((()=>[N.value?((0,l.uX)(),(0,l.Wv)(g.A,{key:0})):(0,l.Q3)("",!0)])),_:1}),(0,l.bF)(n.eB,{name:"fade"},{default:(0,l.k6)((()=>[N.value||O.value?((0,l.uX)(),(0,l.CE)("div",{key:0,class:"modal_overlay",onClick:t[3]||(t[3]=(0,n.D$)((e=>(0,o.R1)(i).emit("close_any_modal")),["prevent"]))})):(0,l.Q3)("",!0)])),_:1})],64)}}},Q=t(71241);const W=(0,Q.A)(M,[["__scopeId","data-v-3224d79b"]]);var N=W}}]);
//# sourceMappingURL=768.11fae152.js.map