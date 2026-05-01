let numberOfLines = 1;

export function printLineNumber() {
    console.log('Linea #', numberOfLines);
    numberOfLines ++;
}

// function increaseLineNumber() {
    // numberOfLines += 3;
    // cada ves que se llama a la funcion,se repite la operacion
    // numberOfLines = numberOfLines + 3;
    //numberOfLines ++; // Esto incrementaría en 1, pero queremos en 3
//}

printLineNumber();
printLineNumber();
printLineNumber();
printLineNumber();