// Magic particles
(function(){
  var emojis = ['✨','⭐','🌟','💫','🎭','🎪','🦄','🌈','🎠','🎡'];
  var body = document.body;
  setInterval(function(){
    var p = document.createElement('div');
    p.className = 'magic-particle';
    p.textContent = emojis[Math.floor(Math.random()*emojis.length)];
    p.style.left = Math.random()*100+'%';
    p.style.bottom = '0';
    p.style.animationDuration = (4+Math.random()*4)+'s';
    p.style.animationDelay = '0s';
    p.style.fontSize = (0.8+Math.random()*0.8)+'rem';
    body.appendChild(p);
    setTimeout(function(){ p.remove(); }, 8000);
  }, 1200);
})();

// Sparkle stars
(function(){
  var c = document.getElementById('stars');
  for(var i=0;i<60;i++){
    var s = document.createElement('div');
    s.className = 'star';
    var sz = Math.random()*4+2;
    var colors = ['#ffcc00','#ff80c0','#80d0ff','#80ff99','#ff8080'];
    s.style.cssText = 'width:'+sz+'px;height:'+sz+'px;top:'+(Math.random()*100)+'%;left:'+(Math.random()*100)+'%;background:'+colors[Math.floor(Math.random()*colors.length)]+';animation-delay:'+(Math.random()*5)+'s;animation-duration:'+(2+Math.random()*4)+'s';
    c.appendChild(s);
  }
})();

// Nav scroll
var nav=document.getElementById('nav');
window.addEventListener('scroll',function(){nav.classList.toggle('scrolled',window.scrollY>70)});

// Observer
var obs=new IntersectionObserver(function(entries){
  entries.forEach(function(e){if(e.isIntersecting)e.target.classList.add('vis')});
},{threshold:0.05,rootMargin:'0px 0px -30px 0px'});
document.querySelectorAll('.fu').forEach(function(el){obs.observe(el)});
setTimeout(function(){document.querySelectorAll('.fu:not(.vis)').forEach(function(el){el.classList.add('vis')});},1500);

// ── CAROUSEL ──
var track=document.getElementById('carousel-track');
var cardW=295+12;
var manualOffset=0;
var autoTimer=null;
function getTranslateX(el){
  var style=window.getComputedStyle(el);
  var matrix=new WebKitCSSMatrix(style.transform);
  return matrix.m41;
}
function startAuto(){track.classList.add('auto-scroll');track.style.transform='';manualOffset=0;}
function stopAuto(){var cur=getTranslateX(track);track.classList.remove('auto-scroll');track.style.transform='translateX('+cur+'px)';manualOffset=cur;}
function carouselMove(dir){
  clearTimeout(autoTimer);stopAuto();
  manualOffset+=dir*cardW*(-1);
  var half=-(cardW*9);
  if(manualOffset>0) manualOffset=half;
  if(manualOffset<half) manualOffset=0;
  track.style.transition='transform .4s ease';
  track.style.transform='translateX('+manualOffset+'px)';
  autoTimer=setTimeout(function(){track.style.transition='';startAuto();},4000);
}

// ── MODAL ──
var modalShows={
  fantaisies:{name:"Fantaisies et Sorcelleries",teaser:"videos/teasers/teaser-fantaisies.mp4",photos:["images/photos/fantaisies/fantaisies-01.png","images/photos/fantaisies/fantaisies-02.png","images/photos/fantaisies/fantaisies-03.png","images/photos/fantaisies/fantaisies-04.png","images/photos/fantaisies/fantaisies-05.png","images/photos/fantaisies/fantaisies-06.png"]},
  petitchap:{name:"Le Petit Chap\'",teaser:"videos/teasers/teaser-petitchap.mp4",photos:["images/photos/petitchap/chap-01.png","images/photos/petitchap/chap-02.png","images/photos/petitchap/chap-03.png","images/photos/petitchap/chap-04.png","images/photos/petitchap/chap-05.png","images/photos/petitchap/chap-06.png"]},
  raiponce:{name:"Raiponce",teaser:null,photos:["images/photos/raiponce/raiponce-01.png","images/photos/raiponce/raiponce-02.png","images/photos/raiponce/raiponce-03.png","images/photos/raiponce/raiponce-04.png","images/photos/raiponce/raiponce-05.png","images/photos/raiponce/raiponce-06.png"]},
  noel:{name:"Le Merveilleux Noël de M. Silver",teaser:null,photos:["images/photos/noel/silver-01.png","images/photos/noel/silver-02.png","images/photos/noel/silver-03.png","images/photos/noel/silver-04.png","images/photos/noel/silver-05.png","images/photos/noel/silver-06.png"]},
  reves:{name:"Les Rêves du Bois Dormant",teaser:null,photos:["images/photos/bois-dormant/bois-dormant-01.png","images/photos/bois-dormant/bois-dormant-02.png","images/photos/bois-dormant/bois-dormant-03.png","images/photos/bois-dormant/bois-dormant-04.png","images/photos/bois-dormant/bois-dormant-05.png","images/photos/bois-dormant/bois-dormant-06.png"]},
  peterpan:{name:"Peter Pan",teaser:null,photos:["images/photos/peter-pan/peter-pan-01.png","images/photos/peter-pan/peter-pan-02.png","images/photos/peter-pan/peter-pan-03.png","images/photos/peter-pan/peter-pan-04.png","images/photos/peter-pan/peter-pan-05.png","images/photos/peter-pan/peter-pan-06.png"]}
};
var currentShow='';
var currentTab='video';

function openModal(show,tab){
  currentShow=show;
  var overlay=document.getElementById('modal');
  overlay.style.pointerEvents='all';
  switchTab(tab);
  overlay.classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(){
  var overlay=document.getElementById('modal');
  overlay.classList.remove('open');
  overlay.style.pointerEvents='none';
  document.body.style.overflow='';
  var v=document.querySelector('#modal-content video');
  if(v){v.pause();v.src='';}
}
function closeModalOutside(e){if(e.target===document.getElementById('modal')) closeModal();}
function switchTab(tab){
  currentTab=tab;
  document.getElementById('tab-video').classList.toggle('active',tab==='video');
  document.getElementById('tab-photos').classList.toggle('active',tab==='photos');
  renderModal();
}
function renderModal(){
  if(!currentShow) return;
  var show=modalShows[currentShow];
  document.getElementById('modal-title').textContent=show.name;
  var content=document.getElementById('modal-content');
  if(currentTab==='video'){
    if(show.teaser){
      content.innerHTML='<video src="'+show.teaser+'" controls style="width:100%;border-radius:12px;max-height:400px"></video>';
    } else {
      content.innerHTML='<div class="modal-video-placeholder"><div class="icon">🎬</div><p>Le teaser de <strong>'+show.name+'</strong> sera bientôt disponible ici !<br>Retrouvez nos vidéos sur notre page Facebook !</p><a href="https://www.facebook.com/artetfactcie/" target="_blank" style="margin-top:.5rem;padding:.65rem 1.5rem;background:#1877f2;color:white;border-radius:50px;text-decoration:none;font-family:var(--fd);font-size:.82rem;font-weight:700;display:inline-block">Voir sur Facebook</a></div>';
    }
  } else {
    var grid='<div class="modal-photos-grid">';
    show.photos.forEach(function(src){
      grid+='<div style="border-radius:12px;overflow:hidden;aspect-ratio:4/3"><img src="'+src+'" alt="Photo" style="width:100%;height:100%;object-fit:cover;display:block"></div>';
    });
    grid+='</div><p style="text-align:center;margin-top:1rem;font-size:.78rem;color:var(--muted)">📷 Crédit photos : Cassiopeia Photographie</p>';
    content.innerHTML=grid;
  }
}
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeModal();});

// Burger
function toggleMenu(){
  var burger=document.getElementById('burger');
  var links=document.querySelector('.nav-links');
  var open=burger.classList.toggle('open');
  links.classList.toggle('open',open);
  document.body.style.overflow=open?'hidden':'';
}
document.querySelectorAll('.nav-links a').forEach(function(a){
  a.addEventListener('click',function(){
    document.getElementById('burger').classList.remove('open');
    document.querySelector('.nav-links').classList.remove('open');
    document.body.style.overflow='';
  });
});

// Newsletter
function nlSubmit(e){
  e.preventDefault();
  var email=document.getElementById('nl-email').value;
  if(!email) return;
  document.querySelector('.nl-form').style.display='none';
  document.getElementById('nl-success').classList.add('show');
}
