"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[997],{17086:function(e,a,l){l.d(a,{A:function(){return r}});var s=l(56768);const t={class:"loader_wrap"},n=(0,s.Lk)("div",{class:"loader"},[(0,s.Lk)("span")],-1),u=[n];function c(e,a){return(0,s.uX)(),(0,s.CE)("div",t,u)}var v=l(71241);const i={},o=(0,v.A)(i,[["render",c]]);var r=o},46997:function(e,a,l){l.r(a),l.d(a,{default:function(){return S}});l(44114);var s=l(56768),t=l(24232),n=l(45130),u=l(24113),c=l(90144),v=l(81387),i=l(76750),o=l(67278),r=l(38326),k=l(61981),d=l(17086);const _=e=>((0,s.Qi)("data-v-12c12948"),e=e(),(0,s.jt)(),e),p=u+"#ic_arrow_hor",L=u+"#ic_copy",b=u+"#ic_check",f={class:"page_container create_wallet_page"},g={class:"cont"},m={class:"page_title"},h={class:"page_data_wrap"},w={class:"page_data"},y=_((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":p})],-1))),C={class:"tabs_wrap"},$=_((()=>(0,s.Lk)("span",null,null,-1))),K=[$],x={class:"mnemonic"},E={class:"row"},R={class:"input"},X={key:0,class:"blur"},W=["disabled"],D=_((()=>(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":L})],-1))),N={key:0,class:"agree"},A={class:"label"},Q={class:"checkbox"},F=_((()=>(0,s.Lk)("div",{class:"check"},[(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":b})])],-1))),B={class:"label"},H={class:"checkbox"},I=_((()=>(0,s.Lk)("div",{class:"check"},[(0,s.Lk)("svg",{class:"icon"},[(0,s.Lk)("use",{"xlink:href":b})])],-1))),U={class:"btns"};var V={__name:"CreateWalletPage",setup(e){const a=(0,i.o)(),l=(0,v.rd)(),u=(0,s.WQ)("i18n"),_=(0,o.hN)(),p=(0,c.KR)(!0),L=(0,c.KR)(12),b=(0,c.KR)(null),$=(0,c.KR)(!1),V=(0,c.KR)(!1),j=(0,c.KR)(!1),P=(0,c.KR)(1),S=(0,c.KR)(null),T=(0,c.KR)(null),Y=[S,T],Z=(0,c.KR)(null),q=(0,c.KR)(null),{copy:z}=(0,r.iDZ)();function G(){z(b.value.secret.data),_.notify({group:"default",clean:!0}),_.notify({group:"default",speed:200,duration:750,title:u.global.t("message.notification_copied_title"),type:"copied"})}async function J(){p.value=!0,await a.setSecret(b.value.secret.data),l.push("/confirm_wallet")}return(0,s.KC)((async()=>{b.value=await(0,k.NN)(L.value),p.value=!1})),(0,s.wB)((0,s.EW)((()=>p.value)),(async()=>{p.value||(await(0,s.dY)(),Z.value=Y[P.value-1].value.offsetWidth,q.value=Y[P.value-1].value.offsetLeft)})),(0,s.wB)((0,s.EW)((()=>P.value)),(async()=>{Z.value=Y[P.value-1].value.offsetWidth,q.value=Y[P.value-1].value.offsetLeft,b.value=await(0,k.NN)(L.value)})),(e,a)=>{const l=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("section",f,[(0,s.Lk)("div",g,[(0,s.Lk)("div",m,(0,t.v_)(e.$t("message.create_wallet_title")),1),(0,s.Lk)("div",h,[(0,s.Lk)("div",w,[p.value?((0,s.uX)(),(0,s.Wv)(d.A,{key:0})):((0,s.uX)(),(0,s.CE)(s.FK,{key:1},[(0,s.bF)(l,{class:"back_btn",to:"/"},{default:(0,s.k6)((()=>[y])),_:1}),(0,s.Lk)("div",C,[(0,s.Lk)("div",{class:(0,t.C4)(["tabs",{disabled:!j.value}])},[(0,s.Lk)("button",{class:(0,t.C4)(["btn",{active:1===P.value}]),ref_key:"tab1",ref:S,onClick:a[0]||(a[0]=(0,n.D$)((e=>{P.value=1,L.value=12}),["prevent"]))},[(0,s.Lk)("span",null,(0,t.v_)(e.$t("message.mnemonic_tab1")),1)],2),(0,s.Lk)("button",{class:(0,t.C4)(["btn",{active:2===P.value}]),ref_key:"tab2",ref:T,onClick:a[1]||(a[1]=(0,n.D$)((e=>{P.value=2,L.value=24}),["prevent"]))},[(0,s.Lk)("span",null,(0,t.v_)(e.$t("message.mnemonic_tab2")),1)],2),(0,s.Lk)("div",{class:"roller",style:(0,t.Tr)(`width: ${Z.value}px; left: ${q.value}px;`)},K,4)],2)]),(0,s.Lk)("div",x,[(0,s.Lk)("div",E,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(b.value.secret.data.split(" "),((e,a)=>((0,s.uX)(),(0,s.CE)("div",{class:"word",key:a},[(0,s.Lk)("div",R,(0,t.v_)(e),1)])))),128)),j.value?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("div",X))]),(0,s.Lk)("button",{class:"copy_btn",disabled:!j.value,onClick:a[2]||(a[2]=(0,n.D$)((e=>G()),["prevent"]))},[D,(0,s.Lk)("span",null,(0,t.v_)(e.$t("message.btn_copy")),1)],8,W)]),j.value?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("div",N,[(0,s.Lk)("div",null,[(0,s.Lk)("div",A,(0,t.v_)(e.$t("message.create_wallet_agree_label1")),1),(0,s.Lk)("label",Q,[(0,s.bo)((0,s.Lk)("input",{type:"checkbox","onUpdate:modelValue":a[3]||(a[3]=e=>$.value=e),value:"true"},null,512),[[n.lH,$.value]]),F,(0,s.Lk)("div",null,(0,t.v_)(e.$t("message.create_wallet_agree_checkbox1")),1)])]),(0,s.Lk)("div",null,[(0,s.Lk)("div",B,(0,t.v_)(e.$t("message.create_wallet_agree_label2")),1),(0,s.Lk)("label",H,[(0,s.bo)((0,s.Lk)("input",{type:"checkbox","onUpdate:modelValue":a[4]||(a[4]=e=>V.value=e),value:"true"},null,512),[[n.lH,V.value]]),I,(0,s.Lk)("div",null,(0,t.v_)(e.$t("message.create_wallet_agree_checkbox2")),1)])])])),(0,s.Lk)("div",U,[j.value?((0,s.uX)(),(0,s.CE)("div",{key:1,class:"btn",onClick:a[6]||(a[6]=(0,n.D$)((e=>J()),["prevent"]))},[(0,s.Lk)("span",null,(0,t.v_)(e.$t("message.btn_next")),1)])):((0,s.uX)(),(0,s.CE)("div",{key:0,class:(0,t.C4)(["btn",{disabled:!$.value||!V.value}]),onClick:a[5]||(a[5]=(0,n.D$)((e=>j.value=!0),["prevent"]))},[(0,s.Lk)("span",null,(0,t.v_)(e.$t("message.btn_show")),1)],2))])],64))])])])])}}},j=l(71241);const P=(0,j.A)(V,[["__scopeId","data-v-12c12948"]]);var S=P}}]);
//# sourceMappingURL=997.b18f5666.js.map