import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as i}from"./assets/vendor-992cd48f.js";const f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]>new Date?document.querySelector("[data-start]").removeAttribute("disabled"):(window.alert("Please choose a date in the future"),document.querySelector("[data-start]").setAttribute("disabled","true"))}};i("#datetime-picker",f);function r(t){return t.toString().padStart(2,"0")}function y(t){const a=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:c,minutes:l,seconds:m}}let d;function h(t){d=setInterval(()=>{const e=new Date,o=t-e;if(o<=0)clearInterval(d),u({days:0,hours:0,minutes:0,seconds:0});else{const{days:n,hours:s,minutes:a,seconds:c}=y(o);u({days:n,hours:s,minutes:a,seconds:c})}},1e3)}function u({days:t,hours:e,minutes:o,seconds:n}){document.querySelector("[data-days]").textContent=r(t),document.querySelector("[data-hours]").textContent=r(e),document.querySelector("[data-minutes]").textContent=r(o),document.querySelector("[data-seconds]").textContent=r(n)}document.querySelector("[data-start]").addEventListener("click",()=>{const t=i.parseDate(document.querySelector("#datetime-picker").value);t&&h(t)});document.querySelector("[data-start]").setAttribute("disabled","true");
//# sourceMappingURL=commonHelpers2.js.map
