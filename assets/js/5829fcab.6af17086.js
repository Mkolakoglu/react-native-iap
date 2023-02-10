"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[494],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(r),d=a,f=h["".concat(u,".").concat(d)]||h[d]||l[d]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5587:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={},o="requestPurchaseWithQuantityIOS",s={unversionedId:"api-reference/methods/ios/request-purchase-with-quantity-ios",id:"api-reference/methods/ios/request-purchase-with-quantity-ios",title:"requestPurchaseWithQuantityIOS",description:"Request a purchase with a quantity for a product.",source:"@site/docs/api-reference/methods/ios/request-purchase-with-quantity-ios.md",sourceDirName:"api-reference/methods/ios",slug:"/api-reference/methods/ios/request-purchase-with-quantity-ios",permalink:"/docs/api-reference/methods/ios/request-purchase-with-quantity-ios",draft:!1,editUrl:"https://github.com/dooboolab/react-native-iap/edit/main/docs/docs/api-reference/methods/ios/request-purchase-with-quantity-ios.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"requestPurchaseWithOfferIOS",permalink:"/docs/api-reference/methods/ios/request-purchase-with-offer"},next:{title:"validateReceiptIOS",permalink:"/docs/api-reference/methods/ios/validate-receipt-ios"}},u={},c=[{value:"Signature",id:"signature",level:2},{value:"Usage",id:"usage",level:2}],p={toc:c};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"requestpurchasewithquantityios"},(0,a.kt)("inlineCode",{parentName:"h1"},"requestPurchaseWithQuantityIOS")),(0,a.kt)("p",null,"Request a purchase with a quantity for a product."),(0,a.kt)("p",null,"The response will be received through the ",(0,a.kt)("inlineCode",{parentName:"p"},"PurchaseUpdatedListener"),"."),(0,a.kt)("h2",{id:"signature"},"Signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"requestPurchaseWithQuantityIOS(\n  /** The product's sku/ID */\n  sku: Sku,\n\n  /** The quantity to request to buy */\n  quantity: number,\n): Promise<ProductPurchase>\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport {Button} from 'react-native';\nimport {requestPurchaseWithQuantityIOS} from 'react-native-iap';\n\nconst App = () => {\n  const handlePurchase = async () => {\n    await requestPurchaseWithQuantityIOS('productId', 2);\n  }\n\n  return (\n    <Button title=\"Purchase\" onPress={handlePurchase} />\n  );\n}\n")))}l.isMDXComponent=!0}}]);