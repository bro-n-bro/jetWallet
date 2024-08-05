(function(){var e={17618:function(e,t,n){"use strict";var r=n(45130),a=n(93367),i=n(56768),o=n(24232),s=n(24113),c=n(81387),l=n(38326);const u=s+"#ic_notification_copied",d=s+"#ic_notification_success",_=s+"#ic_notification_error",f={key:0,class:"icon"},h=(0,i.Lk)("svg",null,[(0,i.Lk)("use",{"xlink:href":u})],-1),m=[h],p={key:1,class:"icon"},b=(0,i.Lk)("svg",null,[(0,i.Lk)("use",{"xlink:href":d})],-1),w=[b],g={key:2,class:"icon"},y=(0,i.Lk)("svg",null,[(0,i.Lk)("use",{"xlink:href":_})],-1),k=[y],v={class:"title"},x=["innerHTML"],C={key:4,class:"explorer"},A=["href"];var T={__name:"App",setup(e){const t=(0,i.WQ)("i18n"),n=(0,c.lq)(),r=(0,l.K7Q)(),a=(0,i.EW)((()=>n.meta.layout||"default-layout"));return(0,i.KC)((()=>{r.value=t.global.t("message.page_title")})),(0,i.sV)((async()=>{window.Telegram&&window.Telegram.WebApp&&(await Telegram.WebApp.ready(),Telegram.WebApp.disableVerticalSwipes(),Telegram.WebApp.setHeaderColor("#5b3895"),Telegram.WebApp.MainButton.showProgress(!0),Telegram.WebApp.expand(),Telegram.WebApp.BiometricManager.init())})),(e,t)=>{const n=(0,i.g2)("notifications");return(0,i.uX)(),(0,i.CE)(i.FK,null,[((0,i.uX)(),(0,i.Wv)((0,i.$y)(a.value))),(0,i.bF)(n,{position:"top center",group:"default"},{body:(0,i.k6)((t=>[(0,i.Lk)("div",{class:(0,o.C4)(["notification",{success:"success"==t.item.type,error:"error"==t.item.type}])},["copied"==t.item.type?((0,i.uX)(),(0,i.CE)("div",f,m)):(0,i.Q3)("",!0),"success"==t.item.type?((0,i.uX)(),(0,i.CE)("div",p,w)):(0,i.Q3)("",!0),"error"==t.item.type?((0,i.uX)(),(0,i.CE)("div",g,k)):(0,i.Q3)("",!0),(0,i.Lk)("div",v,(0,o.v_)(t.item.title),1),t.item.text?((0,i.uX)(),(0,i.CE)("div",{key:3,class:"text",innerHTML:t.item.text},null,8,x)):(0,i.Q3)("",!0),t.item.data.tx_hash?((0,i.uX)(),(0,i.CE)("div",C,[(0,i.Lk)("a",{href:`https://www.mintscan.io/${e.store.networks.global[e.store.currentNetwork].mintscanPrefix}/txs/${t.item.data.tx_hash}`,target:"_blank",rel:"noopener nofollow"},(0,o.v_)(e.$t("message.notification_explorer_link")),9,A)])):(0,i.Q3)("",!0)],2)])),_:1})],64)}}};const B=T;var S=B,N=n(36571),E=n(76750);const F={class:"main"};function j(e,t){const n=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.CE)("div",F,[(0,i.bF)(n,null,{default:(0,i.k6)((({Component:e})=>[((0,i.uX)(),(0,i.Wv)((0,i.$y)(e)))])),_:1})])}var P=n(71241);const L={},D=(0,P.A)(L,[["render",j]]);var O=D;const H=[{path:"/",name:"MainPage",component:()=>n.e(314).then(n.bind(n,37318)),meta:{layout:O,accessDenied:["register"]}},{path:"/create_wallet",name:"CreateWallet",component:()=>n.e(718).then(n.bind(n,13718)),meta:{layout:O,accessDenied:["register"]}},{path:"/confirm_wallet",name:"CreateWalletConfirm",component:()=>n.e(620).then(n.bind(n,24620)),meta:{layout:O,accessDenied:["register"]}},{path:"/create_pin",name:"CreatePin",component:()=>n.e(103).then(n.bind(n,92103)),meta:{layout:O,accessDenied:["register"]}},{path:"/wallet_created",name:"WalletCreated",component:()=>n.e(163).then(n.bind(n,24163)),meta:{layout:O,accessDenied:["not_register"]}},{path:"/account",name:"Account",component:()=>n.e(657).then(n.bind(n,78657)),meta:{layout:O,accessDenied:["not_authorized"]}},{path:"/import_wallet",name:"ImportWallet",component:()=>n.e(881).then(n.bind(n,6881)),meta:{layout:O,accessDenied:["register"]}},{path:"/auth",name:"Auth",component:()=>n.e(332).then(n.bind(n,98332)),meta:{layout:O,accessDenied:["not_register","authorized"]}},{path:"/account/claim_confirm",name:"ClaimConfirm",component:()=>n.e(959).then(n.bind(n,99959)),meta:{layout:O,accessDenied:["not_authorized"]}}],W=(0,c.aE)({history:(0,c.LA)(),routes:H});W.beforeResolve((async(e,t,n)=>{let r=(0,E.o)(),a=await(0,N.$R)("wallet","isRegister");e.matched.some((e=>{let t=e.meta.accessDenied;if(t.length){if(t.includes("not_register")&&!a)return n({name:"MainPage"}),!1;if(t.includes("register")&&a)return n({name:"Auth"}),!1;if(t.includes("not_authorized")&&!r.isAuthorized)return n({name:"Auth"}),!1;if(t.includes("authorized")&&r.isAuthorized)return n({name:"Account"}),!1;n()}}))}));var I=W,$=n(85384),M={en:{message:{page_title:"Bro wallet",create_wallet_title:"New Recovery Phrase",create_wallet_confirm_title:"Verify Your Recovery Phrase",create_pin_title:"Name your wallet",wallet_created_title:"Wallet created!",wallet_title:"Wallet page",import_wallet_title:"Import Existing Wallet",create_wallet_agree_label1:"Do not share your recovery phrase with ANYMORE.",create_wallet_agree_label2:"Back up the phrase safely.",create_wallet_agree_checkbox1:"Anymone withyour recovery phrases can have full control over your assets. Plese stay vigilant against phishing attacks at all times.",create_wallet_agree_checkbox2:"You will never be able to restore your account without your recovery phrase.",confirm_label:"Word",confirm_exp:"Fill out the words according to their numbers to verify that you have stored your phrase safely.",create_pin_wallet_name_label:"Wallet name:",create_pin_create_pin_label:"Create pin:",create_pin_confirm_pin_label:"Repeat pin:",create_pin_wallet_name_placeholder:"Name",auth_title:"Welcome!",auth_enter_pin_label:"Enter pin:",auth_error_warning:"You have {count} attempts left",auth_error_title:"Incorrect pin!",auth_error_desc:"Idi nahuj user, ti zablokirovan v blockchaine, prishli sms 4toby razblokirovat Idi nahuj user, ti zablokirovan v blockchaine, prishli sms 4toby razblokirovat Idi nahuj user, ti zablokirovan v blockchaine, prishli sms 4toby razblokirovat",mnemonic_tab1:"12 words",mnemonic_tab2:"24 words",mnemonic_tab3:"Private Key",import_wallet_exp:"Enter your recovery phrase here to restore your wallet. Or click on any blank and paste the entire phrase.",current_balance_title:"Current balance",stacked_balance_title:"Total Staked",available_tokens_title:"Available Balance",staked_tokens_title:"Staked Balance",staked_tokens_validator_label:"By:",claim_rewards_page_title:"Claimable Staking Reward",claim_rewards_title:"Claim Rewards",claim_rewards_not_enought:"You don’t have enough {denom} to pay Fee",calim_confirm_title:"Confirm transction",tx_fee_label:"Tx Fee:",tx_fee_modal_title:"Fee Options",tx_fee_fee_tier_label:"Fee tier",tx_fee_fee_token_label:"Fee Token:",tx_fee_gas_adjustment_label:"Gas Adjustment:",tx_fee_remember_label:"Remember my choise",tx_fee_auto_label:"Auto",tx_fee_low_label:"Low",tx_fee_average_label:"Average",tx_fee_high_label:"High",details_label:"Details:",memo_label:"Memo:",sign_tx_title:"Sign transaction",search_placeholder:"Search...",search_empty:"Token not found...",search_empty_validator:"Valodator not found...",notification_copied_title:"Copied to dashboard",notification_tx_success_title:"Tx success",notification_tx_error_title:"Tx error",notification_explorer_link:"Explorer",btn_create_wallet:"Create new wallet",btn_import_wallet:"Import wallet",btn_import_existing_wallet:"Import an existing wallet",btn_show:"Show",btn_next:"Next",btn_copy:"Copy to clipboard",btn_copied:"Copied!",btn_join:"Join",btn_biometric:"Turn on biometric security",btn_biometric2:"Use biometric",btn_login:"Log in",btn_send:"Send",btn_receive:"Receive",btn_stake:"Stake",btn_unstake:"Unstake",btn_restake:"Restake",btn_claim:"Claim",btn_approve:"Approve",btn_json:"View JSON",btn_close:"Close",notification_tx_error_2:"tx parse error",notification_tx_error_3:"invalid sequence",notification_tx_error_4:"unauthorized",notification_tx_error_5:"insufficient funds",notification_tx_error_6:"unknown request",notification_tx_error_7:"invalid address",notification_tx_error_8:"invalid pubkey",notification_tx_error_9:"unknown address",notification_tx_error_10:"invalid coins",notification_tx_error_11:"Broadcasting transaction failed: out of gas try again and increase gas amount",notification_tx_error_12:"memo too large",notification_tx_error_13:"insufficient fee",notification_tx_error_14:"maximum number of signatures exceeded",notification_tx_error_15:"no signatures supplied",notification_tx_error_16:"failed to marshal JSON bytes",notification_tx_error_17:"failed to unmarshal JSON bytes",notification_tx_error_18:"invalid request",notification_tx_error_19:"tx already in mempool",notification_tx_error_20:"mempool is full",notification_tx_error_21:"tx too large",notification_tx_error_22:"key not found",notification_tx_error_23:"invalid account password",notification_tx_error_24:"tx intended signer does not match the given signer",notification_tx_error_25:"invalid gas adjustment",notification_tx_error_26:"invalid height",notification_tx_error_27:"invalid version",notification_tx_error_28:"invalid chain-id",notification_tx_error_29:"invalid type",notification_tx_error_30:"tx timeout height",notification_tx_error_31:"unknown extension options",notification_tx_error_32:"incorrect account sequence",notification_tx_error_33:"failed packing protobuf message to Any",notification_tx_error_34:"failed unpacking protobuf message from Any",notification_tx_error_35:"internal logic error",notification_tx_error_36:"conflict",notification_tx_error_37:"feature not supported",notification_tx_error_38:"not found",notification_tx_error_39:"Internal IO error",notification_tx_error_40:"error in app.toml",notification_tx_error_41:"invalid gas limit",notification_tx_error_rejected:"The transaction has been rejected"}}};const R=(0,$.hU)({locale:"en",fallbackLocale:"en",messages:M});var G=R,K=n(50595),z=n(67278),U=n(37359);const Y={mounted(e){e.focus()}},Q={mounted(e){window.addEventListener("scroll",(function(){window.scrollY<=e.offsetHeight&&(e.style.opacity=1-window.scrollY/(.6*e.offsetHeight),e.style.transform=`translateY(-${window.scrollY/e.offsetHeight*.6*100}%)`)}))}},X={mounted(e,t){if(t){let n=t.value.toFixed(10).split("");e.innerHTML=n.map((e=>`\n                <div class="digit">\n                    <span class="old">${e}</span>\n                </div>\n            `)).join("")}},updated(e,t){let n=t.value.toFixed(10).split(""),r=t.oldValue?.toFixed(10).split("")||[],a=Math.max(n.length,r.length),i="",o=null,s=0,c=1500,l=50;n=n.concat(Array(a-n.length).fill("")),r=r.concat(Array(a-r.length).fill("")),e.innerHTML=n.map(((e,t)=>{null===o&&e!==r[t]&&(o=t,s=a-t,c-=l*s);let n=0;null!==o&&(n=c/s/1e3),i+=`<div class="digit ${null!==o&&t>=o?"animate":""}">\n                        <span class="new" style="animation-duration: ${parseFloat(n.toFixed(2))}s; animation-delay: ${l*(t-o)/1e3}s;">\n                            ${e}\n                        </span>\n\n                        <span class="old" style="animation-duration: ${parseFloat(n.toFixed(2))}s; animation-delay: ${l*(t-o)/1e3}s;">\n                            ${r[t]}\n                        </span>\n                    </div>`})),e.innerHTML=i}},q=(0,K.A)(),V=(0,r.Ef)(S),J=(0,a.Ey)();V.use(J),V.use(I),V.use(G),V.use(z.Ay),V.provide("i18n",G),V.provide("emitter",q),V.directive("focus",Y),V.directive("parallax",Q),V.directive("odometer",X),(0,U.kz)(),V.mount("#app")},76750:function(e,t,n){"use strict";n.d(t,{o:function(){return f}});var r=n(93367),a=n(61981),i=n(11995),o=n(36571);const s={name:"Cosmos Hub",lcd_api:"https://lcd.cosmoshub-4.bronbro.io",rpc_api:"https://rpc.cosmoshub-4.bronbro.io",websocket_url:"wss://rpc.cosmoshub-4.bronbro.io:443/websocket",denom:"uatom",token_name:"ATOM",chain_id:"cosmoshub-4",prefix:"cosmos",mintscanPrefix:"cosmos",alias:"cosmoshub",exponent:6,gas_adjustment:1.6};var c=s;const l={name:"Bostrom",lcd_api:"https://lcd.bostrom.bronbro.io",rpc_api:"https://rpc.bostrom.bronbro.io",websocket_url:"wss://rpc.bostrom.bronbro.io:443/websocket",denom:"boot",token_name:"BOOT",chain_id:"bostrom",prefix:"bostrom",mintscanPrefix:null,alias:"bostrom",exponent:0,gas_adjustment:1.3};var u=l;const d={name:"LocalBostrom",lcd_api:"https://lcd.uni-3.cybernode.ai",rpc_api:"https://rpc.uni-3.cybernode.ai",websocket_url:"wss://rpc.uni-3.cybernode.ai:443/websocket",denom:"boot",token_name:"BOOT",chain_id:"bostrom",prefix:"bostrom",alias:"localbostrom",exponent:0};var _=d;const f=(0,r.nY)("global",{state:()=>({isInitialized:!1,isBalancesGot:!1,isStakedBalancesGot:!1,isRewardsGot:!1,isAuthorized:!1,authErrorLimit:4,memo:"cosmos_wallet",currentNetwork:"",currentAddress:"",currentCurrency:"",currentCurrencySymbol:"",prices:[],balances:[],stakedBalances:[],rewardsBalances:[],signingClient:{},secret:null,privateKey:null,TxFee:{currentDenom:"",currentSymbol:"",currentPrice:"Average",currentPriceAmount:0,priceLow:0,priceAverage:0,priceHigh:0,exponent:0,remember:!1,gasAdjustmentAuto:!0,isEnough:!1},networks:{cosmoshub:c,bostrom:u,localbostrom:_},formatableTokens:[{token_name:"USD",format_token_name:"USDT",exponent:0},{token_name:"BTC",format_token_name:"WBTC",exponent:0}]}),actions:{async initApp(){({secret:this.secret,privateKey:this.privateKey,currentCurrency:this.currentCurrency,currentNetwork:this.currentNetwork,TxFeeCurrentPrice:this.TxFee.currentPrice}=await this.getMultipleData(["secret","privateKey","currentCurrency","currentNetwork","TxFeeCurrentPrice"]));let e=await(0,a.p_)();switch(this.currentAddress=e.address,this.signingClient=e.signingClient,this.currentCurrency){case"BTC":this.currentCurrencySymbol="BTC";break;case"ETH":this.currentCurrencySymbol="ETH";break;default:this.currentCurrencySymbol="$";break}await this.getCurrenciesPrice(),await this.getCurrentNetworkAPR(),this.connectWebsocket(),this.isInitialized=!0},async getCurrenciesPrice(){try{await fetch("https://rpc.bronbro.io/price_feed_api/tokens/").then((e=>e.json())).then((e=>this.prices=e))}catch(e){console.error(e)}},async getCurrentNetworkAPR(){try{await fetch("https://rpc.bronbro.io/networks/").then((e=>e.json())).then((e=>{e.infos.find((e=>{e.denom==this.networks[this.currentNetwork].token_name.toLowerCase()&&(this.networks[this.currentNetwork].APR=e.apr)}))}))}catch(e){console.log(e)}},async getBalances(){if(this.isBalancesGot=!1,this.balances=await this.signingClient.getAllBalances(this.currentAddress),this.balances.length){for(let e of this.balances)await this.getBalanceInfo(e);this.balances=this.balances.filter((e=>e.hasOwnProperty("exponent")))}this.isBalancesGot=!0},async getStakedBalances(){this.isStakedBalancesGot=!1;try{await fetch(`${this.networks[this.currentNetwork].lcd_api}/cosmos/staking/v1beta1/delegations/${this.currentAddress}`).then((e=>e.json())).then((async e=>{if(e.delegation_responses){this.stakedBalances=e.delegation_responses;for(let e of this.stakedBalances)await this.getBalanceInfo(e.balance),await this.getValidatorInfo(e);this.stakedBalances=this.stakedBalances.filter((e=>e.balance.hasOwnProperty("exponent")))}})),this.isStakedBalancesGot=!0}catch(e){console.error(e)}},async getRewards(){this.isRewardsGot=!1;try{await fetch(`${this.networks[this.currentNetwork].lcd_api}/cosmos/distribution/v1beta1/delegators/${this.currentAddress}/rewards`).then((e=>e.json())).then((async e=>{if(e.total.length){this.rewardsBalances=e.total;for(let e of this.rewardsBalances)await this.getBalanceInfo(e);this.rewardsBalances=this.rewardsBalances.filter((e=>e.hasOwnProperty("exponent"))),this.rewardsBalances=this.rewardsBalances.filter((e=>e.chain_info.chain_id==this.networks[this.currentNetwork].chain_id))}else this.rewardsBalances=[]})),this.isRewardsGot=!0}catch(e){console.error(e)}},async getBalanceInfo(e){let{base_denom:t}=await(0,a.E0)(e.denom,this.currentNetwork);for(let a of i.mY){switch(t){case"uusdc":var n=i.mY.find((e=>"noble"===e.chain_name));break;default:n=a;break}let r=n.assets.find((e=>e.base===t));if(r){e.token_info=r,e.chain_name=n.chain_name;break}}let r=this.formatableTokens.find((t=>t.token_name===e.token_info.base.toUpperCase()));e.exponent=r?r.exponent:e.token_info.denom_units[1]?.exponent||0,e.chain_info=i.Bt.find((t=>t.chain_name===e.chain_name)),e.price=(0,a.AN)(e.token_info.symbol)},async getValidatorInfo(e){try{await fetch(`${this.networks[this.currentNetwork].lcd_api}/cosmos/staking/v1beta1/validators/${e.delegation.validator_address}`).then((e=>e.json())).then((t=>{e.validator_info=t.validator}))}catch(t){console.error(t)}},async setSecret(e){this.secret=e,await(0,o.IG)("wallet",[["secret",e]])},async setPrivateKey(e){this.privateKey=e,await(0,o.IG)("wallet",[["privateKey",e]])},async setCurrentNetwork(e){this.currentNetwork=e,await(0,o.IG)("wallet",[["currentNetwork",e]])},async createWallet({pinCode:e,walletName:t,isBiometricEnabled:n}){let r=await(0,a.Q1)();await(0,o.IG)("wallet",[["hmacKey",r],["pin",await(0,a.mK)(e.join(""),r)],["name",t],["isRegister",!0],["isBiometric",n],["authErrorLimit",this.authErrorLimit],["currentNetwork","cosmoshub"],["currentCurrency","USD"],["TxFeeCurrentPrice","Average"]]),this.isAuthorized=!0},async getMultipleData(e){return await(0,o.pQ)("wallet",e)},async updateUserAuthErrorLimit(e){await(0,o.IG)("wallet",[["authErrorLimit",e]])},async updateCurrentCurrency(){switch(this.currentCurrency){case"BTC":this.currentCurrency="ETH",this.currentCurrencySymbol="ETH",(0,o.IG)("wallet",[["currentCurrency","ETH"]]);break;case"ETH":this.currentCurrency="USD",this.currentCurrencySymbol="$",(0,o.IG)("wallet",[["currentCurrency","USD"]]);break;default:this.currentCurrency="BTC",this.currentCurrencySymbol="BTC",(0,o.IG)("wallet",[["currentCurrency","BTC"]]);break}},connectWebsocket(){this.networks[this.currentNetwork].websocket=new WebSocket(this.networks[this.currentNetwork].websocket_url),this.networks[this.currentNetwork].websocket.onopen=()=>{this.networks[this.currentNetwork].websocket.send(JSON.stringify({jsonrpc:"2.0",method:"subscribe",id:"1",params:{query:`tm.event='Tx' AND transfer.recipient='${this.currentAddress}'`}}))},this.networks[this.currentNetwork].websocket.onmessage=e=>{Object.keys(JSON.parse(e.data).result).length&&this.getBalances()}},TxFeeGetGasPrices(e){let t=i.Bt.find((t=>t.chain_id===e));switch(this.TxFee.exponent=0,this.TxFee.priceLow=t.fees.fee_tokens[0].low_gas_price,this.TxFee.priceAverage=t.fees.fee_tokens[0].average_gas_price,this.TxFee.priceHigh=t.fees.fee_tokens[0].high_gas_price,this.TxFee.currentPrice){case"Low":this.TxFee.currentPriceAmount=this.TxFee.priceLow;break;case"Average":this.TxFee.currentPriceAmount=this.TxFee.priceAverage;break;case"High":this.TxFee.currentPriceAmount=this.TxFee.priceHigh;break}},TxFeeSetCurrentDenom(e,t){this.TxFee.currentDenom=e,this.TxFee.currentSymbol=t},async clearAllData(){await(0,o._e)("wallet")}}})},36571:function(e,t,n){"use strict";n.d(t,{$R:function(){return i},IG:function(){return s},_e:function(){return c},pQ:function(){return o}});var r=n(54837);const a=(0,r.P2)("bro_db",1,{upgrade(e){e.objectStoreNames.contains("wallet")||e.createObjectStore("wallet")}});async function i(e,t){let n=await a;return n.get(e,t)}async function o(e,t){const n=await a,r=await Promise.all(t.map((t=>n.get(e,t))));let i={};return t.forEach(((e,t)=>i[e]=r[t])),i}async function s(e,t){let n=await a,r=n.transaction(e,"readwrite"),i=r.objectStore(e);for(let[a,o]of t)await i.put(o,a);await r.done}async function c(e){const t=await a,n=t.transaction(e,"readwrite"),r=n.objectStore(e);await r.clear(),await n.done}},61981:function(e,t,n){"use strict";n.d(t,{AN:function(){return b},E0:function(){return m},Ko:function(){return C},NJ:function(){return p},NN:function(){return l},Q1:function(){return f},ST:function(){return g},Y$:function(){return w},eZ:function(){return x},fp:function(){return u},mK:function(){return _},nw:function(){return T},oB:function(){return A},p_:function(){return h},r6:function(){return d},s3:function(){return v}});n(16573),n(78100),n(77936),n(37467),n(44732),n(79577);var r=n(76750),a=n(73423),i=n(89354),o=n(26776),s=n(80457),c=n(11995);const l=async e=>await a.DirectSecp256k1HdWallet.generate(e),u=async(e,t=null)=>await a.DirectSecp256k1HdWallet.fromMnemonic(e,{prefix:t}),d=async(e,t=null)=>await a.DirectSecp256k1Wallet.fromKey((0,i.fromHex)(e),t),_=async(e,t)=>{let n=new TextEncoder,r=n.encode(e),a=await crypto.subtle.importKey("jwk",t,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),i=await crypto.subtle.sign("HMAC",a,r),o=Array.from(new Uint8Array(i)),s=o.map((e=>("00"+e.toString(16)).slice(-2))).join("");return s},f=async()=>{let e=await crypto.subtle.generateKey({name:"HMAC",hash:{name:"SHA-256"},length:256},!0,["sign"]),t=await crypto.subtle.exportKey("jwk",e);return t},h=async()=>{let e=(0,r.o)(),t=null;e.secret&&(t=await u(e.secret,e.networks[e.currentNetwork].prefix)),e.privateKey&&(t=await d(e.privateKey,e.networks[e.currentNetwork].prefix));let n=(await t.getAccounts())[0].address,a=c.Bt.find((t=>t.chain_id===e.networks[e.currentNetwork].chain_id)),i=new o.GasPrice(s.Decimal.fromUserInput(a.fees.fee_tokens[0].average_gas_price.toString()||"0",3),e.networks[e.currentNetwork].denom),l=await o.SigningStargateClient.connectWithSigner(e.networks[e.currentNetwork].rpc_api,t,{gasPrice:i});return{address:n,signingClient:l}},m=async e=>{let t=(0,r.o)(),n={path:null,base_denom:e},a=e.split("/");if("ibc"==a[0])try{await fetch(`${t.networks[t.currentNetwork].lcd_api}/ibc/apps/transfer/v1/denom_traces/${a[1]}`).then((e=>e.json())).then((e=>n=e.denom_trace))}catch(i){console.error(i)}else"factory"==a[0]&&(n.ingnoreTraces=!0,n.base_denom=a[a.length-1]);return n},p=(e,t)=>e/Math.pow(10,t),b=e=>{let t=(0,r.o)(),n=t.prices.find((t=>t.symbol===e))?.price||0,a=t.formatableTokens.find((t=>t.token_name==e)),i=a?n*Math.pow(10,a.exponent):n;return i},w=(e,t,n)=>{let r=p(t,n);return y(r,e)},g=e=>{let t=(0,r.o)();switch(t.currentCurrency){case"BTC":return e>1e-10||0==e?e.toLocaleString("ru-RU",{maximumFractionDigits:10}):"<0.0000000001";case"ETH":return e>1e-7||0==e?e.toLocaleString("ru-RU",{maximumFractionDigits:7}):"<0.0000001";default:return e>.01||0==e?e.toLocaleString("ru-RU",{maximumFractionDigits:2,minimumFractionDigits:2}):"<0.01"}},y=(e,t)=>{let n=(0,r.o)(),a=n.prices.find((e=>e.symbol==k(n.currentCurrency))).price;return e*(b(t)/a)},k=e=>{let t=(0,r.o)(),n=t.formatableTokens.find((t=>t.token_name==e)),a=n?n.format_token_name:e;return a},v=()=>{let e=(0,r.o)(),t=0;return e.balances.length&&e.balances.forEach((e=>t+=w(e.token_info.symbol,e.amount,e.exponent))),parseFloat(t)},x=()=>{let e=(0,r.o)(),t=0;return e.stakedBalances.length&&e.stakedBalances.forEach((e=>t+=w(e.balance.token_info.symbol,e.balance.amount,e.balance.exponent))),parseFloat(t)},C=()=>{let e=(0,r.o)(),t=0;return e.rewardsBalances.length&&e.rewardsBalances.forEach((e=>t+=w(e.token_info.symbol,e.amount,e.exponent))),parseFloat(t)},A=e=>{let t=null;if(e){let n=c.Bt.find((t=>t.chain_id===e));n&&(t=n.images[n.images.length-1].svg||n.images[n.images.length-1].png)}return t},T=async e=>{let t=(0,r.o)();return await t.signingClient.signAndBroadcast(t.currentAddress,e,"auto",t.memo)}},24113:function(e,t,n){"use strict";e.exports=n.p+"img/sprite.10d91bdc.svg"},78982:function(){},47790:function(){},73776:function(){},21638:function(){},92668:function(){},77965:function(){},66089:function(){},79368:function(){},77667:function(){},76447:function(){},64688:function(){},51069:function(){},15340:function(){},79838:function(){}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,i){if(!r){var o=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],i=e[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&i||o>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(s=!1,i<o&&(o=i));if(s){e.splice(u--,1);var l=a();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,a,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{103:"a47f27c8",163:"b6120e67",314:"1ace0787",332:"67266164",620:"ffd007b6",657:"d37ca434",718:"3da60855",881:"202fc0b6",959:"85f6b8d2"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{103:"55cfe3e0",163:"3d3e1637",314:"21a4b9dd",332:"84738102",620:"5f01d68c",657:"8bd7bb0f",718:"3e2f5407",881:"a54a9704",959:"0712d90b"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="cosmos-telegram-signer:";n.l=function(r,a,i,o){if(e[r])e[r].push(a);else{var s,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[a];var _=function(t,n){s.onerror=s.onload=null,clearTimeout(f);var a=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(_.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=_.bind(null,s.onerror),s.onload=_.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,a,i){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",n.nc&&(o.nonce=n.nc);var s=function(n){if(o.onerror=o.onload=null,"load"===n.type)a();else{var r=n&&n.type,s=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+s+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=s,o.parentNode&&o.parentNode.removeChild(o),i(c)}};return o.onerror=o.onload=s,o.href=t,r?r.parentNode.insertBefore(o,r.nextSibling):document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],i=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(i===e||i===t))return a}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){a=o[r],i=a.getAttribute("data-href");if(i===e||i===t)return a}},r=function(r){return new Promise((function(a,i){var o=n.miniCssF(r),s=n.p+o;if(t(o,s))return a();e(r,s,null,a,i)}))},a={524:0};n.f.miniCss=function(e,t){var n={103:1,163:1,314:1,332:1,620:1,657:1,718:1,881:1,959:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=r(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var i=new Promise((function(n,r){a=e[t]=[n,r]}));r.push(a[2]=i);var o=n.p+n.u(t),s=new Error,c=function(r){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var i=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",s.name="ChunkLoadError",s.type=i,s.request=o,a[1](s)}};n.l(o,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,i,o=r[0],s=r[1],c=r[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var u=c(n)}for(t&&t(r);l<o.length;l++)i=o[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},r=self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(17618)}));r=n.O(r)})();
//# sourceMappingURL=app.4f183093.js.map