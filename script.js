function showDeity(id, btn) {
  document.querySelectorAll('.deity-card').forEach(c => c.classList.remove('visible'));
  document.getElementById('card-' + id).classList.add('visible');
  document.querySelectorAll('.deity-nav-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function switchTab(deity, panel, btn) {
  const card = document.getElementById('card-' + deity);
  card.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  card.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(deity + '-' + panel).classList.add('active');
  btn.classList.add('active');
}
