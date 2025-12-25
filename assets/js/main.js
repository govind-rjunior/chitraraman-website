(function(){
  document.addEventListener('click', (e)=>{
    const a=e.target.closest('a[href^="#"]');
    if(!a) return;
    const id=a.getAttribute('href');
    const el=document.querySelector(id);
    if(!el) return;
    e.preventDefault();
    el.scrollIntoView({behavior:'smooth', block:'start'});
    history.pushState(null,'',id);
  });

  const els=[...document.querySelectorAll('.fade-in')];
  const opts={threshold:.1};
  const onEntry=(entries,observer)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}
    });
  };
  const observer=new IntersectionObserver(onEntry,opts);
  els.forEach(el=>observer.observe(el));
})();
