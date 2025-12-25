async function loadVideos(){
  const res = await fetch('../content/videos.json');
  return await res.json();
}
function ytEmbed(id){ return `https://www.youtube.com/embed/${id}`; }
function escapeHtml(str){
  return (str||'').replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'': '&#039;'}[s]));
}
function render(videos){
  const grid = document.querySelector('#videoGrid');
  if(!grid) return;
  grid.innerHTML = videos.map(v => `
    <article class="card video-card fade-in" data-category="${v.category}">
      <div class="video-wrapper">
        <iframe src="${ytEmbed(v.id)}" title="${escapeHtml(v.title)}" frameborder="0" allowfullscreen loading="lazy"></iframe>
      </div>
      <div class="card-body">
        <h3>${escapeHtml(v.title)}</h3>
        <p class="category-tag">${escapeHtml(v.category)}</p>
        <p>${escapeHtml(v.description)}</p>
      </div>
    </article>
  `).join('');
}
async function init(){
  const videos = await loadVideos();
  render(videos);
  const filterSelect = document.querySelector('#categoryFilter');
  if(filterSelect){
    filterSelect.addEventListener('change', () => {
      const selected = filterSelect.value;
      document.querySelectorAll('.video-card').forEach(card => {
        if(!selected || card.dataset.category === selected) card.style.display = '';
        else card.style.display = 'none';
      });
    });
  }
}
document.addEventListener('DOMContentLoaded', init);
