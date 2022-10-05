function toggleText() {
  let div = document.querySelector("#text"); 
  document.querySelector(".toggle-text-button").addEventListener('click', () => { 
    div.hasAttribute('hidden') ? div.removeAttribute('hidden') : div.setAttribute('hidden', 'hidden');
  });
}
