"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[596],{54636:function(e,a,t){t.d(a,{A:function(){return b}});var r=t(56768),l=t(45130),o=t(24113),s=t(90144);const n=e=>((0,r.Qi)("data-v-33f4e966"),e=e(),(0,r.jt)(),e),i=o+"#ic_arrow_hor",c=o+"#ic_search",d=o+"#ic_close",u={class:"search"},k=n((()=>(0,r.Lk)("span",null,[(0,r.Lk)("svg",null,[(0,r.Lk)("use",{"xlink:href":i})])],-1))),v=[k],_={class:"field"},m=n((()=>(0,r.Lk)("svg",{class:"icon"},[(0,r.Lk)("use",{"xlink:href":c})],-1))),g=["placeholder"],p=n((()=>(0,r.Lk)("svg",null,[(0,r.Lk)("use",{"xlink:href":d})],-1))),L=[p];var R={__name:"Search",props:["source"],setup(e){const a=e,t=(0,r.WQ)("emitter"),o=(0,s.KR)("");function n(){t.emit("show_keyboard"),setTimeout((()=>t.emit("search_focus")),100)}function i(){t.emit("hide_keyboard"),setTimeout((()=>t.emit("search_blur")),100)}function c(){t.emit("search",{query:o.value,source:a.source})}function d(){o.value="",t.emit("search",{query:o.value,source:a.source})}return(e,a)=>((0,r.uX)(),(0,r.CE)("div",u,[(0,r.Lk)("button",{class:"back_btn",onClick:(0,l.D$)(i,["prevent"])},v),(0,r.Lk)("div",_,[m,(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>o.value=e),class:"input",placeholder:e.$t("message.search_placeholder"),onFocus:n,onBlur:i,onInput:c},null,40,g),[[l.Jo,o.value]]),o.value.length?((0,r.uX)(),(0,r.CE)("button",{key:0,class:"clear_btn",onClick:a[1]||(a[1]=(0,l.D$)((e=>d()),["prevent"]))},L)):(0,r.Q3)("",!0)])]))}},f=t(71241);const w=(0,f.A)(R,[["__scopeId","data-v-33f4e966"]]);var b=w},7718:function(e,a,t){t.d(a,{A:function(){return M}});t(44114);var r=t(56768),l=t(90144),o=t(24232),s=t(45130),n=t(24113),i=t(76750),c=t(61981),d=t(51115),u=t(54636);const k=e=>((0,r.Qi)("data-v-467099ce"),e=e(),(0,r.jt)(),e),v=n+"#ic_arrow_hor",_=n+"#ic_user",m=n+"#ic_check",g={class:"page_container inner_page_container validators_page"},p={class:"cont"},L={class:"head"},R=k((()=>(0,r.Lk)("svg",{class:"icon"},[(0,r.Lk)("use",{"xlink:href":v})],-1))),f=[R],w={class:"page_title"},b={key:1,class:"validators"},h={key:0,class:"list"},x=["onClick"],y={class:"validator"},C={class:"logo"},$=["src"],V=k((()=>(0,r.Lk)("svg",{class:"icon"},[(0,r.Lk)("use",{"xlink:href":_})],-1))),F={class:"moniker"},N={class:"commission"},T={key:0,class:"staked"},A={class:"logo"},E=["src"],X={class:"apr"},W=k((()=>(0,r.Lk)("br",null,null,-1))),K={class:"check"},S={key:0},Q=k((()=>(0,r.Lk)("use",{"xlink:href":m},null,-1))),D=[Q],I={key:1,class:"empty"};var B={__name:"ValidatorsModal",props:["unstake","redelegate"],setup(e){const a=e,t=(0,i.o)(),n=(0,r.WQ)("emitter"),k=(0,l.KR)(!1),v=(0,l.KR)([]),_=(0,l.KR)([]);function m(e){return t.stakedBalances.find((a=>a.validator_info.operator_address===e))}function R(e){if(a.unstake){if(t.unstakeCurrentValidator&&t.unstakeCurrentValidator.operator_address===e)return!0}else if(a.redelegate){if("from"===a.redelegate){if(t.redelegateValidatorFrom&&t.redelegateValidatorFrom.operator_address===e)return!0}else if(t.redelegateValidatorTo&&t.redelegateValidatorTo.operator_address===e)return!0}else if(t.stakeCurrentValidator&&t.stakeCurrentValidator.operator_address===e)return!0}function Q(e){a.unstake?t.unstakeCurrentValidator=e:a.redelegate?"from"===a.redelegate?(t.redelegateValidatorFrom=e,t.redelegateValidatorFrom.operator_address===t.redelegateValidatorTo?.operator_address&&(t.redelegateValidatorTo=null)):t.redelegateValidatorTo=e:t.stakeCurrentValidator=e,n.emit("close_validators_modal")}return(0,r.KC)((async()=>{a.unstake?v.value=(await t.getUserValidators()).validators:a.redelegate?"from"===a.redelegate?v.value=(await t.getUserValidators()).validators:v.value=(await t.getAllValidators()).validators.filter((e=>e.operator_address!==t.redelegateValidatorFrom?.operator_address)):v.value=(await t.getAllValidators()).validators,v.value.sort(((e,a)=>parseInt(e.tokens)>parseInt(a.tokens)?-1:parseInt(e.tokens)<parseInt(a.tokens)?1:0)),_.value=v.value,k.value=!0})),n.on("search",(({query:e,source:a})=>{if("validators"===a){_.value=[];for(let a in v.value)v.value[a].description.moniker.toLocaleLowerCase().includes(e.toLocaleLowerCase())&&_.value.push(v.value[a])}})),(e,a)=>((0,r.uX)(),(0,r.CE)("section",g,[(0,r.Lk)("div",p,[(0,r.Lk)("div",L,[(0,r.Lk)("button",{class:"back_btn",onClick:a[0]||(a[0]=e=>(0,l.R1)(n).emit("close_validators_modal"))},f),(0,r.Lk)("div",w,(0,o.v_)(e.$t("message.validators_page_title")),1)]),(0,r.bF)(u.A,{source:"validators"}),k.value?((0,r.uX)(),(0,r.CE)("div",b,[_.value.length?((0,r.uX)(),(0,r.CE)("div",h,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(_.value,((n,i)=>((0,r.uX)(),(0,r.CE)("div",{class:"item",key:i},[(0,r.Lk)("div",{class:(0,o.C4)(["validator_wrap",{current:R(n.operator_address)}]),onClick:(0,s.D$)((e=>Q(n)),["prevent"])},[(0,r.Lk)("div",y,[(0,r.Lk)("div",C,[(0,r.Lk)("img",{src:`https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].prefix}/moniker/${n.operator_address}.png`,alt:"",loading:"lazy",onError:a[1]||(a[1]=e=>(0,l.R1)(c.on)(e))},null,40,$),V]),(0,r.Lk)("div",null,[(0,r.Lk)("div",F,(0,o.v_)(n.description.moniker),1),(0,r.Lk)("div",N,(0,o.v_)((100*n.commission.commission_rates.rate).toLocaleString("ru-RU",{maximumFractionDigits:2}).replace(",","."))+"% ",1),(e.item=m(n.operator_address))?((0,r.uX)(),(0,r.CE)("div",T,[(0,r.eW)((0,o.v_)(e.$t("message.validatoes_staked_label"))+" "+(0,o.v_)((0,l.R1)(c.NJ)(e.item.balance.amount,(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].exponent).toLocaleString("ru-RU",{maximumFractionDigits:7}).replace(",","."))+" ",1),(0,r.Lk)("div",A,[(0,r.Lk)("img",{src:(0,l.R1)(c.oB)((0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].chain_id),alt:""},null,8,E)])])):(0,r.Q3)("",!0)]),(0,r.Lk)("div",X,[(0,r.Lk)("span",null,[(0,r.eW)((0,o.v_)(e.$t("message.stake_APR_label")),1),W,(0,r.eW)(" "+(0,o.v_)((100*(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].APR-100*(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].APR*n.commission.commission_rates.rate).toFixed(2))+"%",1)])]),(0,r.Lk)("div",K,[R(n.operator_address)?((0,r.uX)(),(0,r.CE)("svg",S,D)):(0,r.Q3)("",!0)])])],10,x)])))),128))])):((0,r.uX)(),(0,r.CE)("div",I,(0,o.v_)(e.$t("message.search_empty_validator")),1))])):((0,r.uX)(),(0,r.Wv)(d.A,{key:0}))])]))}},U=t(71241);const J=(0,U.A)(B,[["__scopeId","data-v-467099ce"]]);var M=J},63354:function(e,a,t){t.r(a),t.d(a,{default:function(){return Oe}});var r=t(56768),l=t(24232),o=t(90144),s=t(45130),n=t(24113),i=t(76750),c=t(61981),d=t(68515),u=t(2736),k=t(7718),v=(t(44114),t(81387)),_=t(67278),m=t(51115),g=t(29234);const p=e=>((0,r.Qi)("data-v-151e6081"),e=e(),(0,r.jt)(),e),L=n+"#ic_arrow_hor",R=n+"#ic_user",f={class:"page_container inner_page_container redelegate_confirm"},w={class:"cont"},b={class:"head"},h=p((()=>(0,r.Lk)("svg",{class:"icon"},[(0,r.Lk)("use",{"xlink:href":L})],-1))),x=[h],y={class:"page_title"},C={class:"data"},$={class:"field_label"},V={class:"info_wrap"},F={class:"info"},N={class:"features"},T={class:"label"},A={class:"val"},E=["src"],X={class:"label"},W={class:"val"},K={class:"currency"},S={class:"label"},Q={class:"val"},D={class:"moniker"},I={class:"logo"},B=["src"],U=p((()=>(0,r.Lk)("svg",{class:"icon"},[(0,r.Lk)("use",{"xlink:href":R})],-1))),J={class:"label"},M={class:"val"},j={class:"moniker"},q={class:"logo"},z=["src"],P=p((()=>(0,r.Lk)("svg",{class:"icon"},[(0,r.Lk)("use",{"xlink:href":R})],-1))),Y={class:"label"},H={class:"val"},G={class:"memo"},O={class:"field_label"},Z={class:"field"},ee={class:"btns"};var ae={__name:"RedelegateConfirmModal",props:["amount","msgAny"],setup(e){const a=e,t=(0,i.o)(),n=(0,v.rd)(),d=(0,r.WQ)("emitter"),u=(0,r.WQ)("i18n"),k=(0,_.hN)(),p=(0,o.KR)(!1),L=(0,o.KR)(""),R=(0,r.EW)((()=>(0,c.NJ)(t.TxFee.userGasAmount*t.TxFee[`${t.TxFee.currentLevel}Price`],t.TxFee.balance.exponent))),h=(0,o.KR)(!1);async function ae(){h.value=!0;try{t.TxFee.isRemember&&await t.updateTxFeeInfo();let e=await(0,c.qS)(a.msgAny,L.value);k.notify({group:"default",clean:!0}),k.notify({group:"default",speed:200,duration:-100,title:u.global.t("message.notification_tx_pending_title"),type:"pending",data:{explorer_link:(0,c.aS)(t.currentNetwork)}}),(0,c.nw)(e).catch((e=>{console.log(e),te(e)})),t.checkTxResult(),n.push("/account")}catch(e){console.log(e),te(e)}}function te(e){h.value=!1;let a="";a=e.code?u.global.t(`message.notification_tx_error_${e.code}`):u.global.t("message.notification_tx_error_rejected"),k.notify({group:"default",clean:!0}),k.notify({group:"default",speed:200,duration:6e3,title:u.global.t("message.notification_tx_error_title"),text:a,type:"error"}),t.networks[t.currentNetwork].currentTxHash=null,t.resetTxFee()}return(0,r.hi)((()=>{d.off("auth"),d.off("close_sign_tx_modal")})),d.on("auth",(()=>{p.value=!1,ae()})),d.on("close_sign_tx_modal",(()=>{p.value=!1})),(e,n)=>((0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("section",f,[h.value?((0,r.uX)(),(0,r.Wv)(m.A,{key:0})):(0,r.Q3)("",!0),(0,r.Lk)("div",w,[(0,r.Lk)("div",b,[(0,r.Lk)("button",{class:"back_btn",onClick:n[0]||(n[0]=e=>(0,o.R1)(d).emit("close_redelegate_confirm_modal"))},x),(0,r.Lk)("div",y,(0,l.v_)(e.$t("message.redelegate_confirm_page_title")),1)]),(0,r.Lk)("div",C,[(0,r.Lk)("div",$,(0,l.v_)(e.$t("message.details_label")),1),(0,r.Lk)("div",V,[(0,r.Lk)("div",F,[(0,r.Lk)("div",N,[(0,r.Lk)("div",null,[(0,r.Lk)("div",T,(0,l.v_)(e.$t("message.redelegate_confirm_token_label")),1),(0,r.Lk)("div",A,[(0,r.Lk)("img",{src:(0,o.R1)(c.oB)((0,o.R1)(t).networks[(0,o.R1)(t).currentNetwork].chain_id),alt:""},null,8,E),(0,r.Lk)("span",null,(0,l.v_)((0,o.R1)(t).networks[(0,o.R1)(t).currentNetwork].token_name),1)])]),(0,r.Lk)("div",null,[(0,r.Lk)("div",X,(0,l.v_)(e.$t("message.redelegate_confirm_amount_label")),1),(0,r.Lk)("div",W,[(0,r.eW)((0,l.v_)(a.amount)+" "+(0,l.v_)((0,o.R1)(t).networks[(0,o.R1)(t).currentNetwork].token_name)+" ",1),(0,r.Lk)("span",K," ("+(0,l.v_)((0,o.R1)(c.ST)((0,o.R1)(c.Yq)(a.amount,(0,o.R1)(t).networks[(0,o.R1)(t).currentNetwork].token_name)))+(0,l.v_)((0,o.R1)(t).currentCurrencySymbol)+") ",1)])]),(0,r.Lk)("div",null,[(0,r.Lk)("div",S,(0,l.v_)(e.$t("message.redelegate_validator_from_label")),1),(0,r.Lk)("div",Q,[(0,r.Lk)("span",D,(0,l.v_)((0,o.R1)(t).redelegateValidatorFrom.description.moniker),1),(0,r.Lk)("div",I,[(0,r.Lk)("img",{src:`https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${(0,o.R1)(t).networks[(0,o.R1)(t).currentNetwork].prefix}/moniker/${(0,o.R1)(t).redelegateValidatorFrom.operator_address}.png`,alt:"",loading:"lazy",onError:n[1]||(n[1]=e=>(0,o.R1)(c.on)(e))},null,40,B),U])])]),(0,r.Lk)("div",null,[(0,r.Lk)("div",J,(0,l.v_)(e.$t("message.redelegate_validator_to_label")),1),(0,r.Lk)("div",M,[(0,r.Lk)("span",j,(0,l.v_)((0,o.R1)(t).redelegateValidatorTo.description.moniker),1),(0,r.Lk)("div",q,[(0,r.Lk)("img",{src:`https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${(0,o.R1)(t).networks[(0,o.R1)(t).currentNetwork].prefix}/moniker/${(0,o.R1)(t).redelegateValidatorTo.operator_address}.png`,alt:"",loading:"lazy",onError:n[2]||(n[2]=e=>(0,o.R1)(c.on)(e))},null,40,z),P])])]),(0,r.Lk)("div",null,[(0,r.Lk)("div",Y,(0,l.v_)(e.$t("message.stake_confirm_fee_label")),1),(0,r.Lk)("div",H,(0,l.v_)(R.value.toLocaleString("ru-RU",{maximumFractionDigits:5}).replace(",","."))+" "+(0,l.v_)((0,o.R1)(t).networks[(0,o.R1)(t).currentNetwork].token_name),1)])])])])]),(0,r.Lk)("div",G,[(0,r.Lk)("div",O,(0,l.v_)(e.$t("message.memo_label")),1),(0,r.Lk)("div",Z,[(0,r.bo)((0,r.Lk)("input",{type:"text",class:"input big","onUpdate:modelValue":n[3]||(n[3]=e=>L.value=e),onFocus:n[4]||(n[4]=e=>(0,o.R1)(d).emit("show_keyboard")),onBlur:n[5]||(n[5]=e=>(0,o.R1)(d).emit("hide_keyboard"))},null,544),[[s.Jo,L.value]])])]),(0,r.Lk)("div",ee,[(0,r.Lk)("button",{class:"btn",onClick:n[6]||(n[6]=(0,s.D$)((e=>p.value=!0),["prevent"]))},[(0,r.Lk)("span",null,(0,l.v_)(e.$t("message.btn_confirm_redelegate")),1)])])])]),p.value?((0,r.uX)(),(0,r.Wv)(g.A,{key:0})):(0,r.Q3)("",!0)],64))}},te=t(71241);const re=(0,te.A)(ae,[["__scopeId","data-v-151e6081"]]);var le=re;const oe=e=>((0,r.Qi)("data-v-b32c0418"),e=e(),(0,r.jt)(),e),se=n+"#ic_arrow_hor",ne=n+"#ic_arr_ver2",ie=n+"#ic_user",ce=n+"#ic_arrow_ver",de={class:"page_container inner_page_container redelegate"},ue={class:"cont"},ke={class:"head"},ve=oe((()=>(0,r.Lk)("svg",{class:"icon"},[(0,r.Lk)("use",{"xlink:href":se})],-1))),_e={class:"page_title"},me={class:"validator_info from"},ge={class:"field_label"},pe={class:"info"},Le={class:"placeholder"},Re=oe((()=>(0,r.Lk)("svg",{class:"arr"},[(0,r.Lk)("use",{"xlink:href":ne})],-1))),fe={class:"validator"},we={class:"logo"},be=["src"],he=oe((()=>(0,r.Lk)("svg",{class:"icon"},[(0,r.Lk)("use",{"xlink:href":ie})],-1))),xe={class:"moniker"},ye=oe((()=>(0,r.Lk)("svg",{class:"arr"},[(0,r.Lk)("use",{"xlink:href":ne})],-1))),Ce={class:"staked"},$e={class:"label"},Ve={class:"amount"},Fe={class:"cost"},Ne=oe((()=>(0,r.Lk)("div",{class:"arrow_wrap"},[(0,r.Lk)("div",{class:"arrow"},[(0,r.Lk)("svg",null,[(0,r.Lk)("use",{"xlink:href":ce})])])],-1))),Te={class:"validator_info to"},Ae={class:"field_label"},Ee={class:"info"},Xe={class:"placeholder"},We=oe((()=>(0,r.Lk)("svg",{class:"arr"},[(0,r.Lk)("use",{"xlink:href":ne})],-1))),Ke={class:"validator"},Se={class:"logo"},Qe=["src"],De=oe((()=>(0,r.Lk)("svg",{class:"icon"},[(0,r.Lk)("use",{"xlink:href":ie})],-1))),Ie={class:"moniker"},Be=oe((()=>(0,r.Lk)("svg",{class:"arr"},[(0,r.Lk)("use",{"xlink:href":ne})],-1))),Ue={class:"staked"},Je={class:"label"},Me={class:"amount"},je={class:"cost"},qe={class:"field_label"},ze={class:"cost"},Pe={class:"field"},Ye={class:"btns"};var He={__name:"Redelegate",setup(e){const a=(0,i.o)(),t=(0,r.WQ)("emitter"),n=(0,o.KR)(!1),v=(0,o.KR)(!1),_=(0,o.KR)(!1),m=(0,o.KR)([]),g=(0,o.KR)(""),p=(0,o.KR)(0),L=(0,o.KR)(!1),R=(0,o.KR)((0,r.EW)((()=>L.value&&!!a.redelegateValidatorFrom&&!!a.redelegateValidatorTo))),f=(0,r.EW)((()=>{let e=x(a.redelegateValidatorFrom?.operator_address);return e||{balance:{amount:0}}})),w=(0,r.EW)((()=>{let e=x(a.redelegateValidatorTo?.operator_address);return e||{balance:{amount:0}}}));function b(){L.value=!1,setTimeout((()=>{g.value=(0,c.NJ)(p.value,a.networks[a.currentNetwork].exponent),L.value=!0}))}function h(e){L.value=!1,setTimeout((()=>{e.target.value.length&&e.target.value<=0&&(g.value=""),e.target.value.length&&e.target.value>0&&e.target.value<(0,c.NJ)(p.value,a.networks[a.currentNetwork].exponent)&&(L.value=!0),e.target.value>(0,c.NJ)(p.value,a.networks[a.currentNetwork].exponent)&&b()}))}function x(e){return a.stakedBalances.find((a=>a.validator_info.operator_address===e))}return(0,r.KC)((()=>{a.redelegateValidatorFrom=null,a.redelegateValidatorTo=null})),(0,r.hi)((()=>{a.redelegateValidatorFrom=null,a.redelegateValidatorTo=null,t.off("close_redelegate_confirm_modal"),t.off("close_validators_modal")})),(0,r.wB)((0,r.EW)((()=>a.redelegateValidatorFrom)),(()=>{p.value=x(a.redelegateValidatorFrom.operator_address).balance.amount})),(0,r.wB)((0,r.EW)((()=>R.value)),(()=>{R.value&&(m.value=[{typeUrl:"/cosmos.staking.v1beta1.MsgBeginRedelegate",value:d.MsgBeginRedelegate.fromPartial({delegatorAddress:a.currentAddress,validatorSrcAddress:a.redelegateValidatorFrom.operator_address,validatorDstAddress:a.redelegateValidatorTo.operator_address,amount:{denom:a.networks[a.currentNetwork].denom,amount:""+parseFloat(g.value.toString().replace(",",".")).toFixed(a.networks[a.currentNetwork].exponent)*Math.pow(10,a.networks[a.currentNetwork].exponent)}})}])})),t.on("close_validators_modal",(()=>{n.value=!1,v.value=!1})),t.on("close_redelegate_confirm_modal",(()=>{_.value=!1})),(e,i)=>{const d=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("section",de,[(0,r.Lk)("div",ue,[(0,r.Lk)("div",ke,[(0,r.bF)(d,{to:"/account?activeSlide=1",class:"back_btn"},{default:(0,r.k6)((()=>[ve])),_:1}),(0,r.Lk)("div",_e,(0,l.v_)(e.$t("message.redelegate_page_title")),1)]),(0,r.Lk)("div",me,[(0,r.Lk)("div",ge,(0,l.v_)(e.$t("message.redelegate_validator_from_label")),1),(0,o.R1)(a).redelegateValidatorFrom?((0,r.uX)(),(0,r.CE)("div",{key:1,class:"validator_wrap",onClick:i[2]||(i[2]=(0,s.D$)((e=>n.value=!0),["prevent"]))},[(0,r.Lk)("div",fe,[(0,r.Lk)("div",we,[(0,r.Lk)("img",{src:`https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${(0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].prefix}/moniker/${(0,o.R1)(a).redelegateValidatorFrom.operator_address}.png`,alt:"",loading:"lazy",onError:i[1]||(i[1]=e=>(0,o.R1)(c.on)(e))},null,40,be),he]),(0,r.Lk)("div",null,[(0,r.Lk)("div",xe,(0,l.v_)((0,o.R1)(a).redelegateValidatorFrom.description.moniker),1)]),ye])])):((0,r.uX)(),(0,r.CE)("div",{key:0,class:"info_wrap",onClick:i[0]||(i[0]=(0,s.D$)((e=>n.value=!0),["prevent"]))},[(0,r.Lk)("div",pe,[(0,r.Lk)("div",Le,(0,l.v_)(e.$t("message.stake_validator_placeholder")),1),Re])])),(0,r.Lk)("div",Ce,[(0,r.Lk)("div",$e,(0,l.v_)(e.$t("message.validatoes_staked_label")),1),(0,r.Lk)("div",Ve,[(0,r.eW)((0,l.v_)((0,o.R1)(c.NJ)(f.value.balance.amount,(0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].exponent).toLocaleString("ru-RU",{maximumFractionDigits:7}).replace(",","."))+" ",1),(0,r.Lk)("span",null,(0,l.v_)((0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].token_name),1)]),(0,r.Lk)("div",Fe,(0,l.v_)((0,o.R1)(c.ST)((0,o.R1)(c.Y$)((0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].token_name,f.value.balance.amount,(0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].exponent)))+" "+(0,l.v_)((0,o.R1)(a).currentCurrencySymbol),1)])]),Ne,(0,r.Lk)("div",Te,[(0,r.Lk)("div",Ae,(0,l.v_)(e.$t("message.redelegate_validator_to_label")),1),(0,o.R1)(a).redelegateValidatorTo?((0,r.uX)(),(0,r.CE)("div",{key:1,class:"validator_wrap",onClick:i[5]||(i[5]=(0,s.D$)((e=>v.value=!0),["prevent"]))},[(0,r.Lk)("div",Ke,[(0,r.Lk)("div",Se,[(0,r.Lk)("img",{src:`https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${(0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].prefix}/moniker/${(0,o.R1)(a).redelegateValidatorTo.operator_address}.png`,alt:"",loading:"lazy",onError:i[4]||(i[4]=e=>(0,o.R1)(c.on)(e))},null,40,Qe),De]),(0,r.Lk)("div",null,[(0,r.Lk)("div",Ie,(0,l.v_)((0,o.R1)(a).redelegateValidatorTo.description.moniker),1)]),Be])])):((0,r.uX)(),(0,r.CE)("div",{key:0,class:"info_wrap",onClick:i[3]||(i[3]=(0,s.D$)((e=>v.value=!0),["prevent"]))},[(0,r.Lk)("div",Ee,[(0,r.Lk)("div",Xe,(0,l.v_)(e.$t("message.stake_validator_placeholder")),1),We])])),(0,r.Lk)("div",Ue,[(0,r.Lk)("div",Je,(0,l.v_)(e.$t("message.validatoes_staked_label")),1),(0,r.Lk)("div",Me,[(0,r.eW)((0,l.v_)((0,o.R1)(c.NJ)(w.value.balance.amount,(0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].exponent).toLocaleString("ru-RU",{maximumFractionDigits:7}).replace(",","."))+" ",1),(0,r.Lk)("span",null,(0,l.v_)((0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].token_name),1)]),(0,r.Lk)("div",je,(0,l.v_)((0,o.R1)(c.ST)((0,o.R1)(c.Y$)((0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].token_name,w.value.balance.amount,(0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].exponent)))+" "+(0,l.v_)((0,o.R1)(a).currentCurrencySymbol),1)])]),(0,r.Lk)("div",{class:(0,l.C4)(["amount_field",{disabled:!(0,o.R1)(a).redelegateValidatorFrom}])},[(0,r.Lk)("div",qe,[(0,r.eW)((0,l.v_)(e.$t("message.stake_amount_label"))+" ",1),(0,r.Lk)("div",ze,(0,l.v_)((0,o.R1)(c.ST)((0,o.R1)(c.Y$)((0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].token_name,g.value*Math.pow(10,(0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].exponent),(0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].exponent)))+" "+(0,l.v_)((0,o.R1)(a).currentCurrencySymbol),1)]),(0,r.Lk)("div",Pe,[(0,r.bo)((0,r.Lk)("input",{type:"number",inputmode:"numeric",class:"input big","onUpdate:modelValue":i[6]||(i[6]=e=>g.value=e),placeholder:"0.00",onFocus:i[7]||(i[7]=e=>(0,o.R1)(t).emit("show_keyboard")),onBlur:i[8]||(i[8]=e=>(0,o.R1)(t).emit("hide_keyboard")),onInput:i[9]||(i[9]=e=>h(e))},null,544),[[s.Jo,g.value]]),(0,r.Lk)("button",{type:"button",class:"max_btn",onClick:(0,s.D$)(b,["prevent"])},(0,l.v_)(e.$t("message.btn_MAX")),1)])],2),R.value?((0,r.uX)(),(0,r.Wv)(u.A,{key:0,msgAny:m.value,txType:"redelegate"},null,8,["msgAny"])):(0,r.Q3)("",!0),(0,r.Lk)("div",Ye,[(0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].currentTxHash?((0,r.uX)(),(0,r.CE)("button",{key:1,class:"btn waiting_btn",onClick:i[11]||(i[11]=(0,s.D$)((e=>(0,o.R1)(t).emit("show_pending_notification")),["prevent"]))},[(0,r.Lk)("span",null,(0,l.v_)(e.$t("message.btn_waiting_tx")),1)])):((0,r.uX)(),(0,r.CE)("button",{key:0,class:(0,l.C4)(["btn",{disabled:!(0,o.R1)(a).TxFee.isEnough}]),onClick:i[10]||(i[10]=(0,s.D$)((e=>_.value=!0),["prevent"]))},[(0,r.Lk)("span",null,(0,l.v_)(e.$t("message.btn_redelegate")),1)],2))])])]),n.value?((0,r.uX)(),(0,r.Wv)(k.A,{key:0,redelegate:"from"})):(0,r.Q3)("",!0),v.value?((0,r.uX)(),(0,r.Wv)(k.A,{key:1,redelegate:"to"})):(0,r.Q3)("",!0),_.value?((0,r.uX)(),(0,r.Wv)(le,{key:2,amount:g.value,msgAny:m.value},null,8,["amount","msgAny"])):(0,r.Q3)("",!0)],64)}}};const Ge=(0,te.A)(He,[["__scopeId","data-v-b32c0418"]]);var Oe=Ge}}]);
//# sourceMappingURL=596.a4ce1919.js.map