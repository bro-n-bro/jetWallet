"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[232],{43734:function(e,t,n){n.d(t,{A:function(){return _}});var a=n(56768),o=n(45130),l=n(24113);const s=e=>((0,a.Qi)("data-v-3f39ea36"),e=e(),(0,a.jt)(),e),u=l+"#ic_scaner",r=s((()=>(0,a.Lk)("svg",{class:"icon"},[(0,a.Lk)("use",{"xlink:href":u})],-1))),i=[r];var c={__name:"QRCodeScanner",setup(e){function t(){Telegram.WebApp.showScanQrPopup({text:"Наш текст"})}return(e,n)=>((0,a.uX)(),(0,a.CE)("button",{class:"btn",onClick:n[0]||(n[0]=(0,o.D$)((e=>t()),["prevent"]))},i))}},d=n(71241);const v=(0,d.A)(c,[["__scopeId","data-v-3f39ea36"]]);var _=v},78334:function(e,t,n){n.r(t),n.d(t,{default:function(){return V}});n(44114);var a=n(56768),o=n(24232),l=n(90144),s=n(45130),u=n(24113),r=n(76750),i=n(81387),c=n(67278),d=n(89354),v=n(61981),_=n(51115),k=n(2736),m=n(29234),p=n(43734);const f=e=>((0,a.Qi)("data-v-fed43466"),e=e(),(0,a.jt)(),e),g=u+"#ic_arrow_hor",b={class:"page_container inner_page_container send"},R={class:"cont"},y={class:"head"},h=f((()=>(0,a.Lk)("svg",{class:"icon"},[(0,a.Lk)("use",{"xlink:href":g})],-1))),x={class:"page_title"},L={class:"token_wrap"},w={class:"token"},C={class:"logo"},A=["src","alt"],$={class:"denom"},F={class:"amount"},N={class:"val"},T={class:"cost"},S={class:"address"},K={class:"field_label"},Q={class:"field"},W={class:"amount_field"},J={class:"field_label"},X={class:"cost"},E={class:"field"},I={class:"memo_field"},U={class:"field_label"},q={class:"field"},B={class:"btns"};var D={__name:"Send",setup(e){const t=(0,r.o)(),n=(0,i.rd)(),u=(0,i.lq)(),f=(0,a.WQ)("emitter"),g=(0,a.WQ)("i18n"),D=(0,c.hN)(),M=t.balances.find((e=>e.denom===u.query.denom)),j=(0,l.KR)(null),V=(0,l.KR)(""),H=(0,l.KR)(""),P=(0,l.KR)(""),Y=(0,l.KR)(!1),z=(0,l.KR)([]),G=(0,l.KR)(!1),O=(0,l.KR)(!1),Z=(0,l.KR)((0,a.EW)((()=>O.value&&ee())));function ee(){try{let{prefix:e,data:n}=(0,d.fromBech32)(V.value);if(e==M.chain_info.bech32_prefix&&n.length==t.networks[t.currentNetwork].address_length)return j.value.classList.remove("error"),!0}catch(e){return j.value.classList.add("error"),!1}}function te(){O.value=!1,setTimeout((()=>{H.value=(0,v.NJ)(M.amount,M.exponent),O.value=!0}))}function ne(){O.value=!1,setTimeout((()=>{alert(H.value),alert(H.value>(0,v.NJ)(M.amount,M.exponent)),H.value.length&&H.value<=0&&(H.value=""),H.value.length&&H.value>0&&H.value<(0,v.NJ)(M.amount,M.exponent)&&(O.value=!0),H.value>(0,v.NJ)(M.amount,M.exponent)&&te()}))}async function ae(){G.value=!0;try{t.TxFee.isRemember&&await t.updateTxFeeInfo();let e=await(0,v.qS)(z.value,P.value);D.notify({group:"default",clean:!0}),D.notify({group:"default",speed:200,duration:-100,title:g.global.t("message.notification_tx_pending_title"),type:"pending",data:{explorer_link:(0,v.aS)(t.currentNetwork)}}),(0,v.nw)(e).catch((e=>{console.log(e),oe(e)})),t.checkTxResult(),n.push("/account")}catch(e){console.log(e),oe(e)}}function oe(e){G.value=!1;let n="";n=e.code?g.global.t(`message.notification_tx_error_${e.code}`):g.global.t("message.notification_tx_error_rejected"),D.notify({group:"default",clean:!0}),D.notify({group:"default",speed:200,duration:6e3,title:g.global.t("message.notification_tx_error_title"),text:n,type:"error"}),t.networks[t.currentNetwork].currentTxHash=null,t.resetTxFee()}return(0,a.KC)((()=>{if(u.query.data){let e=u.query.data.split("|");"send"===e[0]&&(V.value=e[1],H.value=e[2],ee(),ne())}})),(0,a.wB)((0,a.EW)((()=>Z.value)),(()=>{Z.value&&(z.value=[{typeUrl:"/cosmos.bank.v1beta1.MsgSend",value:{fromAddress:t.currentAddress,toAddress:V.value,amount:[{denom:M.denom,amount:""+parseFloat(H.value.toString().replace(",",".")).toFixed(M.exponent)*Math.pow(10,M.exponent)}]}}])})),(0,a.hi)((()=>{f.off("auth"),f.off("close_sign_tx_modal")})),f.on("auth",(()=>{Y.value=!1,ae()})),f.on("close_sign_tx_modal",(()=>{Y.value=!1})),(e,n)=>{const u=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("section",b,[G.value?((0,a.uX)(),(0,a.Wv)(_.A,{key:0})):(0,a.Q3)("",!0),(0,a.Lk)("div",R,[(0,a.Lk)("div",y,[(0,a.bF)(u,{to:"/account",class:"back_btn"},{default:(0,a.k6)((()=>[h])),_:1}),(0,a.Lk)("div",x,(0,o.v_)(e.$t("message.send_page_title")),1)]),(0,a.Lk)("div",L,[(0,a.Lk)("div",w,[(0,a.Lk)("div",C,[(0,a.Lk)("img",{src:(0,l.R1)(M).token_info.logo_URIs.svg,alt:(0,l.R1)(M).token_info.name,loading:"lazy"},null,8,A)]),(0,a.Lk)("div",$,(0,o.v_)((0,l.R1)(M).token_info.symbol),1),(0,a.Lk)("div",F,[(0,a.Lk)("div",N,(0,o.v_)((0,l.R1)(v.NJ)((0,l.R1)(M).amount,(0,l.R1)(M).exponent).toLocaleString("ru-RU",{maximumFractionDigits:7}).replace(",",".")),1),(0,a.Lk)("div",T,(0,o.v_)((0,l.R1)(v.ST)((0,l.R1)(v.Y$)((0,l.R1)(M).token_info.symbol,(0,l.R1)(M).amount,(0,l.R1)(M).exponent)))+" "+(0,o.v_)((0,l.R1)(t).currentCurrencySymbol),1)])])]),(0,a.Lk)("div",S,[(0,a.Lk)("div",K,(0,o.v_)(e.$t("message.send_address_label")),1),(0,a.Lk)("div",Q,[(0,a.bo)((0,a.Lk)("input",{type:"text",class:"input big","onUpdate:modelValue":n[0]||(n[0]=e=>V.value=e),ref_key:"addressInput",ref:j,onFocus:n[1]||(n[1]=e=>(0,l.R1)(f).emit("show_keyboard")),onBlur:n[2]||(n[2]=e=>(0,l.R1)(f).emit("hide_keyboard")),onInput:n[3]||(n[3]=e=>ee()),onPaste:n[4]||(n[4]=e=>ee())},null,544),[[s.Jo,V.value]]),(0,a.bF)(p.A,{class:"in_field"})])]),(0,a.Lk)("div",W,[(0,a.Lk)("div",J,[(0,a.eW)((0,o.v_)(e.$t("message.send_amount_label"))+" ",1),(0,a.Lk)("div",X,(0,o.v_)((0,l.R1)(v.ST)((0,l.R1)(v.Y$)((0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].token_name,H.value*Math.pow(10,(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].exponent),(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].exponent)))+" "+(0,o.v_)((0,l.R1)(t).currentCurrencySymbol),1)]),(0,a.Lk)("div",E,[(0,a.bo)((0,a.Lk)("input",{type:"number",inputmode:"numeric",class:"input big","onUpdate:modelValue":n[5]||(n[5]=e=>H.value=e),placeholder:"0.00",onFocus:n[6]||(n[6]=e=>(0,l.R1)(f).emit("show_keyboard")),onBlur:n[7]||(n[7]=e=>(0,l.R1)(f).emit("hide_keyboard")),onInput:n[8]||(n[8]=e=>ne())},null,544),[[s.Jo,H.value]]),(0,a.Lk)("button",{type:"button",class:"max_btn",onClick:(0,s.D$)(te,["prevent"])},(0,o.v_)(e.$t("message.btn_MAX")),1)])]),(0,a.Lk)("div",I,[(0,a.Lk)("div",U,(0,o.v_)(e.$t("message.memo_label")),1),(0,a.Lk)("div",q,[(0,a.bo)((0,a.Lk)("input",{type:"text",class:"input big","onUpdate:modelValue":n[9]||(n[9]=e=>P.value=e),onFocus:n[10]||(n[10]=e=>(0,l.R1)(f).emit("show_keyboard")),onBlur:n[11]||(n[11]=e=>(0,l.R1)(f).emit("hide_keyboard"))},null,544),[[s.Jo,P.value]])])]),Z.value?((0,a.uX)(),(0,a.Wv)(k.A,{key:0,msgAny:z.value,txType:"send"},null,8,["msgAny"])):(0,a.Q3)("",!0),(0,a.Lk)("div",B,[(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].currentTxHash?((0,a.uX)(),(0,a.CE)("button",{key:1,class:"btn waiting_btn",onClick:n[13]||(n[13]=(0,s.D$)((e=>(0,l.R1)(f).emit("show_pending_notification")),["prevent"]))},[(0,a.Lk)("span",null,(0,o.v_)(e.$t("message.btn_waiting_tx")),1)])):((0,a.uX)(),(0,a.CE)("button",{key:0,class:(0,o.C4)(["btn",{disabled:!(0,l.R1)(t).TxFee.isEnough}]),onClick:n[12]||(n[12]=(0,s.D$)((e=>Y.value=!0),["prevent"]))},[(0,a.Lk)("span",null,(0,o.v_)(e.$t("message.btn_send")),1)],2))])])]),Y.value?((0,a.uX)(),(0,a.Wv)(m.A,{key:0})):(0,a.Q3)("",!0)],64)}}},M=n(71241);const j=(0,M.A)(D,[["__scopeId","data-v-fed43466"]]);var V=j}}]);
//# sourceMappingURL=232.d3e87bd8.js.map