!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),d=null;function a(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}e.setAttribute("disabled","disabled"),t.addEventListener("click",(function(){d=setInterval(a,1e3),t.setAttribute("disabled","disabled"),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){e.setAttribute("disabled","disabled"),clearInterval(d),t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.5255470e.js.map