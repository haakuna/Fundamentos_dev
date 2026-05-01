export function printMultiplicacion( base: number, limit: number = 15) {

    if (limit <= 0) {
        throw new Error('El límite debe ser un número positivo');
        limit = 6;
    }

    for (let i = 1; i <= limit; i++) {
        console.log( base, 'x', i, '=', base * i);
    }
}