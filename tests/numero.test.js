// archivo de prueba: validacion.test.js

// Función para verificar si un valor no es un número
function noEsNumero(valor) {
    return isNaN(valor);
  }
  
  // Prueba unitaria
  describe('Prueba de noEsNumero', () => {
    test('Debe retornar true si el valor ingresado no es un número', () => {
      // Valor que no es un número
      const valorNoNumero = 'Hola';
  
      // Llama a la función y verifica el resultado
      const resultado = noEsNumero(valorNoNumero);
      expect(resultado).toBe(true);
    });
  
    test('Debe retornar false si el valor ingresado es un número', () => {
      // Valor que es un número
      const valorNumero = 123;
  
      // Llama a la función y verifica el resultado
      const resultado = noEsNumero(valorNumero);
      expect(resultado).toBe(false);
    });
  
    test('Debe retornar true si el valor ingresado es NaN', () => {
      // Valor NaN (Not a Number)
      const valorNaN = NaN;
  
      // Llama a la función y verifica el resultado
      const resultado = noEsNumero(valorNaN);
      expect(resultado).toBe(true);
    });
  });
  