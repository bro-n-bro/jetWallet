"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[122],{91901:function(e,a,n){n.d(a,{A:function(){return p}});var l=n(56768),s=n(45130),t=n(24113),o=n(90144);const i=t+"#ic_arrow_hor",c=t+"#ic_search",r=t+"#ic_close",u={class:"search"},v={class:"field"},d=["placeholder"];var _={__name:"Search",props:["source"],setup(e){const a=e,n=(0,l.WQ)("emitter"),t=(0,o.KR)("");function _(){setTimeout((()=>n.emit("search_focus")),100)}function k(){setTimeout((()=>n.emit("search_blur")),100)}function m(){n.emit("search",{query:t.value,source:a.source})}function p(){t.value="",n.emit("search",{query:t.value,source:a.source})}return(e,a)=>((0,l.uX)(),(0,l.CE)("div",u,[(0,l.Lk)("button",{class:"back_btn",onClick:(0,s.D$)(k,["prevent"])},a[2]||(a[2]=[(0,l.Lk)("span",null,[(0,l.Lk)("svg",null,[(0,l.Lk)("use",{"xlink:href":i})])],-1)])),(0,l.Lk)("div",v,[a[4]||(a[4]=(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":c})],-1)),(0,l.bo)((0,l.Lk)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),class:"input",placeholder:e.$t("message.search_placeholder"),onFocus:_,onBlur:k,onInput:m},null,40,d),[[s.Jo,t.value]]),t.value.length?((0,l.uX)(),(0,l.CE)("button",{key:0,class:"clear_btn",onClick:a[1]||(a[1]=(0,s.D$)((e=>p()),["prevent"]))},a[3]||(a[3]=[(0,l.Lk)("svg",null,[(0,l.Lk)("use",{"xlink:href":r})],-1)]))):(0,l.Q3)("",!0)])]))}},k=n(71241);const m=(0,k.A)(_,[["__scopeId","data-v-aba77f5c"]]);var p=m},46590:function(e,a,n){n.d(a,{A:function(){return Q}});n(44114);var l=n(56768),s=n(90144),t=n(24232),o=n(20033),i=n(79189),c=n(74901),r=n(91901),u=n(34709),v=n(24113);const d=v+"#ic_check",_={class:"token"},k={class:"logo"},m={key:0,src:u,alt:""},p=["src"],h=["src"],f={key:3,class:"check"},b={class:"denom"},g={key:0},C={key:1},L={key:2},y={class:"amount"},R={class:"val"},x={class:"cost"};var w={__name:"AvailableTokensItem",props:{balance:{type:Object,default:()=>({})},currentToken:{type:Object,default:()=>({denom:""})}},setup(e){const a=e,n=(0,o.useGlobalStore)();function c(e){return e===a.currentToken.denom}return(e,o)=>{const r=(0,l.g2)("router-link");return(0,l.uX)(),(0,l.Wv)(r,{to:`/account/send?denom=${a.balance.denom}`,class:(0,t.C4)(["token_wrap",{current:c(a.balance.denom)}])},{default:(0,l.k6)((()=>[(0,l.Lk)("div",_,[(0,l.Lk)("div",k,["uboom"===a.balance.old_base_denom?((0,l.uX)(),(0,l.CE)("img",m)):a.balance.token_info.logo_URIs.svg?((0,l.uX)(),(0,l.CE)("img",{key:1,src:a.balance.token_info.logo_URIs.svg,alt:""},null,8,p)):((0,l.uX)(),(0,l.CE)("img",{key:2,src:a.balance.token_info.logo_URIs.png,alt:""},null,8,h)),c(a.balance.denom)?((0,l.uX)(),(0,l.CE)("div",f,o[0]||(o[0]=[(0,l.Lk)("svg",null,[(0,l.Lk)("use",{"xlink:href":d})],-1)]))):(0,l.Q3)("",!0)]),(0,l.Lk)("div",b,["drop"===a.balance.old_base_denom||"udatom"===a.balance.old_base_denom?((0,l.uX)(),(0,l.CE)("span",g,"d"+(0,t.v_)(a.balance.token_info.symbol),1)):"uboom"===a.balance.old_base_denom?((0,l.uX)(),(0,l.CE)("span",C,"BOOM")):((0,l.uX)(),(0,l.CE)("span",L,(0,t.v_)(a.balance.token_info.symbol),1))]),(0,l.Lk)("div",y,[(0,l.Lk)("div",R,(0,t.v_)((0,s.R1)(i.NJ)(a.balance.amount,a.balance.exponent).toLocaleString("ru-RU",{maximumFractionDigits:7}).replace(",",".")),1),(0,l.Lk)("div",x,(0,t.v_)((0,s.R1)(i.ST)((0,s.R1)(i.Y$)(a.balance.token_info.symbol,a.balance.amount,a.balance.exponent)))+" "+(0,t.v_)((0,s.R1)(n).currentCurrencySymbol),1)])])])),_:1},8,["to","class"])}}},$=n(71241);const E=(0,$.A)(w,[["__scopeId","data-v-ad7ba0a8"]]);var I=E;const B={class:"available_tokens"},X={class:"cont"},S={key:1,class:"tokens"},A={key:0,class:"count"},T={key:1,class:"list"},F={key:2,class:"empty"};var K={__name:"AvailableTokens",props:["currentToken"],setup(e){const a=e,n=(0,o.useGlobalStore)(),u=(0,l.WQ)("emitter"),v=(0,s.KR)([]);return(0,l.KC)((()=>{n.isBalancesGot&&(v.value=n.balances)})),(0,l.wB)((0,l.EW)((()=>n.isBalancesGot)),(()=>{n.isBalancesGot&&(v.value=n.balances)})),u.on("search",(({query:e,source:a})=>{if("availables"===a){v.value=[];for(let a in n.balances)n.balances[a].token_info.symbol.toLocaleLowerCase().includes(e.toLocaleLowerCase())&&v.value.push(n.balances[a])}})),(e,o)=>((0,l.uX)(),(0,l.CE)("section",B,[(0,l.Lk)("div",X,[(0,l.bF)(r.A,{source:"availables"}),(0,s.R1)(n).isInitialized&&(0,s.R1)(n).isBalancesGot?((0,l.uX)(),(0,l.CE)("div",S,[v.value.length===(0,s.R1)(n).balances.length?((0,l.uX)(),(0,l.CE)("div",A,[(0,l.Lk)("b",null,(0,t.v_)((0,s.R1)(n).balances.length),1),(0,l.eW)(" "+(0,t.v_)(e.$t("message.available_tokens_title")),1)])):(0,l.Q3)("",!0),v.value.length?((0,l.uX)(),(0,l.CE)("div",T,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(v.value,((e,n)=>((0,l.uX)(),(0,l.CE)("div",{class:"item",key:n,style:(0,t.Tr)(`order: ${parseInt(-1e6*(0,s.R1)(i.Y$)(e.token_info.symbol,e.amount,e.exponent))};`)},[(0,l.bF)(I,{balance:e,currentToken:a.currentToken},null,8,["balance","currentToken"])],4)))),128))])):((0,l.uX)(),(0,l.CE)("div",F,(0,t.v_)(e.$t("message.search_empty")),1))])):((0,l.uX)(),(0,l.Wv)(c.A,{key:0}))])]))}};const W=(0,$.A)(K,[["__scopeId","data-v-96d84aba"]]);var Q=W},46964:function(e,a,n){n.d(a,{A:function(){return u}});var l=n(56768),s=n(45130),t=n(24113);const o=t+"#ic_scaner";var i={__name:"QRCodeScanner",setup(e){function a(){Telegram.WebApp.showScanQrPopup({text:""})}return(e,n)=>((0,l.uX)(),(0,l.CE)("button",{class:"btn",onClick:n[0]||(n[0]=(0,s.D$)((e=>a()),["prevent"]))},n[1]||(n[1]=[(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":o})],-1)])))}},c=n(71241);const r=(0,c.A)(i,[["__scopeId","data-v-1412c06e"]]);var u=r},7122:function(e,a,n){n.r(a),n.d(a,{default:function(){return Va}});var l=n(56768),s=n(24232),t=n(45130),o=n(90144),i=n(24113),c=n(34709),r=n(20033),u=n(81387),v=n(67278),d=n(89354),_=n(54403),k=n(79189),m=n(74901),p=n(46590);const h=i+"#ic_arrow_hor",f={class:"page_container inner_page_container tokens_page"},b={class:"cont"},g={class:"head"},C={class:"page_title"};var L={__name:"TokensModal",props:["currentToken"],setup(e){const a=e,n=(0,l.WQ)("emitter");return(e,t)=>((0,l.uX)(),(0,l.CE)("section",f,[(0,l.Lk)("div",b,[(0,l.Lk)("div",g,[(0,l.Lk)("button",{class:"back_btn",onClick:t[0]||(t[0]=e=>(0,o.R1)(n).emit("close_tokens_modal"))},t[1]||(t[1]=[(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":h})],-1)])),(0,l.Lk)("div",C,(0,s.v_)(e.$t("message.tokens_page_title")),1)]),(0,l.bF)(p.A,{class:"inside_modal",currentToken:a.currentToken},null,8,["currentToken"])])]))}},y=n(71241);const R=(0,y.A)(L,[["__scopeId","data-v-76033aec"]]);var x=R,w=n(85573),$=(n(44114),n(91901));const E=i+"#ic_close",I={class:"modal"},B={class:"modal_content"},X={class:"data"},S={class:"modal_title"},A={class:"chain_id_field"},T={class:"field_label"},F={class:"field"},K=["placeholder"],W={class:"channel_id_field"},Q={class:"field_label"},D={class:"field"},N=["placeholder"],U={key:0,class:"error_text"},M={class:"btns"};var q={__name:"AddIBCChannelModal",props:["channelForEdit"],setup(e){const a=e,n=(0,r.useGlobalStore)(),i=(0,l.WQ)("emitter"),c=(0,l.WQ)("i18n"),u=(0,v.hN)(),d=(0,o.KR)(null),_=(0,o.KR)(null),k=(0,o.KR)(a.channelForEdit?.info.chain_id||""),m=(0,o.KR)(a.channelForEdit?.channel_id||""),p=(0,o.KR)(!1),h=(0,o.KR)((0,l.EW)((()=>m.value.length&&k.value.length&&!p.value)));function f(e){navigator.clipboard.readText().then((a=>{"chain"===e&&(k.value=a),"channel"===e&&(m.value=a),b()}))}function b(){if(void 0!==d.value){let e=d.value.some((e=>e.info?.pretty_name&&e.info.pretty_name===`${k.value} (${m.value.split("-")[1]})`&&e.info.pretty_name!==a.channelForEdit?.info?.pretty_name));p.value=!!e}}async function g(){try{a.channelForEdit?await n.updateUserChannel({old:a.channelForEdit,info:{chain_id:k.value,pretty_name:`${k.value} (${m.value.split("-")[1]})`},channel_id:m.value}):await n.setUserChannel({info:{chain_id:k.value,pretty_name:`${k.value} (${m.value.split("-")[1]})`},channel_id:m.value}),u.notify({group:"default",speed:200,duration:1e3,title:c.global.t("message.notification_add_user_channel_success"),type:"success"}),i.emit("close_add_IBC_channel_modal",{reload:!0})}catch(e){console.log(e)}}return(0,l.KC)((async()=>{d.value=await n.getAllUserChannels()})),(0,l.hi)((()=>{i.off("close_add_IBC_channel_modal")})),(e,a)=>((0,l.uX)(),(0,l.CE)("section",I,[(0,l.Lk)("div",B,[(0,l.Lk)("div",X,[(0,l.Lk)("button",{class:"close_btn",onClick:a[0]||(a[0]=(0,t.D$)((e=>(0,o.R1)(i).emit("close_add_IBC_channel_modal",{reload:!1})),["prevent"]))},a[8]||(a[8]=[(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":E})],-1)])),(0,l.Lk)("div",S,(0,s.v_)(e.$t("message.add_IBC_channel_title")),1),(0,l.Lk)("div",A,[(0,l.Lk)("div",T,(0,s.v_)(e.$t("message.add_IBC_channel_chain_label")),1),(0,l.Lk)("div",F,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:"input big","onUpdate:modelValue":a[1]||(a[1]=e=>k.value=e),ref_key:"chainIDInput",ref:_,placeholder:e.$t("message.placeholder_chain_ID"),onInput:a[2]||(a[2]=e=>b())},null,40,K),[[t.Jo,k.value]]),(0,l.Lk)("button",{class:"paste_btn",onClick:a[3]||(a[3]=(0,t.D$)((e=>f("chain")),["prevent"]))},(0,s.v_)(e.$t("message.btn_paste")),1)])]),(0,l.Lk)("div",W,[(0,l.Lk)("div",Q,(0,s.v_)(e.$t("message.add_IBC_channel_id_label")),1),(0,l.Lk)("div",D,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:"input big","onUpdate:modelValue":a[4]||(a[4]=e=>m.value=e),placeholder:e.$t("message.placeholder_source_channel_ID"),onInput:a[5]||(a[5]=e=>b())},null,40,N),[[t.Jo,m.value]]),(0,l.Lk)("button",{class:"paste_btn",onClick:a[6]||(a[6]=(0,t.D$)((e=>f("channel")),["prevent"]))},(0,s.v_)(e.$t("message.btn_paste")),1)])]),p.value?((0,l.uX)(),(0,l.CE)("div",U,(0,s.v_)(e.$t("message.add_IBC_channel_error_already_exists")),1)):(0,l.Q3)("",!0),(0,l.Lk)("div",M,[(0,l.Lk)("button",{class:(0,s.C4)(["btn",{disabled:!h.value}]),onClick:a[7]||(a[7]=(0,t.D$)((e=>g()),["prevent"]))},[(0,l.Lk)("span",null,(0,s.v_)(e.$t("message.btn_save")),1)],2)])])])]))}};const O=(0,y.A)(q,[["__scopeId","data-v-16a321a4"]]);var J=O;const G=i+"#ic_arrow_hor",V=i+"#ic_plus",P=i+"#ic_user",Y=i+"#ic_check",j=i+"#ic_remove",H=i+"#ic_edit",z={class:"page_container inner_page_container chains_page"},Z={class:"cont"},ee={class:"head"},ae={class:"page_title"},ne={class:"chains"},le={key:0,class:"list"},se=["onClick"],te={class:"chain"},oe={class:"logo"},ie=["src"],ce={key:0,class:"check"},re={class:"name"},ue=["onClick"],ve=["onClick"],de={key:1,class:"empty"};var _e={__name:"ChainsModal",setup(e){const a=(0,r.useGlobalStore)(),n=(0,l.WQ)("emitter"),i=(0,o.KR)([]),c=(0,o.KR)([]),u=(0,o.KR)(null),v=(0,o.KR)(!1);async function d(){i.value=_.tX.filter((e=>e.chain_1.chain_name===a.currentNetwork||e.chain_2.chain_name===a.currentNetwork)).filter(((e,a,n)=>n.findIndex((a=>a.chain_1.chain_name===e.chain_1.chain_name&&a.chain_2.chain_name===e.chain_2.chain_name||a.chain_1.chain_name===e.chain_2.chain_name&&a.chain_2.chain_name===e.chain_1.chain_name))===a)),i.value.forEach((e=>{let n=e.chain_2.chain_name===a.currentNetwork?e.chain_1.chain_name:e.chain_2.chain_name;e.info=_.Bt.find((e=>e.chain_name===n))})),i.value=i.value.filter((e=>void 0!==e.info));let e=await a.getAllUserChannels();void 0!==e&&(i.value=[...e,...i.value]),c.value=i.value}function m(e){if(a.IBCSendCurrentChain&&a.IBCSendCurrentChain.info.pretty_name===e)return!0}function p(e){a.IBCSendCurrentChain=e,n.emit("close_chains_modal")}async function h(e){await a.deleteUserChannel(e.info.pretty_name),await d()}function f(e){u.value=e,v.value=!0,a.isAnyModalOpen=!0}function b(){u.value=null,v.value=!0,a.isAnyModalOpen=!0}return(0,l.KC)((async()=>{await d()})),(0,l.hi)((()=>{n.off("close_any_modal"),n.off("close_add_IBC_channel_modal")})),n.on("search",(({query:e,source:a})=>{if("chains"===a){c.value=[];for(let a in i.value)i.value[a].info.pretty_name.toLocaleLowerCase().includes(e.toLocaleLowerCase())&&c.value.push(i.value[a])}})),n.on("close_add_IBC_channel_modal",(async({reload:e})=>{e&&await d(),v.value=!1})),n.on("close_any_modal",(()=>{v.value=!1,a.isAnyModalOpen=!1})),(e,a)=>((0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("section",z,[(0,l.Lk)("div",Z,[(0,l.Lk)("div",ee,[(0,l.Lk)("button",{class:"back_btn",onClick:a[0]||(a[0]=e=>(0,o.R1)(n).emit("close_chains_modal"))},a[5]||(a[5]=[(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":G})],-1)])),(0,l.Lk)("div",ae,(0,s.v_)(e.$t("message.chains_page_title")),1),(0,l.Lk)("button",{class:"add_chain_btn",onClick:a[1]||(a[1]=(0,t.D$)((e=>b()),["prevent"]))},[(0,l.Lk)("span",null,[a[6]||(a[6]=(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":V})],-1)),(0,l.eW)(" "+(0,s.v_)(e.$t("message.btn_add_chain")),1)])])]),(0,l.bF)($.A,{source:"chains"}),(0,l.Lk)("div",ne,[c.value.length?((0,l.uX)(),(0,l.CE)("div",le,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(c.value,((e,n)=>((0,l.uX)(),(0,l.CE)("div",{class:"item",key:n},[(0,l.Lk)("div",{class:(0,s.C4)(["chain_wrap",{current:m(e.info.pretty_name)}]),onClick:(0,t.D$)((a=>p(e)),["prevent"])},[(0,l.Lk)("div",te,[(0,l.Lk)("div",oe,[(0,l.Lk)("img",{src:(0,o.R1)(k.oB)(e.info?.chain_id),alt:"",onError:a[2]||(a[2]=e=>(0,o.R1)(k.on)(e)),onLoad:a[3]||(a[3]=e=>(0,o.R1)(k.p4)(e))},null,40,ie),a[8]||(a[8]=(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":P})],-1)),m(e.info.pretty_name)?((0,l.uX)(),(0,l.CE)("div",ce,a[7]||(a[7]=[(0,l.Lk)("svg",null,[(0,l.Lk)("use",{"xlink:href":Y})],-1)]))):(0,l.Q3)("",!0)]),(0,l.Lk)("div",null,[(0,l.Lk)("div",re,(0,s.v_)(e.info.pretty_name),1),e.channel_id?((0,l.uX)(),(0,l.CE)("button",{key:0,class:"delete_btn",onClick:(0,t.D$)((a=>h(e)),["stop","prevent"])},a[9]||(a[9]=[(0,l.Lk)("svg",null,[(0,l.Lk)("use",{"xlink:href":j})],-1)]),8,ue)):(0,l.Q3)("",!0),e.channel_id?((0,l.uX)(),(0,l.CE)("button",{key:1,class:"edit_btn",onClick:(0,t.D$)((a=>f(e)),["stop","prevent"])},a[10]||(a[10]=[(0,l.Lk)("svg",null,[(0,l.Lk)("use",{"xlink:href":H})],-1)]),8,ve)):(0,l.Q3)("",!0)])])],10,se)])))),128))])):((0,l.uX)(),(0,l.CE)("div",de,(0,s.v_)(e.$t("message.search_empty_validator")),1))])])]),(0,l.bF)(t.eB,{name:"modal"},{default:(0,l.k6)((()=>[v.value?((0,l.uX)(),(0,l.Wv)(J,{key:0,channelForEdit:u.value},null,8,["channelForEdit"])):(0,l.Q3)("",!0)])),_:1}),(0,l.bF)(t.eB,{name:"fade"},{default:(0,l.k6)((()=>[v.value?((0,l.uX)(),(0,l.CE)("div",{key:0,class:"modal_overlay",onClick:a[4]||(a[4]=(0,t.D$)((e=>(0,o.R1)(n).emit("close_any_modal")),["prevent"]))})):(0,l.Q3)("",!0)])),_:1})],64))}};const ke=(0,y.A)(_e,[["__scopeId","data-v-77d4ecfe"]]);var me=ke,pe=n(46964),he=n(86255);const fe=i+"#ic_arrow_hor",be={class:"page_container inner_page_container send_confirm"},ge={class:"cont"},Ce={class:"head"},Le={class:"page_title"},ye={class:"data"},Re={class:"field_label"},xe={class:"info_wrap"},we={class:"info"},$e={class:"features"},Ee={key:0},Ie={class:"label"},Be={class:"val"},Xe=["src"],Se={key:1},Ae={class:"label"},Te={class:"val"},Fe=["src"],Ke={key:2},We={class:"label"},Qe={class:"val"},De={key:3},Ne={class:"label"},Ue={class:"val"},Me={class:"label"},qe={class:"val"},Oe={class:"currency"},Je={class:"label"},Ge={class:"val"},Ve={class:"memo_field"},Pe={class:"field_label"},Ye={class:"field"},je=["placeholder"],He={class:"btns"};var ze={__name:"SendConfirmModal",props:["balance","amount","msgAny","type"],setup(e){const a=e,n=(0,r.useGlobalStore)(),i=(0,u.rd)(),c=(0,l.WQ)("emitter"),d=(0,l.WQ)("i18n"),_=(0,v.hN)(),p=(0,o.KR)(!1),h=(0,o.KR)(""),f=(0,l.EW)((()=>(0,k.NJ)(n.TxFee.userGasAmount*n.TxFee[`${n.TxFee.currentLevel}Price`],n.TxFee.balance.exponent))),b=(0,o.KR)(!1);async function g(){b.value=!0;try{n.TxFee.isRemember&&await n.updateTxFeeInfo();let e=await(0,k.qS)(a.msgAny,h.value);_.notify({group:"default",clean:!0}),_.notify({group:"default",speed:200,duration:-100,title:d.global.t("message.notification_tx_pending_title"),type:"pending",data:{isCollapsible:!0,explorer_link:(0,k.aS)(n.currentNetwork)}}),(0,k.nw)(e).catch((e=>{console.log(e),C(e)})),i.push("/account")}catch(e){console.log(e),C(e)}}function C(e){b.value=!1;let a="";a=e.code?d.global.t(`message.notification_tx_error_${e.code}`):d.global.t("message.notification_tx_error_rejected"),_.notify({group:"default",clean:!0}),_.notify({group:"default",speed:200,duration:6e3,title:d.global.t("message.notification_tx_error_title"),text:a,type:"error"}),n.networks[n.currentNetwork].currentTxHash=null,n.resetTxFee()}function L(){p.value=!0,n.isAnyModalOpen=!0}return(0,l.hi)((()=>{c.off("auth"),c.off("close_sign_tx_modal")})),c.on("auth",(()=>{p.value=!1,n.isAnyModalOpen=!1,g()})),c.on("close_sign_tx_modal",(()=>{p.value=!1,n.isAnyModalOpen=!1})),c.on("close_any_modal",(()=>{p.value=!1,n.isAnyModalOpen=!1})),(e,i)=>((0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("section",be,[b.value?((0,l.uX)(),(0,l.Wv)(m.A,{key:0})):(0,l.Q3)("",!0),(0,l.Lk)("div",ge,[(0,l.Lk)("div",Ce,[(0,l.Lk)("button",{class:"back_btn",onClick:i[0]||(i[0]=e=>(0,o.R1)(c).emit("close_send_confirm_modal"))},i[4]||(i[4]=[(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":fe})],-1)])),(0,l.Lk)("div",Le,(0,s.v_)(e.$t("message.send_confirm_page_title")),1)]),(0,l.Lk)("div",ye,[(0,l.Lk)("div",Re,(0,s.v_)(e.$t("message.details_label")),1),(0,l.Lk)("div",xe,[(0,l.Lk)("div",we,[(0,l.Lk)("div",$e,[2===a.type?((0,l.uX)(),(0,l.CE)("div",Ee,[(0,l.Lk)("div",Ie,(0,s.v_)(e.$t("message.send_confirm_chain_from_label")),1),(0,l.Lk)("div",Be,[(0,l.Lk)("img",{src:(0,o.R1)(k.oB)((0,o.R1)(n).networks[(0,o.R1)(n).currentNetwork].chain_id),alt:""},null,8,Xe),(0,l.Lk)("span",null,(0,s.v_)((0,o.R1)(n).networks[(0,o.R1)(n).currentNetwork].name),1)])])):(0,l.Q3)("",!0),2===a.type?((0,l.uX)(),(0,l.CE)("div",Se,[(0,l.Lk)("div",Ae,(0,s.v_)(e.$t("message.send_confirm_chain_to_label")),1),(0,l.Lk)("div",Te,[(0,l.Lk)("img",{src:(0,o.R1)(k.oB)((0,o.R1)(n).IBCSendCurrentChain?.info.chain_id),alt:""},null,8,Fe),(0,l.Lk)("span",null,(0,s.v_)((0,o.R1)(n).IBCSendCurrentChain?.info.pretty_name),1)])])):(0,l.Q3)("",!0),1===a.type?((0,l.uX)(),(0,l.CE)("div",Ke,[(0,l.Lk)("div",We,(0,s.v_)(e.$t("message.send_confirm_receiver_label")),1),(0,l.Lk)("div",Qe,[(0,l.Lk)("span",null,(0,s.v_)(a.msgAny[0].value.toAddress.slice(0,9)+"..."+a.msgAny[0].value.toAddress.slice(-6)),1)])])):(0,l.Q3)("",!0),2===a.type?((0,l.uX)(),(0,l.CE)("div",De,[(0,l.Lk)("div",Ne,(0,s.v_)(e.$t("message.send_confirm_receiver_label")),1),(0,l.Lk)("div",Ue,[(0,l.Lk)("span",null,(0,s.v_)(a.msgAny[0].value.receiver.slice(0,9)+"..."+a.msgAny[0].value.receiver.slice(-6)),1)])])):(0,l.Q3)("",!0),(0,l.Lk)("div",null,[(0,l.Lk)("div",Me,(0,s.v_)(e.$t("message.stake_confirm_amount_label")),1),(0,l.Lk)("div",qe,[(0,l.eW)((0,s.v_)(a.amount)+" "+(0,s.v_)(a.balance.token_info.symbol)+" ",1),(0,l.Lk)("span",Oe," ("+(0,s.v_)((0,o.R1)(k.ST)((0,o.R1)(k.Yq)(a.amount,a.balance.token_info.symbol)))+(0,s.v_)((0,o.R1)(n).currentCurrencySymbol)+") ",1)])]),(0,l.Lk)("div",null,[(0,l.Lk)("div",Je,(0,s.v_)(e.$t("message.send_confirm_fee_label")),1),(0,l.Lk)("div",Ge,(0,s.v_)(f.value.toLocaleString("ru-RU",{maximumFractionDigits:5}).replace(",","."))+" "+(0,s.v_)((0,o.R1)(n).networks[(0,o.R1)(n).currentNetwork].token_name),1)])])])])]),(0,l.Lk)("div",Ve,[(0,l.Lk)("div",Pe,(0,s.v_)(e.$t("message.memo_label")),1),(0,l.Lk)("div",Ye,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:"input big","onUpdate:modelValue":i[1]||(i[1]=e=>h.value=e),placeholder:e.$t("message.placeholder_memo")},null,8,je),[[t.Jo,h.value]])])]),(0,l.Lk)("div",He,[(0,l.Lk)("button",{class:"btn",onClick:i[2]||(i[2]=(0,t.D$)((e=>L()),["prevent"]))},[(0,l.Lk)("span",null,(0,s.v_)(e.$t("message.btn_confirm_send")),1)])])])]),(0,l.bF)(t.eB,{name:"modal"},{default:(0,l.k6)((()=>[p.value?((0,l.uX)(),(0,l.Wv)(he.A,{key:0})):(0,l.Q3)("",!0)])),_:1}),(0,l.bF)(t.eB,{name:"fade"},{default:(0,l.k6)((()=>[p.value?((0,l.uX)(),(0,l.CE)("div",{key:0,class:"modal_overlay",onClick:i[3]||(i[3]=(0,t.D$)((e=>(0,o.R1)(c).emit("close_any_modal")),["prevent"]))})):(0,l.Q3)("",!0)])),_:1})],64))}};const Ze=(0,y.A)(ze,[["__scopeId","data-v-44ff5cb1"]]);var ea=Ze;const aa=i+"#ic_arrow_hor",na=i+"#ic_arr_ver2",la=i+"#ic_user",sa={class:"page_container inner_page_container send"},ta={class:"cont"},oa={class:"head"},ia={class:"tabs_wrap"},ca={class:"tabs"},ra={class:"token"},ua={class:"logo"},va={key:0,src:c,alt:""},da=["src"],_a=["src"],ka={class:"denom"},ma={key:0},pa={key:1},ha={key:2},fa={class:"amount"},ba={class:"val"},ga={class:"cost"},Ca={class:"token"},La={class:"logo"},ya=["src"],Ra={class:"denom"},xa={class:"amount"},wa={class:"cost"},$a={key:2,class:"destination_chain"},Ea={class:"field_label"},Ia={class:"info"},Ba={class:"placeholder"},Xa={class:"chain"},Sa={class:"logo"},Aa=["src"],Ta={class:"name"},Fa={class:"address"},Ka={class:"field_label"},Wa={class:"field"},Qa=["placeholder"],Da={class:"amount_field"},Na={class:"field_label"},Ua={class:"cost"},Ma={class:"field"},qa=["placeholder"],Oa={class:"btns"};var Ja={__name:"SendPage",setup(e){const a=(0,r.useGlobalStore)(),n=(0,u.lq)(),i=(0,l.WQ)("emitter"),c=(0,l.WQ)("i18n"),p=(0,v.hN)(),h=(0,o.KR)(1),f=(0,o.KR)(null),b=(0,o.KR)(null),g=[f,b],C=(0,o.KR)(null),L=(0,o.KR)(null),y=(0,o.KR)(a.balances.find((e=>e.denom===n.query.denom))),R=(0,o.KR)(null),$=(0,o.KR)(n.query.address||""),E=(0,o.KR)(n.query.amount||""),I=(0,o.KR)(!1),B=(0,o.KR)(!1),X=(0,o.KR)(!1),S=(0,o.KR)([]),A=(0,o.KR)(!1),T=(0,o.KR)(!1),F=(0,o.KR)(!1),K=(0,o.KR)((0,l.EW)((()=>T.value&&F.value&&(2!==h.value||null!==a.IBCSendCurrentChain))));function W(){a.IBCSendCurrentChain=null,$.value="",E.value="",A.value=!1,T.value=!1,F.value=!1,R.value.classList.remove("error"),R.value.classList.remove("success"),y.value=a.balances.find((e=>e.denom===n.query.denom)),n.query.address&&($.value=n.query.address,Q()),i.emit("close_any_modal")}function Q(){F.value=!1;try{let{prefix:e,data:n}=(0,d.fromBech32)($.value);1===h.value&&(e===a.networks[a.currentNetwork].prefix&&n.length==a.networks[a.currentNetwork].address_length?(R.value.classList.remove("error"),R.value.classList.add("success"),setTimeout((()=>F.value=!0))):(R.value.classList.remove("success"),R.value.classList.add("error"))),2===h.value&&(null!==a.IBCSendCurrentChain&&void 0===a.IBCSendCurrentChain.channel_id?e===a.IBCSendCurrentChain.info.bech32_prefix?(R.value.classList.remove("error"),R.value.classList.add("success"),setTimeout((()=>F.value=!0))):(R.value.classList.remove("success"),R.value.classList.add("error")):(R.value.classList.remove("success"),R.value.classList.remove("error"),setTimeout((()=>F.value=!0))))}catch(e){void 0===a.IBCSendCurrentChain?.channel_id&&(R.value.classList.remove("success"),R.value.classList.add("error"))}}function D(){T.value=!1,setTimeout((()=>{E.value=(0,k.NJ)(y.value.amount,y.value.exponent),T.value=!0}))}function N(){T.value=!1,setTimeout((()=>{Number(String(E.value).replace(/,/g,".")),String(E.value).length&&E.value<0&&(E.value=""),E.value&&E.value>0&&E.value<(0,k.NJ)(y.value.amount,y.value.exponent)&&(T.value=!0),E.value>(0,k.NJ)(y.value.amount,y.value.exponent)&&D()}))}function U(){navigator.clipboard.readText().then((e=>{try{let{prefix:n,data:l}=(0,d.fromBech32)(e);1===h.value&&(n==a.networks[a.currentNetwork].prefix&&l.length==a.networks[a.currentNetwork].address_length?($.value=e,Q()):p.notify({group:"default",speed:200,duration:1e3,title:c.global.t("message.notification_tx_error_title"),text:c.global.t("message.notification_error_invalid_paste_title"),type:"error"})),2===h.value&&null!==a.IBCSendCurrentChain&&void 0===a.IBCSendCurrentChain.channel_id?n===a.IBCSendCurrentChain.info.bech32_prefix?($.value=e,Q()):p.notify({group:"default",speed:200,duration:1e3,title:c.global.t("message.notification_tx_error_title"),text:c.global.t("message.notification_error_invalid_paste_title"),type:"error"}):$.value=e}catch(n){p.notify({group:"default",speed:200,duration:1e3,title:c.global.t("message.notification_tx_error_title"),text:c.global.t("message.notification_error_invalid_paste_title"),type:"error"})}}))}function M(){I.value=!0}function q(){B.value=!0}return(0,l.sV)((()=>{$.value&&Q(),E.value&&N(),Telegram.WebApp.onEvent("qrTextReceived",(()=>{W()})),C.value=g[h.value-1].value.offsetWidth,L.value=g[h.value-1].value.offsetLeft})),(0,l.hi)((()=>{i.off("auth"),i.off("close_send_confirm_modal"),Telegram.WebApp.offEvent("qrTextReceived")})),(0,l.wB)((0,l.EW)((()=>h.value)),(()=>{if(C.value=g[h.value-1].value.offsetWidth,L.value=g[h.value-1].value.offsetLeft,a.IBCSendCurrentChain=null,$.value="",E.value="",A.value=!1,T.value=!1,F.value=!1,R.value.classList.remove("success"),R.value.classList.remove("error"),2===h.value&&y.value.denom.toLowerCase().startsWith("ibc/")){let e=_.tX.filter((e=>e.chain_1.chain_name===a.currentNetwork&&e.chain_2.chain_name===y.value.chain_info.chain_name||e.chain_2.chain_name===a.currentNetwork&&e.chain_1.chain_name===y.value.chain_info.chain_name)).filter(((e,a,n)=>n.findIndex((a=>a.chain_1.chain_name===e.chain_1.chain_name&&a.chain_2.chain_name===e.chain_2.chain_name||a.chain_1.chain_name===e.chain_2.chain_name&&a.chain_2.chain_name===e.chain_1.chain_name))===a));e.length&&(e[0].info=y.value.chain_info,a.IBCSendCurrentChain=e[0])}})),(0,l.wB)((0,l.EW)((()=>a.IBCSendCurrentChain)),(()=>{null!==a.IBCSendCurrentChain&&$.value&&Q()})),(0,l.wB)((0,l.EW)((()=>n.query.denom)),(()=>{W()})),(0,l.wB)((0,l.EW)((()=>n.query.address)),(()=>{W()})),(0,l.wB)((0,l.EW)((()=>K.value)),(()=>{if(K.value&&1===h.value&&(S.value=[{typeUrl:"/cosmos.bank.v1beta1.MsgSend",value:{fromAddress:a.currentAddress,toAddress:$.value,amount:[{denom:y.value.denom,amount:""+parseFloat(E.value.toString().replace(",",".")).toFixed(y.value.exponent)*Math.pow(10,y.value.exponent)}]}}]),K.value&&2===h.value){let e=null;e=void 0!==a.IBCSendCurrentChain.channel_id?a.IBCSendCurrentChain.channel_id:a.IBCSendCurrentChain.chain_1.chain_name===a.currentNetwork?a.IBCSendCurrentChain.channels[0].chain_1.channel_id:a.IBCSendCurrentChain.channels[0].chain_2.channel_id,S.value=[{typeUrl:"/ibc.applications.transfer.v1.MsgTransfer",value:{sender:a.currentAddress,receiver:$.value,sourceChannel:e,sourcePort:"transfer",token:{denom:y.value.denom,amount:""+parseFloat(E.value.toString().replace(",",".")).toFixed(y.value.exponent)*Math.pow(10,y.value.exponent)},timeoutHeight:{},timeoutTimestamp:1e6*(Date.now()+6e4)}}]}})),i.on("close_chains_modal",(()=>{B.value=!1})),i.on("close_tokens_modal",(()=>{I.value=!1})),i.on("close_send_confirm_modal",(()=>{X.value=!1})),i.on("close_any_modal",(()=>{I.value=!1,a.isAnyModalOpen=!1})),(e,n)=>{const c=(0,l.g2)("router-link");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("section",sa,[A.value?((0,l.uX)(),(0,l.Wv)(m.A,{key:0})):(0,l.Q3)("",!0),(0,l.Lk)("div",ta,[(0,l.Lk)("div",oa,[(0,l.bF)(c,{to:"/account",class:"back_btn"},{default:(0,l.k6)((()=>n[17]||(n[17]=[(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":aa})],-1)]))),_:1}),(0,l.Lk)("div",ia,[(0,l.Lk)("div",ca,[(0,l.Lk)("button",{class:(0,s.C4)(["btn",{active:1===h.value}]),ref_key:"tab1",ref:f,onClick:n[0]||(n[0]=(0,t.D$)((e=>h.value=1),["prevent"]))},[(0,l.Lk)("span",null,(0,s.v_)(e.$t("message.send_page_tab1")),1)],2),(0,l.Lk)("button",{class:(0,s.C4)(["btn",{active:2===h.value}]),ref_key:"tab2",ref:b,onClick:n[1]||(n[1]=(0,t.D$)((e=>h.value=2),["prevent"]))},[(0,l.Lk)("span",null,(0,s.v_)(e.$t("message.send_page_tab2")),1)],2),(0,l.Lk)("div",{class:"roller",style:(0,s.Tr)(`width: ${C.value}px; left: ${L.value}px;`)},n[18]||(n[18]=[(0,l.Lk)("span",null,null,-1)]),4)])])]),y.value?((0,l.uX)(),(0,l.CE)("div",{key:0,class:"token_wrap",onClick:n[2]||(n[2]=(0,t.D$)((e=>M()),["prevent"]))},[(0,l.Lk)("div",ra,[(0,l.Lk)("div",ua,["uboom"===y.value.old_base_denom?((0,l.uX)(),(0,l.CE)("img",va)):y.value.token_info.logo_URIs.svg?((0,l.uX)(),(0,l.CE)("img",{key:1,src:y.value.token_info.logo_URIs.svg,alt:""},null,8,da)):((0,l.uX)(),(0,l.CE)("img",{key:2,src:y.value.token_info.logo_URIs.png,alt:""},null,8,_a))]),(0,l.Lk)("div",ka,["drop"===y.value.old_base_denom||"udatom"===y.value.old_base_denom?((0,l.uX)(),(0,l.CE)("span",ma,"d"+(0,s.v_)(y.value.token_info.symbol),1)):"uboom"===y.value.old_base_denom?((0,l.uX)(),(0,l.CE)("span",pa,"BOOM")):((0,l.uX)(),(0,l.CE)("span",ha,(0,s.v_)(y.value.token_info.symbol),1))]),(0,l.Lk)("div",fa,[(0,l.Lk)("div",ba,(0,s.v_)((0,o.R1)(k.NJ)(y.value.amount,y.value.exponent).toLocaleString("ru-RU",{maximumFractionDigits:7}).replace(",",".")),1),(0,l.Lk)("div",ga,(0,s.v_)((0,o.R1)(k.ST)((0,o.R1)(k.Y$)(y.value.token_info.symbol,y.value.amount,y.value.exponent)))+" "+(0,s.v_)((0,o.R1)(a).currentCurrencySymbol),1)])])])):((0,l.uX)(),(0,l.CE)("div",{key:1,class:"token_wrap",onClick:n[3]||(n[3]=(0,t.D$)((e=>M()),["prevent"]))},[(0,l.Lk)("div",Ca,[(0,l.Lk)("div",La,[(0,l.Lk)("img",{src:(0,o.R1)(k.oB)((0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].chain_id),alt:""},null,8,ya)]),(0,l.Lk)("div",Ra,(0,s.v_)((0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].token_name),1),(0,l.Lk)("div",xa,[n[19]||(n[19]=(0,l.Lk)("div",{class:"val"},"0",-1)),(0,l.Lk)("div",wa," 0.00 "+(0,s.v_)((0,o.R1)(a).currentCurrencySymbol),1)])])])),2===h.value?((0,l.uX)(),(0,l.CE)("div",$a,[(0,l.Lk)("div",Ea,(0,s.v_)(e.$t("message.send_destination_chain_label")),1),(0,o.R1)(a).IBCSendCurrentChain?((0,l.uX)(),(0,l.CE)("div",{key:1,class:(0,s.C4)(["chain_wrap",{disabled:y.value.denom.toLowerCase()!==(0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].denom.toLowerCase()}]),onClick:n[7]||(n[7]=(0,t.D$)((e=>q()),["prevent"]))},[(0,l.Lk)("div",Xa,[(0,l.Lk)("div",Sa,[(0,l.Lk)("img",{src:(0,o.R1)(k.oB)((0,o.R1)(a).IBCSendCurrentChain?.info?.chain_id),alt:"",onError:n[5]||(n[5]=e=>(0,o.R1)(k.on)(e)),onLoad:n[6]||(n[6]=e=>(0,o.R1)(k.p4)(e))},null,40,Aa),n[21]||(n[21]=(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":la})],-1))]),(0,l.Lk)("div",null,[(0,l.Lk)("div",Ta,(0,s.v_)((0,o.R1)(a).IBCSendCurrentChain?.info.pretty_name),1)]),n[22]||(n[22]=(0,l.Lk)("svg",{class:"arr"},[(0,l.Lk)("use",{"xlink:href":na})],-1))])],2)):((0,l.uX)(),(0,l.CE)("div",{key:0,class:(0,s.C4)(["info_wrap",{disabled:y.value.denom.toLowerCase()!==(0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].denom.toLowerCase()}]),onClick:n[4]||(n[4]=(0,t.D$)((e=>q()),["prevent"]))},[(0,l.Lk)("div",Ia,[(0,l.Lk)("div",Ba,(0,s.v_)(e.$t("message.send_destination_chain_placeholder")),1),n[20]||(n[20]=(0,l.Lk)("svg",{class:"arr"},[(0,l.Lk)("use",{"xlink:href":na})],-1))])],2))])):(0,l.Q3)("",!0),(0,l.Lk)("div",Fa,[(0,l.Lk)("div",Ka,(0,s.v_)(e.$t("message.send_address_label")),1),(0,l.Lk)("div",Wa,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:"input big","onUpdate:modelValue":n[8]||(n[8]=e=>$.value=e),ref_key:"addressInput",ref:R,placeholder:e.$t("message.placeholder_address"),onInput:n[9]||(n[9]=e=>Q()),onPaste:n[10]||(n[10]=e=>Q())},null,40,Qa),[[t.Jo,$.value]]),(0,l.Lk)("button",{class:"paste_btn",onClick:n[11]||(n[11]=(0,t.D$)((e=>U()),["prevent"]))},(0,s.v_)(e.$t("message.btn_paste")),1),(0,l.bF)(pe.A,{class:"in_field"})])]),(0,l.Lk)("div",Da,[(0,l.Lk)("div",Na,[(0,l.eW)((0,s.v_)(e.$t("message.send_amount_label"))+" ",1),(0,l.Lk)("div",Ua,(0,s.v_)((0,o.R1)(k.ST)((0,o.R1)(k.Y$)(y.value.token_info.symbol,E.value*Math.pow(10,y.value.exponent),y.value.exponent)))+" "+(0,s.v_)((0,o.R1)(a).currentCurrencySymbol),1)]),(0,l.Lk)("div",Ma,[(0,l.bo)((0,l.Lk)("input",{type:"number",inputmode:"decimal",class:"input big","onUpdate:modelValue":n[12]||(n[12]=e=>E.value=e),placeholder:e.$t("message.placeholder_amount",{token:y.value.token_info.symbol}),onInput:n[13]||(n[13]=e=>N())},null,40,qa),[[t.Jo,E.value]]),(0,l.Lk)("button",{type:"button",class:"max_btn",onClick:n[14]||(n[14]=(0,t.D$)((e=>D()),["prevent"]))},(0,s.v_)(e.$t("message.btn_MAX")),1)])]),K.value?((0,l.uX)(),(0,l.Wv)(w.A,{key:3,msgAny:S.value,txType:"send"},null,8,["msgAny"])):(0,l.Q3)("",!0),(0,l.Lk)("div",Oa,[(0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].currentTxHash?((0,l.uX)(),(0,l.CE)("button",{key:1,class:"btn waiting_btn",onClick:n[16]||(n[16]=(0,t.D$)((e=>(0,o.R1)(i).emit("show_collapsible_notification")),["prevent"]))},[(0,l.Lk)("span",null,(0,s.v_)(e.$t("message.btn_waiting_tx")),1)])):((0,l.uX)(),(0,l.CE)("button",{key:0,class:(0,s.C4)(["btn",{disabled:!(0,o.R1)(a).TxFee.isEnough}]),onClick:n[15]||(n[15]=(0,t.D$)((e=>X.value=!0),["prevent"]))},[(0,l.Lk)("span",null,(0,s.v_)(e.$t("message.btn_send")),1)],2))])])]),(0,l.bF)(t.eB,{name:"from_right"},{default:(0,l.k6)((()=>[B.value?((0,l.uX)(),(0,l.Wv)(me,{key:0})):(0,l.Q3)("",!0)])),_:1}),(0,l.bF)(t.eB,{name:"from_right"},{default:(0,l.k6)((()=>[I.value?((0,l.uX)(),(0,l.Wv)(x,{key:0,currentToken:y.value},null,8,["currentToken"])):(0,l.Q3)("",!0)])),_:1}),(0,l.bF)(t.eB,{name:"from_right"},{default:(0,l.k6)((()=>[X.value?((0,l.uX)(),(0,l.Wv)(ea,{key:0,balance:y.value,amount:E.value,msgAny:S.value,type:h.value},null,8,["balance","amount","msgAny","type"])):(0,l.Q3)("",!0)])),_:1})],64)}}};const Ga=(0,y.A)(Ja,[["__scopeId","data-v-3e36bc2c"]]);var Va=Ga},34709:function(e,a,n){e.exports=n.p+"img/boom_token_logo.8606844c.svg"}}]);
//# sourceMappingURL=122.cd001657.js.map