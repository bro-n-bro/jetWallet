"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[483],{58342:function(e,t,a){a.d(t,{A:function(){return f}});var s=a(56768),n=a(45130),r=a(24113),o=a(90144);const l=e=>((0,s.Qi)("data-v-5e44c6ba"),e=e(),(0,s.jt)(),e),i=r+"#ic_arrow_hor",c=r+"#ic_search",u=r+"#ic_close",k={class:"search"},v=l((()=>(0,s.Lk)("span",null,[(0,s.Lk)("svg",null,[(0,s.Lk)("use",{"xlink:href":i})])],-1))),d=[v],_={class:"field"},m=l((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":c})],-1))),g=["placeholder"],R=l((()=>(0,s.Lk)("svg",null,[(0,s.Lk)("use",{"xlink:href":u})],-1))),L=[R];var p={__name:"Search",props:["source"],setup(e){const t=e,a=(0,s.WQ)("emitter"),r=(0,o.KR)("");function l(){setTimeout((()=>a.emit("search_focus")),100)}function i(){setTimeout((()=>a.emit("search_blur")),100)}function c(){a.emit("search",{query:r.value,source:t.source})}function u(){r.value="",a.emit("search",{query:r.value,source:t.source})}return(e,t)=>((0,s.uX)(),(0,s.CE)("div",k,[(0,s.Lk)("button",{class:"back_btn",onClick:(0,n.D$)(i,["prevent"])},d),(0,s.Lk)("div",_,[m,(0,s.bo)((0,s.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>r.value=e),class:"input",placeholder:e.$t("message.search_placeholder"),onFocus:l,onBlur:i,onInput:c},null,40,g),[[n.Jo,r.value]]),r.value.length?((0,s.uX)(),(0,s.CE)("button",{key:0,class:"clear_btn",onClick:(0,n.D$)(u,["prevent"])},L)):(0,s.Q3)("",!0)])]))}},w=a(71241);const b=(0,w.A)(p,[["__scopeId","data-v-5e44c6ba"]]);var f=b},98583:function(e,t,a){a.r(t),a.d(t,{default:function(){return St}});var s=a(56768),n=a(24232),r=a(90144),o=a(45130),l=a(24113),i=a(76750),c=a(61981),u=a(68515),k=a(89114),v=a(88564),d=(a(44114),a(58342));const _=e=>((0,s.Qi)("data-v-b92b57be"),e=e(),(0,s.jt)(),e),m=l+"#ic_arrow_hor",g=l+"#ic_user",R=l+"#ic_check",L={class:"page_container validators_page"},p={class:"cont"},w={class:"head"},b=_((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":m})],-1))),f=[b],h={class:"page_title"},C={key:1,class:"validators"},y={key:0,class:"list"},x=["onClick"],N={class:"validator"},$={class:"logo"},A=["src"],F=_((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":g})],-1))),S={class:"moniker"},W={class:"commission"},X={key:0,class:"staked"},E={class:"logo"},T=["src"],V={class:"apr"},K=_((()=>(0,s.Lk)("br",null,null,-1))),D={class:"check"},Q={key:0},B=_((()=>(0,s.Lk)("use",{"xlink:href":R},null,-1))),I=[B],P={key:1,class:"empty"};var U={__name:"ValidatorsModal",setup(e){const t=(0,i.o)(),a=(0,s.WQ)("emitter"),l=(0,r.KR)(!1),u=(0,r.KR)([]),v=(0,r.KR)([]);function _(e){return t.stakedBalances.find((t=>t.validator_info.operator_address===e))}function m(e){t.stakeCurrentValidator=e,a.emit("close_validators_modal")}return(0,s.KC)((async()=>{u.value=(await t.getValidators()).validators,u.value.sort(((e,t)=>parseInt(e.tokens)>parseInt(t.tokens)?-1:parseInt(e.tokens)<parseInt(t.tokens)?1:0)),v.value=u.value,l.value=!0})),a.on("search",(({query:e,source:t})=>{if("validators"===t){v.value=[];for(let t in u.value)u.value[t].description.moniker.toLocaleLowerCase().includes(e.toLocaleLowerCase())&&v.value.push(u.value[t])}})),(e,i)=>((0,s.uX)(),(0,s.CE)("section",L,[(0,s.Lk)("div",p,[(0,s.Lk)("div",w,[(0,s.Lk)("button",{class:"back_btn",onClick:i[0]||(i[0]=e=>(0,r.R1)(a).emit("close_validators_modal"))},f),(0,s.Lk)("div",h,(0,n.v_)(e.$t("message.validators_page_title")),1)]),(0,s.bF)(d.A,{source:"validators"}),l.value?((0,s.uX)(),(0,s.CE)("div",C,[v.value.length?((0,s.uX)(),(0,s.CE)("div",y,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(v.value,((a,l)=>((0,s.uX)(),(0,s.CE)("div",{class:"item",key:l},[(0,s.Lk)("div",{class:(0,n.C4)(["validator_wrap",{current:(0,r.R1)(t).stakeCurrentValidator&&(0,r.R1)(t).stakeCurrentValidator.operator_address===a.operator_address}]),onClick:(0,o.D$)((e=>m(a)),["prevent"])},[(0,s.Lk)("div",N,[(0,s.Lk)("div",$,[(0,s.Lk)("img",{src:`https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${(0,r.R1)(t).networks[(0,r.R1)(t).currentNetwork].prefix}/moniker/${a.operator_address}.png`,alt:"",loading:"lazy",onError:i[1]||(i[1]=e=>(0,r.R1)(c.on)(e))},null,40,A),F]),(0,s.Lk)("div",null,[(0,s.Lk)("div",S,(0,n.v_)(a.description.moniker),1),(0,s.Lk)("div",W,(0,n.v_)((100*a.commission.commission_rates.rate).toLocaleString("ru-RU",{maximumFractionDigits:2}))+"% ",1),(e.item=_(a.operator_address))?((0,s.uX)(),(0,s.CE)("div",X,[(0,s.eW)((0,n.v_)(e.$t("message.validatoes_staked_label"))+" "+(0,n.v_)((0,r.R1)(c.NJ)(e.item.balance.amount,(0,r.R1)(t).networks[(0,r.R1)(t).currentNetwork].exponent).toLocaleString("ru-RU",{maximumFractionDigits:7}))+" ",1),(0,s.Lk)("div",E,[(0,s.Lk)("img",{src:(0,r.R1)(c.oB)((0,r.R1)(t).networks[(0,r.R1)(t).currentNetwork].chain_id),alt:""},null,8,T)])])):(0,s.Q3)("",!0)]),(0,s.Lk)("div",V,[(0,s.Lk)("span",null,[(0,s.eW)((0,n.v_)(e.$t("message.stake_APR_label")),1),K,(0,s.eW)(" "+(0,n.v_)((100*(0,r.R1)(t).networks[(0,r.R1)(t).currentNetwork].APR-100*(0,r.R1)(t).networks[(0,r.R1)(t).currentNetwork].APR*a.commission.commission_rates.rate).toFixed(2))+"%",1)])]),(0,s.Lk)("div",D,[(0,r.R1)(t).stakeCurrentValidator&&(0,r.R1)(t).stakeCurrentValidator.operator_address===a.operator_address?((0,s.uX)(),(0,s.CE)("svg",Q,I)):(0,s.Q3)("",!0)])])],10,x)])))),128))])):((0,s.uX)(),(0,s.CE)("div",P,(0,n.v_)(e.$t("message.search_empty_validator")),1))])):((0,s.uX)(),(0,s.Wv)(k.A,{key:0}))])]))}},J=a(71241);const M=(0,J.A)(U,[["__scopeId","data-v-b92b57be"]]);var q=M,j=a(81387),Y=a(67278),z=a(1955);const G=e=>((0,s.Qi)("data-v-5498d7a4"),e=e(),(0,s.jt)(),e),H=l+"#ic_arrow_hor",Z=l+"#ic_user",O={class:"page_container stake_confirm"},ee={class:"cont"},te={class:"head"},ae=G((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":H})],-1))),se=[ae],ne={class:"page_title"},re={class:"data"},oe={class:"label"},le={class:"info_wrap"},ie={class:"info"},ce={class:"validator"},ue={class:"logo"},ke=["src"],ve=G((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":Z})],-1))),de={class:"moniker"},_e={class:"voting_power"},me={class:"apr"},ge=G((()=>(0,s.Lk)("br",null,null,-1))),Re={class:"features"},Le={class:"label"},pe={class:"val"},we=["src"],be={class:"label"},fe={class:"val"},he={class:"currency"},Ce={class:"label"},ye={class:"val"},xe={class:"currency"},Ne={class:"label"},$e={class:"val"},Ae={class:"label"},Fe={class:"val"},Se={class:"label"},We={class:"val"},Xe={class:"btns"};var Ee={__name:"StakeConfirmModal",props:["amount","msgAny"],setup(e){const t=e,a=(0,i.o)(),l=(0,j.rd)(),u=(0,s.WQ)("emitter"),v=(0,s.WQ)("i18n"),d=(0,Y.hN)(),_=(0,r.KR)(!1),m=(0,r.KR)(0),g=(0,r.KR)(0),R=(0,s.EW)((()=>(0,c.NJ)(a.TxFee.userGasAmount*a.TxFee[`${a.TxFee.currentLevel}Price`],a.TxFee.balance.exponent))),L=(0,r.KR)(!1);async function p(){await a.getTotalBondedTokena(),m.value=a.stakeCurrentValidator.tokens/a.networks[a.currentNetwork].totalBondedTokens}function w(){g.value=t.amount*((a.networks[a.currentNetwork].APR-a.networks[a.currentNetwork].APR*a.stakeCurrentValidator.commission.commission_rates.rate)/100)/365}async function b(){L.value=!0;try{a.TxFee.isRemember&&await a.updateTxFeeInfo();let e=await(0,c.qS)(t.msgAny);d.notify({group:"default",clean:!0}),d.notify({group:"default",speed:200,duration:-100,title:v.global.t("message.notification_tx_pending_title"),type:"pending",data:{explorer_link:(0,c.aS)(a.currentNetwork)}}),(0,c.nw)(e),l.push("/account")}catch(e){console.log(e),f(e)}}function f(e){let t="";t=e.code?v.global.t(`message.notification_tx_error_${e.code}`):v.global.t("message.notification_tx_error_rejected"),d.notify({group:"default",speed:200,duration:6e3,title:"Tx error",text:t,type:"error"})}return(0,s.KC)((()=>{p(),w()})),(0,s.hi)((()=>{u.off("auth"),u.off("close_sign_tx_modal")})),u.on("auth",(()=>{_.value=!1,b()})),u.on("close_sign_tx_modal",(()=>{_.value=!1})),(e,l)=>((0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("section",O,[L.value?((0,s.uX)(),(0,s.Wv)(k.A,{key:0})):(0,s.Q3)("",!0),(0,s.Lk)("div",ee,[(0,s.Lk)("div",te,[(0,s.Lk)("button",{class:"back_btn",onClick:l[0]||(l[0]=e=>(0,r.R1)(u).emit("close_stake_confirm_modal"))},se),(0,s.Lk)("div",ne,(0,n.v_)(e.$t("message.stake_confirm_page_title")),1)]),(0,s.Lk)("div",re,[(0,s.Lk)("div",oe,(0,n.v_)(e.$t("message.details_label")),1),(0,s.Lk)("div",le,[(0,s.Lk)("div",ie,[(0,s.Lk)("div",ce,[(0,s.Lk)("div",ue,[(0,s.Lk)("img",{src:`https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${(0,r.R1)(a).networks[(0,r.R1)(a).currentNetwork].prefix}/moniker/${(0,r.R1)(a).stakeCurrentValidator.operator_address}.png`,alt:"",loading:"lazy",onError:l[1]||(l[1]=e=>(0,r.R1)(c.on)(e))},null,40,ke),ve]),(0,s.Lk)("div",null,[(0,s.Lk)("div",de,(0,n.v_)((0,r.R1)(a).stakeCurrentValidator.description.moniker),1),(0,s.Lk)("div",_e,(0,n.v_)((100*m.value).toFixed(2))+"% "+(0,n.v_)(e.$t("message.stake_confirm_voting_power")),1)])]),(0,s.Lk)("div",me,[(0,s.Lk)("span",null,[(0,s.eW)((0,n.v_)(e.$t("message.stake_APR_label")),1),ge,(0,s.eW)(" "+(0,n.v_)((100*(0,r.R1)(a).networks[(0,r.R1)(a).currentNetwork].APR-100*(0,r.R1)(a).networks[(0,r.R1)(a).currentNetwork].APR*(0,r.R1)(a).stakeCurrentValidator.commission.commission_rates.rate).toFixed(2))+"%",1)])]),(0,s.Lk)("div",Re,[(0,s.Lk)("div",null,[(0,s.Lk)("div",Le,(0,n.v_)(e.$t("message.stake_confirm_token_label")),1),(0,s.Lk)("div",pe,[(0,s.Lk)("img",{src:(0,r.R1)(c.oB)((0,r.R1)(a).networks[(0,r.R1)(a).currentNetwork].chain_id),alt:""},null,8,we),(0,s.Lk)("span",null,(0,n.v_)((0,r.R1)(a).networks[(0,r.R1)(a).currentNetwork].token_name),1)])]),(0,s.Lk)("div",null,[(0,s.Lk)("div",be,(0,n.v_)(e.$t("message.stake_confirm_amount_label")),1),(0,s.Lk)("div",fe,[(0,s.eW)((0,n.v_)(t.amount)+" "+(0,n.v_)((0,r.R1)(a).networks[(0,r.R1)(a).currentNetwork].token_name)+" ",1),(0,s.Lk)("span",he," ("+(0,n.v_)((0,r.R1)(c.ST)((0,r.R1)(c.Yq)(t.amount,(0,r.R1)(a).networks[(0,r.R1)(a).currentNetwork].token_name)))+(0,n.v_)((0,r.R1)(a).currentCurrencySymbol)+") ",1)])]),(0,s.Lk)("div",null,[(0,s.Lk)("div",Ce,(0,n.v_)(e.$t("message.stake_confirm_daily_profit_label")),1),(0,s.Lk)("div",ye,[(0,s.eW)(" ~"+(0,n.v_)(g.value.toLocaleString("ru-RU",{maximumFractionDigits:5}))+" "+(0,n.v_)((0,r.R1)(a).networks[(0,r.R1)(a).currentNetwork].token_name)+" ",1),(0,s.Lk)("span",xe,"("+(0,n.v_)((0,r.R1)(c.ST)((0,r.R1)(c.Yq)(g.value,(0,r.R1)(a).networks[(0,r.R1)(a).currentNetwork].token_name)))+(0,n.v_)((0,r.R1)(a).currentCurrencySymbol)+")",1)])]),(0,s.Lk)("div",null,[(0,s.Lk)("div",Ne,(0,n.v_)(e.$t("message.stake_confirm_commission_label")),1),(0,s.Lk)("div",$e,(0,n.v_)((100*(0,r.R1)(a).stakeCurrentValidator.commission.commission_rates.rate).toLocaleString("ru-RU",{maximumFractionDigits:2}))+"% ",1)]),(0,s.Lk)("div",null,[(0,s.Lk)("div",Ae,(0,n.v_)(e.$t("message.stake_confirm_unbonding_period_label")),1),(0,s.Lk)("div",Fe,(0,n.v_)((0,r.R1)(a).networks[(0,r.R1)(a).currentNetwork].unbondingTime)+" "+(0,n.v_)(e.$t("message.stake_unbonding_time_unit")),1)]),(0,s.Lk)("div",null,[(0,s.Lk)("div",Se,(0,n.v_)(e.$t("message.stake_confirm_fee_label")),1),(0,s.Lk)("div",We,(0,n.v_)(R.value.toLocaleString("ru-RU",{maximumFractionDigits:5}))+" "+(0,n.v_)((0,r.R1)(a).networks[(0,r.R1)(a).currentNetwork].token_name),1)])])])])]),(0,s.Lk)("div",Xe,[(0,s.Lk)("button",{class:"btn",onClick:l[2]||(l[2]=(0,o.D$)((e=>_.value=!0),["prevent"]))},[(0,s.Lk)("span",null,(0,n.v_)(e.$t("message.btn_confirm_stake")),1)])])])]),_.value?((0,s.uX)(),(0,s.Wv)(z.A,{key:0})):(0,s.Q3)("",!0)],64))}};const Te=(0,J.A)(Ee,[["__scopeId","data-v-5498d7a4"]]);var Ve=Te;const Ke=e=>((0,s.Qi)("data-v-694b5f30"),e=e(),(0,s.jt)(),e),De=l+"#ic_arrow_hor",Qe=l+"#ic_arr_ver2",Be=l+"#ic_user",Ie={class:"page_container stake"},Pe={class:"cont"},Ue={class:"head"},Je=Ke((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":De})],-1))),Me={class:"page_title"},qe={class:"current_staked"},je={class:"label"},Ye={class:"data_wrap"},ze={class:"data"},Ge={class:"apr"},He=Ke((()=>(0,s.Lk)("br",null,null,-1))),Ze={class:"token"},Oe={class:"logo"},et=["src"],tt={class:"denom"},at={class:"unbonding_period"},st={class:"balances"},nt={class:"label"},rt={class:"amount"},ot={class:"cost"},lt={class:"label"},it={class:"amount"},ct={class:"cost"},ut={class:"validator_info"},kt={class:"label"},vt={class:"info"},dt={class:"placeholder"},_t=Ke((()=>(0,s.Lk)("svg",{class:"arr"},[(0,s.Lk)("use",{"xlink:href":Qe})],-1))),mt={class:"validator"},gt={class:"logo"},Rt=["src"],Lt=Ke((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":Be})],-1))),pt={class:"moniker"},wt={key:0,class:"staked"},bt={class:"logo"},ft=["src"],ht=Ke((()=>(0,s.Lk)("svg",{class:"arr"},[(0,s.Lk)("use",{"xlink:href":Qe})],-1))),Ct={class:"amount"},yt={class:"label"},xt={class:"cost"},Nt={class:"field"},$t={class:"btns"};var At={__name:"Stake",setup(e){const t=(0,i.o)(),a=(0,s.WQ)("emitter"),l=(0,r.KR)(!1),d=(0,r.KR)(!1),_=(0,r.KR)([]),m=(0,r.KR)(""),g=(0,r.KR)(!1),R=(0,r.KR)((0,s.EW)((()=>g.value&&!!t.stakeCurrentValidator)));function L(){g.value=!1,setTimeout((()=>{m.value=(0,c.NJ)((0,c.Rt)(),t.networks[t.currentNetwork].exponent),g.value=!0}))}function p(e){g.value=!1,setTimeout((()=>{e.target.value.length&&e.target.value<=0&&(m.value=""),e.target.value.length&&e.target.value>0&&e.target.value<(0,c.NJ)((0,c.Rt)(),t.networks[t.currentNetwork].exponent)&&(g.value=!0),e.target.value>(0,c.NJ)((0,c.Rt)(),t.networks[t.currentNetwork].exponent)&&L()}))}function w(e){return t.stakedBalances.find((t=>t.validator_info.operator_address===e))}return(0,s.KC)((async()=>{t.stakeCurrentValidator=null,await t.getNetworkUnbondingTime()})),(0,s.hi)((()=>{a.off("close_stake_confirm_modal"),a.off("close_validators_modal")})),(0,s.wB)((0,s.EW)((()=>R.value)),(()=>{R.value&&(_.value=[{typeUrl:"/cosmos.staking.v1beta1.MsgDelegate",value:u.MsgDelegate.fromPartial({delegatorAddress:t.currentAddress,validatorAddress:t.stakeCurrentValidator.operator_address,amount:{denom:t.networks[t.currentNetwork].denom,amount:""+parseFloat(m.value.toString().replace(",",".")).toFixed(t.networks[t.currentNetwork].exponent)*Math.pow(10,t.networks[t.currentNetwork].exponent)}})}])})),a.on("close_validators_modal",(()=>{l.value=!1})),a.on("close_stake_confirm_modal",(()=>{d.value=!1})),(e,i)=>{const u=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("section",Ie,[(0,s.Lk)("div",Pe,[(0,s.Lk)("div",Ue,[(0,s.bF)(u,{to:"/account?activeSlide=1",class:"back_btn"},{default:(0,s.k6)((()=>[Je])),_:1}),(0,s.Lk)("div",Me,(0,n.v_)(e.$t("message.stake_page_title")),1)]),(0,r.R1)(t).isBalancesGot&&(0,r.R1)(t).isStakedBalancesGot?((0,s.uX)(),(0,s.CE)(s.FK,{key:1},[(0,s.Lk)("div",qe,[(0,s.Lk)("div",je,(0,n.v_)(e.$t("message.stake_current_staked_label")),1),(0,s.Lk)("div",Ye,[(0,s.Lk)("div",ze,[(0,s.Lk)("div",Ge,[(0,s.Lk)("span",null,[(0,s.eW)((0,n.v_)(e.$t("message.stake_APR_label")),1),He,(0,s.eW)(" "+(0,n.v_)((100*(0,r.R1)(t).networks[(0,r.R1)(t).currentNetwork].APR).toFixed(2))+"%",1)])]),(0,s.Lk)("div",Ze,[(0,s.Lk)("div",Oe,[(0,s.Lk)("img",{src:(0,r.R1)(c.oB)((0,r.R1)(t).networks[(0,r.R1)(t).currentNetwork].chain_id),alt:""},null,8,et)]),(0,s.Lk)("div",null,[(0,s.Lk)("div",tt,(0,n.v_)((0,r.R1)(t).networks[(0,r.R1)(t).currentNetwork].token_name),1),(0,s.Lk)("div",at,(0,n.v_)(e.$t("message.stake_unbonding_period_label"))+" "+(0,n.v_)((0,r.R1)(t).networks[(0,r.R1)(t).currentNetwork].unbondingTime)+" "+(0,n.v_)(e.$t("message.stake_unbonding_time_unit")),1)])]),(0,s.Lk)("div",st,[(0,s.Lk)("div",null,[(0,s.Lk)("div",nt,(0,n.v_)(e.$t("message.stake_available_label")),1),(0,s.Lk)("div",rt,(0,n.v_)((0,r.R1)(c.NJ)((0,r.R1)(c.Rt)(),(0,r.R1)(t).networks[(0,r.R1)(t).currentNetwork].exponent).toLocaleString("ru-RU",{maximumFractionDigits:7}))+" "+(0,n.v_)((0,r.R1)(t).networks[(0,r.R1)(t).currentNetwork].token_name),1),(0,s.Lk)("div",ot,(0,n.v_)((0,r.R1)(t).currentCurrencySymbol)+" "+(0,n.v_)((0,r.R1)(c.ST)((0,r.R1)(c.Y$)((0,r.R1)(t).networks[(0,r.R1)(t).currentNetwork].token_name,(0,r.R1)(c.Rt)(),(0,r.R1)(t).networks[(0,r.R1)(t).currentNetwork].exponent))),1)]),(0,s.Lk)("div",null,[(0,s.Lk)("div",lt,(0,n.v_)(e.$t("message.stake_staked_label")),1),(0,s.Lk)("div",it,(0,n.v_)((0,r.R1)(c.NJ)((0,r.R1)(c.cc)(),(0,r.R1)(t).networks[(0,r.R1)(t).currentNetwork].exponent).toLocaleString("ru-RU",{maximumFractionDigits:7}))+" "+(0,n.v_)((0,r.R1)(t).networks[(0,r.R1)(t).currentNetwork].token_name),1),(0,s.Lk)("div",ct,(0,n.v_)((0,r.R1)(t).currentCurrencySymbol)+(0,n.v_)((0,r.R1)(c.ST)((0,r.R1)(c.eZ)())),1)])])])])]),(0,s.Lk)("div",ut,[(0,s.Lk)("div",kt,(0,n.v_)(e.$t("message.stake_validator_label")),1),(0,r.R1)(t).stakeCurrentValidator?((0,s.uX)(),(0,s.CE)("div",{key:1,class:"validator_wrap",onClick:i[2]||(i[2]=(0,o.D$)((e=>l.value=!0),["prevent"]))},[(0,s.Lk)("div",mt,[(0,s.Lk)("div",gt,[(0,s.Lk)("img",{src:`https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${(0,r.R1)(t).networks[(0,r.R1)(t).currentNetwork].prefix}/moniker/${(0,r.R1)(t).stakeCurrentValidator.operator_address}.png`,alt:"",loading:"lazy",onError:i[1]||(i[1]=e=>(0,r.R1)(c.on)(e))},null,40,Rt),Lt]),(0,s.Lk)("div",null,[(0,s.Lk)("div",pt,(0,n.v_)((0,r.R1)(t).stakeCurrentValidator.description.moniker),1),(e.item=w((0,r.R1)(t).stakeCurrentValidator.operator_address))?((0,s.uX)(),(0,s.CE)("div",wt,[(0,s.eW)((0,n.v_)(e.$t("message.validatoes_staked_label"))+" "+(0,n.v_)((0,r.R1)(c.NJ)(e.item.balance.amount,(0,r.R1)(t).networks[(0,r.R1)(t).currentNetwork].exponent).toLocaleString("ru-RU",{maximumFractionDigits:7}))+" ",1),(0,s.Lk)("div",bt,[(0,s.Lk)("img",{src:(0,r.R1)(c.oB)((0,r.R1)(t).networks[(0,r.R1)(t).currentNetwork].chain_id),alt:""},null,8,ft)])])):(0,s.Q3)("",!0)]),ht])])):((0,s.uX)(),(0,s.CE)("div",{key:0,class:"info_wrap",onClick:i[0]||(i[0]=(0,o.D$)((e=>l.value=!0),["prevent"]))},[(0,s.Lk)("div",vt,[(0,s.Lk)("div",dt,(0,n.v_)(e.$t("message.stake_validator_placeholder")),1),_t])]))]),(0,s.Lk)("div",Ct,[(0,s.Lk)("div",yt,[(0,s.eW)((0,n.v_)(e.$t("message.stake_amount_label"))+" ",1),(0,s.Lk)("div",xt,(0,n.v_)((0,r.R1)(c.ST)((0,r.R1)(c.Y$)((0,r.R1)(t).networks[(0,r.R1)(t).currentNetwork].token_name,m.value*Math.pow(10,(0,r.R1)(t).networks[(0,r.R1)(t).currentNetwork].exponent),(0,r.R1)(t).networks[(0,r.R1)(t).currentNetwork].exponent)))+" "+(0,n.v_)((0,r.R1)(t).currentCurrencySymbol),1)]),(0,s.Lk)("div",Nt,[(0,s.bo)((0,s.Lk)("input",{type:"number",inputmode:"numeric",class:"input big","onUpdate:modelValue":i[3]||(i[3]=e=>m.value=e),placeholder:"0.00",onInput:i[4]||(i[4]=e=>p(e))},null,544),[[o.Jo,m.value]]),(0,s.Lk)("button",{type:"button",class:"max_btn",onClick:(0,o.D$)(L,["prevent"])},(0,n.v_)(e.$t("message.btn_MAX")),1)])]),R.value?((0,s.uX)(),(0,s.Wv)(v.A,{key:0,msgAny:_.value},null,8,["msgAny"])):(0,s.Q3)("",!0),(0,s.Lk)("div",$t,[(0,r.R1)(t).networks[(0,r.R1)(t).currentNetwork].currentTxHash?((0,s.uX)(),(0,s.CE)("button",{key:1,class:"btn waiting_btn",onClick:i[6]||(i[6]=(0,o.D$)((e=>(0,r.R1)(a).emit("show_pending_notification")),["prevent"]))},[(0,s.Lk)("span",null,(0,n.v_)(e.$t("message.btn_waiting_tx")),1)])):((0,s.uX)(),(0,s.CE)("button",{key:0,class:(0,n.C4)(["btn",{disabled:!(0,r.R1)(t).TxFee.isEnough}]),onClick:i[5]||(i[5]=(0,o.D$)((e=>d.value=!0),["prevent"]))},[(0,s.Lk)("span",null,(0,n.v_)(e.$t("message.btn_stake")),1)],2))])],64)):((0,s.uX)(),(0,s.Wv)(k.A,{key:0}))])]),l.value?((0,s.uX)(),(0,s.Wv)(q,{key:0})):(0,s.Q3)("",!0),d.value?((0,s.uX)(),(0,s.Wv)(Ve,{key:1,amount:m.value,msgAny:_.value},null,8,["amount","msgAny"])):(0,s.Q3)("",!0)],64)}}};const Ft=(0,J.A)(At,[["__scopeId","data-v-694b5f30"]]);var St=Ft}}]);
//# sourceMappingURL=483.435d30dc.js.map