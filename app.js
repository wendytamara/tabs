var mostrarOcultar = function(e) {

    var tabSeleccionado = e.target.dataset.tabSeleccionado;
    var desayuno = document.getElementById("desayuno");
    var almuerzo = document.getElementById("almuerzo");
    var cena = document.getElementById("cena");

    if (tabSeleccionado == "desayuno") {
        console.log("vamos a desayunar");
        almuerzo.style.display = "none";
        cena.style.display = "none";
        desayuno.style.display = "block";

    } else if (tabSeleccionado == "almuerzo") {
       console.log("vamos a almorzar");
       cena.style.display = "none";
       desayuno.style.display = "none";
       almuerzo.style.display = "block";

    } else if (tabSeleccionado== "cena")  {
          console.log("vamos a cenar");
          desayuno.style.display = "none";
          almuerzo.style.display = "none";
          cena.style.display = "block";
    }
};

var cargarPagina = function() {

    desayuno.style.display = "none";
    almuerzo.style.display = "none";
    cena.style.display = "none";

    var elementosTabs = document.getElementsByClassName("tabs");
    for (var i = 0; i < elementosTabs.length; i++) {
      elementosTabs[i].addEventListener("click", mostrarOcultar);
    }
};

cargarPagina();
