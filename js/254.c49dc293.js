"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[254],{19184:function(e,t,a){a.d(t,{A:function(){return U}});var n=a(56768),s=a(24232),l=a(90144),o=a(45130),r=a(24113),u=a(76750),i=a(61981);const c=e=>((0,n.Qi)("data-v-1ed91140"),e=e(),(0,n.jt)(),e),d=r+"#ic_biometric_face",v=r+"#ic_biometric_finger",m={class:"pin"},_={class:"field_label"},k={class:"field"},g={class:"field"},p=["disabled"],b={class:"field"},R=["disabled"],x={class:"field"},L=["disabled"],h={class:"field"},w=["disabled"],f={class:"field"},T=["disabled"],y={key:0,class:"warning"},F={key:0,class:"icon"},A=c((()=>(0,n.Lk)("use",{"xlink:href":d},null,-1))),C=[A],$={key:1,class:"icon"},E=c((()=>(0,n.Lk)("use",{"xlink:href":v},null,-1))),K=[E],N={class:"btns"},G={key:0},D={key:1};var B={__name:"Auth",setup(e){const t=(0,u.o)(),a=(0,n.WQ)("emitter"),r=(0,l.KR)(["","","","","",""]),c=(0,l.KR)(""),d=(0,l.KR)(""),v=(0,l.KR)(!1),A=(0,l.KR)(t.authErrorLimit),E=(0,l.KR)(!1),B=(0,l.KR)(!1),j=(0,l.KR)("finger");function S(e,t){e.target.value.length>=1&&t<6&&e.target.closest(".row").querySelector(`.field:nth-child(${t+1}) input`).focus()}function U(e,t){setTimeout((()=>{0===e.target.value.length&&t>0&&e.target.closest(".row").querySelector(`.field:nth-child(${t}) input`).select()}))}function X(){Telegram.WebApp.isAccessGranted?W():Telegram.WebApp.BiometricManager.requestAccess({reason:""},(()=>W()))}function W(){Telegram.WebApp.BiometricManager.authenticate({reason:""},(e=>{e&&a.emit("auth")}))}async function I(){let e=await Q();e?(A.value=t.authErrorLimit,a.emit("auth")):await J()}async function Q(){let e=await(0,i.mK)(r.value.join(""),d.value);return e===c.value}async function J(){v.value=!0;let e=A.value-1;A.value=e,t.isAuthorized?e||a.emit("show_error_sign_tx_modal"):e?t.updateUserAuthErrorLimit(e):a.emit("show_error_auth_modal"),r.value=["","","","","",""],v.value=!1}(0,n.KC)((async()=>{let e=await t.getMultipleData(["pin","hmacKey","authErrorLimit","isBiometric"]);c.value=e.pin,d.value=e.hmacKey,A.value=e.authErrorLimit,E.value=e.isBiometric,B.value=Telegram.WebApp.BiometricManager.isBiometricAvailable,"unknown"!=Telegram.WebApp.BiometricManager.biometricType&&(j.value=Telegram.WebApp.BiometricManager.biometricType),B.value&&E.value&&X()})),(0,n.wB)(r.value,(()=>{r.value[5].length&&document.activeElement.blur(),r.value[5].length&&A.value===t.authErrorLimit&&I()}));const M=(0,n.EW)((()=>""!=r.value[5].length));return(e,u)=>((0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("div",m,[(0,n.Lk)("div",_,(0,s.v_)(e.$t("message.auth_enter_pin_label")),1),(0,n.Lk)("div",{class:(0,s.C4)(["row",{error:v.value}])},[(0,n.Lk)("div",k,[(0,n.bo)((0,n.Lk)("input",{type:"password",class:(0,s.C4)(["input big",{active:r.value[0].length}]),"onUpdate:modelValue":u[0]||(u[0]=e=>r.value[0]=e),maxlength:"1",inputmode:"numeric",ref:"inputRef",onTouchend:u[1]||(u[1]=e=>(0,l.R1)(a).emit("show_keyboard")),onBlur:u[2]||(u[2]=e=>(0,l.R1)(a).emit("hide_keyboard")),onInput:u[3]||(u[3]=e=>S(e,1)),onKeydown:u[4]||(u[4]=(0,o.jR)((e=>U(e,0)),["backspace"]))},null,34),[[o.Jo,r.value[0]]])]),(0,n.Lk)("div",g,[(0,n.bo)((0,n.Lk)("input",{type:"password",class:(0,s.C4)(["input big",{active:r.value[1].length}]),"onUpdate:modelValue":u[5]||(u[5]=e=>r.value[1]=e),maxlength:"1",inputmode:"numeric",disabled:!r.value[0].length,onTouchend:u[6]||(u[6]=e=>(0,l.R1)(a).emit("show_keyboard")),onBlur:u[7]||(u[7]=e=>(0,l.R1)(a).emit("hide_keyboard")),onInput:u[8]||(u[8]=e=>S(e,2)),onKeydown:u[9]||(u[9]=(0,o.jR)((e=>U(e,1)),["backspace"]))},null,42,p),[[o.Jo,r.value[1]]])]),(0,n.Lk)("div",b,[(0,n.bo)((0,n.Lk)("input",{type:"password",class:(0,s.C4)(["input big",{active:r.value[2].length}]),"onUpdate:modelValue":u[10]||(u[10]=e=>r.value[2]=e),maxlength:"1",inputmode:"numeric",disabled:!r.value[1].length,onTouchend:u[11]||(u[11]=e=>(0,l.R1)(a).emit("show_keyboard")),onBlur:u[12]||(u[12]=e=>(0,l.R1)(a).emit("hide_keyboard")),onInput:u[13]||(u[13]=e=>S(e,3)),onKeydown:u[14]||(u[14]=(0,o.jR)((e=>U(e,2)),["backspace"]))},null,42,R),[[o.Jo,r.value[2]]])]),(0,n.Lk)("div",x,[(0,n.bo)((0,n.Lk)("input",{type:"password",class:(0,s.C4)(["input big",{active:r.value[3].length}]),"onUpdate:modelValue":u[15]||(u[15]=e=>r.value[3]=e),maxlength:"1",inputmode:"numeric",disabled:!r.value[2].length,onTouchend:u[16]||(u[16]=e=>(0,l.R1)(a).emit("show_keyboard")),onBlur:u[17]||(u[17]=e=>(0,l.R1)(a).emit("hide_keyboard")),onInput:u[18]||(u[18]=e=>S(e,4)),onKeydown:u[19]||(u[19]=(0,o.jR)((e=>U(e,3)),["backspace"]))},null,42,L),[[o.Jo,r.value[3]]])]),(0,n.Lk)("div",h,[(0,n.bo)((0,n.Lk)("input",{type:"password",class:(0,s.C4)(["input big",{active:r.value[4].length}]),"onUpdate:modelValue":u[20]||(u[20]=e=>r.value[4]=e),maxlength:"1",inputmode:"numeric",disabled:!r.value[3].length,onTouchend:u[21]||(u[21]=e=>(0,l.R1)(a).emit("show_keyboard")),onBlur:u[22]||(u[22]=e=>(0,l.R1)(a).emit("hide_keyboard")),onInput:u[23]||(u[23]=e=>S(e,5)),onKeydown:u[24]||(u[24]=(0,o.jR)((e=>U(e,4)),["backspace"]))},null,42,w),[[o.Jo,r.value[4]]])]),(0,n.Lk)("div",f,[(0,n.bo)((0,n.Lk)("input",{type:"password",class:(0,s.C4)(["input big",{active:r.value[5].length}]),"onUpdate:modelValue":u[25]||(u[25]=e=>r.value[5]=e),maxlength:"1",inputmode:"numeric",disabled:!r.value[4].length,onTouchend:u[26]||(u[26]=e=>(0,l.R1)(a).emit("show_keyboard")),onBlur:u[27]||(u[27]=e=>(0,l.R1)(a).emit("hide_keyboard")),onInput:u[28]||(u[28]=e=>S(e,6)),onKeydown:u[29]||(u[29]=(0,o.jR)((e=>U(e,5)),["backspace"]))},null,42,T),[[o.Jo,r.value[5]]])])],2),A.value<(0,l.R1)(t).authErrorLimit?((0,n.uX)(),(0,n.CE)("div",y,(0,s.v_)(e.$t("message.auth_error_warning",{count:A.value})),1)):(0,n.Q3)("",!0)]),B.value&&A.value==(0,l.R1)(t).authErrorLimit?((0,n.uX)(),(0,n.CE)("button",{key:0,class:"biometric_btn",onClick:(0,o.D$)(X,["prevent"])},[(0,n.Lk)("span",null,(0,s.v_)(e.$t("message.btn_biometric2")),1),"face"===e.biometrictype?((0,n.uX)(),(0,n.CE)("svg",F,C)):((0,n.uX)(),(0,n.CE)("svg",$,K))])):(0,n.Q3)("",!0),(0,n.Lk)("div",N,[A.value<(0,l.R1)(t).authErrorLimit?((0,n.uX)(),(0,n.CE)("button",{key:0,class:(0,s.C4)(["btn",{disabled:!M.value}]),onClick:u[30]||(u[30]=(0,o.D$)((e=>I()),["prevent"]))},[(0,l.R1)(t).isAuthorized?((0,n.uX)(),(0,n.CE)("span",G,(0,s.v_)(e.$t("message.btn_sign")),1)):((0,n.uX)(),(0,n.CE)("span",D,(0,s.v_)(e.$t("message.btn_login")),1))],2)):(0,n.Q3)("",!0)])],64))}},j=a(71241);const S=(0,j.A)(B,[["__scopeId","data-v-1ed91140"]]);var U=S},17086:function(e,t,a){a.d(t,{A:function(){return d}});var n=a(56768);const s={class:"loader_wrap"},l=(0,n.Lk)("div",{class:"loader"},[(0,n.Lk)("span")],-1),o=[l];function r(e,t){return(0,n.uX)(),(0,n.CE)("div",s,o)}var u=a(71241);const i={},c=(0,u.A)(i,[["render",r]]);var d=c},84103:function(e,t,a){a.d(t,{A:function(){return le}});var n=a(56768),s=a(24232),l=a(90144),o=a(45130),r=a(76750),u=a(61981),i=a(24113);const c=e=>((0,n.Qi)("data-v-3e1f293d"),e=e(),(0,n.jt)(),e),d=i+"#ic_close",v=i+"#ic_check",m={class:"modal"},_={class:"modal_content"},k={class:"data"},g=c((()=>(0,n.Lk)("svg",{class:"icon"},[(0,n.Lk)("use",{"xlink:href":d})],-1))),p=[g],b={class:"modal_title"},R={class:"fee_tier"},x={class:"label"},L=c((()=>(0,n.Lk)("div",{class:"toggle_wrap"},[(0,n.Lk)("div",{class:"toggle"},[(0,n.Lk)("div",{class:"ball_wrap"},[(0,n.Lk)("div",{class:"ball"},[(0,n.Lk)("svg",null,[(0,n.Lk)("use",{"xlink:href":v})])])])])],-1))),h={class:"vals_wrap"},w={class:"vals"},f={class:"name"},T={class:"cost"},y={class:"amount"},F={class:"denom"},A={class:"name"},C={class:"cost"},$={class:"amount"},E={class:"denom"},K={class:"name"},N={class:"cost"},G={class:"amount"},D={class:"denom"},B=c((()=>(0,n.Lk)("span",null,null,-1))),j=[B],S={class:"fee_token"},U={class:"label"},X={class:"field"},W=["value"],I={class:"gas_adjustment"},Q={class:"label"},J={key:0},M={key:1},P=(0,n.Fv)('<div class="toggle_wrap" data-v-3e1f293d><div class="toggle" data-v-3e1f293d><div class="ball_wrap" data-v-3e1f293d><div class="ball" data-v-3e1f293d><svg data-v-3e1f293d><use xlink:href="'+v+'" data-v-3e1f293d></use></svg></div></div></div></div>',1),V={key:0,class:"field"},Y=["value"],q={key:1,class:"field"},O={class:"btns"};var z={__name:"TxFeeModal",setup(e){const t=(0,r.o)(),a=(0,n.WQ)("emitter"),i=(0,l.KR)(null),c=(0,l.KR)(null),d=(0,l.KR)(null),v={low:i,average:c,high:d},g=(0,l.KR)(null),B=(0,l.KR)(null);function z(e){e.target.value<=0&&(t.TxFee.userGasAmount=t.TxFee.gasAmount)}return(0,n.sV)((()=>{g.value=v[t.TxFee.currentLevel].value.offsetWidth,B.value=v[t.TxFee.currentLevel].value.offsetLeft})),(0,n.wB)((0,n.EW)((()=>t.TxFee.currentLevel)),(()=>{g.value=v[t.TxFee.currentLevel].value.offsetWidth,B.value=v[t.TxFee.currentLevel].value.offsetLeft})),(0,n.wB)((0,n.EW)((()=>t.TxFee.isGasAdjustmentAuto)),(()=>{t.TxFee.userGasAmount=t.TxFee.gasAmount})),(0,n.wB)((0,n.EW)((()=>t.TxFee.userGasAmount)),(()=>{t.TxFeeIsEnough()})),(e,r)=>((0,n.uX)(),(0,n.CE)("section",m,[(0,n.Lk)("div",_,[(0,n.Lk)("div",k,[(0,n.Lk)("button",{class:"close_btn",onClick:r[0]||(r[0]=(0,o.D$)((e=>(0,l.R1)(a).emit("close_tx_fee_modal")),["prevent"]))},p),(0,n.Lk)("div",b,(0,s.v_)(e.$t("message.tx_fee_modal_title")),1),(0,n.Lk)("div",R,[(0,n.Lk)("div",x,[(0,n.Lk)("span",null,(0,s.v_)(e.$t("message.tx_fee_fee_tier_label")),1),(0,n.Lk)("button",{class:(0,s.C4)(["toggle_btn",{enabled:(0,l.R1)(t).TxFee.isRemember}]),onClick:r[1]||(r[1]=(0,o.D$)((e=>(0,l.R1)(t).TxFee.isRemember=!(0,l.R1)(t).TxFee.isRemember),["prevent"]))},[(0,n.Lk)("span",null,(0,s.v_)(e.$t("message.tx_fee_remember_label")),1),L],2)]),(0,n.Lk)("div",h,[(0,n.Lk)("div",w,[(0,n.Lk)("button",{class:(0,s.C4)(["btn",{active:"low"===(0,l.R1)(t).TxFee.currentLevel}]),ref_key:"level_low",ref:i,onClick:r[2]||(r[2]=(0,o.D$)((e=>(0,l.R1)(t).TxFee.currentLevel="low"),["prevent"]))},[(0,n.Lk)("div",f,(0,s.v_)(e.$t("message.tx_fee_low_label")),1),(0,n.Lk)("div",T," ~ "+(0,s.v_)((0,l.R1)(u.ST)((0,l.R1)(u.Y$)((0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].token_name,(0,l.R1)(t).TxFee.userGasAmount*(0,l.R1)(t).TxFee.lowPrice,(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].exponent,"USD"),"USD"))+"$ ",1),(0,n.Lk)("div",y,(0,s.v_)((0,l.R1)(u.NJ)((0,l.R1)(t).TxFee.userGasAmount*(0,l.R1)(t).TxFee.lowPrice,(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].exponent).toLocaleString("ru-RU",{maximumFractionDigits:5}).replace(",",".")),1),(0,n.Lk)("div",F,(0,s.v_)((0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].token_name),1)],2),(0,n.Lk)("button",{class:(0,s.C4)(["btn",{active:"average"===(0,l.R1)(t).TxFee.currentLevel}]),ref_key:"level_average",ref:c,onClick:r[3]||(r[3]=(0,o.D$)((e=>(0,l.R1)(t).TxFee.currentLevel="average"),["prevent"]))},[(0,n.Lk)("div",A,(0,s.v_)(e.$t("message.tx_fee_average_label")),1),(0,n.Lk)("div",C," ~ "+(0,s.v_)((0,l.R1)(u.ST)((0,l.R1)(u.Y$)((0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].token_name,(0,l.R1)(t).TxFee.userGasAmount*(0,l.R1)(t).TxFee.averagePrice,(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].exponent,"USD"),"USD"))+"$ ",1),(0,n.Lk)("div",$,(0,s.v_)((0,l.R1)(u.NJ)((0,l.R1)(t).TxFee.userGasAmount*(0,l.R1)(t).TxFee.averagePrice,(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].exponent).toLocaleString("ru-RU",{maximumFractionDigits:5}).replace(",",".")),1),(0,n.Lk)("div",E,(0,s.v_)((0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].token_name),1)],2),(0,n.Lk)("button",{class:(0,s.C4)(["btn",{active:"high"===(0,l.R1)(t).TxFee.currentLevel}]),ref_key:"level_high",ref:d,onClick:r[4]||(r[4]=(0,o.D$)((e=>(0,l.R1)(t).TxFee.currentLevel="high"),["prevent"]))},[(0,n.Lk)("div",K,(0,s.v_)(e.$t("message.tx_fee_high_label")),1),(0,n.Lk)("div",N," ~ "+(0,s.v_)((0,l.R1)(u.ST)((0,l.R1)(u.Y$)((0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].token_name,(0,l.R1)(t).TxFee.userGasAmount*(0,l.R1)(t).TxFee.highPrice,(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].exponent,"USD"),"USD"))+"$ ",1),(0,n.Lk)("div",G,(0,s.v_)((0,l.R1)(u.NJ)((0,l.R1)(t).TxFee.userGasAmount*(0,l.R1)(t).TxFee.highPrice,(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].exponent).toLocaleString("ru-RU",{maximumFractionDigits:5}).replace(",",".")),1),(0,n.Lk)("div",D,(0,s.v_)((0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].token_name),1)],2),(0,n.Lk)("div",{class:"roller",style:(0,s.Tr)(`width: ${g.value}px; left: ${B.value}px;`)},j,4)])])]),(0,n.Lk)("div",S,[(0,n.Lk)("div",U,(0,s.v_)(e.$t("message.tx_fee_fee_token_label")),1),(0,n.Lk)("div",X,[(0,n.Lk)("input",{type:"text",class:"input big",value:(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].token_name,readonly:"",onTouchend:r[5]||(r[5]=e=>(0,l.R1)(a).emit("show_keyboard")),onBlur:r[6]||(r[6]=e=>(0,l.R1)(a).emit("hide_keyboard"))},null,40,W)])]),(0,n.Lk)("div",I,[(0,n.Lk)("div",Q,[(0,l.R1)(t).TxFee.isGasAdjustmentAuto?((0,n.uX)(),(0,n.CE)("span",J,(0,s.v_)(e.$t("message.tx_fee_gas_adjustment_label")),1)):((0,n.uX)(),(0,n.CE)("span",M,(0,s.v_)(e.$t("message.tx_fee_gas_amount_label")),1)),(0,n.Lk)("button",{class:(0,s.C4)(["toggle_btn",{enabled:(0,l.R1)(t).TxFee.isGasAdjustmentAuto}]),onClick:r[7]||(r[7]=(0,o.D$)((e=>(0,l.R1)(t).TxFee.isGasAdjustmentAuto=!(0,l.R1)(t).TxFee.isGasAdjustmentAuto),["prevent"]))},[(0,n.Lk)("span",null,(0,s.v_)(e.$t("message.tx_fee_auto_label")),1),P],2)]),(0,l.R1)(t).TxFee.isGasAdjustmentAuto?((0,n.uX)(),(0,n.CE)("div",V,[(0,n.Lk)("input",{type:"number",class:"input big",value:(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].gas_adjustment,disabled:"",onTouchend:r[8]||(r[8]=e=>(0,l.R1)(a).emit("show_keyboard")),onBlur:r[9]||(r[9]=e=>(0,l.R1)(a).emit("hide_keyboard"))},null,40,Y)])):((0,n.uX)(),(0,n.CE)("div",q,[(0,n.bo)((0,n.Lk)("input",{type:"number",inputmode:"numeric",class:"input big","onUpdate:modelValue":r[10]||(r[10]=e=>(0,l.R1)(t).TxFee.userGasAmount=e),maxlength:"10",onTouchend:r[11]||(r[11]=e=>(0,l.R1)(a).emit("show_keyboard")),onBlur:r[12]||(r[12]=e=>(0,l.R1)(a).emit("hide_keyboard")),onInput:r[13]||(r[13]=e=>z(e))},null,544),[[o.Jo,(0,l.R1)(t).TxFee.userGasAmount]])]))]),(0,n.Lk)("div",O,[(0,n.Lk)("button",{class:"btn",onClick:r[14]||(r[14]=(0,o.D$)((e=>(0,l.R1)(a).emit("close_tx_fee_modal")),["prevent"]))},[(0,n.Lk)("span",null,(0,s.v_)(e.$t("message.btn_close")),1)])])])])]))}},H=a(71241);const Z=(0,H.A)(z,[["__scopeId","data-v-3e1f293d"]]);var ee=Z;const te={class:"tx_fee"},ae={class:"cost"};var ne={__name:"TxFee",props:["msgAny","txType"],setup(e){const t=e,a=(0,r.o)(),i=(0,n.WQ)("emitter"),c=(0,l.KR)(!1),d=(0,n.EW)((()=>(0,u.NJ)(a.TxFee.userGasAmount*a.TxFee[`${a.TxFee.currentLevel}Price`],a.networks[a.currentNetwork].exponent)));function v(){c.value=!0,a.isAnyModalOpen=!0}return(0,n.KC)((async()=>{await a.resetTxFee(),a.TxFeeGetCurrentBalance(a.networks[a.currentNetwork].denom),a.TxFeeSetGasPrices(),a.TxFee.balance.amount?await(0,u.jC)(t.msgAny):("send"===t.txType&&(a.TxFee.gasAmount=a.TxFee.userGasAmount=a.networks[a.currentNetwork].gas_amount_send),"claim"===t.txType&&(a.TxFee.gasAmount=a.TxFee.userGasAmount=a.networks[a.currentNetwork].gas_amount_claim),"stake"===t.txType&&(a.TxFee.gasAmount=a.TxFee.userGasAmount=a.networks[a.currentNetwork].gas_amount_stake),"unstake"===t.txType&&(a.TxFee.gasAmount=a.TxFee.userGasAmount=a.networks[a.currentNetwork].gas_amount_unstake),"redelegate"===t.txType&&(a.TxFee.gasAmount=a.TxFee.userGasAmount=a.networks[a.currentNetwork].gas_amount_redelegate)),a.TxFeeIsEnough()})),(0,n.hi)((()=>{a.TxFee.isEnough=!1,i.off("close_any_modal"),i.off("close_tx_fee_modal")})),i.on("close_tx_fee_modal",(()=>{c.value=!1,a.isAnyModalOpen=!1})),i.on("close_any_modal",(()=>{c.value=!1,a.isAnyModalOpen=!1})),(e,t)=>((0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("div",te,[(0,n.Lk)("div",{class:(0,s.C4)(["btn",{red:!(0,l.R1)(a).TxFee.isEnough}]),onClick:t[0]||(t[0]=(0,o.D$)((e=>v()),["prevent"]))},[(0,n.eW)((0,s.v_)(e.$t("message.tx_fee_label"))+" "+(0,s.v_)(d.value.toLocaleString("ru-RU",{maximumFractionDigits:5}).replace(",","."))+" "+(0,s.v_)((0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].token_name)+" ",1),(0,n.Lk)("div",ae," (~ "+(0,s.v_)((0,l.R1)(u.ST)((0,l.R1)(u.Y$)((0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].token_name,(0,l.R1)(a).TxFee.userGasAmount*(0,l.R1)(a).TxFee[`${(0,l.R1)(a).TxFee.currentLevel}Price`],(0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].exponent,"USD"),"USD"))+"$) ",1)],2)]),(0,n.bF)(o.eB,{name:"modal"},{default:(0,n.k6)((()=>[c.value?((0,n.uX)(),(0,n.Wv)(ee,{key:0})):(0,n.Q3)("",!0)])),_:1}),(0,n.bF)(o.eB,{name:"fade"},{default:(0,n.k6)((()=>[c.value?((0,n.uX)(),(0,n.CE)("div",{key:0,class:"modal_overlay",onClick:t[1]||(t[1]=(0,o.D$)((e=>(0,l.R1)(i).emit("close_any_modal")),["prevent"]))})):(0,n.Q3)("",!0)])),_:1})],64))}};const se=(0,H.A)(ne,[["__scopeId","data-v-22ea645c"]]);var le=se},86255:function(e,t,a){a.d(t,{A:function(){return f}});var n=a(56768),s=a(45130),l=a(90144),o=a(24232),r=a(24113),u=a(19184);const i=e=>((0,n.Qi)("data-v-aeebf056"),e=e(),(0,n.jt)(),e),c=r+"#ic_close",d={class:"modal"},v={class:"modal_content"},m={class:"data"},_=i((()=>(0,n.Lk)("svg",{class:"icon"},[(0,n.Lk)("use",{"xlink:href":c})],-1))),k=[_],g={class:"modal_title"},p={class:"auth_wrap"},b={class:"modal_title"},R={class:"modal_desc"},x={class:"btns"};var L={__name:"SignTxModal",setup(e){const t=(0,n.WQ)("emitter"),a=(0,l.KR)(!1);return t.on("show_error_sign_tx_modal",(()=>{a.value=!0})),(e,r)=>((0,n.uX)(),(0,n.CE)("section",d,[(0,n.Lk)("div",v,[(0,n.Lk)("div",m,[(0,n.Lk)("button",{class:"close_btn",onClick:r[0]||(r[0]=(0,s.D$)((e=>(0,l.R1)(t).emit("close_sign_tx_modal")),["prevent"]))},k),a.value?((0,n.uX)(),(0,n.CE)(n.FK,{key:1},[(0,n.Lk)("div",b,(0,o.v_)(e.$t("message.sign_tx_error_title")),1),(0,n.Lk)("div",R,(0,o.v_)(e.$t("message.sign_tx_error_desc")),1),(0,n.Lk)("div",x,[(0,n.Lk)("button",{class:"btn",onClick:r[1]||(r[1]=(0,s.D$)((e=>(0,l.R1)(t).emit("close_sign_tx_modal")),["prevent"]))},[(0,n.Lk)("span",null,(0,o.v_)(e.$t("message.btn_understood")),1)])])],64)):((0,n.uX)(),(0,n.CE)(n.FK,{key:0},[(0,n.Lk)("div",g,(0,o.v_)(e.$t("message.sign_tx_title")),1),(0,n.Lk)("div",p,[(0,n.bF)(u.A)])],64))])])]))}},h=a(71241);const w=(0,h.A)(L,[["__scopeId","data-v-aeebf056"]]);var f=w}}]);
//# sourceMappingURL=254.c49dc293.js.map