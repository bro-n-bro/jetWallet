"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[612],{91901:function(e,a,n){n.d(a,{A:function(){return p}});var l=n(56768),t=n(45130),s=n(24113),o=n(90144);const i=s+"#ic_arrow_hor",c=s+"#ic_search",u=s+"#ic_close",r={class:"search"},v={class:"field"},d=["placeholder"];var _={__name:"Search",props:["source"],setup(e){const a=e,n=(0,l.WQ)("emitter"),s=(0,o.KR)("");function _(){setTimeout((()=>n.emit("search_focus")),100)}function k(){setTimeout((()=>n.emit("search_blur")),100)}function m(){n.emit("search",{query:s.value,source:a.source})}function p(){s.value="",n.emit("search",{query:s.value,source:a.source})}return(e,a)=>((0,l.uX)(),(0,l.CE)("div",r,[(0,l.Lk)("button",{class:"back_btn",onClick:(0,t.D$)(k,["prevent"])},a[2]||(a[2]=[(0,l.Lk)("span",null,[(0,l.Lk)("svg",null,[(0,l.Lk)("use",{"xlink:href":i})])],-1)])),(0,l.Lk)("div",v,[a[4]||(a[4]=(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":c})],-1)),(0,l.bo)((0,l.Lk)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>s.value=e),class:"input",placeholder:e.$t("message.search_placeholder"),onFocus:_,onBlur:k,onInput:m},null,40,d),[[t.Jo,s.value]]),s.value.length?((0,l.uX)(),(0,l.CE)("button",{key:0,class:"clear_btn",onClick:a[1]||(a[1]=(0,t.D$)((e=>p()),["prevent"]))},a[3]||(a[3]=[(0,l.Lk)("svg",null,[(0,l.Lk)("use",{"xlink:href":u})],-1)]))):(0,l.Q3)("",!0)])]))}},k=n(71241);const m=(0,k.A)(_,[["__scopeId","data-v-aba77f5c"]]);var p=m},89478:function(e,a,n){n.d(a,{A:function(){return Q}});n(44114);var l=n(56768),t=n(90144),s=n(24232),o=n(20033),i=n(43738),c=n(74901),u=n(91901),r=n(34709),v=n(24113);const d=v+"#ic_check",_={class:"token"},k={class:"logo"},m={key:0,src:r,alt:""},p=["src"],h=["src"],f={key:3,class:"check"},b={class:"denom"},g={key:0},C={key:1},L={key:2},y={class:"amount"},R={class:"val"},x={class:"cost"};var w={__name:"AvailableTokensItem",props:{balance:{type:Object,default:()=>({})},currentToken:{type:Object,default:()=>({denom:""})}},setup(e){const a=e,n=(0,o.useGlobalStore)();function c(e){return e===a.currentToken.denom}return(e,o)=>{const u=(0,l.g2)("router-link");return(0,l.uX)(),(0,l.Wv)(u,{to:`/account/send?denom=${a.balance.denom}`,class:(0,s.C4)(["token_wrap",{current:c(a.balance.denom)}])},{default:(0,l.k6)((()=>[(0,l.Lk)("div",_,[(0,l.Lk)("div",k,["uboom"===a.balance.old_base_denom?((0,l.uX)(),(0,l.CE)("img",m)):a.balance.token_info.logo_URIs.svg?((0,l.uX)(),(0,l.CE)("img",{key:1,src:a.balance.token_info.logo_URIs.svg,alt:""},null,8,p)):((0,l.uX)(),(0,l.CE)("img",{key:2,src:a.balance.token_info.logo_URIs.png,alt:""},null,8,h)),c(a.balance.denom)?((0,l.uX)(),(0,l.CE)("div",f,o[0]||(o[0]=[(0,l.Lk)("svg",null,[(0,l.Lk)("use",{"xlink:href":d})],-1)]))):(0,l.Q3)("",!0)]),(0,l.Lk)("div",b,["drop"===a.balance.old_base_denom||"udatom"===a.balance.old_base_denom?((0,l.uX)(),(0,l.CE)("span",g,"d"+(0,s.v_)(a.balance.token_info.symbol),1)):"uboom"===a.balance.old_base_denom?((0,l.uX)(),(0,l.CE)("span",C,"BOOM")):((0,l.uX)(),(0,l.CE)("span",L,(0,s.v_)(a.balance.token_info.symbol),1))]),(0,l.Lk)("div",y,[(0,l.Lk)("div",R,(0,s.v_)((0,t.R1)(i.NJ)(a.balance.amount,a.balance.exponent).toLocaleString("ru-RU",{minimumFractionDigits:2,maximumFractionDigits:7}).replace(",",".")),1),(0,l.Lk)("div",x,(0,s.v_)((0,t.R1)(i.ST)((0,t.R1)(i.Y$)(a.balance.token_info.symbol,a.balance.amount,a.balance.exponent)))+" "+(0,s.v_)((0,t.R1)(n).currentCurrencySymbol),1)])])])),_:1},8,["to","class"])}}},$=n(71241);const E=(0,$.A)(w,[["__scopeId","data-v-5608c294"]]);var I=E;const X={class:"available_tokens"},S={class:"cont"},B={key:1,class:"tokens"},A={key:0,class:"count"},T={key:1,class:"list"},K={key:2,class:"empty"};var F={__name:"AvailableTokens",props:["currentToken"],setup(e){const a=e,n=(0,o.useGlobalStore)(),r=(0,l.WQ)("emitter"),v=(0,t.KR)([]);return(0,l.KC)((()=>{n.isBalancesGot&&(v.value=n.balances)})),(0,l.wB)((0,l.EW)((()=>n.isBalancesGot)),(()=>{n.isBalancesGot&&(v.value=n.balances)})),r.on("search",(({query:e,source:a})=>{if("availables"===a){v.value=[];for(let a in n.balances)n.balances[a].token_info.symbol.toLocaleLowerCase().includes(e.toLocaleLowerCase())&&v.value.push(n.balances[a])}})),(e,o)=>((0,l.uX)(),(0,l.CE)("section",X,[(0,l.Lk)("div",S,[(0,l.bF)(u.A,{source:"availables"}),(0,t.R1)(n).isInitialized&&(0,t.R1)(n).isBalancesGot?((0,l.uX)(),(0,l.CE)("div",B,[v.value.length===(0,t.R1)(n).balances.length?((0,l.uX)(),(0,l.CE)("div",A,[(0,l.Lk)("b",null,(0,s.v_)((0,t.R1)(n).balances.length),1),(0,l.eW)(" "+(0,s.v_)(e.$t("message.available_tokens_title")),1)])):(0,l.Q3)("",!0),v.value.length?((0,l.uX)(),(0,l.CE)("div",T,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(v.value,(e=>((0,l.uX)(),(0,l.CE)("div",{class:"item",key:e.denom,style:(0,s.Tr)(`order: ${parseInt(-1e6*(0,t.R1)(i.Y$)(e.token_info.symbol,e.amount,e.exponent))};`)},[(0,l.bF)(I,{balance:e,currentToken:a.currentToken},null,8,["balance","currentToken"])],4)))),128))])):((0,l.uX)(),(0,l.CE)("div",K,(0,s.v_)(e.$t("message.search_empty")),1))])):((0,l.uX)(),(0,l.Wv)(c.A,{key:0}))])]))}};const W=(0,$.A)(F,[["__scopeId","data-v-64c4dc2f"]]);var Q=W},46964:function(e,a,n){n.d(a,{A:function(){return r}});var l=n(56768),t=n(45130),s=n(24113);const o=s+"#ic_scaner";var i={__name:"QRCodeScanner",setup(e){function a(){Telegram.WebApp.showScanQrPopup({text:""})}return(e,n)=>((0,l.uX)(),(0,l.CE)("button",{class:"btn",onClick:n[0]||(n[0]=(0,t.D$)((e=>a()),["prevent"]))},n[1]||(n[1]=[(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":o})],-1)])))}},c=n(71241);const u=(0,c.A)(i,[["__scopeId","data-v-1412c06e"]]);var r=u},15210:function(e,a,n){n.r(a),n.d(a,{default:function(){return Ma}});var l=n(56768),t=n(24232),s=n(45130),o=n(90144),i=n(24113),c=n(34709),u=n(20033),r=n(81387),v=n(67278),d=n(89354),_=n(84582),k=n(43738),m=n(74901),p=n(89478);const h=i+"#ic_arrow_hor",f={class:"cont"},b={class:"head"},g={class:"page_title"};var C={__name:"TokensModal",props:["currentToken"],setup(e){const a=e,n=(0,l.WQ)("emitter"),s=(0,o.KR)(!1);function i(){s.value=!0,setTimeout((()=>{n.emit("close_tokens_modal")}),200)}return(0,l.sV)((()=>{n.on("update_data",i)})),(0,l.hi)((()=>{n.off("update_data",i)})),(e,n)=>((0,l.uX)(),(0,l.CE)("section",{class:(0,t.C4)(["page_container inner_page_container tokens_page",{closing:s.value}])},[(0,l.Lk)("div",f,[(0,l.Lk)("div",b,[(0,l.Lk)("button",{class:"back_btn",onClick:n[0]||(n[0]=e=>i())},n[1]||(n[1]=[(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":h})],-1)])),(0,l.Lk)("div",g,(0,t.v_)(e.$t("message.tokens_page_title")),1)]),(0,l.bF)(p.A,{class:"inside_modal",currentToken:a.currentToken},null,8,["currentToken"])])],2))}},L=n(71241);const y=(0,L.A)(C,[["__scopeId","data-v-206f7948"]]);var R=y,x=n(15712),w=(n(44114),n(91901));const $=i+"#ic_close",E={class:"modal"},I={class:"modal_content"},X={class:"modal_title"},S={class:"chain_id_field"},B={class:"field_label"},A={class:"field"},T=["placeholder"],K={class:"channel_id_field"},F={class:"field_label"},W={class:"field"},Q=["placeholder"],D={key:0,class:"error_text"},N={class:"btns"};var U={__name:"AddIBCChannelModal",props:["channelForEdit"],setup(e){const a=e,n=(0,u.useGlobalStore)(),i=(0,l.WQ)("emitter"),c=(0,l.WQ)("i18n"),r=(0,v.hN)(),d=(0,o.KR)(null),_=(0,o.KR)(null),k=(0,o.KR)(a.channelForEdit?.info.chain_id||""),m=(0,o.KR)(a.channelForEdit?.channel_id||""),p=(0,o.KR)(!1),h=(0,o.KR)((0,l.EW)((()=>m.value.length&&k.value.length&&!p.value))),f=(0,o.KR)(!1);function b(e=!1){f.value=!0,setTimeout((()=>{i.emit("close_add_IBC_channel_modal",{reload:e})}),200)}function g(e){navigator.clipboard.readText().then((a=>{"chain"===e&&(k.value=a),"channel"===e&&(m.value=a),C()}))}function C(){if(void 0!==d.value){let e=d.value.some((e=>e.info?.pretty_name&&e.info.pretty_name===`${k.value} (${m.value.split("-")[1]})`&&e.info.pretty_name!==a.channelForEdit?.info?.pretty_name));p.value=!!e}}async function L(){try{a.channelForEdit?await n.updateUserChannel({old:a.channelForEdit,info:{chain_id:k.value,pretty_name:`${k.value} (${m.value.split("-")[1]})`},channel_id:m.value}):await n.setUserChannel({info:{chain_id:k.value,pretty_name:`${k.value} (${m.value.split("-")[1]})`},channel_id:m.value}),r.notify({group:"default",speed:200,duration:1e3,title:c.global.t("message.notification_add_user_channel_success"),type:"success"}),b(!0)}catch(e){console.log(e)}}return(0,l.KC)((async()=>{d.value=await n.getAllUserChannels()})),(0,l.sV)((()=>{i.on("close_any_modal",b)})),(0,l.hi)((()=>{i.off("close_any_modal",b)})),(e,a)=>((0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("section",E,[(0,l.Lk)("div",I,[(0,l.Lk)("div",{class:(0,t.C4)(["data",{closing:f.value}])},[(0,l.Lk)("button",{class:"close_btn",onClick:a[0]||(a[0]=(0,s.D$)((e=>b()),["prevent"]))},a[9]||(a[9]=[(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":$})],-1)])),(0,l.Lk)("div",X,(0,t.v_)(e.$t("message.add_IBC_channel_title")),1),(0,l.Lk)("div",S,[(0,l.Lk)("div",B,(0,t.v_)(e.$t("message.add_IBC_channel_chain_label")),1),(0,l.Lk)("div",A,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:"input big","onUpdate:modelValue":a[1]||(a[1]=e=>k.value=e),ref_key:"chainIDInput",ref:_,placeholder:e.$t("message.placeholder_chain_ID"),onInput:a[2]||(a[2]=e=>C())},null,40,T),[[s.Jo,k.value]]),(0,l.Lk)("button",{class:"paste_btn",onClick:a[3]||(a[3]=(0,s.D$)((e=>g("chain")),["prevent"]))},(0,t.v_)(e.$t("message.btn_paste")),1)])]),(0,l.Lk)("div",K,[(0,l.Lk)("div",F,(0,t.v_)(e.$t("message.add_IBC_channel_id_label")),1),(0,l.Lk)("div",W,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:"input big","onUpdate:modelValue":a[4]||(a[4]=e=>m.value=e),placeholder:e.$t("message.placeholder_source_channel_ID"),onInput:a[5]||(a[5]=e=>C())},null,40,Q),[[s.Jo,m.value]]),(0,l.Lk)("button",{class:"paste_btn",onClick:a[6]||(a[6]=(0,s.D$)((e=>g("channel")),["prevent"]))},(0,t.v_)(e.$t("message.btn_paste")),1)])]),p.value?((0,l.uX)(),(0,l.CE)("div",D,(0,t.v_)(e.$t("message.add_IBC_channel_error_already_exists")),1)):(0,l.Q3)("",!0),(0,l.Lk)("div",N,[(0,l.Lk)("button",{class:(0,t.C4)(["btn",{disabled:!h.value}]),onClick:a[7]||(a[7]=(0,s.D$)((e=>L()),["prevent"]))},[(0,l.Lk)("span",null,(0,t.v_)(e.$t("message.btn_save")),1)],2)])],2)])]),(0,l.Lk)("div",{class:(0,t.C4)(["modal_overlay",{closing:f.value}]),onClick:a[8]||(a[8]=(0,s.D$)((e=>b()),["prevent"]))},null,2)],64))}};const q=(0,L.A)(U,[["__scopeId","data-v-138e69be"]]);var M=q;const J=i+"#ic_arrow_hor",G=i+"#ic_plus",V=i+"#ic_user",O=i+"#ic_check",P=i+"#ic_remove",Y=i+"#ic_edit",j={class:"cont"},H={class:"head"},z={class:"page_title"},Z={class:"chains"},ee={key:0,class:"list"},ae=["onClick"],ne={class:"chain"},le={class:"logo"},te=["src"],se={key:0,class:"check"},oe={class:"name"},ie=["onClick"],ce=["onClick"],ue={key:1,class:"empty"};var re={__name:"ChainsModal",setup(e){const a=(0,u.useGlobalStore)(),n=(0,l.WQ)("emitter"),i=(0,o.KR)([]),c=(0,o.KR)([]),r=(0,o.KR)(null),v=(0,o.KR)(!1),d=(0,o.KR)(!1);function m(){d.value=!0,setTimeout((()=>{n.emit("close_chains_modal")}),200)}async function p(){i.value=_.tX.filter((e=>e.chain_1.chain_name===a.currentNetwork||e.chain_2.chain_name===a.currentNetwork)).filter(((e,a,n)=>n.findIndex((a=>a.chain_1.chain_name===e.chain_1.chain_name&&a.chain_2.chain_name===e.chain_2.chain_name||a.chain_1.chain_name===e.chain_2.chain_name&&a.chain_2.chain_name===e.chain_1.chain_name))===a)),i.value.forEach((e=>{let n=e.chain_2.chain_name===a.currentNetwork?e.chain_1.chain_name:e.chain_2.chain_name;e.info=_.Bt.find((e=>e.chain_name===n))})),i.value=i.value.filter((e=>void 0!==e.info));let e=await a.getAllUserChannels();void 0!==e&&(i.value=[...e,...i.value]),c.value=i.value}function h(e){if(a.IBCSendCurrentChain&&a.IBCSendCurrentChain.info.pretty_name===e)return!0}function f(e){a.IBCSendCurrentChain=e,m()}async function b(e){await a.deleteUserChannel(e.info.pretty_name),await p()}function g(e){r.value=e,v.value=!0,a.isAnyModalOpen=!0}function C(){r.value=null,v.value=!0,a.isAnyModalOpen=!0}async function L({reload:e}){e&&await p(),v.value=!1}return(0,l.KC)((async()=>{await p()})),(0,l.sV)((()=>{n.on("close_add_IBC_channel_modal",L)})),(0,l.hi)((()=>{n.off("close_add_IBC_channel_modal",L)})),n.on("search",(({query:e,source:a})=>{if("chains"===a){c.value=[];for(let a in i.value)i.value[a].info.pretty_name.toLocaleLowerCase().includes(e.toLocaleLowerCase())&&c.value.push(i.value[a])}})),(e,a)=>((0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("section",{class:(0,t.C4)(["page_container inner_page_container chains_page",{closing:d.value}])},[(0,l.Lk)("div",j,[(0,l.Lk)("div",H,[(0,l.Lk)("button",{class:"back_btn",onClick:a[0]||(a[0]=e=>m())},a[4]||(a[4]=[(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":J})],-1)])),(0,l.Lk)("div",z,(0,t.v_)(e.$t("message.chains_page_title")),1),(0,l.Lk)("button",{class:"add_chain_btn",onClick:a[1]||(a[1]=(0,s.D$)((e=>C()),["prevent"]))},[(0,l.Lk)("span",null,[a[5]||(a[5]=(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":G})],-1)),(0,l.eW)(" "+(0,t.v_)(e.$t("message.btn_add_chain")),1)])])]),(0,l.bF)(w.A,{source:"chains"}),(0,l.Lk)("div",Z,[c.value.length?((0,l.uX)(),(0,l.CE)("div",ee,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(c.value,(e=>((0,l.uX)(),(0,l.CE)("div",{class:"item",key:e.info.chain_id},[(0,l.Lk)("div",{class:(0,t.C4)(["chain_wrap",{current:h(e.info.pretty_name)}]),onClick:(0,s.D$)((a=>f(e)),["prevent"])},[(0,l.Lk)("div",ne,[(0,l.Lk)("div",le,[(0,l.Lk)("img",{src:(0,o.R1)(k.oB)(e.info?.chain_id),alt:"",onError:a[2]||(a[2]=e=>(0,o.R1)(k.on)(e)),onLoad:a[3]||(a[3]=e=>(0,o.R1)(k.p4)(e))},null,40,te),a[7]||(a[7]=(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":V})],-1)),h(e.info.pretty_name)?((0,l.uX)(),(0,l.CE)("div",se,a[6]||(a[6]=[(0,l.Lk)("svg",null,[(0,l.Lk)("use",{"xlink:href":O})],-1)]))):(0,l.Q3)("",!0)]),(0,l.Lk)("div",null,[(0,l.Lk)("div",oe,(0,t.v_)(e.info.pretty_name),1),e.channel_id?((0,l.uX)(),(0,l.CE)("button",{key:0,class:"delete_btn",onClick:(0,s.D$)((a=>b(e)),["stop","prevent"])},a[8]||(a[8]=[(0,l.Lk)("svg",null,[(0,l.Lk)("use",{"xlink:href":P})],-1)]),8,ie)):(0,l.Q3)("",!0),e.channel_id?((0,l.uX)(),(0,l.CE)("button",{key:1,class:"edit_btn",onClick:(0,s.D$)((a=>g(e)),["stop","prevent"])},a[9]||(a[9]=[(0,l.Lk)("svg",null,[(0,l.Lk)("use",{"xlink:href":Y})],-1)]),8,ce)):(0,l.Q3)("",!0)])])],10,ae)])))),128))])):((0,l.uX)(),(0,l.CE)("div",ue,(0,t.v_)(e.$t("message.search_empty_validator")),1))])])],2),v.value?((0,l.uX)(),(0,l.Wv)(M,{key:0,channelForEdit:r.value},null,8,["channelForEdit"])):(0,l.Q3)("",!0)],64))}};const ve=(0,L.A)(re,[["__scopeId","data-v-d4538e9a"]]);var de=ve,_e=n(46964),ke=n(91497);const me=i+"#ic_arrow_hor",pe={class:"cont"},he={class:"head"},fe={class:"page_title"},be={class:"data"},ge={class:"field_label"},Ce={class:"info_wrap"},Le={class:"info"},ye={class:"features"},Re={key:0},xe={class:"label"},we={class:"val"},$e=["src"],Ee={key:1},Ie={class:"label"},Xe={class:"val"},Se=["src"],Be={key:2},Ae={class:"label"},Te={class:"val"},Ke={key:3},Fe={class:"label"},We={class:"val"},Qe={class:"label"},De={class:"val"},Ne={class:"currency"},Ue={class:"label"},qe={class:"val"},Me={class:"memo_field"},Je={class:"field_label"},Ge={class:"field"},Ve=["placeholder"],Oe={class:"btns"};var Pe={__name:"SendConfirmModal",props:["balance","amount","msgAny","type"],setup(e){const a=e,n=(0,u.useGlobalStore)(),i=(0,r.rd)(),c=(0,l.WQ)("emitter"),d=(0,l.WQ)("i18n"),_=(0,v.hN)(),p=(0,o.KR)(!1),h=(0,o.KR)(""),f=(0,l.EW)((()=>(0,k.NJ)(n.TxFee.userGasAmount*n.TxFee[`${n.TxFee.currentLevel}Price`],n.TxFee.balance.exponent))),b=(0,o.KR)(!1),g=(0,o.KR)(!1);function C(){g.value=!0,setTimeout((()=>{c.emit("close_send_confirm_modal")}),200)}async function L(){b.value=!0;try{n.TxFee.isRemember&&await n.updateTxFeeInfo();let e=await(0,k.qS)(a.msgAny,h.value);_.notify({group:"default",clean:!0}),_.notify({group:"default",speed:200,duration:-100,title:d.global.t("message.notification_tx_pending_title"),type:"pending",data:{isCollapsible:!0,explorer_link:(0,k.aS)(n.currentNetwork)}}),(0,k.nw)(e).catch((e=>{console.log(e),y(e)})),i.push("/account")}catch(e){console.log(e),y(e)}}function y(e){b.value=!1;let a="";a=e.code?d.global.t(`message.notification_tx_error_${e.code}`):d.global.t("message.notification_tx_error_rejected"),_.notify({group:"default",clean:!0}),_.notify({group:"default",speed:200,duration:6e3,title:d.global.t("message.notification_tx_error_title"),text:a,type:"error"}),n.networks[n.currentNetwork].currentTxHash=null,n.resetTxFee()}function R(){p.value=!0,n.isAnyModalOpen=!0}function x(){p.value=!1,n.isAnyModalOpen=!1}function w(){C(),L()}return(0,l.sV)((()=>{c.on("auth",w),c.on("close_sign_tx_modal",x)})),(0,l.hi)((()=>{c.off("auth",w),c.off("close_sign_tx_modal",x)})),(e,i)=>((0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("section",{class:(0,t.C4)(["page_container inner_page_container send_confirm",{closing:g.value}])},[b.value?((0,l.uX)(),(0,l.Wv)(m.A,{key:0})):(0,l.Q3)("",!0),(0,l.Lk)("div",pe,[(0,l.Lk)("div",he,[(0,l.Lk)("button",{class:"back_btn",onClick:i[0]||(i[0]=e=>C())},i[3]||(i[3]=[(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":me})],-1)])),(0,l.Lk)("div",fe,(0,t.v_)(e.$t("message.send_confirm_page_title")),1)]),(0,l.Lk)("div",be,[(0,l.Lk)("div",ge,(0,t.v_)(e.$t("message.details_label")),1),(0,l.Lk)("div",Ce,[(0,l.Lk)("div",Le,[(0,l.Lk)("div",ye,[2===a.type?((0,l.uX)(),(0,l.CE)("div",Re,[(0,l.Lk)("div",xe,(0,t.v_)(e.$t("message.send_confirm_chain_from_label")),1),(0,l.Lk)("div",we,[(0,l.Lk)("img",{src:(0,o.R1)(k.oB)((0,o.R1)(n).networks[(0,o.R1)(n).currentNetwork].chain_id),alt:""},null,8,$e),(0,l.Lk)("span",null,(0,t.v_)((0,o.R1)(n).networks[(0,o.R1)(n).currentNetwork].name),1)])])):(0,l.Q3)("",!0),2===a.type?((0,l.uX)(),(0,l.CE)("div",Ee,[(0,l.Lk)("div",Ie,(0,t.v_)(e.$t("message.send_confirm_chain_to_label")),1),(0,l.Lk)("div",Xe,[(0,l.Lk)("img",{src:(0,o.R1)(k.oB)((0,o.R1)(n).IBCSendCurrentChain?.info.chain_id),alt:""},null,8,Se),(0,l.Lk)("span",null,(0,t.v_)((0,o.R1)(n).IBCSendCurrentChain?.info.pretty_name),1)])])):(0,l.Q3)("",!0),1===a.type?((0,l.uX)(),(0,l.CE)("div",Be,[(0,l.Lk)("div",Ae,(0,t.v_)(e.$t("message.send_confirm_receiver_label")),1),(0,l.Lk)("div",Te,[(0,l.Lk)("span",null,(0,t.v_)(a.msgAny[0].value.toAddress.slice(0,9)+"..."+a.msgAny[0].value.toAddress.slice(-6)),1)])])):(0,l.Q3)("",!0),2===a.type?((0,l.uX)(),(0,l.CE)("div",Ke,[(0,l.Lk)("div",Fe,(0,t.v_)(e.$t("message.send_confirm_receiver_label")),1),(0,l.Lk)("div",We,[(0,l.Lk)("span",null,(0,t.v_)(a.msgAny[0].value.receiver.slice(0,9)+"..."+a.msgAny[0].value.receiver.slice(-6)),1)])])):(0,l.Q3)("",!0),(0,l.Lk)("div",null,[(0,l.Lk)("div",Qe,(0,t.v_)(e.$t("message.stake_confirm_amount_label")),1),(0,l.Lk)("div",De,[(0,l.eW)((0,t.v_)(a.amount)+" "+(0,t.v_)(a.balance.token_info.symbol)+" ",1),(0,l.Lk)("span",Ne," ("+(0,t.v_)((0,o.R1)(k.ST)((0,o.R1)(k.Yq)(a.amount,a.balance.token_info.symbol)))+(0,t.v_)((0,o.R1)(n).currentCurrencySymbol)+") ",1)])]),(0,l.Lk)("div",null,[(0,l.Lk)("div",Ue,(0,t.v_)(e.$t("message.send_confirm_fee_label")),1),(0,l.Lk)("div",qe,(0,t.v_)(f.value.toLocaleString("ru-RU",{maximumFractionDigits:5}).replace(",","."))+" "+(0,t.v_)((0,o.R1)(n).networks[(0,o.R1)(n).currentNetwork].token_name),1)])])])])]),(0,l.Lk)("div",Me,[(0,l.Lk)("div",Je,(0,t.v_)(e.$t("message.memo_label")),1),(0,l.Lk)("div",Ge,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:"input big","onUpdate:modelValue":i[1]||(i[1]=e=>h.value=e),placeholder:e.$t("message.placeholder_memo")},null,8,Ve),[[s.Jo,h.value]])])]),(0,l.Lk)("div",Oe,[(0,l.Lk)("button",{class:"btn",onClick:i[2]||(i[2]=(0,s.D$)((e=>R()),["prevent"]))},[(0,l.Lk)("span",null,(0,t.v_)(e.$t("message.btn_confirm_send")),1)])])])],2),p.value?((0,l.uX)(),(0,l.Wv)(ke.A,{key:0})):(0,l.Q3)("",!0)],64))}};const Ye=(0,L.A)(Pe,[["__scopeId","data-v-33e76a64"]]);var je=Ye;const He=i+"#ic_arrow_hor",ze=i+"#ic_arr_ver2",Ze=i+"#ic_user",ea={class:"page_container inner_page_container send"},aa={class:"cont"},na={class:"head"},la={class:"tabs_wrap"},ta={class:"tabs"},sa={class:"token"},oa={class:"logo"},ia={key:0,src:c,alt:""},ca=["src"],ua=["src"],ra={class:"denom"},va={key:0},da={key:1},_a={key:2},ka={class:"amount"},ma={class:"val"},pa={class:"cost"},ha={class:"token"},fa={class:"logo"},ba=["src"],ga={class:"denom"},Ca={class:"amount"},La={class:"cost"},ya={key:2,class:"destination_chain"},Ra={class:"field_label"},xa={class:"info"},wa={class:"placeholder"},$a={class:"chain"},Ea={class:"logo"},Ia=["src"],Xa={class:"name"},Sa={class:"address"},Ba={class:"field_label"},Aa={class:"field"},Ta=["placeholder"],Ka={class:"amount_field"},Fa={class:"field_label"},Wa={class:"cost"},Qa={class:"field"},Da=["placeholder"],Na={class:"btns"};var Ua={__name:"SendPage",setup(e){const a=(0,u.useGlobalStore)(),n=(0,r.lq)(),i=(0,l.WQ)("emitter"),c=(0,l.WQ)("i18n"),p=(0,v.hN)(),h=(0,o.KR)(1),f=(0,o.KR)(null),b=(0,o.KR)(null),g=[f,b],C=(0,o.KR)(null),L=(0,o.KR)(null),y=(0,o.KR)(a.balances.find((e=>e.denom===n.query.denom))),w=(0,o.KR)(null),$=(0,o.KR)(n.query.address||""),E=(0,o.KR)(n.query.amount||""),I=(0,o.KR)(!1),X=(0,o.KR)(!1),S=(0,o.KR)(!1),B=(0,o.KR)([]),A=(0,o.KR)(!1),T=(0,o.KR)(!1),K=(0,o.KR)(!1),F=(0,o.KR)((0,l.EW)((()=>T.value&&K.value&&(2!==h.value||null!==a.IBCSendCurrentChain))));function W(){if(a.IBCSendCurrentChain=null,$.value="",E.value="",A.value=!1,T.value=!1,K.value=!1,w.value.classList.remove("error"),w.value.classList.remove("success"),y.value=a.balances.find((e=>e.denom===n.query.denom)),n.query.address&&($.value=n.query.address,Q()),2===h.value&&y.value.denom.toLowerCase().startsWith("ibc/")){let e=_.tX.filter((e=>e.chain_1.chain_name===a.currentNetwork&&e.chain_2.chain_name===y.value.chain_info.chain_name||e.chain_2.chain_name===a.currentNetwork&&e.chain_1.chain_name===y.value.chain_info.chain_name)).filter(((e,a,n)=>n.findIndex((a=>a.chain_1.chain_name===e.chain_1.chain_name&&a.chain_2.chain_name===e.chain_2.chain_name||a.chain_1.chain_name===e.chain_2.chain_name&&a.chain_2.chain_name===e.chain_1.chain_name))===a));e.length&&(e[0].info=y.value.chain_info,a.IBCSendCurrentChain=e[0]),$.value=(0,k.EF)(a.currentAddress,y.value.chain_info.bech32_prefix)}i.emit("update_data")}function Q(){K.value=!1;try{let{prefix:e,data:n}=(0,d.fromBech32)($.value);1===h.value&&(e===a.networks[a.currentNetwork].prefix&&n.length==a.networks[a.currentNetwork].address_length?(w.value.classList.remove("error"),w.value.classList.add("success"),setTimeout((()=>K.value=!0))):(w.value.classList.remove("success"),w.value.classList.add("error"))),2===h.value&&(null!==a.IBCSendCurrentChain&&void 0===a.IBCSendCurrentChain.channel_id?e===a.IBCSendCurrentChain.info.bech32_prefix?(w.value.classList.remove("error"),w.value.classList.add("success"),setTimeout((()=>K.value=!0))):(w.value.classList.remove("success"),w.value.classList.add("error")):(w.value.classList.remove("success"),w.value.classList.remove("error"),setTimeout((()=>K.value=!0))))}catch(e){void 0===a.IBCSendCurrentChain?.channel_id&&(w.value.classList.remove("success"),w.value.classList.add("error"))}}function D(){T.value=!1,setTimeout((()=>{E.value=(0,k.NJ)(y.value.amount,y.value.exponent),T.value=!0}))}function N(){T.value=!1,setTimeout((()=>{Number(String(E.value).replace(/,/g,".")),String(E.value).length&&E.value<0&&(E.value=""),E.value&&E.value>0&&E.value<(0,k.NJ)(y.value.amount,y.value.exponent)&&(T.value=!0),E.value>(0,k.NJ)(y.value.amount,y.value.exponent)&&D()}))}function U(){navigator.clipboard.readText().then((e=>{try{let{prefix:n,data:l}=(0,d.fromBech32)(e);1===h.value&&(n==a.networks[a.currentNetwork].prefix&&l.length==a.networks[a.currentNetwork].address_length?($.value=e,Q()):p.notify({group:"default",speed:200,duration:1e3,title:c.global.t("message.notification_tx_error_title"),text:c.global.t("message.notification_error_invalid_paste_title"),type:"error"})),2===h.value&&null!==a.IBCSendCurrentChain&&void 0===a.IBCSendCurrentChain.channel_id?n===a.IBCSendCurrentChain.info.bech32_prefix?($.value=e,Q()):p.notify({group:"default",speed:200,duration:1e3,title:c.global.t("message.notification_tx_error_title"),text:c.global.t("message.notification_error_invalid_paste_title"),type:"error"}):$.value=e}catch(n){p.notify({group:"default",speed:200,duration:1e3,title:c.global.t("message.notification_tx_error_title"),text:c.global.t("message.notification_error_invalid_paste_title"),type:"error"})}}))}function q(){X.value=!0}function M(){X.value=!1}function J(){I.value=!0}function G(){I.value=!1}function V(){S.value=!1}return(0,l.sV)((()=>{$.value&&Q(),E.value&&N(),Telegram.WebApp.onEvent("qrTextReceived",(()=>{W()})),C.value=g[h.value-1].value.offsetWidth,L.value=g[h.value-1].value.offsetLeft,i.on("close_chains_modal",M),i.on("close_tokens_modal",G),i.on("close_send_confirm_modal",V)})),(0,l.hi)((()=>{i.off("close_chains_modal",M),i.off("close_tokens_modal",G),i.off("close_send_confirm_modal",V),Telegram.WebApp.offEvent("qrTextReceived")})),(0,l.wB)((0,l.EW)((()=>h.value)),(()=>{C.value=g[h.value-1].value.offsetWidth,L.value=g[h.value-1].value.offsetLeft,W()})),(0,l.wB)((0,l.EW)((()=>a.IBCSendCurrentChain)),(()=>{null!==a.IBCSendCurrentChain&&($.value=(0,k.EF)(a.currentAddress,a.IBCSendCurrentChain.info.bech32_prefix)),null!==a.IBCSendCurrentChain&&$.value&&Q()})),(0,l.wB)((0,l.EW)((()=>n.query.denom)),(()=>{W()})),(0,l.wB)((0,l.EW)((()=>n.query.address)),(()=>{W()})),(0,l.wB)((0,l.EW)((()=>F.value)),(()=>{if(F.value&&1===h.value&&(B.value=[{typeUrl:"/cosmos.bank.v1beta1.MsgSend",value:{fromAddress:a.currentAddress,toAddress:$.value,amount:[{denom:y.value.denom,amount:""+parseFloat(E.value.toString().replace(",",".")).toFixed(y.value.exponent)*Math.pow(10,y.value.exponent)}]}}]),F.value&&2===h.value){let e=null;e=void 0!==a.IBCSendCurrentChain.channel_id?a.IBCSendCurrentChain.channel_id:a.IBCSendCurrentChain.chain_1.chain_name===a.currentNetwork?a.IBCSendCurrentChain.channels[0].chain_1.channel_id:a.IBCSendCurrentChain.channels[0].chain_2.channel_id,B.value=[{typeUrl:"/ibc.applications.transfer.v1.MsgTransfer",value:{sender:a.currentAddress,receiver:$.value,sourceChannel:e,sourcePort:"transfer",token:{denom:y.value.denom,amount:""+parseFloat(E.value.toString().replace(",",".")).toFixed(y.value.exponent)*Math.pow(10,y.value.exponent)},timeoutHeight:{},timeoutTimestamp:1e6*(Date.now()+6e4)}}]}})),(e,n)=>{const c=(0,l.g2)("router-link");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("section",ea,[A.value?((0,l.uX)(),(0,l.Wv)(m.A,{key:0})):(0,l.Q3)("",!0),(0,l.Lk)("div",aa,[(0,l.Lk)("div",na,[(0,l.bF)(c,{to:"/account",class:"back_btn"},{default:(0,l.k6)((()=>n[17]||(n[17]=[(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":He})],-1)]))),_:1}),(0,l.Lk)("div",la,[(0,l.Lk)("div",ta,[(0,l.Lk)("button",{class:(0,t.C4)(["btn",{active:1===h.value}]),ref_key:"tab1",ref:f,onClick:n[0]||(n[0]=(0,s.D$)((e=>h.value=1),["prevent"]))},[(0,l.Lk)("span",null,(0,t.v_)(e.$t("message.send_page_tab1")),1)],2),(0,l.Lk)("button",{class:(0,t.C4)(["btn",{active:2===h.value}]),ref_key:"tab2",ref:b,onClick:n[1]||(n[1]=(0,s.D$)((e=>h.value=2),["prevent"]))},[(0,l.Lk)("span",null,(0,t.v_)(e.$t("message.send_page_tab2")),1)],2),(0,l.Lk)("div",{class:"roller",style:(0,t.Tr)(`width: ${C.value}px; left: ${L.value}px;`)},n[18]||(n[18]=[(0,l.Lk)("span",null,null,-1)]),4)])])]),y.value?((0,l.uX)(),(0,l.CE)("div",{key:0,class:"token_wrap",onClick:n[2]||(n[2]=(0,s.D$)((e=>J()),["prevent"]))},[(0,l.Lk)("div",sa,[(0,l.Lk)("div",oa,["uboom"===y.value.old_base_denom?((0,l.uX)(),(0,l.CE)("img",ia)):y.value.token_info.logo_URIs.svg?((0,l.uX)(),(0,l.CE)("img",{key:1,src:y.value.token_info.logo_URIs.svg,alt:""},null,8,ca)):((0,l.uX)(),(0,l.CE)("img",{key:2,src:y.value.token_info.logo_URIs.png,alt:""},null,8,ua))]),(0,l.Lk)("div",ra,["drop"===y.value.old_base_denom||"udatom"===y.value.old_base_denom?((0,l.uX)(),(0,l.CE)("span",va,"d"+(0,t.v_)(y.value.token_info.symbol),1)):"uboom"===y.value.old_base_denom?((0,l.uX)(),(0,l.CE)("span",da,"BOOM")):((0,l.uX)(),(0,l.CE)("span",_a,(0,t.v_)(y.value.token_info.symbol),1))]),(0,l.Lk)("div",ka,[(0,l.Lk)("div",ma,(0,t.v_)((0,o.R1)(k.NJ)(y.value.amount,y.value.exponent).toLocaleString("ru-RU",{maximumFractionDigits:7}).replace(",",".")),1),(0,l.Lk)("div",pa,(0,t.v_)((0,o.R1)(k.ST)((0,o.R1)(k.Y$)(y.value.token_info.symbol,y.value.amount,y.value.exponent)))+" "+(0,t.v_)((0,o.R1)(a).currentCurrencySymbol),1)])])])):((0,l.uX)(),(0,l.CE)("div",{key:1,class:"token_wrap",onClick:n[3]||(n[3]=(0,s.D$)((e=>J()),["prevent"]))},[(0,l.Lk)("div",ha,[(0,l.Lk)("div",fa,[(0,l.Lk)("img",{src:(0,o.R1)(k.oB)((0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].chain_id),alt:""},null,8,ba)]),(0,l.Lk)("div",ga,(0,t.v_)((0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].token_name),1),(0,l.Lk)("div",Ca,[n[19]||(n[19]=(0,l.Lk)("div",{class:"val"},"0",-1)),(0,l.Lk)("div",La," 0.00 "+(0,t.v_)((0,o.R1)(a).currentCurrencySymbol),1)])])])),2===h.value?((0,l.uX)(),(0,l.CE)("div",ya,[(0,l.Lk)("div",Ra,(0,t.v_)(e.$t("message.send_destination_chain_label")),1),(0,o.R1)(a).IBCSendCurrentChain?((0,l.uX)(),(0,l.CE)("div",{key:1,class:(0,t.C4)(["chain_wrap",{disabled:y.value.denom.toLowerCase()!==(0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].denom.toLowerCase()}]),onClick:n[7]||(n[7]=(0,s.D$)((e=>q()),["prevent"]))},[(0,l.Lk)("div",$a,[(0,l.Lk)("div",Ea,[(0,l.Lk)("img",{src:(0,o.R1)(k.oB)((0,o.R1)(a).IBCSendCurrentChain?.info?.chain_id),alt:"",onError:n[5]||(n[5]=e=>(0,o.R1)(k.on)(e)),onLoad:n[6]||(n[6]=e=>(0,o.R1)(k.p4)(e))},null,40,Ia),n[21]||(n[21]=(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":Ze})],-1))]),(0,l.Lk)("div",null,[(0,l.Lk)("div",Xa,(0,t.v_)((0,o.R1)(a).IBCSendCurrentChain?.info.pretty_name),1)]),n[22]||(n[22]=(0,l.Lk)("svg",{class:"arr"},[(0,l.Lk)("use",{"xlink:href":ze})],-1))])],2)):((0,l.uX)(),(0,l.CE)("div",{key:0,class:(0,t.C4)(["info_wrap",{disabled:y.value.denom.toLowerCase()!==(0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].denom.toLowerCase()}]),onClick:n[4]||(n[4]=(0,s.D$)((e=>q()),["prevent"]))},[(0,l.Lk)("div",xa,[(0,l.Lk)("div",wa,(0,t.v_)(e.$t("message.send_destination_chain_placeholder")),1),n[20]||(n[20]=(0,l.Lk)("svg",{class:"arr"},[(0,l.Lk)("use",{"xlink:href":ze})],-1))])],2))])):(0,l.Q3)("",!0),(0,l.Lk)("div",Sa,[(0,l.Lk)("div",Ba,(0,t.v_)(e.$t("message.send_address_label")),1),(0,l.Lk)("div",Aa,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:"input big","onUpdate:modelValue":n[8]||(n[8]=e=>$.value=e),ref_key:"addressInput",ref:w,placeholder:e.$t("message.placeholder_address"),onInput:n[9]||(n[9]=e=>Q()),onPaste:n[10]||(n[10]=e=>Q())},null,40,Ta),[[s.Jo,$.value]]),(0,l.Lk)("button",{class:"paste_btn",onClick:n[11]||(n[11]=(0,s.D$)((e=>U()),["prevent"]))},(0,t.v_)(e.$t("message.btn_paste")),1),(0,l.bF)(_e.A,{class:"in_field"})])]),(0,l.Lk)("div",Ka,[(0,l.Lk)("div",Fa,[(0,l.eW)((0,t.v_)(e.$t("message.send_amount_label"))+" ",1),(0,l.Lk)("div",Wa,(0,t.v_)((0,o.R1)(k.ST)((0,o.R1)(k.Y$)(y.value.token_info.symbol,E.value*Math.pow(10,y.value.exponent),y.value.exponent)))+" "+(0,t.v_)((0,o.R1)(a).currentCurrencySymbol),1)]),(0,l.Lk)("div",Qa,[(0,l.bo)((0,l.Lk)("input",{type:"number",inputmode:"decimal",class:"input big","onUpdate:modelValue":n[12]||(n[12]=e=>E.value=e),placeholder:e.$t("message.placeholder_amount",{token:y.value.token_info.symbol}),onInput:n[13]||(n[13]=e=>N())},null,40,Da),[[s.Jo,E.value]]),(0,l.Lk)("button",{type:"button",class:"max_btn",onClick:n[14]||(n[14]=(0,s.D$)((e=>D()),["prevent"]))},(0,t.v_)(e.$t("message.btn_MAX")),1)])]),F.value?((0,l.uX)(),(0,l.Wv)(x.A,{key:3,msgAny:B.value,txType:"send"},null,8,["msgAny"])):(0,l.Q3)("",!0),(0,l.Lk)("div",Na,[(0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].currentTxHash?((0,l.uX)(),(0,l.CE)("button",{key:1,class:"btn waiting_btn",onClick:n[16]||(n[16]=(0,s.D$)((e=>(0,o.R1)(i).emit("show_collapsible_notification")),["prevent"]))},[(0,l.Lk)("span",null,(0,t.v_)(e.$t("message.btn_waiting_tx")),1)])):((0,l.uX)(),(0,l.CE)("button",{key:0,class:(0,t.C4)(["btn",{disabled:!(0,o.R1)(a).TxFee.isEnough}]),onClick:n[15]||(n[15]=(0,s.D$)((e=>S.value=!0),["prevent"]))},[(0,l.Lk)("span",null,(0,t.v_)(e.$t("message.btn_send")),1)],2))])])]),X.value?((0,l.uX)(),(0,l.Wv)(de,{key:0})):(0,l.Q3)("",!0),I.value?((0,l.uX)(),(0,l.Wv)(R,{key:1,currentToken:y.value},null,8,["currentToken"])):(0,l.Q3)("",!0),S.value?((0,l.uX)(),(0,l.Wv)(je,{key:2,balance:y.value,amount:E.value,msgAny:B.value,type:h.value},null,8,["balance","amount","msgAny","type"])):(0,l.Q3)("",!0)],64)}}};const qa=(0,L.A)(Ua,[["__scopeId","data-v-bb27c6fa"]]);var Ma=qa},34709:function(e,a,n){e.exports=n.p+"img/boom_token_logo.8606844c.svg"}}]);
//# sourceMappingURL=612.b9e7aa0a.js.map