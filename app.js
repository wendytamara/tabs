var mostrarOcultar = function(e) {

    var tabSeleccionado = e.target.dataset.tabSeleccionado;
    if (tabSeleccionado == "desayuno") {
        console.log("vamos a desayunar");
    } else if (tabSeleccionado == "almuerzo") {
       console.log("vamos a almorzar");
    } else if (tabSeleccionado== "cena")  {
          console.log("vamos a cenar");
    }
};

var cargarPagina = function() {

    var elementosTabs = document.getElementsByClassName("tabs");
    for (var i = 0; i < elementosTabs.length; i++) {
      elementosTabs[i].addEventListener("click", mostrarOcultar);
    }
};

cargarPagina();
