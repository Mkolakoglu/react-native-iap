"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5738],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},i="Migrating to 12.0.0",c={unversionedId:"migrate_to_12.0.0",id:"migrate_to_12.0.0",title:"Migrating to 12.0.0",description:"This migration will focus on integrating the latest store sdk for Amazon",source:"@site/docs/migrate_to_12.0.0.md",sourceDirName:".",slug:"/migrate_to_12.0.0",permalink:"/docs/migrate_to_12.0.0",draft:!1,editUrl:"https://github.com/dooboolab-community/react-native-iap/edit/main/docs/docs/migrate_to_12.0.0.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Migrating to 11.0.0",permalink:"/docs/migrate_to_11.0.0"},next:{title:"Available Purchase",permalink:"/docs/old-to-remove-available-purchase"}},l={},s=[{value:"The new Amazon IAP SDK needs you to include your public key.",id:"the-new-amazon-iap-sdk-needs-you-to-include-your-public-key",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"migrating-to-1200"},"Migrating to 12.0.0"),(0,o.kt)("p",null,"This migration will focus on integrating the latest store sdk for Amazon"),(0,o.kt)("h1",{id:"androidmanifest"},"AndroidManifest"),(0,o.kt)("p",null,"add ",(0,o.kt)("inlineCode",{parentName:"p"},'android:exported="true"')," to ",(0,o.kt)("inlineCode",{parentName:"p"},"ResponseReceiver")),(0,o.kt)("h2",{id:"the-new-amazon-iap-sdk-needs-you-to-include-your-public-key"},"The new Amazon IAP SDK needs you to include your public key."),(0,o.kt)("p",null,"Instructions: ",(0,o.kt)("a",{parentName:"p",href:"https://developer.amazon.com/docs/in-app-purchasing/integrate-appstore-sdk.html#configure_key"},"https://developer.amazon.com/docs/in-app-purchasing/integrate-appstore-sdk.html#configure_key")),(0,o.kt)("h1",{id:"added-verifylicense-method"},"Added verifyLicense method"),(0,o.kt)("p",null,"It will return a status of the app see: AmazonLicensingStatus for values returned"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import IapAmazon from \"react-native-iap\"\n...\n\nconst status = await IapAmazon.verifyLicense()\n\nif(status === 'LICENSED'){\n    ...\n}\n\n")))}d.isMDXComponent=!0}}]);