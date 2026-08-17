// Toggle the abstract / bibtex panel under a publication entry.
// Usage: <button onclick="toggleExtra('pub1-abstract')">Abstract</button>
function toggleExtra(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle('open');
}

function showTeachingTab(name, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(name + '-courses').classList.add('active');
  btn.classList.add('active');
}

// Highlight the current page in the top nav.
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.topnav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path) link.classList.add('active');
  });
});
