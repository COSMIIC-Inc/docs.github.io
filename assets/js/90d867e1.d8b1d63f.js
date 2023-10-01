"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[97],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1},a="Power Module",s={unversionedId:"Implantable Devices/Power-Module",id:"Implantable Devices/Power-Module",title:"Power Module",description:"The control hub of our flagship product",source:"@site/docs/Implantable Devices/Power-Module.md",sourceDirName:"Implantable Devices",slug:"/Implantable Devices/Power-Module",permalink:"/docs/Implantable Devices/Power-Module",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Implantable Devices",permalink:"/docs/category/implantable-devices"},next:{title:"Pulse Generator",permalink:"/docs/Implantable Devices/Pulse-Generator"}},c={},l=[{value:"Product Description",id:"product-description",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"power-module"},"Power Module"),(0,o.kt)("p",null,"The control hub of our flagship product"),(0,o.kt)("h2",{id:"product-description"},"Product Description"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"NNP Device",src:n(2247).Z,width:"1244",height:"747"}),"\nThe Power Module (PM1) is an implanted module that has two key functions.  First, the PM1 houses the rechargeable Li-ion power supply for the entire NNP implanted system, along with the required recharging link and circuitry.  Second, the PM1 contains the wireless MedRadio link for transcutaneous communication and system programming.  The PM1 connects to the network through the Network Segment Cable (NC2).  The PM1 places power onto the network cable for distribution to all remote modules."),(0,o.kt)("p",null,"The PM1 is designed for easy surgical replacement, and replacement of the PM1 is an anticipated and expected event based on the eventual depletion of the Li-ion batteries.  PM1 replacement is accomplished through a single small incision, disconnection of the network segment connection, and replacement with a new PM1.  This procedure is expected to be an outpatient procedure requiring less than 30 minutes."),(0,o.kt)("p",null,"The PM1 is designed to be implanted in the torso, typically either chest or abdomen, because these portions of the body can accommodate the PM1 package size.  This location also allows convenient access for recharging through an inductive link, and easy surgical exposure for replacement."),(0,o.kt)("p",null,"The PM1 contains a magnetically activated switch for emergency shut-down of the entire NNP system.  This switch implements a failsafe shutdown function that will de-energize all of the power module circuitry in the presence of a strong, static magnetic field.  Details of this failsafe mode are described in APP-DES-FSAFE."),(0,o.kt)("p",null,"The PM1 utilizes a 32 bit ARM-7 microprocessor, the NXP Semiconductor LPC2129 processor.  The processor runs a real time operating system (RTOS), as described in APP-DES-PM1-SOFT."),(0,o.kt)("p",null,"During functional operation, the PM1 primarily functions as the power source for the entire implanted NNP system.  However, due to the significant processing power contained in the PM1, it is capable of performing signal processing and data storage in support of the remote module functions when required.  The PM1 is always active (except under the emergency shut-down condition), but can be placed into and taken out of a low-power  \u2018sleep\u2019 mode by the user."),(0,o.kt)("p",null,"The PM1 has a Ti case with feedthroughs for the network connections and antenna wire.  An epoxy header holds the connections and antenna.  A polymer nest inside the case holds the batteries and circuitry in place.  The coil for inductive battery recharging surrounds the circuitry inside the case.  Three identical Li-ion rechargeable cells are connected in parallel to provide the NNP system power."))}d.isMDXComponent=!0},2247:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/nnp-0daf24e7977921b2a054a78e6b03ca5a.jpg"}}]);