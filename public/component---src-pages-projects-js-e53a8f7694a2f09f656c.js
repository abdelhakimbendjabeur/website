(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"16l3":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n);function r(e){return function(t){return!!t.type&&t.type.tabsRole===e}}var o=r("Tab"),s=r("TabList"),c=r("TabPanel");function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function I(e,t){return n.Children.map(e,(function(e){return null===e?null:function(e){return o(e)||s(e)||c(e)}(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children?Object(n.cloneElement)(e,u(u({},e.props),{},{children:I(e.props.children,t)})):e}))}function p(e,t){return n.Children.forEach(e,(function(e){null!==e&&(o(e)||c(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children&&(s(e)&&t(e),p(e.props.children,t)))}))}function h(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=h(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}var M,g=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=h(e))&&(n&&(n+=" "),n+=t);return n},m=0;function y(){return"react-tabs-"+m++}function f(e){var t=0;return p(e,(function(e){o(e)&&t++})),t}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e){return e&&"getAttribute"in e}function L(e){return b(e)&&"tab"===e.getAttribute("role")}function N(e){return b(e)&&"true"===e.getAttribute("aria-disabled")}try{M=!("undefined"==typeof window||!window.document||!window.document.activeElement)}catch(oe){M=!1}var D=function(e){var t,a;function r(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).tabNodes=[],t.handleKeyDown=function(e){var a=t.props.direction;if(t.isTabFromContainer(e.target)){var n=t.props.selectedIndex,i=!1,r=!1;32!==e.keyCode&&13!==e.keyCode||(i=!0,r=!1,t.handleClick(e)),37===e.keyCode||38===e.keyCode?(n="rtl"===a?t.getNextTab(n):t.getPrevTab(n),i=!0,r=!0):39===e.keyCode||40===e.keyCode?(n="rtl"===a?t.getPrevTab(n):t.getNextTab(n),i=!0,r=!0):35===e.keyCode?(n=t.getLastTab(),i=!0,r=!0):36===e.keyCode&&(n=t.getFirstTab(),i=!0,r=!0),i&&e.preventDefault(),r&&t.setSelected(n,e)}},t.handleClick=function(e){var a=e.target;do{if(t.isTabFromContainer(a)){if(N(a))return;var n=[].slice.call(a.parentNode.children).filter(L).indexOf(a);return void t.setSelected(n,e)}}while(null!=(a=a.parentNode))},t}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=r.prototype;return l.setSelected=function(e,t){if(!(e<0||e>=this.getTabsCount())){var a=this.props;(0,a.onSelect)(e,a.selectedIndex,t)}},l.getNextTab=function(e){for(var t=this.getTabsCount(),a=e+1;a<t;a++)if(!N(this.getTab(a)))return a;for(var n=0;n<e;n++)if(!N(this.getTab(n)))return n;return e},l.getPrevTab=function(e){for(var t=e;t--;)if(!N(this.getTab(t)))return t;for(t=this.getTabsCount();t-- >e;)if(!N(this.getTab(t)))return t;return e},l.getFirstTab=function(){for(var e=this.getTabsCount(),t=0;t<e;t++)if(!N(this.getTab(t)))return t;return null},l.getLastTab=function(){for(var e=this.getTabsCount();e--;)if(!N(this.getTab(e)))return e;return null},l.getTabsCount=function(){return f(this.props.children)},l.getPanelsCount=function(){return function(e){var t=0;return p(e,(function(e){c(e)&&t++})),t}(this.props.children)},l.getTab=function(e){return this.tabNodes["tabs-"+e]},l.getChildren=function(){var e=this,t=0,a=this.props,r=a.children,l=a.disabledTabClassName,u=a.focus,d=a.forceRenderTabPanel,p=a.selectedIndex,h=a.selectedTabClassName,g=a.selectedTabPanelClassName;this.tabIds=this.tabIds||[],this.panelIds=this.panelIds||[];for(var m=this.tabIds.length-this.getTabsCount();m++<0;)this.tabIds.push(y()),this.panelIds.push(y());return I(r,(function(a){var r=a;if(s(a)){var m=0,y=!1;M&&(y=i.a.Children.toArray(a.props.children).filter(o).some((function(t,a){return document.activeElement===e.getTab(a)}))),r=Object(n.cloneElement)(a,{children:I(a.props.children,(function(t){var a="tabs-"+m,i=p===m,r={tabRef:function(t){e.tabNodes[a]=t},id:e.tabIds[m],panelId:e.panelIds[m],selected:i,focus:i&&(u||y)};return h&&(r.selectedClassName=h),l&&(r.disabledClassName=l),m++,Object(n.cloneElement)(t,r)}))})}else if(c(a)){var f={id:e.panelIds[t],tabId:e.tabIds[t],selected:p===t};d&&(f.forceRender=d),g&&(f.selectedClassName=g),t++,r=Object(n.cloneElement)(a,f)}return r}))},l.isTabFromContainer=function(e){if(!L(e))return!1;var t=e.parentElement;do{if(t===this.node)return!0;if(t.getAttribute("data-tabs"))break;t=t.parentElement}while(t);return!1},l.render=function(){var e=this,t=this.props,a=(t.children,t.className),n=(t.disabledTabClassName,t.domRef),r=(t.focus,t.forceRenderTabPanel,t.onSelect,t.selectedIndex,t.selectedTabClassName,t.selectedTabPanelClassName,function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(t,["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName"]));return i.a.createElement("div",j({},r,{className:g(a),onClick:this.handleClick,onKeyDown:this.handleKeyDown,ref:function(t){e.node=t,n&&n(t)},"data-tabs":!0}),this.getChildren())},r}(n.Component);D.defaultProps={className:"react-tabs",focus:!1};var x=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).handleSelected=function(e,t,n){var i=a.props.onSelect,r=a.state.mode;if("function"!=typeof i||!1!==i(e,t,n)){var o={focus:"keydown"===n.type};1===r&&(o.selectedIndex=e),a.setState(o)}},a.state=n.copyPropsToState(a.props,{},t.defaultFocus),a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.getDerivedStateFromProps=function(e,t){return n.copyPropsToState(e,t)},n.getModeFromProps=function(e){return null===e.selectedIndex?1:0},n.copyPropsToState=function(e,t,a){void 0===a&&(a=!1);var i={focus:a,mode:n.getModeFromProps(e)};if(1===i.mode){var r=f(e.children)-1,o=null;o=null!=t.selectedIndex?Math.min(t.selectedIndex,r):e.defaultIndex||0,i.selectedIndex=o}return i},n.prototype.render=function(){var e=this.props,t=e.children,a=(e.defaultIndex,e.defaultFocus,function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["children","defaultIndex","defaultFocus"])),n=this.state,r=n.focus,o=n.selectedIndex;return a.focus=r,a.onSelect=this.handleSelected,null!=o&&(a.selectedIndex=o),i.a.createElement(D,a,t)},n}(n.Component);function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}x.defaultProps={defaultFocus:!1,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null},x.tabsRole="Tabs";var T=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.children,a=e.className,n=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["children","className"]);return i.a.createElement("ul",S({},n,{className:g(a),role:"tablist"}),t)},n}(n.Component);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}T.defaultProps={className:"react-tabs__tab-list"},T.tabsRole="TabList";var A=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.componentDidMount=function(){this.checkFocus()},r.componentDidUpdate=function(){this.checkFocus()},r.checkFocus=function(){var e=this.props,t=e.selected,a=e.focus;t&&a&&this.node.focus()},r.render=function(){var e,t=this,a=this.props,n=a.children,r=a.className,o=a.disabled,s=a.disabledClassName,c=(a.focus,a.id),l=a.panelId,u=a.selected,d=a.selectedClassName,I=a.tabIndex,p=a.tabRef,h=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(a,["children","className","disabled","disabledClassName","focus","id","panelId","selected","selectedClassName","tabIndex","tabRef"]);return i.a.createElement("li",v({},h,{className:g(r,(e={},e[d]=u,e[s]=o,e)),ref:function(e){t.node=e,p&&p(e)},role:"tab",id:c,"aria-selected":u?"true":"false","aria-disabled":o?"true":"false","aria-controls":l,tabIndex:I||(u?"0":null)}),n)},n}(n.Component);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}A.defaultProps={className:"react-tabs__tab",disabledClassName:"react-tabs__tab--disabled",focus:!1,id:null,panelId:null,selected:!1,selectedClassName:"react-tabs__tab--selected"},A.tabsRole="Tab";var w=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e,t=this.props,a=t.children,n=t.className,r=t.forceRender,o=t.id,s=t.selected,c=t.selectedClassName,l=t.tabId,u=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(t,["children","className","forceRender","id","selected","selectedClassName","tabId"]);return i.a.createElement("div",C({},u,{className:g(n,(e={},e[c]=s,e)),role:"tabpanel",id:o,"aria-labelledby":l}),r||s?a:null)},n}(n.Component);w.defaultProps={className:"react-tabs__tab-panel",forceRender:!1,selectedClassName:"react-tabs__tab-panel--selected"},w.tabsRole="TabPanel";a("sFJx");var P=a("xeaZ"),E=[{id:1,title:"NFC Wallet",icon:a.n(P).a,description:"I wrote an Android App that reads NFC Cards: Public transportation, Office badge, etc. I wanted to use my phone for the french public transportation system, but couldn't go any further because I needed more information about the content of the card and I didn't have too much time on my hands to contact the tech department of the RATP Group. ",githubPath:null,demoPath:null,year:"2020",techUsed:"Kotlin"}],z=a("nJpn"),O=a.n(z),k=a("PPWt"),B=a.n(k),U=a("oXlW"),G=a.n(U),Y=a("Tqtu"),Q=a.n(Y),R=a("1Dv1"),W=a.n(R),F=a("RIWL"),J=a.n(F),H=[{id:8,title:"Driver Acceptance Prediction",icon:J.a,description:"Built and deployed a binary classifier that predicts whether a driver is going to accept or refuse a ride offer: It helped increase the number of rides as well as improve user experience. I also did a detailed analysis that showed the added value of such model before implementing the micro-service.",githubPath:null,demoPath:null,year:"2020",techUsed:"Python, Flask, LightGBM, MongoDB, GCP, Docker, Kubernetes"},{id:7,title:"Marketplace Simulation Tool",icon:J.a,description:"Built a first version of a marketplace simulator that allows the testing of new algorithms/ideas without having to deploy a new feature in production, and to go though the AB testing phase. I used state machines to model drivers and passengers behaviours. Transitions can be governed by existing machine learning models that are already in the stack to makes the simulation more realistic, it also allows testing potential changes in these models or to create new ones. The results of the simulation are charts showing the main KPIs of the business to have a better idea of should we invest our time into to improve a given KPI.",githubPath:null,demoPath:null,year:"2020",techUsed:"Python, MESA, State Machines"},{id:6,title:"Credit Approval",icon:J.a,description:"Built and deployed a binary classifier that predicts whether a client can pay the ride in the near future when payment authorization fails: we decide to give them a credit when the model is confident that the rider will pay the ride in time. It avoids missing out on would-be rides, improves user experience, builds trust and reduces fraud. I also did the integration of this in a very delicate place in the stack, lead the AB testing phase where this model proved to be better than previous systems.",githubPath:null,demoPath:null,year:"2019",techUsed:"Python, Flask, LightGBM, MongoDB, GCP, Docker, Kubernetes"},{id:5,title:"Driver Segmentation",icon:W.a,description:"Participated in writing the micro-service that performs weekly segmentation on the drivers fleet from a performance perspective: It helped us build a more effective incentives program and helped the Partner Relations to adapt their way of communicating with the drivers given the cluster they were in. It also gave a better understanding of the fleet in general.",githubPath:null,demoPath:null,year:"2018",techUsed:"Python, Flask, scikit-learn, Postgres"},{id:4,title:"Routing Engine",icon:B.a,description:"Participated in building an in-house routing engine that uses historical data to provide accurate ETAs (estimated times of arrivals): It helped limit our costs while maintaining our user experience. It proved to be better than OSRM basic ETAs and it had an average error of 1 minute when compared to Google ETAs.",githubPath:null,demoPath:null,year:"2020",techUsed:" Python, OSRM, GCP, Docker, Kubernetes"},{id:3,title:"Machine Learning Architecture",icon:G.a,description:"Participated in building the Kapten’s Machine Learning Architecture:\n- built a project template generator for Machine Learning micro-services that contains\nall the common elements that can exist in ML micro-services: the API, the database\nconnector, the message broker client, etc. I participated in the the creation of the our Data Provider Gateway. This architecture helped increase the team’s productivity by spending less time on writing similar code in different places and to spend more time delivering value.",githubPath:null,demoPath:null,year:"2019",techUsed:"Python, Flask, NodeJS, AMQP, GCP"},{id:3,title:"Datalake Realtime Sync",icon:G.a,description:'Wrote a micro-service that fed BigQuery tables by data coming in realtime in the message broker (rabbitMQ). It allowed us to get more data in our data-lake to address more problems such us "Driver Acceptance Prediction", "Ride Offer Screen AB Test".',githubPath:null,demoPath:null,year:"2019",techUsed:"Python, AMQP, GCP (BigQuery)"},{id:3,title:"Aggregate Drivers KPIs",icon:G.a,description:"Participated in writing my very first micro-service in GoLang. It aggregates data in realtime coming in the message broker and stores the results in a Mongo Database, it exposes an API to show different KPIS on the BackOffice, and in the App.",githubPath:null,demoPath:null,year:"2019",techUsed:"GoLang, MongoDB, AMQP"},{id:2,title:"Driver Switch POC",icon:Q.a,description:"Built and deployed a micro-service prototype that switches rides between drivers during the approach to reduce ETAs and increase bother riders and drivers user experience: We used graph theory and applied a linear programming algorithm to solve this problem.",githubPath:null,demoPath:null,year:"2018",techUsed:" Python, Graph Theory, MongoDB, AMQP, NetworkX"},{id:1,title:"Drivers Incentives Strategies",icon:O.a,description:"Proposed drivers incentives strategies to kick-start the business when the market was supply-constrained. It relied on the driver segmentation mentioned earlier. I built a simulation tool to prove the return on investment. And I also participated in the development of the micro-service and the monitoring.",githubPath:null,demoPath:null,year:"2018",techUsed:"Python, Flask, MongoDB, AMQP, Docker, Kubernetes, Tableau Software"}],_=a("tfnm"),Z=a.n(_),V=[{id:1,title:"Consensual Classification applied on intrusion detection",icon:Z.a,description:"Proposed a solution to achieve consensus between classifier agents in a multi-agent system whose role is to detect intrusions based on traffic data in the network. This work was inspired by the Paxos family of protocols that solve consensus in a network of unreliable processors.",githubPath:null,demoPath:null,year:"2015 - 2016",techUsed:"Java, JADE, WEKA, Multi-Agent Systems"},{id:2,title:"Design of a Control Architecture for Habit Learning in Robots",description:"Implemented the work described in the research paper that hypothesizes that robots can learn habits, detect when these habits are appropriate to avoid costly computations of its planning system. The work showed that the two systems have complementary advantages and can be combined for performance improvement.",icon:Z.a,githubPath:null,demoPath:null,year:"2015 - 2016",techUsed:"Python, Reinforcement Learning, Adaptive Behaviour, Habit Learning"}],X=a("vOnD"),K=X.a.div.withConfig({displayName:"ProjectBox__Box",componentId:"sc-1t6fbps-0"})(["max-width:450px;width:35%;min-height:470px;border-radius:8px;box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2);transition:box-shadow 0.3s ease-out;background-color:#fff;margin:0 4% 4%;:hover{box-shadow:0 8px 17px 2px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12),0 5px 5px -3px rgba(0,0,0,0.2);transition:box-shadow 0.3s;}@media (max-width:700px){width:100%;min-height:auto;max-width:fit-content;}@media (min-width:768px) and (max-width:1030px){width:100%;min-height:auto;box-sizing:border-box;max-width:100%;margin:0 0 4%;}"]),q=X.a.div.withConfig({displayName:"ProjectBox__BoxIcon",componentId:"sc-1t6fbps-1"})(["height:120px;display:flex;justify-content:flex-start;align-items:center;padding:4%;box-sizing:border-box;border-radius:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;background-color:rgba(127,161,232,0.3);img{width:25%;margin-right:5%;margin-bottom:0;}h3{margin:0;flex:1;color:#0f1645;}@media (min-width:768px) and (max-width:1030px){img{width:10%;}}"]),$=X.a.p.withConfig({displayName:"ProjectBox__SkillTag",componentId:"sc-1t6fbps-2"})(["margin-right:0.3125rem;margin-bottom:3px;height:1.5rem;font-size:0.8rem;border-radius:8rem;color:#ffffff;padding:0.3125rem 0.625rem;background:#7fa1e8;display:inline-flex;align-items:center;"]),ee=X.a.div.withConfig({displayName:"ProjectBox__BoxDescription",componentId:"sc-1t6fbps-3"})(["padding:5%;flex-direction:column;display:FLEX;height:calc(100% - 120px);color:#0f1645;a{color:#7fa1e8;font-size:20px;font-weight:bold;display:block;margin:0 0 10px;text-decoration:none;}"]),te=X.a.div.withConfig({displayName:"ProjectBox__BoxStack",componentId:"sc-1t6fbps-4"})(["margin-top:auto;color:#ffffff;"]),ae=function(e){var t=e.info;return i.a.createElement(K,null,i.a.createElement(q,null,i.a.createElement("img",{src:t.icon,alt:"project icon"}),i.a.createElement("h3",null,t.title)),i.a.createElement(ee,null,i.a.createElement("p",null," ",t.description," "),i.a.createElement(te,null,null!=t.githubPath?i.a.createElement("a",{href:t.githubPath},"On Github "):"",null!=t.demoPath?i.a.createElement("a",{href:t.demoPath},"Project Demo "):"",t.techUsed.split(", ").map((function(e){return i.a.createElement($,null," ",e," ")})))))},ne=X.a.div.withConfig({displayName:"projectsStyle__ProjectsWrapper",componentId:"sc-1gtvdya-0"})(["padding-top:10%;padding-bottom:5%;"]),ie=X.a.div.withConfig({displayName:"projectsStyle__ProjectsSection",componentId:"sc-1gtvdya-1"})(["display:flex;flex-wrap:wrap;justify-content:center;@media (max-width:700px){flex-direction:column;margin-bottom:10%;}@media (min-width:768px) and (max-width:1030px){flex-direction:column;}"]),re=a("Bl7J");t.default=function(){return i.a.createElement(re.a,null,i.a.createElement(ne,null,i.a.createElement(x,null,i.a.createElement(T,null,i.a.createElement(A,null,"Professional"),i.a.createElement(A,null,"Personal"),i.a.createElement(A,null,"Master's")),i.a.createElement(w,null,i.a.createElement(ie,null,H.map((function(e){return i.a.createElement(ae,{key:e.id,info:e})})))),i.a.createElement(w,null,i.a.createElement(ie,null,E.map((function(e){return i.a.createElement(ae,{key:e.id,info:e})})))),i.a.createElement(w,null,i.a.createElement(ie,null,V.map((function(e){return i.a.createElement(ae,{key:e.id,info:e})})))))))}},"1Dv1":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBvcGFjaXR5PSIuMyIgZD0iTTEyIDYuNWMtMy43OSAwLTcuMTcgMi4xMy04LjgyIDUuNSAxLjY1IDMuMzcgNS4wMiA1LjUgOC44MiA1LjVzNy4xNy0yLjEzIDguODItNS41QzE5LjE3IDguNjMgMTUuNzkgNi41IDEyIDYuNXptMCAxMGMtMi40OCAwLTQuNS0yLjAyLTQuNS00LjVTOS41MiA3LjUgMTIgNy41czQuNSAyLjAyIDQuNSA0LjUtMi4wMiA0LjUtNC41IDQuNXoiLz48cGF0aCBkPSJNMTIgNC41QzcgNC41IDIuNzMgNy42MSAxIDEyYzEuNzMgNC4zOSA2IDcuNSAxMSA3LjVzOS4yNy0zLjExIDExLTcuNWMtMS43My00LjM5LTYtNy41LTExLTcuNXptMCAxM2MtMy43OSAwLTcuMTctMi4xMy04LjgyLTUuNUM0LjgzIDguNjMgOC4yMSA2LjUgMTIgNi41czcuMTcgMi4xMyA4LjgyIDUuNWMtMS42NSAzLjM3LTUuMDMgNS41LTguODIgNS41em0wLTEwYy0yLjQ4IDAtNC41IDIuMDItNC41IDQuNXMyLjAyIDQuNSA0LjUgNC41IDQuNS0yLjAyIDQuNS00LjUtMi4wMi00LjUtNC41LTQuNXptMCA3Yy0xLjM4IDAtMi41LTEuMTItMi41LTIuNXMxLjEyLTIuNSAyLjUtMi41IDIuNSAxLjEyIDIuNSAyLjUtMS4xMiAyLjUtMi41IDIuNXoiLz48L3N2Zz4="},PPWt:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBvcGFjaXR5PSIuODciIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPjxwYXRoIG9wYWNpdHk9Ii4zIiBkPSJNMTMuMzQgNC42Nkw5IDl2MTBoOWwzLTd2LTJoLTguNzd6Ii8+PHBhdGggZD0iTTIxIDhoLTYuMzFsLjk1LTQuNTcuMDMtLjMyYzAtLjQxLS4xNy0uNzktLjQ0LTEuMDZMMTQuMTcgMSA3LjU5IDcuNTlDNy4yMiA3Ljk1IDcgOC40NSA3IDl2MTBjMCAxLjEuOSAyIDIgMmg5Yy44MyAwIDEuNTQtLjUgMS44NC0xLjIybDMuMDItNy4wNWMuMDktLjIzLjE0LS40Ny4xNC0uNzN2LTJjMC0xLjEtLjktMi0yLTJ6bTAgNGwtMyA3SDlWOWw0LjM0LTQuMzRMMTIuMjMgMTBIMjF2MnpNMSA5aDR2MTJIMXoiLz48L3N2Zz4K"},RIWL:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBkPSJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QzE1LjQxIDEyLjU5IDE2IDExLjExIDE2IDkuNSAxNiA1LjkxIDEzLjA5IDMgOS41IDNTMyA1LjkxIDMgOS41IDUuOTEgMTYgOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHoiLz48L3N2Zz4="},Tqtu:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBkPSJNMTEuNDkgMy40OGMwIDEuMS45IDIgMiAyczItLjkgMi0yLS45LTItMi0yLTIgLjktMiAyem0tLjYgMTEuNWwyLjEgMnY2aDJ2LTcuNWwtMi4xLTIgLjYtM2MxLjMgMS41IDMuMyAyLjUgNS41IDIuNXYtMmMtMS45IDAtMy41LTEtNC4zLTIuNGwtMS0xLjZjLS40LS42LTEtMS0xLjctMS0uMyAwLS41LjEtLjguMWwtNS4yIDIuMnY0LjdoMnYtMy40bDEuOC0uNy0xLjYgOC4xLTQuOS0xLS40IDIgNyAxLjQgMS00LjR6Ii8+PC9zdmc+Cg=="},nJpn:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBvcGFjaXR5PSIuMyIgZD0iTTE1IDQuMzRWOGgzLjY2QzE4LjA1IDYuMyAxNi43IDQuOTUgMTUgNC4zNHpNOC4wNCAxNC4zNmwuNDQuNjdjMS4xOS4xNiAyLjE5LjkyIDIuNjggMS45N2gyLjY4Yy41Ni0xLjE4IDEuNzctMiAzLjE2LTIgLjE1IDAgLjMxLjAxLjQ2LjAzbC4yOS0uMzdjLjQtLjUxLjctMS4wNy45Mi0xLjY2SDcuMzdjLjMyLjY3LjU3IDEuMTkuNjcgMS4zNnoiLz48cGF0aCBkPSJNMTMgMnY4aDhjMC00LjQyLTMuNTgtOC04LTh6bTIgNlY0LjM0YzEuNy42IDMuMDUgMS45NSAzLjY2IDMuNjZIMTV6bS04LjU2IDNsLS45NS0ySDJ2MmgyLjIyczEuODkgNC4wNyAyLjEyIDQuNDJjLTEuMS41OS0xLjg0IDEuNzUtMS44NCAzLjA4QzQuNSAyMC40MyA2LjA3IDIyIDggMjJjMS43NiAwIDMuMjItMS4zIDMuNDYtM2gyLjA4Yy4yNCAxLjcgMS43IDMgMy40NiAzIDEuOTMgMCAzLjUtMS41NyAzLjUtMy41IDAtMS4wNC0uNDYtMS45Ny0xLjE4LTIuNjFDMjAuMzcgMTQuNTQgMjEgMTIuODQgMjEgMTFINi40NHpNOCAyMGMtLjgzIDAtMS41LS42Ny0xLjUtMS41UzcuMTcgMTcgOCAxN3MxLjUuNjcgMS41IDEuNVM4LjgzIDIwIDggMjB6bTkgMGMtLjgzIDAtMS41LS42Ny0xLjUtMS41UzE2LjE3IDE3IDE3IDE3czEuNS42NyAxLjUgMS41UzE3LjgzIDIwIDE3IDIwem0uNzQtNS4zNGwtLjI5LjM3Yy0uMTQtLjAyLS4zLS4wMy0uNDUtLjAzLTEuMzkgMC0yLjYuODItMy4xNiAyaC0yLjY4Yy0uNS0xLjA0LTEuNS0xLjgtMi42OC0xLjk3bC0uNDQtLjY3Yy0uMS0uMTctLjM0LS42OS0uNjctMS4zNmgxMS4yOWMtLjIxLjU5LS41MiAxLjE1LS45MiAxLjY2eiIvPjwvc3ZnPgo="},oXlW:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBkPSJNMTUuNSA1LjVjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yLTIgLjktMiAyIC45IDIgMiAyek01IDIyYzIuOCAwIDUtMi4yIDUtNXMtMi4yLTUtNS01LTUgMi4yLTUgNSAyLjIgNSA1IDV6bTAtOC41YzEuOSAwIDMuNSAxLjYgMy41IDMuNVM2LjkgMjAuNSA1IDIwLjUgMS41IDE4LjkgMS41IDE3czEuNi0zLjUgMy41LTMuNXptMi44LTIuM0wxMSAxNHY1aDJ2LTYuMmwtMi4yLTIuMyAyLjQtMi40LjguOGMxLjMgMS4zIDMgMi4xIDUuMSAyLjFWOWMtMS41IDAtMi43LS42LTMuNi0xLjVsLTEuOS0xLjljLS41LS40LTEtLjYtMS42LS42cy0xLjEuMi0xLjQuNkw3LjggOC40Yy0uNC40LS42LjktLjYgMS40IDAgLjYuMiAxLjEuNiAxLjR6TTE5IDEyYy0yLjggMC01IDIuMi01IDVzMi4yIDUgNSA1IDUtMi4yIDUtNS0yLjItNS01LTV6bTAgOC41Yy0xLjkgMC0zLjUtMS42LTMuNS0zLjVzMS42LTMuNSAzLjUtMy41IDMuNSAxLjYgMy41IDMuNS0xLjYgMy41LTMuNSAzLjV6Ii8+PC9zdmc+Cg=="},sFJx:function(e,t,a){},tfnm:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBvcGFjaXR5PSIuMyIgZD0iTTcgMTIuMjd2My43Mmw1IDIuNzMgNS0yLjczdi0zLjcyTDEyIDE1ek01LjE4IDlMMTIgMTIuNzIgMTguODIgOSAxMiA1LjI4eiIvPjxwYXRoIGQ9Ik0xMiAzTDEgOWw0IDIuMTh2NkwxMiAyMWw3LTMuODJ2LTZsMi0xLjA5VjE3aDJWOUwxMiAzem01IDEyLjk5bC01IDIuNzMtNS0yLjczdi0zLjcyTDEyIDE1bDUtMi43M3YzLjcyem0tNS0zLjI3TDUuMTggOSAxMiA1LjI4IDE4LjgyIDkgMTIgMTIuNzJ6Ii8+PC9zdmc+Cg=="},xeaZ:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMGYxNjQ1Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBvcGFjaXR5PSIuMyIgZD0iTTIwIDEwSDUuNzZMNCA2LjQ3VjE4aDE2eiIvPjxwYXRoIGQ9Ik0yLjAxIDZMMiAxOGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjRoLTRsMiA0aC0zbC0yLTRoLTJsMiA0aC0zbC0yLTRIOGwyIDRIN0w1IDRINGMtMS4xIDAtMS45OS45LTEuOTkgMnpNNCA2LjQ3TDUuNzYgMTBIMjB2OEg0VjYuNDd6Ii8+PC9zdmc+Cg=="}}]);
//# sourceMappingURL=component---src-pages-projects-js-e53a8f7694a2f09f656c.js.map