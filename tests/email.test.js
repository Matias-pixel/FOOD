const validar = require('../validar');

describe('Test para ver si funciona un validador de Correos que uso en otras vistas', ()=>{
    test('Si el siguiente Correo: marchant_matias@gmail.c es correcto entonces -> TRUE', ()=>{
        var correoAvalidar = 'marchant_matias@gmail.com';
        expect (validar.isValid(correoAvalidar)).toBe(true);
    })

    test('Si el siguiente Correo: marchant_matias@gmail.c es incorrecto entonces -> TRUE', ()=>{
        var correoAvalidar = 'marchant_matias@gmail.c';
        expect (validar.isValid(correoAvalidar)).toBe(false);
    })
})