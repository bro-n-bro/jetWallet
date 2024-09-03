"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[861],{41254:function(e,t,a){a.d(t,{A:function(){return U}});var s=a(56768),n=a(24232),l=a(90144),o=a(45130),r=a(24113),i=a(76750),u=a(61981);const c=e=>((0,s.Qi)("data-v-7407c7aa"),e=e(),(0,s.jt)(),e),d=r+"#ic_biometric_face",v=r+"#ic_biometric_finger",m={class:"pin"},k={class:"field_label"},_={class:"field"},g={class:"field"},p=["disabled"],b={class:"field"},R=["disabled"],x={class:"field"},L=["disabled"],w={class:"field"},h=["disabled"],T={class:"field"},F=["disabled"],y={key:0,class:"warning"},f={key:0,class:"icon"},A=c((()=>(0,s.Lk)("use",{"xlink:href":d},null,-1))),C=[A],$={key:1,class:"icon"},E=c((()=>(0,s.Lk)("use",{"xlink:href":v},null,-1))),D=[E],N={class:"btns"},G={key:0},K={key:1};var B={__name:"Auth",setup(e){const t=(0,i.o)(),a=(0,s.WQ)("emitter"),r=(0,l.KR)(["","","","","",""]),c=(0,l.KR)(""),d=(0,l.KR)(""),v=(0,l.KR)(!1),A=(0,l.KR)(t.authErrorLimit),E=(0,l.KR)(!1),B=(0,l.KR)(!1),S=(0,l.KR)("finger");function j(e,t){e.target.value.length>=1&&t<6&&e.target.closest(".row").querySelector(`.field:nth-child(${t+1}) input`).focus()}function U(e,t){setTimeout((()=>{0===e.target.value.length&&t>0&&e.target.closest(".row").querySelector(`.field:nth-child(${t}) input`).select()}))}function X(){Telegram.WebApp.isAccessGranted?W():Telegram.WebApp.BiometricManager.requestAccess({reason:"Наш текст"},(()=>W()))}function W(){Telegram.WebApp.BiometricManager.authenticate({reason:"Наш текст"},(e=>{e&&a.emit("auth")}))}async function Q(){let e=await I();e?(A.value=t.authErrorLimit,a.emit("auth")):await J()}async function I(){let e=await(0,u.mK)(r.value.join(""),d.value);return e===c.value}async function J(){v.value=!0;let e=A.value-1;A.value=e,t.isAuthorized?e||a.emit("show_error_sign_tx_modal"):e?t.updateUserAuthErrorLimit(e):a.emit("show_error_auth_modal"),r.value=["","","","","",""],v.value=!1}(0,s.KC)((async()=>{let e=await t.getMultipleData(["pin","hmacKey","authErrorLimit","isBiometric"]);c.value=e.pin,d.value=e.hmacKey,A.value=e.authErrorLimit,E.value=e.isBiometric,B.value=Telegram.WebApp.BiometricManager.isBiometricAvailable,"unknown"!=Telegram.WebApp.BiometricManager.biometricType&&(S.value=Telegram.WebApp.BiometricManager.biometricType),B.value&&E.value&&X()})),(0,s.wB)(r.value,(()=>{r.value[5].length&&document.activeElement.blur(),r.value[5].length&&A.value===t.authErrorLimit&&Q()}));const P=(0,s.EW)((()=>""!=r.value[5].length));return(e,i)=>((0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",m,[(0,s.Lk)("div",k,(0,n.v_)(e.$t("message.auth_enter_pin_label")),1),(0,s.Lk)("div",{class:(0,n.C4)(["row",{error:v.value}])},[(0,s.Lk)("div",_,[(0,s.bo)((0,s.Lk)("input",{type:"password",class:(0,n.C4)(["input big",{active:r.value[0].length}]),"onUpdate:modelValue":i[0]||(i[0]=e=>r.value[0]=e),maxlength:"1",inputmode:"numeric",ref:"inputRef",onFocus:i[1]||(i[1]=e=>(0,l.R1)(a).emit("show_keyboard")),onBlur:i[2]||(i[2]=e=>(0,l.R1)(a).emit("hide_keyboard")),onInput:i[3]||(i[3]=e=>j(e,1)),onKeydown:i[4]||(i[4]=(0,o.jR)((e=>U(e,0)),["backspace"]))},null,34),[[o.Jo,r.value[0]]])]),(0,s.Lk)("div",g,[(0,s.bo)((0,s.Lk)("input",{type:"password",class:(0,n.C4)(["input big",{active:r.value[1].length}]),"onUpdate:modelValue":i[5]||(i[5]=e=>r.value[1]=e),maxlength:"1",inputmode:"numeric",disabled:!r.value[0].length,onFocus:i[6]||(i[6]=e=>(0,l.R1)(a).emit("show_keyboard")),onBlur:i[7]||(i[7]=e=>(0,l.R1)(a).emit("hide_keyboard")),onInput:i[8]||(i[8]=e=>j(e,2)),onKeydown:i[9]||(i[9]=(0,o.jR)((e=>U(e,1)),["backspace"]))},null,42,p),[[o.Jo,r.value[1]]])]),(0,s.Lk)("div",b,[(0,s.bo)((0,s.Lk)("input",{type:"password",class:(0,n.C4)(["input big",{active:r.value[2].length}]),"onUpdate:modelValue":i[10]||(i[10]=e=>r.value[2]=e),maxlength:"1",inputmode:"numeric",disabled:!r.value[1].length,onFocus:i[11]||(i[11]=e=>(0,l.R1)(a).emit("show_keyboard")),onBlur:i[12]||(i[12]=e=>(0,l.R1)(a).emit("hide_keyboard")),onInput:i[13]||(i[13]=e=>j(e,3)),onKeydown:i[14]||(i[14]=(0,o.jR)((e=>U(e,2)),["backspace"]))},null,42,R),[[o.Jo,r.value[2]]])]),(0,s.Lk)("div",x,[(0,s.bo)((0,s.Lk)("input",{type:"password",class:(0,n.C4)(["input big",{active:r.value[3].length}]),"onUpdate:modelValue":i[15]||(i[15]=e=>r.value[3]=e),maxlength:"1",inputmode:"numeric",disabled:!r.value[2].length,onFocus:i[16]||(i[16]=e=>(0,l.R1)(a).emit("show_keyboard")),onBlur:i[17]||(i[17]=e=>(0,l.R1)(a).emit("hide_keyboard")),onInput:i[18]||(i[18]=e=>j(e,4)),onKeydown:i[19]||(i[19]=(0,o.jR)((e=>U(e,3)),["backspace"]))},null,42,L),[[o.Jo,r.value[3]]])]),(0,s.Lk)("div",w,[(0,s.bo)((0,s.Lk)("input",{type:"password",class:(0,n.C4)(["input big",{active:r.value[4].length}]),"onUpdate:modelValue":i[20]||(i[20]=e=>r.value[4]=e),maxlength:"1",inputmode:"numeric",disabled:!r.value[3].length,onFocus:i[21]||(i[21]=e=>(0,l.R1)(a).emit("show_keyboard")),onBlur:i[22]||(i[22]=e=>(0,l.R1)(a).emit("hide_keyboard")),onInput:i[23]||(i[23]=e=>j(e,5)),onKeydown:i[24]||(i[24]=(0,o.jR)((e=>U(e,4)),["backspace"]))},null,42,h),[[o.Jo,r.value[4]]])]),(0,s.Lk)("div",T,[(0,s.bo)((0,s.Lk)("input",{type:"password",class:(0,n.C4)(["input big",{active:r.value[5].length}]),"onUpdate:modelValue":i[25]||(i[25]=e=>r.value[5]=e),maxlength:"1",inputmode:"numeric",disabled:!r.value[4].length,onFocus:i[26]||(i[26]=e=>(0,l.R1)(a).emit("show_keyboard")),onBlur:i[27]||(i[27]=e=>(0,l.R1)(a).emit("hide_keyboard")),onInput:i[28]||(i[28]=e=>j(e,6)),onKeydown:i[29]||(i[29]=(0,o.jR)((e=>U(e,5)),["backspace"]))},null,42,F),[[o.Jo,r.value[5]]])])],2),A.value<(0,l.R1)(t).authErrorLimit?((0,s.uX)(),(0,s.CE)("div",y,(0,n.v_)(e.$t("message.auth_error_warning",{count:A.value})),1)):(0,s.Q3)("",!0)]),B.value&&A.value==(0,l.R1)(t).authErrorLimit?((0,s.uX)(),(0,s.CE)("button",{key:0,class:"biometric_btn",onClick:(0,o.D$)(X,["prevent"])},[(0,s.Lk)("span",null,(0,n.v_)(e.$t("message.btn_biometric2")),1),"face"===e.biometrictype?((0,s.uX)(),(0,s.CE)("svg",f,C)):((0,s.uX)(),(0,s.CE)("svg",$,D))])):(0,s.Q3)("",!0),(0,s.Lk)("div",N,[A.value<(0,l.R1)(t).authErrorLimit?((0,s.uX)(),(0,s.CE)("button",{key:0,class:(0,n.C4)(["btn",{disabled:!P.value}]),onClick:i[30]||(i[30]=(0,o.D$)((e=>Q()),["prevent"]))},[(0,l.R1)(t).isAuthorized?((0,s.uX)(),(0,s.CE)("span",G,(0,n.v_)(e.$t("message.btn_sign")),1)):((0,s.uX)(),(0,s.CE)("span",K,(0,n.v_)(e.$t("message.btn_login")),1))],2)):(0,s.Q3)("",!0)])],64))}},S=a(71241);const j=(0,S.A)(B,[["__scopeId","data-v-7407c7aa"]]);var U=j},51115:function(e,t,a){a.d(t,{A:function(){return d}});var s=a(56768);const n={class:"loader_wrap"},l=(0,s.Lk)("div",{class:"loader"},[(0,s.Lk)("span")],-1),o=[l];function r(e,t){return(0,s.uX)(),(0,s.CE)("div",n,o)}var i=a(71241);const u={},c=(0,i.A)(u,[["render",r]]);var d=c},2736:function(e,t,a){a.d(t,{A:function(){return se}});var s=a(56768),n=a(24232),l=a(90144),o=a(45130),r=a(76750),i=a(61981),u=a(24113);const c=e=>((0,s.Qi)("data-v-22d24db8"),e=e(),(0,s.jt)(),e),d=u+"#ic_close",v=u+"#ic_check",m={class:"modal"},k={class:"modal_content"},_={class:"data"},g=c((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":d})],-1))),p=[g],b={class:"modal_title"},R={class:"fee_tier"},x={class:"label"},L=c((()=>(0,s.Lk)("div",{class:"toggle_wrap"},[(0,s.Lk)("div",{class:"toggle"},[(0,s.Lk)("div",{class:"ball_wrap"},[(0,s.Lk)("div",{class:"ball"},[(0,s.Lk)("svg",null,[(0,s.Lk)("use",{"xlink:href":v})])])])])],-1))),w={class:"vals_wrap"},h={class:"vals"},T={class:"name"},F={class:"cost"},y={class:"amount"},f={class:"denom"},A={class:"name"},C={class:"cost"},$={class:"amount"},E={class:"denom"},D={class:"name"},N={class:"cost"},G={class:"amount"},K={class:"denom"},B={class:"fee_token"},S={class:"label"},j={class:"field"},U=["value"],X={class:"gas_adjustment"},W={class:"label"},Q={key:0},I={key:1},J=(0,s.Fv)('<div class="toggle_wrap" data-v-22d24db8><div class="toggle" data-v-22d24db8><div class="ball_wrap" data-v-22d24db8><div class="ball" data-v-22d24db8><svg data-v-22d24db8><use xlink:href="'+v+'" data-v-22d24db8></use></svg></div></div></div></div>',1),P={key:0,class:"field"},M=["value"],V={key:1,class:"field"},Y={class:"btns"};var q={__name:"TxFeeModal",setup(e){const t=(0,r.o)(),a=(0,s.WQ)("emitter");function u(e){e.target.value<=0&&(t.TxFee.userGasAmount=t.TxFee.gasAmount)}return(0,s.wB)((0,s.EW)((()=>t.TxFee.isGasAdjustmentAuto)),(()=>{t.TxFee.userGasAmount=t.TxFee.gasAmount})),(0,s.wB)((0,s.EW)((()=>t.TxFee.userGasAmount)),(()=>{t.TxFeeIsEnough()})),(e,r)=>((0,s.uX)(),(0,s.CE)("section",m,[(0,s.Lk)("div",k,[(0,s.Lk)("div",_,[(0,s.Lk)("button",{class:"close_btn",onClick:r[0]||(r[0]=(0,o.D$)((e=>(0,l.R1)(a).emit("close_tx_fee_modal")),["prevent"]))},p),(0,s.Lk)("div",b,(0,n.v_)(e.$t("message.tx_fee_modal_title")),1),(0,s.Lk)("div",R,[(0,s.Lk)("div",x,[(0,s.Lk)("span",null,(0,n.v_)(e.$t("message.tx_fee_fee_tier_label")),1),(0,s.Lk)("button",{class:(0,n.C4)(["toggle_btn",{enabled:(0,l.R1)(t).TxFee.isRemember}]),onClick:r[1]||(r[1]=(0,o.D$)((e=>(0,l.R1)(t).TxFee.isRemember=!(0,l.R1)(t).TxFee.isRemember),["prevent"]))},[(0,s.Lk)("span",null,(0,n.v_)(e.$t("message.tx_fee_remember_label")),1),L],2)]),(0,s.Lk)("div",w,[(0,s.Lk)("div",h,[(0,s.Lk)("button",{class:(0,n.C4)(["btn",{active:"low"===(0,l.R1)(t).TxFee.currentLevel}]),onClick:r[2]||(r[2]=(0,o.D$)((e=>(0,l.R1)(t).TxFee.currentLevel="low"),["prevent"]))},[(0,s.Lk)("div",T,(0,n.v_)(e.$t("message.tx_fee_low_label")),1),(0,s.Lk)("div",F," ~ "+(0,n.v_)((0,l.R1)(i.ST)((0,l.R1)(i.Y$)((0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].token_name,(0,l.R1)(t).TxFee.userGasAmount*(0,l.R1)(t).TxFee.lowPrice,(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].exponent,"USD"),"USD"))+"$ ",1),(0,s.Lk)("div",y,(0,n.v_)((0,l.R1)(i.NJ)((0,l.R1)(t).TxFee.userGasAmount*(0,l.R1)(t).TxFee.lowPrice,(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].exponent).toLocaleString("ru-RU",{maximumFractionDigits:5}).replace(",",".")),1),(0,s.Lk)("div",f,(0,n.v_)((0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].token_name),1)],2),(0,s.Lk)("button",{class:(0,n.C4)(["btn",{active:"average"===(0,l.R1)(t).TxFee.currentLevel}]),onClick:r[3]||(r[3]=(0,o.D$)((e=>(0,l.R1)(t).TxFee.currentLevel="average"),["prevent"]))},[(0,s.Lk)("div",A,(0,n.v_)(e.$t("message.tx_fee_average_label")),1),(0,s.Lk)("div",C," ~ "+(0,n.v_)((0,l.R1)(i.ST)((0,l.R1)(i.Y$)((0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].token_name,(0,l.R1)(t).TxFee.userGasAmount*(0,l.R1)(t).TxFee.averagePrice,(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].exponent,"USD"),"USD"))+"$ ",1),(0,s.Lk)("div",$,(0,n.v_)((0,l.R1)(i.NJ)((0,l.R1)(t).TxFee.userGasAmount*(0,l.R1)(t).TxFee.averagePrice,(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].exponent).toLocaleString("ru-RU",{maximumFractionDigits:5}).replace(",",".")),1),(0,s.Lk)("div",E,(0,n.v_)((0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].token_name),1)],2),(0,s.Lk)("button",{class:(0,n.C4)(["btn",{active:"high"===(0,l.R1)(t).TxFee.currentLevel}]),onClick:r[4]||(r[4]=(0,o.D$)((e=>(0,l.R1)(t).TxFee.currentLevel="high"),["prevent"]))},[(0,s.Lk)("div",D,(0,n.v_)(e.$t("message.tx_fee_high_label")),1),(0,s.Lk)("div",N," ~ "+(0,n.v_)((0,l.R1)(i.ST)((0,l.R1)(i.Y$)((0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].token_name,(0,l.R1)(t).TxFee.userGasAmount*(0,l.R1)(t).TxFee.highPrice,(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].exponent,"USD"),"USD"))+"$ ",1),(0,s.Lk)("div",G,(0,n.v_)((0,l.R1)(i.NJ)((0,l.R1)(t).TxFee.userGasAmount*(0,l.R1)(t).TxFee.highPrice,(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].exponent).toLocaleString("ru-RU",{maximumFractionDigits:5}).replace(",",".")),1),(0,s.Lk)("div",K,(0,n.v_)((0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].token_name),1)],2)])])]),(0,s.Lk)("div",B,[(0,s.Lk)("div",S,(0,n.v_)(e.$t("message.tx_fee_fee_token_label")),1),(0,s.Lk)("div",j,[(0,s.Lk)("input",{type:"text",class:"input big",value:(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].token_name,readonly:"",onFocus:r[5]||(r[5]=e=>(0,l.R1)(a).emit("show_keyboard")),onBlur:r[6]||(r[6]=e=>(0,l.R1)(a).emit("hide_keyboard"))},null,40,U)])]),(0,s.Lk)("div",X,[(0,s.Lk)("div",W,[(0,l.R1)(t).TxFee.isGasAdjustmentAuto?((0,s.uX)(),(0,s.CE)("span",Q,(0,n.v_)(e.$t("message.tx_fee_gas_adjustment_label")),1)):((0,s.uX)(),(0,s.CE)("span",I,(0,n.v_)(e.$t("message.tx_fee_gas_amount_label")),1)),(0,s.Lk)("button",{class:(0,n.C4)(["toggle_btn",{enabled:(0,l.R1)(t).TxFee.isGasAdjustmentAuto}]),onClick:r[7]||(r[7]=(0,o.D$)((e=>(0,l.R1)(t).TxFee.isGasAdjustmentAuto=!(0,l.R1)(t).TxFee.isGasAdjustmentAuto),["prevent"]))},[(0,s.Lk)("span",null,(0,n.v_)(e.$t("message.tx_fee_auto_label")),1),J],2)]),(0,l.R1)(t).TxFee.isGasAdjustmentAuto?((0,s.uX)(),(0,s.CE)("div",P,[(0,s.Lk)("input",{type:"number",class:"input big",value:(0,l.R1)(t).networks[(0,l.R1)(t).currentNetwork].gas_adjustment,disabled:"",onFocus:r[8]||(r[8]=e=>(0,l.R1)(a).emit("show_keyboard")),onBlur:r[9]||(r[9]=e=>(0,l.R1)(a).emit("hide_keyboard"))},null,40,M)])):((0,s.uX)(),(0,s.CE)("div",V,[(0,s.bo)((0,s.Lk)("input",{type:"number",inputmode:"numeric",class:"input big","onUpdate:modelValue":r[10]||(r[10]=e=>(0,l.R1)(t).TxFee.userGasAmount=e),maxlength:"10",onFocus:r[11]||(r[11]=e=>(0,l.R1)(a).emit("show_keyboard")),onBlur:r[12]||(r[12]=e=>(0,l.R1)(a).emit("hide_keyboard")),onInput:r[13]||(r[13]=e=>u(e))},null,544),[[o.Jo,(0,l.R1)(t).TxFee.userGasAmount]])]))]),(0,s.Lk)("div",Y,[(0,s.Lk)("button",{class:"btn",onClick:r[14]||(r[14]=(0,o.D$)((e=>(0,l.R1)(a).emit("close_tx_fee_modal")),["prevent"]))},[(0,s.Lk)("span",null,(0,n.v_)(e.$t("message.btn_close")),1)])])])]),(0,s.Lk)("div",{class:"overlay",onClick:r[15]||(r[15]=(0,o.D$)((e=>(0,l.R1)(a).emit("close_tx_fee_modal")),["prevent"]))})]))}},z=a(71241);const H=(0,z.A)(q,[["__scopeId","data-v-22d24db8"]]);var O=H;const Z={class:"tx_fee"},ee={class:"cost"};var te={__name:"TxFee",props:["msgAny","txType"],setup(e){const t=e,a=(0,r.o)(),u=(0,s.WQ)("emitter"),c=(0,l.KR)(!1),d=(0,s.EW)((()=>(0,i.NJ)(a.TxFee.userGasAmount*a.TxFee[`${a.TxFee.currentLevel}Price`],a.networks[a.currentNetwork].exponent)));return(0,s.KC)((async()=>{a.TxFeeGetCurrentBalance(a.networks[a.currentNetwork].denom),a.TxFeeSetGasPrices(),a.TxFee.balance.amount?await(0,i.jC)(t.msgAny):("send"===t.txType&&(a.TxFee.gasAmount=a.TxFee.userGasAmount=a.networks[a.currentNetwork].gas_amount_send),"claim"===t.txType&&(a.TxFee.gasAmount=a.TxFee.userGasAmount=a.networks[a.currentNetwork].gas_amount_claim),"stake"===t.txType&&(a.TxFee.gasAmount=a.TxFee.userGasAmount=a.networks[a.currentNetwork].gas_amount_stake),"unstake"===t.txType&&(a.TxFee.gasAmount=a.TxFee.userGasAmount=a.networks[a.currentNetwork].gas_amount_unstake),"redelegate"===t.txType&&(a.TxFee.gasAmount=a.TxFee.userGasAmount=a.networks[a.currentNetwork].gas_amount_redelegate)),a.TxFeeIsEnough()})),u.on("close_tx_fee_modal",(()=>{c.value=!1})),(e,t)=>((0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",Z,[(0,s.Lk)("button",{class:(0,n.C4)(["btn",{red:!(0,l.R1)(a).TxFee.isEnough}]),onClick:t[0]||(t[0]=(0,o.D$)((e=>c.value=!0),["prevent"]))},[(0,s.eW)((0,n.v_)(e.$t("message.tx_fee_label"))+" "+(0,n.v_)(d.value.toLocaleString("ru-RU",{maximumFractionDigits:5}).replace(",","."))+" "+(0,n.v_)((0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].token_name)+" ",1),(0,s.Lk)("div",ee," (~ "+(0,n.v_)((0,l.R1)(i.ST)((0,l.R1)(i.Y$)((0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].token_name,(0,l.R1)(a).TxFee.userGasAmount*(0,l.R1)(a).TxFee[`${(0,l.R1)(a).TxFee.currentLevel}Price`],(0,l.R1)(a).networks[(0,l.R1)(a).currentNetwork].exponent,"USD"),"USD"))+"$) ",1)],2)]),c.value?((0,s.uX)(),(0,s.Wv)(O,{key:0})):(0,s.Q3)("",!0)],64))}};const ae=(0,z.A)(te,[["__scopeId","data-v-6d979db7"]]);var se=ae},29234:function(e,t,a){a.d(t,{A:function(){return N}});var s=a(56768),n=a(45130),l=a(90144),o=a(24232),r=a(24113),i=a(41254);const u=r+"#ic_close",c={class:"modal"},d={class:"modal_content"},v={class:"data"},m=(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":u})],-1),k=[m],_={class:"modal_title"},g={class:"modal_desc"},p={class:"btns"};var b={__name:"SignTxErrorModal",setup(e){const t=(0,s.WQ)("emitter");return(e,a)=>((0,s.uX)(),(0,s.CE)("section",c,[(0,s.Lk)("div",d,[(0,s.Lk)("div",v,[(0,s.Lk)("button",{class:"close_btn",onClick:a[0]||(a[0]=(0,n.D$)((e=>(0,l.R1)(t).emit("close_sign_tx_modal")),["prevent"]))},k),(0,s.Lk)("div",_,(0,o.v_)(e.$t("message.sign_tx_error_title")),1),(0,s.Lk)("div",g,(0,o.v_)(e.$t("message.sign_tx_error_desc")),1),(0,s.Lk)("div",p,[(0,s.Lk)("button",{class:"btn",onClick:a[1]||(a[1]=(0,n.D$)((e=>(0,l.R1)(t).emit("close_sign_tx_modal")),["prevent"]))},[(0,s.Lk)("span",null,(0,o.v_)(e.$t("message.btn_understood")),1)])])])]),(0,s.Lk)("div",{class:"overlay",onClick:a[2]||(a[2]=(0,n.D$)((e=>(0,l.R1)(t).emit("close_sign_tx_modal")),["prevent"]))})]))}};const R=b;var x=R;const L=e=>((0,s.Qi)("data-v-2555cd17"),e=e(),(0,s.jt)(),e),w=r+"#ic_close",h={key:0,class:"modal"},T={class:"modal_content"},F={class:"data"},y=L((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":w})],-1))),f=[y],A={class:"modal_title"},C={class:"auth_wrap"};var $={__name:"SignTx",setup(e){const t=(0,s.WQ)("emitter"),a=(0,l.KR)(!1);return t.on("show_error_sign_tx_modal",(()=>{a.value=!0})),(e,r)=>((0,s.uX)(),(0,s.CE)(s.FK,null,[a.value?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("section",h,[(0,s.Lk)("div",T,[(0,s.Lk)("div",F,[(0,s.Lk)("button",{class:"close_btn",onClick:r[0]||(r[0]=(0,n.D$)((e=>(0,l.R1)(t).emit("close_sign_tx_modal")),["prevent"]))},f),(0,s.Lk)("div",A,(0,o.v_)(e.$t("message.sign_tx_title")),1),(0,s.Lk)("div",C,[(0,s.bF)(i.A)])])]),(0,s.Lk)("div",{class:"overlay",onClick:r[1]||(r[1]=(0,n.D$)((e=>(0,l.R1)(t).emit("close_sign_tx_modal")),["prevent"]))})])),a.value?((0,s.uX)(),(0,s.Wv)(x,{key:1})):(0,s.Q3)("",!0)],64))}},E=a(71241);const D=(0,E.A)($,[["__scopeId","data-v-2555cd17"]]);var N=D}}]);
//# sourceMappingURL=861.6b91f2b1.js.map