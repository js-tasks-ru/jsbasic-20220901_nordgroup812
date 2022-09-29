function toggleText() {
  let div = document.querySelector("#text"); 
  document.querySelector(".toggle-text-button").addEventListener('click', () => { 
    div.classList.toggle('off'); 
    div.classList.contains('off') ?  div.hidden = true : div.hidden = false; 
  });
}
