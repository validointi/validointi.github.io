"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[934],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1387:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2,title:"Core concepts",description:"Understand the core concepts of  validointi."},i="Core Concept",l={unversionedId:"core_concept",id:"core_concept",title:"Core concepts",description:"Understand the core concepts of  validointi.",source:"@site/docs/core_concept.md",sourceDirName:".",slug:"/core_concept",permalink:"/docs/core_concept",draft:!1,editUrl:"https://github.com/validointi/validointi/tree/main/packages/create-docusaurus/templates/shared/docs/core_concept.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Core concepts",description:"Understand the core concepts of  validointi."},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/getting_started"}},s={},c=[{value:"Model",id:"model",level:2},{value:"Validation library",id:"validation-library",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"core-concept"},"Core Concept"),(0,a.kt)("p",null,"The core concept of Validointi is that you use a model, a validation library by your choice and ",(0,a.kt)("strong",{parentName:"p"},"one")," directive that will make your template form have super powers."),(0,a.kt)("h2",{id:"model"},"Model"),(0,a.kt)("p",null,"A model contains information and it shouldn't have any behavior. This model contains the information that we will use in our form. Below an example off a simple model that represants a simple form."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n    name: 'Your name',\n    email: 'info@example.org',\n    password: 'a-p-a-s-s-w-o-r-d'\n    confirmPassword: 'a-p-a-s-s-w-o-r-d'\n}\n")),(0,a.kt)("h2",{id:"validation-library"},"Validation library"),(0,a.kt)("p",null,"When using Angular we have a set off default validators like: ",(0,a.kt)("inlineCode",{parentName:"p"},"required"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"min"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"max"),". These are HTML5 validations hooked up to Angular, Angular uses several directives to support these validations in template driven forms.\nWhen a form is getting ",(0,a.kt)("strong",{parentName:"p"},"more"),' complex we need custom "validation", here it is where validation librarys come in. Validation library have a purpose, make validation easy! There is a brought set of validation / schema validator libraries, below a set of libraries that could be intressting, in our documentation we always will look at ',(0,a.kt)("a",{parentName:"p",href:"https://vestjs.dev"},"Vest"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://vestjs.dev"},"Vest")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://joi.dev"},"Joi")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ajv.js.org"},"Ajv"))))}d.isMDXComponent=!0}}]);