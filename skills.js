// skills.js

function calculateNumbers(var1, var2) {
    if (typeof var1 !== 'number' || typeof var2 !== 'number') {
        throw new Error('Ambos argumentos deben ser números.');
    }
    return var1 + var2;
}

export { calculateNumbers };
