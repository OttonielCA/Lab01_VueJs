if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const l=e=>s(e,o),f={module:{uri:o},exports:c,require:l};i[o]=Promise.all(n.map((e=>f[e]||l(e)))).then((e=>(r(...e),c)))}}define(["./workbox-e3490c72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/airpods-ahI5gnra.jpg",revision:null},{url:"assets/airpodsmax-CJwN0RgM.jpg",revision:null},{url:"assets/appletv-hF2cVb_T.jpg",revision:null},{url:"assets/imac-CEqUFKvz.jpg",revision:null},{url:"assets/index-C9Ub1JcD.js",revision:null},{url:"assets/index-jmxG1b9A.css",revision:null},{url:"assets/ipad-BfCGysMs.jpg",revision:null},{url:"assets/ipadpro-Cpm30_yk.jpg",revision:null},{url:"assets/iphone-B6qLdxs-.jpg",revision:null},{url:"assets/macbook-5IWE0ucl.jpg",revision:null},{url:"assets/macmini-CGDHXQTz.jpg",revision:null},{url:"assets/watch-C1ZPeR8Y.jpg",revision:null},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"icons/icon-192x192.png",revision:"790feb60220e5ef664a64885534b6524"},{url:"icons/icon-256x256.png",revision:"3ed5a376408900f9666856e6289d31d0"},{url:"icons/icon-384x384.png",revision:"78dd7c34c02c1bfc1cae581ac290f3f7"},{url:"icons/icon-512x512.png",revision:"7412fa23c4cff6a61bfe5c303f444591"},{url:"index.html",revision:"01b3374b5e3aefff21629af12842cea9"},{url:"manifest.webmanifest",revision:"c76077bcf70bde110707282f2f75eddf"},{url:"registerSW.js",revision:"87e2722d79d0d024aca20872d70a9b2b"},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"icons/icon-192x192.png",revision:"790feb60220e5ef664a64885534b6524"},{url:"icons/icon-256x256.png",revision:"3ed5a376408900f9666856e6289d31d0"},{url:"icons/icon-384x384.png",revision:"78dd7c34c02c1bfc1cae581ac290f3f7"},{url:"icons/icon-512x512.png",revision:"7412fa23c4cff6a61bfe5c303f444591"},{url:"manifest.webmanifest",revision:"c76077bcf70bde110707282f2f75eddf"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));