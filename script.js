/**
 * Cambia la pestaña activa dentro de una tarjeta de deidad específica.
 * @param {string} deity - Nombre de la clase de la deidad (khor, aethel, xal).
 * @param {string} tab - El identificador de la pestaña (lore, mortals, scriptures).
 */
function switchTab(deity, tab) {
  // Localizamos la tarjeta específica
  const card = document.querySelector('.' + deity);
  
  // Desactivamos todos los contenidos de esa tarjeta
  card.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  
  // Removemos las clases de botón activo
  card.querySelectorAll('.tab-btn').forEach(el => {
    el.classList.remove('active-khor', 'active-aethel', 'active-xal');
  });
  
  // Mostramos el contenido seleccionado
  const selectedContent = document.getElementById(deity + '-' + tab);
  if (selectedContent) {
    selectedContent.classList.add('active');
  }
  
  // Activamos el botón correspondiente mediante el índice
  const btns = document.getElementById(deity + '-tabs').querySelectorAll('.tab-btn');
  const tabMap = { 'lore': 0, 'mortals': 1, 'scriptures': 2 };
  
  if (btns[tabMap[tab]]) {
    btns[tabMap[tab]].classList.add('active-' + deity);
  }
}