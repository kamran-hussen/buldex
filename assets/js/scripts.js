"use strict";import{CountUp}from"countup.js";function showHidePassword(e){let t=document.querySelectorAll(e);t.length>0&&t.forEach(e=>{e.addEventListener("click",(function(t){t.preventDefault();let c=document.getElementById(e.getAttribute("href"));"password"==c.type?(c.type="text",e.classList.add("is-shown")):(c.type="password",e.classList.remove("is-shown"))}))})}function choiceSelect(e){let t=document.querySelector(e);if(void 0!==t&&null!=t){new Choices(t,{searchEnabled:!1,itemSelectText:""})}}function searchPopup(e,t,c,o){let s=document.querySelector(e),r=document.querySelector(t),n=document.querySelector(c),a=document.querySelector(o);function l(){r.classList.remove("search-popup-active")}s&&s.addEventListener("click",(function(){r.classList.add("search-popup-active")})),n&&a&&(n.addEventListener("click",l),a.addEventListener("click",l))}showHidePassword(".password-toggle"),choiceSelect(".form-choice"),searchPopup("[data-search-toggle]","body","[data-search-close-button-selector]","[data-search-overlay-selector]");