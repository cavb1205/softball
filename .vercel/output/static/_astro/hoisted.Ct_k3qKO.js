import"./hoisted.BScVxmeO.js";const l=document.querySelectorAll(".player-link"),n=document.querySelector(".player-title"),a=document.querySelector(".player-country"),y=document.querySelector(".player-id"),s=document.querySelector(".player-photo");l.forEach(r=>{r.addEventListener("click",e=>{const{id:t,country:o,name:c}=e.currentTarget.dataset;console.log(e.currentTarget.dataset),n.textContent=c,a.src=`/img/pais/${o}.svg`,y.href=`/player/${t}`,s.src=`/img/jugadores/${t}.webp`})});
