"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[894],{54636:function(e,a,n){n.d(a,{A:function(){return h}});var t=n(56768),l=n(45130),o=n(24113),s=n(90144);const u=e=>((0,t.Qi)("data-v-33f4e966"),e=e(),(0,t.jt)(),e),c=o+"#ic_arrow_hor",r=o+"#ic_search",i=o+"#ic_close",v={class:"search"},d=u((()=>(0,t.Lk)("span",null,[(0,t.Lk)("svg",null,[(0,t.Lk)("use",{"xlink:href":c})])],-1))),k=[d],_={class:"field"},m=u((()=>(0,t.Lk)("svg",{class:"icon"},[(0,t.Lk)("use",{"xlink:href":r})],-1))),p=["placeholder"],b=u((()=>(0,t.Lk)("svg",null,[(0,t.Lk)("use",{"xlink:href":i})],-1))),f=[b];var g={__name:"Search",props:["source"],setup(e){const a=e,n=(0,t.WQ)("emitter"),o=(0,s.KR)("");function u(){n.emit("show_keyboard"),setTimeout((()=>n.emit("search_focus")),100)}function c(){n.emit("hide_keyboard"),setTimeout((()=>n.emit("search_blur")),100)}function r(){n.emit("search",{query:o.value,source:a.source})}function i(){o.value="",n.emit("search",{query:o.value,source:a.source})}return(e,a)=>((0,t.uX)(),(0,t.CE)("div",v,[(0,t.Lk)("button",{class:"back_btn",onClick:(0,l.D$)(c,["prevent"])},k),(0,t.Lk)("div",_,[m,(0,t.bo)((0,t.Lk)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>o.value=e),class:"input",placeholder:e.$t("message.search_placeholder"),onFocus:u,onBlur:c,onInput:r},null,40,p),[[l.Jo,o.value]]),o.value.length?((0,t.uX)(),(0,t.CE)("button",{key:0,class:"clear_btn",onClick:a[1]||(a[1]=(0,l.D$)((e=>i()),["prevent"]))},f)):(0,t.Q3)("",!0)])]))}},y=n(71241);const L=(0,y.A)(g,[["__scopeId","data-v-33f4e966"]]);var h=L},30112:function(e,a,n){n.d(a,{A:function(){return I}});n(44114);var t=n(56768),l=n(90144),o=n(24232),s=n(76750),u=n(61981),c=n(17086),r=n(54636),i=n(24113);const v=e=>((0,t.Qi)("data-v-2a50009b"),e=e(),(0,t.jt)(),e),d=i+"#ic_check",k={class:"token"},_={class:"logo"},m=["src"],p={key:0,class:"check"},b=v((()=>(0,t.Lk)("svg",null,[(0,t.Lk)("use",{"xlink:href":d})],-1))),f=[b],g={class:"denom"},y={class:"amount"},L={class:"val"},h={class:"cost"};var R={__name:"AvailableTokensItem",props:{balance:{type:Object,default:()=>({})},currentToken:{type:Object,default:()=>({denom:""})}},setup(e){const a=e,n=(0,s.o)();function c(e){return e===a.currentToken.denom}return(e,s)=>{const r=(0,t.g2)("router-link");return(0,t.uX)(),(0,t.Wv)(r,{to:`/account/send?denom=${a.balance.denom}`,class:(0,o.C4)(["token_wrap",{current:c(a.balance.denom)}])},{default:(0,t.k6)((()=>[(0,t.Lk)("div",k,[(0,t.Lk)("div",_,[(0,t.Lk)("img",{src:a.balance.token_info.logo_URIs.svg,alt:"",loading:"lazy"},null,8,m),c(a.balance.denom)?((0,t.uX)(),(0,t.CE)("div",p,f)):(0,t.Q3)("",!0)]),(0,t.Lk)("div",g,(0,o.v_)(a.balance.token_info.symbol),1),(0,t.Lk)("div",y,[(0,t.Lk)("div",L,(0,o.v_)((0,l.R1)(u.NJ)(a.balance.amount,a.balance.exponent).toLocaleString("ru-RU",{maximumFractionDigits:7}).replace(",",".")),1),(0,t.Lk)("div",h,(0,o.v_)((0,l.R1)(u.ST)((0,l.R1)(u.Y$)(a.balance.token_info.symbol,a.balance.amount,a.balance.exponent)))+" "+(0,o.v_)((0,l.R1)(n).currentCurrencySymbol),1)])])])),_:1},8,["to","class"])}}},x=n(71241);const w=(0,x.A)(R,[["__scopeId","data-v-2a50009b"]]);var C=w;const T={class:"available_tokens"},A={class:"cont"},E={key:1,class:"tokens"},$={key:0,class:"count"},X={key:1,class:"list"},F={key:2,class:"empty"};var Q={__name:"AvailableTokens",props:["currentToken"],setup(e){const a=e,n=(0,s.o)(),i=(0,t.WQ)("emitter"),v=(0,l.KR)([]);return(0,t.KC)((()=>{n.isBalancesGot&&(v.value=n.balances)})),(0,t.wB)((0,t.EW)((()=>n.isBalancesGot)),(()=>{n.isBalancesGot&&(v.value=n.balances)})),i.on("search",(({query:e,source:a})=>{if("availabels"===a){v.value=[];for(let a in n.balances)n.balances[a].token_info.symbol.toLocaleLowerCase().includes(e.toLocaleLowerCase())&&v.value.push(n.balances[a])}})),(e,s)=>((0,t.uX)(),(0,t.CE)("section",T,[(0,t.Lk)("div",A,[(0,t.bF)(r.A,{source:"availabels"}),(0,l.R1)(n).isInitialized&&(0,l.R1)(n).isBalancesGot?((0,t.uX)(),(0,t.CE)("div",E,[v.value.length===(0,l.R1)(n).balances.length?((0,t.uX)(),(0,t.CE)("div",$,[(0,t.Lk)("b",null,(0,o.v_)((0,l.R1)(n).balances.length),1),(0,t.eW)(" "+(0,o.v_)(e.$t("message.available_tokens_title")),1)])):(0,t.Q3)("",!0),v.value.length?((0,t.uX)(),(0,t.CE)("div",X,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(v.value,((e,n)=>((0,t.uX)(),(0,t.CE)("div",{class:"item",key:n,style:(0,o.Tr)(`order: ${parseInt(-1e6*(0,l.R1)(u.Y$)(e.token_info.symbol,e.amount,e.exponent))};`)},[(0,t.bF)(C,{balance:e,currentToken:a.currentToken},null,8,["balance","currentToken"])],4)))),128))])):((0,t.uX)(),(0,t.CE)("div",F,(0,o.v_)(e.$t("message.search_empty")),1))])):((0,t.uX)(),(0,t.Wv)(c.A,{key:0}))])]))}};const W=(0,x.A)(Q,[["__scopeId","data-v-d46f343a"]]);var I=W},60889:function(e,a,n){n.d(a,{A:function(){return k}});var t=n(56768),l=n(45130),o=n(24113);const s=e=>((0,t.Qi)("data-v-721280d5"),e=e(),(0,t.jt)(),e),u=o+"#ic_scaner",c=s((()=>(0,t.Lk)("svg",{class:"icon"},[(0,t.Lk)("use",{"xlink:href":u})],-1))),r=[c];var i={__name:"QRCodeScanner",setup(e){function a(){Telegram.WebApp.showScanQrPopup({text:""})}return(e,n)=>((0,t.uX)(),(0,t.CE)("button",{class:"btn",onClick:n[0]||(n[0]=(0,l.D$)((e=>a()),["prevent"]))},r))}},v=n(71241);const d=(0,v.A)(i,[["__scopeId","data-v-721280d5"]]);var k=d},70713:function(e,a,n){n.r(a),n.d(a,{default:function(){return ie}});n(44114);var t=n(56768),l=n(24232),o=n(45130),s=n(90144),u=n(24113),c=n(76750),r=n(81387),i=n(67278),v=n(89354),d=n(61981),k=n(17086),_=n(30112);const m=e=>((0,t.Qi)("data-v-76033aec"),e=e(),(0,t.jt)(),e),p=u+"#ic_arrow_hor",b={class:"page_container inner_page_container tokens_page"},f={class:"cont"},g={class:"head"},y=m((()=>(0,t.Lk)("svg",{class:"icon"},[(0,t.Lk)("use",{"xlink:href":p})],-1))),L=[y],h={class:"page_title"};var R={__name:"TokensModal",props:["currentToken"],setup(e){const a=e,n=(0,t.WQ)("emitter");return(e,o)=>((0,t.uX)(),(0,t.CE)("section",b,[(0,t.Lk)("div",f,[(0,t.Lk)("div",g,[(0,t.Lk)("button",{class:"back_btn",onClick:o[0]||(o[0]=e=>(0,s.R1)(n).emit("close_tokens_modal"))},L),(0,t.Lk)("div",h,(0,l.v_)(e.$t("message.tokens_page_title")),1)]),(0,t.bF)(_.A,{class:"inside_modal",currentToken:a.currentToken},null,8,["currentToken"])])]))}},x=n(71241);const w=(0,x.A)(R,[["__scopeId","data-v-76033aec"]]);var C=w,T=n(84103),A=n(86255),E=n(60889);const $=e=>((0,t.Qi)("data-v-9e662486"),e=e(),(0,t.jt)(),e),X=u+"#ic_arrow_hor",F={class:"page_container inner_page_container send"},Q={class:"cont"},W={class:"head"},I=$((()=>(0,t.Lk)("svg",{class:"icon"},[(0,t.Lk)("use",{"xlink:href":X})],-1))),K={class:"page_title"},S={class:"token"},N={class:"logo"},q=["src"],B={class:"denom"},D={class:"amount"},J={class:"val"},M={class:"cost"},U={class:"token"},j={class:"logo"},O=["src"],V={class:"denom"},G={key:0,class:"amount"},Y=$((()=>(0,t.Lk)("div",{class:"val"},"0",-1))),z={class:"cost"},H={class:"address"},P={class:"field_label"},Z={class:"field"},ee={class:"amount_field"},ae={class:"field_label"},ne={class:"cost"},te={class:"field"},le={class:"memo_field"},oe={class:"field_label"},se={class:"field"},ue={class:"btns"};var ce={__name:"Send",setup(e){const a=(0,c.o)(),n=(0,r.rd)(),u=(0,r.lq)(),_=(0,t.WQ)("emitter"),m=(0,t.WQ)("i18n"),p=(0,i.hN)(),b=(0,s.KR)(a.balances.find((e=>e.denom===u.query.denom))),f=(0,s.KR)(null),g=(0,s.KR)(u.query.address||""),y=(0,s.KR)(u.query.amount||""),L=(0,s.KR)(""),h=(0,s.KR)(!1),R=(0,s.KR)(!1),x=(0,s.KR)([]),w=(0,s.KR)(!1),$=(0,s.KR)(!1),X=(0,s.KR)(!1),ce=(0,s.KR)((0,t.EW)((()=>$.value&&X.value)));function re(){g.value="",y.value="",L.value="",w.value=!1,$.value=!1,X.value=!1,f.value.classList.remove("error"),b.value=a.balances.find((e=>e.denom===u.query.denom)),u.query.address&&(g.value=u.query.address,g.value&&ie()),_.emit("close_any_modal")}function ie(){try{let{prefix:e,data:n}=(0,v.fromBech32)(g.value);e==b.value.chain_info.bech32_prefix&&n.length==a.networks[a.currentNetwork].address_length&&(f.value.classList.remove("error"),X.value=!0)}catch(e){f.value.classList.add("error"),X.value=!1}}function ve(){$.value=!1,setTimeout((()=>{y.value=(0,d.NJ)(b.value.amount,b.value.exponent),$.value=!0}))}function de(){$.value=!1,setTimeout((()=>{y.value.length&&y.value<=0&&(y.value=""),y.value&&y.value>0&&y.value<(0,d.NJ)(b.value.amount,b.value.exponent)&&($.value=!0),y.value>(0,d.NJ)(b.value.amount,b.value.exponent)&&ve()}))}async function ke(){w.value=!0;try{a.TxFee.isRemember&&await a.updateTxFeeInfo();let e=await(0,d.qS)(x.value,L.value);p.notify({group:"default",clean:!0}),p.notify({group:"default",speed:200,duration:-100,title:m.global.t("message.notification_tx_pending_title"),type:"pending",data:{isCollapsible:!0,explorer_link:(0,d.aS)(a.currentNetwork)}}),(0,d.nw)(e).catch((e=>{console.log(e),_e(e)})),a.checkTxResult(),n.push("/account")}catch(e){console.log(e),_e(e)}}function _e(e){w.value=!1;let n="";n=e.code?m.global.t(`message.notification_tx_error_${e.code}`):m.global.t("message.notification_tx_error_rejected"),p.notify({group:"default",clean:!0}),p.notify({group:"default",speed:200,duration:6e3,title:m.global.t("message.notification_tx_error_title"),text:n,type:"error"}),a.networks[a.currentNetwork].currentTxHash=null,a.resetTxFee()}function me(){h.value=!0}function pe(){R.value=!0,a.isAnyModalOpen=!0}return(0,t.sV)((()=>{g.value&&ie(),y.value&&de(),Telegram.WebApp.onEvent("qrTextReceived",(()=>{re()}))})),(0,t.hi)((()=>{_.off("auth"),_.off("close_any_modal"),_.off("close_sign_tx_modal"),Telegram.WebApp.offEvent("qrTextReceived")})),(0,t.wB)((0,t.EW)((()=>u.query.denom)),(()=>{re()})),(0,t.wB)((0,t.EW)((()=>u.query.address)),(()=>{re()})),(0,t.wB)((0,t.EW)((()=>ce.value)),(()=>{ce.value&&(x.value=[{typeUrl:"/cosmos.bank.v1beta1.MsgSend",value:{fromAddress:a.currentAddress,toAddress:g.value,amount:[{denom:b.value.denom,amount:""+parseFloat(y.value.toString().replace(",",".")).toFixed(b.value.exponent)*Math.pow(10,b.value.exponent)}]}}])})),_.on("auth",(()=>{R.value=!1,a.isAnyModalOpen=!1,ke()})),_.on("close_tokens_modal",(()=>{h.value=!1})),_.on("close_sign_tx_modal",(()=>{R.value=!1,a.isAnyModalOpen=!1})),_.on("close_any_modal",(()=>{h.value=!1,R.value=!1,a.isAnyModalOpen=!1})),(e,n)=>{const u=(0,t.g2)("router-link");return(0,t.uX)(),(0,t.CE)(t.FK,null,[(0,t.Lk)("section",F,[w.value?((0,t.uX)(),(0,t.Wv)(k.A,{key:0})):(0,t.Q3)("",!0),(0,t.Lk)("div",Q,[(0,t.Lk)("div",W,[(0,t.bF)(u,{to:"/account",class:"back_btn"},{default:(0,t.k6)((()=>[I])),_:1}),(0,t.Lk)("div",K,(0,l.v_)(e.$t("message.send_page_title")),1)]),b.value?((0,t.uX)(),(0,t.CE)("div",{key:0,class:"token_wrap",onClick:n[0]||(n[0]=(0,o.D$)((e=>me()),["prevent"]))},[(0,t.Lk)("div",S,[(0,t.Lk)("div",N,[(0,t.Lk)("img",{src:b.value.token_info.logo_URIs.svg,alt:"",loading:"lazy"},null,8,q)]),(0,t.Lk)("div",B,(0,l.v_)(b.value.token_info.symbol),1),(0,t.Lk)("div",D,[(0,t.Lk)("div",J,(0,l.v_)((0,s.R1)(d.NJ)(b.value.amount,b.value.exponent).toLocaleString("ru-RU",{maximumFractionDigits:7}).replace(",",".")),1),(0,t.Lk)("div",M,(0,l.v_)((0,s.R1)(d.ST)((0,s.R1)(d.Y$)(b.value.token_info.symbol,b.value.amount,b.value.exponent)))+" "+(0,l.v_)((0,s.R1)(a).currentCurrencySymbol),1)])])])):((0,t.uX)(),(0,t.CE)("div",{key:1,class:"token_wrap",onClick:n[1]||(n[1]=(0,o.D$)((e=>me()),["prevent"]))},[(0,t.Lk)("div",U,[(0,t.Lk)("div",j,[(0,t.Lk)("img",{src:e.getNetworkLogo((0,s.R1)(a).networks[(0,s.R1)(a).currentNetwork].chain_id),alt:""},null,8,O)]),(0,t.Lk)("div",V,(0,l.v_)((0,s.R1)(a).networks[(0,s.R1)(a).currentNetwork].token_name),1),b.value?((0,t.uX)(),(0,t.CE)("div",G,[Y,(0,t.Lk)("div",z," 0.00 "+(0,l.v_)((0,s.R1)(a).currentCurrencySymbol),1)])):(0,t.Q3)("",!0)])])),(0,t.Lk)("div",H,[(0,t.Lk)("div",P,(0,l.v_)(e.$t("message.send_address_label")),1),(0,t.Lk)("div",Z,[(0,t.bo)((0,t.Lk)("input",{type:"text",class:"input big","onUpdate:modelValue":n[2]||(n[2]=e=>g.value=e),ref_key:"addressInput",ref:f,onInput:n[3]||(n[3]=e=>ie()),onPaste:n[4]||(n[4]=e=>ie())},null,544),[[o.Jo,g.value]]),(0,t.bF)(E.A,{class:"in_field"})])]),(0,t.Lk)("div",ee,[(0,t.Lk)("div",ae,[(0,t.eW)((0,l.v_)(e.$t("message.send_amount_label"))+" ",1),(0,t.Lk)("div",ne,(0,l.v_)((0,s.R1)(d.ST)((0,s.R1)(d.Y$)((0,s.R1)(a).networks[(0,s.R1)(a).currentNetwork].token_name,y.value*Math.pow(10,(0,s.R1)(a).networks[(0,s.R1)(a).currentNetwork].exponent),(0,s.R1)(a).networks[(0,s.R1)(a).currentNetwork].exponent)))+" "+(0,l.v_)((0,s.R1)(a).currentCurrencySymbol),1)]),(0,t.Lk)("div",te,[(0,t.bo)((0,t.Lk)("input",{type:"number",inputmode:"numeric",class:"input big","onUpdate:modelValue":n[5]||(n[5]=e=>y.value=e),placeholder:"0.00",onFocus:n[6]||(n[6]=e=>(0,s.R1)(_).emit("show_keyboard",e.target)),onBlur:n[7]||(n[7]=e=>(0,s.R1)(_).emit("hide_keyboard")),onInput:n[8]||(n[8]=e=>de())},null,544),[[o.Jo,y.value]]),(0,t.Lk)("button",{type:"button",class:"max_btn",onClick:(0,o.D$)(ve,["prevent"])},(0,l.v_)(e.$t("message.btn_MAX")),1)])]),(0,t.Lk)("div",le,[(0,t.Lk)("div",oe,(0,l.v_)(e.$t("message.memo_label")),1),(0,t.Lk)("div",se,[(0,t.bo)((0,t.Lk)("input",{type:"text",class:"input big","onUpdate:modelValue":n[9]||(n[9]=e=>L.value=e),onFocus:n[10]||(n[10]=e=>(0,s.R1)(_).emit("show_keyboard",e.target)),onBlur:n[11]||(n[11]=e=>(0,s.R1)(_).emit("hide_keyboard"))},null,544),[[o.Jo,L.value]])])]),ce.value?((0,t.uX)(),(0,t.Wv)(T.A,{key:2,msgAny:x.value,txType:"send"},null,8,["msgAny"])):(0,t.Q3)("",!0),(0,t.Lk)("div",ue,[(0,s.R1)(a).networks[(0,s.R1)(a).currentNetwork].currentTxHash?((0,t.uX)(),(0,t.CE)("button",{key:1,class:"btn waiting_btn",onClick:n[13]||(n[13]=(0,o.D$)((e=>(0,s.R1)(_).emit("show_collapsible_notification")),["prevent"]))},[(0,t.Lk)("span",null,(0,l.v_)(e.$t("message.btn_waiting_tx")),1)])):((0,t.uX)(),(0,t.CE)("button",{key:0,class:(0,l.C4)(["btn",{disabled:!(0,s.R1)(a).TxFee.isEnough}]),onClick:n[12]||(n[12]=(0,o.D$)((e=>pe()),["prevent"]))},[(0,t.Lk)("span",null,(0,l.v_)(e.$t("message.btn_send")),1)],2))])])]),(0,t.bF)(o.eB,{name:"from_right"},{default:(0,t.k6)((()=>[h.value?((0,t.uX)(),(0,t.Wv)(C,{key:0,currentToken:b.value},null,8,["currentToken"])):(0,t.Q3)("",!0)])),_:1}),(0,t.bF)(o.eB,{name:"modal"},{default:(0,t.k6)((()=>[R.value?((0,t.uX)(),(0,t.Wv)(A.A,{key:0})):(0,t.Q3)("",!0)])),_:1}),(0,t.bF)(o.eB,{name:"fade"},{default:(0,t.k6)((()=>[R.value?((0,t.uX)(),(0,t.CE)("div",{key:0,class:"modal_overlay",onClick:n[14]||(n[14]=(0,o.D$)((e=>(0,s.R1)(_).emit("close_any_modal")),["prevent"]))})):(0,t.Q3)("",!0)])),_:1})],64)}}};const re=(0,x.A)(ce,[["__scopeId","data-v-9e662486"]]);var ie=re}}]);
//# sourceMappingURL=894.da0c15e8.js.map