if(!self.define){let e,a={};const i=(i,s)=>(i=new URL(i+".js",s).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let r={};const t=e=>i(e,n),d={module:{uri:n},exports:r,require:t};a[n]=Promise.all(s.map((e=>d[e]||t(e)))).then((e=>(c(...e),r)))}}define(["./workbox-0ea65fa9"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/250-4170c46f2ad13f89.js",revision:"iIqofpesYNgWS9M65Ujrc"},{url:"/_next/static/chunks/333-2de8c68cbb12b8e4.js",revision:"iIqofpesYNgWS9M65Ujrc"},{url:"/_next/static/chunks/362-65734c25cd4cf8aa.js",revision:"iIqofpesYNgWS9M65Ujrc"},{url:"/_next/static/chunks/app/%5Bregion%5D/page-f983c11d3d8447a7.js",revision:"iIqofpesYNgWS9M65Ujrc"},{url:"/_next/static/chunks/app/_not-found-daed0aef368045f5.js",revision:"iIqofpesYNgWS9M65Ujrc"},{url:"/_next/static/chunks/app/layout-bffc99aba4694e2b.js",revision:"iIqofpesYNgWS9M65Ujrc"},{url:"/_next/static/chunks/app/list/page-4ecb69ae690d7da1.js",revision:"iIqofpesYNgWS9M65Ujrc"},{url:"/_next/static/chunks/app/page-0339116d154c96e8.js",revision:"iIqofpesYNgWS9M65Ujrc"},{url:"/_next/static/chunks/dc112a36-b0e438d22936fbf5.js",revision:"iIqofpesYNgWS9M65Ujrc"},{url:"/_next/static/chunks/fd9d1056-78a4fdf32b273261.js",revision:"iIqofpesYNgWS9M65Ujrc"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"iIqofpesYNgWS9M65Ujrc"},{url:"/_next/static/chunks/main-1c25c3e93da3faf7.js",revision:"iIqofpesYNgWS9M65Ujrc"},{url:"/_next/static/chunks/main-app-11bb18dae4d944d2.js",revision:"iIqofpesYNgWS9M65Ujrc"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"iIqofpesYNgWS9M65Ujrc"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"iIqofpesYNgWS9M65Ujrc"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-b6cdc39d7bed748b.js",revision:"iIqofpesYNgWS9M65Ujrc"},{url:"/_next/static/css/6c82536fc7cb5c7f.css",revision:"6c82536fc7cb5c7f"},{url:"/_next/static/iIqofpesYNgWS9M65Ujrc/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/iIqofpesYNgWS9M65Ujrc/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/64ee4808f88797a1-s.p.ttf",revision:"12f1692abf877abd302054888c6a2893"},{url:"/_next/static/media/arrow_left.3b5a4c8e.png",revision:"d943a13b01e2f209217acc2f46c36610"},{url:"/_next/static/media/arrow_right.3d0ddaa6.png",revision:"a68a24976930047ca1d220c807dcf80b"},{url:"/_next/static/media/bg.37b8a5f5.png",revision:"27c79420dfe17972257d3bc3512332c3"},{url:"/_next/static/media/bg_auvergne.d31b807a.jpg",revision:"08d104a93228b6b237aa2cd235c0e15f"},{url:"/_next/static/media/bg_bourgogne.23d8349a.jpg",revision:"cd3097304d74610bd94233c070118e22"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/chevron_left.6d940e50.png",revision:"d813f58ee5a293b7763189e40861433e"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/distance_f1.7b089db6.png",revision:"117c8d691e965a70e1660a987e103cdc"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/englishFlag.02aec3a3.png",revision:"2ccdedeb9efa8d057fe4da8f310842f2"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/ff2372477f29e631-s.p.ttf",revision:"3c8cc8cd794b4df00e6c82b3ef587d83"},{url:"/_next/static/media/fond.d876b19a.png",revision:"0866d4dd7fd964a8b3e9a7bbb0444b68"},{url:"/_next/static/media/fournisseur2.698e3563.png",revision:"2d597920446af81e23c76eea3969cae8"},{url:"/_next/static/media/fournisseur3.de354471.png",revision:"6b204a1bc7369733d4b1e33bd79128e4"},{url:"/_next/static/media/frenchFlag.7120ff0c.png",revision:"6c250d98adb863f078c0813b4122766a"},{url:"/_next/static/media/gif_main.d2ff1010.gif",revision:"7b29b14fa8856c10aa26f9f46364ef0a"},{url:"/_next/static/media/grande_photo_du_fournisseur.530497e9.png",revision:"ab0c453da65a44d1d932235ba974ace1"},{url:"/_next/static/media/img_produit_1.ee1054c3.png",revision:"9d2345ba4650b9276927e7f4fad9ebd6"},{url:"/_next/static/media/mapProducer1.fa187279.png",revision:"02b977dba049a68fa03b918c609746b9"},{url:"/_next/static/media/mapProducer1Auvergne.b816802d.png",revision:"30711117006362607ccaaab8be2a865f"},{url:"/_next/static/media/mapProducer2.7eb39e2f.png",revision:"9101954975343501b71cd15148eaffd7"},{url:"/_next/static/media/mapProducer2Auvergne.2b83ea99.png",revision:"1409fd632adbf4aa180a9429e53bb081"},{url:"/_next/static/media/mapProducer3.e9cda3f5.png",revision:"f51d33fe6758bd2852e9fa570ed5d38d"},{url:"/_next/static/media/map_big.029a0440.png",revision:"41c0c4f1dcc5cbf7ec3f28e537c5beb7"},{url:"/_next/static/media/small_map.8993b56d.png",revision:"fa6ba2f4a5f6e1defa814adbb04d4ac7"},{url:"/accueil_map.png",revision:"831c11de4472f8f182ccb80aae857c31"},{url:"/arrow_left.png",revision:"d943a13b01e2f209217acc2f46c36610"},{url:"/arrow_right.png",revision:"a68a24976930047ca1d220c807dcf80b"},{url:"/bg.png",revision:"27c79420dfe17972257d3bc3512332c3"},{url:"/bg_auvergne.jpg",revision:"08d104a93228b6b237aa2cd235c0e15f"},{url:"/bg_bourgogne.jpg",revision:"cd3097304d74610bd94233c070118e22"},{url:"/chevron_left.png",revision:"d813f58ee5a293b7763189e40861433e"},{url:"/distance_f1.png",revision:"117c8d691e965a70e1660a987e103cdc"},{url:"/englishFlag.png",revision:"2ccdedeb9efa8d057fe4da8f310842f2"},{url:"/fond.png",revision:"0866d4dd7fd964a8b3e9a7bbb0444b68"},{url:"/fonts/nexa/Nexa-ExtraLight.ttf",revision:"3c8cc8cd794b4df00e6c82b3ef587d83"},{url:"/fonts/nexa/Nexa-Heavy.ttf",revision:"12f1692abf877abd302054888c6a2893"},{url:"/fournisseur2.png",revision:"2d597920446af81e23c76eea3969cae8"},{url:"/fournisseur3.png",revision:"6b204a1bc7369733d4b1e33bd79128e4"},{url:"/frenchFlag.png",revision:"6c250d98adb863f078c0813b4122766a"},{url:"/gif_main.gif",revision:"7b29b14fa8856c10aa26f9f46364ef0a"},{url:"/grande_photo_du_fournisseur.png",revision:"ab0c453da65a44d1d932235ba974ace1"},{url:"/img-192.png",revision:"b593fdf4e2af84317c2c6f3292e532af"},{url:"/img-384.png",revision:"ababafda421e3e8305d5ce97eb6749d4"},{url:"/img-512.png",revision:"65e403fa42cdd086c8f8c7780690d241"},{url:"/img_produit_1.png",revision:"9d2345ba4650b9276927e7f4fad9ebd6"},{url:"/img_produit_2.png",revision:"0bdf395a2ac70c980d64c073086230d6"},{url:"/img_produit_3.png",revision:"c8dfabfe1124b259b02d57c3c057ead9"},{url:"/logoTotal.png",revision:"ef6bdca653272d9435a44f8aa9b4104d"},{url:"/loti_auvergne.json",revision:"00417065c563947f51e8df790964f338"},{url:"/loti_bourgogne.json",revision:"0b8582d5e02f05fec886352720b3e009"},{url:"/manifest.json",revision:"d454f1259f5e64f982f3187f29aa1d2e"},{url:"/mapProducer1.png",revision:"02b977dba049a68fa03b918c609746b9"},{url:"/mapProducer1Auvergne.png",revision:"30711117006362607ccaaab8be2a865f"},{url:"/mapProducer2.png",revision:"9101954975343501b71cd15148eaffd7"},{url:"/mapProducer2Auvergne.png",revision:"1409fd632adbf4aa180a9429e53bb081"},{url:"/mapProducer3.png",revision:"f51d33fe6758bd2852e9fa570ed5d38d"},{url:"/map_big.png",revision:"41c0c4f1dcc5cbf7ec3f28e537c5beb7"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/routef1.png",revision:"fa3b06f10666d68993143b6a80ee3f43"},{url:"/script.js",revision:"49228342b8065fc3607c2c24a3ffdbc3"},{url:"/script2.js",revision:"bb53c1bd5ef45c81a1d5753b3113b2f8"},{url:"/small_map.png",revision:"fa6ba2f4a5f6e1defa814adbb04d4ac7"},{url:"/swe-worker-4da67dda9bc18c53.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/callback")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:i})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&i&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:i})=>"1"===e.headers.get("RSC")&&i&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
