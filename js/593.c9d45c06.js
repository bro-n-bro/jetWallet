"use strict";(self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[]).push([[593],{95593:function(e,a,t){t.d(a,{A:function(){return le}});t(44114);var l=t(56768),u=t(24232),n=t(45130),s=t(24113),o=t(90144),v=t(81387),i=t(96011),p=t(67278),d=t(90405),r=t(89354),c=t(54),k=t(17086);const L=s+"#ic_arrow_hor",m={class:"page_container import_wallet_page"},g={class:"cont"},b={class:"page_title"},y={class:"page_data_wrap"},C={class:"page_data"},w={class:"tabs_wrap"},_={class:"tabs"},f={key:2,class:"mnemonic"},x={class:"row"},P={class:"word"},I={class:"word"},V={class:"word"},J={class:"word"},U={class:"word"},h={class:"word"},X={class:"word"},E={class:"word"},K={class:"word"},Q={class:"word"},$={class:"word"},R={class:"word"},T={key:0,class:"word"},W={key:1,class:"word"},D={key:2,class:"word"},A={key:3,class:"word"},H={key:4,class:"word"},M={key:5,class:"word"},S={key:6,class:"word"},j={key:7,class:"word"},z={key:8,class:"word"},B={key:9,class:"word"},F={key:10,class:"word"},G={key:11,class:"word"},N=["innerHTML"],q={key:3,class:"private_key"},O={class:"field"},Y=["innerHTML"],Z={class:"btns"};var ee={__name:"ImportPage",props:["isAdding"],setup(e){const a=e,t=(0,i.useGlobalStore)(),s=(0,v.rd)(),ee=(0,l.WQ)("emitter"),ae=(0,p.hN)(),te=(0,l.WQ)("i18n"),le=(0,o.KR)(!0),ue=(0,o.KR)(1),ne=(0,o.KR)(null),se=(0,o.KR)(null),oe=(0,o.KR)(null),ve=[ne,se,oe],ie=(0,o.KR)(null),pe=(0,o.KR)(null),de=(0,o.KR)(null),re=(0,o.KR)([]),ce=(0,o.KR)([]),ke=(0,o.KR)(""),Le=(0,o.KR)(!1),me=(0,o.KR)(!1);function ge(e){let a=e.clipboardData||window.clipboardData,t=a.getData("text"),l=t.split(" ");12==l.length&&(ue.value=1,setTimeout((()=>re.value=l)),setTimeout((()=>be()))),24==l.length&&(ue.value=2,setTimeout((()=>re.value=l)),setTimeout((()=>be())))}function be(){re.value.map(((e,a)=>ye(e,a)))}function ye(e,a){let t=!0;e.trim().length||(t=!1);let l=/^[a-z]+$/i;l.test(e.trim())||(t=!1),ce.value[a]=t}function Ce(e){let a=ce.value[e];return null===a||void 0===a?"":a?"success":"error"}async function we(){let e=!0;try{ke.value.trim().length||(e=e?e=!1:e);let a=(0,r.fromHex)(ke.value.trim());32!==a.length&&(e=e?e=!1:e);let t=await c.Secp256k1.makeKeypair(a);return t||(e=e?e=!1:e),Le.value=e,me.value=!0,e}catch(a){return Le.value=!1,me.value=!0,!1}}(0,l.KC)((()=>{le.value=!1})),(0,l.sV)((()=>{ie.value=ve[ue.value-1].value.offsetWidth,pe.value=ve[ue.value-1].value.offsetLeft})),(0,l.wB)(ue,(()=>{re.value=[],ce.value=[],ke.value="",me.value=!1,ie.value=ve[ue.value-1].value.offsetWidth,pe.value=ve[ue.value-1].value.offsetLeft}));const _e=(0,l.EW)((()=>{let e=!1;switch(ue.value){case 1:e=12===re.value.length&&re.value.every((e=>""!==e));break;case 2:e=24===re.value.length&&re.value.every((e=>""!==e));break;default:e=Le.value;break}return e}));async function fe(){3!=ue.value?(de.value=await(0,d.fp)(re.value.join(" ").toLocaleLowerCase(),null,t.defaultDerivationPath),await t.setSecret(de.value.secret.data)):(de.value=await(0,d.r6)(ke.value),await t.setPrivateKey(ke.value)),a.isAdding?(await t.createWallet({isAdding:!0}),s.push("/account"),ee.emit("show_wallets_modal"),ae.notify({group:"default",speed:200,duration:1e3,title:te.global.t("message.notification_wallet_added_success"),type:"success"})):s.push("/create_pin")}return(e,t)=>{const s=(0,l.g2)("router-link");return(0,l.uX)(),(0,l.CE)("section",m,[(0,l.Lk)("div",g,[(0,l.Lk)("div",b,(0,u.v_)(e.$t("message.import_wallet_title")),1),(0,l.Lk)("div",y,[(0,l.Lk)("div",C,[le.value?((0,l.uX)(),(0,l.Wv)(k.A,{key:0})):((0,l.uX)(),(0,l.CE)(l.FK,{key:1},[a.isAdding?((0,l.uX)(),(0,l.Wv)(s,{key:0,class:"back_btn",to:"/add_wallet"},{default:(0,l.k6)((()=>t[55]||(t[55]=[(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":L})],-1)]))),_:1})):((0,l.uX)(),(0,l.Wv)(s,{key:1,class:"back_btn",to:"/"},{default:(0,l.k6)((()=>t[56]||(t[56]=[(0,l.Lk)("svg",{class:"icon"},[(0,l.Lk)("use",{"xlink:href":L})],-1)]))),_:1})),(0,l.Lk)("div",w,[(0,l.Lk)("div",_,[(0,l.Lk)("button",{class:(0,u.C4)(["btn",{active:1===ue.value}]),ref_key:"tab1",ref:ne,onClick:t[0]||(t[0]=(0,n.D$)((e=>ue.value=1),["prevent"]))},(0,u.v_)(e.$t("message.mnemonic_tab1")),3),(0,l.Lk)("button",{class:(0,u.C4)(["btn",{active:2===ue.value}]),ref_key:"tab2",ref:se,onClick:t[1]||(t[1]=(0,n.D$)((e=>ue.value=2),["prevent"]))},(0,u.v_)(e.$t("message.mnemonic_tab2")),3),(0,l.Lk)("button",{class:(0,u.C4)(["btn",{active:3===ue.value}]),ref_key:"tab3",ref:oe,onClick:t[2]||(t[2]=(0,n.D$)((e=>ue.value=3),["prevent"]))},(0,u.v_)(e.$t("message.mnemonic_tab3")),3),(0,l.Lk)("div",{class:"roller",style:(0,u.Tr)(`width: ${ie.value}px; left: ${pe.value}px;`)},t[57]||(t[57]=[(0,l.Lk)("span",null,null,-1)]),4)])]),3!=ue.value?((0,l.uX)(),(0,l.CE)("div",f,[(0,l.Lk)("div",x,[(0,l.Lk)("div",P,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ce(0)]),"onUpdate:modelValue":t[3]||(t[3]=e=>re.value[0]=e),onInput:t[4]||(t[4]=e=>ye(e.target.value,0)),onPaste:ge},null,34),[[n.Jo,re.value[0]]])]),(0,l.Lk)("div",I,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ce(1)]),"onUpdate:modelValue":t[5]||(t[5]=e=>re.value[1]=e),onInput:t[6]||(t[6]=e=>ye(e.target.value,1)),onPaste:ge},null,34),[[n.Jo,re.value[1]]])]),(0,l.Lk)("div",V,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ce(2)]),"onUpdate:modelValue":t[7]||(t[7]=e=>re.value[2]=e),onInput:t[8]||(t[8]=e=>ye(e.target.value,2)),onPaste:ge},null,34),[[n.Jo,re.value[2]]])]),(0,l.Lk)("div",J,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ce(3)]),"onUpdate:modelValue":t[9]||(t[9]=e=>re.value[3]=e),onInput:t[10]||(t[10]=e=>ye(e.target.value,3)),onPaste:ge},null,34),[[n.Jo,re.value[3]]])]),(0,l.Lk)("div",U,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ce(4)]),"onUpdate:modelValue":t[11]||(t[11]=e=>re.value[4]=e),onInput:t[12]||(t[12]=e=>ye(e.target.value,4)),onPaste:ge},null,34),[[n.Jo,re.value[4]]])]),(0,l.Lk)("div",h,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ce(5)]),"onUpdate:modelValue":t[13]||(t[13]=e=>re.value[5]=e),onInput:t[14]||(t[14]=e=>ye(e.target.value,5)),onPaste:ge},null,34),[[n.Jo,re.value[5]]])]),(0,l.Lk)("div",X,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ce(6)]),"onUpdate:modelValue":t[15]||(t[15]=e=>re.value[6]=e),onInput:t[16]||(t[16]=e=>ye(e.target.value,6)),onPaste:ge},null,34),[[n.Jo,re.value[6]]])]),(0,l.Lk)("div",E,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ce(7)]),"onUpdate:modelValue":t[17]||(t[17]=e=>re.value[7]=e),onInput:t[18]||(t[18]=e=>ye(e.target.value,7)),onPaste:ge},null,34),[[n.Jo,re.value[7]]])]),(0,l.Lk)("div",K,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ce(8)]),"onUpdate:modelValue":t[19]||(t[19]=e=>re.value[8]=e),onInput:t[20]||(t[20]=e=>ye(e.target.value,8)),onPaste:ge},null,34),[[n.Jo,re.value[8]]])]),(0,l.Lk)("div",Q,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ce(9)]),"onUpdate:modelValue":t[21]||(t[21]=e=>re.value[9]=e),onInput:t[22]||(t[22]=e=>ye(e.target.value,9)),onPaste:ge},null,34),[[n.Jo,re.value[9]]])]),(0,l.Lk)("div",$,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ce(10)]),"onUpdate:modelValue":t[23]||(t[23]=e=>re.value[10]=e),onInput:t[24]||(t[24]=e=>ye(e.target.value,10)),onPaste:ge},null,34),[[n.Jo,re.value[10]]])]),(0,l.Lk)("div",R,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ce(11)]),"onUpdate:modelValue":t[25]||(t[25]=e=>re.value[11]=e),onInput:t[26]||(t[26]=e=>ye(e.target.value,11)),onPaste:ge},null,34),[[n.Jo,re.value[11]]])]),2===ue.value?((0,l.uX)(),(0,l.CE)("div",T,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ce(12)]),"onUpdate:modelValue":t[27]||(t[27]=e=>re.value[12]=e),onInput:t[28]||(t[28]=e=>ye(e.target.value,12)),onPaste:ge},null,34),[[n.Jo,re.value[12]]])])):(0,l.Q3)("",!0),2===ue.value?((0,l.uX)(),(0,l.CE)("div",W,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ce(13)]),"onUpdate:modelValue":t[29]||(t[29]=e=>re.value[13]=e),onInput:t[30]||(t[30]=e=>ye(e.target.value,13)),onPaste:ge},null,34),[[n.Jo,re.value[13]]])])):(0,l.Q3)("",!0),2===ue.value?((0,l.uX)(),(0,l.CE)("div",D,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ce(14)]),"onUpdate:modelValue":t[31]||(t[31]=e=>re.value[14]=e),onInput:t[32]||(t[32]=e=>ye(e.target.value,14)),onPaste:ge},null,34),[[n.Jo,re.value[14]]])])):(0,l.Q3)("",!0),2===ue.value?((0,l.uX)(),(0,l.CE)("div",A,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ce(15)]),"onUpdate:modelValue":t[33]||(t[33]=e=>re.value[15]=e),onInput:t[34]||(t[34]=e=>ye(e.target.value,15)),onPaste:ge},null,34),[[n.Jo,re.value[15]]])])):(0,l.Q3)("",!0),2===ue.value?((0,l.uX)(),(0,l.CE)("div",H,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ce(16)]),"onUpdate:modelValue":t[35]||(t[35]=e=>re.value[16]=e),onInput:t[36]||(t[36]=e=>ye(e.target.value,16)),onPaste:ge},null,34),[[n.Jo,re.value[16]]])])):(0,l.Q3)("",!0),2===ue.value?((0,l.uX)(),(0,l.CE)("div",M,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ce(17)]),"onUpdate:modelValue":t[37]||(t[37]=e=>re.value[17]=e),onInput:t[38]||(t[38]=e=>ye(e.target.value,17)),onPaste:ge},null,34),[[n.Jo,re.value[17]]])])):(0,l.Q3)("",!0),2===ue.value?((0,l.uX)(),(0,l.CE)("div",S,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ce(18)]),"onUpdate:modelValue":t[39]||(t[39]=e=>re.value[18]=e),onInput:t[40]||(t[40]=e=>ye(e.target.value,18)),onPaste:ge},null,34),[[n.Jo,re.value[18]]])])):(0,l.Q3)("",!0),2===ue.value?((0,l.uX)(),(0,l.CE)("div",j,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ce(19)]),"onUpdate:modelValue":t[41]||(t[41]=e=>re.value[19]=e),onInput:t[42]||(t[42]=e=>ye(e.target.value,19)),onPaste:ge},null,34),[[n.Jo,re.value[19]]])])):(0,l.Q3)("",!0),2===ue.value?((0,l.uX)(),(0,l.CE)("div",z,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ce(20)]),"onUpdate:modelValue":t[43]||(t[43]=e=>re.value[20]=e),onInput:t[44]||(t[44]=e=>ye(e.target.value,20)),onPaste:ge},null,34),[[n.Jo,re.value[20]]])])):(0,l.Q3)("",!0),2===ue.value?((0,l.uX)(),(0,l.CE)("div",B,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ce(21)]),"onUpdate:modelValue":t[45]||(t[45]=e=>re.value[21]=e),onInput:t[46]||(t[46]=e=>ye(e.target.value,21)),onPaste:ge},null,34),[[n.Jo,re.value[21]]])])):(0,l.Q3)("",!0),2===ue.value?((0,l.uX)(),(0,l.CE)("div",F,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ce(22)]),"onUpdate:modelValue":t[47]||(t[47]=e=>re.value[22]=e),onInput:t[48]||(t[48]=e=>ye(e.target.value,22)),onPaste:ge},null,34),[[n.Jo,re.value[22]]])])):(0,l.Q3)("",!0),2===ue.value?((0,l.uX)(),(0,l.CE)("div",G,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input",Ce(23)]),"onUpdate:modelValue":t[49]||(t[49]=e=>re.value[23]=e),onInput:t[50]||(t[50]=e=>ye(e.target.value,23)),onPaste:ge},null,34),[[n.Jo,re.value[23]]])])):(0,l.Q3)("",!0)]),(0,l.Lk)("div",{class:"exp",innerHTML:e.$t("message.import_wallet_exp")},null,8,N)])):((0,l.uX)(),(0,l.CE)("div",q,[(0,l.Lk)("div",O,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:(0,u.C4)(["input big",{error:!Le.value&&me.value,success:Le.value&&me.value}]),"onUpdate:modelValue":t[51]||(t[51]=e=>ke.value=e),onInput:t[52]||(t[52]=e=>we()),onPaste:t[53]||(t[53]=e=>we())},null,34),[[n.Jo,ke.value]])]),(0,l.Lk)("div",{class:"exp",innerHTML:e.$t("message.import_wallet_exp2")},null,8,Y)])),(0,l.Lk)("div",Z,[(0,l.Lk)("div",{class:(0,u.C4)(["btn",{disabled:!_e.value}]),onClick:t[54]||(t[54]=(0,n.D$)((e=>fe()),["prevent"]))},[(0,l.Lk)("span",null,(0,u.v_)(e.$t("message.btn_next")),1)],2)])],64))])])])])}}},ae=t(71241);const te=(0,ae.A)(ee,[["__scopeId","data-v-66b9d1fd"]]);var le=te}}]);
//# sourceMappingURL=593.c9d45c06.js.map