"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[25],{92732:function(e,t,n){n.d(t,{A:function(){return k}});var a=n(56768),s=n(45130),l=n(24113);const o=e=>((0,a.Qi)("data-v-77f5f7be"),e=e(),(0,a.jt)(),e),u=l+"#ic_scaner",r=o((()=>(0,a.Lk)("svg",{class:"icon"},[(0,a.Lk)("use",{"xlink:href":u})],-1))),c=[r];var i={__name:"QRCode",setup(e){function t(){Telegram.WebApp.showScanQrPopup({text:"Наш текст"})}return(e,n)=>((0,a.uX)(),(0,a.CE)("button",{class:"qr_code_btn",onClick:(0,s.D$)(t,["prevent"])},c))}},v=n(71241);const d=(0,v.A)(i,[["__scopeId","data-v-77f5f7be"]]);var k=d},28239:function(e,t,n){n.r(t),n.d(t,{default:function(){return q}});n(44114);var a=n(56768),s=n(24232),l=n(90144),o=n(45130),u=n(24113),r=n(76750),c=n(81387),i=n(67278),v=n(61981),d=n(89114),k=n(65325),_=n(1955),m=n(92732);const p=e=>((0,a.Qi)("data-v-3cb9fcd1"),e=e(),(0,a.jt)(),e),g=u+"#ic_arrow_hor",b={class:"page_container sens"},L={class:"cont"},R={class:"head"},f=p((()=>(0,a.Lk)("svg",{class:"icon"},[(0,a.Lk)("use",{"xlink:href":g})],-1))),h={class:"page_title"},x={class:"token_wrap"},w={class:"token"},y={class:"logo"},A=["src","alt"],C={class:"denom"},$={class:"amount"},W={class:"val"},K={class:"cost"},N={class:"address"},Q={class:"label"},S={class:"field"},X={class:"amount_field"},E={class:"label"},F={class:"cost"},J={class:"field"},T={class:"memo_field"},U={class:"label"},D={class:"field"},I={class:"btns"};var M={__name:"Send",setup(e){const t=(0,r.o)(),n=((0,c.rd)(),(0,c.lq)()),u=(0,a.WQ)("emitter"),p=((0,a.WQ)("i18n"),(0,i.hN)(),t.balances.find((e=>e.denom===n.params.denom))),g=(0,l.KR)(""),M=(0,l.KR)(""),V=(0,l.KR)(""),j=(0,l.KR)(!1),q=(0,l.KR)([]),Y=(0,l.KR)(!1),z=(0,l.KR)(!1),B=(0,l.KR)((0,a.EW)((()=>z.value&&g.value.length)));function H(e){let t=g.value.startsWith(p.chain_info.bech32_prefix);t?e.target.classList.remove("error"):e.target.classList.add("error")}function P(){z.value=!1,setTimeout((()=>{M.value=(0,v.NJ)(p.amount,p.exponent),z.value=!0}))}function G(e){z.value=!1,setTimeout((()=>{e.target.value.length&&e.target.value<=0&&(M.value=""),e.target.value.length&&e.target.value>0&&e.target.value<(0,v.NJ)(p.amount,p.exponent)&&(z.value=!0),e.target.value>(0,v.NJ)(p.amount,p.exponent)&&P()}))}return(0,a.wB)((0,a.EW)((()=>B.value)),(()=>{B.value&&(q.value=[{typeUrl:"/cosmos.bank.v1beta1.MsgSend",value:{fromAddress:t.currentAddress,toAddress:g.value,amount:[{denom:p.denom,amount:""+parseFloat(M.value.toString().replace(",",".")).toFixed(p.exponent)*Math.pow(10,p.exponent)}]}}],console.log(q.value))})),u.on("auth",(()=>{j.value=!1,claim()})),u.on("close_sign_tx_modal",(()=>{j.value=!1})),(e,n)=>{const r=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("section",b,[Y.value?((0,a.uX)(),(0,a.Wv)(d.A,{key:0})):(0,a.Q3)("",!0),(0,a.Lk)("div",L,[(0,a.Lk)("div",R,[(0,a.bF)(r,{to:"/account",class:"back_btn"},{default:(0,a.k6)((()=>[f])),_:1}),(0,a.Lk)("div",h,(0,s.v_)(e.$t("message.send_page_title")),1)]),(0,a.Lk)("div",x,[(0,a.Lk)("div",w,[(0,a.Lk)("div",y,[(0,a.Lk)("img",{src:(0,l.R1)(p).token_info.logo_URIs.svg,alt:(0,l.R1)(p).token_info.name,loading:"lazy"},null,8,A)]),(0,a.Lk)("div",C,(0,s.v_)((0,l.R1)(p).token_info.symbol),1),(0,a.Lk)("div",$,[(0,a.Lk)("div",W,(0,s.v_)((0,l.R1)(v.NJ)((0,l.R1)(p).amount,(0,l.R1)(p).exponent).toLocaleString("ru-RU",{maximumFractionDigits:7})),1),(0,a.Lk)("div",K,(0,s.v_)((0,l.R1)(v.ST)((0,l.R1)(v.Y$)((0,l.R1)(p).token_info.symbol,(0,l.R1)(p).amount,(0,l.R1)(p).exponent)))+" "+(0,s.v_)((0,l.R1)(t).currentCurrencySymbol),1)])])]),(0,a.Lk)("div",N,[(0,a.Lk)("div",Q,(0,s.v_)(e.$t("message.send_address_label")),1),(0,a.Lk)("div",S,[(0,a.bo)((0,a.Lk)("input",{type:"text",class:"input big","onUpdate:modelValue":n[0]||(n[0]=e=>g.value=e),onInput:n[1]||(n[1]=e=>H(e))},null,544),[[o.Jo,g.value]]),(0,a.bF)(m.A,{class:"in_field"})])]),(0,a.Lk)("div",X,[(0,a.Lk)("div",E,[(0,a.eW)((0,s.v_)(e.$t("message.send_amount_label"))+" ",1),(0,a.Lk)("div",F,(0,s.v_)((0,l.R1)(v.ST)((0,l.R1)(v.Y$)((0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].token_name,M.value*Math.pow(10,(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].exponent),(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].exponent)))+" "+(0,s.v_)((0,l.R1)(t).currentCurrencySymbol),1)]),(0,a.Lk)("div",J,[(0,a.bo)((0,a.Lk)("input",{type:"number",inputmode:"numeric",class:"input big","onUpdate:modelValue":n[2]||(n[2]=e=>M.value=e),placeholder:"0.00",onInput:n[3]||(n[3]=e=>G(e))},null,544),[[o.Jo,M.value]]),(0,a.Lk)("button",{type:"button",class:"max_btn",onClick:(0,o.D$)(P,["prevent"])},(0,s.v_)(e.$t("message.btn_MAX")),1)])]),(0,a.Lk)("div",T,[(0,a.Lk)("div",U,(0,s.v_)(e.$t("message.memo_label")),1),(0,a.Lk)("div",D,[(0,a.bo)((0,a.Lk)("input",{type:"text",class:"input big","onUpdate:modelValue":n[4]||(n[4]=e=>V.value=e)},null,512),[[o.Jo,V.value]])])]),B.value?((0,a.uX)(),(0,a.Wv)(k.A,{key:0,msgAny:q.value},null,8,["msgAny"])):(0,a.Q3)("",!0),(0,a.Lk)("div",I,[(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].currentTxHash?((0,a.uX)(),(0,a.CE)("button",{key:1,class:"btn waiting_btn",onClick:n[6]||(n[6]=(0,o.D$)((e=>(0,l.R1)(u).emit("show_pending_notification")),["prevent"]))},[(0,a.Lk)("span",null,(0,s.v_)(e.$t("message.btn_waiting_tx")),1)])):((0,a.uX)(),(0,a.CE)("button",{key:0,class:(0,s.C4)(["btn",{disabled:!(0,l.R1)(t).TxFee.isEnough}]),onClick:n[5]||(n[5]=(0,o.D$)((e=>j.value=!0),["prevent"]))},[(0,a.Lk)("span",null,(0,s.v_)(e.$t("message.btn_send")),1)],2))])])]),j.value?((0,a.uX)(),(0,a.Wv)(_.A,{key:0})):(0,a.Q3)("",!0)],64)}}},V=n(71241);const j=(0,V.A)(M,[["__scopeId","data-v-3cb9fcd1"]]);var q=j}}]);
//# sourceMappingURL=25.a2a5dc5d.js.map