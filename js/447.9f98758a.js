"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[447],{54636:function(e,a,t){t.d(a,{A:function(){return w}});var r=t(56768),l=t(45130),o=t(24113),s=t(90144);const n=e=>((0,r.Qi)("data-v-33f4e966"),e=e(),(0,r.jt)(),e),i=o+"#ic_arrow_hor",c=o+"#ic_search",d=o+"#ic_close",u={class:"search"},k=n((()=>(0,r.Lk)("span",null,[(0,r.Lk)("svg",null,[(0,r.Lk)("use",{"xlink:href":i})])],-1))),v=[k],_={class:"field"},m=n((()=>(0,r.Lk)("svg",{class:"icon"},[(0,r.Lk)("use",{"xlink:href":c})],-1))),g=["placeholder"],p=n((()=>(0,r.Lk)("svg",null,[(0,r.Lk)("use",{"xlink:href":d})],-1))),L=[p];var f={__name:"Search",props:["source"],setup(e){const a=e,t=(0,r.WQ)("emitter"),o=(0,s.KR)("");function n(){t.emit("show_keyboard"),setTimeout((()=>t.emit("search_focus")),100)}function i(){t.emit("hide_keyboard"),setTimeout((()=>t.emit("search_blur")),100)}function c(){t.emit("search",{query:o.value,source:a.source})}function d(){o.value="",t.emit("search",{query:o.value,source:a.source})}return(e,a)=>((0,r.uX)(),(0,r.CE)("div",u,[(0,r.Lk)("button",{class:"back_btn",onClick:(0,l.D$)(i,["prevent"])},v),(0,r.Lk)("div",_,[m,(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>o.value=e),class:"input",placeholder:e.$t("message.search_placeholder"),onFocus:n,onBlur:i,onInput:c},null,40,g),[[l.Jo,o.value]]),o.value.length?((0,r.uX)(),(0,r.CE)("button",{key:0,class:"clear_btn",onClick:a[1]||(a[1]=(0,l.D$)((e=>d()),["prevent"]))},L)):(0,r.Q3)("",!0)])]))}},R=t(71241);const b=(0,R.A)(f,[["__scopeId","data-v-33f4e966"]]);var w=b},68578:function(e,a,t){t.d(a,{A:function(){return J}});t(44114);var r=t(56768),l=t(90144),o=t(24232),s=t(45130),n=t(24113),i=t(76750),c=t(61981),d=t(17086),u=t(54636);const k=e=>((0,r.Qi)("data-v-0b1415bc"),e=e(),(0,r.jt)(),e),v=n+"#ic_arrow_hor",_=n+"#ic_user",m=n+"#ic_check",g={class:"page_container inner_page_container validators_page"},p={class:"cont"},L={class:"head"},f=k((()=>(0,r.Lk)("svg",{class:"icon"},[(0,r.Lk)("use",{"xlink:href":v})],-1))),R=[f],b={class:"page_title"},w={key:1,class:"validators"},h={key:0,class:"list"},y=["onClick"],x={class:"validator"},C={class:"logo"},$=["src"],F=k((()=>(0,r.Lk)("svg",{class:"icon"},[(0,r.Lk)("use",{"xlink:href":_})],-1))),V={class:"moniker"},N={class:"commission"},T={key:0,class:"staked"},A={class:"logo"},E=["src"],X={class:"apr"},W=k((()=>(0,r.Lk)("br",null,null,-1))),K={class:"check"},Q={key:0},S=k((()=>(0,r.Lk)("use",{"xlink:href":m},null,-1))),D=[S],B={key:1,class:"empty"};var I={__name:"ValidatorsModal",props:["unstake","redelegate"],setup(e){const a=e,t=(0,i.o)(),n=(0,r.WQ)("emitter"),k=(0,l.KR)(!1),v=(0,l.KR)([]),_=(0,l.KR)([]);function m(e){return t.stakedBalances.find((a=>a.validator_info.operator_address===e))}function f(e){if(a.unstake){if(t.unstakeCurrentValidator&&t.unstakeCurrentValidator.operator_address===e)return!0}else if(a.redelegate){if("from"===a.redelegate){if(t.redelegateValidatorFrom&&t.redelegateValidatorFrom.operator_address===e)return!0}else if(t.redelegateValidatorTo&&t.redelegateValidatorTo.operator_address===e)return!0}else if(t.stakeCurrentValidator&&t.stakeCurrentValidator.operator_address===e)return!0}function S(e){a.unstake?t.unstakeCurrentValidator=e:a.redelegate?"from"===a.redelegate?(t.redelegateValidatorFrom=e,t.redelegateValidatorFrom.operator_address===t.redelegateValidatorTo?.operator_address&&(t.redelegateValidatorTo=null)):t.redelegateValidatorTo=e:t.stakeCurrentValidator=e,n.emit("close_validators_modal")}return(0,r.KC)((async()=>{a.unstake?v.value=(await t.getUserValidators()).validators:a.redelegate?"from"===a.redelegate?v.value=(await t.getUserValidators()).validators:v.value=(await t.getAllValidators()).validators.filter((e=>e.operator_address!==t.redelegateValidatorFrom?.operator_address)):v.value=(await t.getAllValidators()).validators,v.value.sort(((e,a)=>parseInt(e.tokens)>parseInt(a.tokens)?-1:parseInt(e.tokens)<parseInt(a.tokens)?1:0)),_.value=v.value,k.value=!0})),n.on("search",(({query:e,source:a})=>{if("validators"===a){_.value=[];for(let a in v.value)v.value[a].description.moniker.toLocaleLowerCase().includes(e.toLocaleLowerCase())&&_.value.push(v.value[a])}})),(e,a)=>((0,r.uX)(),(0,r.CE)("section",g,[(0,r.Lk)("div",p,[(0,r.Lk)("div",L,[(0,r.Lk)("button",{class:"back_btn",onClick:a[0]||(a[0]=e=>(0,l.R1)(n).emit("close_validators_modal"))},R),(0,r.Lk)("div",b,(0,o.v_)(e.$t("message.validators_page_title")),1)]),(0,r.bF)(u.A,{source:"validators"}),k.value?((0,r.uX)(),(0,r.CE)("div",w,[_.value.length?((0,r.uX)(),(0,r.CE)("div",h,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(_.value,((n,i)=>((0,r.uX)(),(0,r.CE)("div",{class:"item",key:i},[(0,r.Lk)("div",{class:(0,o.C4)(["validator_wrap",{current:f(n.operator_address)}]),onClick:(0,s.D$)((e=>S(n)),["prevent"])},[(0,r.Lk)("div",x,[(0,r.Lk)("div",C,[(0,r.Lk)("img",{src:`https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].prefix}/moniker/${n.operator_address}.png`,alt:"",loading:"lazy",onError:a[1]||(a[1]=e=>(0,l.R1)(c.on)(e))},null,40,$),F]),(0,r.Lk)("div",null,[(0,r.Lk)("div",V,(0,o.v_)(n.description.moniker),1),(0,r.Lk)("div",N,(0,o.v_)((100*n.commission.commission_rates.rate).toLocaleString("ru-RU",{maximumFractionDigits:2}).replace(",","."))+"% ",1),(e.item=m(n.operator_address))?((0,r.uX)(),(0,r.CE)("div",T,[(0,r.eW)((0,o.v_)(e.$t("message.validatoes_staked_label"))+" "+(0,o.v_)((0,l.R1)(c.NJ)(e.item.balance.amount,(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].exponent).toLocaleString("ru-RU",{maximumFractionDigits:7}).replace(",","."))+" ",1),(0,r.Lk)("div",A,[(0,r.Lk)("img",{src:(0,l.R1)(c.oB)((0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].chain_id),alt:""},null,8,E)])])):(0,r.Q3)("",!0)]),(0,r.Lk)("div",X,[(0,r.Lk)("span",null,[(0,r.eW)((0,o.v_)(e.$t("message.stake_APR_label")),1),W,(0,r.eW)(" "+(0,o.v_)((100*(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].APR-100*(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].APR*n.commission.commission_rates.rate).toFixed(2))+"% ",1)])]),(0,r.Lk)("div",K,[f(n.operator_address)?((0,r.uX)(),(0,r.CE)("svg",Q,D)):(0,r.Q3)("",!0)])])],10,y)])))),128))])):((0,r.uX)(),(0,r.CE)("div",B,(0,o.v_)(e.$t("message.search_empty_validator")),1))])):((0,r.uX)(),(0,r.Wv)(d.A,{key:0}))])]))}},M=t(71241);const U=(0,M.A)(I,[["__scopeId","data-v-0b1415bc"]]);var J=U},9869:function(e,a,t){t.r(a),t.d(a,{default:function(){return Ge}});var r=t(56768),l=t(24232),o=t(90144),s=t(45130),n=t(24113),i=t(76750),c=t(61981),d=t(68515),u=t(78101),k=t(68578),v=(t(44114),t(81387)),_=t(67278),m=t(17086),g=t(21634);const p=e=>((0,r.Qi)("data-v-6ddddee0"),e=e(),(0,r.jt)(),e),L=n+"#ic_arrow_hor",f=n+"#ic_user",R={class:"page_container inner_page_container redelegate_confirm"},b={class:"cont"},w={class:"head"},h=p((()=>(0,r.Lk)("svg",{class:"icon"},[(0,r.Lk)("use",{"xlink:href":L})],-1))),y=[h],x={class:"page_title"},C={class:"data"},$={class:"field_label"},F={class:"info_wrap"},V={class:"info"},N={class:"features"},T={class:"label"},A={class:"val"},E=["src"],X={class:"label"},W={class:"val"},K={class:"currency"},Q={class:"label"},S={class:"val"},D={class:"moniker"},B={class:"logo"},I=["src"],M=p((()=>(0,r.Lk)("svg",{class:"icon"},[(0,r.Lk)("use",{"xlink:href":f})],-1))),U={class:"label"},J={class:"val"},j={class:"moniker"},q={class:"logo"},z=["src"],P=p((()=>(0,r.Lk)("svg",{class:"icon"},[(0,r.Lk)("use",{"xlink:href":f})],-1))),O={class:"label"},Y={class:"val"},H={class:"memo"},G={class:"field_label"},Z={class:"field"},ee={class:"btns"};var ae={__name:"RedelegateConfirmModal",props:["amount","msgAny"],setup(e){const a=e,t=(0,i.o)(),n=(0,v.rd)(),d=(0,r.WQ)("emitter"),u=(0,r.WQ)("i18n"),k=(0,_.hN)(),p=(0,o.KR)(!1),L=(0,o.KR)(""),f=(0,r.EW)((()=>(0,c.NJ)(t.TxFee.userGasAmount*t.TxFee[`${t.TxFee.currentLevel}Price`],t.TxFee.balance.exponent))),h=(0,o.KR)(!1);async function ae(){h.value=!0;try{t.TxFee.isRemember&&await t.updateTxFeeInfo();let e=await(0,c.qS)(a.msgAny,L.value);k.notify({group:"default",clean:!0}),k.notify({group:"default",speed:200,duration:-100,title:u.global.t("message.notification_tx_pending_title"),type:"pending",data:{isCollapsible:!0,explorer_link:(0,c.aS)(t.currentNetwork)}}),(0,c.nw)(e).catch((e=>{console.log(e),te(e)})),t.checkTxResult(),n.push("/account")}catch(e){console.log(e),te(e)}}function te(e){h.value=!1;let a="";a=e.code?u.global.t(`message.notification_tx_error_${e.code}`):u.global.t("message.notification_tx_error_rejected"),k.notify({group:"default",clean:!0}),k.notify({group:"default",speed:200,duration:6e3,title:u.global.t("message.notification_tx_error_title"),text:a,type:"error"}),t.networks[t.currentNetwork].currentTxHash=null,t.resetTxFee()}function re(){p.value=!0,t.isAnyModalOpen=!0}return(0,r.hi)((()=>{d.off("auth"),d.off("close_any_modal"),d.off("close_sign_tx_modal")})),d.on("auth",(()=>{p.value=!1,t.isAnyModalOpen=!1,ae()})),d.on("close_sign_tx_modal",(()=>{p.value=!1,t.isAnyModalOpen=!1})),d.on("close_any_modal",(()=>{p.value=!1,t.isAnyModalOpen=!1})),(e,n)=>((0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("section",R,[h.value?((0,r.uX)(),(0,r.Wv)(m.A,{key:0})):(0,r.Q3)("",!0),(0,r.Lk)("div",b,[(0,r.Lk)("div",w,[(0,r.Lk)("button",{class:"back_btn",onClick:n[0]||(n[0]=e=>(0,o.R1)(d).emit("close_redelegate_confirm_modal"))},y),(0,r.Lk)("div",x,(0,l.v_)(e.$t("message.redelegate_confirm_page_title")),1)]),(0,r.Lk)("div",C,[(0,r.Lk)("div",$,(0,l.v_)(e.$t("message.details_label")),1),(0,r.Lk)("div",F,[(0,r.Lk)("div",V,[(0,r.Lk)("div",N,[(0,r.Lk)("div",null,[(0,r.Lk)("div",T,(0,l.v_)(e.$t("message.redelegate_confirm_token_label")),1),(0,r.Lk)("div",A,[(0,r.Lk)("img",{src:(0,o.R1)(c.oB)((0,o.R1)(t).networks[(0,o.R1)(t).currentNetwork].chain_id),alt:""},null,8,E),(0,r.Lk)("span",null,(0,l.v_)((0,o.R1)(t).networks[(0,o.R1)(t).currentNetwork].token_name),1)])]),(0,r.Lk)("div",null,[(0,r.Lk)("div",X,(0,l.v_)(e.$t("message.redelegate_confirm_amount_label")),1),(0,r.Lk)("div",W,[(0,r.eW)((0,l.v_)(a.amount)+" "+(0,l.v_)((0,o.R1)(t).networks[(0,o.R1)(t).currentNetwork].token_name)+" ",1),(0,r.Lk)("span",K," ("+(0,l.v_)((0,o.R1)(c.ST)((0,o.R1)(c.Yq)(a.amount,(0,o.R1)(t).networks[(0,o.R1)(t).currentNetwork].token_name)))+(0,l.v_)((0,o.R1)(t).currentCurrencySymbol)+") ",1)])]),(0,r.Lk)("div",null,[(0,r.Lk)("div",Q,(0,l.v_)(e.$t("message.redelegate_validator_from_label")),1),(0,r.Lk)("div",S,[(0,r.Lk)("span",D,(0,l.v_)((0,o.R1)(t).redelegateValidatorFrom.description.moniker),1),(0,r.Lk)("div",B,[(0,r.Lk)("img",{src:`https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${(0,o.R1)(t).networks[(0,o.R1)(t).currentNetwork].prefix}/moniker/${(0,o.R1)(t).redelegateValidatorFrom.operator_address}.png`,alt:"",loading:"lazy",onError:n[1]||(n[1]=e=>(0,o.R1)(c.on)(e))},null,40,I),M])])]),(0,r.Lk)("div",null,[(0,r.Lk)("div",U,(0,l.v_)(e.$t("message.redelegate_validator_to_label")),1),(0,r.Lk)("div",J,[(0,r.Lk)("span",j,(0,l.v_)((0,o.R1)(t).redelegateValidatorTo.description.moniker),1),(0,r.Lk)("div",q,[(0,r.Lk)("img",{src:`https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${(0,o.R1)(t).networks[(0,o.R1)(t).currentNetwork].prefix}/moniker/${(0,o.R1)(t).redelegateValidatorTo.operator_address}.png`,alt:"",loading:"lazy",onError:n[2]||(n[2]=e=>(0,o.R1)(c.on)(e))},null,40,z),P])])]),(0,r.Lk)("div",null,[(0,r.Lk)("div",O,(0,l.v_)(e.$t("message.stake_confirm_fee_label")),1),(0,r.Lk)("div",Y,(0,l.v_)(f.value.toLocaleString("ru-RU",{maximumFractionDigits:5}).replace(",","."))+" "+(0,l.v_)((0,o.R1)(t).networks[(0,o.R1)(t).currentNetwork].token_name),1)])])])])]),(0,r.Lk)("div",H,[(0,r.Lk)("div",G,(0,l.v_)(e.$t("message.memo_label")),1),(0,r.Lk)("div",Z,[(0,r.bo)((0,r.Lk)("input",{type:"text",class:"input big","onUpdate:modelValue":n[3]||(n[3]=e=>L.value=e),onFocus:n[4]||(n[4]=e=>(0,o.R1)(d).emit("show_keyboard")),onBlur:n[5]||(n[5]=e=>(0,o.R1)(d).emit("hide_keyboard"))},null,544),[[s.Jo,L.value]])])]),(0,r.Lk)("div",ee,[(0,r.Lk)("button",{class:"btn",onClick:n[6]||(n[6]=(0,s.D$)((e=>re()),["prevent"]))},[(0,r.Lk)("span",null,(0,l.v_)(e.$t("message.btn_confirm_redelegate")),1)])])])]),(0,r.bF)(s.eB,{name:"modal"},{default:(0,r.k6)((()=>[p.value?((0,r.uX)(),(0,r.Wv)(g.A,{key:0})):(0,r.Q3)("",!0)])),_:1}),(0,r.bF)(s.eB,{name:"fade"},{default:(0,r.k6)((()=>[p.value?((0,r.uX)(),(0,r.CE)("div",{key:0,class:"modal_overlay",onClick:n[7]||(n[7]=(0,s.D$)((e=>(0,o.R1)(d).emit("close_any_modal")),["prevent"]))})):(0,r.Q3)("",!0)])),_:1})],64))}},te=t(71241);const re=(0,te.A)(ae,[["__scopeId","data-v-6ddddee0"]]);var le=re;const oe=e=>((0,r.Qi)("data-v-e62edc56"),e=e(),(0,r.jt)(),e),se=n+"#ic_arrow_hor",ne=n+"#ic_arr_ver2",ie=n+"#ic_user",ce=n+"#ic_arrow_ver",de={class:"page_container inner_page_container redelegate"},ue={class:"cont"},ke={class:"head"},ve=oe((()=>(0,r.Lk)("svg",{class:"icon"},[(0,r.Lk)("use",{"xlink:href":se})],-1))),_e={class:"page_title"},me={class:"validator_info from"},ge={class:"field_label"},pe={class:"info"},Le={class:"placeholder"},fe=oe((()=>(0,r.Lk)("svg",{class:"arr"},[(0,r.Lk)("use",{"xlink:href":ne})],-1))),Re={class:"validator"},be={class:"logo"},we=["src"],he=oe((()=>(0,r.Lk)("svg",{class:"icon"},[(0,r.Lk)("use",{"xlink:href":ie})],-1))),ye={class:"moniker"},xe=oe((()=>(0,r.Lk)("svg",{class:"arr"},[(0,r.Lk)("use",{"xlink:href":ne})],-1))),Ce={class:"staked"},$e={class:"label"},Fe={class:"amount"},Ve={class:"cost"},Ne=oe((()=>(0,r.Lk)("div",{class:"arrow_wrap"},[(0,r.Lk)("div",{class:"arrow"},[(0,r.Lk)("svg",null,[(0,r.Lk)("use",{"xlink:href":ce})])])],-1))),Te={class:"validator_info to"},Ae={class:"field_label"},Ee={class:"info"},Xe={class:"placeholder"},We=oe((()=>(0,r.Lk)("svg",{class:"arr"},[(0,r.Lk)("use",{"xlink:href":ne})],-1))),Ke={class:"validator"},Qe={class:"logo"},Se=["src"],De=oe((()=>(0,r.Lk)("svg",{class:"icon"},[(0,r.Lk)("use",{"xlink:href":ie})],-1))),Be={class:"moniker"},Ie=oe((()=>(0,r.Lk)("svg",{class:"arr"},[(0,r.Lk)("use",{"xlink:href":ne})],-1))),Me={class:"staked"},Ue={class:"label"},Je={class:"amount"},je={class:"cost"},qe={class:"field_label"},ze={class:"cost"},Pe={class:"field"},Oe={class:"btns"};var Ye={__name:"Redelegate",setup(e){const a=(0,i.o)(),t=(0,r.WQ)("emitter"),n=(0,o.KR)(!1),v=(0,o.KR)(!1),_=(0,o.KR)(!1),m=(0,o.KR)([]),g=(0,o.KR)(""),p=(0,o.KR)(0),L=(0,o.KR)(!1),f=(0,o.KR)((0,r.EW)((()=>L.value&&!!a.redelegateValidatorFrom&&!!a.redelegateValidatorTo))),R=(0,r.EW)((()=>{let e=y(a.redelegateValidatorFrom?.operator_address);return e||{balance:{amount:0}}})),b=(0,r.EW)((()=>{let e=y(a.redelegateValidatorTo?.operator_address);return e||{balance:{amount:0}}}));function w(){L.value=!1,setTimeout((()=>{g.value=(0,c.NJ)(p.value,a.networks[a.currentNetwork].exponent),L.value=!0}))}function h(e){L.value=!1,setTimeout((()=>{e.target.value.length&&e.target.value<=0&&(g.value=""),e.target.value.length&&e.target.value>0&&e.target.value<(0,c.NJ)(p.value,a.networks[a.currentNetwork].exponent)&&(L.value=!0),e.target.value>(0,c.NJ)(p.value,a.networks[a.currentNetwork].exponent)&&w()}))}function y(e){return a.stakedBalances.find((a=>a.validator_info.operator_address===e))}function x(){n.value=!0}function C(){v.value=!0}return(0,r.KC)((()=>{a.redelegateValidatorFrom=null,a.redelegateValidatorTo=null})),(0,r.hi)((()=>{a.redelegateValidatorFrom=null,a.redelegateValidatorTo=null,t.off("close_redelegate_confirm_modal"),t.off("close_validators_modal")})),(0,r.wB)((0,r.EW)((()=>a.redelegateValidatorFrom)),(()=>{p.value=y(a.redelegateValidatorFrom.operator_address).balance.amount})),(0,r.wB)((0,r.EW)((()=>f.value)),(()=>{f.value&&(m.value=[{typeUrl:"/cosmos.staking.v1beta1.MsgBeginRedelegate",value:d.MsgBeginRedelegate.fromPartial({delegatorAddress:a.currentAddress,validatorSrcAddress:a.redelegateValidatorFrom.operator_address,validatorDstAddress:a.redelegateValidatorTo.operator_address,amount:{denom:a.networks[a.currentNetwork].denom,amount:""+parseFloat(g.value.toString().replace(",",".")).toFixed(a.networks[a.currentNetwork].exponent)*Math.pow(10,a.networks[a.currentNetwork].exponent)}})}])})),t.on("close_validators_modal",(()=>{n.value=!1,v.value=!1})),t.on("close_redelegate_confirm_modal",(()=>{_.value=!1})),(e,i)=>{const d=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("section",de,[(0,r.Lk)("div",ue,[(0,r.Lk)("div",ke,[(0,r.bF)(d,{to:"/account?activeSlide=1",class:"back_btn"},{default:(0,r.k6)((()=>[ve])),_:1}),(0,r.Lk)("div",_e,(0,l.v_)(e.$t("message.redelegate_page_title")),1)]),(0,r.Lk)("div",me,[(0,r.Lk)("div",ge,(0,l.v_)(e.$t("message.redelegate_validator_from_label")),1),(0,o.R1)(a).redelegateValidatorFrom?((0,r.uX)(),(0,r.CE)("div",{key:1,class:"validator_wrap",onClick:i[2]||(i[2]=(0,s.D$)((e=>x()),["prevent"]))},[(0,r.Lk)("div",Re,[(0,r.Lk)("div",be,[(0,r.Lk)("img",{src:`https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${(0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].prefix}/moniker/${(0,o.R1)(a).redelegateValidatorFrom.operator_address}.png`,alt:"",loading:"lazy",onError:i[1]||(i[1]=e=>(0,o.R1)(c.on)(e))},null,40,we),he]),(0,r.Lk)("div",null,[(0,r.Lk)("div",ye,(0,l.v_)((0,o.R1)(a).redelegateValidatorFrom.description.moniker),1)]),xe])])):((0,r.uX)(),(0,r.CE)("div",{key:0,class:"info_wrap",onClick:i[0]||(i[0]=(0,s.D$)((e=>x()),["prevent"]))},[(0,r.Lk)("div",pe,[(0,r.Lk)("div",Le,(0,l.v_)(e.$t("message.stake_validator_placeholder")),1),fe])])),(0,r.Lk)("div",Ce,[(0,r.Lk)("div",$e,(0,l.v_)(e.$t("message.validatoes_staked_label")),1),(0,r.Lk)("div",Fe,[(0,r.eW)((0,l.v_)((0,o.R1)(c.NJ)(R.value.balance.amount,(0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].exponent).toLocaleString("ru-RU",{maximumFractionDigits:7}).replace(",","."))+" ",1),(0,r.Lk)("span",null,(0,l.v_)((0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].token_name),1)]),(0,r.Lk)("div",Ve,(0,l.v_)((0,o.R1)(c.ST)((0,o.R1)(c.Y$)((0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].token_name,R.value.balance.amount,(0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].exponent)))+" "+(0,l.v_)((0,o.R1)(a).currentCurrencySymbol),1)])]),Ne,(0,r.Lk)("div",Te,[(0,r.Lk)("div",Ae,(0,l.v_)(e.$t("message.redelegate_validator_to_label")),1),(0,o.R1)(a).redelegateValidatorTo?((0,r.uX)(),(0,r.CE)("div",{key:1,class:"validator_wrap",onClick:i[5]||(i[5]=(0,s.D$)((e=>C()),["prevent"]))},[(0,r.Lk)("div",Ke,[(0,r.Lk)("div",Qe,[(0,r.Lk)("img",{src:`https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${(0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].prefix}/moniker/${(0,o.R1)(a).redelegateValidatorTo.operator_address}.png`,alt:"",loading:"lazy",onError:i[4]||(i[4]=e=>(0,o.R1)(c.on)(e))},null,40,Se),De]),(0,r.Lk)("div",null,[(0,r.Lk)("div",Be,(0,l.v_)((0,o.R1)(a).redelegateValidatorTo.description.moniker),1)]),Ie])])):((0,r.uX)(),(0,r.CE)("div",{key:0,class:"info_wrap",onClick:i[3]||(i[3]=(0,s.D$)((e=>C()),["prevent"]))},[(0,r.Lk)("div",Ee,[(0,r.Lk)("div",Xe,(0,l.v_)(e.$t("message.stake_validator_placeholder")),1),We])])),(0,r.Lk)("div",Me,[(0,r.Lk)("div",Ue,(0,l.v_)(e.$t("message.validatoes_staked_label")),1),(0,r.Lk)("div",Je,[(0,r.eW)((0,l.v_)((0,o.R1)(c.NJ)(b.value.balance.amount,(0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].exponent).toLocaleString("ru-RU",{maximumFractionDigits:7}).replace(",","."))+" ",1),(0,r.Lk)("span",null,(0,l.v_)((0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].token_name),1)]),(0,r.Lk)("div",je,(0,l.v_)((0,o.R1)(c.ST)((0,o.R1)(c.Y$)((0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].token_name,b.value.balance.amount,(0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].exponent)))+" "+(0,l.v_)((0,o.R1)(a).currentCurrencySymbol),1)])]),(0,r.Lk)("div",{class:(0,l.C4)(["amount_field",{disabled:!(0,o.R1)(a).redelegateValidatorFrom}])},[(0,r.Lk)("div",qe,[(0,r.eW)((0,l.v_)(e.$t("message.stake_amount_label"))+" ",1),(0,r.Lk)("div",ze,(0,l.v_)((0,o.R1)(c.ST)((0,o.R1)(c.Y$)((0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].token_name,g.value*Math.pow(10,(0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].exponent),(0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].exponent)))+" "+(0,l.v_)((0,o.R1)(a).currentCurrencySymbol),1)]),(0,r.Lk)("div",Pe,[(0,r.bo)((0,r.Lk)("input",{type:"number",inputmode:"numeric",class:"input big","onUpdate:modelValue":i[6]||(i[6]=e=>g.value=e),placeholder:"0.00",onFocus:i[7]||(i[7]=e=>(0,o.R1)(t).emit("show_keyboard",e.target)),onBlur:i[8]||(i[8]=e=>(0,o.R1)(t).emit("hide_keyboard")),onInput:i[9]||(i[9]=e=>h(e))},null,544),[[s.Jo,g.value]]),(0,r.Lk)("button",{type:"button",class:"max_btn",onClick:(0,s.D$)(w,["prevent"])},(0,l.v_)(e.$t("message.btn_MAX")),1)])],2),f.value?((0,r.uX)(),(0,r.Wv)(u.A,{key:0,msgAny:m.value,txType:"redelegate"},null,8,["msgAny"])):(0,r.Q3)("",!0),(0,r.Lk)("div",Oe,[(0,o.R1)(a).networks[(0,o.R1)(a).currentNetwork].currentTxHash?((0,r.uX)(),(0,r.CE)("button",{key:1,class:"btn waiting_btn",onClick:i[11]||(i[11]=(0,s.D$)((e=>(0,o.R1)(t).emit("show_collapsible_notification")),["prevent"]))},[(0,r.Lk)("span",null,(0,l.v_)(e.$t("message.btn_waiting_tx")),1)])):((0,r.uX)(),(0,r.CE)("button",{key:0,class:(0,l.C4)(["btn",{disabled:!(0,o.R1)(a).TxFee.isEnough}]),onClick:i[10]||(i[10]=(0,s.D$)((e=>_.value=!0),["prevent"]))},[(0,r.Lk)("span",null,(0,l.v_)(e.$t("message.btn_redelegate")),1)],2))])])]),(0,r.bF)(s.eB,{name:"from_right"},{default:(0,r.k6)((()=>[n.value?((0,r.uX)(),(0,r.Wv)(k.A,{key:0,redelegate:"from"})):(0,r.Q3)("",!0)])),_:1}),(0,r.bF)(s.eB,{name:"from_right"},{default:(0,r.k6)((()=>[v.value?((0,r.uX)(),(0,r.Wv)(k.A,{key:0,redelegate:"to"})):(0,r.Q3)("",!0)])),_:1}),(0,r.bF)(s.eB,{name:"from_right"},{default:(0,r.k6)((()=>[_.value?((0,r.uX)(),(0,r.Wv)(le,{key:0,amount:g.value,msgAny:m.value},null,8,["amount","msgAny"])):(0,r.Q3)("",!0)])),_:1})],64)}}};const He=(0,te.A)(Ye,[["__scopeId","data-v-e62edc56"]]);var Ge=He}}]);
//# sourceMappingURL=447.9f98758a.js.map