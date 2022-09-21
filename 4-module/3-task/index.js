function highlight(table) {
  for (let elem of table.rows) {
    let elChange = elem.cells[3];
    if (elChange.hasAttribute('data-available')) {
      if (elChange.dataset.available == "true") { elem.classList.add('available');}
    } 
    if (elChange.hasAttribute('data-available')) {
      if (elChange.dataset.available == "false") { elem.classList.add('unavailable');}
    } 
    if (!elChange.hasAttribute('data-available')) {elem.setAttribute('hidden', 'hidden');}
    //else {elem.setAttribute('hidden', 'hidden');}

    if (elem.cells[2].textContent == 'm') {elem.classList.add("male");}
    if (elem.cells[2].textContent == 'f') {elem.classList.add("female");}

    if (Number(elem.cells[1].textContent) < 18) {elem.style.textDecoration = "line-through";}
  }

}

