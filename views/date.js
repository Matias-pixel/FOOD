// archivo: tuArchivoDeFunciones.js

// Función para verificar si una fecha es anterior a otra fecha
function fechaEsAnterior(fechaIngresada, fechaActual) {
    return fechaIngresada < fechaActual;
  }
  
  // Exporta la función para que pueda ser utilizada en otros archivos
  module.exports = {
    fechaEsAnterior,
  };

