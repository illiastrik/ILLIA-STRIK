!function(){"use strict";(function(){const e=document.querySelector(".mobile-nav-btn"),t=document.querySelector(".mobile-nav"),o=document.querySelector(".nav-icon");e.onclick=function(){t.classList.toggle("mobile-nav--open"),o.classList.toggle("nav-icon--active"),document.body.classList.toggle("no-scroll")}})(),function(){const e=document.querySelector(".sec-text"),t=()=>{setTimeout((()=>{e.textContent="user interface design"}),0),setTimeout((()=>{e.textContent="front-end development"}),4e3),setTimeout((()=>{e.textContent="design processes."}),8e3)};t(),setInterval(t,12e3)}(),document.getElementById("open-model-btn").addEventListener("click",(function(){document.getElementById("modal").classList.add("open-modal")})),document.getElementById("close-model-btn").addEventListener("click",(function(){document.getElementById("modal").classList.remove("open-modal")})),document.querySelector(".button__1").addEventListener("click",(function(e){e.preventDefault(),document.querySelector("#contact").scrollIntoView({behavior:"smooth"})})),document.querySelector(".btn-2").addEventListener("click",(function(e){e.preventDefault(),document.querySelector("#contact").scrollIntoView({behavior:"smooth"})})),document.querySelector(".btn-3").addEventListener("click",(function(e){e.preventDefault(),document.querySelector("#contact").scrollIntoView({behavior:"smooth"})})),document.querySelector(".help-link").addEventListener("click",(function(e){e.preventDefault(),document.querySelector("#help").scrollIntoView({behavior:"smooth"})})),document.querySelector(".project-link").addEventListener("click",(function(e){e.preventDefault(),document.querySelector("#project").scrollIntoView({behavior:"smooth"})})),document.querySelector(".contact-link").addEventListener("click",(function(e){e.preventDefault(),document.querySelector("#contact").scrollIntoView({behavior:"smooth"})})),document.querySelector(".help-l").addEventListener("click",(function(e){document.querySelector(".mobile-nav--open").classList.remove("mobile-nav--open"),document.querySelector(".nav-icon--active").classList.remove("nav-icon--active"),e.preventDefault(),document.querySelector("#help").scrollIntoView({behavior:"smooth"})})),document.querySelector(".project-l").addEventListener("click",(function(e){document.querySelector(".mobile-nav--open").classList.remove("mobile-nav--open"),document.querySelector(".nav-icon--active").classList.remove("nav-icon--active"),e.preventDefault(),document.querySelector("#project").scrollIntoView({behavior:"smooth"})})),document.querySelector(".contact-l").addEventListener("click",(function(e){document.querySelector(".mobile-nav--open").classList.remove("mobile-nav--open"),document.querySelector(".nav-icon--active").classList.remove("nav-icon--active"),e.preventDefault(),document.querySelector("#contact").scrollIntoView({behavior:"smooth"})}))}();