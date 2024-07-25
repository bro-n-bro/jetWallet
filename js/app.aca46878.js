(function(){var e={42316:function(e,t,n){"use strict";var r=n(45130),a=n(93367),o=n(56768),i=n(81387),s=n(38326),c={__name:"App",setup(e){const t=(0,o.WQ)("i18n"),n=(0,i.lq)(),r=(0,s.K7Q)(),a=(0,o.EW)((()=>n.meta.layout||"default-layout"));return(0,o.KC)((()=>{r.value=t.global.t("message.page_title")})),(0,o.sV)((async()=>{window.Telegram&&window.Telegram.WebApp&&(await Telegram.WebApp.ready(),Telegram.WebApp.disableVerticalSwipes(),Telegram.WebApp.setHeaderColor("#5b3895"),Telegram.WebApp.MainButton.showProgress(!0),Telegram.WebApp.expand(),Telegram.WebApp.BiometricManager.init())})),(e,t)=>((0,o.uX)(),(0,o.Wv)((0,o.$y)(a.value)))}};const l=c;var u=l,d=n(36571),h=n(63995);const f={class:"main"};function p(e,t){const n=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",f,[(0,o.bF)(n,null,{default:(0,o.k6)((({Component:e})=>[(0,o.bF)(r.eB,{name:"fade"},{default:(0,o.k6)((()=>[((0,o.uX)(),(0,o.Wv)((0,o.$y)(e)))])),_:2},1024)])),_:1})])}var m=n(71241);const w={},b=(0,m.A)(w,[["render",p]]);var y=b;const _=[{path:"/",name:"MainPage",component:()=>n.e(314).then(n.bind(n,37318)),meta:{layout:y,accessDenied:["register"]}},{path:"/create_wallet",name:"CreateWallet",component:()=>n.e(718).then(n.bind(n,13718)),meta:{layout:y,accessDenied:["register"]}},{path:"/confirm_wallet",name:"CreateWalletConfirm",component:()=>n.e(620).then(n.bind(n,24620)),meta:{layout:y,accessDenied:["register"]}},{path:"/create_pin",name:"CreatePin",component:()=>n.e(103).then(n.bind(n,92103)),meta:{layout:y,accessDenied:["register"]}},{path:"/wallet_created",name:"WalletCreated",component:()=>n.e(163).then(n.bind(n,24163)),meta:{layout:y,accessDenied:["not_register"]}},{path:"/account",name:"Account",component:()=>n.e(405).then(n.bind(n,11405)),meta:{layout:y,accessDenied:["not_authorized"]}},{path:"/import_wallet",name:"ImportWallet",component:()=>n.e(881).then(n.bind(n,6881)),meta:{layout:y,accessDenied:["register"]}},{path:"/auth",name:"Auth",component:()=>n.e(305).then(n.bind(n,7305)),meta:{layout:y,accessDenied:["not_register","authorized"]}}],g=(0,i.aE)({history:(0,i.LA)(),routes:_});g.beforeResolve((async(e,t,n)=>{let r=(0,h.o)(),a=await(0,d.$R)("wallet","isRegister");e.matched.some((e=>{let t=e.meta.accessDenied;if(t.length){if(t.includes("not_register")&&!a)return n({name:"MainPage"}),!1;if(t.includes("register")&&a)return n({name:"Auth"}),!1;if(t.includes("not_authorized")&&!r.isAuthorized)return n({name:"Auth"}),!1;if(t.includes("authorized")&&r.isAuthorized)return n({name:"Account"}),!1;n()}}))}));var k=g,v=n(85384),C={en:{message:{page_title:"Bro wallet",create_wallet_title:"New Recovery Phrase",create_wallet_confirm_title:"Verify Your Recovery Phrase",create_pin_title:"Name your wallet",wallet_created_title:"Wallet created!",wallet_title:"Wallet page",import_wallet_title:"Import Existing Wallet",create_wallet_agree_label1:"Do not share your recovery phrase with ANYMORE.",create_wallet_agree_label2:"Back up the phrase safely.",create_wallet_agree_checkbox1:"Anymone withyour recovery phrases can have full control over your assets. Plese stay vigilant against phishing attacks at all times.",create_wallet_agree_checkbox2:"You will never be able to restore your account without your recovery phrase.",confirm_label:"Word",confirm_exp:"Fill out the words according to their numbers to verify that you have stored your phrase safely.",create_pin_wallet_name_label:"Wallet name:",create_pin_create_pin_label:"Create pin:",create_pin_confirm_pin_label:"Repeat pin:",create_pin_wallet_name_placeholder:"Name",auth_title:"Welcome!",auth_enter_pin_label:"Enter pin:",auth_error_warning:"You have {count} attempts left",auth_error_title:"Incorrect pin!",auth_error_desc:"Idi nahuj user, ti zablokirovan v blockchaine, prishli sms 4toby razblokirovat Idi nahuj user, ti zablokirovan v blockchaine, prishli sms 4toby razblokirovat Idi nahuj user, ti zablokirovan v blockchaine, prishli sms 4toby razblokirovat",mnemonic_tab1:"12 words",mnemonic_tab2:"24 words",mnemonic_tab3:"Private Key",import_wallet_exp:"Enter your recovery phrase here to restore your wallet. Or click on any blank and paste the entire phrase.",current_balance_title:"Current balance",stacked_balance_title:"Total Staked",available_tokens_title:"Available Balance",staked_tokens_title:"Staked Balance",claim_rewards_title:"Claimable Staking Reward",search_placeholder:"Search...",search_empty:"Token not found...",search_empty_validator:"Valodator not found...",btn_create_wallet:"Create new wallet",btn_import_wallet:"Import wallet",btn_import_existing_wallet:"Import an existing wallet",btn_show:"Show",btn_next:"Next",btn_copy:"Copy to clipboard",btn_copied:"Copied!",btn_join:"Join",btn_biometric:"Turn on biometric security",btn_biometric2:"Use biometric",btn_login:"Log in",btn_send:"Send",btn_receive:"Receive",btn_stake:"Stake",btn_unstake:"Unstake",btn_restake:"Restake",btn_claim:"Claim"}}};const B=(0,v.hU)({locale:"en",fallbackLocale:"en",messages:C});var A=B,S=n(50595),x=n(37359);const T={mounted(e){e.focus()}},N={mounted(e){window.addEventListener("scroll",(function(){window.scrollY<=e.offsetHeight&&(e.style.opacity=1-window.scrollY/(.6*e.offsetHeight),e.style.transform=`translateY(-${window.scrollY/e.offsetHeight*.6*100}%)`)}))}},E={mounted(e,t){if(t){let n=t.value.toFixed(10).split("");e.innerHTML=n.map((e=>`\n                <div class="digit">\n                    <span class="old">${e}</span>\n                </div>\n            `)).join("")}},updated(e,t){let n=t.value.toFixed(10).split(""),r=t.oldValue?.toFixed(10).split("")||[],a=Math.max(n.length,r.length),o="",i=null,s=0,c=1500,l=50;n=n.concat(Array(a-n.length).fill("")),r=r.concat(Array(a-r.length).fill("")),e.innerHTML=n.map(((e,t)=>{null===i&&e!==r[t]&&(i=t,s=a-t,c-=l*s);let n=0;null!==i&&(n=c/s/1e3),o+=`<div class="digit ${null!==i&&t>=i?"animate":""}">\n                        <span class="new" style="animation-duration: ${parseFloat(n.toFixed(2))}s; animation-delay: ${l*(t-i)/1e3}s;">\n                            ${e}\n                        </span>\n\n                        <span class="old" style="animation-duration: ${parseFloat(n.toFixed(2))}s; animation-delay: ${l*(t-i)/1e3}s;">\n                            ${r[t]}\n                        </span>\n                    </div>`})),e.innerHTML=o}},j=(0,S.A)(),P=(0,r.Ef)(u),I=(0,a.Ey)();P.use(I),P.use(k),P.use(A),P.provide("i18n",A),P.provide("emitter",j),P.directive("focus",T),P.directive("parallax",N),P.directive("odometer",E),(0,x.kz)(),P.mount("#app")},63995:function(e,t,n){"use strict";n.d(t,{o:function(){return d}});var r=n(93367),a=n(61981),o=n(11995),i=n(36571);const s={name:"Cosmos Hub",lcd_api:"https://lcd.cosmoshub-4.bronbro.io",rpc_api:"https://rpc.cosmoshub-4.bronbro.io",denom:"uatom",token_name:"ATOM",chain_id:"cosmoshub-4",prefix:"cosmos",alias:"cosmoshub",exponent:6};var c=s;const l={name:"Bostrom",lcd_api:"https://lcd.bostrom.bronbro.io",rpc_api:"https://rpc.bostrom.bronbro.io",denom:"boot",token_name:"BOOT",chain_id:"bostrom",prefix:"bostrom",alias:"bostrom",exponent:0};var u=l;const d=(0,r.nY)("global",{state:()=>({isInitialized:!1,isBalancesGot:!1,isStakedBalancesGot:!1,isRewardsGot:!1,isAuthorized:!1,authErrorLimit:4,currentNetwork:"",currentAddress:"",currentCurrency:"",currentCurrencySymbol:"",prices:[],balances:[],stakedBalances:[],rewardsBalances:[],signingClient:{},secret:null,privateKey:null,networks:{cosmoshub:c,bostrom:u},formatableTokens:[{token_name:"USD",format_token_name:"USDT",exponent:0},{token_name:"BTC",format_token_name:"WBTC",exponent:0}]}),actions:{async initApp(){({secret:this.secret,privateKey:this.privateKey,currentCurrency:this.currentCurrency,currentNetwork:this.currentNetwork}=await this.getMultipleData(["secret","privateKey","currentCurrency","currentNetwork"]));let e=await(0,a.p_)();switch(this.currentAddress=e.address,this.signingClient=e.signingClient,this.currentCurrency){case"BTC":this.currentCurrencySymbol="BTC";break;case"ETH":this.currentCurrencySymbol="ETH";break;default:this.currentCurrencySymbol="$";break}await this.getCurrenciesPrice(),await this.getCurrentNetworkAPR(),this.isInitialized=!0},async getCurrenciesPrice(){try{await fetch("https://rpc.bronbro.io/price_feed_api/tokens/").then((e=>e.json())).then((e=>this.prices=e))}catch(e){console.error(e)}},async getCurrentNetworkAPR(){try{await fetch("https://rpc.bronbro.io/networks/").then((e=>e.json())).then((e=>{e.infos.find((e=>{e.denom==this.networks[this.currentNetwork].token_name.toLowerCase()&&(this.networks[this.currentNetwork].APR=e.apr)}))}))}catch(e){console.log(e)}},async getBalances(){if(this.isBalancesGot=!1,this.balances=await this.signingClient.getAllBalances(this.currentAddress),this.balances.length){for(let e of this.balances)await this.getBalanceInfo(e);this.balances=this.balances.filter((e=>e.hasOwnProperty("exponent")))}this.isBalancesGot=!0},async getStakedBalances(){this.isStakedBalancesGot=!1;try{await fetch(`${this.networks[this.currentNetwork].lcd_api}/cosmos/staking/v1beta1/delegations/${this.currentAddress}`).then((e=>e.json())).then((async e=>{if(e.delegation_responses){this.stakedBalances=e.delegation_responses;for(let e of this.stakedBalances)await this.getBalanceInfo(e.balance),await this.getValidatorInfo(e);this.stakedBalances=this.stakedBalances.filter((e=>e.balance.hasOwnProperty("exponent")))}})),this.isStakedBalancesGot=!0}catch(e){console.error(e)}},async getRewards(){this.isRewardsGot=!1;try{await fetch(`${this.networks[this.currentNetwork].lcd_api}/cosmos/distribution/v1beta1/delegators/${this.currentAddress}/rewards`).then((e=>e.json())).then((async e=>{if(e.total.length){this.rewardsBalances=e.total;for(let e of this.rewardsBalances)await this.getBalanceInfo(e);this.rewardsBalances=this.rewardsBalances.filter((e=>e.hasOwnProperty("exponent"))),this.rewardsBalances=this.rewardsBalances.filter((e=>e.chain_info.chain_id==this.networks[this.currentNetwork].chain_id))}else this.rewardsBalances=[]})),this.isRewardsGot=!0}catch(e){console.error(e)}},async getBalanceInfo(e){let{base_denom:t}=await(0,a.E0)(e.denom,this.currentNetwork);for(let a of o.mY){switch(t){case"uusdc":var n=o.mY.find((e=>"noble"===e.chain_name));break;default:n=a;break}let r=n.assets.find((e=>e.base===t));if(r){e.token_info=r,e.chain_name=n.chain_name;break}}let r=this.formatableTokens.find((t=>t.token_name===e.token_info.base.toUpperCase()));e.exponent=r?r.exponent:e.token_info.denom_units[1]?.exponent||0,e.chain_info=o.Bt.find((t=>t.chain_name===e.chain_name)),e.price=(0,a.AN)(e.token_info.symbol)},async getValidatorInfo(e){try{await fetch(`${this.networks[this.currentNetwork].lcd_api}/cosmos/staking/v1beta1/validators/${e.delegation.validator_address}`).then((e=>e.json())).then((t=>{e.validator_info=t.validator}))}catch(t){console.error(t)}},async setSecret(e){this.secret=e,await(0,i.IG)("wallet",[["secret",e]])},async setPrivateKey(e){this.privateKey=e,await(0,i.IG)("wallet",[["privateKey",e]])},async setCurrentNetwork(e){this.currentNetwork=e,await(0,i.IG)("wallet",[["currentNetwork",e]])},async createWallet({pinCode:e,walletName:t,isBiometricEnabled:n}){let r=await(0,a.Q1)();await(0,i.IG)("wallet",[["hmacKey",r],["pin",await(0,a.mK)(e.join(""),r)],["name",t],["isRegister",!0],["isBiometric",n],["authErrorLimit",this.authErrorLimit],["currentNetwork","cosmoshub"],["currentCurrency","USD"]]),this.isAuthorized=!0},async getMultipleData(e){return await(0,i.pQ)("wallet",e)},async updateUserAuthErrorLimit(e){await(0,i.IG)("wallet",[["authErrorLimit",e]])},async updateCurrentCurrency(){switch(this.currentCurrency){case"BTC":this.currentCurrency="ETH",this.currentCurrencySymbol="ETH",(0,i.IG)("wallet",[["currentCurrency","ETH"]]);break;case"ETH":this.currentCurrency="USD",this.currentCurrencySymbol="$",(0,i.IG)("wallet",[["currentCurrency","USD"]]);break;default:this.currentCurrency="BTC",this.currentCurrencySymbol="BTC",(0,i.IG)("wallet",[["currentCurrency","BTC"]]);break}},async updateStackecBalancles(){this.isRewardsGot=!1,this.isStakedBalancesGot=!1,await this.getRewards(),await this.getStakedBalances()},async clearAllData(){await(0,i._e)("wallet")}}})},36571:function(e,t,n){"use strict";n.d(t,{$R:function(){return o},IG:function(){return s},_e:function(){return c},pQ:function(){return i}});var r=n(54837);const a=(0,r.P2)("bro_db",1,{upgrade(e){e.objectStoreNames.contains("wallet")||e.createObjectStore("wallet")}});async function o(e,t){let n=await a;return n.get(e,t)}async function i(e,t){const n=await a,r=await Promise.all(t.map((t=>n.get(e,t))));let o={};return t.forEach(((e,t)=>o[e]=r[t])),o}async function s(e,t){let n=await a,r=n.transaction(e,"readwrite"),o=r.objectStore(e);for(let[a,i]of t)await o.put(i,a);await r.done}async function c(e){const t=await a,n=t.transaction(e,"readwrite"),r=n.objectStore(e);await r.clear(),await n.done}},61981:function(e,t,n){"use strict";n.d(t,{AN:function(){return b},E0:function(){return m},Ko:function(){return B},NJ:function(){return w},NN:function(){return l},Q1:function(){return f},ST:function(){return _},Y$:function(){return y},eZ:function(){return C},fp:function(){return u},mK:function(){return h},nw:function(){return S},oB:function(){return A},p_:function(){return p},r6:function(){return d},s3:function(){return v}});n(16573),n(78100),n(77936),n(37467),n(44732),n(79577);var r=n(63995),a=n(73423),o=n(89354),i=n(26776),s=n(80457),c=n(11995);const l=async e=>await a.DirectSecp256k1HdWallet.generate(e),u=async(e,t=null)=>await a.DirectSecp256k1HdWallet.fromMnemonic(e,{prefix:t}),d=async(e,t=null)=>await a.DirectSecp256k1Wallet.fromKey((0,o.fromHex)(e),t),h=async(e,t)=>{let n=new TextEncoder,r=n.encode(e),a=await crypto.subtle.importKey("jwk",t,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),o=await crypto.subtle.sign("HMAC",a,r),i=Array.from(new Uint8Array(o)),s=i.map((e=>("00"+e.toString(16)).slice(-2))).join("");return s},f=async()=>{let e=await crypto.subtle.generateKey({name:"HMAC",hash:{name:"SHA-256"},length:256},!0,["sign"]),t=await crypto.subtle.exportKey("jwk",e);return t},p=async()=>{let e=(0,r.o)(),t=null;e.secret&&(t=await u(e.secret,e.networks[e.currentNetwork].prefix)),e.privateKey&&(t=await d(e.privateKey,e.networks[e.currentNetwork].prefix));let n=(await t.getAccounts())[0].address,a=c.Bt.find((t=>t.chain_id===e.networks[e.currentNetwork].chain_id)),o=new i.GasPrice(s.Decimal.fromUserInput(a.fees.fee_tokens[0].average_gas_price.toString()||"0",3),e.networks[e.currentNetwork].denom),l=await i.SigningStargateClient.connectWithSigner(e.networks[e.currentNetwork].rpc_api,t,{gasPrice:o});return{address:n,signingClient:l}},m=async e=>{let t=(0,r.o)(),n={path:null,base_denom:e},a=e.split("/");if("ibc"==a[0])try{await fetch(`${t.networks[t.currentNetwork].lcd_api}/ibc/apps/transfer/v1/denom_traces/${a[1]}`).then((e=>e.json())).then((e=>n=e.denom_trace))}catch(o){console.error(o)}else"factory"==a[0]&&(n.ingnoreTraces=!0,n.base_denom=a[a.length-1]);return n},w=(e,t)=>e/Math.pow(10,t),b=e=>{let t=(0,r.o)(),n=t.prices.find((t=>t.symbol===e))?.price||0,a=t.formatableTokens.find((t=>t.token_name==e)),o=a?n*Math.pow(10,a.exponent):n;return o},y=(e,t,n)=>{let r=w(t,n);return g(r,e)},_=e=>{let t=(0,r.o)();switch(t.currentCurrency){case"BTC":return e>1e-10?e.toFixed(10):"<0.0000000001";case"ETH":return e>1e-7?e.toFixed(7):"<0.0000001";default:return e>.01?e.toFixed(2):"<0.01"}},g=(e,t)=>{let n=(0,r.o)(),a=n.prices.find((e=>e.symbol==k(n.currentCurrency))).price;return e*(b(t)/a)},k=e=>{let t=(0,r.o)(),n=t.formatableTokens.find((t=>t.token_name==e)),a=n?n.format_token_name:e;return a},v=()=>{let e=(0,r.o)(),t=0;return e.balances.length&&e.balances.forEach((e=>t+=y(e.token_info.symbol,e.amount,e.exponent))),parseFloat(t)},C=()=>{let e=(0,r.o)(),t=0;return e.stakedBalances.length&&e.stakedBalances.forEach((e=>t+=y(e.balance.token_info.symbol,e.balance.amount,e.balance.exponent))),parseFloat(t)},B=()=>{let e=(0,r.o)(),t=0;return e.rewardsBalances.length&&e.rewardsBalances.forEach((e=>t+=y(e.token_info.symbol,e.amount,e.exponent))),parseFloat(t)},A=e=>{let t=null;if(e){let n=c.Bt.find((t=>t.chain_id===e));n&&(t=n.images[n.images.length-1].svg||n.images[n.images.length-1].png)}return t},S=async e=>{let t=(0,r.o)(),n="cosmos_wallet",a=await t.signingClient.signAndBroadcast(t.currentAddress,e,"auto",n);return a}},78982:function(){},47790:function(){},73776:function(){},21638:function(){},92668:function(){},77965:function(){},66089:function(){},79368:function(){},77667:function(){},76447:function(){},64688:function(){},51069:function(){},15340:function(){},79838:function(){}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,o){if(!r){var i=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],o=e[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(s=!1,o<i&&(i=o));if(s){e.splice(u--,1);var l=a();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{103:"20b3939e",163:"92ef3cb6",305:"cfcffc70",314:"c7e75ccd",405:"e449f1f5",620:"61df1449",718:"ca4b570d",881:"f6ee5517"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{103:"55cfe3e0",163:"3d3e1637",305:"57e3ac3d",314:"21a4b9dd",405:"9810bff4",620:"5f01d68c",718:"3e2f5407",881:"a54a9704"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="cosmos-telegram-signer:";n.l=function(r,a,o,i){if(e[r])e[r].push(a);else{var s,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+o),s.src=r),e[r]=[a];var h=function(t,n){s.onerror=s.onload=null,clearTimeout(f);var a=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,a,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",n.nc&&(i.nonce=n.nc);var s=function(n){if(i.onerror=i.onload=null,"load"===n.type)a();else{var r=n&&n.type,s=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+s+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=s,i.parentNode&&i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=s,i.href=t,r?r.parentNode.insertBefore(i,r.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){a=i[r],o=a.getAttribute("data-href");if(o===e||o===t)return a}},r=function(r){return new Promise((function(a,o){var i=n.miniCssF(r),s=n.p+i;if(t(i,s))return a();e(r,s,null,a,o)}))},a={524:0};n.f.miniCss=function(e,t){var n={103:1,163:1,305:1,314:1,405:1,620:1,718:1,881:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=r(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(n,r){a=e[t]=[n,r]}));r.push(a[2]=o);var i=n.p+n.u(t),s=new Error,c=function(r){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,a[1](s)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,i=r[0],s=r[1],c=r[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var u=c(n)}for(t&&t(r);l<i.length;l++)o=i[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},r=self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(42316)}));r=n.O(r)})();
//# sourceMappingURL=app.aca46878.js.map