const e="light-theme",t="dark-theme";document.querySelector("#theme-switch-toggle").addEventListener("change",(function(o){const c=document.body.classList.contains(t),s=document.body.classList.contains(e);if(console.log("isThemeDark",c),c)return void document.body.classList.replace(t,e);if(s)return document.body.classList.replace(e,t),void localStorage.setItem("theme",t)})),document.body.classList.add(e),console.log(localStorage);
//# sourceMappingURL=index.4e430110.js.map
