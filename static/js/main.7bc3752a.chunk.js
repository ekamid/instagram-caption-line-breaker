(this["webpackJsonpinsta-captioner"]=this["webpackJsonpinsta-captioner"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),i=n.n(o),c=(n(14),n(15),function(){return r.a.createElement("div",{className:"jumbotron text-center p-1 mb-3"},r.a.createElement("h2",{className:"display-5"},"InstaCaptioner"),r.a.createElement("p",{className:"lead"},"Add line breaks in your instagram caption."))});var l=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"footer-copyright text-center py-2"},"\xa9 2020 Copyright:",r.a.createElement("a",{href:"https://github.com/ekamid"}," ekamid")))},s=n(2),u=n.n(s),m=n(7),p=n(8),d=function(e){var t=e.covertAndCopy,n=e.clearCaption;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:t},"Convert And Copy")),r.a.createElement("div",{className:"col-4"},r.a.createElement("button",{type:"button",className:"btn btn-danger  float-right",onClick:n},"Clear")))},f=n(1),g=n.n(f),h=function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],o=t[1],i=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==n.length){e.next=4;break}g()("Oh Noo!","Caption is empty","error",{button:"Trying Again"}),e.next=18;break;case 4:if(t=n.replace(/\n/g," \n"),!(n.length>=2200)){e.next=9;break}g()("Wait!","Instagram Caption Character limit is 2200","warning",{button:"Deleting Some"}),e.next=18;break;case 9:return e.prev=9,e.next=12,navigator.clipboard.writeText(t);case 12:g()("GREAT!","Caption Copied To Clipboard!","success",{button:"Aww yiss!"}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(9),console.error("Async: Could not copy text: ",e.t0);case 18:case"end":return e.stop()}}),e,null,[[9,15]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container pb-3 pt-1"},r.a.createElement(d,{covertAndCopy:i,clearCaption:function(){g()({title:"Do you want to clear Caption?",icon:"warning",buttons:!0,dangerMode:!0}).then((function(e){e&&o("")}))}}),r.a.createElement("div",{className:"form-group mt-2"},r.a.createElement("textarea",{className:"form-control",rows:"10",value:n,onChange:function(e){o(e.target.value)},placeholder:"Paste Or Write Your Instagram Caption..."}),r.a.createElement("h6",{className:"mt-1"},r.a.createElement("span",{className:"text-danger"},n.length),"/2200(Max Characters for Instagram Caption)")))},v=function(){return r.a.createElement("div",{className:"container pb-3"},r.a.createElement("ul",{className:"list-group"},r.a.createElement("h4",null,"How To USE"),r.a.createElement("li",{className:"list-group-item"},"Paste or write your text"),r.a.createElement("li",{className:"list-group-item"},"Convert and Copy"),r.a.createElement("li",{className:"list-group-item"},"Paste as instagram caption")))},b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c,null),r.a.createElement(h,null),r.a.createElement(v,null),r.a.createElement(l,null))},w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(b,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/instagram-caption-line-breaker",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/instagram-caption-line-breaker","/service-worker.js");w?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):E(t,e)}))}}()},9:function(e,t,n){e.exports=n(19)}},[[9,1,2]]]);
//# sourceMappingURL=main.7bc3752a.chunk.js.map