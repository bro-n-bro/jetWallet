"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[436],{89114:function(e,a,t){t.d(a,{A:function(){return v}});var s=t(56768);const n={class:"loader_wrap"},l=(0,s.Lk)("div",{class:"loader"},[(0,s.Lk)("span")],-1),o=[l];function i(e,a){return(0,s.uX)(),(0,s.CE)("div",n,o)}var c=t(71241);const r={},u=(0,c.A)(r,[["render",i]]);var v=u},74401:function(e,a,t){t.d(a,{A:function(){return f}});var s=t(56768),n=t(45130),l=t(24113),o=t(90144);const i=e=>((0,s.Qi)("data-v-71eecf0a"),e=e(),(0,s.jt)(),e),c=l+"#ic_arrow_hor",r=l+"#ic_search",u=l+"#ic_close",v={class:"search"},k=i((()=>(0,s.Lk)("span",null,[(0,s.Lk)("svg",null,[(0,s.Lk)("use",{"xlink:href":c})])],-1))),d=[k],_={class:"field"},p=i((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":r})],-1))),m=["placeholder"],g=i((()=>(0,s.Lk)("svg",null,[(0,s.Lk)("use",{"xlink:href":u})],-1))),L=[g];var b={__name:"Search",props:["source"],setup(e){const a=e,t=(0,s.WQ)("emitter"),l=(0,o.KR)("");function i(){t.emit("show_keyboard"),setTimeout((()=>t.emit("search_focus")),100)}function c(){t.emit("hide_keyboard"),setTimeout((()=>t.emit("search_blur")),100)}function r(){t.emit("search",{query:l.value,source:a.source})}function u(){l.value="",t.emit("search",{query:l.value,source:a.source})}return(e,a)=>((0,s.uX)(),(0,s.CE)("div",v,[(0,s.Lk)("button",{class:"back_btn",onClick:(0,n.D$)(c,["prevent"])},d),(0,s.Lk)("div",_,[p,(0,s.bo)((0,s.Lk)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e),class:"input",placeholder:e.$t("message.search_placeholder"),onFocus:i,onBlur:c,onInput:r},null,40,m),[[n.Jo,l.value]]),l.value.length?((0,s.uX)(),(0,s.CE)("button",{key:0,class:"clear_btn",onClick:(0,n.D$)(u,["prevent"])},L)):(0,s.Q3)("",!0)])]))}},R=t(71241);const w=(0,R.A)(b,[["__scopeId","data-v-71eecf0a"]]);var f=w},92732:function(e,a,t){t.d(a,{A:function(){return d}});var s=t(56768),n=t(45130),l=t(24113);const o=e=>((0,s.Qi)("data-v-77f5f7be"),e=e(),(0,s.jt)(),e),i=l+"#ic_scaner",c=o((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":i})],-1))),r=[c];var u={__name:"QRCode",setup(e){function a(){Telegram.WebApp.showScanQrPopup({text:"Наш текст"})}return(e,t)=>((0,s.uX)(),(0,s.CE)("button",{class:"qr_code_btn",onClick:(0,n.D$)(a,["prevent"])},r))}},v=t(71241);const k=(0,v.A)(u,[["__scopeId","data-v-77f5f7be"]]);var d=k},65436:function(e,a,t){t.r(a),t.d(a,{default:function(){return Ut}});var s=t(56768),n=t(24232),l=t(90144),o=t(45130),i=t(24113),c=t(76750),r=t(38326),u=t(67278),v=t(61981);const k=e=>((0,s.Qi)("data-v-5f3fa314"),e=e(),(0,s.jt)(),e),d=i+"#ic_arr_ver",_={class:"logo"},p=["src"],m={class:"name"},g=k((()=>(0,s.Lk)("svg",{class:"arr"},[(0,s.Lk)("use",{"xlink:href":d})],-1))),L={class:"mini_modal"},b={class:"scroll"},R=["onClick"],w={class:"logo"},f=["src"],h={class:"name"};var y={__name:"NetworkChooser",setup(e){const a=(0,c.o)(),t=(0,l.KR)(!1),i=(0,l.KR)(null);function u(e){t.value=!1,a.setCurrentNetwork(e)}return(0,r.X2F)(i,(e=>t.value=!1)),(e,c)=>((0,s.uX)(),(0,s.CE)("div",{class:(0,n.C4)(["choose_network",{disabled:!(0,l.R1)(a).isInitialized||!(0,l.R1)(a).isBalancesGot||!(0,l.R1)(a).isStakedBalancesGot||!(0,l.R1)(a).isRewardsGot}]),ref_key:"target",ref:i},[(0,s.Lk)("button",{class:(0,n.C4)(["btn",{active:t.value}]),onClick:c[0]||(c[0]=(0,o.D$)((e=>t.value=!t.value),["prevent"]))},[(0,s.Lk)("div",_,[(0,s.Lk)("img",{src:(0,l.R1)(v.oB)((0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].chain_id),alt:""},null,8,p)]),(0,s.Lk)("div",m,(0,n.v_)((0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].name),1),g],2),(0,s.bo)((0,s.Lk)("div",L,[(0,s.Lk)("div",b,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)((0,l.R1)(a).networks,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{key:t},[(0,s.Lk)("button",{class:(0,n.C4)(["network",{active:(0,l.R1)(a).currentNetwork==e.alias}]),onClick:(0,o.D$)((a=>u(e.alias)),["prevent"])},[(0,s.Lk)("div",w,[(0,s.Lk)("img",{src:(0,l.R1)(v.oB)(e.chain_id),alt:""},null,8,f)]),(0,s.Lk)("div",h,(0,n.v_)(e.name),1)],10,R)])))),128))])],512),[[o.aG,t.value]])],2))}},C=t(71241);const $=(0,C.A)(y,[["__scopeId","data-v-5f3fa314"]]);var E=$,x=t(92732),X={__name:"Currency",setup(e){const a=(0,c.o)();return(e,t)=>((0,s.uX)(),(0,s.CE)("button",{class:"currency",onClick:t[0]||(t[0]=(0,o.D$)((e=>(0,l.R1)(a).updateCurrentCurrency()),["prevent"]))},(0,n.v_)((0,l.R1)(a).currentCurrency),1))}};const A=(0,C.A)(X,[["__scopeId","data-v-7525dc69"]]);var N=A,B=t(89114);const I=e=>((0,s.Qi)("data-v-b36c6030"),e=e(),(0,s.jt)(),e),S=i+"#ic_copy2",K=I((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":S})],-1)));var F={__name:"Address",setup(e){const a=(0,c.o)(),t=(0,s.WQ)("i18n"),i=(0,u.hN)(),{copy:v}=(0,r.iDZ)();function k(){v(a.currentAddress),i.notify({group:"default",speed:200,duration:750,title:t.global.t("message.notification_copied_title"),type:"copied"})}return(e,t)=>((0,s.uX)(),(0,s.CE)("div",{class:"address",onClick:(0,o.D$)(k,["prevent"])},[K,(0,s.Lk)("span",null,(0,n.v_)((0,l.R1)(a).currentAddress.slice(0,9)+"..."+(0,l.R1)(a).currentAddress.slice(-6)),1)]))}};const Q=(0,C.A)(F,[["__scopeId","data-v-b36c6030"]]);var W=Q;const D=e=>((0,s.Qi)("data-v-ee38a7d0"),e=e(),(0,s.jt)(),e),T=i+"#ic_send",G=i+"#ic_receive",z={class:"available_section"},U={class:"balance"},j={class:"label"},Y={key:1,class:"val"},q={class:"actions"},P=D((()=>(0,s.Lk)("div",{class:"icon"},[(0,s.Lk)("svg",null,[(0,s.Lk)("use",{"xlink:href":T})])],-1))),M=D((()=>(0,s.Lk)("div",{class:"icon"},[(0,s.Lk)("svg",null,[(0,s.Lk)("use",{"xlink:href":G})])],-1))),J=D((()=>(0,s.Lk)("div",{class:"icon"},[(0,s.Lk)("svg",null,[(0,s.Lk)("use",{"xlink:href":G})])],-1)));var Z={__name:"Available",setup(e){const a=(0,c.o)(),t=(0,s.WQ)("emitter");return(e,i)=>{const c=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",z,[(0,s.Lk)("div",U,[(0,s.Lk)("div",j,(0,n.v_)(e.$t("message.current_balance_title")),1),(0,l.R1)(a).isInitialized&&(0,l.R1)(a).isBalancesGot?((0,s.uX)(),(0,s.CE)("div",Y,[(0,s.Lk)("span",{onClick:i[0]||(i[0]=(0,o.D$)((e=>(0,l.R1)(a).updateAllBalances()),["prevent"]))},(0,n.v_)((0,l.R1)(v.ST)((0,l.R1)(v.s3)())),1)])):((0,s.uX)(),(0,s.Wv)(B.A,{key:0})),(0,s.bF)(W)]),(0,s.Lk)("div",q,[(0,s.Lk)("button",{class:"btn",onClick:i[1]||(i[1]=(0,o.D$)((e=>(0,l.R1)(t).emit("search_focus")),["prevent"]))},[P,(0,s.Lk)("div",null,(0,n.v_)(e.$t("message.btn_send")),1)]),(0,s.bF)(c,{to:"/account/receive",class:(0,n.C4)(["btn",{disabled:!(0,l.R1)(a).currentAddress}])},{default:(0,s.k6)((()=>[M,(0,s.Lk)("div",null,(0,n.v_)(e.$t("message.btn_receive")),1)])),_:1},8,["class"]),(0,s.Lk)("button",{class:"btn",onClick:i[2]||(i[2]=(0,o.D$)((e=>(0,l.R1)(t).emit("swiper_slideTo",{index:1})),["prevent"]))},[J,(0,s.Lk)("div",null,(0,n.v_)(e.$t("message.btn_stake")),1)])])])}}};const V=(0,C.A)(Z,[["__scopeId","data-v-ee38a7d0"]]);var H=V;const O=e=>((0,s.Qi)("data-v-38cb6d11"),e=e(),(0,s.jt)(),e),ee=i+"#ic_send",ae=i+"#ic_receive",te={class:"staked_section"},se={class:"balance"},ne={class:"label"},le={key:1,class:"val"},oe={class:"actions"},ie=O((()=>(0,s.Lk)("div",{class:"icon"},[(0,s.Lk)("svg",null,[(0,s.Lk)("use",{"xlink:href":ee})])],-1))),ce=O((()=>(0,s.Lk)("div",{class:"icon"},[(0,s.Lk)("svg",null,[(0,s.Lk)("use",{"xlink:href":ae})])],-1))),re=O((()=>(0,s.Lk)("div",{class:"icon"},[(0,s.Lk)("svg",null,[(0,s.Lk)("use",{"xlink:href":ae})])],-1)));var ue={__name:"Staked",setup(e){const a=(0,c.o)();return(e,t)=>{const i=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",te,[(0,s.Lk)("div",se,[(0,s.Lk)("div",ne,(0,n.v_)(e.$t("message.stacked_balance_title")),1),(0,l.R1)(a).isInitialized&&(0,l.R1)(a).isStakedBalancesGot?((0,s.uX)(),(0,s.CE)("div",le,[(0,s.Lk)("span",{onClick:t[0]||(t[0]=(0,o.D$)((e=>(0,l.R1)(a).updateAllBalances()),["prevent"]))},(0,n.v_)((0,l.R1)(v.ST)((0,l.R1)(v.eZ)())),1)])):((0,s.uX)(),(0,s.Wv)(B.A,{key:0})),(0,s.bF)(W)]),(0,s.Lk)("div",oe,[(0,s.bF)(i,{to:"/account/stake",class:(0,n.C4)(["btn stake_btn",{disabled:!(0,l.R1)(a).isBalancesGot&&!(0,l.R1)(a).isStakedBalancesGot}])},{default:(0,s.k6)((()=>[ie,(0,s.Lk)("div",null,(0,n.v_)(e.$t("message.btn_stake")),1)])),_:1},8,["class"]),(0,s.bF)(i,{to:"/account/unstake",class:(0,n.C4)(["btn",{disabled:!(0,l.R1)(a).stakedBalances.length}])},{default:(0,s.k6)((()=>[ce,(0,s.Lk)("div",null,(0,n.v_)(e.$t("message.btn_unstake")),1)])),_:1},8,["class"]),(0,s.bF)(i,{to:"/account/restake",class:(0,n.C4)(["btn",{disabled:!(0,l.R1)(a).stakedBalances.length}])},{default:(0,s.k6)((()=>[re,(0,s.Lk)("div",null,(0,n.v_)(e.$t("message.btn_restake")),1)])),_:1},8,["class"])])])}}};const ve=(0,C.A)(ue,[["__scopeId","data-v-38cb6d11"]]);var ke=ve,de=(t(44114),t(74401));const _e={class:"available_tokens"},pe={class:"cont"},me={key:1,class:"tokens"},ge={key:0,class:"count"},Le={key:1,class:"list"},be={class:"token"},Re={class:"logo"},we=["src","alt"],fe={class:"denom"},he={class:"amount"},ye={class:"val"},Ce={class:"cost"},$e={key:2,class:"empty"};var Ee={__name:"AvailableTokens",setup(e){const a=(0,c.o)(),t=(0,s.WQ)("emitter"),o=(0,l.KR)([]);return(0,s.KC)((()=>{a.isBalancesGot&&(o.value=a.balances)})),(0,s.wB)((0,s.EW)((()=>a.isBalancesGot)),(()=>{a.isBalancesGot&&(o.value=a.balances)})),t.on("search",(({query:e,source:t})=>{if("availabels"===t){o.value=[];for(let t in a.balances)a.balances[t].token_info.symbol.toLocaleLowerCase().includes(e.toLocaleLowerCase())&&o.value.push(a.balances[t])}})),(e,t)=>{const i=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("section",_e,[(0,s.Lk)("div",pe,[(0,s.bF)(de.A,{source:"availabels"}),(0,l.R1)(a).isInitialized&&(0,l.R1)(a).isBalancesGot?((0,s.uX)(),(0,s.CE)("div",me,[o.value.length===(0,l.R1)(a).balances.length?((0,s.uX)(),(0,s.CE)("div",ge,[(0,s.Lk)("b",null,(0,n.v_)((0,l.R1)(a).balances.length),1),(0,s.eW)(" "+(0,n.v_)(e.$t("message.available_tokens_title")),1)])):(0,s.Q3)("",!0),o.value.length?((0,s.uX)(),(0,s.CE)("div",Le,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.value,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{class:"item",key:t,style:(0,n.Tr)(`order: ${parseInt(-1e6*(0,l.R1)(v.Y$)(e.token_info.symbol,e.amount,e.exponent))};`)},[(0,s.bF)(i,{to:`/account/send?denom=${e.denom}`,class:"token_wrap"},{default:(0,s.k6)((()=>[(0,s.Lk)("div",be,[(0,s.Lk)("div",Re,[(0,s.Lk)("img",{src:e.token_info.logo_URIs.svg,alt:e.token_info.name,loading:"lazy"},null,8,we)]),(0,s.Lk)("div",fe,(0,n.v_)(e.token_info.symbol),1),(0,s.Lk)("div",he,[(0,s.Lk)("div",ye,(0,n.v_)((0,l.R1)(v.NJ)(e.amount,e.exponent).toLocaleString("ru-RU",{maximumFractionDigits:7})),1),(0,s.Lk)("div",Ce,(0,n.v_)((0,l.R1)(v.ST)((0,l.R1)(v.Y$)(e.token_info.symbol,e.amount,e.exponent)))+" "+(0,n.v_)((0,l.R1)(a).currentCurrencySymbol),1)])])])),_:2},1032,["to"])],4)))),128))])):((0,s.uX)(),(0,s.CE)("div",$e,(0,n.v_)(e.$t("message.search_empty")),1))])):((0,s.uX)(),(0,s.Wv)(B.A,{key:0}))])])}}};const xe=(0,C.A)(Ee,[["__scopeId","data-v-d1d1ced4"]]);var Xe=xe;const Ae=e=>((0,s.Qi)("data-v-44d32788"),e=e(),(0,s.jt)(),e),Ne=i+"#ic_arr_ver",Be={class:"claim_rewards"},Ie={class:"cont"},Se={class:"data_wrap"},Ke={class:"data"},Fe={class:"info"},Qe={class:"title"},We={class:"cost"},De={class:"odometer"},Te=Ae((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":Ne})],-1))),Ge=[Te],ze={class:"dropdown"},Ue={class:"list"},je={class:"token"},Ye={class:"logo"},qe=["src","alt"],Pe={class:"denom"},Me={class:"cost"},Je={class:"odometer"};var Ze={__name:"ClaimRewards",setup(e){const a=(0,c.o)(),t=(0,l.KR)(!1),i=(0,l.KR)(!1),r=(0,l.KR)(0),u=(0,l.KR)(0),k=(0,l.KR)(0),d=(0,l.KR)(null);async function _(){a.isInitialized&&(t.value=!1,await a.getRewards())}function p(){k.value=(0,v.eZ)("USD"),u.value=k.value*a.networks[a.currentNetwork].APR/31536e3}function m(){r.value=(0,v.Ko)("USD"),!r.value&&k.value&&setTimeout((async()=>await _()),5e3),null!=r.value&&(d.value=setInterval((()=>r.value+=2.5*u.value),3e3))}return(0,s.KC)((async()=>await _())),(0,s.xo)((()=>{clearInterval(d.value)})),(0,s.wB)((0,s.EW)((()=>a.isInitialized)),(async()=>{a.isInitialized&&clearInterval(d.value),await _()})),(0,s.wB)((0,s.EW)((()=>a.isRewardsGot)),(()=>{t.value=!1,clearInterval(d.value),a.isRewardsGot&&(p(),m(),t.value=!0)})),(e,c)=>{const u=(0,s.g2)("router-link"),v=(0,s.gN)("odometer");return(0,s.uX)(),(0,s.CE)("section",Be,[(0,s.Lk)("div",Ie,[(0,s.Lk)("div",Se,[(0,s.Lk)("div",Ke,[(0,l.R1)(a).isInitialized&&t.value?((0,s.uX)(),(0,s.CE)(s.FK,{key:1},[(0,s.Lk)("div",Fe,[(0,s.Lk)("div",Qe,(0,n.v_)(e.$t("message.claim_rewards_title")),1),(0,s.Lk)("div",We,[(0,s.eW)(" ~ "),(0,s.bo)((0,s.Lk)("div",De,null,512),[[v,r.value]]),(0,s.eW)(" $ ")])]),(0,s.bF)(u,{to:"/account/claim_confirm",class:(0,n.C4)(["btn",{disabled:!r.value}])},{default:(0,s.k6)((()=>[(0,s.Lk)("span",null,(0,n.v_)(e.$t("message.btn_claim")),1)])),_:1},8,["class"]),r.value?((0,s.uX)(),(0,s.CE)("button",{key:0,class:(0,n.C4)(["spoler_btn",{active:i.value}]),onClick:c[0]||(c[0]=(0,o.D$)((e=>i.value=!i.value),["prevent"]))},Ge,2)):(0,s.Q3)("",!0),(0,s.bo)((0,s.Lk)("div",ze,[(0,s.Lk)("div",Ue,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)((0,l.R1)(a).rewardsBalances,((e,a)=>((0,s.uX)(),(0,s.CE)("div",{class:"token_wrap",key:a},[(0,s.Lk)("div",je,[(0,s.Lk)("div",Ye,[(0,s.Lk)("img",{src:e.token_info.logo_URIs.svg,alt:e.token_info.name,loading:"lazy"},null,8,qe)]),(0,s.Lk)("div",null,[(0,s.Lk)("div",Pe,(0,n.v_)(e.token_info.symbol),1),(0,s.Lk)("div",Me,[(0,s.eW)(" ~ "),(0,s.bo)((0,s.Lk)("div",Je,null,512),[[v,r.value]]),(0,s.eW)(" $ ")])])])])))),128))])],512),[[o.aG,i.value]])],64)):((0,s.uX)(),(0,s.Wv)(B.A,{key:0}))])])])])}}};const Ve=(0,C.A)(Ze,[["__scopeId","data-v-44d32788"]]);var He=Ve,Oe=t(68515),ea={__name:"UnstakingTokensItem",setup(e){const a=(0,c.o)(),t=(0,l.KR)(null),o=30,i=(0,l.KR)(0),r=(0,l.KR)(0),u=(0,l.KR)(!1);function v(e){a.networks[a.currentNetwork].isunstakingCancelSupport&&(i.value=e.touches[0].clientX)}function k(e){if(a.networks[a.currentNetwork].isunstakingCancelSupport){let a=e.touches[0];r.value=a.clientX-i.value,r.value>o?u.value=!1:u.value=!0}}return(e,a)=>((0,s.uX)(),(0,s.CE)("div",{ref_key:"swipeable",ref:t,onTouchstart:v,onTouchmove:k,class:(0,n.C4)({swiped:u.value})},[(0,s.RG)(e.$slots,"validator"),(0,s.RG)(e.$slots,"cancel_btn")],34))}};const aa=ea;var ta=aa;const sa=e=>((0,s.Qi)("data-v-0ea24de8"),e=e(),(0,s.jt)(),e),na=i+"#ic_arr_ver",la=i+"#ic_user",oa=i+"#ic_close",ia={key:0,class:"unstaking_tokens"},ca={class:"cont"},ra={class:"title"},ua={class:"data_wrap"},va={class:"data"},ka={class:"info"},da={class:"label"},_a={key:0},pa={key:1},ma={key:2},ga={class:"token"},La={class:"logo"},ba=["src"],Ra={class:"denom"},wa={class:"count"},fa={class:"amount"},ha={class:"val"},ya={class:"cost"},Ca=sa((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":na})],-1))),$a=[Ca],Ea={class:"dropdown"},xa={class:"list"},Xa={class:"validator_wrap"},Aa={class:"validator"},Na={class:"logo"},Ba=["src"],Ia=sa((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":la})],-1))),Sa={class:"moniker"},Ka={class:"finish"},Fa={key:0},Qa={key:1},Wa={key:2},Da={class:"amount"},Ta={class:"val"},Ga={class:"cost"},za=["onClick"],Ua=sa((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":oa})],-1)));var ja={__name:"UnstakingTokens",setup(e){const a=(0,c.o)(),t=(0,s.WQ)("i18n"),i=(0,u.hN)(),r=(0,l.KR)(!1),k=(0,l.KR)(!1),d=(0,l.KR)([]);function _(){let e=a.unstakingBalances.flatMap((e=>e.entries.map((e=>new Date(e.completion_time)))));return Math.min(...e)}function p(){let e=0;return a.unstakingBalances.forEach((a=>e+=a.entries.length)),e}async function m(e,s){d.value.push({typeUrl:"/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",value:Oe.MsgCancelUnbondingDelegation.fromPartial({delegatorAddress:a.currentAddress,validatorAddress:e,amount:[{denom:a.networks[a.currentNetwork].denom,amount:""+parseFloat(s.balance.toString().replace(",",".")).toFixed(a.networks[a.currentNetwork].exponent)*Math.pow(10,a.networks[a.currentNetwork].exponent)}],creation_height:s.creation_height})}),r.value=!0;try{let e=await(0,v.qS)(d.value);i.notify({group:"default",clean:!0}),i.notify({group:"default",speed:200,duration:-100,title:t.global.t("message.notification_tx_pending_title"),type:"pending",data:{explorer_link:(0,v.aS)(a.currentNetwork)}}),(0,v.nw)(e)}catch(l){console.log(l),n(l)}function n(e){let a="";a=e.code?t.global.t(`message.notification_tx_error_${e.code}`):t.global.t("message.notification_tx_error_rejected"),i.notify({group:"default",speed:200,duration:6e3,title:"Tx error",text:a,type:"error"})}}return(0,s.KC)((()=>{a.getUnstakingBalances()})),(e,t)=>{const i=(0,s.g2)("vue-countdown");return(0,l.R1)(a).isUnstakingBalancesGot&&(0,l.R1)(a).unstakingBalances.length?((0,s.uX)(),(0,s.CE)("section",ia,[(0,s.Lk)("div",ca,[(0,s.Lk)("div",ra,(0,n.v_)(e.$t("message.unstaking_tokens_title")),1),(0,s.Lk)("div",ua,[(0,s.Lk)("div",va,[r.value?((0,s.uX)(),(0,s.Wv)(B.A,{key:0})):(0,s.Q3)("",!0),(0,s.Lk)("div",ka,[(0,s.Lk)("div",da,[(0,s.eW)((0,n.v_)(e.$t("message.unstaking_tokens_label"))+" ",1),(0,s.bF)(i,{time:(0,l.R1)(v._Q)(_())-new Date},{default:(0,s.k6)((({days:a,hours:t,minutes:l})=>[a>1?((0,s.uX)(),(0,s.CE)("span",_a,(0,n.v_)(a)+" "+(0,n.v_)(e.$t("message.unstaking_tokens_finish_days")),1)):(0,s.Q3)("",!0),1==a?((0,s.uX)(),(0,s.CE)("span",pa,(0,n.v_)(a)+" "+(0,n.v_)(e.$t("message.unstaking_tokens_finish_day")),1)):(0,s.Q3)("",!0),a?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("span",ma,(0,n.v_)(t)+"h "+(0,n.v_)(l)+"m",1))])),_:1},8,["time"])]),(0,s.Lk)("div",ga,[(0,s.Lk)("div",La,[(0,s.Lk)("img",{src:(0,l.R1)(v.oB)((0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].chain_id),alt:""},null,8,ba)]),(0,s.Lk)("div",null,[(0,s.Lk)("div",Ra,(0,n.v_)((0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].token_name),1),(0,s.Lk)("div",wa,[(0,s.eW)((0,n.v_)(e.$t("message.unstaking_tokens_count_label"))+" ",1),(0,s.Lk)("b",null,(0,n.v_)(p()),1)])]),(0,s.Lk)("div",fa,[(0,s.Lk)("div",ha,(0,n.v_)((0,l.R1)(v.NJ)((0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].totalUnstakingTokens,(0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].exponent).toLocaleString("ru-RU",{maximumFractionDigits:7}))+" "+(0,n.v_)((0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].token_name),1),(0,s.Lk)("div",ya,(0,n.v_)((0,l.R1)(v.ST)((0,l.R1)(v.Y$)((0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].token_name,(0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].totalUnstakingTokens,(0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].exponent)))+" "+(0,n.v_)((0,l.R1)(a).currentCurrencySymbol),1)])])]),(0,s.Lk)("button",{class:(0,n.C4)(["spoler_btn",{active:k.value}]),onClick:t[0]||(t[0]=(0,o.D$)((e=>k.value=!k.value),["prevent"]))},$a,2),(0,s.bo)((0,s.Lk)("div",Ea,[(0,s.Lk)("div",xa,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)((0,l.R1)(a).unstakingBalances,((c,r)=>((0,s.uX)(),(0,s.CE)("div",{key:r},[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(c.entries,((r,u)=>((0,s.uX)(),(0,s.Wv)(ta,{class:"item",key:u},(0,s.eX)({validator:(0,s.k6)((()=>[(0,s.Lk)("div",Xa,[(0,s.Lk)("div",Aa,[(0,s.Lk)("div",Na,[(0,s.Lk)("img",{src:`https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${(0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].prefix}/moniker/${c.validator_info.operator_address}.png`,alt:"",loading:"lazy",onError:t[1]||(t[1]=e=>(0,l.R1)(v.on)(e))},null,40,Ba),Ia]),(0,s.Lk)("div",null,[(0,s.Lk)("div",Sa,(0,n.v_)(c.validator_info.description.moniker),1),(0,s.Lk)("div",Ka,[(0,s.eW)((0,n.v_)(e.$t("message.unstaking_tokens_finish_label"))+" ",1),(0,s.bF)(i,{time:(0,l.R1)(v._Q)(r.completion_time)-new Date},{default:(0,s.k6)((({days:a,hours:t,minutes:l})=>[a>1?((0,s.uX)(),(0,s.CE)("span",Fa,(0,n.v_)(a)+" "+(0,n.v_)(e.$t("message.unstaking_tokens_finish_days")),1)):(0,s.Q3)("",!0),1==a?((0,s.uX)(),(0,s.CE)("span",Qa,(0,n.v_)(a)+" "+(0,n.v_)(e.$t("message.unstaking_tokens_finish_day")),1)):(0,s.Q3)("",!0),a?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("span",Wa,(0,n.v_)(t)+"h "+(0,n.v_)(l)+"m",1))])),_:2},1032,["time"])])]),(0,s.Lk)("div",Da,[(0,s.Lk)("div",Ta,(0,n.v_)((0,l.R1)(v.NJ)(r.balance,(0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].exponent).toLocaleString("ru-RU",{maximumFractionDigits:7}))+" "+(0,n.v_)((0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].token_name),1),(0,s.Lk)("div",Ga,(0,n.v_)((0,l.R1)(v.ST)((0,l.R1)(v.Y$)((0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].token_name,r.balance,(0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].exponent)))+" "+(0,n.v_)((0,l.R1)(a).currentCurrencySymbol),1)])])])])),_:2},[(0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].isunstakingCancelSupport?{name:"cancel_btn",fn:(0,s.k6)((()=>[(0,s.Lk)("button",{class:"cancel_btn",onClick:(0,o.D$)((e=>m(c.validator_info.operator_address,r)),["prevent"])},[Ua,(0,s.Lk)("span",null,(0,n.v_)(e.$t("message.btn_cancel")),1)],8,za)])),key:"0"}:void 0]),1024)))),128))])))),128))])],512),[[o.aG,k.value]])])])])])):(0,s.Q3)("",!0)}}};const Ya=(0,C.A)(ja,[["__scopeId","data-v-0ea24de8"]]);var qa=Ya;const Pa=e=>((0,s.Qi)("data-v-7133ab04"),e=e(),(0,s.jt)(),e),Ma=i+"#ic_user",Ja={class:"stake_tokens"},Za={class:"cont"},Va={key:1,class:"tokens"},Ha={key:0,class:"count"},Oa={key:1,class:"list"},et={class:"token_wrap"},at={class:"token"},tt={class:"logo"},st=["src"],nt={class:"denom"},lt={class:"validator"},ot={class:"label"},it={class:"moniker"},ct={class:"logo"},rt=["src"],ut=Pa((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":Ma})],-1))),vt={class:"amount"},kt={class:"val"},dt={class:"cost"},_t={key:2,class:"empty"};var pt={__name:"StakedTokens",setup(e){const a=(0,c.o)(),t=(0,s.WQ)("emitter"),o=(0,l.KR)([]);return(0,s.KC)((()=>{a.isStakedBalancesGot&&(o.value=a.stakedBalances)})),(0,s.wB)((0,s.EW)((()=>a.isStakedBalancesGot)),(()=>{a.isStakedBalancesGot&&(o.value=a.stakedBalances)})),t.on("search",(({query:e,source:t})=>{if("staked"===t){o.value=[];for(let t in a.stakedBalances)a.stakedBalances[t].validator_info.description.moniker.toLocaleLowerCase().includes(e.toLocaleLowerCase())&&o.value.push(a.stakedBalances[t])}})),(e,t)=>((0,s.uX)(),(0,s.CE)("section",Ja,[(0,s.Lk)("div",Za,[(0,s.bF)(de.A,{source:"staked"}),(0,l.R1)(a).isInitialized&&(0,l.R1)(a).isStakedBalancesGot?((0,s.uX)(),(0,s.CE)("div",Va,[o.value.length===(0,l.R1)(a).stakedBalances.length?((0,s.uX)(),(0,s.CE)("div",Ha,[(0,s.Lk)("b",null,(0,n.v_)((0,l.R1)(a).stakedBalances.length),1),(0,s.eW)(" "+(0,n.v_)(e.$t("message.staked_tokens_title")),1)])):(0,s.Q3)("",!0),o.value.length?((0,s.uX)(),(0,s.CE)("div",Oa,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.value,((o,i)=>((0,s.uX)(),(0,s.CE)("div",{class:"item",key:i,style:(0,n.Tr)(`order: ${parseInt(-1e6*(0,l.R1)(v.Y$)(o.balance.token_info.symbol,o.balance.amount,o.balance.exponent))};`)},[(0,s.Lk)("div",et,[(0,s.Lk)("div",at,[(0,s.Lk)("div",tt,[(0,s.Lk)("img",{src:o.balance.token_info.logo_URIs.svg,alt:"",loading:"lazy"},null,8,st)]),(0,s.Lk)("div",null,[(0,s.Lk)("div",nt,(0,n.v_)(o.balance.token_info.symbol),1),(0,s.Lk)("div",lt,[(0,s.Lk)("div",ot,(0,n.v_)(e.$t("message.staked_tokens_validator_label")),1),(0,s.Lk)("div",it,(0,n.v_)(o.validator_info.description.moniker),1),(0,s.Lk)("div",ct,[(0,s.Lk)("img",{src:`https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${(0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].prefix}/moniker/${o.validator_info.operator_address}.png`,alt:"",loading:"lazy",onError:t[0]||(t[0]=e=>(0,l.R1)(v.on)(e))},null,40,rt),ut])])]),(0,s.Lk)("div",vt,[(0,s.Lk)("div",kt,(0,n.v_)((0,l.R1)(v.NJ)(o.balance.amount,o.balance.exponent).toLocaleString("ru-RU",{maximumFractionDigits:7})),1),(0,s.Lk)("div",dt,(0,n.v_)((0,l.R1)(v.ST)((0,l.R1)(v.Y$)(o.balance.token_info.symbol,o.balance.amount,o.balance.exponent)))+" "+(0,n.v_)((0,l.R1)(a).currentCurrencySymbol),1)])])])],4)))),128))])):((0,s.uX)(),(0,s.CE)("div",_t,(0,n.v_)(e.$t("message.search_empty_validator")),1))])):((0,s.uX)(),(0,s.Wv)(B.A,{key:0}))])]))}};const mt=(0,C.A)(pt,[["__scopeId","data-v-7133ab04"]]);var gt=mt;const Lt=e=>((0,s.Qi)("data-v-68c2c4ac"),e=e(),(0,s.jt)(),e),bt=i+"#ic_close",Rt={class:"modal"},wt={class:"modal_content"},ft={class:"data"},ht=Lt((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":bt})],-1))),yt=[ht],Ct={class:"modal_title"},$t={class:"info_wrap"},Et={class:"info"},xt={class:"label"},Xt={class:"val gradient"},At={class:"label"},Nt={class:"val"},Bt={class:"cost"};var It={__name:"StatsModal",setup(e){const a=(0,c.o)(),t=(0,s.WQ)("emitter"),i=(0,l.KR)(0),r=(0,l.KR)(0);async function u(){let e=[];if(a.stakedBalances.length){a.stakedBalances.forEach((t=>e.push(100*a.networks[a.currentNetwork].APR-100*a.networks[a.currentNetwork].APR*t.validator_info.commission.commission_rates.rate)));let t=e.reduce(((e,a)=>e+a),0);i.value=t/e.length}}function k(){r.value=(0,v.cc)()*(i.value/100)/365}return(0,s.KC)((async()=>{await u(),k()})),(e,c)=>((0,s.uX)(),(0,s.CE)("section",Rt,[(0,s.Lk)("div",wt,[(0,s.Lk)("div",ft,[(0,s.Lk)("button",{class:"close_btn",onClick:c[0]||(c[0]=(0,o.D$)((e=>(0,l.R1)(t).emit("close_stats_modal")),["prevent"]))},yt),(0,s.Lk)("div",Ct,(0,n.v_)(e.$t("message.stats_title")),1),(0,s.Lk)("div",$t,[(0,s.Lk)("div",Et,[(0,s.Lk)("div",null,[(0,s.Lk)("div",xt,(0,n.v_)(e.$t("message.stats_personal_apr_label")),1),(0,s.Lk)("div",Xt,(0,n.v_)(i.value.toFixed(2))+"% ",1)]),(0,s.Lk)("div",null,[(0,s.Lk)("div",At,(0,n.v_)(e.$t("message.stats_daily_profit_label")),1),(0,s.Lk)("div",Nt,[(0,s.eW)((0,n.v_)((0,l.R1)(v.NJ)(r.value,(0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].exponent).toLocaleString("ru-RU",{maximumFractionDigits:3}))+" "+(0,n.v_)((0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].token_name)+" ",1),(0,s.Lk)("div",Bt," ("+(0,n.v_)((0,l.R1)(v.ST)((0,l.R1)(v.Y$)((0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].token_name,r.value,(0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].exponent)))+(0,n.v_)((0,l.R1)(a).currentCurrencySymbol)+") ",1)])])])])])]),(0,s.Lk)("div",{class:"overlay",onClick:c[1]||(c[1]=(0,o.D$)((e=>(0,l.R1)(t).emit("close_stats_modal")),["prevent"]))})]))}};const St=(0,C.A)(It,[["__scopeId","data-v-68c2c4ac"]]);var Kt=St;const Ft=i+"#ic_stats",Qt=(0,s.Lk)("div",{class:"update_balances_loader"},null,-1),Wt={class:"top_block"},Dt=(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":Ft})],-1),Tt=[Dt];var Gt={__name:"AccountPage",setup(e){const a=(0,c.o)(),t=(0,r.$ym)("history"),i=(0,s.WQ)("emitter"),v=(0,u.hN)(),k=(0,l.KR)(""),d=(0,l.KR)(!1),_=(0,l.KR)(null),p=(0,l.KR)(t.activeSlide||0),m=["\n            .swiper-horizontal > .swiper-pagination-bullets,\n            .swiper-pagination-bullets.swiper-pagination-horizontal,\n            .swiper-pagination-custom,\n            .swiper-pagination-fraction\n            {\n                bottom: 8px;\n            }\n\n            .swiper-pagination-bullet\n            {\n                width: 8px;\n                opacity: 1;\n                height: 4px;\n\n                transition: .2s linear;\n\n                border-radius: 2px;\n                background: #fff;\n            }\n\n            .swiper-pagination-bullet.active\n            {\n                width: 20px;\n            }\n            "],g=(0,l.KR)(0),L=(0,l.KR)(!1),b=70,R=(0,l.KR)(!1);function w(e){0===window.scrollY&&(g.value=e.touches[0].pageY,L.value=!0,R.value=!1)}function f(e){if(L.value&&a.networks[a.currentNetwork].currentTxHash)return void i.emit("show_pending_notification");if(!L.value||R.value)return;let t=e.touches[0].pageY,s=t-g.value;if(s>0&&s>=b){e.preventDefault(),e.stopPropagation(),R.value=!0;let t=document.querySelector(".account_page");t&&(t.classList.add("updating"),setTimeout((()=>t.classList.remove("updating")),500)),a.updateAllBalances()}}function h(e){L.value=!1}return(0,s.KC)((async()=>{a.isInitialized||await a.initApp()})),(0,s.sV)((()=>{_.value=document.querySelector("swiper-container"),_.value.addEventListener("swiperslidechangetransitionstart",(async e=>{p.value=_.value.swiper.activeIndex})),window.addEventListener("touchstart",w,{passive:!1}),window.addEventListener("touchmove",f,{passive:!1}),window.addEventListener("touchend",h,{passive:!1})})),(0,s.hi)((()=>{window.removeEventListener("touchstart",w,{passive:!1}),window.removeEventListener("touchmove",f,{passive:!1}),window.removeEventListener("touchend",h,{passive:!1})})),(0,s.wB)((0,s.EW)((()=>a.currentNetwork)),(async()=>{a.isInitialized&&(v.notify({group:"default",clean:!0}),await a.initApp())})),i.on("swiper_slideTo",(({index:e})=>{_.value.swiper.slideTo(e,500),setTimeout((()=>{let e=document.querySelector(".staked_section .stake_btn");e&&(e.classList.add("click_animate"),setTimeout((()=>e.click()),500))}),500)})),i.on("search_focus",(()=>{k.value=!0})),i.on("search_blur",(()=>{k.value=!1})),i.on("close_stats_modal",(()=>{d.value=!1})),(e,t)=>{const i=(0,s.g2)("swiper-slide"),c=(0,s.g2)("swiper-container"),r=(0,s.gN)("parallax");return(0,s.uX)(),(0,s.CE)(s.FK,null,[Qt,(0,s.Lk)("section",{class:(0,n.C4)(["page_container account_page",{searching:k.value}])},[(0,s.bo)(((0,s.uX)(),(0,s.CE)("section",Wt,[(0,l.R1)(a).currentNetwork?((0,s.uX)(),(0,s.Wv)(E,{key:0})):(0,s.Q3)("",!0),1==p.value&&(0,l.R1)(a).isInitialized?((0,s.uX)(),(0,s.CE)("button",{key:1,class:"stats_btn",onClick:t[0]||(t[0]=(0,o.D$)((e=>d.value=!0),["prevent"]))},Tt)):(0,s.Q3)("",!0),(0,s.bF)(x.A),(0,s.bF)(N),(0,s.bF)(c,{"initial-slide":p.value,injectStyles:m,speed:"500",touchMoveStopPropagation:"true",pagination:{type:"bullets",clickable:!0,bulletActiveClass:"active"}},{default:(0,s.k6)((()=>[(0,s.bF)(i,null,{default:(0,s.k6)((()=>[(0,s.bF)(H)])),_:1}),(0,s.bF)(i,null,{default:(0,s.k6)((()=>[(0,s.bF)(ke)])),_:1})])),_:1},8,["initial-slide"])])),[[r]]),(0,s.bo)((0,s.bF)(Xe,null,null,512),[[o.aG,0==p.value]]),(0,s.bo)((0,s.bF)(He,null,null,512),[[o.aG,1==p.value]]),(0,l.R1)(a).isInitialized?(0,s.bo)(((0,s.uX)(),(0,s.Wv)(qa,{key:0},null,512)),[[o.aG,1==p.value]]):(0,s.Q3)("",!0),(0,s.bo)((0,s.bF)(gt,null,null,512),[[o.aG,1==p.value]])],2),d.value?((0,s.uX)(),(0,s.Wv)(Kt,{key:0})):(0,s.Q3)("",!0)],64)}}};const zt=Gt;var Ut=zt}}]);
//# sourceMappingURL=436.d041de66.js.map