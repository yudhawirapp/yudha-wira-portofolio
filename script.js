const b=document.getElementById('lang');let en=false;
const labels={
 id:['Tentang','Keahlian','Proyek','Sertifikasi','Galeri','Kontak'],
 en:['About','Expertise','Projects','Certifications','Gallery','Contact']
};
b.onclick=()=>{en=!en;b.textContent=en?'ID':'EN';document.documentElement.lang=en?'en':'id';document.querySelectorAll('nav a').forEach((a,i)=>a.textContent=labels[en?'en':'id'][i]);};

document.querySelectorAll('.filter').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));
    btn.classList.add('active');
    const filter=btn.dataset.filter;
    document.querySelectorAll('.media-card').forEach(card=>{
      card.style.display=(filter==='all'||card.dataset.category===filter)?'block':'none';
    });
  });
});

const lightbox=document.getElementById('lightbox');
const lbImg=document.getElementById('lightboxImage');
const lbTitle=document.getElementById('lightboxTitle');
const lbYear=document.getElementById('lightboxYear');
document.querySelectorAll('.media-card').forEach(card=>{
  card.addEventListener('click',()=>{
    lbImg.src=card.dataset.src;
    lbImg.alt=card.dataset.title;
    lbTitle.textContent=card.dataset.title;
    lbYear.textContent=card.dataset.year||'';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden','false');
  });
});
const close=()=>{lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');lbImg.src='';};
document.getElementById('lightboxClose').onclick=close;
lightbox.addEventListener('click',e=>{if(e.target===lightbox)close();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
