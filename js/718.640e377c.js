"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[718],{91901:function(e,a,n){n.d(a,{A:function(){return h}});var t=n(56768),l=n(45130),s=n(24113),o=n(90144);const r=e=>((0,t.Qi)("data-v-aba77f5c"),e=e(),(0,t.jt)(),e),u=s+"#ic_arrow_hor",c=s+"#ic_search",i=s+"#ic_close",v={class:"search"},d=r((()=>(0,t.Lk)("span",null,[(0,t.Lk)("svg",null,[(0,t.Lk)("use",{"xlink:href":u})])],-1))),k=[d],_={class:"field"},p=r((()=>(0,t.Lk)("svg",{class:"icon"},[(0,t.Lk)("use",{"xlink:href":c})],-1))),m=["placeholder"],b=r((()=>(0,t.Lk)("svg",null,[(0,t.Lk)("use",{"xlink:href":i})],-1))),f=[b];var g={__name:"Search",props:["source"],setup(e){const a=e,n=(0,t.WQ)("emitter"),s=(0,o.KR)("");function r(){setTimeout((()=>n.emit("search_focus")),100)}function u(){setTimeout((()=>n.emit("search_blur")),100)}function c(){n.emit("search",{query:s.value,source:a.source})}function i(){s.value="",n.emit("search",{query:s.value,source:a.source})}return(e,a)=>((0,t.uX)(),(0,t.CE)("div",v,[(0,t.Lk)("button",{class:"back_btn",onClick:(0,l.D$)(u,["prevent"])},k),(0,t.Lk)("div",_,[p,(0,t.bo)((0,t.Lk)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>s.value=e),class:"input",placeholder:e.$t("message.search_placeholder"),onFocus:r,onBlur:u,onInput:c},null,40,m),[[l.Jo,s.value]]),s.value.length?((0,t.uX)(),(0,t.CE)("button",{key:0,class:"clear_btn",onClick:a[1]||(a[1]=(0,l.D$)((e=>i()),["prevent"]))},f)):(0,t.Q3)("",!0)])]))}},y=n(71241);const L=(0,y.A)(g,[["__scopeId","data-v-aba77f5c"]]);var h=L},39167:function(e,a,n){n.d(a,{A:function(){return N}});n(44114);var t=n(56768),l=n(90144),s=n(24232),o=n(76750),r=n(61981),u=n(17086),c=n(91901),i=n(24113);const v=e=>((0,t.Qi)("data-v-2a50009b"),e=e(),(0,t.jt)(),e),d=i+"#ic_check",k={class:"token"},_={class:"logo"},p=["src"],m={key:0,class:"check"},b=v((()=>(0,t.Lk)("svg",null,[(0,t.Lk)("use",{"xlink:href":d})],-1))),f=[b],g={class:"denom"},y={class:"amount"},L={class:"val"},h={class:"cost"};var R={__name:"AvailableTokensItem",props:{balance:{type:Object,default:()=>({})},currentToken:{type:Object,default:()=>({denom:""})}},setup(e){const a=e,n=(0,o.o)();function u(e){return e===a.currentToken.denom}return(e,o)=>{const c=(0,t.g2)("router-link");return(0,t.uX)(),(0,t.Wv)(c,{to:`/account/send?denom=${a.balance.denom}`,class:(0,s.C4)(["token_wrap",{current:u(a.balance.denom)}])},{default:(0,t.k6)((()=>[(0,t.Lk)("div",k,[(0,t.Lk)("div",_,[(0,t.Lk)("img",{src:a.balance.token_info.logo_URIs.svg,alt:"",loading:"lazy"},null,8,p),u(a.balance.denom)?((0,t.uX)(),(0,t.CE)("div",m,f)):(0,t.Q3)("",!0)]),(0,t.Lk)("div",g,(0,s.v_)(a.balance.token_info.symbol),1),(0,t.Lk)("div",y,[(0,t.Lk)("div",L,(0,s.v_)((0,l.R1)(r.NJ)(a.balance.amount,a.balance.exponent).toLocaleString("ru-RU",{maximumFractionDigits:7}).replace(",",".")),1),(0,t.Lk)("div",h,(0,s.v_)((0,l.R1)(r.ST)((0,l.R1)(r.Y$)(a.balance.token_info.symbol,a.balance.amount,a.balance.exponent)))+" "+(0,s.v_)((0,l.R1)(n).currentCurrencySymbol),1)])])])),_:1},8,["to","class"])}}},x=n(71241);const w=(0,x.A)(R,[["__scopeId","data-v-2a50009b"]]);var C=w;const T={class:"available_tokens"},A={class:"cont"},$={key:1,class:"tokens"},E={key:0,class:"count"},X={key:1,class:"list"},W={key:2,class:"empty"};var Q={__name:"AvailableTokens",props:["currentToken"],setup(e){const a=e,n=(0,o.o)(),i=(0,t.WQ)("emitter"),v=(0,l.KR)([]);return(0,t.KC)((()=>{n.isBalancesGot&&(v.value=n.balances)})),(0,t.wB)((0,t.EW)((()=>n.isBalancesGot)),(()=>{n.isBalancesGot&&(v.value=n.balances)})),i.on("search",(({query:e,source:a})=>{if("availables"===a){v.value=[];for(let a in n.balances)n.balances[a].token_info.symbol.toLocaleLowerCase().includes(e.toLocaleLowerCase())&&v.value.push(n.balances[a])}})),(e,o)=>((0,t.uX)(),(0,t.CE)("section",T,[(0,t.Lk)("div",A,[(0,t.bF)(c.A,{source:"availables"}),(0,l.R1)(n).isInitialized&&(0,l.R1)(n).isBalancesGot?((0,t.uX)(),(0,t.CE)("div",$,[v.value.length===(0,l.R1)(n).balances.length?((0,t.uX)(),(0,t.CE)("div",E,[(0,t.Lk)("b",null,(0,s.v_)((0,l.R1)(n).balances.length),1),(0,t.eW)(" "+(0,s.v_)(e.$t("message.available_tokens_title")),1)])):(0,t.Q3)("",!0),v.value.length?((0,t.uX)(),(0,t.CE)("div",X,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(v.value,((e,n)=>((0,t.uX)(),(0,t.CE)("div",{class:"item",key:n,style:(0,s.Tr)(`order: ${parseInt(-1e6*(0,l.R1)(r.Y$)(e.token_info.symbol,e.amount,e.exponent))};`)},[(0,t.bF)(C,{balance:e,currentToken:a.currentToken},null,8,["balance","currentToken"])],4)))),128))])):((0,t.uX)(),(0,t.CE)("div",W,(0,s.v_)(e.$t("message.search_empty")),1))])):((0,t.uX)(),(0,t.Wv)(u.A,{key:0}))])]))}};const F=(0,x.A)(Q,[["__scopeId","data-v-96d84aba"]]);var N=F},60889:function(e,a,n){n.d(a,{A:function(){return k}});var t=n(56768),l=n(45130),s=n(24113);const o=e=>((0,t.Qi)("data-v-721280d5"),e=e(),(0,t.jt)(),e),r=s+"#ic_scaner",u=o((()=>(0,t.Lk)("svg",{class:"icon"},[(0,t.Lk)("use",{"xlink:href":r})],-1))),c=[u];var i={__name:"QRCodeScanner",setup(e){function a(){Telegram.WebApp.showScanQrPopup({text:""})}return(e,n)=>((0,t.uX)(),(0,t.CE)("button",{class:"btn",onClick:n[0]||(n[0]=(0,l.D$)((e=>a()),["prevent"]))},c))}},v=n(71241);const d=(0,v.A)(i,[["__scopeId","data-v-721280d5"]]);var k=d},28669:function(e,a,n){n.r(a),n.d(a,{default:function(){return ie}});n(44114);var t=n(56768),l=n(24232),s=n(45130),o=n(90144),r=n(24113),u=n(76750),c=n(81387),i=n(67278),v=n(89354),d=n(61981),k=n(17086),_=n(39167);const p=e=>((0,t.Qi)("data-v-76033aec"),e=e(),(0,t.jt)(),e),m=r+"#ic_arrow_hor",b={class:"page_container inner_page_container tokens_page"},f={class:"cont"},g={class:"head"},y=p((()=>(0,t.Lk)("svg",{class:"icon"},[(0,t.Lk)("use",{"xlink:href":m})],-1))),L=[y],h={class:"page_title"};var R={__name:"TokensModal",props:["currentToken"],setup(e){const a=e,n=(0,t.WQ)("emitter");return(e,s)=>((0,t.uX)(),(0,t.CE)("section",b,[(0,t.Lk)("div",f,[(0,t.Lk)("div",g,[(0,t.Lk)("button",{class:"back_btn",onClick:s[0]||(s[0]=e=>(0,o.R1)(n).emit("close_tokens_modal"))},L),(0,t.Lk)("div",h,(0,l.v_)(e.$t("message.tokens_page_title")),1)]),(0,t.bF)(_.A,{class:"inside_modal",currentToken:a.currentToken},null,8,["currentToken"])])]))}},x=n(71241);const w=(0,x.A)(R,[["__scopeId","data-v-76033aec"]]);var C=w,T=n(50358),A=n(86255),$=n(60889);const E=e=>((0,t.Qi)("data-v-758e52f2"),e=e(),(0,t.jt)(),e),X=r+"#ic_arrow_hor",W={class:"page_container inner_page_container send"},Q={class:"cont"},F={class:"head"},N=E((()=>(0,t.Lk)("svg",{class:"icon"},[(0,t.Lk)("use",{"xlink:href":X})],-1))),I={class:"page_title"},K={class:"token"},S={class:"logo"},q=["src"],B={class:"denom"},D={class:"amount"},J={class:"val"},M={class:"cost"},U={class:"token"},j={class:"logo"},O=["src"],V={class:"denom"},G={class:"amount"},Y=E((()=>(0,t.Lk)("div",{class:"val"},"0",-1))),z={class:"cost"},H={class:"address"},P={class:"field_label"},Z={class:"field"},ee={class:"amount_field"},ae={class:"field_label"},ne={class:"cost"},te={class:"field"},le={class:"memo_field"},se={class:"field_label"},oe={class:"field"},re={class:"btns"};var ue={__name:"Send",setup(e){const a=(0,u.o)(),n=(0,c.rd)(),r=(0,c.lq)(),_=(0,t.WQ)("emitter"),p=(0,t.WQ)("i18n"),m=(0,i.hN)(),b=(0,o.KR)(a.balances.find((e=>e.denom===r.query.denom))),f=(0,o.KR)(null),g=(0,o.KR)(r.query.address||""),y=(0,o.KR)(r.query.amount||""),L=(0,o.KR)(""),h=(0,o.KR)(!1),R=(0,o.KR)(!1),x=(0,o.KR)([]),w=(0,o.KR)(!1),E=(0,o.KR)(!1),X=(0,o.KR)(!1),ue=(0,o.KR)((0,t.EW)((()=>E.value&&X.value)));function ce(){g.value="",y.value="",L.value="",w.value=!1,E.value=!1,X.value=!1,f.value.classList.remove("error"),b.value=a.balances.find((e=>e.denom===r.query.denom)),r.query.address&&(g.value=r.query.address,ie()),_.emit("close_any_modal")}function ie(){try{let{prefix:e,data:n}=(0,v.fromBech32)(g.value);e==a.networks[a.currentNetwork].prefix&&n.length==a.networks[a.currentNetwork].address_length?(f.value.classList.remove("error"),X.value=!0):(f.value.classList.add("error"),X.value=!1)}catch(e){f.value.classList.add("error"),X.value=!1}}function ve(){E.value=!1,setTimeout((()=>{y.value=(0,d.NJ)(b.value.amount,b.value.exponent),E.value=!0}))}function de(){E.value=!1,setTimeout((()=>{y.value.length&&y.value<=0&&(y.value=""),y.value&&y.value>0&&y.value<(0,d.NJ)(b.value.amount,b.value.exponent)&&(E.value=!0),y.value>(0,d.NJ)(b.value.amount,b.value.exponent)&&ve()}))}function ke(){navigator.clipboard.readText().then((e=>{try{let{prefix:n,data:t}=(0,v.fromBech32)(e);n==a.networks[a.currentNetwork].prefix&&t.length==a.networks[a.currentNetwork].address_length?g.value=e:m.notify({group:"default",speed:200,duration:1e3,title:p.global.t("message.notification_tx_error_title"),text:p.global.t("message.notification_error_invalid_paste_title"),type:"error"})}catch(n){m.notify({group:"default",speed:200,duration:1e3,title:p.global.t("message.notification_tx_error_title"),text:p.global.t("message.notification_error_invalid_paste_title"),type:"error"})}}))}async function _e(){w.value=!0;try{a.TxFee.isRemember&&await a.updateTxFeeInfo();let e=await(0,d.qS)(x.value,L.value);m.notify({group:"default",clean:!0}),m.notify({group:"default",speed:200,duration:-100,title:p.global.t("message.notification_tx_pending_title"),type:"pending",data:{isCollapsible:!0,explorer_link:(0,d.aS)(a.currentNetwork)}}),(0,d.nw)(e).catch((e=>{console.log(e),pe(e)})),a.checkTxResult(),n.push("/account")}catch(e){console.log(e),pe(e)}}function pe(e){w.value=!1;let n="";n=e.code?p.global.t(`message.notification_tx_error_${e.code}`):p.global.t("message.notification_tx_error_rejected"),m.notify({group:"default",clean:!0}),m.notify({group:"default",speed:200,duration:6e3,title:p.global.t("message.notification_tx_error_title"),text:n,type:"error"}),a.networks[a.currentNetwork].currentTxHash=null,a.resetTxFee()}function me(){h.value=!0}function be(){R.value=!0,a.isAnyModalOpen=!0}return(0,t.sV)((()=>{g.value&&ie(),y.value&&de(),Telegram.WebApp.onEvent("qrTextReceived",(()=>{ce()}))})),(0,t.hi)((()=>{_.off("auth"),_.off("close_sign_tx_modal"),Telegram.WebApp.offEvent("qrTextReceived")})),(0,t.wB)((0,t.EW)((()=>r.query.denom)),(()=>{ce()})),(0,t.wB)((0,t.EW)((()=>r.query.address)),(()=>{ce()})),(0,t.wB)((0,t.EW)((()=>ue.value)),(()=>{ue.value&&(x.value=[{typeUrl:"/cosmos.bank.v1beta1.MsgSend",value:{fromAddress:a.currentAddress,toAddress:g.value,amount:[{denom:b.value.denom,amount:""+parseFloat(y.value.toString().replace(",",".")).toFixed(b.value.exponent)*Math.pow(10,b.value.exponent)}]}}])})),_.on("auth",(()=>{R.value=!1,a.isAnyModalOpen=!1,_e()})),_.on("close_tokens_modal",(()=>{h.value=!1})),_.on("close_sign_tx_modal",(()=>{R.value=!1,a.isAnyModalOpen=!1})),_.on("close_any_modal",(()=>{h.value=!1,R.value=!1,a.isAnyModalOpen=!1})),(e,n)=>{const r=(0,t.g2)("router-link");return(0,t.uX)(),(0,t.CE)(t.FK,null,[(0,t.Lk)("section",W,[w.value?((0,t.uX)(),(0,t.Wv)(k.A,{key:0})):(0,t.Q3)("",!0),(0,t.Lk)("div",Q,[(0,t.Lk)("div",F,[(0,t.bF)(r,{to:"/account",class:"back_btn"},{default:(0,t.k6)((()=>[N])),_:1}),(0,t.Lk)("div",I,(0,l.v_)(e.$t("message.send_page_title")),1)]),b.value?((0,t.uX)(),(0,t.CE)("div",{key:0,class:"token_wrap",onClick:n[0]||(n[0]=(0,s.D$)((e=>me()),["prevent"]))},[(0,t.Lk)("div",K,[(0,t.Lk)("div",S,[(0,t.Lk)("img",{src:b.value.token_info.logo_URIs.svg,alt:"",loading:"lazy"},null,8,q)]),(0,t.Lk)("div",B,(0,l.v_)(b.value.token_info.symbol),1),(0,t.Lk)("div",D,[(0,t.Lk)("div",J,(0,l.v_)((0,o.R1)(d.NJ)(b.value.amount,b.value.exponent).toLocaleString("ru-RU",{maximumFractionDigits:7}).replace(",",".")),1),(0,t.Lk)("div",M,(0,l.v_)((0,o.R1)(d.ST)((0,o.R1)(d.Y$)(b.value.token_info.symbol,b.value.amount,b.value.exponent)))+" "+(0,l.v_)((0,o.R1)(a).currentCurrencySymbol),1)])])])):((0,t.uX)(),(0,t.CE)("div",{key:1,class:"token_wrap",onClick:n[1]||(n[1]=(0,s.D$)((e=>me()),["prevent"]))},[(0,t.Lk)("div",U,[(0,t.Lk)("div",j,[(0,t.Lk)("img",{src:(0,o.R1)(d.oB)((0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].chain_id),alt:""},null,8,O)]),(0,t.Lk)("div",V,(0,l.v_)((0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].token_name),1),(0,t.Lk)("div",G,[Y,(0,t.Lk)("div",z," 0.00 "+(0,l.v_)((0,o.R1)(a).currentCurrencySymbol),1)])])])),(0,t.Lk)("div",H,[(0,t.Lk)("div",P,(0,l.v_)(e.$t("message.send_address_label")),1),(0,t.Lk)("div",Z,[(0,t.bo)((0,t.Lk)("input",{type:"text",class:"input big","onUpdate:modelValue":n[2]||(n[2]=e=>g.value=e),ref_key:"addressInput",ref:f,onInput:n[3]||(n[3]=e=>ie()),onPaste:n[4]||(n[4]=e=>ie())},null,544),[[s.Jo,g.value]]),(0,t.Lk)("button",{class:"paste_btn",onClick:n[5]||(n[5]=(0,s.D$)((e=>ke()),["prevent"]))},(0,l.v_)(e.$t("message.btn_paste")),1),(0,t.bF)($.A,{class:"in_field"})])]),(0,t.Lk)("div",ee,[(0,t.Lk)("div",ae,[(0,t.eW)((0,l.v_)(e.$t("message.send_amount_label"))+" ",1),(0,t.Lk)("div",ne,(0,l.v_)((0,o.R1)(d.ST)((0,o.R1)(d.Y$)((0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].token_name,y.value*Math.pow(10,(0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].exponent),(0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].exponent)))+" "+(0,l.v_)((0,o.R1)(a).currentCurrencySymbol),1)]),(0,t.Lk)("div",te,[(0,t.bo)((0,t.Lk)("input",{type:"number",inputmode:"numeric",class:"input big","onUpdate:modelValue":n[6]||(n[6]=e=>y.value=e),placeholder:"0.00",onInput:n[7]||(n[7]=e=>de())},null,544),[[s.Jo,y.value]]),(0,t.Lk)("button",{type:"button",class:"max_btn",onClick:(0,s.D$)(ve,["prevent"])},(0,l.v_)(e.$t("message.btn_MAX")),1)])]),(0,t.Lk)("div",le,[(0,t.Lk)("div",se,(0,l.v_)(e.$t("message.memo_label")),1),(0,t.Lk)("div",oe,[(0,t.bo)((0,t.Lk)("input",{type:"text",class:"input big","onUpdate:modelValue":n[8]||(n[8]=e=>L.value=e)},null,512),[[s.Jo,L.value]])])]),ue.value?((0,t.uX)(),(0,t.Wv)(T.A,{key:2,msgAny:x.value,txType:"send"},null,8,["msgAny"])):(0,t.Q3)("",!0),(0,t.Lk)("div",re,[(0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].currentTxHash?((0,t.uX)(),(0,t.CE)("button",{key:1,class:"btn waiting_btn",onClick:n[10]||(n[10]=(0,s.D$)((e=>(0,o.R1)(_).emit("show_collapsible_notification")),["prevent"]))},[(0,t.Lk)("span",null,(0,l.v_)(e.$t("message.btn_waiting_tx")),1)])):((0,t.uX)(),(0,t.CE)("button",{key:0,class:(0,l.C4)(["btn",{disabled:!(0,o.R1)(a).TxFee.isEnough}]),onClick:n[9]||(n[9]=(0,s.D$)((e=>be()),["prevent"]))},[(0,t.Lk)("span",null,(0,l.v_)(e.$t("message.btn_send")),1)],2))])])]),(0,t.bF)(s.eB,{name:"from_right"},{default:(0,t.k6)((()=>[h.value?((0,t.uX)(),(0,t.Wv)(C,{key:0,currentToken:b.value},null,8,["currentToken"])):(0,t.Q3)("",!0)])),_:1}),(0,t.bF)(s.eB,{name:"modal"},{default:(0,t.k6)((()=>[R.value?((0,t.uX)(),(0,t.Wv)(A.A,{key:0})):(0,t.Q3)("",!0)])),_:1}),(0,t.bF)(s.eB,{name:"fade"},{default:(0,t.k6)((()=>[R.value?((0,t.uX)(),(0,t.CE)("div",{key:0,class:"modal_overlay",onClick:n[11]||(n[11]=(0,s.D$)((e=>(0,o.R1)(_).emit("close_any_modal")),["prevent"]))})):(0,t.Q3)("",!0)])),_:1})],64)}}};const ce=(0,x.A)(ue,[["__scopeId","data-v-758e52f2"]]);var ie=ce}}]);
//# sourceMappingURL=718.640e377c.js.map