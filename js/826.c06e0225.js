"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[826],{58342:function(e,a,t){t.d(a,{A:function(){return h}});var s=t(56768),n=t(45130),l=t(24113),o=t(90144);const r=e=>((0,s.Qi)("data-v-5e44c6ba"),e=e(),(0,s.jt)(),e),c=l+"#ic_arrow_hor",i=l+"#ic_search",u=l+"#ic_close",k={class:"search"},v=r((()=>(0,s.Lk)("span",null,[(0,s.Lk)("svg",null,[(0,s.Lk)("use",{"xlink:href":c})])],-1))),_=[v],d={class:"field"},m=r((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":i})],-1))),L=["placeholder"],p=r((()=>(0,s.Lk)("svg",null,[(0,s.Lk)("use",{"xlink:href":u})],-1))),R=[p];var g={__name:"Search",props:["source"],setup(e){const a=e,t=(0,s.WQ)("emitter"),l=(0,o.KR)("");function r(){setTimeout((()=>t.emit("search_focus")),100)}function c(){setTimeout((()=>t.emit("search_blur")),100)}function i(){t.emit("search",{query:l.value,source:a.source})}function u(){l.value="",t.emit("search",{query:l.value,source:a.source})}return(e,a)=>((0,s.uX)(),(0,s.CE)("div",k,[(0,s.Lk)("button",{class:"back_btn",onClick:(0,n.D$)(c,["prevent"])},_),(0,s.Lk)("div",d,[m,(0,s.bo)((0,s.Lk)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e),class:"input",placeholder:e.$t("message.search_placeholder"),onFocus:r,onBlur:c,onInput:i},null,40,L),[[n.Jo,l.value]]),l.value.length?((0,s.uX)(),(0,s.CE)("button",{key:0,class:"clear_btn",onClick:(0,n.D$)(u,["prevent"])},R)):(0,s.Q3)("",!0)])]))}},b=t(71241);const w=(0,b.A)(g,[["__scopeId","data-v-5e44c6ba"]]);var h=w},57612:function(e,a,t){t.r(a),t.d(a,{default:function(){return fe}});var s=t(56768),n=t(24232),l=t(90144),o=t(45130),r=t(24113),c=t(76750),i=t(61981),u=(t(88564),t(1955)),k=(t(44114),t(89114)),v=t(58342);const _=e=>((0,s.Qi)("data-v-293737db"),e=e(),(0,s.jt)(),e),d=r+"#ic_arrow_hor",m=r+"#ic_check",L={class:"page_container validators_page"},p={class:"cont"},R={class:"head"},g=_((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":d})],-1))),b=[g],w={class:"page_title"},h={key:1,class:"validators"},f={key:0,class:"list"},C={class:"validator_wrap"},x={class:"validator"},y={class:"logo"},$=["src"],N={class:"moniker"},X={class:"commission"},A=_((()=>(0,s.Lk)("div",{class:"staked"},null,-1))),E={class:"apr"},K=_((()=>(0,s.Lk)("br",null,null,-1))),S=_((()=>(0,s.Lk)("div",{class:"check"},[(0,s.Lk)("svg",null,[(0,s.Lk)("use",{"xlink:href":m})])],-1))),F={key:1,class:"empty"};var W={__name:"ValidatorsModal",setup(e){const a=(0,c.o)(),t=(0,s.WQ)("emitter"),o=(0,l.KR)(!1),r=(0,l.KR)([]),i=(0,l.KR)([]);return(0,s.KC)((async()=>{r.value=(await a.getValidators()).validators,i.value=r.value,o.value=!0})),t.on("search",(({query:e,source:a})=>{if("validators"===a){i.value=[];for(let a in r.value)r.value[a].moniker.toLocaleLowerCase().includes(e.toLocaleLowerCase())&&i.value.push(r.value[a])}})),(e,r)=>((0,s.uX)(),(0,s.CE)("section",L,[(0,s.Lk)("div",p,[(0,s.Lk)("div",R,[(0,s.Lk)("button",{class:"back_btn",onClick:r[0]||(r[0]=e=>(0,l.R1)(t).emit("close_validators_modal"))},b),(0,s.Lk)("div",w,(0,n.v_)(e.$t("message.validators_page_title")),1)]),(0,s.bF)(v.A,{source:"validators"}),o.value?((0,s.uX)(),(0,s.CE)("div",h,[i.value.length?((0,s.uX)(),(0,s.CE)("div",f,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.value,((t,o)=>((0,s.uX)(),(0,s.CE)("div",{class:"item",key:o},[(0,s.Lk)("div",C,[(0,s.Lk)("div",x,[(0,s.Lk)("div",y,[(0,s.Lk)("img",{src:`https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${(0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].prefix}/moniker/${t.operator_address}.png`,alt:"",loading:"lazy"},null,8,$)]),(0,s.Lk)("div",null,[(0,s.Lk)("div",N,(0,n.v_)(t.description.moniker),1),(0,s.Lk)("div",X,(0,n.v_)((100*t.commission.commission_rates.rate).toLocaleString("ru-RU",{maximumFractionDigits:2}))+"% ",1),A]),(0,s.Lk)("div",E,[(0,s.Lk)("span",null,[(0,s.eW)((0,n.v_)(e.$t("message.stake_APR_label")),1),K,(0,s.eW)(" "+(0,n.v_)((100*(0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].APR-100*(0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].APR*t.commission.commission_rates.rate).toFixed(2))+"%",1)])]),S])])])))),128))])):((0,s.uX)(),(0,s.CE)("div",F,(0,n.v_)(e.$t("message.search_empty_validator")),1))])):((0,s.uX)(),(0,s.Wv)(k.A,{key:0}))])]))}},D=t(71241);const Q=(0,D.A)(W,[["__scopeId","data-v-293737db"]]);var T=Q;const I=e=>((0,s.Qi)("data-v-d4c9c4a6"),e=e(),(0,s.jt)(),e),J=r+"#ic_arrow_hor",U=r+"#ic_arr_ver2",P={class:"page_container stake"},V={class:"cont"},j={class:"head"},q=I((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":J})],-1))),M={class:"page_title"},B={class:"current_staked"},Y={class:"label"},z={class:"data_wrap"},H={class:"data"},Z={class:"apr"},G=I((()=>(0,s.Lk)("br",null,null,-1))),O={class:"token"},ee={class:"logo"},ae=["src"],te={class:"denom"},se={class:"unbonding_period"},ne={class:"balances"},le={class:"label"},oe={class:"amount"},re={class:"cost"},ce={class:"label"},ie={class:"amount"},ue={class:"cost"},ke={class:"validator"},ve={class:"label"},_e={class:"info"},de={class:"placeholder"},me=I((()=>(0,s.Lk)("svg",{class:"arr"},[(0,s.Lk)("use",{"xlink:href":U})],-1))),Le={class:"amount"},pe={class:"label"},Re={class:"cost"},ge={class:"field"},be={class:"btns"};var we={__name:"Stake",setup(e){const a=(0,c.o)(),t=(0,s.WQ)("emitter"),r=(0,l.KR)(!1),k=(0,l.KR)(!1),v=((0,l.KR)([]),(0,l.KR)(""));function _(){v.value=(0,i.NJ)((0,i.Rt)(),a.networks[a.currentNetwork].exponent)}function d(e){e.target.value.length&&e.target.value<=0&&(v.value=0),e.target.value>(0,i.NJ)((0,i.Rt)(),a.networks[a.currentNetwork].exponent)&&_()}return(0,s.KC)((async()=>{await a.getNetworkUnbondingTime()})),(0,s.hi)((()=>{t.off("auth"),t.off("close_sign_tx_modal"),t.off("close_validators_modal")})),t.on("auth",(()=>{k.value=!1,claim()})),t.on("close_sign_tx_modal",(()=>{k.value=!1})),t.on("close_validators_modal",(()=>{r.value=!1})),(e,c)=>{const m=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("section",P,[(0,s.Lk)("div",V,[(0,s.Lk)("div",j,[(0,s.bF)(m,{to:"/account?activeSlide=1",class:"back_btn"},{default:(0,s.k6)((()=>[q])),_:1}),(0,s.Lk)("div",M,(0,n.v_)(e.$t("message.stake_page_title")),1)]),(0,s.Lk)("div",B,[(0,s.Lk)("div",Y,(0,n.v_)(e.$t("message.stake_current_staked_label")),1),(0,s.Lk)("div",z,[(0,s.Lk)("div",H,[(0,s.Lk)("div",Z,[(0,s.Lk)("span",null,[(0,s.eW)((0,n.v_)(e.$t("message.stake_APR_label")),1),G,(0,s.eW)(" "+(0,n.v_)((100*(0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].APR).toFixed(2))+"%",1)])]),(0,s.Lk)("div",O,[(0,s.Lk)("div",ee,[(0,s.Lk)("img",{src:(0,l.R1)(i.oB)((0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].chain_id),alt:""},null,8,ae)]),(0,s.Lk)("div",null,[(0,s.Lk)("div",te,(0,n.v_)((0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].token_name),1),(0,s.Lk)("div",se,(0,n.v_)(e.$t("message.stake_unbonding_period_label"))+" "+(0,n.v_)((0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].unbondingTime)+" "+(0,n.v_)(e.$t("message.stake_unbonding_time_unit")),1)])]),(0,s.Lk)("div",ne,[(0,s.Lk)("div",null,[(0,s.Lk)("div",le,(0,n.v_)(e.$t("message.stake_available_label")),1),(0,s.Lk)("div",oe,(0,n.v_)((0,l.R1)(i.NJ)((0,l.R1)(i.Rt)(),(0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].exponent).toLocaleString("ru-RU",{maximumFractionDigits:7}))+" "+(0,n.v_)((0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].token_name),1),(0,s.Lk)("div",re,(0,n.v_)((0,l.R1)(a).currentCurrencySymbol)+" "+(0,n.v_)((0,l.R1)(i.ST)((0,l.R1)(i.Y$)((0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].token_name,(0,l.R1)(i.Rt)(),(0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].exponent))),1)]),(0,s.Lk)("div",null,[(0,s.Lk)("div",ce,(0,n.v_)(e.$t("message.stake_staked_label")),1),(0,s.Lk)("div",ie,(0,n.v_)((0,l.R1)(i.NJ)((0,l.R1)(i.cc)(),(0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].exponent).toLocaleString("ru-RU",{maximumFractionDigits:7}))+" "+(0,n.v_)((0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].token_name),1),(0,s.Lk)("div",ue,(0,n.v_)((0,l.R1)(a).currentCurrencySymbol)+(0,n.v_)((0,l.R1)(i.ST)((0,l.R1)(i.eZ)())),1)])])])])]),(0,s.Lk)("div",ke,[(0,s.Lk)("div",ve,(0,n.v_)(e.$t("message.stake_validator_label")),1),(0,s.Lk)("div",{class:"info_wrap",onClick:c[0]||(c[0]=(0,o.D$)((e=>r.value=!0),["prevent"]))},[(0,s.Lk)("div",_e,[(0,s.Lk)("div",de,(0,n.v_)(e.$t("message.stake_validator_placeholder")),1),me])])]),(0,s.Lk)("div",Le,[(0,s.Lk)("div",pe,[(0,s.eW)((0,n.v_)(e.$t("message.stake_amount_label"))+" ",1),(0,s.Lk)("div",Re,(0,n.v_)((0,l.R1)(i.ST)((0,l.R1)(i.Y$)((0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].token_name,v.value*Math.pow(10,(0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].exponent),(0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].exponent)))+" "+(0,n.v_)((0,l.R1)(a).currentCurrencySymbol),1)]),(0,s.Lk)("div",ge,[(0,s.bo)((0,s.Lk)("input",{type:"number",inputmode:"numeric",class:"input big","onUpdate:modelValue":c[1]||(c[1]=e=>v.value=e),placeholder:"0.00",onInput:c[2]||(c[2]=e=>d(e))},null,544),[[o.Jo,v.value]]),(0,s.Lk)("button",{type:"button",class:"max_btn",onClick:(0,o.D$)(_,["prevent"])},(0,n.v_)(e.$t("message.btn_MAX")),1)])]),(0,s.Lk)("div",be,[(0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].currentTxHash?((0,s.uX)(),(0,s.CE)("button",{key:1,class:"btn waiting_btn",onClick:c[4]||(c[4]=(0,o.D$)((e=>(0,l.R1)(t).emit("show_pending_notification")),["prevent"]))},[(0,s.Lk)("span",null,(0,n.v_)(e.$t("message.btn_waiting_tx")),1)])):((0,s.uX)(),(0,s.CE)("button",{key:0,class:(0,n.C4)(["btn",{disabled:!(0,l.R1)(a).TxFee.isEnough}]),onClick:c[3]||(c[3]=(0,o.D$)((e=>k.value=!0),["prevent"]))},[(0,s.Lk)("span",null,(0,n.v_)(e.$t("message.btn_stake")),1)],2))])])]),r.value?((0,s.uX)(),(0,s.Wv)(T,{key:0})):(0,s.Q3)("",!0),k.value?((0,s.uX)(),(0,s.Wv)(u.A,{key:1})):(0,s.Q3)("",!0)],64)}}};const he=(0,D.A)(we,[["__scopeId","data-v-d4c9c4a6"]]);var fe=he}}]);
//# sourceMappingURL=826.c06e0225.js.map