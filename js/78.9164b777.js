"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[78],{59101:function(e,t,a){a.r(t),a.d(t,{default:function(){return j}});a(44114);var n=a(56768),s=a(24232),l=a(90144),o=a(45130),i=a(54055),u=a(81387),c=a(67278),r=a(61981),d=a(17086),_=a(50358),p=a(86255);const g={class:"page_container send_tx"},k={class:"cont"},m={class:"page_title"},v={class:"page_data_wrap"},f={class:"page_data"},b={class:"memo_field"},y={class:"field_label"},R={class:"field"},x={class:"btns"};var w={__name:"SendTx",setup(e){const t=(0,i.o)(),a=(0,u.rd)(),w=(0,n.WQ)("emitter"),L=(0,c.hN)(),h=(0,n.WQ)("i18n"),j=(0,l.KR)(""),C=(0,l.KR)(!1),q=(0,l.KR)(!1);async function A(){C.value=!0;try{t.TxFee.isRemember&&await t.updateTxFeeInfo();let e=await(0,r.qS)(t.jetPackRequest.data.msg,j.value);L.notify({group:"default",clean:!0}),L.notify({group:"default",speed:200,duration:-100,title:h.global.t("message.notification_tx_pending_title"),type:"pending",data:{isCollapsible:!0,explorer_link:(0,r.aS)(t.currentNetwork)}}),(0,r.nw)(e).catch((e=>{console.log(e),F(e)})),t.jetPackRequest=null,a.push("/account")}catch(e){console.log(e),t.jetPackRequest=null,F(e),t.showRedirectModal=!0}}function T(){const e=t.RTCConnections[t.jetPackRequest.data.peer_id];e&&e.send({type:"error",requestId:t.jetPackRequest.data.request_id,message:h.global.t("message.jp_message_rejected")}),t.jetPackRequest=null,L.notify({group:"default",speed:200,duration:1e3,title:h.global.t("message.notification_jp_send_reject"),type:"default"}),t.resetTxFee(),t.showRedirectModal=!0,a.push("/account")}function F(e){C.value=!1;let a="";a=e.code?h.global.t(`message.notification_tx_error_${e.code}`):h.global.t("message.notification_tx_error_rejected"),L.notify({group:"default",clean:!0}),L.notify({group:"default",speed:200,duration:6e3,title:h.global.t("message.notification_tx_error_title"),text:a,type:"error"}),t.networks[t.currentNetwork].currentTxHash=null,t.resetTxFee()}function $(){q.value=!0,t.isAnyModalOpen=!0}return w.on("auth",(()=>{q.value=!1,t.isAnyModalOpen=!1,A()})),w.on("close_sign_tx_modal",(()=>{q.value=!1,t.isAnyModalOpen=!1})),w.on("close_any_modal",(()=>{q.value=!1,t.isAnyModalOpen=!1})),(e,a)=>((0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("section",g,[C.value?((0,n.uX)(),(0,n.Wv)(d.A,{key:0})):(0,n.Q3)("",!0),(0,n.Lk)("div",k,[(0,n.Lk)("div",m,(0,s.v_)(e.$t("message.jp_send_tx_title")),1),(0,n.Lk)("div",v,[(0,n.Lk)("div",f,[(0,n.Lk)("pre",null,[(0,n.Lk)("code",null,(0,s.v_)((0,l.R1)(t).jetPackRequest?.data?.msg),1)]),(0,n.Lk)("div",b,[(0,n.Lk)("div",y,(0,s.v_)(e.$t("message.memo_label")),1),(0,n.Lk)("div",R,[(0,n.bo)((0,n.Lk)("input",{type:"text",class:"input big","onUpdate:modelValue":a[0]||(a[0]=e=>j.value=e)},null,512),[[o.Jo,j.value]])])]),(0,n.bF)(_.A,{msgAny:(0,l.R1)(t).jetPackRequest?.data?.msg,txType:"send"},null,8,["msgAny"]),(0,n.Lk)("div",x,[(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].currentTxHash?((0,n.uX)(),(0,n.CE)("button",{key:1,class:"btn waiting_btn",onClick:a[2]||(a[2]=(0,o.D$)((e=>(0,l.R1)(w).emit("show_collapsible_notification")),["prevent"]))},[(0,n.Lk)("span",null,(0,s.v_)(e.$t("message.btn_waiting_tx")),1)])):((0,n.uX)(),(0,n.CE)("button",{key:0,class:(0,s.C4)(["btn",{disabled:!(0,l.R1)(t).TxFee.isEnough}]),onClick:a[1]||(a[1]=(0,o.D$)((e=>$()),["prevent"]))},[(0,n.Lk)("span",null,(0,s.v_)(e.$t("message.btn_send")),1)],2)),(0,n.Lk)("button",{class:"btn purple_btn",onClick:a[3]||(a[3]=e=>T())},[(0,n.Lk)("span",null,(0,s.v_)(e.$t("message.btn_reject")),1)])])])])])]),(0,n.bF)(o.eB,{name:"modal"},{default:(0,n.k6)((()=>[q.value?((0,n.uX)(),(0,n.Wv)(p.A,{key:0})):(0,n.Q3)("",!0)])),_:1}),(0,n.bF)(o.eB,{name:"fade"},{default:(0,n.k6)((()=>[q.value?((0,n.uX)(),(0,n.CE)("div",{key:0,class:"modal_overlay",onClick:a[4]||(a[4]=(0,o.D$)((e=>(0,l.R1)(w).emit("close_any_modal")),["prevent"]))})):(0,n.Q3)("",!0)])),_:1})],64))}},L=a(71241);const h=(0,L.A)(w,[["__scopeId","data-v-192cf6a2"]]);var j=h}}]);
//# sourceMappingURL=78.9164b777.js.map