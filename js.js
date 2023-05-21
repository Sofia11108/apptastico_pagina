toggle.onclick = () => {
    items.classList.toggle("open")
    toggle.classList.toggle("close")
}


window.addEventListener('scroll', function () {
  
  let elementos = document.querySelectorAll('.caracteristicas')
  
    let scrollTop = document.documentElement.scrollTop;  //cantidad de scroll que se hace

    for (let i = 0; i < elementos.length; i++) {
      let alturaElemento = elementos[i].offsetTop;
    
      if(alturaElemento  - 400 < scrollTop) {
        elementos[i].style.opacity = 1;
       
        if (i == 0) {
          elementos[0].classList.add('desdeIzquierda')
        } else if (i == 1) {
          elementos[1].classList.add('desdeAbajo')
        } else if (i == 2) {
          elementos[2].classList.add('desdeDerecha')
        }

      }
    }
})