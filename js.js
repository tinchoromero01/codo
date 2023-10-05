window.addEventListener('load', function() {
    var elemento = document.querySelector('.anim');
    elemento.classList.add('animado');
  });


  const toggleTema = () => {
    const body = document.body;
    const dlIcon = document.querySelector("#dl-icon");
    
    if (body.classList.contains("modo-oscuro")) {
      body.classList.remove("modo-oscuro");
      dlIcon.classList.remove("bi-sun-fill");
      dlIcon.classList.add("bi-moon-fill");
    } else {
      body.classList.add("modo-oscuro");
      dlIcon.classList.remove("bi-moon-fill");
      dlIcon.classList.add("bi-sun-fill");
    }
  }