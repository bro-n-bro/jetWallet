"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[799],{54636:function(e,a,t){t.d(a,{A:function(){return b}});var r=t(56768),s=t(45130),n=t(24113),o=t(90144);const l=e=>((0,r.Qi)("data-v-33f4e966"),e=e(),(0,r.jt)(),e),i=n+"#ic_arrow_hor",c=n+"#ic_search",u=n+"#ic_close",k={class:"search"},d=l((()=>(0,r.Lk)("span",null,[(0,r.Lk)("svg",null,[(0,r.Lk)("use",{"xlink:href":i})])],-1))),v=[d],_={class:"field"},m=l((()=>(0,r.Lk)("svg",{class:"icon"},[(0,r.Lk)("use",{"xlink:href":c})],-1))),g=["placeholder"],p=l((()=>(0,r.Lk)("svg",null,[(0,r.Lk)("use",{"xlink:href":u})],-1))),L=[p];var R={__name:"Search",props:["source"],setup(e){const a=e,t=(0,r.WQ)("emitter"),n=(0,o.KR)("");function l(){t.emit("show_keyboard"),setTimeout((()=>t.emit("search_focus")),100)}function i(){t.emit("hide_keyboard"),setTimeout((()=>t.emit("search_blur")),100)}function c(){t.emit("search",{query:n.value,source:a.source})}function u(){n.value="",t.emit("search",{query:n.value,source:a.source})}return(e,a)=>((0,r.uX)(),(0,r.CE)("div",k,[(0,r.Lk)("button",{class:"back_btn",onClick:(0,s.D$)(i,["prevent"])},v),(0,r.Lk)("div",_,[m,(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>n.value=e),class:"input",placeholder:e.$t("message.search_placeholder"),onFocus:l,onBlur:i,onInput:c},null,40,g),[[s.Jo,n.value]]),n.value.length?((0,r.uX)(),(0,r.CE)("button",{key:0,class:"clear_btn",onClick:a[1]||(a[1]=(0,s.D$)((e=>u()),["prevent"]))},L)):(0,r.Q3)("",!0)])]))}},w=t(71241);const f=(0,w.A)(R,[["__scopeId","data-v-33f4e966"]]);var b=f},7718:function(e,a,t){t.d(a,{A:function(){return J}});t(44114);var r=t(56768),s=t(90144),n=t(24232),o=t(45130),l=t(24113),i=t(76750),c=t(61981),u=t(51115),k=t(54636);const d=e=>((0,r.Qi)("data-v-467099ce"),e=e(),(0,r.jt)(),e),v=l+"#ic_arrow_hor",_=l+"#ic_user",m=l+"#ic_check",g={class:"page_container inner_page_container validators_page"},p={class:"cont"},L={class:"head"},R=d((()=>(0,r.Lk)("svg",{class:"icon"},[(0,r.Lk)("use",{"xlink:href":v})],-1))),w=[R],f={class:"page_title"},b={key:1,class:"validators"},h={key:0,class:"list"},x=["onClick"],y={class:"validator"},C={class:"logo"},N=["src"],$=d((()=>(0,r.Lk)("svg",{class:"icon"},[(0,r.Lk)("use",{"xlink:href":_})],-1))),V={class:"moniker"},A={class:"commission"},F={key:0,class:"staked"},T={class:"logo"},S=["src"],W={class:"apr"},X=d((()=>(0,r.Lk)("br",null,null,-1))),E={class:"check"},K={key:0},D=d((()=>(0,r.Lk)("use",{"xlink:href":m},null,-1))),Q=[D],U={key:1,class:"empty"};var B={__name:"ValidatorsModal",props:["unstake","redelegate"],setup(e){const a=e,t=(0,i.o)(),l=(0,r.WQ)("emitter"),d=(0,s.KR)(!1),v=(0,s.KR)([]),_=(0,s.KR)([]);function m(e){return t.stakedBalances.find((a=>a.validator_info.operator_address===e))}function R(e){if(a.unstake){if(t.unstakeCurrentValidator&&t.unstakeCurrentValidator.operator_address===e)return!0}else if(a.redelegate){if("from"===a.redelegate){if(t.redelegateValidatorFrom&&t.redelegateValidatorFrom.operator_address===e)return!0}else if(t.redelegateValidatorTo&&t.redelegateValidatorTo.operator_address===e)return!0}else if(t.stakeCurrentValidator&&t.stakeCurrentValidator.operator_address===e)return!0}function D(e){a.unstake?t.unstakeCurrentValidator=e:a.redelegate?"from"===a.redelegate?(t.redelegateValidatorFrom=e,t.redelegateValidatorFrom.operator_address===t.redelegateValidatorTo?.operator_address&&(t.redelegateValidatorTo=null)):t.redelegateValidatorTo=e:t.stakeCurrentValidator=e,l.emit("close_validators_modal")}return(0,r.KC)((async()=>{a.unstake?v.value=(await t.getUserValidators()).validators:a.redelegate?"from"===a.redelegate?v.value=(await t.getUserValidators()).validators:v.value=(await t.getAllValidators()).validators.filter((e=>e.operator_address!==t.redelegateValidatorFrom?.operator_address)):v.value=(await t.getAllValidators()).validators,v.value.sort(((e,a)=>parseInt(e.tokens)>parseInt(a.tokens)?-1:parseInt(e.tokens)<parseInt(a.tokens)?1:0)),_.value=v.value,d.value=!0})),l.on("search",(({query:e,source:a})=>{if("validators"===a){_.value=[];for(let a in v.value)v.value[a].description.moniker.toLocaleLowerCase().includes(e.toLocaleLowerCase())&&_.value.push(v.value[a])}})),(e,a)=>((0,r.uX)(),(0,r.CE)("section",g,[(0,r.Lk)("div",p,[(0,r.Lk)("div",L,[(0,r.Lk)("button",{class:"back_btn",onClick:a[0]||(a[0]=e=>(0,s.R1)(l).emit("close_validators_modal"))},w),(0,r.Lk)("div",f,(0,n.v_)(e.$t("message.validators_page_title")),1)]),(0,r.bF)(k.A,{source:"validators"}),d.value?((0,r.uX)(),(0,r.CE)("div",b,[_.value.length?((0,r.uX)(),(0,r.CE)("div",h,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(_.value,((l,i)=>((0,r.uX)(),(0,r.CE)("div",{class:"item",key:i},[(0,r.Lk)("div",{class:(0,n.C4)(["validator_wrap",{current:R(l.operator_address)}]),onClick:(0,o.D$)((e=>D(l)),["prevent"])},[(0,r.Lk)("div",y,[(0,r.Lk)("div",C,[(0,r.Lk)("img",{src:`https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${(0,s.R1)(t).networks[(0,s.R1)(t).currentNetwork].prefix}/moniker/${l.operator_address}.png`,alt:"",loading:"lazy",onError:a[1]||(a[1]=e=>(0,s.R1)(c.on)(e))},null,40,N),$]),(0,r.Lk)("div",null,[(0,r.Lk)("div",V,(0,n.v_)(l.description.moniker),1),(0,r.Lk)("div",A,(0,n.v_)((100*l.commission.commission_rates.rate).toLocaleString("ru-RU",{maximumFractionDigits:2}).replace(",","."))+"% ",1),(e.item=m(l.operator_address))?((0,r.uX)(),(0,r.CE)("div",F,[(0,r.eW)((0,n.v_)(e.$t("message.validatoes_staked_label"))+" "+(0,n.v_)((0,s.R1)(c.NJ)(e.item.balance.amount,(0,s.R1)(t).networks[(0,s.R1)(t).currentNetwork].exponent).toLocaleString("ru-RU",{maximumFractionDigits:7}).replace(",","."))+" ",1),(0,r.Lk)("div",T,[(0,r.Lk)("img",{src:(0,s.R1)(c.oB)((0,s.R1)(t).networks[(0,s.R1)(t).currentNetwork].chain_id),alt:""},null,8,S)])])):(0,r.Q3)("",!0)]),(0,r.Lk)("div",W,[(0,r.Lk)("span",null,[(0,r.eW)((0,n.v_)(e.$t("message.stake_APR_label")),1),X,(0,r.eW)(" "+(0,n.v_)((100*(0,s.R1)(t).networks[(0,s.R1)(t).currentNetwork].APR-100*(0,s.R1)(t).networks[(0,s.R1)(t).currentNetwork].APR*l.commission.commission_rates.rate).toFixed(2))+"%",1)])]),(0,r.Lk)("div",E,[R(l.operator_address)?((0,r.uX)(),(0,r.CE)("svg",K,Q)):(0,r.Q3)("",!0)])])],10,x)])))),128))])):((0,r.uX)(),(0,r.CE)("div",U,(0,n.v_)(e.$t("message.search_empty_validator")),1))])):((0,r.uX)(),(0,r.Wv)(u.A,{key:0}))])]))}},I=t(71241);const P=(0,I.A)(B,[["__scopeId","data-v-467099ce"]]);var J=P},78151:function(e,a,t){t.r(a),t.d(a,{default:function(){return ta}});var r=t(56768),s=t(24232),n=t(90144),o=t(45130),l=t(24113),i=t(76750),c=t(61981),u=t(68515),k=t(51115),d=t(2736),v=t(7718),_=(t(44114),t(81387)),m=t(67278),g=t(29234);const p=e=>((0,r.Qi)("data-v-01f06fac"),e=e(),(0,r.jt)(),e),L=l+"#ic_arrow_hor",R=l+"#ic_user",w={class:"page_container inner_page_container stake_confirm"},f={class:"cont"},b={class:"head"},h=p((()=>(0,r.Lk)("svg",{class:"icon"},[(0,r.Lk)("use",{"xlink:href":L})],-1))),x=[h],y={class:"page_title"},C={class:"data"},N={class:"field_label"},$={class:"info_wrap"},V={class:"info"},A={class:"validator"},F={class:"logo"},T=["src"],S=p((()=>(0,r.Lk)("svg",{class:"icon"},[(0,r.Lk)("use",{"xlink:href":R})],-1))),W={class:"moniker"},X={class:"voting_power"},E={class:"apr"},K=p((()=>(0,r.Lk)("br",null,null,-1))),D={class:"features"},Q={class:"label"},U={class:"val"},B=["src"],I={class:"label"},P={class:"val"},J={class:"currency"},z={class:"label"},M={class:"val"},q={class:"currency"},j={class:"label"},Y={class:"val"},G={class:"label"},H={class:"val"},Z={class:"label"},O={class:"val"},ee={class:"memo"},ae={class:"field_label"},te={class:"field"},re={class:"btns"};var se={__name:"StakeConfirmModal",props:["amount","msgAny"],setup(e){const a=e,t=(0,i.o)(),l=(0,_.rd)(),u=(0,r.WQ)("emitter"),d=(0,r.WQ)("i18n"),v=(0,m.hN)(),p=(0,n.KR)(!1),L=(0,n.KR)(0),R=(0,n.KR)(0),h=(0,n.KR)(""),se=(0,r.EW)((()=>(0,c.NJ)(t.TxFee.userGasAmount*t.TxFee[`${t.TxFee.currentLevel}Price`],t.TxFee.balance.exponent))),ne=(0,n.KR)(!1);async function oe(){await t.getTotalBondedTokens(),L.value=t.stakeCurrentValidator.tokens/t.networks[t.currentNetwork].totalBondedTokens}function le(){R.value=a.amount*((t.networks[t.currentNetwork].APR-t.networks[t.currentNetwork].APR*t.stakeCurrentValidator.commission.commission_rates.rate)/100)/365}async function ie(){ne.value=!0;try{t.TxFee.isRemember&&await t.updateTxFeeInfo();let e=await(0,c.qS)(a.msgAny,h.value);v.notify({group:"default",clean:!0}),v.notify({group:"default",speed:200,duration:-100,title:d.global.t("message.notification_tx_pending_title"),type:"pending",data:{explorer_link:(0,c.aS)(t.currentNetwork)}}),(0,c.nw)(e).catch((e=>{console.log(e),ce(e)})),t.checkTxResult(),l.push("/account")}catch(e){console.log(e),ce(e)}}function ce(e){ne.value=!1;let a="";a=e.code?d.global.t(`message.notification_tx_error_${e.code}`):d.global.t("message.notification_tx_error_rejected"),v.notify({group:"default",clean:!0}),v.notify({group:"default",speed:200,duration:6e3,title:d.global.t("message.notification_tx_error_title"),text:a,type:"error"}),t.networks[t.currentNetwork].currentTxHash=null,t.resetTxFee()}return(0,r.KC)((()=>{oe(),le()})),(0,r.hi)((()=>{u.off("auth"),u.off("close_sign_tx_modal")})),u.on("auth",(()=>{p.value=!1,ie()})),u.on("close_sign_tx_modal",(()=>{p.value=!1})),(e,l)=>((0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("section",w,[ne.value?((0,r.uX)(),(0,r.Wv)(k.A,{key:0})):(0,r.Q3)("",!0),(0,r.Lk)("div",f,[(0,r.Lk)("div",b,[(0,r.Lk)("button",{class:"back_btn",onClick:l[0]||(l[0]=e=>(0,n.R1)(u).emit("close_stake_confirm_modal"))},x),(0,r.Lk)("div",y,(0,s.v_)(e.$t("message.stake_confirm_page_title")),1)]),(0,r.Lk)("div",C,[(0,r.Lk)("div",N,(0,s.v_)(e.$t("message.details_label")),1),(0,r.Lk)("div",$,[(0,r.Lk)("div",V,[(0,r.Lk)("div",A,[(0,r.Lk)("div",F,[(0,r.Lk)("img",{src:`https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${(0,n.R1)(t).networks[(0,n.R1)(t).currentNetwork].prefix}/moniker/${(0,n.R1)(t).stakeCurrentValidator.operator_address}.png`,alt:"",loading:"lazy",onError:l[1]||(l[1]=e=>(0,n.R1)(c.on)(e))},null,40,T),S]),(0,r.Lk)("div",null,[(0,r.Lk)("div",W,(0,s.v_)((0,n.R1)(t).stakeCurrentValidator.description.moniker),1),(0,r.Lk)("div",X,(0,s.v_)((100*L.value).toFixed(2))+"% "+(0,s.v_)(e.$t("message.stake_confirm_voting_power")),1)])]),(0,r.Lk)("div",E,[(0,r.Lk)("span",null,[(0,r.eW)((0,s.v_)(e.$t("message.stake_APR_label")),1),K,(0,r.eW)(" "+(0,s.v_)((100*(0,n.R1)(t).networks[(0,n.R1)(t).currentNetwork].APR-100*(0,n.R1)(t).networks[(0,n.R1)(t).currentNetwork].APR*(0,n.R1)(t).stakeCurrentValidator.commission.commission_rates.rate).toFixed(2))+"%",1)])]),(0,r.Lk)("div",D,[(0,r.Lk)("div",null,[(0,r.Lk)("div",Q,(0,s.v_)(e.$t("message.stake_confirm_token_label")),1),(0,r.Lk)("div",U,[(0,r.Lk)("img",{src:(0,n.R1)(c.oB)((0,n.R1)(t).networks[(0,n.R1)(t).currentNetwork].chain_id),alt:""},null,8,B),(0,r.Lk)("span",null,(0,s.v_)((0,n.R1)(t).networks[(0,n.R1)(t).currentNetwork].token_name),1)])]),(0,r.Lk)("div",null,[(0,r.Lk)("div",I,(0,s.v_)(e.$t("message.stake_confirm_amount_label")),1),(0,r.Lk)("div",P,[(0,r.eW)((0,s.v_)(a.amount)+" "+(0,s.v_)((0,n.R1)(t).networks[(0,n.R1)(t).currentNetwork].token_name)+" ",1),(0,r.Lk)("span",J," ("+(0,s.v_)((0,n.R1)(c.ST)((0,n.R1)(c.Yq)(a.amount,(0,n.R1)(t).networks[(0,n.R1)(t).currentNetwork].token_name)))+(0,s.v_)((0,n.R1)(t).currentCurrencySymbol)+") ",1)])]),(0,r.Lk)("div",null,[(0,r.Lk)("div",z,(0,s.v_)(e.$t("message.stake_confirm_daily_profit_label")),1),(0,r.Lk)("div",M,[(0,r.eW)(" ~"+(0,s.v_)(R.value.toLocaleString("ru-RU",{maximumFractionDigits:5}).replace(",","."))+" "+(0,s.v_)((0,n.R1)(t).networks[(0,n.R1)(t).currentNetwork].token_name)+" ",1),(0,r.Lk)("span",q,"("+(0,s.v_)((0,n.R1)(c.ST)((0,n.R1)(c.Yq)(R.value,(0,n.R1)(t).networks[(0,n.R1)(t).currentNetwork].token_name)))+(0,s.v_)((0,n.R1)(t).currentCurrencySymbol)+")",1)])]),(0,r.Lk)("div",null,[(0,r.Lk)("div",j,(0,s.v_)(e.$t("message.stake_confirm_commission_label")),1),(0,r.Lk)("div",Y,(0,s.v_)((100*(0,n.R1)(t).stakeCurrentValidator.commission.commission_rates.rate).toLocaleString("ru-RU",{maximumFractionDigits:2}).replace(",","."))+"% ",1)]),(0,r.Lk)("div",null,[(0,r.Lk)("div",G,(0,s.v_)(e.$t("message.stake_confirm_unbonding_period_label")),1),(0,r.Lk)("div",H,(0,s.v_)((0,n.R1)(t).networks[(0,n.R1)(t).currentNetwork].unbondingTime)+" "+(0,s.v_)(e.$t("message.stake_unbonding_time_unit")),1)]),(0,r.Lk)("div",null,[(0,r.Lk)("div",Z,(0,s.v_)(e.$t("message.stake_confirm_fee_label")),1),(0,r.Lk)("div",O,(0,s.v_)(se.value.toLocaleString("ru-RU",{maximumFractionDigits:5}).replace(",","."))+" "+(0,s.v_)((0,n.R1)(t).networks[(0,n.R1)(t).currentNetwork].token_name),1)])])])])]),(0,r.Lk)("div",ee,[(0,r.Lk)("div",ae,(0,s.v_)(e.$t("message.memo_label")),1),(0,r.Lk)("div",te,[(0,r.bo)((0,r.Lk)("input",{type:"text",class:"input big","onUpdate:modelValue":l[2]||(l[2]=e=>h.value=e),onFocus:l[3]||(l[3]=e=>(0,n.R1)(u).emit("show_keyboard")),onBlur:l[4]||(l[4]=e=>(0,n.R1)(u).emit("hide_keyboard"))},null,544),[[o.Jo,h.value]])])]),(0,r.Lk)("div",re,[(0,r.Lk)("button",{class:"btn",onClick:l[5]||(l[5]=(0,o.D$)((e=>p.value=!0),["prevent"]))},[(0,r.Lk)("span",null,(0,s.v_)(e.$t("message.btn_confirm_stake")),1)])])])]),p.value?((0,r.uX)(),(0,r.Wv)(g.A,{key:0})):(0,r.Q3)("",!0)],64))}},ne=t(71241);const oe=(0,ne.A)(se,[["__scopeId","data-v-01f06fac"]]);var le=oe;const ie=e=>((0,r.Qi)("data-v-a08cd3fa"),e=e(),(0,r.jt)(),e),ce=l+"#ic_arrow_hor",ue=l+"#ic_arr_ver2",ke=l+"#ic_user",de={class:"page_container inner_page_container stake"},ve={class:"cont"},_e={class:"head"},me=ie((()=>(0,r.Lk)("svg",{class:"icon"},[(0,r.Lk)("use",{"xlink:href":ce})],-1))),ge={class:"page_title"},pe={class:"current_staked"},Le={class:"field_label"},Re={class:"data_wrap"},we={class:"data"},fe={class:"apr"},be=ie((()=>(0,r.Lk)("br",null,null,-1))),he={class:"token"},xe={class:"logo"},ye=["src"],Ce={class:"denom"},Ne={class:"unbonding_period"},$e={class:"balances"},Ve={class:"label"},Ae={class:"amount"},Fe={class:"cost"},Te={class:"label"},Se={class:"amount"},We={class:"cost"},Xe={class:"validator_info"},Ee={class:"field_label"},Ke={class:"info"},De={class:"placeholder"},Qe=ie((()=>(0,r.Lk)("svg",{class:"arr"},[(0,r.Lk)("use",{"xlink:href":ue})],-1))),Ue={class:"validator"},Be={class:"logo"},Ie=["src"],Pe=ie((()=>(0,r.Lk)("svg",{class:"icon"},[(0,r.Lk)("use",{"xlink:href":ke})],-1))),Je={class:"moniker"},ze={key:0,class:"staked"},Me={class:"logo"},qe=["src"],je=ie((()=>(0,r.Lk)("svg",{class:"arr"},[(0,r.Lk)("use",{"xlink:href":ue})],-1))),Ye={class:"amount"},Ge={class:"field_label"},He={class:"cost"},Ze={class:"field"},Oe={class:"btns"};var ea={__name:"Stake",setup(e){const a=(0,i.o)(),t=(0,r.WQ)("emitter"),l=(0,n.KR)(!1),_=(0,n.KR)(!1),m=(0,n.KR)([]),g=(0,n.KR)(""),p=(0,n.KR)(!1),L=(0,n.KR)((0,r.EW)((()=>p.value&&!!a.stakeCurrentValidator&&(0,c.zx)())));function R(){p.value=!1,setTimeout((()=>{g.value=(0,c.NJ)((0,c.zx)(),a.networks[a.currentNetwork].exponent),p.value=!0}))}function w(e){p.value=!1,setTimeout((()=>{e.target.value.length&&e.target.value<=0&&(g.value=""),e.target.value.length&&e.target.value>0&&e.target.value<(0,c.NJ)((0,c.zx)(),a.networks[a.currentNetwork].exponent)&&(p.value=!0),e.target.value>(0,c.NJ)((0,c.zx)(),a.networks[a.currentNetwork].exponent)&&R()}))}function f(e){return a.stakedBalances.find((a=>a.validator_info.operator_address===e))}return(0,r.KC)((()=>{a.stakeCurrentValidator=null,a.getNetworkUnbondingTime()})),(0,r.hi)((()=>{t.off("close_stake_confirm_modal"),t.off("close_validators_modal")})),(0,r.wB)((0,r.EW)((()=>L.value)),(()=>{L.value&&(m.value=[{typeUrl:"/cosmos.staking.v1beta1.MsgDelegate",value:u.MsgDelegate.fromPartial({delegatorAddress:a.currentAddress,validatorAddress:a.stakeCurrentValidator.operator_address,amount:{denom:a.networks[a.currentNetwork].denom,amount:""+parseFloat(g.value.toString().replace(",",".")).toFixed(a.networks[a.currentNetwork].exponent)*Math.pow(10,a.networks[a.currentNetwork].exponent)}})}])})),t.on("close_validators_modal",(()=>{l.value=!1})),t.on("close_stake_confirm_modal",(()=>{_.value=!1})),(e,i)=>{const u=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("section",de,[(0,r.Lk)("div",ve,[(0,r.Lk)("div",_e,[(0,r.bF)(u,{to:"/account?activeSlide=1",class:"back_btn"},{default:(0,r.k6)((()=>[me])),_:1}),(0,r.Lk)("div",ge,(0,s.v_)(e.$t("message.stake_page_title")),1)]),(0,n.R1)(a).isBalancesGot&&(0,n.R1)(a).isStakedBalancesGot?((0,r.uX)(),(0,r.CE)(r.FK,{key:1},[(0,r.Lk)("div",pe,[(0,r.Lk)("div",Le,(0,s.v_)(e.$t("message.stake_current_staked_label")),1),(0,r.Lk)("div",Re,[(0,r.Lk)("div",we,[(0,r.Lk)("div",fe,[(0,r.Lk)("span",null,[(0,r.eW)((0,s.v_)(e.$t("message.stake_APR_label")),1),be,(0,r.eW)(" "+(0,s.v_)((100*(0,n.R1)(a).networks[(0,n.R1)(a).currentNetwork].APR).toFixed(2))+"%",1)])]),(0,r.Lk)("div",he,[(0,r.Lk)("div",xe,[(0,r.Lk)("img",{src:(0,n.R1)(c.oB)((0,n.R1)(a).networks[(0,n.R1)(a).currentNetwork].chain_id),alt:""},null,8,ye)]),(0,r.Lk)("div",null,[(0,r.Lk)("div",Ce,(0,s.v_)((0,n.R1)(a).networks[(0,n.R1)(a).currentNetwork].token_name),1),(0,r.Lk)("div",Ne,(0,s.v_)(e.$t("message.stake_unbonding_period_label"))+" "+(0,s.v_)((0,n.R1)(a).networks[(0,n.R1)(a).currentNetwork].unbondingTime)+" "+(0,s.v_)(e.$t("message.stake_unbonding_time_unit")),1)])]),(0,r.Lk)("div",$e,[(0,r.Lk)("div",null,[(0,r.Lk)("div",Ve,(0,s.v_)(e.$t("message.stake_available_label")),1),(0,r.Lk)("div",Ae,(0,s.v_)((0,n.R1)(c.NJ)((0,n.R1)(c.zx)(),(0,n.R1)(a).networks[(0,n.R1)(a).currentNetwork].exponent).toLocaleString("ru-RU",{maximumFractionDigits:7}).replace(",","."))+" "+(0,s.v_)((0,n.R1)(a).networks[(0,n.R1)(a).currentNetwork].token_name),1),(0,r.Lk)("div",Fe,(0,s.v_)((0,n.R1)(a).currentCurrencySymbol)+" "+(0,s.v_)((0,n.R1)(c.ST)((0,n.R1)(c.Y$)((0,n.R1)(a).networks[(0,n.R1)(a).currentNetwork].token_name,(0,n.R1)(c.zx)(),(0,n.R1)(a).networks[(0,n.R1)(a).currentNetwork].exponent))),1)]),(0,r.Lk)("div",null,[(0,r.Lk)("div",Te,(0,s.v_)(e.$t("message.stake_staked_label")),1),(0,r.Lk)("div",Se,(0,s.v_)((0,n.R1)(c.NJ)((0,n.R1)(c.cc)(),(0,n.R1)(a).networks[(0,n.R1)(a).currentNetwork].exponent).toLocaleString("ru-RU",{maximumFractionDigits:7}).replace(",","."))+" "+(0,s.v_)((0,n.R1)(a).networks[(0,n.R1)(a).currentNetwork].token_name),1),(0,r.Lk)("div",We,(0,s.v_)((0,n.R1)(a).currentCurrencySymbol)+(0,s.v_)((0,n.R1)(c.ST)((0,n.R1)(c.eZ)())),1)])])])])]),(0,r.Lk)("div",Xe,[(0,r.Lk)("div",Ee,(0,s.v_)(e.$t("message.stake_validator_label")),1),(0,n.R1)(a).stakeCurrentValidator?((0,r.uX)(),(0,r.CE)("div",{key:1,class:"validator_wrap",onClick:i[2]||(i[2]=(0,o.D$)((e=>l.value=!0),["prevent"]))},[(0,r.Lk)("div",Ue,[(0,r.Lk)("div",Be,[(0,r.Lk)("img",{src:`https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${(0,n.R1)(a).networks[(0,n.R1)(a).currentNetwork].prefix}/moniker/${(0,n.R1)(a).stakeCurrentValidator.operator_address}.png`,alt:"",loading:"lazy",onError:i[1]||(i[1]=e=>(0,n.R1)(c.on)(e))},null,40,Ie),Pe]),(0,r.Lk)("div",null,[(0,r.Lk)("div",Je,(0,s.v_)((0,n.R1)(a).stakeCurrentValidator.description.moniker),1),(e.item=f((0,n.R1)(a).stakeCurrentValidator.operator_address))?((0,r.uX)(),(0,r.CE)("div",ze,[(0,r.eW)((0,s.v_)(e.$t("message.validatoes_staked_label"))+" "+(0,s.v_)((0,n.R1)(c.NJ)(e.item.balance.amount,(0,n.R1)(a).networks[(0,n.R1)(a).currentNetwork].exponent).toLocaleString("ru-RU",{maximumFractionDigits:7}))+" ",1),(0,r.Lk)("div",Me,[(0,r.Lk)("img",{src:(0,n.R1)(c.oB)((0,n.R1)(a).networks[(0,n.R1)(a).currentNetwork].chain_id),alt:""},null,8,qe)])])):(0,r.Q3)("",!0)]),je])])):((0,r.uX)(),(0,r.CE)("div",{key:0,class:"info_wrap",onClick:i[0]||(i[0]=(0,o.D$)((e=>l.value=!0),["prevent"]))},[(0,r.Lk)("div",Ke,[(0,r.Lk)("div",De,(0,s.v_)(e.$t("message.stake_validator_placeholder")),1),Qe])]))]),(0,r.Lk)("div",Ye,[(0,r.Lk)("div",Ge,[(0,r.eW)((0,s.v_)(e.$t("message.stake_amount_label"))+" ",1),(0,r.Lk)("div",He,(0,s.v_)((0,n.R1)(c.ST)((0,n.R1)(c.Y$)((0,n.R1)(a).networks[(0,n.R1)(a).currentNetwork].token_name,g.value*Math.pow(10,(0,n.R1)(a).networks[(0,n.R1)(a).currentNetwork].exponent),(0,n.R1)(a).networks[(0,n.R1)(a).currentNetwork].exponent)))+" "+(0,s.v_)((0,n.R1)(a).currentCurrencySymbol),1)]),(0,r.Lk)("div",Ze,[(0,r.bo)((0,r.Lk)("input",{type:"number",inputmode:"numeric",class:"input big","onUpdate:modelValue":i[3]||(i[3]=e=>g.value=e),placeholder:"0.00",onFocus:i[4]||(i[4]=e=>(0,n.R1)(t).emit("show_keyboard")),onBlur:i[5]||(i[5]=e=>(0,n.R1)(t).emit("hide_keyboard")),onInput:i[6]||(i[6]=e=>w(e))},null,544),[[o.Jo,g.value]]),(0,r.Lk)("button",{type:"button",class:"max_btn",onClick:(0,o.D$)(R,["prevent"])},(0,s.v_)(e.$t("message.btn_MAX")),1)])]),L.value?((0,r.uX)(),(0,r.Wv)(d.A,{key:0,msgAny:m.value,txType:"stake"},null,8,["msgAny"])):(0,r.Q3)("",!0),(0,r.Lk)("div",Oe,[(0,n.R1)(a).networks[(0,n.R1)(a).currentNetwork].currentTxHash?((0,r.uX)(),(0,r.CE)("button",{key:1,class:"btn waiting_btn",onClick:i[8]||(i[8]=(0,o.D$)((e=>(0,n.R1)(t).emit("show_pending_notification")),["prevent"]))},[(0,r.Lk)("span",null,(0,s.v_)(e.$t("message.btn_waiting_tx")),1)])):((0,r.uX)(),(0,r.CE)("button",{key:0,class:(0,s.C4)(["btn",{disabled:!(0,n.R1)(a).TxFee.isEnough}]),onClick:i[7]||(i[7]=(0,o.D$)((e=>_.value=!0),["prevent"]))},[(0,r.Lk)("span",null,(0,s.v_)(e.$t("message.btn_stake")),1)],2))])],64)):((0,r.uX)(),(0,r.Wv)(k.A,{key:0}))])]),l.value?((0,r.uX)(),(0,r.Wv)(v.A,{key:0})):(0,r.Q3)("",!0),_.value?((0,r.uX)(),(0,r.Wv)(le,{key:1,amount:g.value,msgAny:m.value},null,8,["amount","msgAny"])):(0,r.Q3)("",!0)],64)}}};const aa=(0,ne.A)(ea,[["__scopeId","data-v-a08cd3fa"]]);var ta=aa}}]);
//# sourceMappingURL=799.8de4ae70.js.map