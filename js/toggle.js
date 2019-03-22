var consulta = window.matchMedia('(max-width: 768px)'); 
const $burguerMenu = document.getElementById('burguerMenu');
const $listMenu = document.getElementById('listMenu');
consulta.addListener(mediaQuery);
    
  function mediaQuery() {
    if(consulta.matches) {
      // Si se cumple hagamos estó
      console.log("Se cumplió la condición");
    } else {
      console.log("no se cumplio la condición");
    }
  }

  $burguerMenu.addEventListener('click', (event) => {
    console.log("Me haz presionado, ahora debemos enfocar el menú con un color :)");
    $burguerMenu.classList.toggle('active');
    $listMenu.classList.toggle('active');
    if($burguerMenu.classList == "icon icon-menu active") {
      $burguerMenu.style.backgroundColor = "#188fff";
    } else {
      $burguerMenu.style.backgroundColor = "unset";
    }
    console.log("Auí debemos de poner el menu en modo visible!");
  });