"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[682],{43734:function(e,t,n){n.d(t,{A:function(){return _}});var a=n(56768),o=n(45130),l=n(24113);const s=e=>((0,a.Qi)("data-v-3f39ea36"),e=e(),(0,a.jt)(),e),r=l+"#ic_scaner",u=s((()=>(0,a.Lk)("svg",{class:"icon"},[(0,a.Lk)("use",{"xlink:href":r})],-1))),i=[u];var c={__name:"QRCodeScanner",setup(e){function t(){Telegram.WebApp.showScanQrPopup({text:"Наш текст"})}return(e,n)=>((0,a.uX)(),(0,a.CE)("button",{class:"btn",onClick:n[0]||(n[0]=(0,o.D$)((e=>t()),["prevent"]))},i))}},d=n(71241);const v=(0,d.A)(c,[["__scopeId","data-v-3f39ea36"]]);var _=v},25488:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});n(44114);var a=n(56768),o=n(24232),l=n(90144),s=n(45130),r=n(24113),u=n(76750),i=n(81387),c=n(67278),d=n(89354),v=n(61981),_=n(51115),k=n(2736),m=n(29234),p=n(43734);const g=e=>((0,a.Qi)("data-v-146e5c90"),e=e(),(0,a.jt)(),e),b=r+"#ic_arrow_hor",f={class:"page_container inner_page_container send"},R={class:"cont"},h={class:"head"},x=g((()=>(0,a.Lk)("svg",{class:"icon"},[(0,a.Lk)("use",{"xlink:href":b})],-1))),y={class:"page_title"},L={class:"token_wrap"},w={class:"token"},A={class:"logo"},T=["src","alt"],C={class:"denom"},$={class:"amount"},F={class:"val"},N={class:"cost"},S={class:"address"},W={class:"field_label"},K={class:"field"},Q={class:"amount_field"},E={class:"field_label"},X={class:"cost"},J={class:"field"},I={class:"memo_field"},U={class:"field_label"},B={class:"field"},D={class:"btns"};var q={__name:"Send",setup(e){const t=(0,u.o)(),n=(0,i.rd)(),r=(0,i.lq)(),g=(0,a.WQ)("emitter"),b=(0,a.WQ)("i18n"),q=(0,c.hN)(),M=t.balances.find((e=>e.denom===r.query.denom)),V=(0,l.KR)(""),j=(0,l.KR)(""),H=(0,l.KR)(""),P=(0,l.KR)(!1),Y=(0,l.KR)([]),z=(0,l.KR)(!1),G=(0,l.KR)(!1),O=(0,l.KR)((0,a.EW)((()=>G.value&&V.value.length)));function Z(e){try{let{prefix:n,data:a}=(0,d.fromBech32)(V.value);n==M.chain_info.bech32_prefix&&a.length==t.networks[t.currentNetwork].address_length&&e.target.classList.remove("error")}catch(n){return e.target.classList.add("error"),!1}}function ee(){G.value=!1,setTimeout((()=>{j.value=(0,v.NJ)(M.amount,M.exponent),G.value=!0}))}function te(e){G.value=!1,setTimeout((()=>{e.target.value.length&&e.target.value<=0&&(j.value=""),e.target.value.length&&e.target.value>0&&e.target.value<(0,v.NJ)(M.amount,M.exponent)&&(G.value=!0),e.target.value>(0,v.NJ)(M.amount,M.exponent)&&ee()}))}async function ne(){z.value=!0;try{t.TxFee.isRemember&&await t.updateTxFeeInfo();let e=await(0,v.qS)(Y.value,H.value);q.notify({group:"default",clean:!0}),q.notify({group:"default",speed:200,duration:-100,title:b.global.t("message.notification_tx_pending_title"),type:"pending",data:{explorer_link:(0,v.aS)(t.currentNetwork)}}),(0,v.nw)(e).catch((e=>{console.log(e),ae(e)})),t.checkTxResult(),n.push("/account")}catch(e){console.log(e),ae(e)}}function ae(e){z.value=!1;let n="";n=e.code?b.global.t(`message.notification_tx_error_${e.code}`):b.global.t("message.notification_tx_error_rejected"),q.notify({group:"default",clean:!0}),q.notify({group:"default",speed:200,duration:6e3,title:b.global.t("message.notification_tx_error_title"),text:n,type:"error"}),t.networks[t.currentNetwork].currentTxHash=null,t.resetTxFee()}return(0,a.wB)((0,a.EW)((()=>O.value)),(()=>{O.value&&(Y.value=[{typeUrl:"/cosmos.bank.v1beta1.MsgSend",value:{fromAddress:t.currentAddress,toAddress:V.value,amount:[{denom:M.denom,amount:""+parseFloat(j.value.toString().replace(",",".")).toFixed(M.exponent)*Math.pow(10,M.exponent)}]}}])})),(0,a.sV)((()=>{Telegram.WebApp.onEvent("qrTextReceived",(e=>console.log(e)))})),(0,a.hi)((()=>{g.off("auth"),g.off("close_sign_tx_modal")})),g.on("auth",(()=>{P.value=!1,ne()})),g.on("close_sign_tx_modal",(()=>{P.value=!1})),(e,n)=>{const r=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("section",f,[z.value?((0,a.uX)(),(0,a.Wv)(_.A,{key:0})):(0,a.Q3)("",!0),(0,a.Lk)("div",R,[(0,a.Lk)("div",h,[(0,a.bF)(r,{to:"/account",class:"back_btn"},{default:(0,a.k6)((()=>[x])),_:1}),(0,a.Lk)("div",y,(0,o.v_)(e.$t("message.send_page_title")),1)]),(0,a.Lk)("div",L,[(0,a.Lk)("div",w,[(0,a.Lk)("div",A,[(0,a.Lk)("img",{src:(0,l.R1)(M).token_info.logo_URIs.svg,alt:(0,l.R1)(M).token_info.name,loading:"lazy"},null,8,T)]),(0,a.Lk)("div",C,(0,o.v_)((0,l.R1)(M).token_info.symbol),1),(0,a.Lk)("div",$,[(0,a.Lk)("div",F,(0,o.v_)((0,l.R1)(v.NJ)((0,l.R1)(M).amount,(0,l.R1)(M).exponent).toLocaleString("ru-RU",{maximumFractionDigits:7}).replace(",",".")),1),(0,a.Lk)("div",N,(0,o.v_)((0,l.R1)(v.ST)((0,l.R1)(v.Y$)((0,l.R1)(M).token_info.symbol,(0,l.R1)(M).amount,(0,l.R1)(M).exponent)))+" "+(0,o.v_)((0,l.R1)(t).currentCurrencySymbol),1)])])]),(0,a.Lk)("div",S,[(0,a.Lk)("div",W,(0,o.v_)(e.$t("message.send_address_label")),1),(0,a.Lk)("div",K,[(0,a.bo)((0,a.Lk)("input",{type:"text",class:"input big","onUpdate:modelValue":n[0]||(n[0]=e=>V.value=e),onFocus:n[1]||(n[1]=e=>(0,l.R1)(g).emit("show_keyboard")),onBlur:n[2]||(n[2]=e=>(0,l.R1)(g).emit("hide_keyboard")),onInput:n[3]||(n[3]=e=>Z(e)),onPaste:n[4]||(n[4]=e=>Z(e))},null,544),[[s.Jo,V.value]]),(0,a.bF)(p.A,{class:"in_field"})])]),(0,a.Lk)("div",Q,[(0,a.Lk)("div",E,[(0,a.eW)((0,o.v_)(e.$t("message.send_amount_label"))+" ",1),(0,a.Lk)("div",X,(0,o.v_)((0,l.R1)(v.ST)((0,l.R1)(v.Y$)((0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].token_name,j.value*Math.pow(10,(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].exponent),(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].exponent)))+" "+(0,o.v_)((0,l.R1)(t).currentCurrencySymbol),1)]),(0,a.Lk)("div",J,[(0,a.bo)((0,a.Lk)("input",{type:"number",inputmode:"numeric",class:"input big","onUpdate:modelValue":n[5]||(n[5]=e=>j.value=e),placeholder:"0.00",onFocus:n[6]||(n[6]=e=>(0,l.R1)(g).emit("show_keyboard")),onBlur:n[7]||(n[7]=e=>(0,l.R1)(g).emit("hide_keyboard")),onInput:n[8]||(n[8]=e=>te(e))},null,544),[[s.Jo,j.value]]),(0,a.Lk)("button",{type:"button",class:"max_btn",onClick:(0,s.D$)(ee,["prevent"])},(0,o.v_)(e.$t("message.btn_MAX")),1)])]),(0,a.Lk)("div",I,[(0,a.Lk)("div",U,(0,o.v_)(e.$t("message.memo_label")),1),(0,a.Lk)("div",B,[(0,a.bo)((0,a.Lk)("input",{type:"text",class:"input big","onUpdate:modelValue":n[9]||(n[9]=e=>H.value=e),onFocus:n[10]||(n[10]=e=>(0,l.R1)(g).emit("show_keyboard")),onBlur:n[11]||(n[11]=e=>(0,l.R1)(g).emit("hide_keyboard"))},null,544),[[s.Jo,H.value]])])]),O.value?((0,a.uX)(),(0,a.Wv)(k.A,{key:0,msgAny:Y.value,txType:"send"},null,8,["msgAny"])):(0,a.Q3)("",!0),(0,a.Lk)("div",D,[(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].currentTxHash?((0,a.uX)(),(0,a.CE)("button",{key:1,class:"btn waiting_btn",onClick:n[13]||(n[13]=(0,s.D$)((e=>(0,l.R1)(g).emit("show_pending_notification")),["prevent"]))},[(0,a.Lk)("span",null,(0,o.v_)(e.$t("message.btn_waiting_tx")),1)])):((0,a.uX)(),(0,a.CE)("button",{key:0,class:(0,o.C4)(["btn",{disabled:!(0,l.R1)(t).TxFee.isEnough}]),onClick:n[12]||(n[12]=(0,s.D$)((e=>P.value=!0),["prevent"]))},[(0,a.Lk)("span",null,(0,o.v_)(e.$t("message.btn_send")),1)],2))])])]),P.value?((0,a.uX)(),(0,a.Wv)(m.A,{key:0})):(0,a.Q3)("",!0)],64)}}},M=n(71241);const V=(0,M.A)(q,[["__scopeId","data-v-146e5c90"]]);var j=V}}]);
//# sourceMappingURL=682.a1492ed5.js.map