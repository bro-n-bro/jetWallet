"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[411],{34371:function(e,a,l){l.d(a,{A:function(){return B}});l(44114);var s=l(56768),t=l(24232),u=l(45130),n=l(24113),c=l(90144),v=l(81387),i=l(96011),o=l(67278),r=l(38326),k=l(94886),d=l(17086);const _=n+"#ic_arrow_hor",p=n+"#ic_copy",b=n+"#ic_check",L={class:"page_container create_wallet_page"},f={class:"cont"},g={class:"page_title"},m={class:"page_data_wrap"},h={class:"page_data"},w={class:"tabs_wrap"},y={class:"mnemonic"},C={class:"row"},$={class:"input"},K={key:0,class:"blur"},x=["disabled"],R={key:0,class:"agree"},E={class:"label"},X={class:"checkbox"},A={class:"label"},W={class:"checkbox"},D={class:"btns"};var N={__name:"CreatePage",props:["isAdding"],setup(e){const a=e,l=(0,i.useGlobalStore)(),n=(0,v.rd)(),N=(0,s.WQ)("i18n"),F=(0,o.hN)(),Q=(0,c.KR)(!0),B=(0,c.KR)(12),H=(0,c.KR)(null),I=(0,c.KR)(!1),P=(0,c.KR)(!1),S=(0,c.KR)(!1),U=(0,c.KR)(1),V=(0,c.KR)(null),G=(0,c.KR)(null),T=[V,G],Y=(0,c.KR)(null),Z=(0,c.KR)(null),{copy:j}=(0,r.iDZ)();function q(){j(H.value.secret.data),F.notify({group:"default",clean:!0}),F.notify({group:"default",speed:200,duration:750,title:N.global.t("message.notification_copied_title"),type:"copied"})}async function z(){Q.value=!0,await l.setSecret(H.value.secret.data),a.isAdding?n.push("/add_wallet/confirm"):n.push("/confirm_wallet")}return(0,s.KC)((async()=>{H.value=await(0,k.NN)(B.value),Q.value=!1})),(0,s.wB)((0,s.EW)((()=>Q.value)),(async()=>{Q.value||(await(0,s.dY)(),Y.value=T[U.value-1].value.offsetWidth,Z.value=T[U.value-1].value.offsetLeft)})),(0,s.wB)((0,s.EW)((()=>U.value)),(async()=>{Y.value=T[U.value-1].value.offsetWidth,Z.value=T[U.value-1].value.offsetLeft,H.value=await(0,k.NN)(B.value)})),(e,a)=>{const l=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("section",L,[(0,s.Lk)("div",f,[(0,s.Lk)("div",g,(0,t.v_)(e.$t("message.create_wallet_title")),1),(0,s.Lk)("div",m,[(0,s.Lk)("div",h,[Q.value?((0,s.uX)(),(0,s.Wv)(d.A,{key:0})):((0,s.uX)(),(0,s.CE)(s.FK,{key:1},[(0,s.bF)(l,{class:"back_btn",to:"/"},{default:(0,s.k6)((()=>a[7]||(a[7]=[(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":_})],-1)]))),_:1}),(0,s.Lk)("div",w,[(0,s.Lk)("div",{class:(0,t.C4)(["tabs",{disabled:!S.value}])},[(0,s.Lk)("button",{class:(0,t.C4)(["btn",{active:1===U.value}]),ref_key:"tab1",ref:V,onClick:a[0]||(a[0]=(0,u.D$)((e=>{U.value=1,B.value=12}),["prevent"]))},[(0,s.Lk)("span",null,(0,t.v_)(e.$t("message.mnemonic_tab1")),1)],2),(0,s.Lk)("button",{class:(0,t.C4)(["btn",{active:2===U.value}]),ref_key:"tab2",ref:G,onClick:a[1]||(a[1]=(0,u.D$)((e=>{U.value=2,B.value=24}),["prevent"]))},[(0,s.Lk)("span",null,(0,t.v_)(e.$t("message.mnemonic_tab2")),1)],2),(0,s.Lk)("div",{class:"roller",style:(0,t.Tr)(`width: ${Y.value}px; left: ${Z.value}px;`)},a[8]||(a[8]=[(0,s.Lk)("span",null,null,-1)]),4)],2)]),(0,s.Lk)("div",y,[(0,s.Lk)("div",C,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(H.value.secret.data.split(" "),((e,a)=>((0,s.uX)(),(0,s.CE)("div",{class:"word",key:a},[(0,s.Lk)("div",$,(0,t.v_)(e),1)])))),128)),S.value?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("div",K))]),(0,s.Lk)("button",{class:"copy_btn",disabled:!S.value,onClick:a[2]||(a[2]=(0,u.D$)((e=>q()),["prevent"]))},[a[9]||(a[9]=(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":p})],-1)),(0,s.Lk)("span",null,(0,t.v_)(e.$t("message.btn_copy")),1)],8,x)]),S.value?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("div",R,[(0,s.Lk)("div",null,[(0,s.Lk)("div",E,(0,t.v_)(e.$t("message.create_wallet_agree_label1")),1),(0,s.Lk)("label",X,[(0,s.bo)((0,s.Lk)("input",{type:"checkbox","onUpdate:modelValue":a[3]||(a[3]=e=>I.value=e),value:"true"},null,512),[[u.lH,I.value]]),a[10]||(a[10]=(0,s.Lk)("div",{class:"check"},[(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":b})])],-1)),(0,s.Lk)("div",null,(0,t.v_)(e.$t("message.create_wallet_agree_checkbox1")),1)])]),(0,s.Lk)("div",null,[(0,s.Lk)("div",A,(0,t.v_)(e.$t("message.create_wallet_agree_label2")),1),(0,s.Lk)("label",W,[(0,s.bo)((0,s.Lk)("input",{type:"checkbox","onUpdate:modelValue":a[4]||(a[4]=e=>P.value=e),value:"true"},null,512),[[u.lH,P.value]]),a[11]||(a[11]=(0,s.Lk)("div",{class:"check"},[(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":b})])],-1)),(0,s.Lk)("div",null,(0,t.v_)(e.$t("message.create_wallet_agree_checkbox2")),1)])])])),(0,s.Lk)("div",D,[S.value?((0,s.uX)(),(0,s.CE)("div",{key:1,class:"btn",onClick:a[6]||(a[6]=(0,u.D$)((e=>z()),["prevent"]))},[(0,s.Lk)("span",null,(0,t.v_)(e.$t("message.btn_next")),1)])):((0,s.uX)(),(0,s.CE)("div",{key:0,class:(0,t.C4)(["btn",{disabled:!I.value||!P.value}]),onClick:a[5]||(a[5]=(0,u.D$)((e=>S.value=!0),["prevent"]))},[(0,s.Lk)("span",null,(0,t.v_)(e.$t("message.btn_show")),1)],2))])],64))])])])])}}},F=l(71241);const Q=(0,F.A)(N,[["__scopeId","data-v-c79a7ff0"]]);var B=Q},36411:function(e,a,l){l.r(a),l.d(a,{default:function(){return c}});var s=l(56768),t=l(34371),u={__name:"CreatePage",setup(e){return(e,a)=>((0,s.uX)(),(0,s.Wv)(t.A,{isAdding:"true"}))}};const n=u;var c=n}}]);
//# sourceMappingURL=411.b5ee458e.js.map