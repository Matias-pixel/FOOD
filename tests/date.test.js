// archivo de prueba: fecha.test.js

// Función para verificar si una fecha es anterior a otra fecha
function fechaEsAnterior(fechaIngresada, fechaActual) {
    const fechaIngresadaObj = new Date(fechaIngresada);
    return fechaIngresadaObj < fechaActual;
  }
  
  // Prueba unitaria
  describe('Prueba de fechaEsAnterior', () => {
    test('Debe retornar true si la fecha ingresada es anterior a la fecha actual', () => {
      // Obtiene la fecha actual
      const fechaActual = new Date();
  
      // Crea una cadena de texto representando una fecha anterior a la fecha actual
      const fechaAnterior = '2022-01-15';
  
      // Llama a la función y verifica el resultado
      const resultado = fechaEsAnterior(fechaAnterior, fechaActual);
      expect(resultado).toBe(true);
    });
  
    test('Debe retornar false si la fecha ingresada es posterior a la fecha actual', () => {
      // Obtiene la fecha actual
      const fechaActual = new Date();
  
      // Crea una cadena de texto representando una fecha posterior a la fecha actual
      const fechaPosterior = '2024-01-15';
  
      // Llama a la función y verifica el resultado
      const resultado = fechaEsAnterior(fechaPosterior, fechaActual);
      expect(resultado).toBe(false);
    });
  
    test('Debe retornar false si la fecha ingresada es igual a la fecha actual', () => {
      // Obtiene la fecha actual
      const fechaActual = new Date();
  
      // Crea una cadena de texto representando una fecha igual a la fecha actual
      const fechaIgual = fechaActual.toISOString().slice(0, 10);
  
      // Llama a la función y verifica el resultado
      const resultado = fechaEsAnterior(fechaIgual, fechaActual);
      expect(resultado).toBe(false);
    });
  });
  