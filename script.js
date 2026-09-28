const heartsContainer=document.getElementById('hearts');
const heartSymbols=['❤️','💗','💕','💖','🌸','✨'];
function createHeart(){if(!heartsContainer)return;const heart=document.createElement('div');heart.classList.add('heart');heart.innerHTML=heartSymbols[Math.floor(Math.random()*heartSymbols.length)];heart.style.left=Math.random()*100+'%';heart.style.animationDuration=(5+Math.random()*6)+'s';heart.style.fontSize=(15+Math.random()*25)+'px';heartsContainer.appendChild(heart);setTimeout(()=>heart.remove(),11000)}
setInterval(createHeart,700);
function showSurprise(){const s=document.getElementById('surprise');if(s){s.style.display='block';for(let i=0;i<20;i++)setTimeout(createHeart,i*100)}}
