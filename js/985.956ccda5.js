"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[985],{17086:function(e,a,l){l.d(a,{A:function(){return i}});var s=l(56768);const n={class:"loader_wrap"},t=(0,s.Lk)("div",{class:"loader"},[(0,s.Lk)("span")],-1),u=[t];function v(e,a){return(0,s.uX)(),(0,s.CE)("div",n,u)}var c=l(71241);const r={},o=(0,c.A)(r,[["render",v]]);var i=o},38944:function(e,a,l){l.r(a),l.d(a,{default:function(){return Q}});l(44114);var s=l(56768),n=l(24232),t=l(90144),u=l(45130),v=l(24113),c=l.p+"img/confirm_wallet_page_img.10164953.svg",r=l(81387),o=l(76750),i=l(17086);const d=e=>((0,s.Qi)("data-v-28da4e0f"),e=e(),(0,s.jt)(),e),_=v+"#ic_arrow_hor",k={class:"page_container confirm_create_wallet_page"},p={class:"cont"},m={class:"page_title"},L={class:"page_data_wrap"},f={class:"page_data"},g=d((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":_})],-1))),b={class:"confirm"},h={class:"row"},w={class:"label"},R={class:"label"},y={class:"image"},K=d((()=>(0,s.Lk)("img",{src:c,alt:"",loading:"lazy"},null,-1))),C={class:"btns"},x={class:"exp"};var $={__name:"ConfirmWalletPage",setup(e){const a=(0,o.o)(),l=(0,r.rd)(),v=(0,s.WQ)("emitter"),c=(0,t.KR)(!0),d=(0,t.KR)(0),_=(0,t.KR)(0),$=(0,t.KR)(""),A=(0,t.KR)(""),M=(0,t.KR)(!1),Q=(0,t.KR)(!1),W=(0,t.KR)(!1),X=(0,t.KR)(!1);function B(){let e=1,l=a.secret.split(" ").length;d.value=Math.floor(Math.random()*(l-e+1))+e;do{_.value=Math.floor(Math.random()*(l-e+1))+e}while(d.value===_.value)}function E(){M.value=!0,$.value===a.secret.split(" ")[d.value-1]?W.value=!0:W.value=!1}function J(){Q.value=!0,A.value===a.secret.split(" ")[_.value-1]?X.value=!0:X.value=!1}async function T(){c.value=!0,l.push("/create_pin")}return(0,s.KC)((async()=>{null!=a.secret?(B(),c.value=!1):(await a.getSecret(),B(),c.value=!1)})),(e,a)=>{const l=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("section",k,[(0,s.Lk)("div",p,[(0,s.Lk)("div",m,(0,n.v_)(e.$t("message.create_wallet_confirm_title")),1),(0,s.Lk)("div",L,[(0,s.Lk)("div",f,[c.value?((0,s.uX)(),(0,s.Wv)(i.A,{key:0})):(0,s.Q3)("",!0),(0,s.bF)(l,{class:"back_btn",to:"/create_wallet"},{default:(0,s.k6)((()=>[g])),_:1}),(0,s.Lk)("div",b,[(0,s.Lk)("div",h,[(0,s.Lk)("div",null,[(0,s.Lk)("div",w,[(0,s.Lk)("span",null,(0,n.v_)(e.$t("message.confirm_label")),1),(0,s.Lk)("span",null,(0,n.v_)(d.value)+".",1)]),(0,s.bo)((0,s.Lk)("input",{type:"text",class:(0,n.C4)(["input",{success:M.value&&W.value,error:M.value&&!W.value}]),"onUpdate:modelValue":a[0]||(a[0]=e=>$.value=e),onKeyup:a[1]||(a[1]=e=>E()),onTouchend:a[2]||(a[2]=e=>(0,t.R1)(v).emit("show_keyboard")),onBlur:a[3]||(a[3]=e=>(0,t.R1)(v).emit("hide_keyboard"))},null,34),[[u.Jo,$.value]])]),(0,s.Lk)("div",null,[(0,s.Lk)("div",R,[(0,s.Lk)("span",null,(0,n.v_)(e.$t("message.confirm_label")),1),(0,s.Lk)("span",null,(0,n.v_)(_.value)+".",1)]),(0,s.bo)((0,s.Lk)("input",{type:"text",class:(0,n.C4)(["input",{success:Q.value&&X.value,error:Q.value&&!X.value}]),"onUpdate:modelValue":a[4]||(a[4]=e=>A.value=e),onKeyup:a[5]||(a[5]=e=>J()),onTouchend:a[6]||(a[6]=e=>(0,t.R1)(v).emit("show_keyboard")),onBlur:a[7]||(a[7]=e=>(0,t.R1)(v).emit("hide_keyboard"))},null,34),[[u.Jo,A.value]])])])]),(0,s.Lk)("div",y,[(0,s.Lk)("div",{class:(0,n.C4)(["icon",{success:M.value&&W.value&&Q.value&&X.value,error:M.value&&!W.value||Q.value&&!X.value}])},null,2),K]),(0,s.Lk)("div",C,[(0,s.Lk)("div",{class:(0,n.C4)(["btn",{disabled:!W.value||!X.value}]),onClick:a[8]||(a[8]=(0,u.D$)((e=>T()),["prevent"]))},[(0,s.Lk)("span",null,(0,n.v_)(e.$t("message.btn_next")),1)],2)]),(0,s.Lk)("div",x,(0,n.v_)(e.$t("message.confirm_exp")),1)])])])])}}},A=l(71241);const M=(0,A.A)($,[["__scopeId","data-v-28da4e0f"]]);var Q=M}}]);
//# sourceMappingURL=985.956ccda5.js.map