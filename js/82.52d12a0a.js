"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[82],{56082:function(a,e,t){t.r(e),t.d(e,{default:function(){return k}});t(44114);var s=t(56768),r=t(24232),c=t(96011),i=t(81387),o=t(36571),u=t(40356);const n={class:"page_container auth_page"},l={class:"cont"},_={class:"page_title"},p={class:"page_data_wrap"},d={class:"page_data"};var h={__name:"AuthPage",setup(a){const e=(0,c.useGlobalStore)(),t=(0,i.rd)(),h=(0,s.WQ)("emitter");return(0,s.sV)((async()=>{let a=await(0,o.$R)("global","userLockTimestamp");new Date(a)-new Date<e.userLockTime&&await e.setUserUnlock()})),(0,s.hi)((()=>{h.off("auth")})),h.on("auth",(()=>{e.updateUserAuthErrorLimit(e.authErrorLimit),e.isAuthorized=!0,t.push("/account")})),(a,e)=>((0,s.uX)(),(0,s.CE)("section",n,[(0,s.Lk)("div",l,[(0,s.Lk)("div",_,(0,r.v_)(a.$t("message.auth_title")),1),(0,s.Lk)("div",p,[(0,s.Lk)("div",d,[(0,s.bF)(u.A)])])])]))}},g=t(71241);const m=(0,g.A)(h,[["__scopeId","data-v-7322c97a"]]);var k=m}}]);
//# sourceMappingURL=82.52d12a0a.js.map