(()=>{"use strict";document.body.appendChild(function(){let e=document.createElement("header");e.classList.add("navbar");let t=document.createElement("div");t.classList.add("name"),t.textContent="Covid Cookery",e.appendChild(t);let n=document.createElement("ul");function d(e){let t=document.createElement("li");return t.textContent=e,t}n.classList.add("page-tabs");let a=["Home","Menu","Contact"];for(let e of a)n.appendChild(d(e));return n.children[0].classList.add("selected"),e.appendChild(n),e}()),document.body.appendChild((()=>{let e=document.createElement("main");return e.id="main",e})()),function(){let e=document.getElementById("main"),t=function(){let e=document.createElement("div");e.classList.add("coronavirus");let t=document.createElement("img");t.src="assets/images/coronavirus.png",t.alt="Coronavirus",e.appendChild(t);let n=document.createElement("div");n.classList.add("home-text");let d=["Welcome to the Covid Cookery! The world's premiere destination for the 2020 Coronavirus Outbreak themed dishes.",'Rated 3 stars by Michelin and called the "most novel dining   establishment since Gusteau\'s", we are sure you will find something you  love.'];for(let e of d){let t=document.createElement("p");t.textContent=e,n.appendChild(t)}return{imageDiv:e,homeText:n}}();for(let n in t)e.appendChild(t[n])}(),function(){let e=document.getElementsByClassName("page-tabs")[0].children;function t(t){let n=t.target;n.classList.add("selected");let d=e.filter((e=>e!=n));for(let e of d)e.classList.remove("selected")}e=Array.from(e),e.forEach((e=>{e.addEventListener("click",t)}))}()})();