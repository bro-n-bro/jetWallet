"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[321],{48321:function(e,s,t){t.r(s),t.d(s,{default:function(){return v}});t(44114);var a=t(56768),n=t(24232),r=t(96011),c=t(81387),d=t(67278);const o={class:"page_container get_address"},l={class:"cont"},u={class:"page_title"},_={class:"page_data_wrap"},i={class:"page_data"},p={class:"desc"},g={class:"btns"};var k={__name:"GetAddress",setup(e){const s=(0,r.o)(),t=(0,c.rd)(),k=(0,d.hN)(),m=(0,a.WQ)("i18n");async function f(){s.RTCConnections[s.startParams.peer].send({type:"address",address:s.currentAddress,pubKey:null}),k.notify({group:"default",speed:200,duration:1e3,title:m.global.t("message.notification_jp_get_address_success"),type:"default"}),s.startParams=null,t.push("/account")}function v(){s.RTCConnections[s.startParams.peer].send({type:"error",message:"The user rejected the request."}),s.startParams=null,k.notify({group:"default",speed:200,duration:1e3,title:m.global.t("message.notification_jp_get_address_reject"),type:"default"}),t.push("/account")}return(e,s)=>((0,a.uX)(),(0,a.CE)("section",o,[(0,a.Lk)("div",l,[(0,a.Lk)("div",u,(0,n.v_)(e.$t("message.jp_get_address_title")),1),(0,a.Lk)("div",_,[(0,a.Lk)("div",i,[(0,a.Lk)("div",p,(0,n.v_)(e.$t("message.jp_get_address_desc")),1),(0,a.Lk)("div",g,[(0,a.Lk)("button",{class:"btn",onClick:s[0]||(s[0]=e=>f())},[(0,a.Lk)("span",null,(0,n.v_)(e.$t("message.btn_approve")),1)]),(0,a.Lk)("button",{class:"btn purple_btn",onClick:s[1]||(s[1]=e=>v())},[(0,a.Lk)("span",null,(0,n.v_)(e.$t("message.btn_reject")),1)])])])])])]))}},m=t(71241);const f=(0,m.A)(k,[["__scopeId","data-v-e0667b38"]]);var v=f}}]);
//# sourceMappingURL=321.707ffa73.js.map