//se crea una funcion donde por 2 prompt se solicita datos numericos para la interaccion//
function simuladorCrecimiento() {
  let poblacionInicial = parseInt(
    prompt("ingrese la poblacion inicial de conejos:")
  );
  let tasaCrecimiento = parseInt(
    prompt("ingrese la tasa de crecimiento(en porcentaje):")
  );
  let resultado = "";
  // alert que aparecera si no se cumplen las condiciones //
  if (isNaN(poblacionInicial) || isNaN(tasaCrecimiento)) {
    alert(
      "ingrese numeros validos para  la poblacion inicial o tasa de crecimiento"
    );
    return;
  }
  // ciclo iterativo con un incremental donde se desarrolla el calculo poblacional a lo largo de  un periodo de tiempo //
  for (let año = 1; año <= 5; año++) {
    let poblacion = poblacionInicial * Math.pow(1 + tasaCrecimiento / 100, año);
    resultado += "Año" + año + ":" + Math.round(poblacion) + "conejos\n";
  }
  //resultado que se muestra por un alert //
  alert("Resultados de la simulacion:\n" + resultado);
}
// se llama a la funcion para dar inicio al simulador //
simuladorCrecimiento();
