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

const certificateGroups={
  assessor:{
    title:'Workplacement Assessor · Certificates',
    files:[
      ['WPA 2016','certificates/workplace-assessor/wpa%202016.pdf'],
      ['WPA Kemenpar 2016','certificates/workplace-assessor/wpa%20kemenpar%202016.pdf'],
      ['WPA 2019','certificates/workplace-assessor/rcc%20wpa%202019.pdf'],
      ['WPA 2022','certificates/workplace-assessor/rcc%20wpa%202022.pdf'],
      ['WPA 2025','certificates/workplace-assessor/rcc%20wpa%202025.pdf']
    ]
  },
  trainer:{
    title:'Professional Trainer · 3 Certificates',
    files:[
      ['Pengawasan K3 Bekerja di Ketinggian · 2026','certificates/trainer/Sertifikat%20Pengajar%20-%20Yudha%20Wira%20PB%20%2827-28%20Agustus%202026%29.pdf'],
      ['Sertifikasi TKBT Tingkat 2 · SKM · 2026','certificates/trainer/YUDHA%20WIRA%20PRATAMA%20PRIBADI%20-%20Sertifikasi%20TKBT%20Tingkat%202.pdf'],
      ['Narasumber TKBT Tingkat 2 · Midiatama · 2026','certificates/trainer/sertifikat%20midiatama.pdf']
    ]
  }
};
const certificateViewer=document.getElementById('certificateViewer');
const certificateViewerTitle=document.getElementById('certificateViewerTitle');
const certificateViewerContent=document.getElementById('certificateViewerContent');
const certificateViewerClose=document.getElementById('certificateViewerClose');
document.querySelectorAll('.cert-viewer-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const group=certificateGroups[btn.dataset.certGroup];
    certificateViewerTitle.textContent=group.title;
    certificateViewerContent.innerHTML=group.files.map(([title,file])=>'<article class="certificate-frame"><h3>'+title+'</h3><iframe src="'+file+'" title="'+title+'" loading="lazy"></iframe></article>').join('');
    certificateViewer.classList.add('open');
    certificateViewer.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
  });
});
const closeCertificateViewer=()=>{
  certificateViewer.classList.remove('open');
  certificateViewer.setAttribute('aria-hidden','true');
  certificateViewerContent.innerHTML='';
  document.body.style.overflow='';
};
certificateViewerClose.onclick=closeCertificateViewer;
certificateViewer.addEventListener('click',e=>{if(e.target===certificateViewer)closeCertificateViewer();});
