"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[636],{89114:function(e,a,s){s.d(a,{A:function(){return d}});var n=s(56768);const t={class:"loader_wrap"},l=(0,n.Lk)("div",{class:"loader"},[(0,n.Lk)("span")],-1),i=[l];function c(e,a){return(0,n.uX)(),(0,n.CE)("div",t,i)}var o=s(71241);const r={},u=(0,o.A)(r,[["render",c]]);var d=u},82636:function(e,a,s){s.r(a),s.d(a,{default:function(){return Na}});var n=s(56768),t=s(24232),l=s(90144),i=s(45130),c=s(76750),o=s(24113),r=s(38326),u=s(61981);const d=e=>((0,n.Qi)("data-v-4a1df3e8"),e=e(),(0,n.jt)(),e),v=o+"#ic_arr_ver",k={class:"logo"},_=["src"],p={class:"name"},b=d((()=>(0,n.Lk)("svg",{class:"arr"},[(0,n.Lk)("use",{"xlink:href":v})],-1))),m={class:"mini_modal"},L={class:"scroll"},g=["onClick"],f={class:"logo"},y=["src"],C={class:"name"};var w={__name:"NetworkChooser",setup(e){const a=(0,c.o)(),s=(0,l.KR)(!1),o=(0,l.KR)(null);function d(e){s.value=!1,a.setCurrentNetwork(e)}return(0,r.X2F)(o,(e=>s.value=!1)),(e,c)=>((0,n.uX)(),(0,n.CE)("div",{class:"choose_network",ref_key:"target",ref:o},[(0,n.Lk)("button",{class:(0,t.C4)(["btn",{active:s.value}]),onClick:c[0]||(c[0]=(0,i.D$)((e=>s.value=!s.value),["prevent"]))},[(0,n.Lk)("div",k,[(0,n.Lk)("img",{src:(0,l.R1)(u.oB)((0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].chain_id),alt:""},null,8,_)]),(0,n.Lk)("div",p,(0,t.v_)((0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].name),1),b],2),(0,n.bo)((0,n.Lk)("div",m,[(0,n.Lk)("div",L,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)((0,l.R1)(a).networks,((e,s)=>((0,n.uX)(),(0,n.CE)("div",{key:s},[(0,n.Lk)("button",{class:(0,t.C4)(["network",{active:(0,l.R1)(a).currentNetwork==e.alias}]),onClick:(0,i.D$)((a=>d(e.alias)),["prevent"])},[(0,n.Lk)("div",f,[(0,n.Lk)("img",{src:(0,l.R1)(u.oB)(e.chain_id),alt:"",loading:"lazy"},null,8,y)]),(0,n.Lk)("div",C,(0,t.v_)(e.name),1)],10,g)])))),128))])],512),[[i.aG,s.value]])],512))}},R=s(71241);const h=(0,R.A)(w,[["__scopeId","data-v-4a1df3e8"]]);var x=h;const E=e=>((0,n.Qi)("data-v-0a796cfd"),e=e(),(0,n.jt)(),e),X=o+"#ic_scaner",I=E((()=>(0,n.Lk)("svg",{class:"icon"},[(0,n.Lk)("use",{"xlink:href":X})],-1))),$=[I];var B={__name:"QRCode",setup(e){function a(){Telegram.WebApp.showScanQrPopup({text:"Наш текст"})}return(e,s)=>((0,n.uX)(),(0,n.CE)("button",{class:"qr_code_btn",onClick:(0,i.D$)(a,["prevent"])},$))}};const A=(0,R.A)(B,[["__scopeId","data-v-0a796cfd"]]);var F=A,S={__name:"Currency",setup(e){const a=(0,c.o)();return(e,s)=>((0,n.uX)(),(0,n.CE)("button",{class:"currency",onClick:s[0]||(s[0]=(0,i.D$)((e=>(0,l.R1)(a).updateCurrentCurrency()),["prevent"]))},(0,t.v_)((0,l.R1)(a).currentCurrency),1))}};const W=(0,R.A)(S,[["__scopeId","data-v-7525dc69"]]);var K=W,G=s(89114),Q=s(67278);const D=e=>((0,n.Qi)("data-v-79824cd2"),e=e(),(0,n.jt)(),e),T=o+"#ic_copy2",z=D((()=>(0,n.Lk)("svg",{class:"icon"},[(0,n.Lk)("use",{"xlink:href":T})],-1)));var N={__name:"Address",setup(e){const a=(0,c.o)(),s=(0,n.WQ)("i18n"),o=(0,Q.hN)(),{copy:u}=(0,r.iDZ)();function d(){u(a.currentAddress),o.notify({group:"default",clean:!0}),o.notify({group:"default",speed:200,duration:750,title:s.global.t("message.notification_copied_title"),type:"copied"})}return(e,s)=>((0,n.uX)(),(0,n.CE)("div",{class:"address",onClick:(0,i.D$)(d,["prevent"])},[z,(0,n.Lk)("span",null,(0,t.v_)((0,l.R1)(a).currentAddress.slice(0,9)+"..."+(0,l.R1)(a).currentAddress.slice(-6)),1)]))}};const U=(0,R.A)(N,[["__scopeId","data-v-79824cd2"]]);var j=U;const q=e=>((0,n.Qi)("data-v-108a6f23"),e=e(),(0,n.jt)(),e),Y=o+"#ic_send",J=o+"#ic_receive",P={class:"available_section"},Z={class:"balance"},V={class:"label"},H={class:"actions"},M=q((()=>(0,n.Lk)("div",{class:"icon"},[(0,n.Lk)("svg",null,[(0,n.Lk)("use",{"xlink:href":Y})])],-1))),O=q((()=>(0,n.Lk)("div",{class:"icon"},[(0,n.Lk)("svg",null,[(0,n.Lk)("use",{"xlink:href":J})])],-1))),ee=q((()=>(0,n.Lk)("div",{class:"icon"},[(0,n.Lk)("svg",null,[(0,n.Lk)("use",{"xlink:href":J})])],-1)));var ae={__name:"Available",setup(e){const a=(0,c.o)(),s=(0,n.WQ)("emitter");function o(){a.getBalances()}return(e,c)=>{const r=(0,n.g2)("router-link");return(0,n.uX)(),(0,n.CE)("div",P,[(0,n.Lk)("div",Z,[(0,n.Lk)("div",V,(0,t.v_)(e.$t("message.current_balance_title")),1),(0,l.R1)(a).isBalancesGot?((0,n.uX)(),(0,n.CE)("div",{key:1,class:"val",onClick:(0,i.D$)(o,["prevent"])},(0,t.v_)((0,l.R1)(u.ST)((0,l.R1)(u.s3)())),1)):((0,n.uX)(),(0,n.Wv)(G.A,{key:0})),(0,n.bF)(j)]),(0,n.Lk)("div",H,[(0,n.bF)(r,{to:"/account",class:"btn"},{default:(0,n.k6)((()=>[M,(0,n.Lk)("div",null,(0,t.v_)(e.$t("message.btn_send")),1)])),_:1}),(0,n.bF)(r,{to:"/account",class:"btn"},{default:(0,n.k6)((()=>[O,(0,n.Lk)("div",null,(0,t.v_)(e.$t("message.btn_receive")),1)])),_:1}),(0,n.Lk)("button",{class:"btn",onClick:c[0]||(c[0]=(0,i.D$)((e=>(0,l.R1)(s).emit("swiper_slideTo",{index:1})),["prevent"]))},[ee,(0,n.Lk)("div",null,(0,t.v_)(e.$t("message.btn_stake")),1)])])])}}};const se=(0,R.A)(ae,[["__scopeId","data-v-108a6f23"]]);var ne=se;const te=e=>((0,n.Qi)("data-v-1b90ace8"),e=e(),(0,n.jt)(),e),le=o+"#ic_send",ie=o+"#ic_receive",ce={class:"stacked_section"},oe={class:"balance"},re={class:"label"},ue={class:"actions"},de=te((()=>(0,n.Lk)("div",{class:"icon"},[(0,n.Lk)("svg",null,[(0,n.Lk)("use",{"xlink:href":le})])],-1))),ve=te((()=>(0,n.Lk)("div",{class:"icon"},[(0,n.Lk)("svg",null,[(0,n.Lk)("use",{"xlink:href":ie})])],-1))),ke=te((()=>(0,n.Lk)("div",{class:"icon"},[(0,n.Lk)("svg",null,[(0,n.Lk)("use",{"xlink:href":ie})])],-1)));var _e={__name:"Stacked",setup(e){const a=(0,c.o)();function s(){a.getStakedBalances(),a.getRewards()}return(e,c)=>{const o=(0,n.g2)("router-link");return(0,n.uX)(),(0,n.CE)("div",ce,[(0,n.Lk)("div",oe,[(0,n.Lk)("div",re,(0,t.v_)(e.$t("message.current_balance_title")),1),(0,l.R1)(a).isStakedBalancesGot?((0,n.uX)(),(0,n.CE)("div",{key:1,class:"val",onClick:(0,i.D$)(s,["prevent"])},(0,t.v_)((0,l.R1)(u.ST)((0,l.R1)(u.eZ)())),1)):((0,n.uX)(),(0,n.Wv)(G.A,{key:0})),(0,n.bF)(j)]),(0,n.Lk)("div",ue,[(0,n.bF)(o,{to:"/account",class:"btn"},{default:(0,n.k6)((()=>[de,(0,n.Lk)("div",null,(0,t.v_)(e.$t("message.btn_stake")),1)])),_:1}),(0,n.bF)(o,{to:"/account",class:"btn"},{default:(0,n.k6)((()=>[ve,(0,n.Lk)("div",null,(0,t.v_)(e.$t("message.btn_unstake")),1)])),_:1}),(0,n.bF)(o,{to:"/account",class:"btn"},{default:(0,n.k6)((()=>[ke,(0,n.Lk)("div",null,(0,t.v_)(e.$t("message.btn_restake")),1)])),_:1})])])}}};const pe=(0,R.A)(_e,[["__scopeId","data-v-1b90ace8"]]);var be=pe;s(44114);const me=e=>((0,n.Qi)("data-v-c6d085d4"),e=e(),(0,n.jt)(),e),Le=o+"#ic_arrow_hor",ge=o+"#ic_search",fe=o+"#ic_close",ye={class:"search"},Ce=me((()=>(0,n.Lk)("button",{class:"back_btn"},[(0,n.Lk)("span",null,[(0,n.Lk)("svg",null,[(0,n.Lk)("use",{"xlink:href":Le})])])],-1))),we={class:"field"},Re=me((()=>(0,n.Lk)("svg",{class:"icon"},[(0,n.Lk)("use",{"xlink:href":ge})],-1))),he=["placeholder"],xe=me((()=>(0,n.Lk)("svg",null,[(0,n.Lk)("use",{"xlink:href":fe})],-1))),Ee=[xe];var Xe={__name:"Search",props:["sliderIndex"],setup(e){const a=e,s=(0,n.WQ)("emitter"),t=(0,l.KR)("");function c(){setTimeout((()=>s.emit("search_focus")),100)}function o(){setTimeout((()=>s.emit("search_blur")),100)}function r(){s.emit("search",{query:t.value,sliderIndex:a.sliderIndex})}function u(){t.value="",s.emit("search",{query:t.value,sliderIndex:a.sliderIndex})}return(e,a)=>((0,n.uX)(),(0,n.CE)("div",ye,[Ce,(0,n.Lk)("div",we,[Re,(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),class:"input",placeholder:e.$t("message.search_placeholder"),onFocus:c,onBlur:o,onInput:r},null,40,he),[[i.Jo,t.value]]),t.value.length?((0,n.uX)(),(0,n.CE)("button",{key:0,class:"clear_btn",onClick:(0,i.D$)(u,["prevent"])},Ee)):(0,n.Q3)("",!0)])]))}};const Ie=(0,R.A)(Xe,[["__scopeId","data-v-c6d085d4"]]);var $e=Ie;const Be={class:"available_tokens"},Ae={class:"cont"},Fe={key:1,class:"tokens"},Se={key:0,class:"count"},We={key:1,class:"list"},Ke={class:"token_wrap"},Ge={class:"token"},Qe={class:"logo"},De=["src","alt"],Te={class:"denom"},ze={class:"amount"},Ne={class:"val"},Ue={class:"cost"},je={key:2,class:"empty"};var qe={__name:"AvailableTokens",setup(e){const a=(0,c.o)(),s=(0,n.WQ)("emitter"),i=(0,l.KR)([]);return(0,n.KC)((()=>{a.isBalancesGot&&(i.value=a.balances)})),(0,n.wB)((0,n.EW)((()=>a.isBalancesGot)),(()=>{i.value=a.balances})),s.on("search",(({query:e,sliderIndex:s})=>{if(1===s){i.value=[];for(let s in a.balances)a.balances[s].token_info.symbol.toLocaleLowerCase().includes(e.toLocaleLowerCase())&&i.value.push(a.balances[s])}})),(e,s)=>((0,n.uX)(),(0,n.CE)("section",Be,[(0,n.Lk)("div",Ae,[(0,n.bF)($e,{sliderIndex:1}),(0,l.R1)(a).isBalancesGot?((0,n.uX)(),(0,n.CE)("div",Fe,[i.value.length===(0,l.R1)(a).balances.length?((0,n.uX)(),(0,n.CE)("div",Se,[(0,n.Lk)("b",null,(0,t.v_)((0,l.R1)(a).balances.length),1),(0,n.eW)(" "+(0,t.v_)(e.$t("message.available_tokens_title")),1)])):(0,n.Q3)("",!0),i.value.length?((0,n.uX)(),(0,n.CE)("div",We,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.value,((e,s)=>((0,n.uX)(),(0,n.CE)("div",{class:"item",key:s,style:(0,t.Tr)(`order: ${parseInt(-1e6*(0,l.R1)(u.Y$)(e.token_info.symbol,e.amount,e.exponent))};`)},[(0,n.Lk)("div",Ke,[(0,n.Lk)("div",Ge,[(0,n.Lk)("div",Qe,[(0,n.Lk)("img",{src:e.token_info.logo_URIs.svg,alt:e.token_info.name,loading:"lazy"},null,8,De)]),(0,n.Lk)("div",Te,(0,t.v_)(e.token_info.symbol),1),(0,n.Lk)("div",ze,[(0,n.Lk)("div",Ne,(0,t.v_)((0,l.R1)(u.NJ)(e.amount,e.exponent).toLocaleString("ru-RU",{maximumFractionDigits:7})),1),(0,n.Lk)("div",Ue,(0,t.v_)((0,l.R1)(u.ST)((0,l.R1)(u.Y$)(e.token_info.symbol,e.amount,e.exponent)))+" "+(0,t.v_)((0,l.R1)(a).currentCurrencySymbol),1)])])])],4)))),128))])):((0,n.uX)(),(0,n.CE)("div",je,(0,t.v_)(e.$t("message.search_empty")),1))])):((0,n.uX)(),(0,n.Wv)(G.A,{key:0}))])]))}};const Ye=(0,R.A)(qe,[["__scopeId","data-v-18daddf0"]]);var Je=Ye;const Pe=e=>((0,n.Qi)("data-v-21d478f9"),e=e(),(0,n.jt)(),e),Ze=o+"#ic_arr_ver",Ve={class:"claim_rewards"},He={class:"cont"},Me={class:"data_wrap"},Oe={class:"data"},ea={class:"info"},aa={class:"title"},sa={class:"cost"},na={class:"odometer"},ta=Pe((()=>(0,n.Lk)("svg",{class:"icon"},[(0,n.Lk)("use",{"xlink:href":Ze})],-1))),la=[ta],ia={class:"dropdown"},ca={class:"list"},oa={class:"token"},ra={class:"logo"},ua=["src","alt"],da={class:"denom"},va={class:"cost"},ka={class:"odometer"};var _a={__name:"ClaimRewards",setup(e){const a=(0,c.o)(),s=(0,l.KR)(!1),o=(0,l.KR)(null),r=(0,l.KR)(0),d=(0,l.KR)(0),v=(0,l.KR)(null);return(0,n.KC)((()=>{a.isRewardsGot&&(o.value=(0,u.Ko)("USD"))})),(0,n.wB)((0,n.EW)((()=>a.isInitialized)),(async()=>{a.isInitialized&&await a.getRewards()})),(0,n.wB)((0,n.EW)((()=>a.isStakedBalancesGot)),(()=>{a.isStakedBalancesGot&&(d.value=(0,u.eZ)("USD"),d.value&&(r.value=d.value*a.networks[a.currentNetwork].APR/31536e3))})),(0,n.wB)((0,n.EW)((()=>a.isRewardsGot)),(()=>{clearInterval(v.value),a.isRewardsGot&&(o.value=(0,u.Ko)("USD"),!o.value&&d.value&&setTimeout((async()=>await a.getRewards()),3e3),null!==o.value&&(v.value=setInterval((()=>o.value+=2.5*r.value),3e3)))})),(e,c)=>{const r=(0,n.g2)("router-link"),d=(0,n.gN)("odometer");return(0,n.uX)(),(0,n.CE)("section",Ve,[(0,n.Lk)("div",He,[(0,n.Lk)("div",Me,[(0,n.Lk)("div",Oe,[(0,l.R1)(a).isRewardsGot?((0,n.uX)(),(0,n.CE)(n.FK,{key:1},[(0,n.Lk)("div",ea,[(0,n.Lk)("div",aa,(0,t.v_)(e.$t("message.claim_rewards_title")),1),(0,n.Lk)("div",sa,[(0,n.eW)(" ~ "),(0,n.bo)((0,n.Lk)("div",na,null,512),[[d,o.value]]),(0,n.eW)(" $ ")])]),(0,n.bF)(r,{to:"/account/claim_confirm",class:(0,t.C4)(["btn",{disabled:!o.value}])},{default:(0,n.k6)((()=>[(0,n.Lk)("span",null,(0,t.v_)(e.$t("message.btn_claim")),1)])),_:1},8,["class"]),o.value?((0,n.uX)(),(0,n.CE)("button",{key:0,class:(0,t.C4)(["spoler_btn",{active:s.value}]),onClick:c[0]||(c[0]=(0,i.D$)((e=>s.value=!s.value),["prevent"]))},la,2)):(0,n.Q3)("",!0),(0,n.bo)((0,n.Lk)("div",ia,[(0,n.Lk)("div",ca,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)((0,l.R1)(a).rewardsBalances,((e,a)=>((0,n.uX)(),(0,n.CE)("div",{class:"token_wrap",key:a,style:(0,t.Tr)(`order: ${parseInt(-1e6*(0,l.R1)(u.Y$)(e.token_info.symbol,e.amount,e.exponent))};`)},[(0,n.Lk)("div",oa,[(0,n.Lk)("div",ra,[(0,n.Lk)("img",{src:e.token_info.logo_URIs.svg,alt:e.token_info.name,loading:"lazy"},null,8,ua)]),(0,n.Lk)("div",null,[(0,n.Lk)("div",da,(0,t.v_)(e.token_info.symbol),1),(0,n.Lk)("div",va,[(0,n.eW)(" ~ "),(0,n.bo)((0,n.Lk)("div",ka,null,512),[[d,o.value]]),(0,n.eW)(" $ ")])])])],4)))),128))])],512),[[i.aG,s.value]])],64)):((0,n.uX)(),(0,n.Wv)(G.A,{key:0}))])])])])}}};const pa=(0,R.A)(_a,[["__scopeId","data-v-21d478f9"]]);var ba=pa;const ma={class:"stake_tokens"},La={class:"cont"},ga={key:1,class:"tokens"},fa={key:0,class:"count"},ya={key:1,class:"list"},Ca={class:"token_wrap"},wa={class:"token"},Ra={class:"logo"},ha=["src","alt"],xa={class:"denom"},Ea={class:"validator"},Xa={class:"label"},Ia={class:"moniker"},$a={class:"logo"},Ba=["src"],Aa={class:"amount"},Fa={class:"val"},Sa={class:"cost"},Wa={key:2,class:"empty"};var Ka={__name:"StakedTokens",setup(e){const a=(0,c.o)(),s=(0,n.WQ)("emitter"),i=(0,l.KR)([]);return(0,n.KC)((()=>{a.isStakedBalancesGot&&(i.value=a.stakedBalances)})),(0,n.wB)((0,n.EW)((()=>a.isStakedBalancesGot)),(()=>{i.value=a.stakedBalances})),s.on("search",(({query:e,sliderIndex:s})=>{if(2===s){i.value=[];for(let s in a.stakedBalances)a.stakedBalances[s].validator_info.description.moniker.toLocaleLowerCase().includes(e.toLocaleLowerCase())&&i.value.push(a.stakedBalances[s])}})),(e,s)=>((0,n.uX)(),(0,n.CE)("section",ma,[(0,n.Lk)("div",La,[(0,n.bF)($e,{sliderIndex:2}),(0,l.R1)(a).isStakedBalancesGot?((0,n.uX)(),(0,n.CE)("div",ga,[i.value.length===(0,l.R1)(a).stakedBalances.length?((0,n.uX)(),(0,n.CE)("div",fa,[(0,n.Lk)("b",null,(0,t.v_)((0,l.R1)(a).stakedBalances.length),1),(0,n.eW)(" "+(0,t.v_)(e.$t("message.staked_tokens_title")),1)])):(0,n.Q3)("",!0),i.value.length?((0,n.uX)(),(0,n.CE)("div",ya,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.value,((s,i)=>((0,n.uX)(),(0,n.CE)("div",{class:"item",key:i,style:(0,t.Tr)(`order: ${parseInt(-1e6*(0,l.R1)(u.Y$)(s.balance.token_info.symbol,s.balance.amount,s.balance.exponent))};`)},[(0,n.Lk)("div",Ca,[(0,n.Lk)("div",wa,[(0,n.Lk)("div",Ra,[(0,n.Lk)("img",{src:s.balance.token_info.logo_URIs.svg,alt:s.balance.token_info.name,loading:"lazy"},null,8,ha)]),(0,n.Lk)("div",null,[(0,n.Lk)("div",xa,(0,t.v_)(s.balance.token_info.symbol),1),(0,n.Lk)("div",Ea,[(0,n.Lk)("div",Xa,(0,t.v_)(e.$t("message.staked_tokens_validator_label")),1),(0,n.Lk)("div",Ia,(0,t.v_)(s.validator_info.description.moniker),1),(0,n.Lk)("div",$a,[(0,n.Lk)("img",{src:`https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${(0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].prefix}/moniker/${s.validator_info.operator_address}.png`,alt:"",loading:"lazy"},null,8,Ba)])])]),(0,n.Lk)("div",Aa,[(0,n.Lk)("div",Fa,(0,t.v_)((0,l.R1)(u.NJ)(s.balance.amount,s.balance.exponent).toLocaleString("ru-RU",{maximumFractionDigits:7})),1),(0,n.Lk)("div",Sa,(0,t.v_)((0,l.R1)(u.ST)((0,l.R1)(u.Y$)(s.balance.token_info.symbol,s.balance.amount,s.balance.exponent)))+" "+(0,t.v_)((0,l.R1)(a).currentCurrencySymbol),1)])])])],4)))),128))])):((0,n.uX)(),(0,n.CE)("div",Wa,(0,t.v_)(e.$t("message.search_empty_validator")),1))])):((0,n.uX)(),(0,n.Wv)(G.A,{key:0}))])]))}};const Ga=(0,R.A)(Ka,[["__scopeId","data-v-2bf5cdfe"]]);var Qa=Ga;const Da={class:"top_block"};var Ta={__name:"AccountPage",setup(e){const a=(0,c.o)(),s=(0,n.WQ)("emitter"),o=(0,l.KR)(""),r=(0,l.KR)(null),u=(0,l.KR)(0),d=["\n            .swiper-horizontal > .swiper-pagination-bullets,\n            .swiper-pagination-bullets.swiper-pagination-horizontal,\n            .swiper-pagination-custom,\n            .swiper-pagination-fraction\n            {\n                bottom: 8px;\n            }\n\n            .swiper-pagination-bullet\n            {\n                width: 8px;\n                opacity: 1;\n                height: 4px;\n\n                transition: .2s linear;\n\n                border-radius: 2px;\n                background: #fff;\n            }\n\n            .swiper-pagination-bullet.active\n            {\n                width: 20px;\n            }\n            "];return(0,n.KC)((async()=>{a.isInitialized||(await a.initApp(),a.getBalances(),a.getStakedBalances())})),(0,n.sV)((()=>{r.value=document.querySelector("swiper-container"),r.value.addEventListener("swiperslidechangetransitionstart",(async e=>{u.value=r.value.swiper.activeIndex}))})),(0,n.wB)((0,n.EW)((()=>a.currentNetwork)),(async()=>{a.isInitialized&&(a.isInitialized=!1,a.isBalancesGot=!1,a.isStakedBalancesGot=!1,await a.initApp(),a.getBalances(),a.getStakedBalances())})),s.on("swiper_slideTo",(({index:e})=>{r.value.swiper.slideTo(e,500)})),s.on("search_focus",(()=>{o.value=!0})),s.on("search_blur",(()=>{o.value=!1})),(e,s)=>{const c=(0,n.g2)("swiper-slide"),r=(0,n.g2)("swiper-container"),v=(0,n.gN)("parallax");return(0,n.uX)(),(0,n.CE)("section",{class:(0,t.C4)(["page_container account_page",{searching:o.value}])},[(0,n.bo)(((0,n.uX)(),(0,n.CE)("section",Da,[(0,l.R1)(a).isInitialized?((0,n.uX)(),(0,n.Wv)(x,{key:0})):(0,n.Q3)("",!0),(0,n.bF)(F),(0,n.bF)(K),(0,n.bF)(r,{injectStyles:d,speed:"500",pagination:{type:"bullets",clickable:!0,bulletActiveClass:"active"}},{default:(0,n.k6)((()=>[(0,n.bF)(c,null,{default:(0,n.k6)((()=>[(0,n.bF)(ne)])),_:1}),(0,n.bF)(c,null,{default:(0,n.k6)((()=>[(0,n.bF)(be)])),_:1})])),_:1})])),[[v]]),(0,n.bo)((0,n.bF)(Je,null,null,512),[[i.aG,0==u.value]]),(0,n.bo)((0,n.bF)(ba,null,null,512),[[i.aG,1==u.value]]),(0,n.bo)((0,n.bF)(Qa,null,null,512),[[i.aG,1==u.value]])],2)}}};const za=Ta;var Na=za}}]);
//# sourceMappingURL=636.12e11e2a.js.map