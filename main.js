document.getElementById('y').textContent=new Date().getFullYear();
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('#menu a').forEach(a=>a.onclick=()=>document.body.classList.remove('open'));
