"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[76],{99322:function(e,a,t){t.r(a),t.d(a,{default:function(){return j}});t(44114);var s=t(56768),o=t(24232),n=t(90144),l=t(45130),i=t(24113),r=t(76750),c=t(81387),d=t(67278),u=t(61981),_=t(32344),v=t(89114),g=t(2108),k=t(1955);const m=e=>((0,s.Qi)("data-v-0d673451"),e=e(),(0,s.jt)(),e),p=i+"#ic_arrow_hor",f={class:"page_container claim_confirm"},b={class:"cont"},w={class:"head"},R=m((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":p})],-1))),h={class:"page_title"},L={class:"data"},y={class:"label"},x={class:"info_wrap"},C={class:"info"},$={class:"logo"},A=["src"],F={class:"title"},S={class:"amount"},T={class:"val"},B={class:"cost"},D={key:0,class:"not_enought"},E={class:"memo"},K={class:"label"},Q={class:"field"},W={class:"btns"};var X={__name:"ClaimConfirmPage",setup(e){const a=(0,r.o)(),t=(0,c.rd)(),i=(0,s.WQ)("emitter"),m=(0,s.WQ)("i18n"),p=(0,d.hN)(),X=(0,n.KR)(""),N=(0,n.KR)(!1),U=(0,n.KR)([]),j=(0,n.KR)(!1);async function I(){j.value=!0;try{a.TxFee.isRemember&&await a.updateTxFeeInfo();let e=await(0,u.qS)(U.value,X.value);p.notify({group:"default",clean:!0}),p.notify({group:"default",speed:200,duration:-100,title:m.global.t("message.notification_tx_pending_title"),type:"pending",data:{explorer_link:(0,u.aS)(a.currentNetwork)}}),(0,u.nw)(e),t.push("/account")}catch(e){console.log(e),J(e)}}function J(e){let a="";a=e.code?m.global.t(`message.notification_tx_error_${e.code}`):m.global.t("message.notification_tx_error_rejected"),p.notify({group:"default",speed:200,duration:6e3,title:"Tx error",text:a,type:"error"})}return(0,s.KC)((()=>{a.stakedBalances.forEach((e=>{U.value.push({typeUrl:"/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",value:_.MsgWithdrawDelegatorReward.fromPartial({delegatorAddress:a.currentAddress,validatorAddress:e.validator_info.operator_address})})}))})),(0,s.hi)((()=>{i.off("auth"),i.off("close_sign_tx_modal")})),i.on("auth",(()=>{N.value=!1,I()})),i.on("close_sign_tx_modal",(()=>{N.value=!1})),(e,t)=>{const r=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("section",f,[j.value?((0,s.uX)(),(0,s.Wv)(v.A,{key:0})):(0,s.Q3)("",!0),(0,s.Lk)("div",b,[(0,s.Lk)("div",w,[(0,s.bF)(r,{to:"/account?activeSlide=1",class:"back_btn"},{default:(0,s.k6)((()=>[R])),_:1}),(0,s.Lk)("div",h,(0,o.v_)(e.$t("message.claim_rewards_page_title")),1)]),(0,s.Lk)("div",L,[(0,s.Lk)("div",y,(0,o.v_)(e.$t("message.details_label")),1),(0,s.Lk)("div",x,[(0,s.Lk)("div",C,[(0,s.Lk)("div",$,[(0,s.Lk)("img",{src:(0,n.R1)(u.oB)((0,n.R1)(a).networks[(0,n.R1)(a).currentNetwork].chain_id),alt:""},null,8,A)]),(0,s.Lk)("div",F,(0,o.v_)(e.$t("message.claim_rewards_title")),1),(0,s.Lk)("div",S,[(0,s.Lk)("div",T," ~ "+(0,o.v_)((0,n.R1)(u.NJ)((0,n.R1)(a).rewardsBalances[0].amount,(0,n.R1)(a).rewardsBalances[0].exponent).toLocaleString("ru-RU",{maximumFractionDigits:7}))+" "+(0,o.v_)((0,n.R1)(a).rewardsBalances[0].token_info.symbol),1),(0,s.Lk)("div",B," ~ "+(0,o.v_)((0,n.R1)(u.ST)((0,n.R1)(u.Ko)("USD"),"USD"))+"$ ",1)])])]),(0,n.R1)(a).TxFee.isEnough?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("div",D,(0,o.v_)(e.$t("message.claim_rewards_not_enought",{denom:(0,n.R1)(a).TxFee.currentSymbol})),1))]),(0,s.Lk)("div",E,[(0,s.Lk)("div",K,(0,o.v_)(e.$t("message.memo_label")),1),(0,s.Lk)("div",Q,[(0,s.bo)((0,s.Lk)("input",{type:"text",class:"input big","onUpdate:modelValue":t[0]||(t[0]=e=>X.value=e),onFocus:t[1]||(t[1]=e=>(0,n.R1)(i).emit("show_keyboard")),onBlur:t[2]||(t[2]=e=>(0,n.R1)(i).emit("hide_keyboard"))},null,544),[[l.Jo,X.value]])])]),(0,n.R1)(a).isBalancesGot?((0,s.uX)(),(0,s.Wv)(g.A,{key:0,msgAny:U.value},null,8,["msgAny"])):(0,s.Q3)("",!0),(0,s.Lk)("div",W,[(0,n.R1)(a).networks[(0,n.R1)(a).currentNetwork].currentTxHash?((0,s.uX)(),(0,s.CE)("button",{key:1,class:"btn waiting_btn",onClick:t[4]||(t[4]=(0,l.D$)((e=>(0,n.R1)(i).emit("show_pending_notification")),["prevent"]))},[(0,s.Lk)("span",null,(0,o.v_)(e.$t("message.btn_waiting_tx")),1)])):((0,s.uX)(),(0,s.CE)("button",{key:0,class:(0,o.C4)(["btn",{disabled:!(0,n.R1)(a).TxFee.isEnough}]),onClick:t[3]||(t[3]=(0,l.D$)((e=>N.value=!0),["prevent"]))},[(0,s.Lk)("span",null,(0,o.v_)(e.$t("message.btn_approve")),1)],2))])])]),N.value?((0,s.uX)(),(0,s.Wv)(k.A,{key:0})):(0,s.Q3)("",!0)],64)}}},N=t(71241);const U=(0,N.A)(X,[["__scopeId","data-v-0d673451"]]);var j=U}}]);
//# sourceMappingURL=76.828d8344.js.map