const b=document.getElementById('lang');let en=false;
const translations={
 id:{
  nav:['Tentang','Keahlian','Proyek','Sertifikasi','Galeri','Testimoni','Kontak'],
  text:{
   '.hero small':'PROFESIONAL MULTIDISIPLIN',
   '.hero div>p:not(.role)':'25 tahun pengalaman dalam pelatihan, asesmen kompetensi, komunikasi, event, dan aktivitas petualangan.',
   '.hero .btn':'Lihat Portofolio',
   '#about small':'01 / TENTANG SAYA',
   '#about h2':'Berpengalaman, adaptif, dan selalu siap belajar.',
   '#about p':'Saya Yudha Wira, profesional multidisiplin di bidang pelatihan, asesmen kompetensi, public relations, MICE, dan aktivitas petualangan. Saya menggabungkan keahlian teknis, komunikasi, keselamatan, dan pengembangan sumber daya manusia.',
   '#skills small':'02 / KEAHLIAN',
   '#skills .grid article:nth-child(1) h3':'Pelatihan & Asesmen',
   '#skills .grid article:nth-child(2) h3':'Hubungan Masyarakat & MICE',
   '#skills .grid article:nth-child(3) h3':'Akses Tali & Petualangan',
   '#skills .grid article:nth-child(1) p':'Professional Trainer, Master Trainer, Workplacement Assessor, dan Asesor Kompetensi.',
   '#skills .grid article:nth-child(2) p':'Komunikasi, koordinasi, event support, dan pengelolaan kegiatan.',
   '#skills .grid article:nth-child(3) p':'Rope Access Technician, Professional Guide, Caver, dan Canyoner.',
   '#projects small':'03 / PROYEK TERPILIH',
   '#projects>.gallery-intro':'Pilihan pengalaman dan proyek. Buka dokumentasi foto terkait melalui galeri.',
   '#projects article:nth-child(1) h3':'Pemasangan Giant Banner',
   '#projects article:nth-child(2) h3':'Pengembangan Pelatihan & Kompetensi',
   '#projects article:nth-child(3) h3':'Petualangan Canyoning – Bali',
   '#projects article:nth-child(1) .btn':'Lihat Foto Proyek',
   '#projects article:nth-child(2) .btn':'Lihat Foto Training',
   '#projects article:nth-child(3) .btn':'Lihat Foto Adventure',
   '#certs small':'04 / PELATIHAN & SERTIFIKASI',
   '#certs>.gallery-intro':'Dokumen sertifikasi dikelompokkan berdasarkan penerbit dan bidang kompetensi.',
   '#certs article:nth-child(1) h3':'Workplacement & Kompetensi',
   '#certs article:nth-child(2) h3':'Pelatih & Instruktur',
   '#certs article:nth-child(3) h3':'Outdoor & Petualangan',
   '#certs article:nth-child(4) h3':'Sertifikat Lainnya',
   '#certs article:nth-child(1) p':'Sertifikat BNSP untuk asesmen dan kompetensi profesional.',
   '#certs article:nth-child(2) p':'Sertifikat pelatihan dan instruktur dari Midiatama, SKM, serta Pengawasan K3 Bekerja di Ketinggian.',
   '#certs article:nth-child(3) p':'Sertifikat instruktur dan kompetensi kegiatan outdoor dan petualangan.',
   '#certs article:nth-child(4) p':'Sertifikat lain yang belum termasuk dalam tiga kategori di atas.',
   '#gallery small':'05 / GALERI',
   '#gallery h2':'25 Years. Many Experiences. One Journey.',
   '#gallery>.gallery-intro':'Kumpulan dokumentasi profesional, training, rope access, adventure, project, dan certification.',
   '#galleryEmpty':'Tidak ada foto untuk kategori ini.',
   '.media-note':'Foto diambil langsung dari folder images di repository GitHub. File asli tidak dipindahkan atau diubah namanya.',
   '#testimonials small':'06 / TESTIMONI',
   '#testimonials h2':'Pengalaman dan kepercayaan.',
   '#testimonials>.gallery-intro':'Testimoni dari klien, peserta pelatihan, dan mitra kerja akan ditampilkan di sini setelah melalui proses moderasi.',
   '.testimonial-placeholder p':'Testimoni yang dikirim akan ditinjau terlebih dahulu sebelum ditampilkan di website.',
   '.testimonial-invite strong':'Pernah bekerja sama dengan Yudha?',
   '.testimonial-invite p':'Bagikan pengalaman Anda. Cukup isi formulir singkat di bawah ini.',
   '.testimonial-cta':'Tulis Testimoni ↓',
   '.testimonial-form-wrap h3':'Bagikan pengalaman Anda',
   '.form-note':'Isi formulir berikut. Testimoni Anda akan dikirim kepada Yudha untuk ditinjau dan tidak langsung dipublikasikan.',
   'label[for="testimonial-name"]':'Nama *',
   'label[for="testimonial-role"]':'Jabatan / Organisasi (opsional)',
   'label[for="testimonial-relation"]':'Hubungan dengan Yudha *',
   'label[for="testimonial-message"]':'Testimoni *',
   '.testimonial-consent':'Saya menyetujui testimoni ini ditampilkan di website setelah ditinjau. *',
   '.testimonial-form button':'Kirim Testimoni',
   '#contact small':'07 / KONTAK',
   '#contact h2':'Mari terhubung untuk peluang, kolaborasi, dan proyek berikutnya.',
   '#contact>.btn':'Kirim Email'
  },
  filters:['ALL','ROPE ACCESS','TRAINING','ADVENTURE','PROJECT','CERTIFICATION'],
  certButtons:['Lihat Sertifikat','Lihat Sertifikat','Lihat Sertifikat','Lihat Sertifikat'],
  relation:['Pilih salah satu','Klien','Peserta pelatihan','Rekan kerja','Mitra kerja','Lainnya'],
  placeholders:['Nama Anda','Contoh: HR Manager · PT ABC','Ceritakan pengalaman Anda bekerja atau berkolaborasi dengan Yudha...']
 },
 en:{
  nav:['About','Expertise','Projects','Certifications','Gallery','Testimony','Contact'],
  text:{
   '.hero small':'MULTIDISCIPLINARY PROFESSIONAL',
   '.hero div>p:not(.role)':'25 years of experience in training, competency assessment, communications, events, and adventure activities.',
   '.hero .btn':'View Portfolio',
   '#about small':'01 / ABOUT ME',
   '#about h2':'Experienced, adaptable, and always ready to learn.',
   '#about p':'I am Yudha Wira, a multidisciplinary professional in training, competency assessment, public relations, MICE, and adventure activities. I combine technical expertise, communication, safety, and human resource development.',
   '#skills small':'02 / EXPERTISE',
   '#skills .grid article:nth-child(1) h3':'Training & Assessment',
   '#skills .grid article:nth-child(2) h3':'Public Relations & MICE',
   '#skills .grid article:nth-child(3) h3':'Rope Access & Adventure',
   '#skills .grid article:nth-child(1) p':'Professional Trainer, Master Trainer, Workplacement Assessor, and Competency Assessor.',
   '#skills .grid article:nth-child(2) p':'Communication, coordination, event support, and event management.',
   '#skills .grid article:nth-child(3) p':'Rope Access Technician, Professional Guide, Caver, and Canyoner.',
   '#projects small':'03 / SELECTED PROJECTS',
   '#projects>.gallery-intro':'Selected experience and projects. Explore related photo documentation in the gallery.',
   '#projects article:nth-child(1) h3':'Giant Banner Installation',
   '#projects article:nth-child(2) h3':'Training & Competency Development',
   '#projects article:nth-child(3) h3':'Canyoning Adventure – Bali',
   '#projects article:nth-child(1) .btn':'View Project Photos',
   '#projects article:nth-child(2) .btn':'View Training Photos',
   '#projects article:nth-child(3) .btn':'View Adventure Photos',
   '#certs small':'04 / TRAINING & CERTIFICATIONS',
   '#certs>.gallery-intro':'Certificates are grouped by issuing organization and competency area.',
   '#certs article:nth-child(1) h3':'Workplacement & Competency',
   '#certs article:nth-child(2) h3':'Trainer & Instructor',
   '#certs article:nth-child(3) h3':'Outdoor & Adventure',
   '#certs article:nth-child(4) h3':'Other Certificates',
   '#certs article:nth-child(1) p':'BNSP certificates for assessment and professional competency.',
   '#certs article:nth-child(2) p':'Training and instructor certificates from Midiatama, SKM, and work-at-height safety supervision.',
   '#certs article:nth-child(3) p':'Instructor and competency certificates for outdoor and adventure activities.',
   '#certs article:nth-child(4) p':'Other certificates not included in the three categories above.',
   '#gallery small':'05 / GALLERY',
   '#gallery h2':'25 Years. Many Experiences. One Journey.',
   '#gallery>.gallery-intro':'A collection of professional, training, rope access, adventure, project, and certification documentation.',
   '#galleryEmpty':'No photos in this category.',
   '.media-note':'Photos are loaded directly from the images folder in the GitHub repository. Original files are not moved or renamed.',
   '#testimonials small':'06 / TESTIMONIALS',
   '#testimonials h2':'Experience and trust.',
   '#testimonials>.gallery-intro':'Testimonials from clients, trainees, and partners will appear here after moderation.',
   '.testimonial-placeholder p':'Submitted testimonials will be reviewed before they are displayed on the website.',
   '.testimonial-invite strong':'Have you worked with Yudha?',
   '.testimonial-invite p':'Share your experience. Simply complete the short form below.',
   '.testimonial-cta':'Write a Testimonial ↓',
   '.testimonial-form-wrap h3':'Share your experience',
   '.form-note':'Complete the form below. Your testimonial will be sent to Yudha for review and will not be published immediately.',
   'label[for="testimonial-name"]':'Name *',
   'label[for="testimonial-role"]':'Position / Organization (optional)',
   'label[for="testimonial-relation"]':'Your relationship with Yudha *',
   'label[for="testimonial-message"]':'Testimonial *',
   '.testimonial-consent':'I agree that this testimonial may be displayed on the website after review. *',
   '.testimonial-form button':'Submit Testimonial',
   '#contact small':'07 / CONTACT',
   '#contact h2':'Let’s connect for opportunities, collaboration, and future projects.',
   '#contact>.btn':'Send Email'
  },
  filters:['ALL','ROPE ACCESS','TRAINING','ADVENTURE','PROJECT','CERTIFICATION'],
  certButtons:['View Certificates','View Certificates','View Certificates','View Certificates'],
  relation:['Select one','Client','Trainee','Colleague','Business partner','Other'],
  placeholders:['Your name','e.g., HR Manager · ABC Company','Tell us about your experience working or collaborating with Yudha...']
 }
};
function setLanguage(){
 const t=translations[en?'en':'id'];
 document.documentElement.lang=en?'en':'id';
 b.textContent=en?'ID':'EN';
 document.querySelectorAll('nav a').forEach((a,i)=>a.textContent=t.nav[i]);
 Object.entries(t.text).forEach(([selector,value])=>{
  const el=document.querySelector(selector);if(!el)return;
  if(selector==='.testimonial-consent'){const input=el.querySelector('input');el.textContent=value;el.prepend(input);return;}
  el.textContent=value;
 });
 document.querySelectorAll('.filter').forEach((el,i)=>el.textContent=t.filters[i]);
 document.querySelectorAll('.cert-viewer-btn').forEach((el,i)=>el.textContent=t.certButtons[i]);
 const relation=document.getElementById('testimonial-relation');
 [...relation.options].forEach((o,i)=>o.textContent=t.relation[i]);
 document.getElementById('testimonial-name').placeholder=t.placeholders[0];
 document.getElementById('testimonial-role').placeholder=t.placeholders[1];
 document.getElementById('testimonial-message').placeholder=t.placeholders[2];
 document.querySelector('.media-note strong')?.replaceWith(document.createTextNode('images'));
}
b.onclick=()=>{en=!en;setLanguage();};

setLanguage();

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
  'leang pute 2007.jpg','work-1.jpg','work-2.jpg','work-3.jpg','work-4.jpg','work-5.jpg','work-6.jpg','work-7.jpg','work-8.jpg'
];

const categoryFor=name=>{
  const n=name.toLowerCase().replace(/\s+/g,' ').trim();
  if(n==='leang pute 2007.jpg' || n.startsWith('img')) return 'adventure';
  if(n.includes('novo')||n.includes('novonordisk')) return null;
  if(n.includes('leang pute')||n.includes('leangpute')||n.includes('lean pute')||n.includes('leanpute')||n.includes('canyon')||n.includes('hikespi')||n.includes('cave')) return 'adventure';
  if(n==='work-1.jpg') return 'training';
  if(n.includes('giant banner')||n.includes('giantbanner')) return 'rope';
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

document.querySelectorAll('.project-gallery-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const filter=document.querySelector('.filter[data-filter="'+btn.dataset.projectFilter+'"]');
    if(filter) filter.click();
    document.getElementById('gallery').scrollIntoView({behavior:'smooth',block:'start'});
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
  competency:{
    title:'Workplacement & Competency · Certificates',
    files:[
      ['WPA 2016','certificates/workplace-assessor/wpa%202016.pdf'],
      ['WPA Kemenpar 2016','certificates/workplace-assessor/wpa%20kemenpar%202016.pdf'],
      ['WPA 2019','certificates/workplace-assessor/rcc%20wpa%202019.pdf'],
      ['WPA 2022','certificates/workplace-assessor/rcc%20wpa%202022.pdf'],
      ['WPA 2025','certificates/workplace-assessor/rcc%20wpa%202025.pdf'],
      ['Kompetensi Guiding Level 3','certificates/professional/kompetensi%20guiding%20level%203.pdf']
    ]
  },
  trainer:{
    title:'Trainer & Instructor · Certificates',
    files:[
      ['Pengawasan K3 Bekerja di Ketinggian · 2026','certificates/trainer/Sertifikat%20Pengajar%20-%20Yudha%20Wira%20PB%20%2827-28%20Agustus%202026%29.pdf'],
      ['Sertifikasi TKBT Tingkat 2 · SKM · 2026','certificates/trainer/YUDHA%20WIRA%20PRATAMA%20PRIBADI%20-%20Sertifikasi%20TKBT%20Tingkat%202.pdf'],
      ['Narasumber TKBT Tingkat 2 · Midiatama · 2026','certificates/trainer/sertifikat%20midiatama.pdf']
    ]
  },
  outdoor:{
    title:'Outdoor & Adventure · Certificates',
    files:[
      ['Instruktur HIKESPI','certificates/professional/instruktur%20hikespi.pdf']
    ]
  },
  other:{
    title:'Other Certificates',
    files:[]
  }
};
const certificateViewer=document.getElementById('certificateViewer');
const certificateViewerTitle=document.getElementById('certificateViewerTitle');
const certificateViewerContent=document.getElementById('certificateViewerContent');
const certificateViewerClose=document.getElementById('certificateViewerClose');
document.querySelectorAll('.cert-viewer-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const group=certificateGroups[btn.dataset.certGroup];
    certificateViewerTitle.textContent=en?group.title:(group.title.replace('Certificates','Sertifikat').replace('Workplacement & Competency','Workplacement & Kompetensi').replace('Trainer & Instructor','Pelatih & Instruktur').replace('Outdoor & Adventure','Outdoor & Petualangan').replace('Other','Lainnya'));
    certificateViewerContent.innerHTML=group.files.length?group.files.map(([title,file])=>'<article class="certificate-frame"><h3>'+title+'</h3><iframe src="'+file+'" title="'+title+'" loading="lazy"></iframe></article>').join(''):'<p class="cert-note">Belum ada dokumen pada kategori ini.</p>';
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
