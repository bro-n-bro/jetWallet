"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[431],{54636:function(e,a,t){t.d(a,{A:function(){return w}});var s=t(56768),r=t(45130),n=t(24113),o=t(90144);const l=e=>((0,s.Qi)("data-v-33f4e966"),e=e(),(0,s.jt)(),e),i=n+"#ic_arrow_hor",u=n+"#ic_search",c=n+"#ic_close",d={class:"search"},k=l((()=>(0,s.Lk)("span",null,[(0,s.Lk)("svg",null,[(0,s.Lk)("use",{"xlink:href":i})])],-1))),v=[k],_={class:"field"},m=l((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":u})],-1))),g=["placeholder"],p=l((()=>(0,s.Lk)("svg",null,[(0,s.Lk)("use",{"xlink:href":c})],-1))),L=[p];var R={__name:"Search",props:["source"],setup(e){const a=e,t=(0,s.WQ)("emitter"),n=(0,o.KR)("");function l(){t.emit("show_keyboard"),setTimeout((()=>t.emit("search_focus")),100)}function i(){t.emit("hide_keyboard"),setTimeout((()=>t.emit("search_blur")),100)}function u(){t.emit("search",{query:n.value,source:a.source})}function c(){n.value="",t.emit("search",{query:n.value,source:a.source})}return(e,a)=>((0,s.uX)(),(0,s.CE)("div",d,[(0,s.Lk)("button",{class:"back_btn",onClick:(0,r.D$)(i,["prevent"])},v),(0,s.Lk)("div",_,[m,(0,s.bo)((0,s.Lk)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>n.value=e),class:"input",placeholder:e.$t("message.search_placeholder"),onFocus:l,onBlur:i,onInput:u},null,40,g),[[r.Jo,n.value]]),n.value.length?((0,s.uX)(),(0,s.CE)("button",{key:0,class:"clear_btn",onClick:a[1]||(a[1]=(0,r.D$)((e=>c()),["prevent"]))},L)):(0,s.Q3)("",!0)])]))}},f=t(71241);const b=(0,f.A)(R,[["__scopeId","data-v-33f4e966"]]);var w=b},40571:function(e,a,t){t.d(a,{A:function(){return M}});t(44114);var s=t(56768),r=t(90144),n=t(24232),o=t(45130),l=t(24113),i=t(76750),u=t(61981),c=t(17086),d=t(54636);const k=e=>((0,s.Qi)("data-v-7b805c1d"),e=e(),(0,s.jt)(),e),v=l+"#ic_arrow_hor",_=l+"#ic_user",m=l+"#ic_check",g={class:"page_container inner_page_container validators_page"},p={class:"cont"},L={class:"head"},R=k((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":v})],-1))),f=[R],b={class:"page_title"},w={key:1,class:"validators"},h={key:0,class:"list"},y=["onClick"],C={class:"validator"},x={class:"logo"},$=["src"],N=k((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":_})],-1))),V={key:0,class:"check"},A=k((()=>(0,s.Lk)("svg",null,[(0,s.Lk)("use",{"xlink:href":m})],-1))),F=[A],T={class:"moniker"},E={class:"commission"},W={key:0,class:"staked"},X={class:"logo"},K=["src"],Q={class:"apr"},B=k((()=>(0,s.Lk)("br",null,null,-1))),S={key:1,class:"empty"};var U={__name:"ValidatorsModal",props:["unstake","redelegate"],setup(e){const a=e,t=(0,i.o)(),l=(0,s.WQ)("emitter"),k=(0,r.KR)(!1),v=(0,r.KR)([]),_=(0,r.KR)([]);function m(e){return t.stakedBalances.find((a=>a.validator_info.operator_address===e))}function R(e){if(a.unstake){if(t.unstakeCurrentValidator&&t.unstakeCurrentValidator.operator_address===e)return!0}else if(a.redelegate){if("from"===a.redelegate){if(t.redelegateValidatorFrom&&t.redelegateValidatorFrom.operator_address===e)return!0}else if(t.redelegateValidatorTo&&t.redelegateValidatorTo.operator_address===e)return!0}else if(t.stakeCurrentValidator&&t.stakeCurrentValidator.operator_address===e)return!0}function A(e){a.unstake?t.unstakeCurrentValidator=e:a.redelegate?"from"===a.redelegate?(t.redelegateValidatorFrom=e,t.redelegateValidatorFrom.operator_address===t.redelegateValidatorTo?.operator_address&&(t.redelegateValidatorTo=null)):t.redelegateValidatorTo=e:t.stakeCurrentValidator=e,l.emit("close_validators_modal")}return(0,s.KC)((async()=>{a.unstake?v.value=(await t.getUserValidators()).validators:a.redelegate?"from"===a.redelegate?v.value=(await t.getUserValidators()).validators:v.value=(await t.getAllValidators()).validators.filter((e=>e.operator_address!==t.redelegateValidatorFrom?.operator_address)):v.value=(await t.getAllValidators()).validators,v.value.sort(((e,a)=>parseInt(e.tokens)>parseInt(a.tokens)?-1:parseInt(e.tokens)<parseInt(a.tokens)?1:0)),_.value=v.value,k.value=!0})),l.on("search",(({query:e,source:a})=>{if("validators"===a){_.value=[];for(let a in v.value)v.value[a].description.moniker.toLocaleLowerCase().includes(e.toLocaleLowerCase())&&_.value.push(v.value[a])}})),(e,a)=>((0,s.uX)(),(0,s.CE)("section",g,[(0,s.Lk)("div",p,[(0,s.Lk)("div",L,[(0,s.Lk)("button",{class:"back_btn",onClick:a[0]||(a[0]=e=>(0,r.R1)(l).emit("close_validators_modal"))},f),(0,s.Lk)("div",b,(0,n.v_)(e.$t("message.validators_page_title")),1)]),(0,s.bF)(d.A,{source:"validators"}),k.value?((0,s.uX)(),(0,s.CE)("div",w,[_.value.length?((0,s.uX)(),(0,s.CE)("div",h,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(_.value,((l,i)=>((0,s.uX)(),(0,s.CE)("div",{class:"item",key:i},[(0,s.Lk)("div",{class:(0,n.C4)(["validator_wrap",{current:R(l.operator_address)}]),onClick:(0,o.D$)((e=>A(l)),["prevent"])},[(0,s.Lk)("div",C,[(0,s.Lk)("div",x,[(0,s.Lk)("img",{src:`https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${(0,r.R1)(t).networks[(0,r.R1)(t).currentNetwork].prefix}/moniker/${l.operator_address}.png`,alt:"",loading:"lazy",onError:a[1]||(a[1]=e=>(0,r.R1)(u.on)(e))},null,40,$),N,R(l.operator_address)?((0,s.uX)(),(0,s.CE)("div",V,F)):(0,s.Q3)("",!0)]),(0,s.Lk)("div",null,[(0,s.Lk)("div",T,(0,n.v_)(l.description.moniker),1),(0,s.Lk)("div",E,(0,n.v_)((100*l.commission.commission_rates.rate).toLocaleString("ru-RU",{maximumFractionDigits:2}).replace(",","."))+"% ",1),(e.item=m(l.operator_address))?((0,s.uX)(),(0,s.CE)("div",W,[(0,s.eW)((0,n.v_)(e.$t("message.validatoes_staked_label"))+" "+(0,n.v_)((0,r.R1)(u.NJ)(e.item.balance.amount,(0,r.R1)(t).networks[(0,r.R1)(t).currentNetwork].exponent).toLocaleString("ru-RU",{maximumFractionDigits:7}).replace(",","."))+" ",1),(0,s.Lk)("div",X,[(0,s.Lk)("img",{src:(0,r.R1)(u.oB)((0,r.R1)(t).networks[(0,r.R1)(t).currentNetwork].chain_id),alt:""},null,8,K)])])):(0,s.Q3)("",!0)]),(0,s.Lk)("div",Q,[(0,s.Lk)("span",null,[(0,s.eW)((0,n.v_)(e.$t("message.stake_APR_label")),1),B,(0,s.eW)(" "+(0,n.v_)((100*(0,r.R1)(t).networks[(0,r.R1)(t).currentNetwork].APR-100*(0,r.R1)(t).networks[(0,r.R1)(t).currentNetwork].APR*l.commission.commission_rates.rate).toFixed(2))+"% ",1)])])])],10,y)])))),128))])):((0,s.uX)(),(0,s.CE)("div",S,(0,n.v_)(e.$t("message.search_empty_validator")),1))])):((0,s.uX)(),(0,s.Wv)(c.A,{key:0}))])]))}},D=t(71241);const I=(0,D.A)(U,[["__scopeId","data-v-7b805c1d"]]);var M=I},48200:function(e,a,t){t.r(a),t.d(a,{default:function(){return ze}});var s=t(56768),r=t(24232),n=t(90144),o=t(45130),l=t(24113),i=t(76750),u=t(61981),c=t(68515),d=t(84103),k=t(40571),v=(t(44114),t(81387)),_=t(67278),m=t(17086),g=t(86255);const p=e=>((0,s.Qi)("data-v-fc8928d8"),e=e(),(0,s.jt)(),e),L=l+"#ic_arrow_hor",R=l+"#ic_user",f={class:"page_container inner_page_container unstake_confirm"},b={class:"cont"},w={class:"head"},h=p((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":L})],-1))),y=[h],C={class:"page_title"},x={class:"data"},$={class:"field_label"},N={class:"info_wrap"},V={class:"info"},A={class:"validator"},F={class:"logo"},T=["src"],E=p((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":R})],-1))),W={class:"moniker"},X={class:"voting_power"},K={class:"apr"},Q=p((()=>(0,s.Lk)("br",null,null,-1))),B={class:"features"},S={class:"label"},U={class:"val"},D=["src"],I={class:"label"},M={class:"val"},J={class:"cost"},P={class:"label"},j={class:"val"},q={class:"label"},O={class:"val"},z={class:"label"},H={class:"val"},Y={class:"memo"},G={class:"field_label"},Z={class:"field"},ee={class:"btns"};var ae={__name:"UnstakeConfirmModal",props:["amount","msgAny"],setup(e){const a=e,t=(0,i.o)(),l=(0,v.rd)(),c=(0,s.WQ)("emitter"),d=(0,s.WQ)("i18n"),k=(0,_.hN)(),p=(0,n.KR)(!1),L=(0,n.KR)(0),R=(0,n.KR)(""),h=(0,s.EW)((()=>(0,u.NJ)(t.TxFee.userGasAmount*t.TxFee[`${t.TxFee.currentLevel}Price`],t.TxFee.balance.exponent))),ae=(0,n.KR)(!1);async function te(){await t.getTotalBondedTokens(),L.value=t.unstakeCurrentValidator.tokens/t.networks[t.currentNetwork].totalBondedTokens}async function se(){ae.value=!0;try{t.TxFee.isRemember&&await t.updateTxFeeInfo();let e=await(0,u.qS)(a.msgAny,R.value);k.notify({group:"default",clean:!0}),k.notify({group:"default",speed:200,duration:-100,title:d.global.t("message.notification_tx_pending_title"),type:"pending",data:{isCollapsible:!0,explorer_link:(0,u.aS)(t.currentNetwork)}}),(0,u.nw)(e).catch((e=>{console.log(e),re(e)})),t.checkTxResult(),l.push("/account")}catch(e){console.log(e),re(e)}}function re(e){ae.value=!1;let a="";a=e.code?d.global.t(`message.notification_tx_error_${e.code}`):d.global.t("message.notification_tx_error_rejected"),k.notify({group:"default",clean:!0}),k.notify({group:"default",speed:200,duration:6e3,title:d.global.t("message.notification_tx_error_title"),text:a,type:"error"}),t.networks[t.currentNetwork].currentTxHash=null,t.resetTxFee()}function ne(){p.value=!0,t.isAnyModalOpen=!0}return(0,s.KC)((()=>{te()})),(0,s.hi)((()=>{c.off("auth"),c.off("close_sign_tx_modal")})),c.on("auth",(()=>{p.value=!1,t.isAnyModalOpen=!1,se()})),c.on("close_sign_tx_modal",(()=>{p.value=!1,t.isAnyModalOpen=!1})),c.on("close_any_modal",(()=>{p.value=!1,t.isAnyModalOpen=!1})),(e,l)=>((0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("section",f,[ae.value?((0,s.uX)(),(0,s.Wv)(m.A,{key:0})):(0,s.Q3)("",!0),(0,s.Lk)("div",b,[(0,s.Lk)("div",w,[(0,s.Lk)("button",{class:"back_btn",onClick:l[0]||(l[0]=e=>(0,n.R1)(c).emit("close_unstake_confirm_modal"))},y),(0,s.Lk)("div",C,(0,r.v_)(e.$t("message.unstake_confirm_page_title")),1)]),(0,s.Lk)("div",x,[(0,s.Lk)("div",$,(0,r.v_)(e.$t("message.details_label")),1),(0,s.Lk)("div",N,[(0,s.Lk)("div",V,[(0,s.Lk)("div",A,[(0,s.Lk)("div",F,[(0,s.Lk)("img",{src:`https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${(0,n.R1)(t).networks[(0,n.R1)(t).currentNetwork].prefix}/moniker/${(0,n.R1)(t).unstakeCurrentValidator.operator_address}.png`,alt:"",loading:"lazy",onError:l[1]||(l[1]=e=>(0,n.R1)(u.on)(e))},null,40,T),E]),(0,s.Lk)("div",null,[(0,s.Lk)("div",W,(0,r.v_)((0,n.R1)(t).unstakeCurrentValidator.description.moniker),1),(0,s.Lk)("div",X,(0,r.v_)((100*L.value).toFixed(2))+"% "+(0,r.v_)(e.$t("message.stake_confirm_voting_power")),1)])]),(0,s.Lk)("div",K,[(0,s.Lk)("span",null,[(0,s.eW)((0,r.v_)(e.$t("message.stake_APR_label")),1),Q,(0,s.eW)(" "+(0,r.v_)((100*(0,n.R1)(t).networks[(0,n.R1)(t).currentNetwork].APR-100*(0,n.R1)(t).networks[(0,n.R1)(t).currentNetwork].APR*(0,n.R1)(t).unstakeCurrentValidator.commission.commission_rates.rate).toFixed(2))+"% ",1)])]),(0,s.Lk)("div",B,[(0,s.Lk)("div",null,[(0,s.Lk)("div",S,(0,r.v_)(e.$t("message.stake_confirm_token_label")),1),(0,s.Lk)("div",U,[(0,s.Lk)("img",{src:(0,n.R1)(u.oB)((0,n.R1)(t).networks[(0,n.R1)(t).currentNetwork].chain_id),alt:""},null,8,D),(0,s.Lk)("span",null,(0,r.v_)((0,n.R1)(t).networks[(0,n.R1)(t).currentNetwork].token_name),1)])]),(0,s.Lk)("div",null,[(0,s.Lk)("div",I,(0,r.v_)(e.$t("message.stake_confirm_amount_label")),1),(0,s.Lk)("div",M,[(0,s.eW)((0,r.v_)(a.amount)+" "+(0,r.v_)((0,n.R1)(t).networks[(0,n.R1)(t).currentNetwork].token_name)+" ",1),(0,s.Lk)("span",J," ("+(0,r.v_)((0,n.R1)(u.ST)((0,n.R1)(u.Yq)(a.amount,(0,n.R1)(t).networks[(0,n.R1)(t).currentNetwork].token_name)))+(0,r.v_)((0,n.R1)(t).currentCurrencySymbol)+") ",1)])]),(0,s.Lk)("div",null,[(0,s.Lk)("div",P,(0,r.v_)(e.$t("message.stake_confirm_commission_label")),1),(0,s.Lk)("div",j,(0,r.v_)((100*(0,n.R1)(t).unstakeCurrentValidator.commission.commission_rates.rate).toLocaleString("ru-RU",{maximumFractionDigits:2}).replace(",","."))+"% ",1)]),(0,s.Lk)("div",null,[(0,s.Lk)("div",q,(0,r.v_)(e.$t("message.stake_confirm_unbonding_period_label")),1),(0,s.Lk)("div",O,(0,r.v_)((0,n.R1)(t).networks[(0,n.R1)(t).currentNetwork].unbondingTime)+" "+(0,r.v_)(e.$t("message.stake_unbonding_time_unit")),1)]),(0,s.Lk)("div",null,[(0,s.Lk)("div",z,(0,r.v_)(e.$t("message.stake_confirm_fee_label")),1),(0,s.Lk)("div",H,(0,r.v_)(h.value.toLocaleString("ru-RU",{maximumFractionDigits:5}).replace(",","."))+" "+(0,r.v_)((0,n.R1)(t).networks[(0,n.R1)(t).currentNetwork].token_name),1)])])])])]),(0,s.Lk)("div",Y,[(0,s.Lk)("div",G,(0,r.v_)(e.$t("message.memo_label")),1),(0,s.Lk)("div",Z,[(0,s.bo)((0,s.Lk)("input",{type:"text",class:"input big","onUpdate:modelValue":l[2]||(l[2]=e=>R.value=e),onTouchend:l[3]||(l[3]=e=>(0,n.R1)(c).emit("show_keyboard")),onBlur:l[4]||(l[4]=e=>(0,n.R1)(c).emit("hide_keyboard"))},null,544),[[o.Jo,R.value]])])]),(0,s.Lk)("div",ee,[(0,s.Lk)("button",{class:"btn",onClick:l[5]||(l[5]=(0,o.D$)((e=>ne()),["prevent"]))},[(0,s.Lk)("span",null,(0,r.v_)(e.$t("message.btn_confirm_unstake")),1)])])])]),(0,s.bF)(o.eB,{name:"modal"},{default:(0,s.k6)((()=>[p.value?((0,s.uX)(),(0,s.Wv)(g.A,{key:0})):(0,s.Q3)("",!0)])),_:1}),(0,s.bF)(o.eB,{name:"fade"},{default:(0,s.k6)((()=>[p.value?((0,s.uX)(),(0,s.CE)("div",{key:0,class:"modal_overlay",onClick:l[6]||(l[6]=(0,o.D$)((e=>(0,n.R1)(c).emit("close_any_modal")),["prevent"]))})):(0,s.Q3)("",!0)])),_:1})],64))}},te=t(71241);const se=(0,te.A)(ae,[["__scopeId","data-v-fc8928d8"]]);var re=se;const ne=e=>((0,s.Qi)("data-v-506dc7ea"),e=e(),(0,s.jt)(),e),oe=l+"#ic_arrow_hor",le=l+"#ic_arr_ver2",ie=l+"#ic_user",ue={class:"page_container inner_page_container unstake"},ce={class:"cont"},de={class:"head"},ke=ne((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":oe})],-1))),ve={class:"page_title"},_e={class:"current_staked"},me={class:"field_label"},ge={class:"data_wrap"},pe={class:"data"},Le={class:"apr"},Re=ne((()=>(0,s.Lk)("br",null,null,-1))),fe={class:"token"},be={class:"logo"},we=["src"],he={class:"denom"},ye={class:"unbonding_period"},Ce={class:"balances"},xe={class:"label"},$e={class:"amount"},Ne={class:"cost"},Ve={class:"validator_info"},Ae={class:"field_label"},Fe={class:"info"},Te={class:"placeholder"},Ee=ne((()=>(0,s.Lk)("svg",{class:"arr"},[(0,s.Lk)("use",{"xlink:href":le})],-1))),We={class:"validator"},Xe={class:"logo"},Ke=["src"],Qe=ne((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":ie})],-1))),Be={class:"moniker"},Se={key:0,class:"staked"},Ue={class:"logo"},De=["src"],Ie=ne((()=>(0,s.Lk)("svg",{class:"arr"},[(0,s.Lk)("use",{"xlink:href":le})],-1))),Me={class:"field_label"},Je={class:"cost"},Pe={class:"field"},je={class:"btns"};var qe={__name:"Unstake",setup(e){const a=(0,i.o)(),t=(0,s.WQ)("emitter"),l=(0,n.KR)(!1),v=(0,n.KR)(!1),_=(0,n.KR)([]),m=(0,n.KR)(""),g=(0,n.KR)(0),p=(0,n.KR)(!1),L=(0,n.KR)((0,s.EW)((()=>p.value&&!!a.unstakeCurrentValidator)));function R(){p.value=!1,setTimeout((()=>{m.value=(0,u.NJ)(g.value,a.networks[a.currentNetwork].exponent),p.value=!0}))}function f(e){p.value=!1,setTimeout((()=>{e.target.value.length&&e.target.value<=0&&(m.value=""),e.target.value.length&&e.target.value>0&&e.target.value<(0,u.NJ)(g.value,a.networks[a.currentNetwork].exponent)&&(p.value=!0),e.target.value>(0,u.NJ)(g.value,a.networks[a.currentNetwork].exponent)&&R()}))}function b(e){return a.stakedBalances.find((a=>a.validator_info.operator_address===e))}function w(){l.value=!0}return(0,s.KC)((()=>{a.unstakeCurrentValidator=null,a.getNetworkUnbondingTime()})),(0,s.hi)((()=>{a.unstakeCurrentValidator=null,t.off("close_unstake_confirm_modal"),t.off("close_validators_modal")})),(0,s.wB)((0,s.EW)((()=>a.unstakeCurrentValidator)),(()=>{g.value=b(a.unstakeCurrentValidator.operator_address).balance.amount})),(0,s.wB)((0,s.EW)((()=>L.value)),(()=>{L.value&&(_.value=[{typeUrl:"/cosmos.staking.v1beta1.MsgUndelegate",value:c.MsgUndelegate.fromPartial({delegatorAddress:a.currentAddress,validatorAddress:a.unstakeCurrentValidator.operator_address,amount:{denom:a.networks[a.currentNetwork].denom,amount:""+parseFloat(m.value.toString().replace(",",".")).toFixed(a.networks[a.currentNetwork].exponent)*Math.pow(10,a.networks[a.currentNetwork].exponent)}})}])})),t.on("close_validators_modal",(()=>{l.value=!1})),t.on("close_unstake_confirm_modal",(()=>{v.value=!1})),(e,i)=>{const c=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("section",ue,[(0,s.Lk)("div",ce,[(0,s.Lk)("div",de,[(0,s.bF)(c,{to:"/account?activeSlide=1",class:"back_btn"},{default:(0,s.k6)((()=>[ke])),_:1}),(0,s.Lk)("div",ve,(0,r.v_)(e.$t("message.unstake_page_title")),1)]),(0,s.Lk)("div",_e,[(0,s.Lk)("div",me,(0,r.v_)(e.$t("message.stake_current_staked_label")),1),(0,s.Lk)("div",ge,[(0,s.Lk)("div",pe,[(0,s.Lk)("div",Le,[(0,s.Lk)("span",null,[(0,s.eW)((0,r.v_)(e.$t("message.stake_APR_label")),1),Re,(0,s.eW)(" "+(0,r.v_)((100*(0,n.R1)(a).networks[(0,n.R1)(a).currentNetwork].APR).toFixed(2))+"%",1)])]),(0,s.Lk)("div",fe,[(0,s.Lk)("div",be,[(0,s.Lk)("img",{src:(0,n.R1)(u.oB)((0,n.R1)(a).networks[(0,n.R1)(a).currentNetwork].chain_id),alt:""},null,8,we)]),(0,s.Lk)("div",null,[(0,s.Lk)("div",he,(0,r.v_)((0,n.R1)(a).networks[(0,n.R1)(a).currentNetwork].token_name),1),(0,s.Lk)("div",ye,(0,r.v_)(e.$t("message.stake_unbonding_period_label"))+" "+(0,r.v_)((0,n.R1)(a).networks[(0,n.R1)(a).currentNetwork].unbondingTime)+" "+(0,r.v_)(e.$t("message.stake_unbonding_time_unit")),1)])]),(0,s.Lk)("div",Ce,[(0,s.Lk)("div",null,[(0,s.Lk)("div",xe,(0,r.v_)(e.$t("message.stake_staked_label")),1),(0,s.Lk)("div",$e,(0,r.v_)((0,n.R1)(u.NJ)((0,n.R1)(u.cc)(),(0,n.R1)(a).networks[(0,n.R1)(a).currentNetwork].exponent).toLocaleString("ru-RU",{maximumFractionDigits:7}).replace(",","."))+" "+(0,r.v_)((0,n.R1)(a).networks[(0,n.R1)(a).currentNetwork].token_name),1),(0,s.Lk)("div",Ne,(0,r.v_)((0,n.R1)(a).currentCurrencySymbol)+(0,r.v_)((0,n.R1)(u.ST)((0,n.R1)(u.eZ)())),1)])])])])]),(0,s.Lk)("div",Ve,[(0,s.Lk)("div",Ae,(0,r.v_)(e.$t("message.stake_validator_label")),1),(0,n.R1)(a).unstakeCurrentValidator?((0,s.uX)(),(0,s.CE)("div",{key:1,class:"validator_wrap",onClick:i[2]||(i[2]=(0,o.D$)((e=>w()),["prevent"]))},[(0,s.Lk)("div",We,[(0,s.Lk)("div",Xe,[(0,s.Lk)("img",{src:`https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${(0,n.R1)(a).networks[(0,n.R1)(a).currentNetwork].prefix}/moniker/${(0,n.R1)(a).unstakeCurrentValidator.operator_address}.png`,alt:"",loading:"lazy",onError:i[1]||(i[1]=e=>(0,n.R1)(u.on)(e))},null,40,Ke),Qe]),(0,s.Lk)("div",null,[(0,s.Lk)("div",Be,(0,r.v_)((0,n.R1)(a).unstakeCurrentValidator.description.moniker),1),(e.item=b((0,n.R1)(a).unstakeCurrentValidator.operator_address))?((0,s.uX)(),(0,s.CE)("div",Se,[(0,s.eW)((0,r.v_)(e.$t("message.validatoes_staked_label"))+" "+(0,r.v_)((0,n.R1)(u.NJ)(e.item.balance.amount,(0,n.R1)(a).networks[(0,n.R1)(a).currentNetwork].exponent).toLocaleString("ru-RU",{maximumFractionDigits:7}).replace(",","."))+" ",1),(0,s.Lk)("div",Ue,[(0,s.Lk)("img",{src:(0,n.R1)(u.oB)((0,n.R1)(a).networks[(0,n.R1)(a).currentNetwork].chain_id),alt:""},null,8,De)])])):(0,s.Q3)("",!0)]),Ie])])):((0,s.uX)(),(0,s.CE)("div",{key:0,class:"info_wrap",onClick:i[0]||(i[0]=(0,o.D$)((e=>w()),["prevent"]))},[(0,s.Lk)("div",Fe,[(0,s.Lk)("div",Te,(0,r.v_)(e.$t("message.stake_validator_placeholder")),1),Ee])]))]),(0,s.Lk)("div",{class:(0,r.C4)(["amount_field",{disabled:!(0,n.R1)(a).unstakeCurrentValidator}])},[(0,s.Lk)("div",Me,[(0,s.eW)((0,r.v_)(e.$t("message.stake_amount_label"))+" ",1),(0,s.Lk)("div",Je,(0,r.v_)((0,n.R1)(u.ST)((0,n.R1)(u.Y$)((0,n.R1)(a).networks[(0,n.R1)(a).currentNetwork].token_name,m.value*Math.pow(10,(0,n.R1)(a).networks[(0,n.R1)(a).currentNetwork].exponent),(0,n.R1)(a).networks[(0,n.R1)(a).currentNetwork].exponent)))+" "+(0,r.v_)((0,n.R1)(a).currentCurrencySymbol),1)]),(0,s.Lk)("div",Pe,[(0,s.bo)((0,s.Lk)("input",{type:"number",inputmode:"numeric",class:"input big","onUpdate:modelValue":i[3]||(i[3]=e=>m.value=e),placeholder:"0.00",onFocus:i[4]||(i[4]=e=>(0,n.R1)(t).emit("show_keyboard",e.target)),onBlur:i[5]||(i[5]=e=>(0,n.R1)(t).emit("hide_keyboard")),onInput:i[6]||(i[6]=e=>f(e))},null,544),[[o.Jo,m.value]]),(0,s.Lk)("button",{type:"button",class:"max_btn",onClick:i[7]||(i[7]=(0,o.D$)((e=>R()),["prevent"]))},(0,r.v_)(e.$t("message.btn_MAX")),1)])],2),L.value?((0,s.uX)(),(0,s.Wv)(d.A,{key:0,msgAny:_.value,txType:"unstake"},null,8,["msgAny"])):(0,s.Q3)("",!0),(0,s.Lk)("div",je,[(0,n.R1)(a).networks[(0,n.R1)(a).currentNetwork].currentTxHash?((0,s.uX)(),(0,s.CE)("button",{key:1,class:"btn waiting_btn",onClick:i[9]||(i[9]=(0,o.D$)((e=>(0,n.R1)(t).emit("show_collapsible_notification")),["prevent"]))},[(0,s.Lk)("span",null,(0,r.v_)(e.$t("message.btn_waiting_tx")),1)])):((0,s.uX)(),(0,s.CE)("button",{key:0,class:(0,r.C4)(["btn",{disabled:!(0,n.R1)(a).TxFee.isEnough}]),onClick:i[8]||(i[8]=(0,o.D$)((e=>v.value=!0),["prevent"]))},[(0,s.Lk)("span",null,(0,r.v_)(e.$t("message.btn_unstake")),1)],2))])])]),(0,s.bF)(o.eB,{name:"from_right"},{default:(0,s.k6)((()=>[l.value?((0,s.uX)(),(0,s.Wv)(k.A,{key:0,unstake:"true"})):(0,s.Q3)("",!0)])),_:1}),(0,s.bF)(o.eB,{name:"from_right"},{default:(0,s.k6)((()=>[v.value?((0,s.uX)(),(0,s.Wv)(re,{key:0,amount:m.value,msgAny:_.value},null,8,["amount","msgAny"])):(0,s.Q3)("",!0)])),_:1})],64)}}};const Oe=(0,te.A)(qe,[["__scopeId","data-v-506dc7ea"]]);var ze=Oe}}]);
//# sourceMappingURL=431.0fe859fd.js.map