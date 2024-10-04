"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6849],{7400:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var t=o(4848),i=o(8453);const r={sidebar_position:1},a="Power Module",s={id:"Implantables/Power-Module",title:"Power Module",description:"Power, processing, and network control module",source:"@site/docs/Implantables/Power-Module.md",sourceDirName:"Implantables",slug:"/Implantables/Power-Module",permalink:"/Implantables/Power-Module",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Implantables",permalink:"/category/implantables"},next:{title:"Pulse Generator Module",permalink:"/Implantables/PG-Module"}},l={},c=[{value:"Component Overview",id:"component-overview",level:2},{value:"Technical Overview",id:"technical-overview",level:2},{value:"Subcomponents",id:"subcomponents",level:2},{value:"Port Plugs",id:"port-plugs",level:3},{value:"Documentation",id:"documentation",level:2},{value:"Mechanical Design Files and Drawings",id:"mechanical-design-files-and-drawings",level:3},{value:"Coming soon...",id:"coming-soon",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"power-module",children:"Power Module"})}),"\n",(0,t.jsx)(n.p,{children:"Power, processing, and network control module"}),"\n",(0,t.jsx)(n.p,{children:"Quick links:"}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udd17"," ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://github.com/COSMIIC-Inc/Implantables-PowerModule-Hardware",children:"Implantables-PowerModule-Hardware on COSMIIC GitHub"})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"component-overview",children:"Component Overview"}),"\n",(0,t.jsx)(n.p,{children:"The Power Module is an implanted module that has two key functions. First, it houses the rechargeable Li-ion batteries that supply power to the entire NNP implanted system, along with the required recharging link and circuitry. Second, it contains the wireless MedRadio link for transcutaneous communication and system programming. The power module connects to the network through the network cable, placing power onto it for distribution to all remote modules. During functional operation, the power module primarily functions as the power source for the entire implanted NNP system. However, due to its significant processing power, it is capable of performing signal processing and data storage in support of the remote module functions when required."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"NNP Device",src:o(6543).A+"",width:"1244",height:"747"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"technical-overview",children:"Technical Overview"}),"\n",(0,t.jsx)(n.p,{children:"The power module is designed to be implanted in the torso, typically either chest or abdomen, because these portions of the body can accommodate the power module package size. This location also allows convenient access for recharging through an inductive link, and easy surgical exposure for replacement. The power module contains a magnetically activated switch for emergency shut-down of the entire NNP system. This switch implements a failsafe shutdown function that will deenergize all of the power module circuitry in the presence of a strong, static magnetic field. The power module utilizes a 32 bit ARM-7 microprocessor, the NXP Semiconductor LPC2129 processor. The processor runs a real time operating system (RTOS). The power module has a titanium case with feedthroughs for the network connections and antenna wire. An epoxy header holds the connections and antenna. A polymer nest inside the case holds the batteries and circuitry in place. The coil for inductive battery recharging surrounds the circuitry inside the case. Three identical Li-ion rechargeable cells are connected in parallel to provide the NNP system power."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"subcomponents",children:"Subcomponents"}),"\n",(0,t.jsx)(n.h3,{id:"port-plugs",children:"Port Plugs"}),"\n",(0,t.jsx)(n.p,{children:"The Power Module and Remote Module headers have allowance for up to four and eight network or electrode cable connections, respectively. These header connections are closed with a port plug that is placed in the connection during manufacture. Port plugs are removed at the time of surgery to accommodate connection to the Power Module or Remote Module headers."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"documentation",children:"Documentation"}),"\n",(0,t.jsx)(n.h3,{id:"mechanical-design-files-and-drawings",children:"Mechanical Design Files and Drawings"}),"\n",(0,t.jsx)(n.p,{children:"All files and drawings for the design of the Power Module are available on the COSMIIC GitHub here:"}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udd17"," ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://github.com/COSMIIC-Inc/Implantables-PowerModule-Hardware/tree/main/Mechanical%20Design%20CAD%20Files",children:'Implantables-PowerModule-Hardware/"Mechanical Design CAD Files" on COSMIIC GitHub'})})]}),"\n",(0,t.jsx)(n.h2,{id:"coming-soon",children:"Coming soon..."}),"\n",(0,t.jsx)(n.p,{children:"Information on the module firmware, fabrication process, manufacturing partners, and how to obtain Power Modules will be uploaded soon."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},6543:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/nnp-0daf24e7977921b2a054a78e6b03ca5a.jpg"},8453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>s});var t=o(6540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);