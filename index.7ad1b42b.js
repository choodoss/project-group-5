function logModalError(t){console.log("%c"+t,"color: #BADA55")}document.addEventListener("DOMContentLoaded",(function(){["data-locations-modal","data-read-modal","data-buynow-modal","data-franchise-modal","data-ingredients-modal","data-menu"].forEach((function(t){var o=t+"-open",e=t+"-close",n=document.querySelectorAll("["+o+"]"),d=document.querySelectorAll("["+e+"]"),a=document.querySelector("["+t+"]");function l(){document.body.classList.toggle("modal-open"),a.classList.toggle("is-hidden"),document.addEventListener("keydown",(function(t){"Escape"===t.key&&(a.classList.add("is-hidden"),document.body.classList.remove("modal-open"))}))}a||logModalError("Can`t find Modal with attribute "+a),0===n.length&&logModalError("Can`t find Open modal button with attribute "+o),0===d.length&&logModalError("Can`t find Close modal button with attribute "+e),a&&0!==n.length&&0!==d.length&&(n.forEach((function(t){return t.addEventListener("click",l)})),d.forEach((function(t){return t.addEventListener("click",l)})),a.addEventListener("click",(function(t){t.target===a&&l()})))}))}),!1);
//# sourceMappingURL=index.7ad1b42b.js.map
