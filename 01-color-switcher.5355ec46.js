const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let d=null;function a(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}e.setAttribute("disabled","disabled"),t.addEventListener("click",(()=>{d=setInterval(a,1e3),t.setAttribute("disabled","disabled"),e.removeAttribute("disabled")})),e.addEventListener("click",(()=>{e.setAttribute("disabled","disabled"),clearInterval(d),t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.5355ec46.js.map
