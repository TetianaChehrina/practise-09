import"./assets/styles-4764c9ec.js";import{i}from"./assets/vendor-a8d80a71.js";const l={email:"user@mail.com",password:"secret"},s="form-data",m=document.querySelector("#login-form"),o=document.querySelectorAll(".login-input"),r=document.querySelector(".login-btn");m.addEventListener("submit",c);function c(t){if(t.preventDefault(),r.textContent==="Logout"){localStorage.removeItem(s),m.reset(),o.forEach(n=>n.removeAttribute("readonly")),r.textContent="Login";return}const e=t.target.elements.email.value.trim(),a=t.target.elements.password.value.trim();if(e===""||a===""){i.warning({message:"Fill all fields",position:"topRight"});return}if(e!==l.email||a!==l.password){i.warning({message:"Incorrect data",position:"topRight"});return}localStorage.setItem(s,JSON.stringify({email:e,password:a})),r.textContent="Logout",o.forEach(n=>n.setAttribute("readonly",!0))}const u=localStorage.getItem(s);if(u){const t=JSON.parse(u);o[0].value=t.email||"",o[1].value=t.password||"",r.textContent="Logout",o.forEach(e=>e.setAttribute("readonly",!0))}
//# sourceMappingURL=commonHelpers2.js.map
