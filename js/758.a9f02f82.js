"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[758],{55758:function(e,a,t){t.d(a,{A:function(){return ve}});t(44114);var l=t(56768),u=t(24232),n=t(45130),s=t(90144),o=t(24113),v=t(81387),i=t(20033),d=t(67278),p=t(43738),c=t(89354),r=t(54),k=t(74901),m=t(87320);const L=o+"#ic_arrow_hor",_={class:"page_container import_wallet_page"},b={class:"cont"},g={class:"page_title"},y={class:"page_data_wrap"},C={class:"page_data"},w={class:"tabs_wrap"},f={class:"tabs"},x={key:2,class:"mnemonic"},h={class:"row"},P={class:"word"},V={class:"word"},I={class:"word"},J={class:"word"},U={class:"word"},$={class:"word"},X={class:"word"},K={class:"word"},E={class:"word"},R={class:"word"},Q={class:"word"},D={class:"word"},W={key:0,class:"word"},T={key:1,class:"word"},A={key:2,class:"word"},H={key:3,class:"word"},M={key:4,class:"word"},F={key:5,class:"word"},B={key:6,class:"word"},S={key:7,class:"word"},j={key:8,class:"word"},z={key:9,class:"word"},G={key:10,class:"word"},N={key:11,class:"word"},O=["innerHTML"],q={key:3,class:"private_key"},Y={class:"field"},Z=["innerHTML"],ee={key:4,class:"advanced"},ae={key:1},te={class:"label"},le={class:"field"},ue={class:"btns"};var ne={__name:"ImportPage",props:["isAdding"],setup(e){const a=e,t=(0,i.useGlobalStore)(),o=(0,v.rd)(),ne=(0,l.WQ)("emitter"),se=(0,d.hN)(),oe=(0,l.WQ)("i18n"),ve=(0,s.KR)(!0),ie=(0,s.KR)(1),de=(0,s.KR)(null),pe=(0,s.KR)(null),ce=(0,s.KR)(null),re=[de,pe,ce],ke=(0,s.KR)(null),me=(0,s.KR)(null),Le=(0,s.KR)(null),_e=(0,s.KR)([]),be=(0,s.KR)([]),ge=(0,s.KR)(""),ye=(0,s.KR)(!1),Ce=(0,s.KR)(!1),we=(0,s.KR)(!1),fe=(0,s.KR)(!1),xe=(0,s.KR)(0),he=(0,s.KR)(0),Pe=(0,s.KR)(0);function Ve(e){let a=e.clipboardData||window.clipboardData,t=a.getData("text"),l=t.split(" ");12==l.length&&(ie.value=1,setTimeout((()=>_e.value=l)),setTimeout((()=>Ie()))),24==l.length&&(ie.value=2,setTimeout((()=>_e.value=l)),setTimeout((()=>Ie())))}function Ie(){_e.value.map(((e,a)=>Je(e,a)))}function Je(e,a){let t=!0;e.trim().length||(t=!1);let l=/^[a-z]+$/i;l.test(e.trim())||(t=!1),be.value[a]=t}function Ue(e){let a=be.value[e];return null===a||void 0===a?"":a?"success":"error"}async function $e(){let e=!0;try{ge.value.trim().length||(e=e?e=!1:e);let a=(0,c.fromHex)(ge.value.trim());32!==a.length&&(e=e?e=!1:e);let t=await r.Secp256k1.makeKeypair(a);return t||(e=e?e=!1:e),ye.value=e,Ce.value=!0,e}catch(a){return ye.value=!1,Ce.value=!0,!1}}(0,l.KC)((()=>{ve.value=!1})),(0,l.sV)((()=>{ke.value=re[ie.value-1].value.offsetWidth,me.value=re[ie.value-1].value.offsetLeft})),(0,l.wB)(ie,(()=>{_e.value=[],be.value=[],ge.value="",Ce.value=!1,ke.value=re[ie.value-1].value.offsetWidth,me.value=re[ie.value-1].value.offsetLeft}));const Xe=(0,l.EW)((()=>{let e=!1;switch(ie.value){case 1:e=12===_e.value.length&&_e.value.every((e=>""!==e));break;case 2:e=24===_e.value.length&&_e.value.every((e=>""!==e));break;default:e=ye.value;break}return e}));async function Ke(){3!=ie.value?(Le.value=await(0,p.fp)(_e.value.join(" ").toLocaleLowerCase(),null,t.defaultDerivationPath),await t.setSecret(Le.value.secret.data),t.tempDerivationPath=`m/44'/118'/${xe.value}'/${he.value}/${Pe.value}`):(Le.value=await(0,p.r6)(ge.value),await t.setPrivateKey(ge.value)),a.isAdding?(await t.createWallet({isAdding:!0}),o.push("/account"),ne.emit("show_wallets_modal"),se.notify({group:"default",speed:200,duration:1e3,title:oe.global.t("message.notification_wallet_added_success"),type:"success"})):o.push("/create_pin")}return ne.on("close_derivation_path_modal",(()=>{fe.value=!1})),(e,t)=>{const o=(0,l.g2)("router-link");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("section",_,[(0,l.Lk)("div",b,[(0,l.Lk)("div",g,(0,u.v_)(e.$t("message.import_wallet_title")),1),(0,l.Lk)("div",y,[(0,l.Lk)("div",C,[ve.value?((0,l.uX)(),(0,l.Wv)(k.A,{key:0})):((0,l.uX)(),(0,l.CE)(l.FK,{key:1},[a.isAdding?((0,l.uX)(),(0,l.Wv)(o,{key:0,class:"back_btn",to:"/add_wallet"},{default:(0,l.k6)((()=>t[61]||(t[61]=[(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":L})],-1)]))),_:1})):((0,l.uX)(),(0,l.Wv)(o,{key:1,class:"back_btn",to:"/"},{default:(0,l.k6)((()=>t[62]||(t[62]=[(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":L})],-1)]))),_:1})),(0,l.Lk)("div",w,[(0,l.Lk)("div",f,[(0,l.Lk)("button",{class:(0,u.C4)(["btn",{active:1===ie.value}]),ref_key:"tab1",ref:de,onClick:t[0]||(t[0]=(0,n.D$)((e=>ie.value=1),["prevent"]))},(0,u.v_)(e.$t("message.mnemonic_tab1")),3),(0,l.Lk)("button",{class:(0,u.C4)(["btn",{active:2===ie.value}]),ref_key:"tab2",ref:pe,onClick:t[1]||(t[1]=(0,n.D$)((e=>ie.value=2),["prevent"]))},(0,u.v_)(e.$t("message.mnemonic_tab2")),3),(0,l.Lk)("button",{class:(0,u.C4)(["btn",{active:3===ie.value}]),ref_key:"tab3",ref:ce,onClick:t[2]||(t[2]=(0,n.D$)((e=>ie.value=3),["prevent"]))},(0,u.v_)(e.$t("message.mnemonic_tab3")),3),(0,l.Lk)("div",{class:"roller",style:(0,u.Tr)(`width: ${ke.value}px; left: ${me.value}px;`)},t[63]||(t[63]=[(0,l.Lk)("span",null,null,-1)]),4)])]),3!=ie.value?((0,l.uX)(),(0,l.CE)("div",x,[(0,l.Lk)("div",h,[(0,l.Lk)("div",P,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ue(0)]),"onUpdate:modelValue":t[3]||(t[3]=e=>_e.value[0]=e),onInput:t[4]||(t[4]=e=>Je(e.target.value,0)),onPaste:Ve},null,34),[[n.Jo,_e.value[0]]])]),(0,l.Lk)("div",V,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ue(1)]),"onUpdate:modelValue":t[5]||(t[5]=e=>_e.value[1]=e),onInput:t[6]||(t[6]=e=>Je(e.target.value,1)),onPaste:Ve},null,34),[[n.Jo,_e.value[1]]])]),(0,l.Lk)("div",I,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ue(2)]),"onUpdate:modelValue":t[7]||(t[7]=e=>_e.value[2]=e),onInput:t[8]||(t[8]=e=>Je(e.target.value,2)),onPaste:Ve},null,34),[[n.Jo,_e.value[2]]])]),(0,l.Lk)("div",J,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ue(3)]),"onUpdate:modelValue":t[9]||(t[9]=e=>_e.value[3]=e),onInput:t[10]||(t[10]=e=>Je(e.target.value,3)),onPaste:Ve},null,34),[[n.Jo,_e.value[3]]])]),(0,l.Lk)("div",U,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ue(4)]),"onUpdate:modelValue":t[11]||(t[11]=e=>_e.value[4]=e),onInput:t[12]||(t[12]=e=>Je(e.target.value,4)),onPaste:Ve},null,34),[[n.Jo,_e.value[4]]])]),(0,l.Lk)("div",$,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ue(5)]),"onUpdate:modelValue":t[13]||(t[13]=e=>_e.value[5]=e),onInput:t[14]||(t[14]=e=>Je(e.target.value,5)),onPaste:Ve},null,34),[[n.Jo,_e.value[5]]])]),(0,l.Lk)("div",X,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ue(6)]),"onUpdate:modelValue":t[15]||(t[15]=e=>_e.value[6]=e),onInput:t[16]||(t[16]=e=>Je(e.target.value,6)),onPaste:Ve},null,34),[[n.Jo,_e.value[6]]])]),(0,l.Lk)("div",K,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ue(7)]),"onUpdate:modelValue":t[17]||(t[17]=e=>_e.value[7]=e),onInput:t[18]||(t[18]=e=>Je(e.target.value,7)),onPaste:Ve},null,34),[[n.Jo,_e.value[7]]])]),(0,l.Lk)("div",E,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ue(8)]),"onUpdate:modelValue":t[19]||(t[19]=e=>_e.value[8]=e),onInput:t[20]||(t[20]=e=>Je(e.target.value,8)),onPaste:Ve},null,34),[[n.Jo,_e.value[8]]])]),(0,l.Lk)("div",R,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ue(9)]),"onUpdate:modelValue":t[21]||(t[21]=e=>_e.value[9]=e),onInput:t[22]||(t[22]=e=>Je(e.target.value,9)),onPaste:Ve},null,34),[[n.Jo,_e.value[9]]])]),(0,l.Lk)("div",Q,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ue(10)]),"onUpdate:modelValue":t[23]||(t[23]=e=>_e.value[10]=e),onInput:t[24]||(t[24]=e=>Je(e.target.value,10)),onPaste:Ve},null,34),[[n.Jo,_e.value[10]]])]),(0,l.Lk)("div",D,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ue(11)]),"onUpdate:modelValue":t[25]||(t[25]=e=>_e.value[11]=e),onInput:t[26]||(t[26]=e=>Je(e.target.value,11)),onPaste:Ve},null,34),[[n.Jo,_e.value[11]]])]),2===ie.value?((0,l.uX)(),(0,l.CE)("div",W,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ue(12)]),"onUpdate:modelValue":t[27]||(t[27]=e=>_e.value[12]=e),onInput:t[28]||(t[28]=e=>Je(e.target.value,12)),onPaste:Ve},null,34),[[n.Jo,_e.value[12]]])])):(0,l.Q3)("",!0),2===ie.value?((0,l.uX)(),(0,l.CE)("div",T,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ue(13)]),"onUpdate:modelValue":t[29]||(t[29]=e=>_e.value[13]=e),onInput:t[30]||(t[30]=e=>Je(e.target.value,13)),onPaste:Ve},null,34),[[n.Jo,_e.value[13]]])])):(0,l.Q3)("",!0),2===ie.value?((0,l.uX)(),(0,l.CE)("div",A,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ue(14)]),"onUpdate:modelValue":t[31]||(t[31]=e=>_e.value[14]=e),onInput:t[32]||(t[32]=e=>Je(e.target.value,14)),onPaste:Ve},null,34),[[n.Jo,_e.value[14]]])])):(0,l.Q3)("",!0),2===ie.value?((0,l.uX)(),(0,l.CE)("div",H,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ue(15)]),"onUpdate:modelValue":t[33]||(t[33]=e=>_e.value[15]=e),onInput:t[34]||(t[34]=e=>Je(e.target.value,15)),onPaste:Ve},null,34),[[n.Jo,_e.value[15]]])])):(0,l.Q3)("",!0),2===ie.value?((0,l.uX)(),(0,l.CE)("div",M,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ue(16)]),"onUpdate:modelValue":t[35]||(t[35]=e=>_e.value[16]=e),onInput:t[36]||(t[36]=e=>Je(e.target.value,16)),onPaste:Ve},null,34),[[n.Jo,_e.value[16]]])])):(0,l.Q3)("",!0),2===ie.value?((0,l.uX)(),(0,l.CE)("div",F,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ue(17)]),"onUpdate:modelValue":t[37]||(t[37]=e=>_e.value[17]=e),onInput:t[38]||(t[38]=e=>Je(e.target.value,17)),onPaste:Ve},null,34),[[n.Jo,_e.value[17]]])])):(0,l.Q3)("",!0),2===ie.value?((0,l.uX)(),(0,l.CE)("div",B,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ue(18)]),"onUpdate:modelValue":t[39]||(t[39]=e=>_e.value[18]=e),onInput:t[40]||(t[40]=e=>Je(e.target.value,18)),onPaste:Ve},null,34),[[n.Jo,_e.value[18]]])])):(0,l.Q3)("",!0),2===ie.value?((0,l.uX)(),(0,l.CE)("div",S,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ue(19)]),"onUpdate:modelValue":t[41]||(t[41]=e=>_e.value[19]=e),onInput:t[42]||(t[42]=e=>Je(e.target.value,19)),onPaste:Ve},null,34),[[n.Jo,_e.value[19]]])])):(0,l.Q3)("",!0),2===ie.value?((0,l.uX)(),(0,l.CE)("div",j,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ue(20)]),"onUpdate:modelValue":t[43]||(t[43]=e=>_e.value[20]=e),onInput:t[44]||(t[44]=e=>Je(e.target.value,20)),onPaste:Ve},null,34),[[n.Jo,_e.value[20]]])])):(0,l.Q3)("",!0),2===ie.value?((0,l.uX)(),(0,l.CE)("div",z,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ue(21)]),"onUpdate:modelValue":t[45]||(t[45]=e=>_e.value[21]=e),onInput:t[46]||(t[46]=e=>Je(e.target.value,21)),onPaste:Ve},null,34),[[n.Jo,_e.value[21]]])])):(0,l.Q3)("",!0),2===ie.value?((0,l.uX)(),(0,l.CE)("div",G,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ue(22)]),"onUpdate:modelValue":t[47]||(t[47]=e=>_e.value[22]=e),onInput:t[48]||(t[48]=e=>Je(e.target.value,22)),onPaste:Ve},null,34),[[n.Jo,_e.value[22]]])])):(0,l.Q3)("",!0),2===ie.value?((0,l.uX)(),(0,l.CE)("div",N,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ue(23)]),"onUpdate:modelValue":t[49]||(t[49]=e=>_e.value[23]=e),onInput:t[50]||(t[50]=e=>Je(e.target.value,23)),onPaste:Ve},null,34),[[n.Jo,_e.value[23]]])])):(0,l.Q3)("",!0)]),(0,l.Lk)("div",{class:"exp",innerHTML:e.$t("message.import_wallet_exp")},null,8,O)])):((0,l.uX)(),(0,l.CE)("div",q,[(0,l.Lk)("div",Y,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input big",{error:!ye.value&&Ce.value,success:ye.value&&Ce.value}]),"onUpdate:modelValue":t[51]||(t[51]=e=>ge.value=e),onInput:t[52]||(t[52]=e=>$e()),onPaste:t[53]||(t[53]=e=>$e())},null,34),[[n.Jo,ge.value]])]),(0,l.Lk)("div",{class:"exp",innerHTML:e.$t("message.import_wallet_exp2")},null,8,Z)])),3!==ie.value?((0,l.uX)(),(0,l.CE)("div",ee,[we.value?((0,l.uX)(),(0,l.CE)("div",ae,[(0,l.Lk)("div",te,[(0,l.eW)((0,u.v_)(e.$t("message.create_wallet_derivation_path_label"))+" ",1),(0,l.Lk)("span",{onClick:t[55]||(t[55]=(0,n.D$)((e=>fe.value=!0),["prevent"]))},"?")]),(0,l.Lk)("div",le,[t[64]||(t[64]=(0,l.Lk)("span",null,"m/44'/118'/",-1)),(0,l.bo)((0,l.Lk)("input",{type:"text",class:"input","onUpdate:modelValue":t[56]||(t[56]=e=>xe.value=e)},null,512),[[n.Jo,xe.value]]),t[65]||(t[65]=(0,l.Lk)("span",null,"'/",-1)),(0,l.bo)((0,l.Lk)("input",{type:"text",class:"input","onUpdate:modelValue":t[57]||(t[57]=e=>he.value=e)},null,512),[[n.Jo,he.value]]),t[66]||(t[66]=(0,l.Lk)("span",null,"/",-1)),(0,l.bo)((0,l.Lk)("input",{type:"text",class:"input","onUpdate:modelValue":t[58]||(t[58]=e=>Pe.value=e)},null,512),[[n.Jo,Pe.value]])])])):((0,l.uX)(),(0,l.CE)("button",{key:0,class:"btn",onClick:t[54]||(t[54]=(0,n.D$)((e=>we.value=!0),["prevent"]))},[(0,l.Lk)("span",null,(0,u.v_)(e.$t("message.btn_advanced")),1)]))])):(0,l.Q3)("",!0),(0,l.Lk)("div",ue,[(0,l.Lk)("div",{class:(0,u.C4)(["btn",{disabled:!Xe.value}]),onClick:t[59]||(t[59]=(0,n.D$)((e=>Ke()),["prevent"]))},[(0,l.Lk)("span",null,(0,u.v_)(e.$t("message.btn_next")),1)],2)])],64))])])])]),(0,l.bF)(n.eB,{name:"fade"},{default:(0,l.k6)((()=>[fe.value?((0,l.uX)(),(0,l.Wv)(m.A,{key:0})):(0,l.Q3)("",!0)])),_:1}),(0,l.bF)(n.eB,{name:"fade"},{default:(0,l.k6)((()=>[fe.value?((0,l.uX)(),(0,l.CE)("div",{key:0,class:"modal_overlay",onClick:t[60]||(t[60]=(0,n.D$)((e=>(0,s.R1)(ne).emit("close_derivation_path_modal")),["prevent"]))})):(0,l.Q3)("",!0)])),_:1})],64)}}},se=t(71241);const oe=(0,se.A)(ne,[["__scopeId","data-v-16bc3ddd"]]);var ve=oe},87320:function(e,a,t){t.d(a,{A:function(){return b}});var l=t(56768),u=t(45130),n=t(90144),s=t(24232),o=t(24113);const v=o+"#ic_close",i={class:"modal"},d={class:"modal_content"},p={class:"data"},c={class:"modal_title"},r=["innerHTML"],k={class:"btns"};var m={__name:"DerivationPathModal",setup(e){const a=(0,l.WQ)("emitter");return(e,t)=>((0,l.uX)(),(0,l.CE)("section",i,[(0,l.Lk)("div",d,[(0,l.Lk)("div",p,[(0,l.Lk)("button",{class:"close_btn",onClick:t[0]||(t[0]=(0,u.D$)((e=>(0,n.R1)(a).emit("close_derivation_path_modal")),["prevent"]))},t[2]||(t[2]=[(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":v})],-1)])),(0,l.Lk)("div",c,(0,s.v_)(e.$t("message.derivation_path_title")),1),(0,l.Lk)("div",{class:"modal_desc",innerHTML:e.$t("message.derivation_path_desc")},null,8,r),(0,l.Lk)("div",k,[(0,l.Lk)("button",{class:"btn",onClick:t[1]||(t[1]=(0,u.D$)((e=>(0,n.R1)(a).emit("close_derivation_path_modal")),["prevent"]))},[(0,l.Lk)("span",null,(0,s.v_)(e.$t("message.btn_OK")),1)])])])])]))}},L=t(71241);const _=(0,L.A)(m,[["__scopeId","data-v-3de75174"]]);var b=_}}]);
//# sourceMappingURL=758.a9f02f82.js.map