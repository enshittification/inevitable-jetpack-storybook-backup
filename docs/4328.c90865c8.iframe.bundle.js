"use strict";(()=>{(self.webpackChunk_automattic_jetpack_storybook=self.webpackChunk_automattic_jetpack_storybook||[]).push([[4328],{"../../../node_modules/.pnpm/@wordpress+element@5.25.0/node_modules/@wordpress/element/build-module/create-interpolate-element.js":(b,f,t)=>{t.d(f,{Z:()=>R});var e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");let c,r,l,g;const k=/<(\/)?(\w+)\s*(\/)?>/g;function P(n,d,_,m,i){return{element:n,tokenStart:d,tokenLength:_,prevOffset:m,leadingTextStart:i,children:[]}}const v=(n,d)=>{if(c=n,r=0,l=[],g=[],k.lastIndex=0,!A(d))throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are React Elements");do;while(y(d));return(0,e.createElement)(e.Fragment,null,...l)},A=n=>{const d=typeof n=="object",_=d&&Object.values(n);return d&&_.length&&_.every(m=>(0,e.isValidElement)(m))};function y(n){const d=p(),[_,m,i,u]=d,s=g.length,j=i>r?r:null;if(!n[m])return o(),!1;switch(_){case"no-more-tokens":if(s!==0){const{leadingTextStart:E,tokenStart:D}=g.pop();l.push(c.substr(E,D))}return o(),!1;case"self-closed":return s===0?(j!==null&&l.push(c.substr(j,i-j)),l.push(n[m]),r=i+u,!0):(a(P(n[m],i,u)),r=i+u,!0);case"opener":return g.push(P(n[m],i,u,i+u,j)),r=i+u,!0;case"closer":if(s===1)return h(i),r=i+u,!0;const w=g.pop(),U=c.substr(w.prevOffset,i-w.prevOffset);w.children.push(U),w.prevOffset=i+u;const T=P(w.element,w.tokenStart,w.tokenLength,i+u);return T.children=w.children,a(T),r=i+u,!0;default:return o(),!1}}function p(){const n=k.exec(c);if(n===null)return["no-more-tokens"];const d=n.index,[_,m,i,u]=n,s=_.length;return u?["self-closed",i,d,s]:m?["closer",i,d,s]:["opener",i,d,s]}function o(){const n=c.length-r;n!==0&&l.push(c.substr(r,n))}function a(n){const{element:d,tokenStart:_,tokenLength:m,prevOffset:i,children:u}=n,s=g[g.length-1],j=c.substr(s.prevOffset,_-s.prevOffset);j&&s.children.push(j),s.children.push((0,e.cloneElement)(d,null,...u)),s.prevOffset=i||_+m}function h(n){const{element:d,leadingTextStart:_,prevOffset:m,tokenStart:i,children:u}=g.pop(),s=n?c.substr(m,n-m):c.substr(m);s&&u.push(s),_!==null&&l.push(c.substr(_,i-_)),l.push((0,e.cloneElement)(d,null,...u))}const R=v},"../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/icon/index.js":(b,f,t)=>{t.d(f,{Z:()=>r});var e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function c({icon:l,size:g=24,...k},P){return(0,e.cloneElement)(l,{width:g,height:g,...k,ref:P})}const r=(0,e.forwardRef)(c)},"../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/check.js":(b,f,t)=>{t.d(f,{Z:()=>l});var e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=t("../../../node_modules/.pnpm/@wordpress+primitives@3.46.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const l=(0,e.createElement)(c.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(c.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/close-small.js":(b,f,t)=>{t.d(f,{Z:()=>l});var e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=t("../../../node_modules/.pnpm/@wordpress+primitives@3.46.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const l=(0,e.createElement)(c.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(c.y$,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}))},"../../../node_modules/.pnpm/@wordpress+icons@9.39.0_react@18.2.0/node_modules/@wordpress/icons/build-module/library/external.js":(b,f,t)=>{t.d(f,{Z:()=>l});var e=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=t("../../../node_modules/.pnpm/@wordpress+primitives@3.46.0/node_modules/@wordpress/primitives/build-module/svg/index.js");const l=(0,e.createElement)(c.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(c.y$,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))},"../../plugins/protect/src/js/api.js":(b,f,t)=>{t.d(f,{Z:()=>g});var e=t("../../../node_modules/.pnpm/@wordpress+api-fetch@6.45.0/node_modules/@wordpress/api-fetch/build-module/index.js"),c=t("../../../node_modules/.pnpm/camelize@1.0.1/node_modules/camelize/index.js"),r=t.n(c);const g={fetchWaf:()=>(0,e.Z)({path:"jetpack-protect/v1/waf",method:"GET"}).then(r()),toggleWaf:()=>(0,e.Z)({method:"POST",path:"jetpack-protect/v1/toggle-waf"}),updateWaf:k=>(0,e.Z)({method:"POST",path:"jetpack/v4/waf",data:k}),wafSeen:()=>(0,e.Z)({path:"jetpack-protect/v1/waf-seen",method:"POST"}),wafUpgradeSeen:()=>(0,e.Z)({path:"jetpack-protect/v1/waf-upgrade-seen",method:"POST"}),fetchOnboardingProgress:()=>(0,e.Z)({path:"jetpack-protect/v1/onboarding-progress",method:"GET"}),completeOnboardingSteps:k=>(0,e.Z)({path:"jetpack-protect/v1/onboarding-progress",method:"POST",data:{step_ids:k}})}},"../../plugins/protect/src/js/components/interstitial-page/stories/mock.js":(b,f,t)=>{t.d(f,{r:()=>e});const e={apiRoot:"http://localhost/wp-json/",apiNonce:"f2d2d42e2a",registrationNonce:"c923ca109f",status:{last_checked:"2022-05-05 20:56:27",num_threats:6,num_plugins_threats:3,num_themes_threats:3,status:"scheduled",wordpress:{version:"5.9.3",threats:[]},themes:[{slug:"twentynineteen",version:"2.2",threats:[{id:"1fd6742e-1a32-446d-be3d-7cce44f8f416",title:"Sample Threat number 1 with a long title",fixed_in:"3.14.2"}]},{slug:"twentytwenty",version:"1.9",threats:[{id:"1ac912c1-5e29-41ac-8f76-a062de254c09",title:"Sample Threat number 1 with a long title",fixed_in:"3.14.2"},{id:"6e61b246-5af1-4a4f-9ca8-a8c87eb2e499",title:"Sample Threat number 2 with a long title",fixed_in:"3.14.2"}]},{slug:"twentytwentyone",version:"1.5",threats:[]},{slug:"twentytwentytwo",version:"1.1",threats:[]}],plugins:[{slug:"akismet/akismet.php",version:"4.2.3",threats:[{id:"36e3817f-7fcc-4a97-9ea2-e5e3b01f93a1",title:"Sample Threat number 1 with a long title",fixed_in:"3.14.2"}]},{slug:"always-use-jetpack-open-graph/always-use-jetpack-open-graph.php",version:"1.0.2-alpha",threats:[{id:"d442acac-4394-45e4-b6bb-adf4a40960fb",title:"Sample Threat number 1 with a long title",fixed_in:"3.14.2"},{id:"0c980e1c-d4dc-4b96-b0ce-282289674f55",title:"Sample Threat number 2 with a long title",fixed_in:"3.14.2"}]},{slug:"core-control/core-control.php",version:"1.2.1",threats:[]},{slug:"creative-mail-by-constant-contact/creative-mail-plugin.php",version:"1.4.9",threats:[]},{slug:"gutenberg/gutenberg.php",version:"12.7.1",threats:[]},{slug:"jetpack/jetpack.php",version:"11.0-a.2",threats:[]},{slug:"backup/jetpack-backup.php",version:"1.3.0-alpha",threats:[]},{slug:"beta/jetpack-beta.php",version:"3.1.2-alpha",threats:[]},{slug:"boost/jetpack-boost.php",version:"1.4.3-alpha",threats:[]},{slug:"jetpack-boost/jetpack-boost.php",version:"1.4.0",threats:[]},{slug:"zero-bs-crm/ZeroBSCRM.php",version:"4.9.0",threats:[]},{slug:"debug-helper/plugin.php",version:"1.4.0-alpha",threats:[]},{slug:"protect/jetpack-protect.php",version:"0.1.0-alpha",threats:[]},{slug:"search/jetpack-search.php",version:"0.1.0-alpha",threats:[]},{slug:"social/jetpack-social.php",version:"0.1.0-alpha",threats:[]},{slug:"starter-plugin/jetpack-starter-plugin.php",version:"0.1.0-alpha",threats:[]},{slug:"qr-block/qr-block.php",version:"0.0.10",threats:[]},{slug:"query-monitor/query-monitor.php",version:"3.8.2",threats:[]},{slug:"vaultpress/vaultpress.php",version:"2.2.2-alpha",threats:[]},{slug:"wp-crontrol/wp-crontrol.php",version:"1.12.0",threats:[]}]},installedPlugins:{"akismet/akismet.php":{Name:"Akismet Anti-Spam",PluginURI:"https://akismet.com/",Version:"4.2.3",Description:"Used by millions, Akismet is quite possibly the best way in the world to <strong>protect your blog from spam</strong>. Your site is fully configured and being protected, even while you sleep.",Author:"Automattic",AuthorURI:"https://automattic.com/wordpress-plugins/",TextDomain:"akismet",DomainPath:"",Network:!1,RequiresWP:"",RequiresPHP:"",UpdateURI:"",Title:"Akismet Anti-Spam",AuthorName:"Automattic",active:!0},"always-use-jetpack-open-graph/always-use-jetpack-open-graph.php":{Name:"Always Use Open Graph with Jetpack",PluginURI:"https://kraft.blog/",Version:"1.0.2-alpha",Description:"Jetpack automatically disables its Open Graph tags when there's a known plugin that already adds Open Graph tags, which is good. Sometimes, though, you might want to use Jetpack's version instead. Even if you disable the tags in the conflicting plugin, Jetpack won't add Open Graph tags without being told to do so.",Author:"Brandon Kraft",AuthorURI:"",TextDomain:"always-use-jetpack-open-graph",DomainPath:"",Network:!1,RequiresWP:"",RequiresPHP:"",UpdateURI:"",Title:"Always Use Open Graph with Jetpack",AuthorName:"Brandon Kraft",active:!1},"core-control/core-control.php":{Name:"Core Control",PluginURI:"https://dd32.id.au/wordpress-plugins/core-control/",Version:"1.2.1",Description:"Core Control is a set of plugin modules which can be used to control certain aspects of the WordPress control.",Author:"Dion Hulse",AuthorURI:"https://dd32.id.au/",TextDomain:"core-control",DomainPath:"",Network:!1,RequiresWP:"",RequiresPHP:"",UpdateURI:"",Title:"Core Control",AuthorName:"Dion Hulse",active:!1},"creative-mail-by-constant-contact/creative-mail-plugin.php":{Name:"Creative Mail by Constant Contact",PluginURI:"https://wordpress.org/plugins/creative-mail-by-constant-contact/",Version:"1.4.9",Description:"Free email marketing designed specifically for WordPress, Jetpack and WooCommerce. Send newsletters, promotions, updates and transactional e-commerce emails. Simple and easy, powered by Constant Contact\u2019s rock solid reliability.",Author:"Constant Contact",AuthorURI:"https://www.constantcontact.com",TextDomain:"creative-mail-by-constant-contact",DomainPath:"",Network:!1,RequiresWP:"",RequiresPHP:"",UpdateURI:"",Title:"Creative Mail by Constant Contact",AuthorName:"Constant Contact",active:!1},"gutenberg/gutenberg.php":{Name:"Gutenberg",PluginURI:"https://github.com/WordPress/gutenberg",Version:"12.7.1",Description:"Printing since 1440. This is the development plugin for the new block editor in core.",Author:"Gutenberg Team",AuthorURI:"",TextDomain:"gutenberg",DomainPath:"",Network:!1,RequiresWP:"5.8",RequiresPHP:"5.6",UpdateURI:"",Title:"Gutenberg",AuthorName:"Gutenberg Team",active:!1},"jetpack/jetpack.php":{Name:"Jetpack",PluginURI:"https://jetpack.com",Version:"11.0-a.2",Description:"Security, performance, and marketing tools made by WordPress experts. Jetpack keeps your site protected so you can focus on more important things.",Author:"Automattic",AuthorURI:"https://jetpack.com",TextDomain:"jetpack",DomainPath:"",Network:!1,RequiresWP:"5.9",RequiresPHP:"5.6",UpdateURI:"",Title:"Jetpack",AuthorName:"Automattic",active:!1},"backup/jetpack-backup.php":{Name:"Jetpack Backup",PluginURI:"https://jetpack.com/jetpack-backup",Version:"1.3.0-alpha",Description:"Easily restore or download a backup of your site from a specific moment in time.",Author:"Automattic",AuthorURI:"https://jetpack.com/",TextDomain:"jetpack-backup",DomainPath:"",Network:!1,RequiresWP:"",RequiresPHP:"",UpdateURI:"",Title:"Jetpack Backup",AuthorName:"Automattic",active:!0},"beta/jetpack-beta.php":{Name:"Jetpack Beta Tester",PluginURI:"https://jetpack.com/beta/",Version:"3.1.2-alpha",Description:"Use the Beta plugin to get a sneak peek at new features and test them on your site.",Author:"Automattic",AuthorURI:"https://jetpack.com/",TextDomain:"jetpack-beta",DomainPath:"",Network:!1,RequiresWP:"",RequiresPHP:"",UpdateURI:"https://jetpack.com/download-jetpack-beta/",Title:"Jetpack Beta Tester",AuthorName:"Automattic",active:!1},"boost/jetpack-boost.php":{Name:"Jetpack Boost",PluginURI:"https://jetpack.com/boost",Version:"1.4.3-alpha",Description:"Boost your WordPress site's performance, from the creators of Jetpack",Author:"Automattic - Website Speed and Performance team",AuthorURI:"https://automattic.com",TextDomain:"jetpack-boost",DomainPath:"/languages",Network:!1,RequiresWP:"5.5",RequiresPHP:"7.0",UpdateURI:"",Title:"Jetpack Boost",AuthorName:"Automattic - Website Speed and Performance team",active:!1},"jetpack-boost/jetpack-boost.php":{Name:"Jetpack Boost",PluginURI:"https://jetpack.com/boost",Version:"1.4.0",Description:"Boost your WordPress site's performance, from the creators of Jetpack",Author:"Automattic",AuthorURI:"https://automattic.com",TextDomain:"jetpack-boost",DomainPath:"/languages",Network:!1,RequiresWP:"5.5",RequiresPHP:"7.0",UpdateURI:"",Title:"Jetpack Boost",AuthorName:"Automattic",active:!0},"zero-bs-crm/ZeroBSCRM.php":{Name:"Jetpack CRM",PluginURI:"https://jetpackcrm.com",Version:"4.9.0",Description:"Jetpack CRM is the simplest CRM for WordPress. Self host your own Customer Relationship Manager using WP.",Author:"Automattic",AuthorURI:"https://jetpackcrm.com",TextDomain:"zero-bs-crm",DomainPath:"",Network:!1,RequiresWP:"5.0",RequiresPHP:"5.6",UpdateURI:"",Title:"Jetpack CRM",AuthorName:"Automattic",active:!1},"debug-helper/plugin.php":{Name:"Jetpack Debug Tools",PluginURI:"",Version:"1.4.0-alpha",Description:"Give me a Jetpack connection, and I'll break it every way possible.",Author:"Automattic - Jetpack Crew",AuthorURI:"",TextDomain:"jetpack",DomainPath:"",Network:!1,RequiresWP:"",RequiresPHP:"",UpdateURI:"",Title:"Jetpack Debug Tools",AuthorName:"Automattic - Jetpack Crew",active:!1},"protect/jetpack-protect.php":{Name:"Jetpack Protect",PluginURI:"https://wordpress.org/plugins/jetpack-protect",Version:"0.1.0-alpha",Description:"Security tools that keep your site safe and sound, from posts to plugins.",Author:"Automattic",AuthorURI:"https://jetpack.com/",TextDomain:"jetpack-protect",DomainPath:"",Network:!1,RequiresWP:"",RequiresPHP:"",UpdateURI:"",Title:"Jetpack Protect",AuthorName:"Automattic",active:!0},"search/jetpack-search.php":{Name:"Jetpack Search",PluginURI:"https://jetpack.com/search/",Version:"0.1.0-alpha",Description:"A cloud-powered replacement for WordPress' search.",Author:"Automattic",AuthorURI:"https://jetpack.com/",TextDomain:"jetpack-search",DomainPath:"",Network:!1,RequiresWP:"",RequiresPHP:"",UpdateURI:"",Title:"Jetpack Search",AuthorName:"Automattic",active:!1},"social/jetpack-social.php":{Name:"Jetpack Social",PluginURI:"https://wordpress.org/plugins/jetpack-social",Version:"0.1.0-alpha",Description:"Share your site\u2019s posts on several social media networks automatically when you publish a new post.",Author:"Automattic",AuthorURI:"https://jetpack.com/",TextDomain:"jetpack-social",DomainPath:"",Network:!1,RequiresWP:"",RequiresPHP:"",UpdateURI:"",Title:"Jetpack Social",AuthorName:"Automattic",active:!0},"starter-plugin/jetpack-starter-plugin.php":{Name:"Jetpack Starter Plugin",PluginURI:"https://wordpress.org/plugins/jetpack-starter-plugin",Version:"0.1.0-alpha",Description:"plugin--description.",Author:"Automattic",AuthorURI:"https://jetpack.com/",TextDomain:"jetpack-starter-plugin",DomainPath:"",Network:!1,RequiresWP:"",RequiresPHP:"",UpdateURI:"",Title:"Jetpack Starter Plugin",AuthorName:"Automattic",active:!1},"qr-block/qr-block.php":{Name:"QR Block",PluginURI:"",Version:"0.0.10",Description:"Another amazing QR Code block for Gutenberg.",Author:"retrofox",AuthorURI:"",TextDomain:"qr-block",DomainPath:"",Network:!1,RequiresWP:"5.8",RequiresPHP:"7.0",UpdateURI:"",Title:"QR Block",AuthorName:"retrofox",active:!1},"query-monitor/query-monitor.php":{Name:"Query Monitor",PluginURI:"https://querymonitor.com/",Version:"3.8.2",Description:"The Developer Tools Panel for WordPress.",Author:"John Blackbourn",AuthorURI:"https://querymonitor.com/",TextDomain:"query-monitor",DomainPath:"/languages/",Network:!1,RequiresWP:"",RequiresPHP:"5.3.6",UpdateURI:"",Title:"Query Monitor",AuthorName:"John Blackbourn",active:!1},"vaultpress/vaultpress.php":{Name:"VaultPress",PluginURI:"http://vaultpress.com/?utm_source=plugin-uri&amp;utm_medium=plugin-description&amp;utm_campaign=1.0",Version:"2.2.2-alpha",Description:'Protect your content, themes, plugins, and settings with <strong>realtime backup</strong> and <strong>automated security scanning</strong> from <a href="http://vaultpress.com/?utm_source=wp-admin&amp;utm_medium=plugin-description&amp;utm_campaign=1.0" rel="nofollow">VaultPress</a>. Activate, enter your registration key, and never worry again. <a href="http://vaultpress.com/help/?utm_source=wp-admin&amp;utm_medium=plugin-description&amp;utm_campaign=1.0" rel="nofollow">Need some help?</a>',Author:"Automattic",AuthorURI:"http://vaultpress.com/?utm_source=author-uri&amp;utm_medium=plugin-description&amp;utm_campaign=1.0",TextDomain:"vaultpress",DomainPath:"/languages/",Network:!1,RequiresWP:"",RequiresPHP:"",UpdateURI:"",Title:"VaultPress",AuthorName:"Automattic",active:!1},"wp-crontrol/wp-crontrol.php":{Name:"WP Crontrol",PluginURI:"https://wordpress.org/plugins/wp-crontrol/",Version:"1.12.0",Description:"WP Crontrol enables you to view and control what's happening in the WP-Cron system.",Author:"John Blackbourn & crontributors",AuthorURI:"https://github.com/johnbillion/wp-crontrol/graphs/contributors",TextDomain:"wp-crontrol",DomainPath:"/languages/",Network:!1,RequiresWP:"",RequiresPHP:"5.3.6",UpdateURI:"",Title:"WP Crontrol",AuthorName:"John Blackbourn & crontributors",active:!0}},installedThemes:{twentynineteen:{Name:"Twenty Nineteen",ThemeURI:"https://wordpress.org/themes/twentynineteen/",Author:"the WordPress team",Version:"2.2",Template:"",Status:"publish",TextDomain:"twentynineteen",RequiresWP:"4.9.6",RequiresPHP:"5.2.4",active:!1,is_block_theme:!1},twentytwenty:{Name:"Twenty Twenty",ThemeURI:"https://wordpress.org/themes/twentytwenty/",Author:"the WordPress team",Version:"1.9",Template:"",Status:"publish",TextDomain:"twentytwenty",RequiresWP:"4.7",RequiresPHP:"5.2.4",active:!1,is_block_theme:!1},twentytwentyone:{Name:"Twenty Twenty-One",ThemeURI:"https://wordpress.org/themes/twentytwentyone/",Author:"the WordPress team",Version:"1.5",Template:"",Status:"publish",TextDomain:"twentytwentyone",RequiresWP:"5.3",RequiresPHP:"5.6",active:!1,is_block_theme:!1},twentytwentytwo:{Name:"Twenty Twenty-Two",ThemeURI:"https://wordpress.org/themes/twentytwentytwo/",Author:"the WordPress team",Version:"1.1",Template:"",Status:"publish",TextDomain:"twentytwentytwo",RequiresWP:"5.9",RequiresPHP:"5.6",active:!0,is_block_theme:!0}},wpVersion:"5.9.3",adminUrl:"http://localhost/wp-admin/admin.php?page=jetpack-protect",siteSuffix:"localhost",jetpackScan:{slug:"scan",name:"Scan",title:"Jetpack Scan",description:"Stay one step ahead of threats",long_description:"Automatic scanning and one-click fixes keep your site one step ahead of security threats and malware.",features:["Automated daily scanning","One-click fixes for most issues","Instant email notifications","Access to latest Firewall rules"],status:"needs_purchase",pricingForUi:{productId:2106,productName:"Jetpack Scan Daily",productSlug:"jetpack_scan",description:"",productType:"jetpack",available:!0,billingProductSlug:"jetpack-scan",isDomainRegistration:!1,costDisplay:"C$155.40",combinedCostDisplay:"C$155.40",cost:155.4,costSmallestUnit:15540,currencyCode:"CAD",priceTierList:[],priceTierUsageQuantity:null,productTerm:"year",priceTiers:[],priceTierSlug:"",introductoryOffer:{intervalUnit:"year",intervalCount:1,usageLimit:null,costPerInterval:83.4,transitionAfterRenewalCount:0,shouldProrateWhenOfferEnds:!1}},is_bundle:!1,is_upgradable_by_bundle:["security"],supported_products:["scan"],wpcom_product_slug:"jetpack_scan",requires_user_connection:!0,has_required_plan:!1,manage_url:"",post_activation_url:"",class:"Automattic\\Jetpack\\My_Jetpack\\Products\\Scan"}}},"../../plugins/protect/src/js/components/pricing-table/index.jsx":(b,f,t)=>{t.d(f,{Z:()=>R});var e=t("../components/components/pricing-table/index.tsx"),c=t("../components/components/product-price/index.tsx"),r=t("../components/components/button/index.tsx"),l=t("../connection/components/use-connection/index.jsx"),g=t("../../../node_modules/.pnpm/@wordpress+data@9.18.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),k=t("../../../node_modules/.pnpm/@wordpress+i18n@4.48.0/node_modules/@wordpress/i18n/build-module/index.js"),P=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),v=t("../../plugins/protect/src/js/hooks/use-analytics-tracks/index.js"),A=t("../../plugins/protect/src/js/hooks/use-protect-data/index.js"),y=t("../../plugins/protect/src/js/hooks/use-waf-data/index.jsx"),p=t("../../plugins/protect/src/js/state/store.js"),o=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const a=k.__,h=({onScanAdd:n})=>{const{handleRegisterSite:d,registrationError:_}=(0,l.Z)({skipUserConnection:!0}),{refreshPlan:m,refreshStatus:i}=(0,g.Z)(p.t),[u,s]=(0,P.useState)(!1),[j,w]=(0,P.useState)(!1),{jetpackScan:U}=(0,A.Z)(),{refreshWaf:T}=(0,y.Z)(),{pricingForUi:E}=U,{introductoryOffer:D,currencyCode:I="USD"}=E,W=E.cost?Math.ceil(E.cost/12*100)/100:null,C=D!=null&&D.costPerInterval?Math.ceil(D.costPerInterval/12*100)/100:null,{recordEvent:x,recordEventHandler:O}=(0,v.Z)(),S=O("jetpack_protect_pricing_table_get_scan_link_click",()=>{w(!0),n()}),M=(0,P.useCallback)(()=>{x("jetpack_protect_connected_product_activated"),s(!0),d().then(()=>s(!1)).then(()=>{m(),T(),i(!0)})},[d,x,T,m,i]),N={title:a("Stay one step ahead of threats","jetpack-protect"),items:[{name:a("Scan for threats and vulnerabilities","jetpack-protect")},{name:a("Daily automated scans","jetpack-protect")},{name:a("Web Application Firewall","jetpack-protect")},{name:a("Brute force protection","jetpack-protect")},{name:a("Access to scan on Cloud","jetpack-protect")},{name:a("One-click auto fixes","jetpack-protect")},{name:a("Notifications","jetpack-protect")},{name:a("Severity labels","jetpack-protect")}]};return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(e.ZP,{...N,children:[(0,o.jsxs)(e.oK,{primary:!0,children:[(0,o.jsxs)(e.NE,{children:[(0,o.jsx)(c.Z,{price:W,offPrice:C,leyend:a("/month, billed yearly","jetpack-protect"),currency:I,hideDiscountLabel:!1}),(0,o.jsx)(r.Z,{fullWidth:!0,onClick:S,isLoading:j,disabled:u||j,children:a("Get Jetpack Protect","jetpack-protect")})]}),(0,o.jsx)(e.kF,{isIncluded:!0,label:(0,o.jsx)("strong",{children:a("Line by line malware scanning","jetpack-protect")})}),(0,o.jsx)(e.kF,{isIncluded:!0,label:(0,o.jsx)("strong",{children:a("Plus on-demand manual scans","jetpack-protect")})}),(0,o.jsx)(e.kF,{isIncluded:!0,label:(0,o.jsx)("strong",{children:a("Automatic protection and rule updates","jetpack-protect")})}),(0,o.jsx)(e.kF,{isIncluded:!0}),(0,o.jsx)(e.kF,{isIncluded:!0}),(0,o.jsx)(e.kF,{isIncluded:!0}),(0,o.jsx)(e.kF,{isIncluded:!0}),(0,o.jsx)(e.kF,{isIncluded:!0})]}),(0,o.jsxs)(e.oK,{children:[(0,o.jsxs)(e.NE,{children:[(0,o.jsx)(c.Z,{price:0,leyend:a("Free forever","jetpack-protect"),currency:I,hidePriceFraction:!0}),(0,o.jsx)(r.Z,{fullWidth:!0,variant:"secondary",onClick:M,isLoading:u,disabled:u||j,error:_?a("An error occurred. Please try again.","jetpack-protect"):null,children:a("Start for free","jetpack-protect")})]}),(0,o.jsx)(e.kF,{isIncluded:!0,label:a("Check items against database","jetpack-protect")}),(0,o.jsx)(e.kF,{isIncluded:!0}),(0,o.jsx)(e.kF,{isIncluded:!0,label:a("Manual rules only","jetpack-protect")}),(0,o.jsx)(e.kF,{isIncluded:!0}),(0,o.jsx)(e.kF,{isIncluded:!1}),(0,o.jsx)(e.kF,{isIncluded:!1}),(0,o.jsx)(e.kF,{isIncluded:!1}),(0,o.jsx)(e.kF,{isIncluded:!1})]})]})})},R=h;h.__docgenInfo={description:`Product Detail component.

@param {object} props                 - Component props
@param {Function} props.onScanAdd     - Callback when adding paid protect product successfully
@returns {object}                ConnectedPricingTable react component.`,methods:[],displayName:"ConnectedPricingTable"}},"../../plugins/protect/src/js/hooks/use-waf-data/index.jsx":(b,f,t)=>{t.d(f,{Z:()=>P});var e=t("../../../node_modules/.pnpm/@wordpress+data@9.18.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-dispatch/use-dispatch.js"),c=t("../../../node_modules/.pnpm/@wordpress+data@9.18.0_react@18.2.0/node_modules/@wordpress/data/build-module/components/use-select/index.js"),r=t("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=t("../../plugins/protect/src/js/api.js"),g=t("../../plugins/protect/src/js/state/store.js");const P=()=>{const{setWafConfig:v,setWafStats:A,setWafIsEnabled:y,setWafIsUpdating:p,setWafIsToggling:o}=(0,e.Z)(g.t),a=(0,c.Z)(s=>s(g.t).getWaf()),h=(0,r.useCallback)(()=>(p(!0),l.Z.fetchWaf().then(s=>{y(s==null?void 0:s.isEnabled),v(s==null?void 0:s.config),A(s==null?void 0:s.stats)}).finally(()=>p(!1))),[v,A,y,p]),R=(0,r.useCallback)(()=>(a.isEnabled||o(!0),p(!0),l.Z.toggleWaf().then(h).finally(()=>{o(!1),p(!1)})),[h,a.isEnabled,o,p]),n=(0,r.useCallback)(()=>a.isEnabled?Promise.resolve():R(),[R,a.isEnabled]),d=(0,r.useCallback)(()=>(p(!0),n().then(()=>l.Z.updateWaf({jetpack_waf_automatic_rules:!a.config.jetpackWafAutomaticRules})).then(h).finally(()=>p(!1))),[n,h,p,a.config.jetpackWafAutomaticRules]),_=(0,r.useCallback)(()=>(p(!0),l.Z.updateWaf({jetpack_waf_ip_list:!a.config.jetpackWafIpList}).then(h).finally(()=>p(!1))),[h,p,a.config.jetpackWafIpList]),m=(0,r.useCallback)(()=>(p(!0),l.Z.updateWaf({brute_force_protection:!a.config.bruteForceProtection}).then(h).finally(()=>p(!1))),[h,p,a.config.bruteForceProtection]),i=(0,r.useCallback)(()=>(p(!0),n().then(()=>l.Z.updateWaf({jetpack_waf_share_data:!a.config.jetpackWafShareData})).then(h).finally(()=>p(!1))),[n,h,p,a.config.jetpackWafShareData]),u=(0,r.useCallback)(s=>(p(!0),l.Z.updateWaf(s).then(h).finally(()=>p(!1))),[h,p]);return(0,r.useEffect)(()=>{a.config===void 0&&!a.isFetching&&h()},[a.config,a.isFetching,p,h]),{...a,refreshWaf:h,toggleWaf:R,toggleAutomaticRules:d,toggleManualRules:_,toggleBruteForceProtection:m,toggleShareData:i,updateConfig:u}}}}]);})();
