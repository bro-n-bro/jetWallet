"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[523],{93878:function(e,a,l){l.d(a,{A:function(){return $}});l(44114);var s=l(56768),t=l(24232),u=l(45130),n=l(24113),i=l.p+"img/confirm_wallet_page_img.10164953.svg",o=l(90144),v=l(81387),c=l(69109),r=l(67278),d=l(17086);const _=n+"#ic_arrow_hor",p={class:"page_container confirm_create_wallet_page"},k={class:"cont"},g={class:"page_title"},m={class:"page_data_wrap"},f={class:"page_data"},L={class:"confirm"},b={class:"row"},w={class:"label"},h={class:"label"},C={class:"image"},K={class:"btns"},y={class:"exp"};var R={__name:"ConfirmPage",props:["isAdding"],setup(e){const a=e,l=(0,c.useGlobalStore)(),n=(0,v.rd)(),R=(0,s.WQ)("emitter"),A=(0,r.hN)(),x=(0,s.WQ)("i18n"),$=(0,o.KR)(!0),W=(0,o.KR)(""),M=(0,o.KR)(0),P=(0,o.KR)(0),Q=(0,o.KR)(""),X=(0,o.KR)(""),J=(0,o.KR)(!1),S=(0,o.KR)(!1),U=(0,o.KR)(!1),V=(0,o.KR)(!1);function z(){let e=1,a=W.value.split(" ").length;M.value=Math.floor(Math.random()*(a-e+1))+e;do{P.value=Math.floor(Math.random()*(a-e+1))+e}while(M.value===P.value)}function D(){J.value=!0,Q.value.trim().toLocaleLowerCase()===W.value.split(" ")[M.value-1]?U.value=!0:U.value=!1}function E(){S.value=!0,X.value.trim().toLocaleLowerCase()===W.value.split(" ")[P.value-1]?V.value=!0:V.value=!1}async function F(){$.value=!0,a.isAdding?(await l.createWallet({isAdding:!0}),n.push("/account"),R.emit("show_wallets_modal"),A.notify({group:"default",speed:200,duration:1e3,title:x.global.t("message.notification_wallet_added_success"),type:"success"})):n.push("/create_pin")}return(0,s.KC)((async()=>{W.value=await l.getSecret(),z(),$.value=!1})),(e,a)=>{const l=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("section",p,[(0,s.Lk)("div",k,[(0,s.Lk)("div",g,(0,t.v_)(e.$t("message.create_wallet_confirm_title")),1),(0,s.Lk)("div",m,[(0,s.Lk)("div",f,[$.value?((0,s.uX)(),(0,s.Wv)(d.A,{key:0})):(0,s.Q3)("",!0),(0,s.bF)(l,{class:"back_btn",to:"/create_wallet"},{default:(0,s.k6)((()=>a[7]||(a[7]=[(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":_})],-1)]))),_:1}),(0,s.Lk)("div",L,[(0,s.Lk)("div",b,[(0,s.Lk)("div",null,[(0,s.Lk)("div",w,[(0,s.Lk)("span",null,(0,t.v_)(e.$t("message.confirm_label")),1),(0,s.Lk)("span",null,(0,t.v_)(M.value)+".",1)]),(0,s.bo)((0,s.Lk)("input",{type:"text",class:(0,t.C4)(["input",{success:J.value&&U.value,error:J.value&&!U.value}]),"onUpdate:modelValue":a[0]||(a[0]=e=>Q.value=e),onKeyup:a[1]||(a[1]=e=>D()),onPaste:a[2]||(a[2]=e=>D())},null,34),[[u.Jo,Q.value]])]),(0,s.Lk)("div",null,[(0,s.Lk)("div",h,[(0,s.Lk)("span",null,(0,t.v_)(e.$t("message.confirm_label")),1),(0,s.Lk)("span",null,(0,t.v_)(P.value)+".",1)]),(0,s.bo)((0,s.Lk)("input",{type:"text",class:(0,t.C4)(["input",{success:S.value&&V.value,error:S.value&&!V.value}]),"onUpdate:modelValue":a[3]||(a[3]=e=>X.value=e),onKeyup:a[4]||(a[4]=e=>E()),onPaste:a[5]||(a[5]=e=>E())},null,34),[[u.Jo,X.value]])])])]),(0,s.Lk)("div",C,[(0,s.Lk)("div",{class:(0,t.C4)(["icon",{success:J.value&&U.value&&S.value&&V.value,error:J.value&&!U.value||S.value&&!V.value}])},null,2),a[8]||(a[8]=(0,s.Lk)("img",{src:i,alt:"",loading:"lazy"},null,-1))]),(0,s.Lk)("div",K,[(0,s.Lk)("div",{class:(0,t.C4)(["btn",{disabled:!U.value||!V.value}]),onClick:a[6]||(a[6]=(0,u.D$)((e=>F()),["prevent"]))},[(0,s.Lk)("span",null,(0,t.v_)(e.$t("message.btn_next")),1)],2)]),(0,s.Lk)("div",y,(0,t.v_)(e.$t("message.confirm_exp")),1)])])])])}}},A=l(71241);const x=(0,A.A)(R,[["__scopeId","data-v-78a7ff02"]]);var $=x},7078:function(e,a,l){l.r(a),l.d(a,{default:function(){return i}});var s=l(56768),t=l(93878),u={__name:"ConfirmPage",setup(e){return(e,a)=>((0,s.uX)(),(0,s.Wv)(t.A,{isAdding:"true"}))}};const n=u;var i=n}}]);
//# sourceMappingURL=523.5a116f75.js.map