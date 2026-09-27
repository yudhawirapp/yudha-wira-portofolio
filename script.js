const b=document.getElementById('lang');let en=false;
const labels={
 id:['Tentang','Keahlian','Proyek','Sertifikasi','Galeri','Kontak'],
 en:['About','Expertise','Projects','Certifications','Gallery','Contact']
};
b.onclick=()=>{en=!en;b.textContent=en?'ID':'EN';document.documentElement.lang=en?'en':'id';document.querySelectorAll('nav a').forEach((a,i)=>a.textContent=labels[en?'en':'id'][i]);};

const galleryGrid=document.getElementById('galleryGrid');
const galleryEmpty=document.getElementById('galleryEmpty');
const galleryRepoApi='https://api.github.com/repos/yudhawirapp/yudha-wira-portofolio/contents/images?ref=main';

const galleryFiles=[
  'FHM-3213.jpg','FHM-3511.jpg','Hikespi01.jpg','Hikespi02.jpg',
  'IMG_6887.JPG','IMG_7007.JPG','IMG_7483.HEIC',
  'canyonign bali 2024.JPG','canyoning bali 2024 .JPG',
  'ghatnas OANC 2023 .JPG','ghatnas OANC 2023.JPG',
  'IMG_0078 2.HEIC','IMG_0079 2.HEIC','IMG_0080 2.HEIC','IMG_0081 2.HEIC',
  'IMG_0083 2.HEIC','IMG_0085 2.HEIC','IMG_0086 2.HEIC','IMG_0087 2.HEIC','IMG_0088 2.HEIC','IMG_0089 2.HEIC',
  'training tkpk.jpeg','training tkpk 2026.jpeg','training tkpk 2026(1).jpeg',
  'training tkpk 2026 (2).jpeg','training tkpk 2026 (3).jpeg','training tkpk 2026 (4).jpeg',
  'training tkpk 2026 (5).jpeg','training tkpk 2026 (6).jpeg','training tkpk 2026 (7).jpeg',
  'training tkpk 2026 (8).jpeg','training tkpk 2026 (9).jpeg',
  'work-1.jpg','work-2.jpg','work-3.jpg','work-4.jpg','work-5.jpg','work-6.jpg','work-7.jpg','work-8.jpg'
];

const categoryFor=name=>{
  const n=name.toLowerCase();
  if(n.includes('novo')||n.includes('novonordisk')) return null;
  if(n.includes('canyon')||n.includes('hikespi')||n.includes('cave')) return 'adventure';
  if(n.includes('giant banner')||n.includes('giantbanner')||n.includes('work-1')) return 'rope';
  if(n.includes('oanc')||n.includes('ghatnas')) return 'training';
  if(n.includes('training')||n.includes('tkpk')||n.includes('tkbt')) return 'training';
  if(n.includes('cert')||n.includes('kompetensi')||n.includes('sertifikat')) return 'certification';
  if(n.includes('project')||n.includes('bank')||n.includes('work-')) return 'project';
  return 'project';
};

const titleFor=name=>{
  const base=name.replace(/\.[^.]+$/,'').replace(/[_-]+/g,' ').replace(/\s+/g,' ').trim();
  return base.replace(/\b\w/g,c=>c.toUpperCase());
};

const yearFor=name=>{
  const m=name.match(/20\d{2}/);
  return m?m[0]:'Portfolio';
};

const buildGallery=files=>{
  galleryGrid.innerHTML='';
  const usable=files.filter(f=>categoryFor(f.name));
  usable.forEach(file=>{
    const category=categoryFor(file.name);
    const card=document.createElement('button');
    card.className='media-card';
    card.dataset.category=category;
    card.dataset.title=titleFor(file.name);
    card.dataset.year=yearFor(file.name);
    card.dataset.src='images/'+encodeURIComponent(file.name).replace(/%2F/g,'/');
    card.innerHTML='<img loading="lazy" src="'+card.dataset.src+'" alt="'+card.dataset.title+'"><span>'+card.dataset.title+'</span>';
    galleryGrid.appendChild(card);
  });
  bindGalleryCards();
  applyGalleryFilter(document.querySelector('.filter.active')?.dataset.filter||'all');
};

const applyGalleryFilter=filter=>{
  let visible=0;
  galleryGrid.querySelectorAll('.media-card').forEach(card=>{
    const show=filter==='all'||card.dataset.category===filter;
    card.style.display=show?'block':'none';
    if(show)visible++;
  });
  galleryEmpty.hidden=visible!==0;
};

document.querySelectorAll('.filter').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));
    btn.classList.add('active');
    applyGalleryFilter(btn.dataset.filter);
  });
});

const lightbox=document.getElementById('lightbox');
const lbImg=document.getElementById('lightboxImage');
const lbTitle=document.getElementById('lightboxTitle');
const lbYear=document.getElementById('lightboxYear');

const openLightbox=card=>{
  lbImg.src=card.dataset.src;
  lbImg.alt=card.dataset.title;
  lbTitle.textContent=card.dataset.title;
  lbYear.textContent=card.dataset.year||'';
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
};

const bindGalleryCards=()=>{
  galleryGrid.querySelectorAll('.media-card').forEach(card=>{
    card.addEventListener('click',()=>openLightbox(card));
  });
};

const close=()=>{
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden','true');
  lbImg.src='';
  document.body.style.overflow='';
};
document.getElementById('lightboxClose').onclick=close;
lightbox.addEventListener('click',e=>{if(e.target===lightbox)close();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});

fetch(galleryRepoApi)
  .then(r=>r.ok?r.json():Promise.reject(new Error('GitHub API error')))
  .then(items=>{
    const apiFiles=items.filter(x=>x.type==='file'&&/\.(jpe?g|png|webp)$/i.test(x.name));
    const names=new Set(apiFiles.map(x=>x.name));
    const files=galleryFiles.map(name=>({name})).filter(x=>names.has(x.name));
    const extras=apiFiles.filter(x=>!galleryFiles.includes(x.name));
    buildGallery([...files,...extras]);
  })
  .catch(()=>{
    buildGallery(galleryFiles.map(name=>({name})));
  });


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
