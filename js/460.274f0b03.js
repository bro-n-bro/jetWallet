"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[460],{10983:function(e,t,n){n.d(t,{A:function(){return _}});var a=n(56768),o=n(45130),l=n(24113);const s=e=>((0,a.Qi)("data-v-dbd53ce6"),e=e(),(0,a.jt)(),e),r=l+"#ic_scaner",u=s((()=>(0,a.Lk)("svg",{class:"icon"},[(0,a.Lk)("use",{"xlink:href":r})],-1))),i=[u];var c={__name:"QRCodeScanner",setup(e){const t=(0,a.WQ)("emitter");function n(){Telegram.WebApp.showScanQrPopup({text:"Наш текст"},(e=>{t.emit("qr_code_received",{data:e.data})}))}return(e,t)=>((0,a.uX)(),(0,a.CE)("button",{class:"btn",onClick:t[0]||(t[0]=(0,o.D$)((e=>n()),["prevent"]))},i))}},d=n(71241);const v=(0,d.A)(c,[["__scopeId","data-v-dbd53ce6"]]);var _=v},4930:function(e,t,n){n.r(t),n.d(t,{default:function(){return V}});n(44114);var a=n(56768),o=n(24232),l=n(90144),s=n(45130),r=n(24113),u=n(76750),i=n(81387),c=n(67278),d=n(89354),v=n(61981),_=n(51115),k=n(2736),m=n(29234),p=n(10983);const g=e=>((0,a.Qi)("data-v-71e4fc87"),e=e(),(0,a.jt)(),e),f=r+"#ic_arrow_hor",b={class:"page_container inner_page_container send"},R={class:"cont"},h={class:"head"},L=g((()=>(0,a.Lk)("svg",{class:"icon"},[(0,a.Lk)("use",{"xlink:href":f})],-1))),x={class:"page_title"},y={class:"token_wrap"},w={class:"token"},A={class:"logo"},C=["src","alt"],$={class:"denom"},F={class:"amount"},T={class:"val"},N={class:"cost"},S={class:"address"},Q={class:"field_label"},W={class:"field"},K={class:"amount_field"},X={class:"field_label"},E={class:"cost"},J={class:"field"},q={class:"memo_field"},I={class:"field_label"},U={class:"field"},B={class:"btns"};var D={__name:"Send",setup(e){const t=(0,u.o)(),n=(0,i.rd)(),r=(0,i.lq)(),g=(0,a.WQ)("emitter"),f=(0,a.WQ)("i18n"),D=(0,c.hN)(),M=t.balances.find((e=>e.denom===r.query.denom)),j=(0,l.KR)(""),V=(0,l.KR)(""),H=(0,l.KR)(""),P=(0,l.KR)(!1),Y=(0,l.KR)([]),z=(0,l.KR)(!1),G=(0,l.KR)(!1),O=(0,l.KR)((0,a.EW)((()=>G.value&&j.value.length)));function Z(e){try{let{prefix:n,data:a}=(0,d.fromBech32)(j.value);n==M.chain_info.bech32_prefix&&a.length==t.networks[t.currentNetwork].address_length&&e.target.classList.remove("error")}catch(n){return e.target.classList.add("error"),!1}}function ee(){G.value=!1,setTimeout((()=>{V.value=(0,v.NJ)(M.amount,M.exponent),G.value=!0}))}function te(e){G.value=!1,setTimeout((()=>{e.target.value.length&&e.target.value<=0&&(V.value=""),e.target.value.length&&e.target.value>0&&e.target.value<(0,v.NJ)(M.amount,M.exponent)&&(G.value=!0),e.target.value>(0,v.NJ)(M.amount,M.exponent)&&ee()}))}async function ne(){z.value=!0;try{t.TxFee.isRemember&&await t.updateTxFeeInfo();let e=await(0,v.qS)(Y.value,H.value);D.notify({group:"default",clean:!0}),D.notify({group:"default",speed:200,duration:-100,title:f.global.t("message.notification_tx_pending_title"),type:"pending",data:{explorer_link:(0,v.aS)(t.currentNetwork)}}),(0,v.nw)(e).catch((e=>{console.log(e),ae(e)})),t.checkTxResult(),n.push("/account")}catch(e){console.log(e),ae(e)}}function ae(e){z.value=!1;let n="";n=e.code?f.global.t(`message.notification_tx_error_${e.code}`):f.global.t("message.notification_tx_error_rejected"),D.notify({group:"default",clean:!0}),D.notify({group:"default",speed:200,duration:6e3,title:f.global.t("message.notification_tx_error_title"),text:n,type:"error"}),t.networks[t.currentNetwork].currentTxHash=null,t.resetTxFee()}return(0,a.wB)((0,a.EW)((()=>O.value)),(()=>{O.value&&(Y.value=[{typeUrl:"/cosmos.bank.v1beta1.MsgSend",value:{fromAddress:t.currentAddress,toAddress:j.value,amount:[{denom:M.denom,amount:""+parseFloat(V.value.toString().replace(",",".")).toFixed(M.exponent)*Math.pow(10,M.exponent)}]}}])})),(0,a.hi)((()=>{g.off("qr_code_received"),g.off("auth"),g.off("close_sign_tx_modal")})),g.on("qr_code_received",(e=>{let t=e.split("|");"send"===t[0]&&(j.value=t[1],j.amount=t[2])})),g.on("auth",(()=>{P.value=!1,ne()})),g.on("close_sign_tx_modal",(()=>{P.value=!1})),(e,u)=>{const i=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("section",b,[z.value?((0,a.uX)(),(0,a.Wv)(_.A,{key:0})):(0,a.Q3)("",!0),(0,a.Lk)("pre",null,(0,o.v_)((0,l.R1)(n)),1),(0,a.Lk)("pre",null,(0,o.v_)((0,l.R1)(r)),1),(0,a.Lk)("div",R,[(0,a.Lk)("div",h,[(0,a.bF)(i,{to:"/account",class:"back_btn"},{default:(0,a.k6)((()=>[L])),_:1}),(0,a.Lk)("div",x,(0,o.v_)(e.$t("message.send_page_title")),1)]),(0,a.Lk)("div",y,[(0,a.Lk)("div",w,[(0,a.Lk)("div",A,[(0,a.Lk)("img",{src:(0,l.R1)(M).token_info.logo_URIs.svg,alt:(0,l.R1)(M).token_info.name,loading:"lazy"},null,8,C)]),(0,a.Lk)("div",$,(0,o.v_)((0,l.R1)(M).token_info.symbol),1),(0,a.Lk)("div",F,[(0,a.Lk)("div",T,(0,o.v_)((0,l.R1)(v.NJ)((0,l.R1)(M).amount,(0,l.R1)(M).exponent).toLocaleString("ru-RU",{maximumFractionDigits:7}).replace(",",".")),1),(0,a.Lk)("div",N,(0,o.v_)((0,l.R1)(v.ST)((0,l.R1)(v.Y$)((0,l.R1)(M).token_info.symbol,(0,l.R1)(M).amount,(0,l.R1)(M).exponent)))+" "+(0,o.v_)((0,l.R1)(t).currentCurrencySymbol),1)])])]),(0,a.Lk)("div",S,[(0,a.Lk)("div",Q,(0,o.v_)(e.$t("message.send_address_label")),1),(0,a.Lk)("div",W,[(0,a.bo)((0,a.Lk)("input",{type:"text",class:"input big","onUpdate:modelValue":u[0]||(u[0]=e=>j.value=e),onFocus:u[1]||(u[1]=e=>(0,l.R1)(g).emit("show_keyboard")),onBlur:u[2]||(u[2]=e=>(0,l.R1)(g).emit("hide_keyboard")),onInput:u[3]||(u[3]=e=>Z(e)),onPaste:u[4]||(u[4]=e=>Z(e))},null,544),[[s.Jo,j.value]]),(0,a.bF)(p.A,{class:"in_field"})])]),(0,a.Lk)("div",K,[(0,a.Lk)("div",X,[(0,a.eW)((0,o.v_)(e.$t("message.send_amount_label"))+" ",1),(0,a.Lk)("div",E,(0,o.v_)((0,l.R1)(v.ST)((0,l.R1)(v.Y$)((0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].token_name,V.value*Math.pow(10,(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].exponent),(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].exponent)))+" "+(0,o.v_)((0,l.R1)(t).currentCurrencySymbol),1)]),(0,a.Lk)("div",J,[(0,a.bo)((0,a.Lk)("input",{type:"number",inputmode:"numeric",class:"input big","onUpdate:modelValue":u[5]||(u[5]=e=>V.value=e),placeholder:"0.00",onFocus:u[6]||(u[6]=e=>(0,l.R1)(g).emit("show_keyboard")),onBlur:u[7]||(u[7]=e=>(0,l.R1)(g).emit("hide_keyboard")),onInput:u[8]||(u[8]=e=>te(e))},null,544),[[s.Jo,V.value]]),(0,a.Lk)("button",{type:"button",class:"max_btn",onClick:(0,s.D$)(ee,["prevent"])},(0,o.v_)(e.$t("message.btn_MAX")),1)])]),(0,a.Lk)("div",q,[(0,a.Lk)("div",I,(0,o.v_)(e.$t("message.memo_label")),1),(0,a.Lk)("div",U,[(0,a.bo)((0,a.Lk)("input",{type:"text",class:"input big","onUpdate:modelValue":u[9]||(u[9]=e=>H.value=e),onFocus:u[10]||(u[10]=e=>(0,l.R1)(g).emit("show_keyboard")),onBlur:u[11]||(u[11]=e=>(0,l.R1)(g).emit("hide_keyboard"))},null,544),[[s.Jo,H.value]])])]),O.value?((0,a.uX)(),(0,a.Wv)(k.A,{key:0,msgAny:Y.value,txType:"send"},null,8,["msgAny"])):(0,a.Q3)("",!0),(0,a.Lk)("div",B,[(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].currentTxHash?((0,a.uX)(),(0,a.CE)("button",{key:1,class:"btn waiting_btn",onClick:u[13]||(u[13]=(0,s.D$)((e=>(0,l.R1)(g).emit("show_pending_notification")),["prevent"]))},[(0,a.Lk)("span",null,(0,o.v_)(e.$t("message.btn_waiting_tx")),1)])):((0,a.uX)(),(0,a.CE)("button",{key:0,class:(0,o.C4)(["btn",{disabled:!(0,l.R1)(t).TxFee.isEnough}]),onClick:u[12]||(u[12]=(0,s.D$)((e=>P.value=!0),["prevent"]))},[(0,a.Lk)("span",null,(0,o.v_)(e.$t("message.btn_send")),1)],2))])])]),P.value?((0,a.uX)(),(0,a.Wv)(m.A,{key:0})):(0,a.Q3)("",!0)],64)}}},M=n(71241);const j=(0,M.A)(D,[["__scopeId","data-v-71e4fc87"]]);var V=j}}]);
//# sourceMappingURL=460.274f0b03.js.map