"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[820],{26820:function(e,a,l){l.r(a),l.d(a,{default:function(){return S}});l(44114);var s=l(56768),t=l(24232),u=l(45130),c=l(24113),n=l(90144),v=l(81387),i=l(96011),k=l(67278),o=l(38326),r=l(86307),d=l(17086);const _=e=>((0,s.Qi)("data-v-13624c59"),e=e(),(0,s.jt)(),e),p=c+"#ic_arrow_hor",b=c+"#ic_copy",L=c+"#ic_check",g={class:"page_container create_wallet_page"},f={class:"cont"},m={class:"page_title"},h={class:"page_data_wrap"},y={class:"page_data"},w=_((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":p})],-1))),C={class:"tabs_wrap"},$=_((()=>(0,s.Lk)("span",null,null,-1))),K=[$],x={class:"mnemonic"},R={class:"row"},E={class:"input"},X={key:0,class:"blur"},W=["disabled"],D=_((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":b})],-1))),N={key:0,class:"agree"},Q={class:"label"},F={class:"checkbox"},A=_((()=>(0,s.Lk)("div",{class:"check"},[(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":L})])],-1))),B={class:"label"},H={class:"checkbox"},I=_((()=>(0,s.Lk)("div",{class:"check"},[(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":L})])],-1))),U={class:"btns"};var V={__name:"CreateWalletPage",setup(e){const a=(0,i.o)(),l=(0,v.rd)(),c=(0,s.WQ)("i18n"),_=(0,k.hN)(),p=(0,n.KR)(!0),b=(0,n.KR)(12),L=(0,n.KR)(null),$=(0,n.KR)(!1),V=(0,n.KR)(!1),j=(0,n.KR)(!1),P=(0,n.KR)(1),S=(0,n.KR)(null),T=(0,n.KR)(null),Y=[S,T],Z=(0,n.KR)(null),q=(0,n.KR)(null),{copy:z}=(0,o.iDZ)();function G(){z(L.value.secret.data),_.notify({group:"default",clean:!0}),_.notify({group:"default",speed:200,duration:750,title:c.global.t("message.notification_copied_title"),type:"copied"})}async function J(){p.value=!0,await a.setSecret(L.value.secret.data),l.push("/confirm_wallet")}return(0,s.KC)((async()=>{L.value=await(0,r.NN)(b.value),p.value=!1})),(0,s.wB)((0,s.EW)((()=>p.value)),(async()=>{p.value||(await(0,s.dY)(),Z.value=Y[P.value-1].value.offsetWidth,q.value=Y[P.value-1].value.offsetLeft)})),(0,s.wB)((0,s.EW)((()=>P.value)),(async()=>{Z.value=Y[P.value-1].value.offsetWidth,q.value=Y[P.value-1].value.offsetLeft,L.value=await(0,r.NN)(b.value)})),(e,a)=>{const l=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("section",g,[(0,s.Lk)("div",f,[(0,s.Lk)("div",m,(0,t.v_)(e.$t("message.create_wallet_title")),1),(0,s.Lk)("div",h,[(0,s.Lk)("div",y,[p.value?((0,s.uX)(),(0,s.Wv)(d.A,{key:0})):((0,s.uX)(),(0,s.CE)(s.FK,{key:1},[(0,s.bF)(l,{class:"back_btn",to:"/"},{default:(0,s.k6)((()=>[w])),_:1}),(0,s.Lk)("div",C,[(0,s.Lk)("div",{class:(0,t.C4)(["tabs",{disabled:!j.value}])},[(0,s.Lk)("button",{class:(0,t.C4)(["btn",{active:1===P.value}]),ref_key:"tab1",ref:S,onClick:a[0]||(a[0]=(0,u.D$)((e=>{P.value=1,b.value=12}),["prevent"]))},[(0,s.Lk)("span",null,(0,t.v_)(e.$t("message.mnemonic_tab1")),1)],2),(0,s.Lk)("button",{class:(0,t.C4)(["btn",{active:2===P.value}]),ref_key:"tab2",ref:T,onClick:a[1]||(a[1]=(0,u.D$)((e=>{P.value=2,b.value=24}),["prevent"]))},[(0,s.Lk)("span",null,(0,t.v_)(e.$t("message.mnemonic_tab2")),1)],2),(0,s.Lk)("div",{class:"roller",style:(0,t.Tr)(`width: ${Z.value}px; left: ${q.value}px;`)},K,4)],2)]),(0,s.Lk)("div",x,[(0,s.Lk)("div",R,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(L.value.secret.data.split(" "),((e,a)=>((0,s.uX)(),(0,s.CE)("div",{class:"word",key:a},[(0,s.Lk)("div",E,(0,t.v_)(e),1)])))),128)),j.value?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("div",X))]),(0,s.Lk)("button",{class:"copy_btn",disabled:!j.value,onClick:a[2]||(a[2]=(0,u.D$)((e=>G()),["prevent"]))},[D,(0,s.Lk)("span",null,(0,t.v_)(e.$t("message.btn_copy")),1)],8,W)]),j.value?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("div",N,[(0,s.Lk)("div",null,[(0,s.Lk)("div",Q,(0,t.v_)(e.$t("message.create_wallet_agree_label1")),1),(0,s.Lk)("label",F,[(0,s.bo)((0,s.Lk)("input",{type:"checkbox","onUpdate:modelValue":a[3]||(a[3]=e=>$.value=e),value:"true"},null,512),[[u.lH,$.value]]),A,(0,s.Lk)("div",null,(0,t.v_)(e.$t("message.create_wallet_agree_checkbox1")),1)])]),(0,s.Lk)("div",null,[(0,s.Lk)("div",B,(0,t.v_)(e.$t("message.create_wallet_agree_label2")),1),(0,s.Lk)("label",H,[(0,s.bo)((0,s.Lk)("input",{type:"checkbox","onUpdate:modelValue":a[4]||(a[4]=e=>V.value=e),value:"true"},null,512),[[u.lH,V.value]]),I,(0,s.Lk)("div",null,(0,t.v_)(e.$t("message.create_wallet_agree_checkbox2")),1)])])])),(0,s.Lk)("div",U,[j.value?((0,s.uX)(),(0,s.CE)("div",{key:1,class:"btn",onClick:a[6]||(a[6]=(0,u.D$)((e=>J()),["prevent"]))},[(0,s.Lk)("span",null,(0,t.v_)(e.$t("message.btn_next")),1)])):((0,s.uX)(),(0,s.CE)("div",{key:0,class:(0,t.C4)(["btn",{disabled:!$.value||!V.value}]),onClick:a[5]||(a[5]=(0,u.D$)((e=>j.value=!0),["prevent"]))},[(0,s.Lk)("span",null,(0,t.v_)(e.$t("message.btn_show")),1)],2))])],64))])])])])}}},j=l(71241);const P=(0,j.A)(V,[["__scopeId","data-v-13624c59"]]);var S=P}}]);
//# sourceMappingURL=820.1720b2ec.js.map